---
title: 设置添加外部协作者的权限
intro: '为了保护组织的数据和组织中使用的付费许可数，您可以只允许所有者邀请外部协作者加入组织仓库。'
product: '{% data reusables.gated-features.restict-add-collaborator %}'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories/
  - /articles/setting-permissions-for-adding-outside-collaborators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

组织所有者和具有仓库管理员权限的成员可以邀请外部协作者处理仓库。 您还可以将外部协作者邀请权限仅限于组织所有者。

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository invitations", select **Allow members to invite outside collaborators to repositories for this organization**.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% else %}
![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox.png){% endif %}
6. 单击 **Save（保存）**。
