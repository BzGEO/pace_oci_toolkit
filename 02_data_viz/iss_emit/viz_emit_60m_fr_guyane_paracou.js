/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var aoi_fr_guyane_paracou = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-52.936607054437864, 5.276301367278846],
          [-52.936607054437864, 5.254848777807358],
          [-52.91575019713806, 5.254848777807358],
          [-52.91575019713806, 5.276301367278846]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display NASA's ISS EMIT data over the Paracou area of French Guiana
// source: Emil Cherrington, Ph.D. (University of Alabama in Huntsville / NASA SERVIR)
// contact: eac0021@uah.edu
// last updated: 20.05.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOAD DEPENDENCIES
var a = require('users/servirbz/packages:hyperspectral/emit_pace_misc');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var aoi = aoi_fr_guyane_paracou;

// SPECIFY IMAGE DATES

var date01 = "2023-02-18"; 
var date02 = "2023-04-21";
var date03 = "2023-06-28";  
var date04 = "2023-09-05";  
var date05 = "2023-10-17";
var date06 = "2024-03-03";  
var date07 = "2024-04-18";  
var date08 = "2024-06-16";
var date09 = "2024-10-21";
var date10 = "2025-02-18";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var emit_sr3 = ee.ImageCollection.fromImages([
  a.emit_sr(aoi, date01),
  a.emit_sr(aoi, date02),
  a.emit_sr(aoi, date03),
  a.emit_sr(aoi, date04),
  a.emit_sr(aoi, date05),
  a.emit_sr(aoi, date06),
  a.emit_sr(aoi, date07),
  a.emit_sr(aoi, date08),
  a.emit_sr(aoi, date09),
  a.emit_sr(aoi, date10)
  ]);

print(emit_sr3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DETERMINE DATES OF AVAILABLE IMAGERY

print("EMIT scenes over AOI: ");
print(ee.ImageCollection('NASA/EMIT/L2A/RFL').filterDate("2023-01-01", "2025-12-31").filterBounds(aoi));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY DATA IN MAP VIEWER
Map.centerObject(aoi, 13);

Map.addLayer(a.emit_sr2(aoi,"2023-01-01","2025-04-16"), a.viz1_emit, 'EMIT SR all', 0);
Map.addLayer(a.emit_sr(aoi, date01), a.viz1_emit, 'EMIT SR '+date01, 0);
Map.addLayer(a.emit_sr(aoi, date02), a.viz1_emit, 'EMIT SR '+date02, 0);
Map.addLayer(a.emit_sr(aoi, date03), a.viz1_emit, 'EMIT SR '+date03, 0);
Map.addLayer(a.emit_sr(aoi, date04), a.viz1_emit, 'EMIT SR '+date04, 1);
Map.addLayer(a.emit_sr(aoi, date05), a.viz1_emit, 'EMIT SR '+date05, 0);
Map.addLayer(a.emit_sr(aoi, date06), a.viz1_emit, 'EMIT SR '+date06, 0);
Map.addLayer(a.emit_sr(aoi, date07), a.viz1_emit, 'EMIT SR '+date07, 0);
Map.addLayer(a.emit_sr(aoi, date08), a.viz1_emit, 'EMIT SR '+date08, 0);
Map.addLayer(a.emit_sr(aoi, date09), a.viz1_emit, 'EMIT SR '+date09, 0);
Map.addLayer(a.emit_sr(aoi, date10), a.viz1_emit, 'EMIT SR '+date10, 0);

Map.addLayer(a.ln2(aoi), {palette: ['red']},'AOI', 1);
Map.addLayer(a.ln2(aoi), {palette: ['yellow']},'AOI', 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VISUALIZE HYPERSPECTRAL SIGNATURES USING CHARTS

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var emit = a.coll_emit_sub.filterBounds(aoi)
                          .map(function(i){return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), aoi).values().get(0))})
                          .filter(ee.Filter.eq('any', 1)).getRegion(aoi, 60).slice(1)
                          .map(function(l) {return ee.List(l).slice(4)});

var pt = ee.Geometry.Point([-52.92811, 5.26087]);


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

/*
print(ui.Chart.image.regions(a.emit_sr_full(aoi, date01), aoi, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 29 Jan. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "red"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi, date02), aoi, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 2 Feb. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "coral"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi, date03), aoi, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 23 Feb. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "lightsalmon"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi, date04), aoi, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 23 March 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "burlywood"}}}));
          
print(ui.Chart.image.regions(a.emit_sr_full(aoi, date05), aoi, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 23 March 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "burlywood"}}}));
*/

print(ui.Chart.image.regions(a.emit_sr_full(aoi, date04), aoi, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 5 Sept. 2023',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "limegreen"}}}));

/*
print(ui.Chart.image.regions(a.emit_sr_full(aoi, date06), aoi, ee.Reducer.mean(), 60, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 15 Aug. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "lime"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi, date07), aoi, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 12 Oct. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "olive"}}}));

print(ui.Chart.image.regions(a.emit_sr_full(aoi, date08), aoi, ee.Reducer.mean(), 60, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 2 Dec. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "maroon"}}}));

print(ui.Chart.image.regions(a.emit_sr(aoi, date07), aoi, ee.Reducer.mean(), 60, 'class', a.wl_emit_sub).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - 12 Oct. 2024',
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {
            0: {color: "lime"},
            }}));

print(ui.Chart.image.series(a.coll_emit_rescaled.filterBounds(aoi), aoi, ee.Reducer.mean(), 300)
    .setOptions({title: 'EMIT hyperspectral reflectance: Paint Rock, AL', lineWidth: 1, pointSize: 3}));

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////