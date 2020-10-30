---
title: 異なるGit Large File Storageサーバへの移行
intro: '{% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) クライアントを使用して、既存のサーバーからアセットを取得し、それらを新しい場所にプッシュすることで、新しい {% data variables.large_files.product_name_short %} サーバーに移行できます。'
redirect_from:
  - /enterprise/admin/guides/installation/migrating-to-different-large-file-storage-server/
  - /enterprise/admin/installation/migrating-to-a-different-git-large-file-storage-server
versions:
  enterprise-server: '*'
---

異なる{% data variables.large_files.product_name_long %}サーバに移行する前に、サードパーティサーバを使うよう{% data variables.large_files.product_name_short %}を設定しなければなりません。 詳しい情報については"[サードパーティサーバを使う{% data variables.large_files.product_name_long %}の設定](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-to-use-a-third-party-server)"を参照してください。

1. 2 番目のリモートでリポジトリを設定します。
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

2. 古いリモートからすべてのオブジェクトを取得します。
  ```shell
  $ git lfs fetch origin --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Fetching objects...
  > Git LFS: (16 of 16 files) 48.71 MB / 48.85 MB
  ```

3. すべてのオブジェクトを新しいリモートにプッシュします。
  ```shell
  $ git lfs push <em>NEW-REMOTE</em> --all
  > Scanning for all objects ever referenced...
  > ✔ 16 objects found
  > Pushing objects...
  > Git LFS: (16 of 16 files) 48.00 MB / 48.85 MB, 879.10 KB skipped
  ```
