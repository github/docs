---
title: Enterprise の支払いを管理する
intro: 'Enterprise の支払情報を確認できます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-ae.about-billing %} 1日に1度、{% data variables.product.prodname_dotcom %} は、Enterprise のライセンスを持つユーザ数をカウントします。 {% data variables.product.company_short %} は、ユーザがその日に {% data variables.product.prodname_ghe_managed %} にログインしたかどうかに関係なく、ライセンスされたユーザごとに請求します。

商業地域の場合、ユーザー1人あたりの1日あたりの価格は $ 1.2580645161 です。 31日間の場合、各ユーザの月額料金は 39 ドルです。 日数が少ない月の場合、月額料金は低くなります。 各支払い月は、カレンダー月の初日の固定の時刻に開始されます。

月の半ばにライセンスユーザを追加した場合、そのユーザはライセンスを付与された日からカウントされます。 ライセンスユーザを削除した場合、そのユーザは削除された月の末までカウントされます。 したがって、月の途中でユーザを追加し、その後、同じ月にユーザを削除した場合、そのユーザは、ユーザが追加された日から月末までカウントされます。 同じ月に、ユーザを削除して再度追加した場合、追加料金は発生しません。

たとえば、異なる日付でライセンスを付与した場合のユーザ料金は次のとおりです。

| ユーザ       | ライセンスされた日                       | カウント日数 | 料金     |
| --------- | ------------------------------- | ------ | ------ |
| @octocat  | 1月1日～1月31日                      | 31     | $39    |
| @robocat  | 2月1日～2月28日                      | 29     | $35.23 |
| @devtocat | 1月15日～1月31日                     | 17     | $21.39 |
| @doctocat | 1月1日～1月15日                      | 31     | $39    |
| @prodocat | 1月7日～1月15日                      | 25     | $31.45 |
| @monalisa | 1月1日～1月7日、<br>1月15日～1月31日 | 31     | $39    |

Enterprise には、1つ以上のインスタンスを含めることができます。 {% data variables.product.prodname_ghe_managed %} のインスタンスごとの最小ユーザ数は 500 です。 {% data variables.product.company_short %} は、同日にライセンスを付与されたユーザが 500 未満の場合でも、インスタンスごとに最低 500 ユーザ分の料金を請求します。

[Azure アカウントポータル](https://portal.azure.com)で現在の使用状況を確認できます。

{% else %}

### Enterprise アカウントの支払いについて

現時点では、Enterprise アカウントは請求書で支払いを行っている {% data variables.product.prodname_enterprise %} のお客様が利用できます。 Enterprise アカウントに接続されているすべての Organization と {% data variables.product.prodname_ghe_server %} インスタンスの支払いは、すべての有料の {% data variables.product.prodname_dotcom_the_website %} サービス（Organization の有料ライセンス、{% data variables.large_files.product_name_long %}データパック、および {% data variables.product.prodname_marketplace %} アプリケーションのプランを含む）に対する単一の支払い料金に集約されます。

Enterprise オーナーと支払いマネージャーは、Enterprise アカウントの支払い設定すべてに対するアクセスおよび管理が可能です。 Enterprise アカウントの詳細については、{% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}「[Enterprise のロール](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)」および{% endif %}「[Organization のリポジト権限レベル](/articles/repository-permission-levels-for-an-organization)」を参照してください。支払いマネージャー管理の詳細については、「[Enterprise アカウントを管理するようユーザを招待する](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)」を参照してください。

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

{% endif %}
