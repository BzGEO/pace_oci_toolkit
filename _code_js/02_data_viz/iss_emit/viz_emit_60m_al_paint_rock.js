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

// Display NASA's ISS EMIT data over the Paint Rock, AL area
// source: Emil Cherrington, Ph.D. (University of Alabama in Huntsville / NASA SERVIR)
// contact: eac0021@uah.edu
// last updated: 22.04.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOAD DEPENDENCIES
var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SPECIFY IMAGE DATES

var date01 = "2024-01-29"; // *
var date02 = "2024-02-02";
var date03 = "2024-02-23"; // *
var date04 = "2024-03-23";
var date05 = "2024-04-13"; // *
var date06 = "2024-08-15"; // *
var date07 = "2024-10-12"; // *
var date08 = "2024-12-02";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var emit_sr3 = ee.ImageCollection.fromImages([
  a.emit_sr(aoi_al_paint_rock, date01),
  a.emit_sr(aoi_al_paint_rock, date02),
  a.emit_sr(aoi_al_paint_rock, date03),
  a.emit_sr(aoi_al_paint_rock, date04),
  a.emit_sr(aoi_al_paint_rock, date05),
  a.emit_sr(aoi_al_paint_rock, date06),
  a.emit_sr(aoi_al_paint_rock, date07),
  a.emit_sr(aoi_al_paint_rock, date08)
  ]);

print(emit_sr3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DETERMINE DATES OF AVAILABLE IMAGERY

/*
print("EMIT scenes over Paint Rock: ");
print(ee.ImageCollection('NASA/EMIT/L2A/RFL').filterDate("2023-01-01", "2025-04-22").filterBounds(aoi_al_paint_rock));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY DATA IN MAP VIEWER
Map.setCenter(-86.30657, 34.77241,14);
//Map.centerObject(aoi_al_hsv);

Map.addLayer(a.emit_sr2(aoi_al,"2023-01-01","2025-04-16"), a.viz1_emit, 'EMIT SR all', 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date01), a.viz1_emit, 'EMIT SR '+date01, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date02), a.viz1_emit, 'EMIT SR '+date02, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date03), a.viz1_emit, 'EMIT SR '+date03, 0);
Map.addLayer(a.emit_sr(aoi_al_paint_rock, date04), a.viz1_emit, 'EMIT SR '+date04, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date05), a.viz1_emit, 'EMIT SR '+date05, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date06), a.viz1_emit, 'EMIT SR '+date06, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date07), a.viz1_emit, 'EMIT SR '+date07, 0);
Map.addLayer(a.emit_sr(aoi_al_hsv, date08), a.viz1_emit, 'EMIT SR '+date08, 0);

//Map.addLayer(pts, {}, "AL HSV forest sites", 1);
Map.addLayer(a.ln2(aoi_al), {palette: ['red']},'AOI_Alabama', 0);
//Map.addLayer(a.ln2(aoi_al_hsv), {palette: ['yellow']},'AOI_Huntsville_AL', 1);
Map.addLayer(a.ln2(aoi_al_paint_rock), {palette: ['yellow']},'AOI_Paint_Rock_AL', 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VISUALIZE HYPERSPECTRAL SIGNATURES USING CHARTS

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var emit = a.coll_emit_sub.filterBounds(aoi_al_paint_rock)
                          .map(function(i){return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), aoi_al_paint_rock).values().get(0))})
                          .filter(ee.Filter.eq('any', 1)).getRegion(aoi_al_paint_rock, 60).slice(1)
                          .map(function(l) {return ee.List(l).slice(4)});

var aoi = aoi_al_paint_rock;
var pt = ee.Geometry.Point([-86.30644, 34.77248]);


var emit = emit_sr3.filterBounds(pt)
                          .map(function(i){return i.set('any', i.select(0).mask()
                          .reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                          .filter(ee.Filter.eq('any', 1)).getRegion(pt, 60).slice(1)
                          .map(function(l) {return ee.List(l).slice(4)});


print(ui.Chart.array.values(emit, 1, a.wl_emit_sub)
      .setOptions({title: 'EMIT surface reflectance', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:380, max:2500}},
      //vAxis: {viewWindow: {min:0, max:0.70}}
      }));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_hsv, date01), aoi_al_paint_rock, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 29 Jan. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "red"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_hsv, date02), aoi_al_paint_rock, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 2 Feb. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "coral"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_hsv, date03), aoi_al_paint_rock, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 23 Feb. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "lightsalmon"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_paint_rock, date04), aoi_al_paint_rock, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 23 March 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "burlywood"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_hsv, date05), aoi_al_paint_rock, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 13 April 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "limegreen"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_hsv, date06), aoi_al_paint_rock, ee.Reducer.mean(), 60, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 15 Aug. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "lime"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_hsv, date07), aoi_al_paint_rock, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 12 Oct. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "olive"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi_al_hsv, date08), aoi_al_paint_rock, ee.Reducer.mean(), 60, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 2 Dec. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "maroon"}}}));


/*

print(ui.Chart.image.regions(a.emit_sr(aoi_al_paint_rock, date07), aoi_al_paint_rock, ee.Reducer.mean(), 60, 'class', a.wl_emit_sub).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 12 Oct. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {
            0: {color: "lime"},
            }}));

print(ui.Chart.image.series(a.coll_emit_rescaled.filterBounds(aoi_al_paint_rock), aoi_al_paint_rock, ee.Reducer.mean(), 300)
    .setOptions({title: 'EMIT hyperspectral reflectance: Paint Rock, AL', lineWidth: 1, pointSize: 3}));

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////