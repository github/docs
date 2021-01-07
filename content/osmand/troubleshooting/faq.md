---
title: "Frequently asked quetions"
intro: "Frequently asked questions about using OsmAnd, e.g. marking places, searching things, working with GPX files, specific use cases."
versions: '*'
---
- [Is there a way to have contour lines displayed in feet also, instead of meters?](#i-have-a-gpx-file-how-do-i-get-it-into-osmand)

### Is there a way to have contour lines displayed in feet also, instead of meters?

Unfortunately not. This would require the generation of completely separate contour line data with different geometry and labels. You can obviously generate maps yourself using GDAL and OsmAndMapCreator but that requires technical environment check [Technical Documentation](/development).

### I have a GPX file, how do I get it into OsmAnd?
- Android
    - You can [download and open it](https://osmand.net/features/trip-planning#Planning_trip_using_GPX_track) via File Browser or Dropbox and select OsmAnd as a target application
    - You can put it in OsmAnd home folder: osmand/tracks/(optional\_sub-folder)/your\_file.gpx
- iOS
    - To open [a GPX file in OsmAnd](https://osmand.net/features/trip-planning#Planning_trip_using_GPX_track),
just download it and select OsmAnd as an app to open it. That's it: you'll view the file normally in the application.

### How to delete search history
To remove search history, please open the Search menu, make a long tap on any search result and select which results to delete. You can also enable the select all option in the upper-left corner of the screen to remove all of the search results. After that, please press the Trash icon in the upper-right corner of the screen.

You can also follow [this guide](https://osmand.net/features/find-something-on-map) to learn more about the search in OsmAnd.


### "How to mark different places on the map
You can leave notes for future usage in several forms:

-   [Favorites](https://osmand.net/features/favourites): they are constant points on the map. You can add a description to every Favorite. To add it, please make a long tap -> tap Add.
-   [Markers](https://osmand.net/features/map-markers): the temporary points with the directions settings. You can see the distance from the selected point or your current location to the Marker and remove it fast. To add it, please make a long tap -> tap Marker.
-   [Waypoints](https://osmand.net/features/map-markers#markers_favorites_A): the points along your route. You can add a description to this point. To add a waypoint, please make a long tap on the map -> Directions -> rst intermediate waypoint.
-   [Audio/Video notes](https://osmand.net/features/audio-video-notes-plugin): these are points with your audio-, video-, and photo files added to the selected point on the map. Please enable the Audio/video notes plugin in OsmAnd menu -> Plugins. To add it, please make a long tap -> Actions -> select the required file to add.
-   [OSM Notes](https://www.facebook.com/watch/?v=673312246195291): your reports on the mistakes in the OpenStreetMap source. Please enable the OSM editing plugin in OsmAnd menu -> Plugins. To add it, please make a long tap -> Actions -> Add OSM note.
-   [POIs](https://osmand.net/features/find-something-on-map#Find_Points_of_Interest_A): these are the points of interest from the OSM map source. Please enable the POI overlay in Configure map menu or select a certain category in the
-   [Search](https://osmand.net/features/find-something-on-map#Find_Points_of_Interest_A).


### Why does OsmAnd not offer access to Google Maps?

Firstly, OsmAnd is meant to support OpenStreetMap and tries to go that path as far as possible. Secondly, there are licensing issues, so OsmAnd cannot be distributed with Google Maps data.


### OsmAnd seems to drain too much battery power

There have on and off been user reports about this. We made lots of measurements and could never really reproduce it, even though under some circumstances OsmAnd is reported responsible for 90% of the battery usage. Please be aware that OsmAnd does not run anything in background except a service while needed for ongoing functionality live navigation or track recording. The presence of the service is displayed in the Android notification area. If you do not see anything there, OsmAnd is not consuming any power at all in the background.

On newer devices, typical power consumption for OsmAnd should be in this neighborhood:  

Device Function | Battery Consumption<br>per Hour
--- | ---
**Typical value for device asleep** with only standard apps active | 0.5 %
**Screen on** may typically account for | 6 %
**GPS active** may typically account for | 5 %
**Net effect of OsmAnd running** in the background, e.g. for track recording: | 0.5 %
**OsmAnd in the background not running the service for any purpose**: | 0

The overall power consumption should result by adding these components as applicable, depending
how you use OsnAmd. Please report if you see huge deviations:

OsmAnd Function | Battery Consumption<br>per Hour
--- | ---
**Track recording** with screen off | 6 %
**Navigation**  with screen on | 12 %


### "What is the difference between TTS (text to speech) and recorded voices?

TTS (text to speech) synthesizes any voice prompt just from a specified text "on the fly", while recorded voices depend on combining every command from a set of snippets pre-recorded from a human voice.

In OsmAnd, we recommend using a synthesized (TTS) voice. They are better maintained by the project developers to provide the latest feature set. Since they are more flexible, they are e.g. able to also pronounce street names or highway numbers (OsmAnd version 1.5.1 and newer), which pre-recorded voices can not. TTS prompts may on some devices sound a bit more "robotic", and the selection of languages actually supported on your device is more limited. Both what languages are supported and their voice quality strictly depend on the TTS engine installed on your device, not on OsmAnd. See also next section "TTS does not function
properly".

We suggest that recorded voices should only be a fallback if you **really** like a particular voice, or if you cannot find a TTS engine supporting your language. Many 'recorded' voices have significant shortcomings like gaps and unnatural intonation, and some phrases may be missing entirely, where for a maintenance like adding new commands we could not get access to the original speakers any more.

Read more about Voice prompts:
- [Voice guidance](https://osmand.net/features/navigation#Voice_guidance)
- [Adjusting voice prompts](https://osmand.net/features/start#Voice_prompts)
- {% link /osmand/troubleshooting/tts-does-not-function-properly %}