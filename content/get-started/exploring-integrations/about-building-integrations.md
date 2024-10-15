---
title: About Building Integrations
intro: 'You can build integrations to extend {% data variables.product.company_short %}''s functionality.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

Integrations are tools that expand {% data variables.product.company_short %}'s functionality. These integrations can perform tasks within {% data variables.product.company_short %}, such as opening issues, commenting on pull requests, and managing projects. Additionally, integrations can trigger actions outside of {% data variables.product.company_short %} based on events occurring on the platform. For example, an integration can send a message to Slack when an issue is opened on {% data variables.product.company_short %}.

Many integrations include {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_actions %} workflows, or custom actions for {% data variables.product.prodname_actions %} workflows.

* **{% data variables.product.prodname_github_apps %}**: These are integrations that run on the app owner's server or a user device. For more details, visit "[Creating GitHub Apps](/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps)."
* **{% data variables.product.prodname_actions %} Workflows**: These workflows are triggered by specific events within {% data variables.product.company_short %}. To learn more, see "[Understanding GitHub Actions](/actions/learn-github-actions/understanding-github-actions)."
* **Custom Actions**: These are code components that execute within a {% data variables.product.prodname_actions %} workflow. More information is available at "[About Custom Actions](/actions/creating-actions/about-custom-actions)."

Your integration can interact with {% data variables.product.company_short %} through its API to fetch and modify data. {% data variables.product.company_short %} offers both a REST API and a GraphQL API. For more information, see:

* "[Comparing GitHub's REST and GraphQL APIs](/rest/about-the-rest-api/comparing-githubs-rest-api-and-graphql-api)"
* "[GitHub REST API](/rest)"
* "[GitHub GraphQL API](/graphql)"

To respond to events on {% data variables.product.company_short %}, you can use webhooks. For more information, refer to "[About Webhooks](/webhooks/about-webhooks)."

{% ifversion fpt or ghec %} 
If your integration is a {% data variables.product.prodname_github_app %} or a custom action, you can publish it on {% data variables.product.prodname_marketplace %}. For further details, check out:
* "[GitHub Marketplace Overview for Apps](/apps/github-marketplace/github-marketplace-overview/about-github-marketplace-for-apps)" 
* "[Publishing Actions in GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)." 
{% endif %}

If your integration uses generative AI, {% data variables.product.company_short %} offers free access to experiment with AI models. Learn more at "[Prototyping with AI Models](/github-models/prototyping-with-ai-models)."
