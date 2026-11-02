---
title: Setting up GitHub Copilot for your enterprise
shortTitle: Set up for enterprise
intro: 'Prepare policies, spending controls, and access to roll out {% data variables.product.prodname_copilot %} across your enterprise.'
product: '{% data reusables.copilot.enterprise-billing-availability %}'
permissions: Enterprise owners
versions:
  feature: copilot
redirect_from:
  - /copilot/github-copilot-enterprise/enabling-github-copilot-enterprise-features
  - /copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise
  - /copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise-features
  - /copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise
  - /copilot/get-started/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise
  - /copilot/how-tos/set-up/setting-up-github-copilot-for-your-enterprise
  - /copilot/how-tos/set-up/set-up-for-enterprise
contentType: how-tos
category:
  - Configure Copilot
docsTeamMetrics:
  - ai-governance
---

## Choose a billing model

Before enabling {% data variables.product.prodname_copilot_short %}, choose the billing model that fits your enterprise's needs. {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} include a usage allowance, while {% data variables.product.prodname_copilot_short %} access for eligible enterprises bills metered usage from the first use. See [AUTOTITLE](/copilot/get-started/plans).

## Enable {% data variables.product.prodname_copilot %}

{% data reusables.copilot.plans.subscribe-for-enterprise %}

## Set policies

You will use enterprise policies to manage two aspects of governance:

* **Availability**: Which {% data variables.product.prodname_copilot_short %} features, models, and MCP servers are available in your enterprise?
* **Controls**: What restrictions apply to these features? For example, will you exclude certain files or block suggestions matching public code?

Generally, enterprise owners can either set each policy for the whole enterprise or "let organizations decide." With the latter option, users are subject to the policy of the organization where they receive their {% data variables.product.prodname_copilot_short %} license or to the default defined in your "Policies for enterprise-assigned users" setting.

To manage policies, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Set spending controls

Before users begin consuming {% data variables.product.prodname_ai_credits_short %}, set per-user budgets and spending limits. Per-user budgets govern total consumption. Spending limits govern metered charges, which begin after pool exhaustion on {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, or from first use with {% data variables.product.prodname_copilot_short %} access.

Enable **Stop usage when budget limit is reached** on spending limits to enforce them. See [AUTOTITLE](/copilot/tutorials/budgets/getting-started-with-budget-controls).

The **{% data variables.product.prodname_ai_credits_short %} paid usage** policy in your enterprise's AI Controls settings is enabled by default for all billing models. With {% data variables.product.prodname_copilot_short %} access through {% data variables.product.prodname_ghe_cloud %} or as {% data variables.copilot.copilot_standalone_short %}, it must remain enabled for features that consume credits because all credit-consuming usage is paid usage.

## Configure networking

If your corporate network restricts users' traffic, add the required URLs to the allowlist for your firewall or proxy. See [AUTOTITLE](/copilot/reference/copilot-allowlist-reference).

If you route traffic via a proxy server, you may need to ask users to configure proxy settings in their environment. You may also need to install custom certificates on your users' machines. For more information, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/network-settings).

If your enterprise is on {% data variables.enterprise.data_residency_site %}, users will also need to configure their environment to authenticate from their development environment. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/set-up-copilot/authenticate-to-ghecom).

## Assign licenses

{% data reusables.copilot.enterprise-licensing %}

For instructions, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access).

## Help developers get started

Ask developers to sign in to their IDE with the account that has enterprise-provided access, then complete their first task. They can follow [AUTOTITLE](/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide).

## Review usage and spending

After rollout, check your AI usage dashboard at least monthly:

* Compare consumption with your approved spending limits.
* Identify users who are blocked or need different budgets.
* Adjust controls as usage changes.

For guidance on tuning budgets using historical consumption, see [AUTOTITLE](/copilot/tutorials/budgets/optimizing-your-budget-configuration).
