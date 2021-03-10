---
title: Import / Export data (Migration)
intro: How to import and export all personal and custom data between different devices
versions: '*'
---


# Reinstall 
Please note that most versions of Android also remove an app's data folder when you uninstall an app (or when in Android's App manager settings you tap 'Clear data' to reset the app settings to default). If no precaution is taken, this will for OsmAnd mean you **lose all downloaded maps as well as any stored Favorites, GPX tracks, etc.(!)**
On most systems the following procedure can be used to reset or uninstall/reinstall OsmAnd while preserving the original app data on the SD card:
-   Before any Uninstall or Clear data operation, **rename the app data folder**, e.g. from *net.osmand.plus* to *net.osmand.plus0*
-   Then either in the Android App manager force stop / clear cache / clear data to reset the app, or uninstall/reinstall OsmAnd, as desired
-   Start OsmAnd
-   On its 'First Start' screen tap: Get started `-> Change the data folder to the SD card -> Skip -> Skip downloading maps`
-   Force-stop OsmAnd
-   Using a file manager app, delete the newly created (almost empty) OsmAnd data folder, and rename your old (preserved) data folder back
-   Restart OsmAnd
-   Go to `Settings / Download maps`: Your existing offline maps should now be listed on tab Local. Go to the tab Update and tap the refresh icon, this should make OsmAnd finally aware maps are already present and can be used.