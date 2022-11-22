---
title: Git Large File Storage-Uploadfehler beheben
intro: 'Wenn deine {% data variables.large_files.product_name_short %}-Dateien nicht richtig hochgeladen werden, kannst du den Uploadfehler in mehreren Schritten beheben.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131908'
---
Der Integritätscheck von {% data variables.large_files.product_name_short %} überprüft, ob alle referenzierten {% data variables.large_files.product_name_short %}-Dateien eines Pushes korrekt hochgeladen wurden. Wird bei der Überprüfung festgestellt, dass dies nicht der Fall ist, erhältst Du eine Fehlermeldung und Dein Push wird blockiert.

Zur Behebung des Fehlers muss Du Deinen lokalen {% data variables.large_files.product_name_short %}-Client neu installieren, um sicherzustellen, dass die referenzierten {% data variables.large_files.product_name_short %}-Dateien künftig korrekt hochgeladen werden.

1. Öffne das Terminal.
2. Installiere {% data variables.large_files.product_name_short %} neu.
  ```shell
  $ git lfs install
  ```
3. Führe einen Push aller referenzierten {% data variables.large_files.product_name_short %}-Dateien durch.
  ```shell
  $ git lfs push --all origin
  ```
