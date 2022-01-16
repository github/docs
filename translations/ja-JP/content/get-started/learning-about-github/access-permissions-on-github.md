---
title: GitHub 上のアクセス権限
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do/
  - /articles/what-are-the-different-types-of-team-permissions/
  - /articles/what-are-the-different-access-permissions/
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 個人のリポジトリにはコラボレータに読み取り/書き込みアクセスを許可できる一方、Organization のメンバーは、Organization のリポジトリに対してより精細なアクセス権限を持つことができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
---

## 個人ユーザアカウント

ユーザアカウントが所有するリポジトリは、*リポジトリオーナー*と*コラボレータ*という 2 つの権限レベルを持ちます。 詳しい情報については[ユーザアカウントのリポジトリ権限レベル](/articles/permission-levels-for-a-user-account-repository)を参照してください。

## Organization アカウント

Organization のメンバーは、*owner (オーナー)*{% ifversion fpt %}、*billing manager (支払いマネージャー)*、{% endif %}あるいは*member (メンバー)* ロールを持つことができます。 オーナーは、Organization に対する完全な管理者アクセスを持ち{% ifversion fpt %}、支払いマネージャーは支払いの設定を管理でき{% endif %}ます。 メンバーは、その他の人のデフォルトのロールです。 Team を使って、複数のメンバーのアクセス権限を一度に管理できます。 詳しい情報については、以下を参照してください。
- 「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」
- [Organization のプロジェクトボード権限](/articles/project-board-permissions-for-an-organization)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
- [Team について](/articles/about-teams)

{% ifversion fpt %}

## Enterprise アカウント

*Enterprise のオーナー*は、Enterprise アカウントに対して最大の力を持ち、Enterprise アカウントであらゆるアクションを取ることができます。 *支払いマネージャー*は、Enterprise アカウントの支払い設定を管理できます。 Enterprise アカウントが所有する Organization のメンバーと外部コラボレーターは、自動的に Enterprise アカウントのメンバーになりますが、Enterprise アカウントそのものやその設定にはアクセスできません。 詳しい情報については、「[Enterprise アカウントのロール](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)」を参照してください。

If an enterprise uses {% data variables.product.prodname_emus %}, members are provisioned as new user accounts on {% data variables.product.prodname_dotcom %} and are fully managed by the identity provider. The {% data variables.product.prodname_managed_users %} have read-only access to repositories that are not a part of their enterprise and cannot interact with users that are not also members of the enterprise. Within the organizations owned by the enterprise, the {% data variables.product.prodname_managed_users %} can be granted the same granular access levels available for regular organizations. For more information, see "[About {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% data reusables.gated-features.enterprise-accounts %}

{% endif %}

## 参考リンク

- 「[{% data variables.product.prodname_dotcom %}アカウントの種類](/articles/types-of-github-accounts)」
