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
    cd android/OsmAnd && ../gradlew cleanNoTranslate assembleFreedevLegacyFatDebug
    ```
3. **Android Studio**:
 ```
 import android project and choose flavor `assembleFreedevLegacyFatDebug`
 ```
4. You may use our [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) to make builds compatible with the nightly build.
