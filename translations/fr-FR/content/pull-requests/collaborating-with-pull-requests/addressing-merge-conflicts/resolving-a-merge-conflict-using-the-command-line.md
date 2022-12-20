---
title: Résolution d’un conflit de fusion en utilisant la ligne de commande
intro: Vous pouvez résoudre les conflits de fusion avec la ligne de commande et un éditeur de texte.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
ms.openlocfilehash: 1d4ff97c2a93d3e5a7aebaa8752810e284203bc1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883456'
---
Les conflits de fusion se produisent lorsque des modifications simultanées sont apportées à la même ligne d’un fichier, ou lorsqu’une personne modifie un fichier et qu’une autre personne supprime le même fichier. Pour plus d’informations, consultez « [À propos des conflits de fusion](/articles/about-merge-conflicts/) ».

{% tip %}

**Conseil :** vous pouvez utiliser l’éditeur de conflit sur {% data variables.product.product_name %} pour résoudre les conflits de fusion de modifications de ligne simultanées entre les branches faisant partie d’une demande de tirage. Pour plus d’informations, consultez « [Résolution d’un conflit de fusion sur GitHub](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) ».

{% endtip %}

## Conflits de fusion de modifications de ligne simultanées

Pour résoudre un conflit de fusion causé par des modifications de lignes simultanées, vous devez choisir les modifications à incorporer des différentes branches dans une nouvelle validation.

Par exemple, si vous et une autre personne avez modifié le fichier _styleguide.md_ sur les mêmes lignes dans différentes branches du même référentiel Git, vous obtiendrez une erreur de conflit de fusion lorsque vous tentez de fusionner ces branches. Vous devez résoudre ce conflit de fusion avec une nouvelle validation avant de pouvoir fusionner ces branches.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Accédez au référentiel Git local affecté par le conflit de fusion.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. Générez une liste des fichiers affectés par le conflit de fusion. Dans cet exemple, le fichier *styleguide.md* présente un conflit de fusion.
  ```shell
  $ git status
  > # On branch branch-b
  > # You have unmerged paths.
  > #   (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #   (use "git add <file>..." to mark resolution)
  > #
  > # both modified:      styleguide.md
  > #
  > no changes added to commit (use "git add" and/or "git commit -a")
  ```
4. Ouvrez votre éditeur de texte favori, par exemple [Atom](https://atom.io/), et accédez au fichier qui présente des conflits de fusion.
5. Pour voir le début du conflit de fusion dans votre fichier, recherchez marqueur de conflit `<<<<<<<` dans ce fichier. Lorsque vous ouvrez le fichier dans votre éditeur de texte, vous verrez les modifications de la branche principale ou de base après la ligne `<<<<<<< HEAD`. Puis vous verrez `=======`, qui isole vos modifications des changements dans l’autre branche, suivi par `>>>>>>> BRANCH-NAME`. Dans cet exemple, une personne a écrit « ouvrir un problème » dans la branche de base ou HEAD, et une autre personne a écrit « poser votre question dans IRC » dans la branche de comparaison ou `branch-a`.

    ```
    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a
    ```
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} Dans cet exemple, les deux modifications sont incorporées dans la fusion finale :

  ```shell
  If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
  ```
7. Ajoutez ou indexez vos modifications.
  ```shell
  $ git add .
  ```
8. Validez vos modifications avec un commentaire.
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

Vous pouvez maintenant fusionner les branches sur la ligne de commande ou [envoyer vos modifications à votre référentiel distant sur](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) {% data variables.product.product_name %} et [fusionner vos modifications](/articles/merging-a-pull-request/) dans une demande de tirage.

## Conflits de fusion de fichiers supprimés

Pour résoudre un conflit de fusion provoqué par des modifications simultanées apportées à un fichier, où une personne supprime un fichier dans une branche et une autre personne modifie le même fichier, vous devez choisir de supprimer ou de conserver le fichier supprimé dans une nouvelle validation.

Par exemple, si vous avez modifié un fichier, tel que *README.md*, et qu’une autre personne a supprimé le même fichier dans un autre référentiel Git, vous obtiendrez une erreur de conflit de fusion lorsque vous tentez de fusionner ces branches. Vous devez résoudre ce conflit de fusion avec une nouvelle validation avant de pouvoir fusionner ces branches.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Accédez au référentiel Git local affecté par le conflit de fusion.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. Générez une liste des fichiers affectés par le conflit de fusion. Dans cet exemple, le fichier *README.md* présente un conflit de fusion.
  ```shell
  $ git status
  > # On branch main
  > # Your branch and 'origin/main' have diverged,
  > # and have 1 and 2 different commits each, respectively.
  > #  (use "git pull" to merge the remote branch into yours)
  > # You have unmerged paths.
  > #  (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #  (use "git add/rm <file>..." as appropriate to mark resolution)
  > #
  > #   deleted by us:   README.md
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
3. Ouvrez votre éditeur de texte favori, par exemple [Atom](https://atom.io/), et accédez au fichier qui présente des conflits de fusion.
6. Décidez si vous souhaitez conserver le fichier supprimé. Vous pouvez afficher les dernières modifications apportées au fichier supprimé dans votre éditeur de texte.

 Pour ajouter le fichier supprimé à votre référentiel :
  ```shell
  $ git add README.md
  ```
 Pour supprimer ce fichier de votre référentiel :
  ```shell
  $ git rm README.md
  > README.md: needs merge
  > rm 'README.md'
  ```
7. Validez vos modifications avec un commentaire.
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

Vous pouvez maintenant fusionner les branches sur la ligne de commande ou [envoyer vos modifications à votre référentiel distant sur](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) {% data variables.product.product_name %} et [fusionner vos modifications](/articles/merging-a-pull-request/) dans une demande de tirage.

## Pour aller plus loin

- « [À propos des conflits de fusion](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) »
- « [Extraction de demandes de tirage localement](/articles/checking-out-pull-requests-locally/) »
