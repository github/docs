---
title: Suppression d’un collaborateur d’un dépôt personnel
intro: 'Quand vous supprimez un collaborateur de votre projet, il perd l’accès en lecture/écriture à votre dépôt. Si le dépôt est privé et si la personne a créé une duplication (fork), ce fork est également supprimé.'
redirect_from:
  - /articles/how-do-i-remove-a-collaborator
  - /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository
  - /articles/removing-a-collaborator-from-a-private-repository
  - /articles/deleting-a-private-fork-of-a-private-user-repository
  - /articles/how-do-i-delete-a-fork-of-my-private-repository
  - /articles/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/removing-a-collaborator-from-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Remove a collaborator
ms.openlocfilehash: 24b128b5858c695b0e559302fac05812d3218b8c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164883'
---
## Suppression de duplications (forks) de dépôts privés

Bien que les duplications de dépôts privés soient supprimées lorsqu’un collaborateur est supprimé, la personne conserve toujours tous les clones locaux de votre dépôt.

## Suppression des autorisations de collaborateur d’une personne contribuant à un dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %}
4. À droite du collaborateur que vous souhaitez supprimer, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
  ![Bouton permettant de supprimer le collaborateur](/assets/images/help/repository/collaborator-remove.png) {% else %}
3. Dans la barre latérale gauche, cliquez sur **Collaborateurs & équipes**.
  ![Onglet Collaborateurs](/assets/images/help/repository/repo-settings-collaborators.png)
4. En regard du collaborateur que vous souhaitez supprimer, cliquez sur l’icône **X**.
  ![Lien de suppression](/assets/images/help/organizations/Collaborator-Remove.png) {% endif %}

## Pour aller plus loin

- « [Suppression de membres d’organisation d’une équipe](/articles/removing-organization-members-from-a-team) »
- « [Suppression d’un collaborateur externe d’un dépôt d’organisation](/articles/removing-an-outside-collaborator-from-an-organization-repository) »
