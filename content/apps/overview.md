---
title: GitHub Apps overview
shortTitle: Overview
intro: 'You can use {% data variables.product.prodname_github_apps %} to extend the functionality of {% data variables.product.company_short %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - GitHub Apps
---

## About {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} are tools that extend {% data variables.product.company_short %}'s functionality. {% data variables.product.prodname_github_apps %} can do things on {% data variables.product.company_short %} like open issues, comment on pull requests, and manage projects. They can also do things outside of {% data variables.product.company_short %} based on events that happen on {% data variables.product.company_short %}. For example, a {% data variables.product.prodname_github_app %} can post on Slack when an issue is opened on {% data variables.product.company_short %}.

For more information about using {% data variables.product.prodname_github_apps %}, see [AUTOTITLE](/apps/using-github-apps/about-using-github-apps).

For more information about building {% data variables.product.prodname_github_apps %}, see [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps).

## {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

{% data variables.product.company_short %} also supports {% data variables.product.prodname_oauth_apps %}. In general, {% data variables.product.prodname_github_apps %} are preferred over {% data variables.product.prodname_oauth_apps %}. {% data variables.product.prodname_github_apps %} use fine-grained permissions, give the user more control over which repositories the app can access, and use short-lived tokens. These properties can harden the security of the app by limiting the damage that could be done if the app's credentials were leaked. For more information, see [AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps).

## When to use {% data variables.product.prodname_github_apps %}

Use {% data variables.product.prodname_github_apps %} when you need to integrate deeply with {% data variables.product.company_short %}, require fine-grained permissions, or want better security through short-lived access tokens. {% data variables.product.prodname_github_apps %} are well suited for automation, CI/CD integrations, and services that need to act on behalf of multiple users or repositories.
