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
        [[[-89.31671460915808, 13.768097422779624],
          [-89.31671460915808, 13.640681853015694],
          [-89.04720624734168, 13.640681853015694],
          [-89.04720624734168, 13.768097422779624]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display NASA ISS EMIT data over San Salvador, El Salvador
// Last updated: 16.04.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var b = require('users/bzgeo/examples:_ancillary/mes');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//var aoi = a.sv_main;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var date01 = "2024-01-28"; // NEW error
var date02 = "2024-02-01"; // NEW error
var date03 = "2024-05-17";
var date04 = "2024-10-20";
var date05 = "2024-11-27"; // Ideal scene
var date06 = "2024-12-01"; // NEW error
var date07 = "2024-12-15";
var date08 = "2025-01-26"; // Ideal scene
var date09 = "2025-02-17";
var date10 = "2025-02-25"; // NEW error
var date11 = "2025-04-01";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var dataset = a.emit_sr2(aoi,"2023-01-01","2025-12-31");
var emit0 = ee.ImageCollection('NASA/EMIT/L2A/RFL');

var emit = ee.ImageCollection('NASA/EMIT/L2A/RFL')
        .filterDate("2023-01-01", "2025-12-31")
        .filterBounds(aoi)
        .select(ee.List.sequence(0, 284));

print(emit);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Site for visualizing spectral signatures
var pt1 = ee.Geometry.Point([-89.21873, 13.68617]); // near Colonia San Francisco

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.centerObject(aoi, 13);
//Map.setCenter(-88.3577, 17.497, 7);

//Map.addLayer(emit0, a.viz1b_emit, "EMIT SR all (2)", 0);
Map.addLayer(dataset, a.viz1_emit, 'EMIT SR all', 0);

//Map.addLayer(a.emit_sr(aoi, date01), a.viz1_emit, 'EMIT SR '+date01, 0);
//Map.addLayer(a.emit_sr(aoi, date02), a.viz1_emit, 'EMIT SR '+date02, 0);
Map.addLayer(a.emit_sr(aoi, date03), a.viz1_emit, 'EMIT SR '+date03, 0);
Map.addLayer(a.emit_sr(aoi, date04), a.viz1_emit, 'EMIT SR '+date04, 0);
Map.addLayer(a.emit_sr(aoi, date05), a.viz1_emit, 'EMIT SR '+date05, 0);
//Map.addLayer(a.emit_sr(aoi, date06), a.viz1_emit, 'EMIT SR '+date06, 0);
Map.addLayer(a.emit_sr(aoi, date07), a.viz1_emit, 'EMIT SR '+date07, 0);
Map.addLayer(a.emit_sr(aoi, date08), a.viz1_emit, 'EMIT SR '+date08, 1);
Map.addLayer(a.emit_sr(aoi, date09), a.viz1_emit, 'EMIT SR '+date09, 0);
//Map.addLayer(a.emit_sr(aoi, date10), a.viz1_emit, 'EMIT SR '+date10, 0);
Map.addLayer(a.emit_sr(aoi, date11), a.viz1_emit, 'EMIT SR '+date11, 0);

Map.addLayer(a.ln2(aoi), {palette: ['red']},'AOI_San_Salvador', 1);
Map.addLayer(pt1, {color: 'red'}, 'Site 1', 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////
var emit1 = a.coll_emit.filterBounds(pt1)
                          .map(function(i){return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt1).values().get(0))})
                          .filter(ee.Filter.eq('any', 1)).getRegion(pt1, 60).slice(1)
                          .map(function(l) {return ee.List(l).slice(4)});

var emit2 = a.coll_emit_sub.filterBounds(pt1)
                          .map(function(i){return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt1).values().get(0))})
                          .filter(ee.Filter.eq('any', 1)).getRegion(pt1, 60).slice(1)
                          .map(function(l) {return ee.List(l).slice(4)});
                          
/////
print(ui.Chart.array.values(emit1, 1, a.wl_emit)
      .setOptions({title: 'EMIT surface reflectance', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:380, max:2500}}, vAxis: {viewWindow: {min:0, max:0.50}}}
      ));

print(ui.Chart.array.values(emit2, 1, a.wl_emit_sub)
      .setOptions({title: 'EMIT surface reflectance', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:380, max:2500}}, vAxis: {viewWindow: {min:0, max:0.50}}}
      ));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////