---
title: About GitHub Copilot for Business
intro: 'With {% data variables.product.prodname_copilot_for_business %} you can manage access to {% data variables.product.prodname_copilot %} for organizations within your enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: About GitHub Copilot for Business
---

## About {% data variables.product.prodname_copilot_for_business %}

{% data reusables.copilot.about-copilot %}

With {% data variables.product.prodname_copilot_for_business %}, you can manage access to {% data variables.product.prodname_copilot %} for organizations within your enterprise. Once you grant an organization access to {% data variables.product.prodname_copilot %}, the administrators of that organization can grant access to individuals and teams. For more information, see "[Configuring {% data variables.product.prodname_copilot %} settings in your organization](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

## Setting up {% data variables.product.prodname_copilot_for_business %}

To use {% data variables.product.prodname_copilot_for_business %}, you need a subscription. For help with setting up your subscription for {% data variables.product.prodname_copilot_for_business %}, you can contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://github.com/enterprise/contact?scid=&utm_campaign=2023q2-site-ww-CopilotForBusiness&utm_medium=referral&utm_source=github).

### Enabling {% data variables.product.prodname_copilot_for_business %} for your enterprise

Once the subscription is set up, your enterprise owner can enable or disable {% data variables.product.prodname_copilot_for_business %} for the organizations in the enterprise by enforcing a policy. To enforce a policy to manage the use of {% data variables.product.prodname_copilot_for_business %}, follow the steps in "[Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_for_business %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise#enforcing-a-policy-to-manage-the-use-of-github-copilot-for-business-in-your-enterprise)."

![Screenshot of the {% data variables.product.prodname_copilot %} organization access settingsair](/assets/images/help/copilot/manage-org-access-enterprise.png)

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions matching public code on {% data variables.product.prodname_dotcom %}. Your enterprise owner can choose whether to enable or disable the filter at the enterprise-level, or allow organization administrators to decide at the organization-level. For more information, see "[Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} suggestions that match public code in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise#enforcing-a-policy-to-manage-the-use-of-github-copilot-suggestions-that-match-public-code-in-your-enterprise)."

### Configuring {% data variables.product.prodname_copilot %} settings in your organization

Once an enterprise owner has enabled {% data variables.product.prodname_copilot_for_business %} for an organization, organization administrators and members with admin permissions can configure {% data variables.product.prodname_copilot %} access for their organization. Depending on the policy settings configured at the enterprise-level, an organization administrator may also be able to determine whether to allow or block {% data variables.product.prodname_copilot %} suggestions that match public code. For more information, see "[Configuring {% data variables.product.prodname_copilot %} settings in your organization](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

### Assigning {% data variables.product.prodname_copilot %} seats

To give people or teams within your organization access to {% data variables.product.prodname_copilot %}, you need to assign them a {% data variables.product.prodname_copilot %} seat. Once a {% data variables.product.prodname_ghe_cloud %} admin enables a {% data variables.product.prodname_copilot_business_short %} subscription in your organization, you can assign {% data variables.product.prodname_copilot %} seats to individuals and teams in your organization. To enable access for all current and future users in your organization, or specific users in your organization, follow the steps in "[Configuring access to {% data variables.product.prodname_copilot %} in your organization](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#configuring-access-to-github-copilot-in-your-organization)."

![Screenshot of {% data variables.product.prodname_copilot %} user permissions](/assets/images/help/copilot/allow-all-members.png)

## About billing for {% data variables.product.prodname_copilot_for_business %}

{% data variables.product.prodname_copilot_for_business %} subscriptions are billed monthly, based on the number of {% data variables.product.prodname_copilot %} seats assigned to users within your enterprise. For more information, see "[Pricing for {% data variables.product.prodname_copilot_for_business %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)."