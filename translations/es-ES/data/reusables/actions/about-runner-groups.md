---
ms.openlocfilehash: 8492ebc0962837c6f748fe30dbca08f529c353fc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109910"
---
{% ifversion fpt %} {% note %}

**Nota:** Todas las organizaciones tienen un solo grupo predeterminado de ejecutores. Solo las cuentas empresariales y las organizaciones que pretenezcan a estas pueden crear y administrar grupos de ejecutores adicionales.

{% endnote %}

Los grupos de recursos se utilizan para controlar el acceso a los ejecutores. Los administradores de las organizaciones pueden configurar políticas de acceso que controlen qué repositorios en una organización tienen acceso al grupo de ejecutores.

Si usa {% data variables.product.prodname_ghe_cloud %}, puede crear grupos de ejecutores adicionales, los administradores de la empresa pueden configurar directivas de acceso que controlen qué organizaciones dentro de una empresa pueden acceder al grupo de ejecutores y los administradores de la organización pueden asignar directivas de acceso al repositorio detalladas para el grupo de ejecutores de la empresa. {% endif -%} {% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

Cuando se crean nuevos ejecutores, se asignan automáticamente al grupo predeterminado. Los ejecutores solo pueden estar en un grupo a la vez. Puedes mover los ejecutores del grupo predeterminado a otro grupo. Para obtener más información, consulta "[Cambiar un ejecutor a un grupo](#moving-a-runner-to-a-group)".

{% endif %}
