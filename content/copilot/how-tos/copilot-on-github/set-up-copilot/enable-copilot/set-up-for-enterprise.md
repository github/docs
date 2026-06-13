---
title: Setting up GitHub Copilot for your enterprise
shortTitle: Set up for enterprise
intro: 'Enable {% data variables.product.prodname_copilot %} across your enterprise so developers can write code faster.'
product: 'Enterprises with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan'
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

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Click the **{% octicon "check-circle" aria-hidden="true" aria-label="check-circle" %} Getting Started** tab.
1. Under "Next steps", click **Verify your payment method**.

To confirm {% data variables.product.prodname_copilot_short %} is enabled, check your enterprise's **{% octicon "law" aria-hidden="true" aria-label="law" %} AI Controls** tab.

## Set policies

Control which {% data variables.product.prodname_copilot_short %} features are available in your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

## Configure networking

If your enterprise uses an HTTP proxy server or firewall, add the required URLs to the allowlist. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

If your environment uses custom SSL certificates, install them on your users' machines. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#installing-custom-certificates).

## Assign licenses

{% data reusables.copilot.enterprise-licensing %}

For instructions, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise).

> [!TIP] If your enterprise is on {% data variables.enterprise.data_residency_site %}, users need additional setup to authenticate from their development environment. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## Next steps

{% data reusables.copilot.setup-next-steps %}
