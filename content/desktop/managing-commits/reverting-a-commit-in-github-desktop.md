---
title: Reverting a commit in GitHub Desktop
shortTitle: Reverting a commit
intro: 'You can use {% data variables.product.prodname_desktop %} to revert a specific commit to remove its changes from your branch.'
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit-in-github-desktop
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
---
When you revert to a previous commit, the revert is also a commit. The original commit also remains in the repository's history.

> [!TIP]
> When you revert multiple commits, it's best to revert in order from newest to oldest. If you revert commits in a different order, you may see merge conflicts.

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}

## Further reading

* [AUTOTITLE](/desktop/managing-commits/options-for-managing-commits-in-github-desktop)
- name: Attest Build Provenance
  uses: actions/attest-build-provenance@v2.3.0
  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fortress-admin-portal/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── analytics.js
├── functions/
│   └── firebase-admin.js
├── firebase.json
└── README.md<!DOCTYPE html>
<html>
<head>
  <title>Fortress Admin</title>
  <link rel="stylesheet" href="styles.css">
  <script defer src="analytics.js"></script>
</head>
<body>
  <div class="login-container">
    <h1>Welcome to Fortress</h1>
    <button onclick="signIn()">Admin Login</button>
  </div>
</body>
</html><?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>API_KEY</key>
	<string>AIzaSyBZ9FnqlhJFPXfLqEbUTx-dHF1Y4WcMDSA</string>
	<key>GCM_SENDER_ID</key>
	<string>734067921066</string>
	<key>PLIST_VERSION</key>
	<string>1</string>
	<key>BUNDLE_ID</key>
	<string>Fortress.org</string>
	<key>PROJECT_ID</key>
	<string>fortress-7a7ec</string>
	<key>STORAGE_BUCKET</key>
	<string>fortress-7a7ec.firebasestorage.app</string>
	<key>IS_ADS_ENABLED</key>
	<false></false>
	<key>IS_ANALYTICS_ENABLED</key>
	<false></false>
	<key>IS_APPINVITE_ENABLED</key>
	<true></true>
	<key>IS_GCM_ENABLED</key>
	<true></true>
	<key>IS_SIGNIN_ENABLED</key>
	<true></true>
	<key>GOOGLE_APP_ID</key>
	<string>1:734067921066:ios:396ead8a94105588c280d3</string>
</dict>
</plist>{ "name": "Firebase", "version": "11.13.0", "summary": "Firebase", "description": "Simplify your app development, grow your user base, and monetize more effectively with Firebase.", "homepage": "https://firebase.google.com", "license": { "type": "Apache-2.0", "file": "LICENSE" }, "authors": "Google, Inc.", "source": { "git": "https://github.com/firebase/firebase-ios-sdk.git", "tag": "CocoaPods-11.13.0.nightly" }, "preserve_paths": [ "CoreOnly/CHANGELOG.md", "CoreOnly/NOTICES", "CoreOnly/README.md" ], "social_media_url": "https://twitter.com/Firebase", "platforms": { "ios": "12.0", "osx": "10.15", "tvos": "13.0" }, "cocoapods_version": ">= 1.12.0", "swift_versions": "5.9", "default_subspecs": "Core", "subspecs": [ { "name": "Core", "platforms": { "ios": "12.0", "osx": "10.15", "tvos": "13.0" }, "ios": { "dependencies": { "FirebaseAnalytics": [ "~> 11.13.0" ] } }, "osx": { "dependencies": { "FirebaseAnalytics": [ "~> 11.13.0" ] } }, "tvos": { "dependencies": { "FirebaseAnalytics": [ "~> 11.13.0" ] } }, "dependencies": { "Firebase/CoreOnly": [ ] } }, { "name": "CoreOnly", "dependencies": { "FirebaseCore": [ "~> 11.13.0" ] }, "source_files": "CoreOnly/Sources/Firebase.h", "preserve_paths": "CoreOnly/Sources/module.modulemap", "user_target_xcconfig": { "HEADER_SEARCH_PATHS": "$(inherited) ${PODS_ROOT}/Firebase/CoreOnly/Sources" }, "platforms": { "ios": "12.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "Analytics", "platforms": { "ios": "12.0", "osx": "10.15", "tvos": "13.0" }, "dependencies": { "Firebase/Core": [ ] } }, { "name": "AnalyticsWithAdIdSupport", "platforms": { "ios": "12.0", "osx": "10.15", "tvos": "13.0" }, "dependencies": { "Firebase/Core": [ ] } }, { "name": "AnalyticsWithoutAdIdSupport", "platforms": { "ios": "12.0", "osx": "10.15", "tvos": "13.0" }, "dependencies": { "FirebaseAnalytics/WithoutAdIdSupport": [ "~> 11.13.0" ], "Firebase/CoreOnly": [ ] } }, { "name": "ABTesting", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseABTesting": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "AppDistribution", "dependencies": { "Firebase/CoreOnly": [ ] }, "ios": { "dependencies": { "FirebaseAppDistribution": [ "~> 11.13.0-beta" ] } }, "platforms": { "ios": "13.0" } }, { "name": "AppCheck", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseAppCheck": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "Auth", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseAuth": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "Crashlytics", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseCrashlytics": [ "~> 11.13.0" ] }, "platforms": { "ios": "12.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "Database", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseDatabase": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "DynamicLinks", "dependencies": { "Firebase/CoreOnly": [ ] }, "ios": { "dependencies": { "FirebaseDynamicLinks": [ "~> 11.13.0" ] } }, "platforms": { "ios": "13.0" } }, { "name": "Firestore", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseFirestore": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0" } }, { "name": "Functions", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseFunctions": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "InAppMessaging", "dependencies": { "Firebase/CoreOnly": [ ] }, "ios": { "dependencies": { "FirebaseInAppMessaging": [ "~> 11.13.0-beta" ] } }, "tvos": { "dependencies": { "FirebaseInAppMessaging": [ "~> 11.13.0-beta" ] } }, "platforms": { "ios": "13.0", "tvos": "13.0" } }, { "name": "Installations", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseInstallations": [ "~> 11.13.0" ] } }, { "name": "Messaging", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseMessaging": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "MLModelDownloader", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseMLModelDownloader": [ "~> 11.13.0-beta" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "Performance", "dependencies": { "Firebase/CoreOnly": [ ] }, "ios": { "dependencies": { "FirebasePerformance": [ "~> 11.13.0" ] } }, "tvos": { "dependencies": { "FirebasePerformance": [ "~> 11.13.0" ] } }, "platforms": { "ios": "13.0", "tvos": "13.0" } }, { "name": "RemoteConfig", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseRemoteConfig": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } }, { "name": "Storage", "dependencies": { "Firebase/CoreOnly": [ ], "FirebaseStorage": [ "~> 11.13.0" ] }, "platforms": { "ios": "13.0", "osx": "10.15", "tvos": "13.0", "watchos": "7.0" } } ], "swift_version": "5.9" }Analytics Accounts

Default Account for Firebase

354056602
Fortress

IDs: 

G-STRVRPV29Y, GT-WP447C5J

<script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/autoblocking/02115ca402fdf.js" data-cmp-host="b.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="16"></script>[![Firebase Deploy](https://github.com/aqsa326/fortress-public-launch-kit/actions/workflows/codeql.yml/badge.svg?branch=main&event=public)](https://github.com/aqsa326/fortress-public-launch-kit/actions/workflows/codeql.yml)
