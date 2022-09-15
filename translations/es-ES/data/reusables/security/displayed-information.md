---
ms.openlocfilehash: c9e2c1bf2b01805ed973effedd219c3552ac2bf4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146455673"
---
Cuando habilitas una o más características de seguridad y análisis para los repositorios existentes, verás cualquier resultado que se muestra en {% data variables.product.prodname_dotcom %} al cabo de unos pocos minutos:

- Todos los repositorios existentes tendrán la configuración seleccionada.
- Los repositorios nuevos seguirán la configuración seleccionada si ha habilitado la casilla para los repositorios nuevos.{% ifversion fpt or ghec %}
- Utilizamos los permisos para escanear en busca de archivos de manifiesto para aplicar los servicios relevantes.
- Si se habilita, verás la información de dependencias en la gráfica de dependencias.
- Si se habilitan, {% data variables.product.prodname_dotcom %} generará {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables o malware.{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
- Si se habilita, las actualizaciones de seguridad del {% data variables.product.prodname_dependabot %} crearán solicitudes de cambios para actualizar las dependencias vulnerables cuando se activen las {% data variables.product.prodname_dependabot_alerts %}.{% endif %}
