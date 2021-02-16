---
title: Track recording
intro: 'Common issues with track recording: interruptions while recording the track, wrong recorded data, etc'
versions: '*'
---

This article addresses OsmAnd's GPS track recording issues. **'Background'** refers to the OsmAnd app not being displayed in the foreground, in particular when the device screen is off.
Note: Since Android 11 (2020/12) there is no option "Always allow" to use location in background but this **doesn't limit** background track recording, according to Google docummentation it's considered **foreground usage** because internally foreground service permission is used and notification about track being recorded is always visible.
The following issues have been observed over time in different Android versions.

## Recorded track is not accurate

Typically there are 2 sort of issues that leads of creating messy track.
- Standing still on same place 
- Bad GPS signal and switching to network signal

Obviously it's better not to record track in bad conditions and use "Pause", also it's possible to edit messy track later and remove "noisy" points. 
**Proper solution**: use [Track settings](/osmand/plugins/trip-recording) to filter "noisy" points based on your **experience** and **recording device**. You can filter out points by various criteria: 
- Points without speed
- Points with bad precision (GPS hdoop)
- Points closer than a threshold in meters

## The system may kill background apps to save power
Starting with Android 4.4 (or maybe before), new Android power saving options limit CPU max speed, screen brightness, and may kill running apps. Mitigations:
- (A1) For outdoor use (screen brightness), map rendering (CPU limit), and 'background' track recording I like none of these power saving features and usually turn the device (Android) power saving to entirely off.
- (A2) On some systems it may be sufficient to just exempt the OsmAnd app from power optimization, your mileage may vary. ([Issue \#5255](https://github.com/osmandapp/Osmand/issues/5255))
- (A3) Android 8 introduced a new Foreground service in connection with a system notification. Ever since OsmAnd v3.2 we use this foreground service which should also solve the issue, but only for Android 8+. (Issues [\#5255](https://github.com/osmandapp/Osmand/issues/5255), [\#5587](https://github.com/osmandapp/Osmand/issues/5587)). 

**Read more** - [Dontkillmyapp](https://dontkillmyapp.com/).

### Check your configuration
* Check if not the corresponding setting 'Prevent standalone logging' is active in OsmAnd's settings under Plugin/Trip recording.
* Update OsmAnd to 3.9 or higher. Different Android versions apply different strategies to reduce power consumption [by killing apps running in the background](https://dontkillmyapp.com/). New versions of OsmAnd therefore deploy a Foreground service while recording a trip, visible in the Android notification bar, in an effort to keep the app active.

**For versions prior of Android 10, try these steps**
* In your **Android's** Power or Power Savings setting, white-list OsmAnd to not being optimized: In **Android's** 'Apps', 'Applications', or 'App Manager' settings, find OsmAnd and tap it. You may find a line item regarding 'Power Savings' or 'Power Consumption': Tap it and exempt OsmAnd from power optimization measures.
* Disable the Android Power Saving on your device, this often helps for older Android versions

**Tested Settings for Android 9 and 10 (Hardy, 2020-08-25)**
I have successfully tested the following Power saving settings under Android 9 and 10 (on Samsung devices), with particular attention if OsmAnd logging works reliably:

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


## OsmAnd 3.9 - Google Play Services (Altitude issues)
Since OsmAnd 3.9 Google Play has changed their policy and in order to comply, OsmAnd had to use Google Play Services to obtain locations while running in background (as a foreground service by Android terminology - notification is always visible). Note: this change didn't affect Nightly, F-Droid, Huawei, Amazon builds. 
We've discovered that after that change there is a problem of recording altitude [Github issue related to altitude problems](https://github.com/osmandapp/OsmAnd/issues/10864), looks like Google Play Services very aggressively interpolate altitude and leads to a problem.

So far during our tests, we've noticed that **Android 11 doesn't have issue** recording altitude, but **Android 10 does have that issue**.

**Workaround**:  Use Nightly, F-Droid, Huawei, Amazon builds and switch from Google Play version. 


## OsmAnd 3.9 - GPS wakeup (2020/12)
Subsequent statements (B) and (C) are now outdated, GPS Wake-Up has been removed from our code (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)). The changes are related to new Google Play restrictions on Background location access: Since OsmAnd doesn't want to access any location in background and doesn't need that permission, we were forced to delete that doze method anyway.
Track recording will keep GPX on continuously via an Android foreground service. 

**<del> GPS Wake-up Strategy</del>**
- (B1) While OsmAnd is used for e.g. Navigation: We keep the system's GPS module on all the time, as continuous location information is key here. Effect on battery use (order of magnitude) seems about 5% per hour on older systems up to Android 4.4, 2-3% for newer systems.
- (B2) For 'background' track recording without concurrent navigation: For recording intervals up to 15sec, we also keep the GPS on, no big battery saving can be achieved by other strategies.
- (B3) For intervals \>=30sec, we turn GPS on only for each sampling point. This has some noticeable effect on the accuracy of the points recorded, but reduces battery usage to order-of-magnitude 1.2% per hour for 30sec track recording.

**<del> GPS Wake-up Issues</del>**
In order to achieve the GPS wake-up, so far we use the Android AlarmManger to wake up the device periodically (also from Doze mode, which was introduced in Android 6). New Android versions introduced the following issues:
- **(C1) AlarmManager's setRepeating() became inexact starting with Android 4.4:**  
Mitigation: We now use *setRepeating()* only up to Android 4.2, the new *setExact()* method starting with Android 4.4, and *setExactAndAllowWhileIdle()* for Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(C2) Starting from Android 4.4, systems limit the number of times *setExact()* is executed repeatedly** to e.g. once per 5 or even 15 minutes. (The actual value seems wildly device specific.)  
No good solution found for now. Current mitigation is we do not use AlarmManager wake-up, instead keep GPS always on for background track logging on devices with Android 5+ for all recording intervals shorter than 5 minutes. This produces reliable and precise tracks at the cost of the higher battery use. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))

