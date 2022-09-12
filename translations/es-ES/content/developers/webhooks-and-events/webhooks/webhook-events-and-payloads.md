---
title: Eventos y cargas de webhook
intro: 'Para cada evento de webhook, puedes revisar cuándo ocurre el evento, una carga útil de ejemplo, y las descripciones de los parámetros del objeto de dicha carga útil.'
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Webhook events & payloads
ms.openlocfilehash: 38dfa09525a7c3cc914bc2cf130126ed9969e190
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147541986'
---
{% data reusables.webhooks.webhooks_intro %}

Puedes crear webhooks que se suscriban a los eventos listados en esta página. Cada evento de webhook incluye una descripción de las propiedades de dicho webhook y un ejemplo de carga útil. Para más información, vea "[Creación de webhooks](/webhooks/creating/)".

## Propuiedades comunes del objeto de la carga útil del webhook

Cada carga útil del evento del webhook contiene propiedades únicas de dicho evento. Puedes encontrar estas propiedades únicas en las secciones individuales de tipo de evento.

Clave | Tipo | Descripción
----|------|-------------
`action` | `string` | La mayoría de las cargas de webhook contienen una propiedad `action` que contiene la actividad específica que ha desencadenado el evento.
{% data reusables.webhooks.sender_desc %} Esta propiedad se incluye en cada carga útil del webhook.
{% data reusables.webhooks.repo_desc %} Las cargas de webhook contienen la propiedad `repository` cuando el evento se produce desde una actividad en un repositorio.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} Para más información, vea "[Creación de {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)".

Las propiedades únicas de un evento de webhook son las mismas que encontrará en la propiedad `payload` al usar [Events API](/rest/reference/activity#events). Una excepción es el [evento `push`](#push). Las propiedades únicas de la carga de webhook de eventos `push` y la propiedad `payload` de Events API difieren. La carga útil del webhook contiene información más detallada.

{% tip %}

**Nota:** Las cargas se limitan a 25 MB. Si tu evento genera una carga útil mayor, el webhook no se lanzará. Esto puede pasar, por ejemplo, en un evento `create` si se insertan muchas ramas o etiquetas al mismo tiempo. Te sugerimos monitorear el tamaño de tu carga útil para garantizar la entrega.

{% endtip %}

### Encabezados de entrega

Las cargas útiles de HTTP POST que se entregan a la terminal URL configurada para tu webhook contendrán varios encabezados especiales:

Encabezado | Descripción
-------|-------------|
`X-GitHub-Event`| Nombre del evento que desencadenó la entrega.
`X-GitHub-Delivery`| [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) para identificar la entrega.{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | La versión de la instancia de {% data variables.product.prodname_ghe_server %} que envía la carga útil del HTTP POST.
`X-GitHub-Enterprise-Host` | El nombre de host para la instancia de {% data variables.product.prodname_ghe_server %} que ha enviado la carga HTTP POST.{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| Este encabezado se envía si el webhook está configurado con [`secret`](/rest/reference/repos#create-hook-config-params). Este es el resumen hexadecimal de HMAC del cuerpo de la solicitud y se genera mediante la función de hash SHA-1 y `secret` como `key`de HMAC.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` se proporciona para compatibilidad con las integraciones existentes y, en su lugar, se recomienda usar `X-Hub-Signature-256`, que es más seguro.{% endif %}{% endif %}
`X-Hub-Signature-256`| Este encabezado se envía si el webhook está configurado con [`secret`](/rest/reference/repos#create-hook-config-params). Este es el resumen hexadecimal de HMAC para el cuerpo de la solicitud y se genera mediante la función de hash SHA-256 y `secret` como `key` de HMAC.

Además, `User-Agent` para las solicitudes tendrá el prefijo `GitHub-Hookshot/`.

### Ejemplo de entrega

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
## branch_protection_rule

Actividad relacionada con una regla de protección de rama. Para más información, vea "[Acerca de las reglas de protección de rama](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)".

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con al menos acceso `read-only` a la administración de repositorios

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | acción realizada. Puede ser `created`, `edited` o `deleted`.
`rule` | `object` | La regla de protección de rama. Incluye `name` y toda la [configuración de protección de ramas](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings) aplicada a las ramas que coinciden con el nombre. Los ajustes binarios son booleanos. Las configuraciones de varios niveles son una de `off`, `non_admins` o `everyone`. Las listas de actor y compilación son arreglos de secuencias.
`changes` | `object` | Si la acción ha sido `edited`, los cambios en la regla.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.branch_protection_rule.edited }} {% endif %}

{% ifversion ghes > 3.3 %}
## cache_sync

Se sincronizó una Git ref exitosamente en una réplica de caché. Para más información, vea "[Acerca del almacenamiento en caché del repositorio](/admin/enterprise-management/caching-repositories/about-repository-caching)".

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`cache_location` |`string` | La ubicación del servidor caché que se actualizó.
`ref` | `string` | La ref que se actualizó.
`before` | `string` | La OID del ref en la réplica de caché antes de que se actualizara.
`after` | `string` | La OID del ref en la réplica de caché después de la actualización.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.cache_sync.synced }} {% endif %}

## check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### Disponibilidad

- Los webhooks de repositorio únicamente reciben cargas para los tipos de evento `created` y `completed` en un repositorio
- Los webhooks de organización únicamente reciben cargas para los tipos de evento `created` y `completed` en los repositorios
- {% data variables.product.prodname_github_apps %} con el permiso `checks:read` reciben cargas para los eventos `created` y `completed` que se producen en el repositorio donde está instalada la aplicación. La aplicación debe tener el permiso `checks:write` para recibir los tipos de eventos `rerequested` y `requested_action`. Las cargas de tipo de evento `rerequested` y `requested_action` solo se envían a la instancia de {% data variables.product.prodname_github_app %} que se solicita. {% data variables.product.prodname_github_apps %} con `checks:write` se suscriben automáticamente a este evento de webhook.

### Objeto de carga útil del webhook

{% data reusables.webhooks.check_run_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.check_run.created }}

## check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### Disponibilidad

- Los webhooks de repositorio únicamente reciben cargas para los tipos de evento `completed` en un repositorio
- Los webhooks de organización únicamente reciben cargas para los tipos de evento `completed` en los repositorios
- {% data variables.product.prodname_github_apps %} con el permiso `checks:read` reciben cargas para los eventos `created` y `completed` que se producen en el repositorio donde está instalada la aplicación. La aplicación debe tener el permiso `checks:write` para recibir los tipos de eventos `requested` y `rerequested`. Las cargas de tipo de evento `requested` y `rerequested` solo se envían a la instancia de {% data variables.product.prodname_github_app %} que se solicita. {% data variables.product.prodname_github_apps %} con `checks:write` se suscriben automáticamente a este evento de webhook.

### Objeto de carga útil del webhook

{% data reusables.webhooks.check_suite_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

## comentario_confirmación de cambios

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `security_events :read`

### Objeto de carga útil del webhook

{% data reusables.webhooks.code_scanning_alert_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} `sender` | `object` | Si `action` es `reopened_by_user` o `closed_by_user`, el objeto `sender` será el usuario que ha desencadenado el evento. El objeto `sender` es {% ifversion fpt or ghec %}`github`{% elsif ghes or ghae %}`github-enterprise`{% else %}empty{% endif %} para todas las demás acciones.

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

## commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `contents`

### Objeto de carga útil del webhook

{% data reusables.webhooks.commit_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}

{% ifversion ghes < 3.4 %}
## content_reference

{% data reusables.webhooks.content_reference_short_desc %}

Los eventos de webhook se desencadenan basándose en la especificidad del dominio que registres. Por ejemplo, si registra un subdominio (`https://subdomain.example.com`), solo las direcciones URL del subdominio desencadenan este evento. Si registra un dominio (`https://example.com`), las URL para el dominio y todos sus subdominios desencadenan este evento. Vea "[Creación de datos adjuntos de contenido](/rest/reference/apps#create-a-content-attachment)" para crear datos adjuntos de contenido.

### Disponibilidad

- {% data variables.product.prodname_github_apps %} con el permiso `content_references:write`

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

{% endif %}
## create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**Nota:** No recibirá un webhook para este evento cuando cree más de tres etiquetas al mismo tiempo.

{% endnote %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `contents`

### Objeto de carga útil del webhook

{% data reusables.webhooks.create_properties %} {% data reusables.webhooks.pusher_type_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.create }}

## delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**Nota:** No recibirá un webhook para este evento cuando elimine más de tres etiquetas al mismo tiempo.

{% endnote %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `contents`

### Objeto de carga útil del webhook

{% data reusables.webhooks.delete_properties %} {% data reusables.webhooks.pusher_type_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.delete }}

## deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

### Objeto de carga útil del webhook

{% data reusables.webhooks.deploy_key_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

## implementación

{% data reusables.webhooks.deployment_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `deployments`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | acción realizada. Puede ser `created`.
`deployment` |`object` | La [implementación](/rest/reference/deployments#list-deployments).
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.deployment }}

## deployment_status

{% data reusables.webhooks.deployment_status_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `deployments`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | acción realizada. Puede ser `created`.
`deployment_status` |`object` | El [estado de la implementación](/rest/reference/deployments#list-deployment-statuses).
`deployment_status["state"]` |`string` | El nuevo estado. Puede ser `pending`, `success`, `failure` o `error`.
`deployment_status["target_url"]` |`string` | El enlace opcional agregado al estado.
`deployment_status["description"]`|`string` | La descripción opcional legible para las personas que se agrega al estado.
`deployment` |`object` | La [implementación](/rest/reference/deployments#list-deployments) a la que está asociada este estado.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% ifversion fpt or ghec %}
## debate

{% data reusables.webhooks.discussions-webhooks-beta %}

Actividad relacionada con un debate. Para más información, vea "[Uso de GraphQL API para debates](/graphql/guides/using-the-graphql-api-for-discussions)".
### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `discussions`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | acción realizada. Puede ser `created`, `edited`, `deleted`, `pinned`, `unpinned`, `locked`, `unlocked`, `transferred`, `category_changed`, `answered`, `unanswered`, `labeled` o `unlabeled`.
{% data reusables.webhooks.discussion_desc %} {% data reusables.webhooks.repo_desc_graphql %} {% data reusables.webhooks.org_desc_graphql %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.discussion.created }}

## discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

La actividad relacionada con un comentario en un debate. Para más información, vea "[Uso de GraphQL API para debates](/graphql/guides/using-the-graphql-api-for-discussions)".

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `discussions`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | acción realizada. Puede ser `created`, `edited` o `deleted`.
`comment` | `object` | Recurso [`discussion comment`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment).
{% data reusables.webhooks.discussion_desc %} {% data reusables.webhooks.repo_desc_graphql %} {% data reusables.webhooks.org_desc_graphql %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }} {% endif %}

{% ifversion ghes or ghae %}

## empresa

{% data reusables.webhooks.enterprise_short_desc %}

### Disponibilidad

- Webhooks de GitHub Enterprise. Para más información, "[Webhooks globales](/rest/reference/enterprise-admin#global-webhooks/)".

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | acción realizada. Puede ser `anonymous_access_enabled` o `anonymous_access_disabled`.

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

## bifurcación

{% data reusables.webhooks.fork_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `contents`

### Objeto de carga útil del webhook

{% data reusables.webhooks.fork_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.fork }}

## github_app_authorization

Este evento ocurre cuando alguien revoca su autorización de una {% data variables.product.prodname_github_app %}. Una {% data variables.product.prodname_github_app %} recibe este webhook predeterminadamente y no puede desuscribirse de este evento.

{% data reusables.webhooks.authorization_event %} Para obtener detalles sobre las solicitudes de usuario a servidor, que necesitan autorización de {% data variables.product.prodname_github_app %}, vea "[Identificación y autorización de los usuarios para {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

### Disponibilidad

- {% data variables.product.prodname_github_apps %}

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | acción realizada. Puede ser `revoked`.
{% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

## gollum

{% data reusables.webhooks.gollum_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `contents`

### Objeto de carga útil del webhook

{% data reusables.webhooks.gollum_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.gollum }}

## installation

{% data reusables.webhooks.installation_short_desc %}

### Disponibilidad

- {% data variables.product.prodname_github_apps %}

### Objeto de carga útil del webhook

{% data reusables.webhooks.installation_properties %} {% data reusables.webhooks.app_always_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

## installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

### Disponibilidad

- {% data variables.product.prodname_github_apps %}

### Objeto de carga útil del webhook

{% data reusables.webhooks.installation_repositories_properties %} {% data reusables.webhooks.app_always_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

## issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `issues`

### Objeto de carga útil del webhook

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

## issues

{% data reusables.webhooks.issues_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `issues`

### Objeto de carga útil del webhook

{% data reusables.webhooks.issue_webhook_properties %} {% data reusables.webhooks.issue_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook cuando alguien edita un informe de problemas

{{ webhookPayloadsForCurrentVersion.issues.edited }}

## etiqueta

{% data reusables.webhooks.label_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `metadata`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción que se ha realizado. Puede ser `created`, `edited` o `deleted`.
`label`|`object` | La etiqueta que se añadió.
`changes`|`object`| Cambios en la etiqueta si la acción ha sido `edited`.
`changes[name][from]`|`string` | Versión anterior del nombre si la acción ha sido `edited`.
`changes[color][from]`|`string` | Versión anterior del color si la acción ha sido `edited`.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% ifversion fpt or ghec %}
## marketplace_purchase

Actividad relacionada con una compra en GitHub Marketplace. {% data reusables.webhooks.action_type_desc %} Para más información, vea "[Marketplace de GitHub](/marketplace/)".

### Disponibilidad

- {% data variables.product.prodname_github_apps %}

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` | `string` | Acción realizada para un plan de [Marketplace de GitHub](https://github.com/marketplace). Puede ser una de las siguientes:<ul><li>`purchased`: alguien ha comprado un plan de Marketplace de GitHub. El cambio deberá entrar en vigor en la cuenta de inmediato.</li><li>`pending_change`: recibirá el evento `pending_change` cuando alguien haya cambiado a una versión anterior o cancelado un plan de GitHub Marketplace para indicar que se producirá un cambio en la cuenta. El nuevo plan o cancelación entra en vigor al final del ciclo de facturación.  El tipo de evento `cancelled` o `changed` se enviará cuando haya concluido el ciclo de facturación y la cancelación o el plan nuevo deba entrar en vigor.</li><li>`pending_change_cancelled`: alguien ha cancelado un cambio pendiente. Los cambios pendientes incluyen cancelaciones y degradaciones de planes que entrarán en vigor al final del ciclo de facturación. </li><li>`changed`: alguien ha cambiado a una versión anterior o posterior de un plan de GitHub Marketplace y el cambio tendrá que entrar en vigor en la cuenta de inmediato.</li><li>`cancelled`: alguien ha cancelado un plan de GitHub Marketplace y el último ciclo de facturación ha terminado. El cambio deberá entrar en vigor en la cuenta de inmediato.</li></ul>

Para obtener una descripción detallada de esta carga y la carga de cada tipo de `action`, vea [Eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

### Ejemplo de carga útil de webhook cuando alguien compra el plan

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

## member

{% data reusables.webhooks.member_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `members`

### Objeto de carga útil del webhook

{% data reusables.webhooks.member_webhook_properties %} {% data reusables.webhooks.member_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.member.added }}

## pertenencia

{% data reusables.webhooks.membership_short_desc %}

### Disponibilidad

- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `members`

### Objeto de carga útil del webhook

{% data reusables.webhooks.membership_properties %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.membership.removed }}

{% ifversion fpt or ghec %}

## merge_group

{% data reusables.pull_requests.merge-queue-beta %}

Actividad relacionada con los grupos de fusión mediante combinación en una cola de fusión. El tipo de actividad se especifica en la propiedad de la acción del objeto de la carga útil.


### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `merge_queues`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción que se ha realizado. Actualmente, solo puede ser `checks_requested`.
`merge_group`|`object` | Grupo de fusión mediante combinación.
`merge_group[head_sha]`|`string` | SHA del grupo de fusión mediante combinación.
`merge_group[head_ref]`|`string` | Referencia completa del grupo de fusión mediante combinación.
`merge_group[base_ref]`|`string` | Referencia completa de la rama en que se combinará el grupo de fusión mediante combinación.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.merge_group.checks_requested }}

{% endif %}

## meta

Se eliminó el evento para el cual se configuró este webhook. Este evento únicamente escuchará los cambios del gancho particular en el cual se instaló. Por lo tanto, debe seleccionarse para cada gancho para el cual quieras recibir metaeventos.

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | acción realizada. Puede ser `deleted`.
`hook_id`  |`integer` | La id del webhook modificado.
`hook` |`object` | El webhook modificado. Este contendrá claves diferentes con base en el tipo de webhook que sea: de repositorio, organización, negocio, app, o GitHub Marketplace.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

## milestone

{% data reusables.webhooks.milestone_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `pull_requests`

### Objeto de carga útil del webhook

{% data reusables.webhooks.milestone_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.milestone.created }}

## organization

{% data reusables.webhooks.organization_short_desc %}

### Disponibilidad

{% ifversion ghes or ghae %}
- Los webhooks de GitHub Enterprise solo reciben eventos `created` y `deleted`. Para más información, "[Webhooks globales](/rest/reference/enterprise-admin#global-webhooks/)".{% endif %}
- Los webhooks de la organización solo reciben los eventos `deleted`, `added`, `removed`, `renamed` y `invited`
- {% data variables.product.prodname_github_apps %} con el permiso `members`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | La acción que se ha realizado. Puede ser una de:{% ifversion ghes or ghae %} `created`,{% endif %} `deleted`, `renamed`, `member_added`, `member_removed` o `member_invited`.
`invitation` |`object` | Invitación para el usuario o correo electrónico si la acción es `member_invited`.
`membership`  |`object` | La membrecía entre el usuario y la organización.  No está presente cuando la acción es `member_invited`.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% ifversion fpt or ghec %}

## org_block

{% data reusables.webhooks.org_block_short_desc %}

### Disponibilidad

- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `organization_administration`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|------------
`action` | `string` | acción realizada. Puede ser `blocked` o `unblocked`.
`blocked_user` | `object` | Información acerca del usuario que se bloqueó o desbloqueó.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

## paquete

Actividad relacionada con el {% data variables.product.prodname_registry %}. {% data reusables.webhooks.action_type_desc %} Para más información, vea "[Administración de paquetes con {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)" a fin de obtener más información sobre {% data variables.product.prodname_registry %}.

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

### Objeto de carga útil del webhook

{% data reusables.webhooks.package_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.package.published }}

## page_build

{% data reusables.webhooks.page_build_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `pages`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|------------
`id` | `integer` | El idientificador único de la compilación de la página.
`build` | `object` | Se [crea la lista de GitHub Pages](/rest/reference/pages#list-github-pages-builds).
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.page_build }}

## ping

{% data reusables.webhooks.ping_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} reciben un evento de ping con `app_id` que se usa para registrar la aplicación

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|------------
`zen` | `string` | Secuencia aleatoria de GitHub zen.
`hook_id` | `integer` | La ID del webhook que activó el ping.
`hook` | `object` | [Configuración del webhook](/rest/reference/webhooks#get-a-repository-webhook).
`hook[app_id]` | `integer` | Al registrar una instancia nueva de {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} envía un evento de ping a la **URL del webhook** que ha especificado durante el registro. El evento contiene `app_id`, que es necesario para [autenticar](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/) una aplicación.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.ping }}

## project

{% data reusables.webhooks.project_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `repository_projects` o `organization_projects`

{% ifversion projects-v2 %} {% note %}

**Nota**: Este evento solo se produce para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

### Objeto de carga útil del webhook

{% data reusables.webhooks.project_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.project.created }}

{% ifversion fpt or ghes or ghec %}

## project_card

{% data reusables.webhooks.project_card_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `repository_projects` o `organization_projects`

{% ifversion projects-v2 %} {% note %}

**Nota**: Este evento solo se produce para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

### Objeto de carga útil del webhook

{% data reusables.webhooks.project_card_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.project_card.created }}

## project_column

{% data reusables.webhooks.project_column_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `repository_projects` o `organization_projects`

{% ifversion projects-v2 %} {% note %}

**Nota**: Este evento solo se produce para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

### Objeto de carga útil del webhook

{% data reusables.webhooks.project_column_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.project_column.created }}

{% ifversion project-beta-webhooks %}

## projects_v2_item

{% note %}

**Nota:** Los eventos de webhook para {% data variables.projects.projects_v2 %} se encuentran actualmente en versión beta y están sujetos a cambios. Para compartir comentarios sobre webhooks de {% data variables.projects.projects_v2 %} con {% data variables.product.product_name %}, consulta el [debate de comentarios de webhooks de Proyectos](https://github.com/orgs/community/discussions/17405).

{% endnote %}

Actividad relacionada con los elementos de un {% data variables.projects.project_v2 %}. {% data reusables.webhooks.action_type_desc %} Para obtener más información, consulta "[Acerca de {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".

### Disponibilidad

- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `organization_projects`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción que se ha realizado en el elemento del proyecto. Puede ser `archived`, `converted`, `created`, `edited`, `restored`, `deleted` o `reordered`.
`projects_v2_item`|`object` | El propio elemento del proyecto. Para obtener más información sobre el elemento del proyecto, puedes usar `node_id` (el id. de nodo del elemento del proyecto) y `project_node_id` (el id. de nodo del proyecto) si quieres consultar información en GraphQL API. Para obtener más información, consulta "[Uso de la API para administrar proyectos](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)".
`changes`|`object` | Los cambios en el elemento del proyecto.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.projects_v2_item.created }}

{% endif %}

## public

{% data reusables.webhooks.public_short_desc %}
### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `metadata`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.public }} {% endif %}
## pull_request

{% data reusables.webhooks.pull_request_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `pull_requests`

### Objeto de carga útil del webhook

{% data reusables.webhooks.pull_request_webhook_properties %} {% data reusables.webhooks.pull_request_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

Las entregas para los eventos `review_requested` y `review_request_removed` tendrán un campo adicional denominado `requested_reviewer`.

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

## pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `pull_requests`

### Objeto de carga útil del webhook

{% data reusables.webhooks.pull_request_review_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

## pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `pull_requests`

### Objeto de carga útil del webhook

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

## pull_request_review_thread

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `pull_requests`

### Objeto de carga útil del webhook

{% data reusables.webhooks.pull_request_thread_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review_thread.resolved }}

## push

{% data reusables.webhooks.push_short_desc %}

{% note %}

**Nota:** No recibirá un webhook para este evento cuando inserte más de tres etiquetas al mismo tiempo.

{% endnote %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `contents`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`ref`|`string` | El elemento [`git ref`](/rest/reference/git#refs) completo que se ha insertado. Ejemplo: `refs/heads/main` o `refs/tags/v3.14.1`.
`before`|`string` | El SHA de la confirmación más reciente en `ref` antes de la inserción.
`after`|`string` | El SHA de la confirmación más reciente en `ref` después de la inserción.
`created`|`boolean` | Si esta inserción ha creado `ref`.
`deleted`|`boolean` | Si esta inserción ha eliminado `ref`.
`forced`|`boolean` | Si esta inserción ha sido una inserción forzada de `ref`.
`head_commit`|`object` | Para las inserciones donde `after` es o apunta a un objeto de confirmación, es una representación expandida de esa confirmación. Para las inserciones donde `after` hace referencia refiere a un objeto de etiqueta anotado, es una representación expandida de la confirmación a la que apunta la etiqueta anotada.
`compare`|`string` | Dirección URL que muestra los cambios de esta actualización de `ref`, de la confirmación de `before` a la confirmación de `after`. Para un elemento `ref` recién creado que se basa directamente en la rama predeterminada, esta es la comparación entre el encabezado de la rama predeterminada y la confirmación de `after`. De lo contrario, esto muestra todas las confirmaciones hasta la confirmación `after`.
`commits`|`array` | Un conjunto de objetos de confirmación que describen las confirmaciones subidas. (Las confirmaciones insertadas son todas las que se incluyen en `compare` entre las confirmaciones `before` y `after`).
`commits[][id]`|`string` | El SHA de la confirmación.
`commits[][timestamp]`|`string` | La marca de tiempo de tipo ISO 8601 de la confirmación.
`commits[][message]`|`string` | El mensaje de la confirmación.
`commits[][author]`|`object` | El autor de git de la confirmación.
`commits[][author][name]`|`string` | El nombre del autor de git.
`commits[][author][email]`|`string` | La dirección de correo electrónico del autor de git.
`commits[][url]`|`url` | URL que apunta al recurso de la API de la confirmación.
`commits[][distinct]`|`boolean` | Si la confirmación es distinta de cualquier otra que se haya subido antes.
`commits[][added]`|`array` | Un arreglo de archivos que se agregaron en la confirmación. En el caso de confirmaciones extremadamente grandes en las que {% data variables.product.product_name %} no puede calcular esta lista de forma oportuna, este valor puede estar vacío incluso si se agregaron archivos.
`commits[][modified]`|`array` | Un areglo de archivos que modificó la confirmación. En el caso de confirmaciones extremadamente grandes en las que {% data variables.product.product_name %} no puede calcular esta lista de forma oportuna, este valor puede estar vacío incluso si se modificaron archivos.
`commits[][removed]`|`array` | Un arreglo de archivos que se eliminaron en la confirmación. En el caso de confirmaciones extremadamente grandes en las que {% data variables.product.product_name %} no puede calcular esta lista de forma oportuna, este valor puede estar vacío incluso si se eliminaron archivos.
`pusher` | `object` | El usuario que subió la confirmación.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.push }}

## release

{% data reusables.webhooks.release_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `contents`

### Objeto de carga útil del webhook

{% data reusables.webhooks.release_webhook_properties %} {% data reusables.webhooks.release_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.release.published }}

## repository_dispatch

Este evento se produce cuando una instancia de {% data variables.product.prodname_github_app %} envía una solicitud `POST` al punto de conexión "[Crear un evento de envío de repositorio](/rest/reference/repos#create-a-repository-dispatch-event)".

### Disponibilidad

- {% data variables.product.prodname_github_apps %} deben tener el permiso `contents` para recibir este webhook.

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}

## repository

{% data reusables.webhooks.repository_short_desc %}

### Disponibilidad

- Los webhooks de repositorio reciben todos los tipos de eventos menos `deleted`
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `metadata` reciben todos los tipos de eventos, excepto `deleted`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | La acción que se ha realizado. Esta puede ser una de las siguientes:<ul><li>`created`: se crea un repositorio.</li><li>`deleted`: se elimina un repositorio.</li><li>`archived`: se archiva un repositorio.</li><li>`unarchived`: se anula el archivo de un repositorio.</li>{% ifversion ghes or ghae %}<li>`anonymous_access_enabled`: se habilita un repositorio [para el acceso anónimo a Git](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise), `anonymous_access_disabled`: se deshabilita un repositorio [para el acceso anónimo a Git](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).</li>{% endif %}<li>`edited`: se edita la información de un repositorio.</li><li>`renamed`: se cambia el nombre de un repositorio.</li><li>`transferred`: se transfiere un repositorio.</li><li>`publicized`: un repositorio se convierte en público.</li><li> `privatized`: un repositorio se convierte en privado.</li></ul>
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% ifversion fpt or ghec %}
## repository_import

{% data reusables.webhooks.repository_import_short_desc %} Para recibir este evento para un repositorio personal, debes crear un repositorio vacío antes de la importación. Este evento se puede desencadenar mediante [GitHub Importer](/articles/importing-a-repository-with-github-importer/) o [Source Imports API](/rest/reference/migrations#source-imports).

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

### Objeto de carga útil del webhook

{% data reusables.webhooks.repository_import_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.repository_import }}

## repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

### Objeto de carga útil del webhook

{% data reusables.webhooks.repository_vulnerability_alert_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% ifversion ghes or ghec %}

## secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `secret_scanning_alerts:read`

### Objeto de carga útil del webhook

{% data reusables.webhooks.secret_scanning_alert_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} `sender` | `object` | Si `action` es `resolved` o `reopened`, el objeto `sender` será el usuario que ha desencadenado el evento. El objeto `sender` está vacío para todas las demás acciones.

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }} {% endif %}

{% ifversion ghes > 3.4 or ghec or ghae-issue-6581 %}
## secret_scanning_alert_location

{% data reusables.webhooks.secret_scanning_alert_location_event_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `secret_scanning_alerts:read`

### Objeto de carga útil del webhook

{% data reusables.webhooks.secret_scanning_alert_location_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert_location.created }} {% endif %}

{% ifversion fpt or ghes or ghec %}
## security_advisory

La actividad relacionada con una asesoría de seguridad que revisó {% data variables.product.company_short %}. Una asesoría de seguridad que haya revisado {% data variables.product.company_short %} proporciona información sobre las vulnerabilidades relacionadas con la seguridad en el software de {% data variables.product.prodname_dotcom %}.

El conjunto de datos de asesoría de seguridad también impulsa las {% data variables.product.prodname_dependabot_alerts %} de GitHub. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)".

### Disponibilidad

- {% data variables.product.prodname_github_apps %} con el permiso `security_events`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | La acción que se ha realizado. La acción puede ser una de `published`, `updated`, `performed` o `withdrawn` para todos los eventos nuevos.
`security_advisory` |`object` | Los detalles de la asesoría de seguridad, incluyendo el resumen, descripción, y severidad.

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% endif %}

{% ifversion ghas-enablement-webhook %}

## security_and_analysis

Actividad relacionada con la habilitación o deshabilitación de las características de análisis y seguridad del código para un repositorio u organización.

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con al menos acceso `read-only` a la administración de repositorios

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`changes`|`object` | Los cambios realizados en las características de seguridad y análisis del código.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.security_and_analysis }}

{% endif %}

{% ifversion fpt or ghec %}
## sponsorship

{% data reusables.webhooks.sponsorship_short_desc %}

Solo puedes crear un webhook de patrocinio en {% data variables.product.prodname_dotcom %}. Para más información, vea "[Configuración de webhooks para eventos en la cuenta patrocinada](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)".

### Disponibilidad

- Cuentas patrocinadas

### Objeto de carga útil del webhook

{% data reusables.webhooks.sponsorship_webhook_properties %} {% data reusables.webhooks.sponsorship_properties %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil de un webhook cuando alguien crea un patrocinio

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

### Ejemplo de carga útil de un webhook cuando alguien degrada un patrocinio

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

## star (asterisco)

{% data reusables.webhooks.star_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

### Objeto de carga útil del webhook

{% data reusables.webhooks.star_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.star.created }}

## status

{% data reusables.webhooks.status_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `statuses`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`id` | `integer` | El identificador único del estado.
`sha`|`string` | El SHA de la confirmación.
`state`|`string` | El nuevo estado. Puede ser `pending`, `success`, `failure` o `error`.
`description`|`string` | La descripción opcional legible para las personas que se agrega al estado.
`target_url`|`string` | El enlace opcional agregado al estado.
`branches`|`array` | Un conjunto de objetos de la rama que contiene el SHA del estado. Cada rama contiene el SHA proporcionado, pero éste puede ser o no el encabezado de la rama. El conjunto incluye un máximo de 10 ramas.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.status }}

## equipo

{% data reusables.webhooks.team_short_desc %}

### Disponibilidad

- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `members`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | La acción que se ha realizado. Puede ser `created`, `deleted`, `edited`, `added_to_repository` o `removed_from_repository`.
`team`  |`object` | El equipo mismo.
`changes`|`object` | Cambios en el equipo si la acción ha sido `edited`.
`changes[description][from]` |`string` | Versión anterior de la descripción si la acción ha sido `edited`.
`changes[name][from]` |`string` | Versión anterior del nombre si la acción ha sido `edited`.
`changes[privacy][from]` |`string` | Versión anterior de la privacidad del equipo si la acción ha sido `edited`.
`changes[repository][permissions][from][admin]` | `boolean` | Versión anterior del permiso `admin` del miembro del equipo en un repositorio, si la acción ha sido `edited`.
`changes[repository][permissions][from][pull]` | `boolean` | Versión anterior del permiso `pull` del miembro del equipo en un repositorio, si la acción ha sido `edited`.
`changes[repository][permissions][from][push]` | `boolean` | Versión anterior del permiso `push` del miembro del equipo en un repositorio, si la acción ha sido `edited`.
`repository`|`object` | Repositorio que se ha agregado o quitado de la instancia de Purview del equipo si la acción ha sido `added_to_repository`, `removed_from_repository` o `edited`. Para las acciones `edited`, `repository` también contiene los nuevos niveles de permisos del equipo para el repositorio.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

## team_add

{% data reusables.webhooks.team_add_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `members`

### Objeto de carga útil del webhook

Clave | Tipo | Descripción
----|------|-------------
`team`|`object` | [Equipo](/rest/reference/teams) que se ha modificado.  **Nota:** Es posible que los eventos anteriores no incluyan esto en la carga.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.team_add }}

{% ifversion ghes or ghae %}

## usuario

Cuando un usuario es `created` o `deleted`.

### Disponibilidad
- Webhooks de GitHub Enterprise. Para más información, "[Webhooks globales](/rest/reference/enterprise-admin#global-webhooks/)".

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

## watch

{% data reusables.webhooks.watch_short_desc %}

El actor del evento es el [usuario](/rest/reference/users) que ha marcado con estrella un repositorio y el repositorio del evento es el [repositorio](/rest/reference/repos) que se ha marcado con estrella.

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_apps %} con el permiso `metadata`

### Objeto de carga útil del webhook

{% data reusables.webhooks.watch_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% ifversion fpt or ghes or ghec %}
## workflow_dispatch

Este evento se produce cuando alguien desencadena una ejecución de flujo de trabajo en GitHub o envía una solicitud `POST` al punto de conexión "[Crear un evento de envío de flujo de trabajo](/rest/reference/actions/#create-a-workflow-dispatch-event)". Para más información, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Disponibilidad

- {% data variables.product.prodname_github_apps %} deben tener el permiso `contents` para recibir este webhook.

### Objeto de carga útil del webhook

| Clave | Tipo | Descripción |
|-----|-----|-----|
| `inputs` | `object` | Entradas en el flujo de trabajo. Cada clave representa el nombre de la entrada, mientras que su valor representa el valor de esa entrada. |
{% data reusables.webhooks.org_desc %} | `ref` | `string` | La referencia de rama desde la que se ha ejecutado el flujo de trabajo. | {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.sender_desc %} | `workflow` | `string` | Ruta de acceso relativa al archivo de flujo de trabajo que contiene el flujo de trabajo. |

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }} {% endif %}

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}

## workflow_job

{% data reusables.webhooks.workflow_job_short_desc %}

### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- Webhooks empresariales

### Objeto de carga útil del webhook

{% data reusables.webhooks.workflow_job_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.workflow_job }}

{% endif %} {% ifversion fpt or ghes or ghec %}
## workflow_run

Cuando una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %} se solicita o se completa. Para más información, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#workflow_run)".

### Disponibilidad

- {% data variables.product.prodname_github_apps %} con los permisos `actions` o `contents`.

### Objeto de carga útil del webhook

{% data reusables.webhooks.workflow_run_properties %} {% data reusables.webhooks.workflow_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.sender_desc %}

### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.workflow_run }} {% endif %}
