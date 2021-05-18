---
title: 启用自动更新检查
intro: '您可以启用自动更新检查，使 {% data variables.product.product_location %} 检查和下载最新的 {% data variables.product.prodname_ghe_server %} 版本。'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
---

在 {% data variables.product.product_location %} 的升级包自动下载后，您将收到一条消息，通知您可以升级 {% data variables.product.prodname_ghe_server %}。 升级包会下载到 {% data variables.product.product_location %} 上的 `/var/lib/ghe-updates` 目录中。 更多信息请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server)”。

如果升级存在可用的热补丁，将自动下载 `.hpkg`。 在 Management Console 中，您可以选择立即安装热补丁或排定稍后安装。 更多信息请参阅“[通过热补丁升级](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)”。

{% tip %}

**提示**：要启用自动更新检查，{% data variables.product.product_location %} 必须能够连接到 `https://github-enterprise.s3.amazonaws.com`。

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. 单击 **Yes, automatically check for updates**。 ![启用自动更新的按钮](/assets/images/enterprise/management-console/enable_updates_button.png)
{% data reusables.enterprise_management_console.save-settings %}

要查看您的实例是否处于最新状态，请检查 Updates 选项卡上的横幅。

![指示您的 GitHub Enterprise Server 版本的横幅](/assets/images/enterprise/management-console/up-to-date-banner.png)

在 **Logs** 下，您可以看到最近的更新检查的状态。

![更新日志](/assets/images/enterprise/management-console/update-log.png)
