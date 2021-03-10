---
title: "Interact with map"
intro: "Interact with map"
versions: '*'
---
Introduction about the map and what it includes. Explanation about coordinates, text size and zoom magnifier.
Special words about my location / radius of my location. Shortly about map interaction pan, zoom, click.


## Gestures

**_TODO: This section is incomplete_**


## Map orientation
**_TODO: Same picture as in Compass widget_**

There are 3 different **Map orientation** modes which are switched by click on the [Compass widget](/osmand/widgets/map-buttons/#compass).
- **{% data variables.android-values.rotate_map_none_opt %}** - map is not being rotated by any external movements and it could be rotated only by **2 pointer gesture** (2 double tap & rotate).
- **{% data variables.android-values.rotate_map_bearing_opt %}** - map is being rotated by bearing, i.e. direction of your movement (GPS direction) is synchronized with the map. Map will be oriented so that head looking view will be strictly above (higher) my location icon on the map. Without movement map won't be rotated. In this mode center of the map will be located slightly below center of the device, so it allows to see more map information ahead of your movement which is usable in navigation mode. It can be disabled by setting **_TODO: add 2 paths android / ios to General Settings -> Display position always in center _**.
- **{% data variables.android-values.rotate_map_compass_opt %}** - map is being synchornized with device compass orientation. So, [Compass widget](/osmand/widgets/map-buttons/#compass) will point to actual Earth North if device is hold flat. In case compass sensor is not present on device, map orientation won't change.

Extra compass settings (Android):
- **_TODO: Use Kalman filter (Android)_** - smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till  
- **_TODO: Use Magnetic sensor_** - smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till  

**Map orientation** could also be changed in Profile settings.

**_TODO: add 2 paths android / ios to General Settings -> Map Orientation _**