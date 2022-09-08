---
ms.openlocfilehash: b8320e8e835d0ed7522b63b7632f1704d7cf32fc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114474"
---
{% data variables.product.prodname_actions %} requiere los siguientes permisos para la clave de acceso que accederá al bucket:

* `s3:PutObject`
* `s3:GetObject`
* `s3:ListBucketMultipartUploads`
* `s3:ListMultipartUploadParts`
* `s3:AbortMultipartUpload`
* `s3:DeleteObject`
* `s3:ListBucket`
* `kms:GenerateDataKey` (si se ha habilitado el cifrado de Key Management Service [KMS])

