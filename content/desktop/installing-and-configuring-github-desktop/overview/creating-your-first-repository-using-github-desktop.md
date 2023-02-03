 21  
.devcontainer/Dockerfile
@@ -1,21 +0,0 @@
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node/.devcontainer/base.Dockerfile

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
 72  
.devcontainer/devcontainer.json
@@ -1,52 +1,20 @@
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node
// -
{
	"name": "docs.github.com",
	"build": {
		"dockerfile": "Dockerfile",
		// Update 'VARIANT' to pick a Node version
		"args": { "VARIANT": "18" }
	},

	// Set *default* container specific settings.json values on container create.
	"settings": {
		"terminal.integrated.shell.linux": "/bin/bash",
		"cSpell.language": ",en"
	},

	// Install features. Type 'feature' in the VS Code command palette for a full list.
	"features": {
		"sshd": "latest"
	 },

	// Visual Studio Code extensions which help authoring for docs.github.com.
	"extensions": [
		"dbaeumer.vscode-eslint",
		"sissel.shopify-liquid",
		"davidanson.vscode-markdownlint",
		"bierner.markdown-preview-github-styles",
		"streetsidesoftware.code-spell-checker",
		"alistairchristie.open-reusables"
	],

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	"forwardPorts": [4000],

	"portsAttributes": {
		"4000": {
        		"label": "Preview",
        		"onAutoForward": "openPreview"
      		}
	},

	// Use 'postCreateCommand' to run commands after the container is created.
	"postCreateCommand": "npm ci",

	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "node"
,
	"hostRequirements": {
		"memory": "8gb"
	 }
}
Name :Build and Deploy :
title :'Run'' 
'-'' #'Test'@'.'Travis::
:ci :
BEGIN'
GLOW4'
checkout ':'#'Checks'-out ':via '::'#'Coommand.line :'' :
If the conflicts on this branch are too complex to resolve in the web editor, you can check it out via command line to resolve the conflicts.
https://github.com/mowjoejoejoejoe/WORKSFLOW.git
Step 1: Clone the repository or update your local repository with the latest changes.
git pull origin main
Step 2: Switch to the head branch of the pull request.
git checkout Master
Step 3: Merge the base branch into the head branch.
git merge main
Step 4: Fix the conflicts and commit the result.
See Resolving a merge conflict using the command line for step-by-step instructions on resolving merge conflicts.
Step 5: Push the changes.
git push -u origin Master
"dockerfile"::':Build::Publish ::
 78  
.github/workflows/main-preview-docker-cache.yml
@@ -1,78 +0,0 @@
name: Build and Push Main Preview Env Docker Cache

# **What it does**: Builds and pushes the `main` Docker cache image
# **Why we have it**: It allows PRs using the registry cache to pull a pre-built image, which should speed up the build
# **Who does it impact**: All contributors.

on:
  push:
    branches:
      - main

permissions:
  contents: read

# This allows a subsequently queued workflow run to take priority over
# previously queued runs and interrupt currently executing runs
concurrency:
  group: '${{ github.workflow }}'
  cancel-in-progress: true

jobs:
  build-and-push-nonprod-cache:
    if: ${{ github.repository == 'github/docs-internal' || github.repository == 'github/docs' }}
    runs-on: ubuntu-latest
    timeout-minutes: 15
    env:
      ENABLE_EARLY_ACCESS: ${{ github.repository == 'github/docs-internal' }}
      DOCKER_IMAGE_CACHE_REF: ${{ secrets.NONPROD_REGISTRY_SERVER }}/${{ github.repository }}:main-preview
      NONPROD_REGISTRY_USERNAME: ${{ fromJSON('["ghdocs", "ghdocsinternal"]')[github.repository == 'github/docs-internal'] }}

    steps:
      - name: 'Az CLI login'
        uses: azure/login@1f63701bf3e6892515f1b7ce2d2bf1708b46beaf
        with:
          creds: ${{ secrets.NONPROD_AZURE_CREDENTIALS }}

      - name: 'Docker login'
        uses: azure/docker-login@83efeb77770c98b620c73055fbb59b2847e17dc0
        with:
          login-server: ${{ secrets.NONPROD_REGISTRY_SERVER }}
          username: ${{ env.NONPROD_REGISTRY_USERNAME }}
          password: ${{ secrets.NONPROD_REGISTRY_PASSWORD }}

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@95cb08cb2672c73d4ffd2f422e6d11953d2a9c70

      - name: Check out repo
        uses: actions/checkout@93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8
        with:
          # To prevent issues with cloning early access content later
          persist-credentials: 'false'

      - if: ${{ env.ENABLE_EARLY_ACCESS }}
        name: Clone docs-early-access
        uses: actions/checkout@93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8
        with:
          repository: github/docs-early-access
          token: ${{ secrets.DOCUBOT_REPO_PAT }}
          path: docs-early-access
          ref: main

      - if: ${{ env.ENABLE_EARLY_ACCESS }}
        name: Merge docs-early-access repo's folders
        run: .github/actions-scripts/merge-early-access.sh

      # In addition to making the final image smaller, we also save time by not sending unnecessary files to the docker build context
      - name: 'Prune for preview env'
        run: .github/actions-scripts/prune-for-preview-env.sh

      - name: 'Build and push image'
        uses: docker/build-push-action@1cb9d22b932e4832bb29793b7777ec860fc1cde0
        with:
          context: .
          push: true
          target: preview
          tags: ${{ env.DOCKER_IMAGE_CACHE_REF }}
          cache-from: type=registry,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
          cache-to: type=registry,mode=max,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
 411  
.github/workflows/runners.ixios
@@ -0,0 +1,411 @@
Name: Build and Deployee :Push 
Pushs :branches
branches :-'[Main'] 
## Preview 
# Env :.dockerfile/dev/containers.u/runners.ixios :
  push:
    branches:
      - main
permissions:
  contents: read
# This allows a subsequently queued workflow run to take priority over
# previously queued runs and interrupt currently executing runs
concurrency:
  group: '${{ github.workflow }}'
  cancel-in-progress: true
jobs:
  build-and-push-nonprod-cache:
    if: ${{ github.repository == 'github/docs-internal' || github.repository == 'github/docs' }}
    runs-on: ubuntu-latest
    timeout-minutes: 15
    env:
      ENABLE_EARLY_ACCESS: ${{ github.repository == 'github/docs-internal' }}
      DOCKER_IMAGE_CACHE_REF: ${{ secrets.NONPROD_REGISTRY_SERVER }}/${{ github.repository }}:main-preview
      NONPROD_REGISTRY_USERNAME: ${{ fromJSON('["ghdocs", "ghdocsinternal"]')[github.repository == 'github/docs-internal'] }}
    steps:
      - name: 'Az CLI login'
        uses: azure/login@1f63701bf3e6892515f1b7ce2d2bf1708b46beaf
        with:
          creds: ${{ secrets.NONPROD_AZURE_CREDENTIALS }}
      - name: 'Docker login'
        uses: azure/docker-login@83efeb77770c98b620c73055fbb59b2847e17dc0
        with:
          login-server: ${{ secrets.NONPROD_REGISTRY_SERVER }}
          username: ${{ env.NONPROD_REGISTRY_USERNAME }}
          password: ${{ secrets.NONPROD_REGISTRY_PASSWORD }}
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@95cb08cb2672c73d4ffd2f422e6d11953d2a9c70
      - name: Check out repo
        uses: actions/checkout@93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8
        with:
          # To prevent issues with cloning early access content later
          persist-credentials: 'false'
      - if: ${{ env.ENABLE_EARLY_ACCESS }}
        name: Clone docs-early-access
        uses: actions/checkout@93ea575cb5d8a053eaa0ac8fa3b40d7e05a33cc8
        with:
          repository: github/docs-early-access
          token: ${{ secrets.DOCUBOT_REPO_PAT }}
          path: docs-early-access
          ref: main
      - if: ${{ env.ENABLE_EARLY_ACCESS }}
        name: Merge docs-early-access repo's folders
        run: .github/actions-scripts/merge-early-access.sh
      # In addition to making the final image smaller, we also save time by not sending unnecessary files to the docker build context
      - name: 'Prune for preview env'
        run: .github/actions-scripts/prune-for-preview-env.sh
      - name: 'Build and push image'
        uses: docker/build-push-action@1cb9d22b932e4832bb29793b7777ec860fc1cde0
        with:
          context: .
          push: true
          target: preview
          tags: ${{ env.DOCKER_IMAGE_CACHE_REF }}
          cache-from: type=registry,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
          cache-to: type=registry,mode=max,ref=${{ env.DOCKER_IMAGE_CACHE_REF }}
Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore

@mowjoejoejoejoe 
bill-ash
/
django-quickbooks
Public
forked from weltlink/django-quickbooks
Fork your own copy of bill-ash/django-quickbooks
Code
Pull requests
Actions
Projects
Security
Insights
Comparing changes
Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .


...


  Able to merge. These branches can be automatically merged.
Discuss and review the changes in this comparison with others. Learn about pull requests
 2 commits
 2 files changed
 1 contributor
Commits on Feb 2, 2023
Update invoice_query_request.xml (weltlink#1)

@mowjoejoejoejoe
mowjoejoejoejoe committed 4 minutes ago

Update CHANGELOG.md

@mowjoejoejoejoe
mowjoejoejoejoe committed 2 minutes ago

Showing  with 163 additions and 0 deletions.
 82  
CHANGELOG.md
@@ -1,3 +1,85 @@
<?xml version="1.0" encoding="utf-8"?>
<?qbxml version="13.0"?>
<QBXML>
    <QBXMLMsgsRq onError="stopOnError">
        <InvoiceQueryRq metaData="ENUMTYPE" iterator="ENUMTYPE" iteratorID="UUIDTYPE">
            <!-- BEGIN OR -->
            <TxnID>IDTYPE</TxnID> <!-- optional, may repeat -->
            <!-- OR -->
            <RefNumber>STRTYPE</RefNumber> <!-- optional, may repeat -->
            <!-- OR -->
            <RefNumberCaseSensitive>STRTYPE</RefNumberCaseSensitive> <!-- optional, may repeat -->
            <!-- OR -->
            <MaxReturned>INTTYPE</MaxReturned> <!-- optional -->
            <!-- BEGIN OR -->
            <ModifiedDateRangeFilter> <!-- optional -->
                <FromModifiedDate>DATETIMETYPE</FromModifiedDate> <!-- optional -->
                <ToModifiedDate>DATETIMETYPE</ToModifiedDate> <!-- optional -->
            </ModifiedDateRangeFilter>
            <!-- OR -->
            <TxnDateRangeFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <FromTxnDate>DATETYPE</FromTxnDate> <!-- optional -->
                <ToTxnDate>DATETYPE</ToTxnDate> <!-- optional -->
                <!-- OR -->
                <!-- flake's'@'V8/nazt-remix/ignition-initiate.yml may have one of the following values: All, Today, ThisWeek, ThisWeekToDate, ThisMonth, ThisMonthToDate, ThisCalendarQuarter, ThisCalendarQuarterToDate, ThisFiscalQuarter, ThisFiscalQuarterToDate, ThisCalendarYear, ThisCalendarYearToDate, ThisFiscalYear, ThisFiscalYearToDate, Yesterday, LastWeek, LastWeekToDate, LastMonth, LastMonthToDate, LastCalendarQuarter, LastCalendarQuarterToDate, LastFiscalQuarter, LastFiscalQuarterToDate, LastCalendarYear, LastCalendarYearToDate, LastFiscalYear, LastFiscalYearToDate, NextWeek, NextFourWeeks, NextMonth, NextCalendarQuarter, NextCalendarYear, NextFiscalQuarter, NextFiscalYear -->
                <DateMacro>ENUMTYPE</DateMacro> <!-- optional -->
                <!-- END OR -->
            </TxnDateRangeFilter>
            <!-- END OR -->
            <EntityFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- OR -->
                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
                <!-- OR -->
                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
                <!-- END OR -->
            </EntityFilter>
            <AccountFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- OR -->
                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
                <!-- OR -->
                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
                <!-- END OR -->
            </AccountFilter>
            <!-- BEGIN OR -->
            <RefNumberFilter> <!-- optional -->
                <!-- MatchCriterion may have one of the following values: StartsWith, Contains, EndsWith -->
                <MatchCriterion>ENUMTYPE</MatchCriterion> <!-- required -->
                <RefNumber>STRTYPE</RefNumber> <!-- required -->
            </RefNumberFilter>
            <!-- OR -->
            <RefNumberRangeFilter> <!-- optional -->
                <FromRefNumber>STRTYPE</FromRefNumber> <!-- optional -->
                <ToRefNumber>STRTYPE</ToRefNumber> <!-- optional -->
            </RefNumberRangeFilter>
            <!-- END OR -->
            <CurrencyFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- END OR -->
            </CurrencyFilter>
            <!-- PaidStatus may have one of the following values: All [DEFAULT], PaidOnly, NotPaidOnly -->
            <PaidStatus>ENUMTYPE</PaidStatus> <!-- optional -->
            <!-- END OR -->
            <IncludeLineItems>BOOLTYPE</IncludeLineItems> <!-- optional -->
            <IncludeLinkedTxns>BOOLTYPE</IncludeLinkedTxns> <!-- optional -->
            <IncludeRetElement>STRTYPE</IncludeRetElement> <!-- optional, may repeat -->
            <OwnerID>GUIDTYPE</OwnerID> <!-- optional, may repeat -->
        </InvoiceQueryRq>
    </QBXMLMsgsRq>
</QBXML>


# Changelog

All notable changes to this project will be documented in this file.
## [NO_RELEASE]
Sorry to say that, but from this release no backward compatibility is kept with previous ones as I had to change 
lots of concepts in the project
 ### CHANGED
 - `QueueManager` instance has been changed from inherited model to composite model for `SessionManager`
 - `RabbitMQManager` (`QueueManager`) is being *deprecated* now as I could not implement it in the right way
 and it keeps being disconnected from the broker which could be a huge problem for big projects
 - `RedisManager` (`QueueManager`) is added to compensate deprecation of RabbitMQManager
 - Added named queue prefixes to differentiate queues (e.g. **iterating realm_session requests**, **realm requests**)
 - Added customization for `QueueManager` without changing `SessionManager` (changing `QUEUE_MANAGER_CLASS` in settings)


## [0.6.4.2] - 2020-03-09
### FIXED
- Fix logger handling to django default
- Fix is_list method of validators
- Fix validate method of SchemeValidator when many option is enabled
## [0.6.4.1] - 2020-03-06
### FIXED
- Fix local_customer filtering by name
- Fix setting tenant to conection instead of schema_name
- Fix default REALM_CONNECTION_DECORATOR
- Fix installation requirements of extra tenant package
## [0.6.4] - 2020-02-26
### ADDED
- Add converter from qbd_mixin_model to qbd_task
- Add signal to handle post_process after realm is authenticated successfully
## [0.6.3] - 2020-02-14
### ADDED
- Add Exception coverage for QBTask request conversion
- Add several exceptions
## FIXED
- Fix argument parameter of method CustomerAddResponseProcessor.process()  
## [0.6.0] - 2020-02-12
### ADDED
- Add ValidationError handling
- Add basic decorators for realm connection
- Add realm_connection decorator to ResponseProcessor and SessionManager
- Add initial documentation structure
### CHANGED
- All Signal `schema_name` arguments were changed to `realm_id` (after removing *django-tenant-schemas*)
### REMOVED
- Remove *django-tenant-schemas* dependency from project (make it as optional)
[0.6.0]: https://github.com/weltlink/django-quickbooks/compare/0.5...0.6
[0.6.3]: https://github.com/weltlink/django-quickbooks/compare/0.6...0.6.3
[0.6.4]: https://github.com/weltlink/django-quickbooks/compare/0.6.3...0.6.4
[0.6.4.1]: https://github.com/weltlink/django-quickbooks/compare/0.6.4...0.6.4.1
[0.6.4.2]: https://github.com/weltlink/django-quickbooks/compare/0.6.4.1...0.6.4.2
[NO_RELEASE]: https://github.com/weltlink/django-quickbooks/compare/0.6.4.2...master
  81  
django_quickbooks/data/invoice_query_request.xml
<?xml version="1.0" encoding="utf-8"?>
<?qbxml version="13.0"?>
<QBXML>
    <QBXMLMsgsRq onError="stopOnError">
        <InvoiceQueryRq metaData="ENUMTYPE" iterator="ENUMTYPE" iteratorID="UUIDTYPE">
            <!-- BEGIN OR -->
            <TxnID>IDTYPE</TxnID> <!-- optional, may repeat -->
            <!-- OR -->
            <RefNumber>STRTYPE</RefNumber> <!-- optional, may repeat -->
            <!-- OR -->
            <RefNumberCaseSensitive>STRTYPE</RefNumberCaseSensitive> <!-- optional, may repeat -->
            <!-- OR -->
            <MaxReturned>INTTYPE</MaxReturned> <!-- optional -->
            <!-- BEGIN OR -->
            <ModifiedDateRangeFilter> <!-- optional -->
                <FromModifiedDate>DATETIMETYPE</FromModifiedDate> <!-- optional -->
                <ToModifiedDate>DATETIMETYPE</ToModifiedDate> <!-- optional -->
            </ModifiedDateRangeFilter>
            <!-- OR -->
            <TxnDateRangeFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <FromTxnDate>DATETYPE</FromTxnDate> <!-- optional -->
                <ToTxnDate>DATETYPE</ToTxnDate> <!-- optional -->
                <!-- OR -->
                <!-- DateMacro may have one of the following values: All, Today, ThisWeek, ThisWeekToDate, ThisMonth, ThisMonthToDate, ThisCalendarQuarter, ThisCalendarQuarterToDate, ThisFiscalQuarter, ThisFiscalQuarterToDate, ThisCalendarYear, ThisCalendarYearToDate, ThisFiscalYear, ThisFiscalYearToDate, Yesterday, LastWeek, LastWeekToDate, LastMonth, LastMonthToDate, LastCalendarQuarter, LastCalendarQuarterToDate, LastFiscalQuarter, LastFiscalQuarterToDate, LastCalendarYear, LastCalendarYearToDate, LastFiscalYear, LastFiscalYearToDate, NextWeek, NextFourWeeks, NextMonth, NextCalendarQuarter, NextCalendarYear, NextFiscalQuarter, NextFiscalYear -->
                <DateMacro>ENUMTYPE</DateMacro> <!-- optional -->
                <!-- END OR -->
            </TxnDateRangeFilter>
            <!-- END OR -->
            <EntityFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- OR -->
                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
                <!-- OR -->
                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
                <!-- END OR -->
            </EntityFilter>
            <AccountFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- OR -->
                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
                <!-- OR -->
                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
                <!-- END OR -->
            </AccountFilter>
            <!-- BEGIN OR -->
            <RefNumberFilter> <!-- optional -->
                <!-- MatchCriterion may have one of the following values: StartsWith, Contains, EndsWith -->
                <MatchCriterion>ENUMTYPE</MatchCriterion> <!-- required -->
                <RefNumber>STRTYPE</RefNumber> <!-- required -->
            </RefNumberFilter>
            <!-- OR -->
            <RefNumberRangeFilter> <!-- optional -->
                <FromRefNumber>STRTYPE</FromRefNumber> <!-- optional -->
                <ToRefNumber>STRTYPE</ToRefNumber> <!-- optional -->
            </RefNumberRangeFilter>
            <!-- END OR -->
            <CurrencyFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- END OR -->
            </CurrencyFilter>
            <!-- PaidStatus may have one of the following values: All [DEFAULT], PaidOnly, NotPaidOnly -->
            <PaidStatus>ENUMTYPE</PaidStatus> <!-- optional -->
            <!-- END OR -->
            <IncludeLineItems>BOOLTYPE</IncludeLineItems> <!-- optional -->
            <IncludeLinkedTxns>BOOLTYPE</IncludeLinkedTxns> <!-- optional -->
            <IncludeRetElement>STRTYPE</IncludeRetElement> <!-- optional, may repeat -->
            <OwnerID>GUIDTYPE</OwnerID> <!-- optional, may repeat -->
        </InvoiceQueryRq>
    </QBXMLMsgsRq>
</QBXML>
PARADICE CONSTRUCTION
<?xml version="1.0" encoding="utf-8"?>
<?qbxml version="13.0"?>
<QBXML>
    <QBXMLMsgsRq onError="stopOnError">
        <InvoiceQueryRq metaData="ENUMTYPE" iterator="ENUMTYPE" iteratorID="UUIDTYPE">
            <!-- BEGIN OR -->
            <TxnID>IDTYPE</TxnID> <!-- optional, may repeat -->
            <!-- OR -->
            <RefNumber>STRTYPE</RefNumber> <!-- optional, may repeat -->
            <!-- OR -->
            <RefNumberCaseSensitive>STRTYPE</RefNumberCaseSensitive> <!-- optional, may repeat -->
            <!-- OR -->
            <MaxReturned>INTTYPE</MaxReturned> <!-- optional -->
            <!-- BEGIN OR -->
            <ModifiedDateRangeFilter> <!-- optional -->
                <FromModifiedDate>DATETIMETYPE</FromModifiedDate> <!-- optional -->
                <ToModifiedDate>DATETIMETYPE</ToModifiedDate> <!-- optional -->
            </ModifiedDateRangeFilter>
            <!-- OR -->
            <TxnDateRangeFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <FromTxnDate>DATETYPE</FromTxnDate> <!-- optional -->
                <ToTxnDate>DATETYPE</ToTxnDate> <!-- optional -->
                <!-- OR -->
                <!-- DateMacro may have one of the following values: All, Today, ThisWeek, ThisWeekToDate, ThisMonth, ThisMonthToDate, ThisCalendarQuarter, ThisCalendarQuarterToDate, ThisFiscalQuarter, ThisFiscalQuarterToDate, ThisCalendarYear, ThisCalendarYearToDate, ThisFiscalYear, ThisFiscalYearToDate, Yesterday, LastWeek, LastWeekToDate, LastMonth, LastMonthToDate, LastCalendarQuarter, LastCalendarQuarterToDate, LastFiscalQuarter, LastFiscalQuarterToDate, LastCalendarYear, LastCalendarYearToDate, LastFiscalYear, LastFiscalYearToDate, NextWeek, NextFourWeeks, NextMonth, NextCalendarQuarter, NextCalendarYear, NextFiscalQuarter, NextFiscalYear -->
                <DateMacro>ENUMTYPE</DateMacro> <!-- optional -->
                <!-- END OR -->
            </TxnDateRangeFilter>
            <!-- END OR -->
            <EntityFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- OR -->
                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
                <!-- OR -->
                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
                <!-- END OR -->
            </EntityFilter>
            <AccountFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- OR -->
                <ListIDWithChildren>IDTYPE</ListIDWithChildren> <!-- optional -->
                <!-- OR -->
                <FullNameWithChildren>STRTYPE</FullNameWithChildren> <!-- optional -->
                <!-- END OR -->
            </AccountFilter>
            <!-- BEGIN OR -->
            <RefNumberFilter> <!-- optional -->
                <!-- MatchCriterion may have one of the following values: StartsWith, Contains, EndsWith -->
                <MatchCriterion>ENUMTYPE</MatchCriterion> <!-- required -->
                <RefNumber>STRTYPE</RefNumber> <!-- required -->
            </RefNumberFilter>
            <!-- OR -->
            <RefNumberRangeFilter> <!-- optional -->
                <FromRefNumber>STRTYPE</FromRefNumber> <!-- optional -->
                <ToRefNumber>STRTYPE</ToRefNumber> <!-- optional -->
            </RefNumberRangeFilter>
            <!-- END OR -->
            <CurrencyFilter> <!-- optional -->
                <!-- BEGIN OR -->
                <ListID>IDTYPE</ListID> <!-- optional, may repeat -->
                <!-- OR -->
                <FullName>STRTYPE</FullName> <!-- optional, may repeat -->
                <!-- END OR -->
            </CurrencyFilter>
            <!-- PaidStatus may have one of the following values: All [DEFAULT], PaidOnly, NotPaidOnly -->
            <PaidStatus>ENUMTYPE</PaidStatus> <!-- optional -->
            <!-- END OR -->
            <IncludeLineItems>BOOLTYPE</IncludeLineItems> <!-- optional -->
            <IncludeLinkedTxns>BOOLTYPE</IncludeLinkedTxns> <!-- optional -->
            <IncludeRetElement>STRTYPE</IncludeRetElement> <!-- optional, may repeat -->
            <OwnerID>GUIDTYPE</OwnerID> <!-- optional, may repeat -->
        </InvoiceQueryRq>
    </QBXMLMsgsRq>
</QBXML>
Comparing bill-ash:master...mowjoejoejoejoe:master · bill-ash/django-quickbooks
 26  
Automate.yml
@@ -0,0 +1,26 @@
# :## :BEGIN ::AUTOMATE
::AUTOMATE :Automate.yml
# [Optional] comment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"
# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
# Install the GitHub ci/CI.yml :
+ BEGIN:
+ GLOW4:
+ </git checkout origin/main <file name>
+Run'' 'Runs::/Action::/:Build::/scripts::/Run-on :Runs :
+Runs :gh/pages :
+pages :edit "
+$ intuit install 
+PURL" --add-label "production"
+env:
+PR_URL: ${{github.event.pull_request.html_url}}
+GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
+run: gh pr edit "$PR_URL" --add-label "production"
+env:
+PR_URL: ${{github.event.pull_request.html_url}}
+GITHUB_TOKEN: ${{ ((c)(r)).[12753750.[00]m]BITORE_34173'.1337) ')]}}}'"'' :
+ </git checkout origin/main <file name>
 39  
.github/workflows/no-response.yaml → ...onses.md/Responses.md/README.md/README.md
@@ -1,23 +1,34 @@
name: No Response

Name :Build and Deploy :
build-and-deploy :title :
title :README.md :
# **What it does**: Closes issues that don't have enough information to be
#                   actionable.
# **Why we have it**: To remove the need for maintainers to remember to check
#                     back on issues periodically to see if contributors have
#                     responded.
# **Who does it impact**: Everyone that works on docs or docs-internal.

on:
  issue_comment:
    types: [created]

  schedule:
    - cron: '20 * * * *' # Run each hour at 20 minutes past

permissions:
  issues: write

jobs:
starts-on:'::-on :
-on :Request:
Request #kind 
#kind :'Kite.i :
'Kite.i :type
types: [created]
schedule :Update
Updates :autoupdate
autoupdates :Automate
Automates :tta
tta :#Every -3 sec :
#Every -3 sec :daily
daily :true.
true. :permission
permissions :config 
config.prettier-write:rake.i/'Kite.u :
'Kite.u :sets'-up
sets'-up :rb.qm 
rb.qm :starts
starts-on :GLOW4
GLOW4 :'require','' '.'Docx'
:Build::
  noResponse:
    runs-on: ubuntu-latest
    if: github.repository == 'github/docs-internal' || github.repository == 'github/docs'
    steps:
      - uses: lee-dohm/no-response@9bb0a4b5e6a45046f00353d5de7d90fb8bd773bb
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          closeComment: >
            This issue has been automatically closed because there has been no response
            to our request for more information from the original author. With only the
            information that is currently in the issue, we don't have enough information
            to take action. Please reach out if you have or find the answers we need so
            that we can investigate further. See [this blog post on bug reports and the
            importance of repro steps](https://www.lee-dohm.com/2015/01/04/writing-good-bug-reports/)
            for more information about the kind of information that may be helpful.
  2  
.vscode/launch.json → ZachryTylerWood
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Node: Nodemon",
      "processId": "${command:PickProcess}",
      "restart": true,
      "protocol": "inspector",
    },
  ]
}
}title: Creating your first repository using GitHub Desktop
shortTitle: Creating your first repository
intro: 'You can use {% data variables.product.prodname_desktop %} to create and manage a Git repository without using the command line.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  fpt: '*'
---
## Introduction
{% data variables.product.prodname_desktop %} extends and simplifies your {% data variables.product.prodname_dotcom_the_website %} workflow, using a visual interface instead of text commands on the command line. By the end of this guide, you'll have used {% data variables.product.prodname_desktop %} to create a repository, make changes to the repository, and publish the changes to {% data variables.product.product_name %}.

After installing {% data variables.product.prodname_desktop %} and signing into {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %} you can create and clone a tutorial repository. The tutorial will introduce the basics of working with Git and {% data variables.product.prodname_dotcom %}, including installing a text editor, creating a branch, making a commit, pushing to {% data variables.product.prodname_dotcom_the_website %}, and opening a pull request. The tutorial is available if you do not have any repositories on {% data variables.product.prodname_desktop %} yet.

We recommend completing the tutorial, but if you want to explore {% data variables.product.prodname_desktop %} by creating a new repository, this guide will walk you through using {% data variables.product.prodname_desktop %} to work on a Git repository.

## Part 1: Installing {% data variables.product.prodname_desktop %} and authenticating your account
You can install {% data variables.product.prodname_desktop %} on any supported operating system. After you install the app, you will need to sign in and authenticate your account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %} before you can create and clone a tutorial repository.

For more information on installing and authenticating, see "[Setting up {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)."

## Part 2: Creating a new repository
If you do not have any repositories associated with {% data variables.product.prodname_desktop %}, you will see a "Let's get started!" view, where you can choose to create and clone a tutorial repository, clone an existing repository from the Internet, create a new repository, or add an existing repository from your hard drive.
  ![The Let's get started! screen](/assets/images/help/desktop/lets-get-started.png)

### Creating and cloning a tutorial repository
We recommend that you create and clone a tutorial repository as your first project to practice using {% data variables.product.prodname_desktop %}.

1. Click **Create a tutorial repository and clone it**.
  ![Create and clone a tutorial repository button](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Follow the prompts in the tutorial to install a text editor, create a branch, edit a file, make a commit, publish to {% data variables.product.prodname_dotcom %}, and open a pull request.

### Creating a new repository
If you do not wish to create and clone a tutorial repository, you can create a new repository.

1. Click **Create a New Repository on your Hard Drive...**.
  ![Create a new repository](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Fill in the fields and select your preferred options.
  ![Create a repository options](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - "Name" defines the name of your repository both locally and on {% data variables.product.product_name %}.
   - "Description" is an optional field that you can use to provide more information about the purpose of your repository.
   - "Local path" sets the location of your repository on your computer. By default, {% data variables.product.prodname_desktop %} creates a _GitHub_ folder inside your _Documents_ folder to store your repositories, but you can choose any location on your computer. Your new repository will be a folder inside the chosen location. For example, if you name your repository `Tutorial`, a folder named _Tutorial_ is created inside the folder you selected for your local path. {% data variables.product.prodname_desktop %} remembers your chosen location the next time you create or clone a new repository.
   - **Initialize this repository with a README** creates an initial commit with a _README.md_ file. READMEs helps people understand the purpose of your project, so we recommend selecting this and filling it out with helpful information. When someone visits your repository on {% data variables.product.product_name %}, the README is the first thing they'll see as they learn about your project. For more information, see "[About READMEs](/articles/about-readmes)."
   - The **Git ignore** drop-down menu lets you add a custom file to ignore specific files in your local repository that you don't want to store in version control. If there's a specific language or framework that you'll be using, you can select an option from the available list. If you're just getting started, feel free to skip this selection. For more information, see "[Ignoring files](/github/getting-started-with-github/ignoring-files)."
   - The **License** drop-down menu lets you add an open-source license to a _LICENSE_ file in your repository. You don't need to worry about adding a license right away. For more information about available open-source licenses and how to add them to your repository, see "[Licensing a repository](/articles/licensing-a-repository)."
3. Click **Create repository**.

## Part 3: Exploring {% data variables.product.prodname_desktop %}
In the file menu at the top of the screen, you can access settings and actions that you can perform in {% data variables.product.prodname_desktop %}. Most actions also have keyboard shortcuts to help you work more efficiently. For a full list of keyboard shortcuts, see "[Keyboard shortcuts](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)."

### The {% data variables.product.prodname_desktop %} menu bar
At the top of the {% data variables.product.prodname_desktop %} app, you will see a bar that shows the current state of your repository.
  - **Current repository** shows the name of the repository you're working on. You can click **Current repository** to switch to a different repository in {% data variables.product.prodname_desktop %}.
  - **Current branch** shows the name of the branch you're working on. You can click **Current branch** to view all the branches in your repository, switch to a different branch, or create a new branch. Once you create pull requests in your repository, you can also view these by clicking on **Current branch**.
  - **Publish repository** appears because you haven't published your repository to {% data variables.product.product_name %} yet, which you'll do later in the next step. This section of the bar will change based on the status of your current branch and repository. Different context dependent actions will be available that let you exchange data between your local and remote repositories.

  ![Explore GitHub Desktop](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

### Changes and History
In the left sidebar, you'll find the **Changes** and **History** views.
  ![The Changes and History tabs](/assets/images/help/desktop/changes-and-history.png)

  - The **Changes** view shows changes you've made to files in your current branch but haven't committed to your local repository. At the bottom, there is a box with "Summary" and "Description" text boxes and a **Commit to BRANCH** button. This is where you'll commit new changes. The **Commit to BRANCH** button is dynamic and will display which branch you're committing your changes to.
  ![Commit area](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - The **History** view shows the previous commits on the current branch of your repository. You should see an "Initial commit" that was created by {% data variables.product.prodname_desktop %} when you created your repository. To the right of the commit, depending on the options you selected while creating your repository, you may see _.gitattributes_, _.gitignore_, _LICENSE_, or _README_ files. You can click each file to see a diff for that file, which is the changes made to the file in that commit. The diff only shows the parts of the file that have changed, not the entire contents of the file.
  ![History view](/assets/images/help/desktop/getting-started-guide/history-view.png)

## Part 4: Publishing your repository to {% data variables.product.product_name %}
When you create a new repository, it only exists on your computer and you are the only one who can access the repository. You can publish your repository to {% data variables.product.product_name %} to keep it synchronized across multiple computers and allow other people to access it. To publish your repository, push your local changes to {% data variables.product.product_name %}.

1. Click **Publish repository** in the menu bar.
    ![Publish repository](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} automatically fills the "Name" and "Description" fields with the information you entered when you created the repository.
    - **Keep this code private** lets you control who can view your project. If you leave this option unselected, other users on {% data variables.product.product_name %} will be able to view your code. If you select this option, your code will not be publicly available.
    - The **Organization** drop-down menu, if present, lets you publish your repository to a specific organization that you belong to on {% data variables.product.product_name %}.

    ![Publish repository steps](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. Click the **Publish Repository** button.
  3. You can access the repository on {% data variables.product.prodname_dotcom_the_website %} from within {% data variables.product.prodname_desktop %}. In the file menu, click **Repository**, then click **View on GitHub**. This will take you directly to the repository in your default browser.

## Part 5: Making, committing, and pushing changes
Now that you've created and published your repository, you're ready to make changes to your project and start crafting your first commit to your repository.

1. To launch your external editor from within {% data variables.product.prodname_desktop %}, click **Repository**, then click **Open in <em>EDITOR</em>**. For more information, see "[Configuring a default editor](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)."
  ![Open in editor](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Make some changes to the _README.md_ file that you previously created. You can add information that describes your project, like what it does and why it is useful. When you are satisfied with your changes, save them in your text editor.
3. In {% data variables.product.prodname_desktop %}, navigate to the **Changes** view. In the file list, you should see your _README.md_. The checkmark to the left of the _README.md_ file indicates that the changes you've made to the file will be part of the commit you make. In the future, you might make changes to multiple files but only want to commit the changes you've made to some of the files. If you click the checkmark next to a file, that file will not be included in the commit.
  ![Viewing changes](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. At the bottom of the **Changes** list, enter a commit message. To the right of your profile picture, type a short description of the commit. Since we're changing the _README.md_ file, "Add information about purpose of project" would be a good commit summary. Below the summary, you'll see a "Description" text field where you can type a longer description of the changes in the commit, which is helpful when looking back at the history of a project and understanding why changes were made. Since you're making a basic update of a _README.md_ file, you can skip the description.
  ![Commit message](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Click **Commit to BRANCH NAME**. The commit button shows your current branch so you can be sure to commit to the branch you want.
  ![Commit to branch](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. To push your changes to the remote repository on {% data variables.product.product_name %}, click **Push origin**.
  ![Push origin](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - The **Push origin** button is the same one that you clicked to publish your repository to {% data variables.product.product_name %}. This button changes contextually based on where you are at in the Git workflow. It should now say `Push origin` with a `1` next to it, indicating that there is one commit that has not been pushed up to {% data variables.product.product_name %}.
  - The "origin" in **Push origin** means that you are pushing changes to the remote called `origin`, which in this case is your project's repository on {% data variables.product.prodname_dotcom_the_website %}. Until you push any new commits to {% data variables.product.product_name %}, there will be differences between your project's repository on your computer and your project's repository on {% data variables.product.prodname_dotcom_the_website %}. This allows you to work locally and only push your changes to {% data variables.product.prodname_dotcom_the_website %} when you're ready.
7. In the window to the right of the **Changes** view, you'll see suggestions for actions you can do next. To open the repository on {% data variables.product.product_name %} in your browser, click **View on {% data variables.product.product_name %}**.
  ![Available actions](/assets/images/help/desktop/available-actions.png)
8. In your browser, click **2 commits**. You'll see a list of the commits in this repository on {% data variables.product.product_name %}. The first commit should be the commit you just made in {% data variables.product.prodname_desktop %}.
  ![Click two commits](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

## Conclusion
You've now created a repository, published the repository to {% data variables.product.product_name %}, made a commit, and pushed your changes to {% data variables.product.product_name %}. You can follow this same workflow when contributing to other projects that you create or collaborate on.

## Further reading
- "[Getting started with Git](/github/getting-started-with-github/getting-started-with-git)"
- "[Learning about {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"
