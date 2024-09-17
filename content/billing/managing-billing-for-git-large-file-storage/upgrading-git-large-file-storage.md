---
title: Upgrading Git Large File Storage
intro: 'You can purchase additional data packs to increase your monthly bandwidth quota and total storage capacity for {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-git-large-file-storage
  - /articles/purchasing-additional-storage-and-bandwidth-for-a-personal-account
  - /articles/purchasing-additional-storage-and-bandwidth-for-an-organization
  - /articles/upgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/upgrading-git-large-file-storage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - LFS
  - Organizations
  - Upgrades
  - User account
shortTitle: Upgrade Git LFS storage
---

{% ifversion enhanced-billing-platform %}

{% data reusables.billing.enhanced-billing-platform %}

{% endif %}

## Purchasing additional storage and bandwidth for a personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.lfs-add-data %}
{% data reusables.large_files.pack_selection %}
{% data reusables.large_files.pack_confirm %}

## Purchasing additional storage and bandwidth for an organization

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.lfs-add-data %}
{% data reusables.large_files.pack_selection %}
{% data reusables.large_files.pack_confirm %}

{% ifversion ghec %}

## Purchasing additional storage and bandwidth for an enterprise account

{% data reusables.enterprise-accounts.billing-perms %}

{% note %}

**Note:** If your enterprise account is invoiced, you may not be able to purchase Git LFS data packs on {% data variables.product.prodname_dotcom %}. Instead, contact {% data variables.contact.contact_enterprise_sales %}.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. To the right of "Git LFS", click **Purchase more data packs**.
1. Select the "Choose an organization" dropdown menu and click the organization you want to purchase a data pack for.
{% data reusables.large_files.pack_selection %}
{% data reusables.large_files.pack_confirm %}
{% endif %}

## Further reading

* "[AUTOTITLE](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)"
* "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage)"
* "[AUTOTITLE](/billing/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage)"
* "[AUTOTITLE](/repositories/working-with-files/managing-large-files)"
