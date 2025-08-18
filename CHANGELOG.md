# Change log file: PACE OCI Toolkit
[![Update](https://img.shields.io/github/last-commit/bzgeo/pace_oci_toolkit?label=repo%20last%20updated&style=flat-square)](https://github.com/BzGEO/pace_oci_toolkit)

**Note:** The status of PACE OCI LandVI updates can be tracked using the following [calendar](https://bit.ly/pace_oci_8d_cal).

## Updates: 15.08.2025 - Chlorophyll-a 8D data added
1. To complement the land-focused LandVI and surface reflectance data, I have ingested all of the 8D chlorophyll-a data availale up to this point (some 65 periods). Those data are global, and at the 4km spatial resolution. The processing version available is from 3.0, although the PACE team has announced that they are now at a processing version of 3.1.

## Updates: 07.08.2025 - LandVI 8D data updated through 04.08.2025
1. The LandVI 8D data for the period 28.07.2025-04.08.2025 (period 65) has been integrated.
2. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.

## Updates: 30.07.2025 - LandVI 8D data updated through 27.07.2025
1. The LandVI 8D data for the period 20.07.2025-27.07.2025 (period 64) has been integrated.
2. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.
3. The LandVI and SFREFL on the OB.DAAC are still not updated beyond April 2025.

## Updates: 20.07.2025 - LandVI 8D data updated through 19.07.2025
1. The LandVI 8D data for the period 12.07.2025-19.07.2025 (period 63) has been integrated.
2. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.

## Updates: 16.07.2025 - LandVI 8D data updated through 11.07.2025; monthly LandVI estimate for June 2025 generated
1. The LandVI 8D data for the period 04.07.2025-11.07.2025 (period 62) has been integrated.
2. I have added a provisional monthly dataset for June 2025, based on periods 58 to 61 (i.e., a **median** covering 2 June to 3 July 2025). The official June 2025 monthly products for LandVI and SFREFL are still not yet available.
3. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.

## Updates: 14.07.2025 - LandVI 8D data updated through 03.07.2025
1. The LandVI 8D data for the period 25.06.2025-03.07.2025 (period 61) has been integrated. The data for 04.07.2025-11.07.2025 (period 62) is still not available.
2. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.
3. We are awaiting the official June 2025 monthly products for LandVI and SFREFL.

## Overall process / workflow

1. Data are acquired from the OB.DAAC L3 browser. Data are generally available 2-3 days after the last image acquisition. For instance, the 04.07.2025-11.07.2025 data *should* be available by 14.07.2025. [*ETA: approx. 5 min to download*]
2. Data are exported from .NC to .TIF using SeaDAS or SNAP. [*ETA: approx. 3 min. to export*]
3. Data are uploaded to Google Earth Engine. [*ETA: approx. 15 min. to ingest*]
4. Data are extracted to individual VIs. [*ETA: approx. 1 hour to export VIs*]
5. Data are re-composited using earlier VI stacks. [*ETA: approx. 1 hour to export VIs*]
6. Data permissions are changed to "public." [*ETA: approx. 1 min. per update*]
7. The reference dependency script [ref_data_pace_oci.js](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) is updated. [*ETA: approx. 5 min. to update script*]
