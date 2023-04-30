---
title: Enabling and setting up GitHub Copilot for Business
intro: 'To use {% data variables.product.prodname_copilot_for_business %}, you need to set up a subscription for your organization{% ifversion ghec %} or enterprise{% endif %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Enabling GitHub Copilot for Business
---

To use {% data variables.product.prodname_copilot_for_business %}, you need to set up a subscription for your organization{% ifversion ghec %} or enterprise{% endif %} account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

{% ifversion ghec %}{% data reusables.copilot.enabling-github-copilot-for-business %}

## Enabling {% data variables.product.prodname_copilot_business_short %} for your enterprise

{% note %}

**Note:**

- You must be an enterprise owner to enable {% data variables.product.prodname_copilot_business_short %} for your enterprise.
- If you set up a {% data variables.product.prodname_copilot_business_short %} subscription for your organization account, you can skip this section.

{% endnote %}

Your enterprise owner can enable {% data variables.product.prodname_copilot_business_short %} for the organizations in the enterprise by first establishing the policy and then assigning users. To enforce a policy to manage the use of {% data variables.product.prodname_copilot_business_short %}, follow the steps in "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise#enforcing-a-policy-to-manage-the-use-of-github-copilot-for-business-in-your-enterprise)." If you need additional help with policy configuration or user assignment for {% data variables.product.prodname_copilot_business_short %}, you can contact {% data variables.contact.contact_enterprise_sales %}.

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. Your enterprise owner can choose whether to enable or disable the filter at the enterprise-level, or allow organization administrators to decide at the organization-level. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise#enforcing-a-policy-to-manage-the-use-of-github-copilot-suggestions-that-match-public-code-in-your-enterprise)."{% endif %}

## Configuring {% data variables.product.prodname_copilot %} settings in your organization

{% ifversion ghec %}
{% note %}

**Note:** If you set up a {% data variables.product.prodname_copilot_business_short %} subscription for your organization account, you configure {% data variables.product.prodname_copilot %} settings in your organization without an enterprise policy.

{% endnote %}

Once an enterprise owner has enabled {% data variables.product.prodname_copilot_business_short %} for an organization, organization administrators and members with admin permissions can configure {% data variables.product.prodname_copilot %} access for their organization. Depending on the policy settings configured at the enterprise-level, an organization administrator may also be able to determine whether to allow or block {% data variables.product.prodname_copilot %} suggestions that match public code.{% endif %}{% ifversion fpt %}After setting up a {% data variables.product.prodname_copilot_business_short %} subscription for your organization, you can configure {% data variables.product.prodname_copilot %} settings in your organization. This includes granting and revoking access to individuals and teams, and determining whether to block suggestions that match public code.{% endif %} For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

## Assigning {% data variables.product.prodname_copilot %} seats

To give people or teams within your organization access to {% data variables.product.prodname_copilot %}, you need to assign them a {% data variables.product.prodname_copilot %} seat. {% ifversion ghec %}Once a {% data variables.product.prodname_ghe_cloud %} admin enables a {% data variables.product.prodname_copilot_business_short %} subscription in your organization, you can assign {% data variables.product.prodname_copilot %} seats to individuals and teams in your organization.{% endif %} To enable access for all current and future users in your organization, or specific users in your organization, follow the steps in "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#configuring-access-to-github-copilot-in-your-organization)."