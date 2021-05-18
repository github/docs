---
title: Enterprise におけるロール
intro: Enterprise 内の全員が Enterprise のメンバーです。 Enterprise の設定とデータへのアクセスを制御するために、Enterprise のメンバーにさまざまなロールを割り当てることができます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### Enterprise のロールについて

Enterprise 内の全員が Enterprise のメンバーです。 Enterprise のメンバーに管理者のロールを割り当てることもできます。 各管理者ロールはビジネス機能にマップされ、Enterprise 内の特定のタスクを行う権限を与えます。

{% data reusables.enterprise-accounts.enterprise-administrators %}

Enterprise にユーザを追加する方法について詳しくは、「{% if currentVersion == "free-pro-team@latest" %}[Enterprise を管理するために人を招待する](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise){% else %}[認証](/admin/authentication){% endif %}」を参照してください。

### Enterprise オーナー

Enterprise オーナーは、Enterprise の完全な管理権限を持ち、以下を含むすべての操作を行うことができます。
- 管理者を管理する
- {% if currentVersion == "free-pro-team@latest" %}追加と削除 {% elsif currentVersion == "github-ae@latest" %} Enterprise {% endif %}{% if currentVersion == "free-pro-team@latest" %}内および {% elsif currentVersion == "github-ae@latest" %}Enterprise{% endif %} 内から Organization を管理する
- Enterprise 設定を管理する
- Organization にポリシーを強制する
{% if currentVersion == "free-pro-team@latest" %}- 支払い設定を管理する{% endif %}

Enterprise オーナーは、Organization のオーナーになるか、Organization が所有するリポジトリに直接アクセスする権限を与えられない限り、Organization の設定またはコンテンツにはアクセスできません。 同様に、Enterprise の Organization のオーナーは、Enterprise のオーナーにならない限り、Enterprise にはアクセスできません。

Enterprise のオーナーは、Enterprise 内の少なくとも 1 つの Organization のオーナーまたはメンバーである場合にのみ、ライセンスを消費できます。 {% if currentVersion == "free-pro-team@latest" %}Enterprise のオーナーは {% data variables.product.prodname_dotcom %} に個人アカウントを持っている必要があります。{% endif %} ベストプラクティスとして、ビジネスへのリスクを軽減するために、Enterprise のオーナーを数人にすることをお勧めします。

### Enterprise メンバー

Enterprise が所有する Organization のメンバーも、自動的に Enterprise のメンバーになります。 メンバーは Organization 内でコラボレートできます。Organization のオーナーになることも可能です。メンバーは支払い設定を含む Enterprise 設定{% if currentVersion == "free-pro-team@latest" %}にアクセスまたは設定することはできません。{% endif %}

Enterprise 内のユーザは、Enterprise が所有するさまざまな Organization およびそれらの Organization 内のリポジトリへのあらゆるレベルのアクセス権を持つことができます。 各個人がアクセスできるリソースを確認することができます。 詳しい情報については、「[Enterprise の人を表示する](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise)」を参照してください。

Organization レベルの権限に関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。

Organization が所有するリポジトリへの外部のコラボレータアクセス権を持つユーザも、Enterprise の [People] タブに一覧表示されますが、Enterprise メンバーではなく、Enterprise へのアクセス権はありません。 外部コラボレーターに関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization#outside-collaborators)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

### 支払いマネージャー

支払いマネージャーは、Enterprise の支払い設定にのみアクセスできます。 Enterprise の支払いマネージャーは次の操作ができます。
- ユーザライセンス、{% data variables.large_files.product_name_short %} パック、およびその他の支払い設定の閲覧および管理
- 支払いマネージャーのリストを閲覧
- 他の支払いマネージャーの追加または削除

支払いマネージャーは、Enterprise 内の少なくとも 1 つの Organization のオーナーまたはメンバーである場合にのみ、ライセンスを消費できます。 支払いマネージャーは、Enterprise の Organization またはリポジトリにアクセスすることはできません。また、Enterprise のオーナーを追加または削除することもできません。 支払いマネージャーは、{% data variables.product.prodname_dotcom %} 上に個人アカウントを持っていなければなりません。

### 参考リンク

- 「[Enterprise アカウントについて](/articles/about-enterprise-accounts)」

{% endif %}
