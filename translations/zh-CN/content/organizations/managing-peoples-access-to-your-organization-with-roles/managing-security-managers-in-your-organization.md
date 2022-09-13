---
title: 管理组织中的安全管理员
intro: 通过将团队分配给安全管理员角色，您可以为安全团队提供他们对组织所需的最少访问权限。
versions:
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Security manager role
permissions: Organization owners can assign the security manager role.
ms.openlocfilehash: c29dd20a123ccb20a32d40896064e11d59643bd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145065962'
---
{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## 安全管理员角色的权限

具有安全管理员角色的团队成员仅具有有效管理组织安全性所需的权限。

- 除了任何现有的存储库访问外，还可以读取组织中的所有存储库
- 对组织中所有安全警报的写入访问权限 {% ifversion not fpt %}
- 访问组织的安全概述 {% endif %}
- 能够在组织级配置安全设置{% ifversion not fpt %}，包括启用或禁用 {% data variables.product.prodname_GH_advanced_security %}{% endif %}
- 能够在存储库级配置安全设置{% ifversion not fpt %}，包括启用或禁用 {% data variables.product.prodname_GH_advanced_security %}{% endif %}

{% ifversion fpt %} 其他功能（包括组织的安全概述）在将 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_advanced_security %} 一起使用的组织中可用。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)。
{% endif %}

如果团队具有安全管理员角色，则对团队和特定存储库具有管理员访问权限的人员可以更改团队对该存储库的访问级别，但不能删除访问权限。 有关详细信息，请参阅“[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}”和“[管理有权访问存储库的团队和人员](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)”。{% else %}."{% endif %}

  ![使用安全管理器管理存储库访问 UI](/assets/images/help/organizations/repo-access-security-managers.png)

## 将安全管理员角色分配给组织中的团队
您可以将安全管理员角色分配给组织中最多 10 个团队。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. 在“安全管理员”下，搜索并选择要授予该角色的团队。 您选择的每个团队都将显示在搜索栏下方的列表中。 
  ![添加安全管理员](/assets/images/help/organizations/add-security-managers.png)
## 从组织中的团队中删除安全管理员角色

{% warning %}

警告：从团队中删除安全管理员角色将删除团队在整个组织中管理安全警报和设置的能力，但团队将保留对分配角色时授予的存储库读取访问权限。 您必须手动删除任何不需要的读取访问权限。 有关详细信息，请参阅“[管理团队对组织存储库的访问](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)”。

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
1. 在“安全管理员”下，在要删除为安全管理员的团队右侧，单击“{% octicon "x" aria-label="The X icon" %}”。
  ![删除安全管理员](/assets/images/help/organizations/remove-security-managers.png)
