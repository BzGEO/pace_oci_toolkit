/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var img1 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/conus_02km/conus_pace_oci_sr_202508_02km");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//
// Last updated: 03.10.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ROI: Alabama
var roi = ee.FeatureCollection('FAO/GAUL_SIMPLIFIED_500m/2015/level1').filter(ee.Filter.eq('ADM1_NAME', 'Alabama'));


img1 = img1.clip(roi).select(b.bands_oci_orig,b.bands_oci_mod);

var viz = {"bands":['ρ1618', 'ρ0835', 'ρ0662'],"min":0.0155,"max":0.4320};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Unsupervised classification
function unsuper(img, no) {
return img.cluster(ee.Clusterer.wekaKMeans(no).train(img.sample({region:roi,scale:2000,numPixels:100})));}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var img1a = img1.clip(roi) //.updateMask(unsuper(img1, 3).eq(0));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-86.721, 33.043, 7);
Map.addLayer(img1, viz, "PACE OCI SR - median", 1);
Map.addLayer(img1.updateMask(unsuper(img1, 3).eq(0)), viz, "PACE OCI SR - median (clipped)", 0);
Map.addLayer(unsuper(img1, 3).randomVisualizer(), {},'Unsupervised classif. (3)', 0);
Map.addLayer(unsuper(img1a, 5).randomVisualizer(), {},'Unsupervised classif. (5)', 0);
Map.addLayer(unsuper(img1a, 7).randomVisualizer(), {},'Unsupervised classif. (7)', 0);
Map.addLayer(unsuper(img1a, 10).randomVisualizer(), {},'Unsupervised classif. (10)', 0);
Map.addLayer(unsuper(img1a, 15).randomVisualizer(), {},'Unsupervised classif. (15)', 0);
Map.addLayer(unsuper(img1a, 20).randomVisualizer(), {},'Unsupervised classif. (20)', 0);
Map.addLayer(unsuper(img1a, 25).randomVisualizer(), {},'Unsupervised classif. (25)', 0);
Map.addLayer(unsuper(img1a, 30).randomVisualizer(), {},'Unsupervised classif. (30)', 0);
Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries", 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////