/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var eco1 = ee.FeatureCollection("projects/sica/compil_ecosistemas/terrestres/cam_ecosys_wb_c2000_v1"),
    eco2 = ee.FeatureCollection("projects/sica/compil_ecosistemas/terrestres/cam_ecosys_wb_c2000_v2");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Visualize PACE OCI monthly surface reflectance mosaics: Mesoamerica
// Last updated: 18.06.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var eco_ln1 = ee.Image().byte().paint({featureCollection:eco1,width:0.1});
var eco_ln2 = ee.Image().byte().paint({featureCollection:eco2,width:0.1});

var pixel = ee.Geometry.Polygon(
        [[[-88.66673037669102, 16.916581043912668],
          [-88.66673037669102, 16.875025392186238],
          [-88.62501666209141, 16.875025392186238],
          [-88.62501666209141, 16.916581043912668]]], null, false);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-85.925, 13.99, 7);
Map.setOptions('SATELLITE');

Map.addLayer(c.pace_oci_mt_mes_202403, b.viz3_, "PACE OCI SR (4km) - March 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202404, b.viz3_, "PACE OCI SR (4km) - April 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202405, b.viz3_, "PACE OCI SR (4km) - May 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202406, b.viz3_, "PACE OCI SR (4km) - June 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202407, b.viz3_, "PACE OCI SR (4km) - July 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202408, b.viz3_, "PACE OCI SR (4km) - Aug. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202409, b.viz3_, "PACE OCI SR (4km) - Sept. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202410, b.viz3_, "PACE OCI SR (4km) - Oct. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202411, b.viz3_, "PACE OCI SR (4km) - Nov. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202412, b.viz3_, "PACE OCI SR (4km) - Dec. 2024", 0);
Map.addLayer(c.pace_oci_mt_mes_202501, b.viz3_, "PACE OCI SR (4km) - Jan. 2025", 0);
Map.addLayer(c.pace_oci_mt_mes_202502, b.viz3_, "PACE OCI SR (4km) - Feb. 2025", 0);
Map.addLayer(c.pace_oci_mt_mes_202503, b.viz3_, "PACE OCI SR (4km) - March 2025", 0);
Map.addLayer(c.pace_oci_mt_mes_202504, b.viz3_, "PACE OCI SR (4km) - April 2025", 0);
Map.addLayer(c.pace_oci_mt_mes_202505, b.viz3_, "PACE OCI SR (4km) - May 2025*", 1);

Map.addLayer(eco_ln1, {palette: ['yellow']},'Ecosystem data, v1', 0);
Map.addLayer(eco_ln2, {palette: ['lime']},'Ecosystem data, v2', 0);
Map.addLayer(b.ln2(pixel), {palette: "green"}, 'Example 4km pixel', 1);

Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////