---
title: Vistas previas de la API
intro: Puedes utilizar las vistas previas de la API para probar características nuevas y proporcionar retroalimentación antes de que dichas características se hagan oficiales.
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
---


Las vistas previas de la API te permiten probar API nuevas y cambios a los métodos existentes de las API antes de que se hagan oficiales en la API de GitHub.

Durante el periodo de vista previa, podríamos cambiar algunas características con base en la retroalimentación de los desarrolladores. Si realizamos cambios, lo anunciaremos en el [blog de desarrolladores](https://developer.github.com/changes/) sin aviso previo.

Para acceder a la vista previa de las API, necesitarás proporcionar un [tipo de medios](/rest/overview/media-types) personalizado en el encabezado `Accept` para tus solicitudes. La documentación de características para cada vista previa especifica qué tipo de medios personalizados proporcionar.

{% ifversion ghes < 3.3 %}

## Despliegues ampliados

Ejerce mayo control sobre los [despliegues](/rest/reference/repos#deployments) con más información y granularidad más fina.

**Tipo de medios personalizados:** `ant-man-preview` **Anunciado en:**[2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Reacciones

Administra las [reacciones](/rest/reference/reactions) para las confirmaciones, informes de problemas y comentarios.

**Tipo de medios personalizado:** `squirrel-girl-preview` **Anunciado en:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/) **Actualizado en:** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Línea de tiempo

Obtén una [lista de eventos](/rest/reference/issues#timeline) para un informe de problemas o solictud de extracción.

**Tipo de medios personalizados:** `mockingbird-preview` **Anunciado en:**[2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% endif %}

{% ifversion ghes < 3.3 %}
## Proyectos

Administra [proyectos](/rest/reference/projects).

**Tipo de medios personalizado:** `inertia-preview` **Anunciado en:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/) **Actualizado en:** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)
{% endif %}
{% ifversion ghes < 3.3 %}

## Búsqueda de confirmación

[Busca confirmaciones](/rest/reference/search).

**Tipo de medios personalizados:** `cloak-preview` **Anunciado en:**[2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)
{% endif %}
{% ifversion ghes < 3.3 %}

## Temas del repositorio

Ver una lista de los [temas del repositorio](/articles/about-topics/) en [llamadas](/rest/reference/repos) que devuelven los resultados del mismo.

**Tipo de medios personalizados:** `mercy-preview` **Anunciado en:**[2017-01-31](https://github.com/blog/2309-introducing-topics)
{% endif %}
{% ifversion ghes < 3.3 %}

## Códigos de conducta

Ver todos los [códigos de conducta](/rest/reference/codes-of-conduct) u obtener qué código de conducta tiene actualmente un repositorio.

**Tipo de medios personalizado:** `scarlet-witch-preview`

{% endif %}

{% ifversion ghes < 3.3 %}

## Webhooks globales

Habilita los [webhooks globales](/rest/reference/enterprise-admin#global-webhooks/) para una [organización](/webhooks/event-payloads/#organization) y para los tipos de evento del [usuario](/webhooks/event-payloads/#user). Esta vista previa de la API solo está disponible para {% data variables.product.prodname_ghe_server %}.

**Tipo de medios personalizados:** `superpro-preview` **Anunciado en:**[2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% ifversion ghes < 3.3 %}

## Requerir confirmaciones firmadas

Ahora puedes utilizar la API para administrar la configuración para [requerir confirmaciones firmadas en ramas protegidas](/rest/reference/repos#branches).

**Tipo de medios personalizados:** `zzzax-preview` **Anunciado en:**[2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)
{% endif %}
{% ifversion ghes < 3.3 %}

## Requerir múltiples revisiones de aprobación

Ahora puedes [requerir múltiples revisiones de aprobación](/rest/reference/repos#branches) para una solicitud de extracción que utilice la API.

**Tipo de medios personalizados:** `luke-cage-preview` **Anunciado en:**[2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% endif %}

{% ifversion ghes < 3.3 %}

## Detalles de la tarjeta de proyecto

Las respuestas de la API de REST para los [eventos de los informes de problemas](/rest/reference/issues#events) y para [los eventos de la línea de tiempo de los informes de problemas](/rest/reference/issues#timeline) ahora devuelven el campo `project_card` para los eventos relacionados con los proyectos.

**Tipo de medios personalizados:** `starfox-preview` **Anunciado en:**[2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% endif %}

{% ifversion ghes < 3.3 %}

## Estados de despliegue

Ahora puedes actualizar el `environment` de un [estado de despliegue](/rest/reference/deployments#create-a-deployment-status) y utilizar los estados de `in_progress` y `queued`. Cuando creas estados de despliegue, ahora puedes utilizar el parámetro `auto_inactive` para marcar los despliegues de `production` antiguos como `inactive`.

**Tipo de medios personalizados:** `flash-preview` **Anunciado en:**[2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Permisos de creación de repositorios

Ahora puedes configurar si los miembros de la organización pueden crear repositorios y decidir qué tipos de éstos pueden crear. Consulta la sección "[Actualizar una organización](/rest/reference/orgs#update-an-organization)" para obtener más detalles.

**Tipo de medios personalizados:** `surtur-preview` **Anunciado en:**[2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

{% endif %}

{% ifversion ghes < 3.4 %}
## Adjuntos de contenido

Ahora puedes proporcionar más información en GitHub para las URL que enlazan a los dominios registrados si utilizas la API {% data variables.product.prodname_unfurls %}. Consulta la sección "[Utilizar adjuntos de contenido](/apps/using-content-attachments/)" para obtener más detalles.

**Tipo de medios personalizados:** `corsair-preview` **Anunciado en:**[2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}
{% ifversion ghes < 3.3 %}

## Habilitar e inhabilitar las páginas

Puedes utilizar las terminales nuevas en la [API de páginas](/rest/reference/repos#pages) para habilitar o inhabilitar las Páginas. Para aprender más sobre las páginas, consulta la sección "[Fundamentos de GitHub Pages](/categories/github-pages-basics)".

**Tipo de medios personalizados:** `switcheroo-preview` **Anunciado en:**[2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Listar ramas o solicitudes de extracción para una confirmación

Puedes utilizar dos terminales nuevas en la [API de Confirmaciones](/rest/reference/repos#commits) para listar las ramas o las solicitudes de extracción para una confirmación.

**Tipo de medios personalizados:** `groot-preview` **Anunciado en:**[2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% endif %}

{% ifversion ghes < 3.3 %}

## Actualizar la rama de una solicitud de extracción

Puedes utilizar una terminal nueva para [actualizar una rama de una solicitud de extracción](/rest/reference/pulls#update-a-pull-request-branch) con cambios desde el HEAD de la rama ascendente.

**Tipo de medios personalizados:** `lydian-preview` **Anunciado en:**[2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% endif %}
{% ifversion ghes < 3.3 %}

## Crear y utilizar plantillas de repositorio

Puedes Puedes utilizar una terminal nueva para [crear un repositorio utilizando una plantilla](/rest/reference/repos#create-a-repository-using-a-template) y para [crear un repositorio para el usuario autenticado](/rest/reference/repos#create-a-repository-for-the-authenticated-user) que constituye un repositorio de plantilla si configuras el parámetro `is_template` como `true`. [Obten un repositorio](/rest/reference/repos#get-a-repository) para verificar si se configuró como un repositorio de plantilla utilizando la clave `is_template`.

**Tipos de medios personalizados:** `baptiste-preview` **Anunciado en:**[2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)
{% endif %}
{% ifversion ghes < 3.3 %}

## Parámetro de visibilidad nuevo para la API de Repositorios

Puedes configurar y recuperar la visibilidad de un repositorio en la [API de Repositorios](/rest/reference/repos).

**Tipo de medios personalizados:** `nebula-preview` **Anunciado en:**[2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)
{% endif %}
