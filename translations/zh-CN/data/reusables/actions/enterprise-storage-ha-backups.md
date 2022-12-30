---
ms.openlocfilehash: 3b7f24930d60e05c5e2b42cf7610a2b4efe70a14
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108759"
---
{% data variables.product.prodname_actions %} 使用外部存储来存储工作流程工件和日志。 此数据存储在外部提供商上，例如 Azure Blob 存储、Amazon S3、{% ifversion actions-ghes-gcp-storage %}Google Cloud Storage {% endif %}或 MinIO。 因此，{% data variables.product.prodname_ghe_server %} 备份和 {% data variables.product.prodname_ghe_server %} 高可用性配置无法为存储在此外部存储上的数据提供保护，而是依赖于外部存储提供商（如 Azure{% ifversion actions-ghes-gcp-storage %}、Google Cloud{% endif %}或 AWS）提供的数据保护和复制。
