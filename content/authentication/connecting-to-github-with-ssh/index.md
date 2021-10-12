---Docs Releases Blog Apps Governance Community 
Search
  English
Black Lives Matter. Support the Equal Justice Initiative and read our statement here.
Stable Releases
Electron 15.1.2 October 08, 2021 (4 days ago) 
Fixes
Fixed an potential crash in WebContents::MessageTo when a render frame has been destroyed. #31334
Fixed issue where non-resizable frameless windows aren't draggable. #31299 (Also in 14, 16)
Other Changes
Backported fix for 1251688. #31297
Updated Chromium to 94.0.4606.71. #31234
Electron 15.1.1 October 04, 2021 (a week ago) 
Fixes
Fixed "Failed to serialize arguments" error when emitting 'context-menu' event for webview. #31279
Removed expired DST Root CA X3 from the bundled trust store. #31219
Electron 15.1.0 October 01, 2021 (2 weeks ago) 
Features
Added WebHID support. #31095 (Also in 16)
Added frame property to the params object of the 'context-menu' event. #31057
Added isMainFrame argument to 'certificate-error' event. #31038
Added textWidth option to dialog.showMessageBox() / dialog.showMessageBoxSync(). #31088 (Also in 16)
Fixes
Fixed Let's Encrypt DST Root CA X3 certificate expiration. #31218 (Also in 12, 13, 14, 16)
Fixed a crash in navigator.fonts.query(). #30985 (Also in 14)
Fixed an issue where BrowserView dragging behavior was inconsistent with MacOS window dragging. #31177 (Also in 13, 14, 16)
Fixed an issue where button labels in file choosers were improperly localized on Linux. #31066 (Also in 14, 16)
Fixed an issue where changes to draggable regions in a BrowserWindow incorrectly affected those in an attached BrowserView. #31198 (Also in 13, 14, 16)
Fixed an issue where non-resizable non-fullscreenable windows with aspect ratios set could return incorrect results for isMaximized(). #31041 (Also in 13, 14)
Fixed an issue where out-of-focus BrowserViews could not be immediately dragged. #31100 (Also in 13, 14, 16)
Fixed an issue where some calls to crypto.createPrivateKey made with algorithms unsupported by BoringSSL cause a crash when invoking methods on their return values. #31137 (Also in 16)
Fixed black border around the page after resizing is disabled. #31081 (Also in 13, 14, 16)
Fixed crash caused by double free when destroying WebContents. #31133 (Also in 14, 16)
Fixed crash in v8 due to (Check failed: !regexp_stack_-&gt;is_in_use()). #31144 (Also in 13, 14, 16)
Other Changes
Updated Chromium to 94.0.4606.61. #31112
Electron 15.0.0 September 21, 2021 (3 weeks ago) 
Stack Upgrades
Chromium 94.0.4606.51.
New in 94
Node v16.5.0.
16.5.0
16.4.2
16.4.1
16.4.0
16.3.0
16.2.0
16.1.0
16.0.0
15 ChangeLog
14 ChangeLog
V8
v9.4 blog post
Breaking Changes
nativeWindowOpen: true is now the default. #28552
Features
Additions
Added 'dom-ready' event to WebFrameMain which emits when the frame's document is ready.
Added 'frame-created' event to WebContents which emits when a frame is created in the page. #30801
Added <webview>.sendToFrame() / frameId to 'ipc-message' event. #30704
Added <webview> 'did-redirect-navigation' event. #30664
Added app.configureHostResolver API for configuring DNS-over-HTTPS. #30775
Added location and modifiers to the event properties provided in the 'before-input-event' WebContents event. #29850
Added safeStorage string encryption API. #30430
Added signal option to dialog.showMessageBox. #26102
Added webContents.fromDevToolsTargetId(targetId) to lookup a WebContents instance from an associated Chrome DevTools Protocol TargetID. #30733 (Also in 14)
Added an Electron Fuse for enforcing code signatures on the app.asar file your application loads. Requires the latest asar module. #30900
Added experimental cookie encryption support behind an Electron Fuse. #27524 (Also in 13, 14)
Added fuses to disable NODE_OPTIONS and --inspect debug arguments in packaged apps. #30420
Added missing resourceType conversions for webRequest listener details: font, ping, cspReport, media, webSocket. #29902 (Also in 14)
Added new MenuItem.userAccelerator property to read user-assigned macOS accelerator overrides. #26682
Added new app.runningUnderARM64Translation property to detect when running under Rosetta on Apple Silicon, or WOW on Windows for ARM. #29168
Added new imageAnimationPolicy web preference to control how images are animated. #29095
Added resize edge info to BrowserWindow's will-resize event. #29199
Added support for Windows Control Overlay on Windows. #30497 (Also in 14)
Added support for Windows Control Overlay on macOS. #29253 (Also in 14)
Added support for debug URLs such as chrome://gpucrash. #29404 (Also in 13, 14)
Added support for directing Chromium logging to a file with --log-file=.../path/to/file.log. Also, it's now possible to enable logging from JavaScript by appending command-line switches during the first JS tick. #25089 (Also in 14)
Added support for sending Blobs over the context bridge. #29247
Improvements
Extended continue-activity event API to support webpageURL property from NSUserActivity. #30042
Fixes
Fixed a crash when selecting and opening files in a native file dialog on Mac. #30936
Fixed a crash when selecting files in a native file dialog on Windows and Linux. #30927
Fixed an issue where GDK_BACKEND was being propagated to subprocesses on Linux. #28898
Fixed potential crash when programmatically closing a draggable frameless child window. #31027
Fixed typescript export definitions such that not-exported values are not declared in the exports interface. #28712
Installing the electron package on an M1 macbook while using an x64 version of node will now automatically download the arm64 version of Electron instead of the x64 version. #29953
Also in earlier versions....
Electron Fuses are now in a consistent order across platforms. #29599 (Also in 13, 14)
Fixed an issue where fs.promises.readFile would improperly error when passing a FileHandle to the path argument. #29528 (Also in 12, 13, 14)
Fixed BrowserWindow's backgroundColor option not having an effect. #30777 (Also in 14)
Fixed CORS preflight request always being cancelled when connecting via proxy requiring authentication for apps that had registered WebRequest listeners. #29266 (Also in 12, 13, 14)
Fixed documentEdited status not updating close button for frameless window on macOS. #30392 (Also in 13, 14)
Fixed requestFullscreen inside webview does not make the element take fullscreen. #29952 (Also in 12, 13, 14)
Fixed select-bluetooth-device firing on Windows. #29591 (Also in 12, 13, 14)
Fixed a crash in the repl when SharedArrayBuffer is disabled. #30483 (Also in 14)
Fixed a crash when process.exit is called and nativeWindowOpen is enabled. #30238 (Also in 14)
Fixed a crash when calling the webContents.on('login') callback synchronously. #30068 (Also in 12, 13, 14)
Fixed a hang when denying a window.open using setWindowOpenHandler when nativeWindowOpen: false. #29851 (Also in 12, 13, 14)
Fixed a potential crash that would occur with draggable regions on Windows. #30328 (Also in 13, 14)
Fixed a potential crash when calling app.quit() on macOS. #29941 (Also in 12, 13, 14)
Fixed a potential crash when setting vibrancy on macOS. #29677 (Also in 13, 14)
Fixed an issue on Mac where an application could not capture its own window using the desktop capture or getMediaSourceId APIs. #30525 (Also in 13, 14)
Fixed an issue on Windows where empty console windows were appearing when --enable-logging was present. #30386 (Also in 14)
Fixed an issue present in webView where the leave-html-full-screen event is not emitted if the user exits fullscreen with esc instead of by clicking into the webView. #30562 (Also in 12, 13, 14)
Fixed an issue where BrowserWindows would not properly honor transparency: true or a backgroundColor being set in their constructor options. #30136 (Also in 14)
Fixed an issue where Electron would sometimes not honor the user-defined Downloads directory. #29938 (Also in 12, 13, 14)
Fixed an issue where BrowserView webContents would appear not to load in some circumstances. #30336 (Also in 14)
Fixed an issue where self.module.paths wouldn't work in Workers. #29955 (Also in 12, 13, 14)
Fixed an issue where a specified aspect ratio could become incorrect when maximizing a window on macOS. #30332 (Also in 12, 13, 14)
Fixed an issue where background color would not be correctly applied to BrowserViews on Windows when either the x or y coordinate is negative (off-screen). #30542 (Also in 13, 14)
Fixed an issue where custom traffic lights could be covered by BrowserViews on macOS. #29595 (Also in 13, 14)
Fixed an issue where draggable regions sometimes did not work properly when DevTools is open. #29696 (Also in 12, 13, 14)
Fixed an issue where dropdown menus did not work in DevTools when contextIsolation was enabled. #29841 (Also in 13, 14)
Fixed an issue where multiple calls toBrowserWindow.setResizable() can cause the zoom button to incorrectly be disabled on macOS. #31014 (Also in 14)
Fixed an issue where request headers were cleared if the optional "requestHeaders" parameter was not included in the webRequest.onBeforeSendHeaders callback response object. #29798 (Also in 12, 13, 14)
Fixed an issue where right-clicking in the devtools console throws an error. #29436 (Also in 14)
Fixed an issue where the TouchBarScrubber crashes when showArrowButtons is enabled if items is an empty array. #30681 (Also in 13, 14)
Fixed an issue where the setAlwaysOnTop value would sometimes not be preserved for child windows on macOS. #29813 (Also in 12, 13, 14)
Fixed an issue where the traffic lights would get double-drawn when exiting fullscreen and adding a BrowserView on macOS. #30114 (Also in 13, 14)
Fixed an issue where the user-data directory was incorrect in unpackaged apps. #30113 (Also in 14)
Fixed an issue where toggling documentEdited status on macOS with titlebarStyle: 'hiddenInset' inadvertently moves the traffic light location. #30604 (Also in 13, 14)
Fixed an issue where undocked devtools was not resizable on Windows. #30848 (Also in 14)
Fixed an issue with PDF loading on Windows, where metadata was not loading correctly and causing the PDF to load as a blank page. #29827 (Also in 13, 14)
Fixed beta-only bug that caused mouse clicks to not be processed in frameless windows. #30460 (Also in 14)
Fixed crash when clicking links with target=_blank from webview. #29874 (Also in 12, 13, 14)
Fixed crashes in debug builds caused by microtasks policy mismatch. #29531 (Also in 12, 13, 14)
Fixed crashes on latest gen Intel and Ryzen processors. #29689 (Also in 14)
Fixed crashes on macOS when Geolocation was used. #29913 (Also in 13, 14)
Fixed frameless window having wrong traffic lights position on macOS 11. #30270 (Also in 13, 14)
Fixed hover state not clear bug when BrowserWindow is not resizable. #29721 (Also in 12, 13, 14)
Fixed issue where the update permission prompt would cause 100% CPU spin while the prompt was open. #29791 (Also in 13, 14)
Fixed key window status on mac when opening panels or using custom window switchers. #29857 (Also in 12, 14)
Fixed media key globalShortcuts on macOS. #30570 (Also in 14)
Fixed memory leak when creating notification on macOS. #29990 (Also in 12, 13, 14)
Fixed memory leak when requesting files in ASAR archive from renderer. #29293 (Also in 12, 13, 14)
Fixed missing 'fetch' event in service workers for requests using a registered protocol. #29425 (Also in 12, 13, 14)
Fixed page title not being updated on child windows without navigation entries under nativeWindowOpen. #29946 (Also in 12, 13, 14)
Fixed potential corruption of piped response data when using interceptHttpProtocol/registerHttpProtocol. #29567 (Also in 11, 12, 13, 14)
Fixed pressing Alt with mouse click results in toggling menu bar. #29318 (Also in 12, 13, 14)
Fixed pressing ESC not exiting fullscreen from webview. #30063 (Also in 12, 13, 14)
Fixed pressing Alt+Shift and Alt+Ctrl toggling menu bar on KDE. #29328 (Also in 12, 13, 14)
Fixed rare crash in UpdateDraggableRegions. #30558 (Also in 13, 14)
Fixed redirects between locations in custom protocols. #29796 (Also in 14)
Fixed sending intermediate certificates with 'select-client-certificate' event callback. #29552 (Also in 12, 13, 14)
Fixed shifted character getting changed in menu accelerator. #29202 (Also in 12, 13, 14)
Fixed some console messages still being printed to logs when the LogJsConsoleMessages feature was disabled. #30356 (Also in 14)
Fixed stack overflow crash in v8 on windows 32-bit builds. #30243 (Also in 12, 13, 14)
Fixed systemPreferences.getSystemColor returning colors missing alpha values. #30055 (Also in 13, 14)
Fixed the 'did-fail-load' event not being emitted when the 'certificate-error' handler allowed an error through. #29826 (Also in 14)
Fixed the <select> element dropdown not appearing on Windows or Linux. #29742 (Also in 14)
Fixed the color select eyedropper not working within DevTools. #29729 (Also in 13, 14)
Fixed the spelling of 'attachment' in 'Content-Disposition' header when using the webRequest module. #29621 (Also in 12, 13, 14)
Fixed titlebar showing under simple fullscreen mode. #30708 (Also in 13, 14)
Fixed transparent frameless windows having an opaque background when opened in a maximized state. #30865 (Also in 12, 13, 14)
Fixed tray.setTitle not respecting ANSI colors if a font type was specified. #30146 (Also in 13, 14)
Other Changes
Backported fix for 1216190. #30084 (Also in 12, 13, 14)
Fixed app.getPath('logs') returning the wrong path on Linux and Windows. #29649 (Also in 14)
Fixed a feature flag issue where spellchecker methods returned empty suggestion lists on Windows. #29690 (Also in 13, 14)
Web Serial API is no longer experimental. #30334 (Also in 14)
Documentation
Documentation changes:
#29342 - development/build-instructions-windows
#29380 - tutorial/launch-app-from-url-in-another-app
#29384 - introduction
#29385 - tutorial/tray
#29426
#29551 - api/window-open
#30121 - tutorial/support
#30851 - api/webview-tag
Continuing Support for 12.x.y
As per Electron's new 8-week cadence, we will be extending our supported version policy from the latest three versions to the latest four versions of Electron until May 2022, with the release of Electron 19. After Electron 19 is released, we'll return to supporting the latest three major versions, as well as the beta and nightly releases.

E15 (Sep'21)	E16 (Nov'21)	E17 (Feb'22)	E18 (Mar'22)	E19 (May'22)
15.x.y	16.x.y	17.x.y	18.x.y	19.x.y
14.x.y	15.x.y	16.x.y	17.x.y	18.x.y
13.x.y	14.x.y	15.x.y	16.x.y	17.x.y
12.x.y	13.x.y	14.x.y	15.x.y	--
Electron 14.1.1 October 08, 2021 (3 days ago) 
Fixes
Fixed issue where non-resizable frameless windows aren't draggable. #31298 (Also in 15, 16)
Removed expired DST Root CA X3 from the bundled trust store. #31221
Other Changes
Security: backported fix for CVE-2021-37967. #31242
Security: backported fix for CVE-2021-37968. #31245
Security: backported fix for CVE-2021-37970. #31239
Security: backported fix for CVE-2021-37975. #31227
Security: backported fix for chromium:1248665. #31235
Show Releases:
Stable Releases
Regular, supported releases

Beta Releases
Test your app with upcoming changes

Alpha Releases
Test features slightly more on the edge

Nightly Releases
Experiment with the latest features

Show Only Releases From:
All Versions
v15.x
v14.x
v13.x
v12.x
v11.x
v10.x
v9.x
v8.x
v7.x
v6.x
v5.x
v4.x
v3.x
v2.x
v1.x
v0.x
        
All Releases Back to index
 
Electron
Docs
Releases
Blog
Apps
Governance
Community
Code of Conduct
License
Security
Donors
Languages
Contact
OpenJS Foundation
Copyright OpenJS Foundation and Electron contributors. All rights reserved. The OpenJS Foundation has registered trademarks and uses trademarks. For a list of trademarks of the OpenJS Foundation, please see our Trademark Policy and Trademark List. Trademarks and logos not indicated on the list of OpenJS Foundation trademarks are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.

The OpenJS Foundation | Terms of Use | Privacy Policy | OpenJS Foundation Bylaws | Trademark Policy | Trademark List | Cookie Policy
title: Connecting to GitHub with SSH
intro: 'You can connect to {% data variables.product.product_name %} using the Secure Shell Protocol (SSH), which provides a secure channel over an unsecured network.'
redirect_from:
  - /key-setup-redirect/
  - /linux-key-setup/
  - /mac-key-setup/
  - /msysgit-key-setup/
  - /articles/ssh-key-setup/
  - /articles/generating-ssh-keys/
  - /articles/generating-an-ssh-key/
  - /articles/connecting-to-github-with-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - SSH
children:
  - /about-ssh
  - /checking-for-existing-ssh-keys
  - /generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /adding-a-new-ssh-key-to-your-github-account
  - /testing-your-ssh-connection
  - /working-with-ssh-key-passphrases
shortTitle: Connect with SSH
---

