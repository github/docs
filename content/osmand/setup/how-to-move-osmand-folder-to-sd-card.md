---
title: How to move OsmAnd's home (maps) folder to the external SD card?
versions: '*'
---

(for Android version only)

## In order to move the OsmAnd home (maps) folder to an external SD card:

-   Go to Settings (on the start screen)-\> OsmAnd Settings-\> [Data
    storage folder (for Android version
    only)](https://osmand.net/features/start#Setting_OsmAnd_for_your_region_android).
-   Change the value to a path pointing to the external SD card, on many
    Android systems it may contain "/storage/extSdCard" or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   Then you can move the contents of OsmAnd's data folder from the
    internal memory to the external SD card , either using the built-in
    "move" option the OsmAnd app provides when changng the data folder,
    or using a built-in file manager app on the device, or via
    connecting the device to a computer as external storage and
    performing the move from there.

## How do I use my SD card with OsmAnd under Android 4.4+ and 5?

If you update your Android to version 4.4.x, you will experience a known
Android issue with the WRITE\_EXTERNAL\_STORAGE permission: Android has
changed the rules so that from now on no application can write to the
external SD card anywhere outside its new standard folder
Android/data/[PACKAGE-NAME]. If OsmAnd was installed prior to updating
your device to Android 4.4.x, it will continue to work (read-only) with
the old, non-standard osmand folder, but won't be able to update any map
and other files there.

Solutions:

-   Move OsmAnd's data folder osmand to the internal storage. \
     **Drawback:** Internal storage can be rather small.
-   Move OsmAnd's data folder osmand into its standard SD folder, \
    for OsmAnd+ : (extSdCard)/Android/data/net.osmand.plus/files \
    for OsmAnd : (extSdCard)/Android/data/net.osmand/files \
     **Caution:** Whenever you uninstall OsmAnd now, all your data will
    be erased as well! (Unless you unmount your SD card, or rename the
    net.osmand(.plus) folder before de-installation.)

If you manually want to perform the necessary copies/moves, either use a
PC to perform this action on the SD card, or via the device itself using
the file manager tool **which came pre-installed with your Android**
(only these methods will have the necessary write permission). Copies
can also be invoked in OsmAnd itself via Menu/Settings/General/Data
storage folder but the copy operations may take a long time or result in
errors (e.g. if the SD card is too full).

You might experience an issue with the new OsmAnd version working with
Android 5 devices. It is known and we’re working to fix it as soon as
possible. Please read more [on
GitHub](https://github.com/osmandapp/Osmand/issues/1838). OsmAnd doesn’t
ask specific permissions to get access to random folder on device,
though we expect that the standard path on the SD card
(Android/data/net.osmand.plus/files/osmand) should work. You can try to
enter the path manually in order to make it work.
	