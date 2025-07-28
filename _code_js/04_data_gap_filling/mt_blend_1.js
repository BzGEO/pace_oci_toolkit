/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = ee.FeatureCollection("projects/bz-sdg/aoi/aoi_globe");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 14.07.2025
// blend src:
// https://code.earthengine.google.com/430deaa9c29b16e993ffcd4f6e88830b
// https://code.earthengine.google.com/?scriptPath=users%2Fservirbz%2Fservir_bz_prototypes%3Abz_mcd43a4_mt_mosaics_t3

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var img1 = a.pace_oci_8d_global_ndvi;
var img2 = a.pace_oci_8d_global_evi;
var img3 = a.pace_oci_8d_global_cci;
var img4 = a.pace_oci_8d_global_cire;
var img5 = a.pace_oci_8d_global_car;
var img6 = a.pace_oci_8d_global_mari;
var img7 = a.pace_oci_8d_global_pri;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FXN 1: Blend data to remove data gaps
function temp_blend(coll) {

function mt_blend(date) {

var img1 = coll.filterDate(ee.Date(date).advance(-15, 'day'),ee.Date(date).advance(15, 'day')).median().toInt16();
var img2 = coll.filterDate(ee.Date(date).advance(-45, 'day'),ee.Date(date).advance(45, 'day')).median().toInt16();
var img3 = coll.filterDate(ee.Date(date).advance(-75, 'day'),ee.Date(date).advance(75, 'day')).median().toInt16();
var img4 = coll.filterDate(ee.Date(date).advance(-105, 'day'),ee.Date(date).advance(105, 'day')).median().toInt16();
var img5 = coll.filterDate(ee.Date(date).advance(-135, 'day'),ee.Date(date).advance(135, 'day')).median().toInt16();

// This stretches a calendar year from 4 August of the previous year to 29 April of the following year.
return img5.blend(img4).blend(img3).blend(img2).blend(img1).clip(roi);

}

var vi_202403 = mt_blend("2024-03-16");
var vi_202404 = mt_blend("2024-04-15");
var vi_202405 = mt_blend("2024-05-16");
var vi_202406 = mt_blend("2024-06-15");
var vi_202407 = mt_blend("2024-07-16");
var vi_202408 = mt_blend("2024-08-16");
var vi_202409 = mt_blend("2024-09-15");
var vi_202410 = mt_blend("2024-10-16");
var vi_202411 = mt_blend("2024-11-15");
var vi_202412 = mt_blend("2024-12-16");
var vi_202501 = mt_blend("2025-01-16");
var vi_202502 = mt_blend("2025-02-14");
var vi_202503 = mt_blend("2025-03-16");
var vi_202504 = mt_blend("2025-04-15");
var vi_202505 = mt_blend("2025-05-16");
var vi_202506 = mt_blend("2025-06-15");

// This returns a single image with twelve bands representing twelve months, but numbered from March 2024 to June 2025
return ee.Image.cat([
  vi_202403, vi_202404, vi_202405, vi_202406, vi_202407, vi_202408, vi_202409, vi_202410, vi_202411, vi_202412,
  vi_202501, vi_202502, vi_202503, vi_202504, vi_202505, vi_202506]);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var vi_ndvi = add_date(img1);
print(vi_ndvi);
*/

var vi_ndvi_mt = temp_blend(img1);
var vi_evi_mt = temp_blend(img2);
var vi_cci_mt = temp_blend(img3);
var vi_cire_mt = temp_blend(img4);
var vi_car_mt = temp_blend(img5);
var vi_mari_mt = temp_blend(img6);
var vi_pri_mt = temp_blend(img7);

//print(vi_ndvi_mt);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Export.image.toAsset({image:vi_ndvi_mt.clip(roi),description:'export_ee_fitted_pace_ndvi',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_01_ndvi_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:vi_evi_mt.clip(roi),description:'export_ee_fitted_pace_evi',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_02_evi_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:vi_cci_mt.clip(roi),description:'export_ee_fitted_pace_cci',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_05_cci_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:vi_cire_mt.clip(roi),description:'export_ee_fitted_pace_cire',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_07_cire_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:vi_car_mt.clip(roi),description:'export_ee_fitted_pace_car',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_08_car_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:vi_mari_mt.clip(roi),description:'export_ee_fitted_pace_mari',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_09_mari_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:vi_pri_mt.clip(roi),description:'export_ee_fitted_pace_pri',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_10_pri_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////