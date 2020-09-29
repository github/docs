---
title: インポートされたデータの GitHub Enterprise Server への適用
intro: 移行データのレビューを完了したら、ターゲットインスタンスへの変更を恒久的に適用できます。
redirect_from:
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. `ghe-migrator import`コマンドを使ってインポートのプロセスを開始してください。 以下が必要です:
    * 移行 GUID.
    * Your personal access token for authentication. The personal access token that you use is only for authentication as a site administrator, and does not require any specific scope. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}
