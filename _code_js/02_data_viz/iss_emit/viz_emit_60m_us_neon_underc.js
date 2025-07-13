/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var aoi = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-89.57822957949288, 46.26237646088347],
          [-89.57822957949288, 46.202054229232],
          [-89.4415871234382, 46.202054229232],
          [-89.4415871234382, 46.26237646088347]]], null, false),
    underc = ee.FeatureCollection("users/servirbz/aoi/us/us_neon_site_underc_gcs");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Display and analyze NASA ISS EMIT hyperspectral data over
// the University of Notre Dame's Environmental Research Center (UNDERC) NEON site in MI / WI
// Source: Emil A. Cherrington, Ph.D., emil.cherrington@uah.edu / emil.cherrington@nasa.gov
// Last updated: 23.04.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1: LOAD DEPENDENCIES
var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2: EXTRACT IMAGE DATES

// Print a list of the available EMIT images for the UNDERC area of interest
print(a.coll_emit.filterBounds(underc));

// Select dates based on actual availability and cloud cover

/* // The following technically have data, but may nonetheless be unsuitable.
var date01 = "2023-04-15";
var date02 = "2023-04-19";
var date04 = "2023-08-06";
var date05 = "2024-04-12";
var date06 = "2024-04-16";
var date08 = "2024-07-29";
var date11 = "2025-02-12";
*/

// The following is a list of dates with data ranging from semi-cloudy to very useable
var date01 = "2023-06-22"; // *
var date02 = "2024-06-13"; // **
var date03 = "2024-10-11"; //
var date04 = "2024-10-15"; //
var date05 = "2025-04-06"; //

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3: IMAGE CLASSIFICATION

// Unsupervised classification using K means -> pixel scale and number of sample pixels are specified
function unsuper(img, no) {
return img.cluster(ee.Clusterer.wekaKMeans(no).train(img.sample({region:underc,scale:60,numPixels:100})));}

// Classify specific scenes
var img1a = a.emit_sr_full(underc, date01).updateMask(unsuper(a.emit_sr(underc, date01), 7).neq(4));
var img1b = a.emit_sr(underc, date01).updateMask(unsuper(a.emit_sr(underc, date01), 7).neq(4));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4: DISPLAY THE SPECTRA IN THE CONSOLE ON THE RIGHT

print(ui.Chart.image.regions(img1b, underc, ee.Reducer.mean(), 300, 'class', a.wl_emit_sub).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - '+date01,
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "limegreen"}}}));

print(ui.Chart.image.regions(img1a, underc, ee.Reducer.mean(), 300, 'class', a.wl_emit).setChartType('LineChart')
    .setOptions({title: 'EMIT hyperspectral reflectance - '+date01,
          hAxis: a.haxis, vAxis: a.vaxis, lineWidth: 1, series: {0: {color: "limegreen"}}}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5: DISPLAY THE DATA IN THE MAP VIEWER BELOW

Map.centerObject(underc, 13);
Map.setOptions('HYBRID');

Map.addLayer(a.coll_emit, a.viz1b_emit, "EMIT SR all (2)", 0);
Map.addLayer(a.emit_sr(underc, date01), a.viz1_emit, 'EMIT SR '+date01, 1);
Map.addLayer(a.emit_sr(underc, date02), a.viz1_emit, 'EMIT SR '+date02, 0);
Map.addLayer(a.emit_sr(underc, date03), a.viz1_emit, 'EMIT SR '+date03, 0);
Map.addLayer(a.emit_sr(underc, date04), a.viz1_emit, 'EMIT SR '+date04, 0);
Map.addLayer(a.emit_sr(underc, date05), a.viz1_emit, 'EMIT SR '+date05, 0);

//Map.addLayer(img1a, a.viz1_emit, 'EMIT SR* '+date01, 1);

Map.addLayer(unsuper(a.emit_sr(underc, date01), 3).randomVisualizer(), {},'Unsupervised classif. (3)', 0);
Map.addLayer(unsuper(a.emit_sr(underc, date01), 5).randomVisualizer(), {},'Unsupervised classif. (5)', 0);
Map.addLayer(unsuper(a.emit_sr(underc, date01), 7).randomVisualizer(), {},'Unsupervised classif. (7)', 0);
Map.addLayer(unsuper(a.emit_sr(underc, date01), 10).randomVisualizer(), {},'Unsupervised classif. (10)', 0);

Map.addLayer(unsuper(a.emit_sr(underc, date02), 3).randomVisualizer(), {},'Unsupervised classif. (3)', 0);
Map.addLayer(unsuper(a.emit_sr(underc, date02), 5).randomVisualizer(), {},'Unsupervised classif. (5)', 0);
Map.addLayer(unsuper(a.emit_sr(underc, date02), 7).randomVisualizer(), {},'Unsupervised classif. (7)', 0);
Map.addLayer(unsuper(a.emit_sr(underc, date02), 10).randomVisualizer(), {},'Unsupervised classif. (10)', 0);

Map.addLayer(a.ln2(underc), {palette: ['red']}, "Boundary_UNDERC", 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////