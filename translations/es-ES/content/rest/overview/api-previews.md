---
title: Vistas previas de la API
intro: Puedes utilizar las vistas previas de la API para probar características nuevas y proporcionar retroalimentación antes de que dichas características se hagan oficiales.
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: fe00e2ab78881edab8d0f7704f80f2f20163fdeb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878436'
---
Las vistas previas de la API te permiten probar API nuevas y cambios a los métodos existentes de las API antes de que se hagan oficiales en la API de GitHub.

Durante el periodo de vista previa, podríamos cambiar algunas características con base en la retroalimentación de los desarrolladores. Si realizamos cambios, los anunciaremos en el [blog de desarrolladores](https://developer.github.com/changes/) sin aviso previo.

Para acceder a una versión preliminar de la API, deberás proporcionar un [tipo de medio](/rest/overview/media-types) personalizado en el encabezado `Accept` de las solicitudes. La documentación de características para cada vista previa especifica qué tipo de medios personalizados proporcionar.

{% ifversion ghes < 3.3 %}

## Despliegues ampliados

Ejerce un mayor control sobre las [implementaciones](/rest/reference/repos#deployments) con más información y una granularidad más fina.

**Tipo de medio personalizado:** `ant-man-preview`
**Anunciado:** [06-04-2016](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Reacciones

Administra las [reacciones](/rest/reference/reactions) a las confirmaciones, problemas y comentarios.

**Tipo de medio personalizado:** `squirrel-girl-preview`
**Anunciado:** [12-05-2016](https://developer.github.com/changes/2016-05-12-reactions-api-preview/)
**Actualización:** [07-06-2016](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Escala de tiempo

Obtén una [lista de eventos](/rest/reference/issues#timeline) para un problema o una solicitud de incorporación de cambios.

**Tipo de medio personalizado:** `mockingbird-preview`
**Anunciado:** [23-05-2016](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% endif %}

{% ifversion ghes < 3.3 %}
## Proyectos

Administra [proyectos](/rest/reference/projects).

**Tipo de medio personalizado:** `inertia-preview`
**Anunciado:** [14-09-2016](https://developer.github.com/changes/2016-09-14-projects-api/)
**Actualización:** [27-10-2016](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/) {% endif %} {% ifversion ghes < 3.3 %}

## Búsqueda de confirmación

[Busca confirmaciones](/rest/reference/search).

**Tipo de medio personalizado:** `cloak-preview`
**Anunciado:** [05-01-2017](https://developer.github.com/changes/2017-01-05-commit-search-api/) {% endif %} {% ifversion ghes < 3.3 %}

## Temas del repositorio

Consulta una lista de [temas del repositorio](/articles/about-topics/) en las [llamadas](/rest/reference/repos) que devuelven los resultados del repositorio.

**Tipo de medio personalizado:** `mercy-preview`
**Anunciado:** [31-01-2017](https://github.com/blog/2309-introducing-topics) {% endif %} {% ifversion ghes < 3.3 %}

## Códigos de conducta

Consulta todos los [códigos de conducta](/rest/reference/codes-of-conduct) u obtén el código de conducta que tiene actualmente un repositorio.

**Tipo de medio personalizado:** `scarlet-witch-preview`

{% endif %}

{% ifversion ghes < 3.3 %}

## Webhooks globales

Habilita [webhooks globales](/rest/reference/enterprise-admin#global-webhooks/) para los tipos de eventos de [organización](/webhooks/event-payloads/#organization) y [usuario](/webhooks/event-payloads/#user). Esta vista previa de la API solo está disponible para {% data variables.product.prodname_ghe_server %}.

**Tipo de medio personalizado:** `superpro-preview`
**Anunciado:** [12-12-2017](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% ifversion ghes < 3.3 %}

## Requerir confirmaciones firmadas

Ahora puedes usar la API para administrar la configuración para [requerir confirmaciones firmadas en las ramas protegidas](/rest/reference/repos#branches).

**Tipo de medio personalizado:** `zzzax-preview`
**Anunciado:** [22-02-2018](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures) {% endif %} {% ifversion ghes < 3.3 %}

## Requerir múltiples revisiones de aprobación

Ahora puedes [requerir varias revisiones de aprobación](/rest/reference/repos#branches) para una solicitud de incorporación de cambios mediante la API.

**Tipo de medio personalizado:** `luke-cage-preview`
**Anunciado:** [16-03-2018](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% endif %}

{% ifversion ghes < 3.3 %}

## Detalles de la tarjeta de proyecto

Las respuestas de la API de REST para los [eventos de problema](/rest/reference/issues#events) y los [eventos de escala de tiempo de los problemas](/rest/reference/issues#timeline) ahora devuelven el campo `project_card` para los eventos relacionados con el proyecto.

**Tipo de medio personalizado:** `starfox-preview`
**Anunciado:** [05-09-2018](https://developer.github.com/changes/2018-09-05-project-card-events)

{% endif %}

{% ifversion ghes < 3.3 %}

## Estados de despliegue

Ahora puedes actualizar el valor `environment` de un [estado de implementación](/rest/reference/deployments#create-a-deployment-status) y usar los estados `in_progress` y `queued`. Al crear estados de implementación, ahora puedes usar el parámetro `auto_inactive` para marcar las implementaciones `production` antiguas como `inactive`.

**Tipo de medio personalizado:** `flash-preview`
**Anunciado:** [16-10-2018](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Permisos de creación de repositorios

Ahora puedes configurar si los miembros de la organización pueden crear repositorios y decidir qué tipos de éstos pueden crear. Consulta "[Actualización de una organización](/rest/reference/orgs#update-an-organization)" para obtener más detalles.

**Tipos de medios personalizados:** `surtur-preview`
**Anunciado:** [03-12-2019](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

{% endif %}

{% ifversion ghes < 3.4 %}
## Adjuntos de contenido

Ahora puedes proporcionar más información en GitHub para las URL que enlazan a los dominios registrados si utilizas la API {% data variables.product.prodname_unfurls %}. Consulta "[Uso de datos adjuntos de contenido](/apps/using-content-attachments/)" para obtener más detalles.

**Tipos de medios personalizados:** `corsair-preview`
**Anunciado:** [10-12-2018](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %} {% ifversion ghes < 3.3 %}

## Habilitar e inhabilitar las páginas

Puedes usar los nuevos puntos de conexión de la [API de Pages](/rest/reference/repos#pages) para habilitar o deshabilitar Pages. Para obtener más información sobre Pages, consulta "[Conceptos básicos de Pages de GitHub](/categories/github-pages-basics)".

**Tipos de medios personalizados:** `switcheroo-preview`
**Anunciado:** [14-03-2019](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Listar ramas o solicitudes de extracción para una confirmación

Puedes usar dos puntos de conexión nuevos en la [API de confirmaciones](/rest/reference/repos#commits) para enumerar las ramas o solicitudes de incorporación de cambios para una confirmación.

**Tipos de medios personalizados:** `groot-preview`
**Anunciado:** [11-04-2019](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Actualizar la rama de una solicitud de extracción

Puedes usar un punto de conexión nuevo para [actualizar una rama de solicitud de incorporación de cambios](/rest/reference/pulls#update-a-pull-request-branch) con los cambios de HEAD de la rama ascendente.

**Tipos de medios personalizados:** `lydian-preview`
**Anunciado:** [29-05-2019](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% endif %} {% ifversion ghes < 3.3 %}

## Crear y utilizar plantillas de repositorio

Puedes usar un punto de conexión nuevo para [Crear un repositorio mediante una plantilla](/rest/reference/repos#create-a-repository-using-a-template) y [Crear un repositorio para el usuario autenticado](/rest/reference/repos#create-a-repository-for-the-authenticated-user) que sea un repositorio de plantillas estableciendo el parámetro `is_template` en `true`. [Obtén un repositorio](/rest/reference/repos#get-a-repository) para comprobar si se ha establecido como un repositorio de plantillas mediante la clave `is_template`.

**Tipos de medios personalizados:** `baptiste-preview`
**Anunciado:** [05-07-2019](https://developer.github.com/changes/2019-07-16-repository-templates-api/) {% endif %} {% ifversion ghes < 3.3 %}

## Parámetro de visibilidad nuevo para la API de Repositorios

Puedes establecer y recuperar la visibilidad de un repositorio en la [API de repositorios](/rest/reference/repos).

**Tipos de medios personalizados:** `nebula-preview`
**Anunciado:** [25-11-2019](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/) {% endif %}
