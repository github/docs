---
title: Using KML Files
versions: '*'
---
# Using KML Files

In GoogleEarth (GE) you can add you own Placemarks on the map and collect them into a folder. From GE you can save the folder in kml format. When you have a different format you can use QGIS or other opensource software to convert to KML format. Maybe you can convert it directly to osm. You may use any format containing your POIs, if you are able to convert it to osm format. You can format KML to GPX [here](https://kml2gpx.com/).

## Converting KML (or Other Formats) into osm Format

To perform this task we need to use gpsbabel. It is very useful to convert waypoints, tracks, and routes between popular GPS receivers and mapping programs. The syntax is very simple, and GPS Babel has an interface to create the syntax for you:
<pre>
$ gpsbabel -i kml -f my_places.kml -o osm,tagnd="tourism:museum",​created_by -F my_places.osm
</pre>
The generated file is like this:
<pre>
&lt;?xml version='1.0' encoding='UTF-8'?>
&lt;osm version='0.5' generator='GPSBabel-1.4.0'>
  &lt;node id='-1' visible='true' lat='41.890121' lon='12.492265'>
    &lt;tag k='name' v='place01'/>
    &lt;tag k='note' v='place01'/>
    &lt;tag k='tourism' v='museum'/>
  &lt;/node>
  &lt;node id='-2' visible='true' lat='41.892241' lon='12.489031'>>
    &lt;tag k='name' v='place02'/>
    &lt;tag k='note' v='place02'/>
    &lt;tag k='tourism' v='museum'/>
  &lt;/node>
&lt;/osm>
</pre>         

All points inside the kml file are converted into osm points, assigning them some properties like tourism category and museum type. The `created_by=` option with missing value means that the properties will be ignored. If your POI belongs to different categories, I suggest you create multiple osm files and create OsmAnd obf files and merge them together later with OsmAndMapCreator, or create multiple obf files.

## Converting OSM Format into OBF Format

Now you are ready to perform the final step. The conversion will be done using OsmAndMapCreator. Download, unzip and run this program.
- Deselect all choices except Build POI Index as shown:
- Select the work dir (File/Specify working directory…)
- Load my_places.osm (File/Select osm file…)

If all is right you'll find My\_places.obf into your workdir folder. Simply upload this file into your OsmAnd phone folder and you have done.

Good luck!!!
