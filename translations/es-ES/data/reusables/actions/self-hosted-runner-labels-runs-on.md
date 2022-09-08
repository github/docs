---
ms.openlocfilehash: e264eacc4226a90eb80980c2b19f48dc7c1889c7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069447"
---
A fin de especificar un ejecutor autohospedado para el trabajo, configure `runs-on` en el archivo de flujo de trabajo con las etiquetas de ejecutor autohospedado.

Todos los ejecutores autohospedados tienen la etiqueta `self-hosted`. El utilizar únicamente esta etiqueta seleccionará cualquier ejecutor auto-hospedado. Para seleccionar los ejecutores que cumplen con determinados criterios, como el sistema operativo o la arquitectura, se recomienda proporcionar una serie de etiquetas que comience con `self-hosted` (debe estar en primer lugar) y que luego incluya etiquetas adicionales según sea necesario. Cuando especifiques un arreglo de etiquetas, los jobs se pondrán en cola cuando se trate de ejecutores que tengan todas las etiquetas que especificas.

Aunque la etiqueta `self-hosted` no es obligatoria, se recomienda encarecidamente especificarla cuando se usen ejecutores autohospedados, para garantizar que el trabajo no especifique un ejecutor hospedado en {% data variables.product.prodname_dotcom %} futuro o actual por accidente.
