---
title: 配置 Git Large File Storage
intro: '安装 [{% data variables.large_files.product_name_short %}] 后 (/articles/installing-git-large-file-storage/)，需要将其与仓库中的大文件相关联。'
redirect_from:
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance/
  - /enterprise/admin/installation/configuring-git-large-file-storage
versions:
  enterprise-server: '*'
---

### 关于 {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} 您可以将 {% data variables.large_files.product_name_long %} 与单一仓库、所有个人或组织仓库、{% data variables.product.product_location_enterprise %} 中的每一个仓库结合使用。 您需要先为设备启用 {% data variables.large_files.product_name_short %}，然后才能为特定仓库或组织启用 {% data variables.large_files.product_name_short %}。

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

更多信息请参阅“[关于 {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)”、“[大文件版本管理](/enterprise/user/articles/versioning-large-files/)”以及 [{% data variables.large_files.product_name_long %} 项目站点](https://git-lfs.github.com/)。

### 为设备配置 {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. 在“{% data variables.large_files.product_name_short %} 访问权限”下，使用下拉菜单，然后单击 **Enabled（已启用）**或 **Disabled（已禁用）**。 ![Git LFS access](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

### 为各个仓库配置 {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

### 为用户帐户或组织拥有的每个仓库配置 {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}
