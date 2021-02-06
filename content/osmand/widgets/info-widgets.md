---
title: "Informational widgets"
intro: "Informational widgets allow user see information about current location, speed, time, battery level on the map display."
versions: '*'
---

## Altitude
An “altitude” is the vertical measurement measured from a specific datum or plane, which is mostly sea level. Hence, an altitude is users height from mean sea level (also known as 0 feet). 

Altitude widget shows the height above sea level.
It has three states 
Show – allows user to see altitude widget on the map
Hide – allows user to hide altitude widget from the map
Collapse – allows user to see altitude widget on the map and hide it when it is not used

OsmAnd takes attitude data from a device. And the device takes them from the chip which is responsible for GPS

User could find Altitude widget in Configure screen menu
User could make Altitude correction to make sure the up-to-date data is used. 
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.index_item_world_altitude_correction %} 

## Current time
<!--Current time widget откуда берет информацию? Он с устройства ее считывает? Если на устройстве время не правильно показывает. что и виджет будет не правильно показывать время?-->
Current time widget shows current time.
It has three states 
Show – allows user to see Altitude widget on the map
Hide – allows user to hide Altitude widget from the map
Collapse – allows user to see Altitude widget on the map and hide it when it is not used
OsmAnd takes Current time data from a device.

User could find Current time widget in Configure screen menu

## Speed
Speed widget shows your current speed.
It has three states 
Show – allows user to see Speed widget on the map
Hide – allows user to hide Speed widget from the map
Collapse – allows user to see Speed widget on the map and hide it when it is not used
OsmAnd takes Speed data from a device. It depend on accelerometer and gyroscope sensors on mobile device

User could find Speed widget in Configure screen menu

## Battery level (Android)
Battery level widget shows battery level of your device.
It has three states 
Show – allows user to see altitude widget on the map
Hide – allows user to hide altitude widget from the map
Collapse – allows user to see altitude widget on the map and hide it when it is not used
OsmAnd takes Battery level from a device. 

Battery level widget can be found in Configure screen menu

## GPS Info (Android)
GPS info widget shows number of satellites. <!--You can click to this widget for adding GPS - applications.-->
It has three states 
Show – allows user to see GPS info widget on the map
Hide – allows user to hide GPS info widget from the map
Collapse – allows user to see GPS info widget on the map and hide it when it is not used
OsmAnd takes GPS info from a device. <!--Then on the main screen tap on GPS widget. You can see GPS status.-->  The more satellites a device can see, the better positioning will be provided.
To see a GPS status menu user has to click on GPS info widget. GPS status menu provides additional tools for tuning onboard GPS device

User could find GPS info widget in Configure screen menu

<!--User could make GPS correction to make sure the up-to-date data is used. 
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.index_item_world_altitude_correction %} .-->

## FPS-info (Development plugin)
- Purpose
- How to use
- How to configure

{% link_with_intro /radius-ruler %}
{% link_with_intro /coordinates-widget %}

## Link to radius-ruler

## Link to coordinates-widget
