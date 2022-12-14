---
ms.openlocfilehash: 3b7f24930d60e05c5e2b42cf7610a2b4efe70a14
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110130"
---
{% data variables.product.prodname_actions %} использует внешнее хранилище для хранения артефактов и журналов рабочих процессов. Эти данные хранятся во внешнем поставщике, например хранилище BLOB-объектов Azure, Amazon S3,{% ifversion actions-ghes-gcp-storage %} Google Cloud Storage,{% endif %} или MinIO. В результате резервные копии {% данных variables.product.prodname_ghe_server %} и {% данных variables.product.prodname_ghe_server %} конфигурации высокой доступности не обеспечивают защиту данных, хранящихся в этом внешнем хранилище, и вместо этого полагаются на защиту и репликацию данных, предоставляемую внешним поставщиком хранилища, например Azure{% ifversion actions-ghes-gcp-storage %}, Google Cloud, {% endif %} или AWS.
