---
title: 管理组织的复刻政策
intro: '您可以允许或阻止对组织拥有的任何私有{% ifversion ghes or ghae or ghec %} 和内部{% endif %} 仓库进行复刻。'
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
shortTitle: 管理复刻策略
---

默认情况下，新的组织被配置为禁止复刻私有{% ifversion ghes or ghec or ghae %}和内部{% endif %}仓库。

如果您在组织级别上允许复刻私有{% ifversion ghes or ghec or ghae %}和内部{% endif %}仓库，则还可以配置复刻特定{% ifversion ghes or ghec or ghae %}或内部{% endif %}仓库的能力。 更多信息请参阅“[管理仓库的复刻政策](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)”。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.profile.org_member_privileges %}
1. 在“Repository forking（仓库复刻）”下，选择**允许私有{% ifversion ghec or ghes or ghae %}和内部{% endif %}仓库复刻**。

   {%- ifversion fpt %}
   ![允许或禁止组织复刻的复选框](/assets/images/help/repository/allow-disable-forking-fpt.png)
   {%- elsif ghes or ghec or ghae %}
   ![允许或禁止组织复刻的复选框](/assets/images/help/repository/allow-disable-forking-organization.png)
   {%- endif %}
6. 单击 **Save（保存）**。

## 延伸阅读

- "[关于复刻](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
