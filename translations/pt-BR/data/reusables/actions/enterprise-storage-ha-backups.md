---
ms.openlocfilehash: 3b7f24930d60e05c5e2b42cf7610a2b4efe70a14
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108260"
---
{% data variables.product.prodname_actions %} usa armazenamento externo para armazenar artefatos e registros de fluxo de trabalho. Esses dados são armazenados no provedor externo, como o Armazenamento de Blobs do Azure, o Amazon S3,{% ifversion actions-ghes-gcp-storage %} o Google Cloud Storage{% endif %} ou o MinIO. Como resultado, os backups do {% data variables.product.prodname_ghe_server %} e as configurações de alta disponibilidade do {% data variables.product.prodname_ghe_server %} não fornecem proteção para os dados armazenados nesse armazenamento externo. Eles dependem da proteção e replicação de dados fornecidas pelo provedor de armazenamento externo, como Azure{% ifversion actions-ghes-gcp-storage %}, Google Cloud{% endif %} ou AWS.
