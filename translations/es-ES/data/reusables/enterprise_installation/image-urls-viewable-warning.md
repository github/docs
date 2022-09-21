---
ms.openlocfilehash: 7f6ced813ea6d819b42c469ae1f285f6732ceeb4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111586"
---
{% warning %}

**Advertencia:** Si agrega un archivo adjunto de imagen a una solicitud de incorporación de cambios o al comentario de una incidencia, cualquiera podrá ver la URL de la imagen anonimizada sin autenticación{% ifversion ghes %}, incluso si la solicitud de incorporación de cambios se encuentra en un repositorio privado, o si se ha habilitado el modo privado. Para impedir el acceso no autorizado a las imágenes, asegúrese de restringir el acceso de red a los sistemas que sirven las imágenes, incluido {% data variables.product.product_location %}{% endif %}.{% ifversion ghae %} Para impedir el acceso no autorizado a las URL de imagen en {% data variables.product.product_name %}, considere la posibilidad de restringir el tráfico de red a la empresa. Para más información, vea "[Restricción del tráfico de red a la empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)".{% endif %}

{% endwarning %}
