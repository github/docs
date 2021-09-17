---
title: Git Large File Storage のダウングレード
intro: '{% data variables.large_files.product_name_short %} のストレージと帯域幅を 1 月あたり 50GB 刻みでダウングレードできます。'
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

データパック数をダウングレードすると、その変更は次回の支払日から有効になります。 詳細は「[{% data variables.large_files.product_name_long %} の支払いについて](/articles/about-billing-for-git-large-file-storage)」を参照してください。

### 個人アカウントのストレージと帯域幅をダウングレード

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}

### Organization のストレージと帯域幅をダウングレード

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}
