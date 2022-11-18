---
title: Gestion de l’accès aux tableaux de projet de votre compte personnel
intro: 'En tant que propriétaire de la carte de projet, vous pouvez ajouter ou supprimer un collaborateur et personnaliser ses autorisations sur un tableau de projet.'
redirect_from:
  - /articles/managing-project-boards-in-your-repository-or-organization
  - /articles/managing-access-to-your-user-account-s-project-boards
  - /articles/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 4cbf968cee79ac8e4aafbc5eea8220949cf80a30
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145164937'
---
Un collaborateur est une personne qui dispose des autorisations d’accès à un tableau de projet dont vous êtes propriétaire. Les autorisations d’un collaborateur sont par défaut l’accès en lecture. Pour plus d’informations, consultez « [Niveaux d’autorisation pour les tableaux de projet appartenant à un utilisateur](/articles/permission-levels-for-user-owned-project-boards) ».

## Invitation de collaborateurs à un tableau de projet appartenant à un utilisateur

1. Accédez au tableau de projet dans lequel vous souhaitez ajouter un collaborateur.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. Sous « Rechercher par nom d’utilisateur, nom complet ou adresse e-mail », tapez le nom, le nom d’utilisateur ou l’adresse e-mail {% data variables.product.prodname_dotcom %} du collaborateur.
   ![Section Collaborateurs avec le nom d’utilisateur d’Octocat entré dans le champ de recherche](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. Par défaut, le nouveau collaborateur dispose d’autorisations de lecture. Si vous le souhaitez, en regard du nom du nouveau collaborateur, utilisez le menu déroulant et choisissez un autre niveau d’autorisation.
  ![Section Collaborateurs avec le menu déroulant Permissions sélectionné](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## Suppression d’un collaborateur d’un tableau de projet appartenant à un utilisateur

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
