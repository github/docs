---
ms.openlocfilehash: 3b7f24930d60e05c5e2b42cf7610a2b4efe70a14
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109771"
---
{% data variables.product.prodname_actions %}는 외부 스토리지를 사용하여 워크플로 아티팩트와 로그를 저장합니다. 이 데이터는 Azure Blob Storage, Amazon S3,{% ifversion actions-ghes-gcp-storage %} Google Cloud Storage,{% endif %} 또는 MinIO와 같은 외부 공급자에 저장됩니다. 따라서 {% data variables.product.prodname_ghe_server %} 백업 및 {% data variables.product.prodname_ghe_server %} 고가용성 구성은 이 외부 스토리지에 저장된 데이터에 대한 보호를 제공하지 않으며, 대신 Azure{% ifversion actions-ghes-gcp-storage %}, Google Cloud,{% endif %} 또는 AWS와 같은 외부 스토리지 공급자가 제공하는 데이터 보호 및 복제에 의존합니다.
