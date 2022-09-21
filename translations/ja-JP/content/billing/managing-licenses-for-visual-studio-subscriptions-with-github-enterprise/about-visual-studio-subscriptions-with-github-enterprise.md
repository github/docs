---
title: Visual Studio subscriptions with GitHub Enterpriseについて
intro: 'Teamの{% data variables.product.prodname_vs %}のサブスクライバーに、Microsoftからの提供が組み合わされた{% data variables.product.prodname_enterprise %}へのアクセス権を与えることができます。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /billing/managing-your-license-for-github-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About
ms.openlocfilehash: d3adb998cb3413387766753a4dcdbee033df6506
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052257'
---
## {% data variables.product.prodname_vss_ghe %} について

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.product.prodname_vss_ghe %}は、Microsoft Enterprise Agreementの条件に基づいてMicrosoftから入手できます。 詳しくは、{% data variables.product.prodname_vs %} Web サイトの「[{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/)」をご覧ください。

ライセンスの {% data variables.product.prodname_enterprise %} 部分を使用するには、{% data variables.product.prodname_dotcom_the_website %} の各サブスクライバーの個人アカウントが、{% data variables.product.prodname_dotcom_the_website %} の Enterprise が所有する Organization のメンバーであるか、またはメンバーになる必要があります。 そのためには、Organizationのオーナーは新しいメンバーをメールアドレスで招待できます。 サブスクライバーは、{% data variables.product.prodname_dotcom_the_website %} の既存の個人アカウントで招待を受け入れるか、新しいアカウントを作成できます。

{% data variables.product.prodname_vss_ghe %} のセットアップについて詳しくは、「[{% data variables.product.prodname_vss_ghe %} の設定](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)」をご覧ください。

## {% data variables.product.prodname_vss_ghe %}のライセンスについて

{% data variables.product.prodname_vss_ghe %} のライセンスをサブスクライバーに割り当てた後、サブスクライバーは、Enterprise の Organization に {% data variables.product.prodname_dotcom_the_website %} の個人アカウントを使用して参加することで、ライセンスの {% data variables.product.prodname_enterprise %} 部分を使用します。 {% data variables.product.prodname_dotcom_the_website %} のエンタープライズ メンバーの個人アカウントの検証済みメール アドレスが {% data variables.product.prodname_vs %} アカウントのサブスクライバーのユーザー プライマリ名 (UPN) と一致する場合、{% data variables.product.prodname_vs %} サブスクライバーは自動的に {% data variables.product.prodname_vss_ghe %} のライセンスを 1 つ使用します。

{% data variables.product.prodname_dotcom %} での Enterprise のライセンスの合計数は、標準の {% data variables.product.prodname_enterprise %} ライセンスと {% data variables.product.prodname_dotcom %} へのアクセスを含む {% data variables.product.prodname_vs %} サブスクリプションライセンス数の合計です。 Enterprise メンバーの個人アカウントが {% data variables.product.prodname_vs %} サブスクライバーのメール アドレスと一致しない場合、個人アカウントが使用するライセンスは {% data variables.product.prodname_vs %} サブスクライバーには使用できません。

{% data variables.product.prodname_enterprise %} について詳しくは、「[{% data variables.product.company_short %} の製品](/github/getting-started-with-github/githubs-products#github-enterprise)」をご覧ください。 {% data variables.product.prodname_dotcom_the_website %} のアカウントについて詳しくは、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/github/getting-started-with-github/types-of-github-accounts)」をご覧ください。

{% data variables.product.product_location %}上のEnterpriseで利用できる{% data variables.product.prodname_enterprise %}のライセンス数を見ることができます。 保留中の招待のリストには、Enterpriseの少なくとも1つのOrganizationのメンバーにまだなっていないサブスクライバーが含まれます。 詳しくは、「[Enterprise アカウントのサブスクリプションと使用状況の表示](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)」と「[Enterprise の人を表示する](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)」をご覧ください。

{% tip %}

**ヒント**: 「[Enterprise アカウントのサブスクリプションと使用状況の表示](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account#viewing-the-subscription-and-usage-for-your-enterprise-account)」の手順 6 で、Enterprise のライセンス使用状況を含む CSV ファイルをダウンロードした場合、[名前] 列または [プロファイル] 列に値がないメンバーは、Enterprise 内の Organization に参加するための招待をまだ受け入れていません。

{% endtip %}

{% data variables.product.prodname_vss_admin_portal_with_url %} のサブスクライバーへの保留中の {% data variables.product.prodname_enterprise %} 招待を確認することもできます。

## 参考資料

- [{% data variables.product.prodname_vs %} subscription with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/access-github) (Microsoft Docs)
- [{% data variables.product.prodname_vs %} または {% data variables.product.prodname_vscode %} を使用して {% data variables.product.prodname_dotcom %} からアプリをデプロイする](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) (Microsoft Docs)
