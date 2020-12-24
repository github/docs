---
title: OsmAnd only shows some speed cams
versions: '*'
---

Due to the geodata taken from the OpenStreetMap project there are by now
two methods how speed cameras are integrated in the raw OSM data:

-   A point (called "node" in OSM terminology) of a way is tagged with
    "highway=speed\_camera"), see OSM wiki at
    [highway=speed\_camera](https://wiki.openstreetmap.org/wiki/Tag%3Ahighway%3Dspeed_camera)
-   a group of OSM data elements are joined together in a so called
    "relation" that contains more elements than a single node to
    describe the direction that is covered by the speed trap ... see
    [Relation:enforcement](https://wiki.openstreetmap.org/wiki/Relation:enforcement)

Currently, OsmAnd can only make use of the elements that consists of a
single node. Analyzing of relations is to come in a future release.
