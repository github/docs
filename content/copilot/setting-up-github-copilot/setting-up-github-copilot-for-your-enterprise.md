---
title: 'Setting up GitHub Copilot for your enterprise'
shortTitle: Set up for enterprise
intro: "Follow these steps to set up {% data variables.product.prodname_copilot %} in your enterprise."
permissions: Enterprise owners
product: 'Enterprises with a subscription to {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
redirect_from:
  - /copilot/github-copilot-enterprise/enabling-github-copilot-enterprise-features
  - /copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise
  - /copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise-features
---

## 1. Subscribe your enterprise to {% data variables.product.prodname_copilot %}

Set up a subscription to {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %} for your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/subscribing-to-copilot-for-your-enterprise).

## 2. Set policies

Control which {% data variables.product.prodname_copilot_short %} features are available in your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

## 3. Set up networking (if necessary)

If your enterprise users connect through an HTTP proxy server or firewall, ensure that key URLs are added to the allowlist for the proxy server or firewall. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

You may also need to install custom SSL certificates on your users' machines. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#installing-custom-certificates).

## 4. Grant access to organizations

Enable {% data variables.product.prodname_copilot_short %} for some or all organizations in your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise). Each organization owner can then grant {% data variables.product.prodname_copilot_short %} access to some or all of the members of their organization.

If your enterprise is on {% data variables.enterprise.data_residency_site %}, users must perform some additional setup to authenticate to their account from their development environment. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/using-github-copilot-with-an-account-on-ghecom).

## 5. Drive {% data variables.product.prodname_copilot_short %} adoption

Planning and implementing an effective enablement process is essential to drive adoption of {% data variables.product.prodname_copilot_short %} in your enterprise. See [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/driving-copilot-adoption-in-your-company).
