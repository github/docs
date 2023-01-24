From 08de05cc0ce9f9d5775d54b1db23e0d29bd8a5f3 Mon Sep 17 00:00:00 2001
From: "dependabot[bot]" <49699333+dependabot[bot]@users.noreply.github.com>
Date: Thu, 17 Nov 2022 06:04:09 +0000
Subject: [PATCH] Bump node from 16.18.0-alpine to 19.1.0-alpine

Bumps node from 16.18.0-alpine to 19.1.0-alpine.

---
updated-dependencies:
- dependency-name: node
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] <support@github.com>
---
 Dockerfile                   | 2 +-
 Dockerfile.openapi_decorator | 2 +-
 2 files changed, 2 insertions(+), 2 deletions(-)

diff --git a/Dockerfile b/Dockerfile
index 8d08126b7a8..b97f01b49f4 100644
--- a/Dockerfile
+++ b/Dockerfile
@@ -3,7 +3,7 @@
 # --------------------------------------------------------------------------------
 # BASE IMAGE
 # --------------------------------------------------------------------------------
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
 
 # --------------------------------------------------------------------------------
 # BASE IMAGE
 # --------------------------------------------------------------------------------
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
