---
title: Visualización y ejecución repetida de comprobaciones en GitHub Desktop
shortTitle: Viewing and re-running checks
intro: 'Puedes ver el estado de las comprobaciones y volver a ejecutarlas en {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
ms.openlocfilehash: d763dc4e4b30844b905b4e601df6c9cb500c8094
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068029'
---
## Acerca de las comprobaciones en {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} muestra el estado de las comprobaciones que se han ejecutado en las ramas de la solicitud de incorporación de cambios. El distintivo de comprobación situado junto al nombre de la rama mostrará el estado *pendiente, aprobando* o *con errores* de las comprobaciones. También puedes volver a ejecutar todas las comprobaciones, las que tienen errores o unas determinadas al ver el estado de las comprobaciones en {% data variables.product.prodname_desktop %}. Para más información sobre cómo configurar las comprobaciones en el repositorio, consulta "[Acerca de las comprobaciones de estado](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".

{% data variables.product.prodname_desktop %} también mostrará una notificación del sistema cuando se produzca un error en las comprobaciones. Para más información sobre cómo habilitar las notificaciones, consulta "[Configuración de notificaciones en GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)".

## Visualización y ejecución repetida de comprobaciones

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %} ![Pestaña Solicitudes de incorporación de cambios en el menú desplegable Rama actual](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![Lista de solicitudes de incorporación de cambios abiertas en el repositorio](/assets/images/help/desktop/click-pull-request.png)
4. Haz clic en el número de solicitud de incorporación de cambios, a la derecha del nombre de la rama de solicitud de incorporación de cambios.
  ![Las comprobaciones se muestran junto al nombre de la rama](/assets/images/help/desktop/checks-dialog.png)
5. Para volver a ejecutar las comprobaciones con errores, haz clic en **{% octicon "sync" aria-label="The sync icon" %} Volver a ejecutar** y selecciona **Volver a ejecutar comprobaciones con errores**.
  ![Volver a ejecutar comprobaciones con errores](/assets/images/help/desktop/re-run-failed-checks.png)
6. Para volver a ejecutar comprobaciones individuales, mantén el puntero sobre la comprobación que quieres volver a ejecutar y selecciona el icono {% octicon "sync" aria-label="The sync icon" %} para volver a ejecutar la comprobación.
  ![Volver a ejecutar comprobaciones individuales](/assets/images/help/desktop/re-run-individual-checks.png)
7. Verás un cuadro de diálogo de confirmación con el resumen de las comprobaciones que se volverán a ejecutar. Haz clic en **Volver a ejecutar comprobaciones** para confirmar que quieres volver a realizar la ejecución.
  ![Cuadro de diálogo para confirmar la ejecución repetida](/assets/images/help/desktop/re-run-confirmation-dialog.png)
