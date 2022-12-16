---
title: Ajout d’un fichier à un référentiel
intro: 'Vous pouvez charger et commiter un fichier existant dans un dépôt sur {% data variables.product.product_name %} ou en utilisant la ligne de commande.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-large-files/about-large-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Add a file
ms.openlocfilehash: da76e182a16b1f72b814882b816f487b8290f3be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578907'
---
## Ajout d’un fichier à un référentiel sur {% data variables.product.product_name %}

Les fichiers que vous ajoutez à un référentiel via un navigateur sont limités à {% data variables.large_files.max_github_browser_size %} par fichier. Vous pouvez ajouter des fichiers plus volumineux, jusqu’à {% data variables.large_files.max_github_size %} chacun, via la ligne de commande. Pour plus d’informations, consultez « [Ajout d’un fichier à un référentiel](#adding-a-file-to-a-repository-using-the-command-line) ». Pour ajouter des fichiers supérieurs à {% data variables.large_files.max_github_size %}, vous devez utiliser {% data variables.large_files.product_name_long %}. Pour plus d’informations, consultez « [À propos de fichiers volumineux sur {% data variables.product.product_name %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github) ».

{% tip %}

**Conseils :**
- Vous pouvez charger simultanément plusieurs fichiers dans {% data variables.product.product_name %}.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Au-dessus de la liste des fichiers, à l’aide de la liste déroulante **Ajouter un fichier**, cliquez sur **Charger des fichiers**.
  ![« Charger des fichiers » dans la liste déroulante « Ajouter un fichier »](/assets/images/help/repository/upload-files-button.png)
3. Faites glisser et déposez le fichier ou le dossier que vous souhaitez charger dans votre référentiel dans l’arborescence de fichiers.
![Zone de glisser-déposer](/assets/images/help/repository/upload-files-drag-and-drop.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %}
6. Cliquez sur **Commiter les changements**.
![Bouton Valider les modifications](/assets/images/help/repository/commit-changes-button.png)

## Ajout d’un fichier à un référentiel à l’aide de la ligne de commande

Vous pouvez charger un fichier existant dans un référentiel sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} à l’aide de la ligne de commande.

{% tip %}

**Conseil :** vous pouvez également [ajouter un fichier existant à un référentiel à partir du site web {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. Sur votre ordinateur, déplacez le fichier que vous souhaitez charger vers {% data variables.product.product_name %} dans le répertoire local créé lorsque vous avez cloné le référentiel.
{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %} {% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## Pour aller plus loin

- « [Ajout de code hébergé localement à {% data variables.product.product_name %}](/get-started/importing-your-projects-to-github/importing-source-code-to-github//adding-locally-hosted-code-to-github) »
