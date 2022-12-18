---
title: Suppression de fichiers dans un dépôt
intro: 'Vous pouvez supprimer un fichier individuel{% ifversion fpt or ghes or ghec %} ou un répertoire entier{% endif %} dans votre dépôt sur {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes or ghec %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
ms.openlocfilehash: b3d939a7be6be37e875104f7a3c4df53f7a3b7ed
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131987'
---
## À propos de la suppression de fichiers{% ifversion fpt or ghes or ghec %} et de répertoires{% endif %}

Vous pouvez supprimer un fichier individuel dans votre dépôt{% ifversion fpt or ghes or ghec %} ou un répertoire entier, y compris tous les fichiers du répertoire{% endif %}.

Si vous essayez de supprimer un fichier{% ifversion fpt or ghes or ghec %} ou un répertoire{% endif %} dans un dépôt sur lequel vous n’avez pas d’autorisation d’écriture, nous dupliquons le projet dans votre compte personnel et vous aidons à envoyer une demande de tirage dans le dépôt d’origine après avoir commité votre changement. Pour plus d’informations, consultez « [À propos des demandes de tirage (pull requests)](/github/collaborating-with-issues-and-pull-requests/about-pull-requests) ».

Si le fichier{% ifversion fpt or ghes or ghec %} ou le répertoire{% endif %} que vous avez supprimé contient des données sensibles, elles restent disponibles dans l’historique Git du dépôt. Pour supprimer complètement le fichier dans {% data variables.product.product_name %}, vous devez le supprimer dans l’historique de votre dépôt. Pour plus d’informations, consultez « [Suppression de données sensibles d’un dépôt](/github/authenticating-to-github/removing-sensitive-data-from-a-repository) ».

## Suppression d’un fichier

1. Accédez au fichier que vous voulez supprimer dans votre dépôt.
2. En haut du fichier, cliquez sur {% octicon "trash" aria-label="The trash icon" %}.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes or ghec %}
## Suppression d’un répertoire

1. Accédez au répertoire que vous voulez supprimer dans votre dépôt.
1. En haut à droite, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Supprimer le répertoire**.
  ![Bouton pour supprimer un répertoire](/assets/images/help/repository/delete-directory-button.png)
1. Passez en revue les fichiers à supprimer.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% endif %}
