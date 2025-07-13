/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var pixel_monte_sano = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-86.52668112182616, 34.74669754217014],
          [-86.52668112182616, 34.71086289997915],
          [-86.4902889099121, 34.71086289997915],
          [-86.4902889099121, 34.74669754217014]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 30.06.2025

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pt1 = ee.Geometry.Point([-86.509, 34.7285]); // Monte Sano, Huntsville, AL, USA <= can be modified

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Plot the vegetation index data across the specified region of interest (ROI)

// Plot just one VI (EVI) - monthly
print(ui.Chart.image.series(c.pace_oci_mt_global_vi.select(['evi'],['EVI']), pt1, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACI OCI - VIs - Monte Sano, AL', lineWidth: 1, pointSize: 3, vAxis: {title: 'VI x 10,000'}, series:{0:{color:'limegreen'}}}));

// Plot all 10 available VIs - monthly
print(ui.Chart.image.series(c.pace_oci_mt_global_vi, pt1, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACI OCI - VIs - Monte Sano, AL', lineWidth: 1, pointSize: 3, vAxis: {title: 'VI x 10,000'}, series:{0:{color:'limegreen'}}}));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY DATA ON MAP VIEWER BELOW

Map.setOptions('HYBRID');
Map.centerObject(pt1, 13);

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

Map.addLayer(a.bnds_admin_l2_ln.clip(a.aoi_us_box), {palette: "azure"}, "Admin boundaries, level 2", 1);
Map.addLayer(b.ln2(pixel_monte_sano), {palette: "lime"}, 'Monte Sano - 4km pixel', 1);
Map.addLayer(pt1, {color:'07870e'}, 'Monte Sano - center of 4km pixel', 0);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////