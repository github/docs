---
title: Enforcing policies for GitHub Copilot in your enterprise
intro: 'You can enforce policies for {% data variables.product.prodname_copilot_for_business %} within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
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

{% data reusables.copilot.about-copilot %}

You can enforce policies for {% data variables.product.prodname_copilot_for_business %} within your enterprise's organizations, or allow policies to be set in each organization.

If you set up a subscription for {% data variables.product.prodname_copilot_for_business %}, you can grant and revoke access to {% data variables.product.prodname_copilot %} for organizations within your enterprise. Once you grant an organization access to {% data variables.product.prodname_copilot %}, the admins of that organization can grant access to individuals and teams. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

{% data variables.product.prodname_copilot_for_business %} subscriptions are billed monthly, based on the number of {% data variables.product.prodname_copilot %} seats assigned to users within your enterprise. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud)."

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_copilot_for_business %} lets you choose whether to enable or disable the filter at the enterprise-level, or allow organization owners to decide at the organization-level. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_for_business %} in your enterprise

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. Under "Manage organization access to {% data variables.product.prodname_copilot %}," configure the access for your {% data variables.product.prodname_copilot %} subscription.
    - To disable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, select **Disabled**.
    - To enable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, both current and future, select **Allow for all organizations**.
    - To enable {% data variables.product.prodname_copilot %} for specific organizations, select **Allow for specific organizations**.

1. If you selected **Allow for specific organizations**, select the organizations you want to enable {% data variables.product.prodname_copilot %} for. Alternatively, you can select the organizations you want to disable {% data variables.product.prodname_copilot %} access for.
    - Click the **Set organization permissions** dropdown and select **Enable** or **Disable** to grant or deny {% data variables.product.prodname_copilot %} access for the specified organizations.

    ![Screenshot of the {% data variables.product.prodname_copilot %} policy page. The organization permissions dropdown is outlined in dark orange.](/assets/images/help/copilot/set-org-permissions-enterprise.png)

1. Click **Save**.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} suggestions that match public code in your enterprise

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. Under "Suggestions matching public code," click the dropdown menu and select the policy you want to enforce.
    - To allow {% data variables.product.prodname_copilot %} suggestions matching public code, select **Allowed**.
    - To block {% data variables.product.prodname_copilot %} suggestions matching public code, select **Blocked**.
    - To allow each of your organizations to set their own policy on the use of {% data variables.product.prodname_copilot %} suggestions matching public code, select **No policy (let each organization decide)**.

    ![Screenshot of the {% data variables.product.prodname_copilot %} policy page. The dropdown menu of suggestions that match public code settings is outlined in dark orange.](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## Further reading

- "[AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"
