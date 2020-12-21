---
title: Debug OBF Routing on a PC
versions: '*'
---
# Debug OBF Routing on a PC with OSM Map Display
- go to [https://osmand.net](https://osmand.net "https://osmand.net") and download [OsmandMapCreator.zip](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip "http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip") from the link on the right screen side, and unzip it,
- copy the obf file from your phone or tablet into that folder,
- start OsmandMapCreator via bat file or sh file,
- be sure to have an internet connection so that mapcreator can download map tiles, check all menus and settings inside mapcreator,
- set the working directory of mapcreator to the folder where mapcreator itself and the obf file is located.
- pan and zoom the map to that place where you have routing issues and that is covered by the mentioned OBF file,
- do right clicks in the map to set start and end points and different routing engines

Find the place name a street is associated with in offline OBF maps
- Have a Java framework installed on your desktop computer.
- Download Osmand's Mapcreator, for example from [download.osmand.net/releases](https://download.osmand.net/releases/) and unzip it to your PC.
- Take any map file with extensiuon OBF and put it in the same folder where all files from mapcreator are located.
- Start Mapcreator on your PC by clicking OsmAndMapCreator.bat or OsmAndMapCreator.sh
- Be sure that you have internet access on your PC, and Mapcreator's settings are that tiles are downloaded when you drag and zoom the map to your location where your issue is located.
- If you have zoomed to your area, do a right-click with the mouse on the map and choose "show address" from the popup-menu.
- Normally, now all the street names should be displayed from the obf file, and the place name to where each street is associated in Osmand's offline search.
