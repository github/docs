---
title: Nautical chart plugin
intro: "How to use it"
versions: '*'
---
{% android %}
At first you just have to download and enable Nautical plugin: app menu-> Plugins-> Nautical map view. You may need to download the plugin first. The plugin enriches the OsmAnd map and navigation app to also produce nautical maps for boating, sailing, and other types of watersports. You can activate Boat navigation profile when you enable the plugin.

You also will need a World seamarks map. Make sure to get it in app menu-> Download maps-> Nautical maps. Please note that OsmAnd Nautical Charts work best with the World seamarks map and we recommend to download it. Then go to Configure map-> Details-> enable the 'Nautical depth contours' option.


Next turn the Nautical map style on using the Configure map menu in the left upper corner of the screen or app menu-> Configure map-> Map rendering (Map style)-> Nautical.


Map legend of Nautical map you can find here.

Boat mode for navigation can be enabled together with the Nautical plugin. You can build your trip on rivers or waterway fairway. You can read more about navigation profiles here.


Next version of navigation for boat: Direct-to-point. Direct-to-point navigation is a critical and frequently used feature for marine users.

How to make your navigation profile with your parameters read here.

It is possible to specify the recalculation distance (by default it is OFF for this routing profile): Configure profile-> Navigation settings-> Route parameters-> Minimal distance to recalculate the route.

Also, you can see a point projection that represents the distance to the end point on the line. The point on the line is a virtual point to show the distance (it is not a projection on the line) but a point that has the same distance as current location to the finish point. So it is easy to measure the progress and it is possible to use measurements tool to get correct distance.


The next navigation type: Straight-Line.

There is also a new setting to specify at which distance of user's location from route to start recalculation: Configure profile-> Navigation settings-> Route parameters-> Minimal distance to recalculate the route.

We have also implemented a new setting. In case if you deviate from the route during the navigation, this setting builds the shortest path from your current position to the calculated route with the maximum angle. In other words, if the angle is higher than the one set by the user, OsmAnd calculates the next point of the route to build an additional route segment, so the angle will be valid.


Professional sailors are required to have official maps, as well, but this extension can be of great help to you in a small voyage or be a supplement to the official nautical charts.


{% endandroid %}

{% ios %}
At first you just have to enable Nautical plugin: app menu-> Maps & Resources-> Plugins-> Nautical map. There, you'll have to buy the plugin by tapping on the checkbox.


You also will need a World seamarks map. Make sure to get it in app menu-> Maps & Resources-> Nautical maps. Please note that OsmAnd Nautical Charts work best with the World seamarks map and we recommend to download it. Then go to app menu-> Map-> Details-> enable the 'Nautical depth contours' option.


Next turn the Nautical map style on using the Map menu in the left upper corner of the screen or app menu-> Map-> Map type-> Nautical.


Map legend of Nautical map you can find here.
{% endios %}
