/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var eco1 = ee.FeatureCollection("projects/sica/compil_ecosistemas/terrestres/cam_ecosys_wb_c2000_v1"),
    eco2 = ee.FeatureCollection("projects/sica/compil_ecosistemas/terrestres/cam_ecosys_wb_c2000_v2");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Visualize PACE OCI monthly surface reflectance mosaics
// Last updated: 18.06.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var eco_ln1 = ee.Image().byte().paint({featureCollection:eco1,width:0.1});
var eco_ln2 = ee.Image().byte().paint({featureCollection:eco2,width:0.1});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-87.8948, 16.4141, 8);
Map.setOptions('SATELLITE');

Map.addLayer(c.pace_oci_mes_20240309, b.viz3, "PACE OCI SR - 9 March 2024", 0);
Map.addLayer(c.pace_oci_mes_20240409, b.viz3, "PACE OCI SR - 9 April 2024", 0);
Map.addLayer(c.pace_oci_mes_20241119, b.viz3, "PACE OCI SR - 19 Nov. 2024", 0);
Map.addLayer(c.pace_oci_mes_20250315, b.viz3, "PACE OCI SR - 15 March 2025", 1);
Map.addLayer(c.pace_oci_mes_20250316, b.viz3, "PACE OCI SR - 16 March 2025", 0);
Map.addLayer(c.pace_oci_mes_202504, b.viz3, "PACE OCI SR - April 2025", 0);

Map.addLayer(eco_ln1, {palette: ['yellow']},'Ecosystem data, v1', 1);
Map.addLayer(eco_ln2, {palette: ['yellow']},'Ecosystem data, v2', 0);

Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
