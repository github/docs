---
ms.openlocfilehash: d810c1d04e070750ead1b64ff62e54842a86feb1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065371"
---
Se os serviços de {% data variables.product.prodname_actions %} estiverem temporariamente indisponíveis, a execução do fluxo de trabalho será descartada se não tiver sido enfileirada em 30 minutos após ser acionada. Por exemplo, se um fluxo de trabalho for acionado e os serviços de {% data variables.product.prodname_actions %} não estiverem disponíveis por 31 minutos ou mais, a execução do fluxo de trabalho não será processada.
