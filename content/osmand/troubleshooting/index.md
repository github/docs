---
title: Troubleshooting
intro: "Solutions and hints for frequently encountered issues."
versions: '*'
---

## Most typical issue categories

- Installation / Setup
    - Purchases
    - Data transfer
    - Plugins are not working
    - Import GPX / KML / Garmin
- Maps & Data
    - Download / Update maps
    - Search results are incomplete or incorrect
    - Create Paper maps
- {% link_in_list /navigation %}
    - Route calculation is very slow or not correct
    - Voice navigation doesn't function properly
- General
    {% link_in_list /battery %}
    - Trip recording or navigation stops while screen is off
    - Privacy issues (delete history / check internet usage / permissions)

## Frequently asked questions

- [What is the difference between TTS (text to speech) and recorded voices?](/navigation/#)
- [What is the difference between TTS (text to speech) and recorded voices?](/navigation/#)
- [Import GPX file](#i-have-a-gpx-file-how-do-i-get-it-into-osmand)


## Contour lines or hillshades do not show up
It should be linked to plugins


## Is there a way to have contour lines displayed in feet also, instead of meters?

Unfortunately not. This would require the generation of completely separate contour line data with different geometry and labels. You can obviously generate maps yourself using GDAL and OsmAndMapCreator but that requires technical environment check [Technical Documentation](/development).

## I have a GPX file, how do I get it into OsmAnd?
- Android
    - You can [download and open it](https://osmand.net/features/trip-planning#Planning_trip_using_GPX_track) via File Browser or Dropbox and select OsmAnd as a target application
    - You can put it in OsmAnd home folder: osmand/tracks/(optional\_sub-folder)/your\_file.gpx
- iOS
    - To open [a GPX file in OsmAnd](https://osmand.net/features/trip-planning#Planning_trip_using_GPX_track),
just download it and select OsmAnd as an app to open it. That's it: you'll view the file normally in the application.

## How to delete search history
To remove search history, please open the Search menu, make a long tap on any search result and select which results to delete. You can also enable the select all option in the upper-left corner of the screen to remove all of the search results. After that, please press the Trash icon in the upper-right corner of the screen.

You can also follow [this guide](https://osmand.net/features/find-something-on-map) to learn more about the search in OsmAnd.

## Contour lines or hillshades do not show up
Should we add content here? If yes, we need to update it.

## Offline search by address does not show all streets
Should we add content here? If yes, we need to update it.


## How to mark different places on the map
*It looks like duplicated content for Personal Data category*
You can leave notes for future usage in several forms:

-   [Favorites](https://osmand.net/features/favourites): they are constant points on the map. You can add a description to every Favorite. To add it, please make a long tap -> tap Add.
-   [Markers](https://osmand.net/features/map-markers): the temporary points with the directions settings. You can see the distance from the selected point or your current location to the Marker and remove it fast. To add it, please make a long tap -> tap Marker.
-   [Waypoints](https://osmand.net/features/map-markers#markers_favorites_A): the points along your route. You can add a description to this point. To add a waypoint, please make a long tap on the map -> Directions -> rst intermediate waypoint.
-   [Audio/Video notes](https://osmand.net/features/audio-video-notes-plugin): these are points with your audio-, video-, and photo files added to the selected point on the map. Please enable the Audio/video notes plugin in OsmAnd menu -> Plugins. To add it, please make a long tap -> Actions -> select the required file to add.
-   [OSM Notes](https://www.facebook.com/watch/?v=673312246195291): your reports on the mistakes in the OpenStreetMap source. Please enable the OSM editing plugin in OsmAnd menu -> Plugins. To add it, please make a long tap -> Actions -> Add OSM note.
-   [POIs](https://osmand.net/features/find-something-on-map#Find_Points_of_Interest_A): these are the points of interest from the OSM map source. Please enable the POI overlay in Configure map menu or select a certain category in the
-   [Search](https://osmand.net/features/find-something-on-map#Find_Points_of_Interest_A).


## Why does OsmAnd not offer access to Google Maps?

Firstly, OsmAnd is meant to support OpenStreetMap and tries to go that path as far as possible. Secondly, there are licensing issues, so OsmAnd cannot be distributed with Google Maps data.
