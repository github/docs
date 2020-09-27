---
title: Managing your spending limit for GitHub Actions
intro: 'You can set a spending limit for {{ site.data.variables.product.prodname_actions }} usage.'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
---

### About spending limits for {{ site.data.variables.product.prodname_actions }}

{{ site.data.reusables.github-actions.actions-billing }} {{ site.data.reusables.github-actions.actions-spending-limit }}

You can set a higher spending limit or, for some accounts, allow unlimited spending. If you pay for your organization or enterprise account by invoice, you can prepay for overages to set a higher spending limit. The spending limit applies to your combined overages for {{ site.data.variables.product.prodname_actions }} and {{ site.data.variables.product.prodname_registry }}. For more information about pricing for {{ site.data.variables.product.prodname_actions }} usage, see "[About billing for {{ site.data.variables.product.prodname_actions }}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)."

As soon as you set a spending limit above $0, you will be responsible for any overages that occurred in the past. For example, if your organization uses {{ site.data.variables.product.prodname_team }}, does not allow overages, and creates workflow artifacts that increase your storage usage for the month from 1.9GB to 2.1GB, you will use slightly more storage than the 2GB your product includes.

Because you have not enabled overages, your next attempt to publish a version of the package will fail. You will not receive a bill for the 0.1GB overage that month. However, if you enable overages in a future month, your first bill will include the 0.1GB of overage from the past in addition to any overages for the current billing cycle.

### Managing the spending limit for {{ site.data.variables.product.prodname_actions }} for your user account

Anyone can manage the spending limit for {{ site.data.variables.product.prodname_actions }} for their own user account.

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.user_settings.cost-management-tab }}
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}

### Managing the spending limit for {{ site.data.variables.product.prodname_actions }} for your organization

Organizations owners and billing managers can manage the spending limit for {{ site.data.variables.product.prodname_actions }} for an organization.

If you pay for your organization account by invoice, you cannot manage the spending limit for your enterprise account on {{ site.data.variables.product.product_name }}. If you want to allow repositories owned by your organization to use {{ site.data.variables.product.prodname_actions }} beyond the storage or data transfer included for each repository, you can prepay for overages. Because overages must prepaid, you cannot enable unlimited spending on accounts paid by invoice. Your spending limit will be 150% of the amount you prepaid. If you have any questions, [contact our account management team](https://enterprise.github.com/contact).

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.cost-management-tab }}
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}

### Managing the spending limit for {{ site.data.variables.product.prodname_actions }} for your enterprise account

Enterprise owners and billing managers can manage the spending limit for {{ site.data.variables.product.prodname_actions }} for an enterprise account.

{{ site.data.reusables.github-actions.spending-limit-enterprise-account }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. Under "{{ site.data.variables.product.prodname_actions }} and Packages monthly usage", click **Cost management**. ![Cost management tab](/assets/images/help/settings/cost-management-tab-enterprise.png)
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}
