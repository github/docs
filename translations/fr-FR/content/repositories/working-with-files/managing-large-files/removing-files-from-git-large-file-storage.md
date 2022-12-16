---
title: Suppression de fichiers dans Git Large File Storage
intro: 'Si vous avez configuré {% data variables.large_files.product_name_short %} pour votre dépôt, vous pouvez supprimer tous les fichiers ou un sous-ensemble de fichiers de {% data variables.large_files.product_name_short %}.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove files
ms.openlocfilehash: 4aa8b6789a916616b43b2b995174e64e25856ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131918'
---
## Suppression d’un seul fichier

1.  Supprimez le fichier de l’historique Git du dépôt en utilisant la commande `filter-branch` ou BFG Repo-Cleaner. Pour plus d’informations, consultez « [Suppression de données sensibles d’un dépôt](/articles/removing-sensitive-data-from-a-repository) ».
2. Accédez à votre fichier *.gitattributes*.

  {% note %}

  **Remarque :** Votre fichier *.gitattributes* est généralement enregistré dans votre dépôt local. Dans certains cas, vous avez peut-être créé un fichier *.gitattributes* global qui contient toutes vos associations {% data variables.large_files.product_name_short %} .

  {% endnote %}
3. Recherchez et supprimez la règle de suivi {% data variables.large_files.product_name_short %} associée dans le fichier *.gitattributes*.
4. Enregistrez et quittez le fichier *.gitattributes*.

## Suppression de tous les fichiers dans un dépôt {% data variables.large_files.product_name_short %}

1. Supprimez le fichier de l’historique Git du dépôt en utilisant la commande `filter-branch` ou BFG Repo-Cleaner. Pour plus d’informations, consultez « [Suppression de données sensibles d’un dépôt](/articles/removing-sensitive-data-from-a-repository) ».
2. Vous pouvez aussi désinstaller {% data variables.large_files.product_name_short %} dans le dépôt, pour ce faire, exécutez :
  ```shell
  $ git lfs uninstall
  ```
  Pour les versions {% data variables.large_files.product_name_short %} inférieures à 1.1.0, exécutez :
  ```shell
  $ git lfs uninit
  ```

## Objets {% data variables.large_files.product_name_short %} dans votre dépôt

Une fois que vous avez supprimé les fichiers dans {% data variables.large_files.product_name_short %}, les objets {% data variables.large_files.product_name_short %} existent toujours dans le stockage distant{% ifversion fpt or ghec %} et sont comptabilisés dans votre quota de stockage {% data variables.large_files.product_name_short %}{% endif %}.

Pour supprimer les objets {% data variables.large_files.product_name_short %} d’un dépôt, {% ifversion fpt or ghec %}supprimez et recréez le dépôt. Quand vous supprimez un dépôt, tous les problèmes, les étoiles et les duplications associés sont également supprimés. Pour plus d’informations, consultez « [Suppression d’un dépôt](/github/administering-a-repository/deleting-a-repository) ». Si vous devez supprimer définitivement un objet supprimé et que vous ne pouvez pas supprimer le dépôt, [contactez le support](/github/working-with-github-support) pour obtenir de l’aide.{% else %}contactez votre administrateur {% data variables.product.prodname_enterprise %} pour archiver les objets. Les objets archivés sont supprimés définitivement au bout de trois mois.{% endif %}

{% note %}

**Remarque :** Si vous avez supprimé un seul fichier et que vous voulez garder d’autres objets {% data variables.large_files.product_name_short %} dans votre dépôt, après avoir supprimé et recréé votre dépôt, reconfigurez vos fichiers associés à {% data variables.large_files.product_name_short %}. Pour plus d’informations, consultez « [Suppression d’un seul fichier](#removing-a-single-file) » et « [Configuration de {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage) ».

{% endnote %}

## Pour aller plus loin

- « [À propos de {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage) »
- « [Collaboration avec {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/) »
- « [Installation de {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage) »
