diff --git a/.devcontainer/devcontainer.json b/.devcontainer/devcontainer.json
index 12ab2462a3b..f9781de5cc2 100644
--- a/.devcontainer/devcontainer.json
+++ b/.devcontainer/devcontainer.json
@@ -1,52 +1,20 @@
-// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
-// https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node
-// -
-{
-	"name": "docs.github.com",
-	"build": {
-		"dockerfile": "Dockerfile",
-		// Update 'VARIANT' to pick a Node version
-		"args": { "VARIANT": "18" }
-	},
-
-	// Set *default* container specific settings.json values on container create.
-	"settings": {
-		"terminal.integrated.shell.linux": "/bin/bash",
-		"cSpell.language": ",en"
-	},
-
-	// Install features. Type 'feature' in the VS Code command palette for a full list.
-	"features": {
-		"sshd": "latest"
-	 },
-
-	// Visual Studio Code extensions which help authoring for docs.github.com.
-	"extensions": [
-		"dbaeumer.vscode-eslint",
-		"sissel.shopify-liquid",
-		"davidanson.vscode-markdownlint",
-		"bierner.markdown-preview-github-styles",
-		"streetsidesoftware.code-spell-checker",
-		"alistairchristie.open-reusables"
-	],
-
-	// Use 'forwardPorts' to make a list of ports inside the container available locally.
-	"forwardPorts": [4000],
-		
-	"portsAttributes": {
-		"4000": {
-        		"label": "Preview",
-        		"onAutoForward": "openPreview"
-      		}
-	},
-
-	// Use 'postCreateCommand' to run commands after the container is created.
-	"postCreateCommand": "npm ci",
-
-	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
-	"remoteUser": "node"
-,
-	"hostRequirements": {
-		"memory": "8gb"
-	 }
-}
+Name :Build and Deploy :
+title :'Run'' 
+'-'' #'Test'@'.'Travis::
+:ci :
+BEGIN'
+GLOW4'
+checkout ':'#'Checks'-out ':via '::'#'Coommand.line :'' :
+If the conflicts on this branch are too complex to resolve in the web editor, you can check it out via command line to resolve the conflicts.
+https://github.com/mowjoejoejoejoe/WORKSFLOW.git
+Step 1: Clone the repository or update your local repository with the latest changes.
+git pull origin main
+Step 2: Switch to the head branch of the pull request.
+git checkout Master
+Step 3: Merge the base branch into the head branch.
+git merge main
+Step 4: Fix the conflicts and commit the result.
+See Resolving a merge conflict using the command line for step-by-step instructions on resolving merge conflicts.
+Step 5: Push the changes.
+git push -u origin Master
+"dockerfile"::':Build::Publish ::
diff --git a/.github/workflows/main-preview-docker-cache.yml b/.github/workflows/main-preview-docker-cache.yml
deleted file mode 100644
index ec2bd3fb025..00000000000
--- a/.github/workflows/main-preview-docker-cache.yml
+++ /dev/null
@@ -1,78 +0,0 @@
-name: Build and Push Main Preview Env Docker Cache
-
-# **What it does**: Builds and pushes the `main` Docker cache image
-# **Why we have it**: It allows PRs using the registry cache to pull a pre-built image, which should speed up the build
-# **Who does it impact**: All contributors.
-
-on:
-  push:
-    branches:
-      - main
-
-permissions:
-  contents: read
-
-# This allows a subsequently queued workflow run to take priority over
-# previously queued runs and interrupt currently executing runs
-concurrency:
-  group: '${{ github.workflow }}'
-  cancel-in-progress: true
-
-jobs:
-  build-and-push-nonprod-cache:
-    if: ${{ github.repository == 'github/docs-internal' || github.repository == 'github/docs' }}
-    runs-on: ubuntu-latest
-    timeout-minutes: 15
-    env:
-      ENABLE_EARLY_ACCESS: ${{ github.repository == 'github/docs-internal' }}
-      DOCKER_IMAGE_CACHE_REF: ${{ secrets.NONPROD_REGISTRY_SERVER }}/${{ github.repository }}:main-preview
-      NONPROD_REGISTRY_USERNAME: ${{ fromJSON('["ghdocs", "ghdocsinternal"]')[github.repository == 'github/docs-internal'] }}
-
-    steps:
-      - name: 'Az CLI login'
-        uses: azure/login@1f63701bf3e6892515f1b7ce2d2bf1708b46beaf
-        with:
-          creds: ${{ secrets.NONPROD_AZURE_CREDENTIALS }}
-
-      - name: 'Docker login'
-        uses: azure/docker-login@83efeb77770c98b620c73055fbb59b2847e17dc0
-        with:
-          login-server: ${{ secrets.NONPROD_REGISTRY_SERVER }}
-          username: ${{ env.NONPROD_REGISTRY_USERNAME }}
-          password: ${{ secrets.NONPROD_REGISTRY_PASSWORD }}
-
-      - name: Set up Docker Buildx
-        uses: docker/setup-buildx-action@95cb08cb2672c73d4ffd2f422e6d11953d2a9c70
-
-      - name: Check out repo
-        uses: actions/checkout@93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8
-        with:
-          # To prevent issues with cloning early access content later
-          persist-credentials: 'false'
-
-      - if: ${{ env.ENABLE_EARLY_ACCESS }}
-        name: Clone docs-early-access
-        uses: actions/checkout@93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8
-        with:
-          repository: github/docs-early-access
-          token: ${{ secrets.DOCUBOT_REPO_PAT }}
-          path: docs-early-access
-          ref: main
-
-      - if: ${{ env.ENABLE_EARLY_ACCESS }}
-        name: Merge docs-early-access repo's folders
-        run: .github/actions-scripts/merge-early-access.sh
-
-      # In addition to making the final image smaller, we also save time by not sending unnecessary files to the docker build context
-      - name: 'Prune for preview env'
-        run: .github/actions-scripts/prune-for-preview-env.sh
-
-      - name: 'Build and push image'
-        uses: docker/build-push-action@1cb9d22b932e4832bb29793b7777ec860fc1cde0
-        with:
-          context: .
-          push: true
-          target: preview
-          tags: ${{ env.DOCKER_IMAGE_CACHE_REF }}
-          cache-from: type=registry,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
-          cache-to: type=registry,mode=max,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
diff --git a/.github/workflows/runners.ixios b/.github/workflows/runners.ixios
new file mode 100644
index 00000000000..fcccd767d5d
--- /dev/null
+++ b/.github/workflows/runners.ixios
@@ -0,0 +1,411 @@
+Name: Build and Deployee :Push 
+Pushs :branches
+branches :-'[Main'] 
+## Preview 
+# Env :.dockerfile/dev/containers.u/runners.ixios :
+  push:
+    branches:
+      - main
+permissions:
+  contents: read
+# This allows a subsequently queued workflow run to take priority over
+# previously queued runs and interrupt currently executing runs
+concurrency:
+  group: '${{ github.workflow }}'
+  cancel-in-progress: true
+jobs:
+  build-and-push-nonprod-cache:
+    if: ${{ github.repository == 'github/docs-internal' || github.repository == 'github/docs' }}
+    runs-on: ubuntu-latest
+    timeout-minutes: 15
+    env:
+      ENABLE_EARLY_ACCESS: ${{ github.repository == 'github/docs-internal' }}
+      DOCKER_IMAGE_CACHE_REF: ${{ secrets.NONPROD_REGISTRY_SERVER }}/${{ github.repository }}:main-preview
+      NONPROD_REGISTRY_USERNAME: ${{ fromJSON('["ghdocs", "ghdocsinternal"]')[github.repository == 'github/docs-internal'] }}
+    steps:
+      - name: 'Az CLI login'
+        uses: azure/login@1f63701bf3e6892515f1b7ce2d2bf1708b46beaf
+        with:
+          creds: ${{ secrets.NONPROD_AZURE_CREDENTIALS }}
+      - name: 'Docker login'
+        uses: azure/docker-login@83efeb77770c98b620c73055fbb59b2847e17dc0
+        with:
+          login-server: ${{ secrets.NONPROD_REGISTRY_SERVER }}
+          username: ${{ env.NONPROD_REGISTRY_USERNAME }}
+          password: ${{ secrets.NONPROD_REGISTRY_PASSWORD }}
+      - name: Set up Docker Buildx
+        uses: docker/setup-buildx-action@95cb08cb2672c73d4ffd2f422e6d11953d2a9c70
+      - name: Check out repo
+        uses: actions/checkout@93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8
+        with:
+          # To prevent issues with cloning early access content later
+          persist-credentials: 'false'
+      - if: ${{ env.ENABLE_EARLY_ACCESS }}
+        name: Clone docs-early-access
+        uses: actions/checkout@93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8
+        with:
+          repository: github/docs-early-access
+          token: ${{ secrets.DOCUBOT_REPO_PAT }}
+          path: docs-early-access
+          ref: main
+      - if: ${{ env.ENABLE_EARLY_ACCESS }}
+        name: Merge docs-early-access repo's folders
+        run: .github/actions-scripts/merge-early-access.sh
+      # In addition to making the final image smaller, we also save time by not sending unnecessary files to the docker build context
+      - name: 'Prune for preview env'
+        run: .github/actions-scripts/prune-for-preview-env.sh
+      - name: 'Build and push image'
+        uses: docker/build-push-action@1cb9d22b932e4832bb29793b7777ec860fc1cde0
+        with:
+          context: .
+          push: true
+          target: preview
+          tags: ${{ env.DOCKER_IMAGE_CACHE_REF }}
+          cache-from: type=registry,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
+          cache-to: type=registry,mode=max,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
+Skip to content
+Search or jump to…
+Pull requests
+Issues
+Codespaces
+Marketplace
+Explore
+ 
+@mowjoejoejoejoe 
+bill-ash
+/
+django-quickbooks
+Public
+forked from weltlink/django-quickbooks
+Fork your own copy of bill-ash/django-quickbooks
+Code
+Pull requests
+Actions
+Projects
+Security
+Insights
+Comparing changes
+Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .
+ 
+ 
+...
+ 
+ 
+  Able to merge. These branches can be automatically merged.
+Discuss and review the changes in this comparison with others. Learn about pull requests
+ 2 commits
+ 2 files changed
+ 1 contributor
+Commits on Feb 2, 2023
+Update invoice_query_request.xml (weltlink#1)
+
+@mowjoejoejoejoe
+mowjoejoejoejoe committed 4 minutes ago
+  
+Update CHANGELOG.md
+
+@mowjoejoejoejoe
+mowjoejoejoejoe committed 2 minutes ago
+  
+Showing  with 163 additions and 0 deletions.
+ 82  
+CHANGELOG.md
+@@ -1,3 +1,85 @@
+<?xml version="1.0" encoding="utf-8"?>
+<?qbxml version="13.0"?>
+<QBXML>
+    <QBXMLMsgsRq onError="stopOnError">
+        <InvoiceQueryRq metaData="ENUMTYPE" iterator="ENUMTYPE" iteratorID="UUIDTYPE">
+            <!-- BEGIN OR -->
+            <TxnID>IDTYPE</TxnID> <!-- optional, may repeat -->
+            <!-- OR -->
+            <RefNumber>STRTYPE</RefNumber> <!-- optional, may repeat -->
+            <!-- OR -->
+            <RefNumberCaseSensitive>STRTYPE</RefNumberCaseSensitive> <!-- optional, may repeat -->
+            <!-- OR -->
+            <MaxReturned>INTTYPE</MaxReturned> <!-- optional -->
+            <!-- BEGIN OR -->
+            <ModifiedDateRangeFilter> <!-- optional -->
+                <FromModifiedDate>DATETIMETYPE</FromModifiedDate> <!-- optional -->
+                <ToModifiedDate>DATETIMETYPE</ToModifiedDate> <!-- optional -->
+            </ModifiedDateRangeFilter>
+            <!-- OR -->
+            <TxnDateRangeFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <FromTxnDate>DATETYPE</FromTxnDate> <!-- optional -->
+                <ToTxnDate>DATETYPE</ToTxnDate> <!-- optional -->
+                <!-- OR -->
+                <!-- flake's'@'V8/nazt-remix/ignition-initiate.yml may have one of the following values: All, Today, ThisWeek, ThisWeekToDate, ThisMonth, ThisMonthToDate, ThisCalendarQuarter, ThisCalendarQuarterToDate, ThisFiscalQuarter, ThisFiscalQuarterToDate, ThisCalendarYear, ThisCalendarYearToDate, ThisFiscalYear, ThisFiscalYearToDate, Yesterday, LastWeek, LastWeekToDate, LastMonth, LastMonthToDate, LastCalendarQuarter, LastCalendarQuarterToDate, LastFiscalQuarter, LastFiscalQuarterToDate, LastCalendarYear, LastCalendarYearToDate, LastFiscalYear, LastFiscalYearToDate, NextWeek, NextFourWeeks, NextMonth, NextCalendarQuarter, NextCalendarYear, NextFiscalQuarter, NextFiscalYear -->
+                <DateMacro>ENUMTYPE</DateMacro> <!-- optional -->
+                <!-- END OR -->
+            </TxnDateRangeFilter>
+            <!-- END OR -->
+            <EntityFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- OR -->
+                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
+                <!-- OR -->
+                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
+                <!-- END OR -->
+            </EntityFilter>
+            <AccountFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- OR -->
+                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
+                <!-- OR -->
+                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
+                <!-- END OR -->
+            </AccountFilter>
+            <!-- BEGIN OR -->
+            <RefNumberFilter> <!-- optional -->
+                <!-- MatchCriterion may have one of the following values: StartsWith, Contains, EndsWith -->
+                <MatchCriterion>ENUMTYPE</MatchCriterion> <!-- required -->
+                <RefNumber>STRTYPE</RefNumber> <!-- required -->
+            </RefNumberFilter>
+            <!-- OR -->
+            <RefNumberRangeFilter> <!-- optional -->
+                <FromRefNumber>STRTYPE</FromRefNumber> <!-- optional -->
+                <ToRefNumber>STRTYPE</ToRefNumber> <!-- optional -->
+            </RefNumberRangeFilter>
+            <!-- END OR -->
+            <CurrencyFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- END OR -->
+            </CurrencyFilter>
+            <!-- PaidStatus may have one of the following values: All [DEFAULT], PaidOnly, NotPaidOnly -->
+            <PaidStatus>ENUMTYPE</PaidStatus> <!-- optional -->
+            <!-- END OR -->
+            <IncludeLineItems>BOOLTYPE</IncludeLineItems> <!-- optional -->
+            <IncludeLinkedTxns>BOOLTYPE</IncludeLinkedTxns> <!-- optional -->
+            <IncludeRetElement>STRTYPE</IncludeRetElement> <!-- optional, may repeat -->
+            <OwnerID>GUIDTYPE</OwnerID> <!-- optional, may repeat -->
+        </InvoiceQueryRq>
+    </QBXMLMsgsRq>
+</QBXML>
+
+
+# Changelog
+
+All notable changes to this project will be documented in this file.
+## [NO_RELEASE]
+Sorry to say that, but from this release no backward compatibility is kept with previous ones as I had to change 
+lots of concepts in the project
+ ### CHANGED
+ - `QueueManager` instance has been changed from inherited model to composite model for `SessionManager`
+ - `RabbitMQManager` (`QueueManager`) is being *deprecated* now as I could not implement it in the right way
+ and it keeps being disconnected from the broker which could be a huge problem for big projects
+ - `RedisManager` (`QueueManager`) is added to compensate deprecation of RabbitMQManager
+ - Added named queue prefixes to differentiate queues (e.g. **iterating realm_session requests**, **realm requests**)
+ - Added customization for `QueueManager` without changing `SessionManager` (changing `QUEUE_MANAGER_CLASS` in settings)
+ 
+ 
+## [0.6.4.2] - 2020-03-09
+### FIXED
+- Fix logger handling to django default
+- Fix is_list method of validators
+- Fix validate method of SchemeValidator when many option is enabled
+## [0.6.4.1] - 2020-03-06
+### FIXED
+- Fix local_customer filtering by name
+- Fix setting tenant to conection instead of schema_name
+- Fix default REALM_CONNECTION_DECORATOR
+- Fix installation requirements of extra tenant package
+## [0.6.4] - 2020-02-26
+### ADDED
+- Add converter from qbd_mixin_model to qbd_task
+- Add signal to handle post_process after realm is authenticated successfully
+## [0.6.3] - 2020-02-14
+### ADDED
+- Add Exception coverage for QBTask request conversion
+- Add several exceptions
+## FIXED
+- Fix argument parameter of method CustomerAddResponseProcessor.process()  
+## [0.6.0] - 2020-02-12
+### ADDED
+- Add ValidationError handling
+- Add basic decorators for realm connection
+- Add realm_connection decorator to ResponseProcessor and SessionManager
+- Add initial documentation structure
+### CHANGED
+- All Signal `schema_name` arguments were changed to `realm_id` (after removing *django-tenant-schemas*)
+### REMOVED
+- Remove *django-tenant-schemas* dependency from project (make it as optional)
+[0.6.0]: https://github.com/weltlink/django-quickbooks/compare/0.5...0.6
+[0.6.3]: https://github.com/weltlink/django-quickbooks/compare/0.6...0.6.3
+[0.6.4]: https://github.com/weltlink/django-quickbooks/compare/0.6.3...0.6.4
+[0.6.4.1]: https://github.com/weltlink/django-quickbooks/compare/0.6.4...0.6.4.1
+[0.6.4.2]: https://github.com/weltlink/django-quickbooks/compare/0.6.4.1...0.6.4.2
+[NO_RELEASE]: https://github.com/weltlink/django-quickbooks/compare/0.6.4.2...master
+  81  
+django_quickbooks/data/invoice_query_request.xml
+<?xml version="1.0" encoding="utf-8"?>
+<?qbxml version="13.0"?>
+<QBXML>
+    <QBXMLMsgsRq onError="stopOnError">
+        <InvoiceQueryRq metaData="ENUMTYPE" iterator="ENUMTYPE" iteratorID="UUIDTYPE">
+            <!-- BEGIN OR -->
+            <TxnID>IDTYPE</TxnID> <!-- optional, may repeat -->
+            <!-- OR -->
+            <RefNumber>STRTYPE</RefNumber> <!-- optional, may repeat -->
+            <!-- OR -->
+            <RefNumberCaseSensitive>STRTYPE</RefNumberCaseSensitive> <!-- optional, may repeat -->
+            <!-- OR -->
+            <MaxReturned>INTTYPE</MaxReturned> <!-- optional -->
+            <!-- BEGIN OR -->
+            <ModifiedDateRangeFilter> <!-- optional -->
+                <FromModifiedDate>DATETIMETYPE</FromModifiedDate> <!-- optional -->
+                <ToModifiedDate>DATETIMETYPE</ToModifiedDate> <!-- optional -->
+            </ModifiedDateRangeFilter>
+            <!-- OR -->
+            <TxnDateRangeFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <FromTxnDate>DATETYPE</FromTxnDate> <!-- optional -->
+                <ToTxnDate>DATETYPE</ToTxnDate> <!-- optional -->
+                <!-- OR -->
+                <!-- DateMacro may have one of the following values: All, Today, ThisWeek, ThisWeekToDate, ThisMonth, ThisMonthToDate, ThisCalendarQuarter, ThisCalendarQuarterToDate, ThisFiscalQuarter, ThisFiscalQuarterToDate, ThisCalendarYear, ThisCalendarYearToDate, ThisFiscalYear, ThisFiscalYearToDate, Yesterday, LastWeek, LastWeekToDate, LastMonth, LastMonthToDate, LastCalendarQuarter, LastCalendarQuarterToDate, LastFiscalQuarter, LastFiscalQuarterToDate, LastCalendarYear, LastCalendarYearToDate, LastFiscalYear, LastFiscalYearToDate, NextWeek, NextFourWeeks, NextMonth, NextCalendarQuarter, NextCalendarYear, NextFiscalQuarter, NextFiscalYear -->
+                <DateMacro>ENUMTYPE</DateMacro> <!-- optional -->
+                <!-- END OR -->
+            </TxnDateRangeFilter>
+            <!-- END OR -->
+            <EntityFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- OR -->
+                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
+                <!-- OR -->
+                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
+                <!-- END OR -->
+            </EntityFilter>
+            <AccountFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- OR -->
+                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
+                <!-- OR -->
+                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
+                <!-- END OR -->
+            </AccountFilter>
+            <!-- BEGIN OR -->
+            <RefNumberFilter> <!-- optional -->
+                <!-- MatchCriterion may have one of the following values: StartsWith, Contains, EndsWith -->
+                <MatchCriterion>ENUMTYPE</MatchCriterion> <!-- required -->
+                <RefNumber>STRTYPE</RefNumber> <!-- required -->
+            </RefNumberFilter>
+            <!-- OR -->
+            <RefNumberRangeFilter> <!-- optional -->
+                <FromRefNumber>STRTYPE</FromRefNumber> <!-- optional -->
+                <ToRefNumber>STRTYPE</ToRefNumber> <!-- optional -->
+            </RefNumberRangeFilter>
+            <!-- END OR -->
+            <CurrencyFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- END OR -->
+            </CurrencyFilter>
+            <!-- PaidStatus may have one of the following values: All [DEFAULT], PaidOnly, NotPaidOnly -->
+            <PaidStatus>ENUMTYPE</PaidStatus> <!-- optional -->
+            <!-- END OR -->
+            <IncludeLineItems>BOOLTYPE</IncludeLineItems> <!-- optional -->
+            <IncludeLinkedTxns>BOOLTYPE</IncludeLinkedTxns> <!-- optional -->
+            <IncludeRetElement>STRTYPE</IncludeRetElement> <!-- optional, may repeat -->
+            <OwnerID>GUIDTYPE</OwnerID> <!-- optional, may repeat -->
+        </InvoiceQueryRq>
+    </QBXMLMsgsRq>
+</QBXML>
+PARADICE CONSTRUCTION
+<?xml version="1.0" encoding="utf-8"?>
+<?qbxml version="13.0"?>
+<QBXML>
+    <QBXMLMsgsRq onError="stopOnError">
+        <InvoiceQueryRq metaData="ENUMTYPE" iterator="ENUMTYPE" iteratorID="UUIDTYPE">
+            <!-- BEGIN OR -->
+            <TxnID>IDTYPE</TxnID> <!-- optional, may repeat -->
+            <!-- OR -->
+            <RefNumber>STRTYPE</RefNumber> <!-- optional, may repeat -->
+            <!-- OR -->
+            <RefNumberCaseSensitive>STRTYPE</RefNumberCaseSensitive> <!-- optional, may repeat -->
+            <!-- OR -->
+            <MaxReturned>INTTYPE</MaxReturned> <!-- optional -->
+            <!-- BEGIN OR -->
+            <ModifiedDateRangeFilter> <!-- optional -->
+                <FromModifiedDate>DATETIMETYPE</FromModifiedDate> <!-- optional -->
+                <ToModifiedDate>DATETIMETYPE</ToModifiedDate> <!-- optional -->
+            </ModifiedDateRangeFilter>
+            <!-- OR -->
+            <TxnDateRangeFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <FromTxnDate>DATETYPE</FromTxnDate> <!-- optional -->
+                <ToTxnDate>DATETYPE</ToTxnDate> <!-- optional -->
+                <!-- OR -->
+                <!-- DateMacro may have one of the following values: All, Today, ThisWeek, ThisWeekToDate, ThisMonth, ThisMonthToDate, ThisCalendarQuarter, ThisCalendarQuarterToDate, ThisFiscalQuarter, ThisFiscalQuarterToDate, ThisCalendarYear, ThisCalendarYearToDate, ThisFiscalYear, ThisFiscalYearToDate, Yesterday, LastWeek, LastWeekToDate, LastMonth, LastMonthToDate, LastCalendarQuarter, LastCalendarQuarterToDate, LastFiscalQuarter, LastFiscalQuarterToDate, LastCalendarYear, LastCalendarYearToDate, LastFiscalYear, LastFiscalYearToDate, NextWeek, NextFourWeeks, NextMonth, NextCalendarQuarter, NextCalendarYear, NextFiscalQuarter, NextFiscalYear -->
+                <DateMacro>ENUMTYPE</DateMacro> <!-- optional -->
+                <!-- END OR -->
+            </TxnDateRangeFilter>
+            <!-- END OR -->
+            <EntityFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- OR -->
+                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
+                <!-- OR -->
+                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
+                <!-- END OR -->
+            </EntityFilter>
+            <AccountFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- OR -->
+                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
+                <!-- OR -->
+                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
+                <!-- END OR -->
+            </AccountFilter>
+            <!-- BEGIN OR -->
+            <RefNumberFilter> <!-- optional -->
+                <!-- MatchCriterion may have one of the following values: StartsWith, Contains, EndsWith -->
+                <MatchCriterion>ENUMTYPE</MatchCriterion> <!-- required -->
+                <RefNumber>STRTYPE</RefNumber> <!-- required -->
+            </RefNumberFilter>
+            <!-- OR -->
+            <RefNumberRangeFilter> <!-- optional -->
+                <FromRefNumber>STRTYPE</FromRefNumber> <!-- optional -->
+                <ToRefNumber>STRTYPE</ToRefNumber> <!-- optional -->
+            </RefNumberRangeFilter>
+            <!-- END OR -->
+            <CurrencyFilter> <!-- optional -->
+                <!-- BEGIN OR -->
+                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
+                <!-- OR -->
+                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
+                <!-- END OR -->
+            </CurrencyFilter>
+            <!-- PaidStatus may have one of the following values: All [DEFAULT], PaidOnly, NotPaidOnly -->
+            <PaidStatus>ENUMTYPE</PaidStatus> <!-- optional -->
+            <!-- END OR -->
+            <IncludeLineItems>BOOLTYPE</IncludeLineItems> <!-- optional -->
+            <IncludeLinkedTxns>BOOLTYPE</IncludeLinkedTxns> <!-- optional -->
+            <IncludeRetElement>STRTYPE</IncludeRetElement> <!-- optional, may repeat -->
+            <OwnerID>GUIDTYPE</OwnerID> <!-- optional, may repeat -->
+        </InvoiceQueryRq>
+    </QBXMLMsgsRq>
+</QBXML>
+Comparing bill-ash:master...mowjoejoejoejoe:master · bill-ash/django-quickbooks
diff --git a/.github/workflows/no-response.yaml b/GitHub/Docs/.github/docs/Responses.md/Responses.md/README.md/README.md
similarity index 73%
rename from .github/workflows/no-response.yaml
rename to GitHub/Docs/.github/docs/Responses.md/Responses.md/README.md/README.md
index 0e49672847b..9801d2e154d 100644
--- a/.github/workflows/no-response.yaml
+++ b/GitHub/Docs/.github/docs/Responses.md/Responses.md/README.md/README.md
@@ -1,23 +1,34 @@
-name: No Response
-
+Name :Build and Deploy :
+build-and-deploy :title :
+title :README.md :
 # **What it does**: Closes issues that don't have enough information to be
 #                   actionable.
 # **Why we have it**: To remove the need for maintainers to remember to check
 #                     back on issues periodically to see if contributors have
 #                     responded.
 # **Who does it impact**: Everyone that works on docs or docs-internal.
-
-on:
-  issue_comment:
-    types: [created]
-
-  schedule:
-    - cron: '20 * * * *' # Run each hour at 20 minutes past
-
-permissions:
-  issues: write
-
-jobs:
+starts-on:'::-on :
+-on :Request:
+Request #kind 
+#kind :'Kite.i :
+'Kite.i :type
+types: [created]
+schedule :Update
+Updates :autoupdate
+autoupdates :Automate
+Automates :tta
+tta :#Every -3 sec :
+#Every -3 sec :daily
+daily :true.
+true. :permission
+permissions :config 
+config.prettier-write:rake.i/'Kite.u :
+'Kite.u :sets'-up
+sets'-up :rb.qm 
+rb.qm :starts
+starts-on :GLOW4
+GLOW4 :'require','' '.'Docx'
+:Build::
   noResponse:
     runs-on: ubuntu-latest
     if: github.repository == 'github/docs-internal' || github.repository == 'github/docs'
diff --git a/.vscode/launch.json b/ZachryTylerWood
similarity index 99%
rename from .vscode/launch.json
rename to ZachryTylerWood
index e7265cc1f84..cf9829198e2 100644
--- a/.vscode/launch.json
+++ b/ZachryTylerWood
@@ -10,4 +10,4 @@
       "protocol": "instructor",
\ No newline at end of file
+}
diff --git a/.devcontainer/Dockerfile b/dev/null/unsigned.blank.yml
similarity index 90%
rename from .devcontainer/Dockerfile
rename to dev/null/unsigned.blank.yml
index 562f9aafb3a..ff43b7713f7 100644
--- a/.devcontainer/Dockerfile
+++ b/dev/null/unsigned.blank.yml
@@ -1,7 +1,8 @@
 # See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node/.devcontainer/base.Dockerfile
 # [Choice] Node.js version
-ARG VARIANT="18-buster"
+'A'G'S'"'' ':;'' ':'' '"'P3'T3'R'X'@niezt'@V8/natz :
+  '-'' 'with:'' 'Bowser.yml'@'Buster"12x, 14x,16x":, :
 FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
 # [Optional] Uncomment this section to install additional OS packages.
# [Choice] Node.js version
ARG VARIANT="18-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Install the GitHub CLI see:
# https://github.com/microsoft/vscode-dev-containers/blob/3d59f9fe37edb68f78874620f33dac5a62ef2b93/script-library/docs/github.md
COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
