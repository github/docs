---
title: 管理组织成员对项目板的访问
intro: '作为组织所有者或项目板管理员，您可以为所有组织成员设置项目板的默认权限级别。'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

默认情况下，组织成员对其组织的项目板具有写入权限，除非组织所有者或项目板管理员对特定项目板设置不同的权限。

### 为所有组织成员设置基线权限级别

{% tip %}

**提示：**您可以授予组织更高的项目板权限。 更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization)”。

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. 在 "Organization member permission"（组织成员权限）下，为所有组织成员选择基线权限级别：**Read（读取）**、**Write（写入）**、**Admin（管理员）**或 **None（无）**。 ![用于所有组织成员的基线项目板权限选项](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. 单击 **Save（保存）**。

### 延伸阅读

- "[管理个人对组织项目板的访问](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[管理团队对组织项目板的访问](/articles/managing-team-access-to-an-organization-project-board)"
- "[组织的项目板权限](/articles/project-board-permissions-for-an-organization)"
