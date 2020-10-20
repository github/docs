---
title: リポジトリのフォークポリシーを管理する
intro: 'You can allow or prevent the forking of a specific private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %} repository owned by an organization.'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
permissions: リポジトリに対して管理者権限がある人は、リポジトリのフォークポリシーを管理できます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

An organization owner must allow forks of private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and internal{% endif %} repositories on the organization level before you can allow or disallow forks for a specific repository. 詳細は「[Organization のフォークポリシーを管理する](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)」を参照してください。

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Features] の下で [**Allow forking**] (フォークを許可) を選択します。 ![プライベートリポジトリのフォークの許可あるいは禁止のチェックボックス](/assets/images/help/repository/allow-forking-specific-org-repo.png)

### 参考リンク

- [フォークについて](/articles/about-forks)
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
