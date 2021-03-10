---
title: "Online / Offline Raster Maps"
intro: "OsmAnd Raster maps is an extensive addition to the offline OpenStreetMap maps the application uses by default. Raster maps allow to combine different map sources with Vector Maps. You can display an overlay of hiking routes, live rain maps, live traffic data and an underlay of satellite imagery mixing with semi-transparent base vector map. You can also switch default maps to online web raster tiles."
versions: '*'
---

## Use cases
There is a big variety of possible use cases cause they vary on infinite external map source possibilities. Here are some popular:
- Satellite imagery as underlay
- Live traffic information
- Rain forecast as overlay
- Rich topographic maps with hillshades / slopes
- Active cycling / running trails as overlay
- Live vessel information
- Online OpenStreetMap tiles for OSM editing purposes

<img src="/assets/images/plugins/online-maps/om-0.png" />

**Note**: You can also change the main source of the map from vector maps to online tiles.

## Raster Maps
Online maps in OsmAnd are raster data. Raster data is made up of pixels (also referred to as grid cells) - set of small images (tiles). In contrast to vector maps which consists of binary data like roads, points, polygons. Raster map tiles are usually regularly-spaced and square. They often look pixelated because each pixel has its own value or class.

Comparison to default vector maps.

**Advantages:**
- Display time is reasonably faster because maps are not rendered by the device.
- Raster maps could be loaded on the fly during map browse.
- Possibility to preload data partially i.e. create offline cache and be able to download missing tiles on the fly.
- Indefinite variety of external web-sources. Basically, each website with maps could be used as a source data.
- The data could be updated after expiration like traffic tiles are updated every 20-30 minutes (configurable).

**Disadvantages:**
- Significantly bigger comparing to Vector maps. City example: Vector Map - 15 MB, Online 15th Zoom - 50 MB, 16th - 200 MB, 17th - 800 MB, ...
- Places on raster maps are not clickable.
- Not possible to change map style or exclude certain objects.
- Pixelized on zoom (if no high-density tiles are not available).
- It is not possible to rotate a map with readable text (text will be rotated with the map itself, thus will not be easily readable).


## How to use Raster maps 
### Enable plugin
In order to use raster maps  in Android OsmAnd you need to enable [Online maps plugin](/osmand/plugins):

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugin_settings %} → {% data variables.android-values.shared_string_online_maps %} → &#xe802; → {% data variables.android-values.shared_string_enable %}.

For **iOS** OsmAnd this feature works by default.

### Select map as Main / Underlay / Overlay layer
Raster maps can be used as Map source in OsmAnd (by default, offline vector maps are enabled). Map sources are configurable in:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.layer_map %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_type %} → {% data variables.ios-values.map_settings_online %}

You can choose one of them in the list or add yours.

Not only can you use one map, but you can also add up to two of the online tiles to the basic layer maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put a cycling routes map underneath.
You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.layer_overlay %} / {% data variables.android-values.layer_underlay %}

![Configure underlay / overlay Android]("/assets/images/plugins/online-maps/om-1.png")

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_overunder %}

![Configure underlay / overlay iOS]("/assets/images/plugins/online-maps/om-2.png")

### Change layer parameters (transparency)
In order to mix raster map layers better, you can change layer transparency (by using a screen slider) and also you can change vector map style (hide polygons), so the underlay layers will 
be more visible, especially useful for satellite imagery.


## Prepare / copy raster maps to device
There are multiple ways how to add new raster map, copy it from another device, prepare it on PC and predownloaded tiles to be used offline. For example, you can create your own map package on PC by using special software as [MOBAC, OsmAndMapCreator and etc](/development/map-creation). Typically raster maps are distributed as files with *.sqlitedb* extension. 

Here are the main methods how to add new raster map source which is not defined in OsmAnd yet:
- Copy a raster map to a **tiles** subfolder of [base osmand storage](/osmand/start-with/storage) (Android).
- Open ready to use *.sqlitedb* file with OsmAnd.
- Import package with prepared online maps from another OsmAnd application as a special **osf package** via [Import / export functionality](/personal/import-export).
- Create new online map source on a mobile device itself.
- Prepare a magic URL with online map source parameters and open it with OsmAnd.

### Add new online raster map source
To create a raster map source you need to know **the tile URL**. This is URL that can distribute tiles in Mercator Projection. Here is a tile example URL https://tile.osmand.net/hd/6/55/25.png, where is the base part https://tile.osmand.net/hd/.

In order to add a new online raster map source go to:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.layer_map %} → {% data variables.android-values.shared_string_add %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_overunder %} → {% data variables.ios-values.map_settings_add_online_source %}

At this screen you need to add the next parameters:

<img src="/assets/images/plugins/online-maps/om-4.png" />

|Parameter          |Description|
|:------------|:---------------|
|[{% data variables.ios-values.fav_name %}]|{% data variables.ios-values.res_online_name_descr %}|
|[{% data variables.ios-values.res_url %}]|{% data variables.ios-values.res_online_url_descr %}|
|[{% data variables.ios-values.res_zoom_levels %}]|{% data variables.ios-values.res_zoom_levels_desc %}|
|[{% data variables.ios-values.res_expire_time %}]|{% data variables.ios-values.res_expire_time_desc %}|
|[{% data variables.ios-values.res_mercator %}]|{% data variables.ios-values.res_pseudo_mercator %} or {% data variables.ios-values.res_elliptic_mercator %}|
|[{% data variables.ios-values.res_source_format %}/{% data variables.android-values.storage_format %}]|{% data variables.ios-values.res_source_sqlite %} or {% data variables.ios-values.res_source_one_per_tile %}|

Click to "{% data variables.android-values.shared_string_save %}" button for adding a new online raster map to the list.

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

You find added Online map in the list of [Main / Underlay / Overlay layer](/osmand/map/online-raster-maps#select-map-as-main--underlay--overlay-layer) menu.

## Manage raster maps
Raster maps can take a significant amount of disk space, so you might need to regularly check it. For large datasets, it's recommended to use 'SQLite raster source' cause it will store all tiles in 1 large file (sqlite database). 
- [**SQ Lite format**](/development/osmand-file-formats/osmand-sqlite)
- [**Metainfo format**](/development/osmand-file-formats/osmand-metainfo)

In order to change tile format you can choose {% data variables.android-values.storage_format %} in the edit menu of online maps:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_local %} → {% data variables.android-values.local_indexes_cat_tile %} → choose online maps →  &#xe802; → {% data variables.android-values.shared_string_edit %} → {% data variables.android-values.storage_format %} → {% data variables.android-values.sqlite_db_file %} / {% data variables.android-values.one_image_per_tile %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.res_mapsres %} → {% data variables.ios-values.res_installed %} → {% data variables.ios-values.online_raster_maps %} → i → {% data variables.ios-values.shared_string_edit %} → {% data variables.ios-values.res_source_format %} → {% data variables.ios-values.res_source_sqlite %} / {% data variables.ios-values.res_source_one_per_tile %}


### Clear raster map cache

Tiles are saved in the cache during usage of Online Raster maps as Main / Overlay / Underlay layer, you can see only the size of your SQ Lite file under name of your Online map in the list. Sometimes a regular cleanup is needed to speedup tiles display or to refresh data.

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_local %} → {% data variables.android-values.local_indexes_cat_tile %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.res_mapsres %} → {% data variables.ios-values.res_installed %} → {% data variables.ios-values.online_raster_maps %}

<img src="/assets/images/plugins/online-maps/om-3.png" />

In order to clear map tiles cache you need to do next:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_local %} → {% data variables.android-values.local_indexes_cat_tile %} → choose online maps →  &#xe802; → {% data variables.android-values.clear_tile_data %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.res_mapsres %} → {% data variables.ios-values.res_installed %} → {% data variables.ios-values.online_raster_maps %} → i → {% data variables.ios-values.shared_string_clear_cache %}

### Download / update tiles
If you want to access raster maps offline, you might need to predownload tiles. It's possible to do on a mobile device though be aware that some services might block a large batch download. Same feature can be used to update already downloaded tiles for selected areas, otherwise OsmAnd will continue display tiles that are already stored in the cache. 

**Hint**: if you want maps to automitically update tiles after some time, you can configure *expiration time*, so OsmAnd will redownload tiles once the tile is going to be displayed.


For this, you need [to choose your online source as Map source](#select-map-as-main--underlay--overlay-layer): 

{% data variables.product.android_button_seq %} you need to select the area by the size of your screen device and to do a long click on the map - {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_actions %} → {% data variables.android-values.shared_string_download_map %} /  {% data variables.android-values.update_tile %} → 
At this screen you need to choose zoom levels → screen of downloading progress → {% data variables.android-values.shared_string_download %}

<img src="/assets/images/plugins/online-maps/om-10.png" />

{% data variables.product.ios_button_seq %}  you need to do a long click on the map -  {% data variables.ios-values.actions %} → {% data variables.ios-values.download_map %} / {% data variables.ios-values.update_map %} → 
At this screen you can select the needed area, choose zoom levels. When you set all parameters you can see a number of tiles and download size. Next, click to {% data variables.ios-values.shared_string_continue %} → screen of downloading progress.

<img src="/assets/images/plugins/online-maps/om-9.png" />

### Change raster map parameters
Raster maps can be used as is if tiles are already packaged inside the maps. In case raster maps are provided online, there is always a base url to be configured. There are some other basic parameters that can be modified for raster maps - [see here](#add-new-online-raster-map-source). More sophisticated parameters are encoded in the internals of [SQ Lite format](/development/osmand-file-formats/osmand-sqlite).

You can change some raster map parameters inside OsmAnd itself.

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_local %} → {% data variables.android-values.local_indexes_cat_tile %} → choose online maps →  &#xe802; → {% data variables.android-values.shared_string_edit %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.res_mapsres %} → {% data variables.ios-values.res_installed %} → {% data variables.ios-values.online_raster_maps %} → i → {% data variables.ios-values.shared_string_edit %}

