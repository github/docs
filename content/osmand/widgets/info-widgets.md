---
title: "Informational widgets"
intro: "Informational widgets allow user see information about current location, speed, time, battery level on the map display."
versions: '*'
---
Informational widgets is a text in the top right-hand corner in frame over the map. Some of them can be clickable.

![Altitude Android widget](/assets/images/docs/widgets/iw-1.png)

## Altitude

Altitude widget shows the height above sea level.

![Altitude Android widget](/assets/images/docs/widgets/iw-2.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_altitude %} |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_altitude %} |
| Click | Nothing |
| Format | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.coordinates_format %} |
|        | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.coordinates_format %} |

> **_Note:_** User could make Altitude correction (for Android only) to make sure the up-to-date data is used.

{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.index_item_world_altitude_correction %} 

## Current time

![Current time widget](/assets/images/docs/widgets/iw-3.png)

This widget shows current time from a device.

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_plain_time %} |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_plain_time %} |
| Click | Nothing |
| Format | Takes format from device settings |

## Speed

This widget shows your current speed.

![Speed Android widget](/assets/images/docs/widgets/iw-4.png) 

{% note %}
OsmAnd takes Speed data from a device. It depend on accelerometer, gyroscope sensors on mobile device and GPS.
{% endnote %}

To find Speed widget follow: <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.map_widget_speed %}  <br>
{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.gpx_speed %} <br>

## Coordinates widget (Android)

The Coordinates widget is shown at the top of the screen. It shows geographic coordinates of the user's location.

![Coordinates Android widget](/assets/images/docs/widgets/iw-5.png)

| | |
|------------|------------|
| Enable | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.coordinates %}  |
| Click | Click on the widget to copy coordinates to the clipboard and then paste them anywhere. Or share the coordinates via clicking on the button 'Share' in the pop-up at the bottom |
| Change Format | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.coordinates_format %} |

## Battery level

This widget shows battery level of your device.

![Battery level Android widget](/assets/images/docs/widgets/iw-6.png) 

{% note %}
OsmAnd takes Battery level from a device.  
{% endnote %}

To find Battery level widget follow: 

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.map_widget_battery %}  

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_battery %} 

## GPS Info (Android)

GPS (Global Positioning System) info widget shows number of satellites.

![GPS Info Android widget](/assets/images/docs/widgets/iw-7.png) 

{% note %}
OsmAnd takes GPS info from a device. The more satellites a device can see, the better positioning will be provided.
Click on GPS info widget to see a GPS status menu. GPS status menu provides additional tools for tuning onboard GPS device.  
{% endnote %}

To find GPS Info widget follow: 

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.gps_provider %}  

> **_Note:_** User could make GPS correction to make sure the up-to-date data is used. 
> 
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.open_settings %} → {% data variables.android-values.rendering_value_browse_map_name %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.debugging_and_development %}→ long tap on the {% data variables.android-values.agps_info %}. 
In a second it will update.  

## FPS-info (Android)

FPS debug info widget shows Frames per Second (FPS) of your screen. 

![FPS info Android widget](/assets/images/docs/widgets/iw-8.png) 

Where the The left number  is the maps Frames per Second (FPS) and the right one is general layer Frames per Second (FPS). 

To find FPS debug info widget follow:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.map_widget_fps_info %}  

> **_Note:_** To debug the map speed drawing needed to choose 
> 
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} → tap ≡ → {% data variables.android-values.open_settings %} → enable {% data variables.android-values.trace_rendering %}.

In a second it will update.

## Read more
{% link_with_intro /radius-ruler %}
{% link_with_intro /coordinates-widget %}
