---
title: 在设备上配置新仓库的默认可见性
intro: '您可以将通过 {% data variables.product.prodname_ghe_server %} 设备上的 Web 界面创建的所有新仓库的默认可见性设为私有或公共。'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
versions:
  enterprise-server: '*'
---

每次有人在 {% data variables.product.product_location_enterprise %} 上创建新仓库时，此人必须为仓库选择可见性。 当您为实例配置默认可见性设置时，需要选择默认可见性。 有关仓库可见性的更多信息，请参阅“[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)。”

如果站点管理员不允许成员创建某种类型的仓库，成员将无法创建此类仓库，即使可见性设置默认为此类型。 更多信息请参阅“[限制在实例中创建仓库](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)”。

{% tip %}

**提示**：您可以将更改仓库可见性的权限仅分配给站点管理员。 更多信息请参阅“[阻止用户更改仓库可见性](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility)”。

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. 在“默认仓库可见性”下，使用下拉菜单并选择默认可见性。 ![用于为实例选择默认仓库可见性的下拉菜单](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}
