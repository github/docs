---
title: About billing for your enterprise
intro: Enterprise の支払情報を確認できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Billing for your enterprise
---

## About billing for your enterprise

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} 1日に1度、{% data variables.product.prodname_dotcom %} は、Enterprise のライセンスを持つユーザ数をカウントします。 {% data variables.product.company_short %} は、ユーザがその日に {% data variables.product.prodname_ghe_managed %} にログインしたかどうかに関係なく、ライセンスされたユーザごとに請求します。

商業地域の場合、ユーザー1人あたりの1日あたりの価格は $ 1.2580645161 です。 31日間の場合、各ユーザの月額料金は 39 ドルです。 日数が少ない月の場合、月額料金は低くなります。 各支払い月は、カレンダー月の初日の固定の時刻に開始されます。

月の半ばにライセンスユーザを追加した場合、そのユーザはライセンスを付与された日からカウントされます。 ライセンスユーザを削除した場合、そのユーザは削除された月の末までカウントされます。 したがって、月の途中でユーザを追加し、その後、同じ月にユーザを削除した場合、そのユーザは、ユーザが追加された日から月末までカウントされます。 同じ月に、ユーザを削除して再度追加した場合、追加料金は発生しません。

たとえば、異なる日付でライセンスを付与した場合のユーザ料金は次のとおりです。

| ユーザ       | ライセンスされた日                       | カウント日数 | 料金     |
| --------- | ------------------------------- | ------ | ------ |
| @octocat  | 1月1日～1月31日                      | 31     | $39    |
| @robocat  | 2月1日～2月28日                      | 28     | $35.23 |
| @devtocat | 1月15日～1月31日                     | 17     | $21.39 |
| @doctocat | 1月1日～1月15日                      | 31     | $39    |
| @prodocat | 1月7日～1月15日                      | 25     | $31.45 |
| @monalisa | 1月1日～1月7日、<br>1月15日～1月31日 | 31     | $39    |

{% data variables.product.prodname_ghe_managed %} のインスタンスごとの最小ユーザ数は 500 です。 {% data variables.product.company_short %} は、同日にライセンスを付与されたユーザが 500 未満の場合でも、インスタンスごとに最低 500 ユーザ分の料金を請求します。

[Azure アカウントポータル](https://portal.azure.com)で現在の使用状況を確認できます。

{% elsif fpt or ghes %}

{% ifversion fpt %}

{% data variables.product.company_short %} bills monthly for the total number of members in your enterprise account, as well as any additional services you use with {% data variables.product.prodname_ghe_cloud %}.

{% elsif ghes %}

Each user on {% data variables.product.product_location %} consumes a seat on your license. {% data variables.product.company_short %} bills monthly for the total number of seats consumed on your license.

{% endif %}

{% data reusables.billing.about-invoices-for-enterprises %} For more information about usage and invoices, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and {% ifversion ghes %}"<a href="/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise" class="dotcom-only">Managing invoices for your enterprise</a>" in the {% data variables.product.prodname_dotcom_the_website %} documentation.{% elsif fpt %}"[Managing invoices for your enterprise](/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)."{% endif %}

Administrators for your enterprise account on {% data variables.product.prodname_dotcom_the_website %} can access and manage billing for the enterprise.

{% ifversion fpt %}

Each member of your enterprise account with a unique email address consumes a license. Billing managers do not consume a license. Each outside collaborator on a private repository that an organization in your enterprise owns consumes a license, unless the private repository is a fork. Each invitee to your enterprise account, including owners, members of organizations, and outside collaborators, consume a license. For more information about roles in an enterprise account, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" and "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

{% endif %}

{% ifversion ghes %}

{% data reusables.billing.ghes-with-no-enterprise-account %}

{% endif %}

## About synchronization of license usage

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.about-license-sync %} For more information, see {% ifversion fpt %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

{% endif %}

## 参考リンク

- "[About enterprise accounts]({% ifversion fpt or ghes %}/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts#about-enterprise-accounts-on-githubcom{% elsif ghae %}/admin/overview/about-enterprise-accounts{% endif %})"{% ifversion fpt or ghes %} <!-- When you're viewing the fpt version of this article, this link's anchor won't resolve, but that's okay -->
- "[About licenses for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)"{% endif %}
