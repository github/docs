---
ms.openlocfilehash: e4a946e027ffef0f6e52a55d3591eb0a00556625
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145092595"
---
{% tip %}

**Sugerencias**:
- Si las revisiones obligatorias están habilitadas y un colaborador con acceso de _escritura_, _administración_ o _administración_ al repositorio envía una revisión de solicitud de cambios, la solicitud de incorporación de cambios no se puede combinar hasta que el mismo colaborador envíe otra revisión en la que se aprueben las modificaciones de la solicitud de incorporación de cambios.
- Los propietarios y administradores del repositorio pueden fusionar una solicitud de extracción, incluso si no recibió una revisión de aprobación o si un revisor que solicitó modificaciones abandonó la organización o no está disponible.
- Si están habilitadas las revisiones requeridas y el descarte de una revisión en espera, y se sube una confirmación de modificación de código a la rama de una solicitud de extracción aprobada, se descarta la aprobación. La solicitud de extracción se debe volver a revisar y aprobar antes de que se pueda fusionar.
- Cuando varias solicitudes de extracción abiertas tienen una rama de encabezado que apunta a la misma confirmación, no podrás fusionarlas si una o ambas tienen una revisión pendiente o rechazada.
- Si tu repositorio requiere revisiones de aprobación de personas con permisos de escritura o administrativos, entonces cualquier aprobación de las personas con dichos permisos se denotará con una marca de verificación verde y las aprobaciones de las personas sin estos permisos tendrán una marca de verificación gris. Las aprobaciones con una marca de verificación gris no afectan la capacidad de la solicitud de cambios para fusionarse.
- Los autores de la solicitud de cambios no pueden aprobar sus propias solicitudes de cambios.

{% endtip %}
