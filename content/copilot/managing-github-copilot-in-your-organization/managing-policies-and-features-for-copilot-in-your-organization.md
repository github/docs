---
title: Managing policies and features for Copilot in your organization
intro: 'Learn how to manage policies for {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} and{% endif %} {% data variables.product.prodname_copilot_for_business %} in your organization.'
permissions: Organization owners can configure policies for {% data variables.product.prodname_copilot %} for their organization.
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-business-in-your-organization
  - /copilot/managing-copilot-for-business/managing-policies-for-copilot-for-business-in-your-organization
  - /copilot/managing-copilot-business/managing-policies-for-copilot-business-in-your-organization
topics:
  - Copilot
shortTitle: Managing policies
---

## About managing policies for {% data variables.product.prodname_copilot %}

{% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise %} and {% endif %}{% data variables.product.prodname_copilot_for_business %} {% ifversion ghec %}are{% else %}is a{% endif %} {% data variables.product.prodname_copilot %} subscription{% ifversion ghec %}s{% endif %}, managed at the {% ifversion ghec %}enterprise and{% endif %} organization level{% ifversion ghec %}s{% endif %}. Organization owners can manage policies for the use of {% data variables.product.prodname_copilot %} within the organization. The policy settings selected by an organization owner determine the behavior of {% data variables.product.prodname_copilot %} for all organization members granted access to {% data variables.product.prodname_copilot_short %} through the organization.

{% ifversion ghec %}Enterprise owners can manage policies for organizations within the enterprise. Where explicit settings have been selected at the enterprise level, an organization owner cannot override those settings at the organization level. For more information on managing policies at the enterprise level, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)."{% endif %}

## Configuring suggestion matching policies for {% data variables.product.prodname_copilot %} in your organization

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_copilot_short %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If your suggestion matching policy is configured to block matching code, matching suggestions will not be shown to you.

{% ifversion ghec %}If your enterprise admin has selected **No policy** for suggestion matching at the enterprise level, you can set a suggestion matching policy for your organization. If an organization member is assigned a seat by multiple organizations with different suggestion matching policies under the same enterprise, {% data variables.product.prodname_copilot %} will use the most restrictive policy.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. Under "Policies", in the "Suggestions matching public code" dropdown, select **Allowed** or **Blocked**.

## Enabling features of {% data variables.product.prodname_copilot %} in your organization

{% ifversion ghec %}If your enterprise admin has selected **No policy** for the following features, you can enable or disable these for your organization.{% else %}You can enable or disable the following features for {% data variables.product.prodname_copilot %}.{% endif %}

- Suggestions matching public code{% ifversion ghec %}
- {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %} (if your organization has a {% data variables.product.prodname_copilot_enterprise_short %} subscription){% endif %}
- {% data variables.product.prodname_copilot_chat_short %} in the IDE
- {% data variables.product.prodname_copilot_cli_short %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. Use the dropdown options to the right of each feature to enable or disable that feature for your organization.
{% ifversion ghec %}
1. If your organization has a {% data variables.product.prodname_copilot_enterprise_short %} subscription and you enable {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}, the option **Give {% data variables.product.prodname_copilot_short %} access to Bing** is displayed. Depending on your enterprise settings, you may be able to enable this option. When this option is enabled, {% data variables.product.prodname_copilot_chat_short %} will use search results from Bing to answer some questions.
{% endif %}

## Further reading

- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center)
- "[AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions)"
{% ifversion ghec %}- "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise)"{% endif %}
- "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)"
- "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat-in-github-mobile)"
- "[AUTOTITLE](/copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli)"
