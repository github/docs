---
title: Liste mit Migrationskonflikten generieren
intro: 'Wenn „ghe-migrator“ bei der Vorbereitung der Daten für den Import Konflikte meldet, müssen Sie eine Liste dieser Konflikte generieren, bevor Sie sich darauf vorbereiten, diese mit benutzerdefinierten Zuordnungen zu beheben.'
redirect_from:
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
versions:
  enterprise-server: '*'
---

1. Führen Sie den Befehl `ghe-migrator conflicts` mit dem Migrations-GUID aus, um die Datei *conflicts.csv* zu generieren:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Falls keine Konflikte gemeldet werden, können Sie die Daten ohne Weiteres importieren. Führen Sie dazu die unter „[Importierte Daten auf {% data variables.product.prodname_ghe_server %} anwenden](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)“ beschriebenen Schritte aus.
2. Kopieren Sie bei vorliegenden Konflikten mithilfe des Befehls [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) die Datei *conflicts.csv* auf Ihren lokalen Computer:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Wechseln Sie zu „[Migrationskonflikte beheben oder benutzerdefinierte Zuordnungen einrichten](/enterprise/admin/guides/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings/)“.
