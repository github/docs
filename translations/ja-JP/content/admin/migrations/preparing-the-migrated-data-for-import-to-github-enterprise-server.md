---
title: GitHub Enterprise Server にインポートする移行データを準備する
intro: 移行データをターゲットインスタンスに適用する前に、移行アーカイブをターゲットインスタンスにコピーし、インポートの準備をしなければなりません。
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
versions:
  enterprise-server: '*'
---

1. [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) コマンドを使って、ソースインスタンスまたは Organization から生成された移行アーカイブを {% data variables.product.prodname_ghe_server %} ターゲットにコピーします:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. `ghe-migrator prepare` コマンドを使ってターゲットインスタンスにインポートするためのアーカイブを準備し、次のステップで使用する新たな移行 GUID を生成します。

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * 新たにインポートを試みるには、再び `ghe-migrator prepare` を実行して、新しい Migration GUID を取得します。
    * {% data reusables.enterprise_migrations.specify-staging-path %}
