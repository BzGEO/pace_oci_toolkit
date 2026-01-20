# Integration of Hyperspectral Imagery and Spaceborne LiDAR Data for Updated Mapping of the Ecosystems in the Mesoamerican Biological Corridor
*Last updated: 20.01.2026*

## Description
This document serves as a chronicle of the ongoing (2025-present) PACE Early Adopter project on the use of OCI and other data for mapping ecosystems in Mesoamerica.

## Project overview
In line with the adage that "you can't manage what you can't measure," ecosystem maps are crucial tools for conservation. Toward that, in 1999 - twenty five years before the launch of NASA's [PACE observatory](https://pace.oceansciences.org/home.htm) - the World Bank and the Government of the Netherlands funded a critical effort to map the terrestrial ecosystems of Central America, long recognized as one of the world's biodiversity hotspots, but which had also been affected by widespread deforestation in the 1970s and the 1980s. By 2002, regional scientists had completed a 1:250,000 scale [map](https://documents1.worldbank.org/curated/en/504821468016811336/pdf/352550rev.pdf) - based on visual interpretation of [Landsat Thematic Mapper](https://science.nasa.gov/mission/landsat/tm/) data (from NASA and the USGS) - which recognized almost 200 individual ecosystem types. In the almost quarter century since the publication of that effort ([*Vreugdenhil et al. 2002*](https://documents1.worldbank.org/curated/en/504821468016811336/pdf/352550rev.pdf)), while access to spaceborne Earth observation data has grown exponentially, the Central American ecosystem mapping data have not been updated.

Given the launch of the PACE observatory in early 2024 and its unique hyperspectral imaging capabilities, we propose to utilize data from PACE's [Ocean Color Instrument (OCI)](https://pace.oceansciences.org/oci.htm) to generate an updated version of a regional ecosystem map of Central America, also leveraging vegetation structural data from NASA’s [Global Ecosystem Dynamics Investigation (GEDI)](https://gedi.umd.edu) mission. Due to the large data volumes that will have to be managed, and given the PI’s status as a [Google Developer Expert](https://g.dev/bzgeo), the cloud-based [Google Earth Engine (GEE)](https://code.earthengine.google.com/) platform will be leveraged for this research effort. A dedicated open repository for processing PACE OCI data for terrestrial applications will be one of the outputs of this effort. This will also complement work that the PI and the co-I have done in the context of the Ecosystem & Carbon Management thematic area of the [former] [SERVIR](https://github.com/SERVIR) program.

## Objectives
*

## Methods
**Geographic domain**
* Mesoamerica -> [EPSG 4326](https://spatialreference.org/ref/epsg/4326/) (GCS WGS84) coordinates: 22, -93, 7, -77 (N, W, S, E)

**Temporal coverage**
* As of the writing of this document (20.01.2026), some 21 **monthly surface reflectance** mosaics (version 3.1) are available from PACE OCI, spanning March 2024 through November 2025.
* These are only three months shy of representing two years of observations -> the February 2026 surface reflectance data might not become available until early April 2026.

**Data volume and characteristics**
* Stored with a bit depth of 32-bit float and containing [122 spectral bands](https://bit.ly/pace_oci_sr_v3_bands) ranging from the visible to shortwave infrared parts of the electromagnetic spectrum, the average size of a single monthly surface reflectance mosaic is 282 MB.
* If the data are rescaled to 16-bit unsigned integers, the size of each file can be reduced to half, so approximately 141 MB.
* While the nominal spatial resolution of the data are 2km x 2km, the precise spatial resolution is 0.020833334 degrees x 0.020833334 degrees, which actually translates to a grid size of 2,319 m x 2,319 m.
* The data were extracted from the original NetCDF (.NC) files downloaded from [NASA EarthData Search](https://search.earthdata.nasa.gov/search) to GeoTIFF (.tif) format using [ESA's SNAP Desktop software]() -> the specific product is the [**PACE OCI Level-3 Global Mapped Surface Reflectance Data, version 3.1**](https://www.earthdata.nasa.gov/data/catalog/ob-cloud-pace-oci-l3m-sfrefl-3.1), which has the short title "PACE_OCI_L3M_SFREFL".

**Processing**
* Toward processing of the data, the 21 months of PACE OCI surface reflectance data were first stacked together.
* A full stack of the 21 months of that data results in an output raster dataset containing 2,562 spectral bands.

## More information
* [Project description](https://pace.oceansciences.org/people_ea.htm?id=127) at the PACE mission website (April 2025)

## References
* Herndon, K.E., Griffin, R., Schroder, W., Murtha, T., Golden, C., Contreras, D.A., Cherrington, E.A., Wang, L., Barazsky, A., Van Kollias, G., Alcover Firpi, O. 2023. Google Earth Engine for archaeologists: An updated look at the progress and promise of remotely sensed big data. Journal of Archaeological Science: Reports, 50: 104094. DOI: https://doi.org/10.1016/j.jasrep.2023.104094

* Crowley, M. A., Stuhlmacher, M., Trochim, E. D., Van Den Hoek, J., Pasquarella, V. J., Szeto, S. H., Howarth, J.T., Platt, R., Roy, S., Tellman, B., Chakraborty, T.C., Ignatius, A., Cherrington, E.A., Markert, K., Wu, Q., Madhusudan, M.D., Mayer, T., Cardille, J.A., Erickson, T., Moore, R., Clinton, N.E., Saah, D. 2023. Pillars of cloud-based Earth observation science education. AGU Advances, 4, e2023AV000894. DOI: https://doi.org/10.1029/2023AV000894

* Cherrington, E.A., Griffin, R.E., Anderson, E.A., Hernandez Sandoval, B.E., Flores-Anderson, A.I., Muench, R.E., Markert, K.E., Adams, E.C., Limaye, A.S., Irwin, D.E. 2020. Use of public Earth observation data for tracking progress in sustainable management of coastal forest ecosystems in Belize, Central America. Remote Sensing of Environment, 245, 111798. DOI: https://doi.org/10.1016/j.rse.2020.111798

* Flores-Anderson, A.I., Griffin, R.E., Dix, M., Romero-Oliva, C.S., Ochaeta, G., Skinner-Alvarado, J., Ramirez Moran, M.V., Hernandez Sandoval, B.E., Cherrington, E.A., Page, B., Barreno, F. 2020. Hyperspectral Satellite Remote Sensing of Water Quality in Lake Atitlán, Guatemala. Frontiers in Environmental Science, 8:7. DOI: http://dx.doi.org/10.3389/fenvs.2020.00007.

* Hernandez, B., Flores, A., Garcia, B., Clemente, A., Moran, M., Cherrington, E.A., Oyuela, M., Smith, O., and J.M. Guardia. 2011. Satellite Monitoring of Lake Atitlan in Guatemala. Proceedings of the Second International Symposium on Building Knowledge Bridges for a Sustainable Water Future: 234-238. Panama City, Panama. November 2011.

* Hernandez, B., Garcia, B., Garrish, V., Cherrington, E.A., Picado, F., Sempris, E. 2011. Mapa Centroamericana de cobertura y uso de la tierra, cambios de cobertura y uso de la tierra 1980-1990-2000-2010. Technical report, no. PREVDA/UGR/SER/14/08. Water Center for the Humid Tropics of Latin America and the Caribbean (CATHALAC). Panama City, Panama. 152 pp. DOI: http://dx.doi.org/10.13140/RG.2.2.16349.82409.
