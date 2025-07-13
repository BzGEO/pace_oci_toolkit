// Set AOI
var underc = ee.FeatureCollection("users/servirbz/aoi/us/us_neon_site_underc_gcs");
var underc_ln = ee.Image().byte().paint({featureCollection:underc,width:2});

// Read in the NEON AOP Bidirectional Reflectance Image Collection
var refl002 = ee.ImageCollection("projects/neon-prod-earthengine/assets/HSI_REFL/002").filterBounds(underc);

// Display available images in the HSI_REFL/002 Image Collection
print('NEON Bidirectional Reflectance Images', refl002.aggregate_array('system:index'));

// Specify the start and end dates and filter by date range
var refl002_2013_2024 = refl002.filterDate('2013-01-01', '2024-12-31');
print(refl002_2013_2024);

var refl002_2022 = refl002.filterDate('2022-01-01', '2022-12-31');
var refl002_2024 = refl002.filterDate('2024-01-01', '2024-12-31');

// Filter by NEON site name (see https://www.neonscience.org/field-sites/explore-field-sites)
var reflLIRO_2022 = refl002_2022.filter('NEON_SITE == "UNDE"').mosaic().clip(underc);
var reflLIRO_2024 = refl002_2024.filter('NEON_SITE == "UNDE"').mosaic().clip(underc);

// Add the reflectance layer to the Map and center on the site
Map.addLayer(reflLIRO_2022, {min: 340, max: 2150, bands: ['B053','B035','B019'], gamma: 2}, 'Bidirectional refl. 2022', 0);
Map.addLayer(reflLIRO_2024, {min: 340, max: 2150, bands: ['B053','B035','B019'], gamma: 2}, 'Bidirectional refl. 2024', 1);
Map.addLayer(underc_ln,{palette: ['red']},'UNDERC boundaries',1);
//Map.setCenter(-89.5106, 46.2112, 13);
Map.centerObject(underc,13);