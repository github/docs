---
title: Generating an installation access token for a GitHub App
shortTitle: Generate an installation access token
intro: Learn how to generate an installation access token for your {% data variables.product.prodname_github_app %}.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About installation access tokens

In order to authenticate as an app installation, you must generate an installation access token. For more information about authenticating as an app installation, see "[Authenticating as a GitHub App installation](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)."

{% note %}

**Note**: Instead of generating an installation access token, you can use {% data variables.product.company_short %}'s Octokit SDKs to authenticate as an app. The SDK will take care of generating an installation access token for you and will regenerate the token once it expires. For more information about authenticating as an app installation, see "[Authenticating as a GitHub App installation](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)."

{% endnote %}

You should keep your installation access token secure. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."

## Generating an installation access token

{% data reusables.apps.generate-installation-access-token %}
