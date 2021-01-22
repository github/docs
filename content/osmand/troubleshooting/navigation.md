---
title: Navigation troubleshooting
intro: "Most typical issues encountered in navigation mode"
versions: '*'
---

## Route calculation
### Route calculation is slow 
Should we add content here? If yes, we need to update it.

### How to calculate routes longer than 250km?
Should we add content here? If yes, we need to update it.


## The calculated route does not seem correct
Should we add content here? If yes, we need to update it.

## Road information
### OsmAnd only shows some speed cams
Should we add content here? If yes, we need to update it.

## Voice navigation
### What is the difference between TTS (text to speech) and recorded voices?

TTS (text to speech) synthesizes any voice prompt just from a specified text "on the fly", while recorded voices depend on combining every command from a set of snippets pre-recorded from a human voice.

In OsmAnd, we recommend using a synthesized (TTS) voice. They are better maintained by the project developers to provide the latest feature set. Since they are more flexible, they are e.g. able to also pronounce street names or highway numbers (OsmAnd version 1.5.1 and newer), which pre-recorded voices can not. TTS prompts may on some devices sound a bit more "robotic", and the selection of languages actually supported on your device is more limited. Both what languages are supported and their voice quality strictly depend on the TTS engine installed on your device, not on OsmAnd. See also next section "TTS does not function
properly".

We suggest that recorded voices should only be a fallback if you **really** like a particular voice, or if you cannot find a TTS engine supporting your language. Many 'recorded' voices have significant shortcomings like gaps and unnatural intonation, and some phrases may be missing entirely, where for a maintenance like adding new commands we could not get access to the original speakers any more.

Read more about Voice prompts:
- [Voice guidance](https://osmand.net/features/navigation#Voice_guidance)
- [Adjusting voice prompts](https://osmand.net/features/start#Voice_prompts)
- {% link /osmand/troubleshooting/tts-does-not-function-properly %}


### TTS does not function properly

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

## Other

### Navigation stops while screen is off
- Link to trip recording section of the same question
