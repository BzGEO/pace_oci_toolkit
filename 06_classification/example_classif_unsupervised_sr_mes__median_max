/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var img1 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_sr/mesoamerica_04km/derivs/mes_pace_oci_sr_v3_202403_202502_4km__min_med_max");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// 
// Last updated: 03.04.2025 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');

var viz = {bands: ["b119_1","b110_1","b60_1"], min: [2700,2500,450], max: [3800,3700,1250]};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Unsupervised classification
function unsuper(img, no) {
return img.cluster(ee.Clusterer.wekaKMeans(no).train(img.sample({region:a.roi_mes,scale:4000,numPixels:100})));}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var img2 = img1.updateMask(unsuper(img1, 3).eq(0));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-87.977, 15.204, 7);
Map.centerObject(img1,6);
Map.addLayer(img1, viz, "PACE OCI SR - median", 1);
Map.addLayer(img1.updateMask(unsuper(img1, 3).eq(0)), viz, "PACE OCI SR - median (clipped)", 0);
Map.addLayer(unsuper(img2, 3).randomVisualizer(), {},'Unsupervised classif. (3)', 0);
Map.addLayer(unsuper(img2, 5).randomVisualizer(), {},'Unsupervised classif. (5)', 0);
Map.addLayer(unsuper(img2, 7).randomVisualizer(), {},'Unsupervised classif. (7)', 0);
Map.addLayer(unsuper(img2, 10).randomVisualizer(), {},'Unsupervised classif. (10)', 0);
Map.addLayer(unsuper(img2, 15).randomVisualizer(), {},'Unsupervised classif. (15)', 0);
Map.addLayer(unsuper(img2, 20).randomVisualizer(), {},'Unsupervised classif. (20)', 0);
Map.addLayer(unsuper(img2, 25).randomVisualizer(), {},'Unsupervised classif. (25)', 0);
Map.addLayer(unsuper(img2, 30).randomVisualizer(), {},'Unsupervised classif. (30)', 0);
Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries", 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////