---
title: 'Gestion de l’accès d’une personne à un {% data variables.product.prodname_project_v1 %} de l’organisation'
intro: 'En tant que propriétaire d’organisation ou administrateur de {% data variables.projects.projects_v1_board %}, vous pouvez gérer l’accès d’un membre individuel à un {% data variables.projects.projects_v1_board %} appartenant à votre organisation.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: ceecfd317322f65541591f833c04f86d5b483c0e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108624'
---
{% data reusables.projects.project_boards_old %}

{% note %}

**Remarque :** {% data reusables.project-management.cascading-permissions %} Pour plus d’informations, consultez « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) ». 

{% endnote %}

## Donner à un membre de l’organisation l’accès à un {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
9. Sous « Rechercher par nom d’utilisateur, nom complet ou adresse e-mail », tapez le nom, le nom d’utilisateur ou l’adresse e-mail {% data variables.product.prodname_dotcom %} du collaborateur.
   ![La section Collaborateurs avec le nom d’utilisateur d’Octocat entré dans le champ de recherche](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %} {% data reusables.project-management.collaborator-permissions %}

## Changement de l’accès d’un membre de l’organisation à un {% data variables.projects.projects_v1_board %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.collaborator-permissions %}

## Suppression de l’accès d’un membre de l’organisation à un {% data variables.projects.projects_v1_board %}

Lorsque vous supprimez un collaborateur d’un {% data variables.projects.projects_v1_board %}, celui-ci conserve l’accès au panneau en fonction des autorisations dont il dispose pour d’autres rôles. Pour supprimer complètement l’accès à un {% data variables.projects.projects_v1_board %}, vous devez supprimer l’accès pour chaque rôle dont dispose la personne. Par exemple, une personne peut avoir accès au {% data variables.projects.projects_v1_board %} en tant que membre de l’organisation ou membre de l’équipe. Pour plus d’informations, consultez « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) ».

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Cliquez sur **Projets (classiques)** {% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}

## Pour aller plus loin

- « [Autorisations des {% data variables.product.prodname_project_v1_caps %} d’une organisation](/articles/project-board-permissions-for-an-organization) »
