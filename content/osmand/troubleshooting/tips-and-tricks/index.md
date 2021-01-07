---
title: "Tips and Tricks"
intro: "Tips and Tricks around using OsmAnd, e.g. marking places, searching things, working with GPX files, specific use cases."
versions: '*'
---

Map viewing and searching:

{% link_in_list /mark-places %}
{% link_in_list /how-to-search-an-address-via-postcode %}
{% link_in_list /how-to-delete-the-history %}

Working with GPX-files:
{% link_in_list /importing-a-gpx %}
{% link_in_list /gpx-navigation-options %}

Other functionality:
{% link_in_list /tts-vs-recorded-voices %}
{% link_in_list /display-contour-lines-in-feet %}
{% link_in_list /osmand-and-google-maps %}
{% link_in_list /osmand/setup/uninstall-or-reset-without-losing-your-data %}
{% link_in_list /osmand-power-comsummption %}


### Is there a way to have contour lines displayed in feet also, instead of meters?

Unfortunately not. This would require the generation of completely separate contour line data with different geometry and labels. You can obviously generate maps yourself using GDAL and OsmAndMapCreator but that requires technical environment check [Technical Documentation](/development).

### I have a GPX file, how do I get it into OsmAnd?
- Android
    - You can [download and open it](https://osmand.net/features/trip-planning#Planning_trip_using_GPX_track) via File Browser or Dropbox and select OsmAnd as a target application
    - You can put it in OsmAnd home folder: osmand/tracks/(optional\_sub-folder)/your\_file.gpx
- iOS
    - To open [a GPX file in OsmAnd](https://osmand.net/features/trip-planning#Planning_trip_using_GPX_track),
just download it and select OsmAnd as an app to open it. That's it: you'll view the file normally in the application.
