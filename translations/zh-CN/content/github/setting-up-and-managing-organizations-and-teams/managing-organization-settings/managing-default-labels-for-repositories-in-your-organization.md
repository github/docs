---
title: 管理组织中仓库的默认标签
intro: 您可以自定义组织的每个新仓库中包含的标签。
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
topics:
  - 组织
  - 团队
---
组织所有者可以管理组织中仓库的默认标签。

默认标签包含在组织的每个新仓库中，但对仓库具有写入权限的任何人以后都能编辑或删除该仓库中的标签。 添加、编辑或删除默认标签不会从在现有仓库中添加、编辑或删除标签。

### 创建默认标签

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
5. 在“Repository labels（仓库标签）”下，单击 **New label（新标签）**。 ![新标签按钮](/assets/images/help/organizations/new-label-button.png)
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### 编辑默认标签

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### 删除默认标签

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
{% data reusables.project-management.delete-label %}
{% data reusables.project-management.confirm-label-deletion %}

### 延伸阅读

- "[关于标签](/articles/about-labels)"
