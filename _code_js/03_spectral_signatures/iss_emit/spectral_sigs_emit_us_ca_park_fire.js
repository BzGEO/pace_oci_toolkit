/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Last updated: 20.07.2025
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1: LOAD DEPENDENCIES, INCLUDING EMIT / PACE PACKAGE
var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/sample_sites.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2: DEFINE REGION OF INTEREST AND SPECIFIC SITES

var roi = ee.Geometry.Polygon([[[-122.515729296875, 40.64257773046998],[-122.515729296875, 39.50347344333871],
          [-120.867780078125, 39.50347344333871],[-120.867780078125, 40.64257773046998]]], null, false);

var pt = ee.Geometry.Point([-121.7357, 40.067]);
var pt_for =    ee.Geometry.Point([-121.66626, 40.06356]);
var pt_mt =     ee.Geometry.Point([-121.81767, 40.06343]);

var lc = ee.FeatureCollection([ee.Feature(pt_for, {label: 'Vegetated', class: 1}), ee.Feature(pt_mt, {label: 'Non-vegetated', class: 2})]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3: SELECT EMIT SR DATA
//var dataset = a.emit_sr2(roi,"2023-01-01","2025-12-31");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4: DEFINE DATES FOR EXTRACTION OF EMIT DATA

var date1 = "2024-06-22"; // 
var date2 = "2025-05-23"; // 
var date3 = "2025-06-23"; // 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5: PRINT OUT LIST OF AVAILABLE EMIT IMAGES

var emit = a.coll_emit.filterBounds(pt)
        .filterDate("2023-01-01", "2025-12-31");

print(emit);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6: DISPLAY EMIT DATA IN THE MAP VIEWER BELOW

Map.setCenter(-121.7357, 40.067, 10);

Map.addLayer(b.pace_oci_conus_west_20240622, a.viz3, 'PACE OCI SR - '+date1, 0);
Map.addLayer(b.pace_oci_conus_west_20250523, a.viz3, 'PACE OCI SR - '+date2, 0);

Map.addLayer(a.emit_sr(roi, date1), a.viz1_emit, 'EMIT SR - '+date1, 0);
Map.addLayer(a.emit_sr(roi, date2), a.viz1_emit, 'EMIT SR - '+date2, 1);
//Map.addLayer(a.emit_sr(roi, date3), a.viz1_emit, 'EMIT SR '+date3, 0);

Map.addLayer(c.ca_mt_ln2, {palette: "orange"}, 'Non-vegetated site - 1km pixel', 0);
Map.addLayer(c.ca_for_ln2, {palette: "lime"}, 'Vegetated site - 1km pixel', 0);

Map.addLayer(pt_mt, {color:'orange'}, 'Non-vegetated site', 1);
Map.addLayer(pt_for, {color:'lime'}, 'Vegetated site', 1);
Map.addLayer(c.ln2(roi), {palette: "red"}, 'ROI', 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7: PRINT SPECTRAL SIGNATURES IN CONSOLE ON THE RIGHT -> LOCATIONS SPECIFIED ABOVE

function emit_select(loc, date){return ee.ImageCollection('NASA/EMIT/L2A/RFL').filterBounds(loc).select(ee.List.sequence(0, 284))
                                      .filterDate(ee.Date(date), ee.Date(date).advance(1, 'day')).median().multiply(100)}

var emit_20240622 = a.emit_sr(roi, date1);

//
print(ui.Chart.image.regions(emit_select(pt_for, "2024-06-22"), c.ca_for, ee.Reducer.mean(), 60, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 22 June 2024 (pre-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "lime"}, 1: {color: "orange"}}
          }));

print(ui.Chart.image.regions(emit_select(pt_for, "2025-05-23"), c.ca_for, ee.Reducer.mean(), 60, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 23 May 2025 (post-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "green"}, 1: {color: "orange"}}
          }));

print(ui.Chart.image.regions(emit_select(pt_mt, "2024-06-22"), c.ca_mt, ee.Reducer.mean(), 300, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 22 June 2024 (pre-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "orange"}}
          }));

print(ui.Chart.image.regions(emit_select(pt_mt, "2025-05-23"), c.ca_mt, ee.Reducer.mean(), 60, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 23 May 2025 (post-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "lightsalmon"}}
          }));

//

var pace_01km = b.pace_oci_1d_conus_west.filterBounds(pt_for)
                                  .map(function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                                  .filter(ee.Filter.eq('any', 1)).getRegion(pt, 1200).slice(1).map(function(l) {return ee.List(l).slice(4)});

// Spectral signatures from a single date
print(ui.Chart.image.regions(b.pace_oci_conus_west_20240622, lc, ee.Reducer.mean(), 1200, 'label', a.wl_pace).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 22 June 2024 (pre-fire)',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "lime"}, 1: {color: "orange"}}}));

print(ui.Chart.image.regions(b.pace_oci_conus_west_20250523, lc, ee.Reducer.mean(), 1200, 'label', a.wl_pace).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 23 May 2025 (post-fire)',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "green"}, 1: {color: "lightsalmon"}}}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

print(ui.Chart.image.regions(emit_select(pt_for, "2024-06-22"), pt_for, ee.Reducer.mean(), 60, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 22 June 2024 (pre-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "lime"}, 1: {color: "orange"}}
          }));

print(ui.Chart.image.regions(emit_select(pt_for, "2025-05-23"), pt_for, ee.Reducer.mean(), 60, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 23 May 2025 (post-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "green"}, 1: {color: "orange"}}
          }));

print(ui.Chart.image.regions(emit_select(pt_mt, "2024-06-22"), pt_mt, ee.Reducer.mean(), 300, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 22 June 2024 (pre-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "orange"}}
          }));

print(ui.Chart.image.regions(emit_select(pt_mt, "2025-05-23"), pt_mt, ee.Reducer.mean(), 60, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 23 May 2025 (post-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "lightsalmon"}}
          }));

//
print(ui.Chart.image.regions(emit_select(roi, "2025-05-23"), c.ca_sites, ee.Reducer.mean(), 60, 'label', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 22 June 2024 (pre-fire)',
          hAxis: a.haxis, vAxis: a.vaxis1, lineWidth: 1, series: {0: {color: "lime"}, 1: {color: "orange"}}
          }));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////