---
title: "Informational widgets"
intro: "Informational widgets allow user see information about current location, speed, time, battery level on the map display."
versions: '*'
---

<!--Надо написать, что часть виджетов кликабельны. + добавить картинки-->

## Altitude
![Altitude Android widget](/assets/images/docs/widgets/altitude_android_widget.png)

Altitude widget shows the height above sea level. <br>

*_An “altitude” is the vertical measurement measured from a specific datum or plane, which is mostly sea level. Hence, an altitude is users height from mean sea level (also known as 0 feet)._* <br>

It has three states: <br>
* {% data variables.android-values.shared_string_show %} – allows user to see Altitude widget on the map <br>
* {% data variables.android-values.rendering_category_hide %} – allows user to hide Altitude widget from the map <br>
* {% data variables.android-values.shared_string_collapse %} – allows user to see Altitude widget on the map and hide it when it is not used <br>

*_OsmAnd takes attitude data from a device. And the device takes them from the chip which is responsible for GPS_* <br>

User could find Altitude widget in Configure screen menu. <br>

*_User could make Altitude correction to make sure the up-to-date data is used._* <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.index_item_world_altitude_correction %} <br>

## Current time
![Current time Android widget](/assets/images/docs/widgets/current_time_android_widget.png)<br>
<!--Current time widget откуда берет информацию? Он с устройства ее считывает? Если на устройстве время не правильно показывает. что и виджет будет не правильно показывать время?-->
Current time widget shows current time. <br>

It has three states: <br>
* {% data variables.android-values.shared_string_show %} – allows user to see Altitude widget on the map <br>
* {% data variables.android-values.rendering_category_hide %} – allows user to hide Altitude widget from the map <br>
* {% data variables.android-values.shared_string_collapse %} – allows user to see Altitude widget on the map and hide it when it is not used <br>

*_OsmAnd takes Current time data from a device._* <br>

User could find Current time widget in Configure screen menu <br>

## Speed
![Speed Android widget](/assets/images/docs/widgets/speed_a_widget.png)

Speed widget shows your current speed.<br>

It has three states: <br> 
* {% data variables.android-values.shared_string_show %} – allows user to see Altitude widget on the map <br>
* {% data variables.android-values.rendering_category_hide %} – allows user to hide Altitude widget from the map <br>
* {% data variables.android-values.shared_string_collapse %} – allows user to see Altitude widget on the map and hide it when it is not used <br>

OsmAnd takes Speed data from a device. It depend on accelerometer, gyroscope sensors on mobile device and GPS <br>

User could find Speed widget in Configure screen menu <br>

## Battery level (Android)
![Battery level Android widget](/assets/images/docs/widgets/battery_level_a_widget.png)

Battery level widget shows battery level of your device. <br>

It has three states: <br> 
* {% data variables.android-values.shared_string_show %} – allows user to see Altitude widget on the map <br>
* {% data variables.android-values.rendering_category_hide %} – allows user to hide Altitude widget from the map <br>
* {% data variables.android-values.shared_string_collapse %} – allows user to see Altitude widget on the map and hide it when it is not used <br>

*_OsmAnd takes Battery level from a device. _* <br>

Battery level widget can be found in Configure screen menu <br>

## GPS Info (Android)
![GPS Info Android widget](/assets/images/docs/widgets/gps_info_a_widget.png)

GPS (Global Positioning System) info widget shows number of satellites. <br>
<!--You can click to this widget for adding GPS - applications.-->
It has three states: <br> 
* {% data variables.android-values.shared_string_show %} – allows user to see Altitude widget on the map <br>
* {% data variables.android-values.rendering_category_hide %} – allows user to hide Altitude widget from the map <br>
* {% data variables.android-values.shared_string_collapse %} – allows user to see Altitude widget on the map and hide it when it is not used <br>

*_OsmAnd takes GPS info from a device. <!--Then on the main screen tap on GPS widget. You can see GPS status.-->  The more satellites a device can see, the better positioning will be provided. <br>
To see a GPS status menu user has to click on GPS info widget. GPS status menu provides additional tools for tuning onboard GPS device. _* <br>

User could find GPS info widget in Configure screen menu. <br>

*_User could make GPS correction to make sure the up-to-date data is used._* <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.open_settings %} → {% data variables.android-values.rendering_value_browse_map_name %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.debugging_and_development %}→ long tao on the {% data variables.android-values.agps_info %}. <br>
*_In a second it will update. _* <br>

## FPS-info (Development plugin)
![FPS info Android widget](/assets/images/docs/widgets/fps_info_a_wigget.png)

FPS debug info widget shows Frames per Second (FPS) of your screen. <br>
Where the The left number  is the maps Frames per Second (FPS) and the rigt one is general layer Frames per Second (FPS) <br>

*_When an application sets its preferred frame rate, the view chooses a frame rate as close to that as possible based on the capabilities of the screen the view is displayed on. To provide a consistent frame rate, the actual frame rate chosen is usually a factor of the maximum refresh rate of the screen. <br>
An application should choose a frame rate that it can consistently maintain. The default value is 60 frames per second. _* <br>

It has three states <br>
* {% data variables.android-values.shared_string_show %} – allows user to see Altitude widget on the map <br>
* {% data variables.android-values.rendering_category_hide %} – allows user to hide Altitude widget from the map <br>
* {% data variables.android-values.shared_string_collapse %} – allows user to see Altitude widget on the map and hide it when it is not used <br>

User could find FPS debug info widget in Configure screen menu <br>

*_To debug the map speed drawing needed to choose _* <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} → *_tap three vertical dots_* → {% data variables.android-values.open_settings %} → *_enable_* {% data variables.android-values.trace_rendering %} . <br>
In a second it will update. <br>

## Read more
{% link_with_intro /radius-ruler %}
{% link_with_intro /coordinates-widget %}
