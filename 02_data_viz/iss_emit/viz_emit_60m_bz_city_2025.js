// DISPLAY NASA EMIT HYPERSPECTRAL DATA FOR BELIZE
// more info: https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2A_RFL
// Last updated: 15.04.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

var roi = ee.Geometry.Rectangle(-87.64, 15.87, -89.4, 18.54);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var dataset1 = b.emit_sr(roi,"2025-03-20");
var dataset2 = b.emit_sr_full(roi,"2025-03-20");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pt10 = ee.Geometry.Point([-88.06567, 17.49016]); // Forest, mangrove - BZ Drowned Cayes
var pt11 = ee.Geometry.Point([-88.06583, 17.38242]); // Forest, mangrove - BZ Water Caye
var pt12 = ee.Geometry.Point([-88.2166, 17.4893]); // Forest, mangrove - BZ Port Authority
var pt13 = ee.Geometry.Point([-88.5951, 17.4011]); // Forest, broadleaf - BZ central


var pts_mng = ee.FeatureCollection([
  ee.Feature(pt10, {label: 'For_mng_BZ_D_Cayes', class: 1}),
  ee.Feature(pt11, {label: 'For_mng_BZ_W_Caye', class: 2}),
  ee.Feature(pt12, {label: 'For_mng_BZ_Port', class: 3}),
  ee.Feature(pt13, {label: 'For_bl_BZ_central', class: 4}),
  ]);

var list = ["For_mng_BZ_D_Cayes", "For_mng_BZ_W_Caye","For_mng_BZ_Port","For_bl_BZ_central"];
list = ee.List(list);
//print(list);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display spectral reflectance data, w/o data from band bands

print(ui.Chart.image.regions({"image": dataset1, "regions": pts_mng, "reducer": ee.Reducer.mean(), "scale": 100, "xLabels": b.wl_emit_sub
  }).setChartType('LineChart').setOptions({title: 'EMIT hyperspectral reflectance - 20 March 2025',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: {
            0: {color: "green"},
            1: {color: "teal"},
            2: {color: "mediumspringgreen"},
            3: {color: "olive"}
          }
}));

// Display the spectral reflectance including ALL bands

print(ui.Chart.image.regions({"image": dataset2, "regions": pts_mng, "reducer": ee.Reducer.mean(), "scale": 100, "xLabels": b.wl_emit
  //"seriesProperty": {0: {label: 'For_mng_BZ_D_Cayes'}, 1: {label: 'For_mng_BZ_W_Caye'}},
  //"seriesProperty": list,
  //"seriesProperty": ee.List(['For_mng_BZ_D_Cayes', 'For_mng_BZ_W_Caye','For_mng_BZ_Port']),
  }).setChartType('LineChart').setOptions({title: 'EMIT hyperspectral reflectance - 20 March 2025',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: {
            0: {color: "green"},
            1: {color: "teal"},
            2: {color: "mediumspringgreen"},
            3: {color: "olive"}
          }
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.centerObject(roi, 9);
Map.setCenter(-88.3577, 17.497, 12);
Map.addLayer(dataset2, b.viz1_emit, 'EMIT SR', 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////