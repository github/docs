---
title: "Map buttons"
intro: "Map buttons such as Zoom buttons, Search, Direction, Compass, My Location, Menu represent main controls on the map."
versions: '*'
---

## My Location & Zoom

**_TODO: add 3 small screenshots in 1 row of my location button / zoom buttons  _**

**My location** is a top down button that represents whether center of the map is synchronized with "my location" (geo location of the device), it is also known as "Where am I?". It is often used in navigation where it is hidden in case "location is synchronized with map". It has following indicative states:
- Full blue icon - location is found but it is not synchronized with map
- White icon - location is found and it is synchronized with map
- Grey icon - location is not found yet
- Arrow icon (iOS) - 3D mode is switched on (click on my location)

**Long tap** on **My location** opens Context menu, so user can share own location. 

**Zoom buttons** are always visible next to **My Location** and allow to control map zoom level. Changing zoom level doesn't change map synchronization with location. **Long tap** on **Zoom buttons** opens Map magnifier dialog and allows to change map detalization. Be aware that during navigation zoom can be controlled by [Auto zoom setting](/link) (**_TODO:link_**).

## Directions

## Search

## Main menu

## Compass

Compass widget shows North on the map.

![compass](/assets/images/docs/widgets/nw-2.png)

| | |
|------------|------------|
| Enable | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.map_widget_config %} → {% data variables.android-values.map_widget_left %} → {% data variables.android-values.map_widget_compass %}  |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_left %} → {% data variables.ios-values.map_widget_compass %}|
| Click | changes [{% data variables.android-values.rotate_map_to_bearing %}](/osmand/navigation) between: |
|   | {% data variables.android-values.rotate_map_bearing_opt %}  |
|   | {% data variables.android-values.rotate_map_compass_opt %}  |
|   | {% data variables.android-values.rotate_map_none_opt %}  |