/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = ee.FeatureCollection("projects/bz-sdg/aoi/aoi_globe"),
    img_4 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km/vi_07_cire_b60_4km"),
    img_5 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/pace_oci_vi/8day_4km/vi_08_car_b60_4km");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 25.03.2025
// blend src:
// https://code.earthengine.google.com/430deaa9c29b16e993ffcd4f6e88830b
// https://code.earthengine.google.com/?scriptPath=users%2Fservirbz%2Fservir_bz_prototypes%3Abz_mcd43a4_mt_mosaics_t3

// 1: NDVI; 2: EVI; 3: CCI; 4: CIRE; 5: CAR; 6: mARI; 7: PRI

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FXN 1: Add dates to image collection's individual images
function add_date(vi) {

var vi01 = vi.select([0]).rename('vi_01').set('system:time_start',ee.Date.fromYMD(2024,3,12).millis());
var vi02 = vi.select([1]).rename('vi_02').set('system:time_start',ee.Date.fromYMD(2024,3,20).millis());
var vi03 = vi.select([2]).rename('vi_03').set('system:time_start',ee.Date.fromYMD(2024,3,28).millis());
var vi04 = vi.select([3]).rename('vi_04').set('system:time_start',ee.Date.fromYMD(2024,4,5).millis());
var vi05 = vi.select([4]).rename('vi_05').set('system:time_start',ee.Date.fromYMD(2024,4,13).millis());
var vi06 = vi.select([5]).rename('vi_06').set('system:time_start',ee.Date.fromYMD(2024,4,21).millis());
var vi07 = vi.select([6]).rename('vi_07').set('system:time_start',ee.Date.fromYMD(2024,4,29).millis());
var vi08 = vi.select([7]).rename('vi_08').set('system:time_start',ee.Date.fromYMD(2024,5,7).millis());
var vi09 = vi.select([8]).rename('vi_09').set('system:time_start',ee.Date.fromYMD(2024,5,15).millis());
var vi10 = vi.select([9]).rename('vi_10').set('system:time_start',ee.Date.fromYMD(2024,5,23).millis());

var vi11 = vi.select([10]).rename('vi_11').set('system:time_start',ee.Date.fromYMD(2024,5,31).millis());
var vi12 = vi.select([11]).rename('vi_12').set('system:time_start',ee.Date.fromYMD(2024,6,8).millis());
var vi13 = vi.select([12]).rename('vi_13').set('system:time_start',ee.Date.fromYMD(2024,6,16).millis());
var vi14 = vi.select([13]).rename('vi_14').set('system:time_start',ee.Date.fromYMD(2024,6,24).millis());
var vi15 = vi.select([14]).rename('vi_15').set('system:time_start',ee.Date.fromYMD(2024,7,2).millis());
var vi16 = vi.select([15]).rename('vi_16').set('system:time_start',ee.Date.fromYMD(2024,7,10).millis());
var vi17 = vi.select([16]).rename('vi_17').set('system:time_start',ee.Date.fromYMD(2024,7,18).millis());
var vi18 = vi.select([17]).rename('vi_18').set('system:time_start',ee.Date.fromYMD(2024,7,26).millis());
var vi19 = vi.select([18]).rename('vi_19').set('system:time_start',ee.Date.fromYMD(2024,8,3).millis());
var vi20 = vi.select([19]).rename('vi_20').set('system:time_start',ee.Date.fromYMD(2024,8,11).millis());

var vi21 = vi.select([20]).rename('vi_21').set('system:time_start',ee.Date.fromYMD(2024,8,19).millis());
var vi22 = vi.select([21]).rename('vi_22').set('system:time_start',ee.Date.fromYMD(2024,8,27).millis());
var vi23 = vi.select([22]).rename('vi_23').set('system:time_start',ee.Date.fromYMD(2024,9,4).millis());
var vi24 = vi.select([23]).rename('vi_24').set('system:time_start',ee.Date.fromYMD(2024,9,12).millis());
var vi25 = vi.select([24]).rename('vi_25').set('system:time_start',ee.Date.fromYMD(2024,9,20).millis());
var vi26 = vi.select([25]).rename('vi_26').set('system:time_start',ee.Date.fromYMD(2024,9,28).millis());
var vi27 = vi.select([26]).rename('vi_27').set('system:time_start',ee.Date.fromYMD(2024,10,6).millis());
var vi28 = vi.select([27]).rename('vi_28').set('system:time_start',ee.Date.fromYMD(2024,10,14).millis());
var vi29 = vi.select([28]).rename('vi_29').set('system:time_start',ee.Date.fromYMD(2024,10,22).millis());
var vi30 = vi.select([29]).rename('vi_30').set('system:time_start',ee.Date.fromYMD(2024,10,30).millis());

var vi31 = vi.select([30]).rename('vi_31').set('system:time_start',ee.Date.fromYMD(2024,11,7).millis());
var vi32 = vi.select([31]).rename('vi_32').set('system:time_start',ee.Date.fromYMD(2024,11,15).millis());
var vi33 = vi.select([32]).rename('vi_33').set('system:time_start',ee.Date.fromYMD(2024,11,23).millis());
var vi34 = vi.select([33]).rename('vi_34').set('system:time_start',ee.Date.fromYMD(2024,12,1).millis());
var vi35 = vi.select([34]).rename('vi_35').set('system:time_start',ee.Date.fromYMD(2024,12,9).millis());
var vi36 = vi.select([35]).rename('vi_36').set('system:time_start',ee.Date.fromYMD(2024,12,17).millis());
var vi37 = vi.select([36]).rename('vi_37').set('system:time_start',ee.Date.fromYMD(2024,12,25).millis());
var vi38 = vi.select([37]).rename('vi_38').set('system:time_start',ee.Date.fromYMD(2024,12,31).millis());
var vi39 = vi.select([38]).rename('vi_39').set('system:time_start',ee.Date.fromYMD(2025,1,8).millis());
var vi40 = vi.select([39]).rename('vi_40').set('system:time_start',ee.Date.fromYMD(2025,1,16).millis());

var vi41 = vi.select([40]).rename('vi_41').set('system:time_start',ee.Date.fromYMD(2025,1,24).millis());
var vi42 = vi.select([41]).rename('vi_42').set('system:time_start',ee.Date.fromYMD(2025,2,1).millis());
var vi43 = vi.select([42]).rename('vi_43').set('system:time_start',ee.Date.fromYMD(2025,2,9).millis());
var vi44 = vi.select([43]).rename('vi_44').set('system:time_start',ee.Date.fromYMD(2025,2,17).millis());
var vi45 = vi.select([44]).rename('vi_45').set('system:time_start',ee.Date.fromYMD(2025,2,25).millis());
var vi46 = vi.select([45]).rename('vi_46').set('system:time_start',ee.Date.fromYMD(2025,3,5).millis());
var vi47 = vi.select([46]).rename('vi_47').set('system:time_start',ee.Date.fromYMD(2025,3,13).millis());
var vi48 = vi.select([47]).rename('vi_48').set('system:time_start',ee.Date.fromYMD(2025,3,21).millis());

// Convert set of individual images into an image collection
return ee.ImageCollection.fromImages(
[vi01,vi02,vi03,vi04,vi05,vi06,vi07,vi08,vi09,vi10,
vi11,vi12,vi13,vi14,vi15,vi16,vi17,vi18,vi19,vi20,
vi21,vi22,vi23,vi24,vi25,vi26,vi27,vi28,vi29,vi30,
vi31,vi32,vi33,vi34,vi35,vi36,vi37,vi38,vi39,vi40,
vi41,vi42,vi43,vi44,vi45,vi46,vi47,vi48])
.map(function(img){return img.select(['vi_.*'],['vi'])});

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FXN 2: Blend data to remove data gaps
function temp_blend(coll) {

function mcd_blend(date) {

var img1 = coll.filterDate(ee.Date(date).advance(-15, 'day'),ee.Date(date).advance(15, 'day')).median();
var img2 = coll.filterDate(ee.Date(date).advance(-45, 'day'),ee.Date(date).advance(45, 'day')).median();
var img3 = coll.filterDate(ee.Date(date).advance(-75, 'day'),ee.Date(date).advance(75, 'day')).median();
var img4 = coll.filterDate(ee.Date(date).advance(-105, 'day'),ee.Date(date).advance(105, 'day')).median();
var img5 = coll.filterDate(ee.Date(date).advance(-135, 'day'),ee.Date(date).advance(135, 'day')).median();

// This stretches a calendar year from 4 August of the previous year to 29 April of the following year.
return img5.blend(img4).blend(img3).blend(img2).blend(img1).clip(roi);

}

var mcd43_202403 = mcd_blend("2024-03-16");
var mcd43_202404 = mcd_blend("2024-04-15");
var mcd43_202405 = mcd_blend("2024-05-16");
var mcd43_202406 = mcd_blend("2024-06-15");
var mcd43_202407 = mcd_blend("2024-07-16");
var mcd43_202408 = mcd_blend("2024-08-16");
var mcd43_202409 = mcd_blend("2024-09-15");
var mcd43_202410 = mcd_blend("2024-10-16");
var mcd43_202411 = mcd_blend("2024-11-15");
var mcd43_202412 = mcd_blend("2024-12-16");
var mcd43_202501 = mcd_blend("2025-01-16");
var mcd43_202502 = mcd_blend("2025-02-14");

// This returns a single image with twelve bands representing twelve months, but numbered from March 2024 to February 2025
return ee.Image.cat([
  mcd43_202403, mcd43_202404, mcd43_202405, mcd43_202406,
  mcd43_202407, mcd43_202408, mcd43_202409,
  mcd43_202410, mcd43_202411, mcd43_202412,
  mcd43_202501, mcd43_202502]);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
var vi_ndvi = add_date(img1);
print(vi_ndvi);
*/

var vi_cire_mt = temp_blend(add_date(img_4));
var vi_car_mt = temp_blend(add_date(img_5));

//print(vi_ndvi_mt);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Export.image.toAsset({image:vi_cire_mt.clip(roi),description:'export_ee_fitted_pace_cire',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_07_cire_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:vi_car_mt.clip(roi),description:'export_ee_fitted_pace_car',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/monthly_filled/vi_08_car_filled_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////