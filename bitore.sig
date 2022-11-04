diff --git a/.github/workflows/deno.yml b/.github/workflows/deno.yml
 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut																																		
 -        "puppeteer": "^9.1.1",
+        "puppeteer": "^19.1.1",
         "website-scraper": "^5.0.0"
       }
     },
@@ -4468,6 +4469,12 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/@types/parse-json": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
+      "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
+      "optional": true
+    },
     "node_modules/@types/parse5": {
       "version": "6.0.1",
       "license": "MIT"
@@ -6624,7 +6631,7 @@
       "version": "3.1.0",
       "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
       "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
-      "dev": true,
+      "devOptional": true,
       "engines": {
         "node": ">=6"
       }
@@ -7301,6 +7308,31 @@
         "node": ">= 0.10"
       }
     },
+    "node_modules/cosmiconfig": {
+      "version": "7.0.1",
+      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
+      "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
+      "optional": true,
+      "dependencies": {
+        "@types/parse-json": "^4.0.0",
+        "import-fresh": "^3.2.1",
+        "parse-json": "^5.0.0",
+        "path-type": "^4.0.0",
+        "yaml": "^1.10.0"
+      },
+      "engines": {
+        "node": ">=10"
+      }
+    },
+    "node_modules/cosmiconfig/node_modules/yaml": {
+      "version": "1.10.2",
+      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
+      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
+      "optional": true,
+      "engines": {
+        "node": ">= 6"
+      }
+    },
     "node_modules/cross-env": {
       "version": "7.0.3",
       "dev": true,
@@ -7318,6 +7350,15 @@
         "yarn": ">=1"
       }
     },
+    "node_modules/cross-fetch": {
+      "version": "3.1.5",
+      "resolved": "https://registry.npmjs.org/cross-fetch/-/cross-fetch-3.1.5.tgz",
+      "integrity": "sha512-lvb1SBsI0Z7GDwmuid+mU3kWVBwTVUbe7S0H52yaaAdQOXq2YktTCZdlAcNKFzE6QtRz0snpw9bNiPeOIkkQvw==",
+      "optional": true,
+      "dependencies": {
+        "node-fetch": "2.6.7"
+      }
+    },
     "node_modules/cross-spawn": {
       "version": "7.0.3",
       "dev": true,
@@ -7605,9 +7646,9 @@
       }
     },
     "node_modules/devtools-protocol": {
-      "version": "0.0.869402",
-      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.869402.tgz",
-      "integrity": "sha512-VvlVYY+VDJe639yHs5PHISzdWTLL3Aw8rO4cvUtwvoxFd6FHbE4OpHHcde52M6096uYYazAmd4l0o5VuFRO2WA==",
+      "version": "0.0.1045489",
+      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1045489.tgz",
+      "integrity": "sha512-D+PTmWulkuQW4D1NTiCRCFxF7pQPn0hgp4YyX4wAQ6xYXKOadSWPR3ENGDQ47MW/Ewc9v2rpC/UEEGahgBYpSQ==",
       "optional": true
     },
     "node_modules/diff": {
@@ -7843,7 +7884,7 @@
     },
     "node_modules/error-ex": {
       "version": "1.3.2",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "is-arrayish": "^0.2.1"
@@ -10495,9 +10536,10 @@
       }
     },
     "node_modules/https-proxy-agent": {
-      "version": "5.0.0",
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
+      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
       "devOptional": true,
-      "license": "MIT",
       "dependencies": {
         "agent-base": "6",
         "debug": "4"
@@ -10597,7 +10639,7 @@
       "version": "3.3.0",
       "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
       "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
-      "dev": true,
+      "devOptional": true,
       "dependencies": {
         "parent-module": "^1.0.0",
         "resolve-from": "^4.0.0"
@@ -10740,7 +10782,7 @@
     },
     "node_modules/is-arrayish": {
       "version": "0.2.1",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/is-bigint": {
@@ -13596,7 +13638,7 @@
     },
     "node_modules/json-parse-even-better-errors": {
       "version": "2.3.1",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/json-schema-traverse": {
@@ -13758,7 +13800,7 @@
     },
     "node_modules/lines-and-columns": {
       "version": "1.2.4",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/linkinator": {
@@ -15953,7 +15995,7 @@
     },
     "node_modules/p-try": {
       "version": "2.2.0",
-      "devOptional": true,
+      "dev": true,
       "license": "MIT",
       "engines": {
         "node": ">=6"
@@ -15990,7 +16032,7 @@
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
       "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
-      "dev": true,
+      "devOptional": true,
       "dependencies": {
         "callsites": "^3.0.0"
       },
@@ -16016,7 +16058,7 @@
     },
     "node_modules/parse-json": {
       "version": "5.2.0",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@babel/code-frame": "^7.0.0",
@@ -16135,7 +16177,7 @@
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
       "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
-      "dev": true,
+      "devOptional": true,
       "engines": {
         "node": ">=8"
       }
@@ -16195,7 +16237,7 @@
     },
     "node_modules/pkg-dir": {
       "version": "4.2.0",
-      "devOptional": true,
+      "dev": true,
       "license": "MIT",
       "dependencies": {
         "find-up": "^4.0.0"
@@ -16206,7 +16248,7 @@
     },
     "node_modules/pkg-dir/node_modules/find-up": {
       "version": "4.1.0",
-      "devOptional": true,
+      "dev": true,
       "license": "MIT",
       "dependencies": {
         "locate-path": "^5.0.0",
@@ -16218,7 +16260,7 @@
     },
     "node_modules/pkg-dir/node_modules/locate-path": {
       "version": "5.0.0",
-      "devOptional": true,
+      "dev": true,
       "license": "MIT",
       "dependencies": {
         "p-locate": "^4.1.0"
@@ -16229,7 +16271,7 @@
     },
     "node_modules/pkg-dir/node_modules/p-limit": {
       "version": "2.3.0",
-      "devOptional": true,
+      "dev": true,
       "license": "MIT",
       "dependencies": {
         "p-try": "^2.0.0"
@@ -16243,7 +16285,7 @@
     },
     "node_modules/pkg-dir/node_modules/p-locate": {
       "version": "4.1.0",
-      "devOptional": true,
+      "dev": true,
       "license": "MIT",
       "dependencies": {
         "p-limit": "^2.2.0"
@@ -16254,7 +16296,7 @@
     },
     "node_modules/pkg-dir/node_modules/path-exists": {
       "version": "4.0.0",
-      "devOptional": true,
+      "dev": true,
       "license": "MIT",
       "engines": {
         "node": ">=8"
@@ -16491,28 +16533,58 @@
       }
     },
     "node_modules/puppeteer": {
-      "version": "9.1.1",
-      "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-9.1.1.tgz",
-      "integrity": "sha512-W+nOulP2tYd/ZG99WuZC/I5ljjQQ7EUw/jQGcIb9eu8mDlZxNY2SgcJXTLG9h5gRvqA3uJOe4hZXYsd3EqioMw==",
-      "deprecated": "Version no longer supported. Upgrade to @latest",
+      "version": "19.1.1",
+      "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-19.1.1.tgz",
+      "integrity": "sha512-nyIytOp1mYagiVeKkWODuMAGJoeQkcGNy7utkm2BN2d2r90n1ezO1tM4ld2V3vpP4u2kGk20obqv/Lj0Icd3KA==",
       "hasInstallScript": true,
       "optional": true,
       "dependencies": {
-        "debug": "^4.1.0",
-        "devtools-protocol": "0.0.869402",
-        "extract-zip": "^2.0.0",
-        "https-proxy-agent": "^5.0.0",
-        "node-fetch": "^2.6.1",
-        "pkg-dir": "^4.2.0",
-        "progress": "^2.0.1",
-        "proxy-from-env": "^1.1.0",
-        "rimraf": "^3.0.2",
-        "tar-fs": "^2.0.0",
-        "unbzip2-stream": "^1.3.3",
-        "ws": "^7.2.3"
+        "cosmiconfig": "7.0.1",
+        "https-proxy-agent": "5.0.1",
+        "progress": "2.0.3",
+        "proxy-from-env": "1.1.0",
+        "puppeteer-core": "19.1.1"
+      },
+      "engines": {
+        "node": ">=14.1.0"
+      }
+    },
+    "node_modules/puppeteer-core": {
+      "version": "19.1.1",
+      "resolved": "https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-19.1.1.tgz",
+      "integrity": "sha512-jV26Ke0VFel4MoXLjqm50uAW2uwksTP6Md1tvtXqWqXM5FyboKI6E9YYJ1qEQilUAqlhgGq8xLN5+SL8bPz/kw==",
+      "optional": true,
+      "dependencies": {
+        "cross-fetch": "3.1.5",
+        "debug": "4.3.4",
+        "devtools-protocol": "0.0.1045489",
+        "extract-zip": "2.0.1",
+        "https-proxy-agent": "5.0.1",
+        "proxy-from-env": "1.1.0",
+        "rimraf": "3.0.2",
+        "tar-fs": "2.1.1",
+        "unbzip2-stream": "1.4.3",
+        "ws": "8.9.0"
       },
       "engines": {
-        "node": ">=10.18.1"
+        "node": ">=14.1.0"
+      }
+    },
+    "node_modules/puppeteer-core/node_modules/debug": {
+      "version": "4.3.4",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
+      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
+      "optional": true,
+      "dependencies": {
+        "ms": "2.1.2"
+      },
+      "engines": {
+        "node": ">=6.0"
+      },
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
       }
     },
     "node_modules/qs": {
@@ -17853,7 +17925,7 @@
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
       "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
-      "dev": true,
+      "devOptional": true,
       "engines": {
         "node": ">=4"
       }
@@ -20579,12 +20651,12 @@
       }
     },
     "node_modules/ws": {
-      "version": "7.5.9",
-      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.9.tgz",
-      "integrity": "sha512-F+P9Jil7UiSKSkppIiD94dN07AwvFixvLIj1Og1Rl9GGMuNipJnV9JzjD6XuqmAeiswGvUmNLjr5cFuXwNS77Q==",
+      "version": "8.9.0",
+      "resolved": "https://registry.npmjs.org/ws/-/ws-8.9.0.tgz",
+      "integrity": "sha512-Ja7nszREasGaYUYCI2k4lCKIRTt+y7XuqVoHR44YpI49TtryyqbqvDMn5eqfW7e6HzTukDRIsXqzVHScqRcafg==",
       "optional": true,
       "engines": {
-        "node": ">=8.3.0"
+        "node": ">=10.0.0"
       },
       "peerDependencies": {
         "bufferutil": "^4.0.1",
@@ -23861,6 +23933,12 @@
       "version": "2.4.1",
       "dev": true
     },
+    "@types/parse-json": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
+      "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
+      "optional": true
+    },
     "@types/parse5": {
       "version": "6.0.1"
     },
@@ -25495,7 +25573,7 @@
       "version": "3.1.0",
       "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
       "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
-      "dev": true
+      "devOptional": true
     },
     "camel-case": {
       "version": "4.1.2",
@@ -25940,6 +26018,27 @@
         "vary": "^1"
       }
     },
+    "cosmiconfig": {
+      "version": "7.0.1",
+      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
+      "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
+      "optional": true,
+      "requires": {
+        "@types/parse-json": "^4.0.0",
+        "import-fresh": "^3.2.1",
+        "parse-json": "^5.0.0",
+        "path-type": "^4.0.0",
+        "yaml": "^1.10.0"
+      },
+      "dependencies": {
+        "yaml": {
+          "version": "1.10.2",
+          "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
+          "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
+          "optional": true
+        }
+      }
+    },
     "cross-env": {
       "version": "7.0.3",
       "dev": true,
@@ -25947,6 +26046,15 @@
         "cross-spawn": "^7.0.1"
       }
     },
+    "cross-fetch": {
+      "version": "3.1.5",
+      "resolved": "https://registry.npmjs.org/cross-fetch/-/cross-fetch-3.1.5.tgz",
+      "integrity": "sha512-lvb1SBsI0Z7GDwmuid+mU3kWVBwTVUbe7S0H52yaaAdQOXq2YktTCZdlAcNKFzE6QtRz0snpw9bNiPeOIkkQvw==",
+      "optional": true,
+      "requires": {
+        "node-fetch": "2.6.7"
+      }
+    },
     "cross-spawn": {
       "version": "7.0.3",
       "dev": true,
@@ -26127,9 +26235,9 @@
       "dev": true
     },
     "devtools-protocol": {
-      "version": "0.0.869402",
-      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.869402.tgz",
-      "integrity": "sha512-VvlVYY+VDJe639yHs5PHISzdWTLL3Aw8rO4cvUtwvoxFd6FHbE4OpHHcde52M6096uYYazAmd4l0o5VuFRO2WA==",
+      "version": "0.0.1045489",
+      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1045489.tgz",
+      "integrity": "sha512-D+PTmWulkuQW4D1NTiCRCFxF7pQPn0hgp4YyX4wAQ6xYXKOadSWPR3ENGDQ47MW/Ewc9v2rpC/UEEGahgBYpSQ==",
       "optional": true
     },
     "diff": {
@@ -26287,7 +26395,7 @@
     },
     "error-ex": {
       "version": "1.3.2",
-      "dev": true,
+      "devOptional": true,
       "requires": {
         "is-arrayish": "^0.2.1"
       }
@@ -28105,7 +28213,9 @@
       }
     },
     "https-proxy-agent": {
-      "version": "5.0.0",
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
+      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
       "devOptional": true,
       "requires": {
         "agent-base": "6",
@@ -28161,7 +28271,7 @@
       "version": "3.3.0",
       "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
       "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
-      "dev": true,
+      "devOptional": true,
       "requires": {
         "parent-module": "^1.0.0",
         "resolve-from": "^4.0.0"
@@ -28248,7 +28358,7 @@
     },
     "is-arrayish": {
       "version": "0.2.1",
-      "dev": true
+      "devOptional": true
     },
     "is-bigint": {
       "version": "1.0.4",
@@ -30411,7 +30521,7 @@
     },
     "json-parse-even-better-errors": {
       "version": "2.3.1",
-      "dev": true
+      "devOptional": true
     },
     "json-schema-traverse": {
       "version": "1.0.0"
@@ -30518,7 +30628,7 @@
     },
     "lines-and-columns": {
       "version": "1.2.4",
-      "dev": true
+      "devOptional": true
     },
     "linkinator": {
       "version": "4.0.2",
@@ -31858,7 +31968,7 @@
     },
     "p-try": {
       "version": "2.2.0",
-      "devOptional": true
+      "dev": true
     },
     "package-json": {
       "version": "8.1.0",
@@ -31884,7 +31994,7 @@
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
       "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
-      "dev": true,
+      "devOptional": true,
       "requires": {
         "callsites": "^3.0.0"
       }
@@ -31902,7 +32012,7 @@
     },
     "parse-json": {
       "version": "5.2.0",
-      "dev": true,
+      "devOptional": true,
       "requires": {
         "@babel/code-frame": "^7.0.0",
         "error-ex": "^1.3.1",
@@ -31980,7 +32090,7 @@
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
       "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
-      "dev": true
+      "devOptional": true
     },
     "pause-stream": {
       "version": "0.0.11",
@@ -32017,14 +32127,14 @@
     },
     "pkg-dir": {
       "version": "4.2.0",
-      "devOptional": true,
+      "dev": true,
       "requires": {
         "find-up": "^4.0.0"
       },
       "dependencies": {
         "find-up": {
           "version": "4.1.0",
-          "devOptional": true,
+          "dev": true,
           "requires": {
             "locate-path": "^5.0.0",
             "path-exists": "^4.0.0"
@@ -32032,28 +32142,28 @@
         },
         "locate-path": {
           "version": "5.0.0",
-          "devOptional": true,
+          "dev": true,
           "requires": {
             "p-locate": "^4.1.0"
           }
         },
         "p-limit": {
           "version": "2.3.0",
-          "devOptional": true,
+          "dev": true,
           "requires": {
             "p-try": "^2.0.0"
           }
         },
         "p-locate": {
           "version": "4.1.0",
-          "devOptional": true,
+          "dev": true,
           "requires": {
             "p-limit": "^2.2.0"
           }
         },
         "path-exists": {
           "version": "4.0.0",
-          "devOptional": true
+          "dev": true
         }
       }
     },
@@ -32201,23 +32311,45 @@
       }
     },
     "puppeteer": {
-      "version": "9.1.1",
-      "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-9.1.1.tgz",
-      "integrity": "sha512-W+nOulP2tYd/ZG99WuZC/I5ljjQQ7EUw/jQGcIb9eu8mDlZxNY2SgcJXTLG9h5gRvqA3uJOe4hZXYsd3EqioMw==",
+      "version": "19.1.1",
+      "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-19.1.1.tgz",
+      "integrity": "sha512-nyIytOp1mYagiVeKkWODuMAGJoeQkcGNy7utkm2BN2d2r90n1ezO1tM4ld2V3vpP4u2kGk20obqv/Lj0Icd3KA==",
       "optional": true,
       "requires": {
-        "debug": "^4.1.0",
-        "devtools-protocol": "0.0.869402",
-        "extract-zip": "^2.0.0",
-        "https-proxy-agent": "^5.0.0",
-        "node-fetch": "^2.6.1",
-        "pkg-dir": "^4.2.0",
-        "progress": "^2.0.1",
-        "proxy-from-env": "^1.1.0",
-        "rimraf": "^3.0.2",
-        "tar-fs": "^2.0.0",
-        "unbzip2-stream": "^1.3.3",
-        "ws": "^7.2.3"
+        "cosmiconfig": "7.0.1",
+        "https-proxy-agent": "5.0.1",
+        "progress": "2.0.3",
+        "proxy-from-env": "1.1.0",
+        "puppeteer-core": "19.1.1"
+      }
+    },
+    "puppeteer-core": {
+      "version": "19.1.1",
+      "resolved": "https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-19.1.1.tgz",
+      "integrity": "sha512-jV26Ke0VFel4MoXLjqm50uAW2uwksTP6Md1tvtXqWqXM5FyboKI6E9YYJ1qEQilUAqlhgGq8xLN5+SL8bPz/kw==",
+      "optional": true,
+      "requires": {
+        "cross-fetch": "3.1.5",
+        "debug": "4.3.4",
+        "devtools-protocol": "0.0.1045489",
+        "extract-zip": "2.0.1",
+        "https-proxy-agent": "5.0.1",
+        "proxy-from-env": "1.1.0",
+        "rimraf": "3.0.2",
+        "tar-fs": "2.1.1",
+        "unbzip2-stream": "1.4.3",
+        "ws": "8.9.0"
+      },
+      "dependencies": {
+        "debug": {
+          "version": "4.3.4",
+          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
+          "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
+          "optional": true,
+          "requires": {
+            "ms": "2.1.2"
+          }
+        }
       }
     },
     "qs": {
@@ -33099,7 +33231,7 @@
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
       "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
-      "dev": true
+      "devOptional": true
     },
     "resolve.exports": {
       "version": "1.1.0",
@@ -34979,9 +35111,9 @@
       }
     },
     "ws": {
-      "version": "7.5.9",
-      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.9.tgz",
-      "integrity": "sha512-F+P9Jil7UiSKSkppIiD94dN07AwvFixvLIj1Og1Rl9GGMuNipJnV9JzjD6XuqmAeiswGvUmNLjr5cFuXwNS77Q==",
+      "version": "8.9.0",
+      "resolved": "https://registry.npmjs.org/ws/-/ws-8.9.0.tgz",
+      "integrity": "sha512-Ja7nszREasGaYUYCI2k4lCKIRTt+y7XuqVoHR44YpI49TtryyqbqvDMn5eqfW7e6HzTukDRIsXqzVHScqRcafg==",
       "optional": true,
       "requires": {}
     },
diff --git a/package.json b/package.json
index e56a643468c5..d4ffb8ad7e60 100644
--- a/package.json
+++ b/package.json
@@ -174,7 +174,7 @@
     "esm": "^3.2.25",
     "image-size": "^1.0.1",
     "jest-puppeteer": "^5.0.4",
-    "puppeteer": "^9.1.1",
+    "puppeteer": "^19.1.1",
     "website-scraper": "^5.0.0"
   },
   "private": true,
