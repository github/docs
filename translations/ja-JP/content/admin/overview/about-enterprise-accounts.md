---
title: Enterprise アカウントについて
intro: '{% data variables.product.product_name %} を使用すると、エンタープライズ アカウントを使って{% ifversion ghec %}組織間のコラボレーションを有効にしつつ、{% elsif ghes or ghae %}{% endif %}管理者に単一の表示と管理のポイントを提供できます。'
redirect_from:
  - /articles/about-github-business-accounts
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: b0d1455fef80094f0dcdf20332605bd427d9c441
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127628'
---
## {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %} の Enterprise アカウントについて

{% ifversion ghec %}

{% data variables.product.prodname_dotcom_the_website %} で Enterprise アカウントを使えば、複数の Organization を管理できます。 Enterprise アカウントは、{% data variables.product.prodname_dotcom %} での Organization やユーザー アカウントのように、ハンドルを持っている必要があります。

{% elsif ghes or ghae %}

{% ifversion ghes %}{% data variables.location.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} の Enterprise アカウントを使用すると、{% ifversion ghes %}{% data variables.product.prodname_ghe_server %} インスタンス{% elsif ghae %}Enterprise{% endif %} {% elsif ghae %}が所有する{% endif %}で Organization{% ifversion ghes %} を管理できます。

{% endif %}

Organization は、Enterprise メンバーが一度に多くのプロジェクトでコラボレーションできる共有アカウントです。 Organization オーナーは、Organization のデータとプロジェクトへのアクセスを、洗練されたセキュリティおよび管理機能で管理できます。 詳細については、「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)」を参照してください。

{% ifversion ghec %} Enterprise 設定では、Enterprise 所有者は、Enterprise アカウントへの参加、Enterprise アカウント間での Organization の移転、または新しい Organization の作成を行うために、既存の Organization を招待できます。 詳細については、「[Adding organizations to your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)」 (Enterprise への Organization の追加) を参照してください。
{% endif %}

エンタープライズ アカウントを使用すると、エンタープライズが所有するすべての組織に対してポリシーを管理および適用できます。 {% data reusables.enterprise.about-policies %} 詳細については、「[エンタープライズ ポリシーについて](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)」を参照してください。

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} 詳細については、「[Enterprise アカウントの作成](/admin/overview/creating-an-enterprise-account)」を参照してください。

{% endif %}

## Enterprise アカウントの管理について

{% ifversion ghes or ghae %}

{% ifversion ghae %}{% data variables.product.product_name %} {% elsif ghes %}{% data variables.product.prodname_ghe_server %} インスタンス{% endif %}のエンタープライズ アカウントから、管理者はエンタープライズ メンバーシップを表示{% ifversion remove-enterprise-members %}および管理{% endif %}し、{% ifversion enterprise-owner-join-org %}エンタープライズが所有する組織の独自のメンバーシップを管理し、{% endif %}{% ifversion ghes %}{% data variables.product.prodname_ghe_server %} インスタンス{% elsif ghae %}{% data variables.product.prodname_ghe_managed %} のエンタープライズ{% endif %}について以下を管理できます。

{% ifversion ghes %}
- ライセンスの使用状況{% endif %}
- セキュリティ ({% ifversion ghae %}シングル サインオン、IP 許可リスト、{% endif %}SSH 証明機関、2 要素認証)
- Enterprise アカウントが所有する Organization の Enterprise ポリシー

{% endif %}

{% ifversion ghes %}

### {% data variables.product.prodname_ghe_cloud %} での Enterprise アカウントの管理について

{% endif %}

{% ifversion ghec or ghes %}{% data variables.product.prodname_enterprise %} を試す、または購入する場合は、{% data variables.product.prodname_dotcom_the_website %} で {% data variables.product.prodname_ghe_cloud %} の Enterprise アカウントを{% ifversion ghes %}も{% endif %}作成できます。 {% data variables.product.prodname_dotcom_the_website %} のエンタープライズ アカウントの管理者は、エンタープライズ メンバーシップを表示{% ifversion remove-enterprise-members %}および管理{% endif %}し、{% ifversion enterprise-owner-join-org %}エンタープライズが所有する組織の独自のメンバーシップを管理し、{% endif %}{% ifversion ghes %}{% data variables.product.prodname_dotcom_the_website %} の{% endif %}エンタープライズ アカウントについて、以下を管理できます。

- 課金と使用 ({% data variables.product.prodname_dotcom_the_website %} のサービス、{% data variables.product.prodname_GH_advanced_security %}、ユーザー ライセンス)
- セキュリティ (シングル サインオン、IP 許可リスト、SSH 証明機関、2 要素認証)
- Enterprise アカウントが所有する Organization の Enterprise ポリシー

{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_ghe_server %} の両方を使用する場合は、{% data variables.product.prodname_dotcom_the_website %} の Enterprise アカウントから {% data variables.product.prodname_ghe_server %} について、以下を管理することもできます。

- {% data variables.product.prodname_ghe_server %} インスタンスの課金と使用
- {% data variables.contact.enterprise_support %} とのリクエストおよび Support Bundle の共有

{% data variables.location.product_location_enterprise %} の Enterprise アカウントを {% data variables.product.prodname_dotcom_the_website %} のご自分の Enterprise アカウントに接続し、{% data variables.product.prodname_dotcom_the_website %} から {% data variables.product.prodname_enterprise %} サブスクリプションのライセンス使用状況の詳細を確認することもできます。 詳細については、{% data variables.product.prodname_ghe_server %} ドキュメントの{% ifversion ghec %}「[{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間のライセンス使用量の同期](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)」{% elsif ghes %}「[{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間のライセンス使用量の同期](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)」{% endif %}を参照してください。

{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_ghe_server %} の違いについて詳しくは、「[{% data variables.product.prodname_dotcom %} の製品](/get-started/learning-about-github/githubs-products)」を参照してください。 {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## Enterprise アカウントの支払いについて

Enterprise アカウントの請求には、Enterprise の各メンバーの毎月のコストが含まれます。 この請求には、{% ifversion ghec %}Enterprise アカウント外の組織の有料ライセンス、{% data variables.product.prodname_marketplace %} のアプリのサブスクリプション、{% endif %}{% ifversion ghec or ghae %}{% ifversion ghec %}{% data variables.large_files.product_name_long %} のデータ パックのようなエンタープライズの追加有料サービス、{% endif %}および{% endif %}{% data variables.product.prodname_GH_advanced_security %} の使用が含まれます。

{% ifversion ghec %}

{% data variables.product.prodname_ghe_cloud %} サブスクリプションの請求について詳しくは、「[Enterprise アカウントのサブスクリプションおよび利用状況を表示する](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)」と「[Enterprise の支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)」を参照してください。

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

{% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %} の支払いについて詳しくは、「[Enterprise の支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)」を参照してください。

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} では 2 つのデプロイ オプションが提供されます。 {% data variables.product.prodname_ghe_cloud %} に加え、{% data variables.product.prodname_ghe_server %} を使用して、データ センターまたはサポートされているクラウド プロバイダーで Enterprise の開発作業をホストできます。 {% endif %}{% data variables.product.prodname_dotcom_the_website %} の Enterprise オーナーは、Enterprise アカウントを使用して、{% data variables.product.prodname_ghe_server %}インスタンスの支払いとライセンスを管理できます。 詳細については、「[{% data variables.product.company_short %} の製品](/get-started/learning-about-github/githubs-products#github-enterprise)」および「[{% data variables.product.prodname_enterprise %}のライセンスの管理](/billing/managing-your-license-for-github-enterprise)」を参照してください。

{% endif %}

## 参考資料

- GraphQL API ドキュメントの「[Enterprise アカウント](/graphql/guides/managing-enterprise-accounts)」
