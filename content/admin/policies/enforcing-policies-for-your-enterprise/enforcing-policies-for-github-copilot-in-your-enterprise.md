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

As an enterprise owner, you can grant and revoke access to {% data variables.product.prodname_copilot %} for organizations within your enterprise. Once you grant an organization access to {% data variables.product.prodname_copilot %}, the admins of that organization can grant access to individuals and teams. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

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
    - To allow {% data variables.product.prodname_copilot %} suggestions matching public code, select **Allowed**.
    - To block {% data variables.product.prodname_copilot %} suggestions matching public code, select **Blocked**.
    - To allow each of your organizations to set their own policy on the use of {% data variables.product.prodname_copilot %} suggestions matching public code, select **No policy**.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_chat %} in IDEs and mobile

{% data variables.product.prodname_copilot_chat %} is a feature that allows users to chat with {% data variables.product.prodname_copilot %} to get code suggestions and answers to coding-related questions. You can enable or disable the use of {% data variables.product.prodname_copilot_chat %} in IDEs and mobile for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy to determine access to {% data variables.product.prodname_copilot_chat %} for each organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/about-github-copilot-chat)."

To manage the use of {% data variables.product.prodname_copilot_chat_dotcom_short %}, see "[Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}](#enforcing-a-policy-to-manage-the-use-of-github-copilot-features-on-githubcom)."

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_chat %} in the IDEs and Mobile," click the dropdown menu and select the policy you want to enforce.
    - To allow {% data variables.product.prodname_copilot_chat %} use, select **Allowed**.
    - To block {% data variables.product.prodname_copilot_chat %} use, select **Blocked**.
    - To allow each of your organizations to set their own policy on the use of {% data variables.product.prodname_copilot_chat %}, select **No policy**.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}

With a {% data variables.product.prodname_copilot_enterprise_short %} license, members of your enterprise can access {% data variables.product.prodname_copilot_short %} features on {% data variables.product.prodname_dotcom_the_website %}. These features include:

- {% data variables.product.prodname_copilot_chat_dotcom_short %}
- {% data variables.product.prodname_copilot_for_prs %}
- {% data variables.product.prodname_copilot_for_docs %}

For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/about-github-copilot-enterprise)."

You can enable or disable the use of these features for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy to determine access to the features for each organization.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}," click the dropdown menu and select the policy you want to enforce.
    - To allow use of these features, select **Allowed**.
    - To block use of these features, select **Blocked**.
    - To allow each of your organizations to set their own policy, select **No policy**.

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-business-privacy-statement)"
- [{% data variables.product.prodname_copilot %} Trust Center](https://resources.github.com/copilot-trust-center/)
