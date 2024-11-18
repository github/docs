---
title: Viewing your GitHub Codespaces usage
shortTitle: Viewing your usage
intro: 'You can view the compute hours and storage used by {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
---

{% ifversion enhanced-billing-platform %}

{% data reusables.billing.enhanced-billing-platform %}

{% endif %}

## Viewing {% data variables.product.prodname_github_codespaces %} usage for your personal account

You can see how much of the usage included in your personal account you have used so far in the current monthly billing cycle. If you have set up a payment method, set a spending limit, and used all of your included usage, you can also check your bill for the current month.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
1. Under "{% data variables.product.prodname_codespaces %}," you can see how many core hours of {% data variables.product.prodname_github_codespaces %} compute usage and GB-months of storage you have used so far in the current billing month.

   ![Screenshot of the "{% data variables.product.prodname_codespaces %}" section of the billing page showing figures for "Usage hours" and "Storage."](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

   For information about "core hours" and "GB-months," see "[AUTOTITLE](/free-pro-team@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

1. Optionally, click **Usage hours** and **Storage** to see more details.

   ![Screenshot of the "{% data variables.product.prodname_codespaces %}" section of the billing page, expanded to show more details for "Usage hours" and "Storage."](/assets/images/help/codespaces/view-personal-usage-expanded.png)

   The **Included** column shows how many of the core hours of compute usage, or GB-months of storage, included free with your account, you have used so far this month. The **Paid** column shows how many billed core hours of usage, or GB-months of storage, you have used. The figures are updated once every hour.

   In the screenshot above, the entire quota of included storage for the month has been used. When you've used all of either the included compute usage or storage (whichever is reached first), you must set up a payment method and a spending limit to continue using {% data variables.product.prodname_github_codespaces %} during the current billing month. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)" and "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-personal-account)."

   {% data reusables.codespaces.tips-included-usage %}

{% data reusables.codespaces.usage-report-download %}

## Viewing {% data variables.product.prodname_github_codespaces %} usage for your organization account

Organization owners and billing managers can view {% data variables.product.prodname_github_codespaces %} usage for the organization.

{% data reusables.organizations.billing-settings %}
1. Under "Usage this month", under "{% data variables.product.prodname_codespaces %}", view the details of the compute hours and storage used so far this month.

   {% note %}

   **Notes**:
   * The costs shown here are the cumulative costs within the current billing month. The usage-based costs for {% data variables.product.prodname_github_codespaces %} shown on this page are reset to zero at the start of each billing month. Outstanding costs from previous months are not shown.
   * The figures on this page are updated every hour.

   {% endnote %}

   You can also see and update your current spending limit. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."

   The **Projected usage** figure gives an estimate of the total usage for the current billing month, assuming the compute and storage usage for the past seven days continues unchanged for the remainder of the billing month. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#viewing-projected-usage-for-an-organization)."

{% data reusables.codespaces.usage-report-download %}

{% ifversion ghec %}

## Viewing {% data variables.product.prodname_codespaces %} usage for your enterprise account

Enterprise owners and billing managers can view {% data variables.product.prodname_github_codespaces %} usage for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "{% data variables.product.prodname_codespaces %} monthly usage", view the usage details of each organization in your enterprise account.
{% data reusables.codespaces.usage-report-download %}
{% endif %}

## Further reading

* "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
