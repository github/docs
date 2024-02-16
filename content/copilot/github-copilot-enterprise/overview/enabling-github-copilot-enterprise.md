---
title: Enabling GitHub Copilot Enterprise
shortTitle: Enabling Copilot Enterprise
intro: 'Learn how to enable or disable the features available with {% data variables.product.prodname_copilot_enterprise %}.'
versions:
  ghec: '*'
topics:
  - Copilot
---

## About enabling and disabling {% data variables.product.prodname_copilot_enterprise_short %} features

If your enterprise has a {% data variables.product.prodname_copilot_enterprise_short %} subscription, then all members of organizations in the enterprise who have access to {% data variables.product.prodname_copilot_short %} can also be granted access to the features of {% data variables.product.prodname_copilot_enterprise_short %}.

For information about setting up {% data variables.product.prodname_copilot_enterprise %} for your enterprise account, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/managing-your-github-copilot-enterprise-subscription)." For information about the features of {% data variables.product.prodname_copilot_enterprise_short %}, see "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-enterprise/overview/github-copilot-enterprise-feature-set)."

Enterprise owners can enable or disable {% data variables.product.prodname_copilot_enterprise_short %} features for the entire enterprise. Depending on the choice of policy at the enterprise level, organization owners may be able to enable or disable {% data variables.product.prodname_copilot_enterprise_short %} features for their organization.

{% data variables.product.prodname_copilot_enterprise_short %} features are additional to the features available with a {% data variables.product.prodname_copilot_business_short %} subscription. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/copilot/copilot-business/github-copilot-business-feature-set)." When members are granted access to the features, they'll be notified by email that they have access. The message includes instructions on how to start using the features.

## Enabling or disabling {% data variables.product.prodname_copilot_enterprise %} features for an enterprise

An enterprise owner can choose whether to enable {% data variables.product.prodname_copilot_enterprise %} features for all organizations, disable for all organizations, or allow each organization to choose its own policy for the features. By default, each organization can choose its own policy.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. Click the **Technical preview features** tab.
1. Next to "{% data variables.product.prodname_copilot_enterprise %}", select the dropdown menu (labeled **No policy** by default), then choose from the following options.

   - **No policy**: Each organization can choose to enable the feature for its members.
   - **Enabled**: The feature is enabled for members of all organizations.
   - **Disabled**: The feature is disabled for members of all organizations.

{% note %}

**Note**: If you choose **No policy**, {% data variables.product.prodname_copilot_enterprise %} will initially be disabled for all organizations, but can be enabled by organization owners in their organization settings.

{% endnote %}

## Enabling or disabling {% data variables.product.prodname_copilot_enterprise_short %} features for an organization

If your organization's parent enterprise has selected **No policy**, {% data variables.product.prodname_copilot_enterprise %} will be disabled by default for your organization. An organization owner can choose to enable or disable the additional features provided by {% data variables.product.prodname_copilot_enterprise %} for all of the organization's members who have access to {% data variables.product.prodname_copilot_short %}.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**, then click **Policies and features**.
1. Next to "{% data variables.product.prodname_copilot_enterprise %}", select the dropdown menu (labeled **Disabled** by default), then choose from the following options.

   - **Enabled**: The feature is enabled for all members of the organization.
   - **Disabled**: The feature is disabled for all members of the organization.

## Further reading

- "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-business-in-your-organization)"
