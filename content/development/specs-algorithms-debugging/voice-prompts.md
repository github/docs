# Navigation Voice Prompts - Status, Parametrization (by Hardy)
## 1. Some basics:
* Osmand supports both Text-to-Speech (TTS) synthesized prompts and pre-recorded voices.
* Using a TTS voice is preferred, it is more flexible and can e.g. also pronouce the names of places or streets.
* Pre-recorded voices are recommended only as a fallback if your device is not capababöle of supportinmg TTS voice at all in the language selected.
* In order to use TTS, your device needs to havea TTS engine insalled which supports the laguage you would like to hear. Most devices come withne or two engines already preinstalled. Only for less common languages you may have to find and install a third party TTS engine.

* For which eventor actioans voice prompts are offered, and their timing, is governed by the OsmAnd voice router code.
* The vocabulary and sentence construction for any language is specified in a configuratioon file _xx-yy_tts.js_, where xx is the ISO 639-1 language code and yy an optional regional or similar specifier. Only for recorded voices an additional sub-folder _voice_ subfiolder is required with all necessary recorded expressions as _.ogg_ files.

The _tts.js_ config files should contain a header as follows, where (X) keeps track of which particular features have been implemented and checked for the voice in question:
`// IMPLEMENTED (X) or MISSING ( ) FEATURES, (N/A) if not needed in this language:
//
// (X) Basic navigation prompts: route (re)calculated (with distance and time support), turns, roundabouts, u-turns, straight/follow, arrival
// (X) Announce nearby point names (destination / intermediate / GPX waypoint / favorites / POI)
// (X) Attention prompts: SPEED_CAMERA; SPEED_LIMIT; BORDER_CONTROL; RAILWAY; TRAFFIC_CALMING; TOLL_BOOTH; STOP; PEDESTRIAN; MAXIMUM; TUNNEL
// (X) Other prompts: gps lost, off route, back to route
// (X) Street name and prepositions (onto / on / to) and street destination (toward) support
// (X) Distance unit support (meters / feet / yard)
// (N/A) Special grammar: (please specify which)
// (X) Support announcing highway exits`


## 2. Voice Languages and Variants
* Some common language voices prompt packages are preinstallled in OsmAnd, others require a one-time download-
* For some languages we offer different regional variants. Hearing also the correct reggional pronunciation depends on the capabilities of your device.
* For some voices we also offer additional variants with e.g. shorter prompts or some prompts muted


## 3. Testing of Voice Prompts:
You may temporarily enable OssmAnd's Development plugin, then go to its settings and use button _Test voice propmts_. It provides several example propmts for each type of prompt OsmAnd uses, togerther with a wide range of numbers to test their pformation and pronunciation. the button caption staes the basic prompt content, the exact wording is specified in the tts.js file you test.
There is also a test button showing your device settings and language capabilities.


## 4. Details on Some Specific Prompts:


### "Route calculated/Route recalculated":
Is played after the route has been calculated or recalculated, together with saome base data, depending on the chattines of the voice package selected.

### "GPS signal lost":

Is played after GPS signal has been lost for continuous 20 sec and this was not caused by user action.

### "Make a U-turn when possible":

Mostly suppressed now. Shpoudl only sound if no route in forward direction was found at all (e.g. if you are heading down a one way road), or if a route in forward directiom is decisively longer. 

### Turn instructions: Lead distances (lead time):

Note Hardy: Values to be checked, may have been changed


**1. CAR profile** (DEFAULT\_SPEED = 12m/s=43km/h): |
- | -
(a) \>3000m out | "Follow the course of the road for..."
(b) 3000m-2000m | PREPARE\_LONG (We now suppress this prompt as it was little helpful)
(c) 1500m-1200m|PREPARE
(d) 300m-168m (or \<25sec) | TURN\_IN
(e) \<60m (or \<5sec) | TURN
**2. BICYCLE profile** (DEFAULT\_SPEED = 5m/s=18 km/h): |
(b) 500m-300m | PREPARE\_LONG
(c) \~\~500m-350m\~\~ 200m-120m | PREPARE
(d) \~\~225m-80m (or \<45sec)\~\~ 80m-60m (or \<16sec) | TURN\_IN
(e) \~\~\<45m (or \<9sec)\~\~ \<30m (or \<6sec) | TURN
**3. PEDESTRIAN profile** (DEFAULT\_SPEED = 2 m/s=7.2km/h):
(c) \~\~200m-150m\~\~ 100m-70m | PREPARE
(d) \~\~100m-70m (or \<50sec)\~\~ 50m-30m (or \<25sec) | TURN\_IN
(e) \~\~25m or (or \<12sec)\~\~ 15m (or \<7.5sec) | TURN
(Corrected values for bike and ped from forum feedback June 2013.)

Note: We interrupt/suppress TURN instructions immediatley once your direction of travel or current position is not any more in line with the turn to be announced (account for GPS issues).
