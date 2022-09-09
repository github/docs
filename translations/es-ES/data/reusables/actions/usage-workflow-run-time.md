---
ms.openlocfilehash: 559b84346de36e6fb6e3a3ce9f92edf9420ded34
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114073"
---
- **Tiempo de ejecución del flujo de trabajo**: {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-6469 %}Cada ejecución de flujo de trabajo está limitada a 35 días. Si un flujo de trabajo llega a este límite, se cancelará. Este período incluye la duración de la ejecución y el tiempo invertido en la espera y la aprobación. {% else %}Cada ejecución de flujo de trabajo está limitada a 72 horas. Si un flujo de trabajo llega a este límite, se cancelará.{% endif %}
