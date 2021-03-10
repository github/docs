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

# Online sources


In order **to export** online map sources, you can select them in the export file list of your [application profile](/osmand/app-profile):

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.export_profile %} → {% data variables.android-values.select_data_to_export %} → {% data variables.android-values.shared_string_resources %} → {% data variables.android-values.quick_action_map_source_title %}  

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.sett_settings %} → choose your {% data variables.ios-values.app_profiles %} → {% data variables.ios-values.actions %} → {% data variables.ios-values.export_profile %}

In order **to import** online map sources, you can click to osf-file of application profile in your storage, messenger, mail and etc, that choose OsmAnd app for opening, select the data to be imported.

{% data variables.product.android_button_seq %}

A. {% data variables.android-values.shared_string_import %} → {% data variables.android-values.select_data_to_import %} → {% data variables.android-values.quick_action_map_source_title %} → {% data variables.android-values.shared_string_import_complete %} → {% data variables.android-values.shared_string_continue %} → {% data variables.android-values.shared_string_close %}

<img src="/assets/images/plugins/online-maps/om-8.png" />

B. You can click the SQLiteDb-file on your email, cloud, or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.

<img src="/assets/images/plugins/online-maps/om-6.png" />

{% data variables.product.ios_button_seq %}

A. {% data variables.ios-values.shared_string_import %} → {% data variables.ios-values.quick_action_map_source_title %} → {% data variables.ios-values.shared_string_continue %} → {% data variables.ios-values.shared_string_import_complete %} → {% data variables.ios-values.gpx_finish %}

<img src="/assets/images/plugins/online-maps/om-7.png" />

B. {% data variables.ios-values.menu %} → {% data variables.ios-values.map_settings_map %} → {% data variables.ios-values.map_settings_overunder %} → {% data variables.ios-values.import_from_docs %}

C. You can click the SQLiteDb-file on your email, cloud, or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.

<img src="/assets/images/plugins/online-maps/om-5.png" />