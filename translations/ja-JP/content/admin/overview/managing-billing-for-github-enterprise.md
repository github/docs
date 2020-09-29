---
title: GitHub Enterprise の支払いを管理する
intro: 'Enterprise アカウントと {% data variables.product.prodname_ghe_server %} インスタンスのライセンス使用、請求書、支払い履歴、その他の支払い情報を表示できます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
versions:
  enterprise-server: '*'
---

### Enterprise アカウントの支払いについて

現時点では、Enterprise アカウントは請求書で支払いを行っている {% data variables.product.prodname_enterprise %} のお客様が利用できます。 Enterprise アカウントに接続されているすべての Organization と {% data variables.product.prodname_ghe_server %} インスタンスの支払いは、すべての有料の {% data variables.product.prodname_dotcom_the_website %} サービス（Organization の有料ライセンス、{% data variables.large_files.product_name_long %}データパック、および {% data variables.product.prodname_marketplace %} アプリケーションのプランを含む）に対する単一の支払い料金に集約されます。

Enterprise オーナーと支払いマネージャーは、Enterprise アカウントの支払い設定すべてに対するアクセスおよび管理が可能です。 Enterprise アカウントの詳細については、「[Enterprise アカウントのロール](/github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account)」を参照してください。 支払いマネージャーの管理に関する詳細は、「[Enterprise アカウントの管理をするよう招待する](/github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account)」を参照してください。

### 現在の請求書を表示する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. [Quick Actions] の下で [**View invoice**] をクリックします。 ![[View invoice] リンク](/assets/images/help/business-accounts/view-invoice-link.png)

### 現在の請求書の支払い

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. [Quick Actions] の下で [**Pay invoice**] をクリックします。 ![[Pay invoice] リンク](/assets/images/help/business-accounts/pay-invoice-link.png)
5. [Pay invoice] の下で、安全なフォームにクレジットカード情報を入力し、[**Pay Invoice**] をクリックします。 ![確認して請求書で支払う](/assets/images/help/business-accounts/pay-invoice.png)

### 現在の請求書をダウンロードする

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. [Quick Actions] の下で [**Download current invoice**] をクリックします。 ![[Download current invoice] リンク](/assets/images/help/business-accounts/download-current-invoice.png)

### 支払い履歴を表示する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. [Billing] の下で [**Past Invoices**] タブをクリックして、過去の支払い内容の概要を表示します。 ![[View payment history] タブ](/assets/images/help/business-accounts/view-payment-history.png)
