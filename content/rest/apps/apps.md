---
title: GitHub Apps
allowTitleToDifferFromFilename: true
intro: 'The {% data variables.product.prodname_github_apps %} API enables you to retrieve information about {% data variables.product.prodname_github_apps %}.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the {% data variables.product.prodname_github_apps %} API

{% data reusables.apps.general-apps-restrictions %}

This page lists endpoints that you can access while authenticated as a GitHub App. See "[Authenticating as a GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" to learn more.

When authenticated as a GitHub App, the GitHub Apps API enables you to get high-level information about a GitHub App as well as specific information about installations of an app.

You can access REST API endpoints while authenticated as a GitHub App. These endpoints have text that says "Works with GitHub Apps." You can also access these endpoints while authenticated as a user.

A subset of REST API endpoints requires authenticating as a GitHub App installation. See [Installations](/rest/reference/apps#installations) for a list of these endpoints.
