---
title: Importierte Daten auf GitHub Enterprise Server anwenden
intro: Nach Abschluss der Überprüfung der Migrationsdaten können Sie die Änderungen dauerhaft auf Ihre Zielinstanz anwenden.
redirect_from:
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Führen Sie den Befehl `ghe-migrator import` aus, um den Importprozess zu starten. Sie benötigen Folgendes:
    * Ihren Migrations-GUID.
    * Dein persönliches Zugangs-Token für die Authentifizierung. Das persönliche Zugriffstoken, das Du verwendest, dient nur der Authentifizierung als Website-Administrator und erfordert keinen bestimmten „Scope“ (Geltungsbereich). For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}
