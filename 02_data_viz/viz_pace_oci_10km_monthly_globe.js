/*

Last updated: 01.07.2025
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(19.28, 12.75, 3);
Map.setOptions('SATELLITE');

Map.addLayer(c.pace_oci_mt_global_202403, b.viz3, "PACE OCI SR - March 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202404, b.viz3, "PACE OCI SR - April 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202405, b.viz3, "PACE OCI SR - May 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202406, b.viz3, "PACE OCI SR - June 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202407, b.viz3, "PACE OCI SR - July 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202408, b.viz3, "PACE OCI SR - Aug. 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202409, b.viz3, "PACE OCI SR - Sept. 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202410, b.viz3, "PACE OCI SR - Oct. 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202411, b.viz3, "PACE OCI SR - Nov. 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202412, b.viz3, "PACE OCI SR - Dec. 2024", 0);
Map.addLayer(c.pace_oci_mt_global_202501, b.viz3, "PACE OCI SR - Jan. 2025", 0);
Map.addLayer(c.pace_oci_mt_global_202502, b.viz3, "PACE OCI SR - Feb. 2025", 0);
Map.addLayer(c.pace_oci_mt_global_202503, b.viz3, "PACE OCI SR - March 2025", 0);
Map.addLayer(c.pace_oci_mt_global_202504, b.viz3, "PACE OCI SR - April 2025", 0);
Map.addLayer(c.pace_oci_mt_global_202505, b.viz3, "PACE OCI SR - May 2025*", 0);
Map.addLayer(c.pace_oci_mt_global_202506, b.viz3, "PACE OCI SR - June 2025*", 1);

Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////