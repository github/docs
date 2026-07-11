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

## Enable {% data variables.product.prodname_copilot %} for your organization through an enterprise account

To enable {% data variables.copilot.copilot_business_short %} for your organization, your organization needs to be part of an enterprise account with a {% data variables.product.prodname_copilot_short %} subscription. If you don't already have an enterprise account, you can create one specifically for managing {% data variables.copilot.copilot_business_short %} licenses. See [AUTOTITLE](/copilot/concepts/about-enterprise-accounts-for-copilot-business).

If your organization already belongs to an enterprise with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan, your enterprise owner can enable {% data variables.product.prodname_copilot_short %} for your organization. Request access from your enterprise owner at [{% data variables.product.prodname_copilot %} settings](https://github.com/settings/copilot?ref_product=copilot&ref_type=engagement&ref_style=text), under "Get Copilot from an organization."

## Set policies

Control which {% data variables.product.prodname_copilot_short %} features are available in your organization. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).

## Configure networking

If your organization members connect through an HTTP proxy server or firewall, add the required URLs to the allowlist. See [AUTOTITLE](/copilot/reference/copilot-allowlist-reference).

If your environment uses custom SSL certificates, install them on your members' machines. See [AUTOTITLE](/copilot/how-tos/configure-personal-settings/configure-network-settings#-installing-custom-certificates).

## Grant access to members

Enable {% data variables.product.prodname_copilot_short %} for some or all members of your organization. Consider starting with teams most likely to benefit, to discover potential blockers and demonstrate early success. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

> [!TIP] If your organization belongs to an enterprise on {% data variables.enterprise.data_residency_site %}, users need additional setup to authenticate from their development environment. See [AUTOTITLE](/copilot/how-tos/configure-personal-settings/authenticate-to-ghecom).

## Next steps

{% data reusables.copilot.setup-next-steps %}
