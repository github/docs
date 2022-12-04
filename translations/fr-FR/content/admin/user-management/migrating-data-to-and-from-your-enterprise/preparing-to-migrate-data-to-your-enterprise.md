---
title: Préparation de la migration de données vers votre entreprise
intro: 'Après avoir généré une archive de migration, vous pouvez importer les données dans votre instance {% data variables.product.prodname_ghe_server %} cible. Vous pouvez passer en revue les modifications à la recherche de conflits potentiels avant d’appliquer définitivement les modifications à votre instance cible.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Prepare to migrate data
ms.openlocfilehash: 7b552f2bc0d79eb1a70a09d61b8384983b0908fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104693'
---
## Préparation des données migrées pour l’importation vers {% data variables.product.prodname_ghe_server %}

1. À l’aide de la commande [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp), copiez l’archive de migration générée à partir de votre organisation ou instance source vers votre cible {% data variables.product.prodname_ghe_server %} :

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Utilisez la commande `ghe-migrator prepare` pour préparer l’archive à l’importation sur l’instance cible et générer un nouveau GUID de migration à utiliser dans les étapes suivantes :

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Pour démarrer une nouvelle tentative d’importation, réexécutez `ghe-migrator prepare` et récupérez un nouveau GUID de migration.
    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Génération d’une liste des conflits de migration

1. À l’aide de la commande `ghe-migrator conflicts` avec le GUID de migration, générez un fichier *conflicts.csv* :
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Si aucun conflit n’est signalé, vous pouvez importer les données en suivant les étapes décrites dans « [Migration de données vers votre entreprise](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/) ».
2. En présence de conflits, à l’aide de la commande [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp), copiez *conflicts.csv* sur votre ordinateur local :
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Passez à la section « [Résolution des conflits de migration ou configuration de mappages personnalisés](#resolving-migration-conflicts-or-setting-up-custom-mappings) ».

## Examen des conflits de migration

1. À l’aide d’un éditeur de texte ou d’un [tableur compatible CSV](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), ouvrez *conflicts.csv*.
2. En vous appuyant sur les exemples et tableaux de référence ci-dessous, consultez le fichier *conflicts.csv* pour vous assurer que les actions appropriées seront effectuées à l’importation.

Le fichier *conflicts.csv* inclut un *mappage de migration* avec les conflits et actions recommandées. Un mappage de migration liste les données migrées à partir de la source et la façon dont les données seront appliquées à la cible.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map` |
| `organization` | `https://example-gh.source/octo-org` | `https://example-gh.target/octo-org` | `map` |
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/widgets` | `rename` |
| `team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `merge` |

Chaque ligne du fichier *conflicts.csv* fournit les informations suivantes :

|    Nom      | Description   |
|--------------|---------------|
| `model_name` | Le type de données modifiées |
| `source_url` | L’URL source des données |
| `target_url` | L’URL cible attendue des données  |
| `recommended_action` | L’action que la commande `ghe-migrator` effectuera par défaut à l’importation des données  |

### Mappages possibles pour chaque type d’enregistrement

La commande `ghe-migrator` peut effectuer différentes actions de mappage dans le cadre du transfert de données :

| `action`      | Description | Modèles applicables |
|------------------------|-------------|-------------------|
| `import`      | (par défaut) Les données de la source sont importées dans la cible. | Tous les types d’enregistrement
| `map`         | Les données de la source sont remplacées par des données existantes sur la cible. | Utilisateurs, organisations, dépôts
| `rename`      | Les données de la source sont renommées, puis copiées sur la cible. | Utilisateurs, organisations, dépôts
| `map_or_rename` | Si la cible existe, le mappage est effectué avec cette cible. Sinon, le modèle importé est renommé. | Utilisateurs
| `merge`       | Les données de la source sont combinées avec les données existantes sur la cible. | Teams

**Nous vous recommandons vivement de consulter le fichier *conflicts.csv* et d’utiliser [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) pour vous assurer que les actions appropriées seront effectuées.** Si tout semble correct, vous pouvez passer à l’article « [Migration de données vers votre entreprise](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server) ».


## Résolution des conflits de migration ou configuration de mappages personnalisés

Si vous pensez que la commande `ghe-migrator` effectuera une modification incorrecte, vous pouvez apporter des corrections en modifiant les données dans *conflicts.csv*. Vous pouvez apporter des modifications à n’importe quelle ligne de *conflicts.csv*.

Par exemple, supposons que l’utilisateur `octocat` de la source soit mappé à `octocat` sur la cible :

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`

Vous pouvez choisir de mapper l’utilisateur à un autre utilisateur sur la cible. Supposons que vous savez que `octocat` devrait être `monalisa` sur la cible. Vous pouvez modifier la colonne `target_url` de *conflicts.csv* pour faire référence à `monalisa` :

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`

Autre exemple : si vous souhaitez renommer le dépôt `octo-org/widgets` en lui attribuant le nom `octo-org/amazing-widgets` sur l’instance cible, indiquez `octo-org/amazing-widgets` sous `target_url` et `rename` sous `recommend_action` :

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`   |

### Ajout de mappages personnalisés

Un scénario courant durant une migration consiste à changer les noms des utilisateurs migrés entre la source et la cible.

Avec une liste des noms d’utilisateur de la source et une liste de noms d’utilisateur sur la cible, vous pouvez créer un fichier CSV avec des mappages personnalisés, puis l’appliquer pour vous assurer que le nom et le contenu de chaque utilisateur lui sont correctement attribués à la fin d’une migration.

Vous pouvez rapidement générer un fichier des utilisateurs migrés au format CSV nécessaire pour appliquer des mappages personnalisés à l’aide de la commande [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) :

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

À présent, vous pouvez modifier ce fichier CSV et entrer la nouvelle URL pour chaque utilisateur à mapper ou renommer, puis mettre à jour la quatrième colonne pour qu’elle ait l’état approprié, `map` ou `rename`.

Par exemple, pour renommer l’utilisateur `octocat` avec le nom `monalisa` sur la cible `https://example-gh.target`, vous devez créer une ligne avec le contenu suivant :

| `model_name`   | `source_url`   | `target_url` | `state` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename`

Vous pouvez utiliser le même processus pour créer des mappages pour chaque enregistrement qui prend en charge les mappages personnalisés. Pour plus d’informations, consultez [notre tableau des mappages possibles pour les enregistrements](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type).

### Application des données de migration modifiées

1. Après avoir apporté des modifications, utilisez la commande [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp) pour appliquer votre fichier *conflicts.csv* modifié (ou tout autre fichier *.csv* de mappage au format correct) à l’instance cible :

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Remappez les données de migration à l’aide de la commande `ghe-migrator map` en passant le chemin de votre fichier *.csv* modifié et le GUID de migration :

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Si la commande `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` signale que des conflits sont toujours présents, reprenez le processus de résolution des conflits de migration.
