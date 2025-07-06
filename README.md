# A toolkit for land data from the NASA Plankton, Aerosol, Cloud, ocean Ecosystem - Ocean Color Instrument (PACE OCI)
OVERVIEW: This is a set of JavaScript-based [Google Earth Engine (GEE)](https://code.earthengine.google.com) tools for accessing land data from the OCI sensor on NASA's [PACE satellite]( https://pace.oceansciences.org). One of the [dependency packages](https://bit.ly/gee_repo_hyperspectral) provides direct access to PACE OCI *provisional* surface reflectance and vegetation index data that have been loaded into GEE. Another dependency package provides data on the wavelengths of the PACE OCI surface reflectance bands, as well as the wavelengths of NASA [EO-1 Hyperion](https://developers.google.com/earth-engine/datasets/catalog/EO1_HYPERION) and NASA [EMIT](https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2A_RFL), for comparison. Aside from the dependencies, the scripts provide examples to allow users to interact with the data, and examples are provided whose geographic scopes can be modified to meet users' needs. The scripts are divided into the following main functions:

(i) Data discovery

(ii) Data visualization

(iii) Spectral signature visualization

(iv) Data gap filling

(v) Time series analysis

(vi) Image classification

# Notes:
1. To add the code repository directly to your Google Earth Engine account, use the following bit.ly link: https://bit.ly/gee_repo_pace_oci.
2. A video overview of the tools is provided in the third part of the following, from the 2nd PACE Land data Users' Group (PLUG) meeting of 1 July 2025: https://www.youtube.com/watch?v=hOu8rPd_x6I.
3. More information on the PLUG can be found at: https://pace.oceansciences.org/event_archive/landDataUserGroup.htm.
4. More information on the PACE products can be found at: https://pace.oceansciences.org/data_table.htm.

# Context
This work was initially soft-launched on 22 May 2025, during the virtual [Technical Interchange Meeting](https://sbg.jpl.nasa.gov/news-events/sbg-sa-tim-2025) of NASA's Surface Biology and Geology (SBG) mission. This work is being led by researchers from the [Lab for Applied Science](https://www.uah.edu/essc/laboratory-for-applied-science) of the [Earth System Science Center](https://www.uah.edu/essc) of the University of Alabama in Huntsville and has been supported by the [SERVIR](https://science.nasa.gov/category/missions/servir/) Science Coordination Office at the NASA Marshall Space Flight Center. This work is being done in the context of a [Early Adopters project](https://pace.oceansciences.org/people_ea.htm?id=127) for the PACE mission.

# About
This text was last updated on 4 July 2025.
