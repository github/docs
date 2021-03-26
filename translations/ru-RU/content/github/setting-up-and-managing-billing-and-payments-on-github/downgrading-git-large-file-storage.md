---
title: Downgrading Git Large File Storage
intro: 'You can downgrade storage and bandwidth for {% data variables.large_files.product_name_short %} by increments of 50 GB per month.'
redirect_from:
  - /articles/downgrading-storage-and-bandwidth-for-a-personal-account/
  - /articles/downgrading-storage-and-bandwidth-for-an-organization/
  - /articles/downgrading-git-large-file-storage
versions:
  free-pro-team: '*'
topics:
  - выставление счетов
---

When you downgrade your number of data packs, your change takes effect on your next billing date. For more information, see "[About billing for {% data variables.large_files.product_name_long %}](/articles/about-billing-for-git-large-file-storage)."

### Downgrading storage and bandwidth for a personal account

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}

### Downgrading storage and bandwidth for an organization

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}
