/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Last updated: 28.04.2025
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//var pt1 = ee.Geometry.Point([-88.2009, 17.4992]); // BZ City
var pt1 = ee.Geometry.Point([-88.0691, 17.494]); // Drowned Cayes
//var pt1 = ee.Geomestry.Point([-88.9301, 16.9904]); // MPR

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// select only images at a given point
function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt1).values().get(0))}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// filter to AOI
/*
var pace = b.pace_oci_mt_mes.filterBounds(pt1)

pace = pace.map(addAny).filter(ee.Filter.eq('any', 1));

pace = pace.getRegion(pt1, 4000).slice(1).map(function(l) {return ee.List(l).slice(4)});
*/

var pace_04km = b.pace_oci_mt_mes.filterBounds(pt1).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt1, 4000).slice(1).map(function(l) {return ee.List(l).slice(4)});
var pace_10km = b.pace_oci_mt_global.filterBounds(pt1).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt1, 10000).slice(1).map(function(l) {return ee.List(l).slice(4)});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


print(ui.Chart.array.values(pace_04km, 1, a.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (4km)', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:1200}, title: 'Reflectance x 10,000'},
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


print(ui.Chart.array.values(pace_10km, 1, a.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (10km)', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}},
      vAxis: {viewWindow: {min:0, max:1200}, title: 'Reflectance x 10,000'},
      }));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////