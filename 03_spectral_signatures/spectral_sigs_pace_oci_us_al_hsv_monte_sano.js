/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Last updated: 18.06.2025
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Load requisite packages
var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Specify point for visualization of hyperspectral data
var pt1 = ee.Geometry.Point([-86.509, 34.7285]); // Monte Sano, Huntsville, AL, USA

var pixel_monte_sano = ee.Geometry.Polygon([[[-86.52668112182616, 34.74669754217014], [-86.52668112182616, 34.71086289997915],
          [-86.4902889099121, 34.71086289997915], [-86.4902889099121, 34.74669754217014]]], null, false);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Select only images at a given point
function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt1).values().get(0))}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Filter data to AOI
var pace_04km = b.pace_oci_mt_conus.filterBounds(pt1).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt1, 4000).slice(1).map(function(l) {return ee.List(l).slice(4)});
var pace_10km = b.pace_oci_mt_global.filterBounds(pt1).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt1, 10000).slice(1).map(function(l) {return ee.List(l).slice(4)});

print(pace_04km);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Visualize monthly spectral signatures

// 4km data
print(ui.Chart.array.values(pace_04km, 1, a.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (4km) - Monte Sano, Huntsville, AL', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:4500}, title: 'Reflectance x 10,000'},
      series: {
      0: {color: "red"},   
      1: {color: "green"},  
      2: {color: "lime"}, 
      3: {color: "maroon"},
      4: {color: "silver"},
      5: {color: "gray"},
      6: {color: "crimson"},
      7: {color: "olive"},
      8: {color: "palegreen"},
      9: {color: "orange"},
      10: {color: "pink"},
      11: {color: "fuchsia"},
      12: {color: "red"}}  
      }));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10km data
print(ui.Chart.array.values(pace_10km, 1, a.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (10km) - Monte Sano, Huntsville, AL', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:4500}, title: 'Reflectance x 10,000'},
      }));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Show sample point on map viewer below
Map.centerObject(pt1, 13);
Map.setOptions('HYBRID');
Map.addLayer(a.ln2(pixel_monte_sano), {palette: "green"}, 'Monte Sano - 4km pixel', 1);
Map.addLayer(pt1, {color:'green'}, 'Monte Sano, Huntsville, AL', 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////