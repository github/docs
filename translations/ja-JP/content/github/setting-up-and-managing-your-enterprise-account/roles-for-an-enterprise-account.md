---
title: Enterprise アカウントのロール
intro: 'Enterprise アカウントの設定およびデータへのアクセスを管理するために、Enterprise アカウントの人に異なるロールを割り当てることができます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Enterprise アカウントへの人の追加に関する詳細は、「[Enterprise アカウントの管理をするよう招待する](/articles/inviting-people-to-manage-your-enterprise-account)」を参照してください。

### Enterprise アカウントのロールについて

Enterprise アカウントには、Enterprise のユーザに割り当てることができる一連の管理者ロールが付いてきます。 各管理者ロールはビジネス機能にマップされ、Enterprise アカウント内の特定のタスクを行う権限を与えます。

{% data reusables.enterprise-accounts.enterprise-administrators %}

### Enterprise オーナー

Enterprise オーナーは、Enterprise アカウントの完全な管理権限を持ち、以下を含むすべてのアクションを取ることができます。
- 管理者を管理する
- Enterprise での Organization の追加と削除
- Enterprise 設定を管理する
- Organization にポリシーを強制する
- 支払い設定を管理する

Enterprise オーナーは、Organization のオーナーになるか、Organization が所有するリポジトリに直接アクセスする権限を与えられない限り、Organization の設定またはコンテンツにはアクセスできません。 同様に、Enterprise アカウントの Organization のオーナーは、Enterprise のオーナーにならない限り、Enterprise アカウントにはアクセスできません。

Enterprise アカウントには、必要な数の Enterprise オーナーを追加することができます。 Enterprise のオーナーは、{% data variables.product.prodname_dotcom %} 上に個人アカウントを持っていなければなりません。 ベストプラクティスとして、ビジネスへのリスクを軽減するために、会社の数名のみを Enterprise のオーナーにすることをおすすめします。

### Enterprise メンバー

Enterprise アカウントに所有されている Organization のメンバーは、自動的に Enterprise アカウントのメンバーになります。 メンバーは Organization でコラボレートすることができます。Organization のオーナーとなることも可能です。ただしメンバーは支払い設定を含む Enterprise の設定にアクセスまたは設定することはできません。

Enterprise アカウントに所属する人は、Enterprise アカウントに所有されているさまざまな Organization、およびそれらの Organization 内のリポジトリへの異なるレベルのアクセス権限を持つことができます。 各個人がアクセスできるリソースを確認することができます。 詳細は「[Enterprise アカウントの人を表示する](/articles/viewing-people-in-your-enterprise-account)」を参照してください。

Organization レベルの権限に関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。

Organization が所有するリポジトリへの外部コラボレータアクセス権限を持つ人は Enterprise アカウントの [People] タブにも表示されますが、Enterprise のメンバーではなく、Enterprise アカウントへのいかなるアクセス権限も持ちません。 外部コラボレーターに関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization#outside-collaborators)」を参照してください。

### 支払いマネージャー

支払いマネージャーは、Enterprise アカウントの支払い設定にのみアクセスできます。 Enterprise アカウントの支払いマネージャーは次のことができます:
- ユーザライセンス、{% data variables.large_files.product_name_short %} パック、およびその他の支払い設定の閲覧および管理
- 支払いマネージャーのリストを閲覧
- 他の支払いマネージャーの追加または削除

支払いマネージャーは、Enterprise アカウントの Organization またはリポジトリにアクセスすることはできません。また、Enterprise のオーナーを追加または削除することもできません。 支払いマネージャーは、{% data variables.product.prodname_dotcom %} 上に個人アカウントを持っていなければなりません。

### 参考リンク

- 「[Enterprise アカウントについて](/articles/about-enterprise-accounts)」
