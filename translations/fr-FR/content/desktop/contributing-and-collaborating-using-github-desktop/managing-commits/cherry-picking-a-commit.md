---
title: Cherry-picking d’un commit
intro: Vous pouvez sélectionner un commit spécifique dans une branche et le copier dans une autre branche.
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
ms.openlocfilehash: 6dad1615b9a8c224c3648be60759b5bb6ccf0d62
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086488'
---
## À propos du cherry-pick Git

Vous pouvez effectuer un cherry-pick d’un commit sur une branche pour créer une copie du commit avec les mêmes changements dans une autre branche. Si vous commitez les changements dans la mauvaise branche ou si vous souhaitez apporter les mêmes changements à une autre branche, vous pouvez effectuer un cherry-pick du commit pour appliquer les changements à une autre branche. Vous pouvez également effectuer un cherry-picking pour appliquer des changements spécifiques avant de pouvoir créer ou fusionner une demande de tirage (pull request). Par exemple, si vous commitez une résolution de bogue dans une branche de fonctionnalité, vous pouvez effectuer un cherry-pick du commit avec la résolution de bogue dans d’autres branches de votre projet.

Vous pouvez également utiliser le cherry-picking quand vous collaborez avec une équipe. Certains projets incorporent des contributions via des commits par cherry-picking. Pour plus d’informations, consultez [Git distribué - Maintenance d’un projet](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick) dans la documentation de Git.

## Cherry-picking d’un commit

{% data reusables.desktop.current-branch-menu %}
2. Dans la liste des branches, cliquez sur celle qui contient les commits pour lesquels vous souhaitez effectuer un cherry-pick.
{% data reusables.desktop.history-tab %}
4. Faites glisser le commit devant faire l’objet d’un cherry-pick vers le menu {% octicon "git-branch" aria-label="The branch icon" %} **Branche actuelle**, puis déposez ce commit sur la branche où vous souhaitez le copier.
  ![Glissement d’un commit vers une autre branche dans le menu Branche actuelle](/assets/images/help/desktop/cherry-picking.png)

## Pour aller plus loin
- [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick) dans la documentation de Git
