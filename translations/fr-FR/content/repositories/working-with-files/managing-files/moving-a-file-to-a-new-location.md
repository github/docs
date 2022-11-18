---
title: Déplacement d'un fichier vers un nouvel emplacement
intro: 'Vous pouvez déplacer un fichier vers un autre répertoire sur {% data variables.product.product_name %} ou en utilisant la ligne de commande.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/moving-a-file-to-a-new-location-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Move a file
ms.openlocfilehash: 90e9434401795b6222d6304464c5a7d3839e0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131978'
---
En plus de modifier l’emplacement d’un fichier, vous pouvez [mettre à jour le contenu de votre fichier](/articles/editing-files-in-your-repository) ou [lui donner un nouveau nom](/articles/renaming-a-file) dans le même commit.

## Déplacement d’un fichier vers un nouvel emplacement sur {% data variables.product.product_name %}

{% tip %}

**Conseils** :

- Si vous essayez de déplacer un fichier dans un dépôt auquel vous n’avez pas accès, nous dupliquons le projet dans votre compte personnel et vous aidons à envoyer une [demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) dans le dépôt d’origine après avoir commité votre changement.
- Certains fichiers, comme les images, doivent être déplacés à partir de la ligne de commande. Pour plus d’informations, consultez « [Déplacement d’un fichier vers un nouvel emplacement en utilisant la ligne de commande](/articles/moving-a-file-to-a-new-location-using-the-command-line) ».
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. Dans votre dépôt, accédez au fichier que vous souhaitez déplacer.
2. Dans le coin supérieur droit de l’affichage du fichier, cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour ouvrir l’éditeur de fichier.
![Icône Modifier le fichier](/assets/images/help/repository/move-file-edit-file-icon.png)
3. Dans le champ du nom de fichier, modifiez le nom du fichier en suivant les instructions fournies dans ![Modification d’un nom de fichier](/assets/images/help/repository/moving_files.gif).
    - Pour déplacer le fichier **dans un sous-dossier**, tapez le nom du dossier souhaité, suivi de `/`. Votre nouveau nom de dossier devient un nouvel élément dans la barre de navigation.
    - Pour déplacer le fichier dans un répertoire **au-dessus de l’emplacement actuel du fichier**, placez votre curseur au début du champ du nom de fichier, puis tapez `../` pour remonter d’un niveau de répertoire complet ou `backspace` pour modifier le nom du dossier parent.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Déplacement d’un fichier vers un nouvel emplacement en utilisant la ligne de commande 

Vous pouvez utiliser la ligne de commande pour déplacer des fichiers dans un dépôt en supprimant le fichier de l’ancien emplacement, puis en l’ajoutant au nouvel emplacement.

De nombreux fichiers peuvent être [déplacés directement sur {% data variables.product.product_name %}](/articles/moving-a-file-to-a-new-location). Toutefois, le déplacement de certains fichiers, comme des images, nécessite l’utilisation de la ligne de commande.

{% data reusables.command_line.manipulating_file_prereqs %}

1. Sur votre ordinateur, déplacez le fichier vers un nouvel emplacement dans le répertoire créé localement sur votre ordinateur lorsque vous avez cloné le dépôt.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Utilisez `git status` pour vérifier l’ancien emplacement du fichier et son nouvel emplacement.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes not staged for commit:
  > #   (use "git add/rm <file>..." to update what will be committed)
  > #   (use "git checkout -- <file>..." to discard changes in working directory)
  > #
  > #     deleted:    /<em>old-folder</em>/<em>image.png</em>
  > #
  > # Untracked files:
  > #   (use "git add <file>..." to include in what will be committed)
  > #
  > #     /<em>new-folder</em>/<em>image.png</em>
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
{% data reusables.git.stage_for_commit %} Cela supprime, ou `git rm`, le fichier de l’ancien emplacement et ajoute, ou `git add`, le fichier au nouvel emplacement.
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. Utilisez `git status` pour vérifier les modifications intermédiaires pour le commit.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #    renamed:    /old-folder/image.png -> /new-folder/image.png
  # Displays the changes staged for commit
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}
