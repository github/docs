---
ms.openlocfilehash: 0fe2a7baef7f3eb962aff1d834ce25b1e286f8c6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107593"
---
1. Configura la conexión de almacenamiento externo con los comandos siguientes, reemplazando los valores de marcador de posición por los valores reales de la conexión.

   - Azure Blob Storage:

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

     Opcionalmente, para forzar el direccionamiento con estilo de ruta de acceso para S3, especifica también el comando siguiente.

     ```shell{:copy}
     ghe-config secrets.actions.storage.s3.force-path-style true
     ```
{%- ifversion actions-ghes-gcp-storage %}
   - Google Cloud Storage:

     ```shell{:copy}
     ghe-config secrets.actions.storage.gcs.service-url "SERVICE URL"
     ghe-config secrets.actions.storage.gcs.bucket-name "BUCKET NAME"
     ghe-config secrets.actions.storage.gcs.access-key-id "HMAC ACCESS ID"
     ghe-config secrets.actions.storage.gcs.access-secret "HMAC SECRET"
     ```
{%- endif %}