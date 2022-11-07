---
ms.openlocfilehash: 14b8f0f8803056b5d3431e8de2eee868d9167546
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109809"
---
Cuando habilitas una o más características de seguridad y análisis para los repositorios existentes, verás cualquier resultado que se muestra en {% data variables.product.prodname_dotcom %} al cabo de unos pocos minutos:

- Todos los repositorios existentes tendrán la configuración seleccionada.
- Los repositorios nuevos seguirán la configuración seleccionada si ha habilitado la casilla para los repositorios nuevos.{% ifversion fpt or ghec %}
- Utilizamos los permisos para escanear en busca de archivos de manifiesto para aplicar los servicios relevantes.
- Si se habilita, verás la información de dependencias en la gráfica de dependencias.
- Si se habilitan, {% data variables.product.prodname_dotcom %} generará {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables o malware.{% endif %}{% ifversion fpt or ghec or ghes %}
- Si se habilita, las actualizaciones de seguridad del {% data variables.product.prodname_dependabot %} crearán solicitudes de cambios para actualizar las dependencias vulnerables cuando se activen las {% data variables.product.prodname_dependabot_alerts %}.{% endif %}
