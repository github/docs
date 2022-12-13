---
title: Exportieren von Migrationsdaten aus deinem Unternehmen
intro: 'Um Plattformen zu ändern oder von einer Testinstanz zu einer Produktionsinstanz zu wechseln, kannst du Migrationsdaten aus einer {% data variables.product.prodname_ghe_server %}-Instanz exportieren, indem du die Instanz vorbereitest, die Repositorys sperrst und ein Migrationsarchiv generierst.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104696'
---
## Vorbereiten der Quellinstanz von {% data variables.product.prodname_ghe_server %}

1. Verifiziere, dass du auf der {% data variables.product.prodname_ghe_server %}-Quelle ein Websiteadministrator bist. Dies ist die beste Möglichkeit zu überprüfen, ob [SSH-Zugriff auf die Instanz](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) möglich ist.

2. {% data reusables.enterprise_migrations.token-generation %} auf der {% data variables.product.prodname_ghe_server %}-Quellinstanz.

{% data reusables.enterprise_migrations.make-a-list %}

## Exportieren der {% data variables.product.prodname_ghe_server %}-Quellrepositorys

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Führe den Befehl `ghe-migrator add` mit der URL eines Repositorys aus, um das Repository auf den Export vorzubereiten:
    * Füge zum Sperren des Repositorys `--lock` an den Befehl an. Wenn du einen Testlauf durchführst, ist `--lock` nicht erforderlich.
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * Du kannst Dateianlagen ausschließen, indem du `--exclude_attachments` an den Befehl anfügst. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * Um mehrere Repositorys gleichzeitig für den Export vorzubereiten, erstellst du eine Textdatei, in der die URL jedes Repositorys auf einer separaten Zeile aufgelistet wird, und führst den Befehl `ghe-migrator add` mit dem Flag `-i` und dem Pfad zu deiner Textdatei aus.
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. Gib deinen {% data variables.product.prodname_ghe_server %}-Benutzernamen ein, wenn du dazu aufgefordert wirst:
  ```shell
  Enter username authorized for migration:  admin
  ```
4. Wenn du ein persönliches Zugriffstokens angeben sollst, gibt das Zugriffstoken ein, das du in [Vorbereiten der Quellinstanz von {% data variables.product.prodname_ghe_server %}](#preparing-the-github-enterprise-server-source-instance) erstellt hast:
  ```shell
  Enter personal access token:  **************
  ```
5. Nach Abschluss des Befehls `ghe-migrator add` werden di eindeutige zum Identifizieren dieses Exports generierte „Migrations-GUID“ und eine Liste der dem Export hinzugefügten Ressourcen ausgegeben. Du verwendest die generierte Migrations-GUID in den nachfolgenden Schritten `ghe-migrator add` und `ghe-migrator export`, um `ghe-migrator` anzuweisen, mit demselben Export fortzufahren.
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
  Sobald du ein neues Repository mit einem vorhandenen Migrations-GUID hinzufügst, wird der vorhandene Export aktualisiert. Wenn du `ghe-migrator add` erneut ausführst, ohne eine Migrations-GUID anzugeben, wird ein neuer Export gestartet, und es wird auch eine neue Migrations-GUID generiert. **Verwende nicht die während eines Exports generierte Migrations-GUID, wenn du deine Migration auf den Import vorbereitest.**

3. Falls du das Quellrepository gesperrt hast, kannst du den Befehl `ghe-migrator target_url` ausführen, um eine benutzerdefinierte Sperrmeldung auf der Repositoryseite festzulegen, die auf den neuen Speicherort des Repositorys verweist. Gib die URL des Quell-Repositorys, die URL des Ziel-Repositorys und den Migrations-GUID aus Schritt 5 weiter:

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. Um demselben Export weitere Repositorys hinzuzufügen, verwendest du den Befehl `ghe-migrator add` mit dem Flag `-g`. Du übergibst die URL des neuen Repositorys und den Migrations-GUID aus Schritt 5:
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. Generiere nach dem Hinzufügen der Repositorys mit dem Befehl `ghe-migrator export` und dem Flag `-g` sowie der Migrations-GUID aus Schritt 5 das Migrationsarchiv:
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archive saved to: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. Trenne die Verbindung mit {% data variables.product.product_location %}:
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. Kopiere das Migrationsarchiv mithilfe des Befehls [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) auf deinen Computer. Die Archivdatei wird mit dem Migrations-GUID benannt:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
