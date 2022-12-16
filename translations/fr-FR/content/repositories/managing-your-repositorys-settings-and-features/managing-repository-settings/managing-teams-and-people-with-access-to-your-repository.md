---
title: Gestion des équipes et des personnes ayant accès à votre dépôt
intro: Vous pouvez voir toute personne qui a accès à votre dépôt et ajuster les autorisations.
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Teams & people
ms.openlocfilehash: e378332dda56fad39b18fd10da4ee9bf799a9fe3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132116'
---
## À propos de la gestion des accès pour les référentiels

Pour chaque référentiel que vous gérez sur {% data variables.product.prodname_dotcom %}, vous pouvez voir une vue d’ensemble de chaque équipe ou personne ayant accès au référentiel. Dans la vue d’ensemble, vous pouvez également inviter de nouvelles équipes ou personnes, modifier le rôle de chaque équipe ou personne pour le référentiel ou supprimer l’accès au référentiel.

Cette vue d’ensemble peut vous aider à auditer l’accès à votre référentiel, à intégrer ou annuler l’intégration d’entrepreneurs ou d’employés, et à répondre efficacement aux incidents de sécurité.

{% data reusables.organizations.mixed-roles-warning %}

Pour plus d’informations sur les rôles de référentiel, consultez « [Niveaux d’autorisation pour un référentiel de comptes personnels](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository) » et « [Rôles de référentiel pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

![Vue d’ensemble de la gestion des accès](/assets/images/help/repository/manage-access-overview.png)

## Filtrage de la liste des équipes et des personnes

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
1. Sous « Gérer l’accès », dans le champ de recherche, commencez à taper le nom de l’équipe ou de la personne que vous souhaitez trouver. Si vous le souhaitez, utilisez les menus déroulants pour filtrer votre recherche. 
  ![Champ de recherche pour filtrer la liste des équipes ou des personnes avec accès](/assets/images/help/repository/manage-access-filter.png)

## Modification des autorisations pour une équipe ou une personne

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. Sous « Gérer l’accès », recherchez l’équipe ou la personne dont vous souhaitez modifier le rôle, puis sélectionnez la liste déroulante Rôle, et cliquez sur un nouveau rôle.
  ![Utilisation de la liste déroulante « Rôle » pour sélectionner de nouvelles autorisations pour une équipe ou une personne](/assets/images/help/repository/manage-access-role-drop-down.png)

## Inviter une équipe ou une personne

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %} {% data reusables.organizations.invite-teams-or-people %}
5. Dans le champ de recherche, commencez à taper le nom de l’équipe ou personne à inviter, puis cliquez sur un nom dans la liste des correspondances.
  ![Champ de recherche pour taper le nom d’une équipe ou d’une personne à inviter au dépôt](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Sous « Choisir un rôle », sélectionnez le rôle de dépôt à attribuer à l’équipe ou personne, puis cliquez sur **Ajouter NOM à DÉPÔT**.
  ![Sélection des autorisations pour l’équipe ou la personne](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Suppression de l’accès pour une équipe ou une personne

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. Sous « Gérer l’accès », recherchez l’équipe ou la personne dont vous souhaitez supprimer l’accès, puis cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
  ![Icône de corbeille pour supprimer l’accès](/assets/images/help/repository/manage-access-remove.png)

## Pour aller plus loin

- « [Définition de la visibilité du dépôt](/github/administering-a-repository/setting-repository-visibility) »
- "[Définition des autorisations de base pour une organisation](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
