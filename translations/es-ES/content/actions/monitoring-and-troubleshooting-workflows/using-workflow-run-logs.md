---
title: Uso de registros de ejecución de flujo de trabajo
intro: 'Puedes ver, buscar y descargar las bitácoras de cada job en una ejecución de flujo de trabajo.'
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ef8d0a7f1708b8c23705a04496b3d78737aec450
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147521526'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Puedes ver si una ejecución de flujo de trabajo está en curso o completa desde la página de ejecución del flujo de trabajo. Debes haber iniciado sesión en una cuenta de {% data variables.product.prodname_dotcom %} para ver la información de ejecución del flujo de trabajo, incluyendo los casos de repositorios públicos. Para más información, vea "[Permisos de acceso en GitHub](/articles/access-permissions-on-github)".

Si la ejecución está completa, puedes ver si el resultado fue exitoso, fallido, cancelado o neutral. Si la ejecución falló, puedes ver y buscar en los registros de construcción para diagnosticar la falla y volver a ejecutar el flujo de trabajo. También puedes ver los minutos de ejecución facturables para jobs, o descargar bitácoras y artefactos de compilación.

{% data variables.product.prodname_actions %} usa la API de verificaciones para generar estados, resultados y registros para un flujo de trabajo. {% data variables.product.prodname_dotcom %} crea una nueva comprobación de suite para cada ejecución de flujo de trabajo. La comprobación de suite contiene una ejecución de comprobación para cada trabajo en el flujo de trabajo, y cada trabajo incluye diferentes pasos. {% data variables.product.prodname_actions %} se ejecutan como un paso en un flujo de trabajo. Para más información sobre Checks API, vea "[Comprobaciones](/rest/reference/checks)".

{% data reusables.actions.invalid-workflow-files %}

## Ver registros para diagnosticar fallas

Si falla la ejecución de su flujo de trabajo, puedes ver qué paso provocó el error y revisar los registros de construcción del paso que falló para solucionar el problema. Puedes ver el tiempo que demoró cada paso en ejecutarse. También puedes copiar un enlace permanente a una línea específica en el archivo de registro para compartir con tu equipo. {% data reusables.repositories.permissions-statement-read %}

Adicionalmente a los pasos que se configuraron en el archivo de flujo de trabajo, {% data variables.product.prodname_dotcom %} agrega dos pasos adicionales a cada job para configurar y completar la ejecución del flujo de trabajo. Estos pasos se registran en la ejecución del flujo de trabajo con los nombres de "Set up job" y "Complete job".

Para trabajos que se ejecutan en ejecutores hospedados en {% data variables.product.prodname_dotcom %}, "Configurar un trabajo" registra los detalles de la imagen del ejecutor, e incluye un enlace a la lista de herramientas preinstaladas que estaban presentes en la máquina del ejecutor.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %} {% data reusables.repositories.view-failed-job-results %} {% data reusables.repositories.view-specific-line %}

## Buscar registros

Puedes buscar en los registros de construcción un paso en particular. Cuando buscas registros, solo los pasos ampliados se incluyen en los resultados. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. En la esquina superior derecha de la salida del registro, escriba una consulta de búsqueda en el cuadro de búsqueda **Buscar registros**.
![Cuadro de búsqueda para buscar registros](/assets/images/help/repository/search-log-box-updated-2.png)

## Descargar bitácoras

Puedes descargar los archivos de bitácora desde tu ejecución de flujo de trabajo. También puedes descargar los artefactos de un flujo de trabajo. Para más información, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)". {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. En la esquina superior derecha, haga clic en {% octicon "gear" aria-label="The gear icon" %} y seleccione **Descargar archivo de registro**.
  
  ![Menú desplegable para descargar registros](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  

  {% ifversion re-run-jobs %}

  {% note %}

  **Nota**: Al descargar el archivo de registro para un flujo de trabajo que se ha vuelto a ejecutar parcialmente, este archivo solo incluirá los trabajo que se hayan ejecutado de nuevo. Para obtener un conjunto completo de bitácoras para los jobs que se ejecutaron desde un flujo de trabajo, debes descargar los archivos de bitácora de los intentos de ejecución previos que ejecutaron los otros jobs.

  {% endnote %}

  {% endif %}

## Borrar bitácoras

Puedes borrar los archivos de bitácora de tu ejecución de flujo de trabajo. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. En la esquina superior derecha, haz clic en el {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
    
    ![Icono de Kebab horizontal](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    
2. Para eliminar los archivos de registro, haga clic en el botón **Eliminar todos los registros** y revise el mensaje de confirmación. 
  
  ![Borrar todas las bitácoras](/assets/images/help/repository/delete-all-logs-updated-2.png)
  
Después de eliminar los registros, se quita el botón **Eliminar todos los registros** para indicar que no hay archivos de registro en la ejecución de flujo de trabajo.

## Visualizar las bitácoras con {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

Para ver el registro de un trabajo específico, use el subcomando `run view`. Reemplace `run-id` por el id. de la ejecución para la que quiera ver los registros. {% data variables.product.prodname_cli %} devuelve un menú interactivo para que elijas un job de la ejecución. Si no especifica `run-id`, {% data variables.product.prodname_cli %} devuelve un menú interactivo para que seleccione una ejecución reciente y, después, devuelve otro menú interactivo para que elija un trabajo de la ejecución.

```shell
gh run view <em>run-id</em> --log
```

También puede usar la marca `--job` para especificar un identificador de trabajo. Reemplace `job-id` por el id. del trabajo para el que quiera ver los registros.

```shell
gh run view --job <em>job-id</em> --log
```

Puede usar `grep` para buscar en el registro. Por ejemplo, este comando devolverá todas las entradas de registro que contengan la palabra `error`.

```shell
gh run view --job <em>job-id</em> --log | grep error
```

Para filtrar los registros de los pasos con errores, use `--log-failed` en lugar de `--log`.

```shell
gh run view --job <em>job-id</em> --log-failed
```
