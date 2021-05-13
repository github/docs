---
title: Enterprise から移行データをエクスポートする
intro: 'プラットフォームの変更、およびトライアルインスタンスから本番インスタンスに移行するには、インスタンスを準備して、リポジトリをロックし、移行アーカイブを生成することで、{% data variables.product.prodname_ghe_server %} インスタンスから移行データをエクスポートできます。'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-enterprise/
  - /enterprise/admin/migrations/exporting-migration-data-from-github-enterprise-server
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance/
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories/
  - /enterprise/admin/user-management/exporting-migration-data-from-your-enterprise
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### {% data variables.product.prodname_ghe_server %} ソースインスタンスを準備する

1. {% data variables.product.prodname_ghe_server %} ソースのサイト管理者であることを確認します。 そのための最善の方法は、[インスタンスへのSSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)が可能であることを確認することです。

2. {% data variables.product.prodname_ghe_server %} ソースインスタンス上での {% data reusables.enterprise_migrations.token-generation %}。

{% data reusables.enterprise_migrations.make-a-list %}

### {% data variables.product.prodname_ghe_server %} ソースリポジトリをエクスポートする

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. エクスポートするリポジトリを準備するには、`ghe-migrator add` コマンドをリポジトリの URL と一緒に使用します:
    * リポジトリをロックする場合は、コマンドの末尾に `--lock` を付けます。 トライアル実行を行う場合は、`--lock` は必要ありません。
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * コマンドの後ろに `--exclude_attachments` を付けると添付ファイルを除外できます。 {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * エクスポートする複数のリポジトリを同時に準備するには、各リポジトリ URL を 1 行ずつ記載したテキストファイルを作成し、`ghe-migrator add` コマンドに `-i` フラグとテキストファイルのパスを付けて実行します。
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. 入力を求められたら、{% data variables.product.prodname_ghe_server %} ユーザ名を入力します:
  ```shell
  Enter username authorized for migration:  admin
  ```
4. 個人用アクセストークンを求められたら、「[{% data variables.product.prodname_ghe_server %}ソースインスタンスの準備](#preparing-the-github-enterprise-server-source-instance)」で作成したアクセストークンを入力します。
  ```shell
  Enter personal access token:  **************
  ```
5. `ghe-migrator add`が終了すると、このエクスポートと追加されたリソースのリストを識別するために生成されたユニークな"移行GUID"が出力されます。 生成されたGUIDは、後の`ghe-migrator add`及び`ghe-migrator export`のステップで同じエクスポートに対して処理を続けるよう`ghe-migrator`に伝えるために使います。
  ```shell
  > 101 models added to export
  > Migration GUID: <em>example-migration-guid</em>
  > Number of records in this migration:
  > users                        |  5
  > organizations                |  1
  > repositories                 |  1
  > teams                        |  3
  > protected_branches           |  1
  > pull_request_reviews         |  1
  > milestones                   |  1
  > issues                       |  3
  > pull_requests                |  5
  > pull_request_review_comments |  4
  > commit_comments              |  2
  > issue_comments               | 10
  > issue_events                 | 63
  > releases                     |  3
  > attachments                  |  4
  > projects                     |  2
  ```
  既存の移行GUIDに対して新しいリポジトリを追加するたびに、既存のエクスポートが更新されます。 Migration GUIDなしで`ghe-migrator add`を再実行すると、新しいエクスポートが始まり、新しいMigration GUIDが生成されます。 **インポートから移行の準備を始める場合には、エクスポート中に生成されるMigration GUIDを再利用しないでください**。

3. ソースリポジトリをロックした場合、`ghe-migrator target_url`コマンドを使ってリポジトリの新しい場所へリンクするカスタムのロックメッセージをリポジトリのページに設定できます。 ソースリポジトリのURL、ターゲットリポジトリのURL、そしてステップ5の移行GUIDを渡してください。

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. 同じエクスポートにさらにリポジトリを追加するには、`ghe-migrator add` コマンドに `-g` フラグを付けて実行します。 これで新しいリポジトリの URL とステップ 5 の移行 GUID を渡します。
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. リポジトリを追加し終えたなら、`-g`フラグとステップ5の移行GUIDと共に`ghe-migrator export`を使い、移行アーカイブを生成してください。
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archive saved to: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. {% data variables.product.product_location %} への接続をクローズします。
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp)コマンドを使って移行アーカイブを使用中のコンピュータにコピーしてください。 アーカイブファイルの名前には移行GUIDが含まれます。
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
