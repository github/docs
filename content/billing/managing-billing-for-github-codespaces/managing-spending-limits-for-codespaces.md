---
title: Managing spending limits for Codespaces
intro: 'You can set a spending limit for {% data variables.product.prodname_codespaces %} usage.'
versions:
  fpt: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
shortTitle: Spending limits
---
## About spending limits for {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Once you've reached your spending limit, your organization or repository will no longer be able to create new codespaces, and won't be able to start existing codespaces. Any existing codespaces that are still running will not be shutdown; if you don't change the spending limit, you will not be charged for the amount that exceeds the limit.

For more information about pricing for {% data variables.product.prodname_codespaces %} usage, see "[About billing for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)."

## Using your Azure Subscription
If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_codespaces %} usage. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

## Managing the spending limit for {% data variables.product.prodname_codespaces %} for your organization

Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_codespaces %} for an organization.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit-codespaces %}
{% data reusables.dotcom_billing.update-spending-limit %}

## Managing the spending limit for {% data variables.product.prodname_codespaces %} for your enterprise account

Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_codespaces %} for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Above "{% data variables.product.prodname_codespaces %} monthly usage", click **Spending Limit**.
  ![Spending limit tab](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
