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

Touring view is created to meet the needs of tourists and has higher contrast than the regular one.

![Map styles](/assets/images/map/ms-2.png)

### UniRS and LightRS

UniRS and LightRS styles are author styles that render the basic map information but in different color schemes.

UniRS style: Simple and contrast style for car navigation. Gentle for the eyes in the night mode. Key features: contour lines, contrast orange styled roads, less distracting secondary map objects.
![Map styles](/assets/images/map/ms-3.png)

LightRS style:
![Map styles](/assets/images/map/ms-4.png)

### Nautical 
Style for marine and river navigation. Key features: buoys, lighthouses, water navigation lines and marks, harbours, seamark services, depth contours. Read more about [Nautical maps](https://osmand.net/features/nautical-charts).

![Map styles](/assets/images/map/ms-5.png)

### Winter and ski

Winter and ski style is designed to help you navigate on winter sports locations: you'll be able to see ski pistes and other details such as complexity of skiing tracks and ski lift markers. Key features: renders pistes, aerial ways and other ski features in a convenient way. Less distracting secondary map objects. Read more about [Ski maps](https://osmand.net/features/ski-plugin).

![Map styles](/assets/images/map/ms-6.png)

### Topo

Contrast style designed primarily for nature hiking, trekking and cycling. Good readability in complex external lighting. Key features: contrast roads and natural objects, different types of routes, contour lines with advanced settings, more details at corresponding zoom levels than "default" style. "Surface integrity" option allows you distinguish between roads with different surface quality. No night mode.

![Map styles](/assets/images/map/ms-7.png)

### Mapnik

Mapnik - former default style. Key features: colours are similar to Mapnik style.

![Map styles](/assets/images/map/ms-8.png)

### Desert

Desert - for deserts and other sparsely populated areas. Displays more details on the viewing scale.

![Map styles](/assets/images/map/ms-9.png)

### Offroad

Offroad - for off-road driving, based on the "Topo" topographic style, can be used with green satellite imagery as a backing. Reduced thickness of main roads, increased thickness of tracks, paths, bicycles and other routes. There is no night mode.
Suitable for use during off-road driving. Suitable for use with green satellite images as an undarlay map. Key points: reduced thickness of the main roads, increased thickness of tracks, paths, bicycle and other routes. Based on Topo style. 

![Map styles](/assets/images/map/ms-10.png)

### Snowmobile

Snowmobile - fro snowmobile riding. Contrast snowmobile trails.

![Map styles](/assets/images/map/ms-11.png)

## Map legend

Map legend is a visual explanation of the symbols used on the map. It typically includes a sample of each symbol (point, line, or area), and a short description of what the symbol means. For example, a short segment of a blue sinuous line may be labeled 'rivers'.
Map legend of OsmAnd maps you can find [here](https://osmand.net/help-online/map-legend/).

## How to change parameters for Map style (Map rendering)

In OsmAnd application you can customize map rendering. It's mean, that you can show or hide details and routes on the map, change map mode, map language, choose text size and map magnifier. All this settings help you to make your map more useful during your trips. The general settings is choosing of [Map style](/osmand/map/map-styles-and-parameters#default-map-styles), which we discrebed above in this article:

In {% data variables.android-values.rendering_category_details %} you can show or hide next additional map details:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.map_widget_map_rendering %} → {% data variables.android-values.rendering_category_details %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.res_details %}

|Parameter          |Description|
|:------------|:---------------|
|[{% data variables.ios-values.rendering_attr_moreDetailed_name %}]|![Map styles](/assets/images/map/ms-12.png)|
|[{% data variables.ios-values.rendering_attr_showSurfaces_name %}]|{% data variables.ios-values.res_online_url_descr %}|
|[{% data variables.ios-values.rendering_attr_showSurfaceGrade_name %}]|{% data variables.ios-values.res_zoom_levels_desc %}|
|[{% data variables.ios-values.rendering_attr_showAccess_name %}]|{% data variables.ios-values.res_expire_time_desc %}|
|[{% data variables.ios-values.rendering_attr_showLez_name %}]|{% data variables.ios-values.res_pseudo_mercator %} or {% data variables.ios-values.res_elliptic_mercator %}|
|[{% data variables.ios-values.rendering_attr_coloredBuildings_name}]|{% data variables.ios-values.res_source_sqlite %} |
|[{% data variables.ios-values.rendering_attr_streetLighting_name}]|{% data variables.ios-values.res_source_sqlite %} |
|[{% data variables.ios-values.rendering_attr_OSMMapperAssistant_name}]|{% data variables.ios-values.res_source_sqlite %} |
|[{% data variables.ios-values.rendering_attr_depthContours_name}]|{% data variables.ios-values.res_source_sqlite %} |


## How to create and to add your own Map style (Map rendering)

