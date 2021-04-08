---
title: Enterprise アカウントのプランおよび利用状況を表示する
intro: 'Enterprise アカウントの、現在のプラン、ライセンスの利用、請求書、支払い履歴、その他支払い情報を表示できます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise オーナーと支払いマネージャーは、Enterprise アカウントの支払い設定すべてに対するアクセスおよび管理が可能です。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - enterprise
---

### Enterprise アカウントの支払いについて

現時点では、Enterprise アカウントは請求書で支払いを行っている {% data variables.product.prodname_enterprise %} のお客様が利用できます。 Billing for all of the organizations and {% data variables.product.prodname_ghe_server %} instances connected to your enterprise account are aggregated into a single bill charge for all of your paid {% data variables.product.prodname_dotcom_the_website %} services (including paid licenses in organizations, {% data variables.large_files.product_name_long %} data packs,{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %} {% data variables.product.prodname_GH_advanced_security %} usage,{% endif %} and subscriptions for {% data variables.product.prodname_marketplace %} apps).

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."{% endif %}

For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

### Enterprise アカウントのプランおよび利用状況を表示する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. ー
{% if currentVersion == "free-pro-team@latest" %}ライセンス{% else %}ライセンス{% endif %}で、ライセンスの合計数、消費ライセンス数、およびサブスクリプションの有効期限を表示します。
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Enterprise 支払い設定のライセンスおよびプラン情報](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Optionally, to view details for license usage or download a
{% if currentVersion == "free-pro-team@latest" %}CSV{% elsif enterpriseServerVersions contains currentVersion %}JSON{% endif %} file with license details{% if currentVersion == "free-pro-team@latest" %}, to the right of "User Licenses"{% endif %}, click **View {% if currentVersion == "free-pro-team@latest" %}details{% elsif enterpriseServerVersions contains currentVersion %}users{% endif %}** or {% if currentVersion == "free-pro-team@latest" %}{% octicon "download" aria-label="The download icon" %}{% elsif enterpriseServerVersions contains currentVersion %}**Export license usage**{% endif %}.{% if currentVersion == "free-pro-team@latest" %}
  !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}
1. Optionally, to view usage details for other features, in the left sidebar, click **Billing**. ![Enterpriseアカウント設定のサイドバーの支払いタブ](/assets/images/help/business-accounts/settings-billing-tab.png)

### 参考リンク

- "[About billing for GitHub Actions](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions#about-billing-for-github-actions)"
- "[About billing for Git Large File Storage](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-git-large-file-storage)"
- "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)"

{% endif %}
