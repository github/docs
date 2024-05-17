---
title: Enforcing policies for GitHub Copilot in your enterprise
intro: 'You can enforce policies for {% data variables.product.prodname_copilot %} within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
---

## About policies for {% data variables.product.prodname_copilot %} in your enterprise

If you have a subscription to {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %}, you can enforce policies for {% data variables.product.prodname_copilot %} within your enterprise's organizations, or allow policies to be set in each organization.

As an enterprise owner, you can grant and revoke access to {% data variables.product.prodname_copilot %} for organizations within your enterprise. Once you grant an organization access to {% data variables.product.prodname_copilot %}, the owners of that organization can grant access to individuals and teams. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

{% data variables.product.prodname_copilot %} subscriptions are billed monthly, based on the number of seats assigned to users within your enterprise. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud)."

Wherever a restrictive policy has been chosen at the enterprise level, an organization owner will not be able to select a more permissive policy at the organization level. In cases where no policy is selected at the enterprise level, and multiple organizations within the enterprise have chosen different policies and granted access to the same users, the most restrictive policy takes precedence for those users.

## Managing access to {% data variables.product.prodname_copilot %} in your enterprise

Enterprise owners can choose whether to grant access to {% data variables.product.prodname_copilot %} for all, none, or a selection of organizations within the enterprise.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. In the "{% data variables.product.prodname_copilot_short %} is active in your enterprise" section, configure the access for your {% data variables.product.prodname_copilot %} subscription.
    - To disable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, select **Disabled**.
    - To enable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, both current and future, select **Allow for: All organizations**.
    - To enable {% data variables.product.prodname_copilot %} for specific organizations, select **Allow for specific organizations**.

1. If you selected **Allow for specific organizations**, select the organizations you want to enable or disable {% data variables.product.prodname_copilot %} for. Then, click the **Set organization permissions** dropdown and select **Enable** or **Disable** to grant or deny {% data variables.product.prodname_copilot %} access for the specified organizations.

   ![Screenshot of the {% data variables.product.prodname_copilot %} policy page. The organization permissions dropdown is outlined in dark orange.](/assets/images/help/copilot/set-org-permissions-enterprise.png)

1. Review your selection.
    - If you selected **Disabled**, you will see a warning that disabling {% data variables.product.prodname_copilot %} will revoke access for all organizations and members. To confirm, click **Confirm and save**.
    - If you selected **Allow for: All organizations** or **Allow for specific organizations**, click **Save**.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} suggestions that match public code

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. You can choose whether to enable or disable the filter at the enterprise level, or allow organization owners to decide at the organization level. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "Suggestions matching public code," click the dropdown menu and select the policy you want to enforce.
    - To block {% data variables.product.prodname_copilot %} suggestions matching public code, select **Blocked**.
    - To allow {% data variables.product.prodname_copilot %} suggestions matching public code, select **Allowed**.
    - To allow each of your organizations to set their own policy on the use of {% data variables.product.prodname_copilot %} suggestions matching public code, select **No policy**.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}

With a {% data variables.product.prodname_copilot_enterprise_short %} license, members of your enterprise can access AI features that enhance their experience on {% data variables.product.prodname_dotcom_the_website %}, such as the ability to chat with {% data variables.product.prodname_copilot_short %} in the browser and reference context for {% data variables.product.prodname_copilot_short %} across multiple repositories. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/github-copilot-enterprise-feature-set)."

You can enable or disable the use of these features for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy to determine access to the features for their organization.

{% data reusables.copilot.copilot-enterprise-enable %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_chat %} in IDEs

{% data variables.product.prodname_copilot_chat %} is a feature that allows users to chat with {% data variables.product.prodname_copilot %} to get code suggestions and answers to coding-related questions. You can enable or disable the use of {% data variables.product.prodname_copilot_chat %} in IDEs for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy to determine access to {% data variables.product.prodname_copilot_chat %} for their organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)."

To manage the use of {% data variables.product.prodname_copilot_chat_dotcom_short %}, see "[Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}](#enforcing-a-policy-to-manage-the-use-of-github-copilot-features-on-githubcom)."

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_chat %} in the IDE," click the dropdown menu and select the policy you want to enforce.
    - To allow each of your organizations to set their own policy on the use of {% data variables.product.prodname_copilot_chat %}, select **No policy**.
    - To allow use of {% data variables.product.prodname_copilot_chat %}, select **Enabled**.
    - To prevent use of {% data variables.product.prodname_copilot_chat %}, select **Disabled**.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_cli %}

{% data reusables.copilot.copilot-cli-about %} You can enable or disable the use of {% data variables.product.prodname_copilot_cli_short %} for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy for {% data variables.product.prodname_copilot_cli_short %} for their organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli)."

{% data reusables.copilot.copilot-cli-enable %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_mobile %}

{% data variables.product.prodname_copilot_mobile %} is a chat interface that lets you interact with {% data variables.product.prodname_copilot %}, to ask and receive answers to coding-related questions within {% data variables.product.prodname_mobile %}. You can enable or disable the use of {% data variables.product.prodname_copilot_mobile_short %} for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy for {% data variables.product.prodname_copilot_mobile_short %} for their organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat-in-github-mobile)."

{% data reusables.copilot.copilot-chat-mobile-enable %}

## Further reading

- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center/)
