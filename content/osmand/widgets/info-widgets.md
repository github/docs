---
title: "Informational widgets"
intro: "Informational widgets allow user see information about current location, speed, time, battery level on the map display."
versions: '*'
---
Informational widgets is a text in the top right-hand corner in frame over the map. Some of them can be clickable.

![Altitude Android widget](/assets/images/docs/widgets/altitude_android_widget_all.png)

## Altitude
![Altitude Android widget](/assets/images/docs/widgets/altitude_android_widget.png) <br>

Altitude widget shows the height above sea level. <br>

<!-- An “altitude” is the vertical measurement measured from a specific datum or plane, which is mostly sea level. Hence, an altitude is users height from mean sea level (also known as 0 feet). <br> -->
{% note %}
OsmAnd takes attitude data from a device. And the device takes them from the chip which is responsible for GPS. <br>
{% endnote %}

To find Altitude widget follow <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} <br>
{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} <br>

> **_Note:_** User could make Altitude correction (for Android only) to make sure the up-to-date data is used. <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.index_item_world_altitude_correction %} <br>

## Current time
![Current time Android widget](/assets/images/docs/widgets/current_time_android_widget.png) <br>

<!--Current time widget откуда берет информацию? Он с устройства ее считывает? Если на устройстве время не правильно показывает. что и виджет будет не правильно показывать время?-->
{% note %}
Current time widget shows current time.
{% endnote %}
{% warning %}
OsmAnd takes Current time data from a device.
{% endwarning %}
User could find Current time widget in Configure screen menu. <br>

## Speed
![Speed Android widget](/assets/images/docs/widgets/speed_a_widget.png) <br>

Speed widget shows your current speed.<br>

OsmAnd takes Speed data from a device. It depend on accelerometer, gyroscope sensors on mobile device and GPS. <br>

User could find Speed widget in Configure screen menu. <br>

## Battery level (Android)
![Battery level Android widget](/assets/images/docs/widgets/battery_level_widget.png) <br>

Battery level widget shows battery level of your device. <br>

OsmAnd takes Battery level from a device.  

Battery level widget can be found in Configure screen menu. <br>

## GPS Info (Android)
![GPS Info Android widget](/assets/images/docs/widgets/gps_info_a_widget.png) <br>

GPS (Global Positioning System) info widget shows number of satellites. <br>

OsmAnd takes GPS info from a device. The more satellites a device can see, the better positioning will be provided. <br>
To see a GPS status menu user has to click on GPS info widget. GPS status menu provides additional tools for tuning onboard GPS device.  <br>

User could find GPS info widget in Configure screen menu. <br>

User could make GPS correction to make sure the up-to-date data is used. <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.open_settings %} → {% data variables.android-values.rendering_value_browse_map_name %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.debugging_and_development %}→ long tao on the {% data variables.android-values.agps_info %}. <br>
In a second it will update.  <br>

## FPS-info (Development plugin)
![FPS info Android widget](/assets/images/docs/widgets/fps_info_a_wigget.png) <br>

FPS debug info widget shows Frames per Second (FPS) of your screen. <br>
Where the The left number  is the maps Frames per Second (FPS) and the rigt one is general layer Frames per Second (FPS). <br>

When an application sets its preferred frame rate, the view chooses a frame rate as close to that as possible based on the capabilities of the screen the view is displayed on. To provide a consistent frame rate, the actual frame rate chosen is usually a factor of the maximum refresh rate of the screen. <br>
An application should choose a frame rate that it can consistently maintain. The default value is 60 frames per second.  <br>

User could find FPS debug info widget in Configure screen menu. <br>

> **_Note:_** FPS debug info widget is available only for Android. <br>

To debug the map speed drawing needed to choose <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} → tap ≡ → {% data variables.android-values.open_settings %} → enable {% data variables.android-values.trace_rendering %} . <br>
In a second it will update. <br>

## Read more
{% link_with_intro /radius-ruler %}
{% link_with_intro /coordinates-widget %}
