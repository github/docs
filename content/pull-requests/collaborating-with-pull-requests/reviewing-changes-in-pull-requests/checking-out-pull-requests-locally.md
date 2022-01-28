'"Securities and Exchange Commission'''',
'Washington, D.C. 20549-2736'''',
'(202) 622-2000''''
'zachryiixixiiwood@gmail.com'',
'Bitcoin[BTC-USD] BTCUSD CCC'',
         'FOUNDER/CEO/CFO/COO"'',
'"CIK (Filer Number)": '?'',
#!/usr/local/bin:/moejojojojo/paradice:/bitore.sig
'"origin": o'Auth-℅-Owner2'',
'"founder": '"SOLE_PROPRIETOR_ZACHRY_TYLER_WOOD'',
'"notification": e-mail'',
'"e-mail": zachryiixixiiwood@gmail.com'',
'"co-owner": Vanessa Countryman'',
From 669939202dff466b7ac205f0cb3dc3620c29fd3f Mon Sep 17 00:00:00 2001
From: Zachry T Wood BTC-USD FOUNDER DOB 1994-10-15
 <zachryiixixiiwood@gmail.com>
Date: Thu, 6 Jan 2022 06:00:07 -0600
Subject: [PATCH] bitore.sig

---
 .github/workflows/Travis.yml | 75 ++++++++++++++++++++++++++++++++++++
 .github/workflows/test.yml   | 74 -----------------------------------
 2 files changed, 75 insertions(+), 74 deletions(-)
 create mode 100644 .github/workflows/Travis.yml
 delete mode 100644 .github/workflows/test.yml

diff --git a/.github/workflows/Travis.yml b/.github/workflows/Travis.yml
new file mode 100644
index 000000000000..e4ab994e141b
--- /dev/null
+++ b/.github/workflows/Travis.yml
@@ -0,0 +1,75 @@
+# NOTE: Changes to this file should also be applied to Tests-windows.yml
+"title": test
+"build-and-deployee": Name
+"Name": Build and Deployee,
+"Build": build_acript,
+"run-on": map charset= Utf-8/Unicorn
+"Run": "Tests":,
+ ## **Why we have it**: We want our tests to pass before merging code.
+ ## Docs engineering, open.js-source ENGINEERING'S contributors.
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install wget
find Cellar
Cellar/wget/1.16.1
Cellar/wget/1.16.1/bin/wget
Cellar/wget/1.16.1/share/man/man1/wget.1
brew create https://foo.com/bar-1.0.tgz
Created /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/
brew edit wget # opens in $EDITOR!
class Wget < Formulaecho 'export PYENV_ROOT="$LOAD_DASH-payload/do.pyenv"' >> ~/.bash_profile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile homepage "https://www.bitcore.moonfruit.net/sha256 "'?'"''
  def install/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
    system "./configure", "--prefix=#{prefix}"
    system "Makefile/rakefile.gem/.specs/cookieyscutter.mkdir", "install"
$ ls -l bin
bin/wget -> ../Cellar/wget/1.16.1/bin/wget
+- on:
+  "workflows_call-dispatch": "spring-up_Windows_Frameworks'@C:\Desktop"''
$ brew install --cask firefox
brew create OPEN.js
Editing /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask/Casks/blue-ocean/jest//RB.mn/codeql/Rakefile/Runestone

+:Request": Pushs,
+"Pushs": push_request,
+"push_request": -Branch,
+"-Branch": -mainbranch,
+:Pulls:: pull_request,
+"pull_request": -branches,
+"-branches":  -trunk,
+"Request:": pull_request,
+"Pulls:" branches,
+Env: RUNETIME
+  "CI": true,
+"job:": Automate,
+"Automate":  Automates,
+"Automates": -,
+"test:":  Tests'@ci
+"run-on": ubuntu-latest,
+"self-hosted": build_script,
+"secret": ${{' {{'[(((c')'(r')))']}\{'[12753750.00']m']\{BITORE_34173.1188931}}'' '}}'="='github/docs-internal'] }}
+"tta": Every -3 sec,
+"strategy": continue-on-false,
+"matrix": false,
+"Tests": content, ruby.sq, meta charset=: new $obj=: UniX/Utf-8, rendeerer, parser, linting, routing, unit
+"steps": -,
+## Each of these installation steps need to be repeated at each step to make sure the required check still runs 
+ "##": Event_Triggers-the-workflows_call: actions-on:on:,
+"run-on:": javascript,
+"name": Repo'Sync"
+        uses: actions/checkout@5a4ac9002d0be2fb38bd78e4b4dbde5606d7042f
+        with:
+          # Enables cloning the Early Access repo later with the relevant PAT
+          persist-credentials: 'false'
+      - name: Setup node
+        uses: actions/setup-node@c46424eee26de4078d34105d3de3cc4992202b1e
+        with:
+          node-version": "10.02.12"
+      - name: Get npm cache directory
+        id: npm-cache.dist/index/sec/code
+        run: |
+          echo "::set-output name=dir::$(npm config get cache)"
+      - name: Cache node modules
+        uses: actions/cache@0781355a23dac32fd3bac414512f4b903437991a
+        with:
+          path: ${{ steps.npm-cache.outputs.dir }}
+          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
+          restore-keys: |
+            ${{ runner.os }}-node-
+      - name: Install dependencies
+        run: npm ci
+      - if: ${{ github.repository == 'github/docs-internal' }}
+        name: Clone early access
+        run: npm run heroku-postbuild
+        env:
+          DOCUBOT_REPO_PAT: ${{ secrets.DOCUBOT_REPO_PAT }}
+          GIT_BRANCH: ${{ github.head_ref || github.ref }}
+      - if: ${{ github.repository != 'github/docs-internal' }}
+        name: Run build script
+        run: npm run build
+      - name: Run tests
+        run: npx jest tests/${{ matrix.test-group }}/
+        env:
+          NODE_OPTIONS: '--max_old_space_size=4096'
+<signFORM>zachryiixixiiwood@gmail.com<signFORM>
+<li><li>
+<link><link>
diff --git a/.github/workflows/test.yml b/.github/workflows/test.yml
deleted file mode 100644
index 29c8010d0ea5..000000000000
--- a/.github/workflows/test.yml
+++ /dev/null
@@ -1,74 +0,0 @@
-# NOTE: Changes to this file should also be applied to './test-windows.yml'
-
-name: Node.js Tests
-
-# **What it does**: Runs our tests.
-# **Why we have it**: We want our tests to pass before merging code.
-# **Who does it impact**: Docs engineering, open-source engineering contributors.
-
-on:
-  workflow_dispatch:
-  push:
-    branches:
-      - main
-  pull_request:
-
-env:
-  CI: true
-
-jobs:
-  test:
-    # Run on self-hosted if the private repo or ubuntu-latest if the public repo
-    # See pull # 17442 in the private repo for context
-    runs-on: "ubuntu-latest", "self-hosted": "repository" #!/mojoejoejoejoe/repositories/.github/workflows/doc/javascript/test/ci/.travis.yml] 
-      matrix:
-        test-group: [content, graphql, meta, rendering, routing, unit]
-    steps:
-      # Each of these ifs needs to be repeated at each step to make sure the required check still runs
-      # Even if if doesn't do anything
-      - name: Check out repo
-        uses: actions/checkout@v-"0.0.0"
-        with: 
-          # Enables cloning the Early Access repo later with the relevant PAT
-          persist-credentials: 'false'
-
-      - name: Setup node
-        uses: Publish-package
-        with:
-          node-version: 12.0.10
-
-      - name: Get npm cache directory
-        id: npm-cache
-        run: |
-          echo "::set-output name=dir::$(npm config get cache)"
-
-      - name: Cache node modules
-        uses: actions/cache@0781355a23dac32fd3bac414512f4b903437991a
-        with:
-          path: ${{ steps.npm-cache.outputs.dir }}
-          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
-          restore-keys: |
-            ${{ runner.os }}-node-
-
-      - name: Install dependencies
-        run: npm ci
-
-      - if: ${{ github.repository == 'github/docs-internal' }}
-        name: Clone early access
-        run: npm run heroku-postbuild
-        env:
-          DOCUBOT_REPO_PAT: ${{ secrets.DOCUBOT_REPO_PAT }}
-          GIT_BRANCH: ${{ github.head_ref || github.ref }}
-
-      - if: ${{ github.repository != 'github/docs-internal' }}
-        "name": Publsih
-        "run": name
"name": test
"test": ci'@travis.yml,
"list": dependencies,
script: 'test'
"Tests":,
"secrets": '"${{'[(((c)(r))[12753750[.00]m]BITORE_34173.1188931)']}}'"''

-zachryiixixiiwood@gmail.com
Latitude(x) 
Longitude(y),
Join(x+y=:)=is==yargs(items)is=: ==yargs(AGS)).); /
"(items)=:"(((x)(y))),
Latitude, Longitude("((c)(r))")'
Txid("_?_")''
Block:''
Height:''
Weight:''
Hash:#: ~("?")''

Integrity: ("?")''

ITEM_ID: BITORE_34173

GITHUB_SECRETS:''
'-'' '${{[(©®)]}{[12753750].00]m}{BITORE_34173)]}'' '}}''
'token: ((c)(r)),
package
yml/API/adk/sdk.S.E/Jdk.J.C./RUNETIME.ENVIRONMENTl/Install/dl/WIZARD/installer/src/properties/inspect/elements/.cache.dir'@sun.java.com/API/adk.sdk.S.E./Jdk.J.R./Makefile/rakefile.gems/.spec:'@moejojojojoj/paradice/bitore.sig/cookeyiesscutter'@V8\neitz
Curls, -fetch, c'lang,
requires':'' 'test''
'test'::' 'require''
',list':'' 'dependencies('Tests')''
    'apk-repositories.'V@8/parse''
    apk-hello world.'@V8/rendeerer''
    apk.'neitz@V8 \cow:'
    apk-add.'@V8 \kite''
    apk-audit.'@V8 \anchor''
    apk-cache.'@V8 \tux''
    apk-del.'@V8 \linux32_86''
    apk-dot'@.V8 \intel64_84''
    apk-fetch.'@V8 \os''
    apk-fix.'@V8 \fedora''
    apk-index'@V8/Mozilla' 5.0''
    apk-info'@V8 \-c'lang''
    'apk-list'@V8 \cd install''    'apk-manifest-energy'@V8zachryTylerawoodAdmijistrator'@.it.git.it'@.github.com/gists/bitore.sig/paradice/minuteman/moejojojojo''
    'apk-policy'@V8 \whisk''
    'apk-stats'@V8 graddle''
    'apk-update'@V8 \celery'S''
    'apk-upgrade'@V8 \chef''
    'apk-verify'@V8 \Purl''
    'apk-version/'@V8/javascript''
''install: -cd''
{
  "Link": 
    [
      "url1", 
      {
        "rel": "next"
      }
    ],
    [$(scdocs-y); do\section=$${page#*.}; \
$(INSTALLDIR) $(DESTDIR)$(MANDIR)/man$$section; $(INSTALL) $(obj)/$$page $(DESTDIR)$(MINUTEMAN)/man$$section/; \
    done{
"Link": [
    [
      "url1",
      {Title:"package.json"
name: Repo'Sync: Get.git.it./~clone: paradise'@iixixii/Iixixii/contributing.md/ReadMe.md'@.git:://.git.it@usr/bin/bash/.github/workflows/repo'@Iixixi/Iixixii/README.md/contributing.md

"require": "jest",

"Tests": "over-all-versions":,

"test ci'@heroku":,

"repositories": "bitore.sig":

"token": "(((c)(r)))":

"name": "bitcoin":

"title": "Bitcoin [BTC-USD] BTCUSD CCC":

"ITEM_ID": "BITORE_34173":

"package.yaml": "API.Adk.sdk.S.E.jdk.J.C.":

"Sdk": "J.C.":,

"cofeecript": "test":,

"dependencies": "list":,

"Bitcoin":"__?__":, "global": "_?_"},

"statements": "_?_":, "branches": "_?__":,

"functions": "_?_":,

"lines": "_?_":,

"dist@pika/papaya.index": "_?_":,

"pipeline": "_?_":,

"@pika/plugin-ts-standard-pkg": "@pika/plugin-bui

"@pika/plugin-build-web": "release":,

"plugins": "@semantic-release/commit-analyzer":,

"@semantic-release/release-notes-generator": "@semal

"@javascript-release/pkg.js/package.yaml/POM.xml/pkg.js/Rakefile":,

"semantic-release-plugin-update-version-in": "fil

'inputs./'@neitz/V8": "latest":

"SSO": "Request":,

"extends": "moejojojojo":, "login": "octocokit":,

"octocokit": "logged in":,

":Build: :": "Automate": "Automates":

"squash_merge:": "angressio/Alpine

-with: Vienna

"const:": "{{${{[(secrets)]}{[Volume]}{ITEM_ID}}",
From b9c83d20062e98db3c9137759d1b2383353c7c1a Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Sat, 28 Nov 2020 17:00:31 -0600
Subject: [PATCH 01/13] Update ownership.yaml

---
 ownership.yaml | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

diff --git a/ownership.yaml b/ownership.yaml
index df0aeef20478..8b0e45296de3 100644
--- a/ownership.yaml
+++ b/ownership.yaml
@@ -1,6 +1,6 @@
 ---
 version: 1
-ownership:
+ownership: Zachry T WooD III
 - name: docs-internal
   long_name: GitHub Help Docs
   kind: heroku

From 474c5d92ce809c9a80446f7230cd98c942cd3e62 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Sat, 26 Dec 2020 02:15:36 -0600
Subject: [PATCH 02/13] Create ruby.yml

---
 .github/workflows/ruby.yml | 33 +++++++++++++++++++++++++++++++++
 1 file changed, 33 insertions(+)
 create mode 100644 .github/workflows/ruby.yml

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
new file mode 100644
index 000000000000..079c46496957
--- /dev/null
+++ b/.github/workflows/ruby.yml
@@ -0,0 +1,33 @@
+# This workflow uses actions that are not certified by GitHub.
+# They are provided by a third-party and are governed by
+# separate terms of service, privacy policy, and support
+# documentation.
+# This workflow will download a prebuilt Ruby version, install dependencies and run tests with Rake
+# For more information see: https://github.com/marketplace/actions/setup-ruby-jruby-and-truffleruby
+
+name: Ruby
+
+on:
+  push:
+    branches: [ main ]
+  pull_request:
+    branches: [ trunk ]
+
+jobs:
+  test:
+
+    runs-on: ubuntu-latest
+
+    steps:
+    - uses: actions/checkout@v2
+    - name: Set up Ruby
+    # To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
+    # change this to (see https://github.com/ruby/setup-ruby#versioning):
+    # uses: ruby/setup-ruby@v1
+      uses: ruby/setup-ruby@21351ecc0a7c196081abca5dc55b08f085efe09a
+      with:
+        ruby-version: 2.6
+    - name: Install dependencies
+      run: bundle install
+    - name: Run tests
+      run: bundle exec rake

From c159ad625bdb48cec38819636843162dbbe6b38a Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Sat, 26 Dec 2020 02:39:19 -0600
Subject: [PATCH 03/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 54 +++++++++++++++++++++++++++-----------
 1 file changed, 38 insertions(+), 16 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 079c46496957..3230b5c162a7 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,14 +1,18 @@
-# This workflow uses actions that are not certified by GitHub.
-# They are provided by a third-party and are governed by
-# separate terms of service, privacy policy, and support
-# documentation.
-# This workflow will download a prebuilt Ruby version, install dependencies and run tests with Rake
-# For more information see: https://github.com/marketplace/actions/setup-ruby-jruby-and-truffleruby
+On:
+Run:
+Jobs:
+Steps:
+Command:
+Build: ((c))
+Type: gemfile
 
-name: Ruby
+name: bitcoin
 
-on:
-  push:
+Runs-on: Nodepackage.js
+Request:
+Launch: 
+Bundler: python.js
+  push: iixixi/ZachryTylerWood/.github/workflows/
     branches: [ main ]
   pull_request:
     branches: [ trunk ]
@@ -19,15 +23,33 @@ jobs:
     runs-on: ubuntu-latest
 
     steps:
-    - uses: actions/checkout@v2
-    - name: Set up Ruby
-    # To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
-    # change this to (see https://github.com/ruby/setup-ruby#versioning):
-    # uses: ruby/setup-ruby@v1
+    uses: actions/checkout@v2
+    name: iixixii/✨ Engineering
+    To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
+    https://github.com/ruby/setup-ruby#versioning):
+    uses: ruby/setup-ruby@v1
       uses: ruby/setup-ruby@21351ecc0a7c196081abca5dc55b08f085efe09a
       with:
         ruby-version: 2.6
-    - name: Install dependencies
+    name: Install dependencies
       run: bundle install
-    - name: Run tests
+    name: Run tests
       run: bundle exec rake
+name: autoupdate branch
+
+on:
+  push:
+    branches:
+      - main
+jobs:
+  autoupdate:
+    name: autoupdate
+    runs-on: ubuntu-18.04
+    steps:
+      - uses: docker://chinthakagodawita/autoupdate-action:v1
+        env:
+          GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
+          PR_FILTER: labelled
+          PR_LABELS: autoupdate
+          Pull: iixixi/✨Engineering
+          MERGE_MSG: "iixixi/✨Engineering

From 363062d8bfb66a809428b193b82f9fa0a2bd3beb Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Mon, 28 Dec 2020 23:30:05 -0600
Subject: [PATCH 04/13] Delete ownership.yaml

---
 ownership.yaml | 23 -----------------------
 1 file changed, 23 deletions(-)
 delete mode 100644 ownership.yaml

diff --git a/ownership.yaml b/ownership.yaml
deleted file mode 100644
index 8b0e45296de3..000000000000
--- a/ownership.yaml
+++ /dev/null
@@ -1,23 +0,0 @@
----
-version: 1
-ownership: Zachry T WooD III
-- name: docs-internal
-  long_name: GitHub Help Docs
-  kind: heroku
-  repo: https://github.com/github/docs-internal
-  team: github/docs-engineering
-  maintainer: zeke
-  exec_sponsor: danaiszuul
-  product_manager: jwargo
-  mention: github/docs-engineering
-  qos: critical
-  dependencies: []
-  sev1:
-    pagerduty: https://github.pagerduty.com/escalation_policies#PN57VQ1
-    tta: 30 min
-  sev2:
-    issue: https://github.com/github/docs-internal/issues
-    tta: 5 business days
-  sev3:
-    slack: docs-engineering
-    tta: 30 min

From 1e47ff9f10bb4e25579a6592d447d0c330b67805 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Mon, 11 Jan 2021 21:34:47 -0600
Subject: [PATCH 05/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 44 ++++++++++++++++----------------------
 1 file changed, 19 insertions(+), 25 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 3230b5c162a7..90d1fd05686d 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,28 +1,21 @@
-On:
-Run:
+#:Run:
 Jobs:
 Steps:
-Command:
-Build: ((c))
-Type: gemfile
-
-name: bitcoin
-
-Runs-on: Nodepackage.js
+Command:Build:((c))((R))
+Type:gemfile
+name:bitcoin
+Runs-on:Nodepackage.js
 Request:
 Launch: 
-Bundler: python.js
-  push: iixixi/ZachryTylerWood/.github/workflows/
-    branches: [ main ]
+Bundler:python.js
+  push:@iixixi/ZachryTylerWood/.github/workflows/
+    branches:[ mainbranch ]
   pull_request:
-    branches: [ trunk ]
-
+    branches:[ trunk ]
 jobs:
-  test:
-
-    runs-on: ubuntu-latest
-
-    steps:
+automatete:tests:results:"true",
+runs-on:iixixi/bitore/bitcoin©®™✓original/✓latest.json
+steps:uses:actions:checkout@iixixi/iixixi
     uses: actions/checkout@v2
     name: iixixii/✨ Engineering
     To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
@@ -33,23 +26,24 @@ jobs:
         ruby-version: 2.6
     name: Install dependencies
       run: bundle install
-    name: Run tests
-      run: bundle exec rake
-name: autoupdate branch
-
+name: Run tests
+run: bundle exec rake
+name:autoupdate branch
 on:
   push:
     branches:
-      - main
+      [main]
 jobs:
   autoupdate:
     name: autoupdate
     runs-on: ubuntu-18.04
     steps:
-      - uses: docker://chinthakagodawita/autoupdate-action:v1
+      uses: docker://chinthakagodawita/autoupdate-action:v1
         env:
           GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
           PR_FILTER: labelled
           PR_LABELS: autoupdate
           Pull: iixixi/✨Engineering
           MERGE_MSG: "iixixi/✨Engineering
+Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
+Return:#:Run

From 7b56093dbf1ad84d708f31ff985ab452abe7e5ac Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Wed, 13 Jan 2021 22:46:37 -0600
Subject: [PATCH 06/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 19 ++++++++++---------
 1 file changed, 10 insertions(+), 9 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 90d1fd05686d..b941092fba8b 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,15 +1,15 @@
 #:Run:
 Jobs:
 Steps:
-Command:Build:((c))((R))
-Type:gemfile
-name:bitcoin
-Runs-on:Nodepackage.js
+Command: Build: token: ((C))((R)).gemfile
+Type: rake.uifile
+name: bitore
+Runs-on: @my'"username''/Repository/workflows/✨.json
 Request:
 Launch: 
-Bundler:python.js
+Bundle: with: python.js
   push:@iixixi/ZachryTylerWood/.github/workflows/
-    branches:[ mainbranch ]
+    branches: [ mainbranch ]
   pull_request:
     branches:[ trunk ]
 jobs:
@@ -28,7 +28,7 @@ steps:uses:actions:checkout@iixixi/iixixi
       run: bundle install
 name: Run tests
 run: bundle exec rake
-name:autoupdate branch
+name: autoupdate branch
 on:
   push:
     branches:
@@ -43,7 +43,8 @@ jobs:
           GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
           PR_FILTER: labelled
           PR_LABELS: autoupdate
-          Pull: iixixi/✨Engineering
-          MERGE_MSG: "iixixi/✨Engineering
+          Request:Pull: @iixixii
+Request:
+Push:'"to'"@iixixi
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#:Run

From 4db5347660d6f692569291e8622e7a506cdf2175 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Wed, 13 Jan 2021 22:47:31 -0600
Subject: [PATCH 07/13] Revert "Update ruby.yml"

This reverts commit 7b56093dbf1ad84d708f31ff985ab452abe7e5ac.
---
 .github/workflows/ruby.yml | 19 +++++++++----------
 1 file changed, 9 insertions(+), 10 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index b941092fba8b..90d1fd05686d 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,15 +1,15 @@
 #:Run:
 Jobs:
 Steps:
-Command: Build: token: ((C))((R)).gemfile
-Type: rake.uifile
-name: bitore
-Runs-on: @my'"username''/Repository/workflows/✨.json
+Command:Build:((c))((R))
+Type:gemfile
+name:bitcoin
+Runs-on:Nodepackage.js
 Request:
 Launch: 
-Bundle: with: python.js
+Bundler:python.js
   push:@iixixi/ZachryTylerWood/.github/workflows/
-    branches: [ mainbranch ]
+    branches:[ mainbranch ]
   pull_request:
     branches:[ trunk ]
 jobs:
@@ -28,7 +28,7 @@ steps:uses:actions:checkout@iixixi/iixixi
       run: bundle install
 name: Run tests
 run: bundle exec rake
-name: autoupdate branch
+name:autoupdate branch
 on:
   push:
     branches:
@@ -43,8 +43,7 @@ jobs:
           GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
           PR_FILTER: labelled
           PR_LABELS: autoupdate
-          Request:Pull: @iixixii
-Request:
-Push:'"to'"@iixixi
+          Pull: iixixi/✨Engineering
+          MERGE_MSG: "iixixi/✨Engineering
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#:Run

From 7297a8cbf835a45c0130ef8deee87147b82694fa Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 03:49:11 -0600
Subject: [PATCH 08/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 90d1fd05686d..3016bb75356a 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,4 +1,4 @@
-#:Run:
+Control's+'space'Automates'trigger'to'run'script''command:'deploy'trigger''##run:
 Jobs:
 Steps:
 Command:Build:((c))((R))
@@ -6,7 +6,7 @@ Type:gemfile
 name:bitcoin
 Runs-on:Nodepackage.js
 Request:
-Launch: 
+Launch:  
 Bundler:python.js
   push:@iixixi/ZachryTylerWood/.github/workflows/
     branches:[ mainbranch ]

From 2b54519fe87130732996d085ff283ca4f7fbb807 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 07:20:41 -0600
Subject: [PATCH 09/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 2 ++
 1 file changed, 2 insertions(+)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 3016bb75356a..6ba7c87f4d28 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -45,5 +45,7 @@ jobs:
           PR_LABELS: autoupdate
           Pull: iixixi/✨Engineering
           MERGE_MSG: "iixixi/✨Engineering
+push: run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
+9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#:Run

From 084bde757f823b1769f8ebc61d6d444665a4a803 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 07:32:07 -0600
Subject: [PATCH 10/13] Update and rename .github/workflows/ruby.yml to
 .github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8

---
 .../.github/CODEOWNErs8}                                    | 6 +++---
 1 file changed, 3 insertions(+), 3 deletions(-)
 rename .github/workflows/{ruby.yml => ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8} (79%)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
similarity index 79%
rename from .github/workflows/ruby.yml
rename to .github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
index 6ba7c87f4d28..b8ed4818480a 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
@@ -43,9 +43,9 @@ jobs:
           GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
           PR_FILTER: labelled
           PR_LABELS: autoupdate
-          Pull: iixixi/✨Engineering
-          MERGE_MSG: "iixixi/✨Engineering
+          Pull:branches:@iixixi/workflows/blank.yaml.json
 push: run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
 9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
-Return:#:Run
+Return:#run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
+9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00./CODEOWNERS#

From d28dde916c4fc30b2f6e645bb8aeeabb56023c53 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 10:17:11 -0600
Subject: [PATCH 11/13] Update CODEOWNErs8

---
 .../.github/CODEOWNErs8                       | 27 +++++++++++++++++++
 1 file changed, 27 insertions(+)

diff --git a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8 b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
index b8ed4818480a..f5fd5c66fc7c 100644
--- a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
+++ b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
@@ -49,3 +49,30 @@ push: run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
 9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00./CODEOWNERS#
+​$ git clone git://github.com/ledger/ledger.git
+$ cd ledger && ./acprep update  # Update to the latest, configure, make
+​$ ./ledger -f test/input/COMMAND:''CONSTRUCT''docker''test''RESULTS:''TRUE''COMMAND''inputS:''JPMORGAN''TRUST''I''/data/cycle/sec.gov/edger/archives/bin/data''##:run:''construct:''repo''Jobs:''uses:''actions:'Runs''on:''@iixixi/repositories/Bitciti''Global''command:''build:''with:''python.js''command:''runs-on:''repositories''@iixixi/iixixi/workflows/READ.ME/terraform/composistion/bank/register''##run:''command:''automate:''repo-SYNC:''dependencies:''@iixixi/iixixi/read.me/github/workflows/blank.yml''command:''SYNC''COMMAND:''deploy-TO:''RepoSITORIES:''@iixixi''/''repositories''/''COMMAND:''BUILD:''CONTAINER:""NAME:''Bitciti''Global''COMMAND:''AUTOMATE:''BUILD:''CONSTRUCTION:''COMAND:''deploy-TO:''@iixixi''/BitcitiBank&Securities''runs:''tests:''results?:''true''command:config.yaml.json.construct:.png: Automate:terrafourm: transform action:Automate:automation:create:ledger:build:'command'construct:''Automate:'Name:''teller''machine'''ledger'transactions'books''keepings''transactional''balance's'''recording''teller''
+<?xml version="1.0" encoding="UTF-8"?><!-- Generated by Fujitsu XWand 7.0.0034 (0018_w_33) --><link:linkbase xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xbrldt="http://xbrl.org/2005/xbrldt" xmlns:xbrli="http://www.xbrl.org/2003/instance" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd">
+   <link:presentationLink xlink:role="http://www.xbrl.org/2003/role/link" xlink:type="extended">
+      <link:loc xlink:href="primary.xsd#pr_IncomeStatement" xlink:label="IncomeStatement_1122465203376_0" xlink:title="IncomeStatement" xlink:type="locator"/>
+      <link:loc xlink:href="primary.xsd#pr_GrossProfitPresentation" xlink:label="GrossProfitPresentation_1122465203376_1" xlink:title="GrossProfitPresentation" xlink:type="locator"/>
+      <link:presentationArc order="1.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="IncomeStatement_1122465203376_0" xlink:title="presentation: IncomeStatement to GrossProfitPresentation" xlink:to="GrossProfitPresentation_1122465203376_1" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_RevenueTotal" xlink:label="RevenueTotal_1122465233028_0" xlink:title="RevenueTotal" xlink:type="locator"/>
+      <link:presentationArc order="1.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:title="presentation: GrossProfitPresentation to RevenueTotal" xlink:to="RevenueTotal_1122465233028_0" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_sales" xlink:label="Sales_1123671238015_1" xlink:title="Sales" xlink:type="locator"/>
+      <link:presentationArc order="1.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="RevenueTotal_1122465233028_0" xlink:title="presentation: RevenueTotal to Sales" xlink:to="Sales_1123671238015_1" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_CostOfSales" xlink:label="CostOfSales_1122465239027_0" xlink:title="CostOfSales" xlink:type="locator"/>
+      <link:presentationArc order="2.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:title="presentation: GrossProfitPresentation to CostOfSales" xlink:to="CostOfSales_1122465239027_0" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_GrossProfit" xlink:label="GrossProfit_1122465243483_0" xlink:title="GrossProfit" xlink:type="locator"/>
+      <link:presentationArc order="3.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:title="presentation: GrossProfitPresentation to GrossProfit" xlink:to="GrossProfit_1122465243483_0" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_CubelessConcept" xlink:label="lbl_CubelessConcept" xlink:type="locator"/>
+      <link:presentationArc order="1.5" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:to="lbl_CubelessConcept" xlink:type="arc"/>
+   </link:presentationLink>Https://www.github.com@iixixi/but</link:linkbase>
+
+
+
+
+
+
+
+

From b0636992527fe604db29921c5c41b450ff4d3cca Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 10:19:51 -0600
Subject: [PATCH 12/13] Update CODEOWNErs8

---
 .../.github/CODEOWNErs8                                      | 5 ++---
 1 file changed, 2 insertions(+), 3 deletions(-)

diff --git a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8 b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
index f5fd5c66fc7c..4b2f64a33e81 100644
--- a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
+++ b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
@@ -17,7 +17,7 @@ automatete:tests:results:"true",
 runs-on:iixixi/bitore/bitcoin©®™✓original/✓latest.json
 steps:uses:actions:checkout@iixixi/iixixi
     uses: actions/checkout@v2
Manifests: ENERGY'@zw/Rust/slate.yml/bitore.sig
name: build:construction:terrafourm/update:ruby.gemfile.gem@iixixi/but
     To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
     https://github.com/ruby/setup-ruby#versioning):
     uses: ruby/setup-ruby@v1
@@ -50,7 +50,6 @@ Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
 9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00./CODEOWNERS#
 ​$ git clone git://github.com/ledger/ledger.git
-$ cd ledger && ./acprep update  # Update to the latest, configure, make
 ​$ ./ledger -f test/input/COMMAND:''CONSTRUCT''docker''test''RESULTS:''TRUE''COMMAND''inputS:''JPMORGAN''TRUST''I''/data/cycle/sec.gov/edger/archives/bin/data''##:run:''construct:''repo''Jobs:''uses:''actions:'Runs''on:''@iixixi/repositories/Bitciti''Global''command:''build:''with:''python.js''command:''runs-on:''repositories''@iixixi/iixixi/workflows/READ.ME/terraform/composistion/bank/register''##run:''command:''automate:''repo-SYNC:''dependencies:''@iixixi/iixixi/read.me/github/workflows/blank.yml''command:''SYNC''COMMAND:''deploy-TO:''RepoSITORIES:''@iixixi''/''repositories''/''COMMAND:''BUILD:''CONTAINER:""NAME:''Bitciti''Global''COMMAND:''AUTOMATE:''BUILD:''CONSTRUCTION:''COMAND:''deploy-TO:''@iixixi''/BitcitiBank&Securities''runs:''tests:''results?:''true''command:config.yaml.json.construct:.png: Automate:terrafourm: transform action:Automate:automation:create:ledger:build:'command'construct:''Automate:'Name:''teller''machine'''ledger'transactions'books''keepings''transactional''balance's'''recording''teller''
 <?xml version="1.0" encoding="UTF-8"?><!-- Generated by Fujitsu XWand 7.0.0034 (0018_w_33) --><link:linkbase xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xbrldt="http://xbrl.org/2005/xbrldt" xmlns:xbrli="http://www.xbrl.org/2003/instance" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd">
    <link:presentationLink xlink:role="http://www.xbrl.org/2003/role/link" xlink:type="extended">
@@ -68,7 +67,7 @@ $ cd ledger && ./acprep update  # Update to the latest, configure, 
       <link:loc xlink:href="primary.xsd#pr_CubelessConcept" xlink:label="lbl_CubelessConcept" xlink:type="locator"/>
       <link:presentationArc order="1.5" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:to="lbl_CubelessConcept" xlink:type="arc"/>
    </link:presentationLink>Https://www.github.com@iixixi/but</link:linkbase>
-
+://Terrafourm:configute_legal_letter://build.json.jpeg.png.yaml
 
 
 

From 1664717f11d08eb41933c79e91468b50185b43d3 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 10:24:56 -0600
Subject: [PATCH 13/13] # Engineering *.js @github/docs-engineering /.github/
 @github/docs-engineering /script/ @github/docs-engineering app.json
 @github/docs-engineering Dockerfile @github/docs-engineering
 package-lock.json @github/docs-engineering package.json
 @github/docs-engineering

# Engineering
*.js @github/docs-engineering
/.github/ @github/docs-engineering
/script/ @github/docs-engineering
app.json @github/docs-engineering
Dockerfile @github/docs-engineering
package-lock.json @github/docs-engineering
package.json @github/docs-engineering
---
 .../.github/CODEOWNErs8                                | 10 ++++++++--
 1 file changed, 8 insertions(+), 2 deletions(-)

diff --git a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8 b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
index 4b2f64a33e81..e73434629e66 100644
--- a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
+++ b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
@@ -36,11 +36,17 @@ on:
 jobs:
   autoupdate:
     name: autoupdate
-    runs-on: ubuntu-18.04
+    runs-on: docker
     steps:
+#Engineering.js @github/docs-engineering/@iixixii:push:@iixixi/but.github/ @github/docs-engineering
+/script/ @github/docs-engineering
+app.json @github/docs-engineering
+Dockerfile @github/docs-engineering
+package-lock.json @github/docs-engineering
+package.json @github/docs-engineering
       uses: docker://chinthakagodawita/autoupdate-action:v1
         env:
-          GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
+          GITHUB_TOKEN: ${{((C)(R))}}::build:construction:::perfect
           PR_FILTER: labelled
           PR_LABELS: autoupdate
           Pull:branches:@iixixi/workflows/blank.yaml.json
Return: Run''
"<link>": "e-mail:": 

"zachryiixixiiwood@gmail.com": "<lin

        "rel": "next"
      }
    ],
    ['
diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
deleted file mode 100644
index e66f6d941d8c..000000000000
--- a/CODE_OF_CONDUCT.md
+++ /dev/null
@@ -1,80 +0,0 @@
-# Contributor Covenant Code of Conduct
-
-## Our Pledge
-
-We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or in it invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
-
-We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
-
-## Our Standards
-
-Examples of behavior that contributes to a positive environment for our community include:
-
-* Demonstrating empathy and kindness toward other people
-* Being respectful of differing opinions, viewpoints, and experiences
-* Giving and gracefully accepting constructive feedback
-* Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
-* Focusing on what is best not just for us as individuals, but for the overall community
-
-Examples of unacceptable behavior include:
-
-* The use of sexualized language or imagery, and sexual attention or advances of any kind
-* Trolling, insulting or derogatory comments, and personal or political attacks
-* Public or private harassment
-* Publishing others' private information, such as a physical or email address, without their explicit permission
-* Contacting individual members, contributors, or leaders privately, outside designated community mechanisms, without their explicit permission
-* Other conduct which could reasonably be considered inappropriate in a professional setting
-
-## Enforcement Responsibilities
-
-Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
-
-Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
-
-## Scope
-
-This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
-
-## Enforcement
-
-Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at opensource@github.com. All complaints will be reviewed and investigated promptly and fairly.
-
-All community leaders are obligated to respect the privacy and security of the reporter of any incident.
-
-## Enforcement Guidelines
-
-Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:
-
-### 1. Correction
-
-**Community Impact**: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.
-
-**Consequence**: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.
-
-### 2. Warning
-
-**Community Impact**: A violation through a single incident or series of actions.
-
-**Consequence**: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.
-
-### 3. Temporary Ban
-
-**Community Impact**: A serious violation of community standards, including sustained inappropriate behavior.
-
-**Consequence**: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.
-
-### 4. Permanent Ban
-
-**Community Impact**: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior,  harassment of an individual, or aggression toward or disparagement of classes of individuals.
-
-**Consequence**: A permanent ban from any sort of public interaction within the community.
-
-## Attribution
-
-This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 2.0, available at <https://www.contributor-covenant.org/version/2/0/code_of_conduct.html>.
-
-Community Impact Guidelines were inspired by [Mozilla's code of conduct enforcement ladder](https://github.com/mozilla/diversity).
- 
Coinbase Logo

Get started
User Agreement
Privacy Policy
Cookie Policy
Licenses
Insurance
Market Data
Trading Rules
FAQ
Legal
Coinbase Global Privacy Policy
Last updated: October 8, 2021

We at Coinbase (defined below) respect and protect the privacy of visitors to our websites and our customers. This Privacy Policy describes our information handling practices when you access our services, which include our content on the websites located at coinbase.com, coinbase.com/exchange, coinbase.com/prime, custody.coinbase.com, or any other websites, pages, features, or content we own or operate (collectively, the "Site(s)") or when you use the Coinbase mobile app, the Coinbase Card App (as defined below), any Coinbase, Coinbase Exchange, Coinbase Prime, or Coinbase Custody API or third party applications relying on such an API, and related services (referred to collectively hereinafter as "Services").

Please take a moment to read this Privacy Policy carefully. If you have any questions about this Policy, please submit your request via our Support Portal at https://support.coinbase.com/customer/portal/emails/new.

We may modify this Privacy Policy from time to time which will be indicated by changing the date at the top of this page. If we make any material changes, we will notify you by email (sent to the email address specified in your account), by means of a notice on our Services prior to the change becoming effective, or as otherwise required by law.

1. ACCEPTANCE OF THIS PRIVACY POLICY
By accessing and using our Services, you signify acceptance to the terms of this Privacy Policy. Where we require your consent to process your personal information, we will ask for your consent to the collection, use, and disclosure of your personal information as described further below. We may provide additional "just-in-time" disclosures or information about the data processing practices of specific Services. These notices may supplement or clarify our privacy practices or may provide you with additional choices about how we process your data.

If you do not agree with or you are not comfortable with any aspect of this Privacy Policy, you should immediately discontinue access or use of our Services.

2. OUR RELATIONSHIP TO YOU
Where You Reside

Services Provided

Your Operating Entity

Contact Address

Anywhere but the United States and Japan

Custodial services

Coinbase Custody International Limited (unless otherwise indicated in your service contract) Company No: 657718

70 Sir John Rogerson's Quay Dublin 2, Ireland

EU and the United Kingdom

Digital Currency services

Coinbase Europe, Limited. Company No: 675475

70 Sir John Rogerson's Quay Dublin 2, Ireland

Germany

Digital Currency services

Coinbase Germany GmbH. Company No: HRB 213709 B. BaFin-ID 10158674

Kurfürstendamm 22, 10719 Berlin, Germany

European Economic Area

Fiat Wallet services

Coinbase Ireland, Limited. Company No: 630350 CBI Register No: C188493

70 Sir John Rogerson's Quay Dublin 2, Ireland

Singapore

Digital Currency services, Fiat Wallet services

Coinbase Singapore Pte. Ltd. Unique Entity No.: 201935002N

One Marina Boulevard, #28-00, Singapore 018989

Japan

Digital Currency services, Fiat Wallet services, Custodial services

Coinbase KK. Company No: 0100-01-173138 FSA Register No: Kanto Finance Bureau Directory-General No. 00028

Otemachi Building 4F FINOLAB, 1-6-1 Otemachi, Chiyoda-ku, Tokyo

Anywhere but the EU, US, UK, Singapore and Japan

Digital Currency Services

Coinbase Ascending Markets Kenya Limited (“CB Kenya”)

P.O. Box 10643, G.P.O. Nairobi, Kenya

United Kingdom (and select non-EEA countries in Europe)

Fiat Wallet services

CB Payments. Ltd Company No: 09708629 FCA Register No: 900635

5 Fleet Place, London, EC4M 7RD, United Kingdom

United States

Digital Currency services, Fiat Wallet services

Coinbase, Inc. CA Entity No.: C3548456

Coinbase, Inc. c/o C T Corporation System 818 West Seventh St., Ste. 930 Los Angeles, California 90017

United States

Custodial services

Coinbase Custody Trust Company, LLC (unless otherwise indicated in your service contract) NYS License # 122506

Coinbase Custody Trust Company, LLC c/o C T Corporation System 28 Liberty Street New York, New York 10005

United States

Credit and Lending services, Margin Trading services

Coinbase Credit, Inc. CA Entity No.: C4315976

Coinbase Credit, Inc. c/o C T Corporation System 818 West Seventh St., Ste. 930 Los Angeles, California 90017

The CB operating entity you contract with determines the means and purposes of processing your personal information in relation to the Services provided to you (typically referred to as a “data controller”).

You may be asked to provide personal information anytime you are in contact with any CB companies. The CB companies may share your personal information with each other and use it consistent with this Privacy Policy. They may also combine it with other information to provide and improve our products, services, and content (additional details below). For example, even if you do not reside in the United States (the “US”), your information may be shared with Coinbase, Inc. which provides global support for all Services including technical infrastructure, product development, security, compliance, fraud prevention, and customer support.

If you have any questions about your CB Account, your personal information, or this Privacy Policy, please submit your request via our Support Portal.

3. THE PERSONAL INFORMATION WE COLLECT
Personal information is typically data that identifies an individual or relates to an identifiable individual. This includes information you provide to us, information which is collected about you automatically, and information we obtain from third parties. The definition of personal information depends on the applicable law based on your physical location. Only the definition that applies to your physical location will apply to you under this Privacy Policy.

Information you provide to us. To establish an account and access our Services, we'll ask you to provide us with some important information about yourself. This information is either required by law (e.g. to verify your identity), necessary to provide the requested services (e.g. you will need to provide your bank account number if you'd like to link that account to CB), or is relevant for certain specified purposes, described in greater detail below. As we add new features and Services, you may be asked to provide additional information.

If you choose not to share certain information with us, we may not be able to serve you as effectively or offer you our Services. Any information you provide to us that is not required is voluntary.

We may collect the following types of information from you:

Personal Identification Information: Full name, date of birth, nationality, gender, signature, utility bills, photographs, phone number, home address, and/or email.

Formal Identification Information: Government issued identity document such as Passport, Driver's License, National Identity Card, State ID Card, Tax ID number, passport number, driver's license details, national identity card details, visa information, and/or any other information deemed necessary to comply with our legal obligations under financial or anti-money laundering laws.

Institutional Information: Employer Identification number (or comparable number issued by a government), proof of legal formation (e.g. Articles of Incorporation), personal identification information for all material beneficial owners.

Financial Information: Bank account information, payment card primary account number (PAN), transaction history, trading data, and/or tax identification.

Transaction Information: Information about the transactions you make on our Services, such as the name of the recipient, your name, the amount, and/or timestamp.

Employment Information: Office location, job title, and/or description of role.

Correspondence: Survey responses, information provided to our support team or user research team.

Audio, electronic, visual and similar information, such as call and video recordings.

Information we collect from you automatically. To the extent permitted under the applicable law, we may collect certain types of information automatically, such as whenever you interact with the Sites or use the Services. This information helps us address customer support issues, improve the performance of our Sites and Services, provide you with a streamlined and personalized experience, and protect your account from fraud by detecting unauthorized access. Information collected automatically includes:

Online Identifiers: Geo location/tracking details, browser fingerprint, operating system, browser name and version, and/or personal IP addresses.

Usage Data: Authentication data, security questions, click-stream data, public social networking posts, and other data collected via cookies and similar technologies. Please read our Cookie Policy for more information.

For example, we may automatically receive and record the following information on our server logs:

How you came to and use the Services;

Device type and unique device identification numbers;

Device event information (such as crashes, system activity and hardware settings, browser type, browser language, the date and time of your request and referral URL);

How your device interacts with our Sites and Services, including pages accessed and links clicked;

Broad geographic location (e.g. country or city-level location); and

Other technical data collected through cookies, pixel tags and other similar technologies that uniquely identify your browser.

We may also use identifiers to recognize you when you access our Sites via an external link, such as a link appearing on a third party site.

Information we collect from our affiliates and third parties. From time to time, we may obtain information about you from our affiliates or third party sources as required or permitted by applicable law. These sources may include:

Our Coinbase Family of Companies: Our “family of companies” is the group of companies related to us by common control or ownership (“Affiliates”). In accordance with applicable law, we may obtain information about you from our Affiliates as a normal part of conducting business, if you link your various Coinbase accounts (e.g., Coinbase Wallet account or Coinbase Commerce account in order to convert cryptocurrency into fiat and make withdrawals into your bank account), so that we may offer our Affiliates’ Services to you.

Public Databases, Credit Bureaus & ID Verification Partners: We obtain information about you from public databases and ID verification partners for purposes of verifying your identity in accordance with applicable law. ID verification partners like World-Check use a combination of government records and publicly available information about you to verify your identity. Such information may include your name, address, job role, public employment profile, credit history, status on any sanctions lists maintained by public authorities, and other relevant data. We obtain such information to comply with our legal obligations, such as anti-money laundering laws. In some cases, we may process additional data about you to assess risk and ensure our Services are not used fraudulently or for other illicit activities. In such instances, processing is necessary for us to continue to perform our contractual obligations with you and others. World-Check's Privacy Policy, available at https://www.refinitiv.com/en/products/world-check-kyc-screening/privacy-statement/, describes its collection and use of personal data.

Blockchain Data: We may analyze public blockchain data to ensure parties utilizing our Services are not engaged in illegal or prohibited activity under our Terms, and to analyze transaction trends for research and development purposes.

Joint Marketing Partners & Resellers: For example, unless prohibited by applicable law, joint marketing partners or resellers may share information about you with us so that we can better understand which of our Services may be of interest to you.

Advertising Networks & Analytics Providers: We work with these providers to provide us with de-identified information about how you found our Sites and how you interact with the Sites and Services. This information may be collected prior to account creation. For more information on how you can manage collection of this data, please see our Cookie Policy.

4. ANONYMIZED AND AGGREGATED DATA
Anonymization is a data processing technique that modifies personal information so that it cannot be associated with a specific individual. Except for this section, none of the other provisions of this Privacy Policy applies to anonymized or aggregated customer data (i.e. information about our customers that we combine together so that it no longer identifies or references an individual customer).

Coinbase may use anonymized or aggregate customer data for any business purpose, including to better understand customer needs and behaviors, improve our Services, conduct business intelligence and marketing, and detect security threats. We may perform our own analytics on anonymized data or enable analytics provided by third parties.

Types of data we may anonymize include, transaction data, click-stream data, performance metrics, and fraud indicators.

5. HOW YOUR PERSONAL INFORMATION IS USED
Our primary purpose in collecting personal information is to provide you with a secure, smooth, efficient, and customized experience. We generally use personal information to create, develop, operate, deliver, and improve our Services, content and advertising; and for loss prevention and anti-fraud purposes. We may use this information in the following ways:

1) To maintain legal and regulatory compliance

Most of our core Services are subject to laws and regulations requiring us to collect, use, and store your personal information in certain ways. For example, CB must identify and verify customers using our Services in order to comply with anti-money laundering laws across jurisdictions. This includes collection and storage of your photo identification. In addition, we use third parties to verify your identity by comparing the personal information you provide against third-party databases and public records. When you seek to link a bank account to your CB Account, we may require you to provide additional information which we may use in collaboration with service providers acting on our behalf to verify your identity or address, and/or to manage risk as required under applicable law. If you do not provide personal information required by law, we will have to close your account.

2) To enforce our terms in our user agreement and other agreements

CB handles sensitive information, such as your identification and financial data, so it is very important for us and our customers that we actively monitor, investigate, prevent, and mitigate any potentially prohibited or illegal activities, enforce our agreements with third parties, and/or prevent and detect violations of our posted user agreement or agreements for other Services. In addition, we may need to collect fees based on your use of our Services. We collect information about your account usage and closely monitor your interactions with our Services. We may use any of your personal information collected for these purposes. The consequences of not processing your personal information for such purposes is the termination of your account.

3) To detect and prevent fraud and/or funds loss

We process your personal information in order to help detect, prevent, and mitigate fraud and abuse of our services and to protect you against account compromise or funds loss.

4) To provide Coinbase's Services

We process your personal information to provide the Services to you. For example, when you want to store funds on our platform, we require certain information such as your identification, contact information, and payment information. We cannot provide you with Services without such information. Third parties such as identity verification services may also access and/or collect your personal information when providing identity verification and/or fraud prevention services.

5) To provide Service communications

We send administrative or account-related information to you to keep you updated about our Services, inform you of relevant security issues or updates, or provide other transaction-related information. Without such communications, you may not be aware of important developments relating to your account that may affect how you can use our Services. You may not opt-out of receiving critical service communications, such as emails or mobile notifications sent for legal or security purposes.

6) To provide customer service

We process your personal information when you contact us to resolve any questions, disputes, collect fees, or to troubleshoot problems. Without processing your personal information for such purposes, we cannot respond to your requests and ensure your uninterrupted use of the Services.

7) To ensure quality control

We process your personal information for quality control and staff training to make sure we continue to provide you with accurate information. If we do not process personal information for quality control purposes, you may experience issues on the Services such as inaccurate transaction records or other interruptions.

8) To ensure network and information security

We process your personal information in order to enhance security, monitor and verify identity or service access, combat spam or other malware or security risks and to comply with applicable security laws and regulations. The threat landscape on the internet is constantly evolving, which makes it more important than ever that we have accurate and up-to-date information about your use of our Services. Without processing your personal information, we may not be able to ensure the security of our Services.

9) For research and development purposes

We process your personal information to better understand the way you use and interact with Coinbase's Services. In addition, we use such information to customize, measure, and improve Coinbase's Services and the content and layout of our website and applications, and to develop new services. Without such processing, we cannot ensure your continued enjoyment of our Services.

10) To enhance your experience

We process your personal information to provide a personalized experience, and implement the preferences you request. For example, you may choose to provide us with access to certain personal information stored by third parties. Without such processing, we may not be able to ensure your continued enjoyment of part or all of our Services.

11) To facilitate corporate acquisitions, mergers, or transactions

We may process any information regarding your account and use of our Services as is necessary in the context of corporate acquisitions, mergers, or other corporate transactions.

12) To engage in marketing activities

Based on your communication preferences, we may send you marketing communications (e.g. emails or mobile notifications) to inform you about our events or our partner events; to deliver targeted marketing; and to provide you with promotional offers. Our marketing will be conducted in accordance with your advertising marketing preferences and as permitted by applicable law.

13) To protect the health and safety of our employees and visitors, our facilities and our property and other rights. If you visit one of our locations, to maintain security at such locations you may be photographed or videotaped.

14) For any purpose that you provide your consent. 

We will not use your personal information for purposes other than those purposes we have disclosed to you, without your permission. From time to time, and as required under the applicable law, we may request your permission to allow us to share your personal information with third parties. In such instances, you may opt out of having your personal information shared with third parties, or allowing us to use your personal information for any purpose that is incompatible with the purposes for which we originally collected it or subsequently obtained your authorization. If you choose to limit the use of your personal information, certain features or CB Services may not be available to you.

6. LEGAL BASES FOR PROCESSING YOUR INFORMATION
For individuals who are located in the European Economic Area, the United Kingdom or Switzerland (collectively “EEA Residents'') at the time their personal information is collected, our legal bases for processing your information under the EU General Data Protection Regulation (“GDPR”) will depend on the personal information at issue, the specific context in the which the personal information is collected and the purposes for which it is used. We generally only process your data where we are legally required to, where processing is necessary to perform any contracts we entered with you (or to take steps at your request prior to entering into a contract with you), where processing is in our legitimate interests to operate our business and not overridden by your data protection interests or fundamental rights and freedoms, or where we have obtained your consent to do so. In some rare instances, we may need to process your personal information to protect your vital interests or those of another person. Below is a list of how CB uses your personal information, as described above in Section 5, with the corresponding legal bases for processing. If you have questions about or need further information concerning the legal basis on which we collect and use your personal information, please contact us using the contact details provided under the "How to contact us" heading below.

Section & Purpose of Processing

Legal Bases for Processing

(2) To enforce our terms in our user agreement and other agreements (4) To provide Coinbase's Services (5) To provide Service communications (6) To provide customer service (7) To ensure quality control

Based on our contract with you or to take steps at your request prior to entering into a contract.

(9) For research and development purposes (10) To enhance your experience (11) To facilitate corporate acquisitions, mergers, or transactions (12) To engage in direct marketing activities

Based on our legitimate interests. When we process your personal data for our legitimate interests we always ensure that we consider and balance any potential impact on you and your rights under data protection laws.

(1) To maintain legal and regulatory compliance (3) To detect and prevent fraud and/or funds loss (8) To ensure network and information security (13) To protect your or our’s vital interests

Based on our legal obligations, the public interest, or in your vital interests.

(10) To enhance your experience (12) To engage in third party marketing activities (14) For any purpose to which you consent

Based on your consent.

7. WHY WE SHARE PERSONAL INFORMATION WITH OTHER PARTIES
We take care to allow your personal information to be accessed only by those who require access to perform their tasks and duties, and to share only with third parties who have a legitimate purpose for accessing it. CB will never sell or rent your personal information to third parties without your explicit consent. We will only share your information in the following circumstances:

With third party identity verification services in order to prevent fraud. This allows CB to confirm your identity by comparing the information you provide us to public records and other third party databases. These service providers may create derivative data based on your personal information that can be used in connection with the provision of identity verification and fraud prevention services. For example:

We may use Jumio Corporation or Jumio UK, Limited (collectively “Jumio”) to verify your identity by determining whether a selfie you take matches the photo in your government issued identity document. The information collected from your photo may include biometric data. Jumio's Privacy Policy, available at https://www.jumio.com/legal-information/privacy-policy/jumio-inc-privacy-policy-for-online-services/, describes its collection and use of personal information.

For Germany users, we may use SolarisBank AG (“Solarisbank”) to verify your identity through verification of identifiable personal information. The information collected from you may include biometric data. Solarisbank’s Privacy Policy, available at https://www.solarisbank.com/en/privacy-policy/, describes its collection and use of personal information. 

We may use Sift Science, Inc. (“Sift”) to detect and prevent fraudulent activity on your account in real time. Information shared with Sift is treated by Sift in accordance with its Privacy Policy, available at https://sift.com/service-privacy.

If you are based in the US, CB may use Plaid, Inc. ("Plaid") to connect your Coinbase account with your bank account, verify your bank account and confirm your bank account balance prior to approving a transaction. Information shared with Plaid is treated by Plaid in accordance with its Privacy Policy, available at https://plaid.com/legal/#end-user-privacy-policy.

With financial institutions with which we partner to process payments you have authorized.

With service providers under contract who help with parts of our business operations. Our contracts require these service providers to only use your information in connection with the services they perform for us, and prohibit them from selling your information to anyone else. Examples of the types of service providers we may share personal information with (other than those mentioned above) include:

Network infrastructure

Cloud storage

Payment processing

Transaction monitoring

Security

Document repository services

Customer support

Internet (e.g. ISPs)

Data analytics

Information Technology

Marketing

With companies or other entities that we plan to merge with or be acquired by. You will receive prior notice of any change in applicable policies.

With companies or other entities that purchase CB assets pursuant to a court-approved sale or where we are required to share your information pursuant to insolvency law in any applicable jurisdiction.

With our professional advisors who provide banking, legal, compliance, insurance, accounting, or other consulting services in order to complete third party financial, technical, compliance and legal audits of our operations or otherwise comply with our legal obligations.

With law enforcement, officials, or other third parties when we are compelled to do so by a subpoena, court order, or similar legal procedure, or when we believe in good faith that the disclosure of personal information is necessary to prevent physical harm or financial loss, to report suspected illegal activity, or to investigate violations of our User Agreement or any other applicable policies.

We share personal information about you with our Affiliates as a normal part of conducting business and offering Services to you.

Where we believe it is necessary in order to protect the vital interests of any person. If you establish a CB Account indirectly on a third party website or via a third party application, any information that you enter on that website or application (and not directly on a CB website) will be shared with the owner of the third party website or application and your information will be subject to their privacy policies. For more information see the “Third-Party Sites and Services” section below.

8. SPECIAL PROVISIONS RELATING TO COINBASE CARD USERS
If you sign up to use the Digital Currency backed debit card Service (the “Coinbase Card”) provided by CB via the dedicated app for that Service (the “Coinbase Card App”), we will process your personal information in accordance with this Policy.

In order to provide the Coinbase Card Service to you, we have partnered with Paysafe Financial Services Limited and Paysafe Payment Solution Limited (collectively “Paysafe”). Paysafe is the issuer of the Coinbase Card and is a member of the Visa card scheme, which will be used to enable your Coinbase Card to operate as a normal debit card. When you sign up on the Coinbase Card App you agree to Paysafe's own terms and conditions and Privacy Policy (available at https://www.paysafe.com/paysafegroup/privacy-policy/), and as a result Paysafe will be an independent data controller in relation to the personal information they collect and hold relating to you.

We may at times need to share some of your personal information that we control with Paysafe to enable us and Paysafe to provide you with the Coinbase Card Service. Where we do this, Paysafe will act as a data processor and only process your personal information to the extent necessary to enable us and Paysafe to provide the Coinbase Card Service to you.

9. HOW WE PROTECT AND STORE PERSONAL INFORMATION
We understand how important your privacy is, which is why CB maintains (and contractually requires third parties it shares your information with to maintain) appropriate physical, technical and administrative safeguards to protect the security and confidentiality of the personal information you entrust to us.

We may store and process all or part of your personal and transactional information, including certain payment information, such as your encrypted bank account and/or routing numbers, in the US and elsewhere in the world where our facilities or our service providers are located. We protect your personal information by maintaining physical, electronic, and procedural safeguards in compliance with the applicable laws and regulations.

For example, we use computer safeguards such as firewalls and data encryption, we enforce physical access controls to our buildings and files, and we authorize access to personal information only for those employees who require it to fulfill their job responsibilities. Full credit card data is securely transferred and hosted off-site by payment vendors like Worldpay, (UK) Limited, Worldpay Limited, or Worldpay AP Limited (collectively “Worldpay”) in compliance with Payment Card Industry Data Security Standards (PCI DSS). This information is not accessible to CB or Coinbase staff. For more information about how Worldpay stores and uses your information, please see Worldpay's Privacy Policy at https://www.worldpay.com/uk/worldpay-privacy-notice.

However, we cannot guarantee that loss, misuse, unauthorized acquisition, or alteration of your data will not occur. Please recognize that you play a vital role in protecting your own personal information. When registering with our Services, it is important to choose a password of sufficient length and complexity, to not reveal this password to any third-parties, and to immediately notify us if you become aware of any unauthorized access to or use of your account.

Furthermore, we cannot ensure or warrant the security or confidentiality of information you transmit to us or receive from us by Internet or wireless connection, including email, phone, or SMS, since we have no way of protecting that information once it leaves and until it reaches us. If you have reason to believe that your data is no longer secure, please contact us using the contact information provided in the “How to contact us” section below.

10. RETENTION OF PERSONAL INFORMATION
We store your personal information securely throughout the life of your CB Account. We will only retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting obligations or to resolve disputes. While retention requirements vary by jurisdiction, information about our typical retention periods for different aspects of your personal information are described below.

Personal information collected to comply with our legal obligations under financial or anti-money laundering laws may be retained after account closure for as long as required under such laws.

Contact Information such as your name, email address and telephone number for marketing purposes is retained on an ongoing basis until you unsubscribe. Thereafter we will add your details to our suppression list to ensure we do not inadvertently market to you.

Content that you post on our website such as support desk comments, photographs, videos, blog posts, and other content may be kept after you close your account for audit and crime prevention purposes (e.g. to prevent a known fraudulent actor from opening a new account).

Recording of our telephone calls with you may be kept for a period of up to six years.

Information collected via technical means such as cookies, webpage counters and other analytics tools is kept for a period of up to one year from expiry of the cookie.

11. THIRD-PARTY SITES AND SERVICES
If you authorize one or more third-party applications to access your CB Services, then information you have provided to CB may be shared with those third parties. A connection you authorize or enable between your CB account and a non-CB account, payment instrument, or platform is considered an “account connection.” Unless you provide further permissions, Coinbase will not authorize these third parties to use this information for any purpose other than to facilitate your transactions using CB Services. Please note that third parties you interact with may have their own privacy policies, and CB is not responsible for their operations or their use of data they collect. Information collected by third parties, which may include such things as contact details, financial information, or location data, is governed by their privacy practices and Coinbase is not responsible for unauthorized third-party conduct. We encourage you to learn about the privacy practices of those third parties.

Examples of account connections include:

Merchants: If you use your CB account to conduct a transaction with a third party merchant, the merchant may provide data about you and your transaction to us.

Your Financial Services Providers: For example, if you send us funds from your bank account, your bank will provide us with identifying information in addition to information about your account in order to complete the transaction.

Information that we share with a third party based on an account connection will be used and disclosed in accordance with the third party's privacy practices. Please review the privacy notice of any third party that will gain access to your personal information. Coinbase is not responsible for such third party conduct.

12. CHILDREN'S PERSONAL INFORMATION
We do not knowingly request to collect personal information from any person under the age of 18. If a user submitting personal information is suspected of being younger than 18 years of age, CB will require the user to close his or her account and will not allow the user to continue using our Services. We will also take steps to delete the information as soon as possible. Please notify us if you know of any individuals under the age of 18 using our Services so we can take action to prevent access to our Services.

13. INTERNATIONAL TRANSFERS
To facilitate our global operations, CB may transfer, store, and process your personal information within our Affiliates, third-party partners, and service providers based throughout the world, including Ireland, Germany, Singapore, Japan, the UK, the US, the Philippines, and possibly other countries. We will protect your personal information in accordance with this Privacy Policy wherever it is processed and will take appropriate contractual or other steps to protect the relevant personal information in accordance with applicable laws. We contractually obligate recipients of your personal information to agree to at least the same level of privacy safeguards as required under applicable data protection laws. By communicating electronically with CB, you acknowledge and agree to your personal information being processed in this way.

If you have a complaint about our privacy practices and our collection, use or disclosure of personal information please submit your request via our Support Portal.

Data transferred out of the EU

We rely primarily on the European Commission’s Standard Contractual Clauses to facilitate the international and onward transfer of personal information collected in the European Economic Area (“EEA”), the United Kingdom and Switzerland (collectively “European Personal Information”), to the extent the recipients of the European Personal Information are located in a country that the EU considers to not provide an adequate level of data protection. This includes transfers from our EU-based CB operating entities to our US-based operating entity, Coinbase, Inc. We may also rely on an adequacy decision of the European Commission confirming an adequate level of data protection in the jurisdiction of the party receiving the information, or derogations in specific situations.

Coinbase, Inc. is responsible for the processing of personal information it receives and subsequently transfers to a third party acting as an agent on its behalf. Before we share your information with any third party, Coinbase, Inc. will enter into a written agreement that the third party provides at least the same level of protection for the personal information as required under applicable data protection laws.

Coinbase, Inc., also participates in and has certified its compliance with the EU-US Privacy Shield Framework. Under the Privacy Shield Framework, Coinbase, Inc. is subject to the authority of the Federal Trade Commission. To learn more about the Privacy Shield Framework, visit the U.S. Department of Commerce's Privacy Shield List at https://www.privacyshield.gov.

European data subjects with inquiries or complaints relating to our Privacy Shield certifications should first contact CB via our Support Portal or by emailing dpo@coinbase.com. If we are unable to resolve your complaint or dispute, you may refer your complaint to our designated independent dispute resolution mechanism, the International Centre for Dispute Resolution ("ICDR"), operated by the American Arbitration Association ("AAA"). For more information and to file a complaint, you may contact the International Centre for Dispute Resolution by phone at +1.212.484.4181, or by visiting the website https://go.adr.org/privacyshield.html.

If your Privacy Shield complaint cannot be resolved through the above channels, under certain conditions, you may invoke binding arbitration for some residual claims not resolved by other redress mechanisms. See Privacy Shield Annex 1 at https://www.privacyshield.gov/article?id=ANNEX-I-ntroduction.

14. YOUR PRIVACY RIGHTS AND CHOICES
Depending on applicable law where you reside, you may be able to assert certain rights related to your personal information identified below. If any of the rights listed below are not provided under law for your operating entity or jurisdiction, CB has absolute discretion in providing you with those rights.

Your rights to personal information are not absolute. Depending upon the applicable law, access to your rights under the applicable law may be denied: (a) when denial of access is required or authorized by law; (b) when granting access would have a negative impact on another's privacy; (c) to protect our rights and properties; (d) where the request is frivolous or vexatious, or for other reasons.

Access and portability. You may request that we provide you a copy of your personal information held by us. This information will be provided without undue delay subject to a potential fee associated with gathering of the information (as permitted by law), unless such provision adversely affects the rights and freedoms of others. In certain circumstances, you may request to receive your personal information in a structured, commonly used and machine-readable format, and to have us transfer your personal information directly to another data controller.

Rectification of incomplete or inaccurate personal information. You may request us to rectify or update any of your personal information held by CB that is inaccurate. You may do this at any time by logging in to your account and clicking the Profile or My Account tab.

Erasure. You may request to erase your personal information, subject to applicable law. If you close your CB Account, we will mark your account in our database as "Closed," but will keep certain account information, including your request to erase, in our database for a period of time as described above. This is necessary to deter fraud, by ensuring that persons who try to commit fraud will not be able to avoid detection simply by closing their account and opening a new account, and to comply with CB's legal obligations. However, if you close your account, your personal information will not be used by us for any further purposes, nor shared with third parties, except as necessary to prevent fraud and assist law enforcement, as required by law, or in accordance with this Privacy Policy.

Withdraw consent. To the extent the processing of your personal information is based on your consent, you may withdraw your consent at any time. Your withdrawal will not affect the lawfulness of CB's processing based on consent before your withdrawal.

Restriction of processing. In some jurisdictions, applicable law may give you the right to restrict or object to us processing or transferring your personal information under certain circumstances. We may continue to process your personal information if it is necessary for the defense of legal claims, or for any other exceptions permitted by applicable law.

Automated individual decision-making, including profiling. CB relies on automated tools to help determine whether a transaction or a customer account presents a fraud or legal risk. In some jurisdictions, you have the right not to be subject to a decision based solely on automated processing of your personal information, including profiling, which produces legal or similarly significant effects on you, save for the exceptions applicable under relevant data protection laws.

Marketing communications. You can opt-out of receiving marketing communications from CB. Direct marketing includes any communications to you that are only based on advertising or promoting our products and services. We will only contact you by electronic means (email or SMS) based on our legitimate interests, as permitted by applicable law, or your consent. If you do not want us to send you marketing communications, please go to your account settings to opt-out or submit a request via our Support Portal. 

For users in the European Economic Area, the United Kingdom and Switzerland: To the extent we can rely on legitimate interest under the applicable law, we will only send you information about our Services that are similar to those which were the subject of a previous sale or negotiations of a sale to you. We will contact you by electronic means for marketing purposes only if you have consented to such communication. You may raise such objections with regard to initial or further processing for purposes of direct marketing, at any time and free of charge. 

How to make a privacy request

You can make privacy rights requests relating to your personal information by going to your Privacy Rights Dashboard or, if you cannot access the Dashboard, by contacting us via our Support Portal. Our Privacy Rights Dashboard also allows you to set your communication preferences and make individual rights requests relating to your personal information. We strongly encourage you to make any individual rights requests through the Privacy Rights Dashboard because it ensures that you have been authenticated already (based on the KYC information you have provided to open your account and by providing the necessary login credentials and multi-factor authentication to access the account). Otherwise, when we receive an individual rights request via other intake methods, we may take steps to verify your identity before complying with the request to protect your privacy and security.

How to lodge a complaint

If you believe that we have infringed your rights, we encourage you to first submit a request via our Support Portal so that we can try to resolve the issue or dispute informally. If that does not resolve your issue, you may contact the CB Data Protection Officer at dpo@coinbase.com.

If you reside in the EU, you can file a complaint with the International Centre for Dispute Resolution by phone at +1.212.484.4181, or by visiting the website http://info.adr.org/safeharbor, or your relevant data protection authority.

In the UK, the relevant data protection authority is Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF, 0303 123 1113, casework@ico.org.uk.

In Ireland, the relevant data protection authority is the Data Protection Commission, Canal House, Station Road, Portarlington, R32 AP23 Co. Laois; phone: +353 (0761) 104 800; LoCall: 1890 25 22 31; Fax: +353 57 868 4757; email: info@dataprotection.ie
15. CALIFORNIA PRIVACY RIGHTS
In addition to the rights provided for above, if you are a California resident, you have the right to request information from us regarding whether we share certain categories of your personal information with third parties for the third parties' direct marketing purposes. To the extent we share you personal information in this way, you may receive the following information:

the categories of information we disclosed to third parties for the third parties' direct marketing purposes during the preceding calendar year; and

 the names and addresses of third parties that received such information, or if the nature of their business cannot be determined from the name, then examples of the products or services marketed.

Pursuant to the California Consumer Privacy Act of 2018 (“CCPA”), California residents have certain rights in relation to their personal information, subject to limited exceptions. Any terms defined in the CCPA have the same meaning when used in this California Privacy Rights section. This section describes the categories of personal information CB has collected, the categories of personal information CB has disclosed, and a description of California residents’ rights.

Categories of Personal Information Collected

The chart below described the categories of personal information CB has collected in the preceding 12 months, the sources and purpose of such collection, and the parties to whom the information was shared for business purposes.

Personal Information Category (corresponds to categories in CCPA §1798.140(o)(1))

Sources of Personal Information and Why We Collect this Information (see Section 5 above for more information)

Disclosure of Personal Information (see “Why We Share Personal Information With Other Parties” heading above for more information)

(A) Identifiers such as Personal Identification Information

Information you provide us; Information collected from third parties; Why we collect this information: see Section 5, subsections 1, 2, 3, 4, 5, 6, 8, 9, 11, and 12

- Third party identity verification services - Financial institutions - Service providers - Professional advisors - our Affiliates

(B) Customer records such as signature

Information you provide us; Information collected from third parties; Why we collect this information: see Section 5, subsections 1, 2, 5, 6, and 11

- Third party identity verification services - Financial institutions - Service providers

(C) Protected classifications under California and federal law, including gender, age and citizenship

Information you provide us; Information collected from third parties; Why we collect this information: see Section 5, subsection 1

- Third party identity verification services - Professional advisors

(D) Commercial information such as records of services purchased, obtained, or considered

Information you provide us; Information we collect from you automatically; Information collected from third parties; Why we collect this information: see Section 5, subsections 3, 4, 5, 6, 8, 9, 10, 11 and 12

- Third party identity verification services - Financial institutions - Service providers - Professional advisors - our Affiliates

(E) Biometric information

Information you provide us; Why we collect this information: see Section 5, subsection 1

- Third party identity verification services - Financial institutions

(F) Usage Data

Information we collect from you automatically; Why we collect this information: see Section 5, subsections 2, 3, 4, 6, 7, 8, 9, 10, and 12

- Third party identity verification services - Service providers - Professional advisors - our Affiliates

(G) Online Identifiers

Information we collect from you automatically; Why we collect this information: see Section 5, subsections 1, 3, 9 and 12

- Third party identity verification services - Service Providers

(H) Sensory data, such audio, electronic, visual information

Information you provide to us; Why we collect this information: see Section 5, subsections 3, 4, 5 and 7

Not applicable

(I) Professional or employment-related information

Information you provide us; Information collected from third parties; Why we collect this information: see Section 5, subsections 1, 12

- Third party identity verification services - Service providers - our Affiliates

(J) Inferences about preferences, characteristics, predispositions, etc.

Information you provide us; Information we collect from you automatically; Why we collect this information: see Section 5, subsections 9, 10, 12

- Service providers - Professional advisors - our Affiliates

California Residents’ Rights

Under the CCPA, you may have the following consumer rights. Please note that these rights are not absolute and in certain cases are subject to conditions or limitations as specified in the CCPA:

For personal information collected by us during the preceding 12 months preceding your request that is not otherwise subject to an exception, California residents have the right to access and delete their personal information. CB will not discriminate against those who exercise their rights. Specifically, if you exercise your rights, we will not deny you services, charge you different prices for services or provide you a different level or quality of services.

To the extent we sell your personal information to third parties, you also have the right to request that we disclose to you: (i) the categories of your personal information that we sold, and (ii) the categories of third parties to whom your personal information was sold. You have the right to direct us not to sell your personal information. CB does not sell your personal information in its ordinary course of business and will never sell your personal information to third parties without your explicit consent.

Should CB engage in any of the activities listed in this section, your ability to exercise these rights will be made available to you in your account settings. You can exercise your rights by going to your Privacy Rights Dashboard or contacting us via our Support Portal so that we may consider your request.

We will need to verify your identity before processing your request. In order to verify your identity, we will generally either require the successful login to your account or the matching of sufficient information you provide us to the information we maintain about you in our systems. Although we try to limit the personal information collected in connection with a request to exercise your rights, certain requests may require us to obtain additional personal information from you. In certain circumstances, we may decline a request to exercise the right to know and right to deletion, particularly where we are unable to verify your identity.

If you are a California resident, you may designate an authorized agent to make a request to access or a request to delete on your behalf. To do so, you must: (1) provide that authorized agent written and signed permission to submit such a request; and (2) verify your own identity directly with us. Please note, we may deny a request from an authorized agent that does not submit proof that they have been authorized by you to act on your behalf. We will respond to your authorized agent's request if they submit proof that they are registered with the California Secretary of State to be able to act on your behalf, or submit evidence you have provided them with power of attorney pursuant to California Probate Code section 4121 to 4130. We may deny requests from authorized agents who do not submit proof that they have been authorized by you to act on their behalf, or are unable to verify their identity.

Do Not Track

Some Internet browsers - like Internet Explorer, Firefox, and Safari - include the ability to transmit "Do Not Track" or "DNT" signals. Since uniform standards for "DNT" signals have not been adopted, we do not currently process or respond to "DNT" signals.

16. HOW TO CONTACT US
If you have questions or concerns regarding this Privacy Policy, or if you have a complaint, please contact us on our Support page, at dpo@coinbase.com, or by writing to us at the address of your operating entity (provided above).

Coinbase logo
© 2021 Coinbase
Blog
•
Twitter
•
Facebook
Company
About
Careers
Affiliates
Blog
Press
Investors
Legal & privacy
Cookie policy
Cookie preferences
Learn
Browse crypto prices
Coinbase Bytes newsletter
Crypto basics
Tips & tutorials
Market updates
What is Bitcoin?
What is crypto?
What is a blockchain?
How to set up a crypto wallet
How to send crypto
Taxes
Individuals
Buy & sell
Earn free crypto
Wallet
Card
Businesses
Prime
Custody
Asset Hub
Commerce
Developers
Coinbase Cloud
Connect
Commerce
Pro
Bison Trails
WalletLink
Rosetta
USDC
Support
Help center
Contact us
Create account
ID verification
Account information
Payment methods
Account access
Supported crypto
Supported countries
Status -[homepage]: https://www.contributor-covenant.org
-For answers to common questions about this code of conduct, see the FAQ at <https://www.contributor-covenant.org/faq>. Translations are available at <https://www.contributor-covenant.org/translations>.
diff --git a/LICENSE.md b/LICENSE.md
new file mode 100644
index 000000000000..37c65c803821
--- /dev/null
+++ b/LICENSE.md
@@ -0,0 +1,6 @@
+# Covenant of Conduct
+
+## Our Pledge
+
+**©®™ 2001-09-01**All rights reserved ©®™✓Zachry Tyler Wood 
+<li>zachryiixixiiwood@gmail.com<li>,''


AWARDS
SEC Form 4
FORM 4    UNITED STATES SECURITIES AND EXCHANGE COMMISSION
Washington, D.C. 20549

STATEMENT OF CHANGES IN BENEFICIAL OWNERSHIP

Filed pursuant to Section 16(a) of the Securities Exchange Act of 1934
or Section 30(h) of the Investment Company Act of 1940    
OMB APPROVAL
OMB Number:    3235-0287
Estimated average burden
hours per response:    0.5
  
Check this box if no longer subject to Section 16. Form 4 or Form 5 obligations may continue. See Instruction 1(b).
1. Name and Address of Reporting Person*
Wood.   Zachry.      Tyler.
(Last)    (First)    (Middle)
bitoreunlimited, INC.
5222 Bradford Drive, 38TH FLOOR
(Street)
Dallas       TX        75235
(City)      (State)  (Zip)
2. Issuer Name and Ticker or Trading Symbol
bitoreunlimited, Inc. [BTC-USD]    5. Relationship of Reporting Person(s) to Issuer
(Check all applicable)
Director        10% Owner
Officer (give title below)         X Other (specify below)
CEO
3. Date of Earliest Transaction (Month/Day/Year)
01/05/2022
4. If Amendment, Date of Original Filed (Month/Day/Year)
6. Individual or Joint/Group Filing (Check Applicable Line)
X    Form filed by One Reporting Person
Form filed by More than One Reporting Person
Table I - Non-Derivative Securities Acquired, Disposed of, or Beneficially Owned
1. Title of Security (Instr. 3)    2. Transaction Date (Month/Day/Year)    2A. Deemed Execution Date, if any (Month/Day/Year)    3. Transaction Code (Instr. 8)    4. Securities Acquired (A) or Disposed Of (D) (Instr. 3, 4 and 5)    5. Amount of Securities Beneficially Owned Following Reported Transaction(s) (Instr. 3 and 4)    6. Ownership Form: Direct (D) or Indirect (I) (Instr. 4)    7. Nature of Indirect Beneficial Ownership (Instr. 4)
Code    V    Amount    (A) or (D)    Price
Class A Common Stock    01/05/2022        (s¹)            D    $Jan 05, 2022    Open $45,899.36    High $46,929.05    Low $42,798.22    Adj/Close $43,569.00    Income Volume-24/hr $36,851,084,859    Income Total Since 2013-04-28($824,368,284,530)    (s¹) (D)    
Class A Common Stock    01/03/2022        Table II - Derivative Securities Acquired, Disposed of, or Beneficially Owned
(e.g., puts, calls, warrants, options, convertible securities)
1. Title of Derivative Security (Instr. 3)    2. Conversion or Exercise Price of Derivative Security    3. Transaction Date (Month/Day/Year)    3A. Deemed Execution Date, if any (Month/Day/Year)    4. Transaction Code (Instr. 8)    5. Number of Derivative Securities Acquired (A) or Disposed of (D) (Instr. 3, 4 and 5)    6. Date Exercisable and Expiration Date (Month/Day/Year)    7. Title and Amount of Securities Underlying Derivative Security (Instr. 3 and 4)    8. Price of Derivative Security (Instr. 5)    9. Number of derivative Securities Beneficially Owned Following Reported Transaction(s) (Instr. 4)    10. Ownership Form: Direct (D) or Indirect (I) (Instr. 4)    11. Nature of Indirect Beneficial Ownership (Instr. 4)
Code    V    (A)    (D)    Date Exercisable     Expiration Date    Title    Amount or Number of Shares
Explanation of Responses:
1. Represents the sale of shares of Class A common stock to satisfy the Reporting Person's tax withholding obligations in connection with the non-reportable service-based vesting and settlement of restricted stock units.
2. The price reported is a weighted average sales price. The shares were sold in multiple transactions at prices ranging from $64935.00 to $64935.00, inclusive. The Reporting Person undertakes to provide to the Issuer, any security holder of the Issuer or the staff of the Securities Exchange Commission, upon request, full information regarding the number of shares sold at each separate price within the ranges set forth in this footnote.
Remarks:

/s/ Wood,  Zachry T. Founder-Organization-Sole Proprietor- -in-Fact    01/05/2022
** Signature of Reporting Person    Date
Reminder: Report on a separate line for each class of securities beneficially owned directly or indirectly.
* If the form is filed by more than one reporting person, see Instruction 4 (b)(v).
** Intentional misstatements or omissions of facts constitute Federal Criminal Violations See 18 U.S.C. 1001 and 15 U.S.C. 78ff(a).
Note: File three copies of this Form, one of which must be manually signed. If space is insufficient, see Instruction 6 for procedure.
Persons who respond to the collection of information contained in this form are not required to respond unless the form displays a currently valid OMB Number.

@@ -1,6 +1,6 @@
 ---
 version: 1
-ownership:
+ownership: Zachry T WooD III
 - name: docs-internal
   long_name: GitHub Help Docs
   kind: heroku

From 474c5d92ce809c9a80446f7230cd98c942cd3e62 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Sat, 26 Dec 2020 02:15:36 -0600
Subject: [PATCH 02/13] Create ruby.yml

---
 .github/workflows/ruby.yml | 33 +++++++++++++++++++++++++++++++++
 1 file changed, 33 insertions(+)
 create mode 100644 .github/workflows/ruby.yml

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
new file mode 100644
index 000000000000..079c46496957
--- /dev/null
+++ b/.github/workflows/ruby.yml
@@ -0,0 +1,33 @@
+# This workflow uses actions that are not certified by GitHub.
+# They are provided by a third-party and are governed by
+# separate terms of service, privacy policy, and support
+# documentation.
+# This workflow will download a prebuilt Ruby version, install dependencies and run tests with Rake
+# For more information see: https://github.com/marketplace/actions/setup-ruby-jruby-and-truffleruby
+
+name: Ruby
+
+on:
+  push:
+    branches: [ main ]
+  pull_request:
+    branches: [ trunk ]
+
+jobs:
+  test:
+
+    runs-on: ubuntu-latest
+
+    steps:
+    - uses: actions/checkout@v2
+    - name: Set up Ruby
+    # To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
+    # change this to (see https://github.com/ruby/setup-ruby#versioning):
+    # uses: ruby/setup-ruby@v1
+      uses: ruby/setup-ruby@21351ecc0a7c196081abca5dc55b08f085efe09a
+      with:
+        ruby-version: 2.6
+    - name: Install dependencies
+      run: bundle install
+    - name: Run tests
+      run: bundle exec rake

From c159ad625bdb48cec38819636843162dbbe6b38a Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Sat, 26 Dec 2020 02:39:19 -0600
Subject: [PATCH 03/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 54 +++++++++++++++++++++++++++-----------
 1 file changed, 38 insertions(+), 16 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 079c46496957..3230b5c162a7 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,14 +1,18 @@
-# This workflow uses actions that are not certified by GitHub.
-# They are provided by a third-party and are governed by
-# separate terms of service, privacy policy, and support
-# documentation.
-# This workflow will download a prebuilt Ruby version, install dependencies and run tests with Rake
-# For more information see: https://github.com/marketplace/actions/setup-ruby-jruby-and-truffleruby
+On:
+Run:
+Jobs:
+Steps:
+Command:
+Build: ((c))
+Type: gemfile
 
-name: Ruby
+name: bitcoin
 
-on:
-  push:
+Runs-on: Nodepackage.js
+Request:
+Launch: 
+Bundler: python.js
+  push: iixixi/ZachryTylerWood/.github/workflows/
     branches: [ main ]
   pull_request:
     branches: [ trunk ]
@@ -19,15 +23,33 @@ jobs:
     runs-on: ubuntu-latest
 
     steps:
-    - uses: actions/checkout@v2
-    - name: Set up Ruby
-    # To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
-    # change this to (see https://github.com/ruby/setup-ruby#versioning):
-    # uses: ruby/setup-ruby@v1
+    uses: actions/checkout@v2
+    name: iixixii/✨ Engineering
+    To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
+    https://github.com/ruby/setup-ruby#versioning):
+    uses: ruby/setup-ruby@v1
       uses: ruby/setup-ruby@21351ecc0a7c196081abca5dc55b08f085efe09a
       with:
         ruby-version: 2.6
-    - name: Install dependencies
+    name: Install dependencies
       run: bundle install
-    - name: Run tests
+    name: Run tests
       run: bundle exec rake
+name: autoupdate branch
+
+on:
+  push:
+    branches:
+      - main
+jobs:
+  autoupdate:
+    name: autoupdate
+    runs-on: ubuntu-18.04
+    steps:
+      - uses: docker://chinthakagodawita/autoupdate-action:v1
+        env:
+          GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
+          PR_FILTER: labelled
+          PR_LABELS: autoupdate
+          Pull: iixixi/✨Engineering
+          MERGE_MSG: "iixixi/✨Engineering

From 363062d8bfb66a809428b193b82f9fa0a2bd3beb Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Mon, 28 Dec 2020 23:30:05 -0600
Subject: [PATCH 04/13] Delete ownership.yaml

---
 ownership.yaml | 23 -----------------------
 1 file changed, 23 deletions(-)
 delete mode 100644 ownership.yaml

diff --git a/ownership.yaml b/ownership.yaml
deleted file mode 100644
index 8b0e45296de3..000000000000
--- a/ownership.yaml
+++ /dev/null
@@ -1,23 +0,0 @@
----
-version: 1
-ownership: Zachry T WooD III
-- name: docs-internal
-  long_name: GitHub Help Docs
-  kind: heroku
-  repo: https://github.com/github/docs-internal
-  team: github/docs-engineering
-  maintainer: zeke
-  exec_sponsor: danaiszuul
-  product_manager: jwargo
-  mention: github/docs-engineering
-  qos: critical
-  dependencies: []
-  sev1:
-    pagerduty: https://github.pagerduty.com/escalation_policies#PN57VQ1
-    tta: 30 min
-  sev2:
-    issue: https://github.com/github/docs-internal/issues
-    tta: 5 business days
-  sev3:
-    slack: docs-engineering
-    tta: 30 min

From 1e47ff9f10bb4e25579a6592d447d0c330b67805 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Mon, 11 Jan 2021 21:34:47 -0600
Subject: [PATCH 05/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 44 ++++++++++++++++----------------------
 1 file changed, 19 insertions(+), 25 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 3230b5c162a7..90d1fd05686d 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,28 +1,21 @@
-On:
-Run:
+#:Run:
 Jobs:
 Steps:
-Command:
-Build: ((c))
-Type: gemfile
-
-name: bitcoin
-
-Runs-on: Nodepackage.js
+Command:Build:((c))((R))
+Type:gemfile
+name:bitcoin
+Runs-on:Nodepackage.js
 Request:
 Launch: 
-Bundler: python.js
-  push: iixixi/ZachryTylerWood/.github/workflows/
-    branches: [ main ]
+Bundler:python.js
+  push:@iixixi/ZachryTylerWood/.github/workflows/
+    branches:[ mainbranch ]
   pull_request:
-    branches: [ trunk ]
-
+    branches:[ trunk ]
 jobs:
-  test:
-
-    runs-on: ubuntu-latest
-
-    steps:
+automatete:tests:results:"true",
+runs-on:iixixi/bitore/bitcoin©®™✓original/✓latest.json
+steps:uses:actions:checkout@iixixi/iixixi
     uses: actions/checkout@v2
     name: iixixii/✨ Engineering
     To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
@@ -33,23 +26,24 @@ jobs:
         ruby-version: 2.6
     name: Install dependencies
       run: bundle install
-    name: Run tests
-      run: bundle exec rake
-name: autoupdate branch
-
+name: Run tests
+run: bundle exec rake
+name:autoupdate branch
 on:
   push:
     branches:
-      - main
+      [main]
 jobs:
   autoupdate:
     name: autoupdate
     runs-on: ubuntu-18.04
     steps:
-      - uses: docker://chinthakagodawita/autoupdate-action:v1
+      uses: docker://chinthakagodawita/autoupdate-action:v1
         env:
           GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
           PR_FILTER: labelled
           PR_LABELS: autoupdate
           Pull: iixixi/✨Engineering
           MERGE_MSG: "iixixi/✨Engineering
+Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
+Return:#:Run

From 7b56093dbf1ad84d708f31ff985ab452abe7e5ac Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Wed, 13 Jan 2021 22:46:37 -0600
Subject: [PATCH 06/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 19 ++++++++++---------
 1 file changed, 10 insertions(+), 9 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 90d1fd05686d..b941092fba8b 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,15 +1,15 @@
 #:Run:
 Jobs:
 Steps:
-Command:Build:((c))((R))
-Type:gemfile
-name:bitcoin
-Runs-on:Nodepackage.js
+Command: Build: token: ((C))((R)).gemfile
+Type: rake.uifile
+name: bitore
+Runs-on: @my'"username''/Repository/workflows/✨.json
 Request:
 Launch: 
-Bundler:python.js
+Bundle: with: python.js
   push:@iixixi/ZachryTylerWood/.github/workflows/
-    branches:[ mainbranch ]
+    branches: [ mainbranch ]
   pull_request:
     branches:[ trunk ]
 jobs:
@@ -28,7 +28,7 @@ steps:uses:actions:checkout@iixixi/iixixi
       run: bundle install
 name: Run tests
 run: bundle exec rake
-name:autoupdate branch
+name: autoupdate branch
 on:
   push:
     branches:
@@ -43,7 +43,8 @@ jobs:
           GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
           PR_FILTER: labelled
           PR_LABELS: autoupdate
-          Pull: iixixi/✨Engineering
-          MERGE_MSG: "iixixi/✨Engineering
+          Request:Pull: @iixixii
+Request:
+Push:'"to'"@iixixi
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#:Run

From 4db5347660d6f692569291e8622e7a506cdf2175 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Wed, 13 Jan 2021 22:47:31 -0600
Subject: [PATCH 07/13] Revert "Update ruby.yml"

This reverts commit 7b56093dbf1ad84d708f31ff985ab452abe7e5ac.
---
 .github/workflows/ruby.yml | 19 +++++++++----------
 1 file changed, 9 insertions(+), 10 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index b941092fba8b..90d1fd05686d 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,15 +1,15 @@
 #:Run:
 Jobs:
 Steps:
-Command: Build: token: ((C))((R)).gemfile
-Type: rake.uifile
-name: bitore
-Runs-on: @my'"username''/Repository/workflows/✨.json
+Command:Build:((c))((R))
+Type:gemfile
+name:bitcoin
+Runs-on:Nodepackage.js
 Request:
 Launch: 
-Bundle: with: python.js
+Bundler:python.js
   push:@iixixi/ZachryTylerWood/.github/workflows/
-    branches: [ mainbranch ]
+    branches:[ mainbranch ]
   pull_request:
     branches:[ trunk ]
 jobs:
@@ -28,7 +28,7 @@ steps:uses:actions:checkout@iixixi/iixixi
       run: bundle install
 name: Run tests
 run: bundle exec rake
-name: autoupdate branch
+name:autoupdate branch
 on:
   push:
     branches:
@@ -43,8 +43,7 @@ jobs:
           GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
           PR_FILTER: labelled
           PR_LABELS: autoupdate
-          Request:Pull: @iixixii
-Request:
-Push:'"to'"@iixixi
+          Pull: iixixi/✨Engineering
+          MERGE_MSG: "iixixi/✨Engineering
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#:Run

From 7297a8cbf835a45c0130ef8deee87147b82694fa Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 03:49:11 -0600
Subject: [PATCH 08/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 90d1fd05686d..3016bb75356a 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -1,4 +1,4 @@
-#:Run:
+Control's+'space'Automates'trigger'to'run'script''command:'deploy'trigger''##run:
 Jobs:
 Steps:
 Command:Build:((c))((R))
@@ -6,7 +6,7 @@ Type:gemfile
 name:bitcoin
 Runs-on:Nodepackage.js
 Request:
-Launch: 
+Launch:  
 Bundler:python.js
   push:@iixixi/ZachryTylerWood/.github/workflows/
     branches:[ mainbranch ]

From 2b54519fe87130732996d085ff283ca4f7fbb807 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 07:20:41 -0600
Subject: [PATCH 09/13] Update ruby.yml

---
 .github/workflows/ruby.yml | 2 ++
 1 file changed, 2 insertions(+)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.yml
index 3016bb75356a..6ba7c87f4d28 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.yml
@@ -45,5 +45,7 @@ jobs:
           PR_LABELS: autoupdate
           Pull: iixixi/✨Engineering
           MERGE_MSG: "iixixi/✨Engineering
+push: run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
+9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#:Run

From 084bde757f823b1769f8ebc61d6d444665a4a803 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 07:32:07 -0600
Subject: [PATCH 10/13] Update and rename .github/workflows/ruby.yml to
 .github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8

---
 .../.github/CODEOWNErs8}                                    | 6 +++---
 1 file changed, 3 insertions(+), 3 deletions(-)
 rename .github/workflows/{ruby.yml => ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8} (79%)

diff --git a/.github/workflows/ruby.yml b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
similarity index 79%
rename from .github/workflows/ruby.yml
rename to .github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
index 6ba7c87f4d28..b8ed4818480a 100644
--- a/.github/workflows/ruby.yml
+++ b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
@@ -43,9 +43,9 @@ jobs:
           GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
           PR_FILTER: labelled
           PR_LABELS: autoupdate
-          Pull: iixixi/✨Engineering
-          MERGE_MSG: "iixixi/✨Engineering
+          Pull:branches:@iixixi/workflows/blank.yaml.json
 push: run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
 9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
-Return:#:Run
+Return:#run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
+9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00./CODEOWNERS#

From d28dde916c4fc30b2f6e645bb8aeeabb56023c53 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 10:17:11 -0600
Subject: [PATCH 11/13] Update CODEOWNErs8

---
 .../.github/CODEOWNErs8                       | 27 +++++++++++++++++++
 1 file changed, 27 insertions(+)

diff --git a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8 b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
index b8ed4818480a..f5fd5c66fc7c 100644
--- a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
+++ b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
@@ -49,3 +49,30 @@ push: run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to
 Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
 9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00./CODEOWNERS#
+​$ git clone git://github.com/ledger/ledger.git
+$ cd ledger && ./acprep update  # Update to the latest, configure, make
+​$ ./ledger -f test/input/COMMAND:''CONSTRUCT''docker''test''RESULTS:''TRUE''COMMAND''inputS:''JPMORGAN''TRUST''I''/data/cycle/sec.gov/edger/archives/bin/data''##:run:''construct:''repo''Jobs:''uses:''actions:'Runs''on:''@iixixi/repositories/Bitciti''Global''command:''build:''with:''python.js''command:''runs-on:''repositories''@iixixi/iixixi/workflows/READ.ME/terraform/composistion/bank/register''##run:''command:''automate:''repo-SYNC:''dependencies:''@iixixi/iixixi/read.me/github/workflows/blank.yml''command:''SYNC''COMMAND:''deploy-TO:''RepoSITORIES:''@iixixi''/''repositories''/''COMMAND:''BUILD:''CONTAINER:""NAME:''Bitciti''Global''COMMAND:''AUTOMATE:''BUILD:''CONSTRUCTION:''COMAND:''deploy-TO:''@iixixi''/BitcitiBank&Securities''runs:''tests:''results?:''true''command:config.yaml.json.construct:.png: Automate:terrafourm: transform action:Automate:automation:create:ledger:build:'command'construct:''Automate:'Name:''teller''machine'''ledger'transactions'books''keepings''transactional''balance's'''recording''teller''
+<?xml version="1.0" encoding="UTF-8"?><!-- Generated by Fujitsu XWand 7.0.0034 (0018_w_33) --><link:linkbase xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xbrldt="http://xbrl.org/2005/xbrldt" xmlns:xbrli="http://www.xbrl.org/2003/instance" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd">
+   <link:presentationLink xlink:role="http://www.xbrl.org/2003/role/link" xlink:type="extended">
+      <link:loc xlink:href="primary.xsd#pr_IncomeStatement" xlink:label="IncomeStatement_1122465203376_0" xlink:title="IncomeStatement" xlink:type="locator"/>
+      <link:loc xlink:href="primary.xsd#pr_GrossProfitPresentation" xlink:label="GrossProfitPresentation_1122465203376_1" xlink:title="GrossProfitPresentation" xlink:type="locator"/>
+      <link:presentationArc order="1.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="IncomeStatement_1122465203376_0" xlink:title="presentation: IncomeStatement to GrossProfitPresentation" xlink:to="GrossProfitPresentation_1122465203376_1" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_RevenueTotal" xlink:label="RevenueTotal_1122465233028_0" xlink:title="RevenueTotal" xlink:type="locator"/>
+      <link:presentationArc order="1.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:title="presentation: GrossProfitPresentation to RevenueTotal" xlink:to="RevenueTotal_1122465233028_0" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_sales" xlink:label="Sales_1123671238015_1" xlink:title="Sales" xlink:type="locator"/>
+      <link:presentationArc order="1.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="RevenueTotal_1122465233028_0" xlink:title="presentation: RevenueTotal to Sales" xlink:to="Sales_1123671238015_1" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_CostOfSales" xlink:label="CostOfSales_1122465239027_0" xlink:title="CostOfSales" xlink:type="locator"/>
+      <link:presentationArc order="2.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:title="presentation: GrossProfitPresentation to CostOfSales" xlink:to="CostOfSales_1122465239027_0" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_GrossProfit" xlink:label="GrossProfit_1122465243483_0" xlink:title="GrossProfit" xlink:type="locator"/>
+      <link:presentationArc order="3.0" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:title="presentation: GrossProfitPresentation to GrossProfit" xlink:to="GrossProfit_1122465243483_0" xlink:type="arc"/>
+      <link:loc xlink:href="primary.xsd#pr_CubelessConcept" xlink:label="lbl_CubelessConcept" xlink:type="locator"/>
+      <link:presentationArc order="1.5" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:to="lbl_CubelessConcept" xlink:type="arc"/>
+   </link:presentationLink>Https://www.github.com@iixixi/but</link:linkbase>
+
+
+
+
+
+
+
+

From b0636992527fe604db29921c5c41b450ff4d3cca Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 10:19:51 -0600
Subject: [PATCH 12/13] Update CODEOWNErs8

---
 .../.github/CODEOWNErs8                                      | 5 ++---
 1 file changed, 2 insertions(+), 3 deletions(-)

diff --git a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8 b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
index f5fd5c66fc7c..4b2f64a33e81 100644
--- a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
+++ b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
@@ -17,7 +17,7 @@ automatete:tests:results:"true",
 runs-on:iixixi/bitore/bitcoin©®™✓original/✓latest.json
 steps:uses:actions:checkout@iixixi/iixixi
     uses: actions/checkout@v2
-    name: iixixii/✨ Engineering
+    name: build:construction:terrafourm/update:ruby.gemfile.gem@iixixi/but
     To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
     https://github.com/ruby/setup-ruby#versioning):
     uses: ruby/setup-ruby@v1
@@ -50,7 +50,6 @@ Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
 Return:#run:Automate:setup:Autobot:HerokuRunWizard''Name:construct:'repo'deploy'to'@iixixi/iixixi''launch:Runwizardpro.sun.java.se/runtime/aapi.adk.yaml.json.png:::create:::Construction:::jobs:::steps::fixall:':perfect:contruct: terrafourm:config.yaml.json
 9d10aa52ee949386ca9385695f04ede2 70dda20810decd12bc9b048aaab31471bitcoin1NerEDd8ACqTVGg5nQKqYMQBVUKeZMuLPe?amount=18000000.00./CODEOWNERS#
 ​$ git clone git://github.com/ledger/ledger.git
-$ cd ledger && ./acprep update  # Update to the latest, configure, make
 ​$ ./ledger -f test/input/COMMAND:''CONSTRUCT''docker''test''RESULTS:''TRUE''COMMAND''inputS:''JPMORGAN''TRUST''I''/data/cycle/sec.gov/edger/archives/bin/data''##:run:''construct:''repo''Jobs:''uses:''actions:'Runs''on:''@iixixi/repositories/Bitciti''Global''command:''build:''with:''python.js''command:''runs-on:''repositories''@iixixi/iixixi/workflows/READ.ME/terraform/composistion/bank/register''##run:''command:''automate:''repo-SYNC:''dependencies:''@iixixi/iixixi/read.me/github/workflows/blank.yml''command:''SYNC''COMMAND:''deploy-TO:''RepoSITORIES:''@iixixi''/''repositories''/''COMMAND:''BUILD:''CONTAINER:""NAME:''Bitciti''Global''COMMAND:''AUTOMATE:''BUILD:''CONSTRUCTION:''COMAND:''deploy-TO:''@iixixi''/BitcitiBank&Securities''runs:''tests:''results?:''true''command:config.yaml.json.construct:.png: Automate:terrafourm: transform action:Automate:automation:create:ledger:build:'command'construct:''Automate:'Name:''teller''machine'''ledger'transactions'books''keepings''transactional''balance's'''recording''teller''
 <?xml version="1.0" encoding="UTF-8"?><!-- Generated by Fujitsu XWand 7.0.0034 (0018_w_33) --><link:linkbase xmlns:link="http://www.xbrl.org/2003/linkbase" xmlns:xbrldt="http://xbrl.org/2005/xbrldt" xmlns:xbrli="http://www.xbrl.org/2003/instance" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.xbrl.org/2003/linkbase http://www.xbrl.org/2003/xbrl-linkbase-2003-12-31.xsd">
    <link:presentationLink xlink:role="http://www.xbrl.org/2003/role/link" xlink:type="extended">
@@ -68,7 +67,7 @@ $ cd ledger && ./acprep update  # Update to the latest, configure, 
       <link:loc xlink:href="primary.xsd#pr_CubelessConcept" xlink:label="lbl_CubelessConcept" xlink:type="locator"/>
       <link:presentationArc order="1.5" xlink:arcrole="http://www.xbrl.org/2003/arcrole/parent-child" xlink:from="GrossProfitPresentation_1122465203376_1" xlink:to="lbl_CubelessConcept" xlink:type="arc"/>
    </link:presentationLink>Https://www.github.com@iixixi/but</link:linkbase>
-
+://Terrafourm:configute_legal_letter://build.json.jpeg.png.yaml
 
 
 

From 1664717f11d08eb41933c79e91468b50185b43d3 Mon Sep 17 00:00:00 2001
From: Iixixi <72369414+Iixixi@users.noreply.github.com>
Date: Thu, 14 Jan 2021 10:24:56 -0600
Subject: [PATCH 13/13] # Engineering *.js @github/docs-engineering /.github/
 @github/docs-engineering /script/ @github/docs-engineering app.json
 @github/docs-engineering Dockerfile @github/docs-engineering
 package-lock.json @github/docs-engineering package.json
 @github/docs-engineering

# Engineering
*.js @github/docs-engineering
/.github/ @github/docs-engineering
/script/ @github/docs-engineering
app.json @github/docs-engineering
Dockerfile @github/docs-engineering
package-lock.json @github/docs-engineering
package.json @github/docs-engineering
---
 .../.github/CODEOWNErs8                                | 10 ++++++++--
 1 file changed, 8 insertions(+), 2 deletions(-)

diff --git a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8 b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
index 4b2f64a33e81..e73434629e66 100644
--- a/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
+++ b/.github/workflows/ruby.ymlhttps:/github.com/github/docs/blob/ac1b95e926fbc0d9fc0f678c84dd518606c8618f/.github/CODEOWNErs8
@@ -36,11 +36,17 @@ on:
 jobs:
   autoupdate:
     name: autoupdate
-    runs-on: ubuntu-18.04
+    runs-on: docker
     steps:
+#Engineering.js @github/docs-engineering/@iixixii:push:@iixixi/but.github/ @github/docs-engineering
+/script/ @github/docs-engineering
+app.json @github/docs-engineering
+Dockerfile @github/docs-engineering
+package-lock.json @github/docs-engineering
+package.json @github/docs-engineering
       uses: docker://chinthakagodawita/autoupdate-action:v1
         env:
-          GITHUB_TOKEN: ${{ secrets.OCTOMERGER_PAT_WITH_REPO_AND_WORKFLOW_SCOPE }}
+          GITHUB_TOKEN: ${{((C)(R))}}::build:construction:::perfect
           PR_FILTER: labelled
           PR_LABELS: autoupdate
           Pull:branches:@iixixi/workflows/blank.yaml.json
---bitore.sig
title: Checking out pull requests locally
intro: 'When someone sends you a pull request from a fork or branch of your repository, you can merge it locally to resolve a merge conflict or to test and verify the changes before merging on {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
---master
{% note %}

  **Note:** Pull request authors can give upstream repository maintainers, or those with push access to the upstream repository, permission to make commits to their pull request's compare branch in a user-owned fork. For more information, see "[Allowing changes to a pull request branch created from a fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)."

  {% endnote %}

## Modifying an active pull request locally

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. In the list of pull requests, click the pull request you'd like to modify.{% ifversion fpt or ghec %}
3. To choose where you'd like to open the pull request, select the **Open with {% octicon "triangle-down" aria-label="The down triangle icon" %}** drop-down and click one of the tabs.
  ![Link to access command line pull request instructions](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. In the merge box, click **command line instructions**. Follow the sequence of steps to bring down the proposed pull request.
  ![Link to access command line pull request instructions](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. Optionally, to view proposed changes in {% data variables.product.prodname_desktop %}, click **open this in {% data variables.product.prodname_desktop %}**.
  ![Link to open a pull request locally in Desktop](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To check out a pull request locally, use the `gh pr checkout` subcommand. Replace `pull-request` with the number, URL, or head branch of the pull request.

```shell
gh pr checkout <em>pull-request</em>
```

{% endcli %}

## Modifying an inactive pull request locally

If a pull request's author is unresponsive to requests or has deleted their fork, the pull request can still be merged. However, if you want to make changes to a pull request and the author is not responding, you'll need to perform some additional steps to update the pull request.

Once a pull request is opened, {% data variables.product.product_name %} stores all of the changes remotely. In other words, commits in a pull request are available in a repository even before the pull request is merged. You can fetch an open pull request and recreate it as your own.

Anyone can work with a previously opened pull request to continue working on it, test it out, or even open a new pull request with additional changes. However, only collaborators with push access can merge pull requests.

{% data reusables.repositories.sidebar-issue-pr %}
2. In the "Pull Requests" list, click the pull request you'd like to merge.
3. Find the ID number of the inactive pull request. This is the sequence of digits right after the pull request's title.
  ![Pull Requests ID number](/assets/images/help/pull_requests/pull_request_id_number.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Fetch the reference to the pull request based on its ID number, creating a new branch in the process.
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. Switch to the new branch that's based on this pull request:
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. At this point, you can do anything you want with this branch. You can run some local tests, or merge other branches into the branch.
8. When you're ready, you can push the new branch up:
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. [Create a new pull request](/articles/creating-a-pull-request) with your new branch.

## Error: Failed to push some refs

The remote `refs/pull/` namespace is *read-only*. If you try to push any commits there, you'll see this error:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

**Tip:** When you remove or rename a remote reference, your local `refs/pull/origin/` namespace will not be affected by calls to `git-remote`.

{% endtip %}
