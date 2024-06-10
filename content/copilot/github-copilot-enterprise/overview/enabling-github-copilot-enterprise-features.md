---
title: Enabling GitHub Copilot Enterprise features
shortTitle: Enabling Copilot Enterprise
intro: 'Learn how to enable or disable the features available with {% data variables.product.prodname_copilot_enterprise %}.'
versions:
  ghec: '*'
redirect_from:
  - /copilot/github-copilot-enterprise/overview/enabling-github-copilot-enterprise
topics:
  - Copilot
---

## Introduction

To enable users to use {% data variables.product.prodname_copilot_enterprise_short %} features, your {% data variables.product.prodname_ghe_cloud %} enterprise must have a subscription to {% data variables.product.prodname_copilot_enterprise_short %}. For more information, see "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."

Access to {% data variables.product.prodname_copilot_short %} is determined at the enterprise and organization levels:

- Enterprise owners can allow some or all of the organizations in the enterprise to access {% data variables.product.prodname_copilot_short %}. For more information, see "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise)."
- Owners of organizations that have been granted access to {% data variables.product.prodname_copilot_short %} can assign {% data variables.product.prodname_copilot_enterprise %} seats to some or all members of their organization. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/copilot/managing-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization)."

When access to {% data variables.product.prodname_copilot_short %} has been enabled, features such as the ability to use {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %}, can be configured. Features are enabled or disabled at the enterprise or organization level:

- Enterprise owners can set {% data variables.product.prodname_copilot_short %} features to be enabled or disabled for all organizations in the enterprise that have access to {% data variables.product.prodname_copilot_short %}. Alternatively, they can allow each organization to set its own policy for each feature.
- If the enterprise owner has permitted it, organization owners can enable or disable {% data variables.product.prodname_copilot_short %} features for their organization.

This article explains how to enable or disable the features of {% data variables.product.prodname_copilot_enterprise %} at the enterprise level, and for an individual organization.

## About {% data variables.product.prodname_copilot_enterprise_short %} features

{% data variables.product.prodname_copilot_enterprise %} provides AI features to enhance your experience on {% data variables.product.prodname_dotcom_the_website %}, such as the ability to chat with {% data variables.product.prodname_copilot_short %} in the browser and reference context for {% data variables.product.prodname_copilot_short %} from across your project repositories. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/github-copilot-enterprise-feature-set)."

When members are granted access to the features, they'll be notified by email that they have access. The message includes instructions on how to start using the features.

## Enabling or disabling {% data variables.product.prodname_copilot_enterprise %} features for an enterprise

An enterprise owner can choose whether to enable {% data variables.product.prodname_copilot_enterprise %} features for all organizations, disable for all organizations, or allow each organization to choose its own policy for the features. By default, each organization can choose its own policy.

{% data reusables.copilot.copilot-enterprise-enable %}

## Enabling or disabling {% data variables.product.prodname_copilot_enterprise_short %} features for an organization

Organization owners can enable or disable {% data variables.product.prodname_copilot_enterprise_short %} for all members of their organization that have access to {% data variables.product.prodname_copilot_enterprise_short %}, provided no specific policy has been set to enable or disable {% data variables.product.prodname_copilot_enterprise_short %} at the enterprise level.

### Granting access to {% data variables.product.prodname_copilot_short %}

To give members of your organization access to the features of {% data variables.product.prodname_copilot_enterprise_short %} those members must have access to {% data variables.product.prodname_copilot_short %}. This is achieved by assigning seats for {% data variables.product.prodname_copilot_short %}. Once a {% data variables.product.prodname_ghe_cloud %} admin enables a {% data variables.product.prodname_copilot_enterprise_short %} subscription in your organization, you can assign {% data variables.product.prodname_copilot %} seats to individuals and teams in the organization. See "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization#configuring-access-to-github-copilot-in-your-organization)."

### Enabling or disabling {% data variables.product.prodname_copilot_enterprise_short %}

{% data variables.product.prodname_copilot_enterprise_short %} can be enabled or disabled at either the enterprise or organization level.

If your organization's parent enterprise has selected **No policy** for "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" in the enterprise settings, {% data variables.product.prodname_copilot_enterprise %} will initially be disabled for your organization. If you are an owner of the organization, you can choose to enable the additional features provided by {% data variables.product.prodname_copilot_enterprise %} for all of the organization's members who have access to {% data variables.product.prodname_copilot_short %}.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}

   > [!NOTE] If the side panel only contains the **Access** option under **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**, it indicates that {% data variables.product.prodname_copilot_short %} is not currently available in the organization. An enterprise admin must enable {% data variables.product.prodname_copilot_short %} for your organization. See "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise)."

1. Next to "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}", select the dropdown menu (labeled **Disabled** by default), then choose from the following options.

   - **Enabled**: The feature is enabled for all members of the organization.
   - **Disabled**: The feature is disabled for all members of the organization.

1. If you select **Enabled**, two check boxes are displayed.

   {% data reusables.copilot.policies-for-dotcom %}

## Configuring {% data variables.product.prodname_copilot_enterprise_short %} features for an organization

After {% data variables.product.prodname_copilot_enterprise_short %} has been enabled for an organization, an administrator should spend a few minutes setting up their organization to ensure users have a great onboarding experience.

1. Index your organization's most popular repositories.

   {% data variables.product.prodname_copilot_enterprise_short %} works best when repositories have semantic code indexing enabled. For more information, see [AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-chat/copilot-chat-in-github/using-github-copilot-chat-in-githubcom#repo-indexing-note).

   > [!NOTE] Initial indexing can take up to 30 minutes for large repositories. Once a repository has been indexed for the first time, updates will typically be indexed within 5 minutes.

1. Create at least one knowledge base.

   Knowledge bases bring together Markdown documentation across one or more repositories and make them available through {% data variables.product.prodname_copilot_enterprise_short %}. Once created, organization members can specify a knowledge base as the context for {% data variables.product.prodname_copilot_chat_dotcom_short %} and {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/copilot/github-copilot-enterprise/managing-copilot-knowledge-bases)."

## Further reading

- "[AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-business-in-your-organization)"
