---
title: 设置添加外部协作者的权限
intro: 为了保护组织的数据和组织中使用的付费许可数，您可以只允许所有者邀请外部协作者加入组织仓库。
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 设置协作者策略
---

默认情况下，对存储库具有管理员访问权限的任何人都可以邀请外部协作者处理存储库。 您可以选择将邀请外部协作者的能力限制为仅邀请组织所有者。

{% ifversion ghec %}
{% note %}

**注意：** 只有使用 {% data variables.product.prodname_ghe_cloud %} 的组织才能限制向组织所有者邀请外部协作者的能力。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% ifversion ghec %}如果您的组织由企业帐户拥有，则当企业所有者在企业级别设置了策略后，您{% else %}您{% endif %} 可能无法为您的组织配置此设置。 更多信息请参阅“[在企业中强制实施存储库管理策略]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)”{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}”。

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository invitations（仓库邀请）”下，选择 **Allow members to invite outside collaborators to repositories for this organization（允许成员邀请外部协作者加入此组织的仓库）**。 ![允许成员邀请外部协作者加入组织仓库的复选框](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. 单击 **Save（保存）**。
