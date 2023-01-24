 # BASE IMAGE
-FROM node:16.18.0-alpine@sha256:f16544bc93cf1a36d213c8e2efecf682e9f4df28429a629a37aaf38ecfc25cf4 as base
+FROM node:19.1.0-alpine@sha256:c59fb39150e4a7ae14dfd42d3f9874398c7941784b73049c2d274115f00d36c8 as base
 
 # This directory is owned by the node user
 ARG APP_HOME=/home/node/app
diff --git a/Dockerfile.openapi_decorator b/Dockerfile.openapi_decorator
index 6014681b41d..790a00ddbbf 100644
--- a/Dockerfile.openapi_decorator
+++ b/Dockerfile.openapi_decorator
@@ -1,4 +1,4 @@
-FROM node:14-alpine
+FROM node:19-alpine
 
 RUN apk add --no-cache git python make g++
 
title: About releases
intro: 'You can create a release to package software, along with release notes and links to binary files, for other people to use.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About releases

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
![An overview of releases](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
{% else %}
![An overview of releases](/assets/images/help/releases/releases-overview.png)
{% endif %}

Releases are deployable software iterations you can package and make available for a wider audience to download and use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[Viewing your repository's releases and tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)."

You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template. For more information, see "[Automatically generated release notes](/repositories/releasing-projects-on-github/automatically-generated-release-notes)."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.6 %}
When viewing the details for a release, the creation date for each release asset is shown next to the release asset.
{% endif %}

{% ifversion fpt or ghec %}
People with admin permissions to a repository can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

If a release fixes a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."

You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[Releases](/rest/reference/releases)."

{% ifversion fpt or ghec %}
## Storage and bandwidth quotas

 Each file included in a release must be under {% data variables.large_files.max_file_size %}. There is no limit on the total size of a release, nor bandwidth usage.

{% endif %}

on:
push:
branches: master
pull_request:
run-on: ubuntu-latest
steps:
- name: Set up Git repository
uses: actions/checkout@v3
- name: Set up Ruby
uses: ruby/setup-ruby@v1
with:
bundler-cache: true
- name: Set up Node
uses: actions/setup-node@v3
- name: Bootstrap
run: script/bootstrap
- name: Tests
run: script/test

charmap keyset = new
{ "new keymap Charset = Pro" }












on:
Runs-on🔛"
const: "token"''
token: "((c)(r))"''
'Value": "[VOLUME]'"''
'[VOLUME']": "[12753750.[00]mname: OpenAPI dev mode check # What it does: Checks that the files in lib/rest/static/decorated match# the files in lib/rest/static/dereferenced. Checks that the decorated# schemas in lib/rest/static/decorated are not in development mode.# Development mode schemas have a branch name and development mode tag in the# info.version property.# Why we have it: To ensure that we aren't every shipping decorated schemas# that are out of sync with the source derefereced schema. To ensure that# decorated schemas generated locally are not published. Locally generated# decorated schemas are pushing up to the remote for staging purposes only.# Who does it impact: Docs content writers updating REST API docs and# the docs engineering team as maintainers of the scripts and workflows. on: workflow_dispatch: push: branches: - main pull_request: paths: - 'lib/rest/static/' - 'script/rest//.js' - 'script/rest/**/.json' - 'package*.json' - 'lib/redirects/static/**/*.json' - '.github/workflows/openapi-schema-check.yml' permissions: contents: read # This allows a subsequently queued workflow run to interrupt previous runsconcurrency: group: '${{ github.workflow }} @ 
{{ github.repository == 'github/docs-internal' }} runs-on: ubuntu-20.04-xl steps: - name: Checkout repository code uses: actions/checkout@dcd71f6 - name: Setup node uses: actions/setup-node@17f8bd9 with: node-version: '16.15.0' cache: npm - name: Install dependencies run: npm ci # Differences between decorated and dereferenced files indicates a problem - name: Generate decorated files to check that there are no differences run: script/rest/update-files.js --decorate-only - name: Check if deref/decorated schemas are dev mode and that they match run: .github/actions-scripts/openapi-schema-branch.json:

Retrieving data. Wait a few seconds and try to cut or copy again.
Runs-on🔛
echo: hello 🌍!-🐛-fix#731,
"name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
BITORE_34173.1337_18893":,
Closes ISSUE
