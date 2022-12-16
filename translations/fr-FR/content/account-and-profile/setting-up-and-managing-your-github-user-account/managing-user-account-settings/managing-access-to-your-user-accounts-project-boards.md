---
title: Gestion de l’accès aux tableaux de projet de votre compte d’utilisateur
intro: As a project board owner, you can add or remove a collaborator and customize their permissions to a project board.
redirect_from:
- /articles/managing-project-boards-in-your-repository-or-organization
- /articles/managing-access-to-your-user-account-s-project-boards
- /articles/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-user-accounts-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-access-to-your-user-accounts-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Manage access project boards
ms.openlocfilehash: 5a5cf08169fec04a896b05b7934c80cfe9f2eded
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086166"
---
Un collaborateur est une personne qui dispose des autorisations d’accès à un tableau de projet dont vous êtes propriétaire. Les autorisations d’un collaborateur sont par défaut l’accès en lecture. Pour plus d’informations, consultez « [Niveaux d’autorisation pour les tableaux de projet appartenant à un utilisateur](/articles/permission-levels-for-user-owned-project-boards) ».

## <a name="inviting-collaborators-to-a-user-owned-project-board"></a>Invitation de collaborateurs à un tableau de projet appartenant à un utilisateur

1. Accédez au tableau de projet dans lequel vous souhaitez ajouter un collaborateur.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %}
5. Sous « Rechercher par nom d’utilisateur, nom complet ou adresse e-mail », tapez le nom, le nom d’utilisateur ou l’adresse e-mail {% data variables.product.prodname_dotcom %} du collaborateur.
   ![Section Collaborateurs avec le nom d’utilisateur d’Octocat entré dans le champ de recherche](/assets/images/help/projects/org-project-collaborators-find-name.png) {% data reusables.project-management.add-collaborator %}
7. Par défaut, le nouveau collaborateur dispose d’autorisations de lecture. Si vous le souhaitez, en regard du nom du nouveau collaborateur, utilisez le menu déroulant et choisissez un autre niveau d’autorisation.
  ![Section Collaborateurs avec le menu déroulant Permissions sélectionné](/assets/images/help/projects/user-project-collaborators-edit-permissions.png)

## <a name="removing-a-collaborator-from-a-user-owned-project-board"></a>Suppression d’un collaborateur d’un tableau de projet appartenant à un utilisateur

{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %} {% data reusables.project-management.collaborator-option %} {% data reusables.project-management.remove-collaborator %}
