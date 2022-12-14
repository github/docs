---
title: Migration d’équipes d’administration vers des autorisations d’organisation améliorées
intro: "Si votre organisation a été créée après septembre\_2015, elle dispose par défaut d’autorisations d’organisation améliorées. Les organisations créées avant septembre\_2015 peuvent avoir besoin de migrer les anciens propriétaires et équipes d’administration vers le modèle d’autorisations améliorées. Les membres des équipes d’administration héritées conservent automatiquement la possibilité de créer des dépôts jusqu’à ce que ces équipes soient migrées vers le modèle d’autorisations d’organisation améliorées."
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Migrate admin team
ms.openlocfilehash: 32a3bd684d2ed81d1ba492b4e343af3e03390364
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109399'
---
Par défaut, tous les membres de l’organisation peuvent créer des référentiels. Si vous limitez [les autorisations de création de référentiels](/articles/restricting-repository-creation-in-your-organization) aux propriétaires d’organisation et que celle-ci a été créée sous la structure des autorisations d’organisation héritée, les membres des équipes d’administration héritées peuvent toujours créer des référentiels.

Les équipes d’administration héritées sont des équipes qui ont été créées avec le niveau d’autorisation d’administration sous la structure des autorisations de l’organisation héritée. Les membres de ces équipes pouvaient créer des référentiels pour l’organisation, et nous avons conservé cette possibilité dans la structure améliorée des autorisations de l’organisation.

Vous pouvez supprimer cette possibilité en migrant vos équipes d’administration héritées vers les autorisations d’organisation améliorées.

Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

{% warning %}

**Avertissement :** si votre organisation a désactivé [les autorisations de création de référentiels](/articles/restricting-repository-creation-in-your-organization) pour tous les membres, certains membres des équipes d’administration héritées peuvent ne plus disposer des autorisations de création de référentiels. Si votre organisation a activé la création de référentiels pour les membres, la migration d’équipes d’administration héritées vers des autorisations d’organisation améliorées n’affecte pas la capacité des membres de l’équipe à créer des référentiels.

{% endwarning %}

## Migration de toutes les équipes d’administration héritées de votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.teams_sidebar %}
1. Passez en revue les équipes d’administration héritées de votre organisation, puis cliquez sur **Migrer toutes les équipes**.
  ![Bouton Migrer toutes les équipes](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Lisez les informations sur les modifications d’autorisations possibles pour les membres de ces équipes, puis cliquez sur **Migrer toutes les équipes.** 
  ![Bouton Confirmer la migration](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

## Migration d’une seule équipe d’administration

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Dans la zone de description de l’équipe, cliquez sur **Migrer l’équipe**.
  ![Bouton Migrer l’équipe](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
