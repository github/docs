---
title: 降级 Git Large File Storage
intro: '您可以按照每月 50 GB 的增量，降级 {% data variables.large_files.product_name_short %} 的存储和带宽。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-git-large-file-storage
  - /articles/downgrading-storage-and-bandwidth-for-a-personal-account/
  - /articles/downgrading-storage-and-bandwidth-for-an-organization/
  - /articles/downgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/downgrading-git-large-file-storage
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Downgrades
  - LFS
  - Organizations
  - User account
---

降级数据包数量后，更改将在下一个结算日期生效。 更多信息请参阅“[关于 {% data variables.large_files.product_name_long %}](/articles/about-billing-for-git-large-file-storage) 的计费”。

### 降级个人帐户的存储和带宽

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}

### 降级组织的存储和带宽

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}
