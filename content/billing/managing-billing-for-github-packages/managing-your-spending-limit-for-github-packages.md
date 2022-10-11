---
title: Managing your spending limit for GitHub Packages
intro: 'You can set a spending limit for {% data variables.product.prodname_registry %} usage.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
versions:
  fpt: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Packages
  - Spending limits
  - User account
shortTitle: Your spending limit
---
## About spending limits for {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} For more information about pricing for {% data variables.product.prodname_registry %} usage, see "[About billing for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_registry %} usage beyond the amounts including with your account. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

As soon as you set a spending limit other than $0, you will be responsible for any existing overages in the current billing period. For example, if your organization uses {% data variables.product.prodname_team %}, does not allow overages, and publishes a new version of a private package that increases your storage usage for the month from 1.9GB to 2.1GB, publishing the version will use slightly more than the 2GB your product includes.

Because you have not enabled overages, your next attempt to publish a version of the package will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages, your first bill will include the 0.1GB of existing overage for the current billing cycle, as well as any additional overages you accrue.

## Managing the spending limit for {% data variables.product.prodname_registry %} for your user account

Anyone can manage the spending limit for {% data variables.product.prodname_registry %} for their own user account.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Managing the spending limit for {% data variables.product.prodname_registry %} for your organization

Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an organization.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Managing the spending limit for {% data variables.product.prodname_registry %} for your enterprise account

Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Above "{% data variables.product.prodname_actions %} and Packages monthly usage", click **Spending Limit**.
  ![Spending limit tab](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
