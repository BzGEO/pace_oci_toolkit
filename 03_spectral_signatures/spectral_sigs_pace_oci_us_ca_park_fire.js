/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var aoi_for = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-121.70110597131992, 40.099728767155916],
          [-121.70110597131992, 40.02931129219005],
          [-121.63175477503086, 40.02931129219005],
          [-121.63175477503086, 40.099728767155916]]], null, false),
    aoi_mountain = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-121.91671266077304, 40.0986782951721],
          [-121.91671266077304, 40.02931129219005],
          [-121.77526368616367, 40.02931129219005],
          [-121.77526368616367, 40.0986782951721]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
/* DISPLAY SPECTRAL SIGNATURES FROM PACE OCI FOR CALIFORNIA PARK FIRE
source: Emil Cherrington, Ph.D. (University of Alabama in Huntsville / NASA SERVIR); emil.cherrington@uah.edu
last updated: 09.05.2025 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/bzgeo/examples:_ancillary/mes');
var b = require('users/bzgeo/hyperspectral_toolkit:00_pkg/emit_hyperion_pace.js');
var c = require('users/bzgeo/hyperspectral_toolkit:00_pkg/ref_data_pace_oci.js');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Map.setCenter(-121.7958, 40.0908, 8); // centers over the location of the 2024 Park Fire in California
Map.setOptions('HYBRID');

Map.addLayer(c.pace_oci_mt_conus_202403, b.viz3, "PACE OCI SR (4km) - March 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202404, b.viz3, "PACE OCI SR (4km) - April 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202405, b.viz3, "PACE OCI SR (4km) - May 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202406, b.viz3, "PACE OCI SR (4km) - June 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202407, b.viz3, "PACE OCI SR (4km) - July 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202408, b.viz3, "PACE OCI SR (4km) - Aug. 2024", 1);
Map.addLayer(c.pace_oci_mt_conus_202409, b.viz3, "PACE OCI SR (4km) - Sept. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202410, b.viz3, "PACE OCI SR (4km) - Oct. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202411, b.viz3, "PACE OCI SR (4km) - Nov. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202412, b.viz3, "PACE OCI SR (4km) - Dec. 2024", 0);
Map.addLayer(c.pace_oci_mt_conus_202501, b.viz3, "PACE OCI SR (4km) - Jan. 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_202502, b.viz3, "PACE OCI SR (4km) - Feb. 2025", 0);
Map.addLayer(c.pace_oci_mt_conus_202503, b.viz3, "PACE OCI SR (4km) - March 2025", 0);
Map.addLayer(c.mcd64a1_202403_202503, c.viz_mcd64a1, "MODIS burn scars (2024-03 - 2025-03)", 1);

Map.addLayer(a.bnds_admin_l1_ln.clip(a.aoi_us_box), {palette: "azure"}, "Admin boundaries, level 1", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "white"},"Int'l boundaries (white)", 1);
Map.addLayer(a.bnds_intl_ln2,{palette: "black"},"Int'l boundaries (black)", 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DISPLAY CHART OF SPECTRAL SIGNATURES IN CONSOLE ON THE RIGHT ->
// California 2024 Park Fire burn scar data
// more info: https://en.wikipedia.org/wiki/Park_Fire

var pt_for =    ee.Geometry.Point([-121.6702, 40.0677]);
var pt_mt =     ee.Geometry.Point([-121.8157, 40.0661]);

/////

var pt = pt_for;

var pace_04km = c.pace_oci_mt_conus.filterBounds(pt)
                                  .map(function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                                  .filter(ee.Filter.eq('any', 1)).getRegion(pt, 4000).slice(1)
                                  .map(function(l) {return ee.List(l).slice(4)});

print(ui.Chart.array.values(pace_04km, 1, b.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (4km) - California Park Fire (Aug. 2024) - Vegetated side', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:3000}, title: 'Reflectance x 10,000'},
      }));

/////

var pt = pt_mt;

var pace_04km = c.pace_oci_mt_conus.filterBounds(pt)
                                  .map(function addAny(i) {return i.set('any', i.select(0).mask().reduceRegion(ee.Reducer.anyNonZero(), pt).values().get(0))})
                                  .filter(ee.Filter.eq('any', 1)).getRegion(pt, 4000).slice(1)
                                  .map(function(l) {return ee.List(l).slice(4)});

print(ui.Chart.array.values(pace_04km, 1, b.wl_pace)
      .setOptions({title: 'PACE OCI surface reflectance (4km) - California Park Fire (Aug. 2024) - Non-vegetated side', pointsVisible: false, lineWidth: 1,
      hAxis: {viewWindow: {min:340, max:2300}, title: 'Wavelength (nm)'},
      vAxis: {viewWindow: {min:0, max:3000}, title: 'Reflectance x 10,000'},
      }));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////