---
title: Tipos de eventos de los informes de problemas
intro: 'Para la API de Eventos de Informes de Problemas y la API de Línea de Tiempo, aprende sobre cada tipo de evento, la acción que los activa en {% data variables.product.prodname_dotcom %} y las propiedades exclusivas de cada uno de ellos.'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 2459e4fbdcd4e857c603b7aa7354d4f2d5d6a062
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878379'
---
Los eventos de incidencia se desencadenan mediante la actividad en incidencias y solicitudes de incorporación de cambios, y están disponibles en [Issue Events API](/rest/reference/issues#events) y [Timeline Events API](/rest/reference/issues#timeline). Cada tipo de evento especifica si éste está disponible en la API de Eventos de los Informes de Problemas o en la de Eventos de la Línea de tiempo.

La API de REST de GitHub considera a cada solicitud de extracción como un informe de problemas, pero no todos los informes de problemas consitutyen una solicitud de extracción. Por esta razón, las terminales de los Eventos de Informes de Problemas y las de Eventos de la Línea de Tiempo podrían devolver tanto informes de problemas como solicitudes de extracción en su respuesta. Las solicitudes de incorporación de cambios tienen una propiedad `pull_request` en el objeto `issue`. Ya que todas las solicitudes de extracción son informes de problemas, las cantidades de unas y de otras no se duplican en un repositorio. Por ejemplo, si abres tu primer informe de problemas en un repositorio, la cantidad será de 1. Si después abres una solicitud de extracción, a cantidad será de 2. Cada tipo de evento especifica si éste ocurre en solicitudes de extracción, informes de problemas, o en ambos.

## Propiedades comunes del objeto del evento de los informes de problemas

Los eventos de los informes de problemas tienen la misma estructura de objeto, excepto aquellos eventos que solo se encuentran disponibles en la API de Eventos de la Línea de Tiempo. Algunos eventos también incluyen propiedades adicionales que proporcionan más contexto acerca de los recursos de éstos. Consulta el evento específico para encontrar más detalles sobre cualquier propiedad que difiera de este formato de objeto.

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

El informe de problemas o solicitud de extracción se agregó a un tablero de proyecto. {% data reusables.projects.disabled-projects %}

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Incidencias</li><li>Solicitud de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## asignado

El informe de problemas o solicitud de extracción se asignó al usuario.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X**  |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## automatic_base_change_failed

GitHub intentó cambiar la rama base de la solicitud de extracción automáticamente y sin éxito.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** |  |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

GitHub intentó cambiar la rama base de la solicitud de extracción automáticamente con éxito.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## base_ref_changed

La rama base de referencia de la solicitud de extracción cambió.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## closed

Se cerró el informe de problemas o la solicitud de extracción. Cuando `commit_id` está presente, identifica la confirmación que ha cerrado la incidencia, mediante la sintaxis "cierres / revisiones". Para más información sobre la sintaxis, vea "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)".

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## comentado

Un comentario se agregó al informe de problemas o solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> |  | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.timeline_events_object_properties %}

Nombre | Tipo | Descripción
-----|------|--------------
`url` | `string` | La URL de la API de REST que recuperará el comentario del informe de problemas.
`html_url` | `string` | La URL de HTML para el comentario del informe de problemas.
`issue_url` | `string` | La URL de HTML para el informe de problemas.
`id` | `integer` | Identificador único del evento.
`node_id` | `string` | [Identificador de nodo global](/graphql/guides/using-global-node-ids) del evento.
`user` | `object` | La persona que comentó en el informe de problemas.
`created_at` | `string` | La marca de tiempo que indica cuándo se agregó el comentario.
`updated_at` | `string` | La marca de tiempo que indica cuándo se actualizó o creó el comentario en caso de que éste jamás se haya actualizado.
`author_association` | `string` | Los permisos que tiene el usuario en el repositorio del informe de problemas. Por ejemplo, el valor sería `"OWNER"` si el propietario del repositorio ha creado un comentario.
`body` | `string` | El cuerpo de texto del comentario.
`event` | `string` | El valor del evento es `"commented"`.
`actor` | `object` | La persona que generó el evento.

## confirmadas

Se ha agregado una confirmación a la rama `HEAD` de la solicitud de incorporación de cambios.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> |  | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.timeline_events_object_properties %}

Nombre | Tipo | Descripción
-----|------|--------------
`sha` | `string` | El SHA de la confirmación en la solicitud de extracción.
`node_id` | `string` | [Identificador de nodo global](/graphql/guides/using-global-node-ids) del evento.
`url` | `string` | La URL de la API de REST que recuperará la confirmación.
`html_url` | `string` | La URL de HTML de la confirmación.
`author` | `object` | La persona que autorizó la confirmación.
`committer` | `object` | La persona que confirmó la confirmación en nombre del autor.
`tree` | `object` | El árbol de Git de la confirmación.
`message` | `string` | El mensaje de la confirmación.
`parents` | `array of objects` | Una lista de confirmaciones padre.
`verification` | `object` | El resultado de verificar la firma de la confirmación. Para más información, vea "[Objeto de verificación de firma](/rest/reference/git#get-a-commit)".
`event` | `string` | El valor del evento es `"committed"`.

## connected

El informe de problemas o solicitud de extracción se vinculó a otro informe de problemas o solicitud de extracción. Para más información, vea "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

La solicitud de extracción se convirtió a modo borrador.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

El informe de problemas se creó convirtiendo una nota en un tablero de proyecto para un informe de problemas. {% data reusables.projects.disabled-projects %}

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## cross-referenced

El informe de problemas o solicitud de extración se referenció desde otro informe de problemas o solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> |  | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.timeline_events_object_properties %}

Nombre | Tipo | Descripción
-----|------|--------------
`actor` | `object` | La persona que generó el evento.
`created_at` | `string` | La marca de tiempo que indica cuándo se agregó la referencia cruzada.
`updated_at` | `string` | La marca de tiempo que indica cuándo se actualizó o creó la referencia cruzada en caso de que ésta jamás se haya actualizado.
`source` | `object` | La solicitud de extracción o informe de problemas que agregó la referencia cruzada.
`source[type]` | `string` | Este valor siempre será `"issue"` ya que las solicitudes de incorporación de cambios son de tipo incidencia. En la API de Eventos de la Línea de Tiempo solo se devolverán los eventos de referencia cruzada que se activen con informes de problemas o solicitudes de extracción. Para determinar si la incidencia que ha desencadenado el evento es una solicitud de incorporación de cambios, puede comprobar si existe el objeto `source[issue][pull_request]`.
`source[issue]` | `object` | Objeto `issue` que ha agregado la referencia cruzada.
`event` | `string` | El valor del evento es `"cross-referenced"`.

## demilestoned

El informe de problemas o solicitud de extracción se elimnó de un hito.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | Objeto de hito.
`milestone[title]` | `string` | Título del hito.

## deployed

Se desplegó la solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

El ambiente de despliegue de la solicitud de extracción cambió.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** |  |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## desconectado

El informe de problemas o solicitud de extracción se desvinculó de otro informe de problemas o solicitud de extracción. Para más información, vea "[Vinculación de una solicitud de incorporación de cambios a una incidencia](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

Se ha eliminado la rama `HEAD` de la solicitud de incorporación de cambios.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

Se ha restaurado la rama `HEAD` de la solicitud de incorporación de cambios a la última confirmación conocida.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

## head_ref_force_pushed

La rama HEAD de la solicitud de cambios se subió forzadamente.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## etiquetado

Se agregó una etiqueta al informe de problemas o solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## locked

Se bloqueó el informe de problemas o la solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | Motivo por el que se ha bloqueado una conversación de solicitud de incorporación de cambios o incidencia, si se ha proporcionado una.

## mentioned

`actor` era `@mentioned` en una incidencia o el cuerpo de una solicitud de incorporación de cambios.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

Un usuario con permisos de escritura marcó un informe de problemas como el duplicado de otro, o el mismo caso con alguna solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## combinados

Se fusionó la solicitud de extracción. El atributo `commit_id` es el SHA1 de la confirmación `HEAD` que se ha combinado. `commit_repository` siempre es lo mismo que el repositorio principal.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## milestoned

El informe de problemas o solicitud de extracción se agregó a un hito.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | Objeto de hito.
`milestone[title]` | `string` | Título del hito.

## moved_columns_in_project

El informe de problemas o solicitud de extracción se movió entre columnas en un tablero de proyecto. {% data reusables.projects.disabled-projects %}

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %} `previous_column_name` | `string` | Nombre de la columna desde la que se ha movido la incidencia.

## pinned

Se fijó el informe de problemas.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

Un borrador de solicitud de cambios se marcó como listo para revisión.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## referenced

Se referenció al informe de problemas desde un mensaje de confirmación. El atributo `commit_id` es la confirmación de tipo SHA1 de donde ha sucedido y commit_repository es donde se ha insertado esa confirmación.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

El informe de problemas o solicitud de extracción se eliminó de un tablero de proyecto. {% data reusables.projects.disabled-projects %}

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## renombrado

Se cambió el informe de problemas o la solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} `rename` | `object` | Detalles del nombre.
`rename[from]` | `string` | Nombre anterior.
`rename[to]` | `string` | Nuevo nombre.

## reabre

El informe de problemas o solicitud de extracción se reabrió.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

Se destituyó la revisión de la solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-dismissed-properties %}

## review_requested

Se solicitó una revisión de una solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## review_request_removed

Se eliminó una solicitud de revisión para una solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## reviewed

Se revisió la solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Solicitudes de incorporación de cambios</li></ul> |  | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.timeline_events_object_properties %}

Nombre | Tipo | Descripción
-----|------|--------------
`id` | `integer` | Identificador único del evento.
`node_id` | `string` | [Identificador de nodo global](/graphql/guides/using-global-node-ids) del evento.
`user` | `object` | La persona que comentó en el informe de problemas.
`body` | `string` | El texto de resúmen de la revisión.
`commit_id` | `string` | El SHA de la última confirmación en la soicitud de extracción al momento de la revisión.
`submitted_at` | `string` | La marca de tiempo que indica cuándo se emitió la revisión.
`state` | `string` | El estado de la revisión emitida. Puede ser: `commented`, `changes_requested` o `approved`.
`html_url` | `string` | La URL de HTML para la revisión.
`pull_request_url` | `string` | La URL de la API de REST que recuperará la solicitud de extracción.
`author_association` | `string` | Los permisos que tiene el usuario en el repositorio del informe de problemas. Por ejemplo, el valor sería `"OWNER"` si el propietario del repositorio ha creado un comentario.
`_links` | `object` | `html_url` y `pull_request_url`.
`event` | `string` | El valor del evento es `"reviewed"`.

## subscribed

Alguien se suscribió para recibir notificaciones para un informe de problemas o solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## transferred

El informe de problemas se transfirió a otro repositorio.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## unassigned

De desasignó a un usuario del informe de problemas.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## unlabeled

La etiqueta se eliminó del informe de problemas.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## unlocked

Se desbloqueó el informe de problemas.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | Motivo por el que se ha bloqueado una conversación de solicitud de incorporación de cambios o incidencia, si se ha proporcionado una.

## unmarked_as_duplicate

Un informe de problemas que algún usuario había marcado previamente como duplicado de otro informe de problemas ya no se considera como duplicado, o el mismo caso con solicitudes de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## unpinned

El informe de problemas dejó de fijarse.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

## unsubscribed

Alguien se desuscribió de recibir notificaciones para un informe de problemas o solicitud de extracción.

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> |  | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}
## user_blocked

El propietario de una organización bloqueó a un usuario de la misma. Esto se ha realizado [mediante uno de los comentarios del usuario bloqueado sobre la incidencia](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment).

### Disponibilidad

|Tipo de problema | API de eventos de Informes de Problemas | API de eventos de la línea de Tiempo|
|:----------|:----------------:|:-----------------:|
| <ul><li>Issues</li><li>Solicitudes de incorporación de cambios</li></ul> | **X** | **X** |

### Propiedades del objeto del evento

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
