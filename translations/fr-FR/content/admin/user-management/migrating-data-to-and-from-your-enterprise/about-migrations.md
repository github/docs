---
title: À propos des migrations
intro: 'Le processus de migration consiste à transférer des données d’un emplacement *source* (organisation {% data variables.product.prodname_dotcom_the_website %} ou instance {% data variables.product.prodname_ghe_server %}) vers une instance {% data variables.product.prodname_ghe_server %} *cible*. Les migrations peuvent vous servir à transférer vos données au moment de changer de plateforme ou de mettre à niveau le matériel de votre instance.'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
  - /admin/user-management/about-migrations
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Migration
ms.openlocfilehash: accb9c62655f8825077a00e05a93182b36cd6e8d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147541182'
---
## Types de migrations

Vous pouvez effectuer trois types de migrations :

- Une migration d’une instance de {% data variables.product.prodname_ghe_server %} vers une autre instance de {% data variables.product.prodname_ghe_server %}. Vous pouvez migrer n’importe quel nombre de dépôts appartenant à un utilisateur ou une organisation sur l’instance. Avant d’effectuer une migration, vous devez disposer d’un accès administrateur de site aux deux instances.
- Une migration d’une organisation {% data variables.product.prodname_dotcom_the_website %} vers une instance de {% data variables.product.prodname_ghe_server %}. Vous pouvez migrer n’importe quel nombre de dépôts appartenant à l’organisation. Avant d’effectuer une migration, vous devez disposer d’un [accès administratif](/enterprise/user/articles/permission-levels-for-an-organization/) à l’organisation {% data variables.product.prodname_dotcom_the_website %} et d’un accès administrateur de site à l’instance cible.
- Les *essais* sont des migrations qui importent des données dans une [instance de préproduction](/enterprise/admin/guides/installation/setting-up-a-staging-instance/). Ils vous permettent de voir ce qui se *passerait* si une migration était appliquée à {% data variables.product.product_location %}. **Nous vous recommandons vivement d’effectuer un essai sur une instance intermédiaire avant d’importer des données dans votre instance de préproduction.**

## Données migrées

Dans le cadre d’une migration, tout tourne autour d’un dépôt. La plupart des données associées à un dépôt peuvent être migrées. Par exemple, un dépôt dans une organisation migre le dépôt *et* l’organisation ainsi que tous les utilisateurs, équipes, problèmes et demandes de tirage (pull request) associés au dépôt.

Les éléments du tableau ci-dessous peuvent être migrés avec un dépôt. Les éléments qui ne figurent pas dans la liste des données migrées ne peuvent pas être migrés, notamment les ressources {% data variables.large_files.product_name_short %}.

{% data reusables.enterprise_migrations.fork-persistence %}

|  Données associées à un dépôt migré | Notes  |
|---------------------------------------------|--------|
| Utilisateurs | Les **@mentions** d’utilisateurs sont réécrites pour correspondre à la cible.
| Organisations | Le nom et les détails d’une organisation sont migrés.
| Référentiels | Les liens vers les arborescences, blobs, commits et lignes Git sont réécrits pour correspondre à la cible. L’outil de migration suit un maximum de trois redirections de dépôt. Les référentiels internes sont migrés en tant que dépôts privés. L’état de l’archive n’est pas défini.
| Wikis | Toutes les données wiki sont migrées.
| Teams | Les **@mentions** d’équipes sont réécrites pour correspondre à la cible.
| Étapes majeures | Les horodatages sont conservés.
| Tableaux de projet | Les tableaux de projet associés au dépôt et à l’organisation qui possède le dépôt sont migrés.
| Problèmes | Les références de problème et les horodatages sont conservés.
| Commentaires de problème | Les références croisées aux commentaires sont réécrites pour l’instance cible.
| Demandes de tirage | Les références croisées aux demandes de tirage sont réécrites pour correspondre à la cible. Les horodatages sont conservés.
| Revues de demande de tirage | Les revues de demande de tirage et les données associées sont migrées.
| Commentaires de revues de demande de tirage | Les références croisées aux commentaires sont réécrites pour l’instance cible. Les horodatages sont conservés.
| Commentaires de commit | Les références croisées aux commentaires sont réécrites pour l’instance cible. Les horodatages sont conservés.
| Versions | Toutes les données de versions sont migrées.
| Actions effectuées sur les demandes de tirage ou les problèmes | Toutes les modifications apportées aux demandes de tirage ou aux problèmes, notamment l’attribution d’utilisateurs, le renommage des titres et la modification d’étiquettes, sont conservées ainsi que les horodatages pour chaque action.
|  Pièces jointes | [Les fichiers joints aux problèmes et demandes de tirage](/articles/file-attachments-on-issues-and-pull-requests) sont migrés. Vous pouvez désactiver la migration de ces éléments.
| Webhooks | Seuls les webhooks actifs sont migrés.
| Clés de déploiement de dépôt | Les clés de déploiement de dépôt sont migrées.
| Branches protégées | Les paramètres de branche protégée et les données associées sont migrés.
