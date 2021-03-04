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
OsmAnd takes attitude data from a device. And the device takes them from the chip which is responsible for GPS.
{% endnote %}

To find Altitude widget follow: <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_altitude %}  <br>
{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_altitude %} <br>

> **_Note:_** User could make Altitude correction (for Android only) to make sure the up-to-date data is used. <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.index_item_world_altitude_correction %} <br>

## Current time
![Current time Android widget](/assets/images/docs/widgets/current_time_android_widget.png) <br>

<!--Current time widget откуда берет информацию? Он с устройства ее считывает? Если на устройстве время не правильно показывает. что и виджет будет не правильно показывать время?-->

Current time widget shows current time.

{% note %}
OsmAnd takes Current time data from a device.
{% endnote %}

To find Current time widget follow: <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_plain_time %}  <br>
{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_plain_time %} <br>

## Speed
![Speed Android widget](/assets/images/docs/widgets/speed_a_widget.png) <br>

Speed widget shows your current speed.<br>

{% note %}
OsmAnd takes Speed data from a device. It depend on accelerometer, gyroscope sensors on mobile device and GPS.
{% endnote %}

To find Speed widget follow: <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.map_widget_speed %}  <br>
{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.gpx_speed %} <br>

## Coordinates widget (Android)
The Coordinates widget is shown at the top of the screen. It shows geographic coordinates of the user's location.
![Coordinates Android widget](/assets/images/docs/widgets/coordinates_widget.png)

To enable Coordinates widget. 
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.coordinates %} 

Click on the widget to copy coordinates to the clipboard and then paste them anywhere. Or share the coordinates via clicking on the button 'Share' in the pop-up at the bottom. 

> **Note**: To change coordinates format follow:
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.coordinates_format %}.


## Battery level (Android)
![Battery level Android widget](/assets/images/docs/widgets/battery_level_widget.png) <br>

Battery level widget shows battery level of your device. <br>

{% note %}
OsmAnd takes Battery level from a device.  
{% endnote %}

To find Battery level widget follow: <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.map_widget_battery %}  <br>
{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_battery %} <br>

## GPS Info (Android)
![GPS Info Android widget](/assets/images/docs/widgets/gps_info_a_widget.png) <br>

GPS (Global Positioning System) info widget shows number of satellites. <br>

{% note %}
OsmAnd takes GPS info from a device. The more satellites a device can see, the better positioning will be provided.
Click on GPS info widget to see a GPS status menu. GPS status menu provides additional tools for tuning onboard GPS device.  
{% endnote %}

To find GPS Info widget follow: <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.gps_provider %}  <br>

> **_Note:_** User could make GPS correction to make sure the up-to-date data is used. <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.open_settings %} → {% data variables.android-values.rendering_value_browse_map_name %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.debugging_and_development %}→ long tap on the {% data variables.android-values.agps_info %}. <br>
In a second it will update.  <br>

## FPS-info (Android)
![FPS info Android widget](/assets/images/docs/widgets/fps_info_a_wigget.png) <br>

FPS debug info widget shows Frames per Second (FPS) of your screen. <br>
Where the The left number  is the maps Frames per Second (FPS) and the right one is general layer Frames per Second (FPS). <br>

<!--When an application sets its preferred frame rate, the view chooses a frame rate as close to that as possible based on the capabilities of the screen the view is displayed on. To provide a consistent frame rate, the actual frame rate chosen is usually a factor of the maximum refresh rate of the screen. <br>
An application should choose a frame rate that it can consistently maintain. The default value is 60 frames per second.  <br>-->

To find FPS debug info widget follow: <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.map_widget_fps_info %}  <br>

> **_Note:_** To debug the map speed drawing needed to choose <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} → tap ≡ → {% data variables.android-values.open_settings %} → enable {% data variables.android-values.trace_rendering %}. <br>
In a second it will update. <br>


## Read more
{% link_with_intro /radius-ruler %}
{% link_with_intro /coordinates-widget %}
