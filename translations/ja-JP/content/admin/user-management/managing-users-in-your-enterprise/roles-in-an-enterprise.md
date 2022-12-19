---
title: Enterprise におけるロール
intro: Enterprise 内の全員が Enterprise のメンバーです。 Enterprise の設定とデータへのアクセスを制御するために、Enterprise のメンバーにさまざまなロールを割り当てることができます。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
ms.openlocfilehash: 10787e2326f2bb3c4768c5e499d445f65cf9e57d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178456'
---
## Enterprise のロールについて

Enterprise 内の全員が Enterprise のメンバーです。 Enterprise のメンバーに管理者のロールを割り当てることもできます。 各管理者ロールはビジネス機能にマップされ、Enterprise 内の特定のタスクを行う権限を与えます。

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %} Enterprise で {% data variables.product.prodname_emus %} が使用されていない場合は、制御対象の {% data variables.product.product_name %} のユーザー アカウントを使用して、管理者ロールにユーザーを招待できます。 詳細については、「[Enterprise を管理するようユーザーを招待する](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)」を参照してください。

{% data variables.product.prodname_emus %} を使用している Enterprise では、新しい所有者とメンバーを ID プロバイダーを通じてプロビジョニングする必要があります。 Enterprise 所有者と Organization 所有者は、{% data variables.product.prodname_dotcom %} を使用して新しいメンバーまたは所有者を Enterprise に追加することはできません。 IdP を使用してメンバーの Enterprise ロールを選択できます。{% data variables.product.prodname_dotcom %} で変更することはできません。 {% data variables.product.prodname_dotcom %} では Organization 内のメンバーのロールを選択できます。 詳細については、「[{% data variables.product.prodname_emus %} について](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。
{% else %} Enterprise へのユーザーの追加について詳しくは、「[認証](/admin/authentication)」を参照してください。

{% endif %}

## Enterprise 所有者

Enterprise オーナーは、Enterprise の完全な管理権限を持ち、以下を含むすべての操作を行うことができます。
- 管理者を管理する
- エンタープライズ{% ifversion ghec %}に対する{% elsif ghae or ghes %}での{% endif %}組織の{% ifversion ghec %}追加と削除{% elsif ghae or ghes %}管理{% endif %}{% ifversion remove-enterprise-members %}
- Enterprise が所有するすべての Organization からの Enterprise メンバーの削除{% endif %}
- Enterprise 設定を管理する
- Organization 全体でのポリシーの適用 {% ifversion ghec %}- 課金設定の管理{% endif %}

{% ifversion enterprise-owner-join-org %} エンタープライズの所有者は、既定では組織の設定やコンテンツにアクセスできません。 アクセス権を取得するために、Enterprise 所有者は、Enterprise が所有する任意の Organization に参加できます。 詳細については、「[Enterprise が所有する Organization でのロールの管理](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)」を参照してください。

Enterprise 内の Organization の所有者は、Enterprise 所有者にならない限り、Enterprise にはアクセスできません。
{% else %} Enterprise 所有者は、Organization 所有者になるか、Organization が所有するリポジトリに直接アクセスする権限を与えられない限り、Organization の設定やコンテンツにはアクセスできません。 同様に、Enterprise の Organization のオーナーは、Enterprise のオーナーにならない限り、Enterprise にはアクセスできません。
{% endif %}

Enterprise のオーナーは、Enterprise 内の少なくとも 1 つの Organization のオーナーまたはメンバーである場合にのみ、ライセンスを消費できます。 Enterprise 所有者が複数の Organization でロールを持っている場合でも、単一のライセンスを使用します。 {% ifversion ghec %}Enterprise 所有者は {% data variables.product.prodname_dotcom %} に個人アカウントを持っている必要があります。{% endif %}ベスト プラクティスとして、ビジネスへのリスクを軽減するために、社内のごく少数のみを Enterprise 所有者にすることをお勧めします。

## Enterprise メンバー

Enterprise が所有する Organization のメンバーも、自動的に Enterprise のメンバーになります。 メンバーは Organization で共同作業を行うことができ、Organization 所有者である場合があります。しかし、メンバーは、{% ifversion ghec %}課金設定を含む、{% endif %}Enterprise 設定に対するアクセスや構成を行うことはできません。

Enterprise 内のユーザは、Enterprise が所有するさまざまな Organization およびそれらの Organization 内のリポジトリへのあらゆるレベルのアクセス権を持つことができます。 各個人がアクセスできるリソースを確認することができます。 詳細については、「[Enterprise の人を表示する](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)」を参照してください。

Organization レベルのアクセス許可について詳しくは、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

Organization が所有するリポジトリへの外部のコラボレータアクセス権を持つユーザも、Enterprise の [People] タブに一覧表示されますが、Enterprise メンバーではなく、Enterprise へのアクセス権はありません。 外部コラボレーターの詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)」を参照してください。

{% ifversion ghec %}

## 支払いマネージャー

支払いマネージャーは、Enterprise の支払い設定にのみアクセスできます。 Enterprise の支払いマネージャーは次の操作ができます。
- ユーザライセンス、{% data variables.large_files.product_name_short %} パック、およびその他の支払い設定の閲覧および管理
- 支払いマネージャーのリストを閲覧
- 他の支払いマネージャーの追加または削除

支払いマネージャーは、Enterprise 内の少なくとも 1 つの Organization のオーナーまたはメンバーである場合にのみ、ライセンスを消費できます。 支払いマネージャーは、Enterprise の Organization またはリポジトリにアクセスすることはできません。また、Enterprise のオーナーを追加または削除することもできません。 支払いマネージャーは、{% data variables.product.prodname_dotcom %} 上に個人アカウントを持っていなければなりません。

## サポート資格について

{% data reusables.enterprise-accounts.support-entitlements %}

## 参考資料

- "[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)"

{% endif %}
