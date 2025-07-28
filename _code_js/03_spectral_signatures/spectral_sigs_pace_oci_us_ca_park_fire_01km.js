/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var aoi_1 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-121.67132698364257, 40.068681530028066],
          [-121.67132698364257, 40.05771142879132],
          [-121.66068397827148, 40.05771142879132],
          [-121.66068397827148, 40.068681530028066]]], null, false),
    aoi_2 = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-121.82238899536132, 40.06815605647857],
          [-121.82238899536132, 40.05764573424222],
          [-121.81123100585937, 40.05764573424222],
          [-121.81123100585937, 40.06815605647857]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Visualize PACE OCI daily surface reflectance data
// Last updated: 21.07.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY CHART OF SPECTRAL SIGNATURES IN CONSOLE ON THE RIGHT ->
// California 2024 Park Fire burn scar data
// more info: https://en.wikipedia.org/wiki/Park_Fire

var pt_for =    ee.Geometry.Point([-121.66626, 40.06356]); // -121.6702, 40.0677
var pt_mt =     ee.Geometry.Point([-121.81767, 40.06343]); // -121.8157, 40.0661

var lc = ee.FeatureCollection([ee.Feature(pt_for, {label: 'Vegetated', class: 1}), ee.Feature(pt_mt, {label: 'Non-vegetated', class: 2})]);

/////

var pt = pt_for;

var pace_01km = c.pace_oci_1d_conus_west.filterBounds(pt)
                                  .map(function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                                  .filter(ee.Filter.eq('any', 1)).getRegion(pt, 1200).slice(1).map(function(l) {return ee.List(l).slice(4)});

// Spectral signatures from a single date
print(ui.Chart.image.regions(c.pace_oci_conus_west_20240711, lc, ee.Reducer.mean(), 1200, 'label', b.wl_pace).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 11 July 2024 (pre-fire)',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, series: {0: {color: "lime"}, 1: {color: "orange"}}}));

print(ui.Chart.image.regions(c.pace_oci_conus_west_20240828, lc, ee.Reducer.mean(), 1200, 'label', b.wl_pace).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 28 Aug. 2024 (post-fire)',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, series: {0: {color: "green"}, 1: {color: "lightsalmon"}}}));

// 
print(ui.Chart.array.values(pace_01km, 1, b.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (1.2 km) - California Park Fire - Vegetated side', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:3000}, title: 'Reflectance x 10,000'},
      series: {0: {color: "lime"}, 1: {color: "green"}}
      }));

/////

var pt = pt_mt;

var pace_01km = c.pace_oci_1d_conus_west.filterBounds(pt)
                                  .map(function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                                  .filter(ee.Filter.eq('any', 1)).getRegion(pt, 1200).slice(1).map(function(l) {return ee.List(l).slice(4)});

// 
print(ui.Chart.array.values(pace_01km, 1, b.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (1.2 km) - California Park Fire - Non-vegetated side', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:3000}, title: 'Reflectance x 10,000'},
      series: {0: {color: "orange"}, 1: {color: "lightsalmon"}}
      }));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-121.7357, 40.067, 9);
Map.setOptions('SATELLITE');

Map.addLayer(c.pace_oci_conus_west_20240622, b.viz3, "PACE OCI SR - 22 June 2024", 0);
Map.addLayer(c.pace_oci_conus_west_20240711, b.viz3, "PACE OCI SR - 11 July 2024", 0);
Map.addLayer(c.pace_oci_conus_west_20240828, b.viz3, "PACE OCI SR - 28 Aug. 2024", 1);
Map.addLayer(c.pace_oci_conus_west_20250523, b.viz3, "PACE OCI SR - 23 May 2025", 0);

Map.addLayer(c.mcd64a1_202403_202503, c.viz_mcd64a1, "MODIS burn scars (2024-03 - 2025-03)", 1);

Map.addLayer(a.bnds_admin_l1_ln.clip(a.aoi_us_box), {palette: "azure"}, "Admin boundaries, level 1", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

Map.addLayer(pt_mt, {color:'orange'}, 'Non-vegetated side', 1);
Map.addLayer(pt_for, {color:'lime'}, 'Vegetated side', 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
