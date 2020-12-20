# How to Translate OsmAnd - We Need Your Assistance!

We really appreciate your helping translate OsmAnd! Provideing translations is not very complicated, the preferred way to provide string translations is described here: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* All translated strings are stored in [resources](https://github.com/osmandapp/Osmand/tree/master/OsmAnd/res), where you can check if there is already a _'values-{language}'_ directory for your language, e.g. _'values-sk'_ for Slovak.
* Existing language files could be modified by editing the respective _strings.xml file_ (requires a github account) as desired, but please use the easier way of prividing translations and corrections as described above. The master string data is kept in the [english strings.xml file](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml), please do also check out the hints I have added to the beginning of that file.
* To create a translation for a new OsmAnd language, download the [english strings.xml file](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml), translate it and open an Issue at [Github](https://github.com/osmandapp/Osmand/issues) (requires an account) announcing that a translation has been created
* The same applies to _theswing_messages_{language}.properties_ files in [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) project if you want to translate the map data extractor

Please use these described methods rather than publishing changes to _strings.xml_ as issues or e-mailing them.

Thank you for your help !

## Some Frequent Questions and Answers:
**Q1:** Which strings should I translate?

**A1:**
In the _strings.xml_ the strings look like:
`<string name="shared_string_save_as_gpx">Save as GPX track</string>'
Translate only the `Save route as GPX track` part.

In the _swing_messages.properties_ the strings looks like:
`IndexCreator.INDEX_CITIES=Indexing cities...`
Translate only the right part `Indexing cities...`. 


**Q2:** I don't want to create in github, can I still post you the file?

**A2**: Yes, you can email the file, but still the poreferred way is github, it is easy.


**Q3:** How should I check what has changed in the __english strings.xml__ ?
**A3:** Please use Weblate as described above, it will show you all changes. If you wna tto check the source direcly: New strings are usually added at the top of the values/strings.xml file. You can download the English file, your file and use some utility like pspad or vim to compare them. You can also use *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* orthe file history of the English file to view the last modifications.
