---
title: "{% data variables.android-values.record_plugin_name %}"
intro: "Essential tool that allows user to record his track using phone's GPS"
versions: '*'
---

<!-- OsmAnd Trip recording plugin is an essential tool for runners, sportsmen and tourists. It allows you to record your movement using your phone's GPS (and through other networks optionally). If you are going for a run, need to see your entire route after a walk around the city or measure the distance you covered, the plugin will help you.

![Trip recording](/assets/images/plugins/placeholder-intro.png)

### How to use
{% link_in_list /how-to-use-android %}
{% link_in_list /how-to-use-ios %}

### Trip recording settings
{% link_in_list /settings-android %}
{% link_in_list /settings-ios %}

### Troubleshooting -->

The Trip recording plugin enable functionality to record and save users tracks.

![Enable /Disable Plugin](/assets/images/docs/widgets/enable_disable_plugin.png)

##  Enable /Disable Plugin

User can Enable /Disable Plugin for:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → choose The Trip recording plugin → tap on the plugin or tap three vertical dots.

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.res_mapsres %} → tab {% data variables.ios-values.plugins %} → {% data variables.ios-values.product_title_track_recording %} → tick the button

> **_Note:_** Enable  [Trip recording (REC) widget](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#trip-recording-rec-widget).

##  Trip recording Plugin settings for Android

To configure settings follow {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → tap the Trip recording plugin

![REC Settings Plugin](/assets/images/docs/widgets/rec_settings_plugin.png)

| Step 1 | configure profile |
| Step 2 | set 'navigation' |
| Step 3 | set 'logging accuracy'|
| Step 4  | choose the 'track storage folder' |
| Step 5 | enable/disable 'notification'  |
| Step 6 | enable/disable 'online tracking' | 

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
