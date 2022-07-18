---
title: Utilizar bitácoras de ejecución de flujo de trabajo
intro: 'Puedes ver, buscar y descargar las bitácoras de cada job en una ejecución de flujo de trabajo.'
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Puedes ver si una ejecución de flujo de trabajo está en curso o completa desde la página de ejecución del flujo de trabajo. Debes haber iniciado sesión en una cuenta de {% data variables.product.prodname_dotcom %} para ver la información de ejecución del flujo de trabajo, incluyendo los casos de repositorios públicos. Para obtener más información, consulta "[Permisos de acceso en GitHub](/articles/access-permissions-on-github)".

Si la ejecución está completa, puedes ver si el resultado fue exitoso, fallido, cancelado o neutral. Si la ejecución falló, puedes ver y buscar en los registros de construcción para diagnosticar la falla y volver a ejecutar el flujo de trabajo. También puedes ver los minutos de ejecución facturables para jobs, o descargar bitácoras y artefactos de compilación.

{% data variables.product.prodname_actions %} usa la API de verificaciones para generar estados, resultados y registros para un flujo de trabajo. {% data variables.product.prodname_dotcom %} crea una nueva comprobación de suite para cada ejecución de flujo de trabajo. La comprobación de suite contiene una ejecución de comprobación para cada trabajo en el flujo de trabajo, y cada trabajo incluye diferentes pasos. {% data variables.product.prodname_actions %} se ejecutan como un paso en un flujo de trabajo. Para obtener más información acerca de la API de Verificaciones, consulta la sección "[Verificaciones](/rest/reference/checks)".

{% data reusables.actions.invalid-workflow-files %}

## Ver registros para diagnosticar fallas

Si falla la ejecución de su flujo de trabajo, puedes ver qué paso provocó el error y revisar los registros de construcción del paso que falló para solucionar el problema. Puedes ver el tiempo que demoró cada paso en ejecutarse. También puedes copiar un enlace permanente a una línea específica en el archivo de registro para compartir con tu equipo. {% data reusables.repositories.permissions-statement-read %}

Adicionalmente a los pasos que se configuraron en el archivo de flujo de trabajo, {% data variables.product.prodname_dotcom %} agrega dos pasos adicionales a cada job para configurar y completar la ejecución del flujo de trabajo. Estos pasos se registran en la ejecución del flujo de trabajo con los nombres de "Set up job" y "Complete job".

Para jobs que se ejecutan en ejecutores hospedados en {% data variables.product.prodname_dotcom %}, "Set up job" registra los detalles del ambiente virtual del ejecutor, e incluye un enlace a la lista de herramientas pre-instaladas que estuvieron presentes en la máquina del ejecutor.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
{% data reusables.repositories.view-failed-job-results %}
{% data reusables.repositories.view-specific-line %}

## Buscar registros

Puedes buscar en los registros de construcción un paso en particular. Cuando buscas registros, solo los pasos ampliados se incluyen en los resultados. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
1. En el cuadro de búsqueda **Buscar registros** en la esquina superior derecha de la salida del registro, escribe una consulta de búsqueda. ![Cuadro de búsqueda para buscar registros](/assets/images/help/repository/search-log-box-updated-2.png)

## Descargar bitácoras

Puedes descargar los archivos de bitácora desde tu ejecución de flujo de trabajo. También puedes descargar los artefactos de un flujo de trabajo. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)." {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
{% data reusables.repositories.navigate-to-job %}
1. En la esquina superior derecha, da clic en {% octicon "gear" aria-label="The gear icon" %} y selecciona **Descargar archivo de bitácora**.

  ![Menú desplegable para descargar registros](/assets/images/help/repository/download-logs-drop-down-updated-2.png)


  {% ifversion re-run-jobs %}

  {% note %}

  **Nota**: Cuando descargas el archivo de bitácora para un flujo de trabajo que se volvió a ejecutar parcialmente, este archivo solo incluirá los jobs que se volvieron a ejecutar. Para obtener un conjunto completo de bitácoras para los jobs que se ejecutaron desde un flujo de trabajo, debes descargar los archivos de bitácora de los intentos de ejecución previos que ejecutaron los otros jobs.

  {% endnote %}

  {% endif %}

## Borrar bitácoras

Puedes borrar los archivos de bitácora de tu ejecución de flujo de trabajo. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. En la esquina superior derecha, haz clic en el {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.

    ![Icono de Kebab horizontal](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)

2. Para borrar los archivos de bitácora, da clic en el botón **Borrar todas las bitácoras** y revisa el aviso de confirmación.

  ![Borrar todas las bitácoras](/assets/images/help/repository/delete-all-logs-updated-2.png)

Después de borrar las bitácoras, el botón de **Borrar todas las bitácoras** se elimina para indicar que ya no quedan archivos en la ejecución de flujo de trabajo.

## Visualizar las bitácoras con {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

Para ver la bitácora de un job específico, utiliza el subcomando `run view`. Reemplaza a `run-id` con la ID de la ejecución de la cual quieres ver las bitácoras. {% data variables.product.prodname_cli %} devuelve un menú interactivo para que elijas un job de la ejecución. Si no especificas una `run-id`, {% data variables.product.prodname_cli %} devuelve un menú interactivo para que elijas una ejecución reciente y luego devuelve otro menú interactivo para que elijas un job de la ejecución.

```shell
gh run view <em>run-id</em> --log
```

También puedes utilizar el marcador `--job` para especificar una ID de job. Reemplaza a `job-id` con la ID del job del cual quieres ver las bitácoras.

```shell
gh run view --job <em>job-id</em> --log
```

Puedes utilizar `grep` para buscar la bitácora. Por ejemplo, este comando devolverá todas las entradas de la bitácora que contenga la palabra `error`.

```shell
gh run view --job <em>job-id</em> --log | grep error
```

Para filtrar las bitácoras para encontrar cualquier tipo de paso fallido, utiliza `--log-failed` en vez de `--log`.

```shell
gh run view --job <em>job-id</em> --log-failed
```
