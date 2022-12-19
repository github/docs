---
ms.openlocfilehash: ae3a6c6743e497213f23230a4f78d98a1ab9a110
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192933"
---
Un usuario se considera activo si ha realizado alguna de las actividades siguientes en {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}.

- Inicio de sesión en {% data variables.location.product_location %}
- Crear un repositorio
- Enviar cambios a un repositorio
- Se le ha agregado a un repositorio
- Cambiar la visibilidad de un repositorio
- Crear un nuevo informe de problemas o solicitud de extracción
- Comentar una incidencia o una solicitud de incorporación de cambios
- Cerrar o volver a abrir una incidencia o una solicitud de incorporación de cambios
- Aplicar una etiqueta a un problema o solicitud de incorporación de cambios, o eliminar una etiqueta
- Asignar o desasignar una incidencia o una solicitud de incorporación de cambios
- Solicitar una revisión de una solicitud de incorporación de cambios o quitar una solicitud de revisión
- Crear o editar un comentario en una revisión de solicitud de incorporación de cambios
- Descartar un comentario en una solicitud de incorporación de cambios 
- Sincronizar una solicitud de incorporación de cambios
- Comentar una confirmación
- Publicar una versión
- Enviar cambios a una wiki
- Ver un repositorio
- Marcar un repositorio como favorito
- Eliminar un repositorio
- Acceso a los recursos mediante un {% data variables.product.pat_generic %} o una clave SSH
- Unirse a una organización

{% ifversion ghes %} Un usuario también se considerará activo si LDAP ha actualizado su cuenta.
{% endif %}
