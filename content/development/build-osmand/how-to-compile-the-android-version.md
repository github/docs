---
title: How to Compile the Android Version
versions: '*'
---

1. First setup the **development environment**, see {% link /setup-the-dev-environment %}.
2. **Gradle** (command line):
    -  Specify  **environment variables**.   ANDROID_SDK and ANDROID_HOME are where Android studio places things:
    ```
    export ANDROID_SDK=/[your-path]/Android/sdk
    export ANDROID_NDK=/[your-path]/android-ndk-r17b
    export ANDROID_HOME=/[your-path]/Android/sdk
    ```
    - Compile with command line 
    ```
    cd android/OsmAnd && ../gradlew assembleNightlyFreeLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 import android project and run module flavor `android.OsmAnd`
 ```
4. You may use our [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) to make builds compatible with the nightly build.


# Gradle tasks / flavors

Gradle task **assembleNightlyFreeLegacyFatDebug** will produce apk at *android/OsmAnd/build/outputs/apk/* *nightlyFreeLegacyFat/debug/OsmAnd-nightlyFree-legacy-fat-debug.apk*. Task name *assembleNightlyFreeLegacyFatDebug* consists of :
- assemble - standard task to build apk
- nightlyFree - build flavor described below
- legacy - legacy / opengl / opengldebug - defines whether produced apk will have native libraries to use opengl map rendering or not. More information in Development plugin.
- fat - fat (all native targets) / armv7 / arm64 / x86 / armonly - select which native libraries will be inside apk.
- debug - debug / release - standard task

To build bundle you could use **bundle${FLAVOR}LegacyFatRelease**.


| Flavor |  Package | Description
|:--------|:---------------|:---------------|
| nightlyFree | net.osmand.dev | Nightly free build that could be installed next to both of GPlay versions for testing and exploring needs
| androidFull | net.osmand.plus | Full OsmAnd~ version could be used for F-Droid builds. Doesn't use GooglePlay services.
| amazonFree | net.osmand | Amazon OsmAnd - doesn't use GooglePlay services 
| amazonFull | net.osmand.plus | Amazon OsmAnd+ - doesn't use GooglePlay services
| gplayFree | net.osmand | Google Play OsmAnd version - uses GooglePlay services.
| gplayFull | net.osmand.plus | Google Play OsmAnd+ version - uses GooglePlay services.
| huawei | net.osmand | Special build for Huawei market - uses Huawei services but not Google Play
