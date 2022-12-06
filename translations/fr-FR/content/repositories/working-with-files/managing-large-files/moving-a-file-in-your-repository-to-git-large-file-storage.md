---
title: Déplacement d’un fichier dans votre dépôt vers Git Large File Stockage
intro: 'Si vous avez configuré {% data variables.large_files.product_name_short %} et que vous disposez d’un fichier existant dans votre référentiel qui doit être suivi dans {% data variables.large_files.product_name_short %}, vous devez d’abord le supprimer dans votre référentiel.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Move a file to Git LFS
ms.openlocfilehash: fc03edc2ef82be8d7edb106a8c4a2a0b8efbeedb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131921'
---
Après avoir installé {% data variables.large_files.product_name_short %} et configuré le suivi {% data variables.large_files.product_name_short %}, vous pouvez déplacer des fichiers du suivi régulier de Git vers {% data variables.large_files.product_name_short %}. Pour plus d’informations, consultez « [Installation de {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage) » et « [Configuration de {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage) ».

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Conseil :** Si vous obtenez une erreur de type « cela dépasse la limite de taille de fichier de {% data variables.large_files.product_name_short %} de {% data variables.large_files.max_github_size %} » lorsque vous essayez de pousser (push) des fichiers vers Git, vous pouvez utiliser `git lfs migrate` au lieu de `filter branch` ou BFG Repo Cleaner pour déplacer le fichier volumineux vers {% data variables.large_files.product_name_long %}. Pour plus d’informations sur la commande `git lfs migrate`, consultez l’annonce de la publication de [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released).

{% endtip %}

1.  Supprimez le fichier de l’historique Git du dépôt en utilisant la commande `filter-branch` ou BFG Repo-Cleaner. Pour plus d’informations, consultez « [Suppression de données sensibles d’un dépôt](/articles/removing-sensitive-data-from-a-repository) ».
2. Configurez le suivi de votre fichier et poussez-le vers {% data variables.large_files.product_name_short %}. Pour plus d’informations sur cette procédure, consultez « [Configuration de {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage) ».

## Pour aller plus loin

- « [À propos de {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage) »
- « [Collaboration avec {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/) »
- « [Installation de {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage) »
