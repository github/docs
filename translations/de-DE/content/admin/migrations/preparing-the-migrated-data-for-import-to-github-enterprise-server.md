---
title: Migrationsdaten auf den Import zu GitHub Enterprise Server vorbereiten
intro: 'Bevor Sie die Migrationsdaten auf Ihre Zielinstanz anwenden, müssen Sie das Migrationsarchiv auf Ihre Zielinstanz kopieren und es auf den Import vorbereiten.'
redirect_from:
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
versions:
  enterprise-server: '*'
---

1. Kopieren Sie mit dem Befehl [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) das auf Ihrer Quellinstanz oder in Ihrer Organisation generierte Migrationsarchiv auf Ihr {% data variables.product.prodname_ghe_server %}-Ziel:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Führen Sie den Befehl `ghe-migrator prepare` aus, um das Archiv auf den Import auf der Zielinstanz vorzubereiten und einen neuen Migrations-GUID zu generieren, den Sie in den nachfolgenden Schritten verwenden:

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Führen Sie zum Starten eines neuen Importversuchs den Befehl `ghe-migrator prepare` erneut aus, und rufen Sie einen neuen Migrations-GUID ab.
    * {% data reusables.enterprise_migrations.specify-staging-path %}
