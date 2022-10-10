---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123858"
---
Configura el balanceador de carga para verificar una de estas URL:
 - `https://HOSTNAME/status` si HTTPS está habilitado (valor predeterminado)
 - `http://HOSTNAME/status` si HTTPS está deshabilitado

La comprobación devolverá el código de estado `200` (correcto) si el nodo es correcto y está disponible para responder a las solicitudes del usuario final.
