---
ms.openlocfilehash: 0fe2a7baef7f3eb962aff1d834ce25b1e286f8c6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107589"
---
1. Konfiguriere die Verbindung mit dem externen Speicher, indem du die folgenden Befehle eingibst und dabei die Platzhalterwerte durch die tatsächlichen Werte für deine Verbindung ersetzt.

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

     Optional kannst du auch den folgenden Befehl eingeben, um die Adressierung von S3 im Pfadformat zu erzwingen.

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