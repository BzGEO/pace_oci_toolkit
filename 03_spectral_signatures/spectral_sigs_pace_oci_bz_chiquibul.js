/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Last updated: 18.06.2025
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Load requisite packages
var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');
var c = require('users/bzgeo/examples:_ancillary/mes');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Specify point for visualization of hyperspectral data
var pt1 = ee.Geometry.Point([-88.7312, 16.8581]); // northeastern Chiquibul, Belize
var pt2 = ee.Geometry.Point([-89.0635, 16.6069]); // southwestern Chiquibul, Belize
var pt0 = ee.Geometry.Point([-88.8933, 16.7733]); // approx. midpoint between two previous pixels

// Locations of the 4km pixels to be displayed
var pixel1 = ee.Geometry.Rectangle([-88.7182, 16.9608,-88.6822, 16.925]);
var pixel2 = ee.Geometry.Rectangle([-89.0772, 16.6369,-89.0412, 16.6013]);

// Region of Interest (ROI) for Belize
var roi = ee.Geometry.Rectangle(-87.40, 15.80, -89.30, 18.60);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Estimate density of available pixel data
var msk = b.pace_oci_mt_mes.map(b.density).sum().clip(roi);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Select only images at a given point
function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt1).values().get(0))}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Filter data to AOI
var pace_04km_1 = b.pace_oci_mt_mes.filterBounds(pt1).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt1, 4000).slice(1).map(function(l) {return ee.List(l).slice(4)});
var pace_04km_2 = b.pace_oci_mt_mes.filterBounds(pt2).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt2, 4000).slice(1).map(function(l) {return ee.List(l).slice(4)});

var pace_04km_1b = b.pace_oci_mt_mes.filterBounds(pt1).map(b.conv_modis).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt1, 4000).slice(1).map(function(l) {return ee.List(l).slice(4)});



var pace_10km = b.pace_oci_mt_global.filterBounds(pt1).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt1, 10000).slice(1).map(function(l) {return ee.List(l).slice(4)});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Visualize monthly spectral signatures

// 4km data
print(ui.Chart.array.values(pace_04km_1, 1, a.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (4km) - northeastern Chiquibul forest, Belize', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:5000}, title: 'Reflectance x 10,000'},
      series: {
      0: {color: "red"}, // Mar 2024   
      1: {color: "green"}, // Apr 2024
      2: {color: "lime"}, // May 2024
      3: {color: "maroon"}, // Jun 2024
      4: {color: "silver"}, // Jul 2024
      5: {color: "gray"}, // Aug 2024
      6: {color: "crimson"}, // Sep 2024
      7: {color: "olive"}, // Oct 2024
      8: {color: "palegreen"}, // Nov 2024
      9: {color: "orange"}, // Dec 2024
      10: {color: "pink"}, // Jan 2025
      11: {color: "fuchsia"}, // Feb 2025
      12: {color: "saddlebrown"}, // Mar 2025
      13: {color: "orangered"}, // Apr 2025
      14: {color: "hotpink"} // May 2025
      }}));

print(ui.Chart.array.values(pace_04km_2, 1, a.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (4km) - southwestern Chiquibul forest, Belize', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:5000}, title: 'Reflectance x 10,000'},
      series: {
      0: {color: "red"}, // Mar 2024   
      1: {color: "green"}, // Apr 2024
      2: {color: "lime"}, // May 2024
      3: {color: "maroon"}, // Jun 2024
      4: {color: "silver"}, // Jul 2024
      5: {color: "gray"}, // Aug 2024
      6: {color: "crimson"}, // Sep 2024
      7: {color: "olive"}, // Oct 2024
      8: {color: "palegreen"}, // Nov 2024
      9: {color: "orange"}, // Dec 2024
      10: {color: "pink"}, // Jan 2025
      11: {color: "fuchsia"}, // Feb 2025
      12: {color: "saddlebrown"}, // Mar 2025
      13: {color: "orangered"}, // Apr 2025
      14: {color: "hotpink"} // May 2025
      }}));

print(ui.Chart.array.values(pace_04km_1b, 1, a.wl_modis)
      .setOptions({title: 'MODIS surface reflectance (4km) - northeastern Chiquibul forest, Belize', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:5000}, title: 'Reflectance x 10,000'},
      series: {
      0: {color: "red"}, // Mar 2024   
      1: {color: "green"}, // Apr 2024
      2: {color: "lime"}, // May 2024
      3: {color: "maroon"}, // Jun 2024
      4: {color: "silver"}, // Jul 2024
      5: {color: "gray"}, // Aug 2024
      6: {color: "crimson"}, // Sep 2024
      7: {color: "olive"}, // Oct 2024
      8: {color: "palegreen"}, // Nov 2024
      9: {color: "orange"}, // Dec 2024
      10: {color: "pink"}, // Jan 2025
      11: {color: "fuchsia"}, // Feb 2025
      12: {color: "saddlebrown"}, // Mar 2025
      13: {color: "orangered"}, // Apr 2025
      14: {color: "hotpink"} // May 2025
      }}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10km data
/*
print(ui.Chart.array.values(pace_10km, 1, a.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (10km) - eastern Chiquibul forest, Belize', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:5000}, title: 'Reflectance x 10,000'},
      }));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Show sample point on map viewer below
Map.centerObject(pt0, 10);
Map.setOptions('HYBRID');

Map.addLayer(b.pace_mes(0), a.viz3, "PACE OCI SR (4km) - March 2024", 0);
Map.addLayer(b.pace_mes(1), a.viz3, "PACE OCI SR (4km) - April 2024", 0);
Map.addLayer(b.pace_mes(2), a.viz3, "PACE OCI SR (4km) - May 2024", 0);
Map.addLayer(b.pace_mes(3), a.viz3, "PACE OCI SR (4km) - June 2024", 0);
Map.addLayer(b.pace_mes(4), a.viz3, "PACE OCI SR (4km) - July 2024", 0);
Map.addLayer(b.pace_mes(5), a.viz3, "PACE OCI SR (4km) - Aug. 2024", 0);
Map.addLayer(b.pace_mes(6), a.viz3, "PACE OCI SR (4km) - Sept. 2024", 0);
Map.addLayer(b.pace_mes(7), a.viz3, "PACE OCI SR (4km) - Oct. 2024", 0);
Map.addLayer(b.pace_mes(8), a.viz3, "PACE OCI SR (4km) - Nov. 2024", 0);
Map.addLayer(b.pace_mes(9), a.viz3, "PACE OCI SR (4km) - Dec. 2024", 0);
Map.addLayer(b.pace_mes(10), a.viz3, "PACE OCI SR (4km) - Jan. 2025", 0);
Map.addLayer(b.pace_mes(11), a.viz3, "PACE OCI SR (4km) - Feb. 2025", 0);
Map.addLayer(b.pace_mes(12), a.viz3, "PACE OCI SR (4km) - March 2025", 0);
Map.addLayer(b.pace_mes(13), a.viz3, "PACE OCI SR (4km) - April 2025", 0);
Map.addLayer(b.pace_mes(14), a.viz3, "PACE OCI SR (4km) - May 2025*", 0);

Map.addLayer(msk,{min:0,max:15,opacity:0.65, palette:['black','blue','red']}, "Pixel density (PACE OCI SR monthly)", 1);

Map.addLayer(c.cam_bnds_ln, {palette: ['white']}, "Int'l Boundaries", 1);
Map.addLayer(c.pa_bz_ln, {palette: ['lime']}, "Prot. Areas", 1);

Map.addLayer(a.ln2(pixel1), {palette: "lime"}, 'Example 4km pixel (1)', 1);
Map.addLayer(a.ln2(pixel2), {palette: "yellow"}, 'Example 4km pixel (2)', 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////