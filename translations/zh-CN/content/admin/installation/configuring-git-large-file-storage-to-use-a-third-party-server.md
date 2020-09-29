---
title: 将 Git Large File Storage 配置为使用第三方服务器
intro: '在 {% data variables.product.prodname_ghe_server %} 设备上禁用 {% data variables.large_files.product_name_short %} 并使用要存储大型资源的服务器 URL 配置 {% data variables.large_files.product_name_short %} 客户端，即可在第三方服务器上使用 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %})。'
redirect_from:
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
versions:
  enterprise-server: '*'
---

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

1. 在 {% data variables.product.prodname_ghe_server %} 设备上禁用 {% data variables.large_files.product_name_short %}。 更多信息请参阅“[配置 {% data variables.large_files.product_name_long %}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage#configuring-git-large-file-storage-for-your-appliance)”。

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

3. 为使各用户的 {% data variables.large_files.product_name_short %} 配置相同，请向仓库提交自定义 `.lfsconfig` 文件。
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. 迁移任何现有的 {% data variables.large_files.product_name_short %} 资源。 更多信息请参阅“[迁移到其他 {% data variables.large_files.product_name_long %} 服务器](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)”。

### 延伸阅读

- "[关于 {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage/)"
- "[配置 {% data variables.large_files.product_name_long %}](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage)"
- "[迁移到其他 {% data variables.large_files.product_name_long %} 服务器](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)"
- [{% data variables.large_files.product_name_long %} 项目站点](https://git-lfs.github.com/)
