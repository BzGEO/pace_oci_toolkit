//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var chlor_a = a.pace_oci_8d_global_chlor_a;
//print(pace_oci_8d_global_chlor_a);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pt = ee.Geometry.Point([-88.7784, 15.9888]); // An area offshore of Belize

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Harmonic modeling work based on Google's Landsat-8 harmonic modeling script:
// https://code.earthengine.google.com/?scriptPath=Examples%3ADemos%2FLandsat8%20Harmonic%20Modeling

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var dependent = 'chlor_a'; // The dependent variable we are modeling.
var harmonics = 4; // The number of cycles per year to model.

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
var harmonic_coll = chlor_a.map(addDependents).map(addHarmonics(harmonicFrequencies));

// The output of the regression reduction is a 4x1 array image.
var harmonicTrend = harmonic_coll.select(independents.add(dependent)).reduce(ee.Reducer.linearRegression(independents.length(), 1));

// Turn the array image into a multi-band image of coefficients.
var harmonicTrendCoefficients = harmonicTrend.select('coefficients').arrayProject([0]).arrayFlatten([independents]);

// Compute fitted values.
var fittedHarmonic = harmonic_coll.map(function(image) {
  return image.addBands(image.select(independents).multiply(harmonicTrendCoefficients).reduce('sum').rename('fitted'))});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Plot the original data at the ROI
print(ui.Chart.image.series(chlor_a.select('chlor_a'), pt, ee.Reducer.mean(), 4000)
    .setOptions({title: 'PACE OCI - chlor_a - Belize', lineWidth: 1, pointSize: 3, vAxis: {title: 'Chlorophyll a conc.'}, series:{0:{color:'blue'}}}));

// Plot the fitted model and the original data at the ROI
print(ui.Chart.image.series(fittedHarmonic.select(['fitted',dependent]), pt, ee.Reducer.mean(), 4000)
    .setOptions({title: 'Harmonic model: original and fitted values', lineWidth: 1, pointSize: 3}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Add data to map viewer below
Map.centerObject(pt, 13);
Map.setOptions('SATELLITE');
Map.addLayer(pt, {color: "blue"}, "Location", 1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////