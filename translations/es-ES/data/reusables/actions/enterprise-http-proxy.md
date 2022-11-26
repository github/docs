---
ms.openlocfilehash: 4efb2b0e214ee93dc8815055b005e11ea29534bb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107681"
---
Si tienes un **servidor proxy HTTP** configurado en {% data variables.location.product_location %}:

  - Debes agregar `localhost` y `127.0.0.1` a la lista de **exclusión de proxy HTTP**.
  - Si la ubicación del almacenamiento externo no es enrutable, también debes agregar la dirección URL del almacenamiento externo a la lista de exclusión.

  Para más información sobre cómo cambiar la configuración del proxy, vea "[Configuración de un servidor proxy web saliente](/admin/configuration/configuring-an-outbound-web-proxy-server)".
