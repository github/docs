---
ms.openlocfilehash: c61e071aa06bda0d31a1c4578dfe78addb55867e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147167383"
---
Si tienes un **servidor proxy HTTP** configurado en {% data variables.product.product_location %}:
  - Debes agregar `localhost` y `127.0.0.1` a la lista de **exclusión de proxy HTTP**.
  - Si el cubo BYOS no es enrutable, también debes agregar la dirección URL del cubo a la lista de exclusión.

  Para más información sobre cómo cambiar la configuración del proxy, vea "[Configuración de un servidor proxy web saliente](/admin/configuration/configuring-an-outbound-web-proxy-server)".