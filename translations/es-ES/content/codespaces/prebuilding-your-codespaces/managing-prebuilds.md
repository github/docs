---
title: Administración de precompilaciones
shortTitle: Manage prebuilds
intro: 'Puedes revisar, modificar y eliminar las configuraciones de precompilación del repositorio.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f39c46d91193db4c1c44ab336d86024b40adcea4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160333'
---
## Comprobación, cambio y eliminación de las configuraciones de precompilación

Los precompilaciones que configuras para un repositorio se crean y actualizan mediante un flujo de trabajo de {% data variables.product.prodname_actions %}, administrado por el servicio {% data variables.product.prodname_github_codespaces %}. 

Según los valores de una configuración de precompilación, el flujo de trabajo para actualizar la precompilación se puede desencadenar mediante estos eventos:

* Creación o actualización de la configuración de precompilación
* Inserción de una confirmación o una solicitud de incorporación de cambios en una rama configurada para tener precompilaciones
* Cambio de cualquiera de los archivos de configuración del contenedor de desarrollo
* Una programación definida en la configuración de precompilación
* Desencadenamiento manual del flujo de trabajo

Los valores de la configuración de precompilación determinan qué eventos desencadenan automáticamente una actualización de la precompilación. Para más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)". 

Los usuarios con acceso de administrador a un repositorio pueden comprobar el progreso de las configuraciones de precompilaciones, editarlas y eliminarlas. 

### Visualización del progreso de las precompilaciones
Puedes ver el estado actual de la ejecución de flujo de trabajo más reciente para cada configuración de precompilación que haya configurado en la página {% data variables.product.prodname_github_codespaces %} de la configuración del repositorio. Por ejemplo, "Actualmente en ejecución" o "Última ejecución hace 1 hora".

A fin de ver la salida del registro para la ejecución más reciente del flujo de trabajo de precompilación, haga clic en **Ver salida**.

![El botón "Ver salida"](/assets/images/help/codespaces/prebuilds-see-output.png) 

Esto muestra la salida de la ejecución más reciente del flujo de trabajo en la pestaña **Acciones**.

![Salida del flujo de trabajo de precompilación](/assets/images/help/codespaces/prebuilds-log-output.png) 

Como alternativa, para ver todas las ejecuciones de flujo de trabajo de precompilación asociadas a la rama especificada, haga clic en el botón de puntos suspensivos y elija **Ver ejecuciones** en el menú desplegable.

![La opción "Ver ejecuciones" en el menú desplegable](/assets/images/help/codespaces/prebuilds-view-runs.png) 

Esto muestra el historial de ejecución de flujo de trabajo para las precompilaciones de la rama asociada.

![Historial de ejecución de flujo de trabajo](/assets/images/help/codespaces/prebuilds-workflow-runs.png) 

### Edición de una configuración de precompilación

1. En la página {% data variables.product.prodname_codespaces %} de la configuración del repositorio, haga clic en los puntos suspensivos situados a la derecha de la configuración de precompilación que quiera editar.
1. En el menú desplegable, haga clic en **Editar**.
 
   ![La opción "Editar" en el menú desplegable](/assets/images/help/codespaces/prebuilds-edit.png) 

1. Realice los cambios necesarios en la configuración de precompilación y, después, haga clic en **Actualizar**. 

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### Deshabilitación de una configuración de precompilación

Si desea pausar la actualización de precompilaciones para una configuración, puede deshabilitar las ejecuciones de flujos de trabajo para la configuración. Deshabilitar las ejecuciones de flujos de trabajo para una configuración de precompilación no elimina ninguna precompilación creada previamente para dicha configuración y, como resultado, se seguirán generando codespaces a partir de una precompilación existente.

Deshabilitar las ejecuciones de flujos de trabajo para una configuración de precompilación resulta útil si necesitas investigar errores en la creación de precompilaciones.

1. En la página {% data variables.product.prodname_codespaces %} de la configuración del repositorio, haz clic en los puntos suspensivos situados a la derecha de la configuración de precompilación que quieres deshabilitar.
1. En el menú desplegable, haz clic en **Deshabilitar ejecuciones**.

   ![La opción "Deshabilitar ejecuciones" en el menú desplegable](/assets/images/help/codespaces/prebuilds-disable.png)

1. Para confirmar que quieres deshabilitar esta configuración, haz clic en **Aceptar**.

### Eliminación de una configuración de precompilación

Al eliminar una configuración de precompilación también se eliminan todas las precompilaciones creadas anteriormente para esa configuración. Como resultado, poco después de eliminar una configuración, las precompilaciones generadas por esa configuración ya no estarán disponibles al crear un codespace.

Después de eliminar una configuración de precompilación, las ejecuciones de flujo de trabajo para esa configuración que se han puesto en cola o que se han iniciado se seguirán ejecutando. Se mostrarán en el historial de ejecución de flujo de trabajo, junto con las ejecuciones de flujo de trabajo completadas anteriormente.

1. En la página {% data variables.product.prodname_codespaces %} de la configuración del repositorio, haga clic en los puntos suspensivos situados a la derecha de la configuración de precompilación que quiera eliminar.
1. En el menú desplegable, haga clic en **Eliminar**.

   ![La opción "Eliminar" en el menú desplegable](/assets/images/help/codespaces/prebuilds-delete.png)

1. Haga clic en **Aceptar** para confirmar la eliminación.

### Desencadenamiento manual de precompilaciones

Puede ser útil desencadenar manualmente una ejecución de flujo de trabajo para una configuración de precompilación. Por lo general, esto solo es necesario si va a depurar un problema con el flujo de trabajo para una configuración de precompilación.

1. En la página {% data variables.product.prodname_codespaces %} de la configuración del repositorio, haga clic en los puntos suspensivos situados a la derecha de la configuración de precompilación cuyo flujo de trabajo quiera desencadenar.
1. En el menú desplegable, haga clic en **Desencadenador manual**.

   ![La opción "Desencadenador manual" en el menú desplegable](/assets/images/help/codespaces/prebuilds-manually-trigger.png) 

## Información adicional

- "[Solución de problemas de precompilaciones](/codespaces/troubleshooting/troubleshooting-prebuilds)"
