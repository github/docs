---
title: Enterprise から移行データをエクスポートする
intro: 'プラットフォームの変更、およびトライアルインスタンスから本番インスタンスに移行するには、インスタンスを準備して、リポジトリをロックし、移行アーカイブを生成することで、{% data variables.product.prodname_ghe_server %} インスタンスから移行データをエクスポートできます。'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-enterprise
  - /enterprise/admin/migrations/exporting-migration-data-from-github-enterprise-server
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-your-enterprise
  - /admin/user-management/exporting-migration-data-from-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export from your enterprise
ms.openlocfilehash: 5bff2e21a493cc35448d68daf87aa87ed82a8a28
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116205'
---
## {% data variables.product.prodname_ghe_server %} ソースインスタンスを準備する

1. {% data variables.product.prodname_ghe_server %} ソースのサイト管理者であることを確認します。 これを行う最善の方法は、[インスタンスに SSH 接続](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)できることを確認することです。

2. {% data variables.product.prodname_ghe_server %} ソースインスタンス上での {% data reusables.enterprise_migrations.token-generation %}。

{% data reusables.enterprise_migrations.make-a-list %}

## {% data variables.product.prodname_ghe_server %} ソースリポジトリをエクスポートする

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. エクスポート用のリポジトリを準備するには、リポジトリの URL を指定して `ghe-migrator add` コマンドを使用します。
    * リポジトリをロックしている場合は、このコマンドに `--lock` を追加します。 テスト実行を行っている場合は、`--lock` は必要ありません。
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * 添付ファイルを除外するには、このコマンドに `--exclude_attachments` を追加します。 {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * エクスポート用に一度に複数のリポジトリを準備するには、各リポジトリ URL を 1 行ずつ記載したテキスト ファイルを作成し、`-i` フラグとそのテキスト ファイルのパスを指定して `ghe-migrator add` コマンドを実行します。
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. 入力を求められたら、{% data variables.product.prodname_ghe_server %} ユーザ名を入力します:
  ```shell
  Enter username authorized for migration:  admin
  ```
4. 個人用アクセス トークンの入力を求められたら、「[{% data variables.product.prodname_ghe_server %} ソース インスタンスの準備](#preparing-the-github-enterprise-server-source-instance)」で作成したアクセス トークンを入力します。
  ```shell
  Enter personal access token:  **************
  ```
5. `ghe-migrator add` が終了すると、このエクスポートを識別するために生成された一意の "移行 GUID" と、エクスポートに追加されたリソースのリストが出力されます。 後続の `ghe-migrator add` および `ghe-migrator export` の手順で生成された移行 GUID を使用して、`ghe-migrator` に同じエクスポートでの操作を続行するように指示します。
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
  既存の移行GUIDに対して新しいリポジトリを追加するたびに、既存のエクスポートが更新されます。 移行 GUID なしで `ghe-migrator add` を再度実行すると、新しいエクスポートが開始され、新しい移行 GUID が生成されます。 **インポート用の移行の準備を開始するときに、エクスポート中に生成された移行 GUID を再利用しないでください。**

3. ソース リポジトリをロックした場合、`ghe-migrator target_url` コマンドを使ってリポジトリの新しい場所へリンクするカスタムのロック メッセージをリポジトリのページに設定できます。 ソースリポジトリのURL、ターゲットリポジトリのURL、そしてステップ5の移行GUIDを渡してください。

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. 同じエクスポートにさらにリポジトリを追加するには、`-g` フラグを指定して `ghe-migrator add` コマンドを使用します。 これで新しいリポジトリの URL とステップ 5 の移行 GUID を渡します。
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. リポジトリの追加が完了したら、`-g` フラグと手順 5 の移行 GUID を指定した `ghe-migrator export` コマンドを使用して移行アーカイブを生成します。
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archive saved to: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. {% data variables.product.product_location %} への接続を閉じます。
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) コマンドを使用して、移行アーカイブをお使いのコンピューターにコピーします。 アーカイブファイルの名前には移行GUIDが含まれます。
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
