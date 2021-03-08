---
title: How to Inspect an obf Binary File
versions: '*'
---

**_This article needs to be reviewed_**

If you want inspect the content of an obf file, you need to download [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-development.zip). There you can find a console application Inspector (.sh, .bat). This console application has optional parameters [-vmap, -vaddress, -vtransport] and one required parameter (input obf file). By specifying optional parameters you can trace all information from the obf file (be aware: it could be huge!).

Example and step-by-step for Windows users:
- have Java Runtime Environment installed
- download or copy any Osmand offline map from your device to your PC, place that obf file ideally in the folder with all the unzipped Mapcreator files
- Open Windows commandline (e.g. by pressing Windows-key and "r", then enter cmd and press return
- go to the folder where you have unzipped the Osmand-Mapcreator by command cd and folder name
- type `dir` to see whether you are in the right folder with file inspector.bat
- type `inspector -h` to see some help text
- type `inspector -vaddress name_of_your_map.obf \>output.csv`
- if you get a Java console error about not enough memory or similar, edit the file inspector.bat by increasing the number at parameter -Xmx512M (or similar) step-by step to a higher value
- try to load that (eventually very big) CSV text file into any editor or program that can load very big files, like Notepad++ ... or try an import into any spreadsheet programm like Excel or LibreOffice calc (choose TAB as field separator)
- use any search feature to find place names or street names
