# the PACE OCI Toolkit

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15873995.svg)](https://doi.org/10.5281/zenodo.15873995)
[![Update](https://img.shields.io/github/last-commit/bzgeo/pace_oci_toolkit?label=repo%20last%20updated&style=flat-square)](https://github.com/BzGEO/pace_oci_toolkit/tree/main)
![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=bzgeo.pace_oci_toolkit)

[![GEE badge](https://img.shields.io/badge/Google%20Earth%20Engine-4285F4.svg?style=for-the-badge&logo=Google-Earth-Engine&logoColor=white)](https://bit.ly/gee_repo_pace_oci)

## Summary
This is a set of JavaScript-based [Google Earth Engine 🌎 (GEE)](https://code.earthengine.google.com) tools for accessing land data from the [Ocean Color Instrument (OCI)](https://pace.oceansciences.org/oci.htm) sensor on NASA's [Plankton, Aerosol, Cloud, ocean Ecosystem (PACE)]( https://pace.oceansciences.org) satellite 🛰️. One of the [dependency packages](https://bit.ly/gee_repo_hyperspectral) provides direct access to PACE OCI *provisional* [surface reflectance (SR)](https://oceancolor.gsfc.nasa.gov/data/10.5067/PACE/OCI/L2/SFREFL/3.0) and [vegetation index (VI)](https://oceancolor.gsfc.nasa.gov/data/10.5067/PACE/OCI/L2/LANDVI/3.0) data that have been loaded into GEE. Another dependency [package](https://bit.ly/gee_repo_hyperspectral) provides data on the *hyperspectral* wavelengths of the PACE OCI [surface reflectance](https://oceancolor.gsfc.nasa.gov/data/10.5067/PACE/OCI/L2/SFREFL/3.0) [bands](https://bit.ly/pace_oci_sr_v3_bands), as well as the wavelengths of NASA's other spaceborne hyperspectral imagers, namely [EO-1 Hyperion](https://developers.google.com/earth-engine/datasets/catalog/EO1_HYPERION) and the ISS [EMIT](https://developers.google.com/earth-engine/datasets/catalog/NASA_EMIT_L2A_RFL), for comparison. Aside from the dependencies, example scripts are provided to allow users to interact with the data, and the geographic and temporal scopes of those examples can be modified to meet users' needs.

## Functions
The scripts are divided into the following main functions:

**(i) Data discovery** (*for discovering which PACE OCI SR and VI data are available, as well as which EO-1 Hyperion and EMIT data are available*)

**(ii) Data visualization** (*for viewing PACE OCI SR and VI data are available, as well as viewing available EO-1 Hyperion and EMIT data*)

**(iii) Spectral signature visualization** (*for extracting and viewing the spectral signatures of specific land cover or vegetation features*)

**(iv) Data gap filling** (*for filling data gaps using averages or using harmonic functions*)

**(v) Time series analysis** (*for viewing the time series of SR or VI data*)

**(vi) Image classification** (*for basic unsupervised learning classification of PACE OCI data*)

![](https://github.com/BzGEO/pace_oci_toolkit/blob/main/_graphics/pace_oci_gee_toolkit_structure_2025-07-13.PNG)

## 📢 Add this repo to Google Earth Engine 📢
To add the code repository 💾 directly to your GEE account, use the following *bit.ly* 🔗: https://bit.ly/gee_repo_pace_oci.

![](https://github.com/BzGEO/pace_oci_toolkit/blob/main/_graphics/pace_oci_global_in_gee_2025-05.PNG)

## Additional information
1. A video 🎥 overview of the tools is provided in the third part of the following, from the [2nd PACE Land data Users' Group (PLUG) meeting](https://pace.oceansciences.org/events_more.htm?id=77) on *1 July 2025*: https://www.youtube.com/watch?v=hOu8rPd_x6I.
2. More information on the PLUG can be found at: https://pace.oceansciences.org/event_archive/landDataUserGroup.htm.
3. More information on PACE's data products can be found at: https://pace.oceansciences.org/data_table.htm.

![](https://github.com/BzGEO/pace_oci_toolkit/blob/main/_graphics/pace_plug.png)

## Methods: Workflow for getting PACE OCI land data into GEE

The following is a graphical representation of the process for ingesting the PACE OCI land data into GEE. An [R script](https://github.com/BzGEO/pace_oci_conversion) was used for batch processing of the PACE OCI vegetation index data that were ingested into GEE.

![](https://github.com/BzGEO/pace_oci_toolkit/blob/main/_graphics/pace_gee_processing_v20250630.png)

## Acknowledgements
This work was initially [soft-launched](https://bit.ly/sbg_tim_2025_pace_tk) on 22 May 2025, during the virtual [Technical Interchange Meeting](https://sbg.jpl.nasa.gov/news-events/sbg-sa-tim-2025) of NASA's [Surface Biology and Geology (SBG)](https://sbg.jpl.nasa.gov/) mission. This work is being led by researchers from the [Lab for Applied Science](https://www.uah.edu/essc/laboratory-for-applied-science) of the [Earth System Science Center](https://www.uah.edu/essc) of the [University of Alabama in Huntsville](https://www.uah.edu/) and has been supported by the [NASA](https://www.nasa.gov) Earth Action / NASA [Marshall Space Flight Center](https://www.nasa.gov/marshall/). This work is being done in the context of an [Early Adopters project](https://pace.oceansciences.org/people_ea.htm?id=127) for PACE. The PACE Mission Applications Lead, Dr. Morgaine McKibben (NASA / SSAI), is acknowledged for her support, as are Skye Caplan (NASA / SSAI) of the PACE mission, and Dr. K. Fred Huemmrich of the PACE Science & Applications Team (NASA / UMBC). Kudos are also due to [Kelsey Herndon](https://github.com/herndk1) (NASA / UAH), [Dr. Africa-Flores-Anderson](https://github.com/africaf) (NASA), [Eric Anderson](https://github.com/andersoner) (NASA), Dr. Kevin Horn (NASA), Dr. Ashutosh Limaye (NASA), and Dan Irwin (NASA) of NASA MSFC.

## Citation

If this toolkit is used in publications, presentations, or other venues, please cite 📝 the following:

Cherrington, E. (2025). PACE OCI data Toolkit (Version 1.0.0.1) [Computer software]. https://doi.org/10.5281/zenodo.15873995

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15873995.svg)](https://doi.org/10.5281/zenodo.15873995)

## Contact information

If you have any questions, feel free to contact Emil Cherrington by :envelope_with_arrow: email: **emil.cherrington [at] uah.edu**.
