---
title: Exportation de données de migration à partir de GitHub.com
intro: 'Vous pouvez exporter des données de migration à partir d’une organisation sur {% data variables.product.prodname_dotcom_the_website %} à l’aide de l’API pour sélectionner des référentiels à migrer, puis générer une archive de migration que vous pouvez importer dans une instance {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
  - /admin/user-management/exporting-migration-data-from-githubcom
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export data from GitHub.com
ms.openlocfilehash: 07c74c41312fe5818390bba206072bf95e5bc00c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717868'
---
## Préparation de l’organisation source sur {% data variables.product.prodname_dotcom %}

1. Vérifiez que vous disposez d’[autorisations de propriétaire](/articles/permission-levels-for-an-organization/) sur les dépôts de l’organisation source.

2. {% data reusables.enterprise_migrations.token-generation %} sur {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Exportation des dépôts de l’organisation

{% data reusables.enterprise_migrations.fork-persistence %}

Pour exporter des données de dépôt à partir de {% data variables.product.prodname_dotcom_the_website %}, utilisez [l’API Migrations](/free-pro-team@latest/rest/migrations).

L’API Migrations est actuellement en préversion, ce qui signifie que les points de terminaison et les paramètres peuvent changer.
## Génération d’une archive de migration

{% data reusables.enterprise_migrations.locking-repositories %}

1. Informez les membres de votre organisation que vous allez effectuer une migration. L’exportation peut prendre plusieurs minutes, selon le nombre de dépôts exportés. La migration complète, importation incluse, peut prendre plusieurs heures. Nous vous recommandons donc d’effectuer un essai pour déterminer la durée du processus complet. Pour plus d’informations, consultez « [À propos des migrations](/enterprise/admin/migrations/about-migrations#types-of-migrations) ».

2. Démarrez une migration en envoyant une requête `POST` au [point de terminaison de la migration](/free-pro-team@latest/rest/migrations#start-an-organization-migration). Vous devez disposer des éléments suivants :
    * Votre jeton d’accès pour l’authentification.
    * Une [liste des dépôts](/free-pro-team@latest/rest/repos#list-organization-repositories) que vous souhaitez migrer :
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  Si vous souhaitez verrouiller les dépôts avant de les migrer, vérifiez que `lock_repositories` est défini sur `true`. Cette vérification est fortement recommandée.
    * Vous pouvez exclure les fichiers joints en passant `exclude_attachments: true` au point de terminaison. {% data reusables.enterprise_migrations.exclude-file-attachments %} La taille finale de l’archive doit être inférieure à 20 Go.

  Cette requête retourne un `id` unique qui représente votre migration. Vous en aurez besoin pour les appels suivants à l’API Migrations.

3. Envoyez une requête `GET` au [point de terminaison d’état de migration](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status) pour récupérer l’état d’une migration. Vous devez disposer des éléments suivants :
    * Votre jeton d’accès pour l’authentification.
    * L’`id` unique de la migration :
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  Une migration peut avoir l’un des états suivants :
    * `pending` : la migration n’a pas encore démarré.
    * `exporting` : la migration est en cours.
    * `exported` : la migration s’est terminée correctement.
    * `failed` : la migration a échoué.

4. Après l’exportation de votre migration, téléchargez l’archive de migration en envoyant une requête `GET` au [point de terminaison de téléchargement de la migration](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive). Vous devez disposer des éléments suivants :
    * Votre jeton d’accès pour l’authentification.
    * L’`id` unique de la migration :
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. L’archive de migration est automatiquement supprimée au bout de sept jours. Si vous préférez la supprimer plus tôt, vous pouvez envoyer une requête `DELETE` au [point de terminaison de suppression de l’archive de migration](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive). Vous devez disposer des éléments suivants :
    * Votre jeton d’accès pour l’authentification.
    * L’`id` unique de la migration :
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
