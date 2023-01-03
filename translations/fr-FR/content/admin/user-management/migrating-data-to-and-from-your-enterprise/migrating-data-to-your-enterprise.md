---
title: Migration de données vers votre entreprise
intro: 'Après avoir généré une archive de migration, vous pouvez importer les données dans votre instance cible {% data variables.product.prodname_ghe_server %}. Vous pouvez passer en revue les modifications pour les conflits potentiels avant d’appliquer définitivement les modifications à votre instance cible.'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
  - /admin/user-management/migrating-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Import to your enterprise
ms.openlocfilehash: 19bd9e1e8cee072e8a8f00861e2d8f876b5b8450
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717668'
---
## Application des données importées sur {% data variables.product.prodname_ghe_server %}

Avant de pouvoir migrer des données vers votre entreprise, vous devez préparer les données et résoudre les conflits éventuels. Pour plus d’informations, consultez « [Préparation de la migration de données vers votre entreprise](/admin/user-management/preparing-to-migrate-data-to-your-enterprise) ».

Après avoir préparé les données et résolu les conflits, vous pouvez appliquer les données importées sur {% data variables.product.product_name %}.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. À l’aide de la commande `ghe-migrator import`, démarrez le processus d’importation. Vous devez disposer des éléments suivants :
    * Votre GUID de migration. Pour plus d’informations, consultez « [Préparation de la migration de données vers votre entreprise](/admin/user-management/preparing-to-migrate-data-to-your-enterprise) ».
    * Votre jeton d’accès personnel pour l’authentification. Le jeton d’accès personnel que vous utilisez est uniquement destiné à l’authentification en tant qu’administrateur de site et ne nécessite aucune étendue spécifique. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Examen des données de migration

Par défaut, `ghe-migrator audit` retourne chaque enregistrement. Il vous permet également de filtrer les enregistrements par :

  * les types d’enregistrements ;
  * l’état des enregistrements.

Les types d’enregistrements correspondent à ceux trouvés dans les [données migrées](/enterprise/admin/guides/migrations/about-migrations/#migrated-data).

## Filtres de types d’enregistrement

|      Type d’enregistrement      | Nom du filtre  |
|-----------------------|--------|
| Utilisateurs           | `user`
| Organisations   | `organization`
| Référentiels    | `repository`
| Teams           | `team`
| Étapes majeures      | `milestone`
| Tableaux de projet  | `project`
| Problèmes          | `issue`
| Commentaires de problème  | `issue_comment`
| Demandes de tirage   | `pull_request`
| Revues de demande de tirage | `pull_request_review`
| Commentaires de commit | `commit_comment`
| Commentaires de revues de demande de tirage | `pull_request_review_comment`
| Versions | `release`
| Actions effectuées sur les demandes de tirage ou les problèmes | `issue_event`
| Branches protégées | `protected_branch`

## Filtres d’états d’enregistrement

| État d’enregistrement    | Description    |
|-----------------|----------------|
| `export`        | L’enregistrement sera exporté. |
| `import`        | L’enregistrement sera importé. |
| `map`           | L’enregistrement sera mappé. |
| `rename`        | L’enregistrement sera renommé. |
| `merge`         | L’enregistrement sera fusionné. |
| `exported`      | L’enregistrement a été exporté avec succès. |
| `imported`      | L’enregistrement a été importé avec succès. |
| `mapped`        | L’enregistrement a été mappé avec succès. |
| `renamed`       | L’enregistrement a été renommé avec succès. |
| `merged`        | L’enregistrement a été fusionné avec succès. |
| `failed_export` | L’enregistrement n’a pas pu être exporté. |
| `failed_import` | L’enregistrement n’a pas pu être importé. |
| `failed_map`    | L’enregistrement n’a pas pu être mappé. |
| `failed_rename` | L’enregistrement n’a pas pu être renommé. |
| `failed_merge`  | L’enregistrement n’a pas pu être fusionné. |

## Filtrage des enregistrements audités

Avec la commande `ghe-migrator audit`, vous pouvez filtrer en fonction du type d’enregistrement à l’aide de l’indicateur `-m`. De même, vous pouvez filtrer sur l’état d’importation à l’aide de l’indicateur `-s`. La commande se présente comme suit :

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

Par exemple, pour afficher toutes les organisations et équipes importées avec succès, vous pouvez entrer :
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**Nous vous recommandons vivement d’auditer chaque importation qui a échoué.** Pour ce faire, vous devez entrer :
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

Si vous avez des préoccupations concernant les importations ayant échoué, contactez {% data variables.contact.contact_ent_support %}.

## Fin de l’importation sur {% data variables.product.prodname_ghe_server %}

Une fois que votre migration a été appliquée à votre instance cible et que vous avez passé en revue la migration, vous pouvez déverrouiller les dépôts et les supprimer de la source. Avant de supprimer vos données sources, nous vous recommandons d’attendre environ deux semaines pour vous assurer que tout fonctionne comme prévu.

## Déverrouillage des dépôts sur l’instance cible

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}

## Déverrouillage des dépôts sur la source

### Déverrouillage des dépôts d’une organisation sur {% data variables.product.prodname_dotcom_the_website %}

Pour déverrouiller les dépôts d’une organisation {% data variables.product.prodname_dotcom_the_website %}, vous devez envoyer une demande `DELETE` au [point de terminaison de déverrouillage de migration](/free-pro-team@latest/rest/migrations#unlock-an-organization-repository). Vous devez disposer des éléments suivants :
  * Votre jeton d’accès pour l’authentification
  * L’`id` unique de la migration
  * Le nom du dépôt à déverrouiller
```shell
curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

### Suppression de dépôts d’une organisation sur {% data variables.product.prodname_dotcom_the_website %}

Après avoir déverrouillé les dépôts de l’organisation {% data variables.product.prodname_dotcom_the_website %}, vous devez supprimer chaque dépôt que vous avez précédemment migré à l’aide du [point de terminaison de suppression de dépôt](/rest/repos/#delete-a-repository). Vous avez besoin de votre jeton d’accès pour l’authentification :
```shell
curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

### Déverrouillage des dépôts à partir d’une instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}
