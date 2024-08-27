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

Set up a subscription to {% data variables.product.prodname_copilot_business_short %} for your organization. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/subscribing-to-copilot-for-your-organization)."

If your organization is part of an enterprise that has a {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %} subscription, your enterprise owner can instead enable {% data variables.product.prodname_copilot_short %} for your organization. You can request access from your enterprise owner by going to [https://github.com/settings/copilot](https://github.com/settings/copilot) and requesting access under "Get Copilot from an organization."

## 2. Set policies

Control which {% data variables.product.prodname_copilot_short %} features are available in your organization. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization)."

## 3. Set up networking (if necessary)

If your organization members connect through an HTTP proxy server or firewall, ensure that key URLs are added to the allowlist for the proxy server or firewall. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot)."

You may also need to install custom SSL certificates on your members' machines. See "[AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot#-installing-custom-certificates)."

## 4. Grant access to members

Enable {% data variables.product.prodname_copilot_short %} for some or all members of your organization. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization)."

To help drive adoption of {% data variables.product.prodname_copilot_short %} in your organization, think about what teams or members are most excited about {% data variables.product.prodname_copilot_short %} or could benefit the most from {% data variables.product.prodname_copilot_short %}. You may want to enable {% data variables.product.prodname_copilot_short %} for those members before enabling {% data variables.product.prodname_copilot_short %} for your whole organization. This can help you discover blockers, demonstrate early success, and set your organization up for a successful {% data variables.product.prodname_copilot_short %} rollout.

Alternatively, you can set up a self-serve workflow using the API. See "[Add teams to the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#add-teams-to-the-copilot-subscription-for-an-organization)" and "[Add users to the Copilot subscription for an organization](/rest/copilot/copilot-user-management?apiVersion=2022-11-28#add-users-to-the-copilot-subscription-for-an-organization)" in the REST API documentation.

## 5. Share onboarding material

* **Share onboarding material**: Share onboarding material with each member that you granted {% data variables.product.prodname_copilot_short %} access to. See "[AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself)" and "[AUTOTITLE](/copilot/using-github-copilot/best-practices-for-using-github-copilot)."
* **Encourage adoption**: Encouragement from leadership can help drive adoption of {% data variables.product.prodname_copilot_short %} in your organization. Consider messaging your support of {% data variables.product.prodname_copilot_short %} and how it can help your organization.
* **Set up training sessions or workshops**: Training sessions or workshops can help members learn how to use {% data variables.product.prodname_copilot_short %} effectively.

## 6. Enhance the {% data variables.product.prodname_copilot_short %} experience

Enhance the {% data variables.product.prodname_copilot_short %} experience for your organization by:

* **Indexing repositories** to improve {% data variables.product.prodname_copilot_short %}'s responses relating to {% data variables.product.prodname_dotcom %} repositories _({% data variables.product.prodname_copilot_enterprise_short %} only)_. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/indexing-repositories-for-copilot-chat)."
* **Setting up knowledge bases** for use with {% data variables.product.prodname_copilot_chat_short %} _({% data variables.product.prodname_copilot_enterprise_short %} only)_. See "[AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-copilot-knowledge-bases)."
* **Fine tuning {% data variables.product.prodname_copilot_short %}** by creating a custom large language model. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/customizing-copilot-for-your-organization/creating-a-custom-model-for-github-copilot)."
* **Installing {% data variables.product.prodname_copilot_extensions_short %}** to integrate other tools with {% data variables.product.prodname_copilot_chat_short %}. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/installing-github-copilot-extensions-for-your-organization)."

## 7. Drive adoption

To help your organization get the most out of {% data variables.product.prodname_copilot_short %}, reach out to users who have not used {% data variables.product.prodname_copilot_short %} recently. (You can use the API to identify users who have not used {% data variables.product.prodname_copilot_short %} recently.) To help those users, consider:

* Sharing resources to help them get started, such as "[AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself)," "[AUTOTITLE](/copilot/using-github-copilot/best-practices-for-using-github-copilot)," and "[AUTOTITLE](/copilot/using-github-copilot/prompt-engineering-for-github-copilot)"
* Learning about their barriers to using {% data variables.product.prodname_copilot_short %}
* Addressing any concerns they have about using {% data variables.product.prodname_copilot_short %}
* Giving them ideas for how to incorporate {% data variables.product.prodname_copilot_short %} into their work
* Pairing them with a mentor who can help them understand how to take advantage of {% data variables.product.prodname_copilot_short %}
