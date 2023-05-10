---
title: GitHub Apps overview
shortTitle: Overview
intro: 'You can use {% data variables.product.prodname_github_app %}s to extend the functionality of {% data variables.product.company_short %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - GitHub Apps
---

## About {% data variables.product.prodname_github_app %}s

{% data variables.product.prodname_github_app %}s are tools that extend {% data variables.product.company_short %}'s functionality. {% data variables.product.prodname_github_app %}s can do things on {% data variables.product.company_short %} like open issues, comment on pull requests, and manage projects. They can also do things outside of {% data variables.product.company_short %} based on events that happen on {% data variables.product.company_short %}. For example, a {% data variables.product.prodname_github_app %} can post on Slack when an issue is opened on {% data variables.product.company_short %}.

For more information about using {% data variables.product.prodname_github_app %}s, see "[AUTOTITLE](/apps/using-github-apps/about-using-github-apps)."

For more information about building {% data variables.product.prodname_github_app %}s, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

## {% data variables.product.prodname_github_app %}s and OAuth Apps

{% data variables.product.company_short %} also supports OAuth Apps. In general, {% data variables.product.prodname_github_app %}s are preferred over {% data variables.product.prodname_oauth_app %}s. {% data variables.product.prodname_github_app %}s use fine-grained permissions, give the user more control over which repositories the app can access, and use short-lived tokens. These properties can harden the security of the app by limiting the damage that could be done if the app's credentials were leaked. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)."
