// Visualize PACE OCI daily surface reflectance data
// Last updated: 18.07.2025

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-121.678, 40.279, 8);
Map.setOptions('SATELLITE');

Map.addLayer(c.pace_oci_conus_west_20240711, b.viz3, "PACE OCI SR - 11 July 2024", 0);
Map.addLayer(c.pace_oci_conus_west_20240828, b.viz3, "PACE OCI SR - 28 Aug. 2024", 1);

Map.addLayer(a.bnds_admin_l1_ln.clip(a.aoi_us_box), {palette: "azure"}, "Admin boundaries, level 1", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
