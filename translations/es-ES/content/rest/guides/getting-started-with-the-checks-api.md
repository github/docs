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
shortTitle: Introducción - API de verificaciones
---

## Resumen

En vez de proporcionar estados de creación de pase/fallo, las GitHub Apps pueden reportar estados enriquecidos, anotar información detallada en las líneas de código y re-ejecutar las pruebas. La funcionalidad de la API de Verificaciones se encuentra disponible exclusivamente para tus GitHub Apps.

Para obtener un ejemplo de cómo utilizar la API de Verificaciones con una {% data variables.product.prodname_github_app %}, consulta la sección "[Crear pruebas de IC con la API de verificaciones](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)".

## Acerca de las suites de verificaciones

Cuando alguien carga código a un repositorio, GitHub crea una suite de verificación para la última confirmación. Una suite de verificación es un conjunto de [ejecuciones de verificación](/rest/reference/checks#check-runs) que crea una sola GitHub App para una confirmación específica. Las suites de Verificación resumen el estado y la conclusión de la ejecución de verificación que incluye dicha suite.

![Flujo de trabajo de las suites de verificación](/assets/images/check_suites.png)

La suite de verificación reporta la `conclusion` de la ejecución de verificación con la prioridad más alta en `conclusion` de la suite de verificación. Por ejemplo, si tres ejecuciones de verificación tienen conclusiones de `timed_out`, `success`, y `neutral`, la conclusión de la suite de verificación será `timed_out`.

Predeterminadamente, GitHub crea una suite de verificación automáticamente cuando se carga el código al repositorio. Este flujo predeterminado evía el evento `check_suite` (con la acción `requested`) a todas las GitHub Apps que tengan el permiso de `checks:write`. Cuando tu GitHub App recibe el evento `check_suite`, esta púede crear ejecuciones de verificación nuevas para la última confirmación. GitHub agrega las ejecuciones de verificación nuevas a la [suite de verificación](/rest/reference/checks#check-suites) correcta con base en el repositorio y SHA de dicha ejecución de verificación.

Si no quieres utilizar el flujo automático predeterminado, puedes controlar cuando creas las suites de verificación. Para cambiar la configuración predeterminada para la creación de suites de verificación, utiliza la terminal [Actualizar las preferencias del repositorio para las suites de verificación](/rest/reference/checks#update-repository-preferences-for-check-suites). Todos los cambios que se realicen en la configuración del flujo automático se registran en la bitácora de auditoría del repositorio. Si inhabilitaste el flujo automático, puedes crear una suite de verificación utilizando la terminal [Crear una suite de verificación](/rest/reference/checks#create-a-check-suite). Debes seguir utilizando la terminal [Crear una ejecución de verificación](/rest/reference/checks#create-a-check-run) para proporcionar retroalimentación sobre una confirmación.

{% data reusables.apps.checks-availability %}

Para utilizar la API de suites de verificación, la GitHub App debe tener el permiso de `checks:write` y también suscribirse al webhook de [check_suite](/webhooks/event-payloads/#check_suite).

{% data reusables.shortdesc.authenticating_github_app %}

## Acerca de las ejecuciones de verificación

Una ejecución de verificación es una prueba individual que forma parte de una suite de verificación. Cada ejecución incluye un estado y una conclusión.

![Flujo de trabajo de las ejecuciones de verificación](/assets/images/check_runs.png)

Si una ejecución de verificación permanece en un estado incompleto por más de 14 días, entonces la `conclusion` de ésta se convierte en `stale` y aparece en {% data variables.product.prodname_dotcom %} como quedada con el {% octicon "issue-reopened" aria-label="The issue-reopened icon" %}. Solo {% data variables.product.prodname_dotcom %} puede marcar las ejecuciones de verificación como `stale`. Para obtener más información acerca de las conclusiones posibles para una ejecución de verificación, consulta el [parámetro de `conclusion`](/rest/reference/checks#create-a-check-run--parameters).

Puedes crear la ejecución de verificación tan pronto como recibas el webhook de [`check_suite`](/webhooks/event-payloads/#check_suite), aún si ésta todavía no se completa. Puedes actualizar el `status` de la ejecución de verificación ya que se completa con los valores `queued`, `in_progress`, o `completed`, y puedes actualizar la `output` conforme vayan estando disponibles los detalles adicionales. Una ejecución de verificación puede contener estampas de tiempo, un enlace para encontrar más detalles en tu sitio externo, anotaciones detalladas para líneas de código específcas, e información acerca del análisis que se llevó a cabo.

![Anotaciones de la ejecución de verificación](/assets/images/check_run_annotations.png)

Una verificación también puede volverse a ejecutar en la IU de GitHub. Consulta la sección "[Acerca de las verificaciones de estado](/articles/about-status-checks#checks)" para obtener más detalles. Cuando esto ocurre, la GitHub App que creó la ejecución de verificación recibirá el webhook [`check_run`](/webhooks/event-payloads/#check_run) que solicita una ejecución de verificación nueva. Si creas una ejecución de verificación sin crear una suite de verificación, GitHub la creará para tí automáticamente.

{% data reusables.apps.checks-availability %}

Para utilizar la API de Ejecuciones de Verificación, la GitHub App debe tener el permiso de `checks:write` y también debe poder suscribirse al webhook de [check_run](/webhooks/event-payloads#check_run).

## Ejecuciones de verificación y acciones solicitadas

Cuando configuras una ejecución de verificación con las acciones solicitadas (no se debe confundir esto con {% data variables.product.prodname_actions %}), puedes mostrar un botón en la vista de la solicitud de extracción en {% data variables.product.prodname_dotcom %} que permita a las personas solicitar tu {% data variables.product.prodname_github_app %} para llevar a cabo tareas adicionales.

Por ejemplo, una app de limpieza de código puede utilizar las acciones solicitadas para mostrar un botón en una solicitud de extracción para arreglar automáticamente los errores de sintaxis detectados.

Para crear un botón que pueda solicitarle a tu app acciones adicionales, utiliza el [objeto`actions`](/rest/reference/checks#create-a-check-run--parameters) cuando [Creas una ejecución de verificación](/rest/reference/checks/#create-a-check-run). Por ejemplo, el objeto `actions` que se muestra a continuación muestra un botón en una solicitud de extracción con la etiqueta "Fix This". El botón aparece después de que se completa la ejecución de verificación.

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![Botón de acción solicitada para la ejecución de verificación](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Cuando un usuario da clic en el botón, {% data variables.product.prodname_dotcom %} envía el [webhook de `check_run.requested_action`](/webhooks/event-payloads/#check_run) a tu app. Cuando tu app recibe el evento de webhook de `check_run.requested_action`, este puede buscar la clave de `requested_action.identifier` en la carga útil del webhook para determinar qué botón se pulsó y llevar a cabo la tarea solicitada.

Para obtener un ejemplo detallado de cómo configurar las acciones solicitadas con la API de Verificaciones, consulta la sección "[Crear pruebas de IC con la API de verificaciones](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test)".

{% ifversion fpt or ghec %}
## Retención de datos de verificaciones

{% data reusables.pull_requests.retention-checks-data %}
{% endif %}
