---
ms.openlocfilehash: b8320e8e835d0ed7522b63b7632f1704d7cf32fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880248"
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

