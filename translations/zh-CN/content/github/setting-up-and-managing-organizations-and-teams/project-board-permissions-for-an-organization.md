---
title: 组织的项目板权限
intro: '组织所有者以及具有项目板管理员权限的人员能够自定义谁对您组织的项目板具有读取、写入和管理员权限。'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 权限概述

人员和团队的项目板协作者有三种权限级别：

{% data reusables.project-management.project-board-permissions %}

组织所有者以及具有管理员权限的人员可授予个人作为外部协作者或组织成员，或者通过其在团队或组织中的成员资格来访问组织项目板。 外部协作者是指并非组织成员但被授予协作参与组织的人员。

组织所有者以及对项目板具有管理员权限的人员还可以：
- 设置所有组织成员的默认项目板权限。
- 管理组织成员、团队和外部协作者对项目板的访问。 更多信息请参阅“[管理团队对组织项目板的访问](/articles/managing-team-access-to-an-organization-project-board)”、“[管理个人对组织项目板的访问](/articles/managing-an-individual-s-access-to-an-organization-project-board)”或“[管理组织成员对项目板的访问](/articles/managing-access-to-a-project-board-for-organization-members)”。
- 管理项目板可见性。 更多信息请参阅“[管理组织成员对项目板的访问](/articles/managing-access-to-a-project-board-for-organization-members)”。

### 级联项目板的权限

{% data reusables.project-management.cascading-permissions %}

例如，如果组织所有者向所有组织成员授予了读取项目板的权限，而项目板管理员向组织成员（作为个人协作者）授予项目板写入权限，则此人对项目板具有写入权限。

### 项目板可见性

{% data reusables.project-management.project-board-visibility %} 您可以将项目板的可见性从私人更改为公共，反之亦然。 更多信息请参阅“[更改项目板可见性](/articles/changing-project-board-visibility)”。

### 延伸阅读

- "[更改项目板可见性](/articles/changing-project-board-visibility)"
- "[管理个人对组织项目板的访问](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[管理团队对组织项目板的访问](/articles/managing-team-access-to-an-organization-project-board)"
- "[管理组织成员对项目板的访问](/articles/managing-access-to-a-project-board-for-organization-members)"
