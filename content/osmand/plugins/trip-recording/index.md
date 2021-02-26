---
title: "{% data variables.android-values.record_plugin_name %}"
intro: "Essential tool that allows user to record his track using phone's GPS"
versions: '*'
---

<!-- OsmAnd Trip recording plugin is an essential tool for runners, sportsmen and tourists. It allows you to record your movement using your phone's GPS (and through other networks optionally). If you are going for a run, need to see your entire route after a walk around the city or measure the distance you covered, the plugin will help you.

![Trip recording](/assets/images/plugins/placeholder-intro.png)

## How to use

{% link_in_list /how-to-use-android %}
{% link_in_list /how-to-use-ios %}

## Trip recording settings

{% link_in_list /settings-android %}
{% link_in_list /settings-ios %}

## Troubleshooting -->

The Trip recording plugin enable functionality to record and save users tracks.

![Enable /Disable Plugin](/assets/images/docs/widgets/enable_disable_plugin.png)

## Enable /Disable Plugin

User can Enable /Disable Plugin for:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → choose The Trip recording plugin → tap on the plugin or tap three vertical dots.

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.res_mapsres %} → tab {% data variables.ios-values.plugins %} → {% data variables.ios-values.product_title_track_recording %} → tick the button

> **_Note:_** Enable  [Trip recording (REC) widget](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#trip-recording-rec-widget).

## Trip recording Plugin settings for Android

To configure settings follow {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → tap the Trip recording plugin

![REC Settings Plugin](/assets/images/docs/widgets/rec_settings_plugin.png)

### Configure trip recording profile

Default 'Trip recording' profile is Browse map profile. User can choose other OsmAnd profiles or creates his own (Manage <!--сделать ссылку на инстукцию как сделать уникальный профиль [Manage profile ](text)-->) profile.

![REC profile](/assets/images/docs/widgets/rec_plugin_change_profile.png)

To change profile click the globe icon in the upper-right corner.

### Configure trip recording navigation

![REC navigation](/assets/images/docs/widgets/rec_plugin_navigation.png)

Auto-record track during navigation – the function that can enable/disable saving each 'trip recording' track automatically. <br>
User can find his track in {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places %} → tab {% data variables.android-values.shared_string_gpx_files %}

> :warning: **Track recording impacts the battery life**. Even if the screen is off, it continues to run. Check notifications in the background in status bar!

Logging interval during navigation controls the frequency of queries to the GPS sensor along with frequency of new dots appearing in the track line. <br>
By default, it is 5 seconds, but it can be configured from 0 seconds to 5 minutes.

### Configure trip recording logging accuracy

![REC logging accuracy](/assets/images/docs/widgets/rec_plugin_logging_accuracy.png)

| function | Description |
|--------------------------|-------------|
| General logging interval |Specifies the logging interval for the general track recording. Can be chosen as 'always ask' or optionally chosen from 0 seconds  to 5 minutes. Can be turned on via [Trip recording (REC) widget](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#trip-recording-rec-widget). |
| Minimum displacement | Specifies the minimum displacement for the track recording. Can be chosen as 'not selected' or optionally chosen from 2 meters  to 50 meters.  This function should be configured to avoid duplicating points being recorded where too little actual motion may have occurred. |
| Minimum accuracy | Accuracy means the proximity of  measurements to the actual position. It is not directly related to precision, which is the spread of repeated measurements. Minimum accuracy will record only points measured with a minimum accuracy indication. If set accuracy is much higher than current, the point will be missed by the device. |
| Minimum speed | It is used  to detach the low speed and ignore the low speed data. The tracks will look smoother on the map. |
| Auto-split recording after gap | Enable/disable function that helps to start new segment. The new segment might start after 6 minutes gap. The new track might start after 2 hours gap. The new track might start  after a one-day gap. |
| Prevent standalone logging | Enable/disable function that helps to pause track logging when the app is killed. In this case, the OsmAnd background indication will disappear from the Android's notification bar.  |
| Include heading | Enable/disable function that saves heading to each track pint while recording. |   


> **_TIP:_**
> Set 5 meters distance for 'Minimum displacement' function if there are no need to capture precise data while rest.

> **_TIP:_**
> It is hard to predict the set of data that will be recorded. If the user is not sure about signal quality it makes sense to turn off (not select) the 'Minimum accuracy' filter.

> **_TIP:_**
> Try to configure 'Minimum displacement first. It will help you not to lose data.  If the track looks noisy try to configure more than zero speed in the 'Minimum speed' function.

### Configure trip informational settings

![REC informational settings](/assets/images/docs/widgets/rec_plugin_info_settings.png)

**Track storage folder**

Is used to define where the tracks will be stored. There are two options:

- Record tracks to 'rec' folder
- Store recorded tracks in monthly folder

> **_Note:_** User can find his track in {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places   %} →  tab {% data variables.android-values.shared_string_gpx_files %}.

**Notification**

Is used to enable/disable system notifications that allows to start trip recording.

**Online tracking**

Is used to enable/disable function that allows sharing current location using trip recording.

- Web address <!-- не понятно зачем-->
- Tracking interval - Allows user to specify online tracking interval from 0 seconds to 5 minutes.
- Time buffer - Allows user to specify a time buffer that will keep locations to send without connection

**Configure trip general settings**

![REC general settings](/assets/images/docs/widgets/rec_plugin_general_settings.png)

- The track folder will redirect user to tab {% data variables.android-values.shared_string_gpx_files %} in {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places  %}
- Reset plugin settings to default will clear all configured plugin settings
- Copy from another profile will give user an opportunity to copy al configured settings to another profile from the list.
