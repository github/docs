---
ms.openlocfilehash: d9874c3884e3191a0296272fbead8f30b7630e5a
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163837"
---
- **Ejecutar flujos de trabajo desde solicitudes de incorporación de cambios de bifurcación**: permite a los usuarios ejecutar flujos de trabajo desde solicitudes de incorporación de cambios de bifurcación, utilizando un `GITHUB_TOKEN` con permiso de solo lectura y sin acceso a secretos.
- **Enviar tokens de escritura a flujos de trabajo desde solicitudes de incorporación de cambios**: permite que las solicitudes de incorporación de cambios de bifurcaciones usen un `GITHUB_TOKEN` con permiso de escritura.
- **Enviar secretos a flujos de trabajo desde solicitudes de incorporación de cambios**: hace que todos los secretos estén disponibles para la solicitud de incorporación de cambios.{% ifversion actions-private-fork-workflow-approvals %}
- **Requerir aprobación para flujos de trabajo de solicitud de incorporación de cambios de bifurcación**: las ejecuciones de flujo de trabajo en solicitudes de incorporación de cambios de colaboradores sin permiso de escritura requerirá la aprobación de alguien con permiso de escritura antes de que se ejecuten. {% endif %}
