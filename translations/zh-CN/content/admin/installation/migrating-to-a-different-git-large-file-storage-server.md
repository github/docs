---
title: 迁移到其他 Git Large File Storage 服务器
intro: '您可以使用 {% data variables.large_files.product_name_short %} 客户端从现有服务器提取资产并将它们推送到新位置，通过这种方式迁移到新的 {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) 服务器。'
redirect_from:
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server/
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
versions:
  enterprise-server: '*'
---

迁移到其他 {% data variables.large_files.product_name_long %} 服务器之前，您必须将 {% data variables.large_files.product_name_short %} 配置为使用第三方服务器。 更多信息请参阅“[将 {% data variables.large_files.product_name_long %} 配置为使用第三方服务器](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-to-use-a-third-party-server)”。

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
