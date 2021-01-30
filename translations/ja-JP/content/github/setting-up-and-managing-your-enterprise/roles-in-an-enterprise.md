---
title: Roles in an enterprise
intro: 'Everyone in an enterprise is a member of the enterprise. To control access to your enterprise''s settings and data, you can assign different roles to members of your enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account/
  - /articles/roles-for-an-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About roles in an enterprise

Everyone in an enterprise is a member of the enterprise. You can also assign administrative roles to members of your enterprise. Each administrator role maps to business functions and provides permissions to do specific tasks within the enterprise.

{% data reusables.enterprise-accounts.enterprise-administrators %}

For more information about adding people to your enterprise, see "{% if currentVersion == "free-pro-team@latest" %}[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise){% else %}[Authentication](/admin/authentication){% endif %}".

### Enterprise オーナー

Enterprise owners have complete control over the enterprise and can take every action, including:
- 管理者を管理する
- {% if currentVersion == "free-pro-team@latest" %}Adding and removing {% elsif currentVersion == "github-ae@latest" %}Managing{% endif %} organizations {% if currentVersion == "free-pro-team@latest" %}to and from {% elsif currentVersion == "github-ae@latest" %} in{% endif %} the enterprise
- Enterprise 設定を管理する
- Organization にポリシーを強制する
{% if currentVersion == "free-pro-team@latest" %}- Managing billing settings{% endif %}

Enterprise オーナーは、Organization のオーナーになるか、Organization が所有するリポジトリに直接アクセスする権限を与えられない限り、Organization の設定またはコンテンツにはアクセスできません。 Similarly, owners of organizations in your enterprise do not have access to the enterprise itself unless you make them enterprise owners.

You can add as many enterprise owners as you'd like to your enterprise. {% if currentVersion == "free-pro-team@latest" %}Enterprise owners must have a personal account on {% data variables.product.prodname_dotcom %}.{% endif %} As a best practice, we recommend making only a few people in your company enterprise owners, to reduce the risk to your business.

### Enterprise メンバー

Members of organizations owned by your enterprise are also automatically members of the enterprise. Members can collaborate in organizations and may be organization owners, but members cannot access or configure enterprise settings{% if currentVersion == "free-pro-team@latest" %}, including billing settings{% endif %}.

People in your enterprise may have different levels of access to the various organizations owned by your enterprise and to repositories within those organizations. 各個人がアクセスできるリソースを確認することができます。 For more information, see "[Viewing people in your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise)."

Organization レベルの権限に関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。

People with outside collaborator access to repositories owned by your organization are also listed in your enterprise's People tab, but are not enterprise members and do not have any access to the enterprise. 外部コラボレーターに関する詳しい情報については「[Organization の権限レベル](/articles/permission-levels-for-an-organization#outside-collaborators)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

### 支払いマネージャー

Billing managers only have access to your enterprise's billing settings. Billing managers for your enterprise can:
- ユーザライセンス、{% data variables.large_files.product_name_short %} パック、およびその他の支払い設定の閲覧および管理
- 支払いマネージャーのリストを閲覧
- 他の支払いマネージャーの追加または削除

Billing managers do not have access to organizations or repositories in your enterprise, and cannot add or remove enterprise owners. 支払いマネージャーは、{% data variables.product.prodname_dotcom %} 上に個人アカウントを持っていなければなりません。

### 参考リンク

- 「[Enterprise アカウントについて](/articles/about-enterprise-accounts)」

{% endif %}
