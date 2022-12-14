---
title: Gestion de l’accès d’une personne à un dépôt d’organisation
intro: Vous pouvez gérer l’accès d’une personne à un dépôt appartenant à votre organisation.
redirect_from:
- /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
- /articles/managing-an-individual-s-access-to-an-organization-repository
- /articles/managing-an-individuals-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
ms.openlocfilehash: 90a9df66f0cd4089634b2d29dd798b37629bbb7b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128502"
---
## À propos de l’accès aux dépôts d’organisation

Quand vous supprimez un collaborateur d’un dépôt dans votre organisation, le collaborateur perd l’accès en lecture et en écriture au dépôt. Si le dépôt est privé et que le collaborateur a dupliqué le dépôt, sa duplication est également supprimée, mais le collaborateur va néanmoins conserver les clones locaux de votre dépôt.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
## Gestion de l’accès d’une personne à un dépôt d’organisation
Vous pouvez accorder à une personne l’accès à un dépôt ou changer le niveau d’accès d’une personne à un dépôt dans les paramètres de votre dépôt. Pour plus d’informations, consultez « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) ».
{% else %}
## Donner à une personne l’accès à un dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-manage-access %} {% data reusables.organizations.invite-teams-or-people %}
1. Dans le champ de recherche, commencez à taper le nom de la personne à inviter, puis cliquez sur un nom dans la liste des correspondances.
  ![Champ de recherche pour taper le nom d’une équipe ou d’une personne à inviter au dépôt](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Sous « Choisir un rôle », sélectionnez le rôle de dépôt à attribuer à la personne, puis cliquez sur **Ajouter NOM à DÉPÔT**.
  ![Sélection des autorisations pour l’équipe ou la personne](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Gestion de l’accès d’une personne à un dépôt d’organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Cliquez sur **Membres** ou sur **collaborateurs externes** pour gérer les personnes avec différents types d’accès. ![Bouton pour inviter des membres ou des collaborateurs externes à une organisation](/assets/images/help/organizations/select-outside-collaborators.png)
5. À droite du nom d’utilisateur de la personne que vous voulez gérer, utilisez le menu déroulant {% octicon "gear" aria-label="The Settings gear" %}, puis cliquez sur **Gérer**.
  ![Lien de gestion de l’accès](/assets/images/help/organizations/member-manage-access.png)
6. Dans la page « Gérer l’accès », en regard du dépôt, cliquez sur **Gérer l’accès**.
![Bouton Gérer l’accès pour un dépôt](/assets/images/help/organizations/repository-manage-access.png)
7. Passez en revue l’accès de la personne à un dépôt donné, par exemple s’il s’agit d’un collaborateur ou d’un accès au dépôt via l’appartenance à une équipe.
![Matrice d’accès du dépôt pour l’utilisateur](/assets/images/help/organizations/repository-access-matrix-for-user.png) {% endif %}
## Pour aller plus loin

{% ifversion fpt or ghec %}- « [Limitation des interactions avec votre dépôt](/articles/limiting-interactions-with-your-repository) »{% endif %}
- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
