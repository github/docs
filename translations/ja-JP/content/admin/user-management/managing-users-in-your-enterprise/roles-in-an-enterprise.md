---
title: Enterprise におけるロール
intro: Enterprise 内の全員が Enterprise のメンバーです。 Enterprise の設定とデータへのアクセスを制御するために、Enterprise のメンバーにさまざまなロールを割り当てることができます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
---

## Enterprise のロールについて

Enterprise 内の全員が Enterprise のメンバーです。 Enterprise のメンバーに管理者のロールを割り当てることもできます。 各管理者ロールはビジネス機能にマップされ、Enterprise 内の特定のタスクを行う権限を与えます。

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %}
If your enterprise does not use {% data variables.product.prodname_emus %}, you can invite someone to an administrative role using a user account on {% data variables.product.product_name %} that they control. For more information, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

In an enterprise using {% data variables.product.prodname_emus %}, new owners and members must be provisioned through your identity provider. Enterprise owners and organization owners cannot add new members or owners to the enterprise using {% data variables.product.prodname_dotcom %}. You can select a member's enterprise role using your IdP and it cannot be changed on {% data variables.product.prodname_dotcom %}. You can select a member's role in an organization on {% data variables.product.prodname_dotcom %}. For more information, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% else %}
For more information about adding people to your enterprise, see "[Authentication](/admin/authentication)".

{% endif %}

## Enterprise オーナー

Enterprise オーナーは、Enterprise の完全な管理権限を持ち、以下を含むすべての操作を行うことができます。
- 管理者を管理する
- {% ifversion ghec %}追加と削除 {% elsif ghae or ghes %} Enterprise {% endif %}{% ifversion ghec %}内および {% elsif ghae or ghes %}Enterprise{% endif %} 内から Organization を管理する
- Enterprise 設定を管理する
- Organization にポリシーを強制する
{% ifversion ghec %}- 支払い設定を管理する{% endif %}

Enterprise オーナーは、Organization のオーナーになるか、Organization が所有するリポジトリに直接アクセスする権限を与えられない限り、Organization の設定またはコンテンツにはアクセスできません。 同様に、Enterprise の Organization のオーナーは、Enterprise のオーナーにならない限り、Enterprise にはアクセスできません。

Enterprise のオーナーは、Enterprise 内の少なくとも 1 つの Organization のオーナーまたはメンバーである場合にのみ、ライセンスを消費できます。 {% ifversion ghec %}Enterprise のオーナーは {% data variables.product.prodname_dotcom %} に個人アカウントを持っている必要があります。{% endif %} ベストプラクティスとして、ビジネスへのリスクを軽減するために、Enterprise のオーナーを数人にすることをお勧めします。

## Enterprise メンバー

Enterprise が所有する Organization のメンバーも、自動的に Enterprise のメンバーになります。 メンバーは Organization 内でコラボレートできます。Organization のオーナーになることも可能です。メンバーは支払い設定を含む Enterprise 設定{% ifversion ghec %}にアクセスまたは設定することはできません。{% endif %}

Enterprise 内のユーザは、Enterprise が所有するさまざまな Organization およびそれらの Organization 内のリポジトリへのあらゆるレベルのアクセス権を持つことができます。 各個人がアクセスできるリソースを確認することができます。 詳しい情報については、「[Enterprise の人を表示する](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)」を参照してください。

For more information about organization-level permissions, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

Organization が所有するリポジトリへの外部のコラボレータアクセス権を持つユーザも、Enterprise の [People] タブに一覧表示されますが、Enterprise メンバーではなく、Enterprise へのアクセス権はありません。 For more information about outside collaborators, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)."

{% ifversion ghec %}

## 支払いマネージャー

支払いマネージャーは、Enterprise の支払い設定にのみアクセスできます。 Enterprise の支払いマネージャーは次の操作ができます。
- ユーザライセンス、{% data variables.large_files.product_name_short %} パック、およびその他の支払い設定の閲覧および管理
- 支払いマネージャーのリストを閲覧
- 他の支払いマネージャーの追加または削除

支払いマネージャーは、Enterprise 内の少なくとも 1 つの Organization のオーナーまたはメンバーである場合にのみ、ライセンスを消費できます。 支払いマネージャーは、Enterprise の Organization またはリポジトリにアクセスすることはできません。また、Enterprise のオーナーを追加または削除することもできません。 支払いマネージャーは、{% data variables.product.prodname_dotcom %} 上に個人アカウントを持っていなければなりません。

## About support entitlements

{% data reusables.enterprise-accounts.support-entitlements %}

## 参考リンク

- 「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」

{% endif %}
