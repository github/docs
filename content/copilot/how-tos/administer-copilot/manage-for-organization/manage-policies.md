---
title: Managing policies and features for GitHub Copilot in your organization
intro: 'Control the availability of {% data variables.product.prodname_copilot %} features and models for users granted a license by your organization.'
permissions: Organization owners
product: 'Organizations with a {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} plan'
versions:
  feature: copilot
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization
  - /copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-business-in-your-organization
  - /copilot/managing-copilot-for-business/managing-policies-for-copilot-for-business-in-your-organization
  - /copilot/managing-copilot-business/managing-policies-for-copilot-business-in-your-organization
  - /copilot/managing-github-copilot-in-your-organization/managing-policies-and-features-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-and-features-for-copilot-in-your-organization
  - /copilot/github-copilot-chat/copilot-chat-in-github-mobile/enabling-github-copilot-chat-for-github-mobile
  - /copilot/github-copilot-chat/github-copilot-extensions/managing-github-copilot-extensions
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization
  - /copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization
  - /copilot/how-tos/administer/organizations/manage-policies
  - /copilot/how-tos/administer/manage-for-organization/manage-policies
topics:
  - Copilot
  - Organizations
shortTitle: Manage policies
contentType: how-tos
---

{% data reusables.organizations.copilot-policy-ent-overrides-org %}

## Enabling {% data variables.product.prodname_copilot_short %} features and models in your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, under "Code, planning, and automation", click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.
   * Click **Policies** to edit the policies that control privacy and availability of features.
   * Click **Models** to edit the policies that control availability of models beyond the basic models provided with {% data variables.product.prodname_copilot_short %}, which may incur additional costs.
1. For each policy you want to configure, click the dropdown menu and select an enforcement option.

{% data reusables.copilot.mcp-servers-policy-note %}

## Opting in to to previews or feedback

If your organization has a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan and you enable "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}", two additional options are displayed:

{% data reusables.copilot.policies-for-dotcom %}

## Further reading

* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions)
* [AUTOTITLE](/copilot/how-tos/administer/organizations/set-extension-permissions)
* [AUTOTITLE](/enterprise-cloud@latest/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise)
