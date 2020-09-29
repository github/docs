---
title: 管理 GitHub Enterprise Server 设备上的预接收挂钩
intro: '配置如何在 {% data variables.product.prodname_ghe_server %} 设备中使用预接收挂钩。'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance/
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  enterprise-server: '*'
---

### 创建预接收挂钩

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. 单击 **Add pre-receive hook**。 ![添加预接收挂钩](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. 在 **Hook name** 字段中，输入要创建的挂钩的名称。 ![为预接收挂钩命名](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. 从 **Environment** 下拉菜单中，选择要在其上运行挂钩的环境。 ![挂钩环境](/assets/images/enterprise/site-admin-settings/environment.png)
7. 在 **Script（脚本）**下，从 **Select hook repository（选择挂钩仓库）**下拉菜单中，选择包含预接收挂钩脚本的仓库。 从 **Select file** 下拉菜单中，选择预接收挂钩脚本的文件名。 ![挂钩脚本](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. 选择 **Use the exit-status to accept or reject pushes** 以强制执行脚本。 取消选中此选项可以在忽略 exit-status 值时测试脚本。 在此模式下，脚本的输出将在命令行中对用户可见，但在 web 界面上不可见。 ![使用 exit-status](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. 如果希望预接收挂钩在所有仓库上运行，请选择 **Enable this pre-receive hook on all repositories by default**。 ![为所有仓库启用挂钩](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. 选择 **Administrators can enable and disable this hook（管理员可以启用和禁用此挂钩）**，以允许具有管理员或所有者权限的组织成员选择要启用还是禁用此预接收挂钩。 ![管理员启用或禁用挂钩](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

### 编辑预接收挂钩

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. 在要编辑的预接收挂钩旁边，单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![编辑预接收挂钩](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

### 删除预接收挂钩

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
2. 在要删除的预接收挂钩旁边，单击 {% octicon "x" aria-label="X symbol" %}。 ![编辑预接收挂钩](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

### 为组织配置预接收挂钩

仅当站点管理员在创建预接收挂钩时选择了 **Administrators can enable or disable this hook** 选项，组织管理员才能为组织配置挂钩权限。 要为仓库配置预接收挂钩，您必须是组织管理员或所有者。

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 在左侧侧边栏中，单击 **Hooks**。 ![挂钩侧边栏](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. 在要配置的预接收挂钩旁边，单击 **Hook permissions** 下拉菜单。 选择要启用还是禁用预接收挂钩，或者允许仓库管理员对其进行配置。 ![挂钩权限](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

### 为仓库配置预接收挂钩

仅当站点管理员在创建预接收挂钩时选择了 **Administrators can enable or disable this hook** 选项，仓库所有者才能配置挂钩。 在组织中，组织所​​有者还必须选择 **Configurable** 挂钩权限。 要为仓库配置预接收挂钩，您必须是仓库所有者。

{% data reusables.profile.enterprise_access_profile %}
2. 单击 **Repositories**，然后选择要为其配置预接收挂钩的仓库。 ![仓库](/assets/images/enterprise/repos/repositories.png)
{% data reusables.repositories.sidebar-settings %}
4. 在左侧边栏中，单击 **Hooks & Services**。 ![挂钩和服务](/assets/images/enterprise/repos/hooks-services.png)
5. 在要配置的预接收挂钩旁边，单击 **Hook permissions** 下拉菜单。 选择要启用还是禁用预接收挂钩。 ![仓库挂钩权限](/assets/images/enterprise/repos/repo-hook-permissions.png)
