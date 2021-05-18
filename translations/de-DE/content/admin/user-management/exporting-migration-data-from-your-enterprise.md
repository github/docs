---
title: Exporting migration data from your enterprise
intro: 'To change platforms or move from a trial instance to a production instance, you can export migration data from a {% data variables.product.prodname_ghe_server %} instance by preparing the instance, locking the repositories, and generating a migration archive.'
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
type: how_to
topics:
  - API
  - Enterprise
  - Migration
---

### Preparing the {% data variables.product.prodname_ghe_server %} source instance

1. Verifizieren Sie, dass Sie auf der {% data variables.product.prodname_ghe_server %}-Quelle ein Websiteadministrator sind. Dazu empfiehlt es sich zu verifizieren, dass Sie eine [SSH-Verbindung zur Instanz herstellen können](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

2. {% data reusables.enterprise_migrations.token-generation %} auf der {% data variables.product.prodname_ghe_server %}-Quellinstanz.

{% data reusables.enterprise_migrations.make-a-list %}

### Exporting the {% data variables.product.prodname_ghe_server %} source repositories

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Führen Sie den Befehl `ghe-migrator add` mit der URL des Repositorys aus, um ein Repository auf den Export vorzubereiten:
    * Hängen Sie beim Sperren des Repositorys dem Befehl `--lock` an. Wenn Sie einen Probelauf ausführen, ist `--lock` nicht erforderlich.
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * Dateianhänge können ausgeschlossen werden. Hängen Sie dazu dem Befehl `--exclude_attachments` an. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * Um mehrere Repositorys gleichzeitig für den Export vorzubereiten, erstellen Sie eine Textdatei, in der die URL jedes Repositorys in einer separaten Zeile aufgelistet wird, und führen Sie den Befehl `ghe-migrator add` mit dem Flag `-i` und dem Pfad zu Ihrer Textdatei aus.
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. Geben Sie Ihren {% data variables.product.prodname_ghe_server %}-Benutzernamen ein, wenn Sie dazu aufgefordert werden:
  ```shell
  Enter username authorized for migration:  admin
  ```
4. Geben Sie das unter „[{% data variables.product.prodname_ghe_server %}-Quellinstanz vorbereiten](#preparing-the-github-enterprise-server-source-instance)“ von Ihnen erstellte Zugriffstoken ein, wenn Sie zur Eingabe eines persönlichen Zugriffstokens aufgefordert werden:
  ```shell
  Enter personal access token:  **************
  ```
5. Nach Abschluss des Befehls `ghe-migrator add` werden der eindeutige zum Identifizieren dieses Exports generierte „Migrations-GUID“ und eine Liste der dem Export hinzugefügten Ressourcen ausgegeben. Diesen generierten Migrations-GUID verwenden Sie in den nachfolgenden Schritten `ghe-migrator add` und `ghe-migrator export`, um `ghe-migrator` anzuweisen, weiterhin am selben Export zu arbeiten.
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
  Sobald Sie ein neues Repository mit einem vorhandenen Migrations-GUID hinzufügen, wird der vorhandene Export aktualisiert. Wenn Sie `ghe-migrator add` erneut ausführen, ohne einen Migrations-GUID zu verwenden, wird ein neuer Export gestartet und ein neuer Migrations-GUID generiert. **Verwenden Sie nicht den während eines Exports generierten Migrations-GUID, wenn Sie Ihre Migration auf den Import vorbereiten**.

3. Falls Sie das Quell-Repository gesperrt haben, können Sie den Befehl `ghe-migrator target_url` ausführen, um eine benutzerdefinierte Sperrmeldung auf der Repository-Seite festzulegen, die auf den neuen Speicherort des Repositorys verweist. Geben Sie die URL des Quell-Repositorys, die URL des Ziel-Repositorys und den Migrations-GUID aus Schritt 5 weiter:

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. Führen Sie den Befehl `ghe-migrator add` mit dem Flag `-g` aus, um demselben Export weitere Repositorys hinzuzufügen. Sie übergeben die URL des neuen Repositorys und den Migrations-GUID aus Schritt 5:
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. Generieren Sie nach dem Hinzufügen der Repositorys mit dem Befehl `ghe-migrator export` und dem Flag `-g` sowie dem Migrations-GUID aus Schritt 5 das Migrationsarchiv:
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archive saved to: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. Schließen Sie die Verbindung zu {% data variables.product.product_location %}:
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. Führen Sie den Befehl [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) aus, um das Migrationsarchiv auf Ihren Computer zu kopieren. Die Archivdatei wird mit dem Migrations-GUID benannt:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
