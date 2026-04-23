---
title: Setting up GitHub Copilot for your organization
shortTitle: Set up for organization
intro: 'Enable {% data variables.product.prodname_copilot %} for your organization so members can write code faster.'
permissions: Organization owners
product: 'Organizations with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan'
versions:
  feature: copilot
redirect_from:
  - /copilot/copilot-business/enabling-and-setting-up-github-copilot-business
  - /copilot/overview-of-github-copilot/enabling-and-setting-up-github-copilot-for-business
  - /copilot/managing-copilot-business/enabling-and-setting-up-github-copilot-for-business
  - /copilot/managing-copilot-business/enabling-and-setting-up-github-copilot-business
  - /copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-organization
  - /copilot/get-started/setting-up-github-copilot/setting-up-github-copilot-for-your-organization
  - /copilot/how-tos/set-up/setting-up-github-copilot-for-your-organization
  - /copilot/how-tos/set-up/set-up-for-organization
contentType: how-tos
category: 
  - Configure Copilot
---

## Subscribe your organization to {% data variables.product.prodname_copilot %}

Set up a {% data variables.copilot.copilot_business_short %} plan for your organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/subscribing-to-copilot-for-your-organization).

If your organization belongs to an enterprise with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan, your enterprise owner can enable {% data variables.product.prodname_copilot_short %} for your organization instead. Request access from your enterprise owner at [https://github.com/settings/copilot](https://github.com/settings/copilot?ref_product=copilot&ref_type=engagement&ref_style=text), under "Get Copilot from an organization."

## Set policies

Control which {% data variables.product.prodname_copilot_short %} features are available in your organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization).

## Configure networking

If your organization members connect through an HTTP proxy server or firewall, add the required URLs to the allowlist. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

If your environment uses custom SSL certificates, install them on your members' machines. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#-installing-custom-certificates).

## Grant access to members

Enable {% data variables.product.prodname_copilot_short %} for some or all members of your organization. Consider starting with teams most likely to benefit, to discover potential blockers and demonstrate early success. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).

> [!TIP] If your organization belongs to an enterprise on {% data variables.enterprise.data_residency_site %}, users need additional setup to authenticate from their development environment. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## Next steps

{% data reusables.copilot.setup-next-steps %}
