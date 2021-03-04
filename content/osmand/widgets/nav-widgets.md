---
title: "Navigational widgets"
intro: "Navigational widgets are used to display information related to the navigation such as distance, arrival / left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints."
versions: '*'
---

Navigational widgets show information about your route during navigation or moving. It helps you to take information about maneuvers, moving time, directions, etc.

![navigational widgets](/assets/images/docs/widgets/nw-1.png)

## Compass

Compass widget shows North on the map. For showing Compass widget on the screen:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_left %} → {% data variables.android-values.map_widget_compass %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_left %} → {% data variables.ios-values.map_widget_compass %}

{% note %}
Clicking to Compass widget changes [{% data variables.android-values.rotate_map_to_bearing %}](/osmand/navigation):

- {% data variables.android-values.rotate_map_bearing_opt %}
- {% data variables.android-values.rotate_map_compass_opt %}
- {% data variables.android-values.rotate_map_none_opt %}
{% endnote %}

![navigational widgets](/assets/images/docs/widgets/nw-2.png)



## Relative / magnetic bearing

In navigation, bearing is the horizontal angle between the direction of an object and another object, or between it and that of true north.

You can choose  {% data variables.android-values.map_widget_magnetic_bearing %} or {% data variables.android-values.map_widget_bearing %} in the menu:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_bearing %} or {% data variables.android-values.map_widget_magnetic_bearing %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.map_widget_magnetic_bearing %} or {% data variables.ios-values.map_widget_bearing %}

[Relative bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) refers to the angle between the craft's forward direction and the location of another object. For example, an object relative bearing of 0 degrees would be dead ahead; an object relative bearing 180 degrees would be behind. Bearings can be measured in mils or degrees.

![navigational widgets](/assets/images/docs/widgets/nw-3.png)

[Magnetic bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) is measured in relation to magnetic north, using the direction toward the magnetic north pole (in northeastern Canada) as a reference point.

![navigational widgets](/assets/images/docs/widgets/nw-4.png)

{% note %}
Cliking to this widget in the screen you choose between {% data variables.android-values.map_widget_bearing %} (degree) or  {% data variables.android-values.map_widget_magnetic_bearing %} (dergree with "M").
{% endnote %}

## Destination

![navigational widgets](/assets/images/docs/widgets/nw-5.png)

The widget shows current distance to the finish line: 

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_right %} →  {% data variables.android-values.route_descr_destination %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.map_widget_distance%}

{% note %}
Clicking to this widget move to finish point.
{% endnote %}

## Arrival time or Time to go

![navigational widgets](/assets/images/docs/widgets/nw-6.png)

The widget shows {% data variables.android-values.access_arrival_time %} or {% data variables.android-values.map_widget_time %} of your navigation:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_right %} →  {% data variables.android-values.access_arrival_time %} or {% data variables.android-values.map_widget_time %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.access_arrival_time %} or {% data variables.ios-values.map_widget_time %}

{% note %}
Clicking to this widget to change "Arrival time" to "Time to go" and vice versa.
{% endnote %}

## Speed and Speed limit

![navigational widgets](/assets/images/docs/widgets/nw-7.png)

Widgets show your current speed (speedometer icon) and speed limit (red speedometer icon) for the current road:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_right %} →  {% data variables.android-values.map_widget_speed %} or {% data variables.android-values.map_widget_max_speed %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.gpx_speed %} or {% data variables.ios-values.map_widget_max_speed %}

## Lanes

![navigational widgets](/assets/images/docs/widgets/nw-8.png)

The widget shows which lanes you need to drive during navigation. Yellow is the usual position, green is the approach to the nearest maneuver (100 meters before the maneuver). The numbers on the widget are the distance to the nearest maneuver.

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_appearance_rem %} →  {% data variables.android-values.show_lanes %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_appearance_rem %} → {% data variables.ios-values.show_lanes %}

## Alert information
- Purpose
- How to use
- How to configure

## Next turns

![navigational widgets](/assets/images/docs/widgets/nw-9.png)

The widget shows warnings about your maneuvers with a picture of maneuver and distance to it. The color of a maneuver can be grey, yellow (less 900m), or green(less 100m.), depending on the distance to it. Up to three turns can be shown:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_left %} → {% data variables.android-values.map_widget_next_turn %}, {% data variables.android-values.map_widget_next_turn_small %}, {% data variables.android-values.map_widget_next_next_turn %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_left %} → {% data variables.ios-values.map_widget_next_turn %}, {% data variables.ios-values.map_widget_next_turn_small %}, {% data variables.ios-values.map_widget_next_next_turn %}

## Street name / POIs (Android)

![navigational widgets](/assets/images/docs/widgets/nw-10.png)

![navigational widgets](/assets/images/docs/widgets/nw-11.png)

The widget shows the name of the street or of the road (with road shield) for maneuver during your navigation and shows POI, Favorites along your route:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_appearance_rem %} →  {% data variables.android-values.map_widget_top_text %}


## Link to markers
