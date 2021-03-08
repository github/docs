---
title: Create Offline Raster & Vector Maps
versions: '*'
intro: There are many ways how to create and customize Raster & Vector maps for your needs.
---
**_This article is incomplete & needs to be reviewed_**

## OsmAndMapCreator
[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) can be used to create any maps supported by OsmAnd yourself. You can download latest version from [website](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). OsmAndMapCreator has UI capabilities to create raster & vector maps. To create vector map you will need OSM file (`*.pbf, *.osm.gz, *.osm.bz2`) and to create online sqlite map file you will need a `base tile url`.

### Raster maps (simple)
Once you selected the tiles you want to create a map from in the menu **Source of tiles** and they are loaded successfully in OsmAndMapCreator. You can select with right click the area you would like to preload. After that you can create `.sqlitedb` file in **Source of tiles** → **Create sqlite database**.

![Download raster maps](/assets/images/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png)

![Create sqlitedb maps](/assets/images/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png)

### Vector maps (simple)
Steps to create vector map via OsmAndMapCreator UI
1. OSM File
  - Download it from [Geofabrik](https://www.geofabrik.de/data/download.html) or small export from [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187)
  - Convert [Shapefile to OSM](https://wiki.openstreetmap.org/wiki/OGR) 
  - Generate [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) it yourself using any programming utilities, you can proceed by converting it to [OBF Format](/development/osmand-file-formats/osmand-obf) which OsmAnd can undertand
2. Select checkboxes whether you want to produce Maps including Address / Routing / Transport / Map data
3. Select in **File** → **Create .obf from file**.
4. Once process is completed you will have `.obf` file in the working directory. 

![Create vector maps](/assets/images/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png)

More parameters how to generate vector maps could be specified in the shell `utilities.sh `.


## Vector maps (shell script) 
The most typical & the most powerful way to create maps used by developers is via shell script `utilities.sh` packaged within OsmAndMapCreator. It also has many other utilities methods to create some custom maps such as basemap or map with region names & boundaries (regions.ocbf).

Example script: 
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://builder.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

Generation script takes only 1 file OSM file to process at a time (.pbf, .osm.gz, osm.bz2, .osm) and many optional parameters specified as `--xxxxxx`.

| Main command | Description   |
|--------------|---------------|
| `generate-obf` | Generates full obf with map, address, poi, transport, routing information | 
| `generate-obf-no-address` | Generates full obf but without address information | 
| `generate-address` | Generates map with only address information | 
| `generate-poi` | Generates map with only poi information |
| `generate-map` | Generates map with only map rendering information | 
| `generate-roads` | Generates map with only routing information |


All extra parameters could be found in the code in case they are not documented properly [Main Utilities](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). All parameters are optional!

| Parameters | Description |
|--------------|---------------|
| `--add-region-tags` | Slows down map creation process by adding to each way a region name tag where it processed. It's needed only for worldwide basemap or when you process multinational regions, in all other cases it's easier to have proper name for your file i.e. germany_... , us_.... If you don't have this parameter and you don't specify add this parameter, it's likely you will see non-localized road / public transport route badges in OsmAnd. | 
| `--keep-only-sea-objects` | Removes object that are not part of ocean / see, it's used to produce nautical map |
| `--ram-process` | Specifies that creation will be using RAM SQlite DB instead of disk - [more information](#ram-to-process-maps). |
| `--srtm=<FOLDER>` | Specifies folder with TIF-DEM images, so information about height & slope will be encoded into roads |
| `--rendering-types=<FILE>` | rendering_types.xml location with rules & OSM tags needs to be encoded in OBF - [more information](#customize-osm-tags). |
| `--poi-types=<FILE>` | poi_types.xml location with rules & OSM tags needs to be encoded in OBF for POI - [more information](#customize-osm-tags). |
| `--extra-relations=<FILE>` | OSM file with polygons like Low Emission Zones which tags should be propagated to the ways. |


**Note**: Creating maps with batch.xml is deprecated, please use shell methods mentionned above and combine with downloads / for cycles using standard shell script capabilities.


### RAM to process maps
Creating maps is memory hungry and I/O intensive. In other words: it takes very long and could run out of memory! Please check generation on small maps first.
In order to give more memory to JVM, you can declare env JAVA_OPTS variable.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```


What can you do to improve performance:
- Use SSD disks.
- Use multiple disks.
- Use "in memory" processing.
If you want to avoid using disk space and use only RAM to speed up process - specify `--ram-process` parameter. This "in memory" processing will speed up the map generation by 10-50%, but requires a lot of memory. 10% to 50% depends on the map size. Smaller maps benefit less from in memory processing than larger maps, as disk access for initial reading and final map writing plays a bigger role, while larger maps require more "calculation".

In normal "on disk" processing a *nodes.tmp.odb* file is created from your *.osm* or *.osm.pbf* file. This *nodes.tmp.odb* file is a sqlite database file and it is about 15 to 25 times as big as the original *.osm.pbf* file which you downloaded from [geofabrik.de](http://download.geofabrik.de/). So if your original *.osm.pbf* file is 300MB, your *nodes.tmp.odb* file will be 5GB to 6GB! Note that smaller maps will be around the 15x factor whereas big maps (\>350MB) will end up in the 20x to 25X space increase.

With "in memory" processing this *nodes.tmp.odb* file will be created in your working memory. You will need "the size of the nodes.tmp.odb" + 20-25%. Please note that that you don't need to increase `-Xmx` parameter cause SQLite in memory won't occupy JVM memory and use only native operating memory.

Example: for a 250MB *.osm.pbf* a \~4.5GB *nodes.tmp.odb* file will be generated.

### Custom vector map (tags)

**_This article is incomplete & needs to be reviewed_**
- Rendering types xml
- POI types xml


It is possible to create a customized OBF file with specific (own) vector data (hiking paths, speed cams, transport routes debug way info), and adjust the renderer to display it.
OsmAndMapCreator can process only OSM files (osm-xml, bz2, pbf). However the set of tags can be custom. To specify what tags/values need to be indexed by Creator please download and change [this](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) file. OsmAndMapCreator has an option to use custom rendering\_types.xml in the settings. Once file is created you can double check that data is present by utility binaryInspector with `-vmap` argument. This utility is packaged with OsmAndMapCreator.

Once the .obf file is ready you can create custom rendering file to display missing attributes. There is a [default rendering style](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml) which contains all information about rendering. It is good to have a look at it but it is very hard to open/edit it and understand. More convenient way to create your own rendering style is to create style that depends (inherits) default style. A good example of custom rendering style you can find [here](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/Winter-and-ski.render.xml.).

Currently OsmAndMapCreator doesn't support relation tagging. So you need to manually copy all tags from relations (like route color) to way tags by script.



## Raster maps (advanced)

**_This article is incomplete & needs to be reviewed_**
- Using MOBAC to create OsmAnd online tiles
- Converting image & pdf maps to OsmAnd online map - [Video tutorial](https://www.youtube.com/watch?v=Y_fekLfcUOc).


## Common Issues
### OutOfMemoryError issue
**Issue**: OsmAndMapCreator fails with message:
The file you try to process with OsmAndMapCreator is too large. Either try to process a smaller file, or increase the memory for OsmAndMapCreator in the .sh or .bat file. The `-Xmx` parameter specifies how much memory the program can consume. Settings can be different for 64bit (more than 1.5GB) and 32bit (max around 1.5GB) machines.

### Empty file issue
**Issue**: After converting an .osm to .obf with only a POI index, the .obf is empty, although original .osm file did contain POIs. What is wrong?
It could be that a crucial tag was missing for OsmAndMapCreator to recognize a POI when you converted the osm from another source, like Garmin. If a point in the OSM file looks like this:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
change it to contain an additional 'amenity' tag, like:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```
 
Then convert the file using OsmAndMapCreator. You can check on the OSM site what tags are good ones to use and you can also verify which tags are supported by [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml).
