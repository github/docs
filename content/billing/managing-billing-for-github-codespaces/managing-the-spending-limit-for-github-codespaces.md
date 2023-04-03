---
title: Managing the spending limit for GitHub Codespaces
intro: 'You can set a spending limit for {% data variables.product.prodname_github_codespaces %} usage.'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
---
## About the {% data variables.product.prodname_github_codespaces %} spending limit

{% data reusables.codespaces.codespaces-free-for-personal-intro %} For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

{% data reusables.codespaces.codespaces-spending-limit-requirement %}
{% data reusables.codespaces.codespaces-monthly-billing %}

Once you've reached your spending limit, you will no longer be able to create new codespaces, and you won't be able to start existing codespaces. Any existing codespaces that are still running will be shut down in a short time, but you will not be charged for usage after you have reached your spending limit.

{% ifversion ghec %}
## Using your Azure Subscription
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_github_codespaces %} usage. For more information, see "[AUTOTITLE](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."
{% endif %}

## Managing the {% data variables.product.prodname_github_codespaces %} spending limit for your personal account

You can set a spending limit for {% data variables.product.prodname_github_codespaces %} for your own personal account.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans_spending %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.codespaces.monthly-spending-limit-codespaces %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Managing the {% data variables.product.prodname_github_codespaces %} spending limit for your organization account

Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_github_codespaces %} for an organization.

{% note %}

**Note**: Organizations that are owned by an enterprise account cannot specify their own spending limit as this is specified in the enterprise settings.

{% endnote %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.codespaces.monthly-spending-limit-codespaces %}
{% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Managing the {% data variables.product.prodname_github_codespaces %} spending limit for your enterprise account

Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_github_codespaces %} for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Spending Limit**.

   ![Spending limit tab](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %}
{% data reusables.dotcom_billing.update-spending-limit %}
{% endif %}

## Exporting changes when you have reached your spending limit

{% data reusables.codespaces.exporting-changes %}

## Managing usage and spending limit email notifications

Email notifications are sent to account owners and billing managers when spending reaches 75%, 90%, and 100% of an account's spending limit.

You can turn off these notifications at any time from the "Billing and plans" page. To turn off notifications, under "Email alerts", deselect the **Spending limits alerts** checkbox.

For personal accounts only, you can also choose to turn off email notifications that are sent when you have used 75%, 90%, and 100% of the free usage included with your personal account. To do this, clear the **Included resources alerts** checkbox.

![Screenshot of the "Email alerts" settings. The options "Included resources alerts" and "Spending limit alerts" are both selected.](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## Further reading

- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
