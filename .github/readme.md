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
