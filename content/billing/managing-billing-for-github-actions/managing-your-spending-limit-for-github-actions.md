---
title: Managing your spending limit for GitHub Actions
intro: 'You can set a spending limit for {% data variables.product.prodname_actions %} usage.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - Spending limits
  - User account
shortTitle: Spending limits for Actions
---

{% ifversion enhanced-billing-platform %}

{% data reusables.billing.enhanced-billing-platform %}

{% endif %}

## About spending limits for {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} For more information about pricing for {% data variables.product.prodname_actions %} usage, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

If you are an organization owner{% ifversion ghec %} or enterprise owner{% endif%}, you can connect an Azure Subscription ID to your organization {% ifversion ghec %}or enterprise{% endif%} account to enable and pay for {% data variables.product.prodname_actions %} usage beyond the amounts including with your account. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."

As soon as you set a spending limit other than $0, you will be responsible for any existing overages in the current billing period. For example, if your organization uses {% data variables.product.prodname_team %}, does not allow overages, and creates workflow artifacts that increase your storage usage for the month from 1.9GB to 2.1GB, you will use slightly more storage than the 2GB your product includes.

Because you have not enabled overages, your next attempt to create a workflow artifact will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages, your first bill will include the 0.1GB of existing overage for the current billing cycle, as well as any additional overages you accrue.

## Managing the spending limit for {% data variables.product.prodname_actions %} for your personal account

Anyone can manage the spending limit for {% data variables.product.prodname_actions %} for their own personal account.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans_spending %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Managing the spending limit for {% data variables.product.prodname_actions %} for your organization

Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_actions %} for an organization.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
1. Under "Monthly spending limit", choose to limit spending or allow unlimited spending.

   {% note %}

   **Note:** If {% data variables.product.prodname_github_codespaces %} is enabled for your organization, scroll to "Actions & Packages", then choose to limit spending or allow unlimited spending.

   {% endnote %}
{% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}

## Managing the spending limit for {% data variables.product.prodname_actions %} for your enterprise account

Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_actions %} for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. On the "Billing" page, click the **Spending limit** tab.

   ![Screenshot of the "Billing" page. A tab labeled "Spending limit" is highlighted with an orange outline.](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
{% endif %}

## Managing usage and spending limit email notifications

{% data reusables.billing.email-notifications %}
