// Last updated: 21.07.2025

var a = require('users/servirbz/packages:bz/bz');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var pt1 = ee.Geometry.Point([-88.2492, 18.0491]); // BZ Neulands
var pt2 = ee.Geometry.Point([-89.0237, 17.7459]); // BZ Rio Bravo
var pt3 = ee.Geometry.Point([-89.0088, 16.7739]); // BZ Chiquibul
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Plot the vegetation index (VI) data across the specified region of interest (ROI)

// Plot data from one band - p850, which is in the NIR range
print(ui.Chart.image.series(b.pace_oci_mt_mes.select('b110'), a.bz_poly, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACE OCI - surface reflectance p850 - Belize', lineWidth: 1, pointSize: 3,
    vAxis: {title: 'Reflectance x 10,000'}, series:{0:{color:'limegreen'}}}));

// Plot just one VI - EVI, which essentially measures 'greenness'
print(ui.Chart.image.series(b.pace_oci_mt_global_vi.select('evi'), a.bz_poly, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACE OCI - EVI - Belize', lineWidth: 1, pointSize: 3, vAxis: {title: 'VI x 10,000'}, series:{0:{color:'limegreen'}}}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-88.743, 17.2982, 8);
Map.setOptions('SATELLITE');

Map.addLayer(b.pace_oci_mt_mes_202403, b.viz3_, "PACE OCI SR (4km) - March 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202404, b.viz3_, "PACE OCI SR (4km) - April 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202405, b.viz3_, "PACE OCI SR (4km) - May 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202406, b.viz3_, "PACE OCI SR (4km) - June 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202407, b.viz3_, "PACE OCI SR (4km) - July 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202408, b.viz3_, "PACE OCI SR (4km) - Aug. 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202409, b.viz3_, "PACE OCI SR (4km) - Sept. 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202410, b.viz3_, "PACE OCI SR (4km) - Oct. 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202411, b.viz3_, "PACE OCI SR (4km) - Nov. 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202412, b.viz3_, "PACE OCI SR (4km) - Dec. 2024", 0);
Map.addLayer(b.pace_oci_mt_mes_202501, b.viz3_, "PACE OCI SR (4km) - Jan. 2025", 0);
Map.addLayer(b.pace_oci_mt_mes_202502, b.viz3_, "PACE OCI SR (4km) - Feb. 2025", 0);
Map.addLayer(b.pace_oci_mt_mes_202503, b.viz3_, "PACE OCI SR (4km) - March 2025", 0);
Map.addLayer(b.pace_oci_mt_mes_202504, b.viz3_, "PACE OCI SR (4km) - April 2025", 0);
Map.addLayer(b.pace_oci_mt_mes_202505, b.viz3_, "PACE OCI SR (4km) - May 2025", 0);

Map.addLayer(a.bnds_w2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_w2,{palette: "black"},"Int'l boundaries (black)", 0);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////