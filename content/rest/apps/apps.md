---
title: Apps
intro: 'The GitHub Apps API enables you to retrieve the information about the installation as well as specific information about GitHub Apps.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.apps.general-apps-restrictions %}

This page lists endpoints that you can access while authenticated as a GitHub App. See "[Authenticating as a GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" to learn more.

When authenticated as a GitHub App, the GitHub Apps API enables you to get high-level information about a GitHub App as well as specific information about installations of an app.

You can access REST API v3 endpoints while authenticated as a GitHub App. These endpoints have a "Notes" section that contains a bullet point that says "Works with GitHub Apps." You can also access these endpoints while authenticated as a user.

A subset of REST API v3 endpoints requires authenticating as a GitHub App installation. See [Installations](/rest/reference/apps#installations) for a list of these endpoints.
