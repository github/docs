---
title: About GitHub integrations
shortTitle: About integrations
intro: 'Learn how to connect, extend, and customize GitHub with apps and tools.'
redirect_from:
  - /get-started/exploring-integrations/about-integrations
  - /get-started/exploring-integrations/about-using-integrations
versions:
    fpt: '*'
    ghes: '*'
    ghec: '*'
topics:
    - Integration
category:
  - Learn about integrations
---

Integrations are tools that extend {% data variables.product.github %} functionality by allowing you to connect your {% data variables.product.github %} account with other applications and services, enabling you to streamline your workflow and enhance collaboration.

With integrations, you can automate tasks, receive notifications, and access {% data variables.product.github %} features directly from your favorite tools. Integrations can also do things outside of {% data variables.product.company_short %} based on events that happen on {% data variables.product.company_short %}. For example, an integration can post on Slack when an issue is opened on {% data variables.product.company_short %}.

You can discover many integrations in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). {% data variables.product.prodname_marketplace %} includes {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, and custom actions that you can use in {% data variables.product.prodname_actions %} workflows. You can also get integrations directly from the integration creator.

For a list of featured {% data variables.product.company_short %} integrations, see [AUTOTITLE](/integrations/concepts/featured-github-integrations).

>[!NOTE] The {% data variables.product.github %} docs site only provides documentation for a selected set of integrations. For more information about an integration not documented on the {% data variables.product.github %} docs site, see the documentation provided by the integration creator.

{% ifversion ghes %}

If you want your {% data variables.product.prodname_ghe_server %} instance to use a third-party {% data variables.product.prodname_github_app %}, you can contact the app developer about making the {% data variables.product.prodname_github_app %} available for {% data variables.product.prodname_ghe_server %}. For more information, see [AUTOTITLE](/apps/sharing-github-apps/making-your-github-app-available-for-github-enterprise-server).

If you want your {% data variables.product.prodname_ghe_server %} instance to use third-party custom actions, you need to enable {% data variables.product.prodname_github_connect %}. For more information, see [AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect).

{% endif %}

For more information about using integrations, see:

* [AUTOTITLE](/apps/using-github-apps/about-using-github-apps)
* [AUTOTITLE](/apps/oauth-apps/using-oauth-apps)
* [AUTOTITLE](/actions/learn-github-actions/finding-and-customizing-actions)

You can also build your own integrations. For more information, see [AUTOTITLE](/get-started/exploring-integrations/about-building-integrations).
