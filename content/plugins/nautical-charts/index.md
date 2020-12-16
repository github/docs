---
title: Nautical charts
intro: 'Nautical Chart is a detailed graphical representation of oceans, seas, coastal areas and rivers.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Nautical Chart is a detailed graphical representation of oceans, seas, coastal areas and rivers.

Nautical Charts are made for people who drive any kind of vehicle on water: from professional sailors to people who rented a boat to make a tour over city canals. The charts can contain various information like sailing routes, navigation lights, dangerous areas, areas where it's allowed or not allowed to sail or dock, etc.

All professional sailors are obliged to have official nautical charts on their ships. These charts are published by authorized agencies and cost quite some money. Agencies are investing a lot in keeping the charts up to date. They release updates for the charts on regular basis, but, because of the fact that reviewing the information and processing the updates takes time, the nautical charts are never completely up-to-date.

Nautical charts of OsmAnd are based on the data from OpenSeaMap project. The idea of the project is to build the detailed map by people who actually use it. Every user of the map can contribute by adding changes to it making it more detailed and more accurate.

While OpenSeaMap charts at the moment cannot compete with official nautical charts, they can be used by recreational sailors for orientation or route planning.

{% android %}
At first you just have to download and enable Nautical plugin: app menu-> Plugins-> Nautical map view. You may need to download the plugin first. The plugin enriches the OsmAnd map and navigation app to also produce nautical maps for boating, sailing, and other types of watersports. You can activate Boat navigation profile when you enable the plugin.

(Image not available offline) (Image not available offline)
You also will need a World seamarks map. Make sure to get it in app menu-> Download maps-> Nautical maps. Please note that OsmAnd Nautical Charts work best with the World seamarks map and we recommend to download it. Then go to Configure map-> Details-> enable the 'Nautical depth contours' option.

(Image not available offline) (Image not available offline)
Next turn the Nautical map style on using the Configure map menu in the left upper corner of the screen or app menu-> Configure map-> Map rendering (Map style)-> Nautical.

(Image not available offline) (Image not available offline)
Map legend of Nautical map you can find here.

Boat mode for navigation can be enabled together with the Nautical plugin. You can build your trip on rivers or waterway fairway. You can read more about navigation profiles here.

(Image not available offline) (Image not available offline)
Next version of navigation for boat: Direct-to-point. Direct-to-point navigation is a critical and frequently used feature for marine users.

How to make your navigation profile with your parameters read here.

It is possible to specify the recalculation distance (by default it is OFF for this routing profile): Configure profile-> Navigation settings-> Route parameters-> Minimal distance to recalculate the route.

Also, you can see a point projection that represents the distance to the end point on the line. The point on the line is a virtual point to show the distance (it is not a projection on the line) but a point that has the same distance as current location to the finish point. So it is easy to measure the progress and it is possible to use measurements tool to get correct distance.

(Image not available offline) (Image not available offline)
The next navigation type: Straight-Line.

There is also a new setting to specify at which distance of user's location from route to start recalculation: Configure profile-> Navigation settings-> Route parameters-> Minimal distance to recalculate the route.

We have also implemented a new setting. In case if you deviate from the route during the navigation, this setting builds the shortest path from your current position to the calculated route with the maximum angle. In other words, if the angle is higher than the one set by the user, OsmAnd calculates the next point of the route to build an additional route segment, so the angle will be valid.

(Image not available offline) (Image not available offline)
Professional sailors are required to have official maps, as well, but this extension can be of great help to you in a small voyage or be a supplement to the official nautical charts.
{% endandroid %}

{% ios %}
At first you just have to enable Nautical plugin: app menu-> Maps & Resources-> Plugins-> Nautical map. There, you'll have to buy the plugin by tapping on the checkbox.

(Image not available offline)
You also will need a World seamarks map. Make sure to get it in app menu-> Maps & Resources-> Nautical maps. Please note that OsmAnd Nautical Charts work best with the World seamarks map and we recommend to download it. Then go to app menu-> Map-> Details-> enable the 'Nautical depth contours' option.

(Image not available offline) (Image not available offline)
Next turn the Nautical map style on using the Map menu in the left upper corner of the screen or app menu-> Map-> Map type-> Nautical.

(Image not available offline) (Image not available offline)
Map legend of Nautical map you can find here.

{% endios %}