---
title: Suppression et restauration de branches dans une demande de tirage
intro: 'Si vous disposez d’un accès en écriture dans un dépôt, vous pouvez supprimer des branches associées à des demandes de tirage (pull request) fermées ou fusionnées. Vous ne pouvez pas supprimer les branches associées à des demandes de tirage ouvertes.'
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
ms.openlocfilehash: 48007869ae43d39553e0f8948f90e89b7fb73af0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132368'
---
## Suppression d’une branche utilisée pour une demande de tirage

Vous pouvez supprimer une branche associée à une demande de tirage (pull request) si celle-ci a été fusionnée ou fermée et qu’il n’existe aucune autre demande de tirage ouverte référençant la branche. Pour plus d’informations sur la fermeture des branches qui ne sont associées à aucune demande de tirage, consultez « [Création et suppression de branches au sein de votre dépôt](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. Dans la liste des demandes de tirage, cliquez sur celle associée à la branche que vous souhaitez supprimer.
5. En bas de la demande de tirage, cliquez sur **Supprimer la branche**.
   ![Bouton de suppression de branche](/assets/images/help/pull_requests/delete_branch_button.png)

   Ce bouton n’est pas affiché s’il existe actuellement une demande de tirage ouverte pour cette branche.

## Restauration d’une branche supprimée

Vous pouvez restaurer la branche principale d’une demande de tirage fermée.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. Dans la liste des demandes de tirage, cliquez sur celle associée à la branche que vous souhaitez restaurer.
5. En bas de la demande de tirage, cliquez sur **Restaurer la branche**.
   ![Bouton de restauration de branche supprimée](/assets/images/help/branches/branches-restore-deleted.png)

## Pour aller plus loin

- « [Création et suppression de branches dans votre dépôt](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository) »
- « [Gestion de la suppression automatique des branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches) »
