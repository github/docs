---
title: "Offline search by address does not show all streets"
versions: '*'
---

--ADJUST LINKS--

Most of these issues are map data issues and should be double-checked
via [OpenStreetMap](https://www.openstreetmap.org/). If you can see that
data is present there (note that it takes some time for new OSM data to
appear in OsmAnd maps), then the problem is in OsmAnd's algorithm or how
that data is structured.

The most common issue is that streets exist but are not found in a city,
and this is due to missing evidence in the OSM data to what town/city
the street belongs. In OsmAnd's address search you can try the button
"Search in neighbouring cities" if you do not find a street as expected.

To investigate this problem you can use the BinaryInspector tool from
[OsmAndMapCreator](https://www.osmand.net), installation of which shows
you exact information on what is in the obf file. Most probably you will
find your street in a neighboring town. If you decide to report an
issue, please specify all relevant information in its description.

If you want to see more detail about why these issues occur in OsmAnd's
algorithms, please read [this
article](https://osmand.net/help-online?id=MapAddressDataStructure).

You can also follow [this
guide](https://osmand.net/features/find-something-on-map) to lern more
about the search in OsmAnd
