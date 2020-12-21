---
title: Create Offline Maps Yourself
versions: '*'
---
# Create Offline Maps Yourself
[*OsmAndMapCreator*](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) can be used to create maps yourself if you want maps that are more up-to-date then the ones you can download from OsmAnd.
The following explains how, using a Un\*x/Linux/OS X like shell script and the nightly generated maps from [Geofabrik](http://download.geofabrik.de/), a German company that sells OpenstreetMap based maps and appliances.

## Shell script:
<pre>
#!/bin/sh
WORK_FOLDER="/opt/OpenStreetMap"
# First download all the data
cd "$WORK_FOLDER/osm_files"
echo "Now in pwd\n"
rm *
wget -v -O Netherlands_europe.osm.pbf "http://download.geofabrik.de​/europe/netherlands-latest.osm.pbf"
#wget -v -O Luxembourg_europe.osm.pbf "http://download.geofabrik.de​/europe/luxembourg-latest.osm.pbf"
#wget -v -O Belgium_europe.osm.pbf "http://download.geofabrik.de​/europe/belgium-latest.osm.pbf"

cd $WORK_FOLDER
echo date > starttime.txt
echo "Now converting from osm.pbf to osmand obf\n"
cd "$WORK_FOLDER/OsmAndMapCreator"

java -Djava.util.logging.config.file=​logging.properties -Xms256M -Xmx2560M -cp "./OsmAndMapCreator.jar:​./lib/OsmAnd-core.jar:./lib/*.jar" net.osmand.data.​index.IndexBatchCreator ./batch.xml

cd $WORK_FOLDER
echo date > endtime.txt

echo "And finally moving the obf files from the index folder to the osmandmaps folder\n"
mv index_files/*.obf osmandmaps/
</pre>       

### Explanation
Line `WORK_FOLDER="/opt/OpenStreetMap"` is a variable to set the working folder. Inside this folder we have the maps _osm\_files_, _OsmAndMapCreator_, _index\_files_ and _gen\_files_.

We go to the download folder \_osm\_files\_ and use the command \_wget\_ to download our map(s). `wget` is used with parameter `\_-O \<name\>\_` to download the latest nightly map from Geofabrik, we save it in the name format OsmAnd prefers.

We go to folder _OsmAndMapCreator_ where we installed/copied the OsmAndMapCreator program. It is best to use the program from this folder, or else you need to set all kind of environment variables. The line:
<pre>
java -Djava.util.logging.config.file=​logging.properties -Xms256M -Xmx2560M -cp "./OsmAndMapCreator.jar:​./lib/OsmAnd-core.jar:./lib/*.jar" net.osmand.data.​index.IndexBatchCreator ./batch.xml
</pre>
runs OsmAndMapcreator with our downloaded maps, processing all maps it will find in the download folder (including all older ones still present there).

We log the process to file (-Djava.util.logging.config.file=logging.properties), give OsmAndMapCreator a minimum amount of 256MB and a maximum amount of 2560MB (preferably more then 1024MB), and use the setup as specified in _batch.xml_.  

**Note:** A 32bit Operating system can address up to approximately **1.5GB**, meaning -Xmx can be no greater than -Xmx1720M. Greater values are accepted without errors, but not used.

The _batch.xml_ file is found in the _OsmAndMapCreator_ folder, together with the program, and contains settings for running the program. The line:
<pre>
process directory_for_osm_files=​"/opt/OpenStreetMap/osm_files" directory_for_index_files=​"/opt/OpenStreetMap/index_files" directory_for_generation=​"/opt/OpenStreetMap/gen_files"
</pre>
specifies the working folders.

The next line:
<pre>
skipExistingIndexesAt="/..." indexPOI="true" indexRouting="true" indexMap="true" indexTransport="true" indexAddress="true">
</pre>       
contains options to modify parts of your map. If you don't need routing and/or addresses, you can skip these by setting the parameters to "false".

You may also use multiple _batch.xml_ files for different purposes.

The last two lines in the script move the created maps to the _osmandmaps_ folder where we store our maps (in this case).

Lines
<pre>
echo date > starttime.txt
echo date > endtime.txt
</pre>
are not really necessary but simply display how long the process takes.

### Scheduling
The shell script may be scheduled. Account e.g. for the Geofabrik map creation schedule (adjust for your time zone).

If you want to create a new map every night, you can add a crontab line like:
<pre>
01 03 * * 7 /opt/OpenStreetMap/​osm.pbf_to_obf_convert.sh > /dev/null 2>&1
</pre>
This will start the map creation at 03:01am which is currently after the Geofabrik Netherlands osm.pbf map has been generated (local time zone).

### Performance and Tuning
Creating maps is memory hungry and I/O intensive. In other words: It takes long to very long!
What can you do to improve performance:
- Use SSD disks.
- Use multiple disks.
- Use "in memory" processing.

#### SSD disks
The modern "solid state" disks are 2-6 times as fast as conventional hard-disks and can improve your map creation performance dramatically.

#### Multiple disks
Modern operating systems can access multiple disks simultaneously. Note that this really means *\*multiple disks\** and *\*NOT\** multiple partitions on one disk.
If you have your \_process directory\_for\_osm\_files\_ on one disk and your \_directory\_for\_generation\_ on another disk you will see an nice and noticeable performance gain.

#### In memory processing
You can do a great deal of the map creation not on disk but in memory. In your batch.xml one of the top lines contains:
<pre>
\<process\_attributes mapZooms="" renderingTypesFile="" zoomWaySmoothness="" osmDbDialect="sqlite" mapDbDialect="sqlite"/\>
</pre>
* The osmDbDialect="sqlite" mapDbDialect="sqlite" determines where your map generation process will take place.
* Line osmDbDialect="sqlite" mapDbDialect="sqlite" means that it will take place on disk.
* If you change this to osmDbDialect="sqlite\_in\_memory" mapDbDialect="sqlite\_in\_memory" the process will take place in memory.
This "in memory" processing will speed up the map generation by 10-50% but requires a lot of memory. The 10% to 50% is dependent on the map size. Smaller maps benefit less from in memory processing than larger maps, as still the normal disk access (initial reading and final map writing) plays a major role in smaller maps, where as the processing of all the data (and their relations) in larger maps requires more "calculation".
In normal "on disk" processing a *nodes.tmp.odb* file is created from your *.osm* or *.osm.pbf* file. This *nodes.tmp.odb* file is a sqlite database file and it is about 15 to 25 times as big as the original *.osm.pbf* file which you downloaded from [geofabrik.de](http://download.geofabrik.de/).
So if your original *.osm.pbf* file is 300MB, your *nodes.tmp.odb* file will be 5GB to 6GB! Note that smaller maps will be around the 15x factor whereas big maps (\>350MB) will end up in the 20x to 25X space increase.
With "in memory" processing this *nodes.tmp.odb* file will be created in your working memory. It means that the -Xmx parameter, which we discussed in the [Explanation](http://code.google.com/p/osmand/wiki/CreateOfflineMapsForYourself#Explanation) sections, needs to be big enough for both the *nodes.tmp.odb* and the normal processing that takes place in memory.
You will need "the size of the nodes.tmp.odb" + 20-25%.
It means that for a 250MB *.osm.pbf*, which will generate a \~4.5GB *nodes.tmp.odb* file, you need about 5GB heapspace which requires an -Xmx value of -Xmx5120M.

* **Note**: a 32bit Operating system can address up to approximately 1.5GB. This means that your -Xmx value can no larger be then -Xmx1720M. A larger specification is accepted without errors, but not used.

So in effect you really need a 64bit Operating system to really benefit from "in memory" processing.
Note also that your -Xmx value should not be that big that your operating system starts swapping to disk. This will even decrease your performance below that of normal "on disk" processing.
Finally: your source *.osm.pbf* file can be no larger then 600MB as this would require up to 20GB working memory. If your source file exceeds 600MB, OsmAndMapCreator will switch back to normal "on disk" processing. You will be notified early in the process with a warning "Switching SQLITE in memory dialect to SQLITE"
