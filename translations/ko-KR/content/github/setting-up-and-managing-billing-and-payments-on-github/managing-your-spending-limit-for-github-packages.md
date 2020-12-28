---
title: Managing your spending limit for GitHub Packages
intro: 'You can set a spending limit for {% data variables.product.prodname_registry %} usage.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### About spending limits for {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} For more information about pricing for {% data variables.product.prodname_registry %} usage, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

As soon as you set a spending limit other than $0, you will be responsible for any existing overages in the current billing period. For example, if your organization uses {% data variables.product.prodname_team %}, does not allow overages, and publishes a new version of a private package that increases your storage usage for the month from 1.9GB to 2.1GB, publishing the version will use slightly more than the 2GB your product includes.

Because you have not enabled overages, your next attempt to publish a version of the package will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages, your first bill will include the 0.1GB of existing overage for the current billing cycle, as well as any additional overages you accrue.

### Managing the spending limit for {% data variables.product.prodname_registry %} for your user account

Anyone can manage the spending limit for {% data variables.product.prodname_registry %} for their own user account.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Managing the spending limit for {% data variables.product.prodname_registry %} for your organization

Organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an organization.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Managing the spending limit for {% data variables.product.prodname_registry %} for your enterprise account

Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an enterprise account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "
{% data variables.product.prodname_actions %} and Packages monthly usage", click **Cost management**.
  ![Cost management tab](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
