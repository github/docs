---
title: "Tips and Tricks"
intro: "Tips and Tricks around using OsmAnd, e.g. marking places, searching things, working with GPX files, specific use cases."
versions: '*'
---
- [Is there a way to have contour lines displayed in feet also, instead of meters?](#i-have-a-gpx-file-how-do-i-get-it-into-osmand)

### Is there a way to have contour lines displayed in feet also, instead of meters?

Unfortunately not. This would require the generation of completely separate contour line data with different geometry and labels. You can obviously generate maps yourself using GDAL and OsmAndMapCreator but that requires technical environment check [Technical Documentation](/development).

### I have a GPX file, how do I get it into OsmAnd?
- Android
    - You can [download and open it](https://osmand.net/features/trip-planning#Planning_trip_using_GPX_track) via File Browser or Dropbox and select OsmAnd as a target application
    - You can put it in OsmAnd home folder: osmand/tracks/(optional\_sub-folder)/your\_file.gpx
- iOS
    - To open [a GPX file in OsmAnd](https://osmand.net/features/trip-planning#Planning_trip_using_GPX_track),
just download it and select OsmAnd as an app to open it. That's it: you'll view the file normally in the application.
