---
title: 阻止您设备上的强制推送
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
intro: '任何站点管理员都可以阻止 {% data variables.product.prodname_ghe_server %} 设备上的所有强制推送 (git push --force)'
versions:
  enterprise-server: '*'
---

每个仓库都从其所属的用户帐户或组织的设置继承了默认强制推送设置。 同样，每个组织和用户帐户都会从整个设备的强制推送设置继承默认强制推送设置。 如果更改设备的强制推送设置，则会更改任何用户或组织拥有的所有仓库。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Force pushes（强制推送）”下，使用下拉菜单，然后单击 **Allow（允许）**、**Block（阻止）**或 **Block to the default branch（阻止到默认分支）**。 ![强制推送下拉菜单](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. 可以视情况选择 **Enforce on all repositories**，这将覆盖强制推送的组织和仓库级别设置。

### 延伸阅读

- “[阻止对用户帐户或组织拥有的仓库进行强制推送](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)”
- “[阻止对仓库进行强制推送](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)”
