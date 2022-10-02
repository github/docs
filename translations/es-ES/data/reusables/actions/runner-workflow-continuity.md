---
ms.openlocfilehash: d810c1d04e070750ead1b64ff62e54842a86feb1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069467"
---
Si los servicios de las {% data variables.product.prodname_actions %} se encuentran temporalmente no disponibles, entonces se descartará una ejecución de flujo de trabajo si no se puso en cola en los primeros 30 minutos después de activarse. Por ejemplo, si un flujo de trabajo se activa y los servicios de las {% data variables.product.prodname_actions %} no están disponibles por 31 minutos o más, entonces la ejecución de flujo de trabajo no se procesará.
