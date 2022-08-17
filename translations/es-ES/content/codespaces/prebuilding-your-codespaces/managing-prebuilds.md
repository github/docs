---
title: Administrar las precompilaciones
shortTitle: Administrar las precompilaciones
intro: 'Puedes revisar, modificar y borrar las configuraciones de precompilación de tu repositorio.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

## Verificar, cambiar y borrar tus configuraciones de precompilación

Las precompilaciones que configures para un repositorio se crean y actualizan utilizando un flujo de trabajo de {% data variables.product.prodname_actions %}, que administra el servicio de {% data variables.product.prodname_github_codespaces %}.

Depending on the settings in a prebuild configuration, the workflow to update the prebuild may be triggered by these events:

* Crear o actualizar la configuración de precompilación
* Subir una confirmación o una solicitud de cambios a una rama que está configurada para tener precompilaciones
* Cambiar cualquiera de los archivos de configuración del contenedor dev
* Un itinerario que definiste en la configuración de la precompilación
* Activar el flujo de trabajo manualmente

The settings in the prebuild configuration determine which events automatically trigger an update of the prebuild. Para obtener más información, consulta la sección "[Configurar las precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Las personas con acceso administrativo a un repositorio pueden verificar el progreso de las precompilaciones, así como editar y borrar las configuraciones de estas.

### Ver el progreso de las precompilaciones
Pudes ver el estado actual de la ejecución de flujo de trabajo más reciente para cada configuración de precompilación que hayas ajustado en la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio. Por ejemplo, "Actualmente en ejecución" o "Última ejecución hace 1 hora".

Para ver la salida de bitácora de la ejecución de flujo de trabajo de la precompilación más reciente, haz clic en **Ver la salida**.

![El botón de 'Ver salida'](/assets/images/help/codespaces/prebuilds-see-output.png)

Esto muestra la salida de la ejecución más reciente del flujo de trabajo en la pestaña de **Acciones**.

![La salida de flujo de trabajo de precompilación](/assets/images/help/codespaces/prebuilds-log-output.png)

Como alternativa, para ver todas las ejecuciones de flujo de trabajo de una precompilación asociadas con la rama especificada, haz clic en el botón de puntos suspensivos y elige **Ver ejecuciones** del menú desplegable.

![La opción de 'Ver ejecuciones' en el menú desplegable](/assets/images/help/codespaces/prebuilds-view-runs.png)

Esto muestra el historial de ejecución de flujo de trabajo para las precompilaciones para la rama asociada.

![El historial de ejecución de flujo de trabajo](/assets/images/help/codespaces/prebuilds-workflow-runs.png)

### Editar una configuración de precompilación

1. En la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio, haz clic en los puntos suspensivos a la derecha de la configuración de precompilación que quieras editar.
1. En el menú desplegable, haz clic en **Editar**.

   ![La opción de 'Editar' en el menú desplegable](/assets/images/help/codespaces/prebuilds-edit.png)

1. Haz los cambios requeridos en la configuración de precompilación y luego haz clic en **Actualizar**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### Inhabilitar una configuración de precompilación

To pause the update of prebuilds for a configuration, you can disable workflow runs for the configuration. Disabling the workflow runs for a prebuild configuration does not delete any previously created prebuilds for that configuration and, as a result, codespaces will continue to be generated from an existing prebuild.

El inhabilitar las ejecuciones de flujos de trabajo para una configuración precompilada es útil si necesitas investigar los fallos en la creación de plantillas.

1. En la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio, haz clic en los puntos suspensivos a la derecha de la configuración de precompilación que quieras inhabilitar.
1. En el menú desplegable, haz clic en **Inhabilitar ejecuciones**.

   ![La opción de 'Inhabilitar ejecuciones' en el menú desplegable](/assets/images/help/codespaces/prebuilds-disable.png)

1. Para confirmar que quieres inhabilitar esta configuración, haz clic en **OK**.

### Borrar una configuración de precompilación

Deleting a prebuild configuration also deletes all previously created prebuilds for that configuration. Como resultado, poco después de que borres una configuración, las precompilaciones generadas por dicha configuración ya no estarán disponibles cuando crees un codespace nuevo.

Después de que borras una configuración de precompilación, todavía se ejecutarán las ejecuciones de flujo de trabajo de dicha configuración que se hayan puesto en cola o que hayan iniciado. Se listarán en el historial de ejecución de flujo de trabajo junto con las ejecuciones de flujo de trabajo que se hayan completado previamente.

1. En la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio, haz clic en los puntos suspensivos a la derecha de la configuración de precompilación que quieras borrar.
1. En el menú desplegable, haz clic en **Borrar**.

   ![La opción de 'Borrar' en el menú desplegable](/assets/images/help/codespaces/prebuilds-delete.png)

1. Haz clic en **OK** para confirmar el borrado.

### Activar las precompilaciones manualmente

Puede ser útil activar una ejecución de flujo de trabajo manualmente para una configuración precompilada. Generalmente, esto solo es necesario si estás depurando un problema con el flujo de trabajo de una configuración de precompilación.

1. En la página de {% data variables.product.prodname_codespaces %} de tus ajustes de repositorio, haz clic en los puntos suspensivos a la derecha de la configuración de precompilación cuyo flujo de trabajo quieras activar.
1. En el menú desplegable, haz clic en **Activar manualmente**.

   ![La opción de 'Activar manualmente' en le menú desplegable](/assets/images/help/codespaces/prebuilds-manually-trigger.png)

## Leer más

- "[Solucionar problemas de las compilaciones previas](/codespaces/troubleshooting/troubleshooting-prebuilds)"
