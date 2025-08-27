---
title: Setting up GitHub Copilot for your enterprise
shortTitle: Set up for enterprise
intro: 'Follow these steps to set up {% data variables.product.prodname_copilot %} in your enterprise.'
permissions: Enterprise owners
product: 'Enterprises with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/github-copilot-enterprise/enabling-github-copilot-enterprise-features
  - /copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise
  - /copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise-features
  - /copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise
  - /copilot/get-started/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise
  - /copilot/how-tos/set-up/setting-up-github-copilot-for-your-enterprise
contentType: how-tos
---

## 1. Enable {% data variables.product.prodname_copilot %} in your Enterprise through payment verification

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Click the **{% octicon "check-circle" aria-hidden="true" aria-label="check-circle" %} Getting Started** tab.
1. Under "Next steps", click **Verify your payment method**. This will enable {% data variables.product.prodname_copilot %} in your enterprise.

After you've completed these steps, you will be able to confirm that {% data variables.product.prodname_copilot %} is enabled in your enterprise's **{% octicon "law" aria-hidden="true" aria-label="law" %} Policies** tab.

## 2. Set policies

Control which {% data variables.product.prodname_copilot_short %} features are available in your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

## 3. Set up networking (if necessary)

If your enterprise users connect through an HTTP proxy server or firewall, ensure that key URLs are added to the allowlist for the proxy server or firewall. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

You may also need to install custom SSL certificates on your users' machines. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#installing-custom-certificates).

## 4. Grant access to organizations

Enable {% data variables.product.prodname_copilot_short %} for some or all organizations in your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise). Each organization owner can then grant {% data variables.product.prodname_copilot_short %} access to some or all of the members of their organization.

If your enterprise is on {% data variables.enterprise.data_residency_site %}, users must perform some additional setup to authenticate to their account from their development environment. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## Next steps

{% data reusables.copilot.setup-next-steps %}
