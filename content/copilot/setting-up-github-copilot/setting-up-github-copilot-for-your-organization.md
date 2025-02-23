---
title: 'Setting up GitHub Copilot for your organization'
shortTitle: Set up for organization
intro: "Follow these steps to set up {% data variables.product.prodname_copilot %} in your organization."
permissions: Organization owners
product: 'Organizations with a subscription to {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/copilot-business/enabling-and-setting-up-github-copilot-business
  - /copilot/overview-of-github-copilot/enabling-and-setting-up-github-copilot-for-business
  - /copilot/managing-copilot-business/enabling-and-setting-up-github-copilot-for-business
  - /copilot/managing-copilot-business/enabling-and-setting-up-github-copilot-business
---

## 1. Subscribe your organization to {% data variables.product.prodname_copilot %}

Set up a subscription to {% data variables.product.prodname_copilot_business_short %} for your organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/subscribing-to-copilot-for-your-organization).

If your organization is part of an enterprise that has a {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %} subscription, your enterprise owner can instead enable {% data variables.product.prodname_copilot_short %} for your organization. You can request access from your enterprise owner by going to [https://github.com/settings/copilot](https://github.com/settings/copilot) and requesting access under "Get Copilot from an organization."

## 2. Set policies

Control which {% data variables.product.prodname_copilot_short %} features are available in your organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization).

## 3. Set up networking (if necessary)

If your organization members connect through an HTTP proxy server or firewall, ensure that key URLs are added to the allowlist for the proxy server or firewall. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

You may also need to install custom SSL certificates on your members' machines. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#-installing-custom-certificates).

## 4. Grant access to members

Enable {% data variables.product.prodname_copilot_short %} for some or all members of your organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).

To help drive adoption of {% data variables.product.prodname_copilot_short %} in your organization, think about what teams or members are most excited about {% data variables.product.prodname_copilot_short %} or could benefit the most from {% data variables.product.prodname_copilot_short %}. You may want to enable {% data variables.product.prodname_copilot_short %} for those members before enabling {% data variables.product.prodname_copilot_short %} for your whole organization. This can help you discover blockers, demonstrate early success, and set your organization up for a successful {% data variables.product.prodname_copilot_short %} rollout.

{% data reusables.copilot.self-serve-license-link %}

If your organization is part of an enterprise on {% data variables.enterprise.data_residency_site %}, users must perform some additional setup to authenticate to their account from their development environment. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## 5. Drive {% data variables.product.prodname_copilot_short %} adoption

Planning and implementing an effective enablement process is essential to drive adoption of {% data variables.product.prodname_copilot_short %} in your organization. See [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/driving-copilot-adoption-in-your-company).

## 6. Enhance the {% data variables.product.prodname_copilot_short %} experience

Enhance the {% data variables.product.prodname_copilot_short %} experience for your organization by:

* **Setting up knowledge bases** for use with {% data variables.product.prodname_copilot_chat_short %} _({% data variables.product.prodname_copilot_enterprise_short %} only)_. See [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-copilot-knowledge-bases).
* **Fine tuning {% data variables.product.prodname_copilot_short %}** by creating a custom large language model. See [AUTOTITLE](/copilot/customizing-copilot/creating-a-custom-model-for-github-copilot).
* **Installing {% data variables.product.prodname_copilot_extensions_short %}** to integrate other tools with {% data variables.product.prodname_copilot_chat_short %}. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/installing-github-copilot-extensions-for-your-organization).
