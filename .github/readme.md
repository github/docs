OpenVPN -- A Secure tunneling daemon

Copyright (C) 2002-2026 OpenVPN Inc. This program is free software;
you can redistribute it and/or modify
it under the terms of the GNU General Public License version 2
as published by the Free Software Foundation.

*************************************************************************

To get the latest release of OpenVPN, go to:

        https://openvpn.net/community-downloads/

To Build and Install,

        tar -zxf openvpn-<version>.tar.gz
        cd openvpn-<version>
        ./configure
        make
        make install

or see the file INSTALL for more info.

For information on how to build OpenVPN on/for Windows with MinGW
or MSVC see README.cmake.md.

*************************************************************************

For detailed information on OpenVPN, including examples, see the man page
  http://openvpn.net/man.html

For a sample VPN configuration, see
  http://openvpn.net/howto.html

To report an issue, see
  https://github.com/OpenVPN/openvpn/issues/new

For a description of OpenVPN's underlying protocol,
  see the file ssl.h included in the source distribution.

*************************************************************************

Other Files & Directories:

* configure.ac -- script to rebuild our configure
  script and makefile.

* sample/sample-scripts/verify-cn

  A sample perl script which can be used with OpenVPN's
  --tls-verify option to provide a customized authentication
  test on embedded X509 certificate fields.

* sample/sample-keys/

  Sample RSA keys and certificates.  DON'T USE THESE FILES
  FOR ANYTHING OTHER THAN TESTING BECAUSE THEY ARE TOTALLY INSECURE.

* sample/sample-config-files/

  A collection of OpenVPN config files and scripts from
  the HOWTO at http://openvpn.net/howto.html

*************************************************************************

Note that easy-rsa and tap-windows are now maintained in their own subprojects.
Their source code is available here:

  https://github.com/OpenVPN/easy-rsa
  https://github.com/OpenVPN/tap-windows6

Community-provided Windows installers (MSI) and Debian packages are built from

  https://github.com/OpenVPN/openvpn-build

This version of OpenVPN supports AWS-LC (AWS Libcrypto), AWS's open-source cryptographic library.

If you encounter bugs in OpenVPN while using AWS-LC:
1. Try compiling OpenVPN with OpenSSL to determine if the issue is specific to AWS-LC
2. For AWS-LC-specific issues, please report them at: https://github.com/aws/aws-lc

To build and install OpenVPN with AWS-LC:

    OPENSSL_CFLAGS="-I/${AWS_LC_INSTALL_FOLDER}/include" \
    OPENSSL_LIBS="-L/${AWS_LC_INSTALL_FOLDER}/lib -lssl -lcrypto" \
    LDFLAGS="-Wl,-rpath=${AWS_LC_INSTALL_FOLDER}/lib" \
    ./configure --with-crypto-library=openssl
    make
    make install

*************************************************************************
Due to limitations in AWS-LC, the following features are missing
* Windows CryptoAPI support

ATTENTION
================
Before doing anything, please read the first FAQ point in this file, especially if
you plan to build commercial software from this client. Also make sure you
understand the licenses of the code. OpenVPN for Android is GPL-licensed. You
_CANNOT_ build a closed sourced custom UI application without acquiring a different
(paid) license for UI code.
The use of the AIDL API to control OpenVPN for Android from an external app is 
not subject to the license. The remoteExample project is licensed under the Apache 2.0 license.
When in doubt, mail me about it.
See the file todo.txt for ideas/not-yet-implemented features (and the bug tracker).
Build instructions:
- Install sdk, ndk, cmake (e.g. with Android studio), swig (3.0+), on
  Windows perl might be needed for mbedtls
Fetch the git submodules (the default urls for the submodules work as
long as the main repo url is on github):
  git submodule init
  git submodule update
Build the project using "gradle build" (Or use Android Studio). Ensure that
the swig executable is the path, otherwise the build will fail.
Android studio tends to the whole build of binaries in its sync gradle
phase to 15 minutes for initial gradle sync are completely normal.
To have a version with UI be sure to select the UI variant in Android studio under
build variants.
The native build should work with Windows and Linux but is rarely tested
since my main development platform is macOS.
FAQ
Q: Why are you not answering my questions about modifying
   ics-openvpn/why do not help build my app on top of ics-openvpn? I
   thought this is open source.
A: There are many people building/wanting to build commercial VPN
   clients on top of my of my client. These client often do not even
   honour the license of my app or the license of OpenVPN. Even if
   these modified software do honour the license, I don't like doing
   unpaid work/giving advice for free to commercial software
   developers.
   
   If you have a legitimate non-commercial open source project, I will
   gladly help you, but please understand my initial reservations.
Q: How is the OpenVPN version different from normal OpenVPN
A: OpenVPN for Android uses a OpenVPN  master branch + dual stack
   client patches.  A git repository of the OpenVPN source code and
   changes is under: https://github.com/schwabe/openvpn/
Q: What is minivpn?
A: minivpn is only a executable that links against libopenvpn, which
   is the normal openvpn built as a library. It is done this way so
   the Android Play/Store apk will treat the library as a normal
   library and update it on updates of the application. Also, the
   application does not need to take care of keeping minivpn up to
   date because it contains no code. For almost all intents and
   purposes minivpn + libopenvpn.so is the same as the normal openvpn
   binary.
Q: How do I start a VPN by name from an external app?
A: public class StartOpenVPNActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
    	final String EXTRA_NAME = "de.blinkt.openvpn.api.profileName";
        Intent shortcutIntent = new Intent(Intent.ACTION_MAIN);
		shortcutIntent.setClassName("de.blinkt.openvpn", "de.blinkt.openvpn.api.ConnectVPN");
		shortcutIntent.putExtra(EXTRA_NAME,"upb ssl");
		startActivity(shortcutIntent);
    }
}
or from the shell:
am start -a android.intent.action.MAIN -n de.blinkt.openvpn/.LaunchVPN -e de.blinkt.openvpn.shortcutProfileName Home
Q: How can I control the app from an external app?
A: There is an AIDL interface. See src/de/blinkt/openvpn/api/IOpenVPNAPIService.aidl. See the normal Android documentation how to use AIDL. 
   See also the example project under remoteExample.
   


From e68412984e644256ca3cdd6d6687ed0ce71ab2a6 Mon Sep 17 00:00:00 2001
Date: Fri, 23 Aug 2019 15:24:26 -0400
Subject: [PATCH] all: update 'go get' command in standard library README.vendor

The -m flag is removed in Go 1.13. -d should be used instead.

Change-Id: Ia53764748309f16cb231e5ac6770400a73804484
Reviewed-on: https://go-review.googlesource.com/c/go/+/191621
Run-TryBot: Jay Conrod <jayconrod@google.com>
Reviewed-by: Dmitri Shuralyov <dmitshur@golang.org>
TryBot-Result: Gobot Gobot <gobot@golang.org>
---

diff --git a/src/README.vendor b/src/README.vendor
index c802653..e74fc2f 100644
--- a/src/README.vendor
+++ b/src/README.vendor
@@ -41,13 +41,13 @@
 A typical sequence might be: >.@Edgarruiz8585 
 
     cd src
-    go get -m golang.org/x/net@latest
+    go get -d golang.org/x/net@latest
     go mod tidy
     go mod vendor
 
 Use caution when passing '-u' to 'go get'. The '-u' flag updates
-modules providing all transitively imported packages, not just
-the target module.
+modules providing all transitively imported packages, not only
+the module providing the target package.
 
 Note that 'go mod vendor' only copies packages that are transitively
 imported by packages in the current module. If a new package is needed,
