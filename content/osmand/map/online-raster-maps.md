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
In order to use raster maps  in Android OsmAnd you need to enable [Online maps plugin](/osmand/plugins):

**Android** {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugin_settings %} → {% data variables.android-values.shared_string_online_maps %} → &#xe802; → {% data variables.android-values.shared_string_enable %}.

For **iOS** OsmAnd this feature works by default.

### Select map as Main / Underlay / Overlay layer
Raster maps can be used as Map source in OsmAnd (by default, oflline vector maps are enabled). Map sources are configurable in:

**Android** {% data variables.android-values.shared_string_menu %} → [{% data variables.android-values.configure_map %}](/osmand/map/configure-map-menu) → {% data variables.android-values.layer_map %}

**iOS** {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_type %} → {% data variables.ios-values.map_settings_online %}

You can choose one of its in the list or add yours.

Not only can you use one map, you can also add up to two of the online tiles to the basic layer maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put cycling routes map underneath.
You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

**Android** {% data variables.android-values.shared_string_menu %} → [{% data variables.android-values.configure_map %}](/osmand/map/configure-map-menu) → {% data variables.android-values.layer_overlay %} / {% data variables.android-values.layer_underlay %}
![Online_maps](/assets/images/plugins/online-maps/om-1.png)

**iOS** {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_overunder %}
![Online_maps](/assets/images/plugins/online-maps/om-2.png)

### Tweak layer parameters
In order to mix raster map layers better you can change layer transparency (by using a screen slider) and also you can change vector map style (hide polygons), so the underlay layers will 
be more visible, especially useful for satellite imagery.

### Add new online raster map source
To create a raster map source you need to know **tile URL**. This is URL that can distribute tiles in Mercator Projection. Here is a tile example URL https://tile.osmand.net/hd/6/55/25.png, where is the base part https://tile.osmand.net/hd/.

In order to add new online raster map source go to:

**Android**  {% data variables.android-values.shared_string_menu %} → [{% data variables.android-values.configure_map %}](/osmand/map/configure-map-menu) → {% data variables.android-values.layer_map %} → {% data variables.android-values.shared_string_add %}

**iOS**   {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_overunder %} → {% data variables.ios-values.map_settings_add_online_source %}

At this screen you need to add next parameters:

![Online_maps](/assets/images/plugins/online-maps/om-4.png)

|Parameter          |Description|
|:------------|:---------------|
|[{% data variables.ios-values.fav_name %}]|{% data variables.ios-values.res_online_name_descr %}|
|[{% data variables.ios-values.res_url %}]|{% data variables.ios-values.res_online_url_descr %}|
|[{% data variables.ios-values.res_zoom_levels %}]|{% data variables.ios-values.res_zoom_levels_desc %}|
|[{% data variables.ios-values.res_expire_time %}]|{% data variables.ios-values.res_expire_time_desc %}|
|[{% data variables.ios-values.res_mercator %}]|{% data variables.ios-values.res_pseudo_mercator %} or {% data variables.ios-values.res_elliptic_mercator %}|
|[{% data variables.ios-values.res_source_format %}/{% data variables.android-values.storage_format %}]|{% data variables.ios-values.res_source_sqlite %} or {% data variables.ios-values.res_source_one_per_tile %}|

Click to "Save" button for adding a new online raster map to the list.

## Copy online map sources 

### Copy raster map package created on PC 

You can create your own map package on PC by using special software as [MOBAC, OsmAndMapCreator and etc](/development/map-creation). Map package can be saved in two formats: [SQ Lite and Metainfo](/osmand/map/online-raster-maps#sqlite-vs-metainfo-sources).

Next, you need to move your map package file(s) to OsmAnd-tiles directory:

For **Android** OsmAnd - you need to copy file(s) from PC to the device folder _...Android/data/net.osmand(.plus)/files/tiles_ or you can click the file on your email, cloud or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.

![Online_maps](/assets/images/plugins/online-maps/om-6.png)

For **iOS** OsmAnd - you need to click the file on your iTunes or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps in OsmAnd.


![Online_maps](/assets/images/plugins/online-maps/om-5.png)

### Export / Import from OsmAnd

In order **to export** online map sources, you can select them in the export file list of your [application profile](/osmand/app-profile):

**Android** {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.export_profile %} → {% data variables.android-values.select_data_to_export %} → {% data variables.android-values.shared_string_resources %} → {% data variables.android-values.quick_action_map_source_title %}  

**iOS** {% data variables.ios-values.menu %} → {% data variables.ios-values.sett_settings %} → choose your {% data variables.ios-values.app_profiles %} → {% data variables.ios-values.actions %} → {% data variables.ios-values.export_profile %}

In order **to import** online map sources, you can click to obf-file of application profile in your storage, messenger, mail and etc, after that choose OsmAnd app for opening, select the data to be imported.

**Android**:  {% data variables.android-values.shared_string_import %} → {% data variables.android-values.select_data_to_import %} → {% data variables.android-values.quick_action_map_source_title %}

![Online_maps](/assets/images/plugins/online-maps/om-8.png)

**iOS**: {% data variables.ios-values.shared_string_import %} → {% data variables.ios-values.quick_action_map_source_title %} → {% data variables.ios-values.shared_string_continue %} → {% data variables.ios-values.shared_string_import_complete %} → {% data variables.ios-values.export_profile %}

![Online_maps](/assets/images/plugins/online-maps/om-7.png)

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

In order to change tile format you can choose {% data variables.android-values.storage_format %} in edit menu of online maps:

**Android** {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_local %} → {% data variables.android-values.local_indexes_cat_tile %} → choose online maps →  &#xe802; → {% data variables.android-values.shared_string_edit %} → {% data variables.android-values.storage_format %} → {% data variables.android-values.sqlite_db_file %} / {% data variables.android-values.one_image_per_tile %}

**iOS** Add way


### Clear raster map cache

Tiles are saved in the cache during using Online Raster maps as Main / Overlay / Underlay layer, you can see the size of your SQ Lite or Metainfo file under name of your Online map in the list:

**Android** {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_local %} → {% data variables.android-values.local_indexes_cat_tile %}

**iOS**: _menu -> Maps & Resources -> Intalled -> Online raster maps_. !!!ADD variable pictures

![Online_maps](/assets/images/plugins/online-maps/om-3.png)

In order to clear map tiles cache you can do next:

**Android** {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_local %} → {% data variables.android-values.local_indexes_cat_tile %} → choose online maps →  &#xe802; → {% data variables.android-values.clear_tile_data %}

**iOS**: _menu -> Maps & Resources -> Intalled -> Online raster maps -> i -> Clear cache_ !!!ADD variable pictures

### Change raster map parameters

In order to change raster map parameters:

**Android** {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_local %} → {% data variables.android-values.local_indexes_cat_tile %} → choose online maps →  &#xe802; → {% data variables.android-values.shared_string_edit %}

**iOS**: _menu -> Maps & Resources -> Intalled -> Online raster maps -> i -> Edit_ !!!ADD variable pictures

Look at [the table] to see all parameters and descriptions.

### Download / update tiles

Tiles are saved in cache when you use Online Raster maps as Main / Overlay / Underlay layer.

In OsmAnd there is the feature to download / to update selected area. For this, you need [to choose your online source as Map source](/osmand/map/online-raster-maps#select-map-as-main--underlay--overlay-layer). Next, you need to select the area by the size of your screen device and click on the map:

**Android** {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_actions %} → {% data variables.android-values.shared_string_download_map %} /  {% data variables.android-values.update_tile %}

**iOS** 

**Note**: the selected area is an area that you see on your screen.
