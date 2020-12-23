---
title: Navigation Voice Prompts
versions: '*'
---

## 1. Some Basics
* OsmAnd supports both Text-to-Speech (TTS) synthesized prompts and pre-recorded voices.
* Using a TTS voice is preferred, it is more flexible and can e.g. also prononuce the names of places or streets.
* Pre-recorded voices are recommended only as a fallback if your device is not capable of supporting TTS at all in the language selected.
* In order to use TTS, your device needs to have a TTS engine installed which supports the language you would like to hear. Most devices come with one or two engines already pre-installed. Only for less common languages you may have to find and install a third party TTS engine.
* For which event voice prompts are offered, and their timing, is governed by the OsmAnd voice router code.
* But the vocabulary and sentence construction for any language is specified in a configuration file _xx-yy_tts.js_, where xx is the ISO 639-1 language code and yy an optional regional or similar specifier. Only for recorded voices an additional sub-folder _voice_ subfolder is required with all necessary recorded expressions as _.ogg_ files.
* The folder/file convention on the device is `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

The _tts.js_ config files should contain a header as follows, keeping track of which particular features have been implemented and verified for the file in question:

```
// IMPLEMENTED (X) or MISSING ( ) FEATURES, (N/A) if not needed in this language:
//
// (X) Basic navigation prompts: route (re)calculated (with distance and time support), turns, roundabouts, u-turns, straight/follow, arrival
// (X) Announce nearby point names (destination / intermediate / GPX waypoint / favorites / POI)
// (X) Attention prompts: SPEED_CAMERA; SPEED_LIMIT; BORDER_CONTROL; RAILWAY; TRAFFIC_CALMING; TOLL_BOOTH; STOP; PEDESTRIAN; MAXIMUM; TUNNEL
// (X) Other prompts: gps lost, off route, back to route
// (X) Street name and prepositions (onto / on / to) and street destination (toward) support
// (X) Distance unit support (meters / feet / yard)
// (N/A) Special grammar: (please specify which)
// (X) Support announcing highway exits
```

## 2. Voice Languages and Variants
* Some common language voice prompt packages are pre-installed in OsmAnd, others require a one-time download. (Please note that also the pre-installed ones appear as if they were a download.)
* For some languages we offer different regional variants. Hearing also the corresponding regional pronunciation depends on the capabilities of your device.
* For some voices we also offer additional variants with e.g. shorter ('casual') prompts or some prompts muted to reduce chattiness.

## 3. Testing of Voice Prompts
You may temporarily enable OssmAnd's Development plugin, then go to its settings and use button `Test voice prompts`. It provides several annlouncement examples for each type of OsmAnd prompt, using a wide range of numbers to test time/distance formating and pronunciation. The button caption staes the basic prompt content, the exact wording is specified in the tts.js file you test.
There is also a test button showing your device settings and language capabilities.

During navigation, the current voice prompt can always be triggered by tapping on the turn arrow widget.

## 4. Creating a New TTS Voice Language/Variant
Some hints:
- OsmAnd only provides the wording, word order, grammar in terms of declinations, cases, singular/plural, etc., while the pronunciation is performed by the TTS engine you use on the device (there are built in and 3rd party ones)
- This is done in a single voice definition file per language. On github the files are located <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">here</a>, and please see above for the folder/file conventions on your device locally).
- The file is now in js (migrated from former PROLOG to make it more mainstream).
- To create a new configuration file, please start by cloning from _en\_tts.js_, i.e. use that as a template.
- It may then be helpful to look at existing config files for grammatically more complex languages (e.g. German, Czech, or Slovak) to look at existing solutions for special grammar, word order, number forming, etc. Look particularly at languages similar to yours.
- You can test your own tts file (or your improvements to existing ones) yourself locally, prior to a pull request, just place it on you device with nthecorrect file/folder convention.
