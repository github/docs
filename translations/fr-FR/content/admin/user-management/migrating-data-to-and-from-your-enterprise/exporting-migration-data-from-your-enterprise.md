---
title: Exportation de données de migration à partir de votre entreprise
intro: 'Pour changer de plateforme ou passer d’une instance d’essai à une instance de production, vous pouvez exporter les données de migration d’une instance {% data variables.product.prodname_ghe_server %} en préparant l’instance, en verrouillant les dépôts et en générant une archive de migration.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104697'
---
## Préparation de l’instance source de {% data variables.product.prodname_ghe_server %}

1. Vérifiez que vous êtes administrateur de site de l’instance source de {% data variables.product.prodname_ghe_server %}. Pour cela, la meilleure méthode consiste à vérifier que vous pouvez [accéder à SSH sur l’instance](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

2. {% data reusables.enterprise_migrations.token-generation %} sur l’instance source de {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Exportation des dépôts sources de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Pour préparer un dépôt à exporter, utilisez la commande `ghe-migrator add` avec l’URL du dépôt :
    * Si vous verrouillez le dépôt, ajoutez `--lock` à la commande. Si vous effectuez un essai, `--lock` n’est pas nécessaire.
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * Vous pouvez exclure les fichiers joints en ajoutant `--exclude_attachments` à la commande. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * Pour préparer plusieurs dépôts à la fois pour l’exportation, créez un fichier texte listant chaque URL de dépôt sur une ligne distincte, puis exécutez la commande `ghe-migrator add` avec l’indicateur `-i` et le chemin de votre fichier texte.
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. Quand vous y êtes invité, entrez votre nom d’utilisateur {% data variables.product.prodname_ghe_server %} :
  ```shell
  Enter username authorized for migration:  admin
  ```
4. Quand vous êtes invité à entrer un jeton d’accès personnel, entrez le jeton d’accès que vous avez créé à l’étape « [Préparation de l’instance source de {% data variables.product.prodname_ghe_server %}](#preparing-the-github-enterprise-server-source-instance) » :
  ```shell
  Enter personal access token:  **************
  ```
5. À la fin de l’exécution de la commande `ghe-migrator add`, elle affiche le « GUID de migration » unique qu’elle a généré pour identifier cette exportation ainsi qu’une liste des ressources qui ont été ajoutées à l’exportation. Vous utiliserez le GUID de migration qu’elle a généré dans les étapes `ghe-migrator add` et `ghe-migrator export` suivantes pour indiquer à la commande `ghe-migrator` de continuer à fonctionner sur la même exportation.
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
  Chaque fois que vous ajoutez un nouveau dépôt avec un GUID de migration existant, l’exportation existante est mise à jour. Si vous réexécutez la commande `ghe-migrator add` sans GUID de migration, elle démarre une nouvelle exportation et génère un nouveau GUID de migration. **Ne réutilisez pas le GUID de migration généré pendant une exportation quand vous commencez à préparer votre migration pour l’importation**.

3. Si vous avez verrouillé le dépôt source, vous pouvez utiliser la commande `ghe-migrator target_url` pour définir un message de verrouillage personnalisé sur la page du dépôt, dirigeant vers le nouvel emplacement du dépôt. Passez l’URL du dépôt source, l’URL du dépôt cible et le GUID de migration obtenu à l’étape 5 :

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. Pour ajouter d’autres dépôts à la même exportation, utilisez la commande `ghe-migrator add` avec l’indicateur `-g`. Vous passerez la nouvelle URL du dépôt et le GUID de migration obtenu à l’étape 5 :
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. Quand vous avez terminé d’ajouter des dépôts, générez l’archive de migration à l’aide de la commande `ghe-migrator export` avec l’indicateur `-g` et le GUID de migration obtenu à l’étape 5 :
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archive saved to: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. Mettez fin à la connexion à {% data variables.product.product_location %} :
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. Copiez l’archive de migration sur votre ordinateur avec la commande [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp). Le fichier d’archive est nommé avec le GUID de migration :
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
