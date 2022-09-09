---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123858"
---
Configura el balanceador de carga para verificar una de estas URL:
 - `https://HOSTNAME/status` si HTTPS está habilitado (valor predeterminado)
 - `http://HOSTNAME/status` si HTTPS está deshabilitado

La comprobación devolverá el código de estado `200` (correcto) si el nodo es correcto y está disponible para responder a las solicitudes del usuario final.
