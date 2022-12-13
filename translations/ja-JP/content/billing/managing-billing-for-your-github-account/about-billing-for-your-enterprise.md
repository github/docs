---
title: Enterpriseの支払いについて
intro: 'Enterpriseの{% ifversion ghec or ghes %}{% data variables.product.prodname_dotcom_the_website %}上のアカウント{% endif %}に対する支払い情報を見ることができます。'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
ms.openlocfilehash: 1b048c16293b7183636bc383ca926c4e5c7f0bd2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573410'
---
## Enterpriseの支払いについて

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} 1日に1度、{% data variables.product.prodname_dotcom %} は、Enterprise のライセンスを持つユーザ数をカウントします。 {% data variables.product.company_short %} は、ユーザがその日に {% data variables.product.prodname_ghe_managed %} にログインしたかどうかに関係なく、ライセンスされたユーザごとに請求します。

商業地域の場合、ユーザー1人あたりの1日あたりの価格は $ 1.2580645161 です。 31日間の場合、各ユーザの月額料金は 39 ドルです。 日数が少ない月の場合、月額料金は低くなります。 各支払い月は、カレンダー月の初日の固定の時刻に開始されます。

月の半ばにライセンスユーザを追加した場合、そのユーザはライセンスを付与された日からカウントされます。 ライセンスユーザを削除した場合、そのユーザは削除された月の末までカウントされます。 したがって、月の途中でユーザを追加し、その後、同じ月にユーザを削除した場合、そのユーザは、ユーザが追加された日から月末までカウントされます。 同じ月に、ユーザを削除して再度追加した場合、追加料金は発生しません。

たとえば、異なる日付でライセンスを付与した場合のユーザ料金は次のとおりです。

User | ライセンスされた日 | カウント日数 | コスト
---- | ------------ | ------- | -----
@octocat | 1月1日～1月31日 | 31 | $39
@robocat | 2月1日～2月28日 | 28 | $35.23
@devtocat  | 1月15日～1月31日 | 17 | $21.39
@doctocat | 1月1日～1月15日 | 31 | $39
@prodocat | 1月7日～1月15日 | 25 | $31.45
@monalisa | 1 月 1 日から 1 月 7 日<br>1月15日～1月31日 | 31 | $39

{% data variables.product.prodname_ghe_managed %} のインスタンスごとの最小ユーザ数は 500 です。 {% data variables.product.company_short %} は、同日にライセンスを付与されたユーザが 500 未満の場合でも、インスタンスごとに最低 500 ユーザ分の料金を請求します。

現在の使用状況は、[Azure アカウント ポータル](https://portal.azure.com)で確認できます。

{% elsif ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.product_location %} で Enterprise アカウントを使うと、その Enterprise アカウントは、Enterprise が所有する Organization を含め、Enterprise 内でのすべての支払いに対する中心ポイントとなります。

個別の Organization で {% data variables.product.product_name %} を使っているものの、まだ Enterprise アカウントを持っていない場合は、Enterprise アカウントを作成し、Organization を追加します。 詳細については、「[Creating an enterprise account (エンタープライズ アカウントの作成)](/admin/overview/creating-an-enterprise-account)」を参照してください。

{% data variables.product.company_short %} では、Enterprise アカウントのライセンス シートの合計数と、{% data variables.product.prodname_ghe_cloud %} で使う追加のサービス ("{% data variables.product.prodname_actions %} 分" など) に対して毎月請求が発生します。 {% data variables.product.product_name %} でスタンドアロンの Organization を使う場合、すべての利用状況に対して Organization レベルで請求されます。 請求書のライセンス シートについて詳しくは、「[ユーザーごとの価格付けについて](/billing/managing-billing-for-your-github-account/about-per-user-pricing)」を参照してください。

{% elsif ghes %}

{% data variables.product.product_location %}上の各ユーザは、ライセンスのシートを1つ消費します。 {% data variables.product.company_short %}は、ライセンスで消費されたシートの総数に対して月ごとに請求します。

{% endif %}

{% ifversion ghec %}Enterprise アカウントを持つ {% data variables.product.prodname_ghe_cloud %} のお客様の場合、{% data variables.product.company_short %} では、{% data variables.product.prodname_dotcom_the_website %} の Enterprise アカウントを通じて請求されます。 請求書払いのお客様の場合、各{% elsif ghes %}請求書払いの {% data variables.product.prodname_enterprise %} のお客様の場合、{% data variables.product.company_short %} では、{% data variables.product.prodname_dotcom_the_website %} の Enterprise アカウントを通じて請求されます。 各{% endif %}請求書には、有料のすべての {% data variables.product.prodname_dotcom_the_website %} サービスと、すべての {% data variables.product.prodname_ghe_server %} インスタンスに対する 1 つの請求料金が含まれています。 {% ifversion ghes %}ライセンス、使用状況、請求書の{% elsif ghec %}使用状況と請求書{% endif %}に関する詳しい情報については、{% ifversion ghes %}{% data variables.product.prodname_ghe_cloud %}ドキュメンテーション中の以下を参照してください。{% else %}{% endif %}

{%- ifversion ghes %}
- 「[ユーザごとの価格付けについて](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)」 {%- endif %}
- 「[Enterprise アカウントのサブスクリプションを使用状況の確認]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)」
- 「[Enterprise の請求書管理]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)」

{% data variables.product.prodname_dotcom_the_website %}上のEnterpriseアカウントの管理者は、Enterpriseの支払いにアクセスし、管理できます。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Enterprise でのロール]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}."{% elsif ghes %}」を参照してください。{% endif %}

{% ifversion ghec %} {% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 詳しくは、「[Azure サブスクリプションを Enterprise に接続する](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)」をご覧ください。
{% endif %}

{% ifversion ghes %} {% data reusables.billing.ghes-with-no-enterprise-account %} {% endif %}

{% endif %}
## 参考資料

- "[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)"
