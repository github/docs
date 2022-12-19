---
ms.openlocfilehash: de2f4c96c3a86d64a11bfb8c5fbdc4f4082601e8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107577"
---
{% note %}

**Nota**: Actualmente, algunas características solo funcionan con {% data variables.product.pat_v1_plural %}:

- Solo los {% data variables.product.pat_v1_plural %} tienen acceso de escritura para los repositorios públicos que no son propiedad tuya o de una organización de la que no eres miembro.{% ifversion ghec or ghes or ghae %}
- Solo los {% data variables.product.pat_v1_plural %} tienen acceso de escritura automáticamente para los repositorios internos que son propiedad de la empresa. Es necesario conceder acceso a los {% data variables.product.pat_v2_caps %} a los repositorios internos. {% endif %}
- Los colaboradores externos solo pueden usar {% data variables.product.pat_v1_plural %} para acceder a los repositorios de la organización en los que son colaboradores.{% ifversion ghec or ghes or ghae %}
- Solo los {% data variables.product.pat_v1_plural %} pueden acceder a empresas. (Los {% data variables.product.pat_v2_caps %} puede acceder a organizaciones que son propiedad de empresas).{% endif %}
- Las siguientes API solo admiten {% data variables.product.pat_v1_plural %}. Para obtener una lista de las operaciones de la API REST que se admiten para {% data variables.product.pat_v2 %}, consulta "[Puntos de conexión disponibles para {% data variables.product.pat_v2 %}](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens)".
  - GraphQL API{% ifversion ghec or ghes or ghae %}
  - API REST para administradores de empresa{% endif %}{% ifversion ghec or fpt %}
  - API REST para la administración de importaciones de origen{% endif %}
  - API REST para la administración de {% data variables.product.prodname_projects_v1_caps %}
  - API REST para la administración de {% data variables.product.prodname_registry %}
  - API REST para la administración de notificaciones
  - API REST para la transferencia de un repositorio
  - API REST para la creación de un repositorio a partir de una plantilla
  - API REST para la creación de un repositorio para un usuario autenticado

{% endnote %}
