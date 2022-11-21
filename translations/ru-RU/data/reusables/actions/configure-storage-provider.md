---
ms.openlocfilehash: 0fe2a7baef7f3eb962aff1d834ce25b1e286f8c6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107592"
---
1. Настройте подключение к внешнему хранилищу, введя следующие команды, заменив значения заполнителей фактическими значениями для подключения.

   - Хранилище BLOB-объектов Azure:

     ```shell{:copy}
     ghe-config secrets.actions.storage.azure.connection-string "CONNECTION STRING"
     ```
   - Amazon S3:

     ```shell{:copy}
     ghe-config secrets.actions.storage.s3.bucket-name "S3 BUCKET NAME"
     ghe-config secrets.actions.storage.s3.service-url "S3 SERVICE URL"
     ghe-config secrets.actions.storage.s3.access-key-id "S3 ACCESS KEY ID"
     ghe-config secrets.actions.storage.s3.access-secret "S3 ACCESS SECRET"
     ```

     При необходимости, чтобы принудительно применить адресацию в стиле пути для S3, также введите следующую команду.

     ```shell{:copy}
     ghe-config secrets.actions.storage.s3.force-path-style true
     ```
{%- ifversion actions-ghes-gcp-storage %}
   - Облачное хранилище Google:

     ```shell{:copy}
     ghe-config secrets.actions.storage.gcs.service-url "SERVICE URL"
     ghe-config secrets.actions.storage.gcs.bucket-name "BUCKET NAME"
     ghe-config secrets.actions.storage.gcs.access-key-id "HMAC ACCESS ID"
     ghe-config secrets.actions.storage.gcs.access-secret "HMAC SECRET"
     ```
{%- endif %}