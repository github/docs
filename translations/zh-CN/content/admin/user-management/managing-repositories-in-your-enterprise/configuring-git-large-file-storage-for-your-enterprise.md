---
title: 为企业配置 Git 大型文件存储
intro: '{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %}'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise
  - /enterprise/admin/installation/configuring-git-large-file-storage-on-github-enterprise-server
  - /enterprise/admin/installation/configuring-git-large-file-storage
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server
  - /enterprise/admin/user-management/configuring-git-large-file-storage-for-your-enterprise
  - /admin/user-management/configuring-git-large-file-storage-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Git
  - Enterprise
  - LFS
  - Storage
shortTitle: Configure Git LFS
ms.openlocfilehash: d6364bc1d45643ebb3dc1c46cec467515fd4da55
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098674'
---
## 关于 {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} 您可以将 {% data variables.large_files.product_name_long %} 与单一仓库、所有个人或组织仓库或企业中的每一个仓库结合使用。 您需要先为企业启用 {% data variables.large_files.product_name_short %}，然后才能为特定仓库或组织启用 {% data variables.large_files.product_name_short %}。

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

有关详细信息，请参阅“[关于 {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)”、“[大型文件的版本控制](/enterprise/user/articles/versioning-large-files/)”和 [{% data variables.large_files.product_name_long %} 项目站点](https://git-lfs.github.com/)。

{% data reusables.large_files.can-include-lfs-objects-archives %}

## 为企业配置 {% data variables.large_files.product_name_long %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. 在“{% data variables.large_files.product_name_short %} 访问”下，使用下拉菜单，然后单击“已启用”或“已禁用” 。
![Git LFS 访问](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

## 为各个仓库配置 {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

## 为用户帐户或组织拥有的每个仓库配置 {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %} {% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

{% ifversion ghes %}
## 将 Git Large File Storage 配置为使用第三方服务器

{% data reusables.large_files.storage_assets_location %} {% data reusables.large_files.rejected_pushes %}

1. 在 {% data variables.product.product_location %} 上禁用 {% data variables.large_files.product_name_short %}。 有关详细信息，请参阅“[为你的企业配置 {% data variables.large_files.product_name_long %}](#configuring-git-large-file-storage-for-your-enterprise)”。

2. 创建指向第三方服务器的 {% data variables.large_files.product_name_short %} 配置文件。
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

3. 为使各用户的 {% data variables.large_files.product_name_short %} 配置相同，请向存储库提交自定义 `.lfsconfig` 文件。
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. 迁移任何现有的 {% data variables.large_files.product_name_short %} 资源。 有关详细信息，请参阅“[迁移到不同的 {% data variables.large_files.product_name_long %} 服务器](#migrating-to-a-different-git-large-file-storage-server)”。

## 迁移到其他 Git Large File Storage 服务器

迁移到其他 {% data variables.large_files.product_name_long %} 服务器之前，您必须将 {% data variables.large_files.product_name_short %} 配置为使用第三方服务器。 有关详细信息，请参阅“[配置 {% data variables.large_files.product_name_long %} 以使用第三方服务器](#configuring-git-large-file-storage-to-use-a-third-party-server)”。

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
{% endif %}

## 延伸阅读

- [{% data variables.large_files.product_name_long %} 项目站点](https://git-lfs.github.com/)
