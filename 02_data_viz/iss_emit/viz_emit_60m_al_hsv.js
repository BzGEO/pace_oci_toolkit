/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var aoi_al = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-88.53911313686014, 32.09611274378956],
          [-88.45122251186014, 30.063907241282006],
          [-87.00102719936014, 30.263380010406248],
          [-87.49541196498514, 30.94420693355463],
          [-84.95757016811014, 30.934783842328194],
          [-84.81474790248514, 32.21702558367845],
          [-85.55083188686014, 35.03408495354879],
          [-88.25346860561014, 35.06106766557723]]]),
    aoi_al_hsv = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-86.86359198196703, 34.8265562961408],
          [-86.86359198196703, 34.53519650476469],
          [-86.41040594681078, 34.53519650476469],
          [-86.41040594681078, 34.8265562961408]]], null, false),
    aoi_al_paint_rock = ee.FeatureCollection("users/servirbz/aoi/other/al_paint_rock_forest_plot");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display NASA's ISS EMIT data over the greater Huntsville, AL metropolitan area
// source: Emil Cherrington, Ph.D. (University of Alabama in Huntsville / NASA SERVIR)
// contact: eac0021@uah.edu
// last updated: 17.04.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOAD DEPENDENCIES
var a = require('users/servirbz/packages:hyperspectral/emit_pace_misc');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SPECIFY IMAGE DATES
var date01 = "2023-12-03";
var date02 = "2024-01-25";
var date03 = "2024-01-29"; // *
var date04 = "2024-02-02";
var date05 = "2024-02-23"; // *
var date06 = "2024-03-23";
var date07 = "2024-04-13"; // *
var date08 = "2024-07-25";
var date09 = "2024-07-29";
var date10 = "2024-08-11";
var date11 = "2024-08-15"; // *
var date12 = "2024-10-12"; // *
var date13 = "2024-12-02";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE SITES
var pt1 = ee.Geometry.Point([-86.72415, 34.67289]); // Urban trees, Edgewater neighborhood (Huntsville / Madison)
var pt2 = ee.Geometry.Point([-86.71316, 34.68263]); // Evergreen trees, near Edgewater
var pt3 = ee.Geometry.Point([-86.52672, 34.69142]); // Monte Sano
var pt4 = ee.Geometry.Point([-86.8314, 34.6585]); // Fallow field in Greenbrier
var pt5 = ee.Geometry.Point([-86.6827, 34.70405]); // Interstate 565
var pt6 = ee.Geometry.Point([-86.70727, 34.63027]); // Marsh
var pt7 = ee.Geometry.Point([-86.70761, 34.58873]); // TN River
var pt8 = ee.Geometry.Point([-86.84455, 34.68069]); // Factory building in Greenbrier

//
var pts = ee.FeatureCollection([
  ee.Feature(pt1, {label: 'For_Edgewater', class: 1}),
  ee.Feature(pt2, {label: 'For_near_Edgewater', class: 2}),
  ee.Feature(pt3, {label: 'For_Monte_Sano', class: 3}),
  ee.Feature(pt4, {label: 'Field', class: 4}),
  ee.Feature(pt5, {label: 'Pavement_565', class: 5}),
  ee.Feature(pt6, {label: 'Marsh', class: 6}),
  ee.Feature(pt7, {label: 'River_TN', class: 7}),
  ee.Feature(pt8, {label: 'Building', class: 8}),
  ]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DETERMINE DATES OF AVAILABLE IMAGERY
/*
print("EMIT scenes over AL: ");
print(ee.ImageCollection('NASA/EMIT/L2A/RFL').filterDate("2023-01-01", "2025-04-16").filterBounds(aoi_al));

print("EMIT scenes over Huntsville: ");
print(ee.ImageCollection('NASA/EMIT/L2A/RFL').filterDate("2023-01-01", "2025-04-16").filterBounds(aoi_al_hsv));

//print(emit_sr(aoi_al,"2023-01-01","2025-04-16"));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY DATA IN MAP VIEWER
//Map.setCenter(-86.6737, 34.7248,11);
Map.centerObject(aoi_al_hsv);

Map.addLayer(a.emit_sr2(aoi_al,"2023-01-01","2025-04-16"), a.viz1_emit, 'EMIT SR all', 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date01), a.viz1_emit, 'EMIT SR '+date01, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date02), a.viz1_emit, 'EMIT SR '+date02, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date03), a.viz1_emit, 'EMIT SR '+date03, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date04), a.viz1_emit, 'EMIT SR '+date04, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date05), a.viz1_emit, 'EMIT SR '+date05, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date06), a.viz1_emit, 'EMIT SR '+date06, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date07), a.viz1_emit, 'EMIT SR '+date07, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date08), a.viz1_emit, 'EMIT SR '+date08, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date09), a.viz1_emit, 'EMIT SR '+date09, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date10), a.viz1_emit, 'EMIT SR '+date10, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date11), a.viz1_emit, 'EMIT SR '+date11, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date12), a.viz1_emit, 'EMIT SR '+date12, 1);
Map.addLayer(a.emit_sr(aoi_al_hsv, date13), a.viz1_emit, 'EMIT SR '+date13, 0);

Map.addLayer(pts, {}, "AL HSV forest sites", 1);
Map.addLayer(a.ln2(aoi_al), {palette: ['red']},'AOI_Alabama', 1);
Map.addLayer(a.ln2(aoi_al_hsv), {palette: ['yellow']},'AOI_Huntsville_AL', 1);
Map.addLayer(a.ln2(aoi_al_paint_rock), {palette: ['lime']},'AOI_Paint_Rock_AL', 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VISUALIZE HYPERSPECTRAL SIGNATURES USING CHARTS
print(ui.Chart.image.regions(a.emit_sr(aoi_al_hsv, date12), pts, ee.Reducer.mean(), 300, 'class', a.wl_emit_sub).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 12 Oct. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {
            0: {color: "green"},
            1: {color: "teal"},
            2: {color: "mediumspringgreen"},
            3: {color: "lime"},
            4: {color: "fuchsia"},
            5: {color: "aqua"},
            6: {color: "blue"},
            7: {color: "red"}
          }}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_hsv, date12), pts, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 12 Oct. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {
            0: {color: "green"},
            1: {color: "teal"},
            2: {color: "mediumspringgreen"},
            3: {color: "lime"},
            4: {color: "fuchsia"},
            5: {color: "aqua"},
            6: {color: "blue"},
            7: {color: "red"}
          }}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////