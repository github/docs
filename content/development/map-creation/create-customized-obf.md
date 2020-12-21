---
title: How to Produce Customized Vector Data
versions: '*'
---
# How to Produce Customized Vector Data

It is possible to create a customized obf file with specific (own) vector data (hiking paths, speed cams, transport routes debug way info), and adjust the rendere to display it.

OsmAndMapCreator can process only OSM files (osm-xml, bz2, pbf). However the set of tags can be custom. To specify what tags/values need to be indexed by Creator please download and change [this](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) file. OsmAndMapCreator has an option to use custom rendering\_types.xml in the settings. Once file is created you can double check that data is present by utility binaryInspector with '-vmap' argument. This utility is packaged with OsmAndMapCreator.

Once the .obf file is ready you can create custom rendering file to display missing attributes. There is a [default rendering style](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml) which contains all information about rendering. It is good to have a look at it but it is very hard to open/edit it and understand. More convenient way to create your own rendering style is to create style that depends (inherits) default style. A good example of custom rendering style you can find [here](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/Winter-and-ski.render.xml.).

Currently OsmAndMapCreator doesn't support relation tagging. So you need to manually copy all tags from relations (like route color) to way tags by script.

