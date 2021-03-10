---
title: "Map buttons"
intro: "Map buttons such as Zoom buttons, Search, Direction, Compass, My Location, Menu represent main controls on the map."
versions: '*'
---

## My Location & Zoom

**_TODO: add 3 small screenshots in 1 row of my location button / zoom buttons_**

**My location** is a circle button that represents whether center of the map is synchronized with "my location" (geo location of the device), it is also known as "Where am I?". Usually in navigation map is synced with device location, so it's not needed to constanly move the map, in this case button is hidden and will be activated once map & my location will go out of sync by user gesture. On click app will try to find device location & display it on the map in center of the screen (iOS on 2nd click, it will switch to 3D mode).

**My location** button has following indicative states:
- Full blue icon - location is found but it is not synchronized with map
- White icon - location is found and it is synchronized with map
- Grey icon - location is not found yet
- Arrow icon (iOS) - 3D mode is switched on

**Long tap** on **My location** opens Context menu, so user can share own location. 

**Zoom buttons** are always visible next to **My Location** and allow to control map zoom level. Changing zoom level doesn't change map synchronization with location. **Long tap** on **Zoom buttons** opens Map magnifier dialog and allows to change map detalization. Be aware that during navigation zoom can be controlled by **Auto zoom setting** (**_TODO:Android / iOS path_**).

## Directions

**_TODO: add 3 small screenshots in 1 row of 3 directions state_**

**Directions** button allows to [build a route](/osmand/navigation) and [start navigation](/osmand/navigation). In navigation mode this button is not visible by default and it appears after a short tap on the map. **Directions** button has 3 different indicative states:
- Default grey icon - the route is not built yet. A dialog to build a new route will appear on click.
- Default blue icon - the route is built but navigation is not started yet. A dialog with route information will appear on click.
- Blue arrow icon - the route is built and  navigation is started yet. A dialog with route information will appear on click.

## Configure Map

**_TODO: add small screenshot_**

**Configure Map** button allows to access to [Configure Map menu](/osmand/map/configure-map-menu). Icon on it indicates [Current app profile](/osmand/start-with/profiles).

## Main menu

**_TODO: add small screenshot_**

**Main menu** button allows to access to [all features](/osmand/main-menu) of the application. In navigation mode this button is not visible by default and it appears after a short tap on the map.

## Search

**_TODO: add small screenshot_**

Search button buttons provides quick access from the map to [search capabilities](/osmand/search/).

## Compass

**_TODO: make screenshots smaller (narrower) and in one row_**
![Compass widget](/assets/images/docs/widgets/nw-2.png)

Compass widget indicates how map is oriented on the device screen and top arrow / red arrow points where the north of map is located. It also shows the current **[Map orientation mode](/osmand/map/interact-with-map#map-orientation)**. Clicking on the compass will cycle through all Map orientation modes. 

**Configure visibility**

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_left %} → {% data variables.android-values.map_widget_compass %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_left %} → {% data variables.ios-values.map_widget_compass %}

Compass widget could be hidden if current orientation mode is `{% data variables.android-values.rotate_map_none_opt %}` and north of the map is pointed exactly to the top of device.