---
title: Fusion d’un dépôt en amont dans votre duplication
intro: If you don't have push (write) access to an upstream repository, then you can pull commits from that repository into your own fork.
redirect_from:
- /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
- /articles/merging-an-upstream-repository-into-your-fork
- /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
- /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Pull requests
shortTitle: Merge an upstream repo
ms.openlocfilehash: 7622e4865efc444a253cbbedf04ede0e47535967
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145133855"
---
{% data reusables.command_line.open_the_multi_os_terminal %}
2. Remplacez le répertoire de travail actuel par votre projet local.
3. Extrayez la branche dans laquelle vous voulez faire la fusion. Généralement, vous fusionnez dans la branche par défaut.
  ```shell
  $ git checkout <em>DEFAULT_BRANCH_NAME</em>
  ```
4. Tirez la branche souhaitée du dépôt en amont. Cette méthode conserve l’historique de commits sans modification.
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. S’il y a des conflits, résolvez-les. Pour plus d’informations, consultez « [Traitement des conflits de fusion](/github/collaborating-with-pull-requests/addressing-merge-conflicts) ».
6. Commitez la fusion.
7. Passez en revue les changements et vérifiez qu’ils sont satisfaisants.
8. Poussez la fusion vers votre dépôt GitHub.
  ```shell
  $ git push origin <em>DEFAULT_BRANCH_NAME</em>
  ```
