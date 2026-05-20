diff --git a/.github/workflows/screenreader_tests.yml b/.github/workflows/screenreader_tests.yml
new file mode 100644
index 0000000000000..d1196a1fc082d
--- /dev/null
+++ b/.github/workflows/screenreader_tests.yml
@@ -0,0 +1,97 @@
+name: Screen reader tests
+on:@Edgarruiz8585
+  push:
+    paths:
+      - 'gulpfile.mjs'
+      - 'src/**'
+      - 'test/test.mjs'
+      - 'test/integration/test_utils.mjs'
+      - 'test/screenreader/**'
+      - 'web/**'
+      - '.github/workflows/screenreader_tests.yml'
+    branches:
+      - master
+  pull_request:
+    paths:
+      - 'gulpfile.mjs'
+      - 'src/**'
+      - 'test/test.mjs'
+      - 'test/integration/test_utils.mjs'
+      - 'test/screenreader/**'
+      - 'web/**'
+      - '.github/workflows/screenreader_tests.yml'
+    branches:
+      - master
+  workflow_dispatch:
+permissions:
+  contents: read
+
+jobs:
+  test:
+    name: ${{ matrix.os }} / ${{ matrix.browser }}
+
+    # Real screen-reader automation only works on Windows (NVDA) and macOS
+    # (VoiceOver), so Linux is intentionally absent from the matrix.
+    strategy:
+      fail-fast: false
+      matrix:
+        node-version: [lts/*]
+        os: [windows-latest, macos-latest]
+        browser: [firefox, chrome]
+        include:
+          - browser: firefox
+            skip: --noChrome
+          - browser: chrome
+            skip: --noFirefox
+
+    runs-on: ${{ matrix.os }}
+
+    steps:
+      - name: Checkout repository
+        uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd # v6.0.2
+        with:
+          fetch-depth: 0
+          persist-credentials: false
+
+      - name: Use Node.js ${{ matrix.node-version }}
+        uses: actions/setup-node@48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e # v6.4.0
+        with:
+          node-version: ${{ matrix.node-version }}
+          cache: 'npm'
+
+      - name: Install dependencies
+        run: npm ci
+
+      # Installs the portable NVDA build (Windows) or grants the
+      # accessibility / Apple Events permissions VoiceOver needs (macOS)
+      # so guidepup can drive the screen reader. Inlined as an `npx` call
+      # rather than `guidepup/setup-action` because Mozilla's repo-level
+      # actions allowlist does not include the action.
+      - name: Set up screen reader
+        run: npx @guidepup/setup
+
+      - name: Restore cached PDF files
+        uses: actions/cache/restore@27d5ce7f107fe9357f9df03efb73ab90386fccae # v5.0.5
+        with:
+          path: test/pdfs/*.pdf
+          key: cached-pdf-files-${{ hashFiles('test/pdfs/*.pdf') }}
+          restore-keys: |
+            cached-pdf-files-
+          enableCrossOsArchive: true
+
+      # Screen-reader automation cannot run headless, so a real display
+      # resolution is configured for the headful browser windows. macOS
+      # runners already provide one.
+      - name: Update resolution (Windows)
+        if: ${{ matrix.os == 'windows-latest' }}
+        run: Set-DisplayResolution -Width 1920 -Height 1080 -Force
+
+      - name: Run screen reader tests
+        run: npx gulp screenreadertest ${{ matrix.skip }}
+
+      - name: Save cached PDF files
+        uses: actions/cache/save@27d5ce7f107fe9357f9df03efb73ab90386fccae # v5.0.5
+        with:
+          path: test/pdfs/*.pdf
+          key: cached-pdf-files-${{ hashFiles('test/pdfs/*.pdf') }}
+          enableCrossOsArchive: true
diff --git a/gulpfile.mjs b/gulpfile.mjs
index 40c8247df5c41..40b2b95cfa417 100644
--- a/gulpfile.mjs
+++ b/gulpfile.mjs
@@ -752,6 +752,9 @@ function runTests(testsName, { bot = false } = {}) {
       case "integration":
         args.push("--integration");
         break;
+      case "screenreader":
+        args.push("--screenReader");
+        break;
       default:
         reject(new Error(`Unknown tests name '${testsName}'`));
         return;
@@ -2028,6 +2031,13 @@ gulp.task(
   })
 );
 
+gulp.task(
+  "screenreadertest",
+  gulp.series(setTestEnv, "generic", async function runScreenReaderTest() {
+    await runTests("screenreader");
+  })
+);
+
 gulp.task(
   "fonttest",
   gulp.series(setTestEnv, async function runFontTest() {
diff --git a/package-lock.json b/package-lock.json
index 79e6278ce00e4..3728c41496556 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -14,6 +14,8 @@
         "@eslint/json": "^1.2.0",
         "@fluent/bundle": "^0.19.1",
         "@fluent/dom": "^0.10.2",
+        "@guidepup/guidepup": "^0.24.1",
+        "@guidepup/setup": "^0.21.0",
         "@metalsmith/layouts": "^3.0.0",
         "@metalsmith/markdown": "^1.10.0",
         "@napi-rs/canvas": "^0.1.100",
@@ -105,6 +107,7 @@
       "integrity": "sha512-CGOfOJqWjg2qW/Mb6zNsDm+u5vFQ8DxXfbM09z69p5Z6+mE1ikP2jUXw+j42Pf1XTYED2Rni5f95npYeuwMDQA==",
       "dev": true,
       "license": "MIT",
+      "peer": true,
       "dependencies": {
         "@babel/code-frame": "^7.29.0",
         "@babel/generator": "^7.29.0",
@@ -1634,6 +1637,7 @@
       "integrity": "sha512-CYDD3SOtsHtyXeEORYRx2qBtpDJFjRTGXUtmNEMGyzYOKj1TE3tycdlho7kA1Ufx9OYWZzg52QFBGALTirzDSw==",
       "dev": true,
       "license": "MIT",
+      "peer": true,
       "dependencies": {
         "@keyv/serialize": "^1.1.1"
       }
@@ -1699,6 +1703,7 @@
         }
       ],
       "license": "MIT",
+      "peer": true,
       "engines": {
         "node": ">=20.19.0"
       },
@@ -1747,6 +1752,7 @@
         }
       ],
       "license": "MIT",
+      "peer": true,
       "engines": {
         "node": ">=20.19.0"
       }
@@ -1899,6 +1905,22 @@
         "postcss": "^8.4"
       }
     },
+    "node_modules/@derhuerst/http-basic": {
+      "version": "8.2.4",
+      "resolved": "https://registry.npmjs.org/@derhuerst/http-basic/-/http-basic-8.2.4.tgz",
+      "integrity": "sha512-F9rL9k9Xjf5blCz8HsJRO4diy111cayL2vkY2XE4r4t3n0yPXVYy3KD3nJ1qbrSn9743UWSXH4IwuCa/HWlGFw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "caseless": "^0.12.0",
+        "concat-stream": "^2.0.0",
+        "http-response-object": "^3.0.1",
+        "parse-cache-control": "^1.0.1"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
     "node_modules/@dot/log": {
       "version": "0.2.1",
       "resolved": "https://registry.npmjs.org/@dot/log/-/log-0.2.1.tgz",
@@ -2132,6 +2154,123 @@
         "npm": ">=7.0.0"
       }
     },
+    "node_modules/@guidepup/guidepup": {
+      "version": "0.24.1",
+      "resolved": "https://registry.npmjs.org/@guidepup/guidepup/-/guidepup-0.24.1.tgz",
+      "integrity": "sha512-L33QKSzeceTOq/DaxAhEkM6fEbJmzkOF2K0U6AsN0zuzy1T4/2LVsLG9f9IPge70T6XgUF7fsCzYotVo4FNk/A==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "regedit": "5.1.2",
+        "semver": "^7.3.8",
+        "shelljs": "^0.8.5"
+      }
+    },
+    "node_modules/@guidepup/guidepup/node_modules/semver": {
+      "version": "7.7.4",
+      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
+      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
+      "dev": true,
+      "license": "ISC",
+      "bin": {
+        "semver": "bin/semver.js"
+      },
+      "engines": {
+        "node": ">=10"
+      }
+    },
+    "node_modules/@guidepup/record": {
+      "version": "0.1.0",
+      "resolved": "https://registry.npmjs.org/@guidepup/record/-/record-0.1.0.tgz",
+      "integrity": "sha512-jtSqZ0CZVdWzWIbLWHYoUi1IbNJVKns20oEYzwcTftw8rY5RXsK1OTXaXFx9Gup5mnmYaFLnON8WwTS+4DYwrQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "ffmpeg-static": "^5.2.0"
+      }
+    },
+    "node_modules/@guidepup/setup": {
+      "version": "0.21.0",
+      "resolved": "https://registry.npmjs.org/@guidepup/setup/-/setup-0.21.0.tgz",
+      "integrity": "sha512-wxl4zFtil9ciGwqJ8+6HNN4KDWh3vVpbLz65hI/BwNwRvLTXrU44iLfVP/A0XhucuEtMKjqhNQR3T9dHRRmnUw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@guidepup/record": "^0.1.0",
+        "chalk": "^4.0.0",
+        "decompress": "^4.2.1",
+        "https-proxy-agent": "^7.0.5",
+        "regedit": "5.0.1",
+        "semver": "^7.5.4"
+      },
+      "bin": {
+        "setup": "bin/setup"
+      }
+    },
+    "node_modules/@guidepup/setup/node_modules/isarray": {
+      "version": "0.0.1",
+      "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
+      "integrity": "sha512-D2S+3GLxWH+uhrNEcoh/fnmYeP8E8/zHl644d/jdA0g2uyXvy3sb0qxotE+ne0LtccHknQzWwZEzhak7oJ0COQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/@guidepup/setup/node_modules/readable-stream": {
+      "version": "1.0.34",
+      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.0.34.tgz",
+      "integrity": "sha512-ok1qVCJuRkNmvebYikljxJA/UEsKwLl2nI1OmaqAu4/UE+h0wKCHok4XkL/gvi39OacXvw59RJUOFUkDib2rHg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "core-util-is": "~1.0.0",
+        "inherits": "~2.0.1",
+        "isarray": "0.0.1",
+        "string_decoder": "~0.10.x"
+      }
+    },
+    "node_modules/@guidepup/setup/node_modules/regedit": {
+      "version": "5.0.1",
+      "resolved": "https://registry.npmjs.org/regedit/-/regedit-5.0.1.tgz",
+      "integrity": "sha512-DiFTHk51G5d8bTAYGRDbHNJJPzg8EOF+3pNPdYjDc6kXOgObfayrVnjwfTseyzeIh5sVa+nhHkkVpmopUnOAQQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "debug": "^4.1.0",
+        "if-async": "^3.7.4",
+        "stream-slicer": "0.0.6",
+        "through2": "^0.6.3"
+      }
+    },
+    "node_modules/@guidepup/setup/node_modules/semver": {
+      "version": "7.7.4",
+      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
+      "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
+      "dev": true,
+      "license": "ISC",
+      "bin": {
+        "semver": "bin/semver.js"
+      },
+      "engines": {
+        "node": ">=10"
+      }
+    },
+    "node_modules/@guidepup/setup/node_modules/string_decoder": {
+      "version": "0.10.31",
+      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
+      "integrity": "sha512-ev2QzSzWPYmy9GuqfIVildA4OdcGLeFZQrq5ys6RtiuF+RQQiZWr8TZNyAcuVXyQRYfEO+MsoB/1BuQVhOJuoQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/@guidepup/setup/node_modules/through2": {
+      "version": "0.6.5",
+      "resolved": "https://registry.npmjs.org/through2/-/through2-0.6.5.tgz",
+      "integrity": "sha512-RkK/CCESdTKQZHdmKICijdKKsCRVHs5KsLZ6pACAmF/1GPUQhonHSXWNERctxEp7RmvjdNbZTL5z9V7nSCXKcg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "readable-stream": ">=1.0.33-1 <1.1.0-0",
+        "xtend": ">=4.0.0 <4.1.0-0"
+      }
+    },
     "node_modules/@gulpjs/messages": {
       "version": "1.1.0",
       "resolved": "https://registry.npmjs.org/@gulpjs/messages/-/messages-1.1.0.tgz",
@@ -2555,9 +2694,6 @@
         "arm64"
       ],
       "dev": true,
-      "libc": [
-        "glibc"
-      ],
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2579,9 +2715,6 @@
         "arm64"
       ],
       "dev": true,
-      "libc": [
-        "musl"
-      ],
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2603,9 +2736,6 @@
         "riscv64"
       ],
       "dev": true,
-      "libc": [
-        "glibc"
-      ],
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2627,9 +2757,6 @@
         "x64"
       ],
       "dev": true,
-      "libc": [
-        "glibc"
-      ],
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2651,9 +2778,6 @@
         "x64"
       ],
       "dev": true,
-      "libc": [
-        "musl"
-      ],
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2883,6 +3007,7 @@
       "integrity": "sha512-FXx2pKgId/WyYo2jXw63kk7/+TY7u7AziEJxJAnSFzHlqTAS3Ync6SvgYAN/k4/PQpnnVuzoMuVnByKK2qp0ag==",
       "dev": true,
       "license": "MIT",
+      "peer": true,
       "dependencies": {
         "@types/estree": "*",
         "@types/json-schema": "*"
@@ -2940,6 +3065,7 @@
       "integrity": "sha512-promo4eFwuiW+TfGxhi+0x3czqTYJkG8qB17ZUJiVF10Xm7NLVRSLUsfRTU/6h1e24VvRnXCx+hG7li58lkzog==",
       "dev": true,
       "license": "MIT",
+      "peer": true,
       "dependencies": {
         "@types/linkify-it": "^5",
         "@types/mdurl": "^2"
@@ -3116,6 +3242,7 @@
       "integrity": "sha512-QZfjHNEzPY8+l0+fIXMvuQ2sJlplB4zgDZvA+NmvZsZv3EQwOcc1DuIU1VJUTWZ/RKouBMhDyNaBMx4sWvrzRA==",
       "dev": true,
       "license": "MIT",
+      "peer": true,
       "dependencies": {
         "@eslint-community/eslint-utils": "^4.9.1",
         "@typescript-eslint/scope-manager": "8.58.2",
@@ -3609,6 +3736,7 @@
       "integrity": "sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw==",
       "dev": true,
       "license": "MIT",
+      "peer": true,
       "bin": {
         "acorn": "bin/acorn"
       },
@@ -3975,6 +4103,22 @@
         "postcss": "^8.1.0"
       }
     },
+    "node_modules/available-typed-arrays": {
+      "version": "1.0.7",
+      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
+      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "possible-typed-array-names": "^1.0.0"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
     "node_modules/b4a": {
       "version": "1.8.0",
       "resolved": "https://registry.npmjs.org/b4a/-/b4a-1.8.0.tgz",
@@ -4116,6 +4260,7 @@
       "integrity": "sha512-riJjyv1/mHLIPX4RwiK+oW9/4c3TEUeORHKefKAKnZ5kyslbN+HXowtbaVEqt4IMUB7OXlfixcs6gsFeo/jhiQ==",
       "dev": true,
       "license": "Apache-2.0",
+      "peer": true,
       "peerDependencies": {
         "bare-abort-controller": "*"
       },
@@ -4364,6 +4509,7 @@
         }
       ],
       "license": "MIT",
+      "peer": true,
       "dependencies": {
         "baseline-browser-mapping": "^2.10.12",
         "caniuse-lite": "^1.0.30001782",
@@ -4403,6 +4549,24 @@
         "ieee754": "^1.2.1"
       }
     },
+    "node_modules/buffer-alloc": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz",
+      "integrity": "sha512-CFsHQgjtW1UChdXgbyJGtnm+O/uLQeZdtbDo8mfUgYXCHSM1wgrVxXm6bSyrUuErEb+4sYVGCzASBRot7zyrow==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "buffer-alloc-unsafe": "^1.1.0",
+        "buffer-fill": "^1.0.0"
+      }
+    },
+    "node_modules/buffer-alloc-unsafe": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz",
+      "integrity": "sha512-TEM2iMIEQdJ2yjPJoSIsldnleVaAk1oW3DBVUykyOLsEsFmEc9kn+SFFPz+gl54KQNxlDnAwCXosOS9Okx2xAg==",
+      "dev": true,
+      "license": "MIT"
+    },
     "node_modules/buffer-crc32": {
       "version": "0.2.13",
       "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
@@ -4413,6 +4577,13 @@
         "node": "*"
       }
     },
+    "node_modules/buffer-fill": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz",
+      "integrity": "sha512-T7zexNBwiiaCOGDg9xNX9PBmjrubblRkENuptryuI64URkXDFum9il/JGL8Lm8wYfAXpredVXXZz7eMHilimiQ==",
+      "dev": true,
+      "license": "MIT"
+    },
     "node_modules/buffer-from": {
       "version": "1.1.2",
       "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
@@ -4467,6 +4638,56 @@
         "node": ">=8.9.0"
       }
     },
+    "node_modules/call-bind": {
+      "version": "1.0.9",
+      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.9.tgz",
+      "integrity": "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "call-bind-apply-helpers": "^1.0.2",
+        "es-define-property": "^1.0.1",
+        "get-intrinsic": "^1.3.0",
+        "set-function-length": "^1.2.2"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/call-bind-apply-helpers": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
+      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "es-errors": "^1.3.0",
+        "function-bind": "^1.1.2"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      }
+    },
+    "node_modules/call-bound": {
+      "version": "1.0.4",
+      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
+      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "call-bind-apply-helpers": "^1.0.2",
+        "get-intrinsic": "^1.3.0"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
     "node_modules/callsites": {
       "version": "3.1.0",
       "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
@@ -4526,6 +4747,13 @@
       ],
       "license": "CC-BY-4.0"
     },
+    "node_modules/caseless": {
+      "version": "0.12.0",
+      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
+      "integrity": "sha512-4tYFyifaFfGacoiObjJegolkwSU4xQNGbVgUiNYVUxbQ2x2lUsFvY4hVgVzGiIe6WLOPqycWXA40l+PWsxthUw==",
+      "dev": true,
+      "license": "Apache-2.0"
+    },
     "node_modules/catharsis": {
       "version": "0.9.0",
       "resolved": "https://registry.npmjs.org/catharsis/-/catharsis-0.9.0.tgz",
@@ -4867,6 +5095,44 @@
         "node": ">= 12.0.0"
       }
     },
+    "node_modules/concat-map": {
+      "version": "0.0.1",
+      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
+      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/concat-stream": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-2.0.0.tgz",
+      "integrity": "sha512-MWufYdFw53ccGjCA+Ol7XJYpAlW6/prSMzuPOTRnJGcGzuhLn4Scrz7qf6o8bROZ514ltazcIFJZevcfbo0x7A==",
+      "dev": true,
+      "engines": [
+        "node >= 6.0"
+      ],
+      "license": "MIT",
+      "dependencies": {
+        "buffer-from": "^1.0.0",
+        "inherits": "^2.0.3",
+        "readable-stream": "^3.0.2",
+        "typedarray": "^0.0.6"
+      }
+    },
+    "node_modules/concat-stream/node_modules/readable-stream": {
+      "version": "3.6.2",
+      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
+      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "inherits": "^2.0.3",
+        "string_decoder": "^1.1.1",
+        "util-deprecate": "^1.0.1"
+      },
+      "engines": {
+        "node": ">= 6"
+      }
+    },
     "node_modules/conventional-commits-parser": {
       "version": "3.2.4",
       "resolved": "https://registry.npmjs.org/conventional-commits-parser/-/