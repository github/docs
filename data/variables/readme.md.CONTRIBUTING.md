# Variables

Variables are short strings of reusable text.

The YAML files in this directory each contain multiple variables.

The *path*, *filename*, and *keys* within each YAML file determine what its path will be in the data object.

For example, given a file `data/variables/foo/bar.yml`:

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

Its values would be accessible as:

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
From ecf0ce62f9fc44aa8a7c932625b9335ed461e377 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Fri, 24 Apr 2020 08:58:38 -0400
Subject: [PATCH 01/30] wip

---
 .gitignore        |    3 +
 action.yml        |   10 +-
 dist/index.js     | 1218 +++++++++++++++++++++++++++++++++++++--------
 package-lock.json |   20 +-
 package.json      |    4 +-
 src/installer.ts  |  216 ++++----
 src/setup-node.ts |   10 +-
 validate/test.sh  |   22 +
 8 files changed, 1196 insertions(+), 307 deletions(-)
 create mode 100755 validate/test.sh

diff --git a/.gitignore b/.gitignore
index f5235b820..cdfee2d3e 100644
--- a/.gitignore
+++ b/.gitignore
@@ -2,6 +2,9 @@ node_modules/
 lib/
 __tests__/runner/*
 
+validate/temp
+validate/node
+
 # Rest of the file pulled from https://github.com/github/gitignore/blob/master/Node.gitignore
 # Logs
 logs
diff --git a/action.yml b/action.yml
index 03910a44a..b7c786075 100644
--- a/action.yml
+++ b/action.yml
@@ -1,17 +1,21 @@
 name: 'Setup Node.js environment'
-description: 'Setup a Node.js environment and add it to the PATH, additionally providing proxy support'
+description: 'Setup a Node.js environment by adding problem matchers and optionally downloading and adding it to the PATH'
 author: 'GitHub'
 inputs:
   always-auth:
     description: 'Set always-auth in npmrc'
     default: 'false'
   node-version:
-    description: 'Version Spec of the version to use.  Examples: 10.x, 10.15.1, >=10.15.0'
-    default: '10.x'
+    description: 'Version Spec of the version to use.  Examples: 12.x, 10.15.1, >=10.15.0'
   registry-url:
     description: 'Optional registry to set up for auth. Will set the registry in a project level .npmrc and .yarnrc file, and set up auth to read in from env.NODE_AUTH_TOKEN'
   scope:
     description: 'Optional scope for authenticating against scoped registries'
+  token:
+    description: Used to pull node distributions from node-versions.  Since there's a default, this is typically not supplied by the user.
+    default: ${{ github.token }}
+# TODO: add input to control forcing to pull from cloud or dist. 
+#       escape valve for someone having issues or needing the absolute latest which isn't cached yet
 # Deprecated option, do not use. Will not be supported after October 1, 2019
   version:
     description: 'Deprecated. Use node-version instead. Will not be supported after October 1, 2019'
diff --git a/dist/index.js b/dist/index.js
index 214ec571c..c51c792e1 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -1237,49 +1237,181 @@ function authenticationPlugin(octokit, options) {
 /***/ }),
 
 /***/ 20:
-/***/ (function(module, __unusedexports, __webpack_require__) {
+/***/ (function(__unusedmodule, exports, __webpack_require__) {
 
 "use strict";
 
-
-const cp = __webpack_require__(129);
-const parse = __webpack_require__(568);
-const enoent = __webpack_require__(881);
-
-function spawn(command, args, options) {
-    // Parse the arguments
-    const parsed = parse(command, args, options);
-
-    // Spawn the child process
-    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
-
-    // Hook into child process "exit" event to emit an error if the command
-    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
-    enoent.hookChildProcess(spawned, parsed);
-
-    return spawned;
+Object.defineProperty(exports, "__esModule", { value: true });
+const url = __webpack_require__(835);
+function getProxyUrl(reqUrl) {
+    let usingSsl = reqUrl.protocol === 'https:';
+    let proxyUrl;
+    if (checkBypass(reqUrl)) {
+        return proxyUrl;
+    }
+    let proxyVar;
+    if (usingSsl) {
+        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
+    }
+    else {
+        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
+    }
+    if (proxyVar) {
+        proxyUrl = url.parse(proxyVar);
+    }
+    return proxyUrl;
+}
+exports.getProxyUrl = getProxyUrl;
+function checkBypass(reqUrl) {
+    if (!reqUrl.hostname) {
+        return false;
+    }
+    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
+    if (!noProxy) {
+        return false;
+    }
+    // Determine the request port
+    let reqPort;
+    if (reqUrl.port) {
+        reqPort = Number(reqUrl.port);
+    }
+    else if (reqUrl.protocol === 'http:') {
+        reqPort = 80;
+    }
+    else if (reqUrl.protocol === 'https:') {
+        reqPort = 443;
+    }
+    // Format the request hostname and hostname with port
+    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
+    if (typeof reqPort === 'number') {
+        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
+    }
+    // Compare request host against noproxy
+    for (let upperNoProxyItem of noProxy
+        .split(',')
+        .map(x => x.trim().toUpperCase())
+        .filter(x => x)) {
+        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
+            return true;
+        }
+    }
+    return false;
 }
+exports.checkBypass = checkBypass;
 
-function spawnSync(command, args, options) {
-    // Parse the arguments
-    const parsed = parse(command, args, options);
 
-    // Spawn the child process
-    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
+/***/ }),
 
-    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
-    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
+/***/ 31:
+/***/ (function(module, exports, __webpack_require__) {
+
+"use strict";
 
+var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
+    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
+    return new (P || (P = Promise))(function (resolve, reject) {
+        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
+        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
+        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
+        step((generator = generator.apply(thisArg, _arguments || [])).next());
+    });
+};
+var __importStar = (this && this.__importStar) || function (mod) {
+    if (mod && mod.__esModule) return mod;
+    var result = {};
+    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
+    result["default"] = mod;
     return result;
+};
+Object.defineProperty(exports, "__esModule", { value: true });
+const semver = __importStar(__webpack_require__(280));
+const core_1 = __webpack_require__(470);
+// needs to be require for core node modules to be mocked
+/* eslint @typescript-eslint/no-require-imports: 0 */
+const os = __webpack_require__(87);
+const cp = __webpack_require__(129);
+const fs = __webpack_require__(747);
+function _findMatch(versionSpec, stable, candidates, archFilter) {
+    return __awaiter(this, void 0, void 0, function* () {
+        const platFilter = os.platform();
+        let result;
+        let match;
+        let file;
+        for (const candidate of candidates) {
+            const version = candidate.version;
+            core_1.debug(`check ${version} satisfies ${versionSpec}`);
+            if (semver.satisfies(version, versionSpec) &&
+                (!stable || candidate.stable === stable)) {
+                file = candidate.files.find(item => {
+                    core_1.debug(`${item.arch}===${archFilter} && ${item.platform}===${platFilter}`);
+                    let chk = item.arch === archFilter && item.platform === platFilter;
+                    if (chk && item.platform_version) {
+                        const osVersion = module.exports._getOsVersion();
+                        if (osVersion === item.platform_version) {
+                            chk = true;
+                        }
+                        else {
+                            chk = semver.satisfies(osVersion, item.platform_version);
+                        }
+                    }
+                    return chk;
+                });
+                if (file) {
+                    core_1.debug(`matched ${candidate.version}`);
+                    match = candidate;
+                    break;
+                }
+            }
+        }
+        if (match && file) {
+            // clone since we're mutating the file list to be only the file that matches
+            result = Object.assign({}, match);
+            result.files = [file];
+        }
+        return result;
+    });
 }
-
-module.exports = spawn;
-module.exports.spawn = spawn;
-module.exports.sync = spawnSync;
-
-module.exports._parse = parse;
-module.exports._enoent = enoent;
-
+exports._findMatch = _findMatch;
+function _getOsVersion() {
+    // TODO: add windows and other linux, arm variants
+    // right now filtering on version is only an ubuntu and macos scenario for tools we build for hosted (python)
+    const plat = os.platform();
+    let version = '';
+    if (plat === 'darwin') {
+        version = cp.execSync('sw_vers -productVersion').toString();
+    }
+    else if (plat === 'linux') {
+        // lsb_release process not in some containers, readfile
+        // Run cat /etc/lsb-release
+        // DISTRIB_ID=Ubuntu
+        // DISTRIB_RELEASE=18.04
+        // DISTRIB_CODENAME=bionic
+        // DISTRIB_DESCRIPTION="Ubuntu 18.04.4 LTS"
+        const lsbContents = module.exports._readLinuxVersionFile();
+        if (lsbContents) {
+            const lines = lsbContents.split('\n');
+            for (const line of lines) {
+                const parts = line.split('=');
+                if (parts.length === 2 && parts[0].trim() === 'DISTRIB_RELEASE') {
+                    version = parts[1].trim();
+                    break;
+                }
+            }
+        }
+    }
+    return version;
+}
+exports._getOsVersion = _getOsVersion;
+function _readLinuxVersionFile() {
+    const lsbFile = '/etc/lsb-release';
+    let contents = '';
+    if (fs.existsSync(lsbFile)) {
+        contents = fs.readFileSync(lsbFile).toString();
+    }
+    return contents;
+}
+exports._readLinuxVersionFile = _readLinuxVersionFile;
+//# sourceMappingURL=manifest.js.map
 
 /***/ }),
 
@@ -2890,6 +3022,53 @@ module.exports = windowsRelease;
 
 module.exports = require("os");
 
+/***/ }),
+
+/***/ 108:
+/***/ (function(module, __unusedexports, __webpack_require__) {
+
+"use strict";
+
+
+const cp = __webpack_require__(129);
+const parse = __webpack_require__(568);
+const enoent = __webpack_require__(881);
+
+function spawn(command, args, options) {
+    // Parse the arguments
+    const parsed = parse(command, args, options);
+
+    // Spawn the child process
+    const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
+
+    // Hook into child process "exit" event to emit an error if the command
+    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
+    enoent.hookChildProcess(spawned, parsed);
+
+    return spawned;
+}
+
+function spawnSync(command, args, options) {
+    // Parse the arguments
+    const parsed = parse(command, args, options);
+
+    // Spawn the child process
+    const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
+
+    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
+    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
+
+    return result;
+}
+
+module.exports = spawn;
+module.exports.spawn = spawn;
+module.exports.sync = spawnSync;
+
+module.exports._parse = parse;
+module.exports._enoent = enoent;
+
+
 /***/ }),
 
 /***/ 118:
@@ -4487,7 +4666,7 @@ module.exports = require("https");
 /***/ 215:
 /***/ (function(module) {
 
-module.exports = {"name":"@octokit/rest","version":"16.38.1","publishConfig":{"access":"public"},"description":"GitHub REST API client for Node.js","keywords":["octokit","github","rest","api-client"],"author":"Gregor Martynus (https://github.com/gr2m)","contributors":[{"name":"Mike de Boer","email":"info@mikedeboer.nl"},{"name":"Fabian Jakobs","email":"fabian@c9.io"},{"name":"Joe Gallo","email":"joe@brassafrax.com"},{"name":"Gregor Martynus","url":"https://github.com/gr2m"}],"repository":"https://github.com/octokit/rest.js","dependencies":{"@octokit/auth-token":"^2.4.0","@octokit/request":"^5.2.0","@octokit/request-error":"^1.0.2","atob-lite":"^2.0.0","before-after-hook":"^2.0.0","btoa-lite":"^1.0.0","deprecation":"^2.0.0","lodash.get":"^4.4.2","lodash.set":"^4.3.2","lodash.uniq":"^4.5.0","octokit-pagination-methods":"^1.1.0","once":"^1.4.0","universal-user-agent":"^4.0.0"},"devDependencies":{"@gimenete/type-writer":"^0.1.3","@octokit/auth":"^1.1.1","@octokit/fixtures-server":"^5.0.6","@octokit/graphql":"^4.2.0","@types/node":"^13.1.0","bundlesize":"^0.18.0","chai":"^4.1.2","compression-webpack-plugin":"^3.1.0","cypress":"^3.0.0","glob":"^7.1.2","http-proxy-agent":"^3.0.0","lodash.camelcase":"^4.3.0","lodash.merge":"^4.6.1","lodash.upperfirst":"^4.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","mustache":"^4.0.0","nock":"^11.3.3","npm-run-all":"^4.1.2","nyc":"^15.0.0","prettier":"^1.14.2","proxy":"^1.0.0","semantic-release":"^16.0.0","sinon":"^8.0.0","sinon-chai":"^3.0.0","sort-keys":"^4.0.0","string-to-arraybuffer":"^1.0.0","string-to-jsdoc-comment":"^1.0.0","typescript":"^3.3.1","webpack":"^4.0.0","webpack-bundle-analyzer":"^3.0.0","webpack-cli":"^3.0.0"},"types":"index.d.ts","scripts":{"coverage":"nyc report --reporter=html && open coverage/index.html","lint":"prettier --check '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json","lint:fix":"prettier --write '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json","pretest":"npm run -s lint","test":"nyc mocha test/mocha-node-setup.js \"test/*/**/*-test.js\"","test:browser":"cypress run --browser chrome","build":"npm-run-all build:*","build:ts":"npm run -s update-endpoints:typescript","prebuild:browser":"mkdirp dist/","build:browser":"npm-run-all build:browser:*","build:browser:development":"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json","build:browser:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map","generate-bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","update-endpoints":"npm-run-all update-endpoints:*","update-endpoints:fetch-json":"node scripts/update-endpoints/fetch-json","update-endpoints:code":"node scripts/update-endpoints/code","update-endpoints:typescript":"node scripts/update-endpoints/typescript","prevalidate:ts":"npm run -s build:ts","validate:ts":"tsc --target es6 --noImplicitAny index.d.ts","postvalidate:ts":"tsc --noEmit --target es6 test/typescript-validate.ts","start-fixtures-server":"octokit-fixtures-server"},"license":"MIT","files":["index.js","index.d.ts","lib","plugins"],"nyc":{"ignore":["test"]},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"bundlesize":[{"path":"./dist/octokit-rest.min.js.gz","maxSize":"33 kB"}],"_resolved":"https://registry.npmjs.org/@octokit/rest/-/rest-16.38.1.tgz","_integrity":"sha512-zyNFx+/Bd1EXt7LQjfrc6H4wryBQ/oDuZeZhGMBSFr1eMPFDmpEweFQR3R25zjKwBQpDY7L5GQO6A3XSaOfV1w==","_from":"@octokit/rest@16.38.1"};
+module.exports = {"_args":[["@octokit/rest@16.38.1","/Users/bryan/Projects/setup-node"]],"_from":"@octokit/rest@16.38.1","_id":"@octokit/rest@16.38.1","_inBundle":false,"_integrity":"sha512-zyNFx+/Bd1EXt7LQjfrc6H4wryBQ/oDuZeZhGMBSFr1eMPFDmpEweFQR3R25zjKwBQpDY7L5GQO6A3XSaOfV1w==","_location":"/@octokit/rest","_phantomChildren":{"os-name":"3.1.0"},"_requested":{"type":"version","registry":true,"raw":"@octokit/rest@16.38.1","name":"@octokit/rest","escapedName":"@octokit%2frest","scope":"@octokit","rawSpec":"16.38.1","saveSpec":null,"fetchSpec":"16.38.1"},"_requiredBy":["/@actions/github"],"_resolved":"https://registry.npmjs.org/@octokit/rest/-/rest-16.38.1.tgz","_spec":"16.38.1","_where":"/Users/bryan/Projects/setup-node","author":{"name":"Gregor Martynus","url":"https://github.com/gr2m"},"bugs":{"url":"https://github.com/octokit/rest.js/issues"},"bundlesize":[{"path":"./dist/octokit-rest.min.js.gz","maxSize":"33 kB"}],"contributors":[{"name":"Mike de Boer","email":"info@mikedeboer.nl"},{"name":"Fabian Jakobs","email":"fabian@c9.io"},{"name":"Joe Gallo","email":"joe@brassafrax.com"},{"name":"Gregor Martynus","url":"https://github.com/gr2m"}],"dependencies":{"@octokit/auth-token":"^2.4.0","@octokit/request":"^5.2.0","@octokit/request-error":"^1.0.2","atob-lite":"^2.0.0","before-after-hook":"^2.0.0","btoa-lite":"^1.0.0","deprecation":"^2.0.0","lodash.get":"^4.4.2","lodash.set":"^4.3.2","lodash.uniq":"^4.5.0","octokit-pagination-methods":"^1.1.0","once":"^1.4.0","universal-user-agent":"^4.0.0"},"description":"GitHub REST API client for Node.js","devDependencies":{"@gimenete/type-writer":"^0.1.3","@octokit/auth":"^1.1.1","@octokit/fixtures-server":"^5.0.6","@octokit/graphql":"^4.2.0","@types/node":"^13.1.0","bundlesize":"^0.18.0","chai":"^4.1.2","compression-webpack-plugin":"^3.1.0","cypress":"^3.0.0","glob":"^7.1.2","http-proxy-agent":"^3.0.0","lodash.camelcase":"^4.3.0","lodash.merge":"^4.6.1","lodash.upperfirst":"^4.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","mustache":"^4.0.0","nock":"^11.3.3","npm-run-all":"^4.1.2","nyc":"^15.0.0","prettier":"^1.14.2","proxy":"^1.0.0","semantic-release":"^16.0.0","sinon":"^8.0.0","sinon-chai":"^3.0.0","sort-keys":"^4.0.0","string-to-arraybuffer":"^1.0.0","string-to-jsdoc-comment":"^1.0.0","typescript":"^3.3.1","webpack":"^4.0.0","webpack-bundle-analyzer":"^3.0.0","webpack-cli":"^3.0.0"},"files":["index.js","index.d.ts","lib","plugins"],"homepage":"https://github.com/octokit/rest.js#readme","keywords":["octokit","github","rest","api-client"],"license":"MIT","name":"@octokit/rest","nyc":{"ignore":["test"]},"publishConfig":{"access":"public"},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"repository":{"type":"git","url":"git+https://github.com/octokit/rest.js.git"},"scripts":{"build":"npm-run-all build:*","build:browser":"npm-run-all build:browser:*","build:browser:development":"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json","build:browser:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map","build:ts":"npm run -s update-endpoints:typescript","coverage":"nyc report --reporter=html && open coverage/index.html","generate-bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","lint":"prettier --check '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json","lint:fix":"prettier --write '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json","postvalidate:ts":"tsc --noEmit --target es6 test/typescript-validate.ts","prebuild:browser":"mkdirp dist/","pretest":"npm run -s lint","prevalidate:ts":"npm run -s build:ts","start-fixtures-server":"octokit-fixtures-server","test":"nyc mocha test/mocha-node-setup.js \"test/*/**/*-test.js\"","test:browser":"cypress run --browser chrome","update-endpoints":"npm-run-all update-endpoints:*","update-endpoints:code":"node scripts/update-endpoints/code","update-endpoints:fetch-json":"node scripts/update-endpoints/fetch-json","update-endpoints:typescript":"node scripts/update-endpoints/typescript","validate:ts":"tsc --target es6 --noImplicitAny index.d.ts"},"types":"index.d.ts","version":"16.38.1"};
 
 /***/ }),
 
@@ -6637,7 +6816,7 @@ function normalizePaginatedListResponse(octokit, url, response) {
 /***/ 314:
 /***/ (function(module) {
 
-module.exports = {"name":"@octokit/graphql","version":"2.1.3","publishConfig":{"access":"public"},"description":"GitHub GraphQL API client for browsers and Node","main":"index.js","scripts":{"prebuild":"mkdirp dist/","build":"npm-run-all build:*","build:development":"webpack --mode development --entry . --output-library=octokitGraphql --output=./dist/octokit-graphql.js --profile --json > dist/bundle-stats.json","build:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=octokitGraphql --output-path=./dist --output-filename=octokit-graphql.min.js --devtool source-map","bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","coverage":"nyc report --reporter=html && open coverage/index.html","coverage:upload":"nyc report --reporter=text-lcov | coveralls","pretest":"standard","test":"nyc mocha test/*-test.js","test:browser":"cypress run --browser chrome"},"repository":{"type":"git","url":"https://github.com/octokit/graphql.js.git"},"keywords":["octokit","github","api","graphql"],"author":"Gregor Martynus (https://github.com/gr2m)","license":"MIT","bugs":{"url":"https://github.com/octokit/graphql.js/issues"},"homepage":"https://github.com/octokit/graphql.js#readme","dependencies":{"@octokit/request":"^5.0.0","universal-user-agent":"^2.0.3"},"devDependencies":{"chai":"^4.2.0","compression-webpack-plugin":"^2.0.0","coveralls":"^3.0.3","cypress":"^3.1.5","fetch-mock":"^7.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","npm-run-all":"^4.1.3","nyc":"^14.0.0","semantic-release":"^15.13.3","simple-mock":"^0.8.0","standard":"^12.0.1","webpack":"^4.29.6","webpack-bundle-analyzer":"^3.1.0","webpack-cli":"^3.2.3"},"bundlesize":[{"path":"./dist/octokit-graphql.min.js.gz","maxSize":"5KB"}],"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"standard":{"globals":["describe","before","beforeEach","afterEach","after","it","expect"]},"files":["lib"],"_resolved":"https://registry.npmjs.org/@octokit/graphql/-/graphql-2.1.3.tgz","_integrity":"sha512-XoXJqL2ondwdnMIW3wtqJWEwcBfKk37jO/rYkoxNPEVeLBDGsGO1TCWggrAlq3keGt/O+C/7VepXnukUxwt5vA==","_from":"@octokit/graphql@2.1.3"};
+module.exports = {"_args":[["@octokit/graphql@2.1.3","/Users/bryan/Projects/setup-node"]],"_from":"@octokit/graphql@2.1.3","_id":"@octokit/graphql@2.1.3","_inBundle":false,"_integrity":"sha512-XoXJqL2ondwdnMIW3wtqJWEwcBfKk37jO/rYkoxNPEVeLBDGsGO1TCWggrAlq3keGt/O+C/7VepXnukUxwt5vA==","_location":"/@octokit/graphql","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"@octokit/graphql@2.1.3","name":"@octokit/graphql","escapedName":"@octokit%2fgraphql","scope":"@octokit","rawSpec":"2.1.3","saveSpec":null,"fetchSpec":"2.1.3"},"_requiredBy":["/@actions/github"],"_resolved":"https://registry.npmjs.org/@octokit/graphql/-/graphql-2.1.3.tgz","_spec":"2.1.3","_where":"/Users/bryan/Projects/setup-node","author":{"name":"Gregor Martynus","url":"https://github.com/gr2m"},"bugs":{"url":"https://github.com/octokit/graphql.js/issues"},"bundlesize":[{"path":"./dist/octokit-graphql.min.js.gz","maxSize":"5KB"}],"dependencies":{"@octokit/request":"^5.0.0","universal-user-agent":"^2.0.3"},"description":"GitHub GraphQL API client for browsers and Node","devDependencies":{"chai":"^4.2.0","compression-webpack-plugin":"^2.0.0","coveralls":"^3.0.3","cypress":"^3.1.5","fetch-mock":"^7.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","npm-run-all":"^4.1.3","nyc":"^14.0.0","semantic-release":"^15.13.3","simple-mock":"^0.8.0","standard":"^12.0.1","webpack":"^4.29.6","webpack-bundle-analyzer":"^3.1.0","webpack-cli":"^3.2.3"},"files":["lib"],"homepage":"https://github.com/octokit/graphql.js#readme","keywords":["octokit","github","api","graphql"],"license":"MIT","main":"index.js","name":"@octokit/graphql","publishConfig":{"access":"public"},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"repository":{"type":"git","url":"git+https://github.com/octokit/graphql.js.git"},"scripts":{"build":"npm-run-all build:*","build:development":"webpack --mode development --entry . --output-library=octokitGraphql --output=./dist/octokit-graphql.js --profile --json > dist/bundle-stats.json","build:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=octokitGraphql --output-path=./dist --output-filename=octokit-graphql.min.js --devtool source-map","bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","coverage":"nyc report --reporter=html && open coverage/index.html","coverage:upload":"nyc report --reporter=text-lcov | coveralls","prebuild":"mkdirp dist/","pretest":"standard","test":"nyc mocha test/*-test.js","test:browser":"cypress run --browser chrome"},"standard":{"globals":["describe","before","beforeEach","afterEach","after","it","expect"]},"version":"2.1.3"};
 
 /***/ }),
 
@@ -7506,88 +7685,627 @@ function Octokit(plugins, options) {
 
 /***/ }),
 
-/***/ 413:
-/***/ (function(module, __unusedexports, __webpack_require__) {
-
-module.exports = __webpack_require__(141);
-
-
-/***/ }),
-
-/***/ 417:
-/***/ (function(module) {
-
-module.exports = require("crypto");
-
-/***/ }),
-
-/***/ 427:
-/***/ (function(module, __unusedexports, __webpack_require__) {
-
-"use strict";
-
-// Older verions of Node.js might not have `util.getSystemErrorName()`.
-// In that case, fall back to a deprecated internal.
-const util = __webpack_require__(669);
-
-let uv;
-
-if (typeof util.getSystemErrorName === 'function') {
-	module.exports = util.getSystemErrorName;
-} else {
-	try {
-		uv = process.binding('uv');
-
-		if (typeof uv.errname !== 'function') {
-			throw new TypeError('uv.errname is not a function');
-		}
-	} catch (err) {
-		console.error('execa/lib/errname: unable to establish process.binding(\'uv\')', err);
-		uv = null;
-	}
-
-	module.exports = code => errname(uv, code);
-}
-
-// Used for testing the fallback behavior
-module.exports.__test__ = errname;
-
-function errname(uv, code) {
-	if (uv) {
-		return uv.errname(code);
-	}
-
-	if (!(code < 0)) {
-		throw new Error('err >= 0');
-	}
-
-	return `Unknown system error ${code}`;
-}
-
-
-
-/***/ }),
-
-/***/ 430:
-/***/ (function(module, __unusedexports, __webpack_require__) {
-
-module.exports = octokitValidate;
-
-const validate = __webpack_require__(348);
-
-function octokitValidate(octokit) {
-  octokit.hook.before("request", validate.bind(null, octokit));
-}
-
-
-/***/ }),
-
-/***/ 431:
+/***/ 403:
 /***/ (function(__unusedmodule, exports, __webpack_require__) {
 
 "use strict";
 
-var __importStar = (this && this.__importStar) || function (mod) {
+Object.defineProperty(exports, "__esModule", { value: true });
+const url = __webpack_require__(835);
+const http = __webpack_require__(605);
+const https = __webpack_require__(211);
+const pm = __webpack_require__(20);
+let tunnel;
+var HttpCodes;
+(function (HttpCodes) {
+    HttpCodes[HttpCodes["OK"] = 200] = "OK";
+    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
+    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
+    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
+    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
+    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
+    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
+    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
+    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
+    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
+    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
+    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
+    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
+    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
+    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
+    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
+    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
+    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
+    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
+    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
+    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
+    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
+    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
+    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
+    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
+    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
+    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
+})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
+var Headers;
+(function (Headers) {
+    Headers["Accept"] = "accept";
+    Headers["ContentType"] = "content-type";
+})(Headers = exports.Headers || (exports.Headers = {}));
+var MediaTypes;
+(function (MediaTypes) {
+    MediaTypes["ApplicationJson"] = "application/json";
+})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
+/**
+ * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
+ * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
+ */
+function getProxyUrl(serverUrl) {
+    let proxyUrl = pm.getProxyUrl(url.parse(serverUrl));
+    return proxyUrl ? proxyUrl.href : '';
+}
+exports.getProxyUrl = getProxyUrl;
+const HttpRedirectCodes = [
+    HttpCodes.MovedPermanently,
+    HttpCodes.ResourceMoved,
+    HttpCodes.SeeOther,
+    HttpCodes.TemporaryRedirect,
+    HttpCodes.PermanentRedirect
+];
+const HttpResponseRetryCodes = [
+    HttpCodes.BadGateway,
+    HttpCodes.ServiceUnavailable,
+    HttpCodes.GatewayTimeout
+];
+const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
+const ExponentialBackoffCeiling = 10;
+const ExponentialBackoffTimeSlice = 5;
+class HttpClientResponse {
+    constructor(message) {
+        this.message = message;
+    }
+    readBody() {
+        return new Promise(async (resolve, reject) => {
+            let output = Buffer.alloc(0);
+            this.message.on('data', (chunk) => {
+                output = Buffer.concat([output, chunk]);
+            });
+            this.message.on('end', () => {
+                resolve(output.toString());
+            });
+        });
+    }
+}
+exports.HttpClientResponse = HttpClientResponse;
+function isHttps(requestUrl) {
+    let parsedUrl = url.parse(requestUrl);
+    return parsedUrl.protocol === 'https:';
+}
+exports.isHttps = isHttps;
+class HttpClient {
+    constructor(userAgent, handlers, requestOptions) {
+        this._ignoreSslError = false;
+        this._allowRedirects = true;
+        this._allowRedirectDowngrade = false;
+        this._maxRedirects = 50;
+        this._allowRetries = false;
+        this._maxRetries = 1;
+        this._keepAlive = false;
+        this._disposed = false;
+        this.userAgent = userAgent;
+        this.handlers = handlers || [];
+        this.requestOptions = requestOptions;
+        if (requestOptions) {
+            if (requestOptions.ignoreSslError != null) {
+                this._ignoreSslError = requestOptions.ignoreSslError;
+            }
+            this._socketTimeout = requestOptions.socketTimeout;
+            if (requestOptions.allowRedirects != null) {
+                this._allowRedirects = requestOptions.allowRedirects;
+            }
+            if (requestOptions.allowRedirectDowngrade != null) {
+                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
+            }
+            if (requestOptions.maxRedirects != null) {
+                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
+            }
+            if (requestOptions.keepAlive != null) {
+                this._keepAlive = requestOptions.keepAlive;
+            }
+            if (requestOptions.allowRetries != null) {
+                this._allowRetries = requestOptions.allowRetries;
+            }
+            if (requestOptions.maxRetries != null) {
+                this._maxRetries = requestOptions.maxRetries;
+            }
+        }
+    }
+    options(requestUrl, additionalHeaders) {
+        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
+    }
+    get(requestUrl, additionalHeaders) {
+        return this.request('GET', requestUrl, null, additionalHeaders || {});
+    }
+    del(requestUrl, additionalHeaders) {
+        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
+    }
+    post(requestUrl, data, additionalHeaders) {
+        return this.request('POST', requestUrl, data, additionalHeaders || {});
+    }
+    patch(requestUrl, data, additionalHeaders) {
+        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
+    }
+    put(requestUrl, data, additionalHeaders) {
+        return this.request('PUT', requestUrl, data, additionalHeaders || {});
+    }
+    head(requestUrl, additionalHeaders) {
+        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
+    }
+    sendStream(verb, requestUrl, stream, additionalHeaders) {
+        return this.request(verb, requestUrl, stream, additionalHeaders);
+    }
+    /**
+     * Gets a typed object from an endpoint
+     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
+     */
+    async getJson(requestUrl, additionalHeaders = {}) {
+        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
+        let res = await this.get(requestUrl, additionalHeaders);
+        return this._processResponse(res, this.requestOptions);
+    }
+    async postJson(requestUrl, obj, additionalHeaders = {}) {
+        let data = JSON.stringify(obj, null, 2);
+        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
+        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
+        let res = await this.post(requestUrl, data, additionalHeaders);
+        return this._processResponse(res, this.requestOptions);
+    }
+    async putJson(requestUrl, obj, additionalHeaders = {}) {
+        let data = JSON.stringify(obj, null, 2);
+        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
+        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
+        let res = await this.put(requestUrl, data, additionalHeaders);
+        return this._processResponse(res, this.requestOptions);
+    }
+    async patchJson(requestUrl, obj, additionalHeaders = {}) {
+        let data = JSON.stringify(obj, null, 2);
+        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
+        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
+        let res = await this.patch(requestUrl, data, additionalHeaders);
+        return this._processResponse(res, this.requestOptions);
+    }
+    /**
+     * Makes a raw http request.
+     * All other methods such as get, post, patch, and request ultimately call this.
+     * Prefer get, del, post and patch
+     */
+    async request(verb, requestUrl, data, headers) {
+        if (this._disposed) {
+            throw new Error('Client has already been disposed.');
+        }
+        let parsedUrl = url.parse(requestUrl);
+        let info = this._prepareRequest(verb, parsedUrl, headers);
+        // Only perform retries on reads since writes may not be idempotent.
+        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
+            ? this._maxRetries + 1
+            : 1;
+        let numTries = 0;
+        let response;
+        while (numTries < maxTries) {
+            response = await this.requestRaw(info, data);
+            // Check if it's an authentication challenge
+            if (response &&
+                response.message &&
+                response.message.statusCode === HttpCodes.Unauthorized) {
+                let authenticationHandler;
+                for (let i = 0; i < this.handlers.length; i++) {
+                    if (this.handlers[i].canHandleAuthentication(response)) {
+                        authenticationHandler = this.handlers[i];
+                        break;
+                    }
+                }
+                if (authenticationHandler) {
+                    return authenticationHandler.handleAuthentication(this, info, data);
+                }
+                else {
+                    // We have received an unauthorized response but have no handlers to handle it.
+                    // Let the response return to the caller.
+                    return response;
+                }
+            }
+            let redirectsRemaining = this._maxRedirects;
+            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
+                this._allowRedirects &&
+                redirectsRemaining > 0) {
+                const redirectUrl = response.message.headers['location'];
+                if (!redirectUrl) {
+                    // if there's no location to redirect to, we won't
+                    break;
+                }
+                let parsedRedirectUrl = url.parse(redirectUrl);
+                if (parsedUrl.protocol == 'https:' &&
+                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
+                    !this._allowRedirectDowngrade) {
+                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
+                }
+                // we need to finish reading the response before reassigning response
+                // which will leak the open socket.
+                await response.readBody();
+                // strip authorization header if redirected to a different hostname
+                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
+                    for (let header in headers) {
+                        // header names are case insensitive
+                        if (header.toLowerCase() === 'authorization') {
+                            delete headers[header];
+                        }
+                    }
+                }
+                // let's make the request with the new redirectUrl
+                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
+                response = await this.requestRaw(info, data);
+                redirectsRemaining--;
+            }
+            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
+                // If not a retry code, return immediately instead of retrying
+                return response;
+            }
+            numTries += 1;
+            if (numTries < maxTries) {
+                await response.readBody();
+                await this._performExponentialBackoff(numTries);
+            }
+        }
+        return response;
+    }
+    /**
+     * Needs to be called if keepAlive is set to true in request options.
+     */
+    dispose() {
+        if (this._agent) {
+            this._agent.destroy();
+        }
+        this._disposed = true;
+    }
+    /**
+     * Raw request.
+     * @param info
+     * @param data
+     */
+    requestRaw(info, data) {
+        return new Promise((resolve, reject) => {
+            let callbackForResult = function (err, res) {
+                if (err) {
+                    reject(err);
+                }
+                resolve(res);
+            };
+            this.requestRawWithCallback(info, data, callbackForResult);
+        });
+    }
+    /**
+     * Raw request with callback.
+     * @param info
+     * @param data
+     * @param onResult
+     */
+    requestRawWithCallback(info, data, onResult) {
+        let socket;
+        if (typeof data === 'string') {
+            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
+        }
+        let callbackCalled = false;
+        let handleResult = (err, res) => {
+            if (!callbackCalled) {
+                callbackCalled = true;
+                onResult(err, res);
+            }
+        };
+        let req = info.httpModule.request(info.options, (msg) => {
+            let res = new HttpClientResponse(msg);
+            handleResult(null, res);
+        });
+        req.on('socket', sock => {
+            socket = sock;
+        });
+        // If we ever get disconnected, we want the socket to timeout eventually
+        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
+            if (socket) {
+                socket.end();
+            }
+            handleResult(new Error('Request timeout: ' + info.options.path), null);
+        });
+        req.on('error', function (err) {
+            // err has statusCode property
+            // res should have headers
+            handleResult(err, null);
+        });
+        if (data && typeof data === 'string') {
+            req.write(data, 'utf8');
+        }
+        if (data && typeof data !== 'string') {
+            data.on('close', function () {
+                req.end();
+            });
+            data.pipe(req);
+        }
+        else {
+            req.end();
+        }
+    }
+    /**
+     * Gets an http agent. This function is useful when you need an http agent that handles
+     * routing through a proxy server - depending upon the url and proxy environment variables.
+     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
+     */
+    getAgent(serverUrl) {
+        let parsedUrl = url.parse(serverUrl);
+        return this._getAgent(parsedUrl);
+    }
+    _prepareRequest(method, requestUrl, headers) {
+        const info = {};
+        info.parsedUrl = requestUrl;
+        const usingSsl = info.parsedUrl.protocol === 'https:';
+        info.httpModule = usingSsl ? https : http;
+        const defaultPort = usingSsl ? 443 : 80;
+        info.options = {};
+        info.options.host = info.parsedUrl.hostname;
+        info.options.port = info.parsedUrl.port
+            ? parseInt(info.parsedUrl.port)
+            : defaultPort;
+        info.options.path =
+            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
+        info.options.method = method;
+        info.options.headers = this._mergeHeaders(headers);
+        if (this.userAgent != null) {
+            info.options.headers['user-agent'] = this.userAgent;
+        }
+        info.options.agent = this._getAgent(info.parsedUrl);
+        // gives handlers an opportunity to participate
+        if (this.handlers) {
+            this.handlers.forEach(handler => {
+                handler.prepareRequest(info.options);
+            });
+        }
+        return info;
+    }
+    _mergeHeaders(headers) {
+        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
+        if (this.requestOptions && this.requestOptions.headers) {
+            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
+        }
+        return lowercaseKeys(headers || {});
+    }
+    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
+        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
+        let clientHeader;
+        if (this.requestOptions && this.requestOptions.headers) {
+            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
+        }
+        return additionalHeaders[header] || clientHeader || _default;
+    }
+    _getAgent(parsedUrl) {
+        let agent;
+        let proxyUrl = pm.getProxyUrl(parsedUrl);
+        let useProxy = proxyUrl && proxyUrl.hostname;
+        if (this._keepAlive && useProxy) {
+            agent = this._proxyAgent;
+        }
+        if (this._keepAlive && !useProxy) {
+            agent = this._agent;
+        }
+        // if agent is already assigned use that agent.
+        if (!!agent) {
+            return agent;
+        }
+        const usingSsl = parsedUrl.protocol === 'https:';
+        let maxSockets = 100;
+        if (!!this.requestOptions) {
+            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
+        }
+        if (useProxy) {
+            // If using proxy, need tunnel
+            if (!tunnel) {
+                tunnel = __webpack_require__(413);
+            }
+            const agentOptions = {
+                maxSockets: maxSockets,
+                keepAlive: this._keepAlive,
+                proxy: {
+                    proxyAuth: proxyUrl.auth,
+                    host: proxyUrl.hostname,
+                    port: proxyUrl.port
+                }
+            };
+            let tunnelAgent;
+            const overHttps = proxyUrl.protocol === 'https:';
+            if (usingSsl) {
+                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
+            }
+            else {
+                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
+            }
+            agent = tunnelAgent(agentOptions);
+            this._proxyAgent = agent;
+        }
+        // if reusing agent across request and tunneling agent isn't assigned create a new agent
+        if (this._keepAlive && !agent) {
+            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
+            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
+            this._agent = agent;
+        }
+        // if not using private agent and tunnel agent isn't setup then use global agent
+        if (!agent) {
+            agent = usingSsl ? https.globalAgent : http.globalAgent;
+        }
+        if (usingSsl && this._ignoreSslError) {
+            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
+            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
+            // we have to cast it to any and change it directly
+            agent.options = Object.assign(agent.options || {}, {
+                rejectUnauthorized: false
+            });
+        }
+        return agent;
+    }
+    _performExponentialBackoff(retryNumber) {
+        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
+        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
+        return new Promise(resolve => setTimeout(() => resolve(), ms));
+    }
+    static dateTimeDeserializer(key, value) {
+        if (typeof value === 'string') {
+            let a = new Date(value);
+            if (!isNaN(a.valueOf())) {
+                return a;
+            }
+        }
+        return value;
+    }
+    async _processResponse(res, options) {
+        return new Promise(async (resolve, reject) => {
+            const statusCode = res.message.statusCode;
+            const response = {
+                statusCode: statusCode,
+                result: null,
+                headers: {}
+            };
+            // not found leads to null obj returned
+            if (statusCode == HttpCodes.NotFound) {
+                resolve(response);
+            }
+            let obj;
+            let contents;
+            // get the result from the body
+            try {
+                contents = await res.readBody();
+                if (contents && contents.length > 0) {
+                    if (options && options.deserializeDates) {
+                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
+                    }
+                    else {
+                        obj = JSON.parse(contents);
+                    }
+                    response.result = obj;
+                }
+                response.headers = res.message.headers;
+            }
+            catch (err) {
+                // Invalid resource (contents not json);  leaving result obj null
+            }
+            // note that 3xx redirects are handled by the http layer.
+            if (statusCode > 299) {
+                let msg;
+                // if exception/error in body, attempt to get better error
+                if (obj && obj.message) {
+                    msg = obj.message;
+                }
+                else if (contents && contents.length > 0) {
+                    // it may be the case that the exception is in the body message as string
+                    msg = contents;
+                }
+                else {
+                    msg = 'Failed request: (' + statusCode + ')';
+                }
+                let err = new Error(msg);
+                // attach statusCode and body obj (if available) to the error object
+                err['statusCode'] = statusCode;
+                if (response.result) {
+                    err['result'] = response.result;
+                }
+                reject(err);
+            }
+            else {
+                resolve(response);
+            }
+        });
+    }
+}
+exports.HttpClient = HttpClient;
+
+
+/***/ }),
+
+/***/ 413:
+/***/ (function(module, __unusedexports, __webpack_require__) {
+
+module.exports = __webpack_require__(141);
+
+
+/***/ }),
+
+/***/ 417:
+/***/ (function(module) {
+
+module.exports = require("crypto");
+
+/***/ }),
+
+/***/ 427:
+/***/ (function(module, __unusedexports, __webpack_require__) {
+
+"use strict";
+
+// Older verions of Node.js might not have `util.getSystemErrorName()`.
+// In that case, fall back to a deprecated internal.
+const util = __webpack_require__(669);
+
+let uv;
+
+if (typeof util.getSystemErrorName === 'function') {
+	module.exports = util.getSystemErrorName;
+} else {
+	try {
+		uv = process.binding('uv');
+
+		if (typeof uv.errname !== 'function') {
+			throw new TypeError('uv.errname is not a function');
+		}
+	} catch (err) {
+		console.error('execa/lib/errname: unable to establish process.binding(\'uv\')', err);
+		uv = null;
+	}
+
+	module.exports = code => errname(uv, code);
+}
+
+// Used for testing the fallback behavior
+module.exports.__test__ = errname;
+
+function errname(uv, code) {
+	if (uv) {
+		return uv.errname(code);
+	}
+
+	if (!(code < 0)) {
+		throw new Error('err >= 0');
+	}
+
+	return `Unknown system error ${code}`;
+}
+
+
+
+/***/ }),
+
+/***/ 430:
+/***/ (function(module, __unusedexports, __webpack_require__) {
+
+module.exports = octokitValidate;
+
+const validate = __webpack_require__(348);
+
+function octokitValidate(octokit) {
+  octokit.hook.before("request", validate.bind(null, octokit));
+}
+
+
+/***/ }),
+
+/***/ 431:
+/***/ (function(__unusedmodule, exports, __webpack_require__) {
+
+"use strict";
+
+var __importStar = (this && this.__importStar) || function (mod) {
     if (mod && mod.__esModule) return mod;
     var result = {};
     if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
@@ -10092,9 +10810,10 @@ Object.defineProperty(exports, "__esModule", { value: true });
 const core = __importStar(__webpack_require__(470));
 const io = __importStar(__webpack_require__(1));
 const fs = __importStar(__webpack_require__(747));
+const mm = __importStar(__webpack_require__(31));
 const os = __importStar(__webpack_require__(87));
 const path = __importStar(__webpack_require__(622));
-const httpm = __importStar(__webpack_require__(539));
+const httpm = __importStar(__webpack_require__(403));
 const semver = __importStar(__webpack_require__(280));
 const stream = __importStar(__webpack_require__(794));
 const util = __importStar(__webpack_require__(669));
@@ -10119,7 +10838,7 @@ const userAgent = 'actions/tool-cache';
  * @param dest      path to download tool
  * @returns         path to downloaded tool
  */
-function downloadTool(url, dest) {
+function downloadTool(url, dest, token) {
     return __awaiter(this, void 0, void 0, function* () {
         dest = dest || path.join(_getTempDirectory(), v4_1.default());
         yield io.mkdirP(path.dirname(dest));
@@ -10130,7 +10849,7 @@ function downloadTool(url, dest) {
         const maxSeconds = _getGlobal('TEST_DOWNLOAD_TOOL_RETRY_MAX_SECONDS', 20);
         const retryHelper = new retry_helper_1.RetryHelper(maxAttempts, minSeconds, maxSeconds);
         return yield retryHelper.execute(() => __awaiter(this, void 0, void 0, function* () {
-            return yield downloadToolAttempt(url, dest || '');
+            return yield downloadToolAttempt(url, dest || '', token);
         }), (err) => {
             if (err instanceof HTTPError && err.httpStatusCode) {
                 // Don't retry anything less than 500, except 408 Request Timeout and 429 Too Many Requests
@@ -10146,7 +10865,7 @@ function downloadTool(url, dest) {
     });
 }
 exports.downloadTool = downloadTool;
-function downloadToolAttempt(url, dest) {
+function downloadToolAttempt(url, dest, token) {
     return __awaiter(this, void 0, void 0, function* () {
         if (fs.existsSync(dest)) {
             throw new Error(`Destination file path ${dest} already exists`);
@@ -10155,7 +10874,13 @@ function downloadToolAttempt(url, dest) {
         const http = new httpm.HttpClient(userAgent, [], {
             allowRetries: false
         });
-        const response = yield http.get(url);
+        let headers;
+        if (token) {
+            headers = {
+                authorization: `token ${token}`
+            };
+        }
+        const response = yield http.get(url, headers);
         if (response.message.statusCode !== 200) {
             const err = new HTTPError(response.message.statusCode);
             core.debug(`Failed to download from "${url}". Code(${response.message.statusCode}) Message(${response.message.statusMessage})`);
@@ -10483,6 +11208,49 @@ function findAllVersions(toolName, arch) {
     return versions;
 }
 exports.findAllVersions = findAllVersions;
+function getManifestFromRepo(owner, repo, token, branch = 'master') {
+    return __awaiter(this, void 0, void 0, function* () {
+        let releases = [];
+        const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}`;
+        const http = new httpm.HttpClient('tool-cache');
+        const headers = {
+            authorization: `token ${token}`
+        };
+        const response = yield http.getJson(treeUrl, headers);
+        if (!response.result) {
+            return releases;
+        }
+        let manifestUrl = '';
+        for (const item of response.result.tree) {
+            if (item.path === 'versions-manifest.json') {
+                manifestUrl = item.url;
+                break;
+            }
+        }
+        headers['accept'] = 'application/vnd.github.VERSION.raw';
+        let versionsRaw = yield (yield http.get(manifestUrl, headers)).readBody();
+        if (versionsRaw) {
+            // shouldn't be needed but protects against invalid json saved with BOM
+            versionsRaw = versionsRaw.replace(/^\uFEFF/, '');
+            try {
+                releases = JSON.parse(versionsRaw);
+            }
+            catch (_a) {
+                core.debug('Invalid json');
+            }
+        }
+        return releases;
+    });
+}
+exports.getManifestFromRepo = getManifestFromRepo;
+function findFromManifest(versionSpec, stable, manifest, archFilter = os.arch()) {
+    return __awaiter(this, void 0, void 0, function* () {
+        // wrap the internal impl
+        const match = yield mm._findMatch(versionSpec, stable, manifest, archFilter);
+        return match;
+    });
+}
+exports.findFromManifest = findFromManifest;
 function _createExtractFolder(dest) {
     return __awaiter(this, void 0, void 0, function* () {
         if (!dest) {
@@ -10815,6 +11583,15 @@ class HttpClient {
                 // we need to finish reading the response before reassigning response
                 // which will leak the open socket.
                 await response.readBody();
+                // strip authorization header if redirected to a different hostname
+                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
+                    for (let header in headers) {
+                        // header names are case insensitive
+                        if (header.toLowerCase() === 'authorization') {
+                            delete headers[header];
+                        }
+                    }
+                }                
                 // let's make the request with the new redirectUrl
                 info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                 response = await this.requestRaw(info, data);
@@ -12126,33 +12903,52 @@ const path = __importStar(__webpack_require__(622));
 const semver = __importStar(__webpack_require__(280));
 let osPlat = os.platform();
 let osArch = translateArchToDistUrl(os.arch());
-function getNode(versionSpec) {
+function getNode(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
         // check cache
+        let info = null;
         let toolPath;
         toolPath = tc.find('node', versionSpec);
         // If not found in cache, download
-        if (!toolPath) {
-            let version;
-            const c = semver.clean(versionSpec) || '';
-            // If explicit version
-            if (semver.valid(c) != null) {
-                // version to download
-                version = versionSpec;
+        if (toolPath) {
+            console.log(`Found in cache @ ${toolPath}`);
+        }
+        else {
+            console.log(`Attempting to download ${versionSpec}...`);
+            let info = yield getInfoFromManifest(versionSpec, stable, token);
+            if (!info) {
+                console.log('Not found in manifest.  Falling back to download directly from Node');
+                info = yield getInfoFromDist(versionSpec);
             }
-            else {
-                // query nodejs.org for a matching version
-                version = yield queryLatestMatch(versionSpec);
-                if (!version) {
-                    throw new Error(`Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`);
+            if (!info) {
+                throw new Error(`Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`);
+            }
+            console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
+            let downloadPath = "";
+            try {
+                downloadPath = yield tc.downloadTool(info.downloadUrl, undefined, token);
+            }
+            catch (err) {
+                if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
+                    return yield acquireNodeFromFallbackLocation(info.resolvedVersion);
                 }
-                // check cache
-                toolPath = tc.find('node', version);
+                throw err;
+            }
+            //
+            // Extract
+            //
+            let extPath;
+            if (osPlat == 'win32') {
+                let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
+                extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
             }
-            if (!toolPath) {
-                // download, extract, cache
-                toolPath = yield acquireNode(version);
+            else {
+                extPath = yield tc.extractTar(downloadPath);
             }
+            //
+            // Install into the local tool cache - node extracts with a root folder that matches the fileName downloaded
+            //
+            toolPath = yield tc.cacheDir(extPath, 'node', info.resolvedVersion);
         }
         //
         // a tool installer initimately knows details about the layout of that tool
@@ -12168,40 +12964,52 @@ function getNode(versionSpec) {
     });
 }
 exports.getNode = getNode;
-function queryLatestMatch(versionSpec) {
+function getInfoFromManifest(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
-        // node offers a json list of versions
-        let dataFileName;
-        switch (osPlat) {
-            case 'linux':
-                dataFileName = `linux-${osArch}`;
-                break;
-            case 'darwin':
-                dataFileName = `osx-${osArch}-tar`;
-                break;
-            case 'win32':
-                dataFileName = `win-${osArch}-exe`;
-                break;
-            default:
-                throw new Error(`Unexpected OS '${osPlat}'`);
+        let info = null;
+        const releases = yield tc.getManifestFromRepo("actions", "node-versions", token);
+        console.log(`matching ${versionSpec}...`);
+        const rel = yield tc.findFromManifest(versionSpec, stable, releases);
+        if (rel && rel.files.length > 0) {
+            info = {};
+            info.resolvedVersion = rel.version;
+            info.downloadUrl = rel.files[0].download_url;
+            info.fileName = rel.files[0].filename;
+            info.token = token;
         }
-        let versions = [];
-        let dataUrl = 'https://nodejs.org/dist/index.json';
-        let httpClient = new hc.HttpClient('setup-node', [], {
-            allowRetries: true,
-            maxRetries: 3
-        });
-        let response = yield httpClient.getJson(dataUrl);
-        let nodeVersions = response.result || [];
-        nodeVersions.forEach((nodeVersion) => {
-            // ensure this version supports your os and platform
-            if (nodeVersion.files.indexOf(dataFileName) >= 0) {
-                versions.push(nodeVersion.version);
+        return info;
+    });
+}
+function getInfoFromDist(versionSpec) {
+    return __awaiter(this, void 0, void 0, function* () {
+        let info = null;
+        let version;
+        // If explicit version don't query
+        if (semver.clean(versionSpec) != null) {
+            // version to download
+            version = versionSpec;
+        }
+        else {
+            // query nodejs.org for a matching version
+            version = yield queryDistForMatch(versionSpec);
+            if (!version) {
+                return null;
             }
-        });
-        // get the latest version that matches the version spec
-        let version = evaluateVersions(versions, versionSpec);
-        return version;
+        }
+        //
+        // Download - a tool installer intimately knows how to get the tool (and construct urls)
+        //
+        version = semver.clean(version) || '';
+        let fileName = osPlat == 'win32'
+            ? `node-v${version}-win-${osArch}`
+            : `node-v${version}-${osPlat}-${osArch}`;
+        let urlFileName = osPlat == 'win32' ? `${fileName}.7z` : `${fileName}.tar.gz`;
+        let url = `https://nodejs.org/dist/v${version}/${urlFileName}`;
+        return {
+            downloadUrl: url,
+            resolvedVersion: version,
+            fileName: fileName
+        };
     });
 }
 // TODO - should we just export this from @actions/tool-cache? Lifted directly from there
@@ -12230,43 +13038,40 @@ function evaluateVersions(versions, versionSpec) {
     }
     return version;
 }
-function acquireNode(version) {
+function queryDistForMatch(versionSpec) {
     return __awaiter(this, void 0, void 0, function* () {
-        //
-        // Download - a tool installer intimately knows how to get the tool (and construct urls)
-        //
-        version = semver.clean(version) || '';
-        let fileName = osPlat == 'win32'
-            ? `node-v${version}-win-${osArch}`
-            : `node-v${version}-${osPlat}-${osArch}`;
-        let urlFileName = osPlat == 'win32' ? `${fileName}.7z` : `${fileName}.tar.gz`;
-        let downloadUrl = `https://nodejs.org/dist/v${version}/${urlFileName}`;
-        let downloadPath;
-        try {
-            downloadPath = yield tc.downloadTool(downloadUrl);
+        // node offers a json list of versions
+        let dataFileName;
+        switch (osPlat) {
+            case 'linux':
+                dataFileName = `linux-${osArch}`;
+                break;
+            case 'darwin':
+                dataFileName = `osx-${osArch}-tar`;
+                break;
+            case 'win32':
+                dataFileName = `win-${osArch}-exe`;
+                break;
+            default:
+                throw new Error(`Unexpected OS '${osPlat}'`);
         }
-        catch (err) {
-            if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
-                return yield acquireNodeFromFallbackLocation(version);
+        let versions = [];
+        let dataUrl = 'https://nodejs.org/dist/index.json';
+        let httpClient = new hc.HttpClient('setup-node', [], {
+            allowRetries: true,
+            maxRetries: 3
+        });
+        let response = yield httpClient.getJson(dataUrl);
+        let nodeVersions = response.result || [];
+        nodeVersions.forEach((nodeVersion) => {
+            // ensure this version supports your os and platform
+            if (nodeVersion.files.indexOf(dataFileName) >= 0) {
+                versions.push(nodeVersion.version);
             }
-            throw err;
-        }
-        //
-        // Extract
-        //
-        let extPath;
-        if (osPlat == 'win32') {
-            let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-            extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
-        }
-        else {
-            extPath = yield tc.extractTar(downloadPath);
-        }
-        //
-        // Install into the local tool cache - node extracts with a root folder that matches the fileName downloaded
-        //
-        let toolRoot = path.join(extPath, fileName);
-        return yield tc.cacheDir(toolRoot, 'node', version);
+        });
+        // get the latest version that matches the version spec
+        let version = evaluateVersions(versions, versionSpec);
+        return version;
     });
 }
 // For non LTS versions of Node, the files we need (for Windows) are sometimes located
@@ -15211,12 +16016,15 @@ function run() {
             // Version is optional.  If supplied, install / use from the tool cache
             // If not supplied then task is still used to setup proxy, auth, etc...
             //
-            let version = core.getInput('version');
+            let version = core.getInput('node-version');
             if (!version) {
-                version = core.getInput('node-version');
+                version = core.getInput('version');
             }
+            console.log(`version: ${version}`);
             if (version) {
-                yield installer.getNode(version);
+                let token = core.getInput('token');
+                let stable = (core.getInput('stable') || 'true').toUpperCase() === 'TRUE';
+                yield installer.getNode(version, stable, token);
             }
             const registryUrl = core.getInput('registry-url');
             const alwaysAuth = core.getInput('always-auth');
@@ -15357,7 +16165,7 @@ function validateAuth(auth) {
 
 const path = __webpack_require__(622);
 const childProcess = __webpack_require__(129);
-const crossSpawn = __webpack_require__(20);
+const crossSpawn = __webpack_require__(108);
 const stripEof = __webpack_require__(768);
 const npmRunPath = __webpack_require__(621);
 const isStream = __webpack_require__(323);
diff --git a/package-lock.json b/package-lock.json
index a4b0fc814..e18fe61ec 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -1,6 +1,6 @@
 {
   "name": "setup-node",
-  "version": "1.0.0",
+  "version": "2.0.0",
   "lockfileVersion": 1,
   "requires": true,
   "dependencies": {
@@ -40,16 +40,26 @@
       "integrity": "sha512-J8KuFqVPr3p6U8W93DOXlXW6zFvrQAJANdS+vw0YhusLIq+bszW8zmK2Fh1C2kDPX8FMvwIl1OUcFgvJoXLbAg=="
     },
     "@actions/tool-cache": {
-      "version": "1.3.3",
-      "resolved": "https://registry.npmjs.org/@actions/tool-cache/-/tool-cache-1.3.3.tgz",
-      "integrity": "sha512-AFVyTLcIxusDVI1gMhbZW8m/On7YNJG+xYaxorV+qic+f7lO7h37aT2mfzxqAq7mwHxtP1YlVFNrXe9QDf/bPg==",
+      "version": "1.5.2",
+      "resolved": "https://registry.npmjs.org/@actions/tool-cache/-/tool-cache-1.5.2.tgz",
+      "integrity": "sha512-40A1St0GEo+QvHV1YRjStEoQcKKMaip+zNXPgGHcjYXCdZ7cl1LGlwOpsVVqwk+6ue/shFTS76KC1A02mVVCQA==",
       "requires": {
         "@actions/core": "^1.2.0",
         "@actions/exec": "^1.0.0",
-        "@actions/http-client": "^1.0.3",
+        "@actions/http-client": "^1.0.8",
         "@actions/io": "^1.0.1",
         "semver": "^6.1.0",
         "uuid": "^3.3.2"
+      },
+      "dependencies": {
+        "@actions/http-client": {
+          "version": "1.0.8",
+          "resolved": "https://registry.npmjs.org/@actions/http-client/-/http-client-1.0.8.tgz",
+          "integrity": "sha512-G4JjJ6f9Hb3Zvejj+ewLLKLf99ZC+9v+yCxoYf9vSyH+WkzPLB2LuUtRMGNkooMqdugGBFStIKXOuvH1W+EctA==",
+          "requires": {
+            "tunnel": "0.0.6"
+          }
+        }
       }
     },
     "@babel/code-frame": {
diff --git a/package.json b/package.json
index 0321d4979..cba3b3424 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "setup-node",
-  "version": "1.0.0",
+  "version": "2.0.0",
   "private": true,
   "description": "setup node action",
   "main": "lib/setup-node.js",
@@ -27,7 +27,7 @@
     "@actions/github": "^1.1.0",
     "@actions/http-client": "^1.0.6",
     "@actions/io": "^1.0.2",
-    "@actions/tool-cache": "^1.3.3",
+    "@actions/tool-cache": "^1.5.2",
     "semver": "^6.1.1"
   },
   "devDependencies": {
diff --git a/src/installer.ts b/src/installer.ts
index 1265ed850..86a3c75d1 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -6,6 +6,7 @@ import * as tc from '@actions/tool-cache';
 import * as os from 'os';
 import * as path from 'path';
 import * as semver from 'semver';
+import { Url } from 'url';
 
 let osPlat: string = os.platform();
 let osArch: string = translateArchToDistUrl(os.arch());
@@ -19,36 +20,64 @@ interface INodeVersion {
   files: string[];
 }
 
-export async function getNode(versionSpec: string) {
+interface INodeVersionInfo {
+  downloadUrl: string;
+  token: string | null;
+  resolvedVersion: string;
+  fileName: string;
+}
+
+export async function getNode(versionSpec: string, stable: boolean, token: string) {
   // check cache
+  let info: INodeVersionInfo | null = null;
   let toolPath: string;
   toolPath = tc.find('node', versionSpec);
 
   // If not found in cache, download
-  if (!toolPath) {
-    let version: string;
-    const c = semver.clean(versionSpec) || '';
-    // If explicit version
-    if (semver.valid(c) != null) {
-      // version to download
-      version = versionSpec;
-    } else {
-      // query nodejs.org for a matching version
-      version = await queryLatestMatch(versionSpec);
-      if (!version) {
-        throw new Error(
-          `Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`
-        );
+  if (toolPath) {
+    console.log(`Found in cache @ ${toolPath}`);
+  } else {
+    console.log(`Attempting to download ${versionSpec}...`)
+    let info = await getInfoFromManifest(versionSpec, stable, token);
+    if (!info) {
+      console.log('Not found in manifest.  Falling back to download directly from Node')
+      info = await getInfoFromDist(versionSpec);
+    }   
+  
+    if (!info) {
+      throw new Error(
+        `Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`
+      );
+    }
+
+    console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
+
+    let downloadPath = ""
+    try {
+      downloadPath = await tc.downloadTool(info.downloadUrl, undefined, token);
+    } catch (err) {
+      if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
+        return await acquireNodeFromFallbackLocation(info.resolvedVersion);
       }
 
-      // check cache
-      toolPath = tc.find('node', version);
+      throw err;
     }
 
-    if (!toolPath) {
-      // download, extract, cache
-      toolPath = await acquireNode(version);
+    //
+    // Extract
+    //
+    let extPath: string;
+    if (osPlat == 'win32') {
+      let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
+      extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
+    } else {
+      extPath = await tc.extractTar(downloadPath);
     }
+
+    //
+    // Install into the local tool cache - node extracts with a root folder that matches the fileName downloaded
+    //
+    toolPath = await tc.cacheDir(extPath, 'node', info.resolvedVersion);    
   }
 
   //
@@ -65,41 +94,56 @@ export async function getNode(versionSpec: string) {
   core.addPath(toolPath);
 }
 
-async function queryLatestMatch(versionSpec: string): Promise<string> {
-  // node offers a json list of versions
-  let dataFileName: string;
-  switch (osPlat) {
-    case 'linux':
-      dataFileName = `linux-${osArch}`;
-      break;
-    case 'darwin':
-      dataFileName = `osx-${osArch}-tar`;
-      break;
-    case 'win32':
-      dataFileName = `win-${osArch}-exe`;
-      break;
-    default:
-      throw new Error(`Unexpected OS '${osPlat}'`);
+async function getInfoFromManifest(versionSpec: string, stable: boolean, token: string): Promise<INodeVersionInfo | null> {
+  let info: INodeVersionInfo | null = null;
+  const releases = await tc.getManifestFromRepo("actions", "node-versions", token)
+  console.log(`matching ${versionSpec}...`)
+  const rel = await tc.findFromManifest(versionSpec, stable, releases);
+  
+  if (rel && rel.files.length > 0) {
+    info = <INodeVersionInfo>{};
+    info.resolvedVersion = rel.version;
+    info.downloadUrl = rel.files[0].download_url;
+    info.fileName = rel.files[0].filename;
+    info.token = token;
   }
 
-  let versions: string[] = [];
-  let dataUrl = 'https://nodejs.org/dist/index.json';
-  let httpClient = new hc.HttpClient('setup-node', [], {
-    allowRetries: true,
-    maxRetries: 3
-  });
-  let response = await httpClient.getJson<INodeVersion[]>(dataUrl);
-  let nodeVersions = response.result || [];
-  nodeVersions.forEach((nodeVersion: INodeVersion) => {
-    // ensure this version supports your os and platform
-    if (nodeVersion.files.indexOf(dataFileName) >= 0) {
-      versions.push(nodeVersion.version);
+  return info;
+}
+
+async function getInfoFromDist(versionSpec: string): Promise<INodeVersionInfo | null> {
+  let info: INodeVersionInfo | null = null;
+  let version: string;
+  
+  // If explicit version don't query
+  if (semver.clean(versionSpec) != null) {
+    // version to download
+    version = versionSpec;
+  } else {
+    // query nodejs.org for a matching version
+    version = await queryDistForMatch(versionSpec);
+    if (!version) {
+      return null;
     }
-  });
+  }
 
-  // get the latest version that matches the version spec
-  let version: string = evaluateVersions(versions, versionSpec);
-  return version;
+  //
+  // Download - a tool installer intimately knows how to get the tool (and construct urls)
+  //
+  version = semver.clean(version) || '';
+  let fileName: string =
+    osPlat == 'win32'
+      ? `node-v${version}-win-${osArch}`
+      : `node-v${version}-${osPlat}-${osArch}`;
+  let urlFileName: string =
+    osPlat == 'win32' ? `${fileName}.7z` : `${fileName}.tar.gz`;
+  let url = `https://nodejs.org/dist/v${version}/${urlFileName}`;
+
+  return <INodeVersionInfo>{
+    downloadUrl: url,
+    resolvedVersion: version,
+    fileName: fileName
+  }
 }
 
 // TODO - should we just export this from @actions/tool-cache? Lifted directly from there
@@ -130,47 +174,41 @@ function evaluateVersions(versions: string[], versionSpec: string): string {
   return version;
 }
 
-async function acquireNode(version: string): Promise<string> {
-  //
-  // Download - a tool installer intimately knows how to get the tool (and construct urls)
-  //
-  version = semver.clean(version) || '';
-  let fileName: string =
-    osPlat == 'win32'
-      ? `node-v${version}-win-${osArch}`
-      : `node-v${version}-${osPlat}-${osArch}`;
-  let urlFileName: string =
-    osPlat == 'win32' ? `${fileName}.7z` : `${fileName}.tar.gz`;
-  let downloadUrl = `https://nodejs.org/dist/v${version}/${urlFileName}`;
-
-  let downloadPath: string;
-
-  try {
-    downloadPath = await tc.downloadTool(downloadUrl);
-  } catch (err) {
-    if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
-      return await acquireNodeFromFallbackLocation(version);
-    }
-
-    throw err;
+async function queryDistForMatch(versionSpec: string): Promise<string> {
+  // node offers a json list of versions
+  let dataFileName: string;
+  switch (osPlat) {
+    case 'linux':
+      dataFileName = `linux-${osArch}`;
+      break;
+    case 'darwin':
+      dataFileName = `osx-${osArch}-tar`;
+      break;
+    case 'win32':
+      dataFileName = `win-${osArch}-exe`;
+      break;
+    default:
+      throw new Error(`Unexpected OS '${osPlat}'`);
   }
 
-  //
-  // Extract
-  //
-  let extPath: string;
-  if (osPlat == 'win32') {
-    let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-    extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
-  } else {
-    extPath = await tc.extractTar(downloadPath);
-  }
+  let versions: string[] = [];
+  let dataUrl = 'https://nodejs.org/dist/index.json';
+  let httpClient = new hc.HttpClient('setup-node', [], {
+    allowRetries: true,
+    maxRetries: 3
+  });
+  let response = await httpClient.getJson<INodeVersion[]>(dataUrl);
+  let nodeVersions = response.result || [];
+  nodeVersions.forEach((nodeVersion: INodeVersion) => {
+    // ensure this version supports your os and platform
+    if (nodeVersion.files.indexOf(dataFileName) >= 0) {
+      versions.push(nodeVersion.version);
+    }
+  });
 
-  //
-  // Install into the local tool cache - node extracts with a root folder that matches the fileName downloaded
-  //
-  let toolRoot = path.join(extPath, fileName);
-  return await tc.cacheDir(toolRoot, 'node', version);
+  // get the latest version that matches the version spec
+  let version: string = evaluateVersions(versions, versionSpec);
+  return version;
 }
 
 // For non LTS versions of Node, the files we need (for Windows) are sometimes located
diff --git a/src/setup-node.ts b/src/setup-node.ts
index 8f61c6fc4..8c7e9809d 100644
--- a/src/setup-node.ts
+++ b/src/setup-node.ts
@@ -9,12 +9,16 @@ async function run() {
     // Version is optional.  If supplied, install / use from the tool cache
     // If not supplied then task is still used to setup proxy, auth, etc...
     //
-    let version = core.getInput('version');
+    let version = core.getInput('node-version');
     if (!version) {
-      version = core.getInput('node-version');
+      version = core.getInput('version');  
     }
+
+    console.log(`version: ${version}`);
     if (version) {
-      await installer.getNode(version);
+      let token = core.getInput('token');
+      let stable = (core.getInput('stable') || 'true').toUpperCase() === 'TRUE';
+      await installer.getNode(version, stable, token);
     }
 
     const registryUrl: string = core.getInput('registry-url');
diff --git a/validate/test.sh b/validate/test.sh
new file mode 100755
index 000000000..d68687e95
--- /dev/null
+++ b/validate/test.sh
@@ -0,0 +1,22 @@
+
+#/bin/bash
+
+set -e
+
+rm -rf ./temp
+rm -rf ./node
+
+# uncomment to use charles proxy or other debugging proxy
+# export NODE_TLS_REJECT_UNAUTHORIZED=0
+# export https_proxy=http://127.0.0.1:8888
+
+export RUNNER_TOOL_CACHE=$(pwd)
+export RUNNER_TEMP="${RUNNER_TOOL_CACHE}/temp"
+export INPUT_STABLE=true
+export INPUT_VERSION="12.x"
+# export your PAT with repo scope before running
+export INPUT_TOKEN=$GITHUB_TOKEN
+
+echo "Getting ${INPUT_VERSION} ($INPUT_STABLE) with ${INPUT_TOKEN}..."
+
+node ../dist/index.js

From 8885b7194ea574b4f0cc7de198e798c1879a0241 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 09:51:47 -0400
Subject: [PATCH 02/30] updated tests

---
 .vscode/launch.json                           |   21 +
 __tests__/__snapshots__/authutil.test.ts.snap |   10 +-
 __tests__/authutil.test.ts                    |   70 +-
 __tests__/data/node-dist-index.json           |  770 ++++
 __tests__/data/versions-manifest.json         |  152 +
 __tests__/installer.test.ts                   |  435 +-
 dist/index.js                                 |  178 +-
 package-lock.json                             | 3971 ++++++++++++++---
 package.json                                  |    6 +-
 src/installer.ts                              |   97 +-
 src/main.ts                                   |   41 +
 src/setup-node.ts                             |   42 +-
 tsconfig.json                                 |    1 +
 13 files changed, 4815 insertions(+), 979 deletions(-)
 create mode 100644 .vscode/launch.json
 create mode 100644 __tests__/data/node-dist-index.json
 create mode 100644 __tests__/data/versions-manifest.json
 create mode 100644 src/main.ts

diff --git a/.vscode/launch.json b/.vscode/launch.json
new file mode 100644
index 000000000..01362e341
--- /dev/null
+++ b/.vscode/launch.json
@@ -0,0 +1,21 @@
+{
+    // Use IntelliSense to learn about possible attributes.
+    // Hover to view descriptions of existing attributes.
+    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
+    "version": "0.2.0",
+    "configurations": [
+        {
+            "name": "Debug Jest Tests on Nix",
+            "type": "node",
+            "request": "launch",
+            "runtimeArgs": [
+              "--inspect-brk",
+              "${workspaceRoot}/node_modules/.bin/jest",
+              "--runInBand"
+            ],
+            "console": "integratedTerminal",
+            "internalConsoleOptions": "neverOpen",
+            "port": 9229
+          }        
+    ]
+}
\ No newline at end of file
diff --git a/__tests__/__snapshots__/authutil.test.ts.snap b/__tests__/__snapshots__/authutil.test.ts.snap
index c142cf4aa..14bee8aa2 100644
--- a/__tests__/__snapshots__/authutil.test.ts.snap
+++ b/__tests__/__snapshots__/authutil.test.ts.snap
@@ -1,30 +1,30 @@
 // Jest Snapshot v1, https://goo.gl/fbAQLP
 
-exports[`installer tests Appends trailing slash to registry 1`] = `
+exports[`authutil tests Appends trailing slash to registry 1`] = `
 "//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
 registry=https://registry.npmjs.org/
 always-auth=false"
 `;
 
-exports[`installer tests Automatically configures GPR scope 1`] = `
+exports[`authutil tests Automatically configures GPR scope 1`] = `
 "npm.pkg.github.com/:_authToken=\${NODE_AUTH_TOKEN}
 @ownername:registry=npm.pkg.github.com/
 always-auth=false"
 `;
 
-exports[`installer tests Configures scoped npm registries 1`] = `
+exports[`authutil tests Configures scoped npm registries 1`] = `
 "//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
 @myscope:registry=https://registry.npmjs.org/
 always-auth=false"
 `;
 
-exports[`installer tests Sets up npmrc for always-auth true 1`] = `
+exports[`authutil tests Sets up npmrc for always-auth true 1`] = `
 "//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
 registry=https://registry.npmjs.org/
 always-auth=true"
 `;
 
-exports[`installer tests Sets up npmrc for npmjs 1`] = `
+exports[`authutil tests Sets up npmrc for npmjs 1`] = `
 "//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
 registry=https://registry.npmjs.org/
 always-auth=false"
diff --git a/__tests__/authutil.test.ts b/__tests__/authutil.test.ts
index 9f46b510c..373cbec5d 100644
--- a/__tests__/authutil.test.ts
+++ b/__tests__/authutil.test.ts
@@ -1,22 +1,25 @@
-import * as io from '@actions/io';
 import * as fs from 'fs';
 import * as path from 'path';
+import * as core from '@actions/core';
+import * as io from '@actions/io';
 import * as auth from '../src/authutil';
 
 let rcFile: string;
 
-describe('installer tests', () => {
+describe('authutil tests', () => {
+  const _runnerDir = path.join(__dirname, 'runner');
+
+  let cnSpy: jest.SpyInstance;
+  let logSpy: jest.SpyInstance;
+  let dbgSpy: jest.SpyInstance;
+
   beforeAll(async () => {
-    const tempDir = path.join(
-      __dirname,
-      'runner',
-      path.join(
-        Math.random()
-          .toString(36)
-          .substring(7)
-      ),
-      'temp'
+    const randPath = path.join(
+      Math.random()
+        .toString(36)
+        .substring(7)
     );
+    const tempDir = path.join(_runnerDir, randPath, 'temp');
     await io.rmRF(tempDir);
     await io.mkdirP(tempDir);
     process.env['GITHUB_REPOSITORY'] = 'OwnerName/repo';
@@ -24,23 +27,48 @@ describe('installer tests', () => {
     rcFile = path.join(tempDir, '.npmrc');
   }, 100000);
 
-  beforeEach(() => {
-    if (fs.existsSync(rcFile)) {
-      fs.unlinkSync(rcFile);
-    }
+  beforeEach(async () => {
+    await io.rmRF(rcFile);
+    // if (fs.existsSync(rcFile)) {
+    //   fs.unlinkSync(rcFile);
+    // }
     process.env['INPUT_SCOPE'] = '';
-  });
+
+    // writes
+    cnSpy = jest.spyOn(process.stdout, 'write');
+    logSpy = jest.spyOn(console, 'log');
+    dbgSpy = jest.spyOn(core, 'debug');
+    cnSpy.mockImplementation(line => {
+      // uncomment to debug
+      // process.stderr.write('write:' + line + '\n');
+    });
+    logSpy.mockImplementation(line => {
+      // uncomment to debug
+      // process.stderr.write('log:' + line + '\n');
+    });
+    dbgSpy.mockImplementation(msg => {
+      // uncomment to see debug output
+      // process.stderr.write(msg + '\n');
+    });
+  }, 100000);
+
+  afterAll(async () => {
+    if (_runnerDir) {
+      await io.rmRF(_runnerDir);
+    }
+  }, 100000);
 
   it('Sets up npmrc for npmjs', async () => {
     await auth.configAuthentication('https://registry.npmjs.org/', 'false');
-    expect(fs.existsSync(rcFile)).toBe(true);
+
+    expect(fs.statSync(rcFile)).toBeDefined();
     expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
   });
 
   it('Appends trailing slash to registry', async () => {
     await auth.configAuthentication('https://registry.npmjs.org', 'false');
 
-    expect(fs.existsSync(rcFile)).toBe(true);
+    expect(fs.statSync(rcFile)).toBeDefined();
     expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
   });
 
@@ -48,20 +76,20 @@ describe('installer tests', () => {
     process.env['INPUT_SCOPE'] = 'myScope';
     await auth.configAuthentication('https://registry.npmjs.org', 'false');
 
-    expect(fs.existsSync(rcFile)).toBe(true);
+    expect(fs.statSync(rcFile)).toBeDefined();
     expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
   });
 
   it('Automatically configures GPR scope', async () => {
     await auth.configAuthentication('npm.pkg.github.com', 'false');
 
-    expect(fs.existsSync(rcFile)).toBe(true);
+    expect(fs.statSync(rcFile)).toBeDefined();
     expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
   });
 
   it('Sets up npmrc for always-auth true', async () => {
     await auth.configAuthentication('https://registry.npmjs.org/', 'true');
-    expect(fs.existsSync(rcFile)).toBe(true);
+    expect(fs.statSync(rcFile)).toBeDefined();
     expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
   });
 });
diff --git a/__tests__/data/node-dist-index.json b/__tests__/data/node-dist-index.json
new file mode 100644
index 000000000..09cca7ca4
--- /dev/null
+++ b/__tests__/data/node-dist-index.json
@@ -0,0 +1,770 @@
+[
+    {
+        "version": "v14.1.0",
+        "date": "2020-04-29",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.14.4",
+        "v8": "8.1.307.31",
+        "uv": "1.37.0",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1g",
+        "modules": "83",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v14.0.0",
+        "date": "2020-04-21",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.14.4",
+        "v8": "8.1.307.30",
+        "uv": "1.37.0",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1f",
+        "modules": "83",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v13.14.0",
+        "date": "2020-04-28",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.14.4",
+        "v8": "7.9.317.25",
+        "uv": "1.37.0",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1g",
+        "modules": "79",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v13.13.0",
+        "date": "2020-04-14",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.14.4",
+        "v8": "7.9.317.25",
+        "uv": "1.35.0",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1f",
+        "modules": "79",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v12.16.3",
+        "date": "2020-04-28",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.14.4",
+        "v8": "7.8.279.23",
+        "uv": "1.34.2",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1g",
+        "modules": "72",
+        "lts": "Erbium",
+        "security": false
+    },
+    {
+        "version": "v12.16.2",
+        "date": "2020-04-08",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.14.4",
+        "v8": "7.8.279.23",
+        "uv": "1.34.2",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1e",
+        "modules": "72",
+        "lts": "Erbium",
+        "security": false
+    },
+    {
+        "version": "v12.1.0",
+        "date": "2019-04-29",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.9.0",
+        "v8": "7.4.288.21",
+        "uv": "1.28.0",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1b",
+        "modules": "72",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v11.15.0",
+        "date": "2019-04-30",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.7.0",
+        "v8": "7.0.276.38",
+        "uv": "1.27.0",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1b",
+        "modules": "67",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v10.20.1",
+        "date": "2020-04-10",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.14.4",
+        "v8": "6.8.275.32",
+        "uv": "1.34.2",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1e",
+        "modules": "64",
+        "lts": "Dubnium",
+        "security": false
+    },
+    {
+        "version": "v10.20.0",
+        "date": "2020-03-24",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.14.4",
+        "v8": "6.8.275.32",
+        "uv": "1.34.2",
+        "zlib": "1.2.11",
+        "openssl": "1.1.1e",
+        "modules": "64",
+        "lts": "Dubnium",
+        "security": false
+    },
+    {
+        "version": "v9.11.2",
+        "date": "2018-06-12",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "5.6.0",
+        "v8": "6.2.414.46",
+        "uv": "1.19.2",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2o",
+        "modules": "59",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v9.11.1",
+        "date": "2018-04-05",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "5.6.0",
+        "v8": "6.2.414.46",
+        "uv": "1.19.2",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2o",
+        "modules": "59",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v8.17.0",
+        "date": "2019-12-17",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.13.4",
+        "v8": "6.2.414.78",
+        "uv": "1.23.2",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2s",
+        "modules": "57",
+        "lts": "Carbon",
+        "security": true
+    },
+    {
+        "version": "v8.16.2",
+        "date": "2019-10-08",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "6.4.1",
+        "v8": "6.2.414.78",
+        "uv": "1.23.2",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2s",
+        "modules": "57",
+        "lts": "Carbon",
+        "security": false
+    },
+    {
+        "version": "v7.10.1",
+        "date": "2017-07-11",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "4.2.0",
+        "v8": "5.5.372.43",
+        "uv": "1.11.0",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2k",
+        "modules": "51",
+        "lts": false,
+        "security": true
+    },
+    {
+        "version": "v7.10.0",
+        "date": "2017-05-02",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "4.2.0",
+        "v8": "5.5.372.43",
+        "uv": "1.11.0",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2k",
+        "modules": "51",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v6.17.1",
+        "date": "2019-04-03",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "3.10.10",
+        "v8": "5.1.281.111",
+        "uv": "1.16.1",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2r",
+        "modules": "48",
+        "lts": "Boron",
+        "security": false
+    },
+    {
+        "version": "v6.17.0",
+        "date": "2019-02-28",
+        "files": [
+            "aix-ppc64",
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-s390x",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "3.10.10",
+        "v8": "5.1.281.111",
+        "uv": "1.16.1",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2r",
+        "modules": "48",
+        "lts": "Boron",
+        "security": true
+    },
+    {
+        "version": "v5.12.0",
+        "date": "2016-06-23",
+        "files": [
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x86-exe",
+            "win-x86-msi"
+        ],
+        "npm": "3.8.6",
+        "v8": "4.6.85.32",
+        "uv": "1.8.0",
+        "zlib": "1.2.8",
+        "openssl": "1.0.2h",
+        "modules": "47",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v4.9.1",
+        "date": "2018-03-29",
+        "files": [
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "2.15.11",
+        "v8": "4.5.103.53",
+        "uv": "1.9.1",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2o",
+        "modules": "46",
+        "lts": "Argon",
+        "security": false
+    },
+    {
+        "version": "v4.9.0",
+        "date": "2018-03-28",
+        "files": [
+            "headers",
+            "linux-arm64",
+            "linux-armv6l",
+            "linux-armv7l",
+            "linux-ppc64le",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-7z",
+            "win-x64-exe",
+            "win-x64-msi",
+            "win-x64-zip",
+            "win-x86-7z",
+            "win-x86-exe",
+            "win-x86-msi",
+            "win-x86-zip"
+        ],
+        "npm": "2.15.11",
+        "v8": "4.5.103.53",
+        "uv": "1.9.1",
+        "zlib": "1.2.11",
+        "openssl": "1.0.2o",
+        "modules": "46",
+        "lts": "Argon",
+        "security": true
+    },
+    {
+        "version": "v0.12.18",
+        "date": "2017-02-22",
+        "files": [
+            "headers",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "osx-x86-tar",
+            "src",
+            "sunos-x86",
+            "win-x64-exe",
+            "win-x86-exe",
+            "win-x86-msi"
+        ],
+        "npm": "2.15.11",
+        "v8": "3.28.71.20",
+        "uv": "1.6.1",
+        "zlib": "1.2.8",
+        "openssl": "1.0.1u",
+        "modules": "14",
+        "lts": false,
+        "security": false
+    },
+    {
+        "version": "v0.12.17",
+        "date": "2016-10-18",
+        "files": [
+            "headers",
+            "linux-x64",
+            "linux-x86",
+            "osx-x64-pkg",
+            "osx-x64-tar",
+            "osx-x86-tar",
+            "src",
+            "sunos-x64",
+            "sunos-x86",
+            "win-x64-exe",
+            "win-x86-exe",
+            "win-x86-msi"
+        ],
+        "npm": "2.15.1",
+        "v8": "3.28.71.19",
+        "uv": "1.6.1",
+        "zlib": "1.2.8",
+        "openssl": "1.0.1u",
+        "modules": "14",
+        "lts": false,
+        "security": true
+    }
+]
\ No newline at end of file
diff --git a/__tests__/data/versions-manifest.json b/__tests__/data/versions-manifest.json
new file mode 100644
index 000000000..d313b16bb
--- /dev/null
+++ b/__tests__/data/versions-manifest.json
@@ -0,0 +1,152 @@
+[
+    {
+      "version": "14.0.0",
+      "stable": true,
+      "release_url": "https://github.com/actions/node-versions/releases/tag/14.0.0-20200423.30",
+      "files": [
+        {
+          "filename": "node-14.0.0-darwin-x64.tar.gz",
+          "arch": "x64",
+          "platform": "darwin",
+          "download_url": "https://github.com/actions/node-versions/releases/download/14.0.0-20200423.30/node-14.0.0-darwin-x64.tar.gz"
+        },
+        {
+          "filename": "node-14.0.0-linux-x64.tar.gz",
+          "arch": "x64",
+          "platform": "linux",
+          "download_url": "https://github.com/actions/node-versions/releases/download/14.0.0-20200423.30/node-14.0.0-linux-x64.tar.gz"
+        },
+        {
+          "filename": "node-14.0.0-win32-x64.zip",
+          "arch": "x64",
+          "platform": "win32",
+          "download_url": "https://github.com/actions/node-versions/releases/download/14.0.0-20200423.30/node-14.0.0-win32-x64.zip"
+        }
+      ]
+    },
+    {
+      "version": "13.13.0",
+      "stable": true,
+      "release_url": "https://github.com/actions/node-versions/releases/tag/13.13.0-20200423.29",
+      "files": [
+        {
+          "filename": "node-13.13.0-darwin-x64.tar.gz",
+          "arch": "x64",
+          "platform": "darwin",
+          "download_url": "https://github.com/actions/node-versions/releases/download/13.13.0-20200423.29/node-13.13.0-darwin-x64.tar.gz"
+        },
+        {
+          "filename": "node-13.13.0-linux-x64.tar.gz",
+          "arch": "x64",
+          "platform": "linux",
+          "download_url": "https://github.com/actions/node-versions/releases/download/13.13.0-20200423.29/node-13.13.0-linux-x64.tar.gz"
+        },
+        {
+          "filename": "node-13.13.0-win32-x64.zip",
+          "arch": "x64",
+          "platform": "win32",
+          "download_url": "https://github.com/actions/node-versions/releases/download/13.13.0-20200423.29/node-13.13.0-win32-x64.zip"
+        }
+      ]
+    },
+    {
+      "version": "12.16.2",
+      "stable": true,
+      "release_url": "https://github.com/actions/node-versions/releases/tag/12.16.2-20200423.28",
+      "files": [
+        {
+          "filename": "node-12.16.2-darwin-x64.tar.gz",
+          "arch": "x64",
+          "platform": "darwin",
+          "download_url": "https://github.com/actions/node-versions/releases/download/12.16.2-20200423.28/node-12.16.2-darwin-x64.tar.gz"
+        },
+        {
+          "filename": "node-12.16.2-linux-x64.tar.gz",
+          "arch": "x64",
+          "platform": "linux",
+          "download_url": "https://github.com/actions/node-versions/releases/download/12.16.2-20200423.28/node-12.16.2-linux-x64.tar.gz"
+        },
+        {
+          "filename": "node-12.16.2-win32-x64.zip",
+          "arch": "x64",
+          "platform": "win32",
+          "download_url": "https://github.com/actions/node-versions/releases/download/12.16.2-20200423.28/node-12.16.2-win32-x64.zip"
+        }
+      ]
+    },
+    {
+      "version": "10.20.1",
+      "stable": true,
+      "release_url": "https://github.com/actions/node-versions/releases/tag/10.20.1-20200423.27",
+      "files": [
+        {
+          "filename": "node-10.20.1-darwin-x64.tar.gz",
+          "arch": "x64",
+          "platform": "darwin",
+          "download_url": "https://github.com/actions/node-versions/releases/download/10.20.1-20200423.27/node-10.20.1-darwin-x64.tar.gz"
+        },
+        {
+          "filename": "node-10.20.1-linux-x64.tar.gz",
+          "arch": "x64",
+          "platform": "linux",
+          "download_url": "https://github.com/actions/node-versions/releases/download/10.20.1-20200423.27/node-10.20.1-linux-x64.tar.gz"
+        },
+        {
+          "filename": "node-10.20.1-win32-x64.zip",
+          "arch": "x64",
+          "platform": "win32",
+          "download_url": "https://github.com/actions/node-versions/releases/download/10.20.1-20200423.27/node-10.20.1-win32-x64.zip"
+        }
+      ]
+    },
+    {
+      "version": "8.17.0",
+      "stable": true,
+      "release_url": "https://github.com/actions/node-versions/releases/tag/8.17.0-20200423.26",
+      "files": [
+        {
+          "filename": "node-8.17.0-darwin-x64.tar.gz",
+          "arch": "x64",
+          "platform": "darwin",
+          "download_url": "https://github.com/actions/node-versions/releases/download/8.17.0-20200423.26/node-8.17.0-darwin-x64.tar.gz"
+        },
+        {
+          "filename": "node-8.17.0-linux-x64.tar.gz",
+          "arch": "x64",
+          "platform": "linux",
+          "download_url": "https://github.com/actions/node-versions/releases/download/8.17.0-20200423.26/node-8.17.0-linux-x64.tar.gz"
+        },
+        {
+          "filename": "node-8.17.0-win32-x64.zip",
+          "arch": "x64",
+          "platform": "win32",
+          "download_url": "https://github.com/actions/node-versions/releases/download/8.17.0-20200423.26/node-8.17.0-win32-x64.zip"
+        }
+      ]
+    },
+    {
+      "version": "6.17.1",
+      "stable": true,
+      "release_url": "https://github.com/actions/node-versions/releases/tag/6.17.1-20200423.25",
+      "files": [
+        {
+          "filename": "node-6.17.1-darwin-x64.tar.gz",
+          "arch": "x64",
+          "platform": "darwin",
+          "download_url": "https://github.com/actions/node-versions/releases/download/6.17.1-20200423.25/node-6.17.1-darwin-x64.tar.gz"
+        },
+        {
+          "filename": "node-6.17.1-linux-x64.tar.gz",
+          "arch": "x64",
+          "platform": "linux",
+          "download_url": "https://github.com/actions/node-versions/releases/download/6.17.1-20200423.25/node-6.17.1-linux-x64.tar.gz"
+        },
+        {
+          "filename": "node-6.17.1-win32-x64.zip",
+          "arch": "x64",
+          "platform": "win32",
+          "download_url": "https://github.com/actions/node-versions/releases/download/6.17.1-20200423.25/node-6.17.1-win32-x64.zip"
+        }
+      ]
+    }
+  ]
\ No newline at end of file
diff --git a/__tests__/installer.test.ts b/__tests__/installer.test.ts
index 7f76aebc7..52b675e26 100644
--- a/__tests__/installer.test.ts
+++ b/__tests__/installer.test.ts
@@ -1,123 +1,336 @@
+import * as core from '@actions/core';
 import * as io from '@actions/io';
 import * as tc from '@actions/tool-cache';
-import * as fs from 'fs';
-import * as os from 'os';
-import * as path from 'path';
-import * as installer from '../src/installer';
-
-const isWindows = process.platform === 'win32';
-let toolDir: string;
-
-describe('installer tests', () => {
-  beforeAll(async () => {
-    toolDir = path.join(
-      __dirname,
-      'runner',
-      path.join(
-        Math.random()
-          .toString(36)
-          .substring(7)
-      ),
-      'tools'
+import fs from 'fs';
+import cp from 'child_process';
+import osm = require('os');
+import path from 'path';
+import * as main from '../src/main';
+import * as im from '../src/installer';
+import * as auth from '../src/authutil';
+
+let nodeTestManifest = require('./data/versions-manifest.json');
+let nodeTestDist = require('./data/node-dist-index.json');
+
+// let matchers = require('../matchers.json');
+// let matcherPattern = matchers.problemMatcher[0].pattern[0];
+// let matcherRegExp = new RegExp(matcherPattern.regexp);
+
+describe('setup-node', () => {
+  let inputs = {} as any;
+  let os = {} as any;
+
+  let inSpy: jest.SpyInstance;
+  let findSpy: jest.SpyInstance;
+  let cnSpy: jest.SpyInstance;
+  let logSpy: jest.SpyInstance;
+  let getManifestSpy: jest.SpyInstance;
+  let getDistSpy: jest.SpyInstance;
+  let platSpy: jest.SpyInstance;
+  let archSpy: jest.SpyInstance;
+  let dlSpy: jest.SpyInstance;
+  let exSpy: jest.SpyInstance;
+  let cacheSpy: jest.SpyInstance;
+  let dbgSpy: jest.SpyInstance;
+  let whichSpy: jest.SpyInstance;
+  let existsSpy: jest.SpyInstance;
+  let mkdirpSpy: jest.SpyInstance;
+  let execSpy: jest.SpyInstance;
+  let authSpy: jest.SpyInstance;
+
+  beforeEach(() => {
+    // @actions/core
+    inputs = {};
+    inSpy = jest.spyOn(core, 'getInput');
+    inSpy.mockImplementation(name => inputs[name]);
+
+    // node
+    os = {};
+    platSpy = jest.spyOn(osm, 'platform');
+    platSpy.mockImplementation(() => os['platform']);
+    archSpy = jest.spyOn(osm, 'arch');
+    archSpy.mockImplementation(() => os['arch']);
+    execSpy = jest.spyOn(cp, 'execSync');
+
+    // @actions/tool-cache
+    findSpy = jest.spyOn(tc, 'find');
+    dlSpy = jest.spyOn(tc, 'downloadTool');
+    exSpy = jest.spyOn(tc, 'extractTar');
+    cacheSpy = jest.spyOn(tc, 'cacheDir');
+    getManifestSpy = jest.spyOn(tc, 'getManifestFromRepo');
+    getDistSpy = jest.spyOn(im, 'getVersionsFromDist');
+
+    // io
+    whichSpy = jest.spyOn(io, 'which');
+    existsSpy = jest.spyOn(fs, 'existsSync');
+    mkdirpSpy = jest.spyOn(io, 'mkdirP');
+
+    // disable authentication portion for installer tests
+    authSpy = jest.spyOn(auth, 'configAuthentication');
+    authSpy.mockImplementation(() => {});
+
+    // gets
+    getManifestSpy.mockImplementation(
+      () => <tc.IToolRelease[]>nodeTestManifest
+    );
+    getDistSpy.mockImplementation(() => <im.INodeVersion>nodeTestDist);
+
+    // writes
+    cnSpy = jest.spyOn(process.stdout, 'write');
+    logSpy = jest.spyOn(console, 'log');
+    dbgSpy = jest.spyOn(core, 'debug');
+    cnSpy.mockImplementation(line => {
+      // uncomment to debug
+      // process.stderr.write('write:' + line + '\n');
+    });
+    logSpy.mockImplementation(line => {
+      // uncomment to debug
+      // process.stderr.write('log:' + line + '\n');
+    });
+    dbgSpy.mockImplementation(msg => {
+      // uncomment to see debug output
+      // process.stderr.write(msg + '\n');
+    });
+  });
+
+  afterEach(() => {
+    jest.resetAllMocks();
+    jest.clearAllMocks();
+    //jest.restoreAllMocks();
+  });
+
+  afterAll(async () => {}, 100000);
+
+  //--------------------------------------------------
+  // Manifest find tests
+  //--------------------------------------------------
+  it('can mock manifest versions', async () => {
+    let versions: tc.IToolRelease[] | null = await tc.getManifestFromRepo(
+      'actions',
+      'node-versions',
+      'mocktoken'
+    );
+    expect(versions).toBeDefined();
+    expect(versions?.length).toBe(6);
+  });
+
+  it('can mock dist versions', async () => {
+    let versions: im.INodeVersion[] = await im.getVersionsFromDist();
+    expect(versions).toBeDefined();
+    expect(versions?.length).toBe(23);
+  });
+
+  it('can find 12.16.2 from manifest on osx', async () => {
+    os.platform = 'darwin';
+    os.arch = 'x64';
+    let versions: tc.IToolRelease[] | null = await tc.getManifestFromRepo(
+      'actions',
+      'node-versions',
+      'mocktoken'
+    );
+    expect(versions).toBeDefined();
+    let match = await tc.findFromManifest('12.16.2', true, versions);
+    expect(match).toBeDefined();
+    expect(match?.version).toBe('12.16.2');
+  });
+
+  it('can find 12 from manifest on linux', async () => {
+    os.platform = 'linux';
+    os.arch = 'x64';
+    let versions: tc.IToolRelease[] | null = await tc.getManifestFromRepo(
+      'actions',
+      'node-versions',
+      'mocktoken'
     );
-    const tempDir = path.join(
-      __dirname,
-      'runner',
-      path.join(
-        Math.random()
-          .toString(36)
-          .substring(7)
-      ),
-      'temp'
+    expect(versions).toBeDefined();
+    let match = await tc.findFromManifest('12.16.2', true, versions);
+    expect(match).toBeDefined();
+    expect(match?.version).toBe('12.16.2');
+  });
+
+  it('can find 10 from manifest on windows', async () => {
+    os.platform = 'win32';
+    os.arch = 'x64';
+    let versions: tc.IToolRelease[] | null = await tc.getManifestFromRepo(
+      'actions',
+      'node-versions',
+      'mocktoken'
     );
-    await io.rmRF(toolDir);
-    await io.rmRF(tempDir);
-    process.env['RUNNER_TOOL_CACHE'] = toolDir;
-    process.env['RUNNER_TEMP'] = tempDir;
-  }, 100000);
-
-  it('Acquires version of node if no matching version is installed', async () => {
-    await installer.getNode('10.16.0');
-    const nodeDir = path.join(toolDir, 'node', '10.16.0', os.arch());
-
-    expect(fs.existsSync(`${nodeDir}.complete`)).toBe(true);
-    if (isWindows) {
-      expect(fs.existsSync(path.join(nodeDir, 'node.exe'))).toBe(true);
-    } else {
-      expect(fs.existsSync(path.join(nodeDir, 'bin', 'node'))).toBe(true);
-    }
-  }, 100000);
-
-  if (isWindows) {
-    it('Falls back to backup location if first one doesnt contain correct version', async () => {
-      await installer.getNode('5.10.1');
-      const nodeDir = path.join(toolDir, 'node', '5.10.1', os.arch());
-
-      expect(fs.existsSync(`${nodeDir}.complete`)).toBe(true);
-      expect(fs.existsSync(path.join(nodeDir, 'node.exe'))).toBe(true);
-    }, 100000);
-
-    it('Falls back to third location if second one doesnt contain correct version', async () => {
-      await installer.getNode('0.12.18');
-      const nodeDir = path.join(toolDir, 'node', '0.12.18', os.arch());
-
-      expect(fs.existsSync(`${nodeDir}.complete`)).toBe(true);
-      expect(fs.existsSync(path.join(nodeDir, 'node.exe'))).toBe(true);
-    }, 100000);
-  }
-
-  it('Throws if no location contains correct node version', async () => {
-    let thrown = false;
-    try {
-      await installer.getNode('1000');
-    } catch {
-      thrown = true;
-    }
-    expect(thrown).toBe(true);
+    expect(versions).toBeDefined();
+    let match = await tc.findFromManifest('10', true, versions);
+    expect(match).toBeDefined();
+    expect(match?.version).toBe('10.20.1');
+  });
+
+  //--------------------------------------------------
+  // Found in cache tests
+  //--------------------------------------------------
+
+  it('finds version in cache with stable true', async () => {
+    inputs['node-version'] = '12';
+    inputs.stable = 'true';
+
+    let toolPath = path.normalize('/cache/node/12.16.1/x64');
+    findSpy.mockImplementation(() => toolPath);
+    await main.run();
+
+    expect(logSpy).toHaveBeenCalledWith(`Found in cache @ ${toolPath}`);
   });
 
-  it('Acquires version of node with long paths', async () => {
-    const toolpath = await installer.getNode('8.8.1');
-    const nodeDir = path.join(toolDir, 'node', '8.8.1', os.arch());
-
-    expect(fs.existsSync(`${nodeDir}.complete`)).toBe(true);
-    if (isWindows) {
-      expect(fs.existsSync(path.join(nodeDir, 'node.exe'))).toBe(true);
-    } else {
-      expect(fs.existsSync(path.join(nodeDir, 'bin', 'node'))).toBe(true);
-    }
-  }, 100000);
-
-  it('Uses version of node installed in cache', async () => {
-    const nodeDir: string = path.join(toolDir, 'node', '250.0.0', os.arch());
-    await io.mkdirP(nodeDir);
-    fs.writeFileSync(`${nodeDir}.complete`, 'hello');
-    // This will throw if it doesn't find it in the cache (because no such version exists)
-    await installer.getNode('250.0.0');
-    return;
+  it('finds version in cache with stable not supplied', async () => {
+    inputs['node-version'] = '12';
+
+    inSpy.mockImplementation(name => inputs[name]);
+
+    let toolPath = path.normalize('/cache/node/12.16.1/x64');
+    findSpy.mockImplementation(() => toolPath);
+    await main.run();
+
+    expect(logSpy).toHaveBeenCalledWith(`Found in cache @ ${toolPath}`);
   });
 
-  it('Doesnt use version of node that was only partially installed in cache', async () => {
-    const nodeDir: string = path.join(toolDir, 'node', '251.0.0', os.arch());
-    await io.mkdirP(nodeDir);
-    let thrown = false;
-    try {
-      // This will throw if it doesn't find it in the cache (because no such version exists)
-      await installer.getNode('251.0.0');
-    } catch {
-      thrown = true;
-    }
-    expect(thrown).toBe(true);
-    return;
+  it('finds version in cache and adds it to the path', async () => {
+    inputs['node-version'] = '12';
+
+    inSpy.mockImplementation(name => inputs[name]);
+
+    let toolPath = path.normalize('/cache/node/12.16.1/x64');
+    findSpy.mockImplementation(() => toolPath);
+    await main.run();
+
+    let expPath = path.join(toolPath, 'bin');
+    expect(cnSpy).toHaveBeenCalledWith(`::add-path::${expPath}${osm.EOL}`);
   });
 
-  it('Resolves semantic versions of node installed in cache', async () => {
-    const nodeDir: string = path.join(toolDir, 'node', '252.0.0', os.arch());
-    await io.mkdirP(nodeDir);
-    fs.writeFileSync(`${nodeDir}.complete`, 'hello');
-    // These will throw if it doesn't find it in the cache (because no such version exists)
-    await installer.getNode('252.0.0');
-    await installer.getNode('252');
-    await installer.getNode('252.0');
+  it('handles unhandled find error and reports error', async () => {
+    let errMsg = 'unhandled error message';
+    inputs['node-version'] = '12';
+
+    findSpy.mockImplementation(() => {
+      throw new Error(errMsg);
+    });
+
+    await main.run();
+
+    expect(cnSpy).toHaveBeenCalledWith('::error::' + errMsg + osm.EOL);
+  });
+
+  it('downloads a version from a manifest match', async () => {
+    os.platform = 'linux';
+    os.arch = 'x64';
+
+    // a version which is in the manifest
+    let versionSpec = '12.16.2';
+    let resolvedVersion = versionSpec;
+
+    inputs['node-version'] = versionSpec;
+    inputs['always-auth'] = false;
+    inputs['token'] = 'faketoken';
+
+    let expectedUrl =
+      'https://github.com/actions/node-versions/releases/download/12.16.2-20200423.28/node-12.16.2-linux-x64.tar.gz';
+
+    // ... but not in the local cache
+    findSpy.mockImplementation(() => '');
+
+    dlSpy.mockImplementation(async () => '/some/temp/path');
+    let toolPath = path.normalize('/cache/node/12.16.2/x64');
+    exSpy.mockImplementation(async () => '/some/other/temp/path');
+    cacheSpy.mockImplementation(async () => toolPath);
+
+    await main.run();
+
+    let expPath = path.join(toolPath, 'bin');
+
+    expect(dlSpy).toHaveBeenCalled();
+    expect(exSpy).toHaveBeenCalled();
+    expect(logSpy).toHaveBeenCalledWith(
+      `Acquiring ${resolvedVersion} from ${expectedUrl}`
+    );
+    expect(logSpy).toHaveBeenCalledWith(
+      `Attempting to download ${versionSpec}...`
+    );
+    expect(cnSpy).toHaveBeenCalledWith(`::add-path::${expPath}${osm.EOL}`);
+  });
+
+  it('falls back to a version from node dist', async () => {
+    os.platform = 'linux';
+    os.arch = 'x64';
+
+    // a version which is not in the manifest but is in node dist
+    let versionSpec = '11.15.0';
+    let resolvedVersion = versionSpec;
+
+    inputs['node-version'] = versionSpec;
+    inputs['always-auth'] = false;
+    inputs['token'] = 'faketoken';
+
+    let expectedUrl =
+      'https://github.com/actions/node-versions/releases/download/12.16.2-20200423.28/node-12.16.2-linux-x64.tar.gz';
+
+    // ... but not in the local cache
+    findSpy.mockImplementation(() => '');
+
+    dlSpy.mockImplementation(async () => '/some/temp/path');
+    let toolPath = path.normalize('/cache/node/11.11.0/x64');
+    exSpy.mockImplementation(async () => '/some/other/temp/path');
+    cacheSpy.mockImplementation(async () => toolPath);
+
+    await main.run();
+
+    let expPath = path.join(toolPath, 'bin');
+
+    expect(dlSpy).toHaveBeenCalled();
+    expect(exSpy).toHaveBeenCalled();
+    expect(logSpy).toHaveBeenCalledWith(
+      'Not found in manifest.  Falling back to download directly from Node'
+    );
+    expect(logSpy).toHaveBeenCalledWith(
+      `Attempting to download ${versionSpec}...`
+    );
+    expect(cnSpy).toHaveBeenCalledWith(`::add-path::${expPath}${osm.EOL}`);
+  });
+
+  it('does not find a version that does not exist', async () => {
+    os.platform = 'linux';
+    os.arch = 'x64';
+
+    let versionSpec = '9.99.9';
+    inputs['node-version'] = versionSpec;
+
+    findSpy.mockImplementation(() => '');
+    await main.run();
+
+    expect(logSpy).toHaveBeenCalledWith(
+      'Not found in manifest.  Falling back to download directly from Node'
+    );
+    expect(logSpy).toHaveBeenCalledWith(
+      `Attempting to download ${versionSpec}...`
+    );
+    expect(cnSpy).toHaveBeenCalledWith(
+      `::error::Unable to find Node version '${versionSpec}' for platform ${os.platform} and architecture ${os.arch}.${osm.EOL}`
+    );
+  });
+
+  it('reports a failed download', async () => {
+    let errMsg = 'unhandled download message';
+    os.platform = 'linux';
+    os.arch = 'x64';
+
+    // a version which is in the manifest
+    let versionSpec = '12.16.2';
+    let resolvedVersion = versionSpec;
+
+    inputs['node-version'] = versionSpec;
+    inputs['always-auth'] = false;
+    inputs['token'] = 'faketoken';
+
+    findSpy.mockImplementation(() => '');
+    dlSpy.mockImplementation(() => {
+      throw new Error(errMsg);
+    });
+    await main.run();
+
+    expect(cnSpy).toHaveBeenCalledWith(`::error::${errMsg}${osm.EOL}`);
   });
 });
diff --git a/dist/index.js b/dist/index.js
index c51c792e1..251c94143 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -4590,6 +4590,69 @@ function checkMode (stat, options) {
 }
 
 
+/***/ }),
+
+/***/ 198:
+/***/ (function(__unusedmodule, exports, __webpack_require__) {
+
+"use strict";
+
+var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
+    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
+    return new (P || (P = Promise))(function (resolve, reject) {
+        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
+        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
+        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
+        step((generator = generator.apply(thisArg, _arguments || [])).next());
+    });
+};
+var __importStar = (this && this.__importStar) || function (mod) {
+    if (mod && mod.__esModule) return mod;
+    var result = {};
+    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
+    result["default"] = mod;
+    return result;
+};
+Object.defineProperty(exports, "__esModule", { value: true });
+const core = __importStar(__webpack_require__(470));
+const installer = __importStar(__webpack_require__(749));
+const auth = __importStar(__webpack_require__(202));
+const path = __importStar(__webpack_require__(622));
+function run() {
+    return __awaiter(this, void 0, void 0, function* () {
+        try {
+            //
+            // Version is optional.  If supplied, install / use from the tool cache
+            // If not supplied then task is still used to setup proxy, auth, etc...
+            //
+            let version = core.getInput('node-version');
+            if (!version) {
+                version = core.getInput('version');
+            }
+            console.log(`version: ${version}`);
+            if (version) {
+                let token = core.getInput('token');
+                let stable = (core.getInput('stable') || 'true').toUpperCase() === 'TRUE';
+                yield installer.getNode(version, stable, token);
+            }
+            const registryUrl = core.getInput('registry-url');
+            const alwaysAuth = core.getInput('always-auth');
+            if (registryUrl) {
+                auth.configAuthentication(registryUrl, alwaysAuth);
+            }
+            const matchersPath = path.join(__dirname, '..', '.github');
+            console.log(`##[add-matcher]${path.join(matchersPath, 'tsc.json')}`);
+            console.log(`##[add-matcher]${path.join(matchersPath, 'eslint-stylish.json')}`);
+            console.log(`##[add-matcher]${path.join(matchersPath, 'eslint-compact.json')}`);
+        }
+        catch (error) {
+            core.setFailed(error.message);
+        }
+    });
+}
+exports.run = run;
+//# sourceMappingURL=main.js.map
+
 /***/ }),
 
 /***/ 202:
@@ -4652,7 +4715,7 @@ function writeRegistryToFile(registryUrl, fileLocation, alwaysAuth) {
     // Export empty node_auth_token so npm doesn't complain about not being able to find it
     core.exportVariable('NODE_AUTH_TOKEN', 'XXXXX-XXXXX-XXXXX-XXXXX');
 }
-
+//# sourceMappingURL=authutil.js.map
 
 /***/ }),
 
@@ -12873,15 +12936,16 @@ module.exports = require("fs");
 /***/ }),
 
 /***/ 749:
-/***/ (function(__unusedmodule, exports, __webpack_require__) {
+/***/ (function(module, exports, __webpack_require__) {
 
 "use strict";
 
 var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
+    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
     return new (P || (P = Promise))(function (resolve, reject) {
         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
-        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
+        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
         step((generator = generator.apply(thisArg, _arguments || [])).next());
     });
 };
@@ -12893,18 +12957,18 @@ var __importStar = (this && this.__importStar) || function (mod) {
     return result;
 };
 Object.defineProperty(exports, "__esModule", { value: true });
+const os = __webpack_require__(87);
 const assert = __importStar(__webpack_require__(357));
 const core = __importStar(__webpack_require__(470));
 const hc = __importStar(__webpack_require__(539));
 const io = __importStar(__webpack_require__(1));
 const tc = __importStar(__webpack_require__(533));
-const os = __importStar(__webpack_require__(87));
 const path = __importStar(__webpack_require__(622));
 const semver = __importStar(__webpack_require__(280));
-let osPlat = os.platform();
-let osArch = translateArchToDistUrl(os.arch());
 function getNode(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
+        let osPlat = os.platform();
+        let osArch = translateArchToDistUrl(os.arch());
         // check cache
         let info = null;
         let toolPath;
@@ -12924,7 +12988,7 @@ function getNode(versionSpec, stable, token) {
                 throw new Error(`Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`);
             }
             console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
-            let downloadPath = "";
+            let downloadPath = '';
             try {
                 downloadPath = yield tc.downloadTool(info.downloadUrl, undefined, token);
             }
@@ -12967,7 +13031,7 @@ exports.getNode = getNode;
 function getInfoFromManifest(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
         let info = null;
-        const releases = yield tc.getManifestFromRepo("actions", "node-versions", token);
+        const releases = yield tc.getManifestFromRepo('actions', 'node-versions', token);
         console.log(`matching ${versionSpec}...`);
         const rel = yield tc.findFromManifest(versionSpec, stable, releases);
         if (rel && rel.files.length > 0) {
@@ -12982,19 +13046,13 @@ function getInfoFromManifest(versionSpec, stable, token) {
 }
 function getInfoFromDist(versionSpec) {
     return __awaiter(this, void 0, void 0, function* () {
+        let osPlat = os.platform();
+        let osArch = translateArchToDistUrl(os.arch());
         let info = null;
         let version;
-        // If explicit version don't query
-        if (semver.clean(versionSpec) != null) {
-            // version to download
-            version = versionSpec;
-        }
-        else {
-            // query nodejs.org for a matching version
-            version = yield queryDistForMatch(versionSpec);
-            if (!version) {
-                return null;
-            }
+        version = yield queryDistForMatch(versionSpec);
+        if (!version) {
+            return null;
         }
         //
         // Download - a tool installer intimately knows how to get the tool (and construct urls)
@@ -13040,6 +13098,8 @@ function evaluateVersions(versions, versionSpec) {
 }
 function queryDistForMatch(versionSpec) {
     return __awaiter(this, void 0, void 0, function* () {
+        let osPlat = os.platform();
+        let osArch = translateArchToDistUrl(os.arch());
         // node offers a json list of versions
         let dataFileName;
         switch (osPlat) {
@@ -13056,13 +13116,7 @@ function queryDistForMatch(versionSpec) {
                 throw new Error(`Unexpected OS '${osPlat}'`);
         }
         let versions = [];
-        let dataUrl = 'https://nodejs.org/dist/index.json';
-        let httpClient = new hc.HttpClient('setup-node', [], {
-            allowRetries: true,
-            maxRetries: 3
-        });
-        let response = yield httpClient.getJson(dataUrl);
-        let nodeVersions = response.result || [];
+        let nodeVersions = yield module.exports.getVersionsFromDist();
         nodeVersions.forEach((nodeVersion) => {
             // ensure this version supports your os and platform
             if (nodeVersion.files.indexOf(dataFileName) >= 0) {
@@ -13074,6 +13128,18 @@ function queryDistForMatch(versionSpec) {
         return version;
     });
 }
+function getVersionsFromDist() {
+    return __awaiter(this, void 0, void 0, function* () {
+        let dataUrl = 'https://nodejs.org/dist/index.json';
+        let httpClient = new hc.HttpClient('setup-node', [], {
+            allowRetries: true,
+            maxRetries: 3
+        });
+        let response = yield httpClient.getJson(dataUrl);
+        return response.result || [];
+    });
+}
+exports.getVersionsFromDist = getVersionsFromDist;
 // For non LTS versions of Node, the files we need (for Windows) are sometimes located
 // in a different folder than they normally are for other versions.
 // Normally the format is similar to: https://nodejs.org/dist/v5.10.1/node-v5.10.1-win-x64.7z
@@ -13088,6 +13154,8 @@ function queryDistForMatch(versionSpec) {
 // and lib file in a folder, not zipped.
 function acquireNodeFromFallbackLocation(version) {
     return __awaiter(this, void 0, void 0, function* () {
+        let osPlat = os.platform();
+        let osArch = translateArchToDistUrl(os.arch());
         // Create temporary folder to download in to
         const tempDownloadFolder = 'temp_' + Math.floor(Math.random() * 2000000000);
         const tempDirectory = process.env['RUNNER_TEMP'] || '';
@@ -13133,7 +13201,7 @@ function translateArchToDistUrl(arch) {
             return arch;
     }
 }
-
+//# sourceMappingURL=installer.js.map
 
 /***/ }),
 
@@ -15989,60 +16057,10 @@ function hasNextPage (link) {
 
 "use strict";
 
-var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
-    return new (P || (P = Promise))(function (resolve, reject) {
-        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
-        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
-        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
-        step((generator = generator.apply(thisArg, _arguments || [])).next());
-    });
-};
-var __importStar = (this && this.__importStar) || function (mod) {
-    if (mod && mod.__esModule) return mod;
-    var result = {};
-    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
-    result["default"] = mod;
-    return result;
-};
 Object.defineProperty(exports, "__esModule", { value: true });
-const core = __importStar(__webpack_require__(470));
-const installer = __importStar(__webpack_require__(749));
-const auth = __importStar(__webpack_require__(202));
-const path = __importStar(__webpack_require__(622));
-function run() {
-    return __awaiter(this, void 0, void 0, function* () {
-        try {
-            //
-            // Version is optional.  If supplied, install / use from the tool cache
-            // If not supplied then task is still used to setup proxy, auth, etc...
-            //
-            let version = core.getInput('node-version');
-            if (!version) {
-                version = core.getInput('version');
-            }
-            console.log(`version: ${version}`);
-            if (version) {
-                let token = core.getInput('token');
-                let stable = (core.getInput('stable') || 'true').toUpperCase() === 'TRUE';
-                yield installer.getNode(version, stable, token);
-            }
-            const registryUrl = core.getInput('registry-url');
-            const alwaysAuth = core.getInput('always-auth');
-            if (registryUrl) {
-                auth.configAuthentication(registryUrl, alwaysAuth);
-            }
-            const matchersPath = path.join(__dirname, '..', '.github');
-            console.log(`##[add-matcher]${path.join(matchersPath, 'tsc.json')}`);
-            console.log(`##[add-matcher]${path.join(matchersPath, 'eslint-stylish.json')}`);
-            console.log(`##[add-matcher]${path.join(matchersPath, 'eslint-compact.json')}`);
-        }
-        catch (error) {
-            core.setFailed(error.message);
-        }
-    });
-}
-run();
-
+const main_1 = __webpack_require__(198);
+main_1.run();
+//# sourceMappingURL=setup-node.js.map
 
 /***/ }),
 
diff --git a/package-lock.json b/package-lock.json
index e18fe61ec..dbe9bccfa 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -164,9 +164,9 @@
       }
     },
     "@babel/helper-plugin-utils": {
-      "version": "7.0.0",
-      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.0.0.tgz",
-      "integrity": "sha512-CYAOUCARwExnEixLdB6sDm2dIJ/YgEAKDM1MOeMeZu9Ld/bDgVo8aiWrXwcY7OBh+1Ea2uUcVRcxKk0GJvW7QA==",
+      "version": "7.8.3",
+      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.8.3.tgz",
+      "integrity": "sha512-j+fq49Xds2smCUNYmEHF9kGNkhbet6yVIBp4e6oeQpH1RUs/Ir06xUKzDjDkGcaaokPiTNs2JBWHjaE4csUkZQ==",
       "dev": true
     },
     "@babel/helper-split-export-declaration": {
@@ -207,12 +207,12 @@
       "dev": true
     },
     "@babel/plugin-syntax-object-rest-spread": {
-      "version": "7.2.0",
-      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.2.0.tgz",
-      "integrity": "sha512-t0JKGgqk2We+9may3t0xDdmneaXmyxq0xieYcKHxIsrJO64n1OiMWNUtc5gQK1PA0NpdCRrtZp4z+IUaKugrSA==",
+      "version": "7.8.3",
+      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
+      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
       "dev": true,
       "requires": {
-        "@babel/helper-plugin-utils": "^7.0.0"
+        "@babel/helper-plugin-utils": "^7.8.0"
       }
     },
     "@babel/template": {
@@ -301,38 +301,358 @@
       }
     },
     "@jest/core": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/@jest/core/-/core-24.8.0.tgz",
-      "integrity": "sha512-R9rhAJwCBQzaRnrRgAdVfnglUuATXdwTRsYqs6NMdVcAl5euG8LtWDe+fVkN27YfKVBW61IojVsXKaOmSnqd/A==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/@jest/core/-/core-24.9.0.tgz",
+      "integrity": "sha512-Fogg3s4wlAr1VX7q+rhV9RVnUv5tD7VuWfYy1+whMiWUrvl7U3QJSJyWcDio9Lq2prqYsZaeTv2Rz24pWGkJ2A==",
       "dev": true,
       "requires": {
         "@jest/console": "^24.7.1",
-        "@jest/reporters": "^24.8.0",
-        "@jest/test-result": "^24.8.0",
-        "@jest/transform": "^24.8.0",
-        "@jest/types": "^24.8.0",
+        "@jest/reporters": "^24.9.0",
+        "@jest/test-result": "^24.9.0",
+        "@jest/transform": "^24.9.0",
+        "@jest/types": "^24.9.0",
         "ansi-escapes": "^3.0.0",
         "chalk": "^2.0.1",
         "exit": "^0.1.2",
         "graceful-fs": "^4.1.15",
-        "jest-changed-files": "^24.8.0",
-        "jest-config": "^24.8.0",
-        "jest-haste-map": "^24.8.0",
-        "jest-message-util": "^24.8.0",
+        "jest-changed-files": "^24.9.0",
+        "jest-config": "^24.9.0",
+        "jest-haste-map": "^24.9.0",
+        "jest-message-util": "^24.9.0",
         "jest-regex-util": "^24.3.0",
-        "jest-resolve-dependencies": "^24.8.0",
-        "jest-runner": "^24.8.0",
-        "jest-runtime": "^24.8.0",
-        "jest-snapshot": "^24.8.0",
-        "jest-util": "^24.8.0",
-        "jest-validate": "^24.8.0",
-        "jest-watcher": "^24.8.0",
+        "jest-resolve": "^24.9.0",
+        "jest-resolve-dependencies": "^24.9.0",
+        "jest-runner": "^24.9.0",
+        "jest-runtime": "^24.9.0",
+        "jest-snapshot": "^24.9.0",
+        "jest-util": "^24.9.0",
+        "jest-validate": "^24.9.0",
+        "jest-watcher": "^24.9.0",
         "micromatch": "^3.1.10",
         "p-each-series": "^1.0.0",
-        "pirates": "^4.0.1",
         "realpath-native": "^1.1.0",
         "rimraf": "^2.5.4",
+        "slash": "^2.0.0",
         "strip-ansi": "^5.0.0"
+      },
+      "dependencies": {
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          },
+          "dependencies": {
+            "@jest/console": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+              "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+              "dev": true,
+              "requires": {
+                "@jest/source-map": "^24.9.0",
+                "chalk": "^2.0.1",
+                "slash": "^2.0.0"
+              }
+            }
+          }
+        },
+        "@jest/transform": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
+          "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
+          "dev": true,
+          "requires": {
+            "@babel/core": "^7.1.0",
+            "@jest/types": "^24.9.0",
+            "babel-plugin-istanbul": "^5.1.0",
+            "chalk": "^2.0.1",
+            "convert-source-map": "^1.4.0",
+            "fast-json-stable-stringify": "^2.0.0",
+            "graceful-fs": "^4.1.15",
+            "jest-haste-map": "^24.9.0",
+            "jest-regex-util": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "pirates": "^4.0.1",
+            "realpath-native": "^1.1.0",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.1",
+            "write-file-atomic": "2.4.1"
+          },
+          "dependencies": {
+            "jest-regex-util": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+              "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+              "dev": true
+            }
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "diff-sequences": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-24.9.0.tgz",
+          "integrity": "sha512-Dj6Wk3tWyTE+Fo1rW8v0Xhwk80um6yFYKbuAxc9c3EZxIHFDYwbi34Uk42u1CdnIiVorvt4RmlSDjIPyzGC2ew==",
+          "dev": true
+        },
+        "expect": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/expect/-/expect-24.9.0.tgz",
+          "integrity": "sha512-wvVAx8XIol3Z5m9zvZXiyZOQ+sRJqNTIm6sGjdWlaZIeupQGO3WbYI+15D/AmEwZywL6wtJkbAbJtzkOfBuR0Q==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-styles": "^3.2.0",
+            "jest-get-type": "^24.9.0",
+            "jest-matcher-utils": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-regex-util": "^24.9.0"
+          },
+          "dependencies": {
+            "jest-regex-util": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+              "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+              "dev": true
+            }
+          }
+        },
+        "jest-diff": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-24.9.0.tgz",
+          "integrity": "sha512-qMfrTs8AdJE2iqrTp0hzh7kTd2PQWrsFyj9tORoKmu32xjPjeE4NyjVRDz8ybYwqS2ik8N4hsIpiVTyFeo2lBQ==",
+          "dev": true,
+          "requires": {
+            "chalk": "^2.0.1",
+            "diff-sequences": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-get-type": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
+          "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q==",
+          "dev": true
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          }
+        },
+        "jest-matcher-utils": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-24.9.0.tgz",
+          "integrity": "sha512-OZz2IXsu6eaiMAwe67c1T+5tUAtQyQx27/EMEkbFAGiw52tB9em+uGbzpcgYVpA8wl0hlxKPZxrly4CXU/GjHA==",
+          "dev": true,
+          "requires": {
+            "chalk": "^2.0.1",
+            "jest-diff": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-resolve": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
+          "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "browser-resolve": "^1.11.3",
+            "chalk": "^2.0.1",
+            "jest-pnp-resolver": "^1.2.1",
+            "realpath-native": "^1.1.0"
+          }
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-snapshot": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-24.9.0.tgz",
+          "integrity": "sha512-uI/rszGSs73xCM0l+up7O7a40o90cnrk429LOiK3aeTvfC0HHmldbd81/B7Ix81KSFe1lwkbl7GnBGG4UfuDew==",
+          "dev": true,
+          "requires": {
+            "@babel/types": "^7.0.0",
+            "@jest/types": "^24.9.0",
+            "chalk": "^2.0.1",
+            "expect": "^24.9.0",
+            "jest-diff": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "jest-matcher-utils": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-resolve": "^24.9.0",
+            "mkdirp": "^0.5.1",
+            "natural-compare": "^1.4.0",
+            "pretty-format": "^24.9.0",
+            "semver": "^6.2.0"
+          }
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          },
+          "dependencies": {
+            "@jest/console": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+              "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+              "dev": true,
+              "requires": {
+                "@jest/source-map": "^24.9.0",
+                "chalk": "^2.0.1",
+                "slash": "^2.0.0"
+              }
+            }
+          }
+        },
+        "jest-worker": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+          "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+          "dev": true,
+          "requires": {
+            "merge-stream": "^2.0.0",
+            "supports-color": "^6.1.0"
+          }
+        },
+        "merge-stream": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
+          "dev": true
+        },
+        "pretty-format": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
+          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-regex": "^4.0.0",
+            "ansi-styles": "^3.2.0",
+            "react-is": "^16.8.4"
+          }
+        },
+        "semver": {
+          "version": "6.3.0",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
+          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
+          "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
+        }
       }
     },
     "@jest/environment": {
@@ -359,15 +679,15 @@
       }
     },
     "@jest/reporters": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-24.8.0.tgz",
-      "integrity": "sha512-eZ9TyUYpyIIXfYCrw0UHUWUvE35vx5I92HGMgS93Pv7du+GHIzl+/vh8Qj9MCWFK/4TqyttVBPakWMOfZRIfxw==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-24.9.0.tgz",
+      "integrity": "sha512-mu4X0yjaHrffOsWmVLzitKmmmWSQ3GGuefgNscUSWNiUNcEOSEQk9k3pERKEQVBb0Cnn88+UESIsZEMH3o88Gw==",
       "dev": true,
       "requires": {
-        "@jest/environment": "^24.8.0",
-        "@jest/test-result": "^24.8.0",
-        "@jest/transform": "^24.8.0",
-        "@jest/types": "^24.8.0",
+        "@jest/environment": "^24.9.0",
+        "@jest/test-result": "^24.9.0",
+        "@jest/transform": "^24.9.0",
+        "@jest/types": "^24.9.0",
         "chalk": "^2.0.1",
         "exit": "^0.1.2",
         "glob": "^7.1.2",
@@ -375,23 +695,234 @@
         "istanbul-lib-instrument": "^3.0.1",
         "istanbul-lib-report": "^2.0.4",
         "istanbul-lib-source-maps": "^3.0.1",
-        "istanbul-reports": "^2.1.1",
-        "jest-haste-map": "^24.8.0",
-        "jest-resolve": "^24.8.0",
-        "jest-runtime": "^24.8.0",
-        "jest-util": "^24.8.0",
+        "istanbul-reports": "^2.2.6",
+        "jest-haste-map": "^24.9.0",
+        "jest-resolve": "^24.9.0",
+        "jest-runtime": "^24.9.0",
+        "jest-util": "^24.9.0",
         "jest-worker": "^24.6.0",
-        "node-notifier": "^5.2.1",
+        "node-notifier": "^5.4.2",
         "slash": "^2.0.0",
         "source-map": "^0.6.0",
         "string-length": "^2.0.0"
       },
       "dependencies": {
-        "slash": {
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/environment": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-24.9.0.tgz",
+          "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",
+          "dev": true,
+          "requires": {
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/transform": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/transform": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
+          "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
+          "dev": true,
+          "requires": {
+            "@babel/core": "^7.1.0",
+            "@jest/types": "^24.9.0",
+            "babel-plugin-istanbul": "^5.1.0",
+            "chalk": "^2.0.1",
+            "convert-source-map": "^1.4.0",
+            "fast-json-stable-stringify": "^2.0.0",
+            "graceful-fs": "^4.1.15",
+            "jest-haste-map": "^24.9.0",
+            "jest-regex-util": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "pirates": "^4.0.1",
+            "realpath-native": "^1.1.0",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.1",
+            "write-file-atomic": "2.4.1"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          },
+          "dependencies": {
+            "jest-worker": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+              "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+              "dev": true,
+              "requires": {
+                "merge-stream": "^2.0.0",
+                "supports-color": "^6.1.0"
+              }
+            }
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-regex-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+          "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+          "dev": true
+        },
+        "jest-resolve": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
+          "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "browser-resolve": "^1.11.3",
+            "chalk": "^2.0.1",
+            "jest-pnp-resolver": "^1.2.1",
+            "realpath-native": "^1.1.0"
+          }
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          }
+        },
+        "merge-stream": {
           "version": "2.0.0",
-          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
-          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
           "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
         }
       }
     },
@@ -426,50 +957,212 @@
       }
     },
     "@jest/test-sequencer": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-24.8.0.tgz",
-      "integrity": "sha512-OzL/2yHyPdCHXEzhoBuq37CE99nkme15eHkAzXRVqthreWZamEMA0WoetwstsQBCXABhczpK03JNbc4L01vvLg==",
-      "dev": true,
-      "requires": {
-        "@jest/test-result": "^24.8.0",
-        "jest-haste-map": "^24.8.0",
-        "jest-runner": "^24.8.0",
-        "jest-runtime": "^24.8.0"
-      }
-    },
-    "@jest/transform": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.8.0.tgz",
-      "integrity": "sha512-xBMfFUP7TortCs0O+Xtez2W7Zu1PLH9bvJgtraN1CDST6LBM/eTOZ9SfwS/lvV8yOfcDpFmwf9bq5cYbXvqsvA==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-24.9.0.tgz",
+      "integrity": "sha512-6qqsU4o0kW1dvA95qfNog8v8gkRN9ph6Lz7r96IvZpHdNipP2cBcb07J1Z45mz/VIS01OHJ3pY8T5fUY38tg4A==",
       "dev": true,
       "requires": {
-        "@babel/core": "^7.1.0",
-        "@jest/types": "^24.8.0",
-        "babel-plugin-istanbul": "^5.1.0",
-        "chalk": "^2.0.1",
-        "convert-source-map": "^1.4.0",
-        "fast-json-stable-stringify": "^2.0.0",
-        "graceful-fs": "^4.1.15",
-        "jest-haste-map": "^24.8.0",
-        "jest-regex-util": "^24.3.0",
-        "jest-util": "^24.8.0",
-        "micromatch": "^3.1.10",
-        "realpath-native": "^1.1.0",
-        "slash": "^2.0.0",
-        "source-map": "^0.6.1",
-        "write-file-atomic": "2.4.1"
+        "@jest/test-result": "^24.9.0",
+        "jest-haste-map": "^24.9.0",
+        "jest-runner": "^24.9.0",
+        "jest-runtime": "^24.9.0"
       },
       "dependencies": {
-        "slash": {
-          "version": "2.0.0",
-          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
-          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
-          "dev": true
-        }
-      }
-    },
-    "@jest/types": {
-      "version": "24.8.0",
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          }
+        },
+        "jest-worker": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+          "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+          "dev": true,
+          "requires": {
+            "merge-stream": "^2.0.0",
+            "supports-color": "^6.1.0"
+          }
+        },
+        "merge-stream": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
+          "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
+        }
+      }
+    },
+    "@jest/transform": {
+      "version": "24.8.0",
+      "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.8.0.tgz",
+      "integrity": "sha512-xBMfFUP7TortCs0O+Xtez2W7Zu1PLH9bvJgtraN1CDST6LBM/eTOZ9SfwS/lvV8yOfcDpFmwf9bq5cYbXvqsvA==",
+      "dev": true,
+      "requires": {
+        "@babel/core": "^7.1.0",
+        "@jest/types": "^24.8.0",
+        "babel-plugin-istanbul": "^5.1.0",
+        "chalk": "^2.0.1",
+        "convert-source-map": "^1.4.0",
+        "fast-json-stable-stringify": "^2.0.0",
+        "graceful-fs": "^4.1.15",
+        "jest-haste-map": "^24.8.0",
+        "jest-regex-util": "^24.3.0",
+        "jest-util": "^24.8.0",
+        "micromatch": "^3.1.10",
+        "realpath-native": "^1.1.0",
+        "slash": "^2.0.0",
+        "source-map": "^0.6.1",
+        "write-file-atomic": "2.4.1"
+      },
+      "dependencies": {
+        "slash": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
+          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
+          "dev": true
+        }
+      }
+    },
+    "@jest/types": {
+      "version": "24.8.0",
       "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.8.0.tgz",
       "integrity": "sha512-g17UxVr2YfBtaMUxn9u/4+siG1ptg9IGYAYwvpwn61nBg779RXnjE/m7CxYcIzEt0AbHZZAHSEZNhkE2WxURVg==",
       "dev": true,
@@ -616,9 +1309,9 @@
       }
     },
     "@types/babel__core": {
-      "version": "7.1.2",
-      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.1.2.tgz",
-      "integrity": "sha512-cfCCrFmiGY/yq0NuKNxIQvZFy9kY/1immpSpTngOnyIbD4+eJOG5mxphhHDv3CHL9GltO4GcKr54kGBg3RNdbg==",
+      "version": "7.1.7",
+      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.1.7.tgz",
+      "integrity": "sha512-RL62NqSFPCDK2FM1pSDH0scHpJvsXtZNiYlMB73DgPBaG1E38ZYVL+ei5EkWRbr+KC4YNiAUNBnRj+bgwpgjMw==",
       "dev": true,
       "requires": {
         "@babel/parser": "^7.1.0",
@@ -629,9 +1322,9 @@
       }
     },
     "@types/babel__generator": {
-      "version": "7.0.2",
-      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.0.2.tgz",
-      "integrity": "sha512-NHcOfab3Zw4q5sEE2COkpfXjoE7o+PmqD9DQW4koUT3roNxwziUdXGnRndMat/LJNUtePwn1TlP4do3uoe3KZQ==",
+      "version": "7.6.1",
+      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.1.tgz",
+      "integrity": "sha512-bBKm+2VPJcMRVwNhxKu8W+5/zT7pwNEqeokFOmbvVSqGzFneNxYcEBro9Ac7/N9tlsaPYnZLK8J1LWKkMsLAew==",
       "dev": true,
       "requires": {
         "@babel/types": "^7.0.0"
@@ -648,9 +1341,9 @@
       }
     },
     "@types/babel__traverse": {
-      "version": "7.0.7",
-      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.0.7.tgz",
-      "integrity": "sha512-CeBpmX1J8kWLcDEnI3Cl2Eo6RfbGvzUctA+CjZUhOKDFbLfcr7fc4usEqLNWetrlJd7RhAkyYe2czXop4fICpw==",
+      "version": "7.0.11",
+      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.0.11.tgz",
+      "integrity": "sha512-ddHK5icION5U6q11+tV2f9Mo6CZVuT8GJKld2q9LqHSZbvLbH34Kcu2yFGckZut453+eQU6btIA3RihmnRgI+Q==",
       "dev": true,
       "requires": {
         "@babel/types": "^7.3.0"
@@ -719,6 +1412,12 @@
       "integrity": "sha512-SOhuU4wNBxhhTHxYaiG5NY4HBhDIDnJF60GU+2LqHAdKKer86//e4yg69aENCtQ04n0ovz+tq2YPME5t5yp4pw==",
       "dev": true
     },
+    "@types/yargs-parser": {
+      "version": "15.0.0",
+      "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-15.0.0.tgz",
+      "integrity": "sha512-FA/BWv8t8ZWJ+gEOnLLd8ygxH/2UFbAvgEonyfN6yWGLKc7zVjbpl2Y4CTjid9h2RfgPP6SEt6uHwEOply00yw==",
+      "dev": true
+    },
     "@zeit/ncc": {
       "version": "0.21.0",
       "resolved": "https://registry.npmjs.org/@zeit/ncc/-/ncc-0.21.0.tgz",
@@ -726,21 +1425,21 @@
       "dev": true
     },
     "abab": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.0.tgz",
-      "integrity": "sha512-sY5AXXVZv4Y1VACTtR11UJCPHHudgY5i26Qj5TypE6DKlIApbwb5uqhXcJ5UUGbvZNRh7EeIoW+LrJumBsKp7w==",
+      "version": "2.0.3",
+      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.3.tgz",
+      "integrity": "sha512-tsFzPpcttalNjFBCFMqsKYQcWxxen1pgJR56by//QwvJc4/OUS3kPOOttx2tSIfjsylB0pYu7f5D3K1RCxUnUg==",
       "dev": true
     },
     "acorn": {
-      "version": "5.7.3",
-      "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.3.tgz",
-      "integrity": "sha512-T/zvzYRfbVojPWahDsE5evJdHb3oJoQfFbsrKM7w5Zcs++Tr257tia3BmMP8XYVjp1S9RZXQMh7gao96BlqZOw==",
+      "version": "5.7.4",
+      "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.4.tgz",
+      "integrity": "sha512-1D++VG7BhrtvQpNbBzovKNc1FLGGEE/oGe7b9xJm/RFHMBeUaUGpluV9RLjZa47YFdPcDAenEYuq9pQPcMdLJg==",
       "dev": true
     },
     "acorn-globals": {
-      "version": "4.3.2",
-      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.2.tgz",
-      "integrity": "sha512-BbzvZhVtZP+Bs1J1HcwrQe8ycfO0wStkSGxuul3He3GkHOIZ6eTqOkPuw9IP1X3+IkOo4wiJmwkobzXYz4wewQ==",
+      "version": "4.3.4",
+      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",
+      "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
       "dev": true,
       "requires": {
         "acorn": "^6.0.1",
@@ -756,18 +1455,18 @@
       }
     },
     "acorn-walk": {
-      "version": "6.1.1",
-      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.1.1.tgz",
-      "integrity": "sha512-OtUw6JUTgxA2QoqqmrmQ7F2NYqiBPi/L2jqHyFtllhOUvXYQXf0Z1CYUinIfyT4bTCGmrA7gX9FvHA81uzCoVw==",
+      "version": "6.2.0",
+      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.2.0.tgz",
+      "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA==",
       "dev": true
     },
     "ajv": {
-      "version": "6.10.0",
-      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.10.0.tgz",
-      "integrity": "sha512-nffhOpkymDECQyR0mnsUtoCE8RlX38G0rYP+wgLWFyZuUyuuojSSvi/+euOiQBIn63whYwYVIIH1TvE3tu4OEg==",
+      "version": "6.12.2",
+      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.2.tgz",
+      "integrity": "sha512-k+V+hzjm5q/Mr8ef/1Y9goCmlsK4I6Sm74teeyGvFk1XrOsbsKLjEdrvny42CZ+a8sXbk8KWpY/bDwS+FLL2UQ==",
       "dev": true,
       "requires": {
-        "fast-deep-equal": "^2.0.1",
+        "fast-deep-equal": "^3.1.1",
         "fast-json-stable-stringify": "^2.0.0",
         "json-schema-traverse": "^0.4.1",
         "uri-js": "^4.2.2"
@@ -862,9 +1561,9 @@
       "dev": true
     },
     "async-limiter": {
-      "version": "1.0.0",
-      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.0.tgz",
-      "integrity": "sha512-jp/uFnooOiO+L211eZOoSyzpOITMXx1rBITauYykG3BRYPu8h0UcxsPNB04RR5vo4Tyz3+ay17tR6JVf9qzYWg==",
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
+      "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
       "dev": true
     },
     "asynckit": {
@@ -891,31 +1590,215 @@
       "dev": true
     },
     "aws4": {
-      "version": "1.8.0",
-      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.8.0.tgz",
-      "integrity": "sha512-ReZxvNHIOv88FlT7rxcXIIC0fPt4KZqZbOlivyWtXLt8ESx84zd3kMC6iK5jVeS2qt+g7ftS7ye4fi06X5rtRQ==",
+      "version": "1.9.1",
+      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.9.1.tgz",
+      "integrity": "sha512-wMHVg2EOHaMRxbzgFJ9gtjOOCrI80OHLG14rxi28XwOW8ux6IiEbRCGGGqCtdAIg4FQCbW20k9RsT4y3gJlFug==",
       "dev": true
     },
     "babel-jest": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-24.8.0.tgz",
-      "integrity": "sha512-+5/kaZt4I9efoXzPlZASyK/lN9qdRKmmUav9smVc0ruPQD7IsfucQ87gpOE8mn2jbDuS6M/YOW6n3v9ZoIfgnw==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-24.9.0.tgz",
+      "integrity": "sha512-ntuddfyiN+EhMw58PTNL1ph4C9rECiQXjI4nMMBKBaNjXvqLdkXpPRcMSr4iyBrJg/+wz9brFUD6RhOAT6r4Iw==",
       "dev": true,
       "requires": {
-        "@jest/transform": "^24.8.0",
-        "@jest/types": "^24.8.0",
+        "@jest/transform": "^24.9.0",
+        "@jest/types": "^24.9.0",
         "@types/babel__core": "^7.1.0",
         "babel-plugin-istanbul": "^5.1.0",
-        "babel-preset-jest": "^24.6.0",
+        "babel-preset-jest": "^24.9.0",
         "chalk": "^2.4.2",
         "slash": "^2.0.0"
       },
       "dependencies": {
-        "slash": {
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/transform": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
+          "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
+          "dev": true,
+          "requires": {
+            "@babel/core": "^7.1.0",
+            "@jest/types": "^24.9.0",
+            "babel-plugin-istanbul": "^5.1.0",
+            "chalk": "^2.0.1",
+            "convert-source-map": "^1.4.0",
+            "fast-json-stable-stringify": "^2.0.0",
+            "graceful-fs": "^4.1.15",
+            "jest-haste-map": "^24.9.0",
+            "jest-regex-util": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "pirates": "^4.0.1",
+            "realpath-native": "^1.1.0",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.1",
+            "write-file-atomic": "2.4.1"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-regex-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+          "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+          "dev": true
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          }
+        },
+        "jest-worker": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+          "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+          "dev": true,
+          "requires": {
+            "merge-stream": "^2.0.0",
+            "supports-color": "^6.1.0"
+          }
+        },
+        "merge-stream": {
           "version": "2.0.0",
-          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
-          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
           "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
         }
       }
     },
@@ -931,22 +1814,22 @@
       }
     },
     "babel-plugin-jest-hoist": {
-      "version": "24.6.0",
-      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-24.6.0.tgz",
-      "integrity": "sha512-3pKNH6hMt9SbOv0F3WVmy5CWQ4uogS3k0GY5XLyQHJ9EGpAT9XWkFd2ZiXXtkwFHdAHa5j7w7kfxSP5lAIwu7w==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-24.9.0.tgz",
+      "integrity": "sha512-2EMA2P8Vp7lG0RAzr4HXqtYwacfMErOuv1U3wrvxHX6rD1sV6xS3WXG3r8TRQ2r6w8OhvSdWt+z41hQNwNm3Xw==",
       "dev": true,
       "requires": {
         "@types/babel__traverse": "^7.0.6"
       }
     },
     "babel-preset-jest": {
-      "version": "24.6.0",
-      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-24.6.0.tgz",
-      "integrity": "sha512-pdZqLEdmy1ZK5kyRUfvBb2IfTPb2BUvIJczlPspS8fWmBQslNNDBqVfh7BW5leOVJMDZKzjD8XEyABTk6gQ5yw==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-24.9.0.tgz",
+      "integrity": "sha512-izTUuhE4TMfTRPF92fFwD2QfdXaZW08qvWTFCI51V8rW5x00UuPgc3ajRoWofXOuxjfcOM5zzSYsQS3H8KGCAg==",
       "dev": true,
       "requires": {
         "@babel/plugin-syntax-object-rest-spread": "^7.0.0",
-        "babel-plugin-jest-hoist": "^24.6.0"
+        "babel-plugin-jest-hoist": "^24.9.0"
       }
     },
     "balanced-match": {
@@ -1064,9 +1947,9 @@
       }
     },
     "browser-process-hrtime": {
-      "version": "0.1.3",
-      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-0.1.3.tgz",
-      "integrity": "sha512-bRFnI4NnjO6cnyLmOV/7PVoDEMJChlcfN0z4s1YMBY989/SvlfMI1lgCnkFUs53e9gQF+w7qu7XdllSTiSl8Aw==",
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
+      "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==",
       "dev": true
     },
     "browser-resolve": {
@@ -1132,6 +2015,12 @@
         "unset-value": "^1.0.0"
       }
     },
+    "callsites": {
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
+      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
+      "dev": true
+    },
     "camelcase": {
       "version": "5.3.1",
       "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
@@ -1194,31 +2083,14 @@
       }
     },
     "cliui": {
-      "version": "4.1.0",
-      "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
-      "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
+      "version": "5.0.0",
+      "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
+      "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
       "dev": true,
       "requires": {
-        "string-width": "^2.1.1",
-        "strip-ansi": "^4.0.0",
-        "wrap-ansi": "^2.0.0"
-      },
-      "dependencies": {
-        "ansi-regex": {
-          "version": "3.0.0",
-          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
-          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
-          "dev": true
-        },
-        "strip-ansi": {
-          "version": "4.0.0",
-          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
-          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
-          "dev": true,
-          "requires": {
-            "ansi-regex": "^3.0.0"
-          }
-        }
+        "string-width": "^3.1.0",
+        "strip-ansi": "^5.2.0",
+        "wrap-ansi": "^5.1.0"
       }
     },
     "co": {
@@ -1227,12 +2099,6 @@
       "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
       "dev": true
     },
-    "code-point-at": {
-      "version": "1.1.0",
-      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
-      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
-      "dev": true
-    },
     "collection-visit": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
@@ -1267,13 +2133,6 @@
         "delayed-stream": "~1.0.0"
       }
     },
-    "commander": {
-      "version": "2.20.3",
-      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
-      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
-      "dev": true,
-      "optional": true
-    },
     "component-emitter": {
       "version": "1.3.0",
       "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
@@ -1327,15 +2186,15 @@
       }
     },
     "cssom": {
-      "version": "0.3.6",
-      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.6.tgz",
-      "integrity": "sha512-DtUeseGk9/GBW0hl0vVPpU22iHL6YB5BUX7ml1hB+GMpo0NX5G4voX3kdWiMSEguFtcW3Vh3djqNF4aIe6ne0A==",
+      "version": "0.3.8",
+      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
+      "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
       "dev": true
     },
     "cssstyle": {
-      "version": "1.2.2",
-      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.2.2.tgz",
-      "integrity": "sha512-43wY3kl1CVQSvL7wUY1qXkxVGkStjpkDmVjiIKX8R97uhajy8Bybay78uOtqvh7Q5GK75dNPfW0geWjE6qQQow==",
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
+      "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
       "dev": true,
       "requires": {
         "cssom": "0.3.x"
@@ -1362,9 +2221,9 @@
       },
       "dependencies": {
         "whatwg-url": {
-          "version": "7.0.0",
-          "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.0.0.tgz",
-          "integrity": "sha512-37GeVSIJ3kn1JgKyjiYNmSLP1yzbpb29jdmwBSgkD9h40/hyrR/OifpVUndji3tmwGgD8qpw7iQu3RSbCrBpsQ==",
+          "version": "7.1.0",
+          "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
+          "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
           "dev": true,
           "requires": {
             "lodash.sortby": "^4.7.0",
@@ -1493,6 +2352,12 @@
         "safer-buffer": "^2.1.0"
       }
     },
+    "emoji-regex": {
+      "version": "7.0.3",
+      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
+      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
+      "dev": true
+    },
     "end-of-stream": {
       "version": "1.4.1",
       "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.1.tgz",
@@ -1542,30 +2407,28 @@
       "dev": true
     },
     "escodegen": {
-      "version": "1.11.1",
-      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.11.1.tgz",
-      "integrity": "sha512-JwiqFD9KdGVVpeuRa68yU3zZnBEOcPs0nKW7wZzXky8Z7tffdYUHbe11bPCV5jYlK6DVdKLWLm0f5I/QlL0Kmw==",
+      "version": "1.14.1",
+      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.1.tgz",
+      "integrity": "sha512-Bmt7NcRySdIfNPfU2ZoXDrrXsG9ZjvDxcAlMfDUgRBjLOWTuIACXPBFJH7Z+cLb40JeQco5toikyc9t9P8E9SQ==",
       "dev": true,
       "requires": {
-        "esprima": "^3.1.3",
+        "esprima": "^4.0.1",
         "estraverse": "^4.2.0",
         "esutils": "^2.0.2",
         "optionator": "^0.8.1",
         "source-map": "~0.6.1"
-      },
-      "dependencies": {
-        "esprima": {
-          "version": "3.1.3",
-          "resolved": "https://registry.npmjs.org/esprima/-/esprima-3.1.3.tgz",
-          "integrity": "sha1-/cpRzuYTOJXjyI1TXOSdv/YqRjM=",
-          "dev": true
-        }
       }
     },
+    "esprima": {
+      "version": "4.0.1",
+      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
+      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
+      "dev": true
+    },
     "estraverse": {
-      "version": "4.2.0",
-      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",
-      "integrity": "sha1-De4/7TH81GlhjOc0IJn8GvoL2xM=",
+      "version": "4.3.0",
+      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
+      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
       "dev": true
     },
     "esutils": {
@@ -1748,9 +2611,9 @@
       "dev": true
     },
     "fast-deep-equal": {
-      "version": "2.0.1",
-      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
-      "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
+      "version": "3.1.1",
+      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.1.tgz",
+      "integrity": "sha512-8UEa58QDLauDNfpbrX55Q9jrGHThw2ZMdOky5Gl1CDtVeJDPVrG4Jxx1N8jw2gkWaff5UUuX1KJd+9zGe2B+ZA==",
       "dev": true
     },
     "fast-json-stable-stringify": {
@@ -2399,9 +3262,9 @@
       "dev": true
     },
     "get-caller-file": {
-      "version": "1.0.3",
-      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
-      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w==",
+      "version": "2.0.5",
+      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
+      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
       "dev": true
     },
     "get-stream": {
@@ -2459,18 +3322,6 @@
       "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE=",
       "dev": true
     },
-    "handlebars": {
-      "version": "4.7.3",
-      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.3.tgz",
-      "integrity": "sha512-SRGwSYuNfx8DwHD/6InAPzD6RgeruWLT+B8e8a7gGs8FWgHzlExpTFMEq2IA6QpAfOClpKHy6+8IqTjeBCu6Kg==",
-      "dev": true,
-      "requires": {
-        "neo-async": "^2.6.0",
-        "optimist": "^0.6.1",
-        "source-map": "^0.6.1",
-        "uglify-js": "^3.1.4"
-      }
-    },
     "har-schema": {
       "version": "2.0.0",
       "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
@@ -2555,6 +3406,12 @@
         "whatwg-encoding": "^1.0.1"
       }
     },
+    "html-escaper": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
+      "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
+      "dev": true
+    },
     "http-signature": {
       "version": "1.2.0",
       "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
@@ -2583,17 +3440,6 @@
       "requires": {
         "pkg-dir": "^3.0.0",
         "resolve-cwd": "^2.0.0"
-      },
-      "dependencies": {
-        "pkg-dir": {
-          "version": "3.0.0",
-          "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
-          "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
-          "dev": true,
-          "requires": {
-            "find-up": "^3.0.0"
-          }
-        }
       }
     },
     "imurmurhash": {
@@ -2627,12 +3473,6 @@
         "loose-envify": "^1.0.0"
       }
     },
-    "invert-kv": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-2.0.0.tgz",
-      "integrity": "sha512-wPVv/y/QQ/Uiirj/vh3oP+1Ww+AWehmi1g5fFWGPF6IpCBCDVrhgHRMvrLfdYcwDh3QJbGXDW4JAuzxElLSqKA==",
-      "dev": true
-    },
     "is-accessor-descriptor": {
       "version": "0.1.6",
       "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
@@ -2910,56 +3750,187 @@
       }
     },
     "istanbul-reports": {
-      "version": "2.2.6",
-      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.6.tgz",
-      "integrity": "sha512-SKi4rnMyLBKe0Jy2uUdx28h8oG7ph2PPuQPvIAh31d+Ci+lSiEu4C+h3oBPuJ9+mPKhOyW0M8gY4U5NM1WLeXA==",
+      "version": "2.2.7",
+      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.7.tgz",
+      "integrity": "sha512-uu1F/L1o5Y6LzPVSVZXNOoD/KXpJue9aeLRd0sM9uMXfZvzomB0WxVamWb5ue8kA2vVWEmW7EG+A5n3f1kqHKg==",
       "dev": true,
       "requires": {
-        "handlebars": "^4.1.2"
+        "html-escaper": "^2.0.0"
       }
     },
     "jest": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest/-/jest-24.8.0.tgz",
-      "integrity": "sha512-o0HM90RKFRNWmAWvlyV8i5jGZ97pFwkeVoGvPW1EtLTgJc2+jcuqcbbqcSZLE/3f2S5pt0y2ZBETuhpWNl1Reg==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest/-/jest-24.9.0.tgz",
+      "integrity": "sha512-YvkBL1Zm7d2B1+h5fHEOdyjCG+sGMz4f8D86/0HiqJ6MB4MnDc8FgP5vdWsGnemOQro7lnYo8UakZ3+5A0jxGw==",
       "dev": true,
       "requires": {
         "import-local": "^2.0.0",
-        "jest-cli": "^24.8.0"
+        "jest-cli": "^24.9.0"
       },
       "dependencies": {
-        "jest-cli": {
-          "version": "24.8.0",
-          "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-24.8.0.tgz",
-          "integrity": "sha512-+p6J00jSMPQ116ZLlHJJvdf8wbjNbZdeSX9ptfHX06/MSNaXmKihQzx5vQcw0q2G6JsdVkUIdWbOWtSnaYs3yA==",
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
           "dev": true,
           "requires": {
-            "@jest/core": "^24.8.0",
-            "@jest/test-result": "^24.8.0",
-            "@jest/types": "^24.8.0",
+            "@jest/source-map": "^24.9.0",
             "chalk": "^2.0.1",
-            "exit": "^0.1.2",
-            "import-local": "^2.0.0",
-            "is-ci": "^2.0.0",
-            "jest-config": "^24.8.0",
-            "jest-util": "^24.8.0",
-            "jest-validate": "^24.8.0",
-            "prompts": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-cli": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-24.9.0.tgz",
+          "integrity": "sha512-+VLRKyitT3BWoMeSUIHRxV/2g8y9gw91Jh5z2UmXZzkZKpbC08CSehVxgHUwTpy+HwGcns/tqafQDJW7imYvGg==",
+          "dev": true,
+          "requires": {
+            "@jest/core": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "chalk": "^2.0.1",
+            "exit": "^0.1.2",
+            "import-local": "^2.0.0",
+            "is-ci": "^2.0.0",
+            "jest-config": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-validate": "^24.9.0",
+            "prompts": "^2.0.1",
             "realpath-native": "^1.1.0",
-            "yargs": "^12.0.2"
+            "yargs": "^13.3.0"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
           }
         }
       }
     },
     "jest-changed-files": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-24.8.0.tgz",
-      "integrity": "sha512-qgANC1Yrivsq+UrLXsvJefBKVoCsKB0Hv+mBb6NMjjZ90wwxCDmU3hsCXBya30cH+LnPYjwgcU65i6yJ5Nfuug==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-24.9.0.tgz",
+      "integrity": "sha512-6aTWpe2mHF0DhL28WjdkO8LyGjs3zItPET4bMSeXU6T3ub4FPMw+mcOcbdGXQOAfmLcxofD23/5Bl9Z4AkFwqg==",
       "dev": true,
       "requires": {
-        "@jest/types": "^24.8.0",
+        "@jest/types": "^24.9.0",
         "execa": "^1.0.0",
         "throat": "^4.0.0"
+      },
+      "dependencies": {
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        }
       }
     },
     "jest-circus": {
@@ -2987,28 +3958,170 @@
       }
     },
     "jest-config": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-24.8.0.tgz",
-      "integrity": "sha512-Czl3Nn2uEzVGsOeaewGWoDPD8GStxCpAe0zOYs2x2l0fZAgPbCr3uwUkgNKV3LwE13VXythM946cd5rdGkkBZw==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-24.9.0.tgz",
+      "integrity": "sha512-RATtQJtVYQrp7fvWg6f5y3pEFj9I+H8sWw4aKxnDZ96mob5i5SD6ZEGWgMLXQ4LE8UurrjbdlLWdUeo+28QpfQ==",
       "dev": true,
       "requires": {
         "@babel/core": "^7.1.0",
-        "@jest/test-sequencer": "^24.8.0",
-        "@jest/types": "^24.8.0",
-        "babel-jest": "^24.8.0",
+        "@jest/test-sequencer": "^24.9.0",
+        "@jest/types": "^24.9.0",
+        "babel-jest": "^24.9.0",
         "chalk": "^2.0.1",
         "glob": "^7.1.1",
-        "jest-environment-jsdom": "^24.8.0",
-        "jest-environment-node": "^24.8.0",
-        "jest-get-type": "^24.8.0",
-        "jest-jasmine2": "^24.8.0",
+        "jest-environment-jsdom": "^24.9.0",
+        "jest-environment-node": "^24.9.0",
+        "jest-get-type": "^24.9.0",
+        "jest-jasmine2": "^24.9.0",
         "jest-regex-util": "^24.3.0",
-        "jest-resolve": "^24.8.0",
-        "jest-util": "^24.8.0",
-        "jest-validate": "^24.8.0",
+        "jest-resolve": "^24.9.0",
+        "jest-util": "^24.9.0",
+        "jest-validate": "^24.9.0",
         "micromatch": "^3.1.10",
-        "pretty-format": "^24.8.0",
+        "pretty-format": "^24.9.0",
         "realpath-native": "^1.1.0"
+      },
+      "dependencies": {
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-get-type": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
+          "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q==",
+          "dev": true
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-resolve": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
+          "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "browser-resolve": "^1.11.3",
+            "chalk": "^2.0.1",
+            "jest-pnp-resolver": "^1.2.1",
+            "realpath-native": "^1.1.0"
+          }
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          }
+        },
+        "pretty-format": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
+          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-regex": "^4.0.0",
+            "ansi-styles": "^3.2.0",
+            "react-is": "^16.8.4"
+          }
+        }
       }
     },
     "jest-diff": {
@@ -3024,9 +4137,9 @@
       }
     },
     "jest-docblock": {
-      "version": "24.3.0",
-      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-24.3.0.tgz",
-      "integrity": "sha512-nlANmF9Yq1dufhFlKG9rasfQlrY7wINJbo3q01tu56Jv5eBU5jirylhF2O5ZBnLxzOVBGRDz/9NAwNyBtG4Nyg==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-24.9.0.tgz",
+      "integrity": "sha512-F1DjdpDMJMA1cN6He0FNYNZlo3yYmOtRUnktrT9Q37njYzC5WEaDdmbynIgy0L/IvXvvgsG8OsqhLPXTpfmZAA==",
       "dev": true,
       "requires": {
         "detect-newline": "^2.1.0"
@@ -3046,89 +4159,857 @@
       }
     },
     "jest-environment-jsdom": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-24.8.0.tgz",
-      "integrity": "sha512-qbvgLmR7PpwjoFjM/sbuqHJt/NCkviuq9vus9NBn/76hhSidO+Z6Bn9tU8friecegbJL8gzZQEMZBQlFWDCwAQ==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-24.9.0.tgz",
+      "integrity": "sha512-Zv9FV9NBRzLuALXjvRijO2351DRQeLYXtpD4xNvfoVFw21IOKNhZAEUKcbiEtjTkm2GsJ3boMVgkaR7rN8qetA==",
       "dev": true,
       "requires": {
-        "@jest/environment": "^24.8.0",
-        "@jest/fake-timers": "^24.8.0",
-        "@jest/types": "^24.8.0",
-        "jest-mock": "^24.8.0",
-        "jest-util": "^24.8.0",
+        "@jest/environment": "^24.9.0",
+        "@jest/fake-timers": "^24.9.0",
+        "@jest/types": "^24.9.0",
+        "jest-mock": "^24.9.0",
+        "jest-util": "^24.9.0",
         "jsdom": "^11.5.1"
+      },
+      "dependencies": {
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/environment": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-24.9.0.tgz",
+          "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",
+          "dev": true,
+          "requires": {
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/transform": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/transform": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
+          "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
+          "dev": true,
+          "requires": {
+            "@babel/core": "^7.1.0",
+            "@jest/types": "^24.9.0",
+            "babel-plugin-istanbul": "^5.1.0",
+            "chalk": "^2.0.1",
+            "convert-source-map": "^1.4.0",
+            "fast-json-stable-stringify": "^2.0.0",
+            "graceful-fs": "^4.1.15",
+            "jest-haste-map": "^24.9.0",
+            "jest-regex-util": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "pirates": "^4.0.1",
+            "realpath-native": "^1.1.0",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.1",
+            "write-file-atomic": "2.4.1"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-regex-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+          "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+          "dev": true
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          }
+        },
+        "jest-worker": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+          "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+          "dev": true,
+          "requires": {
+            "merge-stream": "^2.0.0",
+            "supports-color": "^6.1.0"
+          }
+        },
+        "merge-stream": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
+          "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
+        }
       }
     },
     "jest-environment-node": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-24.8.0.tgz",
-      "integrity": "sha512-vIGUEScd1cdDgR6sqn2M08sJTRLQp6Dk/eIkCeO4PFHxZMOgy+uYLPMC4ix3PEfM5Au/x3uQ/5Tl0DpXXZsJ/Q==",
-      "dev": true,
-      "requires": {
-        "@jest/environment": "^24.8.0",
-        "@jest/fake-timers": "^24.8.0",
-        "@jest/types": "^24.8.0",
-        "jest-mock": "^24.8.0",
-        "jest-util": "^24.8.0"
-      }
-    },
-    "jest-get-type": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.8.0.tgz",
-      "integrity": "sha512-RR4fo8jEmMD9zSz2nLbs2j0zvPpk/KCEz3a62jJWbd2ayNo0cb+KFRxPHVhE4ZmgGJEQp0fosmNz84IfqM8cMQ==",
-      "dev": true
-    },
-    "jest-haste-map": {
-      "version": "24.8.1",
-      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.8.1.tgz",
-      "integrity": "sha512-SwaxMGVdAZk3ernAx2Uv2sorA7jm3Kx+lR0grp6rMmnY06Kn/urtKx1LPN2mGTea4fCT38impYT28FfcLUhX0g==",
-      "dev": true,
-      "requires": {
-        "@jest/types": "^24.8.0",
-        "anymatch": "^2.0.0",
-        "fb-watchman": "^2.0.0",
-        "fsevents": "^1.2.7",
-        "graceful-fs": "^4.1.15",
-        "invariant": "^2.2.4",
-        "jest-serializer": "^24.4.0",
-        "jest-util": "^24.8.0",
-        "jest-worker": "^24.6.0",
-        "micromatch": "^3.1.10",
-        "sane": "^4.0.3",
-        "walker": "^1.0.7"
-      }
-    },
-    "jest-jasmine2": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-24.8.0.tgz",
-      "integrity": "sha512-cEky88npEE5LKd5jPpTdDCLvKkdyklnaRycBXL6GNmpxe41F0WN44+i7lpQKa/hcbXaQ+rc9RMaM4dsebrYong==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-24.9.0.tgz",
+      "integrity": "sha512-6d4V2f4nxzIzwendo27Tr0aFm+IXWa0XEUnaH6nU0FMaozxovt+sfRvh4J47wL1OvF83I3SSTu0XK+i4Bqe7uA==",
       "dev": true,
       "requires": {
-        "@babel/traverse": "^7.1.0",
-        "@jest/environment": "^24.8.0",
-        "@jest/test-result": "^24.8.0",
-        "@jest/types": "^24.8.0",
-        "chalk": "^2.0.1",
-        "co": "^4.6.0",
-        "expect": "^24.8.0",
-        "is-generator-fn": "^2.0.0",
-        "jest-each": "^24.8.0",
-        "jest-matcher-utils": "^24.8.0",
-        "jest-message-util": "^24.8.0",
-        "jest-runtime": "^24.8.0",
-        "jest-snapshot": "^24.8.0",
-        "jest-util": "^24.8.0",
-        "pretty-format": "^24.8.0",
-        "throat": "^4.0.0"
-      }
-    },
-    "jest-leak-detector": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-24.8.0.tgz",
-      "integrity": "sha512-cG0yRSK8A831LN8lIHxI3AblB40uhv0z+SsQdW3GoMMVcK+sJwrIIyax5tu3eHHNJ8Fu6IMDpnLda2jhn2pD/g==",
+        "@jest/environment": "^24.9.0",
+        "@jest/fake-timers": "^24.9.0",
+        "@jest/types": "^24.9.0",
+        "jest-mock": "^24.9.0",
+        "jest-util": "^24.9.0"
+      },
+      "dependencies": {
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/environment": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-24.9.0.tgz",
+          "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",
+          "dev": true,
+          "requires": {
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/transform": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/transform": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
+          "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
+          "dev": true,
+          "requires": {
+            "@babel/core": "^7.1.0",
+            "@jest/types": "^24.9.0",
+            "babel-plugin-istanbul": "^5.1.0",
+            "chalk": "^2.0.1",
+            "convert-source-map": "^1.4.0",
+            "fast-json-stable-stringify": "^2.0.0",
+            "graceful-fs": "^4.1.15",
+            "jest-haste-map": "^24.9.0",
+            "jest-regex-util": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "pirates": "^4.0.1",
+            "realpath-native": "^1.1.0",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.1",
+            "write-file-atomic": "2.4.1"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-regex-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+          "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+          "dev": true
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          }
+        },
+        "jest-worker": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+          "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+          "dev": true,
+          "requires": {
+            "merge-stream": "^2.0.0",
+            "supports-color": "^6.1.0"
+          }
+        },
+        "merge-stream": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
+          "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
+        }
+      }
+    },
+    "jest-get-type": {
+      "version": "24.8.0",
+      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.8.0.tgz",
+      "integrity": "sha512-RR4fo8jEmMD9zSz2nLbs2j0zvPpk/KCEz3a62jJWbd2ayNo0cb+KFRxPHVhE4ZmgGJEQp0fosmNz84IfqM8cMQ==",
+      "dev": true
+    },
+    "jest-haste-map": {
+      "version": "24.8.1",
+      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.8.1.tgz",
+      "integrity": "sha512-SwaxMGVdAZk3ernAx2Uv2sorA7jm3Kx+lR0grp6rMmnY06Kn/urtKx1LPN2mGTea4fCT38impYT28FfcLUhX0g==",
       "dev": true,
       "requires": {
-        "pretty-format": "^24.8.0"
+        "@jest/types": "^24.8.0",
+        "anymatch": "^2.0.0",
+        "fb-watchman": "^2.0.0",
+        "fsevents": "^1.2.7",
+        "graceful-fs": "^4.1.15",
+        "invariant": "^2.2.4",
+        "jest-serializer": "^24.4.0",
+        "jest-util": "^24.8.0",
+        "jest-worker": "^24.6.0",
+        "micromatch": "^3.1.10",
+        "sane": "^4.0.3",
+        "walker": "^1.0.7"
+      }
+    },
+    "jest-jasmine2": {
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-24.9.0.tgz",
+      "integrity": "sha512-Cq7vkAgaYKp+PsX+2/JbTarrk0DmNhsEtqBXNwUHkdlbrTBLtMJINADf2mf5FkowNsq8evbPc07/qFO0AdKTzw==",
+      "dev": true,
+      "requires": {
+        "@babel/traverse": "^7.1.0",
+        "@jest/environment": "^24.9.0",
+        "@jest/test-result": "^24.9.0",
+        "@jest/types": "^24.9.0",
+        "chalk": "^2.0.1",
+        "co": "^4.6.0",
+        "expect": "^24.9.0",
+        "is-generator-fn": "^2.0.0",
+        "jest-each": "^24.9.0",
+        "jest-matcher-utils": "^24.9.0",
+        "jest-message-util": "^24.9.0",
+        "jest-runtime": "^24.9.0",
+        "jest-snapshot": "^24.9.0",
+        "jest-util": "^24.9.0",
+        "pretty-format": "^24.9.0",
+        "throat": "^4.0.0"
+      },
+      "dependencies": {
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/environment": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-24.9.0.tgz",
+          "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",
+          "dev": true,
+          "requires": {
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/transform": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/transform": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
+          "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
+          "dev": true,
+          "requires": {
+            "@babel/core": "^7.1.0",
+            "@jest/types": "^24.9.0",
+            "babel-plugin-istanbul": "^5.1.0",
+            "chalk": "^2.0.1",
+            "convert-source-map": "^1.4.0",
+            "fast-json-stable-stringify": "^2.0.0",
+            "graceful-fs": "^4.1.15",
+            "jest-haste-map": "^24.9.0",
+            "jest-regex-util": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "pirates": "^4.0.1",
+            "realpath-native": "^1.1.0",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.1",
+            "write-file-atomic": "2.4.1"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "diff-sequences": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-24.9.0.tgz",
+          "integrity": "sha512-Dj6Wk3tWyTE+Fo1rW8v0Xhwk80um6yFYKbuAxc9c3EZxIHFDYwbi34Uk42u1CdnIiVorvt4RmlSDjIPyzGC2ew==",
+          "dev": true
+        },
+        "expect": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/expect/-/expect-24.9.0.tgz",
+          "integrity": "sha512-wvVAx8XIol3Z5m9zvZXiyZOQ+sRJqNTIm6sGjdWlaZIeupQGO3WbYI+15D/AmEwZywL6wtJkbAbJtzkOfBuR0Q==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-styles": "^3.2.0",
+            "jest-get-type": "^24.9.0",
+            "jest-matcher-utils": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-regex-util": "^24.9.0"
+          }
+        },
+        "jest-diff": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-24.9.0.tgz",
+          "integrity": "sha512-qMfrTs8AdJE2iqrTp0hzh7kTd2PQWrsFyj9tORoKmu32xjPjeE4NyjVRDz8ybYwqS2ik8N4hsIpiVTyFeo2lBQ==",
+          "dev": true,
+          "requires": {
+            "chalk": "^2.0.1",
+            "diff-sequences": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-each": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-24.9.0.tgz",
+          "integrity": "sha512-ONi0R4BvW45cw8s2Lrx8YgbeXL1oCQ/wIDwmsM3CqM/nlblNCPmnC3IPQlMbRFZu3wKdQ2U8BqM6lh3LJ5Bsog==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "chalk": "^2.0.1",
+            "jest-get-type": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-get-type": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
+          "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q==",
+          "dev": true
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          }
+        },
+        "jest-matcher-utils": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-24.9.0.tgz",
+          "integrity": "sha512-OZz2IXsu6eaiMAwe67c1T+5tUAtQyQx27/EMEkbFAGiw52tB9em+uGbzpcgYVpA8wl0hlxKPZxrly4CXU/GjHA==",
+          "dev": true,
+          "requires": {
+            "chalk": "^2.0.1",
+            "jest-diff": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-regex-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+          "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+          "dev": true
+        },
+        "jest-resolve": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
+          "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "browser-resolve": "^1.11.3",
+            "chalk": "^2.0.1",
+            "jest-pnp-resolver": "^1.2.1",
+            "realpath-native": "^1.1.0"
+          }
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-snapshot": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-24.9.0.tgz",
+          "integrity": "sha512-uI/rszGSs73xCM0l+up7O7a40o90cnrk429LOiK3aeTvfC0HHmldbd81/B7Ix81KSFe1lwkbl7GnBGG4UfuDew==",
+          "dev": true,
+          "requires": {
+            "@babel/types": "^7.0.0",
+            "@jest/types": "^24.9.0",
+            "chalk": "^2.0.1",
+            "expect": "^24.9.0",
+            "jest-diff": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "jest-matcher-utils": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-resolve": "^24.9.0",
+            "mkdirp": "^0.5.1",
+            "natural-compare": "^1.4.0",
+            "pretty-format": "^24.9.0",
+            "semver": "^6.2.0"
+          }
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          }
+        },
+        "jest-worker": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+          "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+          "dev": true,
+          "requires": {
+            "merge-stream": "^2.0.0",
+            "supports-color": "^6.1.0"
+          }
+        },
+        "merge-stream": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
+          "dev": true
+        },
+        "pretty-format": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
+          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-regex": "^4.0.0",
+            "ansi-styles": "^3.2.0",
+            "react-is": "^16.8.4"
+          }
+        },
+        "semver": {
+          "version": "6.3.0",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
+          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
+          "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
+        }
+      }
+    },
+    "jest-leak-detector": {
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-24.9.0.tgz",
+      "integrity": "sha512-tYkFIDsiKTGwb2FG1w8hX9V0aUb2ot8zY/2nFg087dUageonw1zrLMP4W6zsRO59dPkTSKie+D4rhMuP9nRmrA==",
+      "dev": true,
+      "requires": {
+        "jest-get-type": "^24.9.0",
+        "pretty-format": "^24.9.0"
+      },
+      "dependencies": {
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-get-type": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
+          "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q==",
+          "dev": true
+        },
+        "pretty-format": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
+          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-regex": "^4.0.0",
+            "ansi-styles": "^3.2.0",
+            "react-is": "^16.8.4"
+          }
+        }
       }
     },
     "jest-matcher-utils": {
@@ -3202,79 +5083,828 @@
       }
     },
     "jest-resolve-dependencies": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-24.8.0.tgz",
-      "integrity": "sha512-hyK1qfIf/krV+fSNyhyJeq3elVMhK9Eijlwy+j5jqmZ9QsxwKBiP6qukQxaHtK8k6zql/KYWwCTQ+fDGTIJauw==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-24.9.0.tgz",
+      "integrity": "sha512-Fm7b6AlWnYhT0BXy4hXpactHIqER7erNgIsIozDXWl5dVm+k8XdGVe1oTg1JyaFnOxarMEbax3wyRJqGP2Pq+g==",
       "dev": true,
       "requires": {
-        "@jest/types": "^24.8.0",
+        "@jest/types": "^24.9.0",
         "jest-regex-util": "^24.3.0",
-        "jest-snapshot": "^24.8.0"
-      }
-    },
-    "jest-runner": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-24.8.0.tgz",
-      "integrity": "sha512-utFqC5BaA3JmznbissSs95X1ZF+d+4WuOWwpM9+Ak356YtMhHE/GXUondZdcyAAOTBEsRGAgH/0TwLzfI9h7ow==",
+        "jest-snapshot": "^24.9.0"
+      },
+      "dependencies": {
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "diff-sequences": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-24.9.0.tgz",
+          "integrity": "sha512-Dj6Wk3tWyTE+Fo1rW8v0Xhwk80um6yFYKbuAxc9c3EZxIHFDYwbi34Uk42u1CdnIiVorvt4RmlSDjIPyzGC2ew==",
+          "dev": true
+        },
+        "expect": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/expect/-/expect-24.9.0.tgz",
+          "integrity": "sha512-wvVAx8XIol3Z5m9zvZXiyZOQ+sRJqNTIm6sGjdWlaZIeupQGO3WbYI+15D/AmEwZywL6wtJkbAbJtzkOfBuR0Q==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-styles": "^3.2.0",
+            "jest-get-type": "^24.9.0",
+            "jest-matcher-utils": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-regex-util": "^24.9.0"
+          },
+          "dependencies": {
+            "jest-regex-util": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+              "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+              "dev": true
+            }
+          }
+        },
+        "jest-diff": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-24.9.0.tgz",
+          "integrity": "sha512-qMfrTs8AdJE2iqrTp0hzh7kTd2PQWrsFyj9tORoKmu32xjPjeE4NyjVRDz8ybYwqS2ik8N4hsIpiVTyFeo2lBQ==",
+          "dev": true,
+          "requires": {
+            "chalk": "^2.0.1",
+            "diff-sequences": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-get-type": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
+          "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q==",
+          "dev": true
+        },
+        "jest-matcher-utils": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-24.9.0.tgz",
+          "integrity": "sha512-OZz2IXsu6eaiMAwe67c1T+5tUAtQyQx27/EMEkbFAGiw52tB9em+uGbzpcgYVpA8wl0hlxKPZxrly4CXU/GjHA==",
+          "dev": true,
+          "requires": {
+            "chalk": "^2.0.1",
+            "jest-diff": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-resolve": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
+          "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "browser-resolve": "^1.11.3",
+            "chalk": "^2.0.1",
+            "jest-pnp-resolver": "^1.2.1",
+            "realpath-native": "^1.1.0"
+          }
+        },
+        "jest-snapshot": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-24.9.0.tgz",
+          "integrity": "sha512-uI/rszGSs73xCM0l+up7O7a40o90cnrk429LOiK3aeTvfC0HHmldbd81/B7Ix81KSFe1lwkbl7GnBGG4UfuDew==",
+          "dev": true,
+          "requires": {
+            "@babel/types": "^7.0.0",
+            "@jest/types": "^24.9.0",
+            "chalk": "^2.0.1",
+            "expect": "^24.9.0",
+            "jest-diff": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "jest-matcher-utils": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-resolve": "^24.9.0",
+            "mkdirp": "^0.5.1",
+            "natural-compare": "^1.4.0",
+            "pretty-format": "^24.9.0",
+            "semver": "^6.2.0"
+          }
+        },
+        "pretty-format": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
+          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-regex": "^4.0.0",
+            "ansi-styles": "^3.2.0",
+            "react-is": "^16.8.4"
+          }
+        },
+        "semver": {
+          "version": "6.3.0",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
+          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
+          "dev": true
+        }
+      }
+    },
+    "jest-runner": {
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-24.9.0.tgz",
+      "integrity": "sha512-KksJQyI3/0mhcfspnxxEOBueGrd5E4vV7ADQLT9ESaCzz02WnbdbKWIf5Mkaucoaj7obQckYPVX6JJhgUcoWWg==",
       "dev": true,
       "requires": {
         "@jest/console": "^24.7.1",
-        "@jest/environment": "^24.8.0",
-        "@jest/test-result": "^24.8.0",
-        "@jest/types": "^24.8.0",
+        "@jest/environment": "^24.9.0",
+        "@jest/test-result": "^24.9.0",
+        "@jest/types": "^24.9.0",
         "chalk": "^2.4.2",
         "exit": "^0.1.2",
         "graceful-fs": "^4.1.15",
-        "jest-config": "^24.8.0",
+        "jest-config": "^24.9.0",
         "jest-docblock": "^24.3.0",
-        "jest-haste-map": "^24.8.0",
-        "jest-jasmine2": "^24.8.0",
-        "jest-leak-detector": "^24.8.0",
-        "jest-message-util": "^24.8.0",
-        "jest-resolve": "^24.8.0",
-        "jest-runtime": "^24.8.0",
-        "jest-util": "^24.8.0",
+        "jest-haste-map": "^24.9.0",
+        "jest-jasmine2": "^24.9.0",
+        "jest-leak-detector": "^24.9.0",
+        "jest-message-util": "^24.9.0",
+        "jest-resolve": "^24.9.0",
+        "jest-runtime": "^24.9.0",
+        "jest-util": "^24.9.0",
         "jest-worker": "^24.6.0",
         "source-map-support": "^0.5.6",
         "throat": "^4.0.0"
+      },
+      "dependencies": {
+        "@jest/environment": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-24.9.0.tgz",
+          "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",
+          "dev": true,
+          "requires": {
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/transform": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          },
+          "dependencies": {
+            "@jest/console": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+              "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+              "dev": true,
+              "requires": {
+                "@jest/source-map": "^24.9.0",
+                "chalk": "^2.0.1",
+                "slash": "^2.0.0"
+              }
+            }
+          }
+        },
+        "@jest/transform": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
+          "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
+          "dev": true,
+          "requires": {
+            "@babel/core": "^7.1.0",
+            "@jest/types": "^24.9.0",
+            "babel-plugin-istanbul": "^5.1.0",
+            "chalk": "^2.0.1",
+            "convert-source-map": "^1.4.0",
+            "fast-json-stable-stringify": "^2.0.0",
+            "graceful-fs": "^4.1.15",
+            "jest-haste-map": "^24.9.0",
+            "jest-regex-util": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "pirates": "^4.0.1",
+            "realpath-native": "^1.1.0",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.1",
+            "write-file-atomic": "2.4.1"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          },
+          "dependencies": {
+            "jest-worker": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+              "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+              "dev": true,
+              "requires": {
+                "merge-stream": "^2.0.0",
+                "supports-color": "^6.1.0"
+              }
+            }
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-regex-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+          "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+          "dev": true
+        },
+        "jest-resolve": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
+          "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "browser-resolve": "^1.11.3",
+            "chalk": "^2.0.1",
+            "jest-pnp-resolver": "^1.2.1",
+            "realpath-native": "^1.1.0"
+          }
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          },
+          "dependencies": {
+            "@jest/console": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+              "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+              "dev": true,
+              "requires": {
+                "@jest/source-map": "^24.9.0",
+                "chalk": "^2.0.1",
+                "slash": "^2.0.0"
+              }
+            }
+          }
+        },
+        "merge-stream": {
+          "version": "2.0.0",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
+          "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
+        }
       }
     },
     "jest-runtime": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-24.8.0.tgz",
-      "integrity": "sha512-Mq0aIXhvO/3bX44ccT+czU1/57IgOMyy80oM0XR/nyD5zgBcesF84BPabZi39pJVA6UXw+fY2Q1N+4BiVUBWOA==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-24.9.0.tgz",
+      "integrity": "sha512-8oNqgnmF3v2J6PVRM2Jfuj8oX3syKmaynlDMMKQ4iyzbQzIG6th5ub/lM2bCMTmoTKM3ykcUYI2Pw9xwNtjMnw==",
       "dev": true,
       "requires": {
         "@jest/console": "^24.7.1",
-        "@jest/environment": "^24.8.0",
+        "@jest/environment": "^24.9.0",
         "@jest/source-map": "^24.3.0",
-        "@jest/transform": "^24.8.0",
-        "@jest/types": "^24.8.0",
-        "@types/yargs": "^12.0.2",
+        "@jest/transform": "^24.9.0",
+        "@jest/types": "^24.9.0",
+        "@types/yargs": "^13.0.0",
         "chalk": "^2.0.1",
         "exit": "^0.1.2",
         "glob": "^7.1.3",
         "graceful-fs": "^4.1.15",
-        "jest-config": "^24.8.0",
-        "jest-haste-map": "^24.8.0",
-        "jest-message-util": "^24.8.0",
-        "jest-mock": "^24.8.0",
+        "jest-config": "^24.9.0",
+        "jest-haste-map": "^24.9.0",
+        "jest-message-util": "^24.9.0",
+        "jest-mock": "^24.9.0",
         "jest-regex-util": "^24.3.0",
-        "jest-resolve": "^24.8.0",
-        "jest-snapshot": "^24.8.0",
-        "jest-util": "^24.8.0",
-        "jest-validate": "^24.8.0",
+        "jest-resolve": "^24.9.0",
+        "jest-snapshot": "^24.9.0",
+        "jest-util": "^24.9.0",
+        "jest-validate": "^24.9.0",
         "realpath-native": "^1.1.0",
         "slash": "^2.0.0",
         "strip-bom": "^3.0.0",
-        "yargs": "^12.0.2"
+        "yargs": "^13.3.0"
       },
       "dependencies": {
-        "slash": {
+        "@jest/environment": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-24.9.0.tgz",
+          "integrity": "sha512-5A1QluTPhvdIPFYnO3sZC3smkNeXPVELz7ikPbhUj0bQjB07EoE9qtLrem14ZUYWdVayYbsjVwIiL4WBIMV4aQ==",
+          "dev": true,
+          "requires": {
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/transform": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          },
+          "dependencies": {
+            "@jest/console": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+              "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+              "dev": true,
+              "requires": {
+                "@jest/source-map": "^24.9.0",
+                "chalk": "^2.0.1",
+                "slash": "^2.0.0"
+              }
+            },
+            "@jest/source-map": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+              "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+              "dev": true,
+              "requires": {
+                "callsites": "^3.0.0",
+                "graceful-fs": "^4.1.15",
+                "source-map": "^0.6.0"
+              }
+            }
+          }
+        },
+        "@jest/transform": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-24.9.0.tgz",
+          "integrity": "sha512-TcQUmyNRxV94S0QpMOnZl0++6RMiqpbH/ZMccFB/amku6Uwvyb1cjYX7xkp5nGNkbX4QPH/FcB6q1HBTHynLmQ==",
+          "dev": true,
+          "requires": {
+            "@babel/core": "^7.1.0",
+            "@jest/types": "^24.9.0",
+            "babel-plugin-istanbul": "^5.1.0",
+            "chalk": "^2.0.1",
+            "convert-source-map": "^1.4.0",
+            "fast-json-stable-stringify": "^2.0.0",
+            "graceful-fs": "^4.1.15",
+            "jest-haste-map": "^24.9.0",
+            "jest-regex-util": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "pirates": "^4.0.1",
+            "realpath-native": "^1.1.0",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.1",
+            "write-file-atomic": "2.4.1"
+          },
+          "dependencies": {
+            "jest-regex-util": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+              "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+              "dev": true
+            }
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "diff-sequences": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-24.9.0.tgz",
+          "integrity": "sha512-Dj6Wk3tWyTE+Fo1rW8v0Xhwk80um6yFYKbuAxc9c3EZxIHFDYwbi34Uk42u1CdnIiVorvt4RmlSDjIPyzGC2ew==",
+          "dev": true
+        },
+        "expect": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/expect/-/expect-24.9.0.tgz",
+          "integrity": "sha512-wvVAx8XIol3Z5m9zvZXiyZOQ+sRJqNTIm6sGjdWlaZIeupQGO3WbYI+15D/AmEwZywL6wtJkbAbJtzkOfBuR0Q==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-styles": "^3.2.0",
+            "jest-get-type": "^24.9.0",
+            "jest-matcher-utils": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-regex-util": "^24.9.0"
+          },
+          "dependencies": {
+            "jest-regex-util": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
+              "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA==",
+              "dev": true
+            }
+          }
+        },
+        "jest-diff": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-24.9.0.tgz",
+          "integrity": "sha512-qMfrTs8AdJE2iqrTp0hzh7kTd2PQWrsFyj9tORoKmu32xjPjeE4NyjVRDz8ybYwqS2ik8N4hsIpiVTyFeo2lBQ==",
+          "dev": true,
+          "requires": {
+            "chalk": "^2.0.1",
+            "diff-sequences": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-get-type": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
+          "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q==",
+          "dev": true
+        },
+        "jest-haste-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
+          "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "anymatch": "^2.0.0",
+            "fb-watchman": "^2.0.0",
+            "fsevents": "^1.2.7",
+            "graceful-fs": "^4.1.15",
+            "invariant": "^2.2.4",
+            "jest-serializer": "^24.9.0",
+            "jest-util": "^24.9.0",
+            "jest-worker": "^24.9.0",
+            "micromatch": "^3.1.10",
+            "sane": "^4.0.3",
+            "walker": "^1.0.7"
+          }
+        },
+        "jest-matcher-utils": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-24.9.0.tgz",
+          "integrity": "sha512-OZz2IXsu6eaiMAwe67c1T+5tUAtQyQx27/EMEkbFAGiw52tB9em+uGbzpcgYVpA8wl0hlxKPZxrly4CXU/GjHA==",
+          "dev": true,
+          "requires": {
+            "chalk": "^2.0.1",
+            "jest-diff": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "pretty-format": "^24.9.0"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-resolve": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
+          "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "browser-resolve": "^1.11.3",
+            "chalk": "^2.0.1",
+            "jest-pnp-resolver": "^1.2.1",
+            "realpath-native": "^1.1.0"
+          }
+        },
+        "jest-serializer": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
+          "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
+          "dev": true
+        },
+        "jest-snapshot": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-24.9.0.tgz",
+          "integrity": "sha512-uI/rszGSs73xCM0l+up7O7a40o90cnrk429LOiK3aeTvfC0HHmldbd81/B7Ix81KSFe1lwkbl7GnBGG4UfuDew==",
+          "dev": true,
+          "requires": {
+            "@babel/types": "^7.0.0",
+            "@jest/types": "^24.9.0",
+            "chalk": "^2.0.1",
+            "expect": "^24.9.0",
+            "jest-diff": "^24.9.0",
+            "jest-get-type": "^24.9.0",
+            "jest-matcher-utils": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-resolve": "^24.9.0",
+            "mkdirp": "^0.5.1",
+            "natural-compare": "^1.4.0",
+            "pretty-format": "^24.9.0",
+            "semver": "^6.2.0"
+          }
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          },
+          "dependencies": {
+            "@jest/console": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+              "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+              "dev": true,
+              "requires": {
+                "@jest/source-map": "^24.9.0",
+                "chalk": "^2.0.1",
+                "slash": "^2.0.0"
+              }
+            },
+            "@jest/source-map": {
+              "version": "24.9.0",
+              "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+              "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+              "dev": true,
+              "requires": {
+                "callsites": "^3.0.0",
+                "graceful-fs": "^4.1.15",
+                "source-map": "^0.6.0"
+              }
+            }
+          }
+        },
+        "jest-worker": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
+          "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
+          "dev": true,
+          "requires": {
+            "merge-stream": "^2.0.0",
+            "supports-color": "^6.1.0"
+          }
+        },
+        "merge-stream": {
           "version": "2.0.0",
-          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
-          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
+          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
+          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
+          "dev": true
+        },
+        "pretty-format": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
+          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-regex": "^4.0.0",
+            "ansi-styles": "^3.2.0",
+            "react-is": "^16.8.4"
+          }
+        },
+        "semver": {
+          "version": "6.3.0",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
+          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
           "dev": true
+        },
+        "supports-color": {
+          "version": "6.1.0",
+          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
+          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
+          "dev": true,
+          "requires": {
+            "has-flag": "^3.0.0"
+          }
         }
       }
     },
@@ -3347,32 +5977,183 @@
       }
     },
     "jest-validate": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-24.8.0.tgz",
-      "integrity": "sha512-+/N7VOEMW1Vzsrk3UWBDYTExTPwf68tavEPKDnJzrC6UlHtUDU/fuEdXqFoHzv9XnQ+zW6X3qMZhJ3YexfeLDA==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-24.9.0.tgz",
+      "integrity": "sha512-HPIt6C5ACwiqSiwi+OfSSHbK8sG7akG8eATl+IPKaeIjtPOeBUd/g3J7DghugzxrGjI93qS/+RPKe1H6PqvhRQ==",
       "dev": true,
       "requires": {
-        "@jest/types": "^24.8.0",
-        "camelcase": "^5.0.0",
+        "@jest/types": "^24.9.0",
+        "camelcase": "^5.3.1",
         "chalk": "^2.0.1",
-        "jest-get-type": "^24.8.0",
-        "leven": "^2.1.0",
-        "pretty-format": "^24.8.0"
+        "jest-get-type": "^24.9.0",
+        "leven": "^3.1.0",
+        "pretty-format": "^24.9.0"
+      },
+      "dependencies": {
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-get-type": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
+          "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q==",
+          "dev": true
+        },
+        "pretty-format": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
+          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "ansi-regex": "^4.0.0",
+            "ansi-styles": "^3.2.0",
+            "react-is": "^16.8.4"
+          }
+        }
       }
     },
     "jest-watcher": {
-      "version": "24.8.0",
-      "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-24.8.0.tgz",
-      "integrity": "sha512-SBjwHt5NedQoVu54M5GEx7cl7IGEFFznvd/HNT8ier7cCAx/Qgu9ZMlaTQkvK22G1YOpcWBLQPFSImmxdn3DAw==",
+      "version": "24.9.0",
+      "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-24.9.0.tgz",
+      "integrity": "sha512-+/fLOfKPXXYJDYlks62/4R4GoT+GU1tYZed99JSCOsmzkkF7727RqKrjNAxtfO4YpGv11wybgRvCjR73lK2GZw==",
       "dev": true,
       "requires": {
-        "@jest/test-result": "^24.8.0",
-        "@jest/types": "^24.8.0",
-        "@types/yargs": "^12.0.9",
+        "@jest/test-result": "^24.9.0",
+        "@jest/types": "^24.9.0",
+        "@types/yargs": "^13.0.0",
         "ansi-escapes": "^3.0.0",
         "chalk": "^2.0.1",
-        "jest-util": "^24.8.0",
+        "jest-util": "^24.9.0",
         "string-length": "^2.0.0"
+      },
+      "dependencies": {
+        "@jest/console": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
+          "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
+          "dev": true,
+          "requires": {
+            "@jest/source-map": "^24.9.0",
+            "chalk": "^2.0.1",
+            "slash": "^2.0.0"
+          }
+        },
+        "@jest/fake-timers": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
+          "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0",
+            "jest-message-util": "^24.9.0",
+            "jest-mock": "^24.9.0"
+          }
+        },
+        "@jest/source-map": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
+          "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
+          "dev": true,
+          "requires": {
+            "callsites": "^3.0.0",
+            "graceful-fs": "^4.1.15",
+            "source-map": "^0.6.0"
+          }
+        },
+        "@jest/test-result": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
+          "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/istanbul-lib-coverage": "^2.0.0"
+          }
+        },
+        "@jest/types": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
+          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
+          "dev": true,
+          "requires": {
+            "@types/istanbul-lib-coverage": "^2.0.0",
+            "@types/istanbul-reports": "^1.1.1",
+            "@types/yargs": "^13.0.0"
+          }
+        },
+        "@types/yargs": {
+          "version": "13.0.8",
+          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.8.tgz",
+          "integrity": "sha512-XAvHLwG7UQ+8M4caKIH0ZozIOYay5fQkAgyIXegXT9jPtdIGdhga+sUEdAr1CiG46aB+c64xQEYyEzlwWVTNzA==",
+          "dev": true,
+          "requires": {
+            "@types/yargs-parser": "*"
+          }
+        },
+        "jest-message-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
+          "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
+          "dev": true,
+          "requires": {
+            "@babel/code-frame": "^7.0.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "@types/stack-utils": "^1.0.1",
+            "chalk": "^2.0.1",
+            "micromatch": "^3.1.10",
+            "slash": "^2.0.0",
+            "stack-utils": "^1.0.1"
+          }
+        },
+        "jest-mock": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
+          "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
+          "dev": true,
+          "requires": {
+            "@jest/types": "^24.9.0"
+          }
+        },
+        "jest-util": {
+          "version": "24.9.0",
+          "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
+          "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
+          "dev": true,
+          "requires": {
+            "@jest/console": "^24.9.0",
+            "@jest/fake-timers": "^24.9.0",
+            "@jest/source-map": "^24.9.0",
+            "@jest/test-result": "^24.9.0",
+            "@jest/types": "^24.9.0",
+            "callsites": "^3.0.0",
+            "chalk": "^2.0.1",
+            "graceful-fs": "^4.1.15",
+            "is-ci": "^2.0.0",
+            "mkdirp": "^0.5.1",
+            "slash": "^2.0.0",
+            "source-map": "^0.6.0"
+          }
+        }
       }
     },
     "jest-worker": {
@@ -3505,15 +6286,6 @@
       "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
       "dev": true
     },
-    "lcid": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/lcid/-/lcid-2.0.0.tgz",
-      "integrity": "sha512-avPEb8P8EGnwXKClwsNUgryVjllcRqtMYa49NTsbQagYuT1DcXnl1915oxWjoyGrXR6zH/Y0Zc96xWsPcoDKeA==",
-      "dev": true,
-      "requires": {
-        "invert-kv": "^2.0.0"
-      }
-    },
     "left-pad": {
       "version": "1.3.0",
       "resolved": "https://registry.npmjs.org/left-pad/-/left-pad-1.3.0.tgz",
@@ -3521,9 +6293,9 @@
       "dev": true
     },
     "leven": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/leven/-/leven-2.1.0.tgz",
-      "integrity": "sha1-wuep93IJTe6dNCAq6KzORoeHVYA=",
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
+      "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==",
       "dev": true
     },
     "levn": {
@@ -3616,9 +6388,9 @@
           "dev": true
         },
         "semver": {
-          "version": "5.7.0",
-          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
-          "integrity": "sha512-Ya52jSX2u7QKghxeoFGpLwCtGlt7j0oY9DYb5apt9nPlJ42ID+ulTXESnt/qAQcoSERyZ5sl3LDIOw0nAn/5DA==",
+          "version": "5.7.1",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
+          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
           "dev": true
         }
       }
@@ -3638,15 +6410,6 @@
         "tmpl": "1.0.x"
       }
     },
-    "map-age-cleaner": {
-      "version": "0.1.3",
-      "resolved": "https://registry.npmjs.org/map-age-cleaner/-/map-age-cleaner-0.1.3.tgz",
-      "integrity": "sha512-bJzx6nMoP6PDLPBFmg7+xRKeFZvFboMrGlxmNj9ClvX53KrmvM5bXFXEWjbz4cz1AFn+jWJ9z/DJSz7hrs0w3w==",
-      "dev": true,
-      "requires": {
-        "p-defer": "^1.0.0"
-      }
-    },
     "map-cache": {
       "version": "0.2.2",
       "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
@@ -3662,17 +6425,6 @@
         "object-visit": "^1.0.0"
       }
     },
-    "mem": {
-      "version": "4.3.0",
-      "resolved": "https://registry.npmjs.org/mem/-/mem-4.3.0.tgz",
-      "integrity": "sha512-qX2bG48pTqYRVmDB37rn/6PT7LcR8T7oAX3bf99u1Tt1nzxYfxkgqDwUwolPlXweM0XzBOBFzSx4kfp7KP1s/w==",
-      "dev": true,
-      "requires": {
-        "map-age-cleaner": "^0.1.1",
-        "mimic-fn": "^2.0.0",
-        "p-is-promise": "^2.0.0"
-      }
-    },
     "merge-stream": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-1.0.1.tgz",
@@ -3704,26 +6456,20 @@
       }
     },
     "mime-db": {
-      "version": "1.40.0",
-      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.40.0.tgz",
-      "integrity": "sha512-jYdeOMPy9vnxEqFRRo6ZvTZ8d9oPb+k18PKoYNYUe2stVEBPPwsln/qWzdbmaIvnhZ9v2P+CuecK+fpUfsV2mA==",
+      "version": "1.44.0",
+      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
+      "integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg==",
       "dev": true
     },
     "mime-types": {
-      "version": "2.1.24",
-      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.24.tgz",
-      "integrity": "sha512-WaFHS3MCl5fapm3oLxU4eYDw77IQM2ACcxQ9RIxfaC3ooc6PFuBMGZZsYpvoXS5D5QTWPieo1jjLdAm3TBP3cQ==",
+      "version": "2.1.27",
+      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
+      "integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
       "dev": true,
       "requires": {
-        "mime-db": "1.40.0"
+        "mime-db": "1.44.0"
       }
     },
-    "mimic-fn": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
-      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
-      "dev": true
-    },
     "minimatch": {
       "version": "3.0.4",
       "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
@@ -3815,12 +6561,6 @@
       "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
       "dev": true
     },
-    "neo-async": {
-      "version": "2.6.1",
-      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.1.tgz",
-      "integrity": "sha512-iyam8fBuCUpWeKPGpaNMetEocMt364qkCsfL9JuhjXX6dRnguRVOfk2GZaDpPjcOKiiXCPINZC1GczQ7iTq3Zw==",
-      "dev": true
-    },
     "nice-try": {
       "version": "1.0.5",
       "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
@@ -3844,9 +6584,9 @@
       "dev": true
     },
     "node-notifier": {
-      "version": "5.4.0",
-      "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-5.4.0.tgz",
-      "integrity": "sha512-SUDEb+o71XR5lXSTyivXd9J7fCloE3SyP4lSgt3lU2oSANiox+SxlNRGPjDKrwU1YN3ix2KN/VGGCg0t01rttQ==",
+      "version": "5.4.3",
+      "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-5.4.3.tgz",
+      "integrity": "sha512-M4UBGcs4jeOK9CjTsYwkvH6/MzuUmGCyTW+kCY7uO+1ZVr0+FHGdPdIf5CCLqAaxnRrWidyoQlNkMIIVwbKB8Q==",
       "dev": true,
       "requires": {
         "growly": "^1.3.0",
@@ -3857,9 +6597,9 @@
       },
       "dependencies": {
         "semver": {
-          "version": "5.7.0",
-          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
-          "integrity": "sha512-Ya52jSX2u7QKghxeoFGpLwCtGlt7j0oY9DYb5apt9nPlJ42ID+ulTXESnt/qAQcoSERyZ5sl3LDIOw0nAn/5DA==",
+          "version": "5.7.1",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
+          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
           "dev": true
         }
       }
@@ -3901,16 +6641,10 @@
         "path-key": "^2.0.0"
       }
     },
-    "number-is-nan": {
-      "version": "1.0.1",
-      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
-      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
-      "dev": true
-    },
     "nwsapi": {
-      "version": "2.1.4",
-      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.1.4.tgz",
-      "integrity": "sha512-iGfd9Y6SFdTNldEy2L0GUhcarIutFmk+MPWIn9dmj8NMIup03G08uUF2KGbbmv/Ux4RT0VZJoP/sVbWA6d/VIw==",
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
+      "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==",
       "dev": true
     },
     "oauth-sign": {
@@ -3997,55 +6731,18 @@
         "wrappy": "1"
       }
     },
-    "optimist": {
-      "version": "0.6.1",
-      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
-      "integrity": "sha1-2j6nRob6IaGaERwybpDrFaAZZoY=",
-      "dev": true,
-      "requires": {
-        "minimist": "~0.0.1",
-        "wordwrap": "~0.0.2"
-      },
-      "dependencies": {
-        "minimist": {
-          "version": "0.0.10",
-          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz",
-          "integrity": "sha1-3j+YVD2/lggr5IrRoMfNqDYwHc8=",
-          "dev": true
-        }
-      }
-    },
     "optionator": {
-      "version": "0.8.2",
-      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.2.tgz",
-      "integrity": "sha1-NkxeQJ0/TWMB1sC0wFu6UBgK62Q=",
+      "version": "0.8.3",
+      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
+      "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
       "dev": true,
       "requires": {
         "deep-is": "~0.1.3",
-        "fast-levenshtein": "~2.0.4",
+        "fast-levenshtein": "~2.0.6",
         "levn": "~0.3.0",
         "prelude-ls": "~1.1.2",
         "type-check": "~0.3.2",
-        "wordwrap": "~1.0.0"
-      },
-      "dependencies": {
-        "wordwrap": {
-          "version": "1.0.0",
-          "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
-          "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=",
-          "dev": true
-        }
-      }
-    },
-    "os-locale": {
-      "version": "3.1.0",
-      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-3.1.0.tgz",
-      "integrity": "sha512-Z8l3R4wYWM40/52Z+S265okfFj8Kt2cC2MKY+xNi3kFs+XGI7WXu/I309QQQYbRW4ijiZ+yxs9pqEhJh0DqW3Q==",
-      "dev": true,
-      "requires": {
-        "execa": "^1.0.0",
-        "lcid": "^2.0.0",
-        "mem": "^4.0.0"
+        "word-wrap": "~1.2.3"
       }
     },
     "os-name": {
@@ -4057,12 +6754,6 @@
         "windows-release": "^3.1.0"
       }
     },
-    "p-defer": {
-      "version": "1.0.0",
-      "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
-      "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww=",
-      "dev": true
-    },
     "p-each-series": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/p-each-series/-/p-each-series-1.0.0.tgz",
@@ -4077,12 +6768,6 @@
       "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
       "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
     },
-    "p-is-promise": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-2.1.0.tgz",
-      "integrity": "sha512-Y3W0wlRPK8ZMRbNq97l4M5otioeA5lm1z7bkNkxCka8HSPjR0xRWmpCmc9utiaLP9Jb1eD8BgeIxTW4AIF45Pg==",
-      "dev": true
-    },
     "p-limit": {
       "version": "2.2.0",
       "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.2.0.tgz",
@@ -4188,6 +6873,15 @@
         "node-modules-regexp": "^1.0.0"
       }
     },
+    "pkg-dir": {
+      "version": "3.0.0",
+      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
+      "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
+      "dev": true,
+      "requires": {
+        "find-up": "^3.0.0"
+      }
+    },
     "pn": {
       "version": "1.1.0",
       "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
@@ -4207,9 +6901,9 @@
       "dev": true
     },
     "prettier": {
-      "version": "1.18.2",
-      "resolved": "https://registry.npmjs.org/prettier/-/prettier-1.18.2.tgz",
-      "integrity": "sha512-OeHeMc0JhFE9idD4ZdtNibzY0+TPHSpSSb9h8FqtP+YnoZZ1sl8Vc9b1sasjfymH3SonAF4QcA2+mzHPhMvIiw==",
+      "version": "1.19.1",
+      "resolved": "https://registry.npmjs.org/prettier/-/prettier-1.19.1.tgz",
+      "integrity": "sha512-s7PoyDv/II1ObgQunCbB9PdLmUcBZcnWOcxDh7O0N/UwDEsHyqkW+Qh28jW+mVuCdx7gLB0BotYI1Y6uI9iyew==",
       "dev": true
     },
     "pretty-format": {
@@ -4231,19 +6925,19 @@
       "dev": true
     },
     "prompts": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.1.0.tgz",
-      "integrity": "sha512-+x5TozgqYdOwWsQFZizE/Tra3fKvAoy037kOyU6cgz84n8f6zxngLOV4O32kTwt9FcLCxAqw0P/c8rOr9y+Gfg==",
+      "version": "2.3.2",
+      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.3.2.tgz",
+      "integrity": "sha512-Q06uKs2CkNYVID0VqwfAl9mipo99zkBv/n2JtWY89Yxa3ZabWSrs0e2KTudKVa3peLUvYXMefDqIleLPVUBZMA==",
       "dev": true,
       "requires": {
-        "kleur": "^3.0.2",
-        "sisteransi": "^1.0.0"
+        "kleur": "^3.0.3",
+        "sisteransi": "^1.0.4"
       }
     },
     "psl": {
-      "version": "1.1.33",
-      "resolved": "https://registry.npmjs.org/psl/-/psl-1.1.33.tgz",
-      "integrity": "sha512-LTDP2uSrsc7XCb5lO7A8BI1qYxRe/8EqlRvMeEl6rsnYAqDOl8xHR+8lSAIVfrNaSAlTPTNOCgNjWcoUL3AZsw==",
+      "version": "1.8.0",
+      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
+      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
       "dev": true
     },
     "pump": {
@@ -4349,9 +7043,9 @@
       "dev": true
     },
     "request": {
-      "version": "2.88.0",
-      "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
-      "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
+      "version": "2.88.2",
+      "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
+      "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
       "dev": true,
       "requires": {
         "aws-sign2": "~0.7.0",
@@ -4361,7 +7055,7 @@
         "extend": "~3.0.2",
         "forever-agent": "~0.6.1",
         "form-data": "~2.3.2",
-        "har-validator": "~5.1.0",
+        "har-validator": "~5.1.3",
         "http-signature": "~1.2.0",
         "is-typedarray": "~1.0.0",
         "isstream": "~0.1.2",
@@ -4371,45 +7065,27 @@
         "performance-now": "^2.1.0",
         "qs": "~6.5.2",
         "safe-buffer": "^5.1.2",
-        "tough-cookie": "~2.4.3",
+        "tough-cookie": "~2.5.0",
         "tunnel-agent": "^0.6.0",
         "uuid": "^3.3.2"
-      },
-      "dependencies": {
-        "punycode": {
-          "version": "1.4.1",
-          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
-          "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
-          "dev": true
-        },
-        "tough-cookie": {
-          "version": "2.4.3",
-          "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
-          "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
-          "dev": true,
-          "requires": {
-            "psl": "^1.1.24",
-            "punycode": "^1.4.1"
-          }
-        }
       }
     },
     "request-promise-core": {
-      "version": "1.1.2",
-      "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.2.tgz",
-      "integrity": "sha512-UHYyq1MO8GsefGEt7EprS8UrXsm1TxEvFUX1IMTuSLU2Rh7fTIdFtl8xD7JiEYiWU2dl+NYAjCTksTehQUxPag==",
+      "version": "1.1.3",
+      "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.3.tgz",
+      "integrity": "sha512-QIs2+ArIGQVp5ZYbWD5ZLCY29D5CfWizP8eWnm8FoGD1TX61veauETVQbrV60662V0oFBkrDOuaBI8XgtuyYAQ==",
       "dev": true,
       "requires": {
-        "lodash": "^4.17.11"
+        "lodash": "^4.17.15"
       }
     },
     "request-promise-native": {
-      "version": "1.0.7",
-      "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.7.tgz",
-      "integrity": "sha512-rIMnbBdgNViL37nZ1b3L/VfPOpSi0TqVDQPAvO6U14lMzOLrt5nilxCQqtDKhZeDiW0/hkCXGoQjhgJd/tCh6w==",
+      "version": "1.0.8",
+      "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.8.tgz",
+      "integrity": "sha512-dapwLGqkHtwL5AEbfenuzjTYg35Jd6KPytsC2/TLkVMz8rm+tNt72MGUWT1RP/aYawMpN6HqbNGBQaRcBtjQMQ==",
       "dev": true,
       "requires": {
-        "request-promise-core": "1.1.2",
+        "request-promise-core": "1.1.3",
         "stealthy-require": "^1.1.1",
         "tough-cookie": "^2.3.3"
       }
@@ -4463,9 +7139,9 @@
       "dev": true
     },
     "rimraf": {
-      "version": "2.6.3",
-      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.3.tgz",
-      "integrity": "sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==",
+      "version": "2.7.1",
+      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
+      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
       "dev": true,
       "requires": {
         "glob": "^7.1.3"
@@ -4580,9 +7256,15 @@
       "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0="
     },
     "sisteransi": {
-      "version": "1.0.0",
-      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.0.tgz",
-      "integrity": "sha512-N+z4pHB4AmUv0SjveWRd6q1Nj5w62m5jodv+GD8lvmbY/83T/rpbJGZOnK5T149OldDj4Db07BSv9xY4K6NTPQ==",
+      "version": "1.0.5",
+      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
+      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==",
+      "dev": true
+    },
+    "slash": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
+      "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
       "dev": true
     },
     "snapdragon": {
@@ -4718,9 +7400,9 @@
       }
     },
     "source-map-support": {
-      "version": "0.5.12",
-      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.12.tgz",
-      "integrity": "sha512-4h2Pbvyy15EE02G+JOZpUCmqWJuqrs+sEkzewTm++BPi7Hvn/HwcqLAcNxYAyI0x13CpPPn+kMjl+hplXMHITQ==",
+      "version": "0.5.19",
+      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
+      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
       "dev": true,
       "requires": {
         "buffer-from": "^1.0.0",
@@ -4852,30 +7534,14 @@
       }
     },
     "string-width": {
-      "version": "2.1.1",
-      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
-      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
+      "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
       "dev": true,
       "requires": {
+        "emoji-regex": "^7.0.1",
         "is-fullwidth-code-point": "^2.0.0",
-        "strip-ansi": "^4.0.0"
-      },
-      "dependencies": {
-        "ansi-regex": {
-          "version": "3.0.0",
-          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
-          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
-          "dev": true
-        },
-        "strip-ansi": {
-          "version": "4.0.0",
-          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
-          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
-          "dev": true,
-          "requires": {
-            "ansi-regex": "^3.0.0"
-          }
-        }
+        "strip-ansi": "^5.1.0"
       }
     },
     "string_decoder": {
@@ -5089,22 +7755,11 @@
       }
     },
     "typescript": {
-      "version": "3.5.2",
-      "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.5.2.tgz",
-      "integrity": "sha512-7KxJovlYhTX5RaRbUdkAXN1KUZ8PwWlTzQdHV6xNqvuFOs7+WBo10TQUqT19Q/Jz2hk5v9TQDIhyLhhJY4p5AA==",
+      "version": "3.8.3",
+      "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.8.3.tgz",
+      "integrity": "sha512-MYlEfn5VrLNsgudQTVJeNaQFUAI7DkhnOjdpAp4T+ku1TfQClewlbSuTVHiA+8skNBgaf02TL/kLOvig4y3G8w==",
       "dev": true
     },
-    "uglify-js": {
-      "version": "3.7.7",
-      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.7.7.tgz",
-      "integrity": "sha512-FeSU+hi7ULYy6mn8PKio/tXsdSXN35lm4KgV2asx00kzrLU9Pi3oAslcJT70Jdj7PHX29gGUPOT6+lXGBbemhA==",
-      "dev": true,
-      "optional": true,
-      "requires": {
-        "commander": "~2.20.3",
-        "source-map": "~0.6.1"
-      }
-    },
     "union-value": {
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
@@ -5229,12 +7884,12 @@
       }
     },
     "w3c-hr-time": {
-      "version": "1.0.1",
-      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.1.tgz",
-      "integrity": "sha1-gqwr/2PZUOqeMYmlimViX+3xkEU=",
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
+      "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
       "dev": true,
       "requires": {
-        "browser-process-hrtime": "^0.1.2"
+        "browser-process-hrtime": "^1.0.0"
       }
     },
     "walker": {
@@ -5300,57 +7955,21 @@
         "execa": "^1.0.0"
       }
     },
-    "wordwrap": {
-      "version": "0.0.3",
-      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",
-      "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc=",
+    "word-wrap": {
+      "version": "1.2.3",
+      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
+      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
       "dev": true
     },
     "wrap-ansi": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
-      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
+      "version": "5.1.0",
+      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
+      "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
       "dev": true,
       "requires": {
-        "string-width": "^1.0.1",
-        "strip-ansi": "^3.0.1"
-      },
-      "dependencies": {
-        "ansi-regex": {
-          "version": "2.1.1",
-          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
-          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
-          "dev": true
-        },
-        "is-fullwidth-code-point": {
-          "version": "1.0.0",
-          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
-          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
-          "dev": true,
-          "requires": {
-            "number-is-nan": "^1.0.0"
-          }
-        },
-        "string-width": {
-          "version": "1.0.2",
-          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
-          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
-          "dev": true,
-          "requires": {
-            "code-point-at": "^1.0.0",
-            "is-fullwidth-code-point": "^1.0.0",
-            "strip-ansi": "^3.0.0"
-          }
-        },
-        "strip-ansi": {
-          "version": "3.0.1",
-          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
-          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
-          "dev": true,
-          "requires": {
-            "ansi-regex": "^2.0.0"
-          }
-        }
+        "ansi-styles": "^3.2.0",
+        "string-width": "^3.0.0",
+        "strip-ansi": "^5.0.0"
       }
     },
     "wrappy": {
@@ -5391,37 +8010,27 @@
       "dev": true
     },
     "yargs": {
-      "version": "12.0.5",
-      "resolved": "https://registry.npmjs.org/yargs/-/yargs-12.0.5.tgz",
-      "integrity": "sha512-Lhz8TLaYnxq/2ObqHDql8dX8CJi97oHxrjUcYtzKbbykPtVW9WB+poxI+NM2UIzsMgNCZTIf0AQwsjK5yMAqZw==",
+      "version": "13.3.2",
+      "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.2.tgz",
+      "integrity": "sha512-AX3Zw5iPruN5ie6xGRIDgqkT+ZhnRlZMLMHAs8tg7nRruy2Nb+i5o9bwghAogtM08q1dpr2LVoS8KSTMYpWXUw==",
       "dev": true,
       "requires": {
-        "cliui": "^4.0.0",
-        "decamelize": "^1.2.0",
+        "cliui": "^5.0.0",
         "find-up": "^3.0.0",
-        "get-caller-file": "^1.0.1",
-        "os-locale": "^3.0.0",
+        "get-caller-file": "^2.0.1",
         "require-directory": "^2.1.1",
-        "require-main-filename": "^1.0.1",
+        "require-main-filename": "^2.0.0",
         "set-blocking": "^2.0.0",
-        "string-width": "^2.0.0",
+        "string-width": "^3.0.0",
         "which-module": "^2.0.0",
-        "y18n": "^3.2.1 || ^4.0.0",
-        "yargs-parser": "^11.1.1"
-      },
-      "dependencies": {
-        "require-main-filename": {
-          "version": "1.0.1",
-          "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
-          "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",
-          "dev": true
-        }
+        "y18n": "^4.0.0",
+        "yargs-parser": "^13.1.2"
       }
     },
     "yargs-parser": {
-      "version": "11.1.1",
-      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-11.1.1.tgz",
-      "integrity": "sha512-C6kB/WJDiaxONLJQnF8ccx9SEeoTTLek8RVbaOIsrAUS8VrBEXfmeSnCZxygc+XC2sNMBIwOOnfcxiynjHsVSQ==",
+      "version": "13.1.2",
+      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.2.tgz",
+      "integrity": "sha512-3lbsNRf/j+A4QuSZfDRA7HRSfWrzO0YjqTJd5kjAq37Zep1CEgaYmrH9Q3GwPiB9cHyd1Y1UwggGhJGoxipbzg==",
       "dev": true,
       "requires": {
         "camelcase": "^5.0.0",
diff --git a/package.json b/package.json
index cba3b3424..d5a0eb13b 100644
--- a/package.json
+++ b/package.json
@@ -35,10 +35,10 @@
     "@types/node": "^12.0.4",
     "@types/semver": "^6.0.0",
     "@zeit/ncc": "^0.21.0",
-    "jest": "^24.8.0",
+    "jest": "^24.9.0",
     "jest-circus": "^24.7.1",
-    "prettier": "^1.17.1",
+    "prettier": "^1.19.1",
     "ts-jest": "^24.0.2",
-    "typescript": "^3.5.1"
+    "typescript": "^3.8.3"
   }
 }
diff --git a/src/installer.ts b/src/installer.ts
index 86a3c75d1..d392c6620 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -1,21 +1,18 @@
+import os = require('os');
 import * as assert from 'assert';
 import * as core from '@actions/core';
 import * as hc from '@actions/http-client';
 import * as io from '@actions/io';
 import * as tc from '@actions/tool-cache';
-import * as os from 'os';
 import * as path from 'path';
 import * as semver from 'semver';
-import { Url } from 'url';
-
-let osPlat: string = os.platform();
-let osArch: string = translateArchToDistUrl(os.arch());
+import {Url} from 'url';
 
 //
 // Node versions interface
 // see https://nodejs.org/dist/index.json
 //
-interface INodeVersion {
+export interface INodeVersion {
   version: string;
   files: string[];
 }
@@ -27,7 +24,14 @@ interface INodeVersionInfo {
   fileName: string;
 }
 
-export async function getNode(versionSpec: string, stable: boolean, token: string) {
+export async function getNode(
+  versionSpec: string,
+  stable: boolean,
+  token: string
+) {
+  let osPlat: string = os.platform();
+  let osArch: string = translateArchToDistUrl(os.arch());
+
   // check cache
   let info: INodeVersionInfo | null = null;
   let toolPath: string;
@@ -37,13 +41,15 @@ export async function getNode(versionSpec: string, stable: boolean, token: strin
   if (toolPath) {
     console.log(`Found in cache @ ${toolPath}`);
   } else {
-    console.log(`Attempting to download ${versionSpec}...`)
+    console.log(`Attempting to download ${versionSpec}...`);
     let info = await getInfoFromManifest(versionSpec, stable, token);
     if (!info) {
-      console.log('Not found in manifest.  Falling back to download directly from Node')
+      console.log(
+        'Not found in manifest.  Falling back to download directly from Node'
+      );
       info = await getInfoFromDist(versionSpec);
-    }   
-  
+    }
+
     if (!info) {
       throw new Error(
         `Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`
@@ -52,7 +58,7 @@ export async function getNode(versionSpec: string, stable: boolean, token: strin
 
     console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
 
-    let downloadPath = ""
+    let downloadPath = '';
     try {
       downloadPath = await tc.downloadTool(info.downloadUrl, undefined, token);
     } catch (err) {
@@ -77,7 +83,7 @@ export async function getNode(versionSpec: string, stable: boolean, token: strin
     //
     // Install into the local tool cache - node extracts with a root folder that matches the fileName downloaded
     //
-    toolPath = await tc.cacheDir(extPath, 'node', info.resolvedVersion);    
+    toolPath = await tc.cacheDir(extPath, 'node', info.resolvedVersion);
   }
 
   //
@@ -94,12 +100,20 @@ export async function getNode(versionSpec: string, stable: boolean, token: strin
   core.addPath(toolPath);
 }
 
-async function getInfoFromManifest(versionSpec: string, stable: boolean, token: string): Promise<INodeVersionInfo | null> {
+async function getInfoFromManifest(
+  versionSpec: string,
+  stable: boolean,
+  token: string
+): Promise<INodeVersionInfo | null> {
   let info: INodeVersionInfo | null = null;
-  const releases = await tc.getManifestFromRepo("actions", "node-versions", token)
-  console.log(`matching ${versionSpec}...`)
+  const releases = await tc.getManifestFromRepo(
+    'actions',
+    'node-versions',
+    token
+  );
+  console.log(`matching ${versionSpec}...`);
   const rel = await tc.findFromManifest(versionSpec, stable, releases);
-  
+
   if (rel && rel.files.length > 0) {
     info = <INodeVersionInfo>{};
     info.resolvedVersion = rel.version;
@@ -111,20 +125,18 @@ async function getInfoFromManifest(versionSpec: string, stable: boolean, token:
   return info;
 }
 
-async function getInfoFromDist(versionSpec: string): Promise<INodeVersionInfo | null> {
+async function getInfoFromDist(
+  versionSpec: string
+): Promise<INodeVersionInfo | null> {
+  let osPlat: string = os.platform();
+  let osArch: string = translateArchToDistUrl(os.arch());
+
   let info: INodeVersionInfo | null = null;
   let version: string;
-  
-  // If explicit version don't query
-  if (semver.clean(versionSpec) != null) {
-    // version to download
-    version = versionSpec;
-  } else {
-    // query nodejs.org for a matching version
-    version = await queryDistForMatch(versionSpec);
-    if (!version) {
-      return null;
-    }
+
+  version = await queryDistForMatch(versionSpec);
+  if (!version) {
+    return null;
   }
 
   //
@@ -143,7 +155,7 @@ async function getInfoFromDist(versionSpec: string): Promise<INodeVersionInfo |
     downloadUrl: url,
     resolvedVersion: version,
     fileName: fileName
-  }
+  };
 }
 
 // TODO - should we just export this from @actions/tool-cache? Lifted directly from there
@@ -175,6 +187,9 @@ function evaluateVersions(versions: string[], versionSpec: string): string {
 }
 
 async function queryDistForMatch(versionSpec: string): Promise<string> {
+  let osPlat: string = os.platform();
+  let osArch: string = translateArchToDistUrl(os.arch());
+
   // node offers a json list of versions
   let dataFileName: string;
   switch (osPlat) {
@@ -192,13 +207,8 @@ async function queryDistForMatch(versionSpec: string): Promise<string> {
   }
 
   let versions: string[] = [];
-  let dataUrl = 'https://nodejs.org/dist/index.json';
-  let httpClient = new hc.HttpClient('setup-node', [], {
-    allowRetries: true,
-    maxRetries: 3
-  });
-  let response = await httpClient.getJson<INodeVersion[]>(dataUrl);
-  let nodeVersions = response.result || [];
+  let nodeVersions = await module.exports.getVersionsFromDist();
+
   nodeVersions.forEach((nodeVersion: INodeVersion) => {
     // ensure this version supports your os and platform
     if (nodeVersion.files.indexOf(dataFileName) >= 0) {
@@ -211,6 +221,16 @@ async function queryDistForMatch(versionSpec: string): Promise<string> {
   return version;
 }
 
+export async function getVersionsFromDist(): Promise<INodeVersion[]> {
+  let dataUrl = 'https://nodejs.org/dist/index.json';
+  let httpClient = new hc.HttpClient('setup-node', [], {
+    allowRetries: true,
+    maxRetries: 3
+  });
+  let response = await httpClient.getJson<INodeVersion[]>(dataUrl);
+  return response.result || [];
+}
+
 // For non LTS versions of Node, the files we need (for Windows) are sometimes located
 // in a different folder than they normally are for other versions.
 // Normally the format is similar to: https://nodejs.org/dist/v5.10.1/node-v5.10.1-win-x64.7z
@@ -226,6 +246,9 @@ async function queryDistForMatch(versionSpec: string): Promise<string> {
 async function acquireNodeFromFallbackLocation(
   version: string
 ): Promise<string> {
+  let osPlat: string = os.platform();
+  let osArch: string = translateArchToDistUrl(os.arch());
+
   // Create temporary folder to download in to
   const tempDownloadFolder: string =
     'temp_' + Math.floor(Math.random() * 2000000000);
diff --git a/src/main.ts b/src/main.ts
new file mode 100644
index 000000000..6a3486c0f
--- /dev/null
+++ b/src/main.ts
@@ -0,0 +1,41 @@
+import * as core from '@actions/core';
+import * as installer from './installer';
+import * as auth from './authutil';
+import * as path from 'path';
+
+export async function run() {
+  try {
+    //
+    // Version is optional.  If supplied, install / use from the tool cache
+    // If not supplied then task is still used to setup proxy, auth, etc...
+    //
+    let version = core.getInput('node-version');
+    if (!version) {
+      version = core.getInput('version');
+    }
+
+    console.log(`version: ${version}`);
+    if (version) {
+      let token = core.getInput('token');
+      let stable = (core.getInput('stable') || 'true').toUpperCase() === 'TRUE';
+      await installer.getNode(version, stable, token);
+    }
+
+    const registryUrl: string = core.getInput('registry-url');
+    const alwaysAuth: string = core.getInput('always-auth');
+    if (registryUrl) {
+      auth.configAuthentication(registryUrl, alwaysAuth);
+    }
+
+    const matchersPath = path.join(__dirname, '..', '.github');
+    console.log(`##[add-matcher]${path.join(matchersPath, 'tsc.json')}`);
+    console.log(
+      `##[add-matcher]${path.join(matchersPath, 'eslint-stylish.json')}`
+    );
+    console.log(
+      `##[add-matcher]${path.join(matchersPath, 'eslint-compact.json')}`
+    );
+  } catch (error) {
+    core.setFailed(error.message);
+  }
+}
diff --git a/src/setup-node.ts b/src/setup-node.ts
index 8c7e9809d..e2a31b466 100644
--- a/src/setup-node.ts
+++ b/src/setup-node.ts
@@ -1,43 +1,3 @@
-import * as core from '@actions/core';
-import * as installer from './installer';
-import * as auth from './authutil';
-import * as path from 'path';
-
-async function run() {
-  try {
-    //
-    // Version is optional.  If supplied, install / use from the tool cache
-    // If not supplied then task is still used to setup proxy, auth, etc...
-    //
-    let version = core.getInput('node-version');
-    if (!version) {
-      version = core.getInput('version');  
-    }
-
-    console.log(`version: ${version}`);
-    if (version) {
-      let token = core.getInput('token');
-      let stable = (core.getInput('stable') || 'true').toUpperCase() === 'TRUE';
-      await installer.getNode(version, stable, token);
-    }
-
-    const registryUrl: string = core.getInput('registry-url');
-    const alwaysAuth: string = core.getInput('always-auth');
-    if (registryUrl) {
-      auth.configAuthentication(registryUrl, alwaysAuth);
-    }
-
-    const matchersPath = path.join(__dirname, '..', '.github');
-    console.log(`##[add-matcher]${path.join(matchersPath, 'tsc.json')}`);
-    console.log(
-      `##[add-matcher]${path.join(matchersPath, 'eslint-stylish.json')}`
-    );
-    console.log(
-      `##[add-matcher]${path.join(matchersPath, 'eslint-compact.json')}`
-    );
-  } catch (error) {
-    core.setFailed(error.message);
-  }
-}
+import {run} from './main';
 
 run();
diff --git a/tsconfig.json b/tsconfig.json
index cc50f16b1..234fd9cb9 100644
--- a/tsconfig.json
+++ b/tsconfig.json
@@ -7,6 +7,7 @@
     ],
     "outDir": "./lib",                        /* Redirect output structure to the directory. */
     "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
+    "sourceMap": true,
     "strict": true,                           /* Enable all strict type-checking options. */
     "noImplicitAny": false,                 /* Raise error on expressions and declarations with an implied 'any' type. */
     "esModuleInterop": true                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */

From 889def385df2244ceaf81db7b42fe5c785ad4d90 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 10:38:09 -0400
Subject: [PATCH 03/30] update ts-jest

---
 package-lock.json | 25 ++++++++++++++++---------
 package.json      |  2 +-
 2 files changed, 17 insertions(+), 10 deletions(-)

diff --git a/package-lock.json b/package-lock.json
index dbe9bccfa..f0ecde2a4 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -6341,6 +6341,12 @@
       "resolved": "https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz",
       "integrity": "sha1-LRd/ZS+jHpObRDjVNBSZ36OCXpk="
     },
+    "lodash.memoize": {
+      "version": "4.1.2",
+      "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
+      "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4=",
+      "dev": true
+    },
     "lodash.set": {
       "version": "4.3.2",
       "resolved": "https://registry.npmjs.org/lodash.set/-/lodash.set-4.3.2.tgz",
@@ -6396,9 +6402,9 @@
       }
     },
     "make-error": {
-      "version": "1.3.5",
-      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.5.tgz",
-      "integrity": "sha512-c3sIjNUow0+8swNwVpqoH4YCShKNFkMaw6oH1mNS2haDZQqkeZFlHS3dhoeEbKKmJB4vXpJucU6oH75aDYeE9g==",
+      "version": "1.3.6",
+      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
+      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
       "dev": true
     },
     "makeerror": {
@@ -7686,15 +7692,16 @@
       "dev": true
     },
     "ts-jest": {
-      "version": "24.0.2",
-      "resolved": "https://registry.npmjs.org/ts-jest/-/ts-jest-24.0.2.tgz",
-      "integrity": "sha512-h6ZCZiA1EQgjczxq+uGLXQlNgeg02WWJBbeT8j6nyIBRQdglqbvzDoHahTEIiS6Eor6x8mK6PfZ7brQ9Q6tzHw==",
+      "version": "24.3.0",
+      "resolved": "https://registry.npmjs.org/ts-jest/-/ts-jest-24.3.0.tgz",
+      "integrity": "sha512-Hb94C/+QRIgjVZlJyiWwouYUF+siNJHJHknyspaOcZ+OQAIdFG/UrdQVXw/0B8Z3No34xkUXZJpOTy9alOWdVQ==",
       "dev": true,
       "requires": {
         "bs-logger": "0.x",
         "buffer-from": "1.x",
         "fast-json-stable-stringify": "2.x",
         "json5": "2.x",
+        "lodash.memoize": "4.x",
         "make-error": "1.x",
         "mkdirp": "0.x",
         "resolve": "1.x",
@@ -7709,9 +7716,9 @@
           "dev": true
         },
         "semver": {
-          "version": "5.7.0",
-          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
-          "integrity": "sha512-Ya52jSX2u7QKghxeoFGpLwCtGlt7j0oY9DYb5apt9nPlJ42ID+ulTXESnt/qAQcoSERyZ5sl3LDIOw0nAn/5DA==",
+          "version": "5.7.1",
+          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
+          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
           "dev": true
         },
         "yargs-parser": {
diff --git a/package.json b/package.json
index d5a0eb13b..c2c99d42b 100644
--- a/package.json
+++ b/package.json
@@ -38,7 +38,7 @@
     "jest": "^24.9.0",
     "jest-circus": "^24.7.1",
     "prettier": "^1.19.1",
-    "ts-jest": "^24.0.2",
+    "ts-jest": "^24.3.0",
     "typescript": "^3.8.3"
   }
 }

From ec6092f7d2834fdce3ccacdb8a787fd445365ff3 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 10:45:32 -0400
Subject: [PATCH 04/30] dbg

---
 __tests__/authutil.test.ts | 9 ++++++++-
 1 file changed, 8 insertions(+), 1 deletion(-)

diff --git a/__tests__/authutil.test.ts b/__tests__/authutil.test.ts
index 373cbec5d..a8b9ac2f6 100644
--- a/__tests__/authutil.test.ts
+++ b/__tests__/authutil.test.ts
@@ -52,6 +52,11 @@ describe('authutil tests', () => {
     });
   }, 100000);
 
+
+  function dbg(message: string) {
+    process.stderr.write('dbg::' + message + '::\n');
+  }
+
   afterAll(async () => {
     if (_runnerDir) {
       await io.rmRF(_runnerDir);
@@ -62,7 +67,9 @@ describe('authutil tests', () => {
     await auth.configAuthentication('https://registry.npmjs.org/', 'false');
 
     expect(fs.statSync(rcFile)).toBeDefined();
-    expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
+    let contents = fs.readFileSync(rcFile, {encoding: 'utf8'});
+    dbg(contents);
+    expect(contents).toMatchSnapshot();
   });
 
   it('Appends trailing slash to registry', async () => {

From 1c2f59fb677877b4e57fcc7cc1be64c8724b8c7e Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 10:46:48 -0400
Subject: [PATCH 05/30] format

---
 __tests__/authutil.test.ts | 1 -
 1 file changed, 1 deletion(-)

diff --git a/__tests__/authutil.test.ts b/__tests__/authutil.test.ts
index a8b9ac2f6..94df21b53 100644
--- a/__tests__/authutil.test.ts
+++ b/__tests__/authutil.test.ts
@@ -52,7 +52,6 @@ describe('authutil tests', () => {
     });
   }, 100000);
 
-
   function dbg(message: string) {
     process.stderr.write('dbg::' + message + '::\n');
   }

From 22c0aea623097de5c3b80848e7aa9d1c0b35d093 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 11:06:05 -0400
Subject: [PATCH 06/30] cya snapshot

---
 __tests__/__snapshots__/authutil.test.ts.snap | 31 -----------------
 __tests__/authutil.test.ts                    | 34 +++++++++++++++----
 2 files changed, 28 insertions(+), 37 deletions(-)
 delete mode 100644 __tests__/__snapshots__/authutil.test.ts.snap

diff --git a/__tests__/__snapshots__/authutil.test.ts.snap b/__tests__/__snapshots__/authutil.test.ts.snap
deleted file mode 100644
index 14bee8aa2..000000000
--- a/__tests__/__snapshots__/authutil.test.ts.snap
+++ /dev/null
@@ -1,31 +0,0 @@
-// Jest Snapshot v1, https://goo.gl/fbAQLP
-
-exports[`authutil tests Appends trailing slash to registry 1`] = `
-"//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
-registry=https://registry.npmjs.org/
-always-auth=false"
-`;
-
-exports[`authutil tests Automatically configures GPR scope 1`] = `
-"npm.pkg.github.com/:_authToken=\${NODE_AUTH_TOKEN}
-@ownername:registry=npm.pkg.github.com/
-always-auth=false"
-`;
-
-exports[`authutil tests Configures scoped npm registries 1`] = `
-"//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
-@myscope:registry=https://registry.npmjs.org/
-always-auth=false"
-`;
-
-exports[`authutil tests Sets up npmrc for always-auth true 1`] = `
-"//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
-registry=https://registry.npmjs.org/
-always-auth=true"
-`;
-
-exports[`authutil tests Sets up npmrc for npmjs 1`] = `
-"//registry.npmjs.org/:_authToken=\${NODE_AUTH_TOKEN}
-registry=https://registry.npmjs.org/
-always-auth=false"
-`;
diff --git a/__tests__/authutil.test.ts b/__tests__/authutil.test.ts
index 94df21b53..13f262cc5 100644
--- a/__tests__/authutil.test.ts
+++ b/__tests__/authutil.test.ts
@@ -1,3 +1,4 @@
+import os = require('os');
 import * as fs from 'fs';
 import * as path from 'path';
 import * as core from '@actions/core';
@@ -62,20 +63,35 @@ describe('authutil tests', () => {
     }
   }, 100000);
 
+  function readRcFile(rcFile: string) {
+    let rc = {};
+    let contents = fs.readFileSync(rcFile, {encoding: 'utf8'});
+    for (const line of contents.split(os.EOL)) {
+      let parts = line.split('=');
+      if (parts.length == 2) {
+        rc[parts[0].trim()] = parts[1].trim();
+      }
+    }
+    return rc;
+  }
+
   it('Sets up npmrc for npmjs', async () => {
     await auth.configAuthentication('https://registry.npmjs.org/', 'false');
 
     expect(fs.statSync(rcFile)).toBeDefined();
     let contents = fs.readFileSync(rcFile, {encoding: 'utf8'});
-    dbg(contents);
-    expect(contents).toMatchSnapshot();
+    let rc = readRcFile(rcFile);
+    expect(rc["registry"]).toBe("https://registry.npmjs.org/");
+    expect(rc["always-auth"]).toBe("false");
   });
 
   it('Appends trailing slash to registry', async () => {
     await auth.configAuthentication('https://registry.npmjs.org', 'false');
 
     expect(fs.statSync(rcFile)).toBeDefined();
-    expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
+    let rc = readRcFile(rcFile);
+    expect(rc["registry"]).toBe("https://registry.npmjs.org/");
+    expect(rc["always-auth"]).toBe("false");
   });
 
   it('Configures scoped npm registries', async () => {
@@ -83,19 +99,25 @@ describe('authutil tests', () => {
     await auth.configAuthentication('https://registry.npmjs.org', 'false');
 
     expect(fs.statSync(rcFile)).toBeDefined();
-    expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
+    let rc = readRcFile(rcFile);
+    expect(rc["@myscope:registry"]).toBe("https://registry.npmjs.org/");
+    expect(rc["always-auth"]).toBe("false");
   });
 
   it('Automatically configures GPR scope', async () => {
     await auth.configAuthentication('npm.pkg.github.com', 'false');
 
     expect(fs.statSync(rcFile)).toBeDefined();
-    expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
+    let rc = readRcFile(rcFile);
+    expect(rc["@ownername:registry"]).toBe("npm.pkg.github.com/");
+    expect(rc["always-auth"]).toBe("false");
   });
 
   it('Sets up npmrc for always-auth true', async () => {
     await auth.configAuthentication('https://registry.npmjs.org/', 'true');
     expect(fs.statSync(rcFile)).toBeDefined();
-    expect(fs.readFileSync(rcFile, {encoding: 'utf8'})).toMatchSnapshot();
+    let rc = readRcFile(rcFile);
+    expect(rc["registry"]).toBe("https://registry.npmjs.org/");
+    expect(rc["always-auth"]).toBe("true");
   });
 });

From 8a1d983ace7ef45d5425252ce6be8e52dc50f39a Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 11:08:26 -0400
Subject: [PATCH 07/30] format

---
 __tests__/authutil.test.ts | 20 ++++++++++----------
 1 file changed, 10 insertions(+), 10 deletions(-)

diff --git a/__tests__/authutil.test.ts b/__tests__/authutil.test.ts
index 13f262cc5..85dcb3139 100644
--- a/__tests__/authutil.test.ts
+++ b/__tests__/authutil.test.ts
@@ -81,8 +81,8 @@ describe('authutil tests', () => {
     expect(fs.statSync(rcFile)).toBeDefined();
     let contents = fs.readFileSync(rcFile, {encoding: 'utf8'});
     let rc = readRcFile(rcFile);
-    expect(rc["registry"]).toBe("https://registry.npmjs.org/");
-    expect(rc["always-auth"]).toBe("false");
+    expect(rc['registry']).toBe('https://registry.npmjs.org/');
+    expect(rc['always-auth']).toBe('false');
   });
 
   it('Appends trailing slash to registry', async () => {
@@ -90,8 +90,8 @@ describe('authutil tests', () => {
 
     expect(fs.statSync(rcFile)).toBeDefined();
     let rc = readRcFile(rcFile);
-    expect(rc["registry"]).toBe("https://registry.npmjs.org/");
-    expect(rc["always-auth"]).toBe("false");
+    expect(rc['registry']).toBe('https://registry.npmjs.org/');
+    expect(rc['always-auth']).toBe('false');
   });
 
   it('Configures scoped npm registries', async () => {
@@ -100,8 +100,8 @@ describe('authutil tests', () => {
 
     expect(fs.statSync(rcFile)).toBeDefined();
     let rc = readRcFile(rcFile);
-    expect(rc["@myscope:registry"]).toBe("https://registry.npmjs.org/");
-    expect(rc["always-auth"]).toBe("false");
+    expect(rc['@myscope:registry']).toBe('https://registry.npmjs.org/');
+    expect(rc['always-auth']).toBe('false');
   });
 
   it('Automatically configures GPR scope', async () => {
@@ -109,15 +109,15 @@ describe('authutil tests', () => {
 
     expect(fs.statSync(rcFile)).toBeDefined();
     let rc = readRcFile(rcFile);
-    expect(rc["@ownername:registry"]).toBe("npm.pkg.github.com/");
-    expect(rc["always-auth"]).toBe("false");
+    expect(rc['@ownername:registry']).toBe('npm.pkg.github.com/');
+    expect(rc['always-auth']).toBe('false');
   });
 
   it('Sets up npmrc for always-auth true', async () => {
     await auth.configAuthentication('https://registry.npmjs.org/', 'true');
     expect(fs.statSync(rcFile)).toBeDefined();
     let rc = readRcFile(rcFile);
-    expect(rc["registry"]).toBe("https://registry.npmjs.org/");
-    expect(rc["always-auth"]).toBe("true");
+    expect(rc['registry']).toBe('https://registry.npmjs.org/');
+    expect(rc['always-auth']).toBe('true');
   });
 });

From efab84ad3c2bdbbe08bb56458149fb9ec6ae4a5e Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 11:12:54 -0400
Subject: [PATCH 08/30] dist

---
 dist/index.js | 13 ++-----------
 1 file changed, 2 insertions(+), 11 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index 251c94143..ce5efe1e3 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -4729,7 +4729,7 @@ module.exports = require("https");
 /***/ 215:
 /***/ (function(module) {
 
-module.exports = {"_args":[["@octokit/rest@16.38.1","/Users/bryan/Projects/setup-node"]],"_from":"@octokit/rest@16.38.1","_id":"@octokit/rest@16.38.1","_inBundle":false,"_integrity":"sha512-zyNFx+/Bd1EXt7LQjfrc6H4wryBQ/oDuZeZhGMBSFr1eMPFDmpEweFQR3R25zjKwBQpDY7L5GQO6A3XSaOfV1w==","_location":"/@octokit/rest","_phantomChildren":{"os-name":"3.1.0"},"_requested":{"type":"version","registry":true,"raw":"@octokit/rest@16.38.1","name":"@octokit/rest","escapedName":"@octokit%2frest","scope":"@octokit","rawSpec":"16.38.1","saveSpec":null,"fetchSpec":"16.38.1"},"_requiredBy":["/@actions/github"],"_resolved":"https://registry.npmjs.org/@octokit/rest/-/rest-16.38.1.tgz","_spec":"16.38.1","_where":"/Users/bryan/Projects/setup-node","author":{"name":"Gregor Martynus","url":"https://github.com/gr2m"},"bugs":{"url":"https://github.com/octokit/rest.js/issues"},"bundlesize":[{"path":"./dist/octokit-rest.min.js.gz","maxSize":"33 kB"}],"contributors":[{"name":"Mike de Boer","email":"info@mikedeboer.nl"},{"name":"Fabian Jakobs","email":"fabian@c9.io"},{"name":"Joe Gallo","email":"joe@brassafrax.com"},{"name":"Gregor Martynus","url":"https://github.com/gr2m"}],"dependencies":{"@octokit/auth-token":"^2.4.0","@octokit/request":"^5.2.0","@octokit/request-error":"^1.0.2","atob-lite":"^2.0.0","before-after-hook":"^2.0.0","btoa-lite":"^1.0.0","deprecation":"^2.0.0","lodash.get":"^4.4.2","lodash.set":"^4.3.2","lodash.uniq":"^4.5.0","octokit-pagination-methods":"^1.1.0","once":"^1.4.0","universal-user-agent":"^4.0.0"},"description":"GitHub REST API client for Node.js","devDependencies":{"@gimenete/type-writer":"^0.1.3","@octokit/auth":"^1.1.1","@octokit/fixtures-server":"^5.0.6","@octokit/graphql":"^4.2.0","@types/node":"^13.1.0","bundlesize":"^0.18.0","chai":"^4.1.2","compression-webpack-plugin":"^3.1.0","cypress":"^3.0.0","glob":"^7.1.2","http-proxy-agent":"^3.0.0","lodash.camelcase":"^4.3.0","lodash.merge":"^4.6.1","lodash.upperfirst":"^4.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","mustache":"^4.0.0","nock":"^11.3.3","npm-run-all":"^4.1.2","nyc":"^15.0.0","prettier":"^1.14.2","proxy":"^1.0.0","semantic-release":"^16.0.0","sinon":"^8.0.0","sinon-chai":"^3.0.0","sort-keys":"^4.0.0","string-to-arraybuffer":"^1.0.0","string-to-jsdoc-comment":"^1.0.0","typescript":"^3.3.1","webpack":"^4.0.0","webpack-bundle-analyzer":"^3.0.0","webpack-cli":"^3.0.0"},"files":["index.js","index.d.ts","lib","plugins"],"homepage":"https://github.com/octokit/rest.js#readme","keywords":["octokit","github","rest","api-client"],"license":"MIT","name":"@octokit/rest","nyc":{"ignore":["test"]},"publishConfig":{"access":"public"},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"repository":{"type":"git","url":"git+https://github.com/octokit/rest.js.git"},"scripts":{"build":"npm-run-all build:*","build:browser":"npm-run-all build:browser:*","build:browser:development":"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json","build:browser:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map","build:ts":"npm run -s update-endpoints:typescript","coverage":"nyc report --reporter=html && open coverage/index.html","generate-bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","lint":"prettier --check '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json","lint:fix":"prettier --write '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json","postvalidate:ts":"tsc --noEmit --target es6 test/typescript-validate.ts","prebuild:browser":"mkdirp dist/","pretest":"npm run -s lint","prevalidate:ts":"npm run -s build:ts","start-fixtures-server":"octokit-fixtures-server","test":"nyc mocha test/mocha-node-setup.js \"test/*/**/*-test.js\"","test:browser":"cypress run --browser chrome","update-endpoints":"npm-run-all update-endpoints:*","update-endpoints:code":"node scripts/update-endpoints/code","update-endpoints:fetch-json":"node scripts/update-endpoints/fetch-json","update-endpoints:typescript":"node scripts/update-endpoints/typescript","validate:ts":"tsc --target es6 --noImplicitAny index.d.ts"},"types":"index.d.ts","version":"16.38.1"};
+module.exports = {"name":"@octokit/rest","version":"16.38.1","publishConfig":{"access":"public"},"description":"GitHub REST API client for Node.js","keywords":["octokit","github","rest","api-client"],"author":"Gregor Martynus (https://github.com/gr2m)","contributors":[{"name":"Mike de Boer","email":"info@mikedeboer.nl"},{"name":"Fabian Jakobs","email":"fabian@c9.io"},{"name":"Joe Gallo","email":"joe@brassafrax.com"},{"name":"Gregor Martynus","url":"https://github.com/gr2m"}],"repository":"https://github.com/octokit/rest.js","dependencies":{"@octokit/auth-token":"^2.4.0","@octokit/request":"^5.2.0","@octokit/request-error":"^1.0.2","atob-lite":"^2.0.0","before-after-hook":"^2.0.0","btoa-lite":"^1.0.0","deprecation":"^2.0.0","lodash.get":"^4.4.2","lodash.set":"^4.3.2","lodash.uniq":"^4.5.0","octokit-pagination-methods":"^1.1.0","once":"^1.4.0","universal-user-agent":"^4.0.0"},"devDependencies":{"@gimenete/type-writer":"^0.1.3","@octokit/auth":"^1.1.1","@octokit/fixtures-server":"^5.0.6","@octokit/graphql":"^4.2.0","@types/node":"^13.1.0","bundlesize":"^0.18.0","chai":"^4.1.2","compression-webpack-plugin":"^3.1.0","cypress":"^3.0.0","glob":"^7.1.2","http-proxy-agent":"^3.0.0","lodash.camelcase":"^4.3.0","lodash.merge":"^4.6.1","lodash.upperfirst":"^4.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","mustache":"^4.0.0","nock":"^11.3.3","npm-run-all":"^4.1.2","nyc":"^15.0.0","prettier":"^1.14.2","proxy":"^1.0.0","semantic-release":"^16.0.0","sinon":"^8.0.0","sinon-chai":"^3.0.0","sort-keys":"^4.0.0","string-to-arraybuffer":"^1.0.0","string-to-jsdoc-comment":"^1.0.0","typescript":"^3.3.1","webpack":"^4.0.0","webpack-bundle-analyzer":"^3.0.0","webpack-cli":"^3.0.0"},"types":"index.d.ts","scripts":{"coverage":"nyc report --reporter=html && open coverage/index.html","lint":"prettier --check '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json","lint:fix":"prettier --write '{lib,plugins,scripts,test}/**/*.{js,json,ts}' 'docs/*.{js,json}' 'docs/src/**/*' index.js README.md package.json","pretest":"npm run -s lint","test":"nyc mocha test/mocha-node-setup.js \"test/*/**/*-test.js\"","test:browser":"cypress run --browser chrome","build":"npm-run-all build:*","build:ts":"npm run -s update-endpoints:typescript","prebuild:browser":"mkdirp dist/","build:browser":"npm-run-all build:browser:*","build:browser:development":"webpack --mode development --entry . --output-library=Octokit --output=./dist/octokit-rest.js --profile --json > dist/bundle-stats.json","build:browser:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=Octokit --output-path=./dist --output-filename=octokit-rest.min.js --devtool source-map","generate-bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","update-endpoints":"npm-run-all update-endpoints:*","update-endpoints:fetch-json":"node scripts/update-endpoints/fetch-json","update-endpoints:code":"node scripts/update-endpoints/code","update-endpoints:typescript":"node scripts/update-endpoints/typescript","prevalidate:ts":"npm run -s build:ts","validate:ts":"tsc --target es6 --noImplicitAny index.d.ts","postvalidate:ts":"tsc --noEmit --target es6 test/typescript-validate.ts","start-fixtures-server":"octokit-fixtures-server"},"license":"MIT","files":["index.js","index.d.ts","lib","plugins"],"nyc":{"ignore":["test"]},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"bundlesize":[{"path":"./dist/octokit-rest.min.js.gz","maxSize":"33 kB"}],"_resolved":"https://registry.npmjs.org/@octokit/rest/-/rest-16.38.1.tgz","_integrity":"sha512-zyNFx+/Bd1EXt7LQjfrc6H4wryBQ/oDuZeZhGMBSFr1eMPFDmpEweFQR3R25zjKwBQpDY7L5GQO6A3XSaOfV1w==","_from":"@octokit/rest@16.38.1"};
 
 /***/ }),
 
@@ -6879,7 +6879,7 @@ function normalizePaginatedListResponse(octokit, url, response) {
 /***/ 314:
 /***/ (function(module) {
 
-module.exports = {"_args":[["@octokit/graphql@2.1.3","/Users/bryan/Projects/setup-node"]],"_from":"@octokit/graphql@2.1.3","_id":"@octokit/graphql@2.1.3","_inBundle":false,"_integrity":"sha512-XoXJqL2ondwdnMIW3wtqJWEwcBfKk37jO/rYkoxNPEVeLBDGsGO1TCWggrAlq3keGt/O+C/7VepXnukUxwt5vA==","_location":"/@octokit/graphql","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"@octokit/graphql@2.1.3","name":"@octokit/graphql","escapedName":"@octokit%2fgraphql","scope":"@octokit","rawSpec":"2.1.3","saveSpec":null,"fetchSpec":"2.1.3"},"_requiredBy":["/@actions/github"],"_resolved":"https://registry.npmjs.org/@octokit/graphql/-/graphql-2.1.3.tgz","_spec":"2.1.3","_where":"/Users/bryan/Projects/setup-node","author":{"name":"Gregor Martynus","url":"https://github.com/gr2m"},"bugs":{"url":"https://github.com/octokit/graphql.js/issues"},"bundlesize":[{"path":"./dist/octokit-graphql.min.js.gz","maxSize":"5KB"}],"dependencies":{"@octokit/request":"^5.0.0","universal-user-agent":"^2.0.3"},"description":"GitHub GraphQL API client for browsers and Node","devDependencies":{"chai":"^4.2.0","compression-webpack-plugin":"^2.0.0","coveralls":"^3.0.3","cypress":"^3.1.5","fetch-mock":"^7.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","npm-run-all":"^4.1.3","nyc":"^14.0.0","semantic-release":"^15.13.3","simple-mock":"^0.8.0","standard":"^12.0.1","webpack":"^4.29.6","webpack-bundle-analyzer":"^3.1.0","webpack-cli":"^3.2.3"},"files":["lib"],"homepage":"https://github.com/octokit/graphql.js#readme","keywords":["octokit","github","api","graphql"],"license":"MIT","main":"index.js","name":"@octokit/graphql","publishConfig":{"access":"public"},"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"repository":{"type":"git","url":"git+https://github.com/octokit/graphql.js.git"},"scripts":{"build":"npm-run-all build:*","build:development":"webpack --mode development --entry . --output-library=octokitGraphql --output=./dist/octokit-graphql.js --profile --json > dist/bundle-stats.json","build:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=octokitGraphql --output-path=./dist --output-filename=octokit-graphql.min.js --devtool source-map","bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","coverage":"nyc report --reporter=html && open coverage/index.html","coverage:upload":"nyc report --reporter=text-lcov | coveralls","prebuild":"mkdirp dist/","pretest":"standard","test":"nyc mocha test/*-test.js","test:browser":"cypress run --browser chrome"},"standard":{"globals":["describe","before","beforeEach","afterEach","after","it","expect"]},"version":"2.1.3"};
+module.exports = {"name":"@octokit/graphql","version":"2.1.3","publishConfig":{"access":"public"},"description":"GitHub GraphQL API client for browsers and Node","main":"index.js","scripts":{"prebuild":"mkdirp dist/","build":"npm-run-all build:*","build:development":"webpack --mode development --entry . --output-library=octokitGraphql --output=./dist/octokit-graphql.js --profile --json > dist/bundle-stats.json","build:production":"webpack --mode production --entry . --plugin=compression-webpack-plugin --output-library=octokitGraphql --output-path=./dist --output-filename=octokit-graphql.min.js --devtool source-map","bundle-report":"webpack-bundle-analyzer dist/bundle-stats.json --mode=static --no-open --report dist/bundle-report.html","coverage":"nyc report --reporter=html && open coverage/index.html","coverage:upload":"nyc report --reporter=text-lcov | coveralls","pretest":"standard","test":"nyc mocha test/*-test.js","test:browser":"cypress run --browser chrome"},"repository":{"type":"git","url":"https://github.com/octokit/graphql.js.git"},"keywords":["octokit","github","api","graphql"],"author":"Gregor Martynus (https://github.com/gr2m)","license":"MIT","bugs":{"url":"https://github.com/octokit/graphql.js/issues"},"homepage":"https://github.com/octokit/graphql.js#readme","dependencies":{"@octokit/request":"^5.0.0","universal-user-agent":"^2.0.3"},"devDependencies":{"chai":"^4.2.0","compression-webpack-plugin":"^2.0.0","coveralls":"^3.0.3","cypress":"^3.1.5","fetch-mock":"^7.3.1","mkdirp":"^0.5.1","mocha":"^6.0.0","npm-run-all":"^4.1.3","nyc":"^14.0.0","semantic-release":"^15.13.3","simple-mock":"^0.8.0","standard":"^12.0.1","webpack":"^4.29.6","webpack-bundle-analyzer":"^3.1.0","webpack-cli":"^3.2.3"},"bundlesize":[{"path":"./dist/octokit-graphql.min.js.gz","maxSize":"5KB"}],"release":{"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["dist/*","!dist/*.map.gz"]}]},"standard":{"globals":["describe","before","beforeEach","afterEach","after","it","expect"]},"files":["lib"],"_resolved":"https://registry.npmjs.org/@octokit/graphql/-/graphql-2.1.3.tgz","_integrity":"sha512-XoXJqL2ondwdnMIW3wtqJWEwcBfKk37jO/rYkoxNPEVeLBDGsGO1TCWggrAlq3keGt/O+C/7VepXnukUxwt5vA==","_from":"@octokit/graphql@2.1.3"};
 
 /***/ }),
 
@@ -11646,15 +11646,6 @@ class HttpClient {
                 // we need to finish reading the response before reassigning response
                 // which will leak the open socket.
                 await response.readBody();
-                // strip authorization header if redirected to a different hostname
-                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
-                    for (let header in headers) {
-                        // header names are case insensitive
-                        if (header.toLowerCase() === 'authorization') {
-                            delete headers[header];
-                        }
-                    }
-                }                
                 // let's make the request with the new redirectUrl
                 info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                 response = await this.requestRaw(info, data);

From 2bdb2ab1c9c7b4b2fd5b8c52e164982a093a6f6c Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 16:26:50 -0400
Subject: [PATCH 09/30] strip 1 on fallback extract

---
 dist/index.js     | 48 ++++++++++++++++++++++++++++++++++++++---------
 package-lock.json | 12 ++++++------
 package.json      |  2 +-
 src/installer.ts  |  6 +++++-
 validate/test.sh  |  2 +-
 5 files changed, 52 insertions(+), 18 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index ce5efe1e3..eb5297546 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -563,13 +563,20 @@ var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, ge
         step((generator = generator.apply(thisArg, _arguments || [])).next());
     });
 };
+var __importStar = (this && this.__importStar) || function (mod) {
+    if (mod && mod.__esModule) return mod;
+    var result = {};
+    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
+    result["default"] = mod;
+    return result;
+};
 Object.defineProperty(exports, "__esModule", { value: true });
-const os = __webpack_require__(87);
-const events = __webpack_require__(614);
-const child = __webpack_require__(129);
-const path = __webpack_require__(622);
-const io = __webpack_require__(1);
-const ioUtil = __webpack_require__(672);
+const os = __importStar(__webpack_require__(87));
+const events = __importStar(__webpack_require__(614));
+const child = __importStar(__webpack_require__(129));
+const path = __importStar(__webpack_require__(622));
+const io = __importStar(__webpack_require__(1));
+const ioUtil = __importStar(__webpack_require__(672));
 /* eslint-disable @typescript-eslint/unbound-method */
 const IS_WINDOWS = process.platform === 'win32';
 /*
@@ -1013,6 +1020,12 @@ class ToolRunner extends events.EventEmitter {
                         resolve(exitCode);
                     }
                 });
+                if (this.options.input) {
+                    if (!cp.stdin) {
+                        throw new Error('child process missing stdin');
+                    }
+                    cp.stdin.end(this.options.input);
+                }
             });
         });
     }
@@ -11076,7 +11089,13 @@ function extractTar(file, dest, flags = 'xz') {
         core.debug(versionOutput.trim());
         const isGnuTar = versionOutput.toUpperCase().includes('GNU TAR');
         // Initialize args
-        const args = [flags];
+        let args;
+        if (flags instanceof Array) {
+            args = flags;
+        }
+        else {
+            args = [flags];
+        }
         let destArg = dest;
         let fileArg = file;
         if (IS_WINDOWS && isGnuTar) {
@@ -12998,7 +13017,11 @@ function getNode(versionSpec, stable, token) {
                 extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
             }
             else {
-                extPath = yield tc.extractTar(downloadPath);
+                extPath = yield tc.extractTar(downloadPath, undefined, [
+                    'xz',
+                    '--strip',
+                    '1'
+                ]);
             }
             //
             // Install into the local tool cache - node extracts with a root folder that matches the fileName downloaded
@@ -16735,8 +16758,15 @@ var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, ge
         step((generator = generator.apply(thisArg, _arguments || [])).next());
     });
 };
+var __importStar = (this && this.__importStar) || function (mod) {
+    if (mod && mod.__esModule) return mod;
+    var result = {};
+    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
+    result["default"] = mod;
+    return result;
+};
 Object.defineProperty(exports, "__esModule", { value: true });
-const tr = __webpack_require__(9);
+const tr = __importStar(__webpack_require__(9));
 /**
  * Exec a command.
  * Output will be streamed to the live console.
diff --git a/package-lock.json b/package-lock.json
index f0ecde2a4..26be5a560 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -10,9 +10,9 @@
       "integrity": "sha512-IbCx7oefq+Gi6FWbSs2Fnw8VkEI6Y4gvjrYprY3RV//ksq/KPMlClOerJ4jRosyal6zkUIc8R9fS/cpRMlGClg=="
     },
     "@actions/exec": {
-      "version": "1.0.3",
-      "resolved": "https://registry.npmjs.org/@actions/exec/-/exec-1.0.3.tgz",
-      "integrity": "sha512-TogJGnueOmM7ntCi0ASTUj4LapRRtDfj57Ja4IhPmg2fls28uVOPbAn8N+JifaOumN2UG3oEO/Ixek2A4NcYSA==",
+      "version": "1.0.4",
+      "resolved": "https://registry.npmjs.org/@actions/exec/-/exec-1.0.4.tgz",
+      "integrity": "sha512-4DPChWow9yc9W3WqEbUj8Nr86xkpyE29ZzWjXucHItclLbEW6jr80Zx4nqv18QL6KK65+cifiQZXvnqgTV6oHw==",
       "requires": {
         "@actions/io": "^1.0.1"
       }
@@ -40,9 +40,9 @@
       "integrity": "sha512-J8KuFqVPr3p6U8W93DOXlXW6zFvrQAJANdS+vw0YhusLIq+bszW8zmK2Fh1C2kDPX8FMvwIl1OUcFgvJoXLbAg=="
     },
     "@actions/tool-cache": {
-      "version": "1.5.2",
-      "resolved": "https://registry.npmjs.org/@actions/tool-cache/-/tool-cache-1.5.2.tgz",
-      "integrity": "sha512-40A1St0GEo+QvHV1YRjStEoQcKKMaip+zNXPgGHcjYXCdZ7cl1LGlwOpsVVqwk+6ue/shFTS76KC1A02mVVCQA==",
+      "version": "1.5.3",
+      "resolved": "https://registry.npmjs.org/@actions/tool-cache/-/tool-cache-1.5.3.tgz",
+      "integrity": "sha512-G6OMdGvKVkApJv+nRURpi1nZUKonqWq37fqK8rdJLJr5PuWAEo/cqD/ibano7Da/LRx1yYFEMwO6RXkB2VaIqQ==",
       "requires": {
         "@actions/core": "^1.2.0",
         "@actions/exec": "^1.0.0",
diff --git a/package.json b/package.json
index c2c99d42b..30352b928 100644
--- a/package.json
+++ b/package.json
@@ -27,7 +27,7 @@
     "@actions/github": "^1.1.0",
     "@actions/http-client": "^1.0.6",
     "@actions/io": "^1.0.2",
-    "@actions/tool-cache": "^1.5.2",
+    "@actions/tool-cache": "^1.5.3",
     "semver": "^6.1.1"
   },
   "devDependencies": {
diff --git a/src/installer.ts b/src/installer.ts
index d392c6620..00bc64fc7 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -77,7 +77,11 @@ export async function getNode(
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
       extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
     } else {
-      extPath = await tc.extractTar(downloadPath);
+      extPath = await tc.extractTar(downloadPath, undefined, [
+        'xz',
+        '--strip',
+        '1'
+      ]);
     }
 
     //
diff --git a/validate/test.sh b/validate/test.sh
index d68687e95..f066edb84 100755
--- a/validate/test.sh
+++ b/validate/test.sh
@@ -13,7 +13,7 @@ rm -rf ./node
 export RUNNER_TOOL_CACHE=$(pwd)
 export RUNNER_TEMP="${RUNNER_TOOL_CACHE}/temp"
 export INPUT_STABLE=true
-export INPUT_VERSION="12.x"
+export INPUT_VERSION="12"   #"0.12.7"  #"12" #"11.15.0"
 # export your PAT with repo scope before running
 export INPUT_TOKEN=$GITHUB_TOKEN
 

From e3ad114cc4feffcaaff86cfb773b04d6a0629fc8 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sat, 2 May 2020 16:39:25 -0400
Subject: [PATCH 10/30] dist

---
 dist/index.js | 1 -
 1 file changed, 1 deletion(-)

diff --git a/dist/index.js b/dist/index.js
index f9bc97180..eb5297546 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -16072,7 +16072,6 @@ function hasNextPage (link) {
 "use strict";
 
 Object.defineProperty(exports, "__esModule", { value: true });
-
 const main_1 = __webpack_require__(198);
 main_1.run();
 //# sourceMappingURL=setup-node.js.map

From 2fb08c4f31e9a60d6a8f0cbe25dbcd6822c03116 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 09:49:04 -0400
Subject: [PATCH 11/30] update workflows

---
 .github/workflows/build-test.yml |  32 ++++++++++
 .github/workflows/proxy.yml      |  56 +++++++++++++++++
 .github/workflows/versions.yml   |  46 ++++++++++++++
 .github/workflows/workflow.yml   | 100 -------------------------------
 4 files changed, 134 insertions(+), 100 deletions(-)
 create mode 100644 .github/workflows/build-test.yml
 create mode 100644 .github/workflows/proxy.yml
 create mode 100644 .github/workflows/versions.yml
 delete mode 100644 .github/workflows/workflow.yml

diff --git a/.github/workflows/build-test.yml b/.github/workflows/build-test.yml
new file mode 100644
index 000000000..5de6abfa5
--- /dev/null
+++ b/.github/workflows/build-test.yml
@@ -0,0 +1,32 @@
+name: build-test
+
+on:
+  pull_request:
+    paths-ignore:
+      - '**.md'    
+  push:    
+    branches:
+      - master
+      - releases/*
+    paths-ignore:
+      - '**.md'
+      
+jobs:
+  build:
+    runs-on: ${{ matrix.operating-system }}
+    strategy:
+      matrix:
+        operating-system: [ubuntu-latest, windows-latest]
+    steps:
+      - uses: actions/checkout@v2
+      - name: Setup node 12
+        uses: actions/setup-node@v1
+        with:
+          node-version: 12.x
+      - run: npm ci
+      - run: npm run build
+      - run: npm run format-check
+      - run: npm test
+      - name: Verify no unstaged changes
+        if: runner.os != 'windows'
+        run: __tests__/verify-no-unstaged-changes.sh
diff --git a/.github/workflows/proxy.yml b/.github/workflows/proxy.yml
new file mode 100644
index 000000000..5f206c5b6
--- /dev/null
+++ b/.github/workflows/proxy.yml
@@ -0,0 +1,56 @@
+name: proxy
+
+on:
+  pull_request:
+    paths-ignore:
+      - '**.md'    
+  push:    
+    branches:
+      - master
+      - releases/*
+    paths-ignore:
+      - '**.md'
+      
+jobs:
+  test-proxy:
+    runs-on: ubuntu-latest
+    strategy:    
+      fail-fast: false    
+    container:
+      image: ubuntu:latest
+      options: --dns 127.0.0.1
+    services:
+      squid-proxy:
+        image: datadog/squid:latest
+        ports:
+          - 3128:3128
+    env:
+      https_proxy: http://squid-proxy:3128
+    steps:
+      - uses: actions/checkout@v2
+      - name: Clear tool cache
+        run: rm -rf $RUNNER_TOOL_CACHE/*
+      - name: Setup node 10
+        uses: ./
+        with:
+          node-version: 10.x
+      - name: Verify node and npm
+        run: __tests__/verify-node.sh 10
+
+  test-bypass-proxy:
+    runs-on: ubuntu-latest
+    strategy:    
+      fail-fast: false
+    env:
+      https_proxy: http://no-such-proxy:3128
+      no_proxy: github.com,nodejs.org,registry.npmjs.org,*.s3.amazonaws.com
+    steps:
+      - uses: actions/checkout@v2
+      - name: Clear tool cache
+        run: rm -rf $RUNNER_TOOL_CACHE/*
+      - name: Setup node 10
+        uses: ./
+        with:
+          node-version: 10.x
+      - name: Verify node and npm
+        run: __tests__/verify-node.sh 10
diff --git a/.github/workflows/versions.yml b/.github/workflows/versions.yml
new file mode 100644
index 000000000..20361907c
--- /dev/null
+++ b/.github/workflows/versions.yml
@@ -0,0 +1,46 @@
+name: versions
+
+on:
+  pull_request:
+    paths-ignore:
+      - '**.md'    
+  push:    
+    branches:
+      - master
+      - releases/*
+    paths-ignore:
+      - '**.md'
+      
+jobs:
+  versions:
+    runs-on: ${{ matrix.operating-system }}
+    strategy:
+      fail-fast: false
+      matrix:
+        operating-system: [ubuntu-latest, windows-latest]
+    defaults:
+      run:
+        shell: bash
+    steps:
+      - uses: actions/checkout@v2
+      # test version from node manifest
+      - name: Setup node 12 from manifest
+        uses: ./
+        with:
+          node-version: 12
+      - name: Verify node and npm
+        run: __tests__/verify-node.sh 12
+      # test version that falls through to node dist
+      - name: Setup node 11 from dist
+        uses: ./
+        with:
+          node-version: 11
+      - name: Verify node and npm
+        run: __tests__/verify-node.sh 11
+      - name: Setup node 0.12.18 from dist
+        uses: ./                 
+        with:
+          node-version: 0.12.18
+      - name: Verify node
+        shell: bash
+        run: __tests__/verify-node.sh 0.12.18 SKIP_NPM      
diff --git a/.github/workflows/workflow.yml b/.github/workflows/workflow.yml
deleted file mode 100644
index b97bd5418..000000000
--- a/.github/workflows/workflow.yml
+++ /dev/null
@@ -1,100 +0,0 @@
-name: Main workflow
-
-on:
-  pull_request:
-  push:
-    branches:
-      - master
-      - releases/*
-
-jobs:
-  build:
-    runs-on: ${{ matrix.operating-system }}
-    strategy:
-      matrix:
-        operating-system: [ubuntu-latest, windows-latest]
-    steps:
-      - uses: actions/checkout@v2
-      - name: Setup node 12
-        uses: actions/setup-node@v1
-        with:
-          node-version: 12.x
-      - run: npm ci
-      - run: npm run build
-      - run: npm run format-check
-      - run: npm test
-      - name: Verify no unstaged changes
-        if: runner.os != 'windows'
-        run: __tests__/verify-no-unstaged-changes.sh
-
-  test:
-    runs-on: ${{ matrix.operating-system }}
-    strategy:
-      matrix:
-        operating-system: [ubuntu-latest, windows-latest]
-    defaults:
-      run:
-        shell: bash
-    steps:
-      - uses: actions/checkout@v2
-      - name: Clear tool cache
-        run: rm -rf $RUNNER_TOOL_CACHE/*
-      - name: Setup node 10
-        uses: ./
-        with:
-          node-version: 10.x
-      - name: Verify node and npm
-        run: __tests__/verify-node.sh 10
-
-  test-fallback:
-    runs-on: windows-latest
-    steps:
-      - uses: actions/checkout@v2
-      - name: Clear tool cache
-        run: mv "${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"
-      - name: Setup node 0.12.18 # For non LTS versions of Node, the zip is not always available
-        uses: ./                 # and falls back to downloading node.exe and node.lib
-        with:
-          node-version: 0.12.18
-      - name: Verify node
-        shell: bash
-        run: __tests__/verify-node.sh 0.12.18 SKIP_NPM
-
-  test-proxy:
-    runs-on: ubuntu-latest
-    container:
-      image: ubuntu:latest
-      options: --dns 127.0.0.1
-    services:
-      squid-proxy:
-        image: datadog/squid:latest
-        ports:
-          - 3128:3128
-    env:
-      https_proxy: http://squid-proxy:3128
-    steps:
-      - uses: actions/checkout@v2
-      - name: Clear tool cache
-        run: rm -rf $RUNNER_TOOL_CACHE/*
-      - name: Setup node 10
-        uses: ./
-        with:
-          node-version: 10.x
-      - name: Verify node and npm
-        run: __tests__/verify-node.sh 10
-
-  test-bypass-proxy:
-    runs-on: ubuntu-latest
-    env:
-      https_proxy: http://no-such-proxy:3128
-      no_proxy: github.com,nodejs.org,registry.npmjs.org
-    steps:
-      - uses: actions/checkout@v2
-      - name: Clear tool cache
-        run: rm -rf $RUNNER_TOOL_CACHE/*
-      - name: Setup node 10
-        uses: ./
-        with:
-          node-version: 10.x
-      - name: Verify node and npm
-        run: __tests__/verify-node.sh 10

From 5e5ef8fd55ab8e77c675e508b3951596f8ef12ff Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 10:12:44 -0400
Subject: [PATCH 12/30] update

---
 .github/workflows/versions.yml | 14 +++++++-------
 1 file changed, 7 insertions(+), 7 deletions(-)

diff --git a/.github/workflows/versions.yml b/.github/workflows/versions.yml
index 20361907c..71c85d0e0 100644
--- a/.github/workflows/versions.yml
+++ b/.github/workflows/versions.yml
@@ -23,6 +23,13 @@ jobs:
         shell: bash
     steps:
       - uses: actions/checkout@v2
+      # test version that falls through to node dist
+      - name: Setup node 11 from dist
+        uses: ./
+        with:
+          node-version: 11          
+      - name: Verify node and npm
+        run: __tests__/verify-node.sh 11      
       # test version from node manifest
       - name: Setup node 12 from manifest
         uses: ./
@@ -30,13 +37,6 @@ jobs:
           node-version: 12
       - name: Verify node and npm
         run: __tests__/verify-node.sh 12
-      # test version that falls through to node dist
-      - name: Setup node 11 from dist
-        uses: ./
-        with:
-          node-version: 11
-      - name: Verify node and npm
-        run: __tests__/verify-node.sh 11
       - name: Setup node 0.12.18 from dist
         uses: ./                 
         with:

From 1b2d431484f28d15efe4491ef07cb6ca2fc94eb5 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 15:44:03 -0400
Subject: [PATCH 13/30] win change

---
 .github/workflows/proxy.yml | 4 ++--
 dist/index.js               | 4 +++-
 src/installer.ts            | 7 ++++++-
 3 files changed, 11 insertions(+), 4 deletions(-)

diff --git a/.github/workflows/proxy.yml b/.github/workflows/proxy.yml
index 5f206c5b6..ee09dbba3 100644
--- a/.github/workflows/proxy.yml
+++ b/.github/workflows/proxy.yml
@@ -43,12 +43,12 @@ jobs:
       fail-fast: false
     env:
       https_proxy: http://no-such-proxy:3128
-      no_proxy: github.com,nodejs.org,registry.npmjs.org,*.s3.amazonaws.com
+      no_proxy: api.github.com,github.com,nodejs.org,registry.npmjs.org,*.s3.amazonaws.com
     steps:
       - uses: actions/checkout@v2
       - name: Clear tool cache
         run: rm -rf $RUNNER_TOOL_CACHE/*
-      - name: Setup node 10
+      - name: Setup node 12
         uses: ./
         with:
           node-version: 10.x
diff --git a/dist/index.js b/dist/index.js
index eb5297546..12fd7a378 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -13014,7 +13014,9 @@ function getNode(versionSpec, stable, token) {
             let extPath;
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-                extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
+                // 7z extracts to filename folder
+                const srcPath = path.join(downloadPath, `node-v${info.resolvedVersion}-win-${osArch}`);
+                extPath = yield tc.extract7z(srcPath, undefined, _7zPath);
             }
             else {
                 extPath = yield tc.extractTar(downloadPath, undefined, [
diff --git a/src/installer.ts b/src/installer.ts
index 00bc64fc7..60435362e 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -75,7 +75,12 @@ export async function getNode(
     let extPath: string;
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-      extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
+      // 7z extracts to filename folder
+      const srcPath = path.join(
+        downloadPath,
+        `node-v${info.resolvedVersion}-win-${osArch}`
+      );
+      extPath = await tc.extract7z(srcPath, undefined, _7zPath);
     } else {
       extPath = await tc.extractTar(downloadPath, undefined, [
         'xz',

From c8617ac6ae049fa1deedf11725a612fce4f1a5d9 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 16:13:11 -0400
Subject: [PATCH 14/30] win change

---
 dist/index.js    |  6 +++---
 src/installer.ts | 10 ++++------
 2 files changed, 7 insertions(+), 9 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index 12fd7a378..ff179ba82 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -13014,9 +13014,9 @@ function getNode(versionSpec, stable, token) {
             let extPath;
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-                // 7z extracts to filename folder
-                const srcPath = path.join(downloadPath, `node-v${info.resolvedVersion}-win-${osArch}`);
-                extPath = yield tc.extract7z(srcPath, undefined, _7zPath);
+                extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
+                // 7z extracts to folder matching file name
+                extPath = path.join(extPath, path.basename(downloadPath));
             }
             else {
                 extPath = yield tc.extractTar(downloadPath, undefined, [
diff --git a/src/installer.ts b/src/installer.ts
index 60435362e..4f0ea3b65 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -75,12 +75,10 @@ export async function getNode(
     let extPath: string;
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-      // 7z extracts to filename folder
-      const srcPath = path.join(
-        downloadPath,
-        `node-v${info.resolvedVersion}-win-${osArch}`
-      );
-      extPath = await tc.extract7z(srcPath, undefined, _7zPath);
+
+      extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
+      // 7z extracts to folder matching file name
+      extPath = path.join(extPath, path.basename(downloadPath));
     } else {
       extPath = await tc.extractTar(downloadPath, undefined, [
         'xz',

From 42746a4f3cdf9d8a65b1eca2b0665ebac043f66f Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 16:18:09 -0400
Subject: [PATCH 15/30] dbg

---
 dist/index.js    | 3 +++
 src/installer.ts | 4 ++++
 2 files changed, 7 insertions(+)

diff --git a/dist/index.js b/dist/index.js
index ff179ba82..bbdbd9678 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -12975,6 +12975,7 @@ const io = __importStar(__webpack_require__(1));
 const tc = __importStar(__webpack_require__(533));
 const path = __importStar(__webpack_require__(622));
 const semver = __importStar(__webpack_require__(280));
+const fs = __webpack_require__(747);
 function getNode(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
         let osPlat = os.platform();
@@ -13014,6 +13015,8 @@ function getNode(versionSpec, stable, token) {
             let extPath;
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
+                console.log(`downloadPath: ${downloadPath}`);
+                console.log(JSON.stringify(fs.statSync(downloadPath)));
                 extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
                 // 7z extracts to folder matching file name
                 extPath = path.join(extPath, path.basename(downloadPath));
diff --git a/src/installer.ts b/src/installer.ts
index 4f0ea3b65..61400a381 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -7,6 +7,7 @@ import * as tc from '@actions/tool-cache';
 import * as path from 'path';
 import * as semver from 'semver';
 import {Url} from 'url';
+import fs = require('fs');
 
 //
 // Node versions interface
@@ -76,6 +77,9 @@ export async function getNode(
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
 
+      console.log(`downloadPath: ${downloadPath}`);
+      console.log(JSON.stringify(fs.statSync(downloadPath)));
+
       extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
       // 7z extracts to folder matching file name
       extPath = path.join(extPath, path.basename(downloadPath));

From a4145577de7201cb8f573a9371c24a229bb7167c Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 16:34:20 -0400
Subject: [PATCH 16/30] dbg

---
 dist/index.js    |  5 +++--
 src/installer.ts | 11 +++++++++--
 2 files changed, 12 insertions(+), 4 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index bbdbd9678..fd6e5dd3d 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -13015,11 +13015,12 @@ function getNode(versionSpec, stable, token) {
             let extPath;
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-                console.log(`downloadPath: ${downloadPath}`);
+                console.log(`downloadPath: ${downloadPath}`, `isFile: ${fs.statSync(downloadPath).isFile()}`);
                 console.log(JSON.stringify(fs.statSync(downloadPath)));
                 extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
                 // 7z extracts to folder matching file name
-                extPath = path.join(extPath, path.basename(downloadPath));
+                extPath = path.join(extPath, path.basename(info.fileName, '.7z'));
+                console.log(`extPath: ${extPath}`, `isDirectory: ${fs.statSync(extPath).isDirectory()}`);
             }
             else {
                 extPath = yield tc.extractTar(downloadPath, undefined, [
diff --git a/src/installer.ts b/src/installer.ts
index 61400a381..942d24419 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -77,12 +77,19 @@ export async function getNode(
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
 
-      console.log(`downloadPath: ${downloadPath}`);
+      console.log(
+        `downloadPath: ${downloadPath}`,
+        `isFile: ${fs.statSync(downloadPath).isFile()}`
+      );
       console.log(JSON.stringify(fs.statSync(downloadPath)));
 
       extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
       // 7z extracts to folder matching file name
-      extPath = path.join(extPath, path.basename(downloadPath));
+      extPath = path.join(extPath, path.basename(info.fileName, '.7z'));
+      console.log(
+        `extPath: ${extPath}`,
+        `isDirectory: ${fs.statSync(extPath).isDirectory()}`
+      );
     } else {
       extPath = await tc.extractTar(downloadPath, undefined, [
         'xz',

From f7c5caf60596e1f0b8d4574c5905b2b930a41381 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 16:37:13 -0400
Subject: [PATCH 17/30] dbg

---
 .github/workflows/versions.yml | 19 ++++++++++---------
 src/installer.ts               | 11 -----------
 2 files changed, 10 insertions(+), 20 deletions(-)

diff --git a/.github/workflows/versions.yml b/.github/workflows/versions.yml
index 71c85d0e0..4ff033d90 100644
--- a/.github/workflows/versions.yml
+++ b/.github/workflows/versions.yml
@@ -29,18 +29,19 @@ jobs:
         with:
           node-version: 11          
       - name: Verify node and npm
-        run: __tests__/verify-node.sh 11      
-      # test version from node manifest
-      - name: Setup node 12 from manifest
-        uses: ./
-        with:
-          node-version: 12
-      - name: Verify node and npm
-        run: __tests__/verify-node.sh 12
+        run: __tests__/verify-node.sh 11
+      # test old versions which didn't have npm and layout different      
       - name: Setup node 0.12.18 from dist
         uses: ./                 
         with:
           node-version: 0.12.18
       - name: Verify node
         shell: bash
-        run: __tests__/verify-node.sh 0.12.18 SKIP_NPM      
+        run: __tests__/verify-node.sh 0.12.18 SKIP_NPM 
+      # test version from node manifest
+      - name: Setup node 12 from manifest
+        uses: ./
+        with:
+          node-version: 12
+      - name: Verify node and npm
+        run: __tests__/verify-node.sh 12        
diff --git a/src/installer.ts b/src/installer.ts
index 942d24419..16d85b6ea 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -76,20 +76,9 @@ export async function getNode(
     let extPath: string;
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-
-      console.log(
-        `downloadPath: ${downloadPath}`,
-        `isFile: ${fs.statSync(downloadPath).isFile()}`
-      );
-      console.log(JSON.stringify(fs.statSync(downloadPath)));
-
       extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
       // 7z extracts to folder matching file name
       extPath = path.join(extPath, path.basename(info.fileName, '.7z'));
-      console.log(
-        `extPath: ${extPath}`,
-        `isDirectory: ${fs.statSync(extPath).isDirectory()}`
-      );
     } else {
       extPath = await tc.extractTar(downloadPath, undefined, [
         'xz',

From dd6f5ab66cf48404b904f678af44939c411f0c85 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 18:09:05 -0400
Subject: [PATCH 18/30] only node binary issue

---
 dist/index.js    | 12 ++++++------
 src/installer.ts |  9 +++++++--
 2 files changed, 13 insertions(+), 8 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index fd6e5dd3d..f277e927b 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -12975,7 +12975,6 @@ const io = __importStar(__webpack_require__(1));
 const tc = __importStar(__webpack_require__(533));
 const path = __importStar(__webpack_require__(622));
 const semver = __importStar(__webpack_require__(280));
-const fs = __webpack_require__(747);
 function getNode(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
         let osPlat = os.platform();
@@ -13005,7 +13004,8 @@ function getNode(versionSpec, stable, token) {
             }
             catch (err) {
                 if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
-                    return yield acquireNodeFromFallbackLocation(info.resolvedVersion);
+                    yield acquireNodeFromFallbackLocation(info.resolvedVersion);
+                    return;
                 }
                 throw err;
             }
@@ -13015,12 +13015,9 @@ function getNode(versionSpec, stable, token) {
             let extPath;
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
-                console.log(`downloadPath: ${downloadPath}`, `isFile: ${fs.statSync(downloadPath).isFile()}`);
-                console.log(JSON.stringify(fs.statSync(downloadPath)));
                 extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
                 // 7z extracts to folder matching file name
                 extPath = path.join(extPath, path.basename(info.fileName, '.7z'));
-                console.log(`extPath: ${extPath}`, `isDirectory: ${fs.statSync(extPath).isDirectory()}`);
             }
             else {
                 extPath = yield tc.extractTar(downloadPath, undefined, [
@@ -13187,6 +13184,7 @@ function acquireNodeFromFallbackLocation(version) {
         try {
             exeUrl = `https://nodejs.org/dist/v${version}/win-${osArch}/node.exe`;
             libUrl = `https://nodejs.org/dist/v${version}/win-${osArch}/node.lib`;
+            console.log(`Downloading only node binary from ${exeUrl}`);
             const exePath = yield tc.downloadTool(exeUrl);
             yield io.cp(exePath, path.join(tempDir, 'node.exe'));
             const libPath = yield tc.downloadTool(libUrl);
@@ -13205,7 +13203,9 @@ function acquireNodeFromFallbackLocation(version) {
                 throw err;
             }
         }
-        return yield tc.cacheDir(tempDir, 'node', version);
+        let toolPath = yield tc.cacheDir(tempDir, 'node', version);
+        core.addPath(toolPath);
+        return toolPath;
     });
 }
 // os.arch does not always match the relative download url, e.g.
diff --git a/src/installer.ts b/src/installer.ts
index 16d85b6ea..bd3094f1d 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -64,7 +64,8 @@ export async function getNode(
       downloadPath = await tc.downloadTool(info.downloadUrl, undefined, token);
     } catch (err) {
       if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
-        return await acquireNodeFromFallbackLocation(info.resolvedVersion);
+        await acquireNodeFromFallbackLocation(info.resolvedVersion);
+        return;
       }
 
       throw err;
@@ -269,6 +270,8 @@ async function acquireNodeFromFallbackLocation(
     exeUrl = `https://nodejs.org/dist/v${version}/win-${osArch}/node.exe`;
     libUrl = `https://nodejs.org/dist/v${version}/win-${osArch}/node.lib`;
 
+    console.log(`Downloading only node binary from ${exeUrl}`);
+
     const exePath = await tc.downloadTool(exeUrl);
     await io.cp(exePath, path.join(tempDir, 'node.exe'));
     const libPath = await tc.downloadTool(libUrl);
@@ -286,7 +289,9 @@ async function acquireNodeFromFallbackLocation(
       throw err;
     }
   }
-  return await tc.cacheDir(tempDir, 'node', version);
+  let toolPath = await tc.cacheDir(tempDir, 'node', version);
+  core.addPath(toolPath);
+  return toolPath;
 }
 
 // os.arch does not always match the relative download url, e.g.

From 11f920585c4fcd2698051b0745af7f120119af8b Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 18:12:05 -0400
Subject: [PATCH 19/30] no proxy issue

---
 .github/workflows/proxy.yml | 6 +++---
 1 file changed, 3 insertions(+), 3 deletions(-)

diff --git a/.github/workflows/proxy.yml b/.github/workflows/proxy.yml
index ee09dbba3..5a3f638ab 100644
--- a/.github/workflows/proxy.yml
+++ b/.github/workflows/proxy.yml
@@ -43,14 +43,14 @@ jobs:
       fail-fast: false
     env:
       https_proxy: http://no-such-proxy:3128
-      no_proxy: api.github.com,github.com,nodejs.org,registry.npmjs.org,*.s3.amazonaws.com
+      no_proxy: api.github.com,github.com,nodejs.org,registry.npmjs.org,*.s3.amazonaws.com,s3.amazonaws.com
     steps:
       - uses: actions/checkout@v2
       - name: Clear tool cache
         run: rm -rf $RUNNER_TOOL_CACHE/*
-      - name: Setup node 12
+      - name: Setup node 11
         uses: ./
         with:
-          node-version: 10.x
+          node-version: 11
       - name: Verify node and npm
         run: __tests__/verify-node.sh 10

From beb215529517077029cb1e7b9547fb43b37294ca Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 18:22:18 -0400
Subject: [PATCH 20/30] testing 7z alt

---
 dist/index.js    | 9 +++++++--
 src/installer.ts | 8 ++++++--
 2 files changed, 13 insertions(+), 4 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index f277e927b..82f28468f 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -12975,6 +12975,7 @@ const io = __importStar(__webpack_require__(1));
 const tc = __importStar(__webpack_require__(533));
 const path = __importStar(__webpack_require__(622));
 const semver = __importStar(__webpack_require__(280));
+const fs = __webpack_require__(747);
 function getNode(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
         let osPlat = os.platform();
@@ -13017,7 +13018,10 @@ function getNode(versionSpec, stable, token) {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
                 extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
                 // 7z extracts to folder matching file name
-                extPath = path.join(extPath, path.basename(info.fileName, '.7z'));
+                let nestedPath = path.join(extPath, path.basename(info.fileName, '.7z'));
+                if (fs.statSync(nestedPath) && fs.statSync(nestedPath).isDirectory()) {
+                    extPath = nestedPath;
+                }
             }
             else {
                 extPath = yield tc.extractTar(downloadPath, undefined, [
@@ -13048,7 +13052,8 @@ exports.getNode = getNode;
 function getInfoFromManifest(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
         let info = null;
-        const releases = yield tc.getManifestFromRepo('actions', 'node-versions', token);
+        const releases = yield tc.getManifestFromRepo('actions', 'node-versions', token, 'update-versions-manifest-file' // TODO: remove after testing
+        );
         console.log(`matching ${versionSpec}...`);
         const rel = yield tc.findFromManifest(versionSpec, stable, releases);
         if (rel && rel.files.length > 0) {
diff --git a/src/installer.ts b/src/installer.ts
index bd3094f1d..1857e762e 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -79,7 +79,10 @@ export async function getNode(
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
       extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
       // 7z extracts to folder matching file name
-      extPath = path.join(extPath, path.basename(info.fileName, '.7z'));
+      let nestedPath = path.join(extPath, path.basename(info.fileName, '.7z'));
+      if (fs.statSync(nestedPath) && fs.statSync(nestedPath).isDirectory()) {
+        extPath = nestedPath;
+      }
     } else {
       extPath = await tc.extractTar(downloadPath, undefined, [
         'xz',
@@ -117,7 +120,8 @@ async function getInfoFromManifest(
   const releases = await tc.getManifestFromRepo(
     'actions',
     'node-versions',
-    token
+    token,
+    'update-versions-manifest-file' // TODO: remove after testing
   );
   console.log(`matching ${versionSpec}...`);
   const rel = await tc.findFromManifest(versionSpec, stable, releases);

From 9fcef3fcea4ad522f7ba6b211700583bd5954522 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 18:23:27 -0400
Subject: [PATCH 21/30] testing 7z alt

---
 .github/workflows/versions.yml | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)

diff --git a/.github/workflows/versions.yml b/.github/workflows/versions.yml
index 4ff033d90..0042abe33 100644
--- a/.github/workflows/versions.yml
+++ b/.github/workflows/versions.yml
@@ -39,9 +39,9 @@ jobs:
         shell: bash
         run: __tests__/verify-node.sh 0.12.18 SKIP_NPM 
       # test version from node manifest
-      - name: Setup node 12 from manifest
+      - name: Setup node 12.16.2 from manifest
         uses: ./
         with:
-          node-version: 12
+          node-version: 12.16.2
       - name: Verify node and npm
         run: __tests__/verify-node.sh 12        

From 6a1b66a6064359616db1622e147a478a98a148f6 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 18:30:29 -0400
Subject: [PATCH 22/30] dbg

---
 src/installer.ts | 6 +++++-
 1 file changed, 5 insertions(+), 1 deletion(-)

diff --git a/src/installer.ts b/src/installer.ts
index 1857e762e..b1caceadb 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -78,11 +78,15 @@ export async function getNode(
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
       extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
+      console.log(`contents of ${extPath}`);
+      console.log(extPath);
       // 7z extracts to folder matching file name
       let nestedPath = path.join(extPath, path.basename(info.fileName, '.7z'));
-      if (fs.statSync(nestedPath) && fs.statSync(nestedPath).isDirectory()) {
+      if (fs.existsSync(nestedPath)) {
         extPath = nestedPath;
       }
+      
+      console.log(`using ${extPath}`);
     } else {
       extPath = await tc.extractTar(downloadPath, undefined, [
         'xz',

From 8e221092f3abcab8aeac287db0ffd921fb61ff7c Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 18:34:17 -0400
Subject: [PATCH 23/30] dbg

---
 src/installer.ts | 5 +++++
 1 file changed, 5 insertions(+)

diff --git a/src/installer.ts b/src/installer.ts
index b1caceadb..3952b87e6 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -74,6 +74,11 @@ export async function getNode(
     //
     // Extract
     //
+    console.log(`Extracting ${downloadPath}`)
+    if (!fs.existsSync(downloadPath)) {
+      throw new Error('File not downloaded correctly');
+    }
+    
     let extPath: string;
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');

From 5e7b076d00cde13eaf3340f7f2ead2b74111f0eb Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 18:37:13 -0400
Subject: [PATCH 24/30] dbg

---
 dist/index.js    | 9 ++++++++-
 src/installer.ts | 8 ++++----
 2 files changed, 12 insertions(+), 5 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index 82f28468f..abea063e4 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -13013,15 +13013,22 @@ function getNode(versionSpec, stable, token) {
             //
             // Extract
             //
+            console.log(`Extracting ${downloadPath}`);
+            if (!fs.existsSync(downloadPath)) {
+                console.log('File not downloaded correctly');
+            }
             let extPath;
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
                 extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
+                console.log(`contents of ${extPath}`);
+                console.log(extPath);
                 // 7z extracts to folder matching file name
                 let nestedPath = path.join(extPath, path.basename(info.fileName, '.7z'));
-                if (fs.statSync(nestedPath) && fs.statSync(nestedPath).isDirectory()) {
+                if (fs.existsSync(nestedPath)) {
                     extPath = nestedPath;
                 }
+                console.log(`using ${extPath}`);
             }
             else {
                 extPath = yield tc.extractTar(downloadPath, undefined, [
diff --git a/src/installer.ts b/src/installer.ts
index 3952b87e6..3a1c8ad30 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -74,11 +74,11 @@ export async function getNode(
     //
     // Extract
     //
-    console.log(`Extracting ${downloadPath}`)
+    console.log(`Extracting ${downloadPath}`);
     if (!fs.existsSync(downloadPath)) {
-      throw new Error('File not downloaded correctly');
+      console.log('File not downloaded correctly');
     }
-    
+
     let extPath: string;
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
@@ -90,7 +90,7 @@ export async function getNode(
       if (fs.existsSync(nestedPath)) {
         extPath = nestedPath;
       }
-      
+
       console.log(`using ${extPath}`);
     } else {
       extPath = await tc.extractTar(downloadPath, undefined, [

From a80a1707986bcf484e54cb259cf1ae33e7c886a7 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 18:40:24 -0400
Subject: [PATCH 25/30] no proxy fix

---
 .github/workflows/proxy.yml | 2 +-
 dist/index.js               | 7 -------
 src/installer.ts            | 9 ---------
 3 files changed, 1 insertion(+), 17 deletions(-)

diff --git a/.github/workflows/proxy.yml b/.github/workflows/proxy.yml
index 5a3f638ab..6eaa15700 100644
--- a/.github/workflows/proxy.yml
+++ b/.github/workflows/proxy.yml
@@ -53,4 +53,4 @@ jobs:
         with:
           node-version: 11
       - name: Verify node and npm
-        run: __tests__/verify-node.sh 10
+        run: __tests__/verify-node.sh 11
diff --git a/dist/index.js b/dist/index.js
index abea063e4..3c7c17d1d 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -13013,22 +13013,15 @@ function getNode(versionSpec, stable, token) {
             //
             // Extract
             //
-            console.log(`Extracting ${downloadPath}`);
-            if (!fs.existsSync(downloadPath)) {
-                console.log('File not downloaded correctly');
-            }
             let extPath;
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
                 extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
-                console.log(`contents of ${extPath}`);
-                console.log(extPath);
                 // 7z extracts to folder matching file name
                 let nestedPath = path.join(extPath, path.basename(info.fileName, '.7z'));
                 if (fs.existsSync(nestedPath)) {
                     extPath = nestedPath;
                 }
-                console.log(`using ${extPath}`);
             }
             else {
                 extPath = yield tc.extractTar(downloadPath, undefined, [
diff --git a/src/installer.ts b/src/installer.ts
index 3a1c8ad30..29fbc3c5a 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -74,24 +74,15 @@ export async function getNode(
     //
     // Extract
     //
-    console.log(`Extracting ${downloadPath}`);
-    if (!fs.existsSync(downloadPath)) {
-      console.log('File not downloaded correctly');
-    }
-
     let extPath: string;
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
       extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
-      console.log(`contents of ${extPath}`);
-      console.log(extPath);
       // 7z extracts to folder matching file name
       let nestedPath = path.join(extPath, path.basename(info.fileName, '.7z'));
       if (fs.existsSync(nestedPath)) {
         extPath = nestedPath;
       }
-
-      console.log(`using ${extPath}`);
     } else {
       extPath = await tc.extractTar(downloadPath, undefined, [
         'xz',

From a875da257469a12c5f707d190184bbb873e36f6f Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 19:14:57 -0400
Subject: [PATCH 26/30] output info

---
 dist/index.js    | 2 ++
 src/installer.ts | 2 ++
 2 files changed, 4 insertions(+)

diff --git a/dist/index.js b/dist/index.js
index 3c7c17d1d..ef34dc0af 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -13013,6 +13013,7 @@ function getNode(versionSpec, stable, token) {
             //
             // Extract
             //
+            console.log('Extracting ...');
             let extPath;
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
@@ -13033,6 +13034,7 @@ function getNode(versionSpec, stable, token) {
             //
             // Install into the local tool cache - node extracts with a root folder that matches the fileName downloaded
             //
+            console.log('Adding to the cache ...');
             toolPath = yield tc.cacheDir(extPath, 'node', info.resolvedVersion);
         }
         //
diff --git a/src/installer.ts b/src/installer.ts
index 29fbc3c5a..d05f5d785 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -74,6 +74,7 @@ export async function getNode(
     //
     // Extract
     //
+    console.log('Extracting ...');
     let extPath: string;
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
@@ -94,6 +95,7 @@ export async function getNode(
     //
     // Install into the local tool cache - node extracts with a root folder that matches the fileName downloaded
     //
+    console.log('Adding to the cache ...');
     toolPath = await tc.cacheDir(extPath, 'node', info.resolvedVersion);
   }
 

From 0a9e8b1d0fbb31aa3d892234fb58355171ef9717 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 19:17:04 -0400
Subject: [PATCH 27/30] output info

---
 src/installer.ts | 1 +
 1 file changed, 1 insertion(+)

diff --git a/src/installer.ts b/src/installer.ts
index d05f5d785..c826e916f 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -97,6 +97,7 @@ export async function getNode(
     //
     console.log('Adding to the cache ...');
     toolPath = await tc.cacheDir(extPath, 'node', info.resolvedVersion);
+    console.log('Done')
   }
 
   //

From 2a0fbec10dec7d35b0dd66bac5b6f641feab5aab Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Sun, 3 May 2020 19:18:32 -0400
Subject: [PATCH 28/30] output info

---
 dist/index.js    | 1 +
 src/installer.ts | 2 +-
 2 files changed, 2 insertions(+), 1 deletion(-)

diff --git a/dist/index.js b/dist/index.js
index ef34dc0af..b274a6649 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -13036,6 +13036,7 @@ function getNode(versionSpec, stable, token) {
             //
             console.log('Adding to the cache ...');
             toolPath = yield tc.cacheDir(extPath, 'node', info.resolvedVersion);
+            console.log('Done');
         }
         //
         // a tool installer initimately knows details about the layout of that tool
diff --git a/src/installer.ts b/src/installer.ts
index c826e916f..6daed5d90 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -97,7 +97,7 @@ export async function getNode(
     //
     console.log('Adding to the cache ...');
     toolPath = await tc.cacheDir(extPath, 'node', info.resolvedVersion);
-    console.log('Done')
+    console.log('Done');
   }
 
   //

From 2ae92649017edf0c0fb0c56a5f0bf83cf843a706 Mon Sep 17 00:00:00 2001
From: Bryan MacFarlane <bryanmacfarlane@github.com>
Date: Mon, 4 May 2020 12:44:15 -0400
Subject: [PATCH 29/30] back to master

---
 dist/index.js    | 3 +--
 src/installer.ts | 3 +--
 2 files changed, 2 insertions(+), 4 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index b274a6649..e6aa40bed 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -13055,8 +13055,7 @@ exports.getNode = getNode;
 function getInfoFromManifest(versionSpec, stable, token) {
     return __awaiter(this, void 0, void 0, function* () {
         let info = null;
-        const releases = yield tc.getManifestFromRepo('actions', 'node-versions', token, 'update-versions-manifest-file' // TODO: remove after testing
-        );
+        const releases = yield tc.getManifestFromRepo('actions', 'node-versions', token);
         console.log(`matching ${versionSpec}...`);
         const rel = yield tc.findFromManifest(versionSpec, stable, releases);
         if (rel && rel.files.length > 0) {
diff --git a/src/installer.ts b/src/installer.ts
index 6daed5d90..122948240 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -123,8 +123,7 @@ async function getInfoFromManifest(
   const releases = await tc.getManifestFromRepo(
     'actions',
     'node-versions',
-    token,
-    'update-versions-manifest-file' // TODO: remove after testing
+    token
   );
   console.log(`matching ${versionSpec}...`);
   const rel = await tc.findFromManifest(versionSpec, stable, releases);

From e73ffbcdec6e32336d408b2ff7c61488032f3ec4 Mon Sep 17 00:00:00 2001
From: eric sciple <ericsciple@users.noreply.github.com>
Date: Mon, 18 May 2020 12:29:21 -0400
Subject: [PATCH 30/30] support ghes (#157)

---
 dist/index.js     | 444 ++++++++++++++++++++++++++++++++++++++++++----
 package-lock.json |  13 +-
 package.json      |   2 +-
 src/installer.ts  |  83 ++++++---
 src/main.ts       |  11 +-
 5 files changed, 481 insertions(+), 72 deletions(-)

diff --git a/dist/index.js b/dist/index.js
index e6aa40bed..87ce6f0cc 100644
--- a/dist/index.js
+++ b/dist/index.js
@@ -1338,7 +1338,7 @@ var __importStar = (this && this.__importStar) || function (mod) {
 };
 Object.defineProperty(exports, "__esModule", { value: true });
 const semver = __importStar(__webpack_require__(280));
-const core_1 = __webpack_require__(470);
+const core_1 = __webpack_require__(902);
 // needs to be require for core node modules to be mocked
 /* eslint @typescript-eslint/no-require-imports: 0 */
 const os = __webpack_require__(87);
@@ -4631,6 +4631,7 @@ const core = __importStar(__webpack_require__(470));
 const installer = __importStar(__webpack_require__(749));
 const auth = __importStar(__webpack_require__(202));
 const path = __importStar(__webpack_require__(622));
+const url_1 = __webpack_require__(835);
 function run() {
     return __awaiter(this, void 0, void 0, function* () {
         try {
@@ -4645,8 +4646,9 @@ function run() {
             console.log(`version: ${version}`);
             if (version) {
                 let token = core.getInput('token');
+                let auth = !token || isGhes() ? undefined : `token ${token}`;
                 let stable = (core.getInput('stable') || 'true').toUpperCase() === 'TRUE';
-                yield installer.getNode(version, stable, token);
+                yield installer.getNode(version, stable, auth);
             }
             const registryUrl = core.getInput('registry-url');
             const alwaysAuth = core.getInput('always-auth');
@@ -4664,6 +4666,10 @@ function run() {
     });
 }
 exports.run = run;
+function isGhes() {
+    const ghUrl = new url_1.URL(process.env['GITHUB_SERVER_URL'] || 'https://github.com');
+    return ghUrl.hostname.toUpperCase() !== 'GITHUB.COM';
+}
 //# sourceMappingURL=main.js.map
 
 /***/ }),
@@ -10883,7 +10889,7 @@ var __importDefault = (this && this.__importDefault) || function (mod) {
     return (mod && mod.__esModule) ? mod : { "default": mod };
 };
 Object.defineProperty(exports, "__esModule", { value: true });
-const core = __importStar(__webpack_require__(470));
+const core = __importStar(__webpack_require__(902));
 const io = __importStar(__webpack_require__(1));
 const fs = __importStar(__webpack_require__(747));
 const mm = __importStar(__webpack_require__(31));
@@ -10912,9 +10918,10 @@ const userAgent = 'actions/tool-cache';
  *
  * @param url       url of tool to download
  * @param dest      path to download tool
+ * @param auth      authorization header
  * @returns         path to downloaded tool
  */
-function downloadTool(url, dest, token) {
+function downloadTool(url, dest, auth) {
     return __awaiter(this, void 0, void 0, function* () {
         dest = dest || path.join(_getTempDirectory(), v4_1.default());
         yield io.mkdirP(path.dirname(dest));
@@ -10925,7 +10932,7 @@ function downloadTool(url, dest, token) {
         const maxSeconds = _getGlobal('TEST_DOWNLOAD_TOOL_RETRY_MAX_SECONDS', 20);
         const retryHelper = new retry_helper_1.RetryHelper(maxAttempts, minSeconds, maxSeconds);
         return yield retryHelper.execute(() => __awaiter(this, void 0, void 0, function* () {
-            return yield downloadToolAttempt(url, dest || '', token);
+            return yield downloadToolAttempt(url, dest || '', auth);
         }), (err) => {
             if (err instanceof HTTPError && err.httpStatusCode) {
                 // Don't retry anything less than 500, except 408 Request Timeout and 429 Too Many Requests
@@ -10941,7 +10948,7 @@ function downloadTool(url, dest, token) {
     });
 }
 exports.downloadTool = downloadTool;
-function downloadToolAttempt(url, dest, token) {
+function downloadToolAttempt(url, dest, auth) {
     return __awaiter(this, void 0, void 0, function* () {
         if (fs.existsSync(dest)) {
             throw new Error(`Destination file path ${dest} already exists`);
@@ -10951,9 +10958,10 @@ function downloadToolAttempt(url, dest, token) {
             allowRetries: false
         });
         let headers;
-        if (token) {
+        if (auth) {
+            core.debug('set auth');
             headers = {
-                authorization: `token ${token}`
+                authorization: auth
             };
         }
         const response = yield http.get(url, headers);
@@ -11011,9 +11019,10 @@ function extract7z(file, dest, _7zPath) {
         process.chdir(dest);
         if (_7zPath) {
             try {
+                const logLevel = core.isDebug() ? '-bb1' : '-bb0';
                 const args = [
                     'x',
-                    '-bb1',
+                    logLevel,
                     '-bd',
                     '-sccUTF-8',
                     file
@@ -11096,6 +11105,9 @@ function extractTar(file, dest, flags = 'xz') {
         else {
             args = [flags];
         }
+        if (core.isDebug() && !flags.includes('v')) {
+            args.push('-v');
+        }
         let destArg = dest;
         let fileArg = file;
         if (IS_WINDOWS && isGnuTar) {
@@ -11145,7 +11157,7 @@ function extractZipWin(file, dest) {
         const escapedDest = dest.replace(/'/g, "''").replace(/"|\n|\r/g, '');
         const command = `$ErrorActionPreference = 'Stop' ; try { Add-Type -AssemblyName System.IO.Compression.FileSystem } catch { } ; [System.IO.Compression.ZipFile]::ExtractToDirectory('${escapedFile}', '${escapedDest}')`;
         // run powershell
-        const powershellPath = yield io.which('powershell');
+        const powershellPath = yield io.which('powershell', true);
         const args = [
             '-NoLogo',
             '-Sta',
@@ -11161,8 +11173,12 @@ function extractZipWin(file, dest) {
 }
 function extractZipNix(file, dest) {
     return __awaiter(this, void 0, void 0, function* () {
-        const unzipPath = yield io.which('unzip');
-        yield exec_1.exec(`"${unzipPath}"`, [file], { cwd: dest });
+        const unzipPath = yield io.which('unzip', true);
+        const args = [file];
+        if (!core.isDebug()) {
+            args.unshift('-q');
+        }
+        yield exec_1.exec(`"${unzipPath}"`, args, { cwd: dest });
     });
 }
 /**
@@ -11290,14 +11306,16 @@ function findAllVersions(toolName, arch) {
     return versions;
 }
 exports.findAllVersions = findAllVersions;
-function getManifestFromRepo(owner, repo, token, branch = 'master') {
+function getManifestFromRepo(owner, repo, auth, branch = 'master') {
     return __awaiter(this, void 0, void 0, function* () {
         let releases = [];
         const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}`;
         const http = new httpm.HttpClient('tool-cache');
-        const headers = {
-            authorization: `token ${token}`
-        };
+        const headers = {};
+        if (auth) {
+            core.debug('set auth');
+            headers.authorization = auth;
+        }
         const response = yield http.getJson(treeUrl, headers);
         if (!response.result) {
             return releases;
@@ -12976,12 +12994,11 @@ const tc = __importStar(__webpack_require__(533));
 const path = __importStar(__webpack_require__(622));
 const semver = __importStar(__webpack_require__(280));
 const fs = __webpack_require__(747);
-function getNode(versionSpec, stable, token) {
+function getNode(versionSpec, stable, auth) {
     return __awaiter(this, void 0, void 0, function* () {
         let osPlat = os.platform();
         let osArch = translateArchToDistUrl(os.arch());
         // check cache
-        let info = null;
         let toolPath;
         toolPath = tc.find('node', versionSpec);
         // If not found in cache, download
@@ -12990,31 +13007,58 @@ function getNode(versionSpec, stable, token) {
         }
         else {
             console.log(`Attempting to download ${versionSpec}...`);
-            let info = yield getInfoFromManifest(versionSpec, stable, token);
-            if (!info) {
-                console.log('Not found in manifest.  Falling back to download directly from Node');
-                info = yield getInfoFromDist(versionSpec);
-            }
-            if (!info) {
-                throw new Error(`Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`);
-            }
-            console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
             let downloadPath = '';
+            let info = null;
+            //
+            // Try download from internal distribution (popular versions only)
+            //
             try {
-                downloadPath = yield tc.downloadTool(info.downloadUrl, undefined, token);
+                info = yield getInfoFromManifest(versionSpec, stable, auth);
+                if (info) {
+                    console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
+                    downloadPath = yield tc.downloadTool(info.downloadUrl, undefined, auth);
+                }
+                else {
+                    console.log('Not found in manifest.  Falling back to download directly from Node');
+                }
             }
             catch (err) {
-                if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
-                    yield acquireNodeFromFallbackLocation(info.resolvedVersion);
-                    return;
+                // Rate limit?
+                if (err instanceof tc.HTTPError &&
+                    (err.httpStatusCode === 403 || err.httpStatusCode === 429)) {
+                    console.log(`Received HTTP status code ${err.httpStatusCode}.  This usually indicates the rate limit has been exceeded`);
+                }
+                else {
+                    console.log(err.message);
+                }
+                core.debug(err.stack);
+                console.log('Falling back to download directly from Node');
+            }
+            //
+            // Download from nodejs.org
+            //
+            if (!downloadPath) {
+                info = yield getInfoFromDist(versionSpec);
+                if (!info) {
+                    throw new Error(`Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`);
+                }
+                console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
+                try {
+                    downloadPath = yield tc.downloadTool(info.downloadUrl);
+                }
+                catch (err) {
+                    if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
+                        return yield acquireNodeFromFallbackLocation(info.resolvedVersion);
+                    }
+                    throw err;
                 }
-                throw err;
             }
             //
             // Extract
             //
             console.log('Extracting ...');
             let extPath;
+            info = info || {}; // satisfy compiler, never null when reaches here
             if (osPlat == 'win32') {
                 let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
                 extPath = yield tc.extract7z(downloadPath, undefined, _7zPath);
@@ -13052,10 +13096,10 @@ function getNode(versionSpec, stable, token) {
     });
 }
 exports.getNode = getNode;
-function getInfoFromManifest(versionSpec, stable, token) {
+function getInfoFromManifest(versionSpec, stable, auth) {
     return __awaiter(this, void 0, void 0, function* () {
         let info = null;
-        const releases = yield tc.getManifestFromRepo('actions', 'node-versions', token);
+        const releases = yield tc.getManifestFromRepo('actions', 'node-versions', auth);
         console.log(`matching ${versionSpec}...`);
         const rel = yield tc.findFromManifest(versionSpec, stable, releases);
         if (rel && rel.files.length > 0) {
@@ -13063,7 +13107,6 @@ function getInfoFromManifest(versionSpec, stable, token) {
             info.resolvedVersion = rel.version;
             info.downloadUrl = rel.files[0].download_url;
             info.fileName = rel.files[0].filename;
-            info.token = token;
         }
         return info;
     });
@@ -13072,7 +13115,6 @@ function getInfoFromDist(versionSpec) {
     return __awaiter(this, void 0, void 0, function* () {
         let osPlat = os.platform();
         let osArch = translateArchToDistUrl(os.arch());
-        let info = null;
         let version;
         version = yield queryDistForMatch(versionSpec);
         if (!version) {
@@ -15956,6 +15998,105 @@ function set(object, path, value) {
 module.exports = set;
 
 
+/***/ }),
+
+/***/ 888:
+/***/ (function(__unusedmodule, exports, __webpack_require__) {
+
+"use strict";
+
+var __importStar = (this && this.__importStar) || function (mod) {
+    if (mod && mod.__esModule) return mod;
+    var result = {};
+    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
+    result["default"] = mod;
+    return result;
+};
+Object.defineProperty(exports, "__esModule", { value: true });
+const os = __importStar(__webpack_require__(87));
+/**
+ * Commands
+ *
+ * Command Format:
+ *   ::name key=value,key=value::message
+ *
+ * Examples:
+ *   ::warning::This is the message
+ *   ::set-env name=MY_VAR::some value
+ */
+function issueCommand(command, properties, message) {
+    const cmd = new Command(command, properties, message);
+    process.stdout.write(cmd.toString() + os.EOL);
+}
+exports.issueCommand = issueCommand;
+function issue(name, message = '') {
+    issueCommand(name, {}, message);
+}
+exports.issue = issue;
+const CMD_STRING = '::';
+class Command {
+    constructor(command, properties, message) {
+        if (!command) {
+            command = 'missing.command';
+        }
+        this.command = command;
+        this.properties = properties;
+        this.message = message;
+    }
+    toString() {
+        let cmdStr = CMD_STRING + this.command;
+        if (this.properties && Object.keys(this.properties).length > 0) {
+            cmdStr += ' ';
+            let first = true;
+            for (const key in this.properties) {
+                if (this.properties.hasOwnProperty(key)) {
+                    const val = this.properties[key];
+                    if (val) {
+                        if (first) {
+                            first = false;
+                        }
+                        else {
+                            cmdStr += ',';
+                        }
+                        cmdStr += `${key}=${escapeProperty(val)}`;
+                    }
+                }
+            }
+        }
+        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
+        return cmdStr;
+    }
+}
+/**
+ * Sanitizes an input into a string so it can be passed into issueCommand safely
+ * @param input input to sanitize into a string
+ */
+function toCommandValue(input) {
+    if (input === null || input === undefined) {
+        return '';
+    }
+    else if (typeof input === 'string' || input instanceof String) {
+        return input;
+    }
+    return JSON.stringify(input);
+}
+exports.toCommandValue = toCommandValue;
+function escapeData(s) {
+    return toCommandValue(s)
+        .replace(/%/g, '%25')
+        .replace(/\r/g, '%0D')
+        .replace(/\n/g, '%0A');
+}
+function escapeProperty(s) {
+    return toCommandValue(s)
+        .replace(/%/g, '%25')
+        .replace(/\r/g, '%0D')
+        .replace(/\n/g, '%0A')
+        .replace(/:/g, '%3A')
+        .replace(/,/g, '%2C');
+}
+//# sourceMappingURL=command.js.map
+
 /***/ }),
 
 /***/ 899:
@@ -16061,6 +16202,235 @@ function patchForDeprecation(octokit, apiOptions, method, methodName) {
 }
 
 
+/***/ }),
+
+/***/ 902:
+/***/ (function(__unusedmodule, exports, __webpack_require__) {
+
+"use strict";
+
+var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
+    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
+    return new (P || (P = Promise))(function (resolve, reject) {
+        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
+        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
+        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
+        step((generator = generator.apply(thisArg, _arguments || [])).next());
+    });
+};
+var __importStar = (this && this.__importStar) || function (mod) {
+    if (mod && mod.__esModule) return mod;
+    var result = {};
+    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
+    result["default"] = mod;
+    return result;
+};
+Object.defineProperty(exports, "__esModule", { value: true });
+const command_1 = __webpack_require__(888);
+const os = __importStar(__webpack_require__(87));
+const path = __importStar(__webpack_require__(622));
+/**
+ * The code to exit an action
+ */
+var ExitCode;
+(function (ExitCode) {
+    /**
+     * A code indicating that the action was successful
+     */
+    ExitCode[ExitCode["Success"] = 0] = "Success";
+    /**
+     * A code indicating that the action was a failure
+     */
+    ExitCode[ExitCode["Failure"] = 1] = "Failure";
+})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
+//-----------------------------------------------------------------------
+// Variables
+//-----------------------------------------------------------------------
+/**
+ * Sets env variable for this action and future actions in the job
+ * @param name the name of the variable to set
+ * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
+ */
+// eslint-disable-next-line @typescript-eslint/no-explicit-any
+function exportVariable(name, val) {
+    const convertedVal = command_1.toCommandValue(val);
+    process.env[name] = convertedVal;
+    command_1.issueCommand('set-env', { name }, convertedVal);
+}
+exports.exportVariable = exportVariable;
+/**
+ * Registers a secret which will get masked from logs
+ * @param secret value of the secret
+ */
+function setSecret(secret) {
+    command_1.issueCommand('add-mask', {}, secret);
+}
+exports.setSecret = setSecret;
+/**
+ * Prepends inputPath to the PATH (for this action and future actions)
+ * @param inputPath
+ */
+function addPath(inputPath) {
+    command_1.issueCommand('add-path', {}, inputPath);
+    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
+}
+exports.addPath = addPath;
+/**
+ * Gets the value of an input.  The value is also trimmed.
+ *
+ * @param     name     name of the input to get
+ * @param     options  optional. See InputOptions.
+ * @returns   string
+ */
+function getInput(name, options) {
+    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
+    if (options && options.required && !val) {
+        throw new Error(`Input required and not supplied: ${name}`);
+    }
+    return val.trim();
+}
+exports.getInput = getInput;
+/**
+ * Sets the value of an output.
+ *
+ * @param     name     name of the output to set
+ * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
+ */
+// eslint-disable-next-line @typescript-eslint/no-explicit-any
+function setOutput(name, value) {
+    command_1.issueCommand('set-output', { name }, value);
+}
+exports.setOutput = setOutput;
+/**
+ * Enables or disables the echoing of commands into stdout for the rest of the step.
+ * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
+ *
+ */
+function setCommandEcho(enabled) {
+    command_1.issue('echo', enabled ? 'on' : 'off');
+}
+exports.setCommandEcho = setCommandEcho;
+//-----------------------------------------------------------------------
+// Results
+//-----------------------------------------------------------------------
+/**
+ * Sets the action status to failed.
+ * When the action exits it will be with an exit code of 1
+ * @param message add error issue message
+ */
+function setFailed(message) {
+    process.exitCode = ExitCode.Failure;
+    error(message);
+}
+exports.setFailed = setFailed;
+//-----------------------------------------------------------------------
+// Logging Commands
+//-----------------------------------------------------------------------
+/**
+ * Gets whether Actions Step Debug is on or not
+ */
+function isDebug() {
+    return process.env['RUNNER_DEBUG'] === '1';
+}
+exports.isDebug = isDebug;
+/**
+ * Writes debug message to user log
+ * @param message debug message
+ */
+function debug(message) {
+    command_1.issueCommand('debug', {}, message);
+}
+exports.debug = debug;
+/**
+ * Adds an error issue
+ * @param message error issue message. Errors will be converted to string via toString()
+ */
+function error(message) {
+    command_1.issue('error', message instanceof Error ? message.toString() : message);
+}
+exports.error = error;
+/**
+ * Adds an warning issue
+ * @param message warning issue message. Errors will be converted to string via toString()
+ */
+function warning(message) {
+    command_1.issue('warning', message instanceof Error ? message.toString() : message);
+}
+exports.warning = warning;
+/**
+ * Writes info to log with console.log.
+ * @param message info message
+ */
+function info(message) {
+    process.stdout.write(message + os.EOL);
+}
+exports.info = info;
+/**
+ * Begin an output group.
+ *
+ * Output until the next `groupEnd` will be foldable in this group
+ *
+ * @param name The name of the output group
+ */
+function startGroup(name) {
+    command_1.issue('group', name);
+}
+exports.startGroup = startGroup;
+/**
+ * End an output group.
+ */
+function endGroup() {
+    command_1.issue('endgroup');
+}
+exports.endGroup = endGroup;
+/**
+ * Wrap an asynchronous function call in a group.
+ *
+ * Returns the same type as the function itself.
+ *
+ * @param name The name of the group
+ * @param fn The function to wrap in the group
+ */
+function group(name, fn) {
+    return __awaiter(this, void 0, void 0, function* () {
+        startGroup(name);
+        let result;
+        try {
+            result = yield fn();
+        }
+        finally {
+            endGroup();
+        }
+        return result;
+    });
+}
+exports.group = group;
+//-----------------------------------------------------------------------
+// Wrapper action state
+//-----------------------------------------------------------------------
+/**
+ * Saves state for current action, the state can only be retrieved by this action's post job execution.
+ *
+ * @param     name     name of the state to store
+ * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
+ */
+// eslint-disable-next-line @typescript-eslint/no-explicit-any
+function saveState(name, value) {
+    command_1.issueCommand('save-state', { name }, value);
+}
+exports.saveState = saveState;
+/**
+ * Gets the value of an state set by this action's main execution.
+ *
+ * @param     name     name of the state to get
+ * @returns   string
+ */
+function getState(name) {
+    return process.env[`STATE_${name}`] || '';
+}
+exports.getState = getState;
+//# sourceMappingURL=core.js.map
+
 /***/ }),
 
 /***/ 929:
@@ -16702,7 +17072,7 @@ var __importStar = (this && this.__importStar) || function (mod) {
     return result;
 };
 Object.defineProperty(exports, "__esModule", { value: true });
-const core = __importStar(__webpack_require__(470));
+const core = __importStar(__webpack_require__(902));
 /**
  * Internal class for retries
  */
diff --git a/package-lock.json b/package-lock.json
index 26be5a560..be7fec2d5 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -40,11 +40,11 @@
       "integrity": "sha512-J8KuFqVPr3p6U8W93DOXlXW6zFvrQAJANdS+vw0YhusLIq+bszW8zmK2Fh1C2kDPX8FMvwIl1OUcFgvJoXLbAg=="
     },
     "@actions/tool-cache": {
-      "version": "1.5.3",
-      "resolved": "https://registry.npmjs.org/@actions/tool-cache/-/tool-cache-1.5.3.tgz",
-      "integrity": "sha512-G6OMdGvKVkApJv+nRURpi1nZUKonqWq37fqK8rdJLJr5PuWAEo/cqD/ibano7Da/LRx1yYFEMwO6RXkB2VaIqQ==",
+      "version": "1.5.4",
+      "resolved": "https://registry.npmjs.org/@actions/tool-cache/-/tool-cache-1.5.4.tgz",
+      "integrity": "sha512-72ijIBM0s/dx2D0eYYxaxaeKWeVatOK8OHPNctJ5cyKjZp1j12egX+nW/N+tnQRNMVxTp9WjudZO5wizUBxC/w==",
       "requires": {
-        "@actions/core": "^1.2.0",
+        "@actions/core": "^1.2.3",
         "@actions/exec": "^1.0.0",
         "@actions/http-client": "^1.0.8",
         "@actions/io": "^1.0.1",
@@ -52,6 +52,11 @@
         "uuid": "^3.3.2"
       },
       "dependencies": {
+        "@actions/core": {
+          "version": "1.2.4",
+          "resolved": "https://registry.npmjs.org/@actions/core/-/core-1.2.4.tgz",
+          "integrity": "sha512-YJCEq8BE3CdN8+7HPZ/4DxJjk/OkZV2FFIf+DlZTC/4iBlzYCD5yjRR6eiOS5llO11zbRltIRuKAjMKaWTE6cg=="
+        },
         "@actions/http-client": {
           "version": "1.0.8",
           "resolved": "https://registry.npmjs.org/@actions/http-client/-/http-client-1.0.8.tgz",
diff --git a/package.json b/package.json
index a6c45d6fb..9a3f1c574 100644
--- a/package.json
+++ b/package.json
@@ -28,7 +28,7 @@
     "@actions/github": "^1.1.0",
     "@actions/http-client": "^1.0.6",
     "@actions/io": "^1.0.2",
-    "@actions/tool-cache": "^1.5.3",
+    "@actions/tool-cache": "^1.5.4",
     "semver": "^6.1.1"
   },
   "devDependencies": {
diff --git a/src/installer.ts b/src/installer.ts
index 122948240..ee96bda4f 100644
--- a/src/installer.ts
+++ b/src/installer.ts
@@ -6,7 +6,6 @@ import * as io from '@actions/io';
 import * as tc from '@actions/tool-cache';
 import * as path from 'path';
 import * as semver from 'semver';
-import {Url} from 'url';
 import fs = require('fs');
 
 //
@@ -20,7 +19,6 @@ export interface INodeVersion {
 
 interface INodeVersionInfo {
   downloadUrl: string;
-  token: string | null;
   resolvedVersion: string;
   fileName: string;
 }
@@ -28,13 +26,12 @@ interface INodeVersionInfo {
 export async function getNode(
   versionSpec: string,
   stable: boolean,
-  token: string
+  auth: string | undefined
 ) {
   let osPlat: string = os.platform();
   let osArch: string = translateArchToDistUrl(os.arch());
 
   // check cache
-  let info: INodeVersionInfo | null = null;
   let toolPath: string;
   toolPath = tc.find('node', versionSpec);
 
@@ -43,32 +40,61 @@ export async function getNode(
     console.log(`Found in cache @ ${toolPath}`);
   } else {
     console.log(`Attempting to download ${versionSpec}...`);
-    let info = await getInfoFromManifest(versionSpec, stable, token);
-    if (!info) {
-      console.log(
-        'Not found in manifest.  Falling back to download directly from Node'
-      );
-      info = await getInfoFromDist(versionSpec);
-    }
-
-    if (!info) {
-      throw new Error(
-        `Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`
-      );
-    }
-
-    console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
-
     let downloadPath = '';
+    let info: INodeVersionInfo | null = null;
+
+    //
+    // Try download from internal distribution (popular versions only)
+    //
     try {
-      downloadPath = await tc.downloadTool(info.downloadUrl, undefined, token);
+      info = await getInfoFromManifest(versionSpec, stable, auth);
+      if (info) {
+        console.log(
+          `Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`
+        );
+        downloadPath = await tc.downloadTool(info.downloadUrl, undefined, auth);
+      } else {
+        console.log(
+          'Not found in manifest.  Falling back to download directly from Node'
+        );
+      }
     } catch (err) {
-      if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
-        await acquireNodeFromFallbackLocation(info.resolvedVersion);
-        return;
+      // Rate limit?
+      if (
+        err instanceof tc.HTTPError &&
+        (err.httpStatusCode === 403 || err.httpStatusCode === 429)
+      ) {
+        console.log(
+          `Received HTTP status code ${err.httpStatusCode}.  This usually indicates the rate limit has been exceeded`
+        );
+      } else {
+        console.log(err.message);
       }
+      core.debug(err.stack);
+      console.log('Falling back to download directly from Node');
+    }
 
-      throw err;
+    //
+    // Download from nodejs.org
+    //
+    if (!downloadPath) {
+      info = await getInfoFromDist(versionSpec);
+      if (!info) {
+        throw new Error(
+          `Unable to find Node version '${versionSpec}' for platform ${osPlat} and architecture ${osArch}.`
+        );
+      }
+
+      console.log(`Acquiring ${info.resolvedVersion} from ${info.downloadUrl}`);
+      try {
+        downloadPath = await tc.downloadTool(info.downloadUrl);
+      } catch (err) {
+        if (err instanceof tc.HTTPError && err.httpStatusCode == 404) {
+          return await acquireNodeFromFallbackLocation(info.resolvedVersion);
+        }
+
+        throw err;
+      }
     }
 
     //
@@ -76,6 +102,7 @@ export async function getNode(
     //
     console.log('Extracting ...');
     let extPath: string;
+    info = info || ({} as INodeVersionInfo); // satisfy compiler, never null when reaches here
     if (osPlat == 'win32') {
       let _7zPath = path.join(__dirname, '..', 'externals', '7zr.exe');
       extPath = await tc.extract7z(downloadPath, undefined, _7zPath);
@@ -117,13 +144,13 @@ export async function getNode(
 async function getInfoFromManifest(
   versionSpec: string,
   stable: boolean,
-  token: string
+  auth: string | undefined
 ): Promise<INodeVersionInfo | null> {
   let info: INodeVersionInfo | null = null;
   const releases = await tc.getManifestFromRepo(
     'actions',
     'node-versions',
-    token
+    auth
   );
   console.log(`matching ${versionSpec}...`);
   const rel = await tc.findFromManifest(versionSpec, stable, releases);
@@ -133,7 +160,6 @@ async function getInfoFromManifest(
     info.resolvedVersion = rel.version;
     info.downloadUrl = rel.files[0].download_url;
     info.fileName = rel.files[0].filename;
-    info.token = token;
   }
 
   return info;
@@ -145,7 +171,6 @@ async function getInfoFromDist(
   let osPlat: string = os.platform();
   let osArch: string = translateArchToDistUrl(os.arch());
 
-  let info: INodeVersionInfo | null = null;
   let version: string;
 
   version = await queryDistForMatch(versionSpec);
diff --git a/src/main.ts b/src/main.ts
index 6a3486c0f..ab89421fb 100644
--- a/src/main.ts
+++ b/src/main.ts
@@ -2,6 +2,7 @@ import * as core from '@actions/core';
 import * as installer from './installer';
 import * as auth from './authutil';
 import * as path from 'path';
+import {URL} from 'url';
 
 export async function run() {
   try {
@@ -17,8 +18,9 @@ export async function run() {
     console.log(`version: ${version}`);
     if (version) {
       let token = core.getInput('token');
+      let auth = !token || isGhes() ? undefined : `token ${token}`;
       let stable = (core.getInput('stable') || 'true').toUpperCase() === 'TRUE';
-      await installer.getNode(version, stable, token);
+      await installer.getNode(version, stable, auth);
     }
 
     const registryUrl: string = core.getInput('registry-url');
@@ -39,3 +41,10 @@ export async function run() {
     core.setFailed(error.message);
   }
 }
+
+function isGhes(): boolean {
+  const ghUrl = new URL(
+    process.env['GITHUB_SERVER_URL'] || 'https://github.com'
+  );
+  return ghUrl.hostname.toUpperCase() !== 'GITHUB.COM';
+}
