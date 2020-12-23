---
title: How to Compile the Android Version
versions: '*'
---
# How to Compile the Android Version

First of all you need to setup development environment, see corresponding description.

Specify the environment variables and install the software (check [build.gradle](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/build.gradle#L32)):
* ANDROID_SDK = path to android sdk (currently compileSdkVersion, buildToolsVersion 27)
* ANDROID_NDK = path to android ndk (currently android-ndk-r17b")

ANDROID_SDK and ANDROID_HOME are where Android studio places things:  
<pre>
export ANDROID_SDK=/[your-path]/Android/sdk  
export ANDROID_NDK=/[your-path]/android-ndk-r17b  
export ANDROID_HOME=/[your-path]/Library/Android/sdk
</pre>

You can also use our [debug.keystore](https://github.com/osmandapp/Osmand/tree/master/keystores) to make builds compatible with the nightly build.
* ** Get the source code:** `repo init -u https://github.com/osmandapp/OsmAnd-manifest -m readonly.xml && repo sync`
* **Gradle**: `cd android/OsmAnd && ../gradlew cleanNoTranslate assembleFreedevLegacyFatDebug`
* **Android Studio**: `import android project` and choose flavor `assembleFreedevLegacyFatDebug`.
