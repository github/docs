---
title: Troubleshooting
intro: "Solutions and hints for frequently encountered issues."
versions: '*'
---

Most typical issues:
- Installation / Data transfer
- Search results are incomplete or incorrect
- Route calculation is very slow or not correct
- How to import and use (navigate, view) certain type of files GPX / KML / Paper maps / Garmin
- Trip recording or navigation stops while screen is off
- Battery consumption
- Purchases or Plugins are not working (Contour lines installation)
- Voice navigation doesn't function properly
- Download / Update maps
- GPS location is not found
- Privacy issues (delete history / check internet usage / permissions)

Link example:
- [Import GPX file](#i-have-a-gpx-file-how-do-i-get-it-into-osmand)


### Contour lines or hillshades do not show up
It should be linked to plugins


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

### Contour lines or hillshades do not show up
Should we add content here? If yes, we need to update it.

### OsmAnd only shows some speed cams
Should we add content here? If yes, we need to update it.

### Route calculation is slow 
Should we add content here? If yes, we need to update it.

### How to calculate routes longer than 250km?
Should we add content here? If yes, we need to update it.

### Offline search by address does not show all streets
Should we add content here? If yes, we need to update it.

### The calculated route does not seem correct
Should we add content here? If yes, we need to update it.

### Trip recording or navigation stops while screen is off
Should we add content here? If yes, we need to update it.

### "How to mark different places on the map
*It looks like duplicated content for Personal Data category*
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


### What is the difference between TTS (text to speech) and recorded voices?

TTS (text to speech) synthesizes any voice prompt just from a specified text "on the fly", while recorded voices depend on combining every command from a set of snippets pre-recorded from a human voice.

In OsmAnd, we recommend using a synthesized (TTS) voice. They are better maintained by the project developers to provide the latest feature set. Since they are more flexible, they are e.g. able to also pronounce street names or highway numbers (OsmAnd version 1.5.1 and newer), which pre-recorded voices can not. TTS prompts may on some devices sound a bit more "robotic", and the selection of languages actually supported on your device is more limited. Both what languages are supported and their voice quality strictly depend on the TTS engine installed on your device, not on OsmAnd. See also next section "TTS does not function
properly".

We suggest that recorded voices should only be a fallback if you **really** like a particular voice, or if you cannot find a TTS engine supporting your language. Many 'recorded' voices have significant shortcomings like gaps and unnatural intonation, and some phrases may be missing entirely, where for a maintenance like adding new commands we could not get access to the original speakers any more.

Read more about Voice prompts:
- [Voice guidance](https://osmand.net/features/navigation#Voice_guidance)
- [Adjusting voice prompts](https://osmand.net/features/start#Voice_prompts)
- {% link /osmand/troubleshooting/tts-does-not-function-properly %}


# TTS does not function properly

Text-to-Speech (TTS) issues will usually have to be fixed in your **Android configuration and settings**, not within the OsmAnd app!

Which TTS languages are supported on your device and the sound quality of each TTS voice strictly depends on the TTS engine you select (or install) via your **Android device settings**. There is usually one TTS engine pre-installed on each device (e.g. google, Samsung, Pico). An additional 3rd party engine (see below) can be installed if needed.

A TTS engine often supports several languages, but one needs to be selected as the one to be used. To improve the voice quality: Some TTS engines come pre-installed with only a set of basic-quality pronunciation packages for the languages they support, and then faciliate downloading a high-quality package for the very language you actually select to be used.

If you have issues with the TTS voice guidance:

-   First check if you have a TTS engine installed on your Android device which supports the language you want (i.e. offers it for selection in its options). To do this, find and select the language you want in the Android (not OsmAnd) settings, often located under "Language and Input / Text-to-speech options".
-   Then use the test button usually provided there to "Listen to an example". You should hear a test announcement in the correct language and pronunciation.
-   Once this works, finally go to OsmAnd's General settings / Voice guidance and there select the corresponding TTS language.
	(Please note that the language list OsmAnd initially displays can be extended by tapping the "Install more..." option.)

It is a known issue that many pre-installed TTS engines may not support less widely spoken languages (even though the number of languages supported is growing). You can always try to find a 3rd party TTS engine
supporting the language you are looking for: Install it on your device, and follow the above procedure. This should then provide TTS support for this language. Some of the more prominent TTS engines are:

-   [SVOX](https://play.google.com/store/apps/details?id=com.svox.classic)
-   [IVONA](https://play.google.com/store/apps/developer?id=IVONA+Text-to-Speech)
-   [eSpeak](https://play.google.com/store/apps/details?id=com.googlecode.eyesfree.espeak)
