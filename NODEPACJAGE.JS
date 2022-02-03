Stable Releases
Electron 17.0.0 January 31, 2022 (2 days ago) 
Stack Upgrades
Chromium 98.0.4758.74
New in 97
Node V16.13.0
v16.13.0 release notes
V8 v9.8
V8 9.7 blog post
Breaking Changes
desktopCapturer.getSources is now only available in the main process. #30720
Features
Additions
Added WebHID support. #30213 (Also in 15, 16)
Added commandLine.removeSwitch to allow apps to remove command line switches from Chromiums internal command line representation. #30933 (Also in 15, 16)
Added textWidth option to dialog.showMessageBox() / dialog.showMessageBoxSync(). #30474 (Also in 15, 16)
Added webContents.getMediaSourceId(), can be used with getUserMedia to get a stream for a WebContents. #31204
Added missing info to in-app purchase's transaction and product structures. #32602
Added new data parameter to app.requestSingleInstanceLock(). #30891 (Also in 16)
Added warning when ipcRenderer.sendSync() is called with no listeners for channel on ipcMain. #31344 (Also in 13, 14, 15, 16)
Began passing securityOrigin in details for permission request handlers for media requests in addition to permission check handlers. #31357 (Also in 13, 14, 15, 16)
Support obsolete blowfish ciphers bf-{cbc,cfb,ecb} through the Node.js crypto API. #32439
Removed/Deprecated
Deprecates webContents.getPrinters() and introduces webContents.getPrintersAsync(). #31023
Fixes
Fixed maxWidth not working in BrowserWindow constructor options. #32637
Fixed VoiceOver not reading typed words correctly in MAS builds. #32567
Fixed a crash when starting VoiceOver on macOS. #32578
Fixed a potential crash in v8 by using allocation type: kOld in v8 ScriptOrModule legacy lifetime. #32355
Fixed an issue where calling screen capture on macOS does not properly release underlying OS capture mechanisms. #32464
Fixed issue where not all serial devices were exposed to the handler specified by session.setDevicePermissionHandler. #32685
Fixed an issue with transparent windows failing to fire the maximize and unmaximize events on Windows. #32690
Fixed draggable regions not updating unless a relayout occurs. #32638
Also in earlier versions....
Allowed specifying x64 arch on Mac Rosetta via npm_config_arch. #32382 (Also in 15, 16)
Assertion failure happening in the showSaveDialogSync() code path has been fixed. (Fixes #31997). #32083 (Also in 14, 15, 16)
Bug fixed for registering protocol in windows which used to set invalid command if the execution path included space. #32329 (Also in 14, 15, 16)
Changed WebHID to use disable-hid-blocklist flag to enable FIDO devices. #31626 (Also in 15, 16)
Enables support for navigator.keyboard.lock(). #31572 (Also in 16)
Fixed "Failed to serialize arguments" error when emitting 'context-menu' event for webview. #31259 (Also in 15, 16)
Fixed Let's Encrypt DST Root CA X3 certificate expiration. #31213 (Also in 12, 13, 14, 15, 16)
Fixed <webview> background transparency regression. #31722 (Also in 16)
Fixed BrowserView.setBackgroundColor() not working correctly. #31746 (Also in 16)
Fixed clipboard.writeBuffer(), clipboard.readBuffer() and clipboard.read()'s ability to manipulate platform-specific clipboard formats. #31116 (Also in 15, 16)
Fixed window.open not overriding parent's webPreferences. #32107 (Also in 15, 16)
Fixed a JavaScript exception from webContents if render frame was disposed in WebFrameMain, resets the value of render_frame_disposed_ after updating render frame host. #31401 (Also in 14, 15, 16)
Fixed a crash caused by app.getLocaleCountryCode(). #32322 (Also in 15, 16)
Fixed a crash that occurred when user attempted to download an edited PDF. #32539 (Also in 15, 16)
Fixed a crash when a BrowserWindow is closed subsequent to its webContents being destroyed. #31620 (Also in 14, 15, 16)
Fixed a potential crash when importing media files or custom file types. #31884 (Also in 16)
Fixed a potential crash when setting nativeTheme.themeSource on macOS. #31329 (Also in 14, 15, 16)
Fixed a potential issue when setting backgroundColor on BrowserViews. #31948 (Also in 14, 15, 16)
Fixed a tracing agent-related crash when initializing Node.js in service workers. #31459 (Also in 14, 15, 16)
Fixed an issue that the alert() dialog title is corrupted. #32469 (Also in 14, 15, 16)
Fixed an issue where BrowserView dragging behavior was inconsistent with MacOS window dragging. #31114 (Also in 13, 14, 15, 16)
Fixed an issue where BrowserView may sometimes crash on browserView.webContents.destroy(). #31796 (Also in 15, 16)
Fixed an issue where BrowserViews crashed if view.webContents.destroy() is called after loading a URL. #31794 (Also in 14, 15, 16)
Fixed an issue where Content-Disposition filenames would be incorrectly truncated at the first comma for a filename attachment which contained one. #31669 (Also in 13, 14, 15, 16)
Fixed an issue where MediaMetadata did not work properly. #31492 (Also in 13, 14, 15, 16)
Fixed an issue where app.getPath('crashDumps') returned an incorrect path for Linux. #31668 (Also in 15, 16)
Fixed an issue where clipboard.read() could cause crashes with custom clipboard formats. #31566 (Also in 15, 16)
Fixed an issue where ipcRenderer.postMessage{
  "author": {
    "email": "zakwarlord7hotmail.com",
    "name": "GitHub",
    "url": "https://github.com/github/workflows/Doc/javascript/ci/test/Tests'/travis.ymlrip"
  },
  "cacheDirectories": [
    "node_modules",
    ".next/cache"
  ],
  "dependencies": {
    "@github/failbot": "0.8.0",
    "@hapi/accept": "^5.0.2",
    "@primer/components": "^33.1.0",
    "@primer/css": "^19.1.1",
    "@primer/octicons": "^16.3.0",
    "@primer/octicons-react": "^16.3.0",
    "@react-aria/ssr": "^3.1.0",
    "accept-language-parser": "^1.5.0",
    "ajv": "^8.9.0",
    "ajv-formats": "^2.1.1",
    "cheerio": "^1.0.0-rc.10",
    "classnames": "^2.3.1",
    "compression": "^1.7.4",
    "connect-datadog": "0.0.9",
    "connect-slashes": "^1.4.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "csurf": "^1.11.0",
    "dayjs": "^1.10.7",
    "dotenv": "^10.0.0",
    "express": "^4.17.2",
    "express-rate-limit": "^6.0.4",
    "express-timeout-handler": "^2.2.2",
    "flat": "^5.0.2",
    "github-slugger": "^1.4.0",
    "got": "^11.8.2",
    "gray-matter": "^4.0.3",
    "hast-util-from-parse5": "^7.1.0",
    "hast-util-parse-selector": "^3.1.0",
    "hast-util-select": "^5.0.1",
    "hast-util-to-string": "^2.0.0",
    "hastscript": "^7.0.2",
    "helmet": "^4.6.0",
    "highlight.js": "11.2.0",
    "highlightjs-graphql": "^1.0.2",
    "hot-shots": "^9.0.0",
    "html-entities": "^2.3.2",
    "imurmurhash": "^0.1.4",
    "js-cookie": "^3.0.1",
    "js-yaml": "^4.1.0",
    "kleur": "4.1.4",
    "liquidjs": "^9.22.1",
    "lodash": "^4.17.21",
    "lodash-es": "^4.17.21",
    "lunr": "^2.3.9",
    "lunr-languages": "^1.9.0",
    "mdast-util-from-markdown": "^1.2.0",
    "mdast-util-to-string": "^3.1.0",
    "morgan": "^1.10.0",
    "next": "^11.1.3",
    "node-fetch": "^3.2.0",
    "parse5": "^6.0.1",
    "port-used": "^2.0.8",
    "rate-limit-redis": "^2.1.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-markdown": "^8.0.0",
    "react-syntax-highlighter": "^15.4.5",
    "redis": "^3.1.2",
    "rehype-autolink-headings": "^6.1.1",
    "rehype-highlight": "^5.0.2",
    "rehype-raw": "^6.1.1",
    "rehype-slug": "^5.0.1",
    "rehype-stringify": "^9.0.2",
    "remark-code-extra": "^1.0.1",
    "remark-gemoji-to-emoji": "^1.1.0",
    "remark-gfm": "^3.0.1",
    "remark-parse": "^10.0.1",
    "remark-parse-no-trim": "^8.0.4",
    "remark-rehype": "^10.1.0",
    "revalidator": "^0.3.1",
    "rss-parser": "^3.12.0",
    "scroll-anchoring": "^0.1.0",
    "semver": "^7.3.5",
    "slash": "^4.0.0",
    "strip-html-comments": "^1.0.0",
    "styled-components": "^5.3.3",
    "swr": "1.1.2",
    "throng": "^5.0.0",
    "ts-dedent": "^2.2.0",
    "unified": "^10.1.0",
    "unist-util-visit": "^4.1.0",
    "uuid": "^8.3.2",
    "walk-sync": "^3.0.0"
  },
  "devDependencies": {
    "@actions/core": "^1.6.0",
    "@actions/github": "^5.0.0",
    "@alex_neo/jest-expect-message": "^1.0.5",
    "@babel/core": "^7.16.12",
    "@babel/eslint-parser": "^7.16.5",
    "@babel/plugin-syntax-top-level-await": "^7.14.5",
    "@babel/plugin-transform-runtime": "^7.16.10",
    "@babel/preset-env": "^7.16.11",
    "@graphql-inspector/core": "^2.9.0",
    "@graphql-tools/load": "^7.4.1",
    "@jest/globals": "^27.4.6",
    "@octokit/graphql": "4.8.0",
    "@octokit/rest": "^18.12.0",
    "@types/github-slugger": "^1.3.0",
    "@types/imurmurhash": "^0.1.1",
    "@types/js-cookie": "^3.0.1",
    "@types/lodash": "^4.14.178",
    "@types/react": "^17.0.38",
    "@types/react-dom": "^17.0.11",
    "@types/react-syntax-highlighter": "^13.5.2",
    "@types/uuid": "^8.3.4",
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.31.1",
    "async": "^3.2.3",
    "babel-loader": "^8.2.3",
    "babel-plugin-styled-components": "^2.0.2",
    "babel-preset-env": "^1.7.0",
    "chalk": "^5.0.0",
    "change-case": "^4.1.2",
    "commander": "^8.3.0",
    "cross-env": "^7.0.3",
    "csp-parse": "0.0.2",
    "dedent": "^0.7.0",
    "domwaiter": "^1.3.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-config-standard": "^16.0.3",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^6.0.0",
    "event-to-promise": "^0.8.0",
    "git-diff": "^2.0.6",
    "glob": "^7.2.0",
    "graphql": "^16.3.0",
    "heroku-client": "^3.1.0",
    "http-status-code": "^2.1.0",
    "husky": "^7.0.4",
    "japanese-characters": "^1.1.0",
    "javascript-stringify": "^2.1.0",
    "jest": "^27.4.7",
    "jest-github-actions-reporter": "^1.0.3",
    "jest-slow-test-reporter": "^1.0.0",
    "linkinator": "^3.0.3",
    "lint-staged": "^12.3.3",
    "make-promises-safe": "^5.1.0",
    "minimatch": "^3.0.4",
    "mkdirp": "^1.0.4",
    "mock-express-response": "^0.3.0",
    "mockdate": "^3.0.5",
    "nock": "^13.2.2",
    "nodemon": "^2.0.15",
    "npm-merge-driver-install": "^2.0.2",
    "postcss": "^8.4.6",
    "prettier": "^2.5.1",
    "replace": "^1.2.1",
    "rimraf": "^3.0.2",
    "robots-parser": "^3.0.0",
    "sass": "^1.49.0",
    "start-server-and-test": "^1.14.0",
    "strip-ansi": "^7.0.1",
    "supertest": "^6.1.6",
    "typescript": "^4.5.5",
    "url-template": "^3.0.0",
    "yesno": "^0.3.1"
  },
  "engines": {
    "node": "16.x"
  },
  "exports": "./server.mjs",
  "license": "(MIT AND CC-BY-4.0)",
  "name": "docs.github.com",
  "optionalDependencies": {
    "bottleneck": "^2.19.5",
    "csv-parse": "^4.16.3",
    "esm": "^3.2.25",
    "image-size": "^1.0.0",
    "jest-puppeteer": "^5.0.4",
    "jimp": "^0.16.1",
    "pa11y-ci": "^2.4.2",
    "puppeteer": "^9.1.1",
    "website-scraper": "^4.2.3",
    "xlsx-populate": "^1.21.0"
  },
  "private": true,
  "repository": "https://github.com/github/docs",
  "scripts": {
    "browser-test": "start-server-and-test browser-test-server 4001 browser-test-tests",
    "browser-test-server": "cross-env NODE_ENV=production WEB_CONCURRENCY=1 PORT=4001 ENABLED_LANGUAGES=en,ja node server.mjs",
    "browser-test-tests": "cross-env BROWSER=1 NODE_OPTIONS=--experimental-vm-modules jest tests/browser/browser.js",
    "build": "next build",
    "debug": "cross-env NODE_ENV=development ENABLED_LANGUAGES='en,ja' nodemon --inspect server.mjs",
    "dev": "npm start",
    "heroku-postbuild": "node script/early-access/clone-for-build.js && npm run build",
    "lint": "eslint '**/*.{js,mjs,ts,tsx}'",
    "lint-translation": "cross-env NODE_OPTIONS=--experimental-vm-modules TEST_TRANSLATION=true jest tests/linting/lint-files.js",
    "pa11y-ci": "pa11y-ci",
    "pa11y-test": "start-server-and-test browser-test-server 4001 pa11y-ci",
    "prebrowser-test": "npm run build",
    "prepare": "husky install",
    "prettier": "prettier -w \"**/*.{ts,tsx,js,mjs,scss,yml,yaml}\"",
    "prettier-check": "prettier -c \"**/*.{ts,tsx,js,mjs,scss,yml,yaml}\"",
    "prevent-pushes-to-main": "node script/prevent-pushes-to-main.js",
    "rest-dev": "script/rest/update-files.js && npm run dev",
    "start": "cross-env NODE_ENV=development ENABLED_LANGUAGES='en,ja' nodemon server.mjs",
    "start-all-languages": "cross-env NODE_ENV=development nodemon server.mjs",
    "sync-search": "cross-env NODE_OPTIONS='--max_old_space_size=8192' start-server-and-test sync-search-server 4002 sync-search-indices",
    "sync-search-ghes-release": "cross-env GHES_RELEASE=1 start-server-and-test sync-search-server 4002 sync-search-indices",
    "sync-search-indices": "script/sync-search-indices.js",
    "sync-search-server": "cross-env NODE_ENV=production WEB_CONCURRENCY=1 PORT=4002 node server.mjs",
    "translation-check": "start-server-and-test translation-check-server 4002 translation-check-test",
    "translation-check-server": "cross-env NODE_ENV=test PORT=4002 node server.mjs",
    "translation-check-test": "script/i18n/test-html-pages.js",
    "test": "cross-env NODE_OPTIONS='--max_old_space_size=8192 --experimental-vm-modules' jest --logHeapUsage",
    "test-watch": "cross-env NODE_OPTIONS=--experimental-vm-modules jest --watch --notify --notifyMode=change --coverage",
    "tsc": "tsc --noEmit"
  },
  "lint-staged": {
    "*.{js,mjs,ts,tsx}": "eslint --cache --fix",
    "*.{js,mjs,scss,ts,tsx,yml,yaml}": "prettier --write"
  }
}
{
  "package": "js,json,yml,md,html,scss",
  "ignore": [
    "assets",
    "script",
    "translations",
    "dependencies",
    "Script immediately below this commit (Lists drpendants**/*backtrace*log::All:*logs:: All:: Automatically:::Automates::':Automate:Run::run:on:"
  ]
}

