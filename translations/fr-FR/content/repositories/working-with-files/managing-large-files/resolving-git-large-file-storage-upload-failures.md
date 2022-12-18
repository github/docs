---
title: Résolution des échecs de chargement de Git Large File Storage
intro: 'Si vos fichiers {% data variables.large_files.product_name_short %} n’ont pas été chargés correctement, vous pouvez effectuer plusieurs étapes pour résoudre l’erreur de chargement.'
redirect_from:
  - /articles/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/resolving-git-large-file-storage-upload-failures
  - /github/managing-large-files/versioning-large-files/resolving-git-large-file-storage-upload-failures
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve upload failures
ms.openlocfilehash: d2f776561f08132e1ca05d0864368943098c5ddc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131909'
---
La vérification de l’intégrité de {% data variables.large_files.product_name_short %} garantit que tous les fichiers {% data variables.large_files.product_name_short %} référencés dans une poussée (push) ont été correctement chargés. Si la vérification détecte des fichiers référencés qui n’ont pas été chargés, vous recevez un message d’erreur et votre poussée (push) est bloquée.

Pour résoudre le message d’erreur, vous devez réinstaller votre client {% data variables.large_files.product_name_short %} local pour veiller à ce que les fichiers {% data variables.large_files.product_name_short %} référencés puissent être correctement chargés par la suite.

1. Ouvrez Terminal.
2. Réinstallez {% data variables.large_files.product_name_short %}.
  ```shell
  $ git lfs install
  ```
3. Poussez (push) tous les fichiers {% data variables.large_files.product_name_short %} référencés.
  ```shell
  $ git lfs push --all origin
  ```
