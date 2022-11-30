---
title: Changement de nom d’un fichier
intro: 'Vous pouvez renommer n’importe quel fichier dans votre dépôt directement dans {% data variables.product.product_name %} ou en utilisant la ligne de commande.'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/renaming-a-file
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/renaming-a-file-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 826c9c45ee8cace0d3e81c78fc010ac4c76f9ab1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131969'
---
## Changement de nom d’un fichier sur {% data variables.product.product_name %}

Le changement de nom d’un fichier vous donne également la possibilité de [déplacer le fichier vers un nouvel emplacement](/articles/moving-a-file-to-a-new-location)

{% tip %}

**Conseils** :

- Si vous essayez de renommer un fichier dans un dépôt auquel vous n’avez pas accès, nous dupliquerons le projet dans votre compte personnel et vous aidons à envoyer une [demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) dans le dépôt d’origine après avoir validé votre changement.
- Les noms de fichiers créés par le biais de l’interface web ne peuvent contenir que des caractères alphanumériques et des traits d’union (`-`). Pour utiliser d’autres caractères, créez et validez les fichiers localement, puis envoyez-les (push) au dépôt.
- Certains fichiers, comme des images, doivent être renommés à partir de la ligne de commande. Pour plus d’informations, consultez « [Changement de nom d’un fichier à l’aide de la ligne de commande](/articles/renaming-a-file-using-the-command-line) ».

{% endtip %}

1. Dans votre dépôt, accédez au fichier que vous souhaitez renommer.
2. Dans le coin supérieur droit de l’affichage du fichier, cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour ouvrir l’éditeur de fichier.
![Icône Modifier le fichier](/assets/images/help/repository/edit-file-icon.png)
3. Dans le champ du nom de fichier, remplacez le nom du fichier par le nouveau nom de fichier souhaité. Vous pouvez également mettre à jour le contenu de votre fichier en même temps.
![Modification d’un nom de fichier](/assets/images/help/repository/changing-file-name.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Changement de nom d’un fichier à l’aide de la ligne de commande 

Vous pouvez utiliser la ligne de commande pour renommer n’importe quel fichier dans votre dépôt.

De nombreux fichiers peuvent être [renommés directement sur {% data variables.product.product_name %}](/articles/renaming-a-file). Toutefois, le changement de nom de certains fichiers, comme des images, nécessite l’utilisation de la ligne de commande.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Renommez le fichier, en spécifiant l’ancien nom de fichier et le nouveau nom que vous souhaitez donner au fichier. Cela permet de préparer votre modification pour la validation.
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. Utilisez `git status` pour vérifier l’ancien et le nouveau nom de fichier.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: <em>old_filename</em> -> <em>new_filename</em>
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

