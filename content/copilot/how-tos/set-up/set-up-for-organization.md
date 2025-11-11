---
title: Setting up GitHub Copilot for your organization
shortTitle: Set up for organization
intro: 'Follow these steps to set up {% data variables.product.prodname_copilot %} in your organization.'
permissions: Organization owners
product: 'Organizations with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/copilot-business/enabling-and-setting-up-github-copilot-business
  - /copilot/overview-of-github-copilot/enabling-and-setting-up-github-copilot-for-business
  - /copilot/managing-copilot-business/enabling-and-setting-up-github-copilot-for-business
  - /copilot/managing-copilot-business/enabling-and-setting-up-github-copilot-business
  - /copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-organization
  - /copilot/get-started/setting-up-github-copilot/setting-up-github-copilot-for-your-organization
  - /copilot/how-tos/set-up/setting-up-github-copilot-for-your-organization
contentType: how-tos
category: 
  - Configure Copilot
---

## 1. Subscribe your organization to {% data variables.product.prodname_copilot %}

Set up a {% data variables.copilot.copilot_business_short %} plan for your organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/subscribing-to-copilot-for-your-organization).

If your organization is part of an enterprise with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan, your enterprise owner can instead enable {% data variables.product.prodname_copilot_short %} for your organization. You can request access from your enterprise owner by going to [https://github.com/settings/copilot](https://github.com/settings/copilot) and requesting access under "Get Copilot from an organization."

## 2. Set policies

Control which {% data variables.product.prodname_copilot_short %} features are available in your organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization).

## 3. Set up networking (if necessary)

If your organization members connect through an HTTP proxy server or firewall, ensure that key URLs are added to the allowlist for the proxy server or firewall. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

You may also need to install custom SSL certificates on your members' machines. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#-installing-custom-certificates).

## 4. Grant access to members

Enable {% data variables.product.prodname_copilot_short %} for some or all members of your organization. You may want to identify teams or members who are most likely to benefit from {% data variables.product.prodname_copilot_short %} and enable {% data variables.product.prodname_copilot_short %} for them first to discover potential blockers and demonstrate early success. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).

If your organization is part of an enterprise on {% data variables.enterprise.data_residency_site %}, users must perform some additional setup to authenticate to their account from their development environment. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## Next steps

{% data reusables.copilot.setup-next-steps %}
