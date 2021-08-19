---
title: Tipos de eventos de los informes de problemas
intro: 'Para la API de Eventos de Informes de Problemas y la API de Línea de Tiempo, aprende sobre cada tipo de evento, la acción que los activa en {% data variables.product.prodname_dotcom %} y las propiedades exclusivas de cada uno de ellos.'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Events
---
Los eventos de informes de problemas se activan dependiendo de la actividad en las solicitudes de extracción e informes de problemas y se encuentran disponibles en la [API de eventos de informes de problemas](/v3/issues/events) y en la [API de Eventos de la Línea de Tiempo](/v3/issues/timeline). Cada tipo de evento especifica si éste está disponible en la API de Eventos de los Informes de Problemas o en la de Eventos de la Línea de tiempo.


La API de REST de GitHub considera a cada solicitud de extracción como un informe de problemas, pero no todos los informes de problemas consitutyen una solicitud de extracción. Por esta razón, las terminales de los Eventos de Informes de Problemas y las de Eventos de la Línea de Tiempo podrían devolver tanto informes de problemas como solicitudes de extracción en su respuesta. Las solicitudes de extracción tienen una propiedad de `pull_request` en el objeto del `issue`. Ya que todas las solicitudes de extracción son informes de problemas, las cantidades de unas y de otras no se duplican en un repositorio. Por ejemplo, si abres tu primer informe de problemas en un repositorio, la cantidad será de 1. Si después abres una solicitud de extracción, a cantidad será de 2. Cada tipo de evento especifica si éste ocurre en solicitudes de extracción, informes de problemas, o en ambos.

### Propiedades comunes del objeto del evento de los informes de problemas

Los eventos de los informes de problemas tienen la misma estructura de objeto, excepto aquellos eventos que solo se encuentran disponibles en la API de Eventos de la Línea de Tiempo. Algunos eventos también incluyen propiedades adicionales que proporcionan más contexto acerca de los recursos de éstos. Consulta el evento específico para encontrar más detalles sobre cualquier propiedad que difiera de este formato de objeto.

{% data reusables.issue-events.issue-event-common-properties %}

### added_to_project

El informe de problemas o solicitud de extracción se agregó a un tablero de proyecto. {% data reusables.projects.disabled-projects %}

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitud de extracción</li></ul>    |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### assigned

El informe de problemas o solicitud de extracción se asignó al usuario.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>    |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.assignee-properties %}

### automatic_base_change_failed

GitHub intentó cambiar la rama base de la solicitud de extracción automáticamente y sin éxito.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>    |                  **X**                  |                                      |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### automatic_base_change_succeeded

GitHub intentó cambiar la rama base de la solicitud de extracción automáticamente con éxito.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>    |                  **X**                  |                                      |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### base_ref_changed

La rama base de referencia de la solicitud de extracción cambió.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>    |                  **X**                  |                                      |

 ### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### closed

Se cerró el informe de problemas o la solicitud de extracción. Cuando está presente la `commit_id`, esta identifica a la confirmación que cerró el informe de problemas utilizando la sintaxis de "cerrados/arreglados". Para obtener más información acerca de la sintaxis, consulta la sección "[Enlazar una solicitud de extracción con un informe de problemas](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>    |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### commented

Un comentario se agregó al informe de problemas o solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>    |                                         |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.timeline_events_object_properties %}

| Nombre                   | Tipo        | Descripción                                                                                                                                                               |
| ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                    | `secuencia` | La URL de la API de REST que recuperará el comentario del informe de problemas.                                                                                           |
| `html_url`               | `secuencia` | La URL de HTML para el comentario del informe de problemas.                                                                                                               |
| `issue_url`              | `secuencia` | La URL de HTML para el informe de problemas.                                                                                                                              |
| `id`                     | `número`    | El identificador único del evento.                                                                                                                                        |
| `node_id`                | `secuencia` | La [ID de Nodo Global](/v4/guides/using-global-node-ids) del evento.                                                                                                      |
| `usuario`                | `objeto`    | La persona que comentó en el informe de problemas.                                                                                                                        |
| `created_at (creado en)` | `secuencia` | La marca de tiempo que indica cuándo se agregó el comentario.                                                                                                             |
| `updated_at`             | `secuencia` | La marca de tiempo que indica cuándo se actualizó o creó el comentario en caso de que éste jamás se haya actualizado.                                                     |
| `author_association`     | `secuencia` | Los permisos que tiene el usuario en el repositorio del informe de problemas. Por ejemplo, el valor sería `"OWNER"` si el propietario del repositorio creó un comentario. |
| `cuerpo`                 | `secuencia` | El cuerpo de texto del comentario.                                                                                                                                        |
| `event`                  | `secuencia` | El valor del evento es `"commented"`.                                                                                                                                     |
| `actor (actor)`          | `objeto`    | La persona que generó el evento.                                                                                                                                          |

### committed

Una confirmación se agregó a la rama `HEAD` de la solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>    |                                         |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.timeline_events_object_properties %}

| Nombre                           | Tipo                | Descripción                                                                                                                                                                                    |
| -------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sha`                            | `secuencia`         | El SHA de la confirmación en la solicitud de extracción.                                                                                                                                       |
| `node_id`                        | `secuencia`         | La [ID de Nodo Global](/v4/guides/using-global-node-ids) del evento.                                                                                                                           |
| `url`                            | `secuencia`         | La URL de la API de REST que recuperará la confirmación.                                                                                                                                       |
| `html_url`                       | `secuencia`         | La URL de HTML de la confirmación.                                                                                                                                                             |
| `autor`                          | `objeto`            | La persona que autorizó la confirmación.                                                                                                                                                       |
| `persona que confirma el cambio` | `objeto`            | La persona que confirmó la confirmación en nombre del autor.                                                                                                                                   |
| `árbol`                          | `objeto`            | El árbol de Git de la confirmación.                                                                                                                                                            |
| `message`                        | `secuencia`         | El mensaje de la confirmación.                                                                                                                                                                 |
| `parents`                        | `matriz de objetos` | Una lista de confirmaciones padre.                                                                                                                                                             |
| `verfication`                    | `objeto`            | El resultado de verificar la firma de la confirmación. Para obtener más información, consulta la sección "[Objeto de verificación de firmas](/v3/git/commits/#signature-verification-object)". |
| `event`                          | `secuencia`         | El valor del evento es `"committed"`.                                                                                                                                                          |

### connected

El informe de problemas o solicitud de extracción se vinculó a otro informe de problemas o solicitud de extracción. Para obtener más información, consulta la sección "[Vincular una solicitud de extracción a un informe de problemas](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>    |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### convert_to_draft

La solicitud de extracción se convirtió a modo borrador.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>    |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### converted_note_to_issue

El informe de problemas se creó convirtiendo una nota en un tablero de proyecto para un informe de problemas. {% data reusables.projects.disabled-projects %}

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### cross-referenced

El informe de problemas o solicitud de extración se referenció desde otro informe de problemas o solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                                         |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.timeline_events_object_properties %}

| Nombre                   | Tipo        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actor (actor)`          | `objeto`    | La persona que generó el evento.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `created_at (creado en)` | `secuencia` | La marca de tiempo que indica cuándo se agregó la referencia cruzada.                                                                                                                                                                                                                                                                                                                                                                               |
| `updated_at`             | `secuencia` | La marca de tiempo que indica cuándo se actualizó o creó la referencia cruzada en caso de que ésta jamás se haya actualizado.                                                                                                                                                                                                                                                                                                                       |
| `source`                 | `objeto`    | La solicitud de extracción o informe de problemas que agregó la referencia cruzada.                                                                                                                                                                                                                                                                                                                                                                 |
| `source[type]`           | `secuencia` | Este valor siempre será `"issue"` ya que las solicitudes de extracción son un tipo de informe de rpoblemas. En la API de Eventos de la Línea de Tiempo solo se devolverán los eventos de referencia cruzada que se activen con informes de problemas o solicitudes de extracción. Puedes verificar si existe el objeto `source[issue][pull_request` para determinar si el informe de problemas que activó el evento es una solicitud de extracción. |
| `source[issue]`          | `objeto`    | El objeto del `issue` que agregó la referencia cruzada.                                                                                                                                                                                                                                                                                                                                                                                             |
| `event`                  | `secuencia` | El valor del evento es `"cross-referenced"`.                                                                                                                                                                                                                                                                                                                                                                                                        |

### demilestoned

El informe de problemas o solicitud de extracción se elimnó de un hito.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | El objeto del hito. `milestone[title]` | `string` | El título del hito.

### deployed

Se desplegó la solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### deployment_environment_changed

El ambiente de despliegue de la solicitud de extracción cambió.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                                      |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### disconnected

El informe de problemas o solicitud de extracción se desvinculó de otro informe de problemas o solicitud de extracción. Para obtener más información, consulta la sección "[Vincular una solicitud de extracción a un informe de problemas](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### head_ref_deleted

Se eliminó la rama `HEAD` de la solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### head_ref_restored

Se restauró la rama `HEAD` de la solicitud de extracción a su última confirmación conocida.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### labeled

Se agregó una etiqueta al informe de problemas o solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

### locked

Se bloqueó el informe de problemas o la solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.sailor-v-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | La razón por la cual se bloqueó un informe de problemas o solicitud de extracción, si es que se proporcionó alguna.

### mentioned

Se `@mentioned` al `actor` en el cuerpo de un informe de problemas o solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### marked_as_duplicate

Un usuario con permisos de escritura marcó un informe de problemas como el duplicado de otro, o el mismo caso con alguna solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### fusionado

Se fusionó la solicitud de extracción. El atributo de `commit_id` es el SHA1 de la confirmación `HEAD` que se fusionó. El `commit_repository` siempre es el mismo que el repositorio principal.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                                      |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### milestoned

El informe de problemas o solicitud de extracción se agregó a un hito.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | El objeto del hito. `milestone[title]` | `string` | El título del hito.

### moved_columns_in_project

El informe de problemas o solicitud de extracción se movió entre columnas en un tablero de proyecto. {% data reusables.projects.disabled-projects %}

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}
`previous_column_name` | `string` | El nombre de la columna desde la cual se movió el informe de problemas.

### pinned

Se fijó el informe de problemas.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### ready_for_review

Se creó una solicitud de extracción que no está en modo borrador.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### referenced

Se referenció al informe de problemas desde un mensaje de confirmación. El atributo `commit_id` es la confirmación de tipo SHA1 de donde eso sucedió y el commit_repository es el lugar donde se cargó esa confirmación.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### removed_from_project

El informe de problemas o solicitud de extracción se eliminó de un tablero de proyecto. {% data reusables.projects.disabled-projects %}

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### renombrado

Se cambió el informe de problemas o la solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
`rename` | `object` | Los detalles del nombre. `rename[from]` | `string` | El nombre anterior. `rename[to]` | `string` | El nombre nuevo.

### reopened

El informe de problemas o solicitud de extracción se reabrió.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### review_dismissed

Se destituyó la revisión de la solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-dismissed-properties %}

### review_requested

Se solicitó una revisión de una solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

### review_request_removed

Se eliminó una solicitud de revisión para una solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

### reviewed

Se revisió la solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Solicitudes de extracción</li></ul>   |                                         |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.timeline_events_object_properties %}

| Nombre               | Tipo        | Descripción                                                                                                                                                               |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                 | `número`    | El identificador único del evento.                                                                                                                                        |
| `node_id`            | `secuencia` | La [ID de Nodo Global](/v4/guides/using-global-node-ids) del evento.                                                                                                      |
| `usuario`            | `objeto`    | La persona que comentó en el informe de problemas.                                                                                                                        |
| `cuerpo`             | `secuencia` | El texto de resúmen de la revisión.                                                                                                                                       |
| `commit_id`          | `secuencia` | El SHA de la última confirmación en la soicitud de extracción al momento de la revisión.                                                                                  |
| `submitted_at`       | `secuencia` | La marca de tiempo que indica cuándo se emitió la revisión.                                                                                                               |
| `state`              | `secuencia` | El estado de la revisión emitida. Puede ser uno de entre: `commented`, `changes_requested`, o `approved`.                                                                 |
| `html_url`           | `secuencia` | La URL de HTML para la revisión.                                                                                                                                          |
| `pull_request_url`   | `secuencia` | La URL de la API de REST que recuperará la solicitud de extracción.                                                                                                       |
| `author_association` | `secuencia` | Los permisos que tiene el usuario en el repositorio del informe de problemas. Por ejemplo, el valor sería `"OWNER"` si el propietario del repositorio creó un comentario. |
| `_links`             | `objeto`    | El `html_url` y `pull_request_url`.                                                                                                                                       |
| `event`              | `secuencia` | El valor del evento es `"reviewed"`.                                                                                                                                      |

### subscribed

Alguien se suscribió para recibir notificaciones para un informe de problemas o solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### transferred

El informe de problemas se transfirió a otro repositorio.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### unassigned

De desasignó a un usuario del informe de problemas.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.assignee-properties %}

### unlabeled

La etiqueta se eliminó del informe de problemas.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

### unlocked

Se desbloqueó el informe de problemas.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.sailor-v-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | La razón por la cual se bloqueó un informe de problemas o solicitud de extracción, si es que se proporcionó alguna.

### unmarked_as_duplicate

Un informe de problemas que algún usuario había marcado previamente como duplicado de otro informe de problemas ya no se considera como duplicado, o el mismo caso con solicitudes de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### unpinned

El informe de problemas dejó de fijarse.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

### unsubscribed

Alguien se desuscribió de recibir notificaciones para un informe de problemas o solicitud de extracción.

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                                         |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

{% if currentVersion == "free-pro-team@latest" %}
### user_blocked

El propietario de una organización bloqueó a un usuario de la misma. Esto se hizo [a través de uno de los comentarios del usuario bloqueado sobre el informe de problemas](/articles/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment).

#### Disponibilidad

| Tipo de Informe de Problemas | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo |
|:---------------------------- |:---------------------------------------:|:------------------------------------:|
| <ul><li>Problemas</li><li>Solicitudes de extracción</li></ul>   |                  **X**                  |                **X**                 |

#### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
