/*
Visualize PACE OCI monthly surface reflectance mosaics: Continental USA (CONUS)
Last updated: 18.06.2025
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-97.09, 39.11, 5);
Map.setOptions('HYBRID');

Map.addLayer(c.pace_oci_mt_conus_202403, b.viz3, "PACE OCI SR (4km) - March 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202404, b.viz3, "PACE OCI SR (4km) - April 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202405, b.viz3, "PACE OCI SR (4km) - May 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202406, b.viz3, "PACE OCI SR (4km) - June 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202407, b.viz3, "PACE OCI SR (4km) - July 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202408, b.viz3, "PACE OCI SR (4km) - Aug. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202409, b.viz3, "PACE OCI SR (4km) - Sept. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202410, b.viz3, "PACE OCI SR (4km) - Oct. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202411, b.viz3, "PACE OCI SR (4km) - Nov. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202412, b.viz3, "PACE OCI SR (4km) - Dec. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202501, b.viz3, "PACE OCI SR (4km) - Jan. 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_202502, b.viz3, "PACE OCI SR (4km) - Feb. 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_202503, b.viz3, "PACE OCI SR (4km) - March 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_202504, b.viz3, "PACE OCI SR (4km) - April 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_202505, b.viz3, "PACE OCI SR (4km) - May 2025*", 1);
Map.addLayer(c.nalc_2020, c.viz_nalc, "NA LC (2020)", 0);
Map.addLayer(c.nalc_2020_ag, c.viz_nalc_ag, "NA LC - Ag (2020)", 0);
Map.addLayer(c.mcd64a1_202403_202503, c.viz_mcd64a1, "MODIS burn scars (2024-03 - 2025-03)", 0);

Map.addLayer(a.bnds_admin_l1_ln.clip(a.aoi_us_box), {palette: "azure"}, "Admin boundaries, level 1", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////