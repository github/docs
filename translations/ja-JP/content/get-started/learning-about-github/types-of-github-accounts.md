---
title: GitHub アカウントの種類
intro: 'ユーザアカウントは {% data variables.product.product_location %} 上での身分証明となります。 ユーザアカウントはいくつでも Organization のメンバーになれます。{% ifversion fpt %} Organization は enterprise アカウントに所属できます。{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

{% ifversion fpt %}
各 {% data variables.product.product_name %} 製品の機能の完全なリストについては、「[{% data variables.product.prodname_dotcom %} の製品](/github/getting-started-with-github/githubs-products)」を参照してください。
{% endif %}

## 個人ユーザアカウント

{% data variables.product.product_location %} を使用するすべての人は、次のような独自のユーザーアカウントを持っています。

{% ifversion fpt %}

- {% data variables.product.prodname_free_user %} での無制限のパブリックリポジトリおよびプライベートリポジトリ
- {% data variables.product.prodname_free_user %} での無制限のコラボレータ
- {% data variables.product.prodname_pro %} でのプライベートリポジトリの追加機能
- [リポジトリのコラボレーターを招待する](/articles/inviting-collaborators-to-a-personal-repository)機能

{% else %}

- 無制限のリポジトリおよび[コラボレーター](/articles/permission-levels-for-a-user-account-repository)
- [リポジトリのコラボレーターを無制限に追加する](/articles/inviting-collaborators-to-a-personal-repository)機能

{% endif %}

{% ifversion fpt %}

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

{% ifversion fpt %}
### {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, instead of using your personal account, members of an {% data variables.product.prodname_emu_enterprise %} are provisioned accounts using the enterprise's identity provider (IdP). {% data variables.product.prodname_managed_users_caps %} authenticate using their IdP instead of a {% data variables.product.prodname_dotcom_the_website %} username and password.

{% data variables.product.prodname_managed_users_caps %} can only interact with users, repositories, and organizations that are part of their enterprise. {% data variables.product.prodname_managed_users_caps %} have read-only access to the rest of {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[About {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."
{% endif %}

## Organization アカウント

Organization は、多くの人がいくつものプロジェクトにわたって同時にコラボレーションできる共有アカウントです。 オーナーと管理者は、Organizationのデータとプロジェクトへのメンバーのアクセスを、洗練されたセキュリティ及び管理機能で管理できます。

{% data reusables.organizations.organizations_include %}

{% ifversion fpt %}

## Enterprise アカウント

Enterprise アカウントを使用すると、複数の {% data variables.product.prodname_dotcom_the_website %} Organization のポリシーと支払いを集中管理できます。 {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## 参考リンク

{% ifversion fpt %}- "[新しい {% data variables.product.prodname_dotcom %} アカウントへのサインアップ](/articles/signing-up-for-a-new-github-account)"
- 「[{% data variables.product.prodname_dotcom %} の製品](/articles/githubs-products)」{% endif %}
- 「[新しい Organization アカウントを作成する](/articles/creating-a-new-organization-account)」
