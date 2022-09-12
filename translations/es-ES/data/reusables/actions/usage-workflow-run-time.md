---
ms.openlocfilehash: 559b84346de36e6fb6e3a3ce9f92edf9420ded34
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878331"
---
- **Tiempo de ejecución del flujo de trabajo**: {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-6469 %}Cada ejecución de flujo de trabajo está limitada a 35 días. Si un flujo de trabajo llega a este límite, se cancelará. Este período incluye la duración de la ejecución y el tiempo invertido en la espera y la aprobación. {% else %}Cada ejecución de flujo de trabajo está limitada a 72 horas. Si un flujo de trabajo llega a este límite, se cancelará.{% endif %}
