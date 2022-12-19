---
title: Crear una GitHub App utilizando parámetros de URL
intro: 'Puedes preseleccionar los ajustes de una nueva {% data variables.product.prodname_github_app %} mediante [parámetros de consulta](https://en.wikipedia.org/wiki/Query_string) para configurar rápidamente los nuevos ajustes de la configuración de {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation query parameters
ms.openlocfilehash: 94622bfc2de9ba991758a6d1e465d8eb3d770a5f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064037'
---
## Acerca de los parámetros de URL de las {% data variables.product.prodname_github_app %}

Puedes agregar parámetros de consulta a estas URL para preseleccionar la configuración de una {% data variables.product.prodname_github_app %} en una cuenta organizacional o personal:

* **Cuenta personal**: `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **Cuenta de organización:** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

El creador de la app puede editar los valores preseleccionados desde la página de registro de la {% data variables.product.prodname_github_app %} antes de emitirla. Si no incluye los parámetros necesarios en la cadena de consulta de la URL, como el `name`, el creador de la aplicación necesitará introducir un valor antes de enviarla.

En el caso de las apps que requieren que un secreto asegure su webhook, la persona que crea la app debe configurar el valor de dicho secreto y no se debe hacer utilizando parámetros de consulta. Para obtener más información, consulte "[Protección de los webhooks](/developers/webhooks-and-events/webhooks/securing-your-webhooks)".

La siguiente dirección URL crea una nueva aplicación pública llamada `octocat-github-app` con una descripción preconfigurada y una dirección URL de devolución de llamada. Esta dirección URL también selecciona permisos de lectura y escritura para `checks`, se suscribe a los eventos de webhook `check_run` y `check_suite` selecciona la opción para solicitar la autorización del usuario (OAuth) durante la instalación:

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

La lista completa de parámetros de consulta, permisos y eventos disponibles se lista en las secciones siguientes.

## Parámetros de configuración de una {% data variables.product.prodname_github_app %}

 Nombre | Tipo | Descripción
-----|------|-------------
`name` | `string` | El nombre de la {% data variables.product.prodname_github_app %}. Pónle un nombre claro y breve a tu app. Tu app no puede tener el mismo nombre de ningún usuario existente en GitHub, a menos de que sea tu propio nombre de usuario u organización. Una versión simplificada del nombre de tu aplicación se mostrará en la interface de usuario cuando tu integración tome alguna acción.
`description` | `string` | Una descripción de la {% data variables.product.prodname_github_app %}.
`url` | `string` | La URL complea de la página principal del sitio web de tu {% data variables.product.prodname_github_app %}.
`callback_urls` | `array of strings` | Una URL completa a la cual redirigir cuando alguien autorice una instalación. Puedes proporcionar hasta 10 URL de rellamado. Estas URL se utilizan si tu app necesita identificar y autorizar solicitudes de usuario a servidor. Por ejemplo, `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`.
`request_oauth_on_install` | `boolean` | Si su aplicación autoriza a los usuarios mediante el flujo de OAuth, puede configurar esta opción como `true` para permitir que las personas autoricen la aplicación cuando la instalen, lo que le permite ahorrarse un paso. Si selecciona esta opción, la `setup_url` dejará de estar disponible y se redirigirá a los usuarios a su `callback_url` después de instalar la aplicación.
`setup_url` | `string` | La URL completa a la cual se redirigirá después de que instalen la {% data variables.product.prodname_github_app %} si ésta requiere de alguna configuración adicional después de su instalación.
`setup_on_update` | `boolean` | Defínala como `true` para redirigir a los usuarios a la dirección URL de configuración cuando las instalaciones se actualicen, por ejemplo, después de que se agreguen o eliminen repositorios.
`public` | `boolean` | Defínala como `true` cuando la {% data variables.product.prodname_github_app %} esté disponible para el público o en `false` cuando solo puede acceder a ella el propietario de la aplicación.
`webhook_active` | `boolean` | Defínala como `false` para deshabilitar el webhook. El webhook se encuentra habilitado predeterminadamente.
`webhook_url` | `string` | La URL completa a la cual quisieras enviar cargas útiles de eventos de webhook.
{% ifversion ghae %}`webhook_secret` | `string` | Puedes especificar un secreto para asegurar tus webhooks. Consulte "[Protección de los webhooks](/webhooks/securing/)" para obtener más información.
{% endif %}`events` | `array of strings` | Eventos de webhook. Algunos eventos de webhook requieren los permisos de `read` o `write` de un recurso para poder seleccionar el evento al registrar una nueva {% data variables.product.prodname_github_app %}. Consulte la sección "[Eventos de webhook de {% data variables.product.prodname_github_app %}](#github-app-webhook-events) para ver los eventos disponibles y los permisos necesarios. Puedes seleccionar eventos múltiples en una secuencia de consulta. Por ejemplo, `events[]=public&events[]=label`.{% ifversion ghes < 3.4 %}
`domain` | `string` | La URL de una referencia de contenido.{% endif %}
`single_file_name` | `string` | Este es un permiso con alcance corto que permite a la app acceder a un solo archivo en cualquier repositorio. Al establecer el permiso de `single_file` en `read` o `write`, este campo proporciona la ruta de acceso al único archivo que administrará su {% data variables.product.prodname_github_app %}. {% ifversion fpt or ghes or ghec %} Si necesita administrar varios archivos, consulte `single_file_paths` a continuación. {% endif %}{% ifversion fpt or ghes or ghec %}
`single_file_paths` | `array of strings` | Esto permite a la app acceder hasta a 10 archivos especificos en un repositorio. Al establecer el permiso `single_file` en `read` o `write`, esta matriz puede almacenar las rutas de acceso de hasta diez archivos que administrará su {% data variables.product.prodname_github_app %}. Todos estos archivos reciben los mismos permisos establecidos por `single_file`, y no tienen permisos individuales independientes. Cuando se configuran dos o más archivos, la API devuelve `multiple_single_files=true`; de lo contrario, devolverá`multiple_single_files=false`.{% endif %}

## Permisos de la {% data variables.product.prodname_github_app %}

Puedes seleccionar los permisos en una secuencia de consulta utilizando los nombres de permiso conforme en la siguiente tabla a manera de nombres de parámetro de consulta y usando el tipo de permiso como el valor de la consulta. Por ejemplo, para seleccionar permisos de `Read & write` en la interfaz de usuario para `contents`, la cadena de consulta incluirá `&contents=write`. Para seleccionar permisos de `Read-only` en la interfaz de usuario para `blocking`, la cadena de consulta incluirá `&blocking=read`. Para seleccionar `no-access` en la interfaz de usuario para `checks`, la cadena de consulta no incluirá el permiso `checks`.

Permiso | Descripción
---------- | -----------
[`administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-administration) | Otorga acceso a diversas terminales para la administración de organizaciones y repositorios. Puede ser `none`, `read` o `write`.{% ifversion fpt or ghec %}
[`blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-blocking) | Concede acceso a la [API de bloque de usuarios](/rest/reference/users#blocking). Puede ser `none`, `read` o `write`.{% endif %}
[`checks`](/rest/reference/permissions-required-for-github-apps/#permission-on-checks) | Concede acceso a la [API de comprobaciones](/rest/reference/checks). Puede ser `none`, `read` o `write`.{% ifversion ghes < 3.4 %}
`content_references` | Concede acceso al punto de conexión "[Crear datos adjuntos de contenido](/rest/reference/apps#create-a-content-attachment)". Puede ser `none`, `read` o `write`.{% endif %}
[`contents`](/rest/reference/permissions-required-for-github-apps/#permission-on-contents) |  Otorga acceso a diversas terminales que te permiten modificar el contenido de los repositorios. Puede ser de tipo `none`, `read` o `write`.
[`deployments`](/rest/reference/permissions-required-for-github-apps/#permission-on-deployments) | Concede acceso a la [API de implementaciones](/rest/reference/repos#deployments). Puede ser `none`, `read` o `write`.{% ifversion fpt or ghes or ghec %}
[`emails`](/rest/reference/permissions-required-for-github-apps/#permission-on-emails) | Concede acceso a la [API de correos electrónicos](/rest/reference/users#emails). Puede ser `none`, `read` o `write`.{% endif %}
[`followers`](/rest/reference/permissions-required-for-github-apps/#permission-on-followers) | Concede acceso a [la API de seguidores](/rest/reference/users#followers). Puede ser de tipo `none`, `read` o `write`.
[`gpg_keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-gpg-keys) | Concede acceso a la [API de claves de GPG](/rest/reference/users#gpg-keys). Puede ser de tipo `none`, `read` o `write`.
[`issues`](/rest/reference/permissions-required-for-github-apps/#permission-on-issues) | Concede acceso a la [API de incidencias](/rest/reference/issues). Puede ser de tipo `none`, `read` o `write`.
[`keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-keys) | Concede acceso a la [API de claves públicas](/rest/reference/users#keys). Puede ser de tipo `none`, `read` o `write`.
[`members`](/rest/reference/permissions-required-for-github-apps/#permission-on-members) |  Otorga acceso para administrar los miembros de una organización. Puede ser `none`, `read` o `write`.{% ifversion fpt or ghec %}
[`metadata`](/rest/reference/permissions-required-for-github-apps/#metadata-permissions) | Otorga acceso a las terminales de solo lectura que no filtran datos sensibles. Puede ser `read` o `none`. El valor predeterminado es `read` cuando se establece cualquier permiso o `none` cuando no se especifica ningún permiso para la {% data variables.product.prodname_github_app %}.
[`organization_administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-administration) | Concede acceso al punto de conexión "[Actualizar una organización](/rest/reference/orgs#update-an-organization)" y a la [API de restricciones de interacción de la organización](/rest/reference/interactions#set-interaction-restrictions-for-an-organization). Puede ser `none`, `read` o `write`.{% endif %}
[`organization_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-hooks) | Concede acceso a la [API de webhooks de la organización](/rest/reference/orgs#webhooks/). Puede ser de tipo `none`, `read` o `write`.
`organization_plan` | Concede acceso para obtener información sobre el plan de una organización mediante el punto de conexión "[Obtener una organización](/rest/reference/orgs#get-an-organization)". Puede ser `none` o `read`.
[`organization_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) |  Concede acceso a la [API de proyectos](/rest/reference/projects). Puede ser `none`, `read`, `write` o `admin`.{% ifversion fpt or ghec %}
[`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) | Concede acceso a la [API de bloqueo de usuarios de la organización](/rest/reference/orgs#blocking). Puede ser `none`, `read` o `write`.{% endif %}
[`pages`](/rest/reference/permissions-required-for-github-apps/#permission-on-pages) | Concede acceso a la [API de páginas](/rest/reference/repos#pages). Puede ser de tipo `none`, `read` o `write`.
`plan` | Concede acceso para obtener información sobre el plan de GitHub de un usuario mediante el punto de conexión "[Obtener un usuario](/rest/reference/users#get-a-user)". Puede ser `none` o `read`.
[`pull_requests`](/rest/reference/permissions-required-for-github-apps/#permission-on-pull-requests) | Otorga acceso a varias terminales de solicitud de extracción. Puede ser de tipo `none`, `read` o `write`.
[`repository_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-hooks) | Concede acceso a la [API de webhooks del repositorio](/rest/reference/repos#hooks). Puede ser de tipo `none`, `read` o `write`.
[`repository_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-projects) |  Concede acceso a la [API de proyectos](/rest/reference/projects). Puede ser `none`, `read`, `write` o `admin`.{% ifversion ghes or ghec %}
[`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps/#permission-on-secret-scanning-alerts) |  Concede acceso a la [API de análisis de secretos](/rest/reference/secret-scanning). Puede ser `none`, `read` o `write`.{% endif %}{% ifversion fpt or ghes or ghec %}
[`security_events`](/rest/reference/permissions-required-for-github-apps/#permission-on-security-events) |  Concede acceso a la [API de análisis de código](/rest/reference/code-scanning/). Puede ser `none`, `read` o `write`.{% endif %}
[`single_file`](/rest/reference/permissions-required-for-github-apps/#permission-on-single-file) | Concede acceso a la [API de contenido](/rest/reference/repos#contents). Puede ser de tipo `none`, `read` o `write`.
[`starring`](/rest/reference/permissions-required-for-github-apps/#permission-on-starring) | Concede acceso a la [API de marcación con estrellas](/rest/reference/activity#starring). Puede ser de tipo `none`, `read` o `write`.
[`statuses`](/rest/reference/permissions-required-for-github-apps/#permission-on-statuses) | Concede acceso a la [API de estados](/rest/reference/commits#commit-statuses). Puede ser de tipo `none`, `read` o `write`.
[`team_discussions`](/rest/reference/permissions-required-for-github-apps/#permission-on-team-discussions) | Concede acceso a la [API de debates de equipos](/rest/reference/teams#discussions) y la [API de comentarios de debates de equipos](/rest/reference/teams#discussion-comments). Puede ser de tipo `none`, `read` o `write`.
`vulnerability_alerts`| Otorga acceso para recibir {% data variables.product.prodname_dependabot_alerts %} en un repositorio. Consulte "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)" para obtener más información. Puede ser `none` o `read`.
`watching` | Otorga acceso a la lista y cambia los repositorios a los que un usuario está suscrito. Puede ser de tipo `none`, `read` o `write`.

## Eventos de webhook de {% data variables.product.prodname_github_app %}

Nombre del evento de webhook | Permiso necesario | Descripción
------------------ | ------------------- | -----------
[`check_run`](/webhooks/event-payloads/#check_run) |`checks` | {% data reusables.webhooks.check_run_short_desc %}
[`check_suite`](/webhooks/event-payloads/#check_suite) |`checks` | {% data reusables.webhooks.check_suite_short_desc %}
[`commit_comment`](/webhooks/event-payloads/#commit_comment) | `contents` | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
[`content_reference`](/webhooks/event-payloads/#content_reference) |`content_references` | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
[`create`](/webhooks/event-payloads/#create) | `contents` | {% data reusables.webhooks.create_short_desc %}
[`delete`](/webhooks/event-payloads/#delete) | `contents` | {% data reusables.webhooks.delete_short_desc %}
[`deployment`](/webhooks/event-payloads/#deployment) | `deployments` | {% data reusables.webhooks.deployment_short_desc %}
[`deployment_status`](/webhooks/event-payloads/#deployment_status) | `deployments` | {% data reusables.webhooks.deployment_status_short_desc %}
[`fork`](/webhooks/event-payloads/#fork) | `contents` | {% data reusables.webhooks.fork_short_desc %}
[`gollum`](/webhooks/event-payloads/#gollum) | `contents` | {% data reusables.webhooks.gollum_short_desc %}
[`issues`](/webhooks/event-payloads/#issues) | `issues` | {% data reusables.webhooks.issues_short_desc %}
[`issue_comment`](/webhooks/event-payloads/#issue_comment) | `issues` | {% data reusables.webhooks.issue_comment_short_desc %}
[`label`](/webhooks/event-payloads/#label) | `metadata` | {% data reusables.webhooks.label_short_desc %}
[`member`](/webhooks/event-payloads/#member) | `members` | {% data reusables.webhooks.member_short_desc %}
[`membership`](/webhooks/event-payloads/#membership) | `members` | {% data reusables.webhooks.membership_short_desc %}
[`milestone`](/webhooks/event-payloads/#milestone) | `pull_request` | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
[`org_block`](/webhooks/event-payloads/#org_block) | `organization_administration` | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
[`organization`](/webhooks/event-payloads/#organization) | `members` | {% data reusables.webhooks.organization_short_desc %}
[`page_build`](/webhooks/event-payloads/#page_build) | `pages` | {% data reusables.webhooks.page_build_short_desc %}
[`project`](/webhooks/event-payloads/#project) | `repository_projects` o `organization_projects` | {% data reusables.webhooks.project_short_desc %}
[`project_card`](/webhooks/event-payloads/#project_card) | `repository_projects` o `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
[`project_column`](/webhooks/event-payloads/#project_column) | `repository_projects` o `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
[`public`](/webhooks/event-payloads/#public) | `metadata` | {% data reusables.webhooks.public_short_desc %}
[`pull_request`](/webhooks/event-payloads/#pull_request) | `pull_requests` | {% data reusables.webhooks.pull_request_short_desc %}
[`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | `pull_request` | {% data reusables.webhooks.pull_request_review_short_desc %}
[`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request` | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
[`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread) | `pull_request` | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
[`push`](/webhooks/event-payloads/#push) | `contents` | {% data reusables.webhooks.push_short_desc %}
[`release`](/webhooks/event-payloads/#release) | `contents` | {% data reusables.webhooks.release_short_desc %}
[`repository`](/webhooks/event-payloads/#repository) |`metadata` | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) | `contents` | Permite que los integradores que utilizan GitHub Actions activen eventos personalizados.{% endif %}
[`status`](/webhooks/event-payloads/#status) | `statuses` | {% data reusables.webhooks.status_short_desc %}
[`team`](/webhooks/event-payloads/#team) | `members` | {% data reusables.webhooks.team_short_desc %}
[`team_add`](/webhooks/event-payloads/#team_add) | `members` | {% data reusables.webhooks.team_add_short_desc %}
[`watch`](/webhooks/event-payloads/#watch) | `metadata` | {% data reusables.webhooks.watch_short_desc %}
