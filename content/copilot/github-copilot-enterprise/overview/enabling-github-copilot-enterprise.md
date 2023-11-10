---
title: Enabling GitHub Copilot Enterprise
shortTitle: Enabling Copilot Enterprise
intro: 'Learn how to enable the features available with the {% data variables.product.prodname_copilot_enterprise %} beta.'
versions:
  ghec: '*'
topics:
  - Copilot
---

{% note %}

{% data variables.product.prodname_copilot_enterprise %} is in beta, and functionality and documentation are subject to change. You can nominate an organization or enterprise for the beta using the [{% data variables.product.prodname_copilot_enterprise_short %} waitlist form](https://github.com/github-copilot/copilot_enterprise_waitlist_signup/join).

{% endnote %}

## About {% data variables.product.prodname_copilot_enterprise_short %} features

To use {% data variables.product.prodname_copilot_enterprise %} features, you can nominate an organization or enterprise that you're a member of for the [{% data variables.product.prodname_copilot_enterprise_short %} waitlist](https://github.com/github-copilot/copilot_enterprise_waitlist_signup/join). To join the waitlist, the organization or enterprise must use {% data variables.product.prodname_ghe_cloud %} and have an active {% data variables.product.prodname_copilot_for_business %} subscription. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise)."

If an enterprise or organization is granted access to the {% data variables.product.prodname_copilot_enterprise_short %} beta, an administrator must enable the {% data variables.product.prodname_copilot_enterprise_short %} features before members can start using the features. You can enable features in the settings of the enterprise or organization. Enabling or disabling the {% data variables.product.prodname_copilot_enterprise_short %} features does not affect the features already included in your {% data variables.product.prodname_copilot_for_business %} subscription.

When members are granted access to the features, they will be notified that they have access, and receive instructions on how to start using the features.

## Enabling or disabling {% data variables.product.prodname_copilot_enterprise %} features for an enterprise

An enterprise owner can choose whether to enable {% data variables.product.prodname_copilot_enterprise %} features for all organizations, disable for all organizations, or allow each organization to choose its own policy for the features. By default, each organization can choose its own policy.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. Click the **Technical preview features** tab.
1. Next to "{% data variables.product.prodname_copilot_enterprise %}", select the dropdown menu (labeled **No policy** by default), then choose from the following options.

   - **No policy**: Each organization can choose whether to enable the feature for its members.
   - **Enabled**: The feature is enabled for members of all organizations.
   - **Disabled**: The feature is disabled for members of all organizations.

## Enabling or disabling {% data variables.product.prodname_copilot_enterprise_short %} features for an organization

If you use a standalone organization on {% data variables.product.prodname_ghe_cloud %}, or if your organization's parent enterprise has selected **No policy**, an organization owner can choose whether to enable or disable {% data variables.product.prodname_copilot_enterprise %} features for the organization's members.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**, then click **Policies and features**.
1. Next to "{% data variables.product.prodname_copilot_enterprise %}", select the dropdown menu (labeled **Enabled** by default), then choose from the following options.

   - **Enabled**: The feature is enabled for all members of the organization.
   - **Disabled**: The feature is disabled for all members of the organization.
