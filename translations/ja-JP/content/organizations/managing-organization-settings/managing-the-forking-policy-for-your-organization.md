---
title: Organization のフォークポリシーを管理する
intro: 'Organization が所有するプライベート{% ifversion fpt or ghes or ghae or ghec %}およびインターナル{% endif %}リポジトリのフォークを許可または禁止できます。'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: フォークポリシーの管理
---

デフォルトでは、新しい Organization はプライベート{% ifversion fpt or ghes or ghae or ghec %}およびインターナル{% endif %}リポジトリのフォークを禁止するように設定されます。

Organization レベルでプライベート{% ifversion fpt or ghes or ghae or ghec %} およびインターナル{% endif %}リポジトリのフォークを許可する場合は、特定のプライベート{% ifversion fpt or ghes or ghae or ghec %}またはインターナル{% endif %}リポジトリをフォークする機能も設定することができます。 詳細は「[リポジトリのフォークポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」を参照してください。

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. [Repository forking] で、[**Allow forking of private repositories**] または [**Allow forking of private and internal repositories**] を選択します。 ![Organization でフォークを許可または禁止するチェックボックス](/assets/images/help/repository/allow-disable-forking-organization.png)
6. [**Save**] をクリックします。

## 参考リンク

- 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
