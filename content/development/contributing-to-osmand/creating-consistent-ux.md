# Creating a Consistent User Experience

Usability of our complex features is decisively enhanced by wording and good translations, and as much consistency as possible. It is worth thinking about many expressions or sentences for a little while :-)

Please note the following:

## 1. Consistent Wording

Use only **one expression** for a certain feature, do not mix two possible expressions. Examples:

*   check for existing expressions and re-use them in new strings
*   use _"navigation"_, not _"routing"_, throughout.
*   use _"tracking"_, not _"monitoring"_
*   understand that _"position"_ is where you are, while _"location"_ refers to arbitrary points
*   use _"destination"_, not _"target"_
*   use _"speed"_, not _"velocity"_
*   know the difference between _"elevation"_ and _"altitude"_
*   It is _"OsmAnd"_ now, not _"Osmand"_

## 1. Authoring Text

*   Please try to re-use existing string constants as much as possible, it is good for memory and performance :-)
*   When changing existing strings, please double-check with _all_ their occurrences in the code
*   Unnecessary text clutters screens without helping much. Please be short and precise, only add words which convey _necessary_ information.
*   Please double-check the appearance of wording in the app, in particular on low-density devices. Too many line breaks, cut-off text or blown-up menu buttons may make a screen or dialog unusable.
*   In some cases there are conventions, which may be worth checking, rather than "inventing something"... So if 99% of commercial navigation systems in your language announce "you have reached your destination", then using "you have arrived at where you wanted to go" may not be the best of choices ... :-)
*   Clearly mark all features which require Internet access with the expression "online"
*   The base language for OsmAnd is American English. There is a translation folder for in British English for all expressions and spelling which differ.

##3. Rendering

*   A note about rendering: The appearance our default renderer creates has been tested at a multitude of map locations, with many devices, and under very different light conditions. _"Spontaneous improvements"_ to the renderer are almost always questionable, may at least require more investigation and testing than you may think ... :-)
