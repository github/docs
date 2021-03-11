---
title: "Map buttons"
intro: "Map buttons such as Zoom buttons, Search, Direction, Compass, My Location and Menu is the main controls on the map."
versions: '*'
---

## My Location & Zoom

<!-- **_TODO: add 3 small screenshots in 1 row of my location button / zoom buttons_** -->
![Configure screen menu](/assets/images/docs/widgets/location_zoom_buttons.png)

**My location** is a circle button that <!--represents-->shows whether the center of the map is synchronized with "my location" (geolocation of the device). It is also known as "Where am I?". Generally in navigation, the map is synced with device location, and there are no needs to move the map constantly. In this case, the button is hidden and will be activated when the map and 'my location' will go out of sync by user gesture. <!--Usually in navigation, map is synced with device location, so it's not needed to constanly move the map, in this case button is hidden and will be activated once map & my location will go out of sync by user gesture.--> The app will try to find the device location and show it on the map at the center of the screen when the user clicks on it (IOS will switch to the 3D mode with the 2nd click). <!--On click app will try to find device location & display it on the map in center of the screen (iOS on 2nd click, it will switch to 3D mode).-->

**My location** button has four <!--following--> indicative states:
- Full blue icon - location is found but it is not synchronized with map
- White icon - location is found and it is synchronized with map
- Grey icon - location is not found yet
- Arrow icon (iOS) - 3D mode is switched on

**Long tap** on **My location** opens Context menu, so user can share <!--own-->his location.

**Zoom buttons** are always visible next to **My Location** and allow to control map zoom level. Changing zoom level doesn't change map synchronization with location. **Long tap** on **Zoom buttons** opens Map magnifier dialog and allows to change map <!--detalization-->detailing. Keep in mind <!--Be aware-->that during navigation zoom can be controlled by **Auto zoom setting** (<!--**_TODO:Android / iOS path_**-->{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_settings %} → {% data variables.android-values.application_profiles%} → {% data variables.android-values.routing_settings_2 %} → {% data variables.map_during_navigation_info %} → {% data variables.android-values.auto_zoom_map}; {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.shared_string_settings %} → {% data variables.ios-values.app_profiles %} → {% data variables.ios-values.routing_settings_2 %} → {% data variables.ios-values.map_behavior %} → {% data variables.ios-values.auto_zoom_map%}).

## Directions

![Directions button allows](/assets/images/docs/widgets/directions_button_allows.png)

**Directions** button allows to [build a route](/osmand/navigation) and [start navigation](/osmand/navigation). In navigation mode this button is not visible by default and it appears after a short tap on the map. **Directions** button has 3 different indicative states:
- Default grey icon - the route has not been built yet.<!--the route is not built yet.--> A dialog to build a new route will appear <!--on-->by click.
- Default blue icon - the route is built, but navigation <!--is-->has not started yet. A dialog with route information will appear <!--on-->by  click.
- Blue arrow icon - the route is built and  navigation <!--is started yet-->has started. A dialog with route information will appear <!--on-->by  click.

## Main menu

![Main menu button](/assets/images/docs/widgets/main_menu_button.png)

**Main menu** button allows to access to [all features](/osmand/main-menu) of the application. In navigation mode this button is not visible by default. It appears after a short tap on the map.

## Search

![Search button](/assets/images/docs/widgets/search_button.png)

Search button provides quick access from the map to [search capabilities](/osmand/search/).

## Compass

![Compass widget](/assets/images/docs/widgets/compass_widget.png)
<!-- ![Compass widget](/assets/images/docs/widgets/nw-2.png) -->

Compass widget indicates how map is oriented on the device screen and top arrow / red arrow points where the north of map is located. It also shows the current **[Map orientation mode](/osmand/map/interact-with-map#map-orientation)**. Clicking on the compass will cycle through all Map orientation modes.

**Configure visibility**

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_left %} → {% data variables.android-values.map_widget_compass %}

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_left %} → {% data variables.ios-values.map_widget_compass %}

Compass widget could be hidden if current orientation mode is `{% data variables.android-values.rotate_map_none_opt %}` and north of the map is pointed exactly to the top of device.
