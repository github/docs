---
ms.openlocfilehash: 46dc3c3d386ea78bb24c8a9154e6dceb8b5b75a8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107584"
---
- Хранилище BLOB-объектов Azure:

  ```shell{:copy}
  ghe-config secrets.actions.storage.blob-provider "azure"
  ```
- Amazon S3:

  ```shell{:copy}
  ghe-config secrets.actions.storage.blob-provider "s3"
  ```
{%- ifversion actions-ghes-gcp-storage %}
- Облачное хранилище Google:
  
    ```shell{:copy}
    ghe-config secrets.actions.storage.blob-provider "gcs"
    ```
{%- endif %}