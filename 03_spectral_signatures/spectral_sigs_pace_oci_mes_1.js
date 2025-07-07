/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var img01 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202403_4km"),
    img02 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202404_4km"),
    img03 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202405_4km"),
    img04 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202406_4km"),
    img05 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202407_4km"),
    img06 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202408_4km"),
    img07 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202409_4km"),
    img08 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202410_4km"),
    img09 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202411_4km"),
    img10 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202412_4km"),
    img11 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202501_4km"),
    img12 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/mes_pace_oci_sr_202502x_4km");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 02.04.2025

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// -89.4035, 17.6403
var pt0 = ee.Geometry.Point([-88.2313, 18.0629]); // Ag - Neulands pastures
var pt1 = ee.Geometry.Point([-88.6872, 16.8886]); // Forest - Eastern Chiquibul
var pt2 = ee.Geometry.Point([-88.9426, 16.9767]); // Forest + grassland - MPR
var pt3 = ee.Geometry.Point([-88.4807, 16.6036]); // Savanna - Southern Coastal Plain
var pt4 = ee.Geometry.Point([-88.6954, 17.8494]); // Ag - OW sugarcane
var pt5 = ee.Geometry.Point([-90.1473, 16.1457]); // Ag - GT oil palm
var pt6 = ee.Geometry.Point([-91.4796, 14.1029]); // Ag - GT sugarcane
var pt7 = ee.Geometry.Point([-89.813, 16.9776]); // Water - Lake Peten Itza
var pt8 = ee.Geometry.Point([-88.1813, 17.2225]); // Water - coast SE of BZ City
var pt9 = ee.Geometry.Point([-89.4035, 17.6403]); // Forested wetland - NE Peten, Guatemala

/////
var pts = ee.FeatureCollection([
  ee.Feature(pt1, {label: 'For_BL', class: 1}),ee.Feature(pt2, {label: 'For_NL_mosaic', class: 2}),
  ee.Feature(pt3, {label: 'Savanna', class: 3}),ee.Feature(pt4, {label: 'Ag_sugarcane_BZ', class: 4}),
  ee.Feature(pt5, {label: 'Ag_oil_palm', class: 5}),ee.Feature(pt6, {label: 'Ag_sugarcane_GT', class: 6}),
  ee.Feature(pt7, {label: 'Water_inland', class: 7}),ee.Feature(pt8, {label: 'Water_coast', class: 8})]);

var pts2 = ee.FeatureCollection([
  ee.Feature(pt1, {label: 'For_BL', class: 1}), ee.Feature(pt5, {label: 'Ag_oil_palm', class: 2})]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var sr01 = img01.updateMask(img01.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,3,15).millis());
var sr02 = img02.updateMask(img02.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,4,15).millis());
var sr03 = img03.updateMask(img03.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,5,15).millis());
var sr04 = img04.updateMask(img04.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,6,15).millis());
var sr05 = img05.updateMask(img05.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,7,15).millis());
var sr06 = img06.updateMask(img06.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,8,15).millis());
var sr07 = img07.updateMask(img07.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,9,15).millis());
var sr08 = img08.updateMask(img08.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,10,15).millis());
var sr09 = img09.updateMask(img09.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,11,15).millis());
var sr10 = img10.updateMask(img10.gt(0)).set('system:time_start',ee.Date.fromYMD(2024,12,15).millis());
var sr11 = img11.updateMask(img11.gt(0)).set('system:time_start',ee.Date.fromYMD(2025,1,31).millis());
var sr12 = img12.updateMask(img12.gt(0)).set('system:time_start',ee.Date.fromYMD(2025,2,14).millis());

/////
var sr = ee.ImageCollection.fromImages([sr01,sr02,sr03,sr04,sr05,sr06,sr07,sr08,sr09,sr10,sr11,sr12])
        .map(function(img){return img.multiply(10000).toInt16().reproject('EPSG:4326', null, 4000)
        .set('system:time_start',img.get('system:time_start'))});

//print(sr);
// print(sr.select([27,43,60,110,119,120]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time series (12 months) of 6 spectral bands corresponding to Landsat-8 OLI sensor
print(ui.Chart.image.series(sr.select([26,42,59,109,118,119]), pt0, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACE OCI hyperspectral reflectance - BZ Neulands', vAxis: b.vaxis, lineWidth: 1, pointSize: 3,
    series: {
      3: {color: "blue"},   // Blue
      4: {color: "green"},  // Green
      5: {color: "red"},    // Red
      0: {color: "maroon"}, // NIR
      1: {color: "silver"}, // SWIR-1
      2: {color: "gray"}    // SWIR-2
    }}));

// Time series (12 months) of derived NDVI
print(ui.Chart.image.series(sr.map(b.ndvi), pt0, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACE OCI NDVI - BZ Neulands', vAxis: {title: 'NDVI x 10,000'}, lineWidth: 1, pointSize: 3, series: {0: {color: "lime"}}}));

/*
var vi_x = cx1.merge(cx2).merge(cx3);
print(vi_x)
*/

// Time series (12 months) of derived CAR, CIRE, mARI
print(ui.Chart.image.series(sr.map(b.car_cire_mari), pt0, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACE OCI VIs - BZ Neulands', vAxis: {title: 'VI x 10,000'}, lineWidth: 1, pointSize: 3, series: {0: {color: "lime"}}}));


print(ui.Chart.image.series(sr.map(b.car_cire_mari), pt9, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACE OCI VIs - NE Peten, GT', vAxis: {title: 'VI x 10,000'}, lineWidth: 1, pointSize: 3, series: {0: {color: "lime"}}}));


// Time series (12 months) of derived NDVI
print(ui.Chart.image.seriesByRegion(
     sr.map(b.ndvi),
     pts, ee.Reducer.mean(), 'NDVI', 4000, 'system:time_start', 'label')
         .setChartType('ScatterChart')
         .setOptions({title: 'PACE OCI NDVI', vAxis: {title: 'NDVI x 10,000'}, lineWidth: 1, pointSize: 4, series: b.series1}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr01.multiply(10000), pts, ee.Reducer.mean(), 4000, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - March 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

print(ui.Chart.image.regions(sr02.multiply(10000), pts, ee.Reducer.mean(), 4000, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - April 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr01.select(ee.List.sequence(0,121,1))
    .multiply(10000), pts2, ee.Reducer.mean(), 4000, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - March 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series2}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr01.select(ee.List.sequence(0,116,1))
    .multiply(10000), pts2, ee.Reducer.mean(), 4000, 'label', b.wl2).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - March 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series2}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr02.select(ee.List.sequence(0,121,1))
    .multiply(10000), pts2, ee.Reducer.mean(), 4000, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - April 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series2}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr02.select(ee.List.sequence(0,116,1))
    .multiply(10000), pts2, ee.Reducer.mean(), 4000, 'label', b.wl2).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - April 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series2}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr03.select(ee.List.sequence(0,116,1))
    .multiply(10000), pts2, ee.Reducer.mean(), 4000, 'label', b.wl2).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - May 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series2}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr04.select(ee.List.sequence(0,116,1))
    .multiply(10000), pts2, ee.Reducer.mean(), 4000, 'label', b.wl2).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - June 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series2}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr05.select(ee.List.sequence(0,116,1))
    .multiply(10000), pts2, ee.Reducer.mean(), 4000, 'label', b.wl2).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - July 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series2}));

// Spectral signatures from a single date
print(ui.Chart.image.regions(sr06.select(ee.List.sequence(0,116,1))
    .multiply(10000), pts2, ee.Reducer.mean(), 4000, 'label', b.wl2).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - Aug. 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series2}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Map.setCenter(-88.6482, 17.2671, 8);
Map.setCenter(-87.977, 15.204, 8);
Map.setCenter(-85.925, 13.99, 6);
Map.addLayer(sr01, b.viz3_, "PACE OCI SR - March 2024", 1);
Map.addLayer(sr02, b.viz3_, "PACE OCI SR - April 2024", 0);
Map.addLayer(sr03, b.viz3_, "PACE OCI SR - May 2024", 0);
Map.addLayer(sr04, b.viz3_, "PACE OCI SR - June 2024", 0);
Map.addLayer(sr05, b.viz3_, "PACE OCI SR - July 2024", 0);
Map.addLayer(sr06, b.viz3_, "PACE OCI SR - Aug. 2024", 0);
Map.addLayer(sr07, b.viz3_, "PACE OCI SR - Sept. 2024", 0);
Map.addLayer(sr08, b.viz3_, "PACE OCI SR - Oct. 2024", 0);
Map.addLayer(sr09, b.viz3_, "PACE OCI SR - Nov. 2024", 0);
Map.addLayer(sr10, b.viz3_, "PACE OCI SR - Dec. 2024", 0);
Map.addLayer(sr11, b.viz3_, "PACE OCI SR - Jan. 2025", 0);
Map.addLayer(sr12, b.viz3_, "PACE OCI SR - Feb. 2025", 0);

Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 0);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 1);
Map.addLayer(pts,{}, 'LC sites', 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var sr2 = ee.Image.cat([sr01,sr02,sr03,sr04,sr05,sr06,sr07,sr08,sr09,sr10,sr11,sr12])
        .multiply(10000).toInt16().reproject('EPSG:4326', null, 4000);

/*

Export.image.toAsset({image:sr12.clip(sr12.geometry().bounds()),description:'export_ee_pace_orig_4km',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mes_pace_oci_sr_202502x_4km',
scale:4638.312214700219,region:sr12.geometry().bounds(), crs: 'EPSG:4326'});

Export.image.toAsset({image:sr2.clip(sr2.geometry().bounds()),description:'export_ee_pace_orig_4km',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mes_pace_oci_sr_202403_202502_4km',
scale:4000,region:sr2.geometry().bounds(), crs: 'EPSG:4326'});
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////