---
title: "Map styles and parameters"
intro: "OsmAnd provides a huge range of map styles for many activities like cycling, hiking, riding by car or snowmobile, etc. We name it Map style or Map rendering. Set parameters for Map rendering you can see more details on the map or hide some details. You can create your own map style OsmAnd. Choose your style or make it yourself and enjoy your trip."
versions: '*'
---

## Use cases

Editable Map styles are one of the main advantages of OsmAnd. Each user can customize the display of the map for himself and his hobbies, configure to show or hide certain map objects, sizes, and colors of these objects, change the scale on which to display certain objects.

## Default Map styles:

OsmAnd offers you numerous map styles and data layers to fit the purpose by default. Let's take a glance at the main ones for day and night modes:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.map_widget_renderer %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_offline %} 


### OsmAnd

OsmAnd style is the default style of map rendering, general-purpose style. It offers details about the city such as streets, buildings, transport stops, etc. Simplified rendering to have cleaner maps in the populated cities. Key features: contour lines, routes, surface quality, access restrictions, road shields, paths rendering according to SAC scale, whitewater sports features.

![Map styles](/assets/images/map/ms-1.png)

### Touring view

{% data variables.android-values.touring_view_render_descr %}

![Map styles](/assets/images/map/ms-2.png)

### UniRS and LightRS

{% data variables.android-values.unirs_render_descr %}
UniRS and LightRS styles are author styles that render the basic map information but in different color schemes.

UniRS style: {% data variables.android-values.unirs_render_descr %}

![Map styles](/assets/images/map/ms-3.png)

LightRS style: {% data variables.android-values.light_rs_render_descr %}

![Map styles](/assets/images/map/ms-4.png)

### Nautical 

{% data variables.android-values.nautical_render_descr %} Read more about [Nautical maps](https://osmand.net/features/nautical-charts).

![Map styles](/assets/images/map/ms-5.png)

### Winter and ski

{% data variables.android-values.ski_map_render_descr %}
Winter and ski style is designed to help you navigate winter sports locations: you'll be able to see ski pistes and other details such as the complexity of skiing tracks and ski lift markers. Key features: renders pistes, aerial ways, and other ski features in a convenient way. Less distracting secondary map objects. Read more about [Ski maps](https://osmand.net/features/ski-plugin).

![Map styles](/assets/images/map/ms-6.png)

### Topo

{% data variables.android-values.topo_render_descr %}

![Map styles](/assets/images/map/ms-7.png)

### Mapnik

{% data variables.android-values.mapnik_render_descr %}

![Map styles](/assets/images/map/ms-8.png)

### Desert

{% data variables.android-values.desert_render_descr %}

![Map styles](/assets/images/map/ms-9.png)

### Offroad

{% data variables.android-values.off_road_render_descr %}

![Map styles](/assets/images/map/ms-10.png)

### Snowmobile

{% data variables.android-values.snowmobile_render_descr %}

![Map styles](/assets/images/map/ms-11.png)

## Map legend

Map legend is a visual explanation of the symbols used on the map. It typically includes a sample of each symbol (point, line, or area), and a short description of what the symbol means. For example, a short segment of a blue sinuous line may be labeled 'rivers'.
Map legend of OsmAnd maps you can find [here](https://osmand.net/help-online/map-legend/).

## Parameters of Map rendering

### Map mode

During day and night, you need to use mode for the map. [Map styles](/map/map-styles-and-parameters#default-map-styles) have night and day mode style. In this menu, you find the time of sunrise and sunset.

In order to change {% data variables.android-values.daynight%}:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.map_mode %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.map_settings_mode %}

Here you can choose:

|Parameter          |Description        
|:------------|:---------------|
|**{% data variables.android-values.daynight_mode_auto %}**|Automated day/night view switching. |
|**{% data variables.android-values.daynight_mode_day %}**|Switching on day mode only.|
|**{% data variables.android-values.daynight_mode_night %}**|Switching on night mode only.|
|**{% data variables.android-values.daynight_mode_sensor %}**|Using light sensor for day/night mode.|

### Details

In {% data variables.android-values.rendering_category_details %} menu you can show or hide the next additional map details:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.rendering_category_details %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.res_details %}

|Parameter and Description|   
|------------|
|**{% data variables.ios-values.rendering_attr_moreDetailed_name %}**: Showing polygons, trails, points, signs at low zooms on the map. It means you can see more details on your map at low zooms. _Note_: rendering in your device may be no fast.|
|![Map styles](/assets/images/map/ms-12.png)|
|**{% data variables.ios-values.rendering_attr_showSurfaces_name %}**: Showing type of surface of roads. Color of the road helps you to understand what is surface of the road: asphalt, grass or sand and etc. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map styles](/assets/images/map/ms-13.png)|
|**{% data variables.ios-values.rendering_attr_showSurfaceGrade_name %}**: Showing smoothness (grade) of the road. What smoothness is of your roads: good, bad or maybe horrible and etc: good, bad or maybe horrible and etc. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your road smoothness.|
|![Map styles](/assets/images/map/ms-14.png)|
|**{% data variables.ios-values.rendering_attr_showAccess_name %}**:  Showing access of roads: private or permissive, or only for emergency, or maybe toll road. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your road access. |
|![Map styles](/assets/images/map/ms-15.png)|
|**{% data variables.ios-values.rendering_attr_showLez_name %}**: Showing green board and labels for Low Emission Zones in cities. It will help you not receive penalties in the green city center.|
|![Map styles](/assets/images/map/ms-16.png)|
|**{% data variables.ios-values.rendering_attr_coloredBuildings_name %}**: Coloring buildings and places have special colors for each category: regular buildings, industrial, commercial, etc. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your color for the building. |
|![Map styles](/assets/images/map/ms-17.png)|
|**{% data variables.ios-values.rendering_attr_streetLighting_name %}**: Showing street lighting on the map. On the map, you can see illuminated and not illuminated street, underground illuminated way, temporarily illuminated street. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map styles](/assets/images/map/ms-18.png)|
|**{% data variables.ios-values.rendering_attr_OSMMapperAssistant_name %}**:Special setting for mappers. Showed refs, remarks, comments on the map from other mappers. |
|![Map styles](/assets/images/map/ms-19.png)|
|**{% data variables.ios-values.rendering_attr_depthContours_name %}**: Showing nautical depth contours on seas. You need to have [nautical plugin](/osmand/plugins/nautical-charts) and download Nautical maps.|
|![Map styles](/assets/images/map/ms-20.png)|

### Routes

Sometimes when we use the application during your trip, you don't use navigation and you want to see special paths and symbols on the map. In OsmAnd we can highlight routes and hiking symbol overlay for your activities. It will very useful for your cycling, hiking, etc. In the table we show all parameters:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.rendering_category_routes %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.rendering_category_routes %}

|Parameter and Description|   
|------------|
|**_{% data variables.android-values.rendering_category_routes %}_**|
|**{% data variables.android-values.rendering_attr_showCycleRoutes_name %}**: Showing colored cycle routes, paths, and showing nodes network cycle routes. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map styles](/assets/images/map/ms-21.png)|
|**{% data variables.android-values.rendering_attr_showCycleNodeNetworkRoutes_name %}**: Highlighted cycle routes and showed nodes network cycle routes.|
|![Map styles](/assets/images/map/ms-22.png)|
|**{% data variables.android-values.rendering_attr_showMtbRoutes_name %}**: Showing colored MTB trails. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map styles](/assets/images/map/ms-23.png)|
|**{% data variables.android-values.rendering_attr_alpineHiking_name %}**: Showing  [classified hiking trails](https://wiki.openstreetmap.org/wiki/Key:sac_scale) in mountainous areas with regard to the difficulties to be expected by color.|
|![Map styles](/assets/images/map/ms-24.png)|
|**{% data variables.android-values.rendering_attr_horseRoutes_name %}**: Showing colored routes and symbols for riding horses.|
|![Map styles](/assets/images/map/ms-25.png)|
|**{% data variables.android-values.rendering_attr_whiteWaterSports_name %}**: Showing [icons of access, dangerous areas, tourism of whitewater sports](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). |
|![Map styles](/assets/images/map/ms-26.png)|
|**_{% data variables.android-values.rendering_attr_hikingRoutesOSMC_name %}_**|
|**{% data variables.android-values.rendering_value_walkingRoutesOSMC_name %}**: Showing [colored hiking trails and OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) on the map.|
|![Map styles](/assets/images/map/ms-27.png)|
|**{% data variables.android-values.rendering_value_walkingRoutesScopeOSMC_name %}**: Showing [colored trails by type and OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) on the map. |
|![Map styles](/assets/images/map/ms-28.png)|
|**{% data variables.android-values.rendering_value_walkingRoutesOSMCNodes_name %}**: Showing [Node networks](https://wiki.openstreetmap.org/wiki/Node_Networks) on the map. |
|![Map styles](/assets/images/map/ms-29.png)|

### Transport

In navigation in cities, you need to see public transport in more contrast and stops. Of course, this setting shows train routes too.

You can click to public transport stop and choose one of a public transport route. You see all routes with stops.

In OsmAnd  we can choose special rendering for these needed:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.shared_string_show %} → {% data variables.android-values.icon_group_transport %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.rendering_category_transport %}

|Parameter and Description|   
|------------|
|**{% data variables.android-values.rendering_attr_transportStops_name %}**: Showing public transport stops.|
|![Map styles](/assets/images/map/ms-30.png)|
|**{% data variables.android-values.rendering_attr_publicTransportMode_name %}**: Showing bus, trolleybus, shuttle routes.|
|![Map styles](/assets/images/map/ms-31.png)|
|**{% data variables.android-values.rendering_attr_tramTrainRoutes_name %}**: Showing tram and train routes. |
|![Map styles](/assets/images/map/ms-32.png)|
|**{% data variables.android-values.rendering_attr_subwayMode_name %}**: Showing underground routes.|
|![Map styles](/assets/images/map/ms-33.png)|

### Hide

Sometimes we need to hide objects on the map for better vision. For example to hide water during using [Underlay layer of Satellite online maps](/osmand/map/online-raster-maps#select-map-as-main--underlay--overlay-layer).
In order to hide some objects on the map you can choose them in this menu:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.shared_string_hide %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.rendering_category_hide %}

|Parameter          |Description        
|:------------|:---------------|
|{% data variables.android-values.rendering_attr_noAdminboundaries_name %}| Hide regional boundaries inside of countries, but state boundaries are visible. |
|{% data variables.android-values.rendering_attr_noPolygons_name %}|Hide all polygons of natural objects, special function for [Underlay/Overlay layer](https://docs.osmand.net/en/main@latest/osmand/map/online-raster-maps#change-layer-parameters-transparency).  |
|{% data variables.android-values.rendering_attr_hideBuildings_name %}|Hide all polygons of buildings. |
|{% data variables.android-values.rendering_attr_hideWaterPolygons_name %}|Hide all polygons of water (seas, lakes, reservoirs and etc.)  |
|{% data variables.android-values.rendering_attr_hideHouseNumbers_name %}|Hide house numbers on the map.  |
|{% data variables.android-values.rendering_attr_hideProposed_name %}|Hide proposed objects, that objects which planned for a building, but only have a project (projected roads, crossroads, buildings and etc.)  |
|{% data variables.android-values.rendering_attr_hideIcons_name %}|Hide POI icons from the map. But labels of these POI will be on the map. |
|{% data variables.android-values.rendering_attr_hidePOILabels_name %}|Hide POI labels from the map. But icons of these POI will be on the map.  |
|{% data variables.android-values.rendering_attr_hideUnderground_name %}| Hide all underground objects, like tunnels, passes, floors, etc. Special for clearing map on cities from nonuseful objects.  |
|{% data variables.android-values.rendering_attr_hideOverground_name %}|Hide all overground objects. Special for seeing only underground objects like tunnels, passed, etc.|

### Road style

Special settings for roads. When we change colors according to road Atlas or add high contrast of roads or bold outline for roads.

|Parameter and Description|   
|------------|
|**{% data variables.android-values.rendering_value_default_name %}**: Default style for highways. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map styles](/assets/images/map/ms-34.png)|
|**{% data variables.android-values.rendering_value_germanRoadAtlas_name %}**: Style of German road atlas.|
|![Map styles](/assets/images/map/ms-35.png)|
|**{% data variables.android-values.rendering_value_americanRoadAtlas_name %}**: Style of American road atlas.|
|![Map styles](/assets/images/map/ms-36.png)|
|**{% data variables.android-values.rendering_value_highContrastRoads_name %}**: The high contrast of roads.|
|![Map styles](/assets/images/map/ms-37.png)|
|**{% data variables.android-values.rendering_value_boldOutline_name %}**: Bold outline for roads.|
|![Map styles](/assets/images/map/ms-38.png)|

### Text size

This setting helps to change the text size for names on the map:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.text_size %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.map_settings_text_size %}

|Example|  
|------------|
|**100%**|
|![Map styles](/assets/images/map/ms-39.png)|
|**200%**|
|![Map styles](/assets/images/map/ms-40.png)|

### Map magnifier

This setting helps to change magnifier of the map. You can choose this setting by long-click to "+" or "-" button on the screen or:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.map_magnifier %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.map_settings_map_magnifier %}

|Example|  
|------------|
|**75%**|
|![Map styles](/assets/images/map/ms-41.png)|
|**200%**|
|![Map styles](/assets/images/map/ms-42.png)|

### Map Language

This setting allows using of any language for names on the map. If names don't have translation we can choose transliteration:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.map_locale %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.sett_lang %}

|Example|  
|------------|
|**Local names**|
|![Map styles](/assets/images/map/ms-43.png)|
|**Russian**|
|![Map styles](/assets/images/map/ms-44.png)|

## Custom Map style (own map style)
If you have your own or 3rd party custom map style created according to [Specification](/development/osmand-file-formats/osmand-rendering-style), you can install it on a device in the following ways.
- Copy *.render.xml file on devices & Open with OsmAnd. 
- Rendering styles could be exported & imported via [Standard import / export dialogs](/osmand/start-with/import-export). So if you create an example '*.osf' package which will work as a plugin that could be shared with other people.
- If you have access directly to the External Storage of OsmAnd (Android), you can simply copy it to **rendering-styles** folder. Read more about it in [Storage specification](/osmand/storage).

After that, you could select your own map style in the menu.


