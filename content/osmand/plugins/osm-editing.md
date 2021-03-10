---
title: "{% data variables.android-values.osm_settings %}"
intro: "Make contributions to OpenStreetMap."
versions: '*'
---

![OpenStretMap editing](/assets/images/plugins/placeholder-intro.png)

{% data variables.android-values.osm_editing %} plugin allows you to make contributions to OpenStreetMap, a global community aimed at creating a comprehensive map of the world and providing up-to date open-source data to every user.

Just launch OsmAnd Maps & Navigation app and update the information about different locations.


##### How to use
{% link_in_list /osm-editing-android %}
{% link_in_list /osm-editing-ios %}

{% data reusables.plugins.osm-editing-android-enable %}



The plugin lets you create new objects, so-called  [points of interest or POI](https://osmand.net/features/find-something-on-map#Find_Points_of_Interest_A)  on the map. New shop opened next to you? Add it to the map! Your favorite monument is missing on the map? Put it there in seconds. Also, if you're the owner of a newly-opened business, adding it to the map is a great way to let people find you.

### How to enable
Go to **{% data reusables.plugins.osm-editing-android-enable %}**.

### How to add POI
Tap on the map where the new POI has to be placed. Press on **{% data variables.android-values.shared_string_actions %}**, then choose **{% data variables.android-values.context_menu_item_create_poi %}**, add its name and other details like working hours, website, etc. You'll also have to register at {% data reusables.links.osm %} and then provide your OSM credentials to introduce changes.
![Placeholder](/assets/images/plugins/placeholder-intro.png)

{% note %}
Note: you can see your new POI on OsmAnd map after one hour after added it to OSM project if you have {% link /osmand/purchases/osmand-live-android %}.
{% endnote %}

### How to upload GPX track
You can add the tracks you've made to {% data reusables.links.osm %}. To do that, turn the [Trip recording plugin](http://osmand.net/features?id=trip-recording-plugin) on, record a track, and then go to _My places-> Tracks-> press the ![OpenStretMap editing](/assets/images/icons/android/ic_action_export.svg) button_. Choose the required track and click _Yes_. You can change description, tags or visibility of the track. 

Kindly note, that {% data variables.android-values.osm_editing %} has to be turned on. 
In an hour, your track will be added to [https://www.openstreetmap.org/traces](https://www.openstreetmap.org/traces), so you can view it and other users can find it helpful, as well. 
You can participate in the work on the global map. Just share the tracks you've made. They become part of the {% data reusables.links.osm %} project. Make sure you tag objects and roads as well.


### How to report a mistake
You can also report about the mistakes on the map. All you have to do is tap on the location, choose **{% data reusables.plugins.osm-editing-android-add-osm-note %}** and then add the info about it. OSM editors would consider your comments.
![Open OSM Note](/assets/images/plugins/osm-editing/open-osm-note.png)

To view the OSM editing layer, go to **{% data reusables.configure-map.osm-note-layer-enable-android %}**. You'll see all the notes in the specific area. You can click to OSM note and choose your comment or delete it.