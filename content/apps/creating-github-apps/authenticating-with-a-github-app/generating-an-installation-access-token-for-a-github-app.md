---
title: Generating an installation access token for a GitHub App
shortTitle: Generate an installation access token
intro: Learn how to generate an installation access token for your {% data variables.product.prodname_github_app %}.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Authenticate with a GitHub App
---

## About installation access tokens

In order to authenticate as an app installation, you must generate an installation access token. Installation access tokens are short-lived tokens whose scope is inherited from their associated Github App. These permissions can be further pared down per use case. 

When you use an installation access token, it acts on behalf of the associated Github App. In other words, it is not tied to a user (as is the case with [personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#about-personal-access-tokens)).  

For more information regarding installation access tokens and about authenticating as an app installation, see [Authenticating as a GitHub App installation](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation).

Installation access tokens are short-lived tokens whose scope is inherited from their associated Github App. These permissions can be further pared down per use case. 

> [!NOTE]
> Instead of generating an installation access token, you can use {% data variables.product.company_short %}'s Octokit SDKs to authenticate as an app. The SDK will take care of generating an installation access token for you and will regenerate the token once it expires. For more information about authenticating as an app installation, see [Authenticating as a GitHub App installation](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation).

You should keep your installation access token secure. For more information, see [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app).

## Generating an installation access token

{% data reusables.apps.generate-installation-access-token %}
