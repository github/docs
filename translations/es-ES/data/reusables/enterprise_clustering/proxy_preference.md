---
ms.openlocfilehash: 69c0fb0e38433bb6c7745701f77efed76421f0cc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111833"
---
Si tu balanceador de carga lo admite, es altamente recomendable implementar el protocolo PROXY. Cuando no está disponible el soporte de PROXY, también se puede equilibrar la carga de los puertos HTTP y HTTPS mediante el encabezado `X-Forwarded-For`.
