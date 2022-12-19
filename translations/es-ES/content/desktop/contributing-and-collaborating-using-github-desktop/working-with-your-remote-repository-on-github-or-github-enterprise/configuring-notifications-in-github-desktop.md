---
title: Configuración de notificaciones en GitHub Desktop
shortTitle: Configuring notifications
intro: '{% data variables.product.prodname_desktop %} te mantendrá al día con las notificaciones sobre los eventos que se producen en la rama de la solicitud de incorporación de cambios.'
versions:
  fpt: '*'
ms.openlocfilehash: e7d99c4c81b64facae41b7697cde9d454e15e96a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060438'
---
## Acerca de las notificaciones en {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} mostrará una notificación del sistema para los eventos que se producen en el repositorio seleccionado actualmente. Las notificaciones se mostrarán en los casos siguientes:

- Cuando se han producido errores en las comprobaciones de una solicitud de incorporación de cambios.
- Cuando la revisión de una solicitud de incorporación de cambios se deja con un comentario, una aprobación o cambios solicitados.

Al hacer clic en la notificación, el foco de la aplicación cambiará a {% data variables.product.prodname_desktop %} y se proporcionará información más detallada.

## Notificaciones sobre errores en la comprobación de solicitudes de incorporación de cambios

Cuando se realicen cambios en una rama de solicitud de incorporación de cambios, recibirás una notificación si se produce un error en las comprobaciones.

![Notificación de errores en las comprobaciones de una solicitud de incorporación de cambios](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

Al hacer clic en la notificación, se mostrará un cuadro de diálogo con más información sobre las comprobaciones. Una vez que hayas revisado por qué se han producido errores en las comprobaciones, puedes volver a ejecutarlas o cambiar rápidamente a la rama de solicitud de incorporación de cambios para empezar a corregir los errores. Para obtener más información, consulta "[Visualización y nueva ejecución de comprobaciones en GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)".

![Cuadro de diálogo de errores en la comprobación](/assets/images/help/desktop/checks-failed-dialog.png)
## Notificaciones para las revisiones de solicitudes de incorporación de cambios

{% data variables.product.prodname_desktop %} mostrará una notificación del sistema cuando un compañero de equipo haya aprobado, comentado o solicitado cambios en tu solicitud de incorporación de cambios. Consulta "[Acerca de las revisiones de solicitudes de incorporación de cambios](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)" para obtener más información sobre dichas revisiones.

![Notificación de revisión de solicitudes de incorporación de cambios](/assets/images/help/desktop/pull-request-review-notification.png)

Al hacer clic en la notificación, el foco de la aplicación cambiará a {% data variables.product.prodname_desktop %} y se proporcionará más contexto sobre el comentario de revisión de la solicitud de incorporación de cambios.

![Cuadro de diálogo de revisión de la solicitud de incorporación de cambios](/assets/images/help/desktop/pull-request-review-dialog.png)
## Habilitación de las notificaciones

Si las notificaciones del sistema están deshabilitadas para {% data variables.product.prodname_desktop %}, sigue los pasos que se indican a continuación para habilitarlas.

{% mac %}

1. Haz clic en el menú **Apple** y selecciona **Preferencias del sistema**.
2. Selecciona **Notificaciones y foco**.
3. Selecciona **{% data variables.product.prodname_desktop %}** en la lista de aplicaciones.
4. Haz clic en **Permitir notificaciones**.

![Notificaciones y foco en macOS](/assets/images/help/desktop/mac-enable-notifications.png)

Para obtener más información sobre las notificaciones del sistema en macOS, consulta "[Uso de notificaciones en el equipo Mac](https://support.apple.com/en-us/HT204079)".

{% endmac %}

{% windows %}

1. Abre el menú **Inicio** y selecciona **Configuración**.
2. Selecciona **Sistema** y haz clic en **Notificaciones**.
3. Busca **{% data variables.product.prodname_desktop %}** en la lista de aplicaciones y haz clic en **Activar**.

![Habilitación de notificaciones en Windows](/assets/images/help/desktop/windows-enable-notifications.png)

Para obtener más información sobre las notificaciones del sistema en Windows, consulta "[Cambio de la configuración de notificación en Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)".

{% endwindows %}
