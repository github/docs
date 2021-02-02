---
title: "Map styles and parameters"
intro: "OsmAnd provides a huge range of map styles for many activities like cycling, hiking, riding by car or snowmobile, etc. We name it Map style or Map rendering. Set parameters for Map rendering you can see more details on the map or hide some details. You can create your own map style OsmAnd. Choose your style or make it yourself and enjoy your trip."
versions: '*'
---

## Use cases

Editable Map styles are one of the main advantages of OsmAnd. Each user can customize the display of the map for himself and his hobbies, configure to show or hide certain map objects, sizes and colors of this objects,  change the scale on which to display certain objects. 

## Default Map styles:

OsmAnd offers you numerous map styles and data layers to fit the purpose by default. Let's take a glance at the main ones for day and night modes:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.map_widget_renderer %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_offline %} 


### OsmAnd

OsmAnd style is the default style of map rendering, general purpose style. It offers details about the city such as streets, buildings, transport stops, etc. Simplified rendering to have cleaner maps in the populated cities. Key features: contour lines, routes, surface quality, access restrictions, road shields, paths rendering according to SAC scale, whitewater sports features. 

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
Winter and ski style is designed to help you navigate on winter sports locations: you'll be able to see ski pistes and other details such as complexity of skiing tracks and ski lift markers. Key features: renders pistes, aerial ways and other ski features in a convenient way. Less distracting secondary map objects. Read more about [Ski maps](https://osmand.net/features/ski-plugin).

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

## How to change parameters for Map style (Map rendering)

In OsmAnd application you can customize map rendering. It's mean, that you can show or hide details and routes on the map, change map mode, map language, choose text size and map magnifier. All this settings help you to make your map more useful during your trips. The general settings is choosing of [Map style](/osmand/map/map-styles-and-parameters#default-map-styles), which we discrebed above in this article:

### Details
In **{% data variables.android-values.rendering_category_details %} menu** you can show or hide next additional map details:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.rendering_category_details %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.res_details %}

|Parameter |Description |<div style="width:160px">Example</div>|        
|------------|---------------|---------------|
|[{% data variables.ios-values.rendering_attr_moreDetailed_name %}]|Showed polygons, trails, points, signs at low zooms on the map. It means you can see more details on your map at low zooms. **Note**: rendering in your device may be no fast.|![Map styles](/assets/images/map/ms-12.png)|
|[{% data variables.ios-values.rendering_attr_showSurfaces_name %}]|Showed type of surface of roads. Color on the road helps you to understand what is surface of the road: asphalt, grass or sand and etc. Look at [Map legend](https://osmand.net/help-online/map-legend/).|![Map styles](/assets/images/map/ms-13.png)|
|[{% data variables.ios-values.rendering_attr_showSurfaceGrade_name %}]|Showed smoothness (grade) of the road. What is smoothness your roads: good, bad or maybe horrible and etc. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your road smoothness.|![Map styles](/assets/images/map/ms-14.png)|
|[{% data variables.ios-values.rendering_attr_showAccess_name %}]|Showed access of roads: private or permissivis, or only for emergency, or maybe toll road. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your road access. |![Map styles](/assets/images/map/ms-15.png)|
|[{% data variables.ios-values.rendering_attr_showLez_name %}]|Showed green board and labels for Low Emission Zones in cities. It will help you not receive penalty in green citycenter.|![Map styles](/assets/images/map/ms-16.png)|
|[{% data variables.ios-values.rendering_attr_coloredBuildings_name %}]|Colored buildings and places have in special colors for each categorie: Regular buildings, industrial, commercial and etc. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your color for the building. |![Map styles](/assets/images/map/ms-17.png)|
|[{% data variables.ios-values.rendering_attr_streetLighting_name %}]|Showed street lighting on the map. On the map you can see illuminated and not illumintated street, undeground illuminated way, temporarily illuminated street. Look at [Map legend](https://osmand.net/help-online/map-legend/).|![Map styles](/assets/images/map/ms-18.png)|
|[{% data variables.ios-values.rendering_attr_OSMMapperAssistant_name %}]|Special setting for mappers. Showed refs, remarks, comment from on the map from others mappers. |![Map styles](/assets/images/map/ms-19.png)|
|[{% data variables.ios-values.rendering_attr_depthContours_name %}]|Showed nautical depth contours on seas. You need have [nautical plugin](/osmand/plugins/nautical-charts) and download Nautical maps. |![Map styles](/assets/images/map/ms-20.png)|

### Routes

Sometimes when we use the application during your trip or riding, you don't use navigation and you want to see special paths and symbols on the map. In OsmAnd we can highlight routes and hiking symbol overlay for your activities. It will very useful for your cycling, hiking and etc. In the table we show all parameters:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.rendering_category_routes %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.rendering_category_routes %}


|Parameter|Description|<div style="width:160px">Example</div>|       
|------------|---------------|---------------|
|**{% data variables.android-values.rendering_category_routes %}**|
|{% data variables.android-values.rendering_attr_showCycleRoutes_name %}|Colored cycle routes, paths and showed nodes network cycle routes. Look at [Map legend](https://osmand.net/help-online/map-legend/).|![Map styles](/assets/images/map/ms-21.png)|
|{% data variables.android-values.rendering_attr_showCycleNodeNetworkRoutes_name %}|Highlighted cycle routes and showed nodes network cycle routes.|![Map styles](/assets/images/map/ms-22.png)|
|{% data variables.android-values.rendering_attr_showMtbRoutes_name %}|Colored MTB trails. Look at [Map legend](https://osmand.net/help-online/map-legend/).|![Map styles](/assets/images/map/ms-23.png)|
|{% data variables.android-values.rendering_attr_alpineHiking_name %}|[Classified hiking trails](https://wiki.openstreetmap.org/wiki/Key:sac_scale) in mountainous areas with regard to the difficulties to be expected by color.|![Map styles](/assets/images/map/ms-24.png)|
|{% data variables.android-values.rendering_attr_horseRoutes_name %}|Colored routes for riding by horse.|![Map styles](/assets/images/map/ms-25.png)|
|[{% data variables.android-values.rendering_attr_whiteWaterSports_name %}]|Showed [icons of access, danger areas, tourism of whitewater sports](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). |![Map styles](/assets/images/map/ms-26.png)|
|**{% data variables.android-values.rendering_attr_hikingRoutesOSMC_name %}**|
|[{% data variables.ios-values.rendering_attr_streetLighting_name %}]|Showed street lighting on the map. On the map you can see illuminated and not illumintated street, undeground illuminated way, temporarily illuminated street. Look at [Map legend](https://osmand.net/help-online/map-legend/).|![Map styles](/assets/images/map/ms-18.png)|
|[{% data variables.ios-values.rendering_attr_OSMMapperAssistant_name %}]|Special setting for mappers. Showed refs, remarks, comment from on the map from others mappers. |![Map styles](/assets/images/map/ms-19.png)|
|[{% data variables.ios-values.rendering_attr_depthContours_name %}]|Showed nautical depth contours on seas. You need have [nautical plugin](/osmand/plugins/nautical-charts) and download Nautical maps. |![Map styles](/assets/images/map/ms-20.png)|


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
|{% data variables.android-values.rendering_attr_hideProposed_name %}|Hide proposed objects, that objects which plan for building, but only have a project (projected roads, crossroads, buildings and etc.)  |
|{% data variables.android-values.rendering_attr_hideIcons_name %}|Hide POI icons from the map. But labels of these POI will be on the map. |
|{% data variables.android-values.rendering_attr_hidePOILabels_name %}|Hide POI labels from the map. But icons of these POI will be on the map.  |
|{% data variables.android-values.rendering_attr_hideUnderground_name %}| Hide all underground objects, like tunnels, passes, floors, etc. Special for clearing map on cities from nonuseful objects.  |
|{% data variables.android-values.rendering_attr_hideOverground_name %}|Hide all overground objects. Special for seeing only underground objects like tunnels, passed, etc.  |

## How to create and to add your own Map style (Map rendering)

