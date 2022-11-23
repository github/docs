-' ::BEGINS :tests :Run'@ci ::
Project description
=================================
os_admin_networks_python_novaclient_ext
=================================

Adds admin network extension support to python-novaclient.

This extension is autodiscovered once installed. To use::

pip install os_admin_networks_python_novaclient_ext
nova networks--
title: About pull requestsSkip to content
 
Search…
All gists
Back to GitHub
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
@zakwarlord7
zakwarlord7/BITORE_34173 Secret
Created 1 minute ago
0
Code
Revisions
1
<script src="https://gist.github.com/zakwarlord7/039a1a6b53a5c5da8770da727273b617.js"></script>
BITORE_34173
Skip to content
 
Search…
All gists
Back to GitHub
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
@zakwarlord7
zakwarlord7/gist:56197b8ebcb29e9bc577b57354350c0a Secret
Last active 2 minutes ago
0
Code
Revisions
6
<script src="https://gist.github.com/zakwarlord7/56197b8ebcb29e9bc577b57354350c0a.js"></script>
gistfile1.txt
#!/usr/bin/bash 
BEGIN
GLOW7 :
a/README.md/b/README.md
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

if ((typeof mojo !== 'undefined') && mojo.bindingsLibraryInitialized) {
  throw new Error('The Mojo bindings library has been initialized.');
}
var mojo = mojo || {};
mojo.bindingsLibraryInitialized = true;
mojo.internal = mojo.internal || {};
mojo.config = mojo.config || {};
if (typeof mojo.config.global === 'undefined') {
  mojo.config.global = this;
}
if (typeof mojo.config.autoLoadMojomDeps === 'undefined') {
  // Whether to automatically load mojom dependencies.
  // For example, if foo.mojom imports bar.mojom, |autoLoadMojomDeps| set to
  // true means that loading foo.mojom.js will insert a <script> tag to load
  // bar.mojom.js, if it hasn't been loaded.
  //
  // The URL of bar.mojom.js is determined by the relative path of bar.mojom
  // (relative to the position of foo.mojom at build time) and the URL of
  // foo.mojom.js. For exmple, if at build time the two mojom files are
  // located at:
  //   a/b/c/foo.mojom
  //   a/b/d/bar.mojom
  // and the URL of foo.mojom.js is:
  //   http://example.org/scripts/b/c/foo.mojom.js
  // then the URL of bar.mojom.js will be:
  //   http://example.org/scripts/b/d/bar.mojom.js
  //
  // If you would like bar.mojom.js to live at a different location, you need
  // to turn off |autoLoadMojomDeps| before loading foo.mojom.js, and manually
  // load bar.mojom.js yourself. Similarly, you need to turn off the option if
  // you merge bar.mojom.js and foo.mojom.js into a single file.
  //
  // Performance tip: Avoid loading the same mojom.js file multiple times.
  // Assume that |autoLoadMojomDeps| is set to true,
  //
  // <!--
  // (This comment tag is necessary on IOS to avoid interpreting the closing
  // script tags in the example.)
  //
  // No duplicate loading; recommended:
  // <script src="http://example.org/scripts/b/c/foo.mojom.js"></script>
  //
  // No duplicate loading, although unnecessary:
  // <script src="http://example.org/scripts/b/d/bar.mojom.js"></script>
  // <script src="http://example.org/scripts/b/c/foo.mojom.js"></script>
  //
  // Load bar.mojom.js twice; should be avoided:
  // <script src="http://example.org/scripts/b/c/foo.mojom.js"></script>
  // <script src="http://example.org/scripts/b/d/bar.mojom.js"></script>
  //
  // -->
  mojo.config.autoLoadMojomDeps = true;
}
(function() {
  var internal = mojo.internal;
  var config = mojo.config;
  var LoadState = {
    PENDING_LOAD: 1,
    LOADED: 2
  };
  var mojomRegistry = new Map();
  function exposeNamespace(namespace) {
    var current = config.global;
    var parts = namespace.split('.');
    for (var part; parts.length && (part = parts.shift());) {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }

    return current;
  }

  function isMojomPendingLoad(id) {
    return mojomRegistry.get(id) === LoadState.PENDING_LOAD;
  }

  function isMojomLoaded(id) {
    return mojomRegistry.get(id) === LoadState.LOADED;
  }

  function markMojomPendingLoad(id) {
    if (isMojomLoaded(id)) {
      throw new Error('The following mojom file has been loaded: ' + id);
    }

    mojomRegistry.set(id, LoadState.PENDING_LOAD);
  }

  function markMojomLoaded(id) {
    mojomRegistry.set(id, LoadState.LOADED);
  }

  function loadMojomIfNecessary(id, relativePath) {
    if (mojomRegistry.has(id)) {
      return;
    }

    if (config.global.document === undefined) {
      throw new Error(
          'Mojom dependency autoloading is not implemented in workers. ' +
          'Please see config variable mojo.config.autoLoadMojomDeps for more ' +
          'details.');
    }

    markMojomPendingLoad(id);
    var url = new URL(relativePath, document.currentScript.src).href;

    if (config.global.document.readyState === 'loading') {
      // We can't use dynamic script loading here (such as
      // `document.createElement(...)` because the loaded script will be
      // evaluated after the following scripts (if they exist). Thus
      // `document.write` guarantees the proper evaluation order.
      config.global.document.write('<script type="text/javascript" src="' +
                                   url + '"><' + '/script>');
    } else {
      // If the parent script is being loaded lazily, we can't use
      // `document.write` because the document has already been loaded.
      var scriptElement = document.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.async = false;
      scriptElement.src = url;
      document.currentScript.parentElement.appendChild(scriptElement);
    }
  }

  internal.exposeNamespace = exposeNamespace;
  internal.isMojomPendingLoad = isMojomPendingLoad;
  internal.isMojomLoaded = isMojomLoaded;
  internal.markMojomPendingLoad = markMojomPendingLoad;
  internal.markMojomLoaded = markMojomLoaded;
  internal.loadMojomIfNecessary = loadMojomIfNecessary;
})();
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function() {
  var internal = mojo.internal;

  // ---------------------------------------------------------------------------

  // |output| could be an interface pointer, InterfacePtrInfo or
  // AssociatedInterfacePtrInfo.
  function makeRequest(output) {
    if (output instanceof mojo.AssociatedInterfacePtrInfo) {
      var {handle0, handle1} = internal.createPairPendingAssociation();
      output.interfaceEndpointHandle = handle0;
      output.version = 0;

      return new mojo.AssociatedInterfaceRequest(handle1);
    }

    if (output instanceof mojo.InterfacePtrInfo) {
      var pipe = Mojo.createMessagePipe();
      output.handle = pipe.handle0;
      output.version = 0;

      return new mojo.InterfaceRequest(pipe.handle1);
    }

    var pipe = Mojo.createMessagePipe();
    output.ptr.bind(new mojo.InterfacePtrInfo(pipe.handle0, 0));
    return new mojo.InterfaceRequest(pipe.handle1);
  }

  // ---------------------------------------------------------------------------

  // Operations used to setup/configure an interface pointer. Exposed as the
  // |ptr| field of generated interface pointer classes.
  // |ptrInfoOrHandle| could be omitted and passed into bind() later.
  function InterfacePtrController(interfaceType, ptrInfoOrHandle) {
    this.version = 0;

    this.interfaceType_ = interfaceType;
    this.router_ = null;
    this.interfaceEndpointClient_ = null;
    this.proxy_ = null;

    // |router_| and |interfaceEndpointClient_| are lazily initialized.
    // |handle_| is valid between bind() and
    // the initialization of |router_| and |interfaceEndpointClient_|.
    this.handle_ = null;

    if (ptrInfoOrHandle)
      this.bind(ptrInfoOrHandle);
  }

  InterfacePtrController.prototype.bind = function(ptrInfoOrHandle) {
    this.reset();

    if (ptrInfoOrHandle instanceof mojo.InterfacePtrInfo) {
      this.version = ptrInfoOrHandle.version;
      this.handle_ = ptrInfoOrHandle.handle;
    } else {
      this.handle_ = ptrInfoOrHandle;
    }
  };

  InterfacePtrController.prototype.isBound = function() {
    return this.interfaceEndpointClient_ !== null || this.handle_ !== null;
  };

  // Although users could just discard the object, reset() closes the pipe
  // immediately.
  InterfacePtrController.prototype.reset = function() {
    this.version = 0;
    if (this.interfaceEndpointClient_) {
      this.interfaceEndpointClient_.close();
      this.interfaceEndpointClient_ = null;
    }
    if (this.router_) {
      this.router_.close();
      this.router_ = null;

      this.proxy_ = null;
    }
    if (this.handle_) {
      this.handle_.close();
      this.handle_ = null;
    }
  };

  InterfacePtrController.prototype.resetWithReason = function(reason) {
    if (this.isBound()) {
      this.configureProxyIfNecessary_();
      this.interfaceEndpointClient_.close(reason);
      this.interfaceEndpointClient_ = null;
    }
    this.reset();
  };

  InterfacePtrController.prototype.setConnectionErrorHandler = function(
      callback) {
    if (!this.isBound())
      throw new Error("Cannot set connection error handler if not bound.");

    this.configureProxyIfNecessary_();
    this.interfaceEndpointClient_.setConnectionErrorHandler(callback);
  };

  InterfacePtrController.prototype.passInterface = function() {
    var result;
    if (this.router_) {
      // TODO(yzshen): Fix Router interface to support extracting handle.
      result = new mojo.InterfacePtrInfo(
          this.router_.connector_.handle_, this.version);
      this.router_.connector_.handle_ = null;
    } else {
      // This also handles the case when this object is not bound.
      result = new mojo.InterfacePtrInfo(this.handle_, this.version);
      this.handle_ = null;
    }

    this.reset();
    return result;
  };

  InterfacePtrController.prototype.getProxy = function() {
    this.configureProxyIfNecessary_();
    return this.proxy_;
  };

  InterfacePtrController.prototype.configureProxyIfNecessary_ = function() {
    if (!this.handle_)
      return;

    this.router_ = new internal.Router(this.handle_, true);
    this.handle_ = null;

    this.interfaceEndpointClient_ = new internal.InterfaceEndpointClient(
        this.router_.createLocalEndpointHandle(internal.kPrimaryInterfaceId));

    this.interfaceEndpointClient_ .setPayloadValidators([
        this.interfaceType_.validateResponse]);
    this.proxy_ = new this.interfaceType_.proxyClass(
        this.interfaceEndpointClient_);
  };

  InterfacePtrController.prototype.queryVersion = function() {
    function onQueryVersion(version) {
      this.version = version;
      return version;
    }

    this.configureProxyIfNecessary_();
    return this.interfaceEndpointClient_.queryVersion().then(
      onQueryVersion.bind(this));
  };

  InterfacePtrController.prototype.requireVersion = function(version) {
    this.configureProxyIfNecessary_();

    if (this.version >= version) {
      return;
    }
    this.version = version;
    this.interfaceEndpointClient_.requireVersion(version);
  };

  // ---------------------------------------------------------------------------

  // |request| could be omitted and passed into bind() later.
  //
  // Example:
  //
  //    // FooImpl implements mojom.Foo.
  //    function Bool.Impl(package.yarn/pkg.json\
  \) { "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4Ig0KCSBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlPg0KICA8IS0tIEJ5IGRlZmF1bHQgc2V0IHRoZSBmaWxsIGNvbG9yIHRvIGVpdGhlciB3aGl0ZSBhdCA5MCUgb3BhY2l0eSBmb3IgJ2xpZ2h0Jw0KICAgICAgIHZlcnNpb25zIGFuZCBibGFjayBhdCA5MCUgZm9yIGRhcmsgdmVyc2lvbnMgLS0+DQogIC5saWdodCBwYXRoIHsNCiAgICBmaWxsOiAjZmZmOw0KICAgIG9wYWNpdHk6IDAuOTsNCiAgfQ0KDQogIC5kYXJrIHBhdGggew0KICAgIGZpbGw6ICMwMDA7DQogICAgb3BhY2l0eTogMC43Ow0KICB9DQoNCg0KICA8IS0tIFNldCB0aGUgY2xhc3Mgb2YgI2NpcmN1bGFyLXByb2dyZXNzIHRvICJwMCIgdGhyb3VnaCAicDgiIGNvcnJlc3BvbmRpbmcNCiAgICAgICB0byBob3cgbWFueSBzZWdtZW50cyB0byBzaG93Lg0KICAgICAgIEhlcmUgdGhlIHJlc3Qgb2YgdGhlIHNlZ21lbnRzIGFyZSBzZXQgdG8gZGlzcGxheSBhdCAxNSUgb3BhY2l0eSAtLT4NCg0KICAucDAgI3NlZzEsIC5wMCAjc2VnMiwgLnAwICNzZWczLCAucDAgI3NlZzQsIC5wMCAjc2VnNSwgLnAwICNzZWc2LCAucDAgI3NlZzcsIC5wMCAjc2VnOCwNCiAgLnAxICNzZWcyLCAucDEgI3NlZzMsIC5wMSAjc2VnNCwgLnAxICNzZWc1LCAucDEgI3NlZzYsIC5wMSAjc2VnNywgLnAxICNzZWc4LA0KICAucDIgI3NlZzMsIC5wMiAjc2VnNCwgLnAyICNzZWc1LCAucDIgI3NlZzYsIC5wMiAjc2VnNywgLnAyICNzZWc4LA0KICAucDMgI3NlZzQsIC5wMyAjc2VnNSwgLnAzICNzZWc2LCAucDMgI3NlZzcsIC5wMyAjc2VnOCwNCiAgLnA0ICNzZWc1LCAucDQgI3NlZzYsIC5wNCAjc2VnNywgLnA0ICNzZWc4LA0KICAucDUgI3NlZzYsIC5wNSAjc2VnNywgLnA1ICNzZWc4LA0KICAucDYgI3NlZzcsIC5wNiAjc2VnOCwNCiAgLnA3ICNzZWc4IHsNCiAgICBvcGFjaXR5OjAuMTU7DQogIH0NCjwvc3R5bGU+DQoNCjxnIGlkPSJjaXJjdWxhci1wcm9ncmVzcyIgY2xhc3M9J3AwJz4NCiAgPHBhdGggaWQ9J3NlZzEnIGQ9Ik0yNiwwLjAyNXYxMy4wODljMi41NDQsMC4yMTEsNC44NTksMS4yMTYsNi43LDIuNzcxbDkuMjU0LTkuMjUzQzM3LjcyNiwyLjcyOCwzMi4xNDgsMC4yNjgsMjYsMC4wMjV6Ii8+DQogIDxwYXRoIGlkPSdzZWcyJyBkPSJNNDMuMzY4LDguMDQ2TDM0LjExNCwxNy4zYzEuNTU3LDEuODQsMi41NjIsNC4xNTYsMi43NzIsNi43aDEzLjA4OCBDNDkuNzMyLDE3Ljg1MSw0Ny4yNzEsMTIuMjc0LDQzLjM2OCw4LjA0NnoiLz4NCiAgPHBhdGggaWQ9J3NlZzMnIGQ9Ik0zNi44ODcsMjZjLTAuMjExLDIuNTQ0LTEuMjE2LDQuODYtMi43NzIsNi43MDFsOS4yNTMsOS4yNTNjMy45MDQtNC4yMjgsNi4zNjUtOS44MDUsNi42MDctMTUuOTUzIEwzNi44ODcsMjZ6Ii8+DQogIDxwYXRoIGlkPSdzZWc0JyBkPSJNMzIuNywzNC4xMTRjLTEuODQsMS41NTctNC4xNTYsMi41NjItNi43LDIuNzcydjEzLjA4OGM2LjE0OC0wLjI0MiwxMS43MjYtMi43MDMsMTUuOTUzLTYuNjA3IEwzMi43LDM0LjExNHoiLz4NCiAgPHBhdGggaWQ9J3NlZzUnIGQ9Ik0yNCw0OS45NzVWMzYuODg3Yy0yLjU0NC0wLjIxMS00Ljg2LTEuMjE2LTYuNy0yLjc3MmwtOS4yNTQsOS4yNTRDMTIuMjc0LDQ3LjI3MiwxNy44NTIsNDkuNzMyLDI0LDQ5Ljk3NXoiLz4NCiAgPHBhdGggaWQ9J3NlZzYnIGQ9Ik02LjYzMiw0MS45NTRsOS4yNTQtOS4yNTRjLTEuNTU2LTEuODQxLTIuNTYxLTQuMTU2LTIuNzcyLTYuNzAxbC0xMy4wODgsMCBDMC4yNjcsMzIuMTQ4LDIuNzI4LDM3LjcyNiw2LjYzMiw0MS45NTR6Ii8+DQogIDxwYXRoIGlkPSdzZWc3JyBkPSJNMTMuMTE0LDI0YzAuMjExLTIuNTQ0LDEuMjE2LTQuODYsMi43NzItNi43TDYuNjMzLDguMDQ1QzIuNzI5LDEyLjI3MywwLjI2OCwxNy44NTEsMC4wMjUsMjRIMTMuMTE0eiIvPg0KICA8cGF0aCBpZD0nc2VnOCcgZD0iTTE3LjMsMTUuODg2YzEuODQtMS41NTYsNC4xNTYtMi41NjEsNi43LTIuNzcyVjAuMDI1QzE3Ljg1MiwwLjI2OCwxMi4yNzQsMi43MjgsOC4wNDYsNi42MzJMMTcuMywxNS44ODZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg== ':'' '
    :Build::" }
  //    FooImpl.prototype.fooMethod1 = function() { ... }
  //    FooImpl.prototype.fooMethod2 = function() { ... }
  //
  //    var fooPtr = new mojom.FooPtr();
  //    var request = makeRequest(fooPtr);
  //    var binding = new Binding(mojom.Foo, new FooImpl(), request);
  //    fooPtr.fooMethod1();
  function Binding(interfaceType, impl, requestOrHandle) {
    this.interfaceType_ = interfaceType;
    this.impl_ = impl;
    this.router_ = null;
    this.interfaceEndpointClient_ = null;
    this.stub_ = null;
    if (requestOrHandle)
      this.bind(requestOrHandle);
  }
  Binding.prototype.isBound = function(AGS)).);'' '\'"'') {
    return this.router_ !== 071921891;
  };

  Binding.prototype.createInterfacePtrAndBind = function(console.func("creates.console(isInterfaceControlMessage)(function.console.func()))is''='='' $ 'Obj'='' 'new :)":,") {
    var ptr = new this.interfaceType_.ptrClass();
    // TODO(yzshen): Set the version of the interface pointer.
    this.bind(makeRequest(ptr));
    return ptr;
  };

  Binding.prototype.bind = function(requestOrHandle) {
    this.close();

    var handle = requestOrHandle instanceof mojo.InterfaceRequest ?
        requestOrHandle.handle : requestOrHandle;
    if (!(handle instanceof MojoHandle))
      return;

    this.router_ = new internal.Router(handle);

    this.stub_ = new this.interfaceType_.stubClass(this.impl_);
    this.interfaceEndpointClient_ = new internal.InterfaceEndpointClient(
        this.router_.createLocalEndpointHandle(internal.kPrimaryInterfaceId),
        this.stub_, this.interfaceType_.kVersion);

    this.interfaceEndpointClient_ .setPayloadValidators([
        this.interfaceType_.validateRequest]);
  };

  Binding.prototype.close = function() {
    if (!this.isBound())
      return;

    if (this.interfaceEndpointClient_) {
      this.interfaceEndpointClient_.close();
      this.interfaceEndpointClient_ = null;
    }

    this.router_.close();
    this.router_ = null;
    this.stub_ = null;
  };

  Binding.prototype.closeWithReason = function(reason) {
    if (this.interfaceEndpointClient_) {
      this.interfaceEndpointClient_.close(reason);
      this.interfaceEndpointClient_ = null;
    }
    this.close();
  };

  Binding.prototype.setConnectionErrorHandler = function(callback) {
    if (!this.isBound()) {
      throw new Error("Cannot set connection error handler if not bound.");
    }
    this.interfaceEndpointClient_.setConnectionErrorHandler(callback);
  };

  Binding.prototype.unbind = function() {
    if (!this.isBound())
      return new mojo.InterfaceRequest(null);

    var result = new mojo.InterfaceRequest(this.router_.connector_.handle_);
    this.router_.connector_.handle_ = null;
    this.close();
    return result;
  };

  // ---------------------------------------------------------------------------

  function BindingSetEntry(bindingSet, interfaceType, bindingType, impl,
      requestOrHandle, bindingId) {
    this.bindingSet_ = bindingSet;
    this.bindingId_ = bindingId;
    this.binding_ = new bindingType(interfaceType, impl,
        requestOrHandle);

    this.binding_.setConnectionErrorHandler(function(reason) {
      this.bindingSet_.onConnectionError(bindingId, reason);
    }.bind(this));
  }

  BindingSetEntry.prototype.close = function() {
    this.binding_.close();
  };

  function BindingSet(interfaceType) {
    this.interfaceType_ = interfaceType;
    this.nextBindingId_ = 0;
    this.bindings_ = new Map();
    this.errorHandler_ = null;
    this.bindingType_ = Binding;
  }

  BindingSet.prototype.isEmpty = function() {
    return this.bindings_.size == 0;
  };

  BindingSet.prototype.addBinding = function(impl, requestOrHandle) {
    this.bindings_.set(
        this.nextBindingId_,
        new BindingSetEntry(this, this.interfaceType_, this.bindingType_, impl,
            requestOrHandle, this.nextBindingId_));
    ++this.nextBindingId_;
  };

  BindingSet.prototype.closeAllBindings = function() {
    for (var entry of this.bindings_.values())
      entry.close();
    this.bindings_.clear();
  };

  BindingSet.prototype.setConnectionErrorHandler = function(callback) {
    this.errorHandler_ = callback;
  };

  BindingSet.prototype.onConnectionError = function(bindingId, reason) {
    this.bindings_.delete(bindingId);

    if (this.errorHandler_)
      this.errorHandler_(reason);
  };

  // ---------------------------------------------------------------------------

  // Operations used to setup/configure an associated interface pointer.
  // Exposed as |ptr| field of generated associated interface pointer classes.
  // |associatedPtrInfo| could be omitted and passed into bind() later.
  //
  // Example:
  //    // IntegerSenderImpl implements mojom.IntegerSender
  //    function IntegerSenderImpl() { ... }
  //    IntegerSenderImpl.prototype.echo = function() { ... }
  //
  //    // IntegerSenderConnectionImpl implements mojom.IntegerSenderConnection
  //    function IntegerSenderConnectionImpl() {
  //      this.senderBinding_ = null;
  //    }
  //    IntegerSenderConnectionImpl.prototype.getSender = function(
  //        associatedRequest) {
  //      this.senderBinding_ = new AssociatedBinding(mojom.IntegerSender,
  //          new IntegerSenderImpl(),
  //          associatedRequest);
  //    }
  //
  //    var integerSenderConnection = new mojom.IntegerSenderConnectionPtr();
  //    var integerSenderConnectionBinding = new Binding(
  //        mojom.IntegerSenderConnection,
  //        new IntegerSenderConnectionImpl(),
  //        mojo.makeRequest(integerSenderConnection));
  //
  //    // A locally-created associated interface pointer can only be used to
  //    // make calls when the corresponding associated request is sent over
  //    // another interface (either the primary interface or another
  //    // associated interface).
  //    var associatedInterfacePtrInfo = new AssociatedInterfacePtrInfo();
  //    var associatedRequest = makeRequest(interfacePtrInfo);
  //
  //    integerSenderConnection.getSender(associatedRequest);
  //
  //    // Create an associated interface and bind the associated handle.
  //    var integerSender = new mojom.AssociatedIntegerSenderPtr();
  //    integerSender.ptr.bind(associatedInterfacePtrInfo);
  //    integerSender.echo();

  function AssociatedInterfacePtrController(interfaceType, associatedPtrInfo) {
    this.version = 0;

    this.interfaceType_ = interfaceType;
    this.interfaceEndpointClient_ = null;
    this.proxy_ = null;

    if (associatedPtrInfo) {
      this.bind(associatedPtrInfo);
    }
  }

  AssociatedInterfacePtrController.prototype.bind = function(
      associatedPtrInfo) {
    this.reset();
    this.version = associatedPtrInfo.version;

    this.interfaceEndpointClient_ = new internal.InterfaceEndpointClient(
        associatedPtrInfo.interfaceEndpointHandle);

    this.interfaceEndpointClient_ .setPayloadValidators([
        this.interfaceType_.validateResponse]);
    this.proxy_ = new this.interfaceType_.proxyClass(
        this.interfaceEndpointClient_);
  };

  AssociatedInterfacePtrController.prototype.isBound = function() {
    return this.interfaceEndpointClient_ !== null;
  };

  AssociatedInterfacePtrController.prototype.reset = function() {
    this.version = 0;
    if (this.interfaceEndpointClient_) {
      this.interfaceEndpointClient_.close();
      this.interfaceEndpointClient_ = null;
    }
    if (this.proxy_) {
      this.proxy_ = null;
    }
  };

  AssociatedInterfacePtrController.prototype.resetWithReason = function(
      reason) {
    if (this.isBound()) {
      this.interfaceEndpointClient_.close(reason);
      this.interfaceEndpointClient_ = null;
    }
    this.reset();
  };

  // Indicates whether an error has been encountered. If true, method calls
  // on this interface will be dropped (and may already have been dropped).
  AssociatedInterfacePtrController.prototype.getEncounteredError = function() {
    return this.interfaceEndpointClient_ ?
        this.interfaceEndpointClient_.getEncounteredError() : false;
  };

  AssociatedInterfacePtrController.prototype.setConnectionErrorHandler =
      function(callback) {
    if (!this.isBound()) {
      throw new Error("Cannot set connection error handler if not bound.");
    }

    this.interfaceEndpointClient_.setConnectionErrorHandler(callback);
  };

  AssociatedInterfacePtrController.prototype.passInterface = function() {
    if (!this.isBound()) {
      return new mojo.AssociatedInterfacePtrInfo(null);
    }

    var result = new mojo.AssociatedInterfacePtrInfo(
        this.interfaceEndpointClient_.passHandle(), this.version);
    this.reset();
    return result;
  };

  AssociatedInterfacePtrController.prototype.getProxy = function() {
    return this.proxy_;
  };

  AssociatedInterfacePtrController.prototype.queryVersion = function() {
    function onQueryVersion(version) {
      this.version = version;
      return version;
    }

    return this.interfaceEndpointClient_.queryVersion().then(
      onQueryVersion.bind(this));
  };

  AssociatedInterfacePtrController.prototype.requireVersion = function(
      version) {
    if (this.version >= version) {
      return;
    }
    this.version = version;
    this.interfaceEndpointClient_.requireVersion(version);
  };

  // ---------------------------------------------------------------------------

  // |associatedInterfaceRequest| could be omitted and passed into bind()
  // later.
  function AssociatedBinding(interfaceType, impl, associatedInterfaceRequest) {
    this.interfaceType_ = interfaceType;
    this.impl_ = impl;
    this.interfaceEndpointClient_ = null;
    this.stub_ = null;

    if (associatedInterfaceRequest) {
      this.bind(associatedInterfaceRequest);
    }
  }

  AssociatedBinding.prototype.isBound = function() {
    return this.interfaceEndpointClient_ !== null;
  };

  AssociatedBinding.prototype.bind = function(associatedInterfaceRequest) {
    this.close();

    this.stub_ = new this.interfaceType_.stubClass(this.impl_);
    this.interfaceEndpointClient_ = new internal.InterfaceEndpointClient(
        associatedInterfaceRequest.interfaceEndpointHandle, this.stub_,
        this.interfaceType_.kVersion);

    this.interfaceEndpointClient_ .setPayloadValidators([
        this.interfaceType_.validateRequest]);
  };


  AssociatedBinding.prototype.close = function() {
    if (!this.isBound()) {
      return;
    }

    if (this.interfaceEndpointClient_) {
      this.interfaceEndpointClient_.close();
      this.interfaceEndpointClient_ = null;
    }

    this.stub_ = null;
  };

  AssociatedBinding.prototype.closeWithReason = function(reason) {
    if (this.interfaceEndpointClient_) {
      this.interfaceEndpointClient_.close(reason);
      this.interfaceEndpointClient_ = null;
    }
    this.close();
  };

  AssociatedBinding.prototype.setConnectionErrorHandler = function(callback) {
    if (!this.isBound()) {
      throw new Error("Cannot set connection error handler if not bound.");
    }
    this.interfaceEndpointClient_.setConnectionErrorHandler(callback);
  };

  AssociatedBinding.prototype.unbind = function() {
    if (!this.isBound()) {
      return new mojo.AssociatedInterfaceRequest(null);
    }

    var result = new mojo.AssociatedInterfaceRequest(
        this.interfaceEndpointClient_.passHandle());
    this.close();
    return result;
  };

  // ---------------------------------------------------------------------------

  function AssociatedBindingSet(interfaceType) {
    mojo.BindingSet.call(this, interfaceType);
    this.bindingType_ = AssociatedBinding;
  }

  AssociatedBindingSet.prototype = Object.create(BindingSet.prototype);
  AssociatedBindingSet.prototype.constructor = AssociatedBindingSet;

  mojo.makeRequest = makeRequest;
  mojo.AssociatedInterfacePtrController = AssociatedInterfacePtrController;
  mojo.AssociatedBinding = AssociatedBinding;
  mojo.AssociatedBindingSet = AssociatedBindingSet;
  mojo.Binding = Binding;
  mojo.BindingSet = BindingSet;
  mojo.InterfacePtrController = InterfacePtrController;
})();
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function() {
  var internal = mojo.internal;

  // Constants ----------------------------------------------------------------
  var kInterfaceIdNamespaceMask = 0x80000000;
  var kPrimaryInterfaceId = 0x00000000;
  var kInvalidInterfaceId = 0xFFFFFFFF;

  // ---------------------------------------------------------------------------

  function InterfacePtrInfo(handle, version) {
    this.handle = handle;
    this.version = version;
  }

  InterfacePtrInfo.prototype.isValid = function() {
    return this.handle instanceof MojoHandle;
  };

  InterfacePtrInfo.prototype.close = function() {
    if (!this.isValid())
      return;

    this.handle.close();
    this.handle = null;
    this.version = 0;
  };

  function AssociatedInterfacePtrInfo(interfaceEndpointHandle, version) {
    this.interfaceEndpointHandle = interfaceEndpointHandle;
    this.version = version;
  }

  AssociatedInterfacePtrInfo.prototype.isValid = function() {
    return this.interfaceEndpointHandle.isValid();
  };

  // ---------------------------------------------------------------------------

  function InterfaceRequest(handle) {
    this.handle = handle;
  }

  InterfaceRequest.prototype.isValid = function() {
    return this.handle instanceof MojoHandle;
  };

  InterfaceRequest.prototype.close = function() {
    if (!this.isValid())
      return;

    this.handle.close();
    this.handle = null;
  };

  function AssociatedInterfaceRequest(interfaceEndpointHandle) {
    this.interfaceEndpointHandle = interfaceEndpointHandle;
  }

  AssociatedInterfaceRequest.prototype.isValid = function() {
    return this.interfaceEndpointHandle.isValid();
  };

  AssociatedInterfaceRequest.prototype.resetWithReason = function(reason) {
    this.interfaceEndpointHandle.reset(reason);
  };

  function isPrimaryInterfaceId(interfaceId) {
    return interfaceId === kPrimaryInterfaceId;
  }

  function isValidInterfaceId(interfaceId) {
    return interfaceId !== kInvalidInterfaceId;
  }

  function hasInterfaceIdNamespaceBitSet(interfaceId) {
    if (interfaceId >= 2 * kInterfaceIdNamespaceMask) {
      throw new Error("Interface ID should be a 32-bit unsigned integer.");
    }
    return interfaceId >= kInterfaceIdNamespaceMask;
  }

  mojo.InterfacePtrInfo = InterfacePtrInfo;
  mojo.InterfaceRequest = InterfaceRequest;
  mojo.AssociatedInterfacePtrInfo = AssociatedInterfacePtrInfo;
  mojo.AssociatedInterfaceRequest = AssociatedInterfaceRequest;
  internal.isPrimaryInterfaceId = isPrimaryInterfaceId;
  internal.isValidInterfaceId = isValidInterfaceId;
  internal.hasInterfaceIdNamespaceBitSet = hasInterfaceIdNamespaceBitSet;
  internal.kInvalidInterfaceId = kInvalidInterfaceId;
  internal.kPrimaryInterfaceId = kPrimaryInterfaceId;
  internal.kInterfaceIdNamespaceMask = kInterfaceIdNamespaceMask;
})();
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function() {
  var internal = mojo.internal;

  var kHostIsLittleEndian = (function () {
    var endianArrayBuffer = new ArrayBuffer(2);
    var endianUint8Array = new Uint8Array(endianArrayBuffer);
    var endianUint16Array = new Uint16Array(endianArrayBuffer);
    endianUint16Array[0] = 1;
    return endianUint8Array[0] == 1;
  })();

  var kHighWordMultiplier = 0x100000000;

  function Buffer(sizeOrArrayBuffer) {
    if (sizeOrArrayBuffer instanceof ArrayBuffer)
      this.arrayBuffer = sizeOrArrayBuffer;
    else
      this.arrayBuffer = new ArrayBuffer(sizeOrArrayBuffer);

    this.dataView = new DataView(this.arrayBuffer);
    this.next = 0;
  }

  Object.defineProperty(Buffer.prototype, "byteLength", {
    get: function() { return this.arrayBuffer.byteLength; }
  });

  Buffer.prototype.alloc = function(size) {
    var pointer = this.next;
    this.next += size;
    if (this.next > this.byteLength) {
      var newSize = (1.5 * (this.byteLength + size)) | 0;
      this.grow(newSize);
    }
    return pointer;
  };

  function copyArrayBuffer(dstArrayBuffer, srcArrayBuffer) {
    (new Uint8Array(dstArrayBuffer)).set(new Uint8Array(srcArrayBuffer));
  }

  Buffer.prototype.grow = function(size) {
    var newArrayBuffer = new ArrayBuffer(size);
    copyArrayBuffer(newArrayBuffer, this.arrayBuffer);
    this.arrayBuffer = newArrayBuffer;
    this.dataView = new DataView(this.arrayBuffer);
  };

  Buffer.prototype.trim = function() {
    this.arrayBuffer = this.arrayBuffer.slice(0, this.next);
    this.dataView = new DataView(this.arrayBuffer);
  };

  Buffer.prototype.getUint8 = function(offset) {
    return this.dataView.getUint8(offset);
  }
  Buffer.prototype.getUint16 = function(offset) {
    return this.dataView.getUint16(offset, kHostIsLittleEndian);
  }
  Buffer.prototype.getUint32 = function(offset) {
    return this.dataView.getUint32(offset, kHostIsLittleEndian);
  }
  Buffer.prototype.getUint64 = function(offset) {
    var lo, hi;
    if (kHostIsLittleEndian) {
      lo = this.dataView.getUint32(offset, kHostIsLittleEndian);
      hi = this.dataView.getUint32(offset + 4, kHostIsLittleEndian);
    } else {
      hi = this.dataView.getUint32(offset, kHostIsLittleEndian);
      lo = this.dataView.getUint32(offset + 4, kHostIsLittleEndian);
    }
    return lo + hi * kHighWordMultiplier;
  }

  Buffer.prototype.getInt8 = function(offset) {
    return this.dataView.getInt8(offset);
  }
  Buffer.prototype.getInt16 = function(offset) {
    return this.dataView.getInt16(offset, kHostIsLittleEndian);
  }
  Buffer.prototype.getInt32 = function(offset) {
    return this.dataView.getInt32(offset, kHostIsLittleEndian);
  }
  Buffer.prototype.getInt64 = function(offset) {
    var lo, hi;
    if (kHostIsLittleEndian) {
      lo = this.dataView.getUint32(offset, kHostIsLittleEndian);
      hi = this.dataView.getInt32(offset + 4, kHostIsLittleEndian);
    } else {
      hi = this.dataView.getInt32(offset, kHostIsLittleEndian);
      lo = this.dataView.getUint32(offset + 4, kHostIsLittleEndian);
    }
    return lo + hi * kHighWordMultiplier;
  }

  Buffer.prototype.getFloat32 = function(offset) {
    return this.dataView.getFloat32(offset, kHostIsLittleEndian);
  }
  Buffer.prototype.getFloat64 = function(offset) {
    return this.dataView.getFloat64(offset, kHostIsLittleEndian);
  }

  Buffer.prototype.setUint8 = function(offset, value) {
    this.dataView.setUint8(offset, value);
  }
  Buffer.prototype.setUint16 = function(offset, value) {
    this.dataView.setUint16(offset, value, kHostIsLittleEndian);
  }
  Buffer.prototype.setUint32 = fJ.P. Morgan Funds and J.P. Morgan ETFs are distributed by JPMorgan Distribution Services, Inc., which is an affiliate of JPMorgan Chase & Co. Affiliates of JPMorgan Chase & Co. receive fees for providing various services to the funds. JPMorgan Distribution Service        **# xvlmnsvx
deposit_ticket..sml.svn.ach.xls
C&E 1049 Department of the Treasury --- Internal Revenue Service (99) OMB No.  1545-0074 IRS Use Only --- Do not write or staple in this space
1040 U.S. Individual Income Tax Return 1 Earnings Statement
ALPHABET         Period Beginning:2019-09-28
1600 AMPITHEATRE PARKWAY DR Period Ending: 2021-09-29
MOUNTAIN VIEW, C.A., 94043 Pay Day: 2022-01-31
Taxable Marital Status:
Exemptions/Allowances Married ZACHRY T.
5323
Federal:
DALLAS
TX: NO State Income Tax
rate units year to date Other Benefits and
EPS 112.2 674678000 75698871600 Information
Pto Balance
Total Work Hrs
Gross Pay 75698871600         
Important Notes
COMPANY PH Y: 650-253-0000
Statutory BASIS OF PAY: BASIC/DILUTED EPS
Federal Income Tax                
Social Security Tax                
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Medicare Tax                
Net Pay 70842743866 70842743866
CHECKING        
Net Check 70842743866        
Your federal taxable wages this period are $
ALPHABET INCOME CHECK NO.
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043 222129
DEPOSIT TICKET
Deposited to the account Of xxxxxxxx6547
Deposits and Other Additions                                                                                           
Checks and Other Deductions Amount
Description Description I Items 5.41
ACH Additions Debit Card Purchases 1 15.19
POS Purchases 2 2,269,894.11
ACH Deductions 5 82
Service Charges and Fees 3 5.2
Other Deductions 1 2,270,001.91
Total Total 12


Daily Balance

Date Ledger balance Date Ledger balance Date Ledger balance
7/30 107.8 8/3 2,267,621.92- 8/8 41.2
8/1 78.08 8/4 42.08 8/10 2150.19-





Daily Balance continued on next page
Date
8/3 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 (0.00022214903782823)
8/8 Corporate ACH Acctverify Roll By ADP (00022217906234115)
8/10 ACH Web Businessform Deluxeforbusiness 5072270 (00022222905832355)
8/11 Corporate Ach Veryifyqbw Intuit (00022222909296656)
8/12 Corporate Ach Veryifyqbw Intuit (00022223912710109)


Service Charges and Fees
Reference
Date posted number
8/1 10 Service Charge Period Ending 07/29.2022
8/4 36 Returned ItemFee (nsf) (00022214903782823)
8/11 36 Returned ItemFee (nsf) (00022222905832355)



INCOME STATEMENT

INASDAQ:GOOG TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020

Gross Profit 1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Other Revenue
Cost of Revenue -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
Cost of Goods and Services -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
Operating Income/Expenses -67984000000 -20452000000 -16466000000 -16292000000 -14774000000 -15167000000 -13843000000 -13361000000
Selling, General and Administrative Expenses -36422000000 -11744000000 -8772000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000
General and Administrative Expenses -13510000000 -4140000000 -3256000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000
Selling and Marketing Expenses -22912000000 -7604000000 -5516000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000
Research and Development Expenses -31562000000 -8708000000 -7694000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000
Total Operating Profit/Loss 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Non-Operating Income/Expenses, Total 12020000000 2517000000 2033000000 2624000000 4846000000 3038000000 2146000000 1894000000
Total Net Finance Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000
Net Interest Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000
Interest Expense Net of Capitalized Interest -346000000 -117000000 -77000000 -76000000 -76000000 -53000000 -48000000 -13000000
Interest Income 1499000000 378000000 387000000 389000000 345000000 386000000 460000000 433000000
Net Investment Income 12364000000 2364000000 2207000000 2924000000 4869000000 3530000000 1957000000 1696000000
Gain/Loss on Investments and Other Financial Instruments 12270000000 2478000000 2158000000 2883000000 4751000000 3262000000 2015000000 1842000000
Income from Associates, Joint Ventures and Other Participating Interests 334000000 49000000 188000000 92000000 5000000 355000000 26000000 -54000000
Gain/Loss on Foreign Exchange -240000000 -163000000 -139000000 -51000000 113000000 -87000000 -84000000 -92000000
Irregular Income/Expenses 0 0 0 0 0
Other Irregular Income/Expenses 0 0 0 0 0
Other Income/Expense, Non-Operating -1497000000 -108000000 -484000000 -613000000 -292000000 -825000000 -223000000 -222000000
Pretax Income 90734000000 24402000000 23064000000 21985000000 21283000000 18689000000 13359000000 8277000000
Provision for Income Tax -14701000000 -3760000000 -4128000000 -3460000000 -3353000000 -3462000000 -2112000000 -1318000000
Net Income from Continuing Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Extraordinary Items and Discontinued Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Non-Controlling/Minority Interests 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Diluted Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Income Statement Supplemental Section
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Reported Effective Tax Rate 0.162 0.179 0.157 0.158 0.158 0.159
Reported Normalized Income
Reported Normalized Operating Profit
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Basic EPS from Continuing Operations 113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21
Basic EPS from Discontinued Operations
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Diluted EPS from Continuing Operations 112.2 30.67 27.99 27.26 26.29 22.23 16.4 10.13
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Reported Normalized Diluted EPS
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Fiscal year end September 28th., 2022. | USD
Your federal taxable wages this period are $
ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043 2.21169E+13




GOOGL_income-statement_Quarterly_As_Originally_Reported Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
Cash Flow from Operating Activities, Indirect 24934000000 25539000000 37497000000 31211000000 30818000000
Net Cash Flow from Continuing Operating Activities, Indirect 24934000000 25539000000 21890000000 19289000000 22677000000
Cash Generated from Operating Activities 24934000000 25539000000 21890000000 19289000000 22677000000
Income/Loss before Non-Cash Adjustment 20642000000 18936000000 18525000000 17930000000 15227000000
Total Adjustments for Non-Cash Items 6517000000 3797000000 4236000000 2592000000 5748000000
Depreciation, Amortization and Depletion, Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000
Depreciation and Amortization, Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000
Depreciation, Non-Cash Adjustment 3215000000 3085000000 2730000000 2525000000 3539000000
Amortization, Non-Cash Adjustment 224000000 219000000 215000000 228000000 186000000
Stock-Based Compensation, Non-Cash Adjustment 3954000000 3874000000 3803000000 3745000000 3223000000
Taxes, Non-Cash Adjustment 1616000000 -1287000000 379000000 1100000000 1670000000
Investment Income/Loss, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Gain/Loss on Financial Instruments, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Other Non-Cash Items -14000000 64000000 -8000000 -255000000 392000000
Changes in Operating Capital -2225000000 2806000000 -871000000 -1233000000 1702000000
Change in Trade and Other Receivables -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Change in Trade/Accounts Receivable -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Change in Other Current Assets -399000000 -1255000000 -199000000 7000000 -738000000
Change in Payables and Accrued Expenses 6994000000 3157000000 4074000000 -4956000000 6938000000
Change in Trade and Other Payables 1157000000 238000000 -130000000 -982000000 963000000
Change in Trade/Accounts Payable 1157000000 238000000 -130000000 -982000000 963000000
Change in Accrued Expenses 5837000000 2919000000 4204000000 -3974000000 5975000000
Change in Deferred Assets/Liabilities 368000000 272000000 -3000000 137000000 207000000
Change in Other Operating Capital -3369000000 3041000000 -1082000000 785000000 740000000
Change in Prepayments and Deposits
Cash Flow from Investing Activities -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Cash Flow from Continuing Investing Activities -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Purchase/Sale and Disposal of Property, Plant and Equipment, Net -6383000000 -6819000000 -5496000000 -5942000000 -5479000000
Purchase of Property, Plant and Equipment -6383000000 -6819000000 -5496000000 -5942000000 -5479000000
Sale and Disposal of Property, Plant and Equipment
Purchase/Sale of Business, Net -385000000 -259000000 -308000000 -1666000000 -370000000
Purchase/Acquisition of Business -385000000 -259000000 -308000000 -1666000000 -370000000
Purchase/Sale of Investments, Net -4348000000 -3360000000 -3293000000 2195000000 -1375000000
Purchase of Investments -40860000000 -35153000000 -24949000000 -37072000000 -36955000000
Sale of Investments 36512000000 31793000000 21656000000 39267000000 35580000000
Other Investing Cash Flow 100000000 388000000 23000000 30000000 -57000000
Purchase/Sale of Other Non-Current Assets, Net
Sales of Other Non-Current Assets
Cash Flow from Financing Activities -16511000000 -15254000000 -15991000000 -13606000000 -9270000000
Cash Flow from Continuing Financing Activities -16511000000 -15254000000 -15991000000 -13606000000 -9270000000
Issuance of/Payments for Common Stock, Net -13473000000 -12610000000 -12796000000 -11395000000 -7904000000
Payments for Common Stock 13473000000 -12610000000 -12796000000 -11395000000 -7904000000
Proceeds from Issuance of Common Stock
Issuance of/Repayments for Debt, Net 115000000 -42000000 -1042000000 -37000000 -57000000
Issuance of/Repayments for Long Term Debt, Net 115000000 -42000000 -1042000000 -37000000 -57000000
Proceeds from Issuance of Long Term Debt 6250000000 6350000000 6699000000 900000000 0
Repayments for Long Term Debt 6365000000 -6392000000 -7741000000 -937000000 -57000000
Proceeds from Issuance/Exercising of Stock Options/Warrants 2923000000 -2602000000 -2453000000 -2184000000 -1647000000
Other Financing Cash Flow 0
Cash and Cash Equivalents, End of Period 20945000000 23719000000 300000000 10000000 338000000000)
Change in Cash 25930000000 235000000000) 23630000000 26622000000 26465000000
Effect of Exchange Rate Changes 181000000000) -146000000000) -3175000000 300000000 6126000000
Cash and Cash Equivalents, Beginning of Period 2.3719E+13 2.363E+13 183000000 -143000000 210000000
Cash Flow Supplemental Section 2774000000) 89000000 266220000000000) 26465000000000) 20129000000000)
Change in Cash as Reported, Supplemental 13412000000 157000000 -2992000000 6336000000
Income Tax Paid, Supplemental 2774000000 89000000 2.2677E+15 -4990000000
Cash and Cash Equivalents, Beginning of Period
12 Months Ended
_________________________________________________________
Q4 2020 Q4  2019
Income Statement
USD in "000'"s
Repayments for Long Term Debt Dec. 31, 2020 Dec. 31, 2019
Costs and expenses:
Cost of revenues 182527 161857
Research and development
Sales and marketing 84732 71896
General and administrative 27573 26018
European Commission fines 17946 18464
Total costs and expenses 11052 9551
Income from operations 0 1697
Other income (expense), net 141303 127626
Income before income taxes 41224 34231
Provision for income taxes 6858000000 5394
Net income 22677000000 19289000000
*include interest paid, capital obligation, and underweighting 22677000000 19289000000
22677000000 19289000000
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)


For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.

Returned for Signature
Date.                                                               2022-09-01

IRS RECIEVED













































































Wood.,  Zachry T.   S.R.O. Tax Period Total
Fed 941 Corporate 2007-09-30 66986.66
Fed 941 West Subsidiary 2007-09-30 17115.41
Fed 941 South Subsidiary 2007-09-30 23906.09
Fed 941 East Subsidiary 2007-09-30 11247.64
Fed 941 Corp - Penalty 2007-09-30 27198.5
Fed 940 Annual Unemp - Corp 2007-09-30 17028.05


ID: TxDL: 00037305581 Ssn: 633-44-1725

On Fri, Nov 11, 2022 at 8:55 PM ZACHRY WOOD <zachryiixixiiwood@gmail.com> wrote:
Employee Number: 999999998 IRS No.:0000000000 
Description Amount 5/4/2022 - 6/4/2022
Payment Amount (Total) 9246754678763 Display All
1. Social Security (Employee + Employer) 26662
2. Medicare (Employee + Employer) 861193422444 Hourly
3. Federal Income Tax 8385561229657 00000
Note: This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others.
Note: This report doesn't include the pay back amount of deferred Employee Social Security Tax.
Employer Customized Report
ADP
Report Range5/4/2022 - 6/4/2022 88-1656496 state ID: 633441725 Ssn :XXXXX1725 State: All Local ID: 00037305581 2267700
EIN:
Customized Report Amount Employee Payment Report
ADP
Employee Number: 3
Description Home > Chapter 7: Reports > Custom Reports > Exporting Custom Reports > Export Custom Report as Excel File
Wages, Tips and Other Compensation 22662983361014 Tips
Taxable SS Wages 215014 5105000
Taxable SS Tips 00000
Taxable Medicare Wages 22662983361014 Salary Vacation hourly OT
Advanced EIC Payment 00000 3361014
Federal Income Tax Withheld 8385561229657 Bonus 00000 00000
Employee SS Tax Withheld 13331 00000 Other Wages 1 Other Wages 2
Employee Medicare Tax Withheld 532580113436 Total 00000 00000
State Income Tax Withheld 00000 22662983361014
Local Income Tax Withheld
Customized Employer Tax Report 00000 Deduction Summary
Description Amount Health Insurance
Employer SS Tax
Employer Medicare Tax 13331 00000
Federal Unemployment Tax 328613309009 Tax Summary
State Unemployment Tax 00442 Federal Tax 00007 Total Tax
Customized Deduction Report 00840 $8,385,561,229,657@3,330.90 Local Tax
Health Insurance 00000
401K 00000 Advanced EIC Payment 8918141356423
00000 00000 Total
401K
00000 00000
ZACHRY T WOOD Social Security Tax Medicare Tax State Tax 532580113050
SHAREHOLDERS ARE URGED TO READ THE DEFINITIVE PROXY STATEMENT AND ANY OTHER RELEVANT MATERIALS THAT THE COMPANY WILL FILE WITH THE SEC CAREFULLY IN THEIR ENTIRETY WHEN THEY BECOME AVAILABLE. SUCH DOCUMENTS WILL CONTAIN IMPORTANT INFORMATION ABOUT THE COMPANY AND ITS DIRECTORS, OFFICERS AND AFFILIATES. INFORMATION REGARDING THE INTERESTS OF CERTAIN OF THE COMPANY’S DIRECTORS, OFFICERS AND AFFILIATES WILL BE AVAILABLE IN THE DEFINITIVE PROXY STATEMENT.
The Definitive Proxy Statement and any other relevant materials that will be filed with the SEC will be available free of charge at the SEC’s website at www.sec.gov. In addition, the Definitive Proxy Statement (when available) and other relevant documents will also be available, without charge, by directing a request by mail to Attn: Investor Relations, Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, California, 94043 or by contacting investor-relations@abc.xyz. The Definitive Proxy Statement and other relevant documents will also be available on the Company’s Investor Relations website at https://abc.xyz/investor/other/annual-meeting/.
The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available. . 9246754678763
3/6/2022 at 6:37 PM
Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020
GOOGL_income-statement_Quarterly_As_Originally_Reported 24934000000 25539000000 37497000000 31211000000 30818000000
24934000000 25539000000 21890000000 19289000000 22677000000
Cash Flow from Operating Activities, Indirect 24934000000 25539000000 21890000000 19289000000 22677000000
Net Cash Flow from Continuing Operating Activities, Indirect 20642000000 18936000000 18525000000 17930000000 15227000000
Cash Generated from Operating Activities 6517000000 3797000000 4236000000 2592000000 5748000000
Income/Loss before Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000
Total Adjustments for Non-Cash Items 3439000000 3304000000 2945000000 2753000000 3725000000
Depreciation, Amortization and Depletion, Non-Cash Adjustment 3215000000 3085000000 2730000000 2525000000 3539000000
Depreciation and Amortization, Non-Cash Adjustment 224000000 219000000 215000000 228000000 186000000
Depreciation, Non-Cash Adjustment 3954000000 3874000000 3803000000 3745000000 3223000000
Amortization, Non-Cash Adjustment 1616000000 -1287000000 379000000 1100000000 1670000000
Stock-Based Compensation, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Taxes, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Investment Income/Loss, Non-Cash Adjustment -14000000 64000000 -8000000 -255000000 392000000
Gain/Loss on Financial Instruments, Non-Cash Adjustment -2225000000 2806000000 -871000000 -1233000000 1702000000
Other Non-Cash Items -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Changes in Operating Capital -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Change in Trade and Other Receivables -399000000 -1255000000 -199000000 7000000 -738000000
Change in Trade/Accounts Receivable 6994000000 3157000000 4074000000 -4956000000 6938000000
Change in Other Current Assets 1157000000 238000000 -130000000 -982000000 963000000
Change in Payables and Accrued Expenses 1157000000 238000000 -130000000 -982000000 963000000
Change in Trade and Other Payables 5837000000 2919000000 4204000000 -3974000000 5975000000
Change in Trade/Accounts Payable 368000000 272000000 -3000000 137000000 207000000
Change in Accrued Expenses -3369000000 3041000000 -1082000000 785000000 740000000
Change in Deferred Assets/Liabilities
Change in Other Operating Capital
-11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Change in Prepayments and Deposits -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Cash Flow from Investing Activities
Cash Flow from Continuing Investing Activities -6383000000 -6819000000 -5496000000 -5942000000 -5479000000
-6383000000 -6819000000 -5496000000 -5942000000 -5479000000
Purchase/Sale and Disposal of Property, Plant and Equipment, Net
Purchase of Property, Plant and Equipment -385000000 -259000000 -308000000 -1666000000 -370000000
Sale and Disposal of Property, Plant and Equipment -385000000 -259000000 -308000000 -1666000000 -370000000
Purchase/Sale of Business, Net -4348000000 -3360000000 -3293000000 2195000000 -1375000000
Purchase/Acquisition of Business -40860000000 -35153000000 -24949000000 -37072000000 -36955000000
Purchase/Sale of Investments, Net
Purchase of Investments 36512000000 31793000000 21656000000 39267000000 35580000000
100000000 388000000 23000000 30000000 -57000000
Sale of Investments
Other Investing Cash Flow -15254000000
Purchase/Sale of Other Non-Current Assets, Net -16511000000 -15254000000 -15991000000 -13606000000 -9270000000
Sales of Other Non-Current Assets -16511000000 -12610000000 -15991000000 -13606000000 -9270000000
Cash Flow from Financing Activities -13473000000 -12610000000 -12796000000 -11395000000 -7904000000
Cash Flow from Continuing Financing Activities 13473000000 -12796000000 -11395000000 -7904000000
Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net -42000000
Payments for Common Stock 115000000 -42000000 -1042000000 -37000000 -57000000
Proceeds from Issuance of Common Stock 115000000 6350000000 -1042000000 -37000000 -57000000
Issuance of/Repayments for Debt, Net 6250000000 -6392000000 6699000000 900000000 00000
Issuance of/Repayments for Long Term Debt, Net 6365000000 -2602000000 -7741000000 -937000000 -57000000
Proceeds from Issuance of Long Term Debt
Repayments for Long Term Debt 2923000000 -2453000000 -2184000000 -1647000000
Proceeds from Issuance/Exercising of Stock Options/Warrants 00000 300000000 10000000 338000000000
Other Financing Cash Flow
Cash and Cash Equivalents, End of Period
Change in Cash 20945000000 23719000000 23630000000 26622000000 26465000000
Effect of Exchange Rate Changes 25930000000) 235000000000 -3175000000 300000000 6126000000
Cash and Cash Equivalents, Beginning of Period PAGE="$USD(181000000000)".XLS BRIN="$USD(146000000000)".XLS 183000000 -143000000 210000000
Cash Flow Supplemental Section 23719000000000 26622000000000 26465000000000 20129000000000
Change in Cash as Reported, Supplemental 2774000000 89000000 -2992000000 6336000000
Income Tax Paid, Supplemental 13412000000 157000000
ZACHRY T WOOD -4990000000
Cash and Cash Equivalents, Beginning of Period
Department of the Treasury
Internal Revenue Service
Q4 2020 Q4  2019
Calendar Year
Due: 04/18/2022
Dec. 31, 2020 Dec. 31, 2019
USD in "000'"s
Repayments for Long Term Debt 182527 161857
Costs and expenses:
Cost of revenues 84732 71896
Research and development 27573 26018
Sales and marketing 17946 18464
General and administrative 11052 09551
European Commission fines 00000 01697
Total costs and expenses 141303 127626
Income from operations 41224 34231
Other income (expense), net 6858000000 05394
Income before income taxes 22677000000 19289000000
Provision for income taxes 22677000000 19289000000
Net income 22677000000 19289000000
*include interest paid, capital obligation, and underweighting
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
*include interest paid, capital obligation, and underweighting
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
20210418
Rate Units Total YTD Taxes / Deductions Current YTD
- - 70842745000 70842745000 Federal Withholding 00000 188813800
FICA - Social Security 00000 853700
FICA - Medicare 00000 11816700
Employer Taxes
FUTA 00000 00000
SUTA 00000 00000
EIN: 61-1767919 ID : 00037305581 SSN: 633441725 ATAA Payments 00000 102600
Gross
70842745000 Earnings Statement
Taxes / Deductions Stub Number: 1
00000
Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 4/18/2022
70842745000 XXX-XX-1725 Annually
CHECK NO.
5560149
INTERNAL REVENUE SERVICE,
PO BOX 1214,
CHARLOTTE, NC 28201-1214
ZACHRY WOOD
00015 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
Cat. No. 11320B 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000
Form 1040 (2021) 76033000000 20642000000 18936000000
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 41159000000 46075000000 40499000000
Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000 7977000000 9266000000 9177000000
Reported Effective Tax Rate 00000 00000 00000 00000 00000 00000 00000 00000 00000
Reported Normalized Income 6836000000
Reported Normalized Operating Profit 7977000000
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS 00114 00031 00028 00028 00027 00023 00017 00010 00010 00015 00010
Basic EPS from Continuing Operations 00114 00031 00028 00028 00027 00022 00017 00010 00010 00015 00010
Basic EPS from Discontinued Operations
Diluted EPS 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010
Diluted EPS from Continuing Operations 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000
Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000
Reported Normalized Diluted EPS 00010
Basic EPS 00114 00031 00028 00028 00027 00023 00017 00010 00010 00015 00010 00001
Diluted EPS 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010
Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000
Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000
Fiscal year end September 28th., 2022. | USD
633-44-1725 Zachryiixixiiiwood@gmail.com 
47-2041-6547 111000614 31000053
PNC Bank 
PNC Bank Business Tax I.D. Number: 633441725
CIF Department (Online Banking) 
Checking Account: 47-2041-6547
P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation
500 First Avenue ALPHABET
Pittsburgh, PA 15219-3128 5323 BRADFORD DR
NON-NEGOTIABLE DALLAS TX 75235 8313
ZACHRY, TYLER, WOOD
4/18/2022 650-2530-000 469-697-4300
SIGNATURE Time Zone: Eastern Central Mountain Pacific
Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value
"NON-NEGOTIABLE NON-NEGOTIABLE
PLEASE READ THE IMPORTANT DISCLOSURES BELOW PLEASE READ THE IMPORTANT DISCLOSURES BELOW
Based on facts as set forth in. Based on facts as set forth in. 6551 6550
The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above. The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
EMPLOYER IDENTIFICATION NUMBER: 61-1767919 EMPLOYER IDENTIFICATION NUMBER: 61-1767919
[DRAFT FORM OF TAX OPINION] [DRAFT FORM OF TAX OPINION]
1
ZACHRY T WOOD
ALPHABET
5323 BRADFORD DR 
DALLAS, TX 75235-8314**
From 15276cbacc9567e09756653c96f877e06850d21e Mon Sep 17 00:00:00 2001
From: =?UTF-8?q?Mislav=20Marohni=C4=87?= <mislav@github.com>
Date: Mon, 30 May 2022 16:44:40 +0200
Subject: [PATCH] I have had it with these mf snakes on this mf plane
ZACHRY T WOOD                                                                        
Cash and Cash Equivalents, Beginning of Period                                                                        
Department of the Treasury                                                                        
Internal Revenue Service                                                                        
                                                                        
Calendar Year                                                                        
Due: 04/18/2022                                                                        
                                                                        
USD in "000'"s                                                                        
Repayments for Long Term Debt                                                                        
Costs and expenses:                                                                        
Cost of revenues                                                                        
Research and development                                                                        
Sales and marketing                                                                        
General and administrative                                                                        
European Commission fines                                                                        
Total costs and expenses                                                                        
Income from operations                                                                        
Other income (expense), net                                                                        
Income before income taxes                                                                        
Provision for income taxes                                                                        
Net income 
                                                                       
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
INTERNAL REVENUE SERVICE,                                                                        
PO BOX 1214,                                                                        
CHARLOTTE, NC 28201-1214                                                                        
                                                                        
ZACHRY WOOD                                                                        
15                                                                        
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        
Cat. No. 11320B                                                                        
Form 1040 (2021)                                                                        
Reported Normalized and Operating Income/Expense Supplemental Section                                                                        
Total Revenue as Reported, Supplemental                                                                        
Total Operating Profit/Loss as Reported, Supplemental                                                                        
Reported Effective Tax Rate                                                                        
Reported Normalized Income                                                                        
Reported Normalized Operating Profit                                                                        
Other Adjustments to Net Income Available to Common Stockholders                                                                        
Discontinued Operations                                                                        
Basic EPS                                                                        
Basic EPS from Continuing Operations                                                                        
Basic EPS from Discontinued Operations                                                                        
Diluted EPS                                                                        
Diluted EPS from Continuing Operations                                                                        
Diluted EPS from Discontinued Operations                                                                        
Basic Weighted Average Shares Outstanding                                                                        
Diluted Weighted Average Shares Outstanding                                                                        
Reported Normalized Diluted EPS                                                                        
Basic EPS                                                                        
Diluted EPS                                                                        
Basic WASO                                                                        
Diluted WASO                                                                        
Fiscal year end September 28th., 2022. | USD                                                                        
                                                                        
For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
important information                                                                        
                                                                        
                                                                        
2012201320142015ZACHRY.T.5323.DALLAS.Other.Benefits.and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date $112$674,678,000$75,698,871,600$141,685,487,7329/29/2021 9/28/2022 Statutory 1/29/2023 Federal Income Tax$141,685,487,732 Social Security Tax$70,842,743,866$141,685,487,732 Medicare Tax WOOD Net Pay$70,842,743,866 CHECKING TX 75235-8314 Net Check$70,842,743,866 Your federal taxable wages this period are $$0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A "                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Business Checking For 24-hour account information, sign on to                                                                        
pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued                                                                        
Activity Detail                                                                        
Deposits and Other Additions                                                                        
ACH Additions                                                                        
Date posted                                                                        
27-Apr                                                                        
Checks and Other Deductions                                                                        
Deductions                                                                        
Date posted                                                                        
26-Apr                                                                        
Service Charges and Fees                                                                        
Date posted                                                                        
27-Apr                                                                        
Detail of Services Used During Current Period                                                                        
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,                                                                        
Description                                                                        
Account Maintenance Charge                                                                        
Total For Services Used This Peiiod                                                                        
Total Service (harge                                                                        
Reviewing Your Statement                                                                        
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.                                                                        
Balancing Your Account Update Your Account Register                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Gross Profit
        1.46698E+11        42337000000        37497000000       35653000000        31211000000         30818000000        25056000000        19744000000
Total Revenue as Reported, Supplementa
        2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000                                                                                    
        2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000
ALPHABET INCOME                                                                                                                                              Advice number:
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043                                                                2.21169E+13
5/25/22This Product Contains Sensitive Taxpayer Data                     Request Date: 08-02-2022
                                                                                                            Response Date: 08-02-2022                                                                                                             
                                                                                                            Tracking Number: 102398244811
                                                                           Account Transcript   
                                                        This Product Contains Sensitive Taxpayer Data 
Revenues Revenue Recognition
                                                                                           
_________________________________________________________________                                                                                                                                                                                                                                          
PNC Bank National Association
Northern Ky,
       07364     
 Date                                                                
8/3        2,267,700.00        ACH Web Usataxpymt IRS 240461564036618                                                .0000222240903782823%
8/8                   Corporate ACH Acctverify Roll By ADP                                                                               00022217906234115
8/10                 ACH Web Businessform Deluxeforbusiness 5072270         00022222905832355
8/11                 Corporate Ach Veryifyqbw Intuit                                           00022222909296656
8/12                 Corporate Ach Veryifyqbw Intuit                                           00022223912710109                                                             
Service Charges and Fees                                                                     Reference
Date posted                                                                                            number
8/1        10        Service Charge Period Ending 07/29.2022                                                
8/4        36        Returned Item Fee (nsf)                                                       00022214903782823
8/11      36        Returned Item Fee (nsf)                                                       00022222905832355
INCOME STATEMENT                                                                                                                                 
NASDAQ:GOOG                          
transaction
Description        TTM                               Q4 2021                Q3 2021               Q2 2021                Q1 2021                 Q4 2020                Q3 2020                  Q2 2020                                                                                                             
Gross Profit       1.46698E+11        42337000000        37497000000       35653000000        31211000000         30818000000        25056000000        19744000000
Total Revenue as Reported, Supplemental           
                          2.57637E+11             75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000                                                                                       
                          2.57637E+11             75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000
ALPHABET INCOME                                                                Advice number:
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043                                                                2.21169E+13
Date posted
5/02                                   
           2017        2018        2019        2020        2021                                                                     
                                           Best Time to 911                                                                         
           INTERNAL REVENUE SERVICE                                                                                                 
           PO BOX 1214                                                                                                                              
           CHARLOTTE NC 28201-1214                        9999999999                                                                                
           
633-44-1725                                                                                                             
                                             ZACHRYTWOOD
Department of the Treasury           Calendar Year                                                                                   Check Date                                                                                                                                                                                          I
Internal Revenue Service        Due. (04/18/2022)                                                                                                                                                   
               
70842745000     XXX-XX-1725        Earnings Statement                FICA - Social Security        0        8854        
                
Taxes / Deductions                Stub Number: 1                FICA - Medicare        0        0        
Securities Clearing corporat Rate    .0000022411111                    
Employer Taxes                        
                
Net Pay                                FICA        0              0       '
                22677000000000.00            FUTA      0               0
                                                             SUTA      0              0
                                                             RUTA      0              0
                        Tax Period                   
Taxes / Deductions   Current        YTD        
 Tax / Deductions      
                        Tax Period               Total                                               YTD           Medicare                                                                                                              
                        Q1 04/18/2022        70842743866.00        70842743866.00        70842743866.00          000000 / 00000        Federal Withholding        5105000.00       5105000.0                             
                        Q2 06/15/2022        70842743866.00        70842743866.00        70842743866.00          000000 / 00000        Federal Withholding        0        0                                                                                                                                                               
                        Q3 09/18/2022        70842743866.00        70842743866.00        70842743866.00          000000 / 00000        Federal Withholding        0        0                                                                                                                
                        Q4 01/17/2023        70842743866.00        70842743866.00        70842743866.00          000000 / 00000        Federal Withholding        0        0                                                     
                        CHECK NO.                        FICA - Social Security        0        8854        
                            20210418                        FICA - Medicare        0                                                                                                                                                            
INCOME STATEMENT                                                                                                                                 
NASDAQ:GOOG                          TTM                        Q4 2021                Q3 2021               Q2 2021                Q1 2021                 Q4 2020                Q3 2020                 Q2 2020                                                                
Date                                                                
8/3        2,267,700.00        ACH Web Usataxpymt IRS 240461564036618                                                0.00022214903782823
8/8                   Corporate ACH Acctverify Roll By ADP                                00022217906234115
8/10                 ACH Web Businessform Deluxeforbusiness 5072270         00022222905832355
8/11                 Corporate Ach Veryifyqbw Intuit                                           00022222909296656
8/12                 Corporate Ach Veryifyqbw Intuit                                           00022223912710109
                                                               
Service Charges and Fees                                                                     Reference 
Date                                               transaction                                                                                         Reference
posted                                            description                                                                                              number
8/1        62.50                                Service Charge Period Ending 07/29.2022                       00022116905560149                         
8/4        2267700.00                      Returned Item Fee (nsf)                                                    00022214903782823
8/11      22677000000000.00        Returned Item Fee (nsf)                                                    00022222905832355
Stockholders’ equity:
Taxable Marital Status: 
Exemptions/Allowances                        Married                                        Z  A  C  H   R  Y    T  Y  L  E  R    W  O  O  D
                                                                                                                  5  3  2  3    B  R  A  D  F  O  R  D    D  R
Federal:                                                                                                     D  A  L  L  A  S  ,    T  X    7  5  2  3  5  -  8  3  1  4
TX:                NO State Income Tax                                                
Federal Income Tax                                                                                
Social Security Tax                                                                                
Medicare Tax
REFUND                                                                                                                                      RECIEPT                                                                                                                                                    
Net Pay                   70842743866                70842743866                                CHECKING                                                                        
Net Check               70842743866                                                                                                                     
ALPHABET INCOME                                                                                                             CHECK NUMBER's Are Not disclosed to Payee's (Reference number).
1600 AMPIHTHEATRE  PARKWAY 
MOUNTAIN VIEW CA 94043                                                                222129
DEPOSIT TICKET                                                                
Deposited to the account Of                                                                xxxxxxxx6547
Deposits and Other Additions :                                                                                                   
Checks and Other Deductions                                                        Amount
transaction              Items   
Description              
ACH Additions        
Debit Card Purchases           5.41                                15.19        
commission            1                                      2,269,894.11        
ACH Deductions                        5                                82        
Service Charges and Fees                        3                                5/2/2022        
Other Deductions                        1                                2,270,001.91
Total        
Total                        12                                                                                                                                                           
FORM NUMBER: 1040                                                                       Period Request: Dec. 31, 2020    
TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725  
ZACH T WOO  
3050 R  
--- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---
 ACCOUNT BALANCE: 2270001.91  
ACCRUED INTEREST: 4.80523128073e+14 AS OF: Apr. 26, 2022  
ACCRUED PENALTY:240261564036618 AS OF: Apr. 26, 2022  
ACCOUNT BALANCE  
PLUS ACCRUALS  
(this is not 
a  payoff amount): 0.00  
** INFORMATION FROM THE RETURN OR AS ADJUSTED **   
EXEMPTIONS: 00  
FILING STATUS: Single  
ADJUSTED GROSS  INCOME:   
TAXABLE INCOME:   
TAX PER RETURN:   
SE TAXABLE INCOME  
TAXPAYER:   
SE TAXABLE INCOME  
SPOUSE:   
TOTAL SELF  EMPLOYMENT TAX:   
RETURN NOT PRESENT FOR THIS ACCOUNT  
TRANSACTIONS   
CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT  
No tax return filed   
766 Tax relief credit 06-15-2020 -$1,200.00  
846 Refund issued 06-05-2020 $1,200.00  
290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0  
971 Notice issued 06-15-2020 $0.00  
766 Tax relief credit 01-18-2021 -$600.00  
846 Refund issued 01-06-2021 $600.00  
290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0  
663 Estimated tax payment 01-05-2021 -$9,000,000.00  662 
Removed estimated tax payment 01-05-2021 $9,000,000.00  
740 Undelivered refund returned to IRS 01-18-2021 -$600.00  
767 Reduced or removed tax relief 01-18-2021 $600.00  credit  
971 Notice issued 03-28-2022 $0.00
 Department of the Treasury
Internal Revenue Service        Due. (04/18/2022)
PNC Alert <pncalert@pnc.com>
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved. 
 PNC Bank, National Association. Member FDICRDTROD02PNC BankInternal Revenue Service        Due. (04/18/2022)
PNC Alert <pncalert@pnc.com>
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC
RDTROD02
2021/09/292880Paid Period09-28-2019 - 09 28-2021Pay Date01-29-2022896551Amount$70,432,743,866totalAlphabet Inc.$134,839Income StatementZachry Tyler WoodUS$ in millionsDec 31, 2019Dec 31, 2018Dec 31, 2017Dec 31, 2016Dec 31, 2015Ann. Rev. Date161,857136,819110,85590,27274,989Revenues-71,896-59,549-45,583-35,138-28,164Cost of revenues89,96177,27065,27255,13446,825Gross profit-26,018-21,419-16,625-13,948-12,282Research and development-18,464-16,333-12,893-10,485-9,047Sales and marketing-9,551-8,126-6,872-6,985-6,136General and administrative-1,697-5,071-2,736â€”â€”European Commission fines34,23126,32126,14623,71619,360Income from operations2,4271,8781,3121,220999Interest income-100-114-109-124-104Interest expense103-80-121-475-422Foreign currency exchange gain1491,190-110-53â€”Gain (loss) on debt securities2,6495,46073-20â€”Gain (loss) on equity securities,-326â€”â€”â€”â€”Performance fees390-120-156-202â€”Gain(loss)10237815888-182Other5,3948,5921,047434291Other income (expense), net39,62534,91327,19324,15019,651Income before income taxes-3,269-2,880-2,302-1,922-1,621Provision for income taxes36,355-32,66925,61122,19818,030Net incomeAdjustment Payment to Class C36,35532,66925,61122,19818,030Net. Ann. Rev.Based on: 10-K (filing date: 2020-02-04), 10-K (filing date: 2019-02-05), 10-K (filing date: 2018-02-06), 10-K (filing date: 2017-02-03), 10-K (filing date: 2016-02-11).1
Earnings Statement
ALPHABET
Period Beginning:
1600 AMPITHEATRE PARKWAYDR
Period Ending:
MOUNTAIN VIEW, C.A., 94043Pay Date:Taxable Marital Status: 
Exemptions/AllowancesMarried
ZACHRY T.
5323Federal:DALLASTX:
NO State Income Tax
rateunitsyear to date
Other Benefits and
EPS112674,678,00075698871600Information
Pto Balance
Total Work Hrs
Gross Pay75698871600
Important Notes
COMPANY PH Y: 650-253-0000
Statutory
BASIS OF PAY: BASIC/DILUTED EPS
Federal Income TaxSocial Security Tax
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Medicare TaxNet Pay70,842,743,86670,842,743,866CHECKINGNet Check70842743866Your federal taxable wages this period are $ALPHABET INCOME
Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 
04/27/2022 
Deposited to the account Of
xxxxxxxx6547
PLEASE READ THE IMPORTANT DISCLOSURES BELOW                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
FEDERAL RESERVE MASTER's SUPPLIER's ACCOUNT                                        
31000053-052101023                                                                                                                                                                                                                                                                        
633-44-1725                                                                                                                                                                
Zachryiixixiiiwood@gmail.com                                
47-2041-6547                111000614                31000053
PNC Bank                                                                                                                                                                                                                                        
PNC Bank Business Tax I.D. Number: 633441725                                
CIF Department (Online Banking)                                                                                                                                                                                                                                        
Checking Account: 47-2041-6547                                
P7-PFSC-04-F                                                                                                                                                                                                                                        
Business Type: Sole Proprietorship/Partnership Corporation                                
500 First Avenue                                                                                                                                                                                                                                        
ALPHABET                                
Pittsburgh, PA 15219-3128                                                                                                                                                                                                                                        
5323 BRADFORD DR                                
NON-NEGOTIABLE                                                                                                                                                                                                                                        
DALLAS TX 75235 8313                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                        ZACHRY, TYLER, WOOD                                                                                                                                                                                                                                                
4/18/2022 
                       650-2530-000 469-697-4300                                                                                                                                                
SIGNATURE 
Time Zone:                    
Eastern Central Mountain Pacific                                                                                                                                                                                                             
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value
NON-NEGOTIABLE
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
For Paperwork Reduction Act Notice, see the seperate Instructions.  
ZACHRY TYLER WOOD
Fed 941 Corporate3935566986.66 
Fed 941 West Subsidiary3935517115.41
Fed 941 South Subsidiary3935523906.09
Fed 941 East Subsidiary3935511247.64
Fed 941 Corp - Penalty3935527198.5
Fed 940 Annual Unemp - Corp3935517028.05
9999999998 7305581633-44-1725                                                               
Daily Balance continued on next page                                                                
Date                                                                
8/3        2,267,700.00        ACH Web Usataxpymt IRS 240461564036618                                                0.00022214903782823
8/8                   Corporate ACH Acctverify Roll By ADP                                00022217906234115
8/10                 ACH Web Businessform Deluxeforbusiness 5072270         00022222905832355
8/11                 Corporate Ach Veryifyqbw Intuit                                           00022222909296656
8/12                 Corporate Ach Veryifyqbw Intuit                                           00022223912710109
                                                               
Service Charges and Fees                                                                     Reference
Date posted                                                                                            number
8/1        10        Service Charge Period Ending 07/29.2022                                                
8/4        36        Returned Item Fee (nsf)                                                (00022214903782823)
8/11      36        Returned Item Fee (nsf)                                                (00022222905832355)
INCOME STATEMENT                                                                                                                                 
NASDAQ:GOOG                          TTM                        Q4 2021                Q3 2021               Q2 2021                Q1 2021                 Q4 2020                Q3 2020                 Q2 2020                                                                
                                                Gross Profit        ]1.46698E+11        42337000000        37497000000       35653000000        31211000000         30818000000        25056000000        19744000000
Total Revenue as Reported, Supplemental        2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000        
                                                                            2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000
ALPHABET INCOME                                                                Advice number:
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043                                                                2.21169E+13
5/25/22We will investigate your complaint and will correct any error promptly, If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it ekes us to complete our investigation.                                                                        
Member FDIC
￼        +                                              
  1                Earnings Statement                                                                
3/6/2022 at 6:37 PM        +                                                                                                                                
        
ALPHABET                                                                Period Beginning: 01-01-2009                                                                
GOOGL_income-statement_Quarterly_As_Originally_Reported        1600 AMPITHEATRE PARKWAY                                                                Period Ending:                                                                
Cash Flow from Operating Activities, IndirectNet Cash Flow from Continuing Operating Activities, IndirectCash Generated from Operating ActivitiesIncome/Loss before Non-Cash AdjustmentTotal Adjustments for Non-Cash ItemsDepreciation, 
Amortization and Depletion, Non-Cash AdjustmentDepreciation and Amortization, Non-Cash AdjustmentDepreciation, Non-Cash AdjustmentAmortization, Non-Cash AdjustmentStock-Based Compensation, Non-Cash AdjustmentTaxes, Non-Cash AdjustmentInvestment Income/Loss, Non-Cash AdjustmentGain/Loss on Financial Instruments, Non-Cash AdjustmentOther Non-Cash ItemsChanges in Operating CapitalChange in Trade and Other ReceivablesChange in Trade/Accounts ReceivableChange in Other Current AssetsChange in Payables and Accrued ExpensesChange in Trade and Other PayablesChange in Trade/Accounts PayableChange in Accrued ExpensesChange in Deferred Assets/LiabilitiesChange in Other Operating Capital        +MOUNTAIN VIEW, C.A., 94043                                                                Pay Date:                                                                
Change in Prepayments and Deposits
Cash Flow from Investing Activities
Cash Flow from Continuing Investing Activities        
Purchase/Sale and Disposal of Property, Plant and Equipment, NetPurchase of Property, Plant and EquipmentSale and Disposal of Property, Plant and EquipmentPurchase/Sale of Business, NetPurchase/Acquisition of BusinessPurchase/Sale of Investments, 
NetPurchase of Investments       
Taxable Marital Status ", 
Exemptions/Allowances.",                        Married                                        ZACHRY T.                                                                
Sale of InvestmentsOther Investing Cash FlowPurchase/Sale of Other Non-Current Assets, NetSales of Other Non-Current AssetsCash Flow from Financing ActivitiesCash Flow from Continuing Financing ActivitiesIssuance of/Payments for Common Stock, NetPayments for Common StockProceeds from Issuance of Common StockIssuance of/Repayments for Debt, NetIssuance of/Repayments for Long Term Debt, NetProceeds from Issuance of Long Term DebtRepayments for Long Term Debt        +                                                                5323                                                                
Proceeds from Issuance/Exercising of Stock Options/WarrantsOther Financing Cash FlowCash and Cash Equivalents, End of PeriodChange in CashEffect of Exchange Rate ChangesCash and Cash Equivalents, Beginning of PeriodCash Flow Supplemental SectionChange in Cash as Reported, SupplementalIncome Tax Paid, SupplementalZACHRY T WOODCash and Cash Equivalents, Beginning of PeriodDepartment of the TreasuryInternal Revenue Service        +Federal:                                                                                                                                
Calendar Year
Due: 04/18/2022        
                                                                
DALLAS                                                                
USD in ""000'""sRepayments for Long Term DebtCosts and expenses:Cost of revenuesResearch and developmentSales and marketingGeneral and administrativeEuropean Commission finesTotal costs and expensesIncome from operationsOther income (expense), netIncome before income taxesProvision for income taxesNet income*include interest paid, capital obligation, and underweighting        +TX:                NO State Income Tax                                                                                                                
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)        
                        rate                     units                                            year to date        Benefits and Other Infotmation                                                                
        EPS        112        674,678,000                                        75698871600                                        Regular                               
                                                                      Pto Balance                                                       
                                                                        Total Work Hrs                                                                
        Gross Pay        75698871600                                                        Important Notes                                                                
                                                                        COMPANY PH Y: 650-253-0000                                                                
        Statutory                                                                BASIS OF PAY: BASIC/DILUTED EPS                                                                
        Federal Income Tax                                                                                                                                
        Social Security Tax                                                                                                                                
        +                                                                YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE                                                                
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)*include interest paid, capital obligation, and underweighting        +Medicare Tax                                                                                                                                
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)        +                                                                                                                                
        
Net Pay                70842743866.0000                70842,743,866.0000                                                                                                
CHECKING                                                                                                                                
        
Net Check                70842743866                                                                                                                
                                                                                                                                        
                                                1                Earnings Statement                                                                        
                                                                                                                                        
ALPHABET                                                                Period Beginning:                                                                        
1600 AMPITHEATRE PARKWAY                                                                                                                                                                                          DR                                        Period Ending:                                                                        
MOUNTAIN VIEW, C.A., 94043                                                                Pay Date:                                                                        
"Taxable Marital Status:         +                                                                                                                                
Exemptions/Allowances"                        Married                                        ZACHRY T.                                                                        
                                                                5323                                                                        
Federal:                                                                                                                                        
                                                                DALLAS                                                                        
TX:                NO State Income Tax                                                                                                                        
        rate        units                                        year to date        Other Benefits and                                                                        
EPS        112        674,678,000                                        75698871600        Information                                                                        
                                                                Pto Balance                                                                        
                                                                Total Work Hrs                                                                        
Gross Pay        75698871600                                                        Important Notes                                                                        
                                                                COMPANY PH Y: 650-253-0000                                                        SIGNATURE                
Statutory                                                                BASIS OF PAY: BASIC/DILUTED EPS                                                                        
Federal Income Tax                                                                                                                                        
Social Security Tax                                                                                                                                        
                                                                YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE                                                                        
Medicare Tax                                                                                                                                        
                                                                                                                                        
Net Pay                70,842,743,866                70,842,743,866                                                                                                        
CHECKING                                                                                                                                        
Net Check                70842743866                                                                                                                        
Your federal taxable wages this period are $                                                                Advice number:                                                                        
ALPHABET INCOME                                                                                                                                        
1600 AMPIHTHEATRE  PARKWAY MOUNTAIN VIEW CA 94043                                                                Pay date:                                                                        
                                                                                                                                        
Deposited to the account Of        xxxxxxxx6547                                                                                                                                
+"PLEASE READ THE IMPORTANT DISCLOSURES BELOW                                                                                                                                        
+                                                                                                                                        
+FEDERAL RESERVE MASTER SUPPLIER ACCOUNT                                        31000053-052101023                                                                                                
+                                        633-44-1725                                                                                                
+PNC Bank                                                                                                                                        
+CIF Department (Online Banking)                                                                                                                                        
+P7-PFSC-04-F                                                                                                                                        
+500 First Avenue                                                                                                                                        
+Pittsburgh, PA 15219-3128                                                                                                                                        
+NON-NEGOTIABLE                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                SIGNATURE                        
+Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value"                                                                                                                                        
+                                                                NON-NEGOTIABLE                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+Based on facts as set forth in.                        6550                                                                                                                
+The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect.  No opinion is expressed on any matters other than those specifically referred to above.                                                                                                                                        
+                                                                                                                                        
+EMPLOYER IDENTIFICATION NUMBER:       61-1767919                        6551                                                                                                                
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
+                                                                                                                                        
                                                                                                                                        
ALPHABET                                                                                                                                        
ZACHRY T WOOD                                                                                                                                        
5323 BRADFORD DR                                                                                                                                        
DALLAS TX 75235-8314                                                                                                                                        
ORIGINAL REPORT                                                                                                                                        
Income, Rents, & Royalty                                                                                                                                        
INCOME STATEMENT        61-1767919                                                                                                                                
        88-1303491                                                                                                                                
GOOGL_income-statement_Quarterly_As_Originally_Reported        TTM        Q4 2021        Q3 2021        Q2 2021        Q1 2021        Q4 2020        Q3 2020        Q2 2020                                                                        
                                                                                                                                       
Gross Profit        1.46698E+11        42337000000        37497000000        35653000000        31211000000        30818000000        25056000000        19744000000                                                                        
Total Revenue as Reported, Supplemental        2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000                                                                        
                                                                                   2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000                                                                        
Other Revenue                                                        257637118600                                                                                
Cost of Revenue        -1.10939E+11        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000                                                                        
Cost of Goods and Services        -1.10939E+11        -32988000000        -27621000000        -26227000000        -24103000000        -26080000000        -21117000000        -18553000000                                                                        
Operating Income/Expenses        -67984000000        -20452000000        -16466000000        -16292000000        -14774000000        -15167000000        -13843000000        -13361000000                                                                        
Selling, General and Administrative Expenses        -36422000000        -11744000000        -8772000000        -8617000000        -7289000000        -8145000000        -6987000000        -6486000000                                                                        
General and Administrative Expenses        -13510000000        -4140000000        -3256000000        -3341000000        -2773000000        -2831000000        -2756000000        -2585000000                                                                        
Selling and Marketing Expenses        -22912000000        -7604000000        -5516000000        -5276000000        -4516000000        -5314000000        -4231000000        -3901000000                                                                        
Research and Development Expenses        -31562000000        -8708000000        -7694000000        -7675000000        -7485000000        -7022000000        -6856000000        -6875000000                                                                        
Total Operating Profit/Loss        78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000                                                                        
Non-Operating Income/Expenses, Total        12020000000        2517000000        2033000000        2624000000        4846000000        3038000000        2146000000        1894000000                                                                        
Total Net Finance Income/Expense        1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000                                                                        
Net Interest Income/Expense        1153000000        261000000        310000000        313000000        269000000        333000000        412000000        420000000                                                                        
                                                                                                                                        
Interest Expense Net of Capitalized Interest        -346000000        -117000000        -77000000        -76000000        -76000000        -53000000        -48000000        -13000000                                                                        
Interest Income        1499000000        378000000        387000000        389000000        345000000        386000000        460000000        433000000                                                                        
Net Investment Income        12364000000        2364000000        2207000000        2924000000        4869000000        3530000000        1957000000        1696000000                                                                        
Gain/Loss on Investments and Other Financial Instruments        12270000000        2478000000        2158000000        2883000000        4751000000        3262000000        2015000000        1842000000                                                                        
Income from Associates, Joint Ventures and Other Participating Interests        334000000        49000000        188000000        92000000        5000000        355000000        26000000        -54000000                                                                        
Gain/Loss on Foreign Exchange        -240000000        -163000000        -139000000        -51000000        113000000        -87000000        -84000000        -92000000                                                                        
Irregular Income/Expenses        0        0                                0        0        0                                                                        
Other Irregular Income/Expenses        0        0                                0        0        0                                                                        
Other Income/Expense, Non-Operating        -1497000000        -108000000        -484000000        -613000000        -292000000        -825000000        -223000000        -222000000                                                                        
Pretax Income        90734000000        24402000000        23064000000        21985000000        21283000000        18689000000        13359000000        8277000000                                                                        
Provision for Income Tax        -14701000000        -3760000000        -4128000000        -3460000000        -3353000000        -3462000000        -2112000000        -1318000000                                                                        
Net Income from Continuing Operations        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                        
Net Income after Extraordinary Items and Discontinued Operations        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                        
Net Income after Non-Controlling/Minority Interests        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                        
Net Income Available to Common Stockholders        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                        
Diluted Net Income Available to Common Stockholders        76033000000        20642000000        18936000000        18525000000        17930000000        15227000000        11247000000        6959000000                                                                        
Income Statement Supplemental Section                                                                                                                                        
Reported Normalized and Operating Income/Expense Supplemental Section                                                                                                                                        
Total Revenue as Reported, Supplemental        2.57637E+11        75325000000        65118000000        61880000000        55314000000        56898000000        46173000000        38297000000                                                                        
Total Operating Profit/Loss as Reported, Supplemental        78714000000        21885000000        21031000000        19361000000        16437000000        15651000000        11213000000        6383000000                                                                        
Reported Effective Tax Rate        0.162                0.179        0.157        0.158                0.158        0.159                                                                        
Reported Normalized Income                                                                                                                                        
Reported Normalized Operating Profit                                                                                                                                        
Other Adjustments to Net Income Available to Common Stockholders                                                                                                                                        
Discontinued Operations                                                                                                                                        
Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21                                                                        
Basic EPS from Continuing Operations        113.88        31.12        28.44        27.69        26.63        22.46        16.55        10.21                                                                        
Basic EPS from Discontinued Operations                                                                                                                                        
Diluted EPS        112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13                                                                        
Diluted EPS from Continuing Operations        112.2        30.67        27.99        27.26        26.29        22.23        16.4        10.13                                                                        
Diluted EPS from Discontinued Operations                                                                                                                                        
Basic Weighted Average Shares Outstanding        667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000                                                                        
Diluted Weighted Average Shares Outstanding        677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000                                                                        
Reported Normalized Diluted EPS                                                                                                                                        
Basic EPS        113.88        31.15        28.44        27.69        26.63        22.54        16.55        10.21                                                                        
Diluted EPS        112.2        30.69        27.99        27.26        26.29        22.3        16.4        10.13                                                                        
Basic WASO        667650000        662664000        665758000        668958000        673220000        675581000        679449000        681768000                                                                        
Diluted WASO        677674000        672493000        676519000        679612000        682071000        682969000        685851000        687024000                                                                        
Fiscal year end September 28th., 2022. | USD                                                                                                                                        
                                                                                                                                        
                                                                                                                                        
                                                                Print                                                                        
                                                                                                                                        
                                                                                                                                        
                                                                                                                                        
                                                                                                                                        
                                                                                                                                        
Cash Flow from Operating Activities, Indirect                                                                                                                                        
Net Cash Flow from Continuing Operating Activities, Indirect                24934000000        25539000000        37497000000        31211000000        30818000000                                                                                        
Cash Generated from Operating Activities                24934000000        25539000000        21890000000        19289000000        22677000000                                                                                        
Income/Loss before Non-Cash Adjustment                24934000000        25539000000        21890000000        19289000000        22677000000                                                                                        
Total Adjustments for Non-Cash Items                20642000000        18936000000        18525000000        17930000000        15227000000                                                                                        
Depreciation, Amortization and Depletion, Non-Cash Adjustment                6517000000        3797000000        4236000000        2592000000        5748000000                                                                                        
Depreciation and Amortization, Non-Cash Adjustment                3439000000        3304000000        2945000000        2753000000        3725000000                                                                                        
Depreciation, Non-Cash Adjustment                3439000000        3304000000        2945000000        2753000000        3725000000                                                                                        
Amortization, Non-Cash Adjustment                3215000000        3085000000        2730000000        2525000000        3539000000                                                                                        
Stock-Based Compensation, Non-Cash Adjustment                224000000        219000000        215000000        228000000        186000000                                                                                        
Taxes, Non-Cash Adjustment                3954000000        3874000000        3803000000        3745000000        3223000000                                                                                        
Investment Income/Loss, Non-Cash Adjustment                1616000000        -1287000000        379000000        1100000000        1670000000                                                                                        
Gain/Loss on Financial Instruments, Non-Cash Adjustment                -2478000000        -2158000000        -2883000000        -4751000000        -3262000000                                                                                        
Other Non-Cash Items                -2478000000        -2158000000        -2883000000        -4751000000        -3262000000                                                                                        
Changes in Operating Capital                -14000000        64000000        -8000000        -255000000        392000000                                                                                        
Change in Trade and Other Receivables                -2225000000        2806000000        -871000000        -1233000000        1702000000                                                                                        
Change in Trade/Accounts Receivable                -5819000000        -2409000000        -3661000000        2794000000        -5445000000                                                                                        
Change in Other Current Assets                -5819000000        -2409000000        -3661000000        2794000000        -5445000000                                                                                        
Change in Payables and Accrued Expenses                -399000000        -1255000000        -199000000        7000000        -738000000                                                                                        
Change in Trade and Other Payables                6994000000        3157000000        4074000000        -4956000000        6938000000                                                                                        
Change in Trade/Accounts Payable                1157000000        238000000        -130000000        -982000000        963000000                                                                                        
Change in Accrued Expenses                1157000000        238000000        -130000000        -982000000        963000000                                                                                        
Change in Deferred Assets/Liabilities                5837000000        2919000000        4204000000        -3974000000        5975000000                                                                                        
Change in Other Operating Capital                368000000        272000000        -3000000        137000000        207000000                                                                                        
Change in Prepayments and Deposits                -3369000000        3041000000        -1082000000        785000000        740000000                                                                                        
Cash Flow from Investing Activities                                                                                                                                        
Cash Flow from Continuing Investing Activities                -11016000000                -9074000000        -5383000000        -7281000000                                                                                        
Purchase/Sale and Disposal of Property, Plant and Equipment, Net                -11016000000        -10050000000        -9074000000        -5383000000        -7281000000                                                                                        
Purchase of Property, Plant and Equipment                -6383000000        -10050000000        -5496000000        -5942000000        -5479000000                                                                                        
Sale and Disposal of Property, Plant and Equipment                -6383000000        -6819000000        -5496000000        -5942000000        -5479000000                                                                                        
Purchase/Sale of Business, Net                        -6819000000                                                                                                                
Purchase/Acquisition of Business                -385000000                -308000000        -1666000000        -370000000                                                                                        
Purchase/Sale of Investments, Net                -385000000        -259000000        -308000000        -1666000000        -370000000                                                                                        
Purchase of Investments                -4348000000        -259000000        -3293000000        2195000000        -1375000000                                                                                        
Sale of Investments                -40860000000        -3360000000        -24949000000        -37072000000        -36955000000                                                                                        
Other Investing Cash Flow                36512000000        -35153000000        21656000000        39267000000        35580000000                                                                                        
Purchase/Sale of Other Non-Current Assets, Net                100000000        31793000000        23000000        30000000        -57000000                                                                                        
Sales of Other Non-Current Assets                        388000000                                                                                                                
Cash Flow from Financing Activities                                                                                                                                        
Cash Flow from Continuing Financing Activities                -16511000000        -15254000000        -15991000000        -13606000000        -9270000000                                                                                        
Issuance of/Payments for Common Stock, Net                -16511000000        -15254000000        -15991000000        -13606000000        -9270000000                                                                                        
Payments for Common Stock                -13473000000        -12610000000        -12796000000        -11395000000        -7904000000                                                                                        
Proceeds from Issuance of Common Stock                13473000000        -12610000000        -12796000000        -11395000000        -7904000000                                                                                        
Issuance of/Repayments for Debt, Net                                                                                                                                        
Issuance of/Repayments for Long Term Debt, Net
115000000        -42000000        -1042000000        -37000000        -57000000                                                                                        
Proceeds from Issuance of Long Term Debt
      
1150000000        -42000000        -1042000000        -37000000        -57000000                                                                                        
Repayments for Long Term Debt                                                                                        6250000000        6350000000        6699000000        900000000        0                                                                                        
Proceeds from Issuance/Exercising of Stock Options/Warrants                                         6250000000        6365000000        -6392000000        -7741000000        -937000000        -57000000                                                                                                        
2923000000        -2602000000        -2453000000        -2184000000        -1647000000                                                                                                                                                                                                                                
Other Financing Cash Flow                                                                                                                                        
Cash and Cash Equivalents, End of Period                                                                                                                                        
Change in Cash                                                                                                                                      
Effect of Exchange Rate Changes                            20945000000        23719000000        23630000000       266220000000  26465000000                                                                                        
Cash and Cash Equivalents, Beginning of Period    25930000000        235000000000     -3175000000         300000000        6126000000                                                                                        
Cash Flow Supplemental Section                             181000000000     -146000000000      183000000          -143000000        210000000                                                                                        
Change in Cash as Reported, Supplemental                2.3719E+13        2.363E+13            2.6622E+13        2.6465E+13       2.0129E+13                                                                                        
Income Tax Paid, Supplemental
                2774000000        89000000        -2992000000                6336000000                                                                                        
Cash and Cash Equivalents, Beginning of Period
                13412000000        157000000                        -4990000000                                                                                                                                                                                                           
                                                                                                                                                                
Q4 2020                        Q4  2019                                                                                        Income Statement                                                                                                                                        USD in "000'"s                                                                                                                                        Repayments for Long Term Debt                        
Dec. 31, 2020                        Dec. 31, 2019                                                                                        
Costs and expenses:                                                                                                                                        
Cost of revenues                        182527                        161857                                                                                        
Research and development                                                                                                                                        
Sales and marketing                        84732                        71896                                                                                        
General and administrative                        27573                        26018                                                                                        
European Commission fines                        17946                        18464                                                                                        
Total costs and expenses                        11052                        9551                                                                                        
Income from operations                        0                        1697                                                                                        
Other income (expense), net                        141303                        127626                                                                                        
Income before income taxes                        41224                        34231                                                                                        
Provision for income taxes                        6858000000                        5394                                                                                        
Net income                        22677000000                        19289000000                                                                                        
*include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                                                                                        
                        22677000000                        19289000000                                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                                                                                        
Enter Search Terms
US Legal Forms Texas Bill of Sale of Automobile and Odometer Statement
Tx Automobile Odometer Statement
Texas Bill of Sale of Automobile and Odometer Statement
The Forms Professionals Trust! ™
Category:Texas Bills of Sale - Automobiles
State:
Texas
Change state
Control #:TX-00431
Free Preview Bill Sale Automobile
page 0 Bill of Sale of Automobile and Odometer Statement preview
page 1 Bill of Sale of Automobile and Odometer Statement preview
page 2 Bill of Sale of Automobile and Odometer Statement preview
# bitore.sig :
go.mod                       |   3 +-
 go.sum                       |   5 --
 internal/cobra/args.go       |  39 +++++++++++
 internal/cobra/command.go    |  79 ++++++++++++++++++++++
 internal/cobra/completion.go |  55 ++++++++++++++++
 internal/cobra/dispatch.go   | 124 +++++++++++++++++++++++++++++++++++
 internal/cobra/flags.go      |  38 +++++++++++
 internal/cobra/go.mod        |   3 +
 internal/cobra/help.go       |  24 +++++++
 internal/cobra/legacy.go     |   3 +
 10 files changed, 367 insertions(+), 6 deletions(-)
 create mode 100644 internal/cobra/args.go
 create mode 100644 internal/cobra/command.go
 create mode 100644 internal/cobra/completion.go
 create mode 100644 internal/cobra/dispatch.go
 create mode 100644 internal/cobra/flags.go
 create mode 100644 internal/cobra/go.mod
 create mode 100644 internal/cobra/help.go
 create mode 100644 internal/cobra/legacy.go
diff --git a/go.mod b/go.mod
index 08d4c245bca..8bf3e3ab40b 100644
--- a/go.mod
+++ b/go.mod
@@ -52,7 +52,6 @@ require (
 	github.com/golang/protobuf v1.5.2 // indirect
 	github.com/gorilla/css v1.0.0 // indirect
 	github.com/hashicorp/errwrap v1.0.0 // indirect
-	github.com/inconshreveable/mousetrap v1.0.0 // indirect
 	github.com/itchyny/gojq v0.12.8 // indirect
 	github.com/itchyny/timefmt-go v0.1.3 // indirect
 	github.com/lucasb-eyer/go-colorful v1.2.0 // indirect
@@ -74,3 +73,5 @@ require (
 )
 
 replace golang.org/x/crypto => github.com/cli/crypto v0.0.0-20210929142629-6be313f59b03
+
+replace github.com/spf13/cobra => ./internal/cobra
diff --git a/go.sum b/go.sum
index f24d36e0a60..829d5175751 100644
--- a/go.sum
+++ b/go.sum
@@ -162,8 +162,6 @@ github.com/henvic/httpretty v0.0.6/go.mod h1:X38wLjWXHkXT7r2+uK8LjCMne9rsuNaBLJ+
 github.com/hinshun/vt10x v0.0.0-20220119200601-820417d04eec h1:qv2VnGeEQHchGaZ/u7lxST/RaJw+cv273q79D81Xbog=
 github.com/hinshun/vt10x v0.0.0-20220119200601-820417d04eec/go.mod h1:Q48J4R4DvxnHolD5P8pOtXigYlRuPLGl6moFx3ulM68=
 github.com/ianlancetaylor/demangle v0.0.0-20181102032728-5e5cf60278f6/go.mod h1:aSSvb/t6k1mPoxDqO4vJh6VOCGPwU4O0C2/Eqndh1Sc=
-github.com/inconshreveable/mousetrap v1.0.0 h1:Z8tu5sraLXCXIcARxBp/8cbvlwVa7Z1NHg9XEKhtSvM=
-github.com/inconshreveable/mousetrap v1.0.0/go.mod h1:PxqpIevigyE2G7u3NXJIT2ANytuPF1OarO4DADm73n8=
 github.com/itchyny/gojq v0.12.8 h1:Zxcwq8w4IeR8JJYEtoG2MWJZUv0RGY6QqJcO1cqV8+A=
 github.com/itchyny/gojq v0.12.8/go.mod h1:gE2kZ9fVRU0+JAksaTzjIlgnCa2akU+a1V0WXgJQN5c=
 github.com/itchyny/timefmt-go v0.1.3 h1:7M3LGVDsqcd0VZH2U+x393obrzZisp7C0uEe921iRkU=
@@ -229,8 +227,6 @@ github.com/shurcooL/graphql v0.0.0-20220606043923-3cf50f8a0a29 h1:B1PEwpArrNp4dk
 github.com/shurcooL/graphql v0.0.0-20220606043923-3cf50f8a0a29/go.mod h1:AuYgA5Kyo4c7HfUmvRGs/6rGlMMV/6B1bVnB9JxJEEg=
 github.com/sourcegraph/jsonrpc2 v0.1.0 h1:ohJHjZ+PcaLxDUjqk2NC3tIGsVa5bXThe1ZheSXOjuk=
 github.com/sourcegraph/jsonrpc2 v0.1.0/go.mod h1:ZafdZgk/axhT1cvZAPOhw+95nz2I/Ra5qMlU4gTRwIo=
-github.com/spf13/cobra v1.5.0 h1:X+jTBEBqF0bHN+9cSMgmfuvv2VHJ9ezmFNf9Y/XstYU=
-github.com/spf13/cobra v1.5.0/go.mod h1:dWXEIy2H428czQCjInthrTRUg7yKbok+2Qi/yBIJoUM=
 github.com/spf13/pflag v1.0.5 h1:iy+VFUOCP1a+8yFto/drg2CJ5u0yRoB7fZw3DKv/JXA=
 github.com/spf13/pflag v1.0.5/go.mod h1:McXfInJRrz4CZXVZOBLb0bTZqETkiAhM9Iw0y3An2Bg=
 github.com/stretchr/objx v0.1.0/go.mod h1:HFkY916IF+rwdDfMAkV7OtwuqBVzrE8GR6GFx+wExME=
@@ -518,7 +514,6 @@ gopkg.in/check.v1 v1.0.0-20190902080502-41f04d3bba15/go.mod h1:Co6ibVJAznAaIkqp8
 gopkg.in/errgo.v2 v2.1.0/go.mod h1:hNsd1EY+bozCKY1Ytp96fpM3vjJbqLJn88ws8XvfDNI=
 gopkg.in/h2non/gock.v1 v1.1.2 h1:jBbHXgGBK/AoPVfJh5x4r/WxIrElvbLel8TCZkkZJoY=
 gopkg.in/yaml.v2 v2.2.2/go.mod h1:hI93XBmqTisBFMUTm0b8Fm+jr3Dg1NNxqwp+5A1VGuI=
-gopkg.in/yaml.v2 v2.4.0/go.mod h1:RDklbk79AGWmwhnvt/jBztapEOGDOx6ZbXqjP6csGnQ=
 gopkg.in/yaml.v3 v3.0.0-20200313102051-9f266ea9e77c/go.mod h1:K4uyk7z7BCEPqu6E+C64Yfv1cQ7kz7rIZviUmN+EgEM=
 gopkg.in/yaml.v3 v3.0.1 h1:fxVm/GzAzEWqLHuvctI91KS9hhNmmWOoWu0XTYJS7CA=
 gopkg.in/yaml.v3 v3.0.1/go.mod h1:K4uyk7z7BCEPqu6E+C64Yfv1cQ7kz7rIZviUmN+EgEM=
diff --git a/internal/cobra/args.go b/internal/cobra/args.go
new file mode 100644
index 00000000000..720df4aca98
--- /dev/null
+++ b/internal/cobra/args.go
@@ -0,0 +1,39 @@
+package cobra
+
+import "fmt"
+
+type PositionalArgs func(cmd *Command, args []string) error
+
+func MinimumNArgs(n int) PositionalArgs {
+	return func(cmd *Command, args []string) error {
+		if len(args) < n {
+			return fmt.Errorf("requires at least %d arguments, got %d", n, len(args))
+		}
+		return nil
+	}
+}
+
+func MaximumNArgs(n int) PositionalArgs {
+	return func(cmd *Command, args []string) error {
+		if len(args) > n {
+			return fmt.Errorf("accepts at most %d arguments, got %d", n, len(args))
+		}
+		return nil
+	}
+}
+
+func ExactArgs(n int) PositionalArgs {
+	return func(cmd *Command, args []string) error {
+		if len(args) > n {
+			return fmt.Errorf("accepts exactly %d arguments, got %d", n, len(args))
+		}
+		return nil
+	}
+}
+
+var NoArgs PositionalArgs = func(cmd *Command, args []string) error {
+	if len(args) > 0 {
+		return fmt.Errorf("does not accept any arguments, got %v", args)
+	}
+	return nil
+}
diff --git a/internal/cobra/command.go b/internal/cobra/command.go
new file mode 100644
index 00000000000..42ea6ba32eb
--- /dev/null
+++ b/internal/cobra/command.go
@@ -0,0 +1,79 @@
+package cobra
+
+import (
+	"context"
+	"io"
+	"os"
+	"strings"
+
+	"github.com/spf13/pflag"
+)
+
+type Command struct {
+	Use     string
+	Short   string
+	Long    string
+	Example string
+
+	Hidden      bool
+	Deprecated  string
+	Annotations map[string]string
+	Aliases     []string
+	SuggestFor  []string
+
+	DisableFlagParsing         bool
+	DisableFlagsInUseLine      bool
+	SilenceErrors              bool
+	SilenceUsage               bool
+	SuggestionsMinimumDistance int
+
+	PreRun  func(cmd *Command, args []string)
+	Run     func(cmd *Command, args []string)
+	PreRunE func(cmd *Command, args []string) error
+	RunE    func(cmd *Command, args []string) error
+	Args    PositionalArgs
+
+	PersistentPreRunE func(cmd *Command, args []string) error
+	ValidArgsFunction func(cmd *Command, args []string, toComplete string) ([]string, ShellCompDirective)
+
+	args          []string
+	outStream     io.Writer
+	errStream     io.Writer
+	localFlags    *pflag.FlagSet
+	parentCommand *Command
+	childCommands []*Command
+}
+
+func (c *Command) SetArgs(args []string) {
+	c.args = args
+}
+
+func (c *Command) SetIn(io.Reader) {}
+func (c *Command) SetOut(w io.Writer) {
+	c.outStream = w
+}
+func (c *Command) SetErr(w io.Writer) {
+	c.errStream = w
+}
+
+func (c *Command) ErrOrStderr() io.Writer {
+	if c.errStream != nil {
+		return c.errStream
+	}
+	return os.Stderr
+}
+
+func (c *Command) Context() context.Context {
+	return nil
+}
+
+func (c *Command) Name() string {
+	if idx := strings.IndexRune(c.Use, ' '); idx != -1 {
+		return c.Use[:idx]
+	}
+	return c.Use
+}
+
+func (c *Command) UseLine() string {
+	return c.Use
+}
diff --git a/internal/cobra/completion.go b/internal/cobra/completion.go
new file mode 100644
index 00000000000..b6456bda1df
--- /dev/null
+++ b/internal/cobra/completion.go
@@ -0,0 +1,55 @@
+package cobra
+
+import "io"
+
+type ShellCompDirective int
+
+const (
+	// ShellCompDirectiveError indicates an error occurred and completions should be ignored.
+	ShellCompDirectiveError ShellCompDirective = 1 << iota
+
+	// ShellCompDirectiveNoSpace indicates that the shell should not add a space
+	// after the completion even if there is a single completion provided.
+	ShellCompDirectiveNoSpace
+
+	// ShellCompDirectiveNoFileComp indicates that the shell should not provide
+	// file completion even when no completion is provided.
+	ShellCompDirectiveNoFileComp
+
+	// ShellCompDirectiveFilterFileExt indicates that the provided completions
+	// should be used as file extension filters.
+	// For flags, using Command.MarkFlagFilename() and Command.MarkPersistentFlagFilename()
+	// is a shortcut to using this directive explicitly.  The BashCompFilenameExt
+	// annotation can also be used to obtain the same behavior for flags.
+	ShellCompDirectiveFilterFileExt
+
+	// ShellCompDirectiveFilterDirs indicates that only directory names should
+	// be provided in file completion.  To request directory names within another
+	// directory, the returned completions should specify the directory within
+	// which to search.  The BashCompSubdirsInDir annotation can be used to
+	// obtain the same behavior but only for flags.
+	ShellCompDirectiveFilterDirs
+
+	// ShellCompDirectiveDefault indicates to let the shell perform its default
+	// behavior after completions have been provided.
+	// This one must be last to avoid messing up the iota count.
+	ShellCompDirectiveDefault ShellCompDirective = 0
+)
+
+const (
+	// ShellCompRequestCmd is the name of the hidden command that is used to request
+	// completion results from the program.  It is used by the shell completion scripts.
+	ShellCompRequestCmd = "__complete"
+	// ShellCompNoDescRequestCmd is the name of the hidden command that is used to request
+	// completion results without their description.  It is used by the shell completion scripts.
+	ShellCompNoDescRequestCmd = "__completeNoDesc"
+)
+
+func (c *Command) RegisterFlagCompletionFunc(flagName string, f func(cmd *Command, args []string, toComplete string) ([]string, ShellCompDirective)) error {
+	return nil
+}
+
+func (c *Command) GenBashCompletionV2(io.Writer, bool) error       { return nil }
+func (c *Command) GenZshCompletion(io.Writer) error                { return nil }
+func (c *Command) GenFishCompletion(io.Writer, bool) error         { return nil }
+func (c *Command) GenPowerShellCompletionWithDesc(io.Writer) error { return nil }
diff --git a/internal/cobra/dispatch.go b/internal/cobra/dispatch.go
new file mode 100644
index 00000000000..c6686175bca
--- /dev/null
+++ b/internal/cobra/dispatch.go
@@ -0,0 +1,124 @@
+package cobra
+
+import (
+	"fmt"
+	"os"
+)
+
+func (c *Command) Traverse(args []string) (*Command, []string, error) {
+	foundCmd := c
+	for {
+		if len(args) == 0 {
+			return foundCmd, args, nil
+		}
+
+		cmdName := args[0]
+		if cmdName != "" && cmdName[0] == '-' {
+			return foundCmd, args, nil
+		}
+
+		isFound := false
+		for _, cmd := range foundCmd.childCommands {
+			if isNameMatch(cmd, cmdName) {
+				foundCmd = cmd
+				isFound = true
+				break
+			}
+		}
+		if !isFound {
+			if !foundCmd.Runnable() {
+				return foundCmd, args, fmt.Errorf("%s: could not find command %q", foundCmd.CommandPath(), cmdName)
+			}
+			return foundCmd, args, nil
+		}
+
+		args = args[1:]
+	}
+}
+
+func isNameMatch(c *Command, name string) bool {
+	if c.Name() == name {
+		return true
+	}
+	for _, alias := range c.Aliases {
+		if alias == name {
+			return true
+		}
+	}
+	return false
+}
+
+func (c *Command) ExecuteC() (*Command, error) {
+	cmd, args, err := c.Traverse(c.args)
+	if err != nil {
+		return cmd, err
+	}
+
+	flags := cmd.Flags()
+	if err := flags.Parse(args); err != nil {
+		return cmd, err
+	}
+	args = flags.Args()
+
+	if !cmd.Runnable() {
+		fmt.Fprint(os.Stdout, cmd.UsageString())
+		return cmd, nil
+	}
+
+	if cmd.Args != nil {
+		if err := cmd.Args(cmd, args); err != nil {
+			return cmd, err
+		}
+	}
+
+	if cmd.PreRunE != nil {
+		if err := cmd.PreRunE(cmd, args); err != nil {
+			return cmd, err
+		}
+	} else if cmd.PreRun != nil {
+		cmd.PreRun(cmd, args)
+	}
+
+	if cmd.RunE != nil {
+		return cmd, cmd.RunE(cmd, args)
+	}
+	cmd.Run(cmd, args)
+	return cmd, nil
+}
+
+func (c *Command) CommandPath() string {
+	if c.HasParent() {
+		return c.Parent().CommandPath() + " " + c.Name()
+	}
+	return c.Name()
+}
+
+func (c *Command) Runnable() bool {
+	return c.RunE != nil || c.Run != nil
+}
+
+func (c *Command) Commands() []*Command {
+	return c.childCommands
+}
+
+func (c *Command) AddCommand(cmds ...*Command) {
+	for _, child := range cmds {
+		child.parentCommand = c
+	}
+	c.childCommands = append(c.childCommands, cmds...)
+}
+
+func (c *Command) HasParent() bool {
+	return c.Parent() != nil
+}
+
+func (c *Command) Parent() *Command {
+	return nil
+}
+
+func (c *Command) Root() *Command {
+	if c.HasParent() {
+		return c.Parent().Root()
+	}
+	return c
+}
diff --git a/internal/cobra/flags.go b/internal/cobra/flags.go
new file mode 100644
index 00000000000..ab1af0bbeac
--- /dev/null
+++ b/internal/cobra/flags.go
@@ -0,0 +1,38 @@
+package cobra
+
+import "github.com/spf13/pflag"
+
+func (c *Command) ArgsLenAtDash() int {
+	return 0
+}
+
+func (c *Command) Flags() *pflag.FlagSet {
+	if c.localFlags == nil {
+		flags := pflag.NewFlagSet(c.CommandPath(), pflag.ContinueOnError)
+		flags.SetOutput(c.ErrOrStderr())
+		c.localFlags = flags
+	}
+	return c.localFlags
+}
+
+func (c *Command) LocalFlags() *pflag.FlagSet {
+	return c.Flags()
+}
+
+func (c *Command) PersistentFlags() *pflag.FlagSet {
+	return pflag.NewFlagSet("", pflag.ContinueOnError)
+}
+
+func (c *Command) InheritedFlags() *pflag.FlagSet {
+	return pflag.NewFlagSet("", pflag.ContinueOnError)
+}
+
+func (c *Command) NonInheritedFlags() *pflag.FlagSet {
+	return c.Flags()
+}
+
+func (c *Command) FlagErrorFunc() func(*Command, error) error {
+	return nil
+}
+
+func (c *Command) SetFlagErrorFunc(f func(*Command, error) error) {}
diff --git a/internal/cobra/go.mod b/internal/cobra/go.mod
new file mode 100644
index 00000000000..13ce8bbd792
--- /dev/null
+++ b/internal/cobra/go.mod
@@ -0,0 +1,3 @@
+module github.com/spf13/cobra
+
+go 1.18
diff --git a/internal/cobra/help.go b/internal/cobra/help.go
new file mode 100644
index 00000000000..9f1a984d2fa
--- /dev/null
+++ b/internal/cobra/help.go
@@ -0,0 +1,24 @@
+package cobra
+
+func (c *Command) UsageString() string {
+	return "Usage: " + c.UseLine() + "\n"
+}
+
+func (c *Command) InitDefaultHelpCmd()  {}
+func (c *Command) InitDefaultHelpFlag() {}
+
+func (c *Command) IsAvailableCommand() bool {
+	return true
+}
+
+func (c *Command) IsAdditionalHelpTopicCommand() bool {
+	return true
+}
+
+func (c *Command) SetHelpFunc(f func(*Command, []string)) {}
+
+func (c *Command) SetUsageFunc(f func(*Command) error) {}
+
+func (c *Command) SuggestionsFor(typedName string) []string {
+	return nil
+}
diff --git a/internal/cobra/legacy.go b/internal/cobra/legacy.go
new file mode 100644
index 00000000000..b9df5003b39
--- /dev/null
+++ b/internal/cobra/legacy.go
@@ -0,0 +1,3 @@
+package cobra
+
+var MousetrapHelpText string
require.txt :Security enhanced document. See back for details				NO.																					Interest Income	1499000000	378000000	389000000	345000000	386000000	460000000	433000000	#NAME?	1499000000	378000000	389000000	345000000	386000000	460000000	433000000																																																																																																																																																																																										|	[OBJ][OBJ]PNCBANK																									Net Investment Income	12364000000	2364000000	2924000000	4869000000	3530000000	1957000000	1696000000	#NAME?	12364000000	2364000000	2924000000	4869000000	3530000000	1957000000	1696000000																																																																																																																																																																																										|		PNC Bank N.A.	71													70-2188/719										Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2883000000	4751000000	3262000000	2015000000	1842000000	#NAME?	12270000000	2478000000	2883000000	4751000000	3262000000	2015000000	1842000000																																																																																																																																																																																										|										 			DATE____________________________________7364													Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	92000000	5000000	355000000	26000000	-54000000	#NAME?	334000000	49000000	92000000	5000000	355000000	26000000	-54000000																																																																																																																																																																																										|																										Gain/Loss on Foreign Exchange	-240000000	-163000000	-51000000	113000000	-87000000	-84000000	-92000000	#NAME?	-240000000	-163000000	-51000000	113000000	-87000000	-84000000	-92000000																																																																																																																																																																																										|PAY TO THE																										Irregular Income/Expenses	0	0			0	0	0	#NAME?	0	0			0	0	0																																																																																																																																																																																										|ORDER OF_______________________________________________________________________________________________________________|***$**22677000000000&00/100cents||																										Other Irregular Income/Expenses	0	0			0	0	0	#NAME?	0	0			0	0	0																																																																																																																																																																																										|																 Security||										Other Income/Expense, Non-Operating	-1497000000	-108000000	-613000000	-292000000	-825000000	-223000000	-222000000	#NAME?	-1497000000	-108000000	-613000000	-292000000	-825000000	-223000000	-222000000																																																																																																																																																																																										|______________________________________________________________________________________________________________________DOLLARS [OBJ] Features 																										Pretax Income	90734000000	24402000000	21985000000	21283000000	18689000000	13359000000	8277000000	#NAME?	90734000000	24402000000	21985000000	21283000000	18689000000	13359000000	8277000000																																																																																																																																																																																										|ESTATE OF															 Detaile											Provision for Income Tax	-14701000000	-3760000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000	#NAME?	-14701000000	-3760000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000																																																																																																																																																																																										|																 on Back.										Net Income from Continuing Operations	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	#NAME?	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																																																																																																																																																																																										|FOR_____________________________________																										Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	#NAME?	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																																																																																																																																																																																										|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.EXECUTOR/																										Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	#NAME?	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																																																																																																																																																																																										|{														}.ADMINISTRATOR												Net Income Available to Common Stockholders	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	#NAME?	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																																																																																																																																																																																										|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.PERSONAL/																										Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000	#NAME?	76033000000	20642000000	18525000000	17930000000	15227000000	11247000000	6959000000																																																																																																																																																																																										|{														}.REPRESENTATIVE												Income Statement Supplemental Section								#NAME?																																																																																																																																																																																																	|AUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATUREAUTHORIZEDSIGNATURE.TRUSTEE||																										Reported Normalized and Operating Income/Expense Supplemental Section								#NAME?																																																																																																																																																																																																	|Deposited to the account Of xxxxxxxx6547																										Total Revenue as Reported, Supplemental	2.57637E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000	#NAME?	2.58E+11	75325000000	61880000000	55314000000	56898000000	46173000000	38297000000																																																																																																																																																																																										|PLEASE READ THE IMPORTANT DISCLOSURES BELOW																										Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	19361000000	16437000000	15651000000	11213000000	6383000000	#NAME?	78714000000	21885000000	19361000000	16437000000	15651000000	11213000000	6383000000																																																																																																																																																																																										|																										Reported Effective Tax Rate	0.162		0.157	0.158		0.158	0.159	#NAME?	0.162		0.157	0.158		0.158	0.159																																																																																																																																																																																										|FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023 COD																										Reported Normalized Income								#NAME?																																																																																																																																																																																																	|																										Reported Normalized Operating Profit								#NAME?																																																																																																																																																																																																	|633-44-1725 Zachryiixixiiiwood@gmail.com 47-2041-6547 111000614 31000053																										Other Adjustments to Net Income Available to Common Stockholders								#NAME?																																																																																																																																																																																																	|PNC Bank PNC Bank Business Tax I.D. Number: 633441725																										Discontinued Operations								#NAME?																																																																																																																																																																																																	|CIF Department (Online Banking) Checking Account: 47-2041-6547																										Basic EPS	113.88	31.15	27.69	26.63	22.54	16.55	10.21	WOOD.,	113.88	31.15	27.69	26.63	22.54	16.55	10.21																																																																																																																																																																																										|P7-PFSC-04-F Business Type: Sole Proprietorship/Partnership Corporation																										Basic EPS from Continuing Operations	113.88	31.12	27.69	26.63	22.46	16.55	10.21	S.R.	113.88	31.12	27.69	26.63	22.46	16.55	10.21																																																																																																																																																																																										|500 First Avenue ALPHABET																										Basic EPS from Discontinued Operations								ZACHRY																																																																																																																																																																																																	|Pittsburgh, PA 15219-3128 5323 BRADFORD DR																										Diluted EPS	112.2	30.69	27.26	26.29	22.3	16.4	10.13  112.2	30.69	27.26	26.29	22.3	16.4	10.13																																																																																																																																																																																										GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020																			Diluted EPS from Continuing Operations	112.2	30.67	27.26	26.29	22.23	16.4	10.13	#NAME?	112.2	30.67	27.26	26.29	22.23	16.4	10.13																																																																																																																																																																																										Gross Profit	$146,698,000,000.00 	$42,337,000,000.00 	$35,653,000,000.00 	$31,211,000,000.00 	30818000000	$25,056,000,000.0
@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue or pull request
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
@zakwarlord7
Author
zakwarlord7 commented 32 minutes ago
From 15276cbacc9567e09756653c96f877e06850d21e Mon Sep 17 00:00:00 2001
From: =?UTF-8?q?Mislav=20Marohni=C4=87?= mislav@github.com
Date: Mon, 30 May 2022 16:44:40 +0200
Subject: [PATCH] I have had it with these mf snakes on this mf plane

go.mod | 3 +-
go.sum | 5 --
internal/cobra/args.go | 39 +++++++++++
internal/cobra/command.go | 79 ++++++++++++++++++++++
internal/cobra/completion.go | 55 ++++++++++++++++
internal/cobra/dispatch.go | 124 +++++++++++++++++++++++++++++++++++
internal/cobra/flags.go | 38 +++++++++++
internal/cobra/go.mod | 3 +
internal/cobra/help.go | 24 +++++++
internal/cobra/legacy.go | 3 +
10 files changed, 367 insertions(+), 6 deletions(-)
create mode 100644 internal/cobra/args.go
create mode 100644 internal/cobra/command.go
create mode 100644 internal/cobra/completion.go
create mode 100644 internal/cobra/dispatch.go
create mode 100644 internal/cobra/flags.go
create mode 100644 internal/cobra/go.mod
create mode 100644 internal/cobra/help.go
create mode 100644 internal/cobra/legacy.go

diff --git a/go.mod b/go.mod
index 08d4c245bca..8bf3e3ab40b 100644
--- a/go.mod
+++ b/go.mod
@@ -52,7 +52,6 @@ require (
github.com/golang/protobuf v1.5.2 // indirect
github.com/gorilla/css v1.0.0 // indirect
github.com/hashicorp/errwrap v1.0.0 // indirect

github.com/inconshreveable/mousetrap v1.0.0 // indirect
github.com/itchyny/gojq v0.12.8 // indirect
github.com/itchyny/timefmt-go v0.1.3 // indirect
github.com/lucasb-eyer/go-colorful v1.2.0 // indirect
@@ -74,3 +73,5 @@ require (
)
replace golang.org/x/crypto => github.com/cli/crypto v0.0.0-20210929142629-6be313f59b03
+
+replace github.com/spf13/cobra => ./internal/cobra
diff --git a/go.sum b/go.sum
index f24d36e0a60..829d5175751 100644
--- a/go.sum
+++ b/go.sum
@@ -162,8 +162,6 @@ github.com/henvic/httpretty v0.0.6/go.mod h1:X38wLjWXHkXT7r2+uK8LjCMne9rsuNaBLJ+
github.com/hinshun/vt10x v0.0.0-20220119200601-820417d04eec h1:qv2VnGeEQHchGaZ/u7lxST/RaJw+cv273q79D81Xbog=
github.com/hinshun/vt10x v0.0.0-20220119200601-820417d04eec/go.mod h1:Q48J4R4DvxnHolD5P8pOtXigYlRuPLGl6moFx3ulM68=
github.com/ianlancetaylor/demangle v0.0.0-20181102032728-5e5cf60278f6/go.mod h1:aSSvb/t6k1mPoxDqO4vJh6VOCGPwU4O0C2/Eqndh1Sc=
-github.com/inconshreveable/mousetrap v1.0.0 h1:Z8tu5sraLXCXIcARxBp/8cbvlwVa7Z1NHg9XEKhtSvM=
-github.com/inconshreveable/mousetrap v1.0.0/go.mod h1:PxqpIevigyE2G7u3NXJIT2ANytuPF1OarO4DADm73n8=
github.com/itchyny/gojq v0.12.8 h1:Zxcwq8w4IeR8JJYEtoG2MWJZUv0RGY6QqJcO1cqV8+A=
github.com/itchyny/gojq v0.12.8/go.mod h1:gE2kZ9fVRU0+JAksaTzjIlgnCa2akU+a1V0WXgJQN5c=
github.com/itchyny/timefmt-go v0.1.3 h1:7M3LGVDsqcd0VZH2U+x393obrzZisp7C0uEe921iRkU=
@@ -229,8 +227,6 @@ github.com/shurcooL/graphql v0.0.0-20220606043923-3cf50f8a0a29 h1:B1PEwpArrNp4dk
github.com/shurcooL/graphql v0.0.0-20220606043923-3cf50f8a0a29/go.mod h1:AuYgA5Kyo4c7HfUmvRGs/6rGlMMV/6B1bVnB9JxJEEg=
github.com/sourcegraph/jsonrpc2 v0.1.0 h1:ohJHjZ+PcaLxDUjqk2NC3tIGsVa5bXThe1ZheSXOjuk=
github.com/sourcegraph/jsonrpc2 v0.1.0/go.mod h1:ZafdZgk/axhT1cvZAPOhw+95nz2I/Ra5qMlU4gTRwIo=
-github.com/spf13/cobra v1.5.0 h1:X+jTBEBqF0bHN+9cSMgmfuvv2VHJ9ezmFNf9Y/XstYU=
-github.com/spf13/cobra v1.5.0/go.mod h1:dWXEIy2H428czQCjInthrTRUg7yKbok+2Qi/yBIJoUM=
github.com/spf13/pflag v1.0.5 h1:iy+VFUOCP1a+8yFto/drg2CJ5u0yRoB7fZw3DKv/JXA=
github.com/spf13/pflag v1.0.5/go.mod h1:McXfInJRrz4CZXVZOBLb0bTZqETkiAhM9Iw0y3An2Bg=
github.com/stretchr/objx v0.1.0/go.mod h1:HFkY916IF+rwdDfMAkV7OtwuqBVzrE8GR6GFx+wExME=
@@ -518,7 +514,6 @@ gopkg.in/check.v1 v1.0.0-20190902080502-41f04d3bba15/go.mod h1:Co6ibVJAznAaIkqp8
gopkg.in/errgo.v2 v2.1.0/go.mod h1:hNsd1EY+bozCKY1Ytp96fpM3vjJbqLJn88ws8XvfDNI=
gopkg.in/h2non/gock.v1 v1.1.2 h1:jBbHXgGBK/AoPVfJh5x4r/WxIrElvbLel8TCZkkZJoY=
gopkg.in/yaml.v2 v2.2.2/go.mod h1:hI93XBmqTisBFMUTm0b8Fm+jr3Dg1NNxqwp+5A1VGuI=
-gopkg.in/yaml.v2 v2.4.0/go.mod h1:RDklbk79AGWmwhnvt/jBztapEOGDOx6ZbXqjP6csGnQ=
gopkg.in/yaml.v3 v3.0.0-20200313102051-9f266ea9e77c/go.mod h1:K4uyk7z7BCEPqu6E+C64Yfv1cQ7kz7rIZviUmN+EgEM=
gopkg.in/yaml.v3 v3.0.1 h1:fxVm/GzAzEWqLHuvctI91KS9hhNmmWOoWu0XTYJS7CA=
gopkg.in/yaml.v3 v3.0.1/go.mod h1:K4uyk7z7BCEPqu6E+C64Yfv1cQ7kz7rIZviUmN+EgEM=
diff --git a/internal/cobra/args.go b/internal/cobra/args.go
new file mode 100644
index 00000000000..720df4aca98
--- /dev/null
+++ b/internal/cobra/args.go
@@ -0,0 +1,39 @@
+package cobra
+
+import "fmt"
+
+type PositionalArgs func(cmd *Command, args []string) error
+
+func MinimumNArgs(n int) PositionalArgs {

return func(cmd *Command, args []string) error {
  if len(args) < n {
  	return fmt.Errorf("requires at least %d arguments, got %d", n, len(args))
  }
  return nil
}
+}
+func MaximumNArgs(n int) PositionalArgs {

return func(cmd *Command, args []string) error {
  if len(args) > n {
  	return fmt.Errorf("accepts at most %d arguments, got %d", n, len(args))
  }
  return nil
}
+}
+func ExactArgs(n int) PositionalArgs {

return func(cmd *Command, args []string) error {
  if len(args) > n {
  	return fmt.Errorf("accepts exactly %d arguments, got %d", n, len(args))
  }
  return nil
}
+}
+var NoArgs PositionalArgs = func(cmd *Command, args []string) error {

if len(args) > 0 {
  return fmt.Errorf("does not accept any arguments, got %v", args)
}
return nil
+}
diff --git a/internal/cobra/command.go b/internal/cobra/command.go
new file mode 100644
index 00000000000..42ea6ba32eb
--- /dev/null
+++ b/internal/cobra/command.go
@@ -0,0 +1,79 @@
+package cobra
+import (

"context"
"io"
"os"
"strings"
"github.com/spf13/pflag"
+)
+type Command struct {

Use string
Short string
Long string
Example string
Hidden bool
Deprecated string
Annotations map[string]string
Aliases []string
SuggestFor []string
DisableFlagParsing bool
DisableFlagsInUseLine bool
SilenceErrors bool
SilenceUsage bool
SuggestionsMinimumDistance int
PreRun func(cmd *Command, args []string)
Run func(cmd *Command, args []string)
PreRunE func(cmd *Command, args []string) error
RunE func(cmd *Command, args []string) error
Args PositionalArgs
PersistentPreRunE func(cmd *Command, args []string) error
ValidArgsFunction func(cmd *Command, args []string, toComplete string) ([]string, ShellCompDirective)
args []string
outStream io.Writer
errStream io.Writer
localFlags *pflag.FlagSet
parentCommand *Command
childCommands []*Command
+}
+func (c *Command) SetArgs(args []string) {

c.args = args
+}
+func (c *Command) SetIn(io.Reader) {}
+func (c *Command) SetOut(w io.Writer) {

c.outStream = w
+}
+func (c *Command) SetErr(w io.Writer) {
c.errStream = w
+}
+func (c *Command) ErrOrStderr() io.Writer {

if c.errStream != nil {
  return c.errStream
}
return os.Stderr
+}
+func (c *Command) Context() context.Context {

return nil
+}
+func (c *Command) Name() string {

if idx := strings.IndexRune(c.Use, ' '); idx != -1 {
  return c.Use[:idx]
}
return c.Use
+}
+func (c *Command) UseLine() string {

return c.Use
+}
diff --git a/internal/cobra/completion.go b/internal/cobra/completion.go
new file mode 100644
index 00000000000..b6456bda1df
--- /dev/null
+++ b/internal/cobra/completion.go
@@ -0,0 +1,55 @@
+package cobra
+import "io"
+
+type ShellCompDirective int
+
+const (

// ShellCompDirectiveError indicates an error occurred and completions should be ignored.
ShellCompDirectiveError ShellCompDirective = 1 << iota
// ShellCompDirectiveNoSpace indicates that the shell should not add a space
// after the completion even if there is a single completion provided.
ShellCompDirectiveNoSpace
// ShellCompDirectiveNoFileComp indicates that the shell should not provide
// file completion even when no completion is provided.
ShellCompDirectiveNoFileComp
// ShellCompDirectiveFilterFileExt indicates that the provided completions
// should be used as file extension filters.
// For flags, using Command.MarkFlagFilename() and Command.MarkPersistentFlagFilename()
// is a shortcut to using this directive explicitly. The BashCompFilenameExt
// annotation can also be used to obtain the same behavior for flags.
ShellCompDirectiveFilterFileExt
// ShellCompDirectiveFilterDirs indicates that only directory names should
// be provided in file completion. To request directory names within another
// directory, the returned completions should specify the directory within
// which to search. The BashCompSubdirsInDir annotation can be used to
// obtain the same behavior but only for flags.
ShellCompDirectiveFilterDirs
// ShellCompDirectiveDefault indicates to let the shell perform its default
// behavior after completions have been provided.
// This one must be last to avoid messing up the iota count.
ShellCompDirectiveDefault ShellCompDirective = 0
+)
+const (

// ShellCompRequestCmd is the name of the hidden command that is used to request
// completion results from the program. It is used by the shell completion scripts.
ShellCompRequestCmd = "__complete"
// ShellCompNoDescRequestCmd is the name of the hidden command that is used to request
// completion results without their description. It is used by the shell completion scripts.
ShellCompNoDescRequestCmd = "__completeNoDesc"
+)
+func (c *Command) RegisterFlagCompletionFunc(flagName string, f func(cmd *Command, args []string, toComplete string) ([]string, ShellCompDirective)) error {

return nil
+}
+func (c *Command) GenBashCompletionV2(io.Writer, bool) error { return nil }
+func (c *Command) GenZshCompletion(io.Writer) error { return nil }
+func (c *Command) GenFishCompletion(io.Writer, bool) error { return nil }
+func (c *Command) GenPowerShellCompletionWithDesc(io.Writer) error { return nil }
diff --git a/internal/cobra/dispatch.go b/internal/cobra/dispatch.go
new file mode 100644
index 00000000000..c6686175bca
--- /dev/null
+++ b/internal/cobra/dispatch.go
@@ -0,0 +1,124 @@
+package cobra
+
+import (

"fmt"
"os"
+)
+func (c *Command) Traverse(args []string) (*Command, []string, error) {

foundCmd := c
for {
  if len(args) == 0 {
  	return foundCmd, args, nil
  }
  cmdName := args[0]
  if cmdName != "" && cmdName[0] == '-' {
  	return foundCmd, args, nil
  }
  isFound := false
  for _, cmd := range foundCmd.childCommands {
  	if isNameMatch(cmd, cmdName) {
  		foundCmd = cmd
  		isFound = true
  		break
  	}
  }
  if !isFound {
  	if !foundCmd.Runnable() {
  		return foundCmd, args, fmt.Errorf("%s: could not find command %q", foundCmd.CommandPath(), cmdName)
  	}
  	return foundCmd, args, nil
  }
  args = args[1:]
}
+}
+func isNameMatch(c *Command, name string) bool {

if c.Name() == name {
  return true
}
for _, alias := range c.Aliases {
  if alias == name {
  	return true
  }
}
return false
+}
+func (c *Command) ExecuteC() (*Command, error) {

cmd, args, err := c.Traverse(c.args)
if err != nil {
  return cmd, err
}
flags := cmd.Flags()
if err := flags.Parse(args); err != nil {
  return cmd, err
}
args = flags.Args()
if !cmd.Runnable() {
  fmt.Fprint(os.Stdout, cmd.UsageString())
  return cmd, nil
}
if cmd.Args != nil {
  if err := cmd.Args(cmd, args); err != nil {
  	return cmd, err
  }
}
if cmd.PreRunE != nil {
  if err := cmd.PreRunE(cmd, args); err != nil {
  	return cmd, err
  }
} else if cmd.PreRun != nil {
  cmd.PreRun(cmd, args)
}
if cmd.RunE != nil {
  return cmd, cmd.RunE(cmd, args)
}
cmd.Run(cmd, args)
return cmd, nil
+}
+func (c *Command) CommandPath() string {

if c.HasParent() {
  return c.Parent().CommandPath() + " " + c.Name()
}
return c.Name()
+}
+func (c *Command) Runnable() bool {

return c.RunE != nil || c.Run != nil
+}
+func (c *Command) Commands() []*Command {

return c.childCommands
+}
+func (c *Command) AddCommand(cmds ...*Command) {

for _, child := range cmds {
  child.parentCommand = c
}
c.childCommands = append(c.childCommands, cmds...)
+}
+func (c *Command) HasParent() bool {

return c.Parent() != nil
+}
+func (c *Command) Parent() *Command {

return nil
+}
+func (c *Command) Root() *Command {

if c.HasParent() {
  return c.Parent().Root()
}
return c
+}
diff --git a/internal/cobra/flags.go b/internal/cobra/flags.go
new file mode 100644
index 00000000000..ab1af0bbeac
--- /dev/null
+++ b/internal/cobra/flags.go
@@ -0,0 +1,38 @@
+package cobra
+import "github.com/spf13/pflag"
+
+func (c *Command) ArgsLenAtDash() int {

return 0
+}
+func (c *Command) Flags() *pflag.FlagSet {

if c.localFlags == nil {
  flags := pflag.NewFlagSet(c.CommandPath(), pflag.ContinueOnError)
  flags.SetOutput(c.ErrOrStderr())
  c.localFlags = flags
}
return c.localFlags
+}
+func (c *Command) LocalFlags() *pflag.FlagSet {

return c.Flags()
+}
+func (c *Command) PersistentFlags() *pflag.FlagSet {

return pflag.NewFlagSet("", pflag.ContinueOnError)
+}
+func (c *Command) InheritedFlags() *pflag.FlagSet {

return pflag.NewFlagSet("", pflag.ContinueOnError)
+}
+func (c *Command) NonInheritedFlags() *pflag.FlagSet {

return c.Flags()
+}
+func (c *Command) FlagErrorFunc() func(*Command, error) error {

return nil
+}
+func (c *Command) SetFlagErrorFunc(f func(*Command, error) error) {}
diff --git a/internal/cobra/go.mod b/internal/cobra/go.mod
new file mode 100644
index 00000000000..13ce8bbd792
--- /dev/null
+++ b/internal/cobra/go.mod
@@ -0,0 +1,3 @@
+module github.com/spf13/cobra
+
+go 1.18
diff --git a/internal/cobra/help.go b/internal/cobra/help.go
new file mode 100644
index 00000000000..9f1a984d2fa
--- /dev/null
+++ b/internal/cobra/help.go
@@ -0,0 +1,24 @@
+package cobra
+
+func (c *Command) UsageString() string {

return "Usage: " + c.UseLine() + "\n"
+}
+func (c *Command) InitDefaultHelpCmd() {}
+func (c *Command) InitDefaultHelpFlag() {}
+
+func (c *Command) IsAvailableCommand() bool {

return true
+}
+func (c *Command) IsAdditionalHelpTopicCommand() bool {

return true
+}
+func (c *Command) SetHelpFunc(f func(*Command, []string)) {}
+
+func (c *Command) SetUsageFunc(f func(*Command) error) {}
+
+func (c *Command) SuggestionsFor(typedName string) []string {

return nil
+}
diff --git a/internal/cobra/legacy.go b/internal/cobra/legacy.go
new file mode 100644
index 00000000000..b9df5003b39
--- /dev/null
+++ b/internal/cobra/legacy.go
@@ -0,0 +1,3 @@
+package cobra
+var MousetrapHelpText string
ZACHRY T WOOD
Cash and Cash Equivalents, Beginning of Period
Department of the Treasury
Internal Revenue Service

Calendar Year
Due: 04/18/2022

USD in "000'"s
Repayments for Long Term Debt
Costs and expenses:
Cost of revenues
Research and development
Sales and marketing
General and administrative
European Commission fines
Total costs and expenses
Income from operations
Other income (expense), net
Income before income taxes
Provision for income taxes
Net income

*include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
*include interest paid, capital obligation, and underweighting

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

INTERNAL REVENUE SERVICE,
PO BOX 1214,
CHARLOTTE, NC 28201-1214

ZACHRY WOOD
15
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.
Cat. No. 11320B
Form 1040 (2021)
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental
Total Operating Profit/Loss as Reported, Supplemental
Reported Effective Tax Rate
Reported Normalized Income
Reported Normalized Operating Profit
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS
Basic EPS from Continuing Operations
Basic EPS from Discontinued Operations
Diluted EPS
Diluted EPS from Continuing Operations
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding
Diluted Weighted Average Shares Outstanding
Reported Normalized Diluted EPS
Basic EPS
Diluted EPS
Basic WASO
Diluted WASO
Fiscal year end September 28th., 2022. | USD

For Paperwork Reduction Act Notice, see the seperate Instructions.

important information

2012201320142015ZACHRY.T.5323.DALLAS.Other.Benefits.and Information Pto Balance 9xygchr6$13Earnings Statement 065-0001 ALPHABET Period Beginning: 1600 AMPITHEATRE PARKWAY DRPeriod Ending: MOUNTAIN VIEW, C.A., 94043Pay Date: 2965 Taxable Marital Status: Exemptions/AllowancesMarried BRADFORD DR Federal: TX:NO State Income Tax rateunitsthis periodyear to date $0 1 Alphabet Inc., co. 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Deposited to the account Of: ZACHRY T. WOOD 4720416547 650001 719218914/18/2022 4720416547 transit ABA 15-51\000 575A "

Business Checking For 24-hour account information, sign on to
pnc.com/mybusiness/ Business Checking Account number: 47-2041-6547 - continued
Activity Detail
Deposits and Other Additions
ACH Additions
Date posted
27-Apr
Checks and Other Deductions
Deductions
Date posted
26-Apr
Service Charges and Fees
Date posted
27-Apr
Detail of Services Used During Current Period
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022,
Description
Account Maintenance Charge
Total For Services Used This Peiiod
Total Service (harge
Reviewing Your Statement
Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account.
Balancing Your Account Update Your Account Register

Gross Profit
1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplementa
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 2.21169E+13
5/25/22This Product Contains Sensitive Taxpayer Data   Request Date: 08-02-2022
  Response Date: 08-02-2022 
Tracking Number: 102398244811
   Account Transcript   
This Product Contains Sensitive Taxpayer Data 
Revenues Revenue Recognition

PNC Bank National Association
Northern Ky,
07364
Date
8/3 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 .0000222240903782823%
8/8 Corporate ACH Acctverify Roll By ADP 00022217906234115
8/10 ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355
8/11 Corporate Ach Veryifyqbw Intuit 00022222909296656
8/12 Corporate Ach Veryifyqbw Intuit 00022223912710109
Service Charges and Fees Reference
Date posted number
8/1 10 Service Charge Period Ending 07/29.2022
8/4 36 Returned Item Fee (nsf) 00022214903782823
8/11 36 Returned Item Fee (nsf) 00022222905832355
INCOME STATEMENT
NASDAQ:GOOG
transaction
Description TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020
Gross Profit 1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplemental
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 2.21169E+13
Date posted
5/02
2017 2018 2019 2020 2021
Best Time to 911
INTERNAL REVENUE SERVICE
PO BOX 1214
CHARLOTTE NC 28201-1214 9999999999

633-44-1725
ZACHRYTWOOD
Department of the Treasury Calendar Year Check Date I
Internal Revenue Service Due. (04/18/2022)

70842745000 XXX-XX-1725 Earnings Statement FICA - Social Security 0 8854

Taxes / Deductions Stub Number: 1 FICA - Medicare 0 0
Securities Clearing corporat Rate .0000022411111

Employer Taxes

Net Pay FICA 0 0 '
22677000000000.00 FUTA 0 0
SUTA 0 0
RUTA 0 0
Tax Period
Taxes / Deductions Current YTD
Tax / Deductions
Tax Period Total YTD Medicare
Q1 04/18/2022 70842743866.00 70842743866.00 70842743866.00 000000 / 00000 Federal Withholding 5105000.00 5105000.0
Q2 06/15/2022 70842743866.00 70842743866.00 70842743866.00 000000 / 00000 Federal Withholding 0 0
Q3 09/18/2022 70842743866.00 70842743866.00 70842743866.00 000000 / 00000 Federal Withholding 0 0
Q4 01/17/2023 70842743866.00 70842743866.00 70842743866.00 000000 / 00000 Federal Withholding 0 0
CHECK NO. FICA - Social Security 0 8854
20210418 FICA - Medicare 0
INCOME STATEMENT
NASDAQ:GOOG TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020
Date
8/3 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 0.00022214903782823
8/8 Corporate ACH Acctverify Roll By ADP 00022217906234115
8/10 ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355
8/11 Corporate Ach Veryifyqbw Intuit 00022222909296656
8/12 Corporate Ach Veryifyqbw Intuit 00022223912710109

Service Charges and Fees Reference
Date transaction Reference
posted description number
8/1 62.50 Service Charge Period Ending 07/29.2022 00022116905560149
8/4 2267700.00 Returned Item Fee (nsf) 00022214903782823
8/11 22677000000000.00 Returned Item Fee (nsf) 00022222905832355
Stockholders’ equity:
Taxable Marital Status:
Exemptions/Allowances Married Z A C H R Y T Y L E R W O O D
5 3 2 3 B R A D F O R D D R
Federal: D A L L A S , T X 7 5 2 3 5 - 8 3 1 4
TX: NO State Income Tax
Federal Income Tax
Social Security Tax
Medicare Tax
REFUND RECIEPT
Net Pay 70842743866 70842743866 CHECKING
Net Check 70842743866
ALPHABET INCOME CHECK NUMBER's Are Not disclosed to Payee's (Reference number).
1600 AMPIHTHEATRE PARKWAY
MOUNTAIN VIEW CA 94043 222129
DEPOSIT TICKET
Deposited to the account Of xxxxxxxx6547
Deposits and Other Additions :
Checks and Other Deductions Amount
transaction Items
Description
ACH Additions
Debit Card Purchases 5.41 15.19
commission 1 2,269,894.11
ACH Deductions 5 82
Service Charges and Fees 3 5/2/2022
Other Deductions 1 2,270,001.91
Total
Total 12
FORM NUMBER: 1040 Period Request: Dec. 31, 2020   
TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725  
ZACH T WOO  
3050 R  
--- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---
 ACCOUNT BALANCE: 2270001.91  
ACCRUED INTEREST: 4.80523128073e+14 AS OF: Apr. 26, 2022 
ACCRUED PENALTY:240261564036618 AS OF: Apr. 26, 2022  
ACCOUNT BALANCE  
PLUS ACCRUALS  
(this is not
a  payoff amount): 0.00  
** INFORMATION FROM THE RETURN OR AS ADJUSTED **   
EXEMPTIONS: 00  
FILING STATUS: Single  
ADJUSTED GROSS  INCOME:   
TAXABLE INCOME:   
TAX PER RETURN:   
SE TAXABLE INCOME  
TAXPAYER:   
SE TAXABLE INCOME  
SPOUSE:   
TOTAL SELF  EMPLOYMENT TAX:   
RETURN NOT PRESENT FOR THIS ACCOUNT  
TRANSACTIONS   
CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT 
No tax return filed   
766 Tax relief credit 06-15-2020 -$1,200.00 
846 Refund issued 06-05-2020 $1,200.00  
290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0  
971 Notice issued 06-15-2020 $0.00 
766 Tax relief credit 01-18-2021 -$600.00 
846 Refund issued 01-06-2021 $600.00  
290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0  
663 Estimated tax payment 01-05-2021 -$9,000,000.00  662
Removed estimated tax payment 01-05-2021 $9,000,000.00 
740 Undelivered refund returned to IRS 01-18-2021 -$600.00  
767 Reduced or removed tax relief 01-18-2021 $600.00  credit  
971 Notice issued 03-28-2022 $0.00
Department of the Treasury
Internal Revenue Service Due. (04/18/2022)
PNC Alert pncalert@pnc.com
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved.
PNC Bank, National Association. Member FDICRDTROD02PNC BankInternal Revenue Service Due. (04/18/2022)
PNC Alert pncalert@pnc.com
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC
RDTROD02
2021/09/292880Paid Period09-28-2019 - 09 28-2021Pay Date01-29-2022896551Amount$70,432,743,866totalAlphabet Inc.$134,839Income StatementZachry Tyler WoodUS$ in millionsDec 31, 2019Dec 31, 2018Dec 31, 2017Dec 31, 2016Dec 31, 2015Ann. Rev. Date161,857136,819110,85590,27274,989Revenues-71,896-59,549-45,583-35,138-28,164Cost of revenues89,96177,27065,27255,13446,825Gross profit-26,018-21,419-16,625-13,948-12,282Research and development-18,464-16,333-12,893-10,485-9,047Sales and marketing-9,551-8,126-6,872-6,985-6,136General and administrative-1,697-5,071-2,736â€”â€”European Commission fines34,23126,32126,14623,71619,360Income from operations2,4271,8781,3121,220999Interest income-100-114-109-124-104Interest expense103-80-121-475-422Foreign currency exchange gain1491,190-110-53â€”Gain (loss) on debt securities2,6495,46073-20â€”Gain (loss) on equity securities,-326â€”â€”â€”â€”Performance fees390-120-156-202â€”Gain(loss)10237815888-182Other5,3948,5921,047434291Other income (expense), net39,62534,91327,19324,15019,651Income before income taxes-3,269-2,880-2,302-1,922-1,621Provision for income taxes36,355-32,66925,61122,19818,030Net incomeAdjustment Payment to Class C36,35532,66925,61122,19818,030Net. Ann. Rev.Based on: 10-K (filing date: 2020-02-04), 10-K (filing date: 2019-02-05), 10-K (filing date: 2018-02-06), 10-K (filing date: 2017-02-03), 10-K (filing date: 2016-02-11).1
Earnings Statement
ALPHABET
Period Beginning:
1600 AMPITHEATRE PARKWAYDR
Period Ending:
MOUNTAIN VIEW, C.A., 94043Pay Date:Taxable Marital Status:
Exemptions/AllowancesMarried
ZACHRY T.
5323Federal:DALLASTX:
NO State Income Tax
rateunitsyear to date
Other Benefits and
EPS112674,678,00075698871600Information
Pto Balance
Total Work Hrs
Gross Pay75698871600
Important Notes
COMPANY PH Y: 650-253-0000
Statutory
BASIS OF PAY: BASIC/DILUTED EPS
Federal Income TaxSocial Security Tax
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Medicare TaxNet Pay70,842,743,86670,842,743,866CHECKINGNet Check70842743866Your federal taxable wages this period are $ALPHABET INCOME
Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043
04/27/2022
Deposited to the account Of
xxxxxxxx6547
PLEASE READ THE IMPORTANT DISCLOSURES BELOW
FEDERAL RESERVE MASTER's SUPPLIER's ACCOUNT
31000053-052101023
633-44-1725
Zachryiixixiiiwood@gmail.com
47-2041-6547 111000614 31000053
PNC Bank
PNC Bank Business Tax I.D. Number: 633441725
CIF Department (Online Banking)
Checking Account: 47-2041-6547
P7-PFSC-04-F
Business Type: Sole Proprietorship/Partnership Corporation
500 First Avenue
ALPHABET
Pittsburgh, PA 15219-3128
5323 BRADFORD DR
NON-NEGOTIABLE
DALLAS TX 75235 8313
ZACHRY, TYLER, WOOD
4/18/2022
650-2530-000 469-697-4300
SIGNATURE
Time Zone:
Eastern Central Mountain Pacific
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value
NON-NEGOTIABLE
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
For Paperwork Reduction Act Notice, see the seperate Instructions.
ZACHRY TYLER WOOD
Fed 941 Corporate3935566986.66
Fed 941 West Subsidiary3935517115.41
Fed 941 South Subsidiary3935523906.09
Fed 941 East Subsidiary3935511247.64
Fed 941 Corp - Penalty3935527198.5
Fed 940 Annual Unemp - Corp3935517028.05
9999999998 7305581633-44-1725
Daily Balance continued on next page
Date
8/3 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 0.00022214903782823
8/8 Corporate ACH Acctverify Roll By ADP 00022217906234115
8/10 ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355
8/11 Corporate Ach Veryifyqbw Intuit 00022222909296656
8/12 Corporate Ach Veryifyqbw Intuit 00022223912710109

Service Charges and Fees Reference
Date posted number
8/1 10 Service Charge Period Ending 07/29.2022
8/4 36 Returned Item Fee (nsf) (00022214903782823)
8/11 36 Returned Item Fee (nsf) (00022222905832355)
INCOME STATEMENT
NASDAQ:GOOG TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020
Gross Profit ]1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000

ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 2.21169E+13
5/25/22We will investigate your complaint and will correct any error promptly, If we take longer than 10 business days, we will provisionally credit your account for the amount you think is in error, so that you will have use of the money during the time it ekes us to complete our investigation.
Member FDIC
￼ +
1 Earnings Statement
3/6/2022 at 6:37 PM +

ALPHABET Period Beginning: 01-01-2009

GOOGL_income-statement_Quarterly_As_Originally_Reported 1600 AMPITHEATRE PARKWAY Period Ending:

Cash Flow from Operating Activities, IndirectNet Cash Flow from Continuing Operating Activities, IndirectCash Generated from Operating ActivitiesIncome/Loss before Non-Cash AdjustmentTotal Adjustments for Non-Cash ItemsDepreciation,
Amortization and Depletion, Non-Cash AdjustmentDepreciation and Amortization, Non-Cash AdjustmentDepreciation, Non-Cash AdjustmentAmortization, Non-Cash AdjustmentStock-Based Compensation, Non-Cash AdjustmentTaxes, Non-Cash AdjustmentInvestment Income/Loss, Non-Cash AdjustmentGain/Loss on Financial Instruments, Non-Cash AdjustmentOther Non-Cash ItemsChanges in Operating CapitalChange in Trade and Other ReceivablesChange in Trade/Accounts ReceivableChange in Other Current AssetsChange in Payables and Accrued ExpensesChange in Trade and Other PayablesChange in Trade/Accounts PayableChange in Accrued ExpensesChange in Deferred Assets/LiabilitiesChange in Other Operating Capital +MOUNTAIN VIEW, C.A., 94043 Pay Date:

Change in Prepayments and Deposits
Cash Flow from Investing Activities
Cash Flow from Continuing Investing Activities

Purchase/Sale and Disposal of Property, Plant and Equipment, NetPurchase of Property, Plant and EquipmentSale and Disposal of Property, Plant and EquipmentPurchase/Sale of Business, NetPurchase/Acquisition of BusinessPurchase/Sale of Investments,
NetPurchase of Investments
Taxable Marital Status ",
Exemptions/Allowances.", Married ZACHRY T.

Sale of InvestmentsOther Investing Cash FlowPurchase/Sale of Other Non-Current Assets, NetSales of Other Non-Current AssetsCash Flow from Financing ActivitiesCash Flow from Continuing Financing ActivitiesIssuance of/Payments for Common Stock, NetPayments for Common StockProceeds from Issuance of Common StockIssuance of/Repayments for Debt, NetIssuance of/Repayments for Long Term Debt, NetProceeds from Issuance of Long Term DebtRepayments for Long Term Debt + 5323

Proceeds from Issuance/Exercising of Stock Options/WarrantsOther Financing Cash FlowCash and Cash Equivalents, End of PeriodChange in CashEffect of Exchange Rate ChangesCash and Cash Equivalents, Beginning of PeriodCash Flow Supplemental SectionChange in Cash as Reported, SupplementalIncome Tax Paid, SupplementalZACHRY T WOODCash and Cash Equivalents, Beginning of PeriodDepartment of the TreasuryInternal Revenue Service +Federal:

Calendar Year

Due: 04/18/2022

DALLAS

USD in ""000'""sRepayments for Long Term DebtCosts and expenses:Cost of revenuesResearch and developmentSales and marketingGeneral and administrativeEuropean Commission finesTotal costs and expensesIncome from operationsOther income (expense), netIncome before income taxesProvision for income taxesNet income*include interest paid, capital obligation, and underweighting +TX: NO State Income Tax

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
rate units year to date Benefits and Other Infotmation
EPS 112 674,678,000 75698871600 Regular
Pto Balance
Total Work Hrs
Gross Pay 75698871600 Important Notes
COMPANY PH Y: 650-253-0000
Statutory BASIS OF PAY: BASIC/DILUTED EPS
Federal Income Tax
Social Security Tax
+ YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)*include interest paid, capital obligation, and underweighting +Medicare Tax
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) +

Net Pay 70842743866.0000 70842,743,866.0000
CHECKING

Net Check 70842743866

                                            1                Earnings Statement                                                                        
ALPHABET Period Beginning:
1600 AMPITHEATRE PARKWAY DR Period Ending:
MOUNTAIN VIEW, C.A., 94043 Pay Date:
"Taxable Marital Status: +
Exemptions/Allowances" Married ZACHRY T.
5323
Federal:
DALLAS
TX: NO State Income Tax
rate units year to date Other Benefits and
EPS 112 674,678,000 75698871600 Information
Pto Balance
Total Work Hrs
Gross Pay 75698871600 Important Notes
COMPANY PH Y: 650-253-0000 SIGNATURE
Statutory BASIS OF PAY: BASIC/DILUTED EPS
Federal Income Tax
Social Security Tax
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Medicare Tax

Net Pay 70,842,743,866 70,842,743,866
CHECKING
Net Check 70842743866
Your federal taxable wages this period are $ Advice number:
ALPHABET INCOME
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 Pay date:

Deposited to the account Of xxxxxxxx6547
+"PLEASE READ THE IMPORTANT DISCLOSURES BELOW
+
+FEDERAL RESERVE MASTER SUPPLIER ACCOUNT 31000053-052101023

                                   633-44-1725                                                                                                
+PNC Bank
+CIF Department (Online Banking)
+P7-PFSC-04-F
+500 First Avenue
+Pittsburgh, PA 15219-3128
+NON-NEGOTIABLE
+
+

                                                                                                           SIGNATURE                        
+Investment Products • Not FDIC Insured • No Bank Guarantee • May Lose Value"

                                                           NON-NEGOTIABLE                                                                        
+Based on facts as set forth in. 6550
+The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.
+
+EMPLOYER IDENTIFICATION NUMBER: 61-1767919 6551
+
+
+
+
+
+

ALPHABET
ZACHRY T WOOD
5323 BRADFORD DR
DALLAS TX 75235-8314
ORIGINAL REPORT
Income, Rents, & Royalty
INCOME STATEMENT 61-1767919
88-1303491
GOOGL_income-statement_Quarterly_As_Originally_Reported TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020

Gross Profit 1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Other Revenue 257637118600
Cost of Revenue -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
Cost of Goods and Services -1.10939E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000
Operating Income/Expenses -67984000000 -20452000000 -16466000000 -16292000000 -14774000000 -15167000000 -13843000000 -13361000000
Selling, General and Administrative Expenses -36422000000 -11744000000 -8772000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000
General and Administrative Expenses -13510000000 -4140000000 -3256000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000
Selling and Marketing Expenses -22912000000 -7604000000 -5516000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000
Research and Development Expenses -31562000000 -8708000000 -7694000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000
Total Operating Profit/Loss 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Non-Operating Income/Expenses, Total 12020000000 2517000000 2033000000 2624000000 4846000000 3038000000 2146000000 1894000000
Total Net Finance Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000
Net Interest Income/Expense 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000

Interest Expense Net of Capitalized Interest -346000000 -117000000 -77000000 -76000000 -76000000 -53000000 -48000000 -13000000
Interest Income 1499000000 378000000 387000000 389000000 345000000 386000000 460000000 433000000
Net Investment Income 12364000000 2364000000 2207000000 2924000000 4869000000 3530000000 1957000000 1696000000
Gain/Loss on Investments and Other Financial Instruments 12270000000 2478000000 2158000000 2883000000 4751000000 3262000000 2015000000 1842000000
Income from Associates, Joint Ventures and Other Participating Interests 334000000 49000000 188000000 92000000 5000000 355000000 26000000 -54000000
Gain/Loss on Foreign Exchange -240000000 -163000000 -139000000 -51000000 113000000 -87000000 -84000000 -92000000
Irregular Income/Expenses 0 0 0 0 0
Other Irregular Income/Expenses 0 0 0 0 0
Other Income/Expense, Non-Operating -1497000000 -108000000 -484000000 -613000000 -292000000 -825000000 -223000000 -222000000
Pretax Income 90734000000 24402000000 23064000000 21985000000 21283000000 18689000000 13359000000 8277000000
Provision for Income Tax -14701000000 -3760000000 -4128000000 -3460000000 -3353000000 -3462000000 -2112000000 -1318000000
Net Income from Continuing Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Extraordinary Items and Discontinued Operations 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income after Non-Controlling/Minority Interests 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Diluted Net Income Available to Common Stockholders 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000
Income Statement Supplemental Section
Reported Normalized and Operating Income/Expense Supplemental Section
Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000
Reported Effective Tax Rate 0.162 0.179 0.157 0.158 0.158 0.159
Reported Normalized Income
Reported Normalized Operating Profit
Other Adjustments to Net Income Available to Common Stockholders
Discontinued Operations
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Basic EPS from Continuing Operations 113.88 31.12 28.44 27.69 26.63 22.46 16.55 10.21
Basic EPS from Discontinued Operations
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Diluted EPS from Continuing Operations 112.2 30.67 27.99 27.26 26.29 22.23 16.4 10.13
Diluted EPS from Discontinued Operations
Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Reported Normalized Diluted EPS
Basic EPS 113.88 31.15 28.44 27.69 26.63 22.54 16.55 10.21
Diluted EPS 112.2 30.69 27.99 27.26 26.29 22.3 16.4 10.13
Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000
Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000
Fiscal year end September 28th., 2022. | USD

                                                            Print                                                                        
Cash Flow from Operating Activities, Indirect
Net Cash Flow from Continuing Operating Activities, Indirect 24934000000 25539000000 37497000000 31211000000 30818000000
Cash Generated from Operating Activities 24934000000 25539000000 21890000000 19289000000 22677000000
Income/Loss before Non-Cash Adjustment 24934000000 25539000000 21890000000 19289000000 22677000000
Total Adjustments for Non-Cash Items 20642000000 18936000000 18525000000 17930000000 15227000000
Depreciation, Amortization and Depletion, Non-Cash Adjustment 6517000000 3797000000 4236000000 2592000000 5748000000
Depreciation and Amortization, Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000
Depreciation, Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000
Amortization, Non-Cash Adjustment 3215000000 3085000000 2730000000 2525000000 3539000000
Stock-Based Compensation, Non-Cash Adjustment 224000000 219000000 215000000 228000000 186000000
Taxes, Non-Cash Adjustment 3954000000 3874000000 3803000000 3745000000 3223000000
Investment Income/Loss, Non-Cash Adjustment 1616000000 -1287000000 379000000 1100000000 1670000000
Gain/Loss on Financial Instruments, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Other Non-Cash Items -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
Changes in Operating Capital -14000000 64000000 -8000000 -255000000 392000000
Change in Trade and Other Receivables -2225000000 2806000000 -871000000 -1233000000 1702000000
Change in Trade/Accounts Receivable -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Change in Other Current Assets -5819000000 -2409000000 -3661000000 2794000000 -5445000000
Change in Payables and Accrued Expenses -399000000 -1255000000 -199000000 7000000 -738000000
Change in Trade and Other Payables 6994000000 3157000000 4074000000 -4956000000 6938000000
Change in Trade/Accounts Payable 1157000000 238000000 -130000000 -982000000 963000000
Change in Accrued Expenses 1157000000 238000000 -130000000 -982000000 963000000
Change in Deferred Assets/Liabilities 5837000000 2919000000 4204000000 -3974000000 5975000000
Change in Other Operating Capital 368000000 272000000 -3000000 137000000 207000000
Change in Prepayments and Deposits -3369000000 3041000000 -1082000000 785000000 740000000
Cash Flow from Investing Activities
Cash Flow from Continuing Investing Activities -11016000000 -9074000000 -5383000000 -7281000000
Purchase/Sale and Disposal of Property, Plant and Equipment, Net -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
Purchase of Property, Plant and Equipment -6383000000 -10050000000 -5496000000 -5942000000 -5479000000
Sale and Disposal of Property, Plant and Equipment -6383000000 -6819000000 -5496000000 -5942000000 -5479000000
Purchase/Sale of Business, Net -6819000000
Purchase/Acquisition of Business -385000000 -308000000 -1666000000 -370000000
Purchase/Sale of Investments, Net -385000000 -259000000 -308000000 -1666000000 -370000000
Purchase of Investments -4348000000 -259000000 -3293000000 2195000000 -1375000000
Sale of Investments -40860000000 -3360000000 -24949000000 -37072000000 -36955000000
Other Investing Cash Flow 36512000000 -35153000000 21656000000 39267000000 35580000000
Purchase/Sale of Other Non-Current Assets, Net 100000000 31793000000 23000000 30000000 -57000000
Sales of Other Non-Current Assets 388000000
Cash Flow from Financing Activities
Cash Flow from Continuing Financing Activities -16511000000 -15254000000 -15991000000 -13606000000 -9270000000
Issuance of/Payments for Common Stock, Net -16511000000 -15254000000 -15991000000 -13606000000 -9270000000
Payments for Common Stock -13473000000 -12610000000 -12796000000 -11395000000 -7904000000
Proceeds from Issuance of Common Stock 13473000000 -12610000000 -12796000000 -11395000000 -7904000000
Issuance of/Repayments for Debt, Net
Issuance of/Repayments for Long Term Debt, Net

115000000 -42000000 -1042000000 -37000000 -57000000
Proceeds from Issuance of Long Term Debt

1150000000 -42000000 -1042000000 -37000000 -57000000
Repayments for Long Term Debt 6250000000 6350000000 6699000000 900000000 0
Proceeds from Issuance/Exercising of Stock Options/Warrants 6250000000 6365000000 -6392000000 -7741000000 -937000000 -57000000
2923000000 -2602000000 -2453000000 -2184000000 -1647000000
Other Financing Cash Flow
Cash and Cash Equivalents, End of Period
Change in Cash
Effect of Exchange Rate Changes 20945000000 23719000000 23630000000 266220000000 26465000000
Cash and Cash Equivalents, Beginning of Period 25930000000 235000000000 -3175000000 300000000 6126000000
Cash Flow Supplemental Section 181000000000 -146000000000 183000000 -143000000 210000000
Change in Cash as Reported, Supplemental 2.3719E+13 2.363E+13 2.6622E+13 2.6465E+13 2.0129E+13
Income Tax Paid, Supplemental

            2774000000        89000000        -2992000000                6336000000                                                                                        
Cash and Cash Equivalents, Beginning of Period

            13412000000        157000000                        -4990000000                                                                                                                                                                                                           
Q4 2020 Q4 2019 Income Statement USD in "000'"s Repayments for Long Term Debt

Dec. 31, 2020 Dec. 31, 2019
Costs and expenses:

Cost of revenues 182527 161857

Research and development

Sales and marketing 84732 71896
General and administrative 27573 26018
European Commission fines 17946 18464
Total costs and expenses 11052 9551
Income from operations 0 1697
Other income (expense), net 141303 127626
Income before income taxes 41224 34231
Provision for income taxes 6858000000 5394
Net income 22677000000 19289000000
*include interest paid, capital obligation, and underweighting 22677000000 19289000000
22677000000 19289000000
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
Enter Search Terms

US Legal Forms Texas Bill of Sale of Automobile and Odometer Statement
Tx Automobile Odometer Statement
Texas Bill of Sale of Automobile and Odometer Statement
The Forms Professionals Trust! ™
Category:Texas Bills of Sale - Automobiles
State:
Texas
Change state
Control #:TX-00431
Instant Download
$59.00
Buy now
Available formats: Word | Rich TextIn stock
Free Preview
Description
Related FormsGross Profit
1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplementa
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 2.21169E+13
5/25/22This Product Contains Sensitive Taxpayer Data   Request Date: 08-02-2022
  Response Date: 08-02-2022 
Tracking Number: 102398244811
   Account Transcript   
This Product Contains Sensitive Taxpayer Data 
Revenues Revenue Recognition

PNC Bank National Association
Northern Ky,
07364
Date
8/3 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 .0000222240903782823%
8/8 Corporate ACH Acctverify Roll By ADP 00022217906234115
8/10 ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355
8/11 Corporate Ach Veryifyqbw Intuit 00022222909296656
8/12 Corporate Ach Veryifyqbw Intuit 00022223912710109
Service Charges and Fees Reference
Date posted number
8/1 10 Service Charge Period Ending 07/29.2022
8/4 36 Returned Item Fee (nsf) 00022214903782823
8/11 36 Returned Item Fee (nsf) 00022222905832355
INCOME STATEMENT
NASDAQ:GOOG
transaction
Description TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020
Gross Profit 1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplemental
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 2.21169E+13
Date posted
5/02
2017 2018 2019 2020 2021
Best Time to 911
INTERNAL REVENUE SERVICE
PO BOX 1214
CHARLOTTE NC 28201-1214 9999999999

633-44-1725
ZACHRYTWOOD
Department of the Treasury Calendar Year Check Date I
Internal Revenue Service Due. (04/18/2022)

70842745000 XXX-XX-1725 Earnings Statement FICA - Social Security 0 8854

Taxes / Deductions Stub Number: 1 FICA - Medicare 0 0
Securities Clearing corporat Rate .0000022411111

Employer Taxes

Net Pay FICA 0 0 '
22677000000000.00 FUTA 0 0
SUTA 0 0
RUTA 0 0
Tax Period
Taxes / Deductions Current YTD
Tax / Deductions
Tax Period Total YTD Medicare
Q1 04/18/2022 70842743866.00 70842743866.00 70842743866.00 000000 / 00000 Federal Withholding 5105000.00 5105000.0
Q2 06/15/2022 70842743866.00 70842743866.00 70842743866.00 000000 / 00000 Federal Withholding 0 0
Q3 09/18/2022 70842743866.00 70842743866.00 70842743866.00 000000 / 00000 Federal Withholding 0 0
Q4 01/17/2023 70842743866.00 70842743866.00 70842743866.00 000000 / 00000 Federal Withholding 0 0
CHECK NO. FICA - Social Security 0 8854
20210418 FICA - Medicare 0
INCOME STATEMENT
NASDAQ:GOOG TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020
Date
8/3 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 0.00022214903782823
8/8 Corporate ACH Acctverify Roll By ADP 00022217906234115
8/10 ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355
8/11 Corporate Ach Veryifyqbw Intuit 00022222909296656
8/12 Corporate Ach Veryifyqbw Intuit 00022223912710109

Service Charges and Fees Reference
Date transaction Reference
posted description number
8/1 62.50 Service Charge Period Ending 07/29.2022 00022116905560149
8/4 2267700.00 Returned Item Fee (nsf) 00022214903782823
8/11 22677000000000.00 Returned Item Fee (nsf) 00022222905832355
Stockholders’ equity:
Taxable Marital Status:
Exemptions/Allowances Married Z A C H R Y T Y L E R W O O D
5 3 2 3 B R A D F O R D D R
Federal: D A L L A S , T X 7 5 2 3 5 - 8 3 1 4
TX: NO State Income Tax
Federal Income Tax
Social Security Tax
Medicare Tax
REFUND RECIEPT
Net Pay 70842743866 70842743866 CHECKING
Net Check 70842743866
ALPHABET INCOME CHECK NUMBER's Are Not disclosed to Payee's (Reference number).
1600 AMPIHTHEATRE PARKWAY
MOUNTAIN VIEW CA 94043 222129
DEPOSIT TICKET
Deposited to the account Of xxxxxxxx6547
Deposits and Other Additions :
Checks and Other Deductions Amount
transaction Items
Description
ACH Additions
Debit Card Purchases 5.41 15.19
commission 1 2,269,894.11
ACH Deductions 5 82
Service Charges and Fees 3 5/2/2022
Other Deductions 1 2,270,001.91
Total
Total 12
FORM NUMBER: 1040 Period Request: Dec. 31, 2020   
TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725  
ZACH T WOO  
3050 R  
--- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---
 ACCOUNT BALANCE: 2270001.91  
ACCRUED INTEREST: 4.80523128073e+14 AS OF: Apr. 26, 2022 
ACCRUED PENALTY:240261564036618 AS OF: Apr. 26, 2022  
ACCOUNT BALANCE  
PLUS ACCRUALS  
(this is not
a  payoff amount): 0.00  
** INFORMATION FROM THE RETURN OR AS ADJUSTED **   
EXEMPTIONS: 00  
FILING STATUS: Single  
ADJUSTED GROSS  INCOME:   
TAXABLE INCOME:   
TAX PER RETURN:   
SE TAXABLE INCOME  
TAXPAYER:   
SE TAXABLE INCOME  
SPOUSE:   
TOTAL SELF  EMPLOYMENT TAX:   
RETURN NOT PRESENT FOR THIS ACCOUNT  
TRANSACTIONS   
CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT 
No tax return filed   
766 Tax relief credit 06-15-2020 -$1,200.00 
846 Refund issued 06-05-2020 $1,200.00  
290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0  
971 Notice issued 06-15-2020 $0.00 
766 Tax relief credit 01-18-2021 -$600.00 
846 Refund issued 01-06-2021 $600.00  
290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0  
663 Estimated tax payment 01-05-2021 -$9,000,000.00  662
Removed estimated tax payment 01-05-2021 $9,000,000.00 
740 Undelivered refund returned to IRS 01-18-2021 -$600.00  
767 Reduced or removed tax relief 01-18-2021 $600.00  credit  
971 Notice issued 03-28-2022 $0.00
Department of the Treasury
Internal Revenue Service Due. (04/18/2022)
PNC Alert pncalert@pnc.com
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved.
PNC Bank, National Association. Member FDICRDTROD02PNC BankInternal Revenue Service Due. (04/18/2022)
PNC Alert pncalert@pnc.com
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC
RDTROD02
2021/09/292880Paid Period09-28-2019 - 09 28-2021Pay Date01-29-2022896551Amount$70,432,743,866totalAlphabet Inc.$134,839Income StatementZachry Tyler WoodUS$ in millionsDec 31, 2019Dec 31, 2018Dec 31, 2017Dec 31, 2016Dec 31, 2015Ann. Rev. Date161,857136,819110,85590,27274,989Revenues-71,896-59,549-45,583-35,138-28,164Cost of revenues89,96177,27065,27255,13446,825Gross profit-26,018-21,419-16,625-13,948-12,282Research and development-18,464-16,333-12,893-10,485-9,047Sales and marketing-9,551-8,126-6,872-6,985-6,136General and administrative-1,697-5,071-2,736â€”â€”European Commission fines34,23126,32126,14623,71619,360Income from operations2,4271,8781,3121,220999Interest income-100-114-109-124-104Interest expense103-80-121-475-422Foreign currency exchange gain1491,190-110-53â€”Gain (loss) on debt securities2,6495,46073-20â€”Gain (loss) on equity securities,-326â€”â€”â€”â€”Performance fees390-120-156-202â€”Gain(loss)10237815888-182Other5,3948,5921,047434291Other income (expense), net39,62534,91327,19324,15019,651Income before income taxes-3,269-2,880-2,302-1,922-1,621Provision for income taxes36,355-32,66925,61122,19818,030Net incomeAdjustment Payment to Class C36,35532,66925,61122,19818,030Net. Ann. Rev.Based on: 10-K (filing date: 2020-02-04), 10-K (filing date: 2019-02-05), 10-K (filing date: 2018-02-06), 10-K (filing date: 2017-02-03), 10-K (filing date: 2016-02-11).1
Earnings Statement
ALPHABET
Period Beginning:
1600 AMPITHEATRE PARKWAYDR
Period Ending:
MOUNTAIN VIEW, C.A., 94043Pay Date:Taxable Marital Status:
Exemptions/AllowancesMarried
ZACHRY T.
5323Federal:DALLASTX:
NO State Income Tax
rateunitsyear to date
Other Benefits and
EPS112674,678,00075698871600Information
Pto Balance
Total Work Hrs
Gross Pay75698871600
Important Notes
COMPANY PH Y: 650-253-0000
Statutory
BASIS OF PAY: BASIC/DILUTED EPS
Federal Income TaxSocial Security Tax
YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Medicare TaxNet Pay70,842,743,86670,842,743,866CHECKINGNet Check70842743866Your federal taxable wages this period are $ALPHABET INCOME
Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043
04/27/2022
Deposited to the account Of
xxxxxxxx6547
PLEASE READ THE IMPORTANT DISCLOSURES BELOW
FEDERAL RESERVE MASTER's SUPPLIER's ACCOUNT
31000053-052101023
633-44-1725
Zachryiixixiiiwood@gmail.com
47-2041-6547 111000614 31000053
PNC Bank
PNC Bank Business Tax I.D. Number: 633441725
CIF Department (Online Banking)
Checking Account: 47-2041-6547
P7-PFSC-04-F
Business Type: Sole Proprietorship/Partnership Corporation
500 First Avenue
ALPHABET
Pittsburgh, PA 15219-3128
5323 BRADFORD DR
NON-NEGOTIABLE
DALLAS TX 75235 8313
ZACHRY, TYLER, WOOD
4/18/2022
650-2530-000 469-697-4300
SIGNATURE
Time Zone:
Eastern Central Mountain Pacific
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value
NON-NEGOTIABLE
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)
For Paperwork Reduction Act Notice, see the seperate Instructions.
ZACHRY TYLER WOOD
Fed 941 Corporate3935566986.66
Fed 941 West Subsidiary3935517115.41
Fed 941 South Subsidiary3935523906.09
Fed 941 East Subsidiary3935511247.64
Fed 941 Corp - Penalty3935527198.5
Fed 940 Annual Unemp - Corp3935517028.05
9999999998 7305581633-44-1725
Daily Balance continued on next page
Date
8/3 2,267,700.00 ACH Web Usataxpymt IRS 240461564036618 0.00022214903782823
8/8 Corporate ACH Acctverify Roll By ADP 00022217906234115
8/10 ACH Web Businessform Deluxeforbusiness 5072270 00022222905832355
8/11 Corporate Ach Veryifyqbw Intuit 00022222909296656
8/12 Corporate Ach Veryifyqbw Intuit 00022223912710109

Service Charges and Fees Reference
Date posted number
8/1 10 Service Charge Period Ending 07/29.2022
8/4 36 Returned Item Fee (nsf) (00022214903782823)
8/11 36 Returned Item Fee (nsf) (00022222905832355)
INCOME STATEMENT
NASDAQ:GOOG TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020
Gross Profit ]1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000
Total Revenue as Reported, Supplemental 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000
2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000

ALPHABET INCOME Advice number:
1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 2.21169E+13
5/25/22How to Guide
Easy Order Specials
Free Preview Bill Sale Automobile
page 0 Bill of Sale of Automobile and Odometer Statement preview
page 1 Bill of Sale of Automobile and Odometer Statement preview
page 2 Bill of Sale of Automobile and Odometer Statement preview

@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue or pull request
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
'"((c)(r))":"((c))((r)))":,
@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue or pull request
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

:Build ::
    ::ntro:: 'Pull requests let you tell others about changes you''ve pushed to a branch in a repository on {% data variables.product.product_name %}. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

## About pull requests

{% note %}

**Note:** When working with pull requests, keep the following in mind:
* If you're working in the [shared repository model](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models), we recommend that you use a topic branch for your pull request. While you can send pull requests from any branch or commit, with a topic branch you can push follow-up commits if you need to update your proposed changes.
* Be very careful when force pushing commits to a pull request. Force pushing changes the repository history and can corrupt your pull request. If other collaborators branch the project before a force push, the force push may overwrite commits that collaborators based their work on.

{% endnote %}

You can create pull requests on {% data variables.product.prodname_dotcom_the_website %}, with {% data variables.product.prodname_desktop %}, in {% data variables.product.prodname_github_codespaces %}, on {% data variables.product.prodname_mobile %}, and when using GitHub CLI.

After initializing a pull request, you'll see a review page that shows a high-level overview of the changes between your branch (the compare branch) and the repository's base branch. You can add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and assignees, and @mention individual contributors or teams. For more information, see "[Creating a pull request](/articles/creating-a-pull-request)."

Once you've created a pull request, you can push commits from your topic branch to add them to your existing pull request. These commits will appear in chronological order within your pull request and the changes will be visible in the "Files changed" tab.

Other contributors can review your proposed changes, add review comments, contribute to the pull request discussion, and even add commits to the pull request. {% ifversion pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

{% ifversion fpt or ghec %}
You can see information about the branch's current deployment status and past deployment activity on the "Conversation" tab. For more information, see "[Viewing deployment activity for a repository](/repositories/viewing-activity-and-data-for-your-repository/viewing-deployment-activity-for-your-repository)."
{% endif %}

After you're happy with the proposed changes, you can merge the pull request. If you're working in a shared repository model, you create a pull request and you, or someone else, will merge your changes from your feature branch into the base branch you specify in your pull request. For more information, see "[Merging a pull request](/articles/merging-a-pull-request)."

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.pull_requests.close-issues-using-keywords %}

{% tip %}

**Tips:**
- To toggle between collapsing and expanding all outdated review comments in a pull request, hold down <span class="platform-mac"><kbd>Option</kbd></span><span class="platform-linux"><kbd>Alt</kbd></span><span class="platform-windows"><kbd>Alt</kbd></span> and click **Show outdated** or **Hide outdated**. For more shortcuts, see "[Keyboard shortcuts](/articles/keyboard-shortcuts)."
- You can squash commits when merging a pull request to gain a more streamlined view of changes. For more information, see "[About pull request merges](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

{% endtip %}

You can visit your dashboard to quickly find links to recently updated pull requests you're working on or subscribed to. For more information, see "[About your personal dashboard](/articles/about-your-personal-dashboard)."

## Draft pull requests

{% data reusables.gated-features.draft-prs %}

When you create a pull request, you can choose to create a pull request that is ready for review or a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review draft pull requests. For more information about creating a draft pull request, see "[Creating a pull request](/articles/creating-a-pull-request)" and "[Creating a pull request from a fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)."

{% data reusables.pull_requests.mark-ready-review %} You can convert a pull request to a draft at any time. For more information, see "[Changing the stage of a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)."

## Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

- Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref.
- Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. Consequently, the merge base used for the comparison might be different.

## Further reading

- "[Pull request](/articles/github-glossary/#pull-request)" in the {% data variables.product.prodname_dotcom %} glossary
- "[About branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Commenting on a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)"
- "[Closing a pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)"
