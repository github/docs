---
title: Setting up GitHub Copilot for your enterprise
shortTitle: Set up for enterprise
intro: 'Enable {% data variables.product.prodname_copilot %} across your enterprise so developers can write code faster.'
product: '{% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}'
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

## Enable {% data variables.product.prodname_copilot %}

{% data reusables.copilot.plans.subscribe-for-enterprise %}

As an enterprise owner, contact {% data variables.contact.contact_support_page %} if the enterprise **Licensing** page shows **Contact support to enable**, or if the **{% data variables.product.prodname_copilot_short %}** card or **Manage** or **Enable** controls are missing. Also contact {% data variables.contact.github_support %} if activation remains unavailable after a trial expires, a plan change, or moving an organization into a new enterprise. Activation may need to be enabled for your enterprise first.

After {% data variables.contact.github_support %} confirms the change, allow a short time for the change to propagate. Then return to the enterprise **Licensing** page and retry enabling {% data variables.product.prodname_copilot_short %}.

## Set policies

You will use enterprise policies to manage two aspects of governance:

* **Availability**: Which {% data variables.product.prodname_copilot_short %} features, models, and MCP servers are available in your enterprise?
* **Controls**: What restrictions apply to these features? For example, will you exclude certain files or block suggestions matching public code?

Generally, enterprise owners can either set each policy for the whole enterprise or "let organizations decide." With the latter option, users are subject to the policy of the organization where they receive their {% data variables.product.prodname_copilot_short %} license or to the default defined in your "Policies for enterprise-assigned users" setting.

To manage policies, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Configure networking

If your corporate network restricts users' traffic, add the required URLs to the allowlist for your firewall or proxy. See [AUTOTITLE](/copilot/reference/copilot-allowlist-reference).

If you route traffic via a proxy server, you may need to ask users to configure proxy settings in their environment. You may also need to install custom certificates on your users' machines. For more information, see [AUTOTITLE](/copilot/concepts/network-settings).

If your enterprise is on {% data variables.enterprise.data_residency_site %}, users will also need to configure their environment to authenticate from their development environment. See [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/set-up-copilot/authenticate-to-ghecom).

## Assign licenses

{% data reusables.copilot.enterprise-licensing %}

For instructions, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access).
