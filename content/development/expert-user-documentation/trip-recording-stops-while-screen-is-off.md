---
title: Trip recording stops while screen is off
intro: 'Strategies and settings to avoid background trip recording being interrupted or killed.'
versions: '*'
---

If you experience this,
* (1) check if not the corresponding setting 'Prevent standalone logging' is active in OsmAnd's settings under Plugin/Trip recording.
* (2) update OsmAnd to 3.4 or higher. Different Android versions apply different strategies to reduce power consumption [by killing apps running in the background](https://dontkillmyapp.com/). New versions of Android therefore deploy a Foreground service while recording a trip, visible in the Android notification bar, in an effort to keep the app active.

If you still experience issues, for some constellations this works:
* (3) In your **Android's** Power or Power Savings setting, white-list OsmAnd to not being optimized: In **Android's** 'Apps', 'Applications', or 'App Manager' settings, find OsmAnd and tap it. You may find a line item regarding 'Power Savings' or 'Power Consumption': Tap it and exempt OsmAnd from power optimization measures.
* (4) Disable the Android Power Saving on your device, this often helps for older Android versions

## **Tested Settings for Android 9 and 10, Hardy, 2020-08-25:**
* (5) I have successfully tested the following Power saving settings under Android 9 and 10 (on Samsung devices), with particular attention if OsmAnd logging works reliably:
  * **Device care / Battery:**
    * Power mode = Optimized
    * Adaptive power saving = OFF (leaving ON may periodically use Medium power saving which inhibits OsmAnd logging)
  * **Device care / Battery / App Power Management (under And9 called 'Settings'):**
    * Adaptive battery = ON (candidate for 'OFF', but no problem detected so far)
    * Put unused apps to sleep = OFF (check list of sleeping apps)
    * Auto disable unused apps = OFF (seems not to exist anymore in And10)
    * Optimize settings = OFF (in And10 under Device care / Advanced)
  * **Device Care / Advanced:**
    * Notifications = ON
    * Auto optimization = ON
    * Auto restart = OFF
    * Optimize Settings = OFF
  * **Apps / ... / Special access / Optimize battery usage / All** = Leave all unchanged (looks like OsmAnd does not need to have Battery optimization disabled here)
