---
title: サードパーティのサーバを使うGit Large File Storageの設定
intro: '{{ site.data.variables.product.prodname_ghe_server }} アプライアンスで {{ site.data.variables.large_files.product_name_long }} ({{ site.data.variables.large_files.product_name_short }}) を無効にし、大規模なアセットを保存するサーバーの URL で {{ site.data.variables.large_files.product_name_short }} クライアントを設定することで、サードパーティのサーバーで {{ site.data.variables.large_files.product_name_short }} を使用できます。'
redirect_from:
  - /enterprise/admin/installation/configuring-git-large-file-storage-to-use-a-third-party-server
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.large_files.storage_assets_location }}
{{ site.data.reusables.large_files.rejected_pushes }}

1. {{ site.data.variables.product.prodname_ghe_server }} アプライアンスで {{ site.data.variables.large_files.product_name_short }} を無効にします。 詳しい情報については"[{{ site.data.variables.large_files.product_name_long }}の設定](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage#configuring-git-large-file-storage-for-your-appliance)"を参照してください。

2. サードパーティのサーバーを指し示す {{ site.data.variables.large_files.product_name_short }} の設定ファイルを作成します。
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

3. 各ユーザーに対して同じ {{ site.data.variables.large_files.product_name_short }} の設定を維持するには、カスタムの `.lfsconfig` ファイルをリポジトリにコミットします。
  ```shell
  $ git add .lfsconfig
  $ git commit -m "Adding LFS config file"
  ```
3. 既存の {{ site.data.variables.large_files.product_name_short }} アセットを移行します。 詳細は「[異なる {{ site.data.variables.large_files.product_name_long }} サーバーへ移行する](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)」を参照してください。

### 参考リンク

- "[{{ site.data.variables.large_files.product_name_long }}について](/articles/about-git-large-file-storage/)"
- "[{{ site.data.variables.large_files.product_name_long }}の設定](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage)"
- "[異なる{{ site.data.variables.large_files.product_name_long }}サーバへの移行](/enterprise/{{ currentVersion }}/admin/guides/installation/migrating-to-a-different-git-large-file-storage-server)"
- [{{ site.data.variables.large_files.product_name_long }}プロジェクトサイト](https://git-lfs.github.com/)
