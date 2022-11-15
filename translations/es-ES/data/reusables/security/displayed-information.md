---
ms.openlocfilehash: b57bbd1a709b4cae3b93607d1cd03c1a4a31be15
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/07/2022
ms.locfileid: "148135691"
---
Cuando habilitas una o más características de seguridad y análisis para los repositorios existentes, verás cualquier resultado que se muestra en {% data variables.product.prodname_dotcom %} al cabo de unos pocos minutos:

- Todos los repositorios existentes tendrán la configuración seleccionada.
- Los repositorios nuevos seguirán la configuración seleccionada si ha habilitado la casilla para los repositorios nuevos.{% ifversion GH-advisory-db-supports-malware %}
- Utilizamos los permisos para escanear en busca de archivos de manifiesto para aplicar los servicios relevantes.
- Si se habilita, verás la información de dependencias en la gráfica de dependencias.
- Si se habilitan, {% data variables.product.prodname_dotcom %} generará {% data variables.product.prodname_dependabot_alerts %} para las dependencias vulnerables o malware.{% endif %}{% ifversion fpt or ghec or ghes %}
- Si se habilita, las actualizaciones de seguridad del {% data variables.product.prodname_dependabot %} crearán solicitudes de cambios para actualizar las dependencias vulnerables cuando se activen las {% data variables.product.prodname_dependabot_alerts %}.{% endif %}
