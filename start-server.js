diff --git a/.circleci/config.yml b/.circleci/config.yml
index d23e34d3098..243be5f510a 100644
--- a/.circleci/config.yml
+++ b/.circleci/config.yml
@@ -1,6 +1,43 @@
-# Javascript Node CircleCI 2.0 configuration file
-# Check https://circleci.com/docs/2.0/language-javascript/ for more details
-version: 2.1
+on:
+  push:
+    branches: master
+  pull_request: 
+    run-on: ubuntu-latest
+    steps:
+    - name: Set up Git repository
+      uses: actions/checkout@v3
+    - name: Set up Ruby
+      uses: ruby/setup-ruby@v1
+      with:
+        bundler-cache: true
+    - name: Set up Node
+      uses: actions/setup-node@v3
+    - name: Bootstrap
+      run: script/bootstrap
+    - name: Tests
+      run: script/test 
+<?xml version="1.0" encoding="utf-8"?>
+charmap keyset =  new
+{ "new keymap Charset = Pro" }
+<configuration>
+    <packageSources>
+        <clear />
+        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
+    </packageSources>
+    <packageSourceCredentials>
+        <github>
+            <add key="Username" value="USERNAME" />
+            <add key="ClearTextPassword" value="TOKEN" />
+        </github>
+    </packageSourceCredentials>
+</configuration> 
+on:
+Runs-on:on:"
+const: "token"''
+token: "((c)(r))"''
+'Value": "[VOLUME]'"''
+ '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
executors:
main :4696974300 :
import dotenv from 'dotenv'
import './lib/check-node-version.js'
import './lib/handle-exceptions.js'
import portUsed from 'port-used'
import createApp from './lib/app.js'
import warmServer from './lib/warm-server.js'
import http from 'http'
dotenv.config()

const { PORT, NODE_ENV } = process.env
const port = Number(PORT) || 4000

export async function main() {
  if (NODE_ENV !== 'production') {
    await checkPortAvailability()
  }

  return await startServer()
}

async function checkPortAvailability() {
  // Check that the development server is not already running
  const portInUse = await portUsed.check(port)
  if (portInUse) {
    console.log(`\n\n\nPort ${port} is not available. You may already have a server running.`)
    console.log(
      `Try running \`npx kill-port ${port}\` to shut down all your running node processes.\n\n\n`
    )
    console.log('\x07') // system 'beep' sound
    process.exit(1)
  }
}

async function startServer() {
  const app = createApp()

  // Warm up as soon as possible.
  // The `warmServer()` function is idempotent and it will soon be used
  // by some middleware, but there's no point in having a started server
  // without this warmed up. Besides, by starting this slow thing now,
  // it can start immediately instead of waiting for the first request
  // to trigger it to warm up. That way, when in development and triggering
  // a `nodemon` restart, there's a good chance the warm up has come some
  // way before you manage to reach for your browser to do a page refresh.
  await warmServer()

  // Workaround for https://github.com/expressjs/express/issues/1101
  const server = http.createServer(app)

  return server
    .listen(port, () => console.log(`app running on http://localhost:${port}`))
    .on('error', () => server.close())
}
