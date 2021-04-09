---
title: GitHub アカウントの種類
intro: 'ユーザアカウントは {% data variables.product.product_location %} 上での身分証明となります。 ユーザーアカウントは、任意の数の Organization のメンバーになることができます。{% if currentVersion == "free-pro-team@latest" %} Organization は Enterprise アカウントに所属できます。{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - アカウント
  - cli
  - mobile
  - desktop
  - セキュリティ
---

{% if currentVersion == "free-pro-team@latest" %}
各
{% data variables.product.product_name %} 製品の機能の完全なリストについては、「[{% data variables.product.prodname_dotcom %} の製品](/github/getting-started-with-github/githubs-products)」を参照してください。
{% endif %}

### 個人ユーザアカウント

{% data variables.product.product_location %} を使用するすべての人は、次のような独自のユーザーアカウントを持っています。

{% if currentVersion == "free-pro-team@latest" %}

- {% data variables.product.prodname_free_user %} での無制限のパブリックリポジトリおよびプライベートリポジトリ
- {% data variables.product.prodname_free_user %} での無制限のコラボレータ
- {% data variables.product.prodname_pro %} でのプライベートリポジトリの追加機能
- [リポジトリのコラボレーターを招待する](/articles/inviting-collaborators-to-a-personal-repository)機能

{% else %}

- 無制限のリポジトリおよび[コラボレーター](/articles/permission-levels-for-a-user-account-repository)
- [リポジトリのコラボレーターを無制限に追加する](/articles/inviting-collaborators-to-a-personal-repository)機能

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**ヒント**:

- 個人での使用や仕事での使用など、1 つのアカウントを複数の目的で使用できます。 複数のアカウントを作成することはおすすめしません。 詳細は「[複数のユーザアカウントをマージする](/articles/merging-multiple-user-accounts)」を参照してください。
- ユーザアカウントは人間のためのものですが、必要に応じて継続的インテグレーションボットなどのロボットに付与することもできます。

{% endtip %}

{% else %}

{% tip %}

**参考**: ユーザアカウントはもともとは人間のためのものですが、必要に応じて継続的インテグレーションボットなどのロボットに付与することもできます。

{% endtip %}

{% endif %}

### Organization アカウント

Organization は、多くの人がいくつものプロジェクトにわたって同時にコラボレーションできる共有アカウントです。 オーナーと管理者は、Organizationのデータとプロジェクトへのメンバーのアクセスを、洗練されたセキュリティ及び管理機能で管理できます。

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}

### Enterprise アカウント

Enterprise アカウントを使用すると、複数の {% data variables.product.prodname_dotcom_the_website %} Organization のポリシーと支払いを集中管理できます。 {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### 参考リンク

{% if currentVersion == "free-pro-team@latest" %}- 「[新しい {% data variables.product.prodname_dotcom %} アカウントにサインアップする](/articles/signing-up-for-a-new-github-account)」
- 「[{% data variables.product.prodname_dotcom %} の製品](/articles/githubs-products)」{% endif %}
- 「[新しい Organization アカウントを作成する](/articles/creating-a-new-organization-account)」
