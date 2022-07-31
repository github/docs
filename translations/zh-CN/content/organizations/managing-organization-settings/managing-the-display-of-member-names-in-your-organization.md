---
title: 管理组织中成员名称的显示
intro: 您可以允许组织成员在组织的私有仓库中查看评论作者的个人资料名称。
product: '{% data reusables.gated-features.display-names %}'
redirect_from:
  - /articles/managing-the-display-of-member-names-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-display-of-member-names-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 管理成员名称的显示
---

组织所有者可管理组织中成员名称的显示。

![评论中显示的评论者个人资料名称](/assets/images/help/issues/commenter-full-name.png)

每个组织成员在自己的设置中选择自己的个人资料名称。 更多信息请参阅“[个性化您的个人资料](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#changing-your-profile-name)”。

{% ifversion profile-name-enterprise-setting %}
如果企业所有者在企业级别设置了策略，则可能无法为组织配置此设置。 更多信息请参阅“[在企业中实施仓库管理策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)”。{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Admin repository permissions（管理仓库权限）”下，选中或取消选中 **Allow members to see comment author's profile name in private repositories（允许成员在私有仓库中查看评论作者的个人资料名称）**。 ![允许成员在私有仓库中查看评论作者的全名复选框](/assets/images/help/organizations/allow-members-to-view-full-names.png)
6. 单击 **Save（保存）**。
