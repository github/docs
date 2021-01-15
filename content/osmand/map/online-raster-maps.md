---
title: "Online / Offline Raster Maps"
intro: "OsmAnd Raster maps is an extensive addition to the offline OpenStreetMap maps the application uses by default. Raster maps allow to combine different map sources with Vector Maps. You can display an overlay of hiking routes, live rain maps, live traffic data and an underlay of satellite imagery mixing with semi-transparent base vector map. You can also switch default maps to online web raster tiles."
versions: '*'
---

## Use cases
There is a big variety of possible use cases cause they vary on infinite external map sources possibilities. Here are some popular:
- Satellite imagery as underlay
- Live traffic information
- Rain forecast as overlay
- Rich topographics maps with hillshades / slopes
- Active cycling / running trails as overlay
- Live vessel information
- Online OpenStreetMap tiles for OSM editing purposes

![Online_maps](/assets/images/plugins/online-maps/om-example.png)

**Note**: You can also change the main source of the map from vector maps to online tiles.

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


## How to use Raster maps 
### Enable plugin
In order to use raster maps you need to enable [Online maps plugin](/osmand/plugins).

### Select map as Main / Underlay / Overlay layer
Raster maps can be used as Map source in OsmAnd (by default, oflline vector maps are enabled). Map sources are configurable in [Configure Map menu](/osmand/map/configure-map-menu). You can choose one of its in the list or add yours.

Not only can you use one map, you can also add up to two of the online tiles to the basic layer maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put cycling routes map underneath.
You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

Android (**add way**):
![Online_maps](/assets/images/plugins/online-maps/om-1.png)

iOS(**add way**):
![Online_maps](/assets/images/plugins/online-maps/om-2.png)

### Tweak layer parameters
In order to mix raster map layers better you can change layer transparency (by using a screen slider) and also you can change vector map style (hide polygons), so the underlay layers will 
be more visible, especially useful for satellite imagery.

### Add new online raster map source
To create raster map source you need to know **tile url**. This is a url that can distribute tiles in Merkaator projection. Here is a tile example url https://tile.osmand.net/hd/6/55/25.png, where is base part https://tile.osmand.net/hd/.
Here we need to describe screens of adding new map source if you know "tile url".


## Copy online map sources 
### Copy raster map package created on PC 

OsmAndMapCreator / Mobac

### Export / Import from OsmAnd
In order to export online map sources, you can select them in the export file list of your application profile (Export -> Resources -> Map sources). [Application profile/export](/osmand/app-profile) (**add image and link)**.

To import online map sources, you can import obf-file of application profile.  [Application profile/import](/osmand/app-profile) (**add image and link)

### Magic URL to install map source

Online maps can be added with a special link to OsmAnd Raster map list. Click to this link and choose OsmAnd for opening:

http://osmand.net/add-tile-source?name=TEST&url_template=http://h0.ortho.tiles.virtualearth.net/tiles/h{q}.jpg?g=45&min_zoom=9max_zoom=20

|Parameter of link|Example|
|:--------|:---------------|
|[Constant part]|http://osmand.net/add-tile-source|
|[Separator]|?|
|[Name]|name=TEST|
|[URL]|template=http://h0.ortho.tiles.virtualearth.net/tiles/h{q}.jpg?g=45|
|[Zoom levels]|min_zoom=9max_zoom=20|

You find added Online map in list of [Main / Underlay / Overlay layer](/osmand/map/online-raster-maps#select-map-as-main--underlay--overlay-layer) menu.

## Manage raster maps
Raster maps can take significant amount of disk space, so you might need to regularly check it. For large datasets it's recommended to use 'sqlite raster source' cause it will store all tiles in 1 large *.sqlite package. 

### Sqlite vs Metainfo sources
OsmAnd Raster maps have two formats - SQ Lite and Metainfo. SQ Lite keeps all tiles in 1 large package, Metainfo keeps one image file per tile:
-   [**SQ Lite format**](/development/map-creation)
-   [**Metainfo format**](/development/osmand-file-formats/osmand-metainfo)

**Convert?** in Edit menu of online maps (Storage format)??

### Clear raster map cache

Tiles are saved in the cache during using Online Raster maps as Main / Overlay / Underlay layer, you can see the size of your SQ Lite or Metainfo file under name of your Online map in the list:

iOS: _menu -> Maps & Resources -> Intalled -> Online raster maps_. !!!ADD variable pictures

Android: _menu -> Download maps -> Local -> Online and cashed tile maps_. !!!ADD variable pictures

![Online_maps](/assets/images/plugins/online-maps/om-3.png)

In order to clear map tiles cache you can do next:

Android: _menu -> Download maps -> Local -> Online and cashed tile maps -> three dotes -> Clear all tiles_  !!!ADD variable pictures

iOS: _menu -> Maps & Resources -> Intalled -> Online raster maps -> i -> Clear cache_ !!!ADD variable pictures

### Change raster map parameters

In order to change raster map parameters:

Android: _menu -> Download maps -> Local -> Online and cashed tile maps -> three dotes -> Edit_  !!!ADD variable pictures

iOS: _menu -> Maps & Resources -> Intalled -> Online raster maps -> i -> Edit_ !!!ADD variable pictures

Here you can change Name of a map source; enter or copy and paste URL for an online source; change zoom levels; expiration time - cached tiles will be reloaded after specified time; choose Mercator Projection - Elliptic Mercator or Pseudo-Mercator projection; choose source format - SQ Lite or Metainfo.

### Download / update tiles

Tiles are saved in cache when you use Online Raster maps as Main / Overlay / Underlay layer.

In OsmAnd there is the feature to download / to update selected area. For this you can choose your online source as Map source:

Android: menu - Configure map - Map source !!!ADD variable pictures

iOS: menu - Map - Map type - Online maps !!!ADD variable pictures

Next you can select your area by size of your screen device and click on the map:

Actions menu -> Download map or Update map !!!ADD variable pictures

**Note**: the selected area is an area that you see on your screen.

## Creation on new maps in PC
Need to move to technical articles.
It is possible to cache online maps with  [MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip)  or  [SASPlanet](https://www.facebook.com/georsgis/videos/vb.332654947303300/2224656661106781/?type=2&theater)  for the offline usage.

Despite the plugin being called  _'Online Maps'_, you can use the maps without the internet, as well. You just need to save the parts of maps (often called tiles) to use them later. Online tiles can be helpful when you need just a small section of the map or a specific type of it to use in the limited area, but don't want to download the whole region. They can come in handy in endless situations.

### MOBAC

You can also create your own map tiles using the Mobile Atlas Creator (MOBAC) software. It is a free open-source map creating tool you can use to make offline tile maps from different sources. Just [download](http://mobac.sourceforge.net/) the program, then run it. In the format choosing dialogue pick OsmAnd SQ Lite or OsmAnd tile storage. SQ Lite is a single file with the selected area while tiles are separate pieces of the map gathered on your device. SQ Lite often happens to be more convenient as it is stored in one place and occupies less storage space. Select an area, then choose an 'atlas' option, press Add selection and then click Load to save your tiles. You can also pick the map source, zoom levels and other features before loading.

### Others

Download a specific  **[Map Creator tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip)**  developed by OsmAnd team.

Select the area you need to download, click on the Preload area, then set the smallest and the largest zoom levels you want to display and download the tiles.

For  **Android version**  you can copy them to your phone's  _osmand/tiles/*tile type*_  folder. You'll also need to open the  _Configure map-. Overlay map_  and choose OsmAnd online tiles.

For  **iOS version**  you can choose SQ Lite file in your phone (any messenger or dropbox), OsmAnd will suggest to add it. You'll also need to open  _Map-> Overlay / Underlay or Map type_  and choose new map source.

You can use the tool - **SASPlanet**. There are many offline tile maps from different sources in SASPlanet. Just [download](http://www.sasgis.org/forum/viewtopic.php?f=52&t=2441) the program, then run it. How to work with SASPlanet you can look [here](https://www.youtube.com/watch?v=-0h_Vp-OCTU). In the format choosing dialogue pick OsmAnd SQ Lite or OsmAnd tile storage. SQ Lite is a single file with the selected area while tiles are separate pieces of the map gathered on your device. SQ Lite often happens to be more convenient as it is stored in one place and occupies less storage space. Select an area, then choose an 'atlas' option, press Add selection and then click Load to save your tiles. You can also pick the map source, zoom levels and other features before loading.


