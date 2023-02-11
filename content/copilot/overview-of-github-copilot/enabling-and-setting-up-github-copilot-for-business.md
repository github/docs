---
title: Enabling and setting up GitHub Copilot for Business
intro: 'To use {% data variables.product.prodname_copilot_for_business %}, you need to enforce a policy in your enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Enabling GitHub Copilot for Business
---

{% data reusables.copilot.enabling-github-copilot-for-business %}

## Enabling {% data variables.product.prodname_copilot_for_business %} for your enterprise

{% note %}

**Note:** You must be an enterprise owner to enable {% data variables.product.prodname_copilot_for_business %} for your enterprise.

{% endnote %}

Your enterprise owner can enable {% data variables.product.prodname_copilot_for_business %} for the organizations in the enterprise by first establishing the policy and then assigning users. To enforce a policy to manage the use of {% data variables.product.prodname_copilot_for_business %}, follow the steps in "[Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_for_business %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise#enforcing-a-policy-to-manage-the-use-of-github-copilot-for-business-in-your-enterprise)." If you need additional help with policy configuration or user assignment for {% data variables.product.prodname_copilot_for_business %}, you can contact {% data variables.contact.contact_enterprise_sales %}.

![Screenshot of the {% data variables.product.prodname_copilot %} organization access settings](/assets/images/help/copilot/manage-org-access-enterprise.png)

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions matching public code on {% data variables.product.prodname_dotcom %}. Your enterprise owner can choose whether to enable or disable the filter at the enterprise-level, or allow organization administrators to decide at the organization-level. For more information, see "[Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} suggestions that match public code in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise#enforcing-a-policy-to-manage-the-use-of-github-copilot-suggestions-that-match-public-code-in-your-enterprise)."

## Configuring {% data variables.product.prodname_copilot %} settings in your organization

Once an enterprise owner has enabled {% data variables.product.prodname_copilot_for_business %} for an organization, organization administrators and members with admin permissions can configure {% data variables.product.prodname_copilot %} access for their organization. Depending on the policy settings configured at the enterprise-level, an organization administrator may also be able to determine whether to allow or block {% data variables.product.prodname_copilot %} suggestions that match public code. For more information, see "[Configuring {% data variables.product.prodname_copilot %} settings in your organization](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

## Assigning {% data variables.product.prodname_copilot %} seats

To give people or teams within your organization access to {% data variables.product.prodname_copilot %}, you need to assign them a {% data variables.product.prodname_copilot %} seat. Once a {% data variables.product.prodname_ghe_cloud %} admin enables a {% data variables.product.prodname_copilot_business_short %} subscription in your organization, you can assign {% data variables.product.prodname_copilot %} seats to individuals and teams in your organization. To enable access for all current and future users in your organization, or specific users in your organization, follow the steps in "[Configuring access to {% data variables.product.prodname_copilot %} in your organization](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#configuring-access-to-github-copilot-in-your-organization)."

![Screenshot of {% data variables.product.prodname_copilot %} user permissions](/assets/images/help/copilot/allow-all-members.png)
