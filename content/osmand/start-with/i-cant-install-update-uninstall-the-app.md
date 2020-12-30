---
title: I can't install, upate, or uninstall the app
versions: '*'
---

## Error "-25/-26/-27"
If you have an error `-25/-26/-27` please read below, otherwise please
contact support.

The issue you are experiencing is now confirmed as
Xiaomi MIUI's integrated anti-virus' fault. To avoid error
`-25/-26/-27`, you need to freeze the "Guard Provider" process before
updating OsmAnd. Then, once updated, you can re-enable the process.

There are many ways and tools to freeze a process. We suggest you to
google it yourself, although some of our users used 3C Toolbox or App
Master, but we leave this to your preference.

To freeze a process, follow these steps: Go to `App Manager --> Apps tab
--> filter by System Apps --> select the "Guard Provider" --> tap the
Manage button (bottom right, four little squares) --> Freeze`.

To unfreeze, repeat the same procedure. Unfortunately "App Master" does not
perform the freeze in the OsmAnd Free version. The 3C Toolbox does the trick, but you
will find the "Guard Provider" process as "com.securitycore.miui\_t"
under "Apps" with the filter on "System".


## I can't uninstall the app

If you want to uninstall the app, e.g. to
install the paid version or a nightly develompment build, you will sometimes find
that the "UNINSTALL" option is inactive. This is because OsmAnd may have been
configured as a so-called "Device Manager": In hiking/cycling mode OsmAnd can be configured to switch off the
screen and switch it on just before a navigation instruction.
In order to facilitate this in Android, OsmAnd is added to the
"Device administrators" section.

To uninstall OsmAnd in such a case you need to go to (Android)
`Settings --> Security --> Device administrators` and uncheck OsmAnd as a
device administrator there. Afterwards you can uninstall OsmAnd as usual.


## OsmAnd+ installation on the SD card fails
(for Android version only)

This happens only for the OsmAnd+ paid version and it is a known Google
Play issue (this is reproducible for other paid applications copied to
SD card).

Symptoms: Application was installed on SD card and update fails

Possible solution:

-   Check here
    http://www.newbiehelper.net/solve-couldnt-install-on-usb-storage-or-sd-card-error-in-android-2-2/
-   If you have a running application, please make a backup
-   Export your favorites and then uninstall the application completely
-   Clear the cache of Google Play app and unmount the SD card
-   Re-install the app

Because this issue happens before the OsmAnd app even starts, this issue
cannot be fixed in OsmAnd, but needs to be fixed by Google Play. Please
turn to Google Play — Help — Contact Us and report the issue there so
Google can fix it. (The issue happens only for some devices and Android
versions.)
