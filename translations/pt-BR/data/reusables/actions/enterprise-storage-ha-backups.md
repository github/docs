---
ms.openlocfilehash: 3346847114721a9894f130238b067d41e5df21dc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094406"
---
{% data variables.product.prodname_actions %} usa armazenamento externo para armazenar artefatos e registros de fluxo de trabalho. Esses dados são armazenados no seu provedor externo, como armazenamento blob do Azure, Amazon S3 ou MinIO. Como resultado, os backups de {% data variables.product.prodname_ghe_server %} e as configurações de {% data variables.product.prodname_ghe_server %} de alta disponibilidade não fornecem proteção para os dados armazenados neste armazenamento externo e, em vez disso, dependem da proteção e replicação de dados proporcionadas pelo provedor de armazenamento externo, como Azure ou AWS.
