---
title: 应用
intro: GitHub Apps API 使您能够检索有关安装的信息以及有关 GitHub 应用程序的特定信息。
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

本页列出了验证为 GitHub 应用程序后可访问的端点。 更多信息请参阅“[验证为 GitHub 应用程序](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)”。

验证为 GitHub 应用程序后，GitHub 应用程序 API 使您能够获取有关 GitHub 应用程序的高层次信息以及有关应用程序安装的特定信息。

验证为 GitHub 应用程序后，您可以访问 REST API v3 端点。 这些端点带有“备注”部分，即“与 GitHub 应用程序结合使用”。 验证为用户后也可以访问这些端点。

某些 REST API v3 端点需要验证为 GitHub 应用程序安装设施。 有关这些端点的列表，请参阅[安装设施](/rest/reference/apps#installations)。
