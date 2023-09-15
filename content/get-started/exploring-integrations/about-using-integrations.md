---
title: About using integrations
intro: 'Integrations are tools and services that connect with {% data variables.product.product_name %} to complement and extend your workflow.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/about-integrations
  - /get-started/customizing-your-github-workflow/exploring-integrations/about-integrations
  - /articles/about-github-marketplace
  - /github/customizing-your-github-workflow/about-github-marketplace
  - /github/customizing-your-github-workflow/exploring-integrations/about-github-marketplace
  - /get-started/customizing-your-github-workflow/exploring-integrations/about-github-marketplace
  - /get-started/exploring-integrations/about-github-marketplace
  - /get-started/exploring-integrations/about-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

Integrations are tools that extend {% data variables.product.company_short %}'s functionality. Integrations can do things on {% data variables.product.company_short %} like open issues, comment on pull requests, and manage projects. They can also do things outside of {% data variables.product.company_short %} based on events that happen on {% data variables.product.company_short %}. For example, an integration can post on Slack when an issue is opened on {% data variables.product.company_short %}.

You can discover many integrations in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). {% data variables.product.prodname_marketplace %} includes {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, and custom actions that you can use in {% data variables.product.prodname_actions %} workflows. You can also get integrations directly from the integration creator.

{% ifversion fpt or ghec or ghes > 3.7 %} For a list of featured {% data variables.product.company_short %} integrations, see "[AUTOTITLE](/get-started/exploring-integrations/github-extensions-and-integrations)."{% endif %}

{% ifversion ghes %}

If you want your {% data variables.product.prodname_ghe_server %} instance to use a third-party {% data variables.product.prodname_github_app %}, you can contact the app developer about making the {% data variables.product.prodname_github_app %} available for {% data variables.product.prodname_ghe_server %}. For more information, see "[AUTOTITLE](/apps/sharing-github-apps/making-your-github-app-available-for-github-enterprise-server)."

If you want your {% data variables.product.prodname_ghe_server %} instance to use third-party custom actions, you need to enable {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."

{% endif %}

For more information about using integrations, see:

- "[AUTOTITLE](/apps/using-github-apps/about-using-github-apps)"
- "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps)"
- "[AUTOTITLE](/actions/learn-github-actions/finding-and-customizing-actions)"

You can also build your own integrations. For more information, see "[AUTOTITLE](/get-started/exploring-integrations/about-building-integrations)."
