---
title: 'Managing access to a {% data variables.product.prodname_project_v1 %} for organization members'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can set a default permission level for a {% data variables.projects.projects_v1_board %} for all organization members.'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 管理成员的访问权限
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

By default, organization members have write access to their organization's {% data variables.projects.projects_v1_boards %} unless organization owners or {% data variables.projects.projects_v1_board %} admins set different permissions for specific {% data variables.projects.projects_v1_boards %}.

## 为所有组织成员设置基线权限级别

{% tip %}

**Tip:** You can give an organization member higher permissions to {% data variables.projects.projects_v1_board %}. 更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. 在 "Organization member permission"（组织成员权限）下，为所有组织成员选择基线权限级别：**Read（读取）**、**Write（写入）**、**Admin（管理员）**或 **None（无）**。 ![用于所有组织成员的基线项目板权限选项](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. 单击 **Save（保存）**。

## 延伸阅读

- "[Managing an individual’s access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Managing team access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-team-access-to-an-organization-project-board)"
- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"
