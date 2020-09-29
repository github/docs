---
title: 设置 Git 推送限制
intro: 您可以对仓库中的 Git 对象强制执行最大大小限制。
redirect_from:
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/installation/setting-git-push-limits
versions:
  enterprise-server: '*'
---

要使仓库大小保持可管理并防止发生性能问题，可以为实例上的仓库配置文件大小限制。

默认情况下，强制执行仓库上传限制时，无法添加或上传超过 100 MB 的文件。

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**注**：仅会根据 Git 推送限制检查大于 {% data variables.large_files.warning_size %} 的文件。 如果需要设置较低的推送限制，请联系 {% data variables.contact.contact_ent_support %} 获得帮助。

{% endtip %}
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“Repository upload limit”下，使用下拉菜单，然后单击最大对象大小。 ![包含最大对象大小选项的下拉菜单](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. 或者，要对 {% data variables.product.product_location_enterprise %} 上的所有仓库执行最大上传限制，请选择 select **Enforce on all repositories（对所有仓库强制执行）** ![对所有仓库选项强制执行最大对象限制](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)
