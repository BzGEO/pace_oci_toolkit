/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var img1 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20240309_1km"),
    img2 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20240409_1km"),
    img3 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20241119_1km"),
    img4 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20250315_1km"),
    img5 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_01km/mes_pace_oci_sr_v3_20250316_1km");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 10.04.2025

var roi = ee.Geometry.Rectangle(-77, 6, -93, 22);

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

var pt10 = ee.Geometry.Point([-88.06567, 17.49016]); // Forest, mangrove - BZ Drowned Cayes
var pt11 = ee.Geometry.Point([-88.06583, 17.38242]); // Forest, mangrove - BZ Water Caye
var pt12 = ee.Geometry.Point([-87.8067, 17.4795]); // Forest, mangrove - BZ NE Turneffe
var pt13 = ee.Geometry.Point([-88.6166, 15.9599]); // Forest, mangrove - GT Punta de Amabique

/////
var pts = ee.FeatureCollection([
  ee.Feature(pt1, {label: 'For_BL', class: 1}),ee.Feature(pt2, {label: 'For_NL_mosaic', class: 2}),
  ee.Feature(pt3, {label: 'Savanna', class: 3}),ee.Feature(pt4, {label: 'Ag_sugarcane_BZ', class: 4}),
  ee.Feature(pt5, {label: 'Ag_oil_palm', class: 5}),ee.Feature(pt6, {label: 'Ag_sugarcane_GT', class: 6}),
  ee.Feature(pt7, {label: 'Water_inland', class: 7}),ee.Feature(pt8, {label: 'Water_coast', class: 8})]);

var pts2 = ee.FeatureCollection([
  ee.Feature(pt1, {label: 'For_BL', class: 1}), ee.Feature(pt5, {label: 'Ag_oil_palm', class: 2})]);

var pts_mng = ee.FeatureCollection([
  ee.Feature(pt10, {label: 'For_mng_BZ_D_Cayes', class: 1}),ee.Feature(pt11, {label: 'For_mng_BZ_W_Caye', class: 2}),
  ee.Feature(pt12, {label: 'For_mng_BZ_Turneffe', class: 3}),ee.Feature(pt13, {label: 'For_mng_GT_Amatique', class: 4}),
  ee.Feature(pt1, {label: 'For_BL', class: 5})]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Spectral signatures from a single date
print(ui.Chart.image.regions(img1, pts, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 9 March 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

print(ui.Chart.image.regions(img2, pts, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 9 April 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

print(ui.Chart.image.regions(img3, pts, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 11 Nov. 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));
          
print(ui.Chart.image.regions(img4, pts, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 15 March 2025',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

print(ui.Chart.image.regions(img5, pts, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 16 March 2025',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));


////
print(ui.Chart.image.regions(img1, pts_mng, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 9 March 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

print(ui.Chart.image.regions(img2, pts_mng, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 9 April 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

print(ui.Chart.image.regions(img3, pts_mng, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 11 Nov. 2024',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));
          
print(ui.Chart.image.regions(img4, pts_mng, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 15 March 2025',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

print(ui.Chart.image.regions(img5, pts_mng, ee.Reducer.mean(), 1200, 'label', b.wl).setChartType('LineChart')
    .setOptions({title: 'PACE OCI hyperspectral reflectance - 16 March 2025',
          hAxis: b.haxis, vAxis: b.vaxis, lineWidth: 1, pointSize: 4, series: b.series1}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Map.setCenter(-87.977, 15.204, 7);
Map.setCenter(-89.3529, 16.9127, 8);
Map.setOptions('SATELLITE');
Map.addLayer(img1, b.viz3, "PACE OCI SR - 9 March 2024", 0);
Map.addLayer(img2, b.viz3, "PACE OCI SR - 9 April 2024", 0);
Map.addLayer(img3, b.viz3, "PACE OCI SR - 19 Nov. 2024", 0);
Map.addLayer(img4, b.viz3, "PACE OCI SR - 15 March 2025", 1);
Map.addLayer(img5, b.viz3, "PACE OCI SR - 16 March 2025", 0);

Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 0);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 1);
Map.addLayer(pts,{}, 'LC sites', 0);
Map.addLayer(pts_mng,{}, 'Mangrove sites', 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
