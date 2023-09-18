---
title: About using GitHub Apps
shortTitle: About using apps
intro: "Learn about what a {% data variables.product.prodname_github_app %} is and why you would use a {% data variables.product.prodname_github_app %}."
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} are tools that extend {% data variables.product.company_short %}'s functionality. {% data variables.product.prodname_github_apps %} can do things on {% data variables.product.company_short %} like open issues, comment on pull requests, and manage projects. They can also do things outside of {% data variables.product.company_short %} based on events that happen on {% data variables.product.company_short %}. For example, a {% data variables.product.prodname_github_app %} can post on Slack when an issue is opened on {% data variables.product.company_short %}.

## Finding {% data variables.product.prodname_github_apps %}

{% ifversion fpt or ghec %}
You can discover {% data variables.product.prodname_github_apps %} on [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). {% else %}You cannot install third-party applications on your enterprise. If you want to use the functionality of a third-party app, you can contact the app developer about creating an app from a manifest or from URL parameters. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-from-a-manifest)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-using-url-parameters)."{% endif %}

You can also build your own {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

## Using {% data variables.product.prodname_github_apps %}

In order to use a {% data variables.product.prodname_github_app %}, you must install the app on your user or organization account. When you install the app, you grant the app permission to read or modify your repository and organization data. The specific permissions depends on the app, and {% data variables.product.company_short %} will tell you what permissions the app requested before you install the app. When you install the app, you will also specify what repositories the app can access. If the app requires any additional configuration, the app will direct you to do so. For more information, see {% ifversion ghec or fpt %}"[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-personal-account)," "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations),"{% endif %} "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party)" and "[AUTOTITLE](/apps/using-github-apps/installing-your-own-github-app)."

You may also need to authorize a {% data variables.product.prodname_github_app %} to verify your identity, know what resources you can access, or take actions on your behalf. If you need to authorize the app, the app will prompt you to do so. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

Occasionally, the {% data variables.product.prodname_github_app %} will request updated permissions. {% data variables.product.company_short %} will notify you when this occurs. In order for the app to continue to function, you will need to review and approve the updated permissions. For more information, see "[AUTOTITLE](/apps/using-github-apps/approving-updated-permissions-for-a-github-app)."

Before you install or authorize a {% data variables.product.prodname_github_app %}, you should make sure that you trust the app developer. If you no longer use the app, you should suspend or uninstall the app and/or revoke your authorization of the app. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#blocking-access)" and "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)."

## {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

{% data variables.product.company_short %} also supports {% data variables.product.prodname_oauth_apps %}. Unlike {% data variables.product.prodname_github_apps %}, you do not install an {% data variables.product.prodname_oauth_app %} or control what repositories it can access.

Both {% data variables.product.prodname_oauth_apps %} and {% data variables.product.prodname_github_apps %} use OAuth 2.0.

{% data variables.product.prodname_oauth_apps %} can only act on behalf of a user, while {% data variables.product.prodname_github_apps %} can either act on behalf of a user or independently of a user.

For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)" and "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)."
