---
ms.openlocfilehash: 3b7f24930d60e05c5e2b42cf7610a2b4efe70a14
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108760"
---
{% data variables.product.prodname_actions %} utilise un stockage externe pour stocker les artefacts et journaux de workflow. Ces données sont stockées chez votre fournisseur externe, par exemple Stockage Blob Azure, Amazon S3,{% ifversion actions-ghes-gcp-storage %} Google Cloud Storage,{% endif %} ou MinIO. Les sauvegardes de {% data variables.product.prodname_ghe_server %} et les configurations à haute disponibilité de {% data variables.product.prodname_ghe_server %} n’offrent donc aucune protection pour les données stockées sur ce stockage externe. À la place, des services de protection et de réplication des données sont assurés par le fournisseur de stockage externe, par exemple Azure{% ifversion actions-ghes-gcp-storage %}, Google Cloud,{% endif %} ou AWS.
