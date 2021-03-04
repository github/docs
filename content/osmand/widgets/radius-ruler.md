---
title: "Radius-ruler widget and Ruler"
intro: "Radius-ruler tool helps to determine the radius around the selected point on the map via displaying distance-circles on the map. The Ruler tool displays scale. "
versions: '*'
---
<!-- "Radius-ruler tool helps to determine the radius around the selected point on the map via displaying distance-circles on the map.
Distance by tap tool helps to calculate the distance between selected points to find the shortest distance. The Ruler tool displays scale. " -->
![Radius-ruler screen](/assets/images/docs/widgets/radius_ruler_screen.png)

## Radius-ruler widget <!--tool-->
The Radius-ruler widget is a clickable widget and changes its state between the black scale, the grey one and no scale modes. <br>
<!-- Radius-ruler widget shows distance between users location and inner point of the distance-circles on the map. <br> -->

To find Radius-ruler widget follow: <br>
{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.radius_ruler_item %}  <br>
{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_radius_ruler %} <br>

 >**_Note:_** To check the distance between two random points on the map**: <br>
 {% data variables.product.android_button_seq %} enable 'Distance by tap' tool. {% link_with_intro /'Distance by tap' tool %} <br>
 {% data variables.product.ios_button_seq %}: touch simultaneously two spots on the map. It will allow to see the measurement and the line connecting the two points. The line will stay on screen as long as the user is touching it. <br>
The line will fade by itself after 2 seconds. <br>

<!-- The Radius-ruler widget is a clickable widget and changes its state between the black scale, the grey one and no scale (only ruler) modes. <br> -->

<!-- ## 'Distance by tap' tool

**To check the distance from the user's location to a point on the map**: touch a spot on the map. It will allow to see the measurement and the line connecting the two points. The line will stay on screen as long as the user is touching it. <br>
The line will fade by itself after 2 seconds. <br>

![distance between two random points on the map](/assets/images/docs/widgets/distance_between_two_random_points.png)

**To check the distance between two random points on the map**: touch simultaneously two spots on the map. It will allow to see the measurement and the line connecting the two points. The line will stay on screen as long as the user is touching it. <br>
The line will fade by itself after 2 seconds. <br>

<!-- ![distance between two random points on the map](/assets/images/docs/widgets/distance_between_two_random_points.png) -->
## Ruler

![Ruler tool](/assets/images/docs/widgets/ruler_tool.png) <br>

The Ruler tool displays map scale and shows the number of meters/kilometers (other units of measure) in a segment. <br>

User can find Ruler at the bottom of the screen. <br>

The Ruler gives a visual estimate of the objects on the map and distance between them. The Ruler will change the display value during map  zooming.   <br>

 >**_Note:_** To change units format follow {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.unit_of_length %}. <br>
