---
ms.openlocfilehash: b8320e8e835d0ed7522b63b7632f1704d7cf32fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880244"
---
{% data variables.product.prodname_actions %} erfordert die folgenden Berechtigungen für den Zugriffsschlüssel, der auf den Bucket zugreift:

* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`
* `s3:ListBucket`
* `kms:GenerateDataKey`(wenn die Verschlüsselung mit dem Schlüsselverwaltungsdienst (Key Management Service, KMS) aktiviert wurde)

