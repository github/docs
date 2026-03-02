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
 
 # Data

This directory contains data files that are parsed and made available to pages in the `site.data` object.

All YML and Markdown files in this directory are configured to be translated by default.

## Features

Feature files are used for feature-based versioning. See [features/README.md](features/README.md).

## Glossaries

We provide a customer-facing glossary on the site. Other glossary files are used by our translation pipeline. See [glossaries/README.md](glossaries/README.md).

## GraphQL

GraphQL schema files are kept in sync with `github/github` via scheduled workflows. See [graphql/README.md](graphql/README.md).

## Reusables

Reusables are long strings of reusable text. See [reusables/README.md](reusables/README.md).

## Variables

Variables are short strings of reusable text. See [variables/README.md](variables/README.md).

## Webhooks

Webhook payload JSON files are used in the [`webhook events docs`](../content/developers/webhooks-and-events/webhook-events-and-payloads.md).

## ui.yml

`ui.yml` contains localized strings used in layouts.

## Learning Tracks

Learning tracks are a collection of articles that help you master a particular subject. See [learning-tracks/README.md](learning-tracks/README.md).

## Versioning

Many YAML files in this directory's subdirectories, like [features](features), [glossaries](glossaries), [variables](variables), and [learning tracks](learning-tracks), as well as Markdown files within the [reusables](reusables) directory, can include YAML versioning or Liquid versioning within Markdown strings. See the README.md files in the subdirectories for details.
