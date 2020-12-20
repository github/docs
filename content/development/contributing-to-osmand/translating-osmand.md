How to Translate OsmAnd - We Need Your Assistance

We very much appreciate your help providing translations for OsmAnd! Provideing translations is not very complicated, the preferred way to provide string transaltions is described here: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

*   All translated strings are stored in [resources](https://github.com/osmandapp/Osmand/tree/master/OsmAnd/res), where you can check if there is already a _'values-{language}'_ directory for your language, e.g. _'values-sk'_ for Slovak.
*   Existing language files could be modified by editing the respective _strings.xml file_ (requires a github account) as desired, but please use the easier way of prividing translations and corrections as described above. The master string data is kept in the [english strings.xml file](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml), please do also check out the hints I have added to the beginning of that file.
*   To create a translation for a new OsmAnd language, download the [english strings.xml file](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml), translate it and open an Issue at [Github](https://github.com/osmandapp/Osmand/issues) (requires an account) announcing that a translation has been created
*   The same applies to _theswing_messages_{language}.properties_ files in [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) project if you want to translate the map data extractor

Please use these described methods rather than publishing changes to _strings.xml_ as issues or e-mailing them.

Thank you for your help !

Q: Which strings should I translate?

A: In the _strings.xml_ the strings look like:

<string name="shared_string_save_as_gpx">Save as GPX track</string>

Translate only the _'Save route as GPX track'_ part. In the _swing_messages.properties_ the strings looks like:

IndexCreator.INDEX_CITIES=Indexing cities...

Translate only the right part _'Indexing cities...'_  

Q: I don't want to create github, can I still post you the file?

A: Yes, you can email the file, but still for us is the best way to use the github, it is easy.

Q: How should I check what has changed in the __english strings.xml__ ?

A: New strings are added always on the top of the file. You can download the english file, your file and use some utility like pspad, or vim, or whatever you like to compare them for the new keys. You can also *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* the english file to see the last line modifications.
