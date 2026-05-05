# Research idea involving PACE OCI and other datasets
*Last updated: 05.05.2026*

## Objectives
* Develop data match-up involving the following, as possible / available:
  * **Multispectral:** Landsat-8 / -9 (30m), Sentinel-2 (10m), PlanetScope (3m)
  * **Hyperspectral:** EMIT (60m), PACE OCI (1km), Tanager (30m)
  * **SAR:** NISAR (10m), Sentinel-1 (10m)
  * **Thermal:** ECOSTRESS (70m), Landsat-8 / -9 (100m), MODIS (1km), VIIRS (500m)
* Use the match-ups to characterize an area ➡️ "Here's how different types of sensors see this specific area of importance."

## Potential issues
  * The main issue will be finding imagery from coincident dates.
  * Another issue will be considering spatial resolutions. Most of the datasets are in the ~30m range. A few of the datasets (i.e., MODIS, PACE OCI, VIIRS) are at a coarse 1km resolution.
  * NISAR will currently be the most limiting data given that its present availability is limited to the initial release. The next release of NISAR data isn't anticipated until June 2026. The most available data are over CONUS (see **Figure 1** below).
  * ECOSTRESS and EMIT data are likely to be limiting also given that the data aren't regularly collected.
  * ECOSTRESS data aren't accessible via GEE.
  * The Tanager data are only available for select sites -> also a limiting factor. See the maps in the following [link](https://github.com/BzGEO/Hyperspectral_Toolkit/blob/main/misc/Planet_Tanager_OpenData_Competition_2026.md#2-competition-data-resources-tanager-spatio-temporal-asset-catalog).
  * It *should* be possible to find coincident data for L8 / L9, S2, MODIS, Planet, PACE OCI, S1, VIIRS.
  * PlanetScope data are limited by licensing.

<img width="462" height="340" alt="image" src="https://github.com/user-attachments/assets/58967fc0-9733-452a-9e72-e49b5935fc96" />

**Figure 1.** NISAR data [available](https://search.asf.alaska.edu/#/?dataset=NISAR&prodConfig=PR&zoom=3.000&center=-109.887,17.518&polygon=POLYGON((-130.4529%206.0087,-57.0643%206.0087,-57.0643%2052.4555,-130.4529%2052.4555,-130.4529%206.0087))&resultsLoaded=true&granule=NISAR_L2_PR_GSLC_010_164_A_027_0005_NADV_A_20260120T133756_20260120T133832_X05010_N_F_J_001&maxResults=2000) over the continental USA, Mexico, Central America, and the Caribbean, as of May 2026 (*source: ASF Vertex*).

<img width="473" height="366" alt="image" src="https://github.com/user-attachments/assets/9403b944-7b70-4084-b83d-6c6c24e6aedc" />

**Figure 2.** [Availability](https://search.asf.alaska.edu/#/?dataset=NISAR&prodConfig=PR&zoom=3.000&center=-109.887,17.518&polygon=POLYGON((-130.4529%206.0087,-57.0643%206.0087,-57.0643%2052.4555,-130.4529%2052.4555,-130.4529%206.0087))&resultsLoaded=true&granule=NISAR_L2_PR_GCOV_010_163_A_028_4005_DHDH_A_20260120T115838_20260120T115913_X05010_N_F_J_001&maxResults=2000&sciProducts=GCOV&polarizations=HH-HV,HH-VV,VV-VH,RH-RV,LH-LV) of NISAR dual pol imagery (*source: ASF Vertex*).

<img width="460" height="360" alt="image" src="https://github.com/user-attachments/assets/1a19e53a-9554-4174-8e91-8a780affde35" />

**Figure 3.** [Availability](https://search.asf.alaska.edu/#/?dataset=NISAR&prodConfig=PR&zoom=3.000&center=-109.887,17.518&polygon=POLYGON((-130.4529%206.0087,-57.0643%206.0087,-57.0643%2052.4555,-130.4529%2052.4555,-130.4529%206.0087))&resultsLoaded=true&granule=NISAR_L2_PR_GCOV_010_156_D_070_2005_QPDH_A_20260120T004332_20260120T004341_X05010_N_P_J_001&maxResults=2000&sciProducts=GCOV&polarizations=HH-HV-VH-VV) of quad pol NISAR imagery (*source: ASF Vertex*).

## Geographic domain(s)
* Quad pol NISAR imagery are mainly available only for the midwest US.

## Other
  * X
