# Integration of Hyperspectral Imagery and Spaceborne LiDAR Data for Updated Mapping of the Ecosystems in the Mesoamerican Biological Corridor
*Last updated: 22.01.2026*

## Co-authors
* [Emil A. Cherrington](https://github.com/BzGEO), Ph.D., Principal Research Scientist, [Lab for Applied Sciences](https://www.uah.edu/essc/laboratory-for-applied-science), [Earth System Science Center](https://www.uah.edu/essc), the [University of Alabama in Huntsville](https://www.uah.edu)
* [Kelsey E. Herndon](https://github.com/herndk1), Research Scientist, Lab for Applied Sciences, Earth System Science Center, the University of Alabama in Huntsville
* [Betzy E. Hernandez Sandoval](https://github.com/BEHS), Research Scientist, Lab for Applied Sciences, Earth System Science Center, the University of Alabama in Huntsville
* [Robert E. Griffin](https://github.com/r-griffin), Ph.D., Associate Professor, [Department of Atmospheric and Earth Science](https://www.uah.edu/science/departments/atmospheric-earth-science), the University of Alabama in Huntsville

## Description
This document serves as a chronicle of the ongoing (2025-present) PACE Early Adopter project on the use of OCI and other data for mapping ecosystems in Mesoamerica.

## Project overview
In line with the adage that "you can't manage what you can't measure," ecosystem maps are crucial tools for conservation. Toward that, in 1999 - twenty five years before the launch of NASA's [PACE observatory](https://pace.oceansciences.org/home.htm) - the World Bank and the Government of the Netherlands funded a critical effort to map the terrestrial ecosystems of Central America, long recognized as one of the world's biodiversity hotspots, but which had also been affected by widespread deforestation in the 1970s and the 1980s. By 2002, regional scientists had completed a 1:250,000 scale [map](https://documents1.worldbank.org/curated/en/504821468016811336/pdf/352550rev.pdf) - based on visual interpretation of [Landsat Thematic Mapper](https://science.nasa.gov/mission/landsat/tm/) data (from NASA and the USGS) - which recognized almost 200 individual ecosystem types. In the almost quarter century since the publication of that effort ([*Vreugdenhil et al. 2002*](https://documents1.worldbank.org/curated/en/504821468016811336/pdf/352550rev.pdf)), while access to spaceborne Earth observation data has grown exponentially, the Central American ecosystem mapping data have not been updated.

Given the launch of the PACE observatory in early 2024 and its unique hyperspectral imaging capabilities, we propose to utilize data from PACE's [Ocean Color Instrument (OCI)](https://pace.oceansciences.org/oci.htm) to generate an updated version of a regional ecosystem map of Central America, also leveraging vegetation structural data from NASA’s [Global Ecosystem Dynamics Investigation (GEDI)](https://gedi.umd.edu) mission. Due to the large data volumes that will have to be managed, and given the PI’s status as a [Google Developer Expert](https://g.dev/bzgeo), the cloud-based [Google Earth Engine (GEE)](https://code.earthengine.google.com/) platform will be leveraged for this research effort. A dedicated open repository for processing PACE OCI data for terrestrial applications will be one of the outputs of this effort. This will also complement work that the PI and the co-I have done in the context of the Ecosystem & Carbon Management thematic area of the [former] [SERVIR](https://github.com/SERVIR) program.

## Objectives
* Demonstrate the utility of hyperspectral data from PACE OCI for mapping ecosystems for ecological conservation purposes
* Demonstrate how hyperspectral data from PACE OCI can be fused with spaceborne LiDAR data from GEDI
* Update the map of Central America's ecosystems, and use that as a case study for mapping ecosystems in other geographic domains
* Leverage the cloud computing capabilities of GEE, including the GEE-based [PACE OCI Toolkit](https://github.com/BzGEO/pace_oci_toolkit)

## Methods
**Geographic domain**
* The specific [EPSG 4326](https://spatialreference.org/ref/epsg/4326/) (GCS WGS84) coordinates are as follows: **22°, -93°, 7°, -77°** (N, W, S, E).
* The domain covers all of continental territories of the 7 Central American countries (Belize, Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, and Panama), total coverage of 3 southern states in Mexico (Campeche, Quintana Roo, Yucatan), and partial coverage of 2 other southern states in Mexico (Chiapas, Tabasco).

**Temporal coverage**
* As of the writing of this document (Jan. 2026), some 21 **monthly surface reflectance** mosaics (version 3.1) are available from PACE OCI, spanning March 2024 through November 2025.
* These are only three months shy of representing two years of observations -> the February 2026 surface reflectance data might not become available until early April 2026.

**Data volume and characteristics**
* Stored with a bit depth of 32-bit float and containing [122 spectral bands](https://bit.ly/pace_oci_sr_v3_bands) ranging from the visible to shortwave infrared parts of the electromagnetic spectrum, the average size of a single monthly surface reflectance mosaic is 282 MB.
* If the data are rescaled to 16-bit unsigned integers, the size of each file can be reduced to half, so approximately 141 MB.
* While the nominal spatial resolution of the data are 2km x 2km, the precise spatial resolution is 0.020833334 degrees x 0.020833334 degrees, which actually translates to a grid size of 2,319 m x 2,319 m.
* The data were extracted from the original NetCDF (.NC) files downloaded from [NASA EarthData Search](https://search.earthdata.nasa.gov/search) to GeoTIFF (.tif) format using [ESA's SNAP Desktop software](https://step.esa.int/main/download/snap-download/2/) -> the specific product is the [**PACE OCI Level-3 Global Mapped Surface Reflectance Data, version 3.1**](https://www.earthdata.nasa.gov/data/catalog/ob-cloud-pace-oci-l3m-sfrefl-3.1), which has the short title "PACE_OCI_L3M_SFREFL".

**Processing**
* Toward processing of the data, the 21 months of PACE OCI surface reflectance data were first stacked together.
* A full stack of the 21 months of that data results in an output raster dataset containing 2,562 spectral bands.
* To reduce the data volume, the data were rescaled to 16-bit unsigned integers, by multiplying the data by 10,000 and then converting the data from floating point to integers.
* (By multiplying the data by 10,000, values with 100% reflectance becomes 10,000, while data with 0% reflectance remain 0.)
* The resulting data stack had a size of 2.93 GB.
* To reduce the data size, reduce spectral noise, and to emphasize spectral patterns common across the various bands and dates, [Principal Component Analysis (PCA)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4792409/) was employed.
* While the extraction of principal components could have been done in GEE, the operation was relatively resource consuming (i.e., it caused memory timeouts), so the PCA was done using the ArcGIS Pro 3.5.4 platform, on a Windows workstation with 32GB of RAM, and a 3.3 GHz Intel i5 processor (12th generation).
* On that workstation, conducting the PCA took approximately 8 hours and 25 minutes.
* TBD

## Results
* From the PCA of the 2,652 band raster, it was revealed that 99.06% of the data variation were captured in the first 20 principal components (of 2,652 potential components).
* Additionally, 94.63% of the variation was captured just in the first principal component, and 97.82% of the variation was captured in the first 10 principal components.
* And compared to the original ~3 GB data stack of the 21 months of surface reflectance data, the 20 band PCA output was only 39 MB.
* TBD

### Table 1. Percent and accumulative eigenvalues

### PC Layer   EigenValue   Percent of EigenValues   Accumulative of EigenValues
        1  1.479848e+09          94.6251               94.6251
        2  1.227428e+07           0.7848               95.4099
        3  9.764236e+06           0.6243               96.0343
        4  5.712588e+06           0.3653               96.3995
        5  4.925524e+06           0.3149               96.7145
        6  4.250913e+06           0.2718               96.9863
        7  3.809846e+06           0.2436               97.2299
        8  3.410794e+06           0.2181               97.4480
        9  2.938946e+06           0.1879               97.6359
       10  2.868998e+06           0.1835               97.8194
       11  2.593107e+06           0.1658               97.9852
       12  2.452383e+06           0.1568               98.1420
       13  2.375681e+06           0.1519               98.2939
       14  2.253670e+06           0.1441               98.4380
       15  1.994205e+06           0.1275               98.5655
       16  1.866646e+06           0.1194               98.6849
       17  1.667166e+06           0.1066               98.7915
       18  1.584074e+06           0.1013               98.8928
       19  1.393348e+06           0.0891               98.9819
       20  1.282326e+06           0.0820               99.0639


## Conclusions
* TBD

## Acknowledgements
* TBD

## References

* Cherrington, E.A., Griffin, R.E., Anderson, E.A., Hernandez Sandoval, B.E., Flores-Anderson, A.I., Muench, R.E., Markert, K.E., Adams, E.C., Limaye, A.S., Irwin, D.E. 2020. Use of public Earth observation data for tracking progress in sustainable management of coastal forest ecosystems in Belize, Central America. Remote Sensing of Environment, 245, 111798. DOI: https://doi.org/10.1016/j.rse.2020.111798

* Crowley, M. A., Stuhlmacher, M., Trochim, E. D., Van Den Hoek, J., Pasquarella, V. J., Szeto, S. H., Howarth, J.T., Platt, R., Roy, S., Tellman, B., Chakraborty, T.C., Ignatius, A., Cherrington, E.A., Markert, K., Wu, Q., Madhusudan, M.D., Mayer, T., Cardille, J.A., Erickson, T., Moore, R., Clinton, N.E., Saah, D. 2023. Pillars of cloud-based Earth observation science education. AGU Advances, 4, e2023AV000894. DOI: https://doi.org/10.1029/2023AV000894

* Flores-Anderson, A.I., Griffin, R.E., Dix, M., Romero-Oliva, C.S., Ochaeta, G., Skinner-Alvarado, J., Ramirez Moran, M.V., Hernandez Sandoval, B.E., Cherrington, E.A., Page, B., Barreno, F. 2020. Hyperspectral Satellite Remote Sensing of Water Quality in Lake Atitlán, Guatemala. Frontiers in Environmental Science, 8:7. DOI: http://dx.doi.org/10.3389/fenvs.2020.00007.

* Hernandez, B., Garcia, B., Garrish, V., Cherrington, E.A., Picado, F., Sempris, E. 2011. Mapa Centroamericana de cobertura y uso de la tierra, cambios de cobertura y uso de la tierra 1980-1990-2000-2010. Technical report, no. PREVDA/UGR/SER/14/08. Water Center for the Humid Tropics of Latin America and the Caribbean (CATHALAC). Panama City, Panama. 152 pp. DOI: http://dx.doi.org/10.13140/RG.2.2.16349.82409.

* Hernandez, B., Flores, A., Garcia, B., Clemente, A., Moran, M., Cherrington, E.A., Oyuela, M., Smith, O., and J.M. Guardia. 2011. Satellite Monitoring of Lake Atitlan in Guatemala. Proceedings of the Second International Symposium on Building Knowledge Bridges for a Sustainable Water Future: 234-238. Panama City, Panama. November 2011.

* Herndon, K.E., Griffin, R., Schroder, W., Murtha, T., Golden, C., Contreras, D.A., Cherrington, E.A., Wang, L., Barazsky, A., Van Kollias, G., Alcover Firpi, O. 2023. Google Earth Engine for archaeologists: An updated look at the progress and promise of remotely sensed big data. Journal of Archaeological Science: Reports, 50: 104094. DOI: https://doi.org/10.1016/j.jasrep.2023.104094

## Supplementary information
* [Project description](https://pace.oceansciences.org/people_ea.htm?id=127) at the PACE mission website (April 2025)
