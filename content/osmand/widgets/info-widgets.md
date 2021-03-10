---
title: "Informational widgets"
intro: "Informational widgets provide information about current location, speed, time, battery level on the map display."
versions: '*'
---

Most of informational widgets stack together in the right column.

![Altitude Android widget](/assets/images/docs/widgets/iw-1.png)

## Altitude

Altitude widget shows the height above sea level of current gelocation. **Android:** on some devices altitude is not displayed correctly due to missing correction of Earth-geoid, you can download it via: {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.welmode_download_maps %} → {% data variables.android-values.download_tab_downloads %} → {% data variables.android-values.world_maps %} → {% data variables.android-values.index_item_world_altitude_correction %}.

![Altitude Android widget](/assets/images/docs/widgets/iw-2.png)

| | |
|------------|------------|
| Enable | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_altitude %} |
| On Click | - |
| Format | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.units_and_formats %} → {% data variables.android-values.unit_of_length %} |
|        | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.sett_settings %} → {% data variables.ios-values.app_profiles %} → {% data variables.ios-values.general_settings_2 %} → {% data variables.ios-values.units_and_formats %} → {% data variables.ios-values.unit_of_length %} |

## Current time

This widget shows current time from a device.

![Current time widget](/assets/images/docs/widgets/iw-3.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_plain_time %} |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.map_widget_plain_time %} |
| On Click | - |
| Format | Time & Format is configured by device settings |

## Speed

Speed widget shows your current speed detected by GPS-sensor.

![Speed Android widget](/assets/images/docs/widgets/iw-4.png)

| | |
|------------|------------|
| Enable | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_speed %} |
| On Click  | - |
| Format | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.units_and_formats %} → {% data variables.android-values.default_speed_system %} |
|        | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.sett_settings %} → {% data variables.ios-values.app_profiles %} → {% data variables.ios-values.general_settings_2 %} → {% data variables.ios-values.units_and_formats %} → {% data variables.ios-values.default_speed_system %} |

## Battery level

This widget shows battery level of your device.

![Battery level Android widget](/assets/images/docs/widgets/iw-6.png)

| | |
|------------|------------|
| Enable | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_battery %}  |
| On Click | - |

## Coordinates widget (Android)

The widget is shown at the top of the screen. It shows the geographic coordinates of current geo-location.

![Coordinates Android widget](/assets/images/docs/widgets/iw-5.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_appearance_rem %} → {% data variables.android-values.coordinates %}  |
| On Click | Copying the coordinates to the clipboard |
| Format | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.units_and_formats %} → {% data variables.android-values.coordinates_format %} |

## GPS Info (Android)

GPS (Global Positioning System) info widget shows a number of satellites that a device detects and uses at that moment. It could be used to check GPS-status in case of a bad GPS-signal. 

![GPS Info Android widget](/assets/images/docs/widgets/iw-7.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %}  → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.gps_provider %}    |
| On Click | to see a GPS status menu. GPS status menu provides additional tools for tuning onboard GPS device. |

**Note**: you can reset current GPS-cache via {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.open_settings %} → {% data variables.android-values.rendering_value_browse_map_name %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.debugging_and_development %}→ {% data variables.android-values.agps_info %}.


## Parking widget (Plugin)
{% tip %}

Enable **[{% data variables.android-values.osmand_parking_plugin_name %} plugin](/osmand/plugins/parking)**: {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} / {% data variables.android-values.res_mapsres %}  → {% data variables.android-values.osmand_parking_plugin_name %}.

{% endtip %}

This is a [{% data variables.android-values.osmand_parking_plugin_name %} plugin](/osmand/plugins/parking) widget that shows distance from you to the parking place.
 

![Parking widget](/assets/images/docs/widgets/parking_widget.png)

| | |
|------------|------------|
| Enable | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_parking %}  |
| On Click | Moves map view to the parking position |
| Format | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.units_and_formats %} → {% data variables.android-values.unit_of_length %} |
|        | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.sett_settings %} → {% data variables.ios-values.app_profiles %} → {% data variables.ios-values.general_settings_2 %} → {% data variables.ios-values.units_and_formats %} → {% data variables.ios-values.unit_of_length %} |

## Mapillary widget (Plugin)
{% tip %}

Enable **[Mapillary plugin](/osmand/plugins/mapillary)**: {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} →  Mapillary %}.

{% endtip %}

This is a [Mapillary plugin](/osmand/plugins/mapillary) widget that provides quick access to Mapillary app to add Street-Level-Imagery.

![Mapillary widget](/assets/images/docs/widgets/mapillary_widget.png) 

| | |
|------------|------------|
| Enable | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.mapillary_widget %} |
| On Click | Opens Mapillary application. |

**Note**: Mapillary application should be installed separately.


## Trip recording widget (Plugin) - TODO 

Is used to get the quick access to recording button. <br>

![Trip recording (REC) widget](/assets/images/docs/widgets/trip_recording_widget.png)

| | |
|------------|------------|
| Enable | IMPORTANT: enable ‘Trip recording’ plugin before attempting to use Trip recording widget |
|   | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_monitoring %}  |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.product_title_track_recording %} |
| On Click | Defines Trip recording settings.  |

<!-- Before recording the trip a Trip recording settings to be defined. Trip recording settings menu is displayed when user clicks on the REC widget. <br>

![Trip recording (REC) Settings](/assets/images/docs/widgets/rec_settings.png)

In the REC settings menu user can enable 'Show track' on the map feature and configure the style of the track line (for Android only). <br>

The 'Line configuration button' (for Android only) next to the toggle button 'Show track on the map' switcher gives the user an opportunity to change track appearance. User may change the color, width and enable/disable direction arrows, enable show start and finish icons. <br>

Optionally, user can configure Custom width by moving slider from 1 to 24. <br>


![Trip recording Appearence](/assets/images/docs/widgets/appearance_trip_recording.png)

In the REC Settings menu user can configure the logging interval from 0 seconds to 5 minutes. <br>
The Logging interval controls the frequency of queries to the GPS sensor along with frequency of new dots appearing in the track line. <br>

![Logging interval in Trip recording Appearence](/assets/images/docs/widgets/logging_interval_in_tr_widget.png)

If a user wants to apply all configurations to all others tracks recorded in future, the toggle button (switcher) ‘Always ask’ should be off. Please leave this switcher in 'on' position to be able to configure tracks individually. <br>
When all settings are defined, user can push the ‘Start recording’ button.


The Logging interval can be additionally checked/ changed in: <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.shared_string_trip_recording %} → {% data variables.android-values.save_track_interval %}. <br>
<!-- Menu – Configure profile – Trip recording – Logging interval during navigation <br>

When all settings are configured, press ‘Start recording’ button.
***For Android devices*** the REC widget will change to the red circle.  The distance passed will be displayed in the widget.  
![REC widget](/assets/images/docs/widgets/rec_widget.png)

To tap REC widget again will give an opportunity  to:
* See all general information about the track: distance, ascent, descent, average speed, maximum speed, time span. This panel can  be scrolled by the user right and back.
* Enable 'Show track' on the map feature and configure the style of the track line.
* Clear recorded data
* Start new segment
* Save (save the recorded track and change GPX file name)
* Pause and stop recording

User can find his track in {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places   %} →  tab {% data variables.android-values.shared_string_gpx_files %} <br>

***For IOS devices*** when the REC widget will change to the red circle, the  distance passed will be displayed in the widget.
To tap REC widget again will give an opportunity  to:
* Stop recording - will pause The trip recording. Then pressing the widget again will give and options to 'Continue recording'
* Show Info - will display statistics data such as speed, route time, uphills/downhills
* Start new segment
* Save current trip - the track will be automatically saved.

User can find his track in {% data variables.ios-values.menu %} → {% data variables.ios-values.menu_my_places %} → tab {% data variables.ios-values.shared_string_tracks %}.

[Track recording issues](https://docs.osmand.net/en/main@latest/osmand/troubleshooting/track-recording-issues)  -->

## Audio-video notes widget (Plugin) - Android 
{% tip %}

Enable **[{% data variables.android-values.audionotes_plugin_name %} plugin](/osmand/plugins/audio-video-notes)**: {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} → {% data variables.android-values.audionotes_plugin_name %}.

{% endtip %}

This is a [{% data variables.android-values.audionotes_plugin_name %} plugin](/osmand/plugins/audio-video-notes) widget that provides quick access to start / stop taking a recording (audio / video or photo). For this widget you can configure what default action should be taken:
- On request – every time dialog to choose aciton is displayed. (default state)
- Record audio – takes an audio note by default
- Record video – records a video by default
- Take a photo – takes a photo by default

![Audio-video notes widget](/assets/images/docs/widgets/audio_video_notes_widget.png)
![Audio-video widget configure](/assets/images/docs/widgets/av-widget-configure.png)


| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_av_notes %}  |
| On Click | Start / stops taking a note.  |

## Tracker widget (Plugin) - Android

{% tip %}

Install **[OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram)** from Google Play or other source.

Enable **[OsmAnd Tracker plugin](/osmand/plugins/osmand-tracker)**: {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} →  OsmAnd Online GPS Tracker.

{% endtip %}

This is [OsmAnd Tracker plugin](/osmand/plugins/osmand-tracker) widget is used to get quick access to OsmAnd Tracker app and share your location with other people. It shows whether connection is online or offline and if sharing location is enabled, then the time since last successful sending is dispalyed.

![Tracker widget](/assets/images/docs/widgets/tracker_widget.png) 

| | |
|------------|------------|
| Enable | {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.tracker_item %} |
| On Click | Opens OsmAnd Tracker app. |

## FPS-info (Plugin) - Android
{% tip %}

Enable **[Developer plugin](/osmand/plugins/development)**: {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_screen %} → {% data variables.android-values.debugging_and_development %}.

{% endtip %}

This is a [Developer plugin](/osmand/plugins/development) widget to investigate how fast map & map elements are showed & refreshed. It displays:
- UI interaction FPS - panning & dragging map (higher number).
- Map refresh FPS - refreshing points, routes on the map (smaller number).

![FPS info Android widget](/assets/images/docs/widgets/iw-8.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_fps_info %}    |
| On Click | - |

**Note**: FPS doesn't reflect how quickly full offline map screen is rendered, there is another **Developer plugin** setting for it - ***{% data variables.android-values.trace_rendering %}***.

## Read next
{% link_with_intro /nav-widgets %}
