---
ms.openlocfilehash: fec57b88af5ef5b7227d88a8c70e5a4b4bb9c769
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163840"
---
Los mantenedores con acceso de escritura en un repositorio pueden utilizar el siguiente procedimiento para revisar y ejecutar flujos de trabajo en las solicitudes de extracción de los contribuyentes que requieran aprobación.

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. Inspecciona los cambios propuestos en la solicitud de cambios y asegúrate de que estés de acuerdo para ejecutar tus flujos de trabajo en la rama de la solicitud de cambios. Debe estar especialmente alerta de los cambios propuestos en el directorio `.github/workflows/` que afecten a los archivos de flujo de trabajo.
1. Si está familiarizado con la ejecución de flujos de trabajo en la rama de solicitud de incorporación de cambios, vuelva a la pestaña {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversación** y, en "Flujos de trabajo en espera de aprobación", haga clic en **Aprobar y ejecutar**.

   ![Aprueba y ejecuta flujos de trabajo](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)