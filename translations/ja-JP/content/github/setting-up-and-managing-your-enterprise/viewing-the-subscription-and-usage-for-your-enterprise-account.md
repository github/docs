---
title: Enterprise アカウントのプランおよび利用状況を表示する
intro: Enterprise アカウントの、現在のプラン、ライセンスの利用、請求書、支払い履歴、その他支払い情報を表示できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners and billing managers can access and manage all billing settings for enterprise accounts.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Enterprise
---

### Enterprise アカウントの支払いについて

現時点では、Enterprise アカウントは請求書で支払いを行っている {% data variables.product.prodname_enterprise %} のお客様が利用できます。 Enterprise アカウントに接続されているすべての Organization と {% data variables.product.prodname_ghe_server %} インスタンスの支払いは、すべての有料 {% data variables.product.prodname_dotcom_the_website %} サービス（Organization の有料ライセンス、{% data variables.large_files.product_name_long %} データパック、{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %} {% data variables.product.prodname_GH_advanced_security %} の利用状況、{% endif %}{% data variables.product.prodname_marketplace %} アプリケーションのサブスクリプションを含む）の単一の支払いに集約されます。

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 詳しい情報については、「[Azure サブスクリプションを Enterprise に接続する](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)」を参照してください。{% endif %}

支払いマネージャーの管理に関する詳細は、「[Enterprise の管理をするよう招待する](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)」を参照してください。

### Enterprise アカウントのプランおよび利用状況を表示する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. ー
{% if currentVersion == "free-pro-team@latest" %}ライセンス{% else %}ライセンス{% endif %}で、ライセンスの合計数、消費ライセンス数、およびサブスクリプションの有効期限を表示します。
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Enterprise 支払い設定のライセンスおよびプラン情報](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. 必要に応じて、ライセンス使用状況の詳細を表示するか、
ライセンスの詳細を含む {% if currentVersion == "free-pro-team@latest" %}CSV{% elsif enterpriseServerVersions contains currentVersion %}JSON{% endif %} ファイルをダウンロードするには{% if currentVersion == "free-pro-team@latest" %}、[User Licenses]{% endif %} の右側にある [**View {% if currentVersion == "free-pro-team@latest" %}details{% elsif enterpriseServerVersions contains currentVersion %}users{% endif %}**] または [{% if currentVersion == "free-pro-team@latest" %}{% octicon "download" aria-label="The download icon" %}{% elsif enterpriseServerVersions contains currentVersion %}**Export license usage**] をクリックします{% endif %}。{% if currentVersion == "free-pro-team@latest" %}
  ![[View details] ボタンと [User Licenses] の右にあるダウンロードアイコン付きボタン](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}
1. 必要に応じて、他の機能の使用状況の詳細を表示するには、左サイドバーで [**Billing**] をクリックします。 ![Enterpriseアカウント設定のサイドバーの支払いタブ](/assets/images/help/business-accounts/settings-billing-tab.png)

### 参考リンク

- 「[GitHub Actions の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions#about-billing-for-github-actions)」
- 「[Git Large File Storage の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-git-large-file-storage)」
- 「[{% data variables.product.prodname_GH_advanced_security %} のライセンスについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)」

{% endif %}
