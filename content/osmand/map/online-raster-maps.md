---
title: "Online / Raster Maps"
intro: "Online / Raster maps displayed as main map or as Underlay / Overlay"
versions: '*'
---

### Introduction
OsmAnd Online maps are an extensive addition to the already comprehensive base of OpenStreetMap data the application uses. You can add layers to your map with information from a different source, beginning with the satellite, or hiking routes view and ending with quite specific data like fire hydrants' locations. You can also change the main source of the map from vector maps to online tiles.
![Online_maps](/assets/images/plugins/online-maps/online-maps.png)

Online map formats of OsmAnd:

-   [**SQ Lite format**](https://docs.osmand.net/en/main@latest/development/map-creation)
-   [**Metainfo format**](https://docs.osmand.net/en/main@latest/development/osmand-file-formats/osmand-metainfo)

**Advantages:**

-   To save traffic or storage space when offline map is not available. Usually for small areas, online tiles are more compact.
-   Display time is significantly faster, because maps are not rendered by the device.
-   It is possible to cache online maps with  [MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip)  or  [SASPlanet](https://www.facebook.com/georsgis/videos/vb.332654947303300/2224656661106781/?type=2&theater)  for the offline usage.

**Main disadvantages:**

-   It is reasonable to use only for small areas since the size of online tiles for a country could be more than several GB.
-   No switch between different styles of the map.
-   No additional layers available like transport or POI on the map.
-   It is not possible to rotate map with readable text (text will be rotated with the map itself, thus will not be easily readable).

### How to use for Android
First, turn on the Online maps plugin in the _app menu-> Plugins-> Online maps_.

To select an online map as your basic map, please go to _Configure map-> Map source_ and select the preferable one from the list. If you do not see the desired map on the list, select _Install more..._ to view the entire list of installs available. Also, you can define or edit your map source by clicking to _Define/Edit..._.

When you select an online map as basic map (Overlay/Underlay map) all of map tiles of this map source will be cached. You can check the size of this cached file in the _map menu-> Download maps-> Local (Online and cashed tile maps)_. Here, you can delete a map source, clear all tiles, edit or rename it.

You can download the selected area of the online map for offline usage (recorded to cache). To do this, you can choose online map as a basic map, after opening the app screen. The displayed piece of the map on your screen is a selected area. After that, make a long tap on your screen to display the available options where you can choose _Actions-> Download map_. Now you can select max/min zoom for your tiles and click to _Download_.

Not only can you use one map, you can also add up to two of the online tiles to the basic layer: open the  _app menu-> Configure map->_ _Underlay_  and an  _Overlay_  maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put cycling routes map underneath.

You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

But how to view all thee maps without getting lost in the details? Simply adjust which information from the map you need and set the transparency of the layer. For example, combining Microsoft Earth map with the basic OsmAnd offline vector map can be very helpful. You can hide all the excessive data from the map and simply overlay roads over the satellite images. To set the features you would like to hide from the current map, just go to Configure map-> Hide and select buildings, polygons, boundaries or all of them together.

Please see full video guide [**here**](https://www.youtube.com/watch?v=KBZ1DJa7RMg&feature=emb_logo&ab_channel=OsmAndMaps%26Navigation)
