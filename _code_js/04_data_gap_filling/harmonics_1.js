/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = ee.FeatureCollection("projects/bz-sdg/aoi/aoi_globe");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Last updated: 14.07.2025

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/servirbz/packages:temporal_reduction');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VIs 1: NDVI; 2: EVI; 3: CCI; 4: CIRE; 5: CAR; 6: mARI; 7: PRI
var vi_all = b.pace_oci_8d_global_vi; // VIs: NDVI, EVI, CCI, CIRE, CAR, mARI, PRI
print(vi_all);

var vi = b.pace_oci_8d_global_ndvi.map(function(img){return img.select(['ndvi.*'],['vi'])});
print(vi);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Harmonic modeling work based on Google's Landsat-8 harmonic modeling script:
// https://code.earthengine.google.com/?scriptPath=Examples%3ADemos%2FLandsat8%20Harmonic%20Modeling

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
print(fitted);

var m01 = fitted.filterDate("2024-03-01","2024-03-31").median().select(["fitted"],["m01_"+dependent]);
var m02 = fitted.filterDate("2024-04-01","2024-04-30").median().select(["fitted"],["m02_"+dependent]);
var m03 = fitted.filterDate("2024-05-01","2024-05-31").median().select(["fitted"],["m03_"+dependent]);
var m04 = fitted.filterDate("2024-06-01","2024-06-30").median().select(["fitted"],["m04_"+dependent]);
var m05 = fitted.filterDate("2024-07-01","2024-07-31").median().select(["fitted"],["m05_"+dependent]);
var m06 = fitted.filterDate("2024-08-01","2024-08-31").median().select(["fitted"],["m06_"+dependent]);
var m07 = fitted.filterDate("2024-09-01","2024-09-30").median().select(["fitted"],["m07_"+dependent]);
var m08 = fitted.filterDate("2024-10-01","2024-10-31").median().select(["fitted"],["m08_"+dependent]);
var m09 = fitted.filterDate("2024-11-01","2024-11-30").median().select(["fitted"],["m09_"+dependent]);
var m10 = fitted.filterDate("2024-12-01","2024-12-31").median().select(["fitted"],["m10_"+dependent]);
var m11 = fitted.filterDate("2025-01-01","2025-01-31").median().select(["fitted"],["m11_"+dependent]);
var m12 = fitted.filterDate("2025-02-01","2025-02-28").median().select(["fitted"],["m12_"+dependent]);

var m13 = fitted.filterDate("2025-03-01","2025-03-31").median().select(["fitted"],["m13_"+dependent]);
var m14 = fitted.filterDate("2025-04-01","2025-04-30").median().select(["fitted"],["m14_"+dependent]);
var m15 = fitted.filterDate("2025-05-01","2025-05-31").median().select(["fitted"],["m15_"+dependent]);
var m16 = fitted.filterDate("2025-06-01","2025-06-30").median().select(["fitted"],["m16_"+dependent]);

var fitted_mt = ee.Image.cat(m01,m02,m03,m04,m05,m06,m07,m08,m09,m10,m11,m12,m13,m14,m15,m16).toInt16();
print(fitted_mt);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_ndvi',
assetId:'global_pace_oci_vi_01_ndvi_ft_c2_202403_202506_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

// projects/projects/bz-sdg/compil_imagery/hyperspectral/paci_oci_vi/8day_4km/

/*
Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_evi',
assetId:'global_pace_oci_vi_02_evi_ft_c2_202403_202506_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_cci',
assetId:'global_pace_oci_vi_05_cci_ft_c2_202403_202506_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_cire',
assetId:'global_pace_oci_vi_07_cire_ft_c2_202403_202506_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_car',
assetId:'global_pace_oci_vi_08_car_ft_c2_202403_202506_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_mari',
assetId:'global_pace_oci_vi_09_mari_ft_c2_202403_202506_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});

Export.image.toAsset({image:fitted_mt.clip(roi),description:'export_ee_fitted_pace_pri',
assetId:'global_pace_oci_vi_10_pri_ft_c2_202403_202506_4km',
scale:4000,region:roi, crs: 'EPSG:4326'});
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////