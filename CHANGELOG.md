# Change log file: PACE OCI Toolkit
[![Update](https://img.shields.io/github/last-commit/bzgeo/pace_oci_toolkit?label=repo%20last%20updated&style=flat-square)](https://github.com/BzGEO/pace_oci_toolkit)

**Note:** The status of PACE OCI LandVI [*and now the Chlorophyll-a*] updates can be tracked using the following [calendar](https://bit.ly/pace_oci_8d_cal).

## Updates: 06.02.2026
1. The PACE OCI data (8D and monthly) have still not been updated past November 2025.

## Updates: 25.01.2026
1. The PACE OCI data (8D and monthly) have not been updated past November 2025.

## Updates: 21.01.2026
1. A PACE training webinar will be included as a pre-event for the [ForestSat 2026 conference](https://www.forestsat.com/). See: https://carlos-alberto-silva.github.io/silvalab/ForestSAT2026/documents/virtual_workshops/Morgaine%20McKibben.pdf. The full list of pre-event webinars is listed [here](https://event.fourwaves.com/forestsatworkshopseries/pages).

## Updates: 16.01.2026
1. The [reference script](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated with the *chlorophyll-a* 8D data.
2. The 8D PACE OCI LandVI data are yet to be extracted and uploaded.

## Updates: 11.01.2026
1. The [reference script](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated with the various monthly PACE OCI datasets.
2. The 8D PACE OCI data are yet to be extracted and uploaded.

## Updates: 10.01.2026
1. The various files have been processed from NetCDF to GeoTIF and uploaded to GEE, but the image collections have yet to be updated.

## Updates: 08.01.2026
1. Per the numerous weekly updates below about the delay in the processing of the PACE OCI data and the availability of that data at the beginning of the year, I have gotten around to:
    * Grabbing monthly [global] data for RHOS, RRS, and Land VIs
    * Grabbing 8D data for *chlorophyll a* and Land VIs
2. While the monthly data had not been updated for a while, monthly data for Oct. 2025 and Nov. 2025. December 2025 data are still pending, and likely being processed.
3. Interestingly, while monthly Land VI data are available for November 2025, the 8D Land VI data are only updated through October 2025.
4. I will likely upload the monthly datasets to GEE before attempting the 8D data.
5. Today was a PACE virtual *Hackday* event for the mission's Early Adopters. Details are provided [here](https://pace.oceansciences.org/events_more.htm?id=81). The Jupyter Notebooks used are linked in the following [page](https://nasa.github.io/oceandata-notebooks/home.html).

## Updates: 05.01.2026
1. The PACE satellite has been highlighted in the following NASA article about the legacy of the soon to be decommissioned Terra satellite: https://science.nasa.gov/science-research/earth-science/the-earth-observer-offering-perspectives-from-space-through-time/.

## Updates: 01.01.2026
1. The PACE OCI data in the L3 / L4 Browser has been updated to October 2025, and so I am in the process of acquiring that data, to integrate that data into GEE.

## Updates: 22.12.2025
1. I will likely not be updating the PACE OCI Toolkit until early January 2026.

## Updates: 15.12.2025
1. The PACE OCI 8D data have still not yet been updated past the data from late September 2025.

## Updates: 12.12.2025
1. The PACE OCI 8D data have still not yet been updated past the data from late September 2025.

## Updates: 07.12.2025
1. The PACE OCI 8D data have still not yet been updated past the data from late September 2025.

## Updates: 03.12.2025
1. The PACE OCI 8D data have still not yet been updated.

## Updates: 30.11.2025
1. The PACE OCI 8D data have not been updated for weeks. The most updated 8D data are for the period 22.09.2025 to 29.09.2025.

## Updates: 21.11.2025
1. The PACE OCI Hyperspectral Data Explorer was updated to reflect the last 19 months of global data. See: https://servirbz.users.earthengine.app/view/pace-oci-spectral-viewer-v1.

## Updates: 10.11.2025
1. The updates indicated in the previous listing below have been transferred to the hyperspectral toolkit's [dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) file, so most of the monthly and 8D datasets are now updated to the end of September 2025.

## Updates: 06.11.2025
1. Although we are now safely in the month of November, the PACE OCI 8D and monthly products were only recently (over the previous weekend) updated to September 2025. The most recently monthly mosaic is for September 2025, and the most recent 8D mosaic products are for the 22.09.2025 to 29.09.2025. The chlorophyll a, LandVI, surface reflectance, and aquatic reflectance (RRS) products have been acquired and are now in the process of being ingested into GEE. Once these datasets have all been ingested, an update will follow.

## Updates: 11.10.2025 to 13.10.2025 - 8D products
1. Due to the current US Government shutdown, the various PACE OCI 8D products are not currently being generated. The last available data are for the period 21.08.2025 to 28.08.2025 (period 68). We will likely update the 8D products when they become available again from the OB.DAAC.
2. As of today, data from periods 69 (29.08.2025 to 05.09.2025) to 73 (30.09.2025 to 07.10.2025) have still not been produced.

## Updates: 03.10.2025 - 2km monthly surface reflectance products for CONUS and 4km RRS products for East Africa successfully integrated into the toolkit
1. Per the updates in the previous section (monthly 2km surface reflectance data for CONUS and monthly 4km RRS for East Africa, both for March 2024 to August 2025), both sets of products have successfully been integrated into the [reference dependency script](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js).

## Updates: 02.10.2025 - 2km monthly surface reflectance products for CONUS and 4km RRS products for East Africa are being integrated into the toolkit
1. Monthly surface reflectance mosaics at the 2km spatial resolution have been extracted for CONUS for March 2024 to August 2025 (i.e., 18 mosaics) using the recently reprocessed version 3.1 data.
2. Monthly RRS mosaics at the 4km spatial resolution have been extracted for a large domain over East Africa, for the same March 2024 to August 2025 time period.
3. The reference script will be updated shortly to reflect both datasets.

## Updates: 29.09.2025 - 2km monthly surface reflectance products for Mesoamerica now available
1. Monthly surface reflectance mosaics at the 2km spatial resolution have been extracted for Mesoamerica for March 2024 to August 2025 (i.e., 18 mosaics) using the recently reprocessed version 3.1 data.
2. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.

## Updates: 22.09.2025 to 24.09.2025 - Monthly remote sensing reflectance (RRS) products for CONUS now available
1. Since the monthly version 3.1 monthly RRS data are now available from the OB.DAAC, the 4km **monthly** data for CONUS are now available through the Toolkit, covering March 2024 to June 2025.
2. **Monthly** 0.1 degree *global* data have also been added, covering the period March 2024 through June 2025.
3. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.
4. The spectral wavelengths for the RRS data have been updated in the other [reference dependency script](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Femit_hyperion_pace.js).
5. A sample script for viewing the RRS data over the CONUS is available at: https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A01_data_viz%2Fviz_pace_oci_rrs_04km_monthly_conus.js.

## Updates: 20.09.2025 - 8D Chlorophyll-a and LandVI data updated through period 70 (06.09.2025 - 13.09.2025)
1. Although the 8D level 3.1 processed *chlorophyll-a* and LandVI data are not yet available through the OB.DAAC or NASA EarthData Search, I have generated 8 day medians from the original daily data. I have processed the 4km data from 5 periods (periods 66-70). I am still awaiting the official 8D data from the OB.DAAC / NASA EarthData.
2. The [reference dependency](https://code.earthengine.google.com/?scriptPath=users%2Fbzgeo%2Fhyperspectral_toolkit%3A00_pkg%2Fref_data_pace_oci.js) has been updated.
3. The [8D calendar](https://bit.ly/pace_oci_8d_cal) has been updated.

## Updates: 02.09.2025 - 8D Chlorophyll-a and LandVI data for 05.08.2025-12.08.2025, 13.08.2025-20.08.2025, and 21.08.2025-29.08.2025 are not yet available
1. The aforementioned data are still not yet available from the DAACs, and have therefore not yet been ingested into the toolkit's archive.

## Updates: 28.08.2025 - 8D Chlorophyll-a and LandVI data for 05.08.2025-12.08.2025, and 13.08.2025-20.08.2025 are not yet available
1. Probably because of the level 3.1 processing of the PACE data, the recent 8 day (8D) data are still not yet available via the [OB.DAAC](https://oceandata.sci.gsfc.nasa.gov/l3/) or [NASA EarthData Search](https://search.earthdata.nasa.gov/search/granules?p=C3620140344-OB_CLOUD&pg[0][v]=f&pg[0][id]=*8D*&pg[0][gsk]=-start_date&q=global%20mapped%20landvi&fi=OCI&tl=1732614766.065!4!!).

## Updates: 20.08.2025 - 8D Chlorophyll-a and LandVI data for 05.08.2025-12.08.2025 are not yet available
1. Likely due to the level 3.1 processing of the PACE data, the 8 day (8D) data ending in the period 12.08.2025 are not yet available via the [OB.DAAC](https://oceandata.sci.gsfc.nasa.gov/l3/) or [NASA EarthData Search](https://search.earthdata.nasa.gov/search/granules?p=C3620140344-OB_CLOUD&pg[0][v]=f&pg[0][id]=*8D*&pg[0][gsk]=-start_date&q=global%20mapped%20landvi&fi=OCI&tl=1732614766.065!4!!).

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
