---
title: Résolution des conflits de fusion après un rebasage Git
intro: 'Lorsque vous effectuez une opération `git rebase`, vous déplacez généralement des commits. C’est pourquoi vous risquez de faire face à une situation où un conflit de fusion est introduit. Cela signifie que deux de vos commits ont modifié la même ligne dans le même fichier, et Git ne sait pas quelle modification appliquer.'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve conflicts after rebase
ms.openlocfilehash: 8798282fb804f7b2389d98f69ba2b0e855a2289a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104581'
---
Une fois que vous avez réorganisé et manipulé des commits avec `git rebase`, en cas de conflit de fusion, Git vous le signale avec le message suivant affiché sur le terminal :

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

Ici, Git vous indique le commit à l’origine du conflit (`fa39187`). Trois choix s’offrent à vous :

* Vous pouvez exécuter `git rebase --abort` pour annuler complètement le rebasage. Git vous renvoie à l’état de votre branche tel qu’il était avant l’appel de `git rebase`.
* Vous pouvez exécuter `git rebase --skip` pour ignorer complètement le commit. Cela signifie qu’aucune des modifications introduites par le commit problématique ne sera incluse. Il est très rare de choisir cette option.
* Vous pouvez résoudre le conflit.

Pour résoudre le conflit, vous pouvez suivre [les procédures standard pour résoudre les conflits de fusion à partir de la ligne de commande](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line). Une fois que vous avez terminé, vous devez appeler `git rebase --continue` pour que Git continue à traiter le reste du rebasage.
