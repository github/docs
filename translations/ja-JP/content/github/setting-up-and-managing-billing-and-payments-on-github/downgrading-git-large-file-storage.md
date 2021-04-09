---
title: Git Large File Storage のダウングレード
intro: '{% data variables.large_files.product_name_short %} のストレージと帯域幅を 1 月あたり 50GB 刻みでダウングレードできます。'
redirect_from:
  - /articles/downgrading-storage-and-bandwidth-for-a-personal-account/
  - /articles/downgrading-storage-and-bandwidth-for-an-organization/
  - /articles/downgrading-git-large-file-storage
versions:
  free-pro-team: '*'
topics:
  - 支払い
---

データパック数をダウングレードすると、その変更は次回の支払日から有効になります。 詳細は「[{% data variables.large_files.product_name_long %} の支払いについて](/articles/about-billing-for-git-large-file-storage)」を参照してください。

### 個人アカウントのストレージと帯域幅をダウングレード

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}

### Organization のストレージと帯域幅をダウングレード

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}
