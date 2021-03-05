---
title: "Informational widgets"
intro: "Informational widgets allow user see information about current location, speed, time, battery level on the map display."
versions: '*'
---

Informational widgets is blocks on the top side of the device screen which show next information.

![Altitude Android widget](/assets/images/docs/widgets/iw-1.png)

## Altitude

Altitude widget shows the height above sea level.

![Altitude Android widget](/assets/images/docs/widgets/iw-2.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_altitude %} |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.map_widget_altitude %} |
| Click | Nothing |
| Format | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.units_and_formats %} → {% data variables.android-values.unit_of_length %} |
|        | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.sett_settings %} → {% data variables.ios-values.app_profiles %} → {% data variables.ios-values.general_settings_2 %} → {% data variables.ios-values.units_and_formats %} → {% data variables.ios-values.unit_of_length %} |
| Note   | **Android:** Download file of Altitude correction to accurately display the altitude on the terrain. |
|        | {% data variables.product.android_button_seq %}{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_downloads %} → {% data variables.android-values.world_maps %} → {% data variables.android-values.index_item_world_altitude_correction %}  |

## Current time

This widget shows current time from a device.

![Current time widget](/assets/images/docs/widgets/iw-3.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_plain_time %} |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.map_widget_plain_time %} |
| Click | Nothing |
| Format | From device settings |

## Speed

This widget shows your current speed.

![Speed Android widget](/assets/images/docs/widgets/iw-4.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_speed %} |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.gpx_speed %} |
| Click  | Nothing |
| Format | From device settings |
| Note   | OsmAnd takes Speed data from a device. It depend on accelerometer, gyroscope sensors on mobile device and GPS. |

## Battery level

This widget shows battery level of your device.

![Battery level Android widget](/assets/images/docs/widgets/iw-6.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_battery %}  |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.map_widget_battery %} |
| Click | Nothing |
| Format | From device settings |
| Note   | OsmAnd takes Battery level from a device. |

## Coordinates widget (Android)

The widget is shown at the top of the screen. It shows the geographic coordinates of the device's location.

![Coordinates Android widget](/assets/images/docs/widgets/iw-5.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_appearance_rem %} → {% data variables.android-values.coordinates %}  |
| Click | Coping the coordinates to the clipboard and then paste them anywhere. Or share the coordinates via clicking on the button 'Share' in the pop-up at the bottom. |
| Format | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.units_and_formats %} → {% data variables.android-values.coordinates_format %} |

## GPS Info (Android)

GPS (Global Positioning System) info widget shows a number of satellites that a device sees and uses at that moment.

![GPS Info Android widget](/assets/images/docs/widgets/iw-7.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.gps_provider %}    |
| Click | to see a GPS status menu. GPS status menu provides additional tools for tuning onboard GPS device. |
| Note  | 1. OsmAnd takes GPS info from a device. The more satellites a device can see, the better positioning will be provided. |
|       | 2. For making GPS correction to make sure the up-to-date data is used:  |
|       | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.open_settings %} → {% data variables.android-values.rendering_value_browse_map_name %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.debugging_and_development %}→ {% data variables.android-values.agps_info %}  |

## FPS-info (Android)

The widget shows Frames per Second (FPS) of a device screen.

![FPS info Android widget](/assets/images/docs/widgets/iw-8.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} → &#xe802; → {% data variables.android-values.shared_string_settings %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.trace_rendering %}    |
| Click | Nothing |
| Note  | 1. The left number  is the maps Frames per Second (FPS) and the right one is general layer Frames per Second (FPS). |
|       | 2. To debug the map speed drawing:  |
|       | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} → &#xe802; → {% data variables.android-values.shared_string_settings %} → {% data variables.android-values.trace_rendering %}  |

## Read more
{% link_with_intro /nav-widgets %}
{% link_with_intro /action-widgets %}
