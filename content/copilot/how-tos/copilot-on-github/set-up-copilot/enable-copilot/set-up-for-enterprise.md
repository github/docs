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
---

## Enable {% data variables.product.prodname_copilot %}

To purchase {% data variables.product.prodname_copilot %} for your enterprise, [contact {% data variables.product.github %}'s Sales team](https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=text).

A member of the Sales team will work with you to set up {% data variables.product.prodname_copilot_short %} for your enterprise.

## Set policies

You will use enterprise policies to manage two aspects of governance:

* **Availability**: Which {% data variables.product.prodname_copilot_short %} features, models, and MCP servers are available in your enterprise?
* **Controls**: What restrictions apply to these features? For example, will you exclude certain files or block suggestions matching public code?

Generally, enterprise owners can either set each policy for the whole enterprise or "let organizations decide." With the latter option, users are subject to the policy of the organization where they receive their {% data variables.product.prodname_copilot_short %} license or to the default defined in your "Policies for enterprise-assigned users" setting.

To manage policies, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

## Configure networking

If your corporate network restricts users' traffic, add the required URLs to the allowlist for your firewall or proxy. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

If you route traffic via a proxy server, you may need to ask users to configure proxy settings in their environment. You may also need to install custom certificates on your users' machines. For more information, see [AUTOTITLE](/copilot/concepts/network-settings).

If your enterprise is on {% data variables.enterprise.data_residency_site %}, users will also need to configure their environment to authenticate from their development environment. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## Assign licenses

{% data reusables.copilot.enterprise-licensing %}

For instructions, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise).
