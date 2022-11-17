---
title: Modification de fichiers
intro: 'Vous pouvez modifier des fichiers directement sur {% data variables.product.product_name %} dans l’un de vos dépôts en utilisant l’éditeur de fichiers.'
redirect_from:
  - /articles/editing-files
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Edit files
ms.openlocfilehash: 515b773aaa9dd2a93d6c0b4b70adb3ef10afe082
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131984'
---
## Modification de fichiers dans votre dépôt

{% tip %}

**Astuce** : {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**Remarque :** L’éditeur de fichiers de {% data variables.product.product_name %} utilise [CodeMirror](https://codemirror.net/).

{% endnote %}

1. Dans votre dépôt, accédez au fichier à modifier.
{% data reusables.repositories.edit-file %}
3. Sous l’onglet **Modifier le fichier**, faites les changements nécessaires dans le fichier.
![Nouveau contenu du fichier](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Modification de fichiers dans le dépôt d’un autre utilisateur

Quand vous modifiez un fichier dans le dépôt d’un autre utilisateur, automatiquement nous [dupliquons le dépôt](/articles/fork-a-repo) et [ouvrons une demande de tirage](/articles/creating-a-pull-request) pour vous.

1. Dans le dépôt de l’autre utilisateur, accédez au dossier qui contient le fichier à modifier. Cliquez sur le nom du fichier à modifier.
2. Au-dessus du contenu du fichier, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}. À ce stade, GitHub duplique le dépôt pour vous.
3. Faites les changements nécessaires dans le fichier.
![Nouveau contenu du fichier](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
6. Cliquez sur **Proposer un changement de fichier**.
![Bouton Commiter les changements](/assets/images/help/repository/propose_file_change_button.png)
7. Tapez un titre et une description pour votre demande de tirage.
![Page de description de la demande de tirage](/assets/images/help/pull_requests/pullrequest-description.png)
8. Cliquez sur **Create pull request** (Créer une demande de tirage).
![Bouton Demande de tirage](/assets/images/help/pull_requests/pullrequest-send.png)
