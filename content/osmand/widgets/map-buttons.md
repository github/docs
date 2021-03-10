---
title: "Map buttons"
intro: "Map buttons such as Zoom buttons, Search, Direction, Compass, My Location, Menu represent main controls on the map."
versions: '*'
---

## My Location & Zoom

**_TODO: add 3 small screenshots in 1 row of my location button / zoom buttons_**

**My location** is a top down button that represents whether center of the map is synchronized with "my location" (geo location of the device), it is also known as "Where am I?". It is often used in navigation where it is hidden in case "location is synchronized with map". It has following indicative states:
- Full blue icon - location is found but it is not synchronized with map
- White icon - location is found and it is synchronized with map
- Grey icon - location is not found yet
- Arrow icon (iOS) - 3D mode is switched on (click on my location)

**Long tap** on **My location** opens Context menu, so user can share own location. 

**Zoom buttons** are always visible next to **My Location** and allow to control map zoom level. Changing zoom level doesn't change map synchronization with location. **Long tap** on **Zoom buttons** opens Map magnifier dialog and allows to change map detalization. Be aware that during navigation zoom can be controlled by **Auto zoom setting** (**_TODO:Android / iOS path_**).

## Directions

**_TODO: add 3 small screenshots in 1 row of 3 directions state_**

**Directions** button allows to [build a route](/osmand/navigation) and [start navigation](/osmand/navigation). In navigation mode this button is not visible by default and it appears after a short tap on the map. **Directions** button has 3 different indicative states:
- Default grey icon - the route is not built yet. A dialog to build a new route will appear on click.
- Default blue icon - the route is built but navigation is not started yet. A dialog with route information will appear on click.
- Blue arrow icon - the route is built and  navigation is started yet. A dialog with route information will appear on click.

## Main menu

**_TODO: add small screenshot_**

**Main menu** button allows to access to [all features](/osmand/main-menu) of the application. In navigation mode this button is not visible by default and it appears after a short tap on the map.

## Search

**_TODO: add small screenshot_**

Search button buttons provides quick access from the map to [search capabilities](/osmand/search/).

## Compass

**_TODO: make screenshots smaller (narrower) and in one row_**
![Compass widget](/assets/images/docs/widgets/nw-2.png)

Compass widget indicates how map is oriented on the device screen and top arrow / red arrow points where the north of map is located. It also shows the current **Map orientation** mode. 

There are 3 different **Map orientation** modes which are switched by click on the **Compass widget**.
- **{% data variables.android-values.rotate_map_none_opt %}** - map is not being rotated by any external movements and it could be rotated only by **2 pointer gesture** (2 double tap & rotate).
- **{% data variables.android-values.rotate_map_bearing_opt %}** - map is being rotated by bearing, i.e. direction of your movement (GPS direction) is synchronized with the map. Map will be oriented so that head looking view will be strictly above (higher) my location icon on the map. Without movement map won't be rotated. In this mode center of the map will be located slightly below center of the device, so it allows to see more map information ahead of your movement which is usable in navigation mode. It can be disabled by setting **_TODO: add 2 paths android / ios to General Settings -> Display position always in center _**.
- **{% data variables.android-values.rotate_map_compass_opt %}** - map is being synchornized with device compass orientation. So, **Compass widget** will point to actual Earth North if device is hold flat. In case compass sensor is not present on device, map orientation won't change.

Extra compass settings (Android):
- **_TODO: Use Kalman filter (Android)_** - smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till  
- **_TODO: Use Magnetic sensor_** - smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till  

**Map orientation** could also be changed in Profile settings.

**_TODO: add 2 paths android / ios to General Settings -> Map Orientation _**

**Configure visibility**.
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_left %} → {% data variables.android-values.map_widget_compass %} 
{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_left %} → {% data variables.ios-values.map_widget_compass %}

**Compass widget** could be hidden if current orientation mode is `{% data variables.android-values.rotate_map_none_opt %}` and north of the map is pointed exactly to the top of device.