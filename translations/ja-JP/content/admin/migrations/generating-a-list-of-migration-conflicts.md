---
title: 移行のコンフリクトのリストの生成
intro: '`ghe-migrator`がインポートのためのデータを準備しているときにコンフリクトを報告してきたなら、それらのコンフリクトのリストを生成してから、カスタムマッピングでそれらを解決する準備をしなければなりません。'
redirect_from:
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
versions:
  enterprise-server: '*'
---

1. `ghe-migrator conflicts` コマンドに移行 GUID を付けて実行し、*conflicts.csv* ファイルを生成します。
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - コンフリクトが報告されなければ、「[インポートされたデータの {% data variables.product.prodname_ghe_server %} への適用](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)」の手順に従って安全にデータをインポートできます。
2. コンフリクトがある場合は、[`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) コマンドを使って *conflicts.csv* をローカルコンピュータにコピーします。
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. 「[移行コンフリクトの解決もしくはカスタムマッピングのセットアップ](/enterprise/admin/guides/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings/)」に進みます。
