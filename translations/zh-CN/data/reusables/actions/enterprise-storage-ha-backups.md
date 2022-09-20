---
ms.openlocfilehash: 3346847114721a9894f130238b067d41e5df21dc
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "147887044"
---
{% data variables.product.prodname_actions %} 使用外部存储来存储工作流程工件和日志。 此数据存储在您的外部提供商上，例如 Azure blob 存储、Amazon S3 或 MinIO。 因此，{% data variables.product.prodname_ghe_server %} 备份和 {% data variables.product.prodname_ghe_server %} 高可用性配置无法为存储在此外部存储上的数据提供保护，而是依赖于外部存储提供商（如 Azure 或 AWS）提供的数据保护和复制。
