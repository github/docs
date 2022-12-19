---
title: Niveaux d’autorisation pour les tableaux de projet appartenant à un utilisateur
intro: 'A project board owned by a personal account has two permission levels: the project board owner and collaborators.'
redirect_from:
- /articles/permission-levels-for-user-owned-project-boards
- /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Permission user project boards
ms.openlocfilehash: 535ef830e9ee0d8d5a3bb81ea208711cf4060943
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086149"
---
## <a name="permissions-overview"></a>Vue d’ensemble des autorisations

Il n’y a qu’un seul propriétaire d’un tableau de projet appartenant à l’utilisateur ; cette autorisation ne peut pas être partagée avec un autre compte personnel. En plus du propriétaire, d’autres personnes peuvent collaborer sur des tableaux de projet.

Il existe trois niveaux d’autorisations pour les collaborateurs à un tableau de projet :

{% data reusables.project-management.project-board-permissions %}

## <a name="owner-and-admin-permissions-for-a-user-owned-project-board"></a>Autorisations de propriétaire et d’administrateur pour un tableau de projet appartenant à un utilisateur

Le propriétaire du tableau de projet et les collaborateurs disposant d’un accès administrateur ont un contrôle total sur le tableau de projet. Outre toutes les autorisations accordées aux collaborateurs du tableau de projet, un propriétaire de tableau de projet et un collaborateur disposant d’un accès administrateur peuvent :

- [Gérer, afficher et ajouter des collaborateurs](/articles/managing-access-to-your-user-account-s-project-boards)
- [Configurer un tableau de projet comme étant {% ifversion ghae %}interne{% else %}public{% endif %} ou privé](/articles/changing-project-board-visibility)
- [Supprimer un tableau de projet](/articles/deleting-a-project-board/)
- [Fermer un tableau de projet](/articles/closing-a-project-board/)
- [Rouvrir un tableau de projet fermé](/articles/reopening-a-closed-project-board)

## <a name="read-and-write-permissions-for-a-user-owned-project-board"></a>Autorisations de lecture et d’écriture pour un tableau de projet appartenant à un utilisateur

Les collaborateurs disposant d’un accès en lecture à un tableau de projet appartenant à un utilisateur peuvent :

- Afficher un tableau de projet.
- Copier un tableau de projet.
- Filtrer les cartes sur un tableau de projet.

Les collaborateurs disposant d’un accès en écriture à un tableau de projet appartenant à un utilisateur peuvent :

- Afficher un tableau de projet.
- Copier un tableau de projet.
- Filtrer les cartes sur un tableau de projet.
- Modifier un tableau de projet.
- Lier un dépôt à un tableau de projet.
- Configurer l’automatisation pour les tableaux de projet.
- Copier un tableau de projet.
- Ajouter des problèmes et des demandes d’extraction à un tableau de projet.
- Ajouter des notes à un tableau de projet.
- Suivre la progression sur votre tableau de projet.
- Archiver des cartes sur un tableau de projet.

## <a name="project-board-visibility"></a>Visibilité du tableau de projet

Vous pouvez modifier la visibilité du tableau de projet de privé en {% ifversion ghae %}interne{% else %}public{% endif %} et inversement. Par défaut, les tableaux de projet appartenant à un utilisateur sont privés. Pour plus d’informations, consultez « [Modification de la visibilité d’un tableau de projet](/articles/changing-project-board-visibility) ».

## <a name="further-reading"></a>Pour aller plus loin

  - « [Gestion de l’accès aux tableaux de projet de votre compte personnel](/articles/managing-access-to-your-user-account-s-project-boards) »
