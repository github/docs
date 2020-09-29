---
title: Administrar una ejecución de flujo de trabajo
intro: 'Puedes ver el estado y resultados de cada paso en tu flujo de trabajo, cancelar un flujo de trabajo pendiente, ver los minutos de ejecución facturables para jobs, depurar y volver a ejecutar un flujo de trabajo fallido, buscar y descargar bitácoras y descargar artefactos.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/viewing-your-repository-s-workflows
  - /articles/viewing-your-repositorys-workflows
  - /articles/managing-a-workflow-run
  - /github/automating-your-workflow-with-github-actions/managing-a-workflow-run
  - /actions/automating-your-workflow-with-github-actions/managing-a-workflow-run
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de la administración del flujo de trabajo

Puedes ver si una ejecución de flujo de trabajo está en curso o completa desde la página de ejecución del flujo de trabajo. Si la ejecución está en curso, puedes cancelarla. Debes haber iniciado sesión en una cuenta de {% data variables.product.prodname_dotcom %} para ver la información de ejecución del flujo de trabajo, incluyendo los casos de repositorios públicos. Para obtener más información, consulta "[Permisos de acceso en GitHub](/articles/access-permissions-on-github)".

Si la ejecución está completa, puedes ver si el resultado fue exitoso, fallido, cancelado o neutral. Si la ejecución falló, puedes ver y buscar en los registros de construcción para diagnosticar la falla y volver a ejecutar el flujo de trabajo. También puedes ver los minutos de ejecución facturables para jobs, o descargar bitácoras y artefactos de compilación.

 ![Imagen de ejecución de flujo de trabajo anotado](/assets/images/help/repository/annotated-workflow.png)

{% data variables.product.prodname_actions %} usa la API de verificaciones para generar estados, resultados y registros para un flujo de trabajo. {% data variables.product.prodname_dotcom %} crea una nueva comprobación de suite para cada ejecución de flujo de trabajo. La comprobación de suite contiene una ejecución de comprobación para cada trabajo en el flujo de trabajo, y cada trabajo incluye diferentes pasos. {% data variables.product.prodname_actions %} se ejecutan como un paso en un flujo de trabajo. Para obtener más información acerca de la API de Verificaciones, consulta la sección "[Verificaciones](/v3/checks/)".

{% data reusables.github-actions.invalid-workflow-files %}

### Ver el historial de tu flujo de trabajo

Puedes ver cada trabajo en una ejecución de flujo de trabajo y cada paso en un trabajo. Para obtener más información, consulta "[Conceptos básicos para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions#job)." {% data reusables.repositories.permissions-statement-read %}

Adicionalmente a los pasos configurados en el archivo de flujo de trabajo, cada job también incluye tareas adicionales para iniciar y completar la ejecución del job. Estos pasos se registran en la ejecución de flujo de trabajo como "Set up job" y "Complete job".

Para jobs que se ejecutan en ejecutores hospedados en {% data variables.product.prodname_dotcom %}, "Set up job" registra los detalles del ambiente virtual del ejecutor, e incluye un enlace a la lista de herramientas pre-instaladas que estuvieron presentes en la máquina del ejecutor.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
6. De manera opcional, si la ejecución falló, para volver a ejecutar el flujo de trabajo, en la esquina superior derecha del flujo de trabajo, usa el menú desplegable **Re-run checks** (Volver a ejecutar verificaciones) y selecciona **Re-run all checks** (Volver a ejecutar todas las verificaciones). ![Volver a ejecutar el menú desplegable de verificaciones](/assets/images/help/repository/rerun-checks-drop-down.png)

### Cancelar una ejecución de flujo de trabajo

Cuando cancelas una ejecución de flujo de trabajo, {% data variables.product.prodname_dotcom %} cancela todsos los jobs y pasos que son parte de ésta. {% data reusables.repositories.permissions-statement-write %}

Cuando cancelas una ejecución de flujo de trabajo, tal vez estés ejecutando otro software que utiliza recursos que se relacionan con ésta. Para ayudarte a liberar los recursos relacionados con dicha ejecución de flujo de trabajo, podría ser útil entender los pasos que realiza {% data variables.product.prodname_dotcom %} para cancelar una ejecución de flujo de trabajo. Para obtener más información, consulta la sección "[ pasos que toma {% data variables.product.prodname_dotcom %} para cancelar una ejecución de flujo de trabajo](#steps-github-takes-to-cancel-a-workflow-run)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. En la esquina superior derecha del flujo de trabajo, haz clic en **Cancelar el conjunto de verificaciones**. ![Botón de cancelar el conjunto de verificaciones](/assets/images/help/repository/cancel-check-suite.png)
1. Después de dar clic en **Cancelar suite de verificación**.

#### Pasos que toma {% data variables.product.prodname_dotcom %} para cancelar una ejecución de flujo de trabajo

1. Para cancelar una ejecución de flujo de trabajo, el servidor vuelve a evaluar las condiciones `if` para todos los jobs que se ejecutan actualmente. Si la condición se evalúa como `true`, el job no se cancelará. Por ejemplo, la condición `if: always()` se evaluaría como "true" y el job continuaría ejecutándose. Cuando no hay condición, esto es equivalente a una condición `if: success()`, la cual solo se ejecutará si el paso anterior finalizó con éxito.
2. Para los jobs que necesitan cancelarse, el servidor envía un mensaje de cancelación a todas las máquinas ejecutoras con jobs que necesitan cancelarse.
3. Para los jobs que siguen ejecutándose, el servidor vuelve a evaluar las condiciones `if` para los pasos sin finalizar. Si la condición se evalúa como `true`, el paso seguirá ejecutándose.
4. Para los pasos que necesitan cancelarse, la máquina ejecutora manda un `SIGINT/Ctrl-C` al proceso de entrada del paso (`node` para una acción de javascript, `docker` para una acción de contenedor, y `bash/cmd/pwd` cuando se utiliza `run` en un paso). Si el proceso no sale en 7500 ms, el ejecutor mandará un `SIGTERM/Ctrl-Break` al proceso y luego esperará por 2500 ms para que el proceso salga. Si el proceso aún está ejecutándose, el ejecutor finalizará abruptamente el árbol de proceso.
5. Después de los 5 minutos del periodo de expiración de plazo de cancelación, el servidor forzará la terminación de todos los jobs y pasos que no hayan finalizado la ejecución o que hayan fallado en completar el proceso de cancelación.

### Borrar una ejecución de flujo de trabajo

Puedes borrar una ejecución de flujo de trabajo que se haya completado, o que tenga más de 2 semanas. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. Para eliminar una ejecución de flujo de trabajo, utiliza el menú desplegable de {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Borrar una ejecución de flujo de trabajo**.

    ![Borrar una ejecución de flujo de trabajo](/assets/images/help/settings/workflow-delete-run.png)
1. Revisa el mensaje de confirmación y da clic en **Sí, borrar esta ejecución de flujo de trabajo permanentemente**.

    ![Borrar una confirmación de ejecución de flujo de trabajo](/assets/images/help/settings/workflow-delete-run-confirmation.png)

{% if currentVersion == "free-pro-team@latest" %}

### Visualizar los minutos de ejecución facturables para jobs

Puedes ver el tiempo de ejecución de un job, incluyendo los minutos facturables que este job ha acumulado.

Los minutos de ejecución facturables para un job solo se muestran en aquellos jobs que se ejecutan en repositorios privados que utilizan ejecutores hospedados en {% data variables.product.prodname_dotcom %}. No hay minutos facturables cuando se utiliza {% data variables.product.prodname_actions %} en repositorios públicos o para trabajos que se ejecutan en ejecutores auto-hospedados.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Debajo del resumen del job, da clic en **Detalles de tiempo facturable y de ejecución**. ![Enlace para los detalles de tiempo facturable y de ejecución](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Nota:** El tiempo facturable que se muestra no incluye ningún multiplicador de minutos o de redondeo. Para ver tu uso total de {% data variables.product.prodname_actions %}, incluyendo los multiplicadores de minutos y de redondeo, consulta la sección "[Visualizar tu uso de {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)".

   {% endnote %}

{% endif %}

### Ver registros para diagnosticar fallas

Si falla la ejecución de su flujo de trabajo, puedes ver qué paso provocó el error y revisar los registros de construcción del paso que falló para solucionar el problema. Puedes ver el tiempo que demoró cada paso en ejecutarse. También puedes copiar un enlace permanente a una línea específica en el archivo de registro para compartir con tu equipo. {% data reusables.repositories.permissions-statement-read %}

{% data variables.product.product_name %} almacena registros y artefactos de construcción completos durante 90 días.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. Para expandir el registro de un paso fallido, haz clic en el paso. ![Nombre de paso fallido](/assets/images/help/repository/failed-check-step.png)
7. De manera opcional, para obtener un enlace a una línea específica de los registros, haz clic en el número de línea del paso. Puedes copiar el enlace desde la barra de direcciones de tu navegador web. ![Botón para copiar enlace](/assets/images/help/repository/copy-link-button.png)

### Buscar registros

Puedes buscar en los registros de construcción un paso en particular. Cuando buscas registros, solo los pasos ampliados se incluyen en los resultados. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
6. Para expandir cada paso que deseas incluir en tu búsqueda, haz clic en el paso. ![Nombre del paso](/assets/images/help/repository/failed-check-step.png)
7. En el cuadro de búsqueda **Buscar registros** en la esquina superior derecha de la salida del registro, escribe una consulta de búsqueda. ![Cuadro de búsqueda para buscar registros](/assets/images/help/repository/search-log-box.png)

### Descargar las bitácoras

Puedes descargar los archivos de registro desde tu ejecución de flujo de trabajo. También puedes descargar los artefactos de un flujo de trabajo. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)." {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. Para descargar registros, usa el menú desplegable **Descargar registros** y selecciona los registros que deseas descargar. ![Menú desplegable para descargar registros](/assets/images/help/repository/download-logs-drop-down.png)

### Borrar bitácoras

Puedes borrar los archivos de bitácora de tu ejecución de flujo de trabajo. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
5. Para borrar los archivos de bitácora, da clic en el botón **Borrar todas las bitácoras** y revisa el aviso de confirmación. ![Delete all logs](/assets/images/help/repository/delete-all-logs.png)Después de borrar las bitácoras, el botón **Borrar todas las bitácoras** se elimina para indicar que no quedan archivos de bitácora en la ejecución del flujo de trabajo.

### Habilitar registro de depuración

Si los registros de flujo de trabajo no proporcionan suficiente detalle para diagnosticar por qué un flujo de trabajo o paso no funciona como se espera, puedes habilitar más registros de depuración.

Estas bitácoras extra se habilitan configurando los secretos en el repositorio que contiene el flujo de trabajo, así que aplicarán los mismos requisitos de los permisos:

- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-repository %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

Para obtener más información sobre cómo establecer secretos, consulta "<0">Crear y usar secretos cifrados</a>."

#### Habilitar el registro de diagnóstico del ejecutor

El crear bitácoras de diagnóstico del ejecutor proporciona archivos de bitácora adicionales que contienen información acerca de cómo un ejecutor efectúa un job. Los archivos de registro adicionales se agregan al archivo de registro:

* El registro del proceso del ejecutor, que incluye información acerca de la coordinación y la configuración de los ejecutores para ejecutar tareas.
* El registro del proceso del trabajador, que registra la ejecución de una tarea.

1. Para habilitar el registro de diagnóstico del ejecutor, establece el siguiente secreto en el repositorio que contiene el flujo de trabajo: `ACTIONS_RUNNER_DEBUG` en `true`.

1. Para descargar los registros de diagnóstico del ejecutor, descarga el archivo de registro del flujo de trabajo. Los registros de diagnóstico del ejecutor se encuentran en la carpeta `correner-diagnostic-logs`. Para obtener más información sobre cómo descargar bitácoras, consulta la sección "[Descargar bitácoras](#downloading-logs)".

#### Habilitar el registro de depuración del paso

El registro de depuración del paso aumenta el nivel de detalle de los registros de una tarea durante y después de la ejecución de una tarea.

1. Para habilitar el registro de depuración del paso, debes establecer el siguiente secreto en el repositorio que contiene el flujo de trabajo: `ACTIONS_RUNNER_DEBUG` en `true`.

1. Después de establecer el secreto, se muestran más eventos de depuración en los registros del paso. Para obtener más información, consulta ["Ver registros para diagnosticar fallas"](#viewing-logs-to-diagnose-failures).


### Leer más

- [Acerca de {% data variables.product.prodname_actions %}](/articles/about-github-actions)"
- "[Configurar un flujo de trabajo](/articles/configuring-a-workflow)"
- "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)"
- "[Eventos que desencadenan flujos de trabajo](/articles/events-that-trigger-workflows)"
- "[Entornos virtuales para ejecutores alojados en {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
