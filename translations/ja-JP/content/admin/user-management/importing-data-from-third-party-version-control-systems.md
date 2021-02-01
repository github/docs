---
title: サードパーティのバージョン管理システムからのデータのインポート
intro: 'git-import スイートのツールを使用すると、Subversion、Mercurial、Team Foundation Version Control から {% data variables.product.prodname_ghe_server %} 上の Git リポジトリにインポートできます。'
redirect_from:
  - /enterprise/admin/migrations/importing-data-from-third-party-version-control-systems
  - /enterprise/admin/user-management/importing-data-from-third-party-version-control-systems
versions:
  enterprise-server: '*'
---

### Mercurialからのプロジェクトのインポート

{% data reusables.enterprise_installation.ssh-into-instance %}
2. ソースプロジェクトのURLと一時リポジトリへのパスを指定して、以下のコマンドを使ってプロジェクトの生のクローンを作成してください。
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # 指定したパスの「refs/import/」に、1つ以上のGit refを持つリポジトリを新たに作成する。
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV ファイルを使って作者とブランチを書き直します:
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. まだ [{% data variables.product.prodname_ghe_server %} 上に新しい空のリポジトリを作成](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository)していない場合は作成してください。
{% data reusables.command_line.switching_directories_procedural %}
7. インポートされたリポジトリを {% data variables.product.prodname_ghe_server %} にプッシュします。
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Subversionからのプロジェクトのインポート

{% data reusables.enterprise_installation.ssh-into-instance %}
2. ソースプロジェクトのURLと一時リポジトリへのパスを指定して、以下のコマンドを使ってプロジェクトの生のクローンを作成してください。
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # 指定したパスの「refs/import/」に、1つ以上のGit refを持つリポジトリを新たに作成する。
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV ファイルを使って作者とブランチを書き直します:
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. まだ [{% data variables.product.prodname_ghe_server %} 上に新しい空のリポジトリを作成](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository)していない場合は作成してください。
{% data reusables.command_line.switching_directories_procedural %}
7. インポートされたリポジトリを {% data variables.product.prodname_ghe_server %} にプッシュします。
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Team Foundation Version Controlからのプロジェクトのインポート

{% data reusables.enterprise_installation.ssh-into-instance %}
2. ソースプロジェクトのURLと一時リポジトリへのパスを指定して、以下のコマンドを使ってプロジェクトの生のクローンを作成してください。
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # 指定したパスの「refs/import/」に、1つ以上のGit refを持つリポジトリを新たに作成する。
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. CSV ファイルを使って作者とブランチを書き直します:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. まだ [{% data variables.product.prodname_ghe_server %} 上に新しい空のリポジトリを作成](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository)していない場合は作成してください。
{% data reusables.command_line.switching_directories_procedural %}
7. インポートされたリポジトリを {% data variables.product.prodname_ghe_server %} にプッシュします。
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### 参考リンク

- "[コマンドラインユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#import-and-export)"
