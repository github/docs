---
title: Managing policies for Copilot for Business in your organization
intro: 'Learn how to manage policies for {% data variables.product.prodname_copilot_for_business %} in your organization.'
permissions: Organization owners can configure policies for {% data variables.product.prodname_copilot_for_business %} for their organization.
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Managing policies
---

## About managing policies for {% data variables.product.prodname_copilot_for_business %}

{% data variables.product.prodname_copilot_for_business %} is a {% data variables.product.prodname_copilot %} subscription, managed at the organization {% ifversion ghec %}or enterprise {% endif %}level.{% ifversion ghec %} Enterprise owners can manage policies for organizations within the enterprise.{% endif %} Organization owners can manage policies for the use of {% data variables.product.prodname_copilot %} within the organization. The policy settings selected by an organization owner determine the behavior of {% data variables.product.prodname_copilot %} for all organization members granted access to {% data variables.product.prodname_copilot_short %} through the organization.

{% ifversion ghec %} Where explicit settings have been selected at the enterprise level, an organization owner cannot override those settings at the organization level. For more information on managing policies at the enterprise level, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)."{% endif %}

## Configuring suggestion matching policies for {% data variables.product.prodname_copilot %} in your organization

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_copilot_short %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If your suggestion matching policy is configured to block matching code, matching suggestions will not be shown to you.

{% ifversion ghec %}If your enterprise admin has selected **No policy (let each organization decide)** for suggestion matching at the enterprise level, you can set a suggestion matching policy for your organization. If an organization member is assigned a seat by multiple organizations with different suggestion matching policies under the same enterprise, {% data variables.product.prodname_copilot %} will use the most restrictive policy.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. In the "Suggestions matching public code" dropdown, select **Allow** or **Block** to allow or block suggestions matching public code.

## Configuring {% data variables.product.prodname_copilot_chat %} use in your organization

{% data variables.product.prodname_copilot_chat %} is a feature that allows users to chat with {% data variables.product.prodname_copilot %} to get code suggestions and answers to coding related questions. You can enable or disable {% data variables.product.prodname_copilot_chat %} for your organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. Under "Features preview", to the right of {% data variables.product.prodname_copilot_chat %}, in the dropdown, select **Allowed** or **Blocked** to allow or block {% data variables.product.prodname_copilot_chat %} in your organization.

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"
