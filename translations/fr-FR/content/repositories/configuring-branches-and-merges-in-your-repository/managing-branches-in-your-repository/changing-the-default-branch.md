---
title: Changement de la branche par défaut
intro: 'Si vous avez plusieurs branches dans votre référentiel, vous pouvez configurer n’importe quelle branche comme branche par défaut.'
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Change the default branch
ms.openlocfilehash: e8f88499ab258e5855804288a4f811b38237df97
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132392'
---
## À propos du changement de la branche par défaut

Vous pouvez choisir la branche par défaut d’un dépôt. La branche par défaut est la branche de base pour les demandes de tirage (pull requests) et les commits de code. Pour plus d’informations sur la branche par défaut, consultez « [À propos des branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch) ».

{% ifversion not ghae %} {% note %}

**Remarque** : Si vous utilisez le pont Git-Subversion, le changement de la branche par défaut affectera le contenu de votre branche `trunk` et la branche `HEAD` que vous verrez lorsque vous listerez les références pour le dépôt distant. Pour plus d’informations, consultez « [Prise en charge des clients Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients) » et [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) dans la documentation Git.

{% endnote %} {% endif %}

Vous pouvez également renommer la branche par défaut. Pour plus d’informations, consultez « [Renommage d’une branche](/github/administering-a-repository/renaming-a-branch) ».

{% data reusables.branches.set-default-branch %}

## Prérequis

Pour changer la branche par défaut, il faut que votre dépôt ait plusieurs branches. Pour plus d’informations, consultez « [Création et suppression de branches dans votre dépôt](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch) ».

## Changement de la branche par défaut

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. Sous « Branche par défaut », à droite du nom de branche par défaut, cliquez sur {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}.
   ![Icône de basculement avec deux flèches à droite du nom de la branche par défaut actuelle](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Utilisez la liste déroulante, puis cliquez sur un nom de branche.
   ![Liste déroulante pour choisir une nouvelle branche par défaut](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Cliquez sur **Update**.
   ![Bouton « Mettre à jour » après avoir choisi une nouvelle branche par défaut](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Lisez l’avertissement, puis cliquez sur le bouton **Je comprends, mettre à jour la branche par défaut.** 
   ![ »Je comprends, mettre à jour la branche par défaut. » pour effectuer la mise à jour](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

