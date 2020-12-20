# How to Translate OsmAnd - We Need Your Assistance!

We really appreciate your help translating OsmAnd! Providing display text translations is not very complicated, the preferred way to provide string translations is described here: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* If a language you would like to help translating into is not yet listetd there, please open an issue [here](https://github.com/osmandapp/Osmand/issues) (requires a github account).
* Existing language files could also be modified by editing the respective _strings.xml file_ directly in our code via github mechanisms, but this is not the preferred way.
* Just for reference: master strings are kept in the [American English strings.xml file](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). The string data for the map data extractor is in the _theswing_messages_{language}.properties_ files in [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) (NOTE Hardy: LINK BROKEN!) project.

Thank you for your help !

## Some Frequent Questions and Answers:

#### Q1: Which strings should I translate?
The Weblate tool is self explanatory. Only if ypu try to edit files directly:
* In _strings.xml_, strings look like `<string name="shared_string_save_as_gpx">Save as GPX track</string>`. Translate only the `Save route as GPX track` part.
* In _swing_messages.properties_, strings look like `IndexCreator.INDEX_CITIES=Indexing cities...`. Translate only the right part `Indexing cities...`. 

#### Q2: I don't want to create in Weblate or github, can I simply post you the file?
Yes, you can email the file, but please try the preferred ways, it is easy.

#### Q3: How should I check what has changed in the __English strings.xml__ ?
Please use Weblate as described above, it will show you all changes. If you want to check the source manually vs. your file: New strings are usually added at the top of the master language resource file. You can download it and use some utility like pspad or vim to compare them. You can also use *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* or the file history on github to view the last modifications.
