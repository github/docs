---
title: Устранение ошибок отправки в хранилище больших файлов GIT
intro: 'Если файлы {% data variables.large_files.product_name_short %} не были отправлены должным образом, можно выполнить ряд действий, чтобы устранить ошибку отправки.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136487'
---
Проверка целостности {% data variables.large_files.product_name_short %} гарантирует, что все файлы {% data variables.large_files.product_name_short %}, указанные для отправки, были отправлены надлежащим образом. Если при проверке обнаружены файлы, которые не были отправлены, вы получите сообщение об ошибке и отправка будет заблокирована.

Чтобы устранить ошибку, необходимо переустановить локальный клиент {% data variables.large_files.product_name_short %}. Это позволит правильно отправлять соответствующие файлы {% data variables.large_files.product_name_short %} в будущем.

1. Откройте терминал.
2. Переустановите {% data variables.large_files.product_name_short %}.
  ```shell
  $ git lfs install
  ```
3. Отправьте все указанные файлы {% data variables.large_files.product_name_short %}.
  ```shell
  $ git lfs push --all origin
  ```
