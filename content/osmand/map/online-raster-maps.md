---
title: "Online / Offline Raster Maps"
intro: "OsmAnd Raster maps is an extensive addition to the offline OpenStreetMap maps the application uses by default. Raster maps allow to combine different map sources with Vector Maps. You can display an overlay of hiking routes, live rain maps, live traffic data and an underlay of satellite imagery mixing with semi-transparent base vector map. You can also switch default maps to online web raster tiles."
versions: '*'
---

## Use cases
TODO Online sources example
- 1st example
- 2nd example

![Online_maps](/assets/images/plugins/online-maps/om-example.png)


You can also change the main source of the map from vector maps to online tiles.

## Raster Maps
Online maps in OsmAnd are raster data. Raster data is made up of pixels (also referred to as grid cells) - set of small images (tiles). In contrast of vector maps which consists of binary data like roads, points, polygons. Raster map tiles are usually regularly-spaced and square. They often look pixelated because each pixel has its own value or class.

Comparision to default vector maps.

**Advantages:**
- Display time is reasonably faster, because maps are not rendered by the device.
- Raster maps could be loaded on the fly during map browse.
- Possibility to preload data partially i.e. create offline cache and be able to download missing tiles on the fly.
- Indefinite variety of external web-sources. Basically each web site with maps could be used as a source data.
- The data could be updated after expiration like traffic tiles are updated every 20-30 minutes (configurable).

**Disadvantages:**
- Significantly bigger comparing to Vector maps. City example: Vector Map - 15 MB, Online 15th Zoom - 50 MB, 16th - 200 MB, 17th - 800 MB, ...
- Places on raster maps are not clickable.
- Not possible change map style or exclude certain objects.
- Pixelized on zoom (if no high density tiles are not available).
- It is not possible to rotate map with readable text (text will be rotated with the map itself, thus will not be easily readable).


## TODO

![Online_maps](/assets/images/plugins/online-maps/online-maps.png)

It is possible to cache online maps with  [MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip)  or  [SASPlanet](https://www.facebook.com/georsgis/videos/vb.332654947303300/2224656661106781/?type=2&theater)  for the offline usage.



## Raster maps as Map source
Raster maps can be as Map source in OsmAnd (by default, oflline vector maps are enabled). You can choose one of its in the list or add yours.

Android: menu - Configure map - Map source

iOS: menu - Map - Map type

## How to use Underlay / Overlay layers

Not only can you use one map, you can also add up to two of the online tiles to the basic layer maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put cycling routes map underneath.
You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

Android: _app menu-> Configure map->_  _Underlay_  and an  _Overlay_
![Online_maps](/assets/images/plugins/online-maps/om-4.png)

iOS: _app menu-> Map-> Overlay / Underlay_
![Online_maps](/assets/images/plugins/online-maps/om-8.png)

## Installation
### Installation with URL
Online maps can be added with a special link. Click to this link and choose OsmAnd for opening:

http://osmand.net/add-tile-source?name=TEST&url_template=http://h0.ortho.tiles.virtualearth.net/tiles/h{q}.jpg?g=45&min_zoom=19max_zoom=20

name=TEST - **provide name for online map source**

template=http://h0.ortho.tiles.virtualearth.net/tiles/h{q}.jpg?g=45  - **URL**

min_zoom=19max_zoom=20  -  **Zoom levels**

### Installation with UI

### Installation with SQLite/Metainfo copy

Online map formats of OsmAnd:

-   [**SQ Lite format**](https://docs.osmand.net/en/main@latest/development/map-creation)
-   [**Metainfo format**](https://docs.osmand.net/en/main@latest/development/osmand-file-formats/osmand-metainfo)

## Size and clear

For see size of Online map cache and clear it:

Android: _menu - Download maps - Local - Online and cashed tile maps_. Choose your source for edit / clear all tiles / delete. 

iOS: _menu - Maps & Resources - Intalled - Online raster maps_. Choose your source for clear cache / edit / delete.

## Backup / Export / Import

With application profile feature......

## Creation on new maps in PC

Despite the plugin being called  _'Online Maps'_, you can use the maps without the internet, as well. You just need to save the parts of maps (often called tiles) to use them later. Online tiles can be helpful when you need just a small section of the map or a specific type of it to use in the limited area, but don't want to download the whole region. They can come in handy in endless situations.

### MOBAC

You can also create your own map tiles using the Mobile Atlas Creator (MOBAC) software. It is a free open-source map creating tool you can use to make offline tile maps from different sources. Just [download](http://mobac.sourceforge.net/) the program, then run it. In the format choosing dialogue pick OsmAnd SQ Lite or OsmAnd tile storage. SQ Lite is a single file with the selected area while tiles are separate pieces of the map gathered on your device. SQ Lite often happens to be more convenient as it is stored in one place and occupies less storage space. Select an area, then choose an 'atlas' option, press Add selection and then click Load to save your tiles. You can also pick the map source, zoom levels and other features before loading.

### Others

Download a specific  **[Map Creator tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip)**  developed by OsmAnd team.

Select the area you need to download, click on the Preload area, then set the smallest and the largest zoom levels you want to display and download the tiles.

For  **Android version**  you can copy them to your phone's  _osmand/tiles/*tile type*_  folder. You'll also need to open the  _Configure map-. Overlay map_  and choose OsmAnd online tiles.

For  **iOS version**  you can choose SQ Lite file in your phone (any messenger or dropbox), OsmAnd will suggest to add it. You'll also need to open  _Map-> Overlay / Underlay or Map type_  and choose new map source.

You can use the tool - **SASPlanet**. There are many offline tile maps from different sources in SASPlanet. Just [download](http://www.sasgis.org/forum/viewtopic.php?f=52&t=2441) the program, then run it. How to work with SASPlanet you can look [here](https://www.youtube.com/watch?v=-0h_Vp-OCTU). In the format choosing dialogue pick OsmAnd SQ Lite or OsmAnd tile storage. SQ Lite is a single file with the selected area while tiles are separate pieces of the map gathered on your device. SQ Lite often happens to be more convenient as it is stored in one place and occupies less storage space. Select an area, then choose an 'atlas' option, press Add selection and then click Load to save your tiles. You can also pick the map source, zoom levels and other features before loading.


