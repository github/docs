---
title: Organization のフォークポリシーを管理する
intro: 'Organization が所有するプライベート{% ifversion ghes or ghae or ghec %}およびインターナル{% endif %}リポジトリのフォークを許可または禁止できます。'
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

デフォルトでは、新しい Organization はプライベート{% ifversion ghes or ghec or ghae %}およびインターナル{% endif %}リポジトリのフォークを禁止するように設定されます。

Organization レベルでプライベート{% ifversion ghes or ghec or ghae %} およびインターナル{% endif %}リポジトリのフォークを許可する場合は、特定のプライベート{% ifversion ghes or ghec or ghae %}またはインターナル{% endif %}リポジトリをフォークする機能も設定することができます。 詳細は「[リポジトリのフォークポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」を参照してください。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Under "Repository forking", select **Allow forking of private {% ifversion ghec or ghes or ghae %}and internal {% endif %}repositories**.

   {%- ifversion fpt %}
   ![Organization でフォークを許可または禁止するチェックボックス](/assets/images/help/repository/allow-disable-forking-fpt.png)
   {%- elsif ghes or ghec or ghae %}
   ![Organization でフォークを許可または禁止するチェックボックス](/assets/images/help/repository/allow-disable-forking-organization.png)
   {%- endif %}
6. [**Save**] をクリックします。

## 参考リンク

- 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
