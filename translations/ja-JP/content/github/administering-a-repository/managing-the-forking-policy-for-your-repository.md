---
title: リポジトリのフォークポリシーを管理する
intro: 'Organization が所有する特定のプライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}または内部{% endif %}リポジトリのフォークを許可または禁止できます。'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
permissions: リポジトリに対して管理者権限がある人は、リポジトリのフォークポリシーを管理できます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Organization のオーナーは、特定のリポジトリのフォークを許可または禁止する前に、Organization レベルでプライベート{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}および内部{% endif %}リポジトリのフォークを許可する必要があります。 詳細は「[Organization のフォークポリシーを管理する](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)」を参照してください。

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Features] の下で [**Allow forking**] (フォークを許可) を選択します。 ![プライベートリポジトリのフォークの許可あるいは禁止のチェックボックス](/assets/images/help/repository/allow-forking-specific-org-repo.png)

### 参考リンク

- [フォークについて](/articles/about-forks)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
