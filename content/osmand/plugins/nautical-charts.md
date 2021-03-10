---
title: "{% data variables.android-values.plugin_nautical_name %}"
intro: "Detailed graphical representation of oceans, seas, coastal areas and rivers."
versions: '*'
---

### What is Nautical Chart?
Nautical Chart is a detailed graphical representation of oceans, seas, coastal areas and rivers.

Nautical Charts are made for people who drive any kind of vehicle on water: from professional sailors to people who rented a boat to make a tour over city canals. The charts can contain various information like sailing routes, navigation lights, dangerous areas, areas where it's allowed or not allowed to sail or dock, etc.

All professional sailors are obliged to have official nautical charts on their ships. These charts are published by authorized agencies and cost quite some money. Agencies are investing a lot in keeping the charts up to date. They release updates for the charts on regular basis, but, because of the fact that reviewing the information and processing the updates takes time, the nautical charts are never completely up-to-date.

![Nautical maps on iOs](/assets/images/plugins/nautical-charts/nautical-intro.jpg)


### Where the data comes from?

Nautical charts of OsmAnd are based on the data from  [OpenSeaMap](http://www.openseamap.org/) project. The idea of the project is to build the detailed map by people who actually use it. Every user of the map can contribute by adding changes to it making it more detailed and more accurate.

While OpenSeaMap charts at the moment cannot compete with official nautical charts, they can be used by recreational sailors for orientation or route planning.


# Android

### Downloading and installing Plugin
At first you just have  [to download](https://play.google.com/store/apps/details?id=net.osmand.nauticalPlugin&hl=en)  and enable Nautical plugin:  _app menu-> Plugins-> Nautical map view_. You may need to download the plugin first. The plugin enriches the OsmAnd map and navigation app to also produce nautical maps for boating, sailing, and other types of watersports. You can activate  [Boat navigation profile](https://osmand.net/features/navigation-profiles)  when you enable the plugin.

  ![Nautical maps on Android](/assets/images/plugins/nautical-charts/np_and_1.jpg)

You also will need a  _World seamarks map_. Make sure to get it in  _app menu-> Download maps-> Nautical maps_. Please note that  _OsmAnd Nautical Charts_  work best with the  _World seamarks map_  and we recommend to download it. Then go to  _Configure map-> Details-> enable the  [_'Nautical depth contours'_](https://osmand.net/features/map-viewing#Customize_map_Android)  option_.

  ![Nautical maps on Android](/assets/images/plugins/nautical-charts/np_and_2.jpg)

Next turn  [the Nautical map style](https://osmand.net/features/start#Types_maps)  on using the  [_Configure map menu_](https://osmand.net/features/map-viewing#Customize_map_Android)  in the left upper corner of the screen or  _app menu-> Configure map-> Map rendering (Map style)-> Nautical_.

  ![Nautical maps on Android](/assets/images/plugins/nautical-charts/np_and_3.jpg)

### Map legend

**Map legend**  of Nautical map you can find  [_here_](https://osmand.net/help-online/map-legend#nautical).

### Boat navigation

Boat mode for navigation can be enabled together with the Nautical plugin. You can build your trip on rivers or waterway fairway. You can read more about navigation profiles  [here](https://osmand.net/features/navigation-profiles).

  ![Nautical maps on Android](/assets/images/plugins/nautical-charts/np_and_4.jpg)

##### Direct-to-point

Next version of navigation for boat:  **Direct-to-point**. Direct-to-point navigation is a critical and frequently used feature for marine users.

How to make your navigation profile with your parameters read  [here](https://osmand.net/features/navigation-profiles#create).

It is possible to specify the recalculation distance (by default it is OFF for this routing profile):  _Configure profile-> Navigation settings-> Route parameters-> Minimal distance to recalculate the route_.

Also, you can see a point projection that represents the distance to the end point on the line. The point on the line is a virtual point to show the distance (it is not a projection on the line) but a point that has the same distance as current location to the finish point. So it is easy to measure the progress and it is possible to use measurements tool to get correct distance.

  ![Nautical maps on Android](/assets/images/plugins/nautical-charts/np_and_5.jpg)

##### Straight-Line

The next navigation type:  **Straight-Line**.

There is also a new setting to specify at which distance of user's location from route to start recalculation:  _Configure profile-> Navigation settings-> Route parameters-> Minimal distance to recalculate the route_.

We have also implemented a new setting. In case if you deviate from the route during the navigation, this setting builds the shortest path from your current position to the calculated route with the maximum angle. In other words, if the angle is higher than the one set by the user, OsmAnd calculates the next point of the route to build an additional route segment, so the angle will be valid.

  ![Nautical maps on Android](/assets/images/plugins/nautical-charts/np_and_6.jpg)

Professional sailors are required to have official maps, as well, but this extension can be of great help to you in a small voyage or be a supplement to the official nautical charts.


# iOS
At first you just have to enable Nautical plugin: _app menu-> Maps & Resources-> Plugins-> Nautical map_. There, you'll have to buy the plugin by tapping on the checkbox.

![Nautical maps on iOs](/assets/images/plugins/nautical-charts/nautical-charts-ios.jpg)

You also will need a World seamarks map. Make sure to get it in _app menu-> Maps & Resources-> Nautical maps_. Please note that OsmAnd Nautical Charts work best with the World seamarks map and we recommend to download it. Then go to _app menu-> Map-> Details-> enable the 'Nautical depth contours' option_.

![Nautical maps on iOs](/assets/images/plugins/nautical-charts/np_ios_1.jpg)

Next turn the Nautical map style on using the Map menu in the left upper corner of the screen or _app menu-> Map-> Map type-> Nautical_.

![Nautical maps on iOs](/assets/images/plugins/nautical-charts/np_ios_2.jpg)

 

### Map legend
**Map legend**  of Nautical map you can find  [_here_](https://osmand.net/help-online/map-legend#nautical).

