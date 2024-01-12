---
title: About building integrations
intro: "You can build integrations to extend {% data variables.product.company_short %}'s functionality."
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

Integrations are tools that extend {% data variables.product.company_short %}'s functionality. Integrations can do things on {% data variables.product.company_short %} like open issues, comment on pull requests, and manage projects. They can also do things outside of {% data variables.product.company_short %} based on events that happen on {% data variables.product.company_short %}. For example, an integration can post on Slack when an issue is opened on {% data variables.product.company_short %}.

Many integrations are {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_actions %} workflows, or custom actions for {% data variables.product.prodname_actions %} workflows.

- {% data variables.product.prodname_github_apps %} are integrations that run on the app owner's server or on a user device. For more information, see "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps)."
- {% data variables.product.prodname_actions %} workflows are workflows that run when specific events occur on {% data variables.product.company_short %}. For more information, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions)."
- Custom actions are code that can be executed by a {% data variables.product.prodname_actions %} workflow. For more information, see "[AUTOTITLE](/actions/creating-actions/about-custom-actions)."

Your integration can use {% data variables.product.company_short %}'s API to fetch data and make changes to data on {% data variables.product.company_short %}. {% data variables.product.company_short %} has a REST API and a GraphQL API. For more information, see:

- "[AUTOTITLE](/rest/overview/about-githubs-apis)"
- "[AUTOTITLE](/rest)"
- "[AUTOTITLE](/graphql)"

Your integration can use webhooks to learn when specific events happen on {% data variables.product.company_short %}. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/about-webhooks)."

{% ifversion fpt or ghec %} If your integration is a {% data variables.product.prodname_github_app %} or custom action, you can publish your integration on {% data variables.product.prodname_marketplace %}. For more information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace)" and "[AUTOTITLE](/actions/creating-actions/publishing-actions-in-github-marketplace)."{% endif %}
