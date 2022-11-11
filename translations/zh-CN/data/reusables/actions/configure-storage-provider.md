---
ms.openlocfilehash: 0fe2a7baef7f3eb962aff1d834ce25b1e286f8c6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107587"
---
1. 通过输入以下命令配置外部存储连接，将占位符值替换为连接的实际值。

   - Azure Blob 存储：

     ```shell{:copy}
     ghe-config secrets.actions.storage.azure.connection-string "CONNECTION STRING"
     ```
   - Amazon S3：

     ```shell{:copy}
     ghe-config secrets.actions.storage.s3.bucket-name "S3 BUCKET NAME"
     ghe-config secrets.actions.storage.s3.service-url "S3 SERVICE URL"
     ghe-config secrets.actions.storage.s3.access-key-id "S3 ACCESS KEY ID"
     ghe-config secrets.actions.storage.s3.access-secret "S3 ACCESS SECRET"
     ```

     （可选）若要强制实施 S3 的路径样式寻址，还需输入以下命令。

     ```shell{:copy}
     ghe-config secrets.actions.storage.s3.force-path-style true
     ```
{%- ifversion actions-ghes-gcp-storage %}
   - Google Cloud Storage：

     ```shell{:copy}
     ghe-config secrets.actions.storage.gcs.service-url "SERVICE URL"
     ghe-config secrets.actions.storage.gcs.bucket-name "BUCKET NAME"
     ghe-config secrets.actions.storage.gcs.access-key-id "HMAC ACCESS ID"
     ghe-config secrets.actions.storage.gcs.access-secret "HMAC SECRET"
     ```
{%- endif %}