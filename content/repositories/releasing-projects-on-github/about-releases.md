-=-- -"diff --git a/atom/browser/native_window_views.cc b/atom/browser/native_window_views.cc
index ef5ae30a8405..8e9e434d5a90 100644
--- a/atom/browser/native_window_views.cc
+++ b/atom/browser/native_window_views.cc
@@ -138,7 +138,7 @@ NativeWindowViews::NativeWindowViews(
       menu_bar_visible_(false),
       menu_bar_alt_pressed_(false),
 #if defined(OS_WIN)
-      enabled_a11y_support_(false),
+      checked_for_a11y_support_(false),
       thick_frame_(true),
 #endif
       keyboard_event_handler_(new views::UnhandledKeyboardEventHandler),
diff --git a/atom/browser/native_window_views.h b/atom/browser/native_window_views.h
index d0d45fc53594..6118e2f9e373 100644
--- a/atom/browser/native_window_views.h
+++ b/atom/browser/native_window_views.h
@@ -18,6 +18,8 @@
 #include "atom/browser/ui/win/message_handler_delegate.h"
 #include "atom/browser/ui/win/taskbar_host.h"
 #include "base/win/scoped_gdi_object.h"
+#include "ui/base/win/accessibility_misc_utils.h"
+#include <UIAutomationCoreApi.h>
 #endif
 
 namespace views {
@@ -228,8 +230,8 @@ class NativeWindowViews : public NativeWindow,
   // In charge of running taskbar related APIs.
   TaskbarHost taskbar_host_;
 
-  // If true we have enabled a11y
-  bool enabled_a11y_support_;
+  // Memoized version of a11y check
+  bool checked_for_a11y_support_;
 
   // Whether to show the WS_THICKFRAME style.
   bool thick_frame_;
diff --git a/atom/browser/native_window_views_win.cc b/atom/browser/native_window_views_win.cc
index bb6d9858f045..85230addb0c1 100644
--- a/atom/browser/native_window_views_win.cc
+++ b/atom/browser/native_window_views_win.cc
@@ -72,6 +72,12 @@ const char* AppCommandToString(int command_id) {
   }
 }
 
+bool IsScreenReaderActive() {
+  UINT screenReader = 0;
+  SystemParametersInfo(SPI_GETSCREENREADER, 0, &screenReader, 0);
+  return screenReader && UiaClientsAreListening();
+}
+
 }  // namespace
 
 bool NativeWindowViews::ExecuteWindowsCommand(int command_id) {
@@ -91,16 +97,24 @@ bool NativeWindowViews::PreHandleMSG(
     // because we still want Chromium to handle returning the actual
     // accessibility object.
     case WM_GETOBJECT: {
+      if (checked_for_a11y_support_) return false;
+
       const DWORD obj_id = static_cast<DWORD>(l_param);
-      if (enabled_a11y_support_) return false;
-
-      if (obj_id == OBJID_CLIENT) {
-        const auto axState = content::BrowserAccessibilityState::GetInstance();
-        if (axState && !axState->IsAccessibleBrowser()) {
-          axState->OnScreenReaderDetected();
-          enabled_a11y_support_ = true;
-          Browser::Get()->OnAccessibilitySupportChanged();
-        }
+
+      if (obj_id != OBJID_CLIENT) {
+        return false;
+      }
+
+      if (!IsScreenReaderActive()) {
+        return false;
+      }
+
+      checked_for_a11y_support_ = true;
+
+      const auto axState = content::BrowserAccessibilityState::GetInstance();
+      if (axState && !axState->IsAccessibleBrowser()) {
+        axState->OnScreenReaderDetected();
+        Browser::Get()->OnAccessibilitySupportChanged();
       }
 
       return false;
diff --git a/atom/browser/resources/mac/Info.plist b/atom/browser/resources/mac/Info.plist
index bb9a9b5a6375..6c1509e3c048 100644
--- a/atom/browser/resources/mac/Info.plist
+++ b/atom/browser/resources/mac/Info.plist
@@ -17,9 +17,9 @@
   <key>CFBundleIconFile</key>
   <string>electron.icns</string>
   <key>CFBundleVersion</key>
-  <string>1.3.6</string>
+  <string>1.3.15</string>
   <key>CFBundleShortVersionString</key>
-  <string>1.3.6</string>
+  <string>1.3.15</string>
   <key>LSApplicationCategoryType</key>
   <string>public.app-category.developer-tools</string>
   <key>LSMinimumSystemVersion</key>
diff --git a/atom/browser/resources/win/atom.rc b/atom/browser/resources/win/atom.rc
index 599d8b694994..8b925d8fe7bf 100644
--- a/atom/browser/resources/win/atom.rc
+++ b/atom/browser/resources/win/atom.rc
@@ -56,8 +56,8 @@ END
 //
 
 VS_VERSION_INFO VERSIONINFO
- FILEVERSION 1,3,6,0
- PRODUCTVERSION 1,3,6,0
+ FILEVERSION 1,3,15,0
+ PRODUCTVERSION 1,3,15,0
  FILEFLAGSMASK 0x3fL
 #ifdef _DEBUG
  FILEFLAGS 0x1L
@@ -74,12 +74,12 @@ BEGIN
         BEGIN
             VALUE "CompanyName", "GitHub, Inc."
             VALUE "FileDescription", "Electron"
-            VALUE "FileVersion", "1.3.6"
+            VALUE "FileVersion", "1.3.15"
             VALUE "InternalName", "electron.exe"
             VALUE "LegalCopyright", "Copyright (C) 2015 GitHub, Inc. All rights reserved."
             VALUE "OriginalFilename", "electron.exe"
             VALUE "ProductName", "Electron"
-            VALUE "ProductVersion", "1.3.6"
+            VALUE "ProductVersion", "1.3.15"
             VALUE "SquirrelAwareVersion", "1"
         END
     END
diff --git a/atom/common/api/atom_api_v8_util.cc b/atom/common/api/atom_api_v8_util.cc
index 7b7655c6cd2e..ddb1075586c1 100644
--- a/atom/common/api/atom_api_v8_util.cc
+++ b/atom/common/api/atom_api_v8_util.cc
@@ -9,9 +9,11 @@
 #include "atom/common/api/remote_callback_freer.h"
 #include "atom/common/api/remote_object_freer.h"
 #include "atom/common/native_mate_converters/content_converter.h"
+#include "atom/common/native_mate_converters/gurl_converter.h"
 #include "atom/common/node_includes.h"
 #include "base/hash.h"
 #include "native_mate/dictionary.h"
+#include "url/origin.h"
 #include "v8/include/v8-profiler.h"
 
 namespace std {
@@ -92,6 +94,10 @@ void TakeHeapSnapshot(v8::Isolate* isolate) {
   isolate->GetHeapProfiler()->TakeHeapSnapshot();
 }
 
+bool IsSameOrigin(const GURL& l, const GURL& r) {
+  return url::Origin(l).IsSameOriginWith(url::Origin(r));
+}
+
 void Initialize(v8::Local<v8::Object> exports, v8::Local<v8::Value> unused,
                 v8::Local<v8::Context> context, void* priv) {
   mate::Dictionary dict(context->GetIsolate(), exports);
@@ -105,6 +111,7 @@ void Initialize(v8::Local<v8::Object> exports, v8::Local<v8::Value> unused,
   dict.SetMethod("createIDWeakMap", &atom::api::KeyWeakMap<int32_t>::Create);
   dict.SetMethod("createDoubleIDWeakMap",
                  &atom::api::KeyWeakMap<std::pair<int32_t, int32_t>>::Create);
+  dict.SetMethod("isSameOrigin", &IsSameOrigin);
 }
 
 }  // namespace
diff --git a/atom/common/atom_version.h b/atom/common/atom_version.h
index a27cb04a4b13..94554df10c37 100644
--- a/atom/common/atom_version.h
+++ b/atom/common/atom_version.h
@@ -7,7 +7,7 @@
 
 #define ATOM_MAJOR_VERSION 1
 #define ATOM_MINOR_VERSION 3
-#define ATOM_PATCH_VERSION 6
+#define ATOM_PATCH_VERSION 15
 
 #define ATOM_VERSION_IS_RELEASE 1
 
diff --git a/atom/renderer/api/atom_api_web_frame.cc b/atom/renderer/api/atom_api_web_frame.cc
index dd28ad7a97b3..8e6d1c15e1f3 100644
--- a/atom/renderer/api/atom_api_web_frame.cc
+++ b/atom/renderer/api/atom_api_web_frame.cc
@@ -88,10 +88,14 @@ double WebFrame::GetZoomFactor() const {
   return blink::WebView::zoomLevelToZoomFactor(GetZoomLevel());
 }
 
-void WebFrame::SetZoomLevelLimits(double min_level, double max_level) {
+void WebFrame::SetVisualZoomLevelLimits(double min_level, double max_level) {
   web_frame_->view()->setDefaultPageScaleLimits(min_level, max_level);
 }
 
+void WebFrame::SetLayoutZoomLevelLimits(double min_level, double max_level) {
+  web_frame_->view()->zoomLimitsChanged(min_level, max_level);
+}
+
 v8::Local<v8::Value> WebFrame::RegisterEmbedderCustomElement(
     const base::string16& name, v8::Local<v8::Object> options) {
   blink::WebExceptionCode c = 0;
@@ -196,7 +200,10 @@ void WebFrame::BuildPrototype(
       .SetMethod("getZoomLevel", &WebFrame::GetZoomLevel)
       .SetMethod("setZoomFactor", &WebFrame::SetZoomFactor)
       .SetMethod("getZoomFactor", &WebFrame::GetZoomFactor)
-      .SetMethod("setZoomLevelLimits", &WebFrame::SetZoomLevelLimits)
+      .SetMethod("setVisualZoomLevelLimits",
+                 &WebFrame::SetVisualZoomLevelLimits)
+      .SetMethod("setLayoutZoomLevelLimits",
+                 &WebFrame::SetLayoutZoomLevelLimits)
       .SetMethod("registerEmbedderCustomElement",
                  &WebFrame::RegisterEmbedderCustomElement)
       .SetMethod("registerElementResizeCallback",
@@ -212,7 +219,9 @@ void WebFrame::BuildPrototype(
       .SetMethod("insertText", &WebFrame::InsertText)
       .SetMethod("executeJavaScript", &WebFrame::ExecuteJavaScript)
       .SetMethod("getResourceUsage", &WebFrame::GetResourceUsage)
-      .SetMethod("clearCache", &WebFrame::ClearCache);
+      .SetMethod("clearCache", &WebFrame::ClearCache)
+      // TODO(kevinsawicki): Remove in 2.0, deprecate before then with warnings
+      .SetMethod("setZoomLevelLimits", &WebFrame::SetVisualZoomLevelLimits);
 }
 
 }  // namespace api
diff --git a/atom/renderer/api/atom_api_web_frame.h b/atom/renderer/api/atom_api_web_frame.h
index 7b2401dd4077..c2706708beab 100644
--- a/atom/renderer/api/atom_api_web_frame.h
+++ b/atom/renderer/api/atom_api_web_frame.h
@@ -45,7 +45,8 @@ class WebFrame : public mate::Wrappable<WebFrame> {
   double SetZoomFactor(double factor);
   double GetZoomFactor() const;
 
-  void SetZoomLevelLimits(double min_level, double max_level);
+  void SetVisualZoomLevelLimits(double min_level, double max_level);
+  void SetLayoutZoomLevelLimits(double min_level, double max_level);
 
   v8::Local<v8::Value> RegisterEmbedderCustomElement(
       const base::string16& name, v8::Local<v8::Object> options);
diff --git a/common.gypi b/common.gypi
index 52eba31d0aee..61946656dd84 100644
--- a/common.gypi
+++ b/common.gypi
@@ -36,6 +36,7 @@
     'node_use_perfctr': 'false',
     'node_use_v8_platform': 'false',
     'node_use_bundled_v8': 'false',
+    'node_enable_d8': 'false',
     'uv_library': 'static_library',
     'uv_parent_path': 'vendor/node/deps/uv',
     'uv_use_dtrace': 'false',
diff --git a/docs/api/web-contents.md b/docs/api/web-contents.md
index 235c044c81e5..016daa345fc6 100644
--- a/docs/api/web-contents.md
+++ b/docs/api/web-contents.md
@@ -684,7 +684,22 @@ Sends a request to get current zoom level, the `callback` will be called with
 * `minimumLevel` Number
 * `maximumLevel` Number
 
-Sets the maximum and minimum zoom level.
+**Deprecated:** Call `setVisualZoomLevelLimits` instead to set the visual zoom
+level limits. This method will be removed in Electron 2.0.
+
+#### `contents.setVisualZoomLevelLimits(minimumLevel, maximumLevel)`
+
+* `minimumLevel` Number
+* `maximumLevel` Number
+
+Sets the maximum and minimum pinch-to-zoom level.
+
+#### `contents.setLayoutZoomLevelLimits(minimumLevel, maximumLevel)`
+
+* `minimumLevel` Number
+* `maximumLevel` Number
+
+Sets the maximum and minimum layout-based (i.e. non-visual) zoom level.
 
 #### `contents.undo()`
 
diff --git a/docs/api/web-frame.md b/docs/api/web-frame.md
index 8a0e1dd6a9b1..062c3310d5d1 100644
--- a/docs/api/web-frame.md
+++ b/docs/api/web-frame.md
@@ -42,7 +42,22 @@ Returns the current zoom level.
 * `minimumLevel` Number
 * `maximumLevel` Number
 
-Sets the maximum and minimum zoom level.
+**Deprecated:** Call `setVisualZoomLevelLimits` instead to set the visual zoom
+level limits. This method will be removed in Electron 2.0.
+
+### `webFrame.setVisualZoomLevelLimits(minimumLevel, maximumLevel)`
+
+* `minimumLevel` Number
+* `maximumLevel` Number
+
+Sets the maximum and minimum pinch-to-zoom level.
+
+### `webFrame.setLayoutZoomLevelLimits(minimumLevel, maximumLevel)`
+
+* `minimumLevel` Number
+* `maximumLevel` Number
+
+Sets the maximum and minimum layout-based (i.e. non-visual) zoom level.
 
 ### `webFrame.setSpellCheckProvider(language, autoCorrectWord, provider)`
 
diff --git a/docs/tutorial/planned-breaking-changes.md b/docs/tutorial/planned-breaking-changes.md
index 896fd07000b3..525ffecb8170 100644
--- a/docs/tutorial/planned-breaking-changes.md
+++ b/docs/tutorial/planned-breaking-changes.md
@@ -76,3 +76,28 @@ webContents.openDevTools({detach: true})
 // Replace with
 webContents.openDevTools({mode: 'detach'})
 ```
+
+```js
+// Deprecated
+webContents.setZoomLevelLimits(1, 2)
+// Replace with
+webContents.setVisualZoomLevelLimits(1, 2)
+```
+
+## `webFrame`
+
+```js
+// Deprecated
+webFrame.setZoomLevelLimits(1, 2)
+// Replace with
+webFrame.setVisualZoomLevelLimits(1, 2)
+```
+
+## `<webview>`
+
+```js
+// Deprecated
+webview.setZoomLevelLimits(1, 2)
+// Replace with
+webview.setVisualZoomLevelLimits(1, 2)
+```
diff --git a/electron.gyp b/electron.gyp
index 6cf495afbc1f..26793815ace1 100644
--- a/electron.gyp
+++ b/electron.gyp
@@ -4,7 +4,7 @@
     'product_name%': 'Electron',
     'company_name%': 'GitHub, Inc',
     'company_abbr%': 'github',
-    'version%': '1.3.6',
+    'version%': '1.3.15',
   },
   'includes': [
     'filenames.gypi',
@@ -279,6 +279,7 @@
               '-lcomdlg32.lib',
               '-lwininet.lib',
               '-lwinmm.lib',
+              '-luiautomationcore.lib',
             ],
           },
           'dependencies': [
diff --git a/lib/browser/api/app.js b/lib/browser/api/app.js
index c6ad57321baa..8e7760593bde 100644
--- a/lib/browser/api/app.js
+++ b/lib/browser/api/app.js
@@ -71,7 +71,7 @@ app.allowNTLMCredentialsForAllDomains = function (allow) {
 const events = ['login', 'certificate-error', 'select-client-certificate']
 for (let name of events) {
   app.on(name, (event, webContents, ...args) => {
-    webContents.emit.apply(webContents, [name, event].concat(args))
+    webContents.emit(name, event, ...args)
   })
 }
 
diff --git a/lib/browser/api/browser-window.js b/lib/browser/api/browser-window.js
index ecfdda05f8db..703fdcbfb450 100644
--- a/lib/browser/api/browser-window.js
+++ b/lib/browser/api/browser-window.js
@@ -119,19 +119,19 @@ BrowserWindow.fromDevToolsWebContents = (webContents) => {
 // Helpers.
 Object.assign(BrowserWindow.prototype, {
   loadURL (...args) {
-    return this.webContents.loadURL.apply(this.webContents, args)
+    return this.webContents.loadURL(...args)
   },
   getURL (...args) {
     return this.webContents.getURL()
   },
   reload (...args) {
-    return this.webContents.reload.apply(this.webContents, args)
+    return this.webContents.reload(...args)
   },
   send (...args) {
-    return this.webContents.send.apply(this.webContents, args)
+    return this.webContents.send(...args)
   },
   openDevTools (...args) {
-    return this.webContents.openDevTools.apply(this.webContents, args)
+    return this.webContents.openDevTools(...args)
   },
   closeDevTools () {
     return this.webContents.closeDevTools()
@@ -146,7 +146,7 @@ Object.assign(BrowserWindow.prototype, {
     return this.webContents.toggleDevTools()
   },
   inspectElement (...args) {
-    return this.webContents.inspectElement.apply(this.webContents, args)
+    return this.webContents.inspectElement(...args)
   },
   inspectServiceWorker () {
     return this.webContents.inspectServiceWorker()
@@ -155,7 +155,7 @@ Object.assign(BrowserWindow.prototype, {
     return this.webContents.showDefinitionForSelection()
   },
   capturePage (...args) {
-    return this.webContents.capturePage.apply(this.webContents, args)
+    return this.webContents.capturePage(...args)
   }
 })
 
diff --git a/lib/browser/api/dialog.js b/lib/browser/api/dialog.js
index d24a1f98a7d8..5002c18b150e 100644
--- a/lib/browser/api/dialog.js
+++ b/lib/browser/api/dialog.js
@@ -50,7 +50,7 @@ module.exports = {
   showOpenDialog: function (...args) {
     var prop, properties, value, wrappedCallback
     checkAppInitialized()
-    let [window, options, callback] = parseArgs.apply(null, args)
+    let [window, options, callback] = parseArgs(...args)
     if (options == null) {
       options = {
         title: 'Open',
@@ -97,7 +97,7 @@ module.exports = {
   showSaveDialog: function (...args) {
     var wrappedCallback
     checkAppInitialized()
-    let [window, options, callback] = parseArgs.apply(null, args)
+    let [window, options, callback] = parseArgs(...args)
     if (options == null) {
       options = {
         title: 'Save'
@@ -130,7 +130,7 @@ module.exports = {
   showMessageBox: function (...args) {
     var flags, i, j, len, messageBoxType, ref2, ref3, text
     checkAppInitialized()
-    let [window, options, callback] = parseArgs.apply(null, args)
+    let [window, options, callback] = parseArgs(...args)
     if (options == null) {
       options = {
         type: 'none'
@@ -185,7 +185,7 @@ module.exports = {
   },
 
   showErrorBox: function (...args) {
-    return binding.showErrorBox.apply(binding, args)
+    return binding.showErrorBox(...args)
   }
 }
 
diff --git a/lib/browser/api/navigation-controller.js b/lib/browser/api/navigation-controller.js
index 33ce779521fa..0bccf0c6dcc5 100644
--- a/lib/browser/api/navigation-controller.js
+++ b/lib/browser/api/navigation-controller.js
@@ -4,13 +4,11 @@ const {ipcMain} = require('electron')
 
 // The history operation in renderer is redirected to browser.
 ipcMain.on('ELECTRON_NAVIGATION_CONTROLLER', function (event, method, ...args) {
-  var ref
-  (ref = event.sender)[method].apply(ref, args)
+  event.sender[method](...args)
 })
 
 ipcMain.on('ELECTRON_SYNC_NAVIGATION_CONTROLLER', function (event, method, ...args) {
-  var ref
-  event.returnValue = (ref = event.sender)[method].apply(ref, args)
+  event.returnValue = event.sender[method](...args)
 })
 
 // JavaScript implementation of Chromium's NavigationController.
diff --git a/lib/browser/api/web-contents.js b/lib/browser/api/web-contents.js
index 560b323d619b..53c6c0f15ff9 100644
--- a/lib/browser/api/web-contents.js
+++ b/lib/browser/api/web-contents.js
@@ -100,8 +100,11 @@ WebContents.prototype.sendToAll = function (channel, ...args) {
 // Following methods are mapped to webFrame.
 const webFrameMethods = [
   'insertText',
+  'setLayoutZoomLevelLimits',
+  'setVisualZoomLevelLimits',
   'setZoomFactor',
   'setZoomLevel',
+  // TODO(kevinsawicki): Remove in 2.0, deprecate before then with warnings
   'setZoomLevelLimits'
 ]
 const webFrameMethodsWithResult = [
@@ -234,7 +237,7 @@ WebContents.prototype._init = function () {
   // Delays the page-title-updated event to next tick.
   this.on('-page-title-updated', function (...args) {
     setImmediate(() => {
-      this.emit.apply(this, ['page-title-updated'].concat(args))
+      this.emit('page-title-updated', ...args)
     })
   })
 
diff --git a/lib/browser/guest-window-manager.js b/lib/browser/guest-window-manager.js
index 776ab91fec96..7e8bf2e5652c 100644
--- a/lib/browser/guest-window-manager.js
+++ b/lib/browser/guest-window-manager.js
@@ -1,6 +1,7 @@
 'use strict'
 
 const {BrowserWindow, ipcMain, webContents} = require('electron')
+const {isSameOrigin} = process.atomBinding('v8_util')
 
 const hasProp = {}.hasOwnProperty
 const frameToGuest = {}
@@ -86,10 +87,7 @@ const createGuest = function (embedder, url, frameName, options) {
   return guestId
 }
 
-const getGuestWindow = function (guestId) {
-  const guestContents = webContents.fromId(guestId)
-  if (guestContents == null) return
-
+const getGuestWindow = function (guestContents) {
   let guestWindow = BrowserWindow.fromWebContents(guestContents)
   if (guestWindow == null) {
     const hostContents = guestContents.hostWebContents
@@ -100,6 +98,22 @@ const getGuestWindow = function (guestId) {
   return guestWindow
 }
 
+// Checks whether |sender| can access the |target|:
+// 1. Check whether |sender| is the parent of |target|.
+// 2. Check whether |sender| has node integration, if so it is allowed to
+//    do anything it wants.
+// 3. Check whether the origins match.
+//
+// However it allows a child window without node integration but with same
+// origin to do anything it wants, when its opener window has node integration.
+// The W3C does not have anything on this, but from my understanding of the
+// security model of |window.opener|, this should be fine.
+const canAccessWindow = function (sender, target) {
+  return (target.getWebPreferences().openerId === sender.id) ||
+         (sender.getWebPreferences().nodeIntegration === true) ||
+         isSameOrigin(sender.getURL(), target.getURL())
+}
+
 // Routed window.open messages.
 ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_OPEN', function (event, url, frameName, disposition, options) {
   options = mergeBrowserWindowOptions(event.sender, options)
@@ -112,19 +126,46 @@ ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_OPEN', function (event, url, fr
 })
 
 ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_CLOSE', function (event, guestId) {
-  const guestWindow = getGuestWindow(guestId)
+  const guestContents = webContents.fromId(guestId)
+  if (guestContents == null) return
+
+  if (!canAccessWindow(event.sender, guestContents)) {
+    console.error(`Blocked ${event.sender.getURL()} from closing its opener.`)
+    return
+  }
+
+  const guestWindow = getGuestWindow(guestContents)
   if (guestWindow != null) guestWindow.destroy()
 })
 
 ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_METHOD', function (event, guestId, method, ...args) {
-  const guestWindow = getGuestWindow(guestId)
-  event.returnValue = guestWindow != null ? guestWindow[method].apply(guestWindow, args) : null
+  const guestContents = webContents.fromId(guestId)
+  if (guestContents == null) {
+    event.returnValue = null
+    return
+  }
+
+  if (!canAccessWindow(event.sender, guestContents)) {
+    console.error(`Blocked ${event.sender.getURL()} from calling ${method} on its opener.`)
+    event.returnValue = null
+    return
+  }
+
+  const guestWindow = getGuestWindow(guestContents)
+  if (guestWindow != null) {
+    event.returnValue = guestWindow[method](...args)
+  } else {
+    event.returnValue = null
+  }
 })
 
 ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_POSTMESSAGE', function (event, guestId, message, targetOrigin, sourceOrigin) {
   const guestContents = webContents.fromId(guestId)
   if (guestContents == null) return
 
+  // The W3C does not seem to have word on how postMessage should work when the
+  // origins do not match, so we do not do |canAccessWindow| check here since
+  // postMessage across origins is useful and not harmful.
   if (guestContents.getURL().indexOf(targetOrigin) === 0 || targetOrigin === '*') {
     const sourceId = event.sender.id
     guestContents.send('ELECTRON_GUEST_WINDOW_POSTMESSAGE', sourceId, message, sourceOrigin)
@@ -133,5 +174,26 @@ ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_POSTMESSAGE', function (event,
 
 ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD', function (event, guestId, method, ...args) {
   const guestContents = webContents.fromId(guestId)
-  if (guestContents != null) guestContents[method].apply(guestContents, args)
+  if (guestContents == null) return
+
+  if (canAccessWindow(event.sender, guestContents)) {
+    guestContents[method](...args)
+  } else {
+    console.error(`Blocked ${event.sender.getURL()} from calling ${method} on its opener.`)
+  }
+})
+
+ipcMain.on('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD_SYNC', function (event, guestId, method, ...args) {
+  const guestContents = webContents.fromId(guestId)
+  if (guestContents == null) {
+    event.returnValue = null
+    return
+  }
+
+  if (canAccessWindow(event.sender, guestContents)) {
+    event.returnValue = guestContents[method](...args)
+  } else {
+    console.error(`Blocked ${event.sender.getURL()} from calling ${method} on its opener.`)
+    event.returnValue = null
+  }
 })
diff --git a/lib/browser/init.js b/lib/browser/init.js
index fb1688d0cc74..56d4f0f7ae75 100644
--- a/lib/browser/init.js
+++ b/lib/browser/init.js
@@ -26,7 +26,7 @@ if (process.platform === 'win32') {
   // Redirect node's console to use our own implementations, since node can not
   // handle console output when running as GUI program.
   var consoleLog = function (...args) {
-    return process.log(util.format.apply(util, args) + '\n')
+    return process.log(util.format(...args) + '\n')
   }
   var streamWrite = function (chunk, encoding, callback) {
     if (Buffer.isBuffer(chunk)) {
diff --git a/lib/browser/objects-registry.js b/lib/browser/objects-registry.js
index 1917c65e6558..b26374219f45 100644
--- a/lib/browser/objects-registry.js
+++ b/lib/browser/objects-registry.js
@@ -19,17 +19,14 @@ class ObjectsRegistry {
   // registered then the already assigned ID would be returned.
   add (webContents, obj) {
     // Get or assign an ID to the object.
-    let id = this.saveToStorage(obj)
+    const id = this.saveToStorage(obj)
 
     // Add object to the set of referenced objects.
-    let webContentsId = webContents.getId()
+    const webContentsId = webContents.getId()
     let owner = this.owners[webContentsId]
     if (!owner) {
       owner = this.owners[webContentsId] = new Set()
-      // Clear the storage when webContents is reloaded/navigated.
-      webContents.once('render-view-deleted', () => {
-        this.clear(webContentsId)
-      })
+      this.registerDeleteListener(webContents, webContentsId)
     }
     if (!owner.has(id)) {
       owner.add(id)
@@ -89,8 +86,19 @@ class ObjectsRegistry {
     pointer.count -= 1
     if (pointer.count === 0) {
       v8Util.deleteHiddenValue(pointer.object, 'atomId')
-      return delete this.storage[id]
+      delete this.storage[id]
+    }
+  }
+
+  // Private: Clear the storage when webContents is reloaded/navigated.
+  registerDeleteListener (webContents, webContentsId) {
+    const listener = (event, deletedProcessId) => {
+      if (deletedProcessId === webContentsId) {
+        webContents.removeListener('render-view-deleted', listener)
+        this.clear(webContentsId)
+      }
     }
+    webContents.on('render-view-deleted', listener)
   }
 }
 
diff --git a/lib/browser/rpc-server.js b/lib/browser/rpc-server.js
index 31e5a37732c7..06e6f3be87c2 100644
--- a/lib/browser/rpc-server.js
+++ b/lib/browser/rpc-server.js
@@ -371,3 +371,34 @@ ipcMain.on('ELECTRON_BROWSER_SEND_TO', function (event, sendToAll, webContentsId
     contents.send(channel, ...args)
   }
 })
+
+// Implements window.alert(message, title)
+ipcMain.on('ELECTRON_BROWSER_WINDOW_ALERT', function (event, message, title) {
+  if (message == null) message = ''
+  if (title == null) title = ''
+
+  event.returnValue = electron.dialog.showMessageBox(event.sender.getOwnerBrowserWindow(), {
+    message: `${message}`,
+    title: `${title}`,
+    buttons: ['OK']
+  })
+})
+
+// Implements window.confirm(message, title)
+ipcMain.on('ELECTRON_BROWSER_WINDOW_CONFIRM', function (event, message, title) {
+  if (message == null) message = ''
+  if (title == null) title = ''
+
+  event.returnValue = !electron.dialog.showMessageBox(event.sender.getOwnerBrowserWindow(), {
+    message: `${message}`,
+    title: `${title}`,
+    buttons: ['OK', 'Cancel'],
+    cancelId: 1
+  })
+})
+
+// Implements window.close()
+ipcMain.on('ELECTRON_BROWSER_WINDOW_CLOSE', function (event) {
+  event.sender.getOwnerBrowserWindow().close()
+  event.returnValue = null
+})
diff --git a/lib/common/api/callbacks-registry.js b/lib/common/api/callbacks-registry.js
index 459c392bc188..126694d154e4 100644
--- a/lib/common/api/callbacks-registry.js
+++ b/lib/common/api/callbacks-registry.js
@@ -44,14 +44,8 @@ class CallbacksRegistry {
     return (ref = this.callbacks[id]) != null ? ref : function () {}
   }
 
-  call (id, ...args) {
-    var ref
-    return (ref = this.get(id)).call.apply(ref, [global].concat(args))
-  }
-
   apply (id, ...args) {
-    var ref
-    return (ref = this.get(id)).apply.apply(ref, [global].concat(args))
+    return this.get(id).apply(global, ...args)
   }
 
   remove (id) {
diff --git a/lib/common/init.js b/lib/common/init.js
index 0ffd97a7c539..127e5e337eb0 100644
--- a/lib/common/init.js
+++ b/lib/common/init.js
@@ -1,11 +1,13 @@
 const timers = require('timers')
 
+const {binding} = process
+
 process.atomBinding = function (name) {
   try {
-    return process.binding('atom_' + process.type + '_' + name)
+    return binding('atom_' + process.type + '_' + name)
   } catch (error) {
     if (/No such module/.test(error.message)) {
-      return process.binding('atom_common_' + name)
+      return binding('atom_common_' + name)
     }
   }
 }
diff --git a/lib/renderer/api/remote.js b/lib/renderer/api/remote.js
index a3a4443413d3..c3c8e3b89cd1 100644
--- a/lib/renderer/api/remote.js
+++ b/lib/renderer/api/remote.js
@@ -88,26 +88,28 @@ const wrapArgs = function (args, visited) {
       }
     }
   }
-  return Array.prototype.slice.call(args).map(valueToMeta)
+  return args.map(valueToMeta)
 }
 
 // Populate object's members from descriptors.
 // The |ref| will be kept referenced by |members|.
 // This matches |getObjectMemebers| in rpc-server.
 const setObjectMembers = function (ref, object, metaId, members) {
+  if (!Array.isArray(members)) return
+
   for (let member of members) {
     if (object.hasOwnProperty(member.name)) continue
 
     let descriptor = { enumerable: member.enumerable }
     if (member.type === 'method') {
-      const remoteMemberFunction = function () {
+      const remoteMemberFunction = function (...args) {
         if (this && this.constructor === remoteMemberFunction) {
           // Constructor call.
-          let ret = ipcRenderer.sendSync('ELECTRON_BROWSER_MEMBER_CONSTRUCTOR', metaId, member.name, wrapArgs(arguments))
+          let ret = ipcRenderer.sendSync('ELECTRON_BROWSER_MEMBER_CONSTRUCTOR', metaId, member.name, wrapArgs(args))
           return metaToValue(ret)
         } else {
           // Call member function.
-          let ret = ipcRenderer.sendSync('ELECTRON_BROWSER_MEMBER_CALL', metaId, member.name, wrapArgs(arguments))
+          let ret = ipcRenderer.sendSync('ELECTRON_BROWSER_MEMBER_CALL', metaId, member.name, wrapArgs(args))
           return metaToValue(ret)
         }
       }
@@ -165,6 +167,11 @@ const proxyFunctionProperties = function (remoteMemberFunction, metaId, name) {
   }
 
   return new Proxy(remoteMemberFunction, {
+    set: (target, property, value, receiver) => {
+      if (property !== 'ref') loadRemoteProperties()
+      target[property] = value
+      return true
+    },
     get: (target, property, receiver) => {
       if (!target.hasOwnProperty(property)) loadRemoteProperties()
       return target[property]
@@ -213,17 +220,17 @@ const metaToValue = function (meta) {
 
       if (meta.type === 'function') {
         // A shadow class to represent the remote function object.
-        let remoteFunction = function () {
+        let remoteFunction = function (...args) {
           if (this && this.constructor === remoteFunction) {
             // Constructor call.
-            let obj = ipcRenderer.sendSync('ELECTRON_BROWSER_CONSTRUCTOR', meta.id, wrapArgs(arguments))
+            let obj = ipcRenderer.sendSync('ELECTRON_BROWSER_CONSTRUCTOR', meta.id, wrapArgs(args))
             // Returning object in constructor will replace constructed object
             // with the returned object.
             // http://stackoverflow.com/questions/1978049/what-values-can-a-constructor-return-to-avoid-returning-this
             return metaToValue(obj)
           } else {
             // Function call.
-            let obj = ipcRenderer.sendSync('ELECTRON_BROWSER_FUNCTION_CALL', meta.id, wrapArgs(arguments))
+            let obj = ipcRenderer.sendSync('ELECTRON_BROWSER_FUNCTION_CALL', meta.id, wrapArgs(args))
             return metaToValue(obj)
           }
         }
diff --git a/lib/renderer/init.js b/lib/renderer/init.js
index 2356a81dda2e..5cee59059a2c 100644
--- a/lib/renderer/init.js
+++ b/lib/renderer/init.js
@@ -29,20 +29,18 @@ const electron = require('electron')
 
 // Call webFrame method.
 electron.ipcRenderer.on('ELECTRON_INTERNAL_RENDERER_WEB_FRAME_METHOD', (event, method, args) => {
-  electron.webFrame[method].apply(electron.webFrame, args)
+  electron.webFrame[method](...args)
 })
 
 electron.ipcRenderer.on('ELECTRON_INTERNAL_RENDERER_SYNC_WEB_FRAME_METHOD', (event, requestId, method, args) => {
-  const result = electron.webFrame[method].apply(electron.webFrame, args)
+  const result = electron.webFrame[method](...args)
   event.sender.send(`ELECTRON_INTERNAL_BROWSER_SYNC_WEB_FRAME_RESPONSE_${requestId}`, result)
 })
 
 electron.ipcRenderer.on('ELECTRON_INTERNAL_RENDERER_ASYNC_WEB_FRAME_METHOD', (event, requestId, method, args) => {
-  const responseCallback = function (result) {
+  electron.webFrame[method](...args, function (result) {
     event.sender.send(`ELECTRON_INTERNAL_BROWSER_ASYNC_WEB_FRAME_RESPONSE_${requestId}`, result)
-  }
-  args.push(responseCallback)
-  electron.webFrame[method].apply(electron.webFrame, args)
+  })
 })
 
 // Process command line arguments.
diff --git a/lib/renderer/override.js b/lib/renderer/override.js
index 29cf9f5acaec..db35904f9523 100644
--- a/lib/renderer/override.js
+++ b/lib/renderer/override.js
@@ -1,31 +1,35 @@
 'use strict'
 
-const ipcRenderer = require('electron').ipcRenderer
-const remote = require('electron').remote
+const {ipcRenderer} = require('electron')
+
+const {defineProperty} = Object
 
 // Helper function to resolve relative url.
-var a = window.top.document.createElement('a')
-var resolveURL = function (url) {
+const a = window.top.document.createElement('a')
+const resolveURL = function (url) {
   a.href = url
   return a.href
 }
 
 // Window object returned by "window.open".
-var BrowserWindowProxy = (function () {
+const BrowserWindowProxy = (function () {
   BrowserWindowProxy.proxies = {}
 
   BrowserWindowProxy.getOrCreate = function (guestId) {
-    var base = this.proxies
-    base[guestId] != null ? base[guestId] : base[guestId] = new BrowserWindowProxy(guestId)
-    return base[guestId]
+    let proxy = this.proxies[guestId]
+    if (proxy == null) {
+      proxy = new BrowserWindowProxy(guestId)
+      this.proxies[guestId] = proxy
+    }
+    return proxy
   }
 
   BrowserWindowProxy.remove = function (guestId) {
-    return delete this.proxies[guestId]
+    delete this.proxies[guestId]
   }
 
   function BrowserWindowProxy (guestId1) {
-    Object.defineProperty(this, 'guestId', {
+    defineProperty(this, 'guestId', {
       configurable: false,
       enumerable: true,
       writeable: false,
@@ -40,28 +44,28 @@ var BrowserWindowProxy = (function () {
   }
 
   BrowserWindowProxy.prototype.close = function () {
-    return ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_CLOSE', this.guestId)
+    ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_CLOSE', this.guestId)
   }
 
   BrowserWindowProxy.prototype.focus = function () {
-    return ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_METHOD', this.guestId, 'focus')
+    ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_METHOD', this.guestId, 'focus')
   }
 
   BrowserWindowProxy.prototype.blur = function () {
-    return ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_METHOD', this.guestId, 'blur')
+    ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_METHOD', this.guestId, 'blur')
   }
 
   BrowserWindowProxy.prototype.print = function () {
-    return ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD', this.guestId, 'print')
+    ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD', this.guestId, 'print')
   }
 
-  Object.defineProperty(BrowserWindowProxy.prototype, 'location', {
+  defineProperty(BrowserWindowProxy.prototype, 'location', {
     get: function () {
-      return ipcRenderer.sendSync('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_METHOD', this.guestId, 'getURL')
+      return ipcRenderer.sendSync('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD_SYNC', this.guestId, 'getURL')
     },
     set: function (url) {
       url = resolveURL(url)
-      return ipcRenderer.sendSync('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_METHOD', this.guestId, 'loadURL', url)
+      return ipcRenderer.sendSync('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD_SYNC', this.guestId, 'loadURL', url)
     }
   })
 
@@ -69,11 +73,11 @@ var BrowserWindowProxy = (function () {
     if (targetOrigin == null) {
       targetOrigin = '*'
     }
-    return ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_POSTMESSAGE', this.guestId, message, targetOrigin, window.location.origin)
+    ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WINDOW_POSTMESSAGE', this.guestId, message, targetOrigin, window.location.origin)
   }
 
   BrowserWindowProxy.prototype['eval'] = function (...args) {
-    return ipcRenderer.send.apply(ipcRenderer, ['ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD', this.guestId, 'executeJavaScript'].concat(args))
+    ipcRenderer.send('ELECTRON_GUEST_WINDOW_MANAGER_WEB_CONTENTS_METHOD', this.guestId, 'executeJavaScript', ...args)
   }
 
   return BrowserWindowProxy
@@ -82,7 +86,7 @@ var BrowserWindowProxy = (function () {
 if (process.guestInstanceId == null) {
   // Override default window.close.
   window.close = function () {
-    return remote.getCurrentWindow().close()
+    ipcRenderer.sendSync('ELECTRON_BROWSER_WINDOW_CLOSE')
   }
 }
 
@@ -158,29 +162,12 @@ window.open = function (url, frameName, features) {
   }
 }
 
-// Use the dialog API to implement alert().
-window.alert = function (message = '', title = '') {
-  remote.dialog.showMessageBox(remote.getCurrentWindow(), {
-    message: String(message),
-    title: String(title),
-    buttons: ['OK']
-  })
+window.alert = function (message, title) {
+  ipcRenderer.sendSync('ELECTRON_BROWSER_WINDOW_ALERT', message, title)
 }
 
-// And the confirm().
 window.confirm = function (message, title) {
-  var buttons, cancelId
-  if (title == null) {
-    title = ''
-  }
-  buttons = ['OK', 'Cancel']
-  cancelId = 1
-  return !remote.dialog.showMessageBox(remote.getCurrentWindow(), {
-    message: message,
-    title: title,
-    buttons: buttons,
-    cancelId: cancelId
-  })
+  return ipcRenderer.sendSync('ELECTRON_BROWSER_WINDOW_CONFIRM', message, title)
 }
 
 // But we do not support prompt().
@@ -205,26 +192,26 @@ ipcRenderer.on('ELECTRON_GUEST_WINDOW_POSTMESSAGE', function (event, sourceId, m
 
 // Forward history operations to browser.
 var sendHistoryOperation = function (...args) {
-  return ipcRenderer.send.apply(ipcRenderer, ['ELECTRON_NAVIGATION_CONTROLLER'].concat(args))
+  ipcRenderer.send('ELECTRON_NAVIGATION_CONTROLLER', ...args)
 }
 
 var getHistoryOperation = function (...args) {
-  return ipcRenderer.sendSync.apply(ipcRenderer, ['ELECTRON_SYNC_NAVIGATION_CONTROLLER'].concat(args))
+  return ipcRenderer.sendSync('ELECTRON_SYNC_NAVIGATION_CONTROLLER', ...args)
 }
 
 window.history.back = function () {
-  return sendHistoryOperation('goBack')
+  sendHistoryOperation('goBack')
 }
 
 window.history.forward = function () {
-  return sendHistoryOperation('goForward')
+  sendHistoryOperation('goForward')
 }
 
 window.history.go = function (offset) {
-  return sendHistoryOperation('goToOffset', offset)
+  sendHistoryOperation('goToOffset', offset)
 }
 
-Object.defineProperty(window.history, 'length', {
+defineProperty(window.history, 'length', {
   get: function () {
     return getHistoryOperation('length')
   }
@@ -242,13 +229,13 @@ ipcRenderer.on('ELECTRON_RENDERER_WINDOW_VISIBILITY_CHANGE', function (event, vi
 })
 
 // Make document.hidden and document.visibilityState return the correct value.
-Object.defineProperty(document, 'hidden', {
+defineProperty(document, 'hidden', {
   get: function () {
     return cachedVisibilityState !== 'visible'
   }
 })
 
-Object.defineProperty(document, 'visibilityState', {
+defineProperty(document, 'visibilityState', {
   get: function () {
     return cachedVisibilityState
   }
diff --git a/lib/renderer/web-view/guest-view-internal.js b/lib/renderer/web-view/guest-view-internal.js
index fed0275b9076..f6eb244a6848 100644
--- a/lib/renderer/web-view/guest-view-internal.js
+++ b/lib/renderer/web-view/guest-view-internal.js
@@ -46,7 +46,7 @@ var DEPRECATED_EVENTS = {
 var dispatchEvent = function (webView, eventName, eventKey, ...args) {
   var domEvent, f, i, j, len, ref1
   if (DEPRECATED_EVENTS[eventName] != null) {
-    dispatchEvent.apply(null, [webView, DEPRECATED_EVENTS[eventName], eventKey].concat(args))
+    dispatchEvent(webView, DEPRECATED_EVENTS[eventName], eventKey, ...args)
   }
   domEvent = new Event(eventName)
   ref1 = WEB_VIEW_EVENTS[eventKey]
@@ -63,7 +63,7 @@ var dispatchEvent = function (webView, eventName, eventKey, ...args) {
 module.exports = {
   registerEvents: function (webView, viewInstanceId) {
     ipcRenderer.on('ELECTRON_GUEST_VIEW_INTERNAL_DISPATCH_EVENT-' + viewInstanceId, function (event, eventName, ...args) {
-      dispatchEvent.apply(null, [webView, eventName, eventName].concat(args))
+      dispatchEvent(webView, eventName, eventName, ...args)
     })
 
     ipcRenderer.on('ELECTRON_GUEST_VIEW_INTERNAL_IPC_MESSAGE-' + viewInstanceId, function (event, channel, ...args) {
diff --git a/lib/renderer/web-view/web-view.js b/lib/renderer/web-view/web-view.js
index 6e5e81798544..ab8d6996c896 100644
--- a/lib/renderer/web-view/web-view.js
+++ b/lib/renderer/web-view/web-view.js
@@ -394,8 +394,11 @@ var registerWebViewElement = function () {
     'insertText',
     'send',
     'sendInputEvent',
+    'setLayoutZoomLevelLimits',
+    'setVisualZoomLevelLimits',
     'setZoomFactor',
     'setZoomLevel',
+    // TODO(kevinsawicki): Remove in 2.0, deprecate before then with warnings
     'setZoomLevelLimits'
   ]
 
@@ -404,7 +407,7 @@ var registerWebViewElement = function () {
     return function (...args) {
       const internal = v8Util.getHiddenValue(this, 'internal')
       if (internal.webContents) {
-        return internal.webContents[m].apply(internal.webContents, args)
+        return internal.webContents[m](...args)
       } else {
         throw new Error(`Cannot call ${m} because the webContents is unavailable. The WebView must be attached to the DOM and the dom-ready event emitted before this method can be called.`)
       }
@@ -417,7 +420,7 @@ var registerWebViewElement = function () {
   createNonBlockHandler = function (m) {
     return function (...args) {
       const internal = v8Util.getHiddenValue(this, 'internal')
-      return ipcRenderer.send.apply(ipcRenderer, ['ELECTRON_BROWSER_ASYNC_CALL_TO_GUEST_VIEW', null, internal.guestInstanceId, m].concat(args))
+      return ipcRenderer.send('ELECTRON_BROWSER_ASYNC_CALL_TO_GUEST_VIEW', null, internal.guestInstanceId, m, ...args)
     }
   }
   for (j = 0, len1 = nonblockMethods.length; j < len1; j++) {
diff --git a/package.json b/package.json
index bd7087e76707..a9e592359714 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "electron",
-  "version": "1.3.6",
+  "version": "1.3.15",
   "devDependencies": {
     "asar": "^0.11.0",
     "electabul": "~0.0.4",
diff --git a/script/cibuild-electron-linux-arm b/script/cibuild-electron-linux-arm
new file mode 100755
index 000000000000..771b4126ee7d
--- /dev/null
+++ b/script/cibuild-electron-linux-arm
@@ -0,0 +1,5 @@
+#!/usr/bin/env bash
+
+export TARGET_ARCH=arm
+
+script/cibuild-linux
diff --git a/script/cibuild-electron-linux-ia32 b/script/cibuild-electron-linux-ia32
new file mode 100755
index 000000000000..0e2000c8c20e
--- /dev/null
+++ b/script/cibuild-electron-linux-ia32
@@ -0,0 +1,5 @@
+#!/usr/bin/env bash
+
+export TARGET_ARCH=ia32
+
+script/cibuild-linux
diff --git a/script/cibuild-electron-linux-x64 b/script/cibuild-electron-linux-x64
new file mode 100755
index 000000000000..6fe23200ff49
--- /dev/null
+++ b/script/cibuild-electron-linux-x64
@@ -0,0 +1,5 @@
+#!/usr/bin/env bash
+
+export TARGET_ARCH=x64
+
+script/cibuild-linux
diff --git a/script/cibuild-linux b/script/cibuild-linux
new file mode 100755
index 000000000000..22f15936ae34
--- /dev/null
+++ b/script/cibuild-linux
@@ -0,0 +1,23 @@
+#!/usr/bin/env bash
+
+MESSAGE="$(git log --format=%B -n 1 HEAD)"
+case ${MESSAGE} in
+  Bump* ) export ELECTRON_RELEASE=1 ;;
+esac
+
+set +x
+
+export ELECTRON_GITHUB_TOKEN="$BUILD_ELECTRON_ELECTRON_GITHUB_TOKEN"
+export ELECTRON_S3_BUCKET="$BUILD_ELECTRON_ELECTRON_S3_BUCKET"
+export ELECTRON_S3_ACCESS_KEY="$BUILD_ELECTRON_ELECTRON_S3_ACCESS_KEY"
+export ELECTRON_S3_SECRET_KEY="$BUILD_ELECTRON_ELECTRON_S3_SECRET_KEY"
+
+if [[ -z "${ELECTRON_RELEASE}" ]]; then
+  echo "Generating Linux $TARGET_ARCH debug build"
+else
+  echo "Generating Linux $TARGET_ARCH release build"
+fi
+
+set -x
+
+script/cibuild
diff --git a/script/lib/config.py b/script/lib/config.py
index 5ea60fcf539a..d2be141a0c00 100644
--- a/script/lib/config.py
+++ b/script/lib/config.py
@@ -9,7 +9,7 @@
 BASE_URL = os.getenv('LIBCHROMIUMCONTENT_MIRROR') or \
     'https://s3.amazonaws.com/github-janky-artifacts/libchromiumcontent'
 LIBCHROMIUMCONTENT_COMMIT = os.getenv('LIBCHROMIUMCONTENT_COMMIT') or \
-    'c5cf295ef93d4ee88bff0c4b06b28ff0969a890e'
+    'e93c6a82d7ab1e3b97a294200186d7254ad3f868'
 
 PLATFORM = {
   'cygwin': 'win32',
diff --git a/spec/api-ipc-spec.js b/spec/api-ipc-spec.js
index ac5d06ad787a..22148c665732 100644
--- a/spec/api-ipc-spec.js
+++ b/spec/api-ipc-spec.js
@@ -69,6 +69,10 @@ describe('ipc module', function () {
       assert.ok(Object.keys(a.foo).includes('bar'))
       assert.ok(Object.keys(a.foo).includes('nested'))
       assert.ok(Object.keys(a.foo).includes('method1'))
+
+      a = remote.require(path.join(fixtures, 'module', 'function-with-missing-properties.js')).setup()
+      assert.equal(a.bar(), true)
+      assert.equal(a.bar.baz, undefined)
     })
 
     it('should work with static class members', function () {
@@ -492,4 +496,19 @@ describe('ipc module', function () {
       assert.equal(w.listenerCount('test'), 0)
     })
   })
+
+  describe('remote objects registry', function () {
+    it('does not dereference until the render view is deleted (regression)', function (done) {
+      w = new BrowserWindow({
+        show: false
+      })
+
+      ipcMain.once('error-message', (event, message) => {
+        assert(message.startsWith('Cannot read property \'object\' of undefined'), message)
+        done()
+      })
+
+      w.loadURL('file://' + path.join(fixtures, 'api', 'render-view-deleted.html'))
+    })
+  })
 })
diff --git a/spec/api-web-frame-spec.js b/spec/api-web-frame-spec.js
index a41bc477018f..3d7a7d316f8b 100644
--- a/spec/api-web-frame-spec.js
+++ b/spec/api-web-frame-spec.js
@@ -6,6 +6,7 @@ const {BrowserWindow, protocol, ipcMain} = remote
 
 describe('webFrame module', function () {
   var fixtures = path.resolve(__dirname, 'fixtures')
+
   describe('webFrame.registerURLSchemeAsPrivileged', function () {
     it('supports fetch api', function (done) {
       webFrame.registerURLSchemeAsPrivileged('file')
@@ -61,4 +62,12 @@ describe('webFrame module', function () {
       })
     })
   })
+
+  it('supports setting the visual and layout zoom level limits', function () {
+    assert.doesNotThrow(function () {
+      webFrame.setZoomLevelLimits(1, 100)
+      webFrame.setVisualZoomLevelLimits(1, 50)
+      webFrame.setLayoutZoomLevelLimits(0, 25)
+    })
+  })
 })
diff --git a/spec/chromium-spec.js b/spec/chromium-spec.js
index e26cba87c38b..f4d8f4068b13 100644
--- a/spec/chromium-spec.js
+++ b/spec/chromium-spec.js
@@ -5,7 +5,7 @@ const ws = require('ws')
 const url = require('url')
 const remote = require('electron').remote
 
-const {BrowserWindow, session, webContents} = remote
+const {BrowserWindow, protocol, session, webContents} = remote
 
 const isCI = remote.getGlobal('isCi')
 
@@ -94,13 +94,7 @@ describe('chromium feature', function () {
   })
 
   describe('navigator.mediaDevices', function () {
-    if (process.env.TRAVIS === 'true') {
-      return
-    }
-    if (isCI && process.platform === 'linux') {
-      return
-    }
-    if (isCI && process.platform === 'win32') {
+    if (isCI) {
       return
     }
 
@@ -283,11 +277,11 @@ describe('chromium feature', function () {
   describe('window.opener', function () {
     this.timeout(10000)
 
-    var url = 'file://' + fixtures + '/pages/window-opener.html'
-    var w = null
+    let url = 'file://' + fixtures + '/pages/window-opener.html'
+    let w = null
 
     afterEach(function () {
-      w != null ? w.destroy() : void 0
+      if (w) w.destroy()
     })
 
     it('is null for main window', function (done) {
@@ -302,7 +296,7 @@ describe('chromium feature', function () {
     })
 
     it('is not null for window opened by window.open', function (done) {
-      var b
+      let b
       listener = function (event) {
         assert.equal(event.data, 'object')
         b.close()
@@ -313,6 +307,138 @@ describe('chromium feature', function () {
     })
   })
 
+  describe('window.opener access from BrowserWindow', function () {
+    this.timeout(10000)
+
+    const scheme = 'other'
+    let url = `${scheme}://${fixtures}/pages/window-opener-location.html`
+    let w = null
+
+    before(function (done) {
+      protocol.registerFileProtocol(scheme, function (request, callback) {
+        callback(`${fixtures}/pages/window-opener-location.html`)
+      }, function (error) {
+        done(error)
+      })
+    })
+
+    after(function () {
+      protocol.unregisterProtocol(scheme)
+    })
+
+    afterEach(function () {
+      w.close()
+    })
+
+    it('does nothing when origin of current window does not match opener', function (done) {
+      listener = function (event) {
+        assert.equal(event.data, undefined)
+        done()
+      }
+      window.addEventListener('message', listener)
+      w = window.open(url, '', 'show=no')
+    })
+
+    it('works when origin matches', function (done) {
+      listener = function (event) {
+        assert.equal(event.data, location.href)
+        done()
+      }
+      window.addEventListener('message', listener)
+      w = window.open(`file://${fixtures}/pages/window-opener-location.html`, '', 'show=no')
+    })
+
+    it('works when origin does not match opener but has node integration', function (done) {
+      listener = function (event) {
+        assert.equal(event.data, location.href)
+        done()
+      }
+      window.addEventListener('message', listener)
+      w = window.open(url, '', 'show=no,nodeIntegration=yes')
+    })
+  })
+
+  describe('window.opener access from <webview>', function () {
+    this.timeout(10000)
+
+    const scheme = 'other'
+    const srcPath = `${fixtures}/pages/webview-opener-postMessage.html`
+    const pageURL = `file://${fixtures}/pages/window-opener-location.html`
+    let webview = null
+
+    before(function (done) {
+      protocol.registerFileProtocol(scheme, function (request, callback) {
+        callback(srcPath)
+      }, function (error) {
+        done(error)
+      })
+    })
+
+    after(function () {
+      protocol.unregisterProtocol(scheme)
+    })
+
+    afterEach(function () {
+      if (webview != null) webview.remove()
+    })
+
+    it('does nothing when origin of webview src URL does not match opener', function (done) {
+      webview = new WebView()
+      webview.addEventListener('console-message', function (e) {
+        assert.equal(e.message, 'null')
+        done()
+      })
+      webview.setAttribute('allowpopups', 'on')
+      webview.src = url.format({
+        pathname: srcPath,
+        protocol: scheme,
+        query: {
+          p: pageURL
+        },
+        slashes: true
+      })
+      document.body.appendChild(webview)
+    })
+
+    it('works when origin matches', function (done) {
+      webview = new WebView()
+      webview.addEventListener('console-message', function (e) {
+        assert.equal(e.message, webview.src)
+        done()
+      })
+      webview.setAttribute('allowpopups', 'on')
+      webview.src = url.format({
+        pathname: srcPath,
+        protocol: 'file',
+        query: {
+          p: pageURL
+        },
+        slashes: true
+      })
+      document.body.appendChild(webview)
+    })
+
+    it('works when origin does not match opener but has node integration', function (done) {
+      webview = new WebView()
+      webview.addEventListener('console-message', function (e) {
+        webview.remove()
+        assert.equal(e.message, webview.src)
+        done()
+      })
+      webview.setAttribute('allowpopups', 'on')
+      webview.setAttribute('nodeintegration', 'on')
+      webview.src = url.format({
+        pathname: srcPath,
+        protocol: scheme,
+        query: {
+          p: pageURL
+        },
+        slashes: true
+      })
+      document.body.appendChild(webview)
+    })
+  })":,''
title: About releases
intro: 'You can create a release to package software, along with release notes and links to binary files, for other people to use.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About releases

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
![An overview of releases](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
{% else %}
![An overview of releases](/assets/images/help/releases/releases-overview.png)
{% endif %}

Releases are deployable software iterations you can package and make available for a wider audience to download and use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[Viewing your repository's releases and tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)."

You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template. For more information, see "[Automatically generated release notes](/repositories/releasing-projects-on-github/automatically-generated-release-notes)."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.6 %}
When viewing the details for a release, the creation date for each release asset is shown next to the release asset.
{% endif %}

{% ifversion fpt or ghec %}
People with admin permissions to a repository can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

If a release fixes a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."

You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[Releases](/rest/reference/releases)."

{% ifversion fpt or ghec %}
## Storage and bandwidth quotas

 Each file included in a release must be under {% data variables.large_files.max_file_size %}. There is no limit on the total size of a release, nor bandwidth usage.

{% endif %}
