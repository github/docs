---
ms.openlocfilehash: 0036dd5cf979531479a7ddf523c7475391b29c0a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147548012"
---
De forma predeterminada, un flujo de trabajo de {% data variables.product.prodname_actions %} se desencadena cada vez que crea o actualiza una precompilación, o hace una inserción en una rama habilitada para la precompilación. Como sucede con otros flujos de trabajo, mientras se ejecutan los de precompilación, consumirán algunos de los minutos de acciones incluidos en la cuenta, si tiene alguno, o incurrirán en cargos por los minutos de acciones. Para más información sobre los precios de los minutos de acciones, vea "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)". 

Junto con los minutos de {% data variables.product.prodname_actions %}, también se le facturarán por el almacenamiento de precompilaciones asociadas a cada configuración de precompilación para un repositorio y una región determinados. El almacenamiento de precompilaciones se factura a la misma velocidad que el almacenamiento de los codespaces.