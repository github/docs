---
ms.openlocfilehash: 3346847114721a9894f130238b067d41e5df21dc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094406"
---
{% data variables.product.prodname_actions %} usa armazenamento externo para armazenar artefatos e registros de fluxo de trabalho. Esses dados são armazenados no seu provedor externo, como armazenamento blob do Azure, Amazon S3 ou MinIO. Como resultado, os backups de {% data variables.product.prodname_ghe_server %} e as configurações de {% data variables.product.prodname_ghe_server %} de alta disponibilidade não fornecem proteção para os dados armazenados neste armazenamento externo e, em vez disso, dependem da proteção e replicação de dados proporcionadas pelo provedor de armazenamento externo, como Azure ou AWS.
