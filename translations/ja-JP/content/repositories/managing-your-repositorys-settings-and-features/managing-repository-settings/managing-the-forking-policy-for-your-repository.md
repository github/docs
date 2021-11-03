---
title: リポジトリのフォークポリシーを管理する
intro: 'Organization が所有する特定のプライベート{% ifversion fpt or ghae or ghes or ghec %}または内部{% endif %}リポジトリのフォークを許可または禁止できます。'
redirect_from:
  - /articles/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/allowing-people-to-fork-a-private-repository-owned-by-your-organization
  - /github/administering-a-repository/managing-the-forking-policy-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-the-forking-policy-for-your-repository
permissions: People with admin permissions for a repository can manage the forking policy for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: フォークポリシーの管理
---

Organization のオーナーは、特定のリポジトリのフォークを許可または禁止する前に、Organization レベルでプライベート{% ifversion fpt or ghae or ghes or ghec %}および内部{% endif %}リポジトリのフォークを許可する必要があります。 詳細は「[Organization のフォークポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」を参照してください。

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Features] の下で [**Allow forking**] (フォークを許可) を選択します。 ![プライベートリポジトリのフォークの許可あるいは禁止のチェックボックス](/assets/images/help/repository/allow-forking-specific-org-repo.png)

## 参考リンク

- [フォークについて](/articles/about-forks)
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
