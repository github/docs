---
title: 设置添加外部协作者的权限
intro: 为了保护组织的数据和组织中使用的付费许可数，您可以只允许所有者邀请外部协作者加入组织仓库。
product: '{% data reusables.gated-features.restrict-add-collaborator %}'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 设置协作者策略
---

组织所有者和具有仓库管理员权限的成员可以邀请外部协作者处理仓库。 您还可以将外部协作者邀请权限仅限于组织所有者。

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. 在“Repository invitations（仓库邀请）”下，选择 **Allow members to invite outside collaborators to repositories for this organization（允许成员邀请外部协作者加入此组织的仓库）**。 ![允许成员邀请外部协作者加入组织仓库的复选框](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. 单击 **Save（保存）**。
