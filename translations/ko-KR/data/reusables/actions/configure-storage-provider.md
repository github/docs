---
ms.openlocfilehash: 0fe2a7baef7f3eb962aff1d834ce25b1e286f8c6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107591"
---
1. 다음 명령을 입력하여 외부 스토리지 연결을 구성하고 자리 표시자 값을 연결의 실제 값으로 바꿉니다.

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

     필요에 따라 S3에 대한 경로 스타일 주소 지정을 강제로 적용하려면 다음 명령도 입력합니다.

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