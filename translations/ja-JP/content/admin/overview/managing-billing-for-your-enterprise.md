---
title: Managing billing for your enterprise
intro: 'You can view billing information for your enterprise.'
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

{% data reusables.github-ae.about-billing %} Once per day, {% data variables.product.prodname_dotcom %} will count the number of users with a license for your enterprise. {% data variables.product.company_short %} bills you for each licensed user regardless of whether the user logged into {% data variables.product.prodname_ghe_managed %} that day.

For commercial regions, the price per user per day is $1.2580645161. For 31-day months, the monthly cost for each user is $39. For months with fewer days, the monthly cost is lower. Each billing month begins at a fixed time on the first day of the calendar month.

If you add a licensed user mid-month, that user will only be included in the count for the days they have a license. When you remove a licensed user, that user will remain in the count until the end of that month. Therefore, if you add a user mid-month and later remove the user in the same month, the user will be included in the count from the day the user was added through the end of the month. There is no additional cost if you re-add a user during the same month the user was removed.

For example, here are the costs for users with licenses on different dates.

| ユーザ       | License dates                                           | Counted days | Cost   |
| --------- | ------------------------------------------------------- | ------------ | ------ |
| @octocat  | January 1 - January 31                                  | 31           | $39    |
| @robocat  | February 1 - February 28                                | 29           | $35.23 |
| @devtocat | January 15 - January 31                                 | 17           | $21.39 |
| @doctocat | January 1 - January 15                                  | 31           | $39    |
| @prodocat | January 7 - January 15                                  | 25           | $31.45 |
| @monalisa | January 1 - January 7,<br>January 15 - January 31 | 31           | $39    |

Your enterprise can include one or more instances. {% data variables.product.prodname_ghe_managed %} has a 500-user minimum per instance. {% data variables.product.company_short %} bills you for a minimum of 500 users per instance, even if there are fewer than 500 users with a license that day.

You can see your current usage in your [Azure account portal](https://portal.azure.com).

{% else %}

### Enterprise アカウントの支払いについて

現時点では、Enterprise アカウントは請求書で支払いを行っている {% data variables.product.prodname_enterprise %} のお客様が利用できます。 Enterprise アカウントに接続されているすべての Organization と {% data variables.product.prodname_ghe_server %} インスタンスの支払いは、すべての有料の {% data variables.product.prodname_dotcom_the_website %} サービス（Organization の有料ライセンス、{% data variables.large_files.product_name_long %}データパック、および {% data variables.product.prodname_marketplace %} アプリケーションのプランを含む）に対する単一の支払い料金に集約されます。

Enterprise オーナーと支払いマネージャーは、Enterprise アカウントの支払い設定すべてに対するアクセスおよび管理が可能です。 For more information about enterprise accounts, {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

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
