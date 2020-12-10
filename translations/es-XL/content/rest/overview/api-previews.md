---
title: Vistas previas de la API
intro: Puedes utilizar las vistas previas de la API para probar características nuevas y proporcionar retroalimentación antes de que dichas características se hagan oficiales.
redirect_from:
  - /v3/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Las vistas previas de la API te permiten probar API nuevas y cambios a los métodos existentes de las API antes de que se hagan oficiales en la API de GitHub.

Durante el periodo de vista previa, podríamos cambiar algunas características con base en la retroalimentación de los desarrolladores. Si realizamos cambios, lo anunciaremos en el [blog de desarrolladores](https://developer.github.com/changes/) sin aviso previo.

Para acceder a la vista previa de las API, necesitarás proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado `Accept` para tus solicitudes. La documentación de características para cada vista previa especifica qué tipo de medios personalizados proporcionar.

{% if currentVersion == "free-pro-team@latest" %}
### Migraciones

Te permite descargar repositorios desde tu usuario de GitHub o cuenta organizacional para revisar, respaldar y [migrar](/v3/migrations/) los datos al {% data variables.product.prodname_ghe_server %}.

**Tipo de medios personalizados:** `wyandotte-preview` **Anunciado en:**[2018-05-24](https://developer.github.com/changes/2018-05-24-user-migration-api/)
{% endif %}

### Despliegues ampliados

Ejerce mayo control sobre los [despliegues](/v3/repos/deployments/) con más información y granularidad más fina.

**Tipo de medios personalizados:** `ant-man-preview` **Anunciado en:**[2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

### Reacciones

Administra las [reacciones](/v3/reactions/) para las confirmaciones, informes de problemas y comentarios.

**Tipo de medios personalizado:** `squirrel-girl-preview` **Anunciado en:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/) **Actualizado en:** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

### Línea de tiempo

Obtén una [lista de eventos](/v3/issues/timeline/) para un informe de problemas o solictud de extracción.

**Tipo de medios personalizados:** `mockingbird-preview` **Anunciado en:**[2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
### Pages

Obtén más información sobre tu sitio de [GitHub Pages](/v3/repos/pages/).

**Tipo de medios personalizados:** `mister-fantastic-preview` **Anunciado en:**[2016-07-06](https://developer.github.com/changes/2016-07-06-github-pages-preview-api/)
{% endif %}

{% if currentVersion != "free-pro-team@latest" %}
### Ambientes de pre-recepción

Crea, lista, actualiza y borra ambientes para los ganchos de pre-recepción.

**Tipo de medios personalizados:** `eye-scream-preview` **Anunciado en:**[2015-07-29](/rest/reference/enterprise-admin#pre-receive-environments)
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
### Integraciones

Administra las [integraciones](/early-access/integrations/) a través de la API.

**Tipo de medios personalizados:** `machine-man-preview` **Anunciado en:**[2016-09-14](https://developer.github.com/changes/2016-09-14-Integrations-Early-Access/)
{% endif %}

### Proyectos

Administra [proyectos](/v3/projects/).

**Tipo de medios personalizado:** `inertia-preview` **Anunciado en:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/) **Actualizado en:** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)

### Búsqueda de confirmación

[Busca confirmaciones](/v3/search/).

**Tipo de medios personalizados:** `cloak-preview` **Anunciado en:**[2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)

{% if currentVersion == "free-pro-team@latest" %}
### Métricas del perfil comunitario

Recupera las [métricas del perfil comunitario](/v3/repos/community/) (también conocidas como salud de la comunidad) para cualquier repositorio público.

**Tipo de medios personalizados:** `black-panther-preview` **Anunciado en:**[2017-02-09](https://developer.github.com/changes/2017-02-09-community-health/)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Bloqueo de usuarios

Los usuarios pueden [bloquear a otros usuarios](/v3/users/blocking/). Las organizaciones también pueden [bloquear usuarios](/v3/orgs/blocking/).

**Tipo de medios personalizado:** `giant-sentry-fist-preview` **Anunciado en:** [2011-05-31](https://github.com/blog/862-block-the-bullies) **Actualización 1:** [2016-04-04](https://github.com/blog/2146-organizations-can-now-block-abusive-users) **Actualización 2:** [2016-08-17](https://github.com/blog/2229-see-the-users-you-ve-blocked-on-your-settings-page)
{% endif %}

### Temas del repositorio

Ver una lista de los [temas del repositorio](/articles/about-topics/) en [llamadas](/v3/repos/) que devuelven los resultados del mismo.

**Tipo de medios personalizados:** `mercy-preview` **Anunciado en:**[2017-01-31](https://github.com/blog/2309-introducing-topics)

### Códigos de conducta

Ver todos los [códigos de conducta](/v3/codes_of_conduct) u obtener qué código de conducta tiene actualmente un repositorio.

**Tipo de medios personalizado:** `scarlet-witch-preview`

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
### Equipos anidados

Incluir contenido anidado del equipo en cargas útiles del [equipo](/v3/teams/)

**Tipo de medios personalizados:** `hellcat-preview` **Anunciado en:**[2017-09-01](https://developer.github.com/changes/2017-08-30-preview-nested-teams)

{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

### Webhooks globales

Habilita los [webhooks globales](/v3/enterprise-admin/global_webhooks/) para una [organización](/webhooks/event-payloads/#organization) y para los tipos de evento del [usuario](/webhooks/event-payloads/#user). Esta vista previa de la API solo está disponible para {% data variables.product.prodname_ghe_server %}.

**Tipo de medios personalizados:** `superpro-preview` **Anunciado en:**[2017-12-12](/v3/enterprise-admin/global_webhooks)

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
### Transferencia de repositorio

Transfiere u [repositorio](/v3/repos/) a una organización o usuario.

**Tipo de medios personalizados:** `nightshade-preview` **Anunciado en:**[2017-11-09](https://developer.github.com/changes/2017-11-09-repository-transfer-api-preview)
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
### Agregar razón de bloqueo

Ahora puedes agregar una razón cuando [bloquees un informe de problemas](/v3/issues/#lock-an-issue).

**Tipo de medios personalizados:** `sailor-v-preview` **Anunciado en:**[2018-01-10](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview)
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
### Debates de equipo

Ahora puedes usar la API para administrar los [debates de equipo](/v3/teams/discussions) y los [comentarios sobre los debates de equipo](/v3/teams/discussion_comments).

**Tipo de medios personalizados:** `echo-preview` **Anunciado en:**[2018-02-07](https://developer.github.com/changes/2018-02-07-team-discussions-api)

{% endif %}

### Requerir confirmaciones firmadas

Ahora puedes utilizar la API para administrar la configuración para [requerir confirmaciones firmadas en ramas protegidas](/v3/repos/branches).

**Tipo de medios personalizados:** `zzzax-preview` **Anunciado en:**[2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)

### Requerir múltiples revisiones de aprobación

Ahora puedes [requerir múltiples revisiones de aprobación](/v3/repos/branches) para una solicitud de extracción que utilice la API.

**Tipo de medios personalizados:** `luke-cage-preview` **Anunciado en:**[2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
### Recuperar la información de la tarjeta de visita virtual

Recupera la información de la [tarjeta de visita virtual de alguien](/v3/users/#get-contextual-information-for-a-user).

**Tipo de medios personalizados:** `hagar-preview` **Anunciado en:**[2018-03-21](https://developer.github.com/changes/2018-03-21-hovercard-api-preview)

{% endif %}

### API de suites de verificación y ejecuciones de verificación

Permite a una GitHub App ejecutar verificaciones externas en el código de un repositorio. Consulta las API de [Ejecuciones de verificación](/v3/checks/runs/) y [Suites de verificación](/v3/checks/suites/) para obtener más detalles.

**Tipo de medios personalizados:** `antiope-preview` **Anunciado en:**[2018-05-07](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/)

{% if currentVersion != "free-pro-team@latest" %}

### Acceso anónimo de Git a los repositorios

Cuando una instancia de {% data variables.product.prodname_ghe_server %} está en modo privado, los administradores de sitio y de repositorio pueden habilitar el acceso anónimo de Git para los repositorios públicos.

**Tipo de medios personalizados:** `x-ray-preview` **Anunciado en:**[2018-07-12](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/)

{% endif %}

### Detalles de la tarjeta de proyecto

Las respuestas de la API de REST para los [eventos de los informes de problemas](/v3/issues/events/) y para [los eventos de la línea de tiempo de los informes de problemas](/v3/issues/timeline/) ahora devuelven el campo `project_card` para los eventos relacionados con los proyectos.

**Tipo de medios personalizados:** `starfox-preview` **Anunciado en:**[2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% if currentVersion == "free-pro-team@latest" %}

### Manifiestos de las GitHub Apps

Los Manifiestos de las GitHub Apps permiten a las personas crear GitHub Apps preconfiguradas. Consulta la sección "[Crear GitHub Apps desde un manifiesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" para obtener más detalles.

**Tipo de medios personalizado:** `fury-preview`

{% endif %}

### Estados de despliegue

Ahora puedes actualizar el `environment` de un [estado de despliegue](/v3/repos/deployments/#create-a-deployment-status) y utilizar los estados de `in_progress` y `queued`. Cuando creas estados de despliegue, ahora puedes utilizar el parámetro `auto_inactive` para marcar los despliegues de `production` antiguos como `inactive`.

**Tipo de medios personalizados:** `flash-preview` **Anunciado en:**[2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

### Permisos de creación de repositorios

Ahora puedes configurar si los miembros de la organización pueden crear repositorios y decidir qué tipos de éstos pueden crear. Consulta la sección "[Actualizar una organización](/v3/orgs/#update-an-organization)" para obtener más detalles.

**Tipo de medios personalizados:** `surtur-preview` **Anunciado en:**[2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

### Adjuntos de contenido

Ahora puedes proporcionar más información en GitHub para las URL que enlazan a los dominios registrados si utilizas la API {% data variables.product.prodname_unfurls %}. Consulta la sección "[Utilizar adjuntos de contenido](/apps/using-content-attachments/)" para obtener más detalles.

**Tipo de medios personalizados:** `corsair-preview` **Anunciado en:**[2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% if currentVersion == "free-pro-team@latest" %}

### Restricciones de interacción para repositorios y organizaciones

Te permite restringir interacciones temporalmente, tales como comentario abrir informes de problemas, y crear solicitudes de extracción para los repositorios u organizaciones de {% data variables.product.product_name %}. Cuando lo habilitas, únicamente el grupo específico de usuarios de {% data variables.product.product_name %} podrá participar en estas interacciones. Consulta las API de [Interacciones del repositorio](/v3/interactions/repos/) y de [Interacciones de la organización](/v3/interactions/orgs/) para obtener más detalles.

**Tipo de medios personalizados:** `sombra-preview` **Anunciado en:**[2018-12-18](https://developer.github.com/changes/2018-12-18-interactions-preview/)

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
### Solicitudes de extracción en borrador

Puedes utilizar la API de Borradores de Solicitudes de Extracción y sus terminales de [solicitudes de extracción](/v3/pulls/) para ver si una solicitud de extracción está en estado de borrador. Para aprender más sobre los borradores de las solicitudes de extracción, consulta la sección "[Acerca de las solicitudes de extracción](/articles/about-pull-requests/)".

**Tipos de medios personalizados:** `shadow-cat-preview` **Anunciado en:**[2019-02-14](https://developer.github.com/changes/2019-02-14-draft-pull-requests/)

{% endif %}

### Habilitar e inhabilitar las páginas

Puedes utilizar las terminales nuevas en la [API de páginas](/v3/repos/pages/) para habilitar o inhabilitar las Páginas. Para aprender más sobre las páginas, consulta la sección "[Fundamentos de GitHub Pages](/categories/github-pages-basics)".

**Tipo de medios personalizados:** `switcheroo-preview` **Anunciado en:**[2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

### Listar ramas o solicitudes de extracción para una confirmación

Puedes utilizar dos terminales nuevas en la [API de Confirmaciones](/v3/repos/commits/) para listar las ramas o las solicitudes de extracción para una confirmación.

**Tipo de medios personalizados:** `groot-preview` **Anunciado en:**[2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
### Desinstalar una GitHub App

Los propietarios de las GitHub Apps ahora pueden desinstalar una app utilizando la [API de Apps](/v3/apps/#delete-an-installation-for-the-authenticated-app).

**Tipo de medios personalizado:** `gambit-preview`
{% endif %}

### Habilitar o inhabilitar las alertas vulnerables para un repositorio

Puedes utilizar dos terminales nueva en la [API de Repos](/v3/repos/) para habilitar o inhabilitar las alertas de vulnerabilidades.

**Tipo de medios personalizados:** `dorian-preview` **Anunciado en:**[2019-04-24](https://developer.github.com/changes/2019-04-24-vulnerability-alerts/)

### Actualizar la rama de una solicitud de extracción

Puedes utilizar una terminal nueva para [actualizar una rama de una solicitud de extracción](/v3/pulls/#update-a-pull-request-branch) con cambios desde el HEAD de la rama ascendente.

**Tipo de medios personalizados:** `lydian-preview` **Anunciado en:**[2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% if currentVersion == "free-pro-team@latest" %}
### Habilitar o inhabilitar las correcciónes de seguridad automatizadas

Puedes utilizar un conjunto de terminales nuevo para [habilitar e inhabilitar las correcciones de seguridad automatizados](/v3/repos/#enable-automated-security-fixes).

**Tipo de medios personalizados:** `london-preview` **Anunciado en:**[2019-06-04](https://developer.github.com/changes/2019-06-04-automated-security-fixes/)
{% endif %}

### Crear y utilizar plantillas de repositorio

Puedes Puedes utilizar una terminal nueva para [crear un repositorio utilizando una plantilla](/v3/repos/#create-a-repository-using-a-template) y para [crear un repositorio para el usuario autenticado](/v3/repos/#create-a-repository-for-the-authenticated-user) que constituye un repositorio de plantilla si configuras el parámetro `is_template` como `true`. [Obten un repositorio](/v3/repos/#get-a-repository) para verificar si se configuró como un repositorio de plantilla utilizando la clave `is_template`.

**Tipos de medios personalizados:** `baptiste-preview` **Anunciado en:**[2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)

{% if currentVersion == "enterprise-server@2.20" %}
### Nuevas terminales de la API de Aplicaciones OAuth

Puedes administrar los tokens para las Apps de OAuth de forma más segura si utilizas tokens de OAuth como parámetros de entrada en vez de como parámetros de ruta con las nuevas terminales de la [API de aplicaciones de OAuth](/v3/apps/oauth_applications/).

**Tipo de medios personalizados:** `doctor-strange-preview` **Anunciado en:**[2019-11-05](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Parámetro de visibilidad nuevo para la API de Repositorios

Puedes configurar y recuperar la visibilidad de un repositorio en la [API de Repositorios](/v3/repos/).

**Tipo de medios personalizados:** `nebula-preview` **Anunciado en:**[2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)
{% endif %}
