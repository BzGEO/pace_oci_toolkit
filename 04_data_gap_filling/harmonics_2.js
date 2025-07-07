/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = ee.FeatureCollection("projects/bz-sdg/aoi/aoi_globe"),
    img4 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/8day_4km_clipped/vi_07_cire_b48_4km"),
    img5 = ee.Image("projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/8day_4km_clipped/vi_08_car_b48_4km");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 24.03.2025

var a = require('users/servirbz/packages:temporal_reduction');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var vi = img5; // 1: NDVI; 2: EVI; 3: CCI; 4: CIRE; 5: CAR; 6: mARI; 7: PRI

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
vi = ee.ImageCollection.fromImages(
[vi01,vi02,vi03,vi04,vi05,vi06,vi07,vi08,vi09,vi10,
vi11,vi12,vi13,vi14,vi15,vi16,vi17,vi18,vi19,vi20,
vi21,vi22,vi23,vi24,vi25,vi26,vi27,vi28,vi29,vi30,
vi31,vi32,vi33,vi34,vi35,vi36,vi37,vi38,vi39,vi40,
vi41,vi42,vi43,vi44,vi45,vi46,vi47,vi48])
.map(function(img){return img.select(['vi_.*'],['vi'])});

print(vi);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var dependent = 'vi'; // The dependent variable we are modeling.
var harmonics = 2; // The number of cycles per year to model.

////
var harmonicFrequencies = ee.List.sequence(1, harmonics); // Make a list of harmonic frequencies to model. These also serve as band name suffixes.
var constructBandNames = function(base, list){return ee.List(list)
.map(function(i) {return ee.String(base).cat(ee.Number(i).int())})}; // Function to get a sequence of band names for harmonic terms.
var cosNames = constructBandNames('cos_', harmonicFrequencies); // Construct lists of names for the harmonic terms.
var sinNames = constructBandNames('sin_', harmonicFrequencies);
var independents = ee.List(['constant', 't']).cat(cosNames).cat(sinNames); // Independent variables.

var addDependents = function(image) { // Function to add a time band.
  var years = image.date().difference('2000-01-01', 'year'); // Compute time in fractional years since the epoch.
  var timeRadians = ee.Image(years.multiply(2 * Math.PI)).rename('t');
  var constant = ee.Image(1);
  return image.addBands(constant).addBands(timeRadians.float())};

var addHarmonics = function(freqs) { // Function to compute the specified number of harmonics and add them as bands.
  return function(image) { // Assumes the time band is present.
    var frequencies = ee.Image.constant(freqs); // Make an image of frequencies.
    var time = ee.Image(image).select('t'); // This band should represent time in radians.
    var cosines = time.multiply(frequencies).cos().rename(cosNames); // Get the cosine terms.
    var sines = time.multiply(frequencies).sin().rename(sinNames); // Get the sin terms.
    return image.addBands(cosines).addBands(sines)}};

// Filter to the desired date range and area of interest, mask clouds, and add variables.
var harmonic_coll = vi.map(addDependents).map(addHarmonics(harmonicFrequencies));

// The output of the regression reduction is a 4x1 array image.
var harmonicTrend = harmonic_coll.select(independents.add(dependent)).reduce(ee.Reducer.linearRegression(independents.length(), 1));

// Turn the array image into a multi-band image of coefficients.
var harmonicTrendCoefficients = harmonicTrend.select('coefficients').arrayProject([0]).arrayFlatten([independents]);

// Compute fitted values.
var fittedHarmonic = harmonic_coll.map(function(image) {
  return image.addBands(image.select(independents).multiply(harmonicTrendCoefficients).reduce('sum').rename('fitted'))});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pt = ee.Geometry.Point([-88.2472, 18.0587]);

// Plot the fitted model and the original data at the ROI.
print(ui.Chart.image.series(fittedHarmonic.select(['fitted',dependent]), pt, ee.Reducer.mean(), 4000)
    .setOptions({title: 'Harmonic model: original and fitted values', lineWidth: 1, pointSize: 3}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Composite data
var fitted = a.temp_red(fittedHarmonic.select(['fitted']), 1, 12, 2024, 2025);

var f03 = fitted.filterDate("2024-03-01","2024-03-31").median().select(["fitted"],["m03_"+dependent]);
var f04 = fitted.filterDate("2024-04-01","2024-04-30").median().select(["fitted"],["m04_"+dependent]);
var f05 = fitted.filterDate("2024-05-01","2024-05-31").median().select(["fitted"],["m05_"+dependent]);
var f06 = fitted.filterDate("2024-06-01","2024-06-30").median().select(["fitted"],["m06_"+dependent]);
var f07 = fitted.filterDate("2024-07-01","2024-07-31").median().select(["fitted"],["m07_"+dependent]);
var f08 = fitted.filterDate("2024-08-01","2024-08-31").median().select(["fitted"],["m08_"+dependent]);
var f09 = fitted.filterDate("2024-09-01","2024-09-30").median().select(["fitted"],["m09_"+dependent]);
var f10 = fitted.filterDate("2024-10-01","2024-10-31").median().select(["fitted"],["m10_"+dependent]);
var f11 = fitted.filterDate("2024-11-01","2024-11-30").median().select(["fitted"],["m11_"+dependent]);
var f12 = fitted.filterDate("2024-12-01","2024-12-31").median().select(["fitted"],["m12_"+dependent]);
var f01 = fitted.filterDate("2025-01-01","2025-01-31").median().select(["fitted"],["m01_"+dependent]);
var f02 = fitted.filterDate("2025-02-01","2025-02-28").median().select(["fitted"],["m02_"+dependent]);

var fitted_mt = ee.Image.cat(f03, f04, f05, f06, f07, f08, f09, f10, f11, f12, f01, f02).toInt16();
print(fitted_mt);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_ndvi',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/vi_01_ndvi_ft_c2_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_evi',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/vi_02_evi_ft_c2_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_cci',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/vi_05_cci_ft_c2_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_mari',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/vi_09_mari_ft_c2_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_pri',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/vi_10_pri_ft_c2_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_cire',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/vi_07_cire_ft_c2_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

*/

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_car',
assetId:'projects/bz-sdg/compil_imagery/hyperspectral/paci_oci/vi_08_car_ft_c2_202403_202502_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////