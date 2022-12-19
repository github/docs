---
title: Configuration de Git Large File Storage
intro: 'Une fois que [{% data variables.large_files.product_name_short %} est installé](/articles/installing-git-large-file-storage/), vous devez l’associer à un fichier volumineux dans votre dépôt.'
redirect_from:
  - /articles/configuring-large-file-storage
  - /articles/configuring-git-large-file-storage
  - /github/managing-large-files/configuring-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/configuring-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Configure Git LFS
ms.openlocfilehash: 363e89be0c729b8ea6d5313cec0c7ce61654f229
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331759'
---
Si votre dépôt contient des fichiers avec lesquels vous souhaitez utiliser {% data variables.product.product_name %}, vous devez d’abord les supprimer du dépôt, puis les ajouter à {% data variables.large_files.product_name_short %} localement. Pour plus d’informations, consultez « [Déplacement d’un fichier dans votre dépôt vers {% data variables.large_files.product_name_short %}](/articles/moving-a-file-in-your-repository-to-git-large-file-storage) ».

{% data reusables.large_files.resolving-upload-failures %}

{% ifversion ghes or ghae %}

{% tip %}

**Remarque :** Avant d’essayer de pousser un fichier volumineux vers {% data variables.product.product_name %}, vérifiez que vous avez activé {% data variables.large_files.product_name_short %} dans votre entreprise. Pour plus d’informations, consultez « [Configuration de Git Large File Storage sur GitHub Enterprise Server](/enterprise/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/) ».

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Remplacez votre répertoire de travail actuel par un dépôt existant que vous souhaitez utiliser avec {% data variables.large_files.product_name_short %}.
3. Pour associer un type de fichier dans votre dépôt à {% data variables.large_files.product_name_short %}, entrez `git {% data variables.large_files.command_name %} track` suivi du nom de l’extension de fichier que vous souhaitez charger automatiquement sur {% data variables.large_files.product_name_short %}.

  Par exemple, pour associer un fichier _.psd_, entrez la commande suivante :
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  Chaque type de fichier que vous souhaitez associer à {% data variables.large_files.product_name_short %} doit être ajouté à `git {% data variables.large_files.command_name %} track`. Cette commande modifie le fichier *.gitattributes* de votre dépôt et associe des fichiers volumineux à {% data variables.large_files.product_name_short %}.

  {% note %}

  **Remarque :** nous vous conseillons vivement de valider votre fichier *.gitattributes* local dans votre référentiel.

    - L’utilisation d’un fichier *.gitattributes* global associé à {% data variables.large_files.product_name_short %} peut entraîner des conflits lors de la contribution à d’autres projets Git.
    - L’inclusion du fichier *.gitattributes* dans le référentiel permet aux utilisateurs de créer des duplications ou de nouveaux clones pour collaborer plus facilement à l’aide de {% data variables.large_files.product_name_short %}.
    - L’inclusion du fichier *.gitattributes* dans le référentiel permet l’inclusion des objets {% data variables.large_files.product_name_short %} dans les archives zip et tarball.

  {% endnote %}

4. Ajoutez un fichier au dépôt correspondant à l’extension que vous avez associée :
  ```shell
  $ git add path/to/file.psd
  ```
5. Commitez le fichier et poussez-le vers {% data variables.product.product_name %} :
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  Vous devez voir des informations de diagnostic sur le chargement de votre fichier :
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

## Pour aller plus loin

- « [Collaboration avec {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/) »{% ifversion fpt or ghec %}
- « [Gestion des objets {% data variables.large_files.product_name_short %} dans les archives de votre dépôt](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository) »{% endif %}
