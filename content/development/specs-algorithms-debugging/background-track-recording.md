# Background Track Recording - Strategies and Known Issues
This article addresses our GPS track recording. *'Background'* refers to the OsmAnd app not being displayed in the foreground, in particular when the device screen is off.
The following issues have been observed over time in different Android versions:

## (A) The system may kill background apps to save power
Starting with Android 4.4 (or maybe before), new Android power saving options limit CPU max speed, screen brightness, and may kill running apps. Mitigations:
- (A1) For outdoor use (screen brightness), map rendering (CPU limit), and 'background' track recording I like none of these power saving features and usually turn the device (Android) power saving to entirely off.
- (A2) On some systems it may be sufficient to just exempt the OsmAnd app from power optimization, your mileage may vary. ([Issue \#5255](https://github.com/osmandapp/Osmand/issues/5255))
- (A3) Android 8 introduced a new Foreground service in connection with a system notification. Ever since OsmAnd v3.2 we use this foreground service which should also solve the issue, but only for Android 8+. (Issues [\#5255](https://github.com/osmandapp/Osmand/issues/5255), [\#5587](https://github.com/osmandapp/Osmand/issues/5587)). Read more - [Dontkillmyapp](https://dontkillmyapp.com/)

## Update December 2020
Subsequent statements (B) and (C) are now outdated, GPS Wake-Up has been removed from our code (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)). Track recording will keep GPX on continuously via an Android foreground service.

## <del>(B) GPS Wake-up Strategy</del>
- (B1) While OsmAnd is used for e.g. Navigation: We keep the system's GPS module on all the time, as continuous location information is key here. Effect on battery use (order of magnitude) seems about 5% per hour on older systems up to Android 4.4, 2-3% for newer systems.
- (B2) For 'background' track recording without concurrent navigation: For recording intervals up to 15sec, we also keep the GPS on, no big battery saving can be achieved by other strategies.
- (B3) For intervals \>=30sec, we turn GPS on only for each sampling point. This has some noticeable effect on the accuracy of the points recorded, but reduces battery usage to order-of-magnitude 1.2% per hour for 30sec track recording.

## <del>(C) GPS Wake-up Issues</del>
In order to achieve the GPS wake-up, so far we use the Android AlarmManger to wake up the device periodically (also from Doze mode, which was introduced in Android 6). New Android versions introduced the following issues:
- **(C1) AlarmManager's setRepeating() became inexact starting with Android 4.4:**  
Mitigation: We now use *setRepeating()* only up to Android 4.2, the new *setExact()* method starting with Android 4.4, and *setExactAndAllowWhileIdle()* for Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(C2) Starting from Android 4.4, systems limit the number of times *setExact()* is executed repeatedly** to e.g. once per 5 or even 15 minutes. (The actual value seems wildly device specific.)  
No good solution found for now. Current mitigation is we do not use AlarmManager wake-up, instead keep GPS always on for background track logging on devices with Android 5+ for all recording intervals shorter than 5 minutes. This produces reliable and precise tracks at the cost of the higher battery use. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
