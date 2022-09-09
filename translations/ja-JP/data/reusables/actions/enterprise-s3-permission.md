---
ms.openlocfilehash: b8320e8e835d0ed7522b63b7632f1704d7cf32fc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114477"
---
{% data variables.product.prodname_actions %}は、バケットにアクセスするアクセスキーのために以下の権限を必要とします。

* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`
* `s3:ListBucket`
* `kms:GenerateDataKey` (キー管理サービス (KMS) の暗号化が有効な場合)

