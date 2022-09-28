---
title: Empezar con la API de Verificaciones
intro: 'La API de Ejecuciones de Verificación te permite crear GitHub Apps que ejecuten verificaciones poderosas contra los cámbios de código en un repositorio. Puedes crear apps que lleven a cabo integración contínua, limpieza de código, o servicios de escaneo de código y que proporcionen retroalimentación detallada en las confirmaciones.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Checks API
ms.openlocfilehash: 6d98940d9cf4f4fd534034e142aa3d86a0900406
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710247'
---
## Información general

En vez de proporcionar estados de creación de pase/fallo, las GitHub Apps pueden reportar estados enriquecidos, anotar información detallada en las líneas de código y re-ejecutar las pruebas. La funcionalidad de la API de Verificaciones se encuentra disponible exclusivamente para tus GitHub Apps.

Para obtener un ejemplo de cómo usar Checks API con un {% data variables.product.prodname_github_app %}, vea "[Creación de pruebas de CI con Checks API](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)".

## Acerca de las suites de verificaciones

Cuando alguien carga código a un repositorio, GitHub crea una suite de verificación para la última confirmación. Un conjunto de comprobaciones es una colección de [ejecuciones de comprobación](/rest/reference/checks#check-runs) creada por una única aplicación de GitHub para una confirmación concreta. Las suites de Verificación resumen el estado y la conclusión de la ejecución de verificación que incluye dicha suite.

![Flujo de trabajo de las suites de verificación](/assets/images/check_suites.png)

El conjunto de comprobaciones notifica el valor `conclusion` de prioridad más alta de la ejecución de comprobación del valor `conclusion` del conjunto de comprobaciones. Por ejemplo, si tres ejecuciones de comprobación tienen las conclusiones `timed_out`, `success` y `neutral`, la conclusión del conjunto de comprobaciones será `timed_out`.

Predeterminadamente, GitHub crea una suite de verificación automáticamente cuando se carga el código al repositorio. Este flujo predeterminado envía el evento `check_suite` (con la acción `requested`) a todas las aplicaciones de GitHub que tengan el permiso `checks:write`. Cuando la aplicación de GitHub recibe el evento `check_suite`, puede crear ejecuciones de comprobación para la última confirmación. GitHub agrega automáticamente nuevas ejecuciones de comprobación al [conjunto de comprobaciones](/rest/reference/checks#check-suites) correcto en función del repositorio de la ejecución de comprobación y SHA.

Si no quieres utilizar el flujo automático predeterminado, puedes controlar cuando creas las suites de verificación. A fin de cambiar la configuración predeterminada para la creación de conjuntos de comprobación, use el punto de conexión [Actualización de las preferencias del repositorio para conjuntos de comprobación](/rest/reference/checks#update-repository-preferences-for-check-suites). Todos los cambios que se realicen en la configuración del flujo automático se registran en la bitácora de auditoría del repositorio. Si ha deshabilitado el flujo automático, puede crear un conjunto de comprobaciones mediante el punto de conexión [Crear un conjunto de comprobaciones](/rest/reference/checks#create-a-check-suite). Debe seguir usando el punto de conexión [Crear una ejecución de comprobación](/rest/reference/checks#create-a-check-run) para proporcionar comentarios sobre una confirmación.

{% data reusables.apps.checks-availability %}

Para usar la API de conjuntos de comprobaciones, la aplicación de GitHub debe tener el permiso `checks:write` y también se puede suscribir al webhook [check_suite](/webhooks/event-payloads/#check_suite).

{% data reusables.shortdesc.authenticating_github_app %}

## Acerca de las ejecuciones de verificación

Una ejecución de verificación es una prueba individual que forma parte de una suite de verificación. Cada ejecución incluye un estado y una conclusión.

![Flujo de trabajo de las ejecuciones de verificación](/assets/images/check_runs.png)

Si una ejecución de comprobación permanece en un estado incompleto durante más de 14 días, su valor `conclusion` se convierte en `stale` y aparece en {% data variables.product.prodname_dotcom %} como obsoleta con {% octicon "issue-reopened" aria-label="The issue-reopened icon" %}. Solo {% data variables.product.prodname_dotcom %} puede marcar las ejecuciones de comprobación como `stale`. Para más información sobre las posibles conclusiones de una ejecución de comprobación, vea el [parámetro `conclusion`](/rest/reference/checks#create-a-check-run--parameters).

En cuanto reciba el webhook [`check_suite`](/webhooks/event-payloads/#check_suite), puede crear la ejecución de comprobación, incluso si la comprobación no está completa. Puede actualizar el valor `status` de la ejecución de comprobación a medida que se completa con los valores `queued`, `in_progress` o `completed`, y puede actualizar `output` a medida que haya más detalles disponibles. Una ejecución de verificación puede contener estampas de tiempo, un enlace para encontrar más detalles en tu sitio externo, anotaciones detalladas para líneas de código específcas, e información acerca del análisis que se llevó a cabo.

![Anotaciones de la ejecución de verificación](/assets/images/check_run_annotations.png)

Una verificación también puede volverse a ejecutar en la IU de GitHub. Vea "[Acerca de las comprobaciones de estado](/articles/about-status-checks#checks)" para más información. Cuando esto ocurre, la aplicación de GitHub que ha creado la ejecución de comprobación recibirá el webhook [`check_run`](/webhooks/event-payloads/#check_run) que solicita una nueva ejecución de comprobación. Si creas una ejecución de verificación sin crear una suite de verificación, GitHub la creará para tí automáticamente.

{% data reusables.apps.checks-availability %}

Para usar Check Runs API, la aplicación de GitHub debe tener el permiso `checks:write` y también se puede suscribir al webhook [check_run](/webhooks/event-payloads#check_run).

## Ejecuciones de verificación y acciones solicitadas

Cuando configuras una ejecución de verificación con las acciones solicitadas (no se debe confundir esto con {% data variables.product.prodname_actions %}), puedes mostrar un botón en la vista de la solicitud de extracción en {% data variables.product.prodname_dotcom %} que permita a las personas solicitar tu {% data variables.product.prodname_github_app %} para llevar a cabo tareas adicionales.

Por ejemplo, una app de limpieza de código puede utilizar las acciones solicitadas para mostrar un botón en una solicitud de extracción para arreglar automáticamente los errores de sintaxis detectados.

Para crear un botón que pueda solicitar acciones adicionales a la aplicación, use el [objeto `actions`](/rest/reference/checks#create-a-check-run--parameters) al [crear una ejecución de comprobación](/rest/reference/checks/#create-a-check-run). Por ejemplo, el objeto `actions` siguiente muestra un botón en una solicitud de incorporación de cambios con la etiqueta "Fix this". El botón aparece después de que se completa la ejecución de verificación.

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![Botón de acción solicitada para la ejecución de verificación](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Cuando un usuario hace clic en el botón, {% data variables.product.prodname_dotcom %} envía el [webhook `check_run.requested_action`](/webhooks/event-payloads/#check_run) a la aplicación. Cuando la aplicación recibe un evento de webhook `check_run.requested_action`, puede buscar la clave `requested_action.identifier` en la carga del webhook para determinar en qué botón se ha hecho clic y realizar la tarea solicitada.

Para obtener un ejemplo detallado de cómo configurar acciones solicitadas con Checks API, vea "[Creación de pruebas de CI con Checks API](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)".

{% ifversion fpt or ghec %}
## Retención de los datos de las comprobaciones

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
