---
title: "Online / Raster Maps"
intro: "Online / Raster maps displayed as main map or as Underlay / Overlay"
versions: '*'
---

## Introduction
OsmAnd Online maps are an extensive addition to the already comprehensive base of OpenStreetMap data the application uses. You can add layers to your map with information from a different source, beginning with the satellite, or hiking routes view and ending with quite specific data like fire hydrants' locations. You can also change the main source of the map from vector maps to online tiles.
![Online_maps](/assets/images/plugins/online-maps/online-maps.png)

Online maps in OsmAnd are raster data. Raster data is made up of pixels (also referred to as grid cells). They are usually regularly-spaced and square. Rasters often look pixelated because each pixel has its own value or class.

**Advantages:**

-   To save traffic or storage space when offline map is not available. Usually for small areas, online tiles are more compact.
-   Display time is significantly faster, because maps are not rendered by the device.
-   It is possible to cache online maps with  [MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip)  or  [SASPlanet](https://www.facebook.com/georsgis/videos/vb.332654947303300/2224656661106781/?type=2&theater)  for the offline usage.

**Main disadvantages:**

-   It is reasonable to use only for small areas since the size of online tiles for a country could be more than several GB.
-   No switch between different styles of the map.
-   No additional layers available like transport or POI on the map.
-   It is not possible to rotate map with readable text (text will be rotated with the map itself, thus will not be easily readable).

## Purpose raster maps

Raster maps are used for showing additional information like satellite, hiking routes, weather pictures, slopes and hillshades, nautical symbols and others. You can add layers to your map with information from a different sources.

![Online_maps](/assets/images/plugins/online-maps/om-example.png)

## Raster maps as Map source
Raster maps can be as Map source in OsmAnd (by default, oflline vector maps are enabled). You can choose one of its in the list or add yours.
Android: menu - Configure map - Map source
iOS: menu - Map - Map type

## How to use Underlay / Overlay layers

Not only can you use one map, you can also add up to two of the online tiles to the basic layer maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put cycling routes map underneath.
You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

Android: _app menu-> Configure map->_  _Underlay_  and an  _Overlay_
![Online_maps](/assets/images/plugins/online-maps/om-8.png)

iOS: _app menu-> Map-> Overlay / Underlay_
![Online_maps](/assets/images/plugins/online-maps/om-8.png)

You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

## Installation

### Installation with URL
### Installation with UI
### Installation with SQLite/Metainfo copy
Online map formats of OsmAnd:

-   [**SQ Lite format**](https://docs.osmand.net/en/main@latest/development/map-creation)
-   [**Metainfo format**](https://docs.osmand.net/en/main@latest/development/osmand-file-formats/osmand-metainfo)

## Size and clear

## Backup / Export / Import

## Creation on new maps in PC

### MOBAC
### Others

## How to use for Android
First, turn on the Online maps plugin in the _app menu-> Plugins-> Online maps_.

To select an online map as your basic map, please go to _Configure map-> Map source_ and select the preferable one from the list. If you do not see the desired map on the list, select _Install more..._ to view the entire list of installs available. Also, you can define or edit your map source by clicking to _Define/Edit..._.

![Online_maps](/assets/images/plugins/online-maps/om-1.png)

When you select an online map as basic map (Overlay/Underlay map) all of map tiles of this map source will be cached. You can check the size of this cached file in the _map menu-> Download maps-> Local (Online and cashed tile maps)_. Here, you can delete a map source, clear all tiles, edit or rename it.

![Online_maps](/assets/images/plugins/online-maps/om-2.png)

You can download the selected area of the online map for offline usage (recorded to cache). To do this, you can choose online map as a basic map, after opening the app screen. The displayed piece of the map on your screen is a selected area. After that, make a long tap on your screen to display the available options where you can choose _Actions-> Download map_. Now you can select max/min zoom for your tiles and click to _Download_.

![Online_maps](/assets/images/plugins/online-maps/om-3.png)

Not only can you use one map, you can also add up to two of the online tiles to the basic layer: open the  _app menu-> Configure map->_ _Underlay_  and an  _Overlay_  maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put cycling routes map underneath.

You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

![Online_maps](/assets/images/plugins/online-maps/om-4.png)

But how to view all thee maps without getting lost in the details? Simply adjust which information from the map you need and set the transparency of the layer. For example, combining Microsoft Earth map with the basic OsmAnd offline vector map can be very helpful. You can hide all the excessive data from the map and simply overlay roads over the satellite images. To set the features you would like to hide from the current map, just go to _Configure map-> Hide_ and select buildings, polygons, boundaries or all of them together.

Please see full video guide [**here**](https://www.youtube.com/watch?v=KBZ1DJa7RMg&feature=emb_logo&ab_channel=OsmAndMaps%26Navigation)

### How to use for iOS

To select an online map as your basic map, please go to _Map-> Map type-> Online maps_ and select the one you prefer from the list. If you do not see the desired map on the list, select _Install more..._ to view the entire list of available installs.

![Online_maps](/assets/images/plugins/online-maps/om-5.png)

When you select an online map as basic map (Overlay/Underlay map) all of map tiles of this map source will be cashed. You can check the size of the tiles in _Maps & Resources-> Installed-> Online Raster Maps_. You can delete this map source, clear all tiles, or edit them.

![Online_maps](/assets/images/plugins/online-maps/om-6.png)

Online maps can be added with a special link. All of these online maps you can select in the _General menu-> Map-> Map type-> Online maps_.

![Online_maps](/assets/images/plugins/online-maps/om-7.png)

Not only can you use one map (map type), you can also add up to two of them to the basic layer: open the  _app menu-> Map-> Overlay / Underlay_  maps to combine all three of them on the screen. For instance, you can open a basic OsmAnd offline vector map, then add a satellite view for the overlay, and then put cycling routes map underneath.

You can choose base map transparency for your layer, set the display of the transparency slider, and select whether display polygons on the map or not.

![Online_maps](/assets/images/plugins/online-maps/om-8.png)

But how to view all thee maps without getting lost in the details? Simply adjust which information from the map you need and set the transparency of the layer. For example, combining the Microsoft Earth map with the basic OsmAnd online tile can be very helpful. You can hide all the excessive data from the map and simply overlay roads over the satellite images. To set the features you would like to hide from the current map, just go to  _Map-> Map style (Hide)_  and select buildings, polygons, boundaries or all of them together.

Please see full video guide [**here**](https://www.youtube.com/watch?v=kmlgPA0W7VA&feature=emb_logo&ab_channel=OsmAndMaps%26Navigation)

### How to prepare raster maps

Despite the plugin being called  _'Online Maps'_, you can use the maps without the internet, as well. You just need to save the parts of maps (often called tiles) to use them later. To do that, download a specific  [Map Creator tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip)  developed by OsmAnd team.

Select the area you need to download, click on the Preload area, then set the smallest and the largest zoom levels you want to display and download the tiles.

For  **Android version**  you can copy them to your phone's  _osmand/tiles/*tile type*_  folder. You'll also need to open the  _Configure map-. Overlay map_  and choose OsmAnd online tiles.

For  **iOS version**  you can choose SQ Lite file in your phone (any messenger or dropbox), OsmAnd will suggest to add it. You'll also need to open  _Map-> Overlay / Underlay or Map type_  and choose new map source.

How to add SQ Lite file in Android and iOS version of OsmAnd you can read in  [**Anygis project**](https://anygis.ru/Web/Html/Osmand_en).

Online tiles can be helpful when you need just a small section of the map or a specific type of it to use in the limited area, but don't want to download the whole region. They can come in handy in endless situations.

### Mobile Atlas Creator

You can also create your own map tiles using the Mobile Atlas Creator (MOBAC) software. It is a free open-source map creating tool you can use to make offline tile maps from different sources. Just [download](http://mobac.sourceforge.net/) the program, then run it. In the format choosing dialogue pick OsmAnd SQ Lite or OsmAnd tile storage. SQ Lite is a single file with the selected area while tiles are separate pieces of the map gathered on your device. SQ Lite often happens to be more convenient as it is stored in one place and occupies less storage space. Select an area, then choose an 'atlas' option, press Add selection and then click Load to save your tiles. You can also pick the map source, zoom levels and other features before loading. How to add SQ Lite file in Android and iOS version of OsmAnd you can read in [**Anygis project**](https://anygis.ru/Web/Html/Osmand_en).

### SASPlanet

Of course, you can use the tool - SASPlanet. There are many offline tile maps from different sources in SASPlanet. Just [download](http://www.sasgis.org/forum/viewtopic.php?f=52&t=2441) the program, then run it. How to work with SASPlanet you can look [here](https://www.youtube.com/watch?v=-0h_Vp-OCTU). In the format choosing dialogue pick OsmAnd SQ Lite or OsmAnd tile storage. SQ Lite is a single file with the selected area while tiles are separate pieces of the map gathered on your device. SQ Lite often happens to be more convenient as it is stored in one place and occupies less storage space. Select an area, then choose an 'atlas' option, press Add selection and then click Load to save your tiles. You can also pick the map source, zoom levels and other features before loading. How to add SQ Lite file in Android and iOS version of OsmAnd you can read in [**Anygis project**](https://anygis.ru/Web/Html/Osmand_en).
