/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* DATA DISCOVERY: FIND NASA HYPERION, EMIT, AND PACE OCI IMAGES FOR A SPECIFIC LOCATION
source: Emil Cherrington, Ph.D. (University of Alabama in Huntsville / NASA SERVIR); emil.cherrington@uah.edu
last updated: 21.07.2025 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require('users/servirbz/packages:img_recent'); // imports the img_recent package

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pt = ee.Geometry.Point([-121.6702, 40.0677]); // near Paynes Creek, CA, USA -> eastern side of burn scar

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

print("Site 1 - Eastern part of burn scar");
//a.most_recent("EO-1 Hyperion", a.hyperion, pt);
a.most_recent("ISS EMIT", a.emit, pt);
a.most_recent("PACE OCI - SR", a.pace_oci_sr, pt);
a.most_recent("PACE OCI - EVI", a.pace_oci_evi, pt);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var pt = ee.Geometry.Point([-121.8157, 40.0661]); // near Paynes Creek, CA, USA -> western side of burn scar

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

print("Site 2 - Western part of burn scar");
a.most_recent("EO-1 Hyperion", a.hyperion, pt);
a.most_recent("ISS EMIT", a.emit, pt);
a.most_recent("PACE OCI - SR", a.pace_oci_sr, pt);
a.most_recent("PACE OCI - EVI", a.pace_oci_evi, pt);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////