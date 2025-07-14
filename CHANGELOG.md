# This is a change log file for the PACE OCI Toolkit
*Last updated: 14.07.2025*

**Note:** The status of PACE OCI LandVI updates can be tracked using the following [calendar](https://bit.ly/pace_oci_8d_cal).

## Updates: 14.07.2025 - LandVI 8D data updated through 03.07.2025
1. The LandVI 8D data for the period 25.06.2025-03.07.2025 (period 61) has been integrated. The data for 04.07.2025-11.07.2025 (period 62) is still not available.
2. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.
3. We are awaiting the official June 2025 monthly products for LandVI and SFREFL.

## Overall process / workflow

1. Data are acquired from the OB.DAAC L3 browser. Data are generally available 2-3 days after the last image acquisition. For instance, the 04.07.2025-11.07.2025 data *should* be available by 14.07.2025.
2. Data are exported from .NC to .TIF using SeaDAS or SNAP.
3. Data are uploaded to Google Earth Engine.
4. Data are extracted to individual VIs.
5. Data are re-composited using earlier VI stacks.
6. Data permissions are changed to "public."
7. The reference dependency script [ref_data_pace_oci.js](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) is updated.
