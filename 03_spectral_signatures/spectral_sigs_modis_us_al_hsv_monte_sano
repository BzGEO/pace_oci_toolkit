/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Last updated: 27.06.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/servirbz/packages:mcd43a4_glob1'); // import MODIS imagery from 2000-2018 dry seasons
var b = require('users/servirbz/packages:sma_std3'); // import SMA package
var c = require('users/servirbz/packages:img_recent'); // imports the img_recent package
var d = require('users/servirbz/packages:bz/bz'); // imports Belize datasets
var e = require('users/servirbz/packages:vi'); // imports VI package
var f = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var roi =  ee.Geometry.Polygon(
        [[[-88.53911313686014, 32.09611274378956],
          [-88.45122251186014, 30.063907241282006],
          [-87.00102719936014, 30.263380010406248],
          [-87.49541196498514, 30.94420693355463],
          [-84.95757016811014, 30.934783842328194],
          [-84.81474790248514, 32.21702558367845],
          [-85.55083188686014, 35.03408495354879],
          [-88.25346860561014, 35.06106766557723]]]);

var pt1 = ee.Geometry.Point([-86.509, 34.7285]); // Monte Sano, Huntsville, AL, USA

var pixel = ee.Geometry.Polygon([[[-86.52668112182616, 34.74669754217014], [-86.52668112182616, 34.71086289997915],
          [-86.4902889099121, 34.71086289997915], [-86.4902889099121, 34.74669754217014]]], null, false);

var t = 'system:time_start';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var mod43_202403 = a.mod43.filterDate('2024-03-09','2024-03-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,3,31).millis());
var mod43_202404 = a.mod43.filterDate('2024-04-09','2024-04-23').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,4,30).millis());
var mod43_202405 = a.mod43.filterDate('2024-05-09','2024-05-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,5,31).millis());
var mod43_202406 = a.mod43.filterDate('2024-06-09','2024-06-23').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,6,30).millis());
var mod43_202407 = a.mod43.filterDate('2024-07-09','2024-07-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,7,31).millis());
var mod43_202408 = a.mod43.filterDate('2024-08-09','2024-08-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,8,31).millis());
var mod43_202409 = a.mod43.filterDate('2024-09-09','2024-09-23').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,9,30).millis());
var mod43_202410 = a.mod43.filterDate('2024-10-09','2024-10-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,10,31).millis());
var mod43_202411 = a.mod43.filterDate('2024-11-09','2024-11-23').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,11,30).millis());
var mod43_202412 = a.mod43.filterDate('2024-12-09','2024-12-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2024,12,31).millis());
var mod43_202501 = a.mod43.filterDate('2025-01-09','2025-01-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2025,1,31).millis());
var mod43_202502 = a.mod43.filterDate('2025-02-09','2025-02-21').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2025,2,28).millis());
var mod43_202503 = a.mod43.filterDate('2025-03-09','2025-03-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2025,3,31).millis());
var mod43_202504 = a.mod43.filterDate('2025-04-09','2025-04-23').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2025,4,30).millis());
var mod43_202505 = a.mod43.filterDate('2025-05-09','2025-05-24').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi).set(t,ee.Date.fromYMD(2025,5,31).millis());

/////

var mod43 = ee.ImageCollection.fromImages([
mod43_202403,mod43_202404,mod43_202405,mod43_202406,mod43_202407,mod43_202408,mod43_202409,mod43_202410,mod43_202411,mod43_202412,
mod43_202501,mod43_202502,mod43_202503,mod43_202504,mod43_202505]).map(function(img){return img.updateMask(img.gte(0)).set(t,img.get(t))});
//print(mod43);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.centerObject(pt1, 9);

Map.addLayer(a.mod43.filterDate('2025-06-09','2025-06-23').median().toInt16().reproject('EPSG:4326', null, 4000).clip(roi), a.pal_mcd43a4, 'MCD43A4_2025-06_4km', 0);
Map.addLayer(a.mod43.filterDate('2025-06-09','2025-06-23').median().toInt16().clip(roi), a.pal_mcd43a4, 'MCD43A4_2025-06_500m', 0);

Map.addLayer(b.sma_(a.mod43.filterDate('2025-06-09','2025-06-23').median()).reproject('EPSG:4326', null, 4000).clip(roi),{}, 'MCD43A4_2025-06_SMA_4km', 0);
Map.addLayer(b.sma_(a.mod43.filterDate('2025-06-09','2025-06-23').median()).clip(roi),{}, 'MCD43A4_2025-06_SMA_500m', 1);

Map.addLayer(f.ln2(pixel), {palette: "red"}, 'Monte Sano - 4km pixel', 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Select only images at a given point
function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt1).values().get(0))}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Filter data to AOI
var pace_04km = mod43.filterBounds(pt1).map(addAny).filter(ee.Filter.eq('any', 1)).getRegion(pt1, 4000).slice(1).map(function(l) {return ee.List(l).slice(4)});
//print(pace_04km);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Visualize monthly spectral signatures

// 4km data
print(ui.Chart.array.values(pace_04km, 1, f.wl_modis_)
      .setOptions({title: 'MODIS MCD43A4 surface reflectance (4km) - Monte Sano, Huntsville, AL', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:400, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:4600}, title: 'Reflectance x 10,000'},
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