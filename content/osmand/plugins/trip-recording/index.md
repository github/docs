---
title: "{% data variables.android-values.record_plugin_name %}"
intro: "Essential tool that allows user to record his track using phone's GPS"
versions: '*'
---

<!-- OsmAnd Trip recording plugin is an essential tool for runners, sportsmen and tourists. It allows you to record your movement using your phone's GPS (and through other networks optionally). If you are going for a run, need to see your entire route after a walk around the city or measure the distance you covered, the plugin will help you. -->

![Trip recording](/assets/images/plugins/placeholder-intro.png)

## How to use

{% link_in_list /how-to-use-android %}
{% link_in_list /how-to-use-ios %}

## Trip recording settings

{% link_in_list /settings-android %}
{% link_in_list /settings-ios %}

## Troubleshooting

The Trip recording plugin enable functionality to record and save users tracks.

![Enable /Disable Plugin](/assets/images/docs/widgets/enable_disable_plugin.png)

###  Enable /Disable Plugin

User can Enable /Disable Plugin for:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → choose The Trip recording plugin → tap on the plugin or tap three vertical dots.

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.res_mapsres %} → tab {% data variables.ios-values.plugins %} → {% data variables.ios-values.product_title_track_recording %} → tick the button

> **_Note:_** Enable  [Trip recording (REC) widget](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#trip-recording-rec-widget).

###  Trip recording Plugin settings for Android

To configure settings follow {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → tap the Trip recording plugin

![REC Settings Plugin](/assets/images/docs/widgets/rec_settings_plugin.png)

##  Configure trip recording profile

Default 'Trip recording' profile is Browse map profile. User can choose other OsmAnd profiles or creates his own (Manage <!--сделать ссылку на инстукцию как сделать уникальный профиль [Manage profile ](text)-->) profile.

![REC profile](/assets/images/docs/widgets/rec_plugin_change_profile.png)

To change profile click the globe icon in the upper-right corner.

##  Configure trip recording navigation

![REC navigation](/assets/images/docs/widgets/rec_plugin_navigation.png)

Auto-record track during navigation – the function that can enable/disable saving each 'trip recording' track automatically. <br>
User can find his track in {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places %} → tab {% data variables.android-values.shared_string_gpx_files %}

> :warning: **Track recording impacts the battery life**. Even if the screen is off, it continues to run. Check notifications in the background in status bar!

Logging interval during navigation controls the frequency of queries to the GPS sensor along with frequency of new dots appearing in the track line. <br>
By default, it is 5 seconds, but it can be configured from 0 seconds to 5 minutes.

##  Configure trip recording logging accuracy

![REC logging accuracy](/assets/images/docs/widgets/rec_plugin_logging_accuracy.png)



<!-- | settings to configure| Description |
|--------------------------|-------------|
| configure profile | configure profile |
| Step 2 | set 'navigation' |
| Step 3 | set 'logging accuracy'|
| Step 4  | choose the 'track storage folder' |
| Step 5 | enable/disable 'notification'  |
| Step 6 | enable/disable 'online tracking' | -->

<!-- ## Trip recording settings
{% link_in_list /settings-android %}
{% link_in_list /settings-ios %}

| Event API attribute name | Description |
|--------------------------|-------------|
| `id` | Unique identifier for the event. |
| `type` | The type of event. Events uses PascalCase for the name. |
| `actor` | The user that triggered the event. |
| `actor.id` | The unique identifier for the actor. |
| `actor.login` | The username of the actor. |
| `actor.display_login` | The specific display format of the username. |
| `actor.gravatar_id` | The unique identifier of the Gravatar profile for the actor. |
| `actor.url` | The REST API URL used to retrieve the user object, which includes additional user information. |
| `actor.avatar_url` | The URL of the actor's profile image. |
| `repo` | The repository object where the event occurred.  |
| `repo.id` | The unique identifier of the repository. |
| `repo.name` | The name of the repository, which includes the owner and repository name. For example, `octocat/hello-world` is the name of the `hello-world` repository owned by the `octocat` user account. |
| `repo.url` | The REST API URL used to retrieve the repository object, which includes additional repository information. |
| `payload` | The event payload object is unique to the event type. See the event type below for the event API `payload` object. |
