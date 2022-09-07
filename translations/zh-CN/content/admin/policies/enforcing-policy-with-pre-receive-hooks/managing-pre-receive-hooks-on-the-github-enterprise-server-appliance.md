---
title: 管理 GitHub Enterprise Server 设备上的预接收挂钩
intro: '配置如何在 {% data variables.product.prodname_ghe_server %} 设备中使用预接收挂钩。'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
ms.openlocfilehash: 0e57f86b9a15d5001d6ab0d9f20578690ab5361f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098018'
---
## 创建预接收挂钩

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
4. 单击“添加预接收挂钩”。
![添加预接收挂钩](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. 在“挂钩名称”字段中，输入要创建的挂钩的名称。
![为预接收挂钩命名](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. 从“环境”下拉菜单中，选择要运行挂钩的环境。
![挂钩环境](/assets/images/enterprise/site-admin-settings/environment.png)
7. 在“脚本”下的“选择挂钩存储库”下拉菜单中，选择包含预接收挂钩脚本的存储库 。 从“选择文件”下拉菜单中，选择预接收挂钩脚本的文件名。
![挂钩脚本](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. 选择“使用 exit-status 接受或拒绝推送”以强制实施脚本。 取消选中此选项可以在忽略 exit-status 值时测试脚本。 在此模式下，脚本的输出将在命令行中对用户可见，但在 web 界面上不可见。
![使用 exit-status](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. 如果想要预接收挂钩在所有存储库上运行，请选择“默认在所有存储库上启用此预接收挂钩”。
![为所有存储库启用挂钩](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. 选择“管理员可以启用和禁用此挂钩”，以允许具有管理员或所有者权限的组织成员选择要启用还是禁用此预接收挂钩。
![管理员启用或禁用挂钩](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

## 编辑预接收挂钩

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
1. 在要编辑的预接收挂钩旁边，单击 {% octicon "pencil" aria-label="The edit icon" %}。
![编辑预接收挂钩](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

## 删除预接收挂钩

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
2. 在要编辑的预接收挂钩旁边，单击 {% octicon "x" aria-label="X symbol" %}。
![编辑预接收挂钩](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

## 为组织配置预接收挂钩

仅当站点管理员在创建预接收挂钩时选择了“管理员可以启用或禁用此挂钩”选项，组织管理员才能为组织配置挂钩权限。 要为仓库配置预接收挂钩，您必须是组织管理员或所有者。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. 在左侧边栏中，单击“挂钩”。
![“挂钩”边栏](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. 在要配置的预接收挂钩旁边，单击“挂钩权限”下拉菜单。 选择要启用还是禁用预接收挂钩，或者允许仓库管理员对其进行配置。
![挂钩权限](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

## 为仓库配置预接收挂钩

仅当站点管理员在创建预接收挂钩时选择了“管理员可以启用或禁用此挂钩”选项，存储库所有者才能配置挂钩。 在组织中，组织所有者还必须选择“可配置”挂钩权限。 要为仓库配置预接收挂钩，您必须是仓库所有者。

{% data reusables.profile.enterprise_access_profile %}
2. 单击“存储库”，选择要为其配置预接收挂钩的存储库。
![存储库](/assets/images/enterprise/repos/repositories.png) {% data reusables.repositories.sidebar-settings %}
4. 在左侧边栏中，单击“挂钩和服务”。
![挂钩和服务](/assets/images/enterprise/repos/hooks-services.png)
5. 在要配置的预接收挂钩旁边，单击“挂钩权限”下拉菜单。 选择要启用还是禁用预接收挂钩。
![存储库挂钩权限](/assets/images/enterprise/repos/repo-hook-permissions.png)
