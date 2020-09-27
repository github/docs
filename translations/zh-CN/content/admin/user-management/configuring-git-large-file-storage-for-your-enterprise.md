---
title: Configuring Git Large File Storage for your enterprise
intro: '{{ site.data.reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description }}'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise/
  - /enterprise/admin/installation/configuring-git-large-file-storage-on-github-enterprise-server
  - /enterprise/admin/installation/configuring-git-large-file-storage
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance/
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server/
  - /enterprise/admin/user-management/configuring-git-large-file-storage-for-your-enterprise
versions:
  enterprise-server: '*'
---

### 关于 {{ site.data.variables.large_files.product_name_long }}

{{ site.data.reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description }} 您可以将 {{ site.data.variables.large_files.product_name_long }} 与单一仓库、所有个人或组织仓库、{{ site.data.variables.product.product_location_enterprise }} 中的每一个仓库结合使用。 您需要先为设备启用 {{ site.data.variables.large_files.product_name_short }}，然后才能为特定仓库或组织启用 {{ site.data.variables.large_files.product_name_short }}。

{{ site.data.reusables.large_files.storage_assets_location }}
{{ site.data.reusables.large_files.rejected_pushes }}

更多信息请参阅“[关于 {{ site.data.variables.large_files.product_name_long }}](/articles/about-git-large-file-storage)”、“[大文件版本管理](/enterprise/user/articles/versioning-large-files/)”以及 [{{ site.data.variables.large_files.product_name_long }} 项目站点](https://git-lfs.github.com/)。

{{ site.data.reusables.large_files.can-include-lfs-objects-archives }}

### 为设备配置 {{ site.data.variables.large_files.product_name_long }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{% else %}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{% endif %}
{{ site.data.reusables.enterprise-accounts.options-tab }}
4. 在“{{ site.data.variables.large_files.product_name_short }} 访问权限”下，使用下拉菜单，然后单击 **Enabled（已启用）**或 **Disabled（已禁用）**。 ![Git LFS access](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

### 为各个仓库配置 {{ site.data.variables.large_files.product_name_long }}

{{ site.data.reusables.enterprise_site_admin_settings.override-policy }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.repository-search }}
{{ site.data.reusables.enterprise_site_admin_settings.click-repo }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-top-tab }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-tab }}
{{ site.data.reusables.enterprise_site_admin_settings.git-lfs-toggle }}

### 为用户帐户或组织拥有的每个仓库配置 {{ site.data.variables.large_files.product_name_long }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.search-user-or-org }}
{{ site.data.reusables.enterprise_site_admin_settings.click-user-or-org }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-top-tab }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-tab }}
{{ site.data.reusables.enterprise_site_admin_settings.git-lfs-toggle }}

### 将 Git Large File Storage 配置为使用第三方服务器

{{ site.data.reusables.large_files.storage_assets_location }}
{{ site.data.reusables.large_files.rejected_pushes }}

1. 在 {{ site.data.variables.product.prodname_ghe_server }} 设备上禁用 {{ site.data.variables.large_files.product_name_short }}。 更多信息请参阅“[配置 {{ site.data.variables.large_files.product_name_long }}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage#configuring-git-large-file-storage-for-your-appliance)”。

2. 创建指向第三方服务器的 {{ site.data.variables.large_files.product_name_short }} 配置文件。
  ```shell
  # Show default configuration
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>GITHUB-ENTERPRISE-HOST</em>/path/to/repo/info/lfs (auth=basic)
  &nbsp;
  # Create .lfsconfig that points to third party server.
  $ git config -f .lfsconfig remote.origin.lfsurl https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo/info/lfs (auth=none)
  &nbsp;
  # Show the contents of .lfsconfig
  $ cat .lfsconfig
  [remote "origin"]
  lfsurl = https://<em>THIRD-PARTY-LFS-SERVER</em>/path/to/repo
  ```

3. 为使各用户的 {{ site.data.variables.large_files.product_name_short }} 配置相同，请向仓库提交自定义 `.lfsconfig` 文件。
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. 迁移任何现有的 {{ site.data.variables.large_files.product_name_short }} 资源。 For more information, see "[Migrating to a different {{ site.data.variables.large_files.product_name_long }} server](#migrating-to-a-different-git-large-file-storage-server)."

### 迁移到其他 Git Large File Storage 服务器

迁移到其他 {{ site.data.variables.large_files.product_name_long }} 服务器之前，您必须将 {{ site.data.variables.large_files.product_name_short }} 配置为使用第三方服务器。 For more information, see "[Configuring {{ site.data.variables.large_files.product_name_long }} to use a third party server](#configuring-git-large-file-storage-to-use-a-third-party-server)."

1. 使用第二个远端配置仓库。
  ```shell
  $ git remote add <em>NEW-REMOTE</em> https://<em>NEW-REMOTE-HOSTNAME</em>/path/to/repo
  &nbsp;
  $ git lfs env
  > git-lfs/1.1.0 (GitHub; darwin amd64; go 1.5.1; git 94d356c)
  > git version 2.7.4 (Apple Git-66)
  &nbsp;
  > Endpoint=https://<em>GITHUB-ENTERPRISE-HOST</em>/path/to/repo/info/lfs (auth=basic)
  > Endpoint (<em>NEW-REMOTE</em>)=https://<em>NEW-REMOTE-HOSTNAME</em>/path/to/repo/info/lfs (auth=none)
  ```

2. 从旧远端提取所有对象。
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
  ```

3. 将所有对象推送到新远端。
  ```shell
  $ git lfs push <em>NEW-REMOTE</em> --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
  ```

### 延伸阅读

- [{{ site.data.variables.large_files.product_name_long }} 项目站点](https://git-lfs.github.com/)
