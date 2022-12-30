---
ms.openlocfilehash: 3b7f24930d60e05c5e2b42cf7610a2b4efe70a14
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110129"
---
Las {% data variables.product.prodname_actions %} utilizan almacenamiento externo para almacenar artefactos de flujo de trabajo y bitácoras. Estos datos se almacenan en el proveedor externo, como Azure Blob Storage, Amazon S3,{% ifversion actions-ghes-gcp-storage %} Google Cloud Storage,{% endif %} o MinIO. Como resultado, las copias de seguridad de {% data variables.product.prodname_ghe_server %} y sus configuraciones de disponibilidad {% data variables.product.prodname_ghe_server %} alta no proporcionan protección para los datos que se almacenan en este servicio externo y, en vez de esto, dependen de la protección de datos y replicación que proporciona el proveedor de almacenamiento externo, como Azure{% ifversion actions-ghes-gcp-storage %}, Google Cloud{% endif %} o AWS.
