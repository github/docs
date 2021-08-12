---
title: Eventos y cargas útiles de un Webhook
intro: 'Para cada evento de webhook, puedes revisar cuándo ocurre el evento, una carga útil de ejemplo, y las descripciones de los parámetros del objeto de dicha carga útil.'
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks/
  - /v3/activity/events/types/
  - /webhooks/event-payloads
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---


{% if currentVersion == "free-pro-team@latest" %}

{% endif %}

{% data reusables.webhooks.webhooks_intro %}

Puedes crear webhooks que se suscriban a los eventos listados en esta página. Cada evento de webhook incluye una descripción de las propiedades de dicho webhook y un ejemplo de carga útil. Para obtener más información, consulta "[Crear webhooks](/webhooks/creating/)".

### Propuiedades comunes del objeto de la carga útil del webhook

Cada carga útil del evento del webhook contiene propiedades únicas de dicho evento. Puedes encontrar estas propiedades únicas en las secciones individuales de tipo de evento.

| Clave    | Type        | Descripción                                                                                                                                |
| -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `Acción` | `secuencia` | La mayoría de las cargas útiles de webhooks contienen una propiedad de `action` que contiene la actividad específica que activa el evento. |
{% data reusables.webhooks.sender_desc %} Esta propiedad se incluye en cada carga útil del webhook.
{% data reusables.webhooks.repo_desc %} Las cargas útiles del webhook contienen la propiedad `repository` cuando el evento ocurre desde una actividad en un repositorio.
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %} Para obtener más información, consulta la sección "[Crear una {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)".

Las propiedades únicas de un evento de webhook son las mismas que encontrarás en la propiedad `payload` cuando utilices la [API de eventos](/rest/reference/activity#events). Una excepción es el [evento `push`](#push). Las propiedades únicas de la carga útil del evento `push` del webhook y la propiedad `payload` en la API de Eventos difieren entre ellos. La carga útil del webhook contiene información más detallada.

{% tip %}

**Nota:** Las cargas útiles se limitan a los 25 MB. Si tu evento genera una carga útil mayor, el webhook no se lanzará. Esto puede pasar, por ejemplo, en un evento de `create` si muchas ramas o etiquetas se cargan al mismo tiempo. Te sugerimos monitorear el tamaño de tu carga útil para garantizar la entrega.

{% endtip %}

#### Encabezados de entrega

Las cargas útiles de HTTP POST que se entregan a la terminal URL configurada para tu webhook contendrán varios encabezados especiales:

| Encabezado                    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-GitHub-Event`              | Nombre del evento que desencadenó la entrega.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `X-GitHub-Delivery`           | Una [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) para identificar la entrega.{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `X-GitHub-Enterprise-Version` | La versión de la instancia de {% data variables.product.prodname_ghe_server %} que envía la carga útil del HTTP POST.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `X-GitHub-Enterprise-Host`    | El nombre de host de la instancia de {% data variables.product.prodname_ghe_server %} que envió la carga útil de HTTP POST.{% endif %}{% if currentVersion != "github-ae@latest" %}
| `X-Hub-Signature`             | Este encabezado se envía si el webhook se configura con un [`secret`](/rest/reference/repos#create-hook-config-params). Éste es el resúmen hexadecimal de HMAC del cuerpo de la solicitud y se genera utilizando tanto la función de hash SHA-1 y el `secret` como la `key` HMAC.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} La `X-Hub-Signature` se proporciona para compatibilidad con las integraciones existentes, y te recomendamos que mejor utilices la `X-Hub-Signature-256`, que es más segura.{% endif %}{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `X-Hub-Signature-256`         | Este encabezado se envía si el webhook se configura con un [`secret`](/rest/reference/repos#create-hook-config-params). Este es el resumen hexadecimal de HMAC para el cuerpo de la solicitud y se genera utilizando la función de hash SHA-256 y el `secret` como la `key` HMAC.{% endif %}

También, el `User-Agent` para las solicitudes tendrá el prefijo `GitHub-Hookshot/`.

#### Ejemplo de entrega

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% if currentVersion != "github-ae@latest" %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c{% endif %}
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

### check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### Disponibilidad

- Los webhooks de repositorio solo reciben cargas útiles para los tipos de evento `created` y `completed` en un repositorio
- Los webhooks de organización solo reciben cargas útiles para los tipos de evento `created` y `completed` en los repositorios
- Las {% data variables.product.prodname_github_app %}s con el permiso `checks:read` reciben cargas útiles para los eventos `created` y `completed` que ocurren en un repositorio en donde se haya instalado la app. La app debe tener el permiso `checks:write` para recibir los tipos de evento `rerequested` y `requested_action`. Las cargas útiles para los tipos de evento `rerequested` y `requested_action` solo se enviarán a la {% data variables.product.prodname_github_app %} que se esté solicitando. Las {% data variables.product.prodname_github_app %}s con el `checks:write` se suscriben automáticamente a este evento de webhook.

#### Objeto de carga útil del webhook

{% data reusables.webhooks.check_run_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.check_run.created }}

### check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### Disponibilidad

- Los webhooks de los repositorios únicamente recibirán cargas útiles para los tipos de evento `completed` en un repositorio
- Los webhooks de organización recibirán únicamente cargas útiles para los tipos de evento `completed` en los repositorios
- Las {% data variables.product.prodname_github_app %}s con el permiso `checks:read` reciben cargas útiles para los eventos `created` y `completed` que ocurren en un repositorio en donde se haya instalado la app. La app debe tener el permiso `checks:write` para recibir los tipos de evento `requested` y `rerequested`. Las cargas útiles para los tipos de evento `requested` y `rerequested` se envían únicamente a la {% data variables.product.prodname_github_app %} que se está solicitando. Las {% data variables.product.prodname_github_app %}s con el `checks:write` se suscriben automáticamente a este evento de webhook.

#### Objeto de carga útil del webhook

{% data reusables.webhooks.check_suite_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### comentario_confirmación de cambios

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `contents`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.code_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | Si la `action` está como `reopened_by_user` o `closed_by_user`, el objeto que sea el `sender` será el usuario que activó el evento. El objeto `sender` es
{% if currentVersion == "free-pro-team@latest" %}`github` {% elsif currentVersion ver_gt "enterprise-server@3.0" %}`github-enterprise` {% else %}vacío {% endif %}para el resto de las acciones.

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

### comentario_confirmación de cambios

{% data reusables.webhooks.commit_comment_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `contents`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.commit_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}
{% endif %}

### content_reference

{% data reusables.webhooks.content_reference_short_desc %}

Los eventos de webhook se desencadenan basándose en la especificidad del dominio que registres. Por ejemplo, si registras un subdominio (`https://subdomain.example.com`), entonces la única URL para el subdominio activarán este evento. Si registras un dominio (`https://example.com`) entonces las URL para el dominio y todos sus subdominios activarán este evento. Consulta la sección "[Crear un adjunto de contenido](/rest/reference/apps#create-a-content-attachment)" para crear un nuevo adjunto de contenido.

#### Disponibilidad

- {% data variables.product.prodname_github_app %}s con el permiso `content_references:write`

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

### create (crear)

{% data reusables.webhooks.create_short_desc %}

{% note %}

**Nota:** No recibirás un webhook para este evento cuando cargues más de tres etiquetas al mismo tiempo.

{% endnote %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `contents`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.create_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.create }}

### delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**Nota:** No recibirás un webhook para este evento cuando borres más de tres etiquetas al mismo tiempo.

{% endnote %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `contents`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.delete_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.delete }}

### deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

#### Objeto de carga útil del webhook

{% data reusables.webhooks.deploy_key_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

### deployment

{% data reusables.webhooks.deployment_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `deployments`

#### Objeto de carga útil del webhook

| Clave        | Type                                                                                                                                        | Descripción                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `Acción`     | `secuencia`                                                                                                                                 | La acción realizada. Puede ser `created`.{% endif %}
| `deployment` | `objeto`                                                                                                                                    | El [despliegue](/rest/reference/repos#list-deployments). |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.deployment }}

### deployment_status

{% data reusables.webhooks.deployment_status_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `deployments`

#### Objeto de carga útil del webhook

| Clave                              | Type                                                                                                                                        | Descripción                                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `Acción`                           | `secuencia`                                                                                                                                 | La acción realizada. Puede ser `created`.{% endif %}
| `deployment_status`                | `objeto`                                                                                                                                    | El [Estado del despliegue](/rest/reference/repos#list-deployment-statuses).               |
| `deployment_status["state"]`       | `secuencia`                                                                                                                                 | El estado nuevo. Puede ser `pending`, `success`, `failure`, o `error`.                    |
| `deployment_status["target_url"]`  | `secuencia`                                                                                                                                 | El enlace opcional agregado al estado.                                                    |
| `deployment_status["description"]` | `secuencia`                                                                                                                                 | La descripción opcional legible para las personas que se agrega al estado.                |
| `deployment`                       | `objeto`                                                                                                                                    | El [despliegue](/rest/reference/repos#list-deployments) con el que se asocia este estado. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% if currentVersion == "free-pro-team@latest" %}
### debate

{% data reusables.webhooks.discussions-webhooks-beta %}

Actividad relacionada con un debate. Para obtener más información, consulta la sección "[Utilizar la API de GraphQL para los debates](/graphql/guides/using-the-graphql-api-for-discussions)".
#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- Las {% data variables.product.prodname_github_app %}s con el permiso de `discussions`

#### Objeto de carga útil del webhook

| Clave    | Type        | Descripción                                                                                                                                                               |
| -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Acción` | `secuencia` | La acción realizada. Puede ser `created`, `edited`, `deleted`, `pinned`, `unpinned`, `locked`, `unlocked`, `transferred`, `category_changed`, `answered`, o `unanswered`. |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.discussion.created }}

### discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

La actividad relacionada con un comentario en un debate. Para obtener más información, consulta la sección "[Utilizar la API de GraphQL para los debates](/graphql/guides/using-the-graphql-api-for-discussions)".

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- Las {% data variables.product.prodname_github_app %}s con el permiso de `discussions`

#### Objeto de carga útil del webhook

| Clave        | Type        | Descripción                                                                                                    |
| ------------ | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `Acción`     | `secuencia` | La acción realizada. Puede ser `created`, `edited`, o `deleted`.                                               |
| `comentario` | `objeto`    | El recurso de [`discussion comment`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment). |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }}
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### empresa

{% data reusables.webhooks.enterprise_short_desc %}

#### Disponibilidad

- Webhooks de GitHub Enterprise. Para obtener más información, consulta los "[webhooks globales](/rest/reference/enterprise-admin#global-webhooks/)."

#### Objeto de carga útil del webhook

| Clave    | Type        | Descripción                                                                              |
| -------- | ----------- | ---------------------------------------------------------------------------------------- |
| `Acción` | `secuencia` | La acción realizada. Puede ser `anonymous_access_enabled` o `anonymous_access_disabled`. |

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

### bifurcación

{% data reusables.webhooks.fork_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `contents`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.fork_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.fork }}

### github_app_authorization

Este evento ocurre cuando alguien revoca su autorización de una {% data variables.product.prodname_github_app %}. Una {% data variables.product.prodname_github_app %} recibe este webhook predeterminadamente y no puede desuscribirse de este evento.

{% data reusables.webhooks.authorization_event %} Para obtener detalles sobre las solicitudes de usuario a servidor, las cuales requieren autorización de la {% data variables.product.prodname_github_app %}, consulta la sección "[Identificar y autorizar a los usuarios para las {% data variables.product.prodname_github_app %}s](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

#### Disponibilidad

- {% data variables.product.prodname_github_app %}s

#### Objeto de carga útil del webhook

| Clave    | Type        | Descripción                               |
| -------- | ----------- | ----------------------------------------- |
| `Acción` | `secuencia` | La acción realizada. Puede ser `revoked`. |
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

### gollum

{% data reusables.webhooks.gollum_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `contents`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.gollum_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.gollum }}

### installation

{% data reusables.webhooks.installation_short_desc %}

{% note %}

**Nota:** Este evento reemplaza al evento obsoletizado de `integration_installation`.

{% endnote %}

#### Disponibilidad

- {% data variables.product.prodname_github_app %}s

#### Objeto de carga útil del webhook

{% data reusables.webhooks.installation_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

### installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

{% note %}

**Nota:** Este evento remplaza al evento obsoletizado de `integration_installation_repositories`.

{% endnote %}

#### Disponibilidad

- {% data variables.product.prodname_github_app %}s

#### Objeto de carga útil del webhook

{% data reusables.webhooks.installation_repositories_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

### comentario_propuesta

{% data reusables.webhooks.issue_comment_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `issues`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

### propuestas

{% data reusables.webhooks.issues_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `issues`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.issue_webhook_properties %}
{% data reusables.webhooks.issue_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook cuando alguien edita un informe de problemas

{{ webhookPayloadsForCurrentVersion.issues.edited }}

### etiqueta

{% data reusables.webhooks.label_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `metadata`

#### Objeto de carga útil del webhook

| Clave                  | Type        | Descripción                                                           |
| ---------------------- | ----------- | --------------------------------------------------------------------- |
| `Acción`               | `secuencia` | La acción que se realizó. Puede ser `created`, `edited`, o `deleted`. |
| `etiqueta`             | `objeto`    | La etiqueta que se añadió.                                            |
| `changes`              | `objeto`    | Los cambios a la etiqueta si la acción se `edited` (editó).           |
| `changes[name][from]`  | `secuencia` | La versión previa del nombre si la acción está como `edited`.         |
| `changes[color][from]` | `secuencia` | La versión previa del color si la acción se `edited` (editó).         |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% if currentVersion == "free-pro-team@latest" %}
### marketplace_purchase

Actividad relacionada con una compra en GitHub Marketplace. {% data reusables.webhooks.action_type_desc %} Para obtener más información, consulta el "[GitHub Marketplace](/marketplace/)".

#### Disponibilidad

- {% data variables.product.prodname_github_app %}s

#### Objeto de carga útil del webhook

| Clave    | Type        | Descripción                                                                                                                                         |
| -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Acción` | `secuencia` | La acción realizada para un plan de [GitHub Marketplace](https://github.com/marketplace). Puede ser una de las siguientes:<ul><li>`purchased` - Alguien compró un plan de GitHub Marketplace. El cambio deberá entrar en vigor en la cuenta inmediatamente.</li><li>`pending_change` - Reicbirás el evento `pending_change` cuando alguien haya degradado o cancelado un plan de GitHub Marketplace para indicar que ocurrirá un cambio en la cuenta. El nuevo plan o cancelación entra en vigor al final del ciclo de facturación.  El tipo de evento `cancelled` o `changed` se enviará cuando haya concluido el ciclo de facturación y la cancelación o plan nuevo deberán entrar en vigor.</li><li>`pending_change_cancelled` - Alguien canceló un cambio pendiente. Los cambios pendientes incluyen cancelaciones y degradaciones de planes que entrarán en vigor al final del ciclo de facturación. </li><li>`changed` - Alguien mejoró o degradó un plan de GitHub Marketplace y el cambio deberá entrar en vigor en la cuenta de inmediato.</li><li>`cancelled` - Alguien canceló un plan de GitHub marketplace y el último ciclo de facturación ya terminó. El cambio deberá entrar en vigor en la cuenta inmediatamente.</li></ul> |

Para obtener una descripción detallada de esta carga útil y de aquella para cada tipo de `action`, consulta los [eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

#### Ejemplo de carga útil de webhook cuando alguien compra el plan

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

### miembro

{% data reusables.webhooks.member_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `members`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.member_webhook_properties %}
{% data reusables.webhooks.member_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.member.added }}

### membership

{% data reusables.webhooks.membership_short_desc %}

#### Disponibilidad

- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `members`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.membership_properties %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.membership.removed }}

### meta

Se eliminó el evento para el cual se configuró este webhook. Este evento únicamente escuchará los cambios del gancho particular en el cual se instaló. Por lo tanto, debe seleccionarse para cada gancho para el cual quieras recibir metaeventos.

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

#### Objeto de carga útil del webhook

| Clave     | Type        | Descripción                                                                                                                                                       |
| --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Acción`  | `secuencia` | La acción realizada. Puede ser `deleted`.                                                                                                                         |
| `hook_id` | `número`    | La id del webhook modificado.                                                                                                                                     |
| `gancho`  | `objeto`    | El webhook modificado. Este contendrá claves diferentes con base en el tipo de webhook que sea: de repositorio, organización, negocio, app, o GitHub Marketplace. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

### hito

{% data reusables.webhooks.milestone_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `pull_requests`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.milestone_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.milestone.created }}

### organization

{% data reusables.webhooks.organization_short_desc %}

#### Disponibilidad

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- Los webhooks de GitHub Enterprise reciben únicamente eventos de `created` y `deleted`. Para obtener más información, consulta los "[webhooks globales](/rest/reference/enterprise-admin#global-webhooks/).{% endif %}
- Los webhooks de organización únicamente reciben los eventos `deleted`, `added`, `removed`, `renamed`, y `invited` events
- {% data variables.product.prodname_github_app %}s con el permiso `members`

#### Objeto de carga útil del webhook

| Clave        | Type        | Descripción                                                                                                                                                                                                                                          |
| ------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Acción`     | `secuencia` | La acción que se realizó. Puede ser uno de entre:{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} `created`,{% endif %} `deleted`, `renamed`, `member_added`, `member_removed`, o `member_invited`. |
| `invitación` | `objeto`    | La invitación para el usuario o correo electrónico si la acción es `member_invited`.                                                                                                                                                                 |
| `membership` | `objeto`    | La membrecía entre el usuario y la organización.  No está presente cuando la cción es `member_invited`.                                                                                                                                              |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% if currentVersion == "free-pro-team@latest" %}

### org_block

{% data reusables.webhooks.org_block_short_desc %}

#### Disponibilidad

- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `organization_administration`

#### Objeto de carga útil del webhook

| Clave          | Type        | Descripción                                                 |
| -------------- | ----------- | ----------------------------------------------------------- |
| `Acción`       | `secuencia` | La acción realizada. Puede ser `blocked` o `unblocked`.     |
| `blocked_user` | `objeto`    | Información acerca del usuario que se bloqueó o desbloqueó. |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}

### paquete

Actividad relacionada con el {% data variables.product.prodname_registry %}. {% data reusables.webhooks.action_type_desc %} para obtener más información, consulta la sección "[Administrar paquetes con {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)" para aprender más sobre el {% data variables.product.prodname_registry %}.

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

#### Objeto de carga útil del webhook

{% data reusables.webhooks.package_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.package.published }}
{% endif %}

### page_build

{% data reusables.webhooks.page_build_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `pages`

#### Objeto de carga útil del webhook

| Clave   | Type     | Descripción                                                                                                      |
| ------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`    | `número` | El idientificador único de la compilación de la página.                                                          |
| `build` | `objeto` | La misma terminal de [Listar las compilaciones de GitHub Pages](/rest/reference/repos#list-github-pages-builds). |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.page_build }}

### ping

{% data reusables.webhooks.ping_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- Las {% data variables.product.prodname_github_app %}s reciben un evento de ping con un `app_id` que se utiliza para registrar la app

#### Objeto de carga útil del webhook

| Clave          | Type        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `zen`          | `secuencia` | Secuencia aleatoria de GitHub zen.                                                                                                                                                                                                                                                                                                                                                                                |
| `hook_id`      | `número`    | La ID del webhook que activó el ping.                                                                                                                                                                                                                                                                                                                                                                             |
| `gancho`       | `objeto`    | La [configuración del webhook](/rest/reference/repos#get-a-repository-webhook).                                                                                                                                                                                                                                                                                                                                   |
| `hook[app_id]` | `número`    | Cuando registras una {% data variables.product.prodname_github_app %} nueva, {% data variables.product.product_name %} envía un evento de ping a la **URL del webhook** que especificaste durante el registro. El evento contiene la `app_id`, la cual se requiere para [autenticar](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/) una app. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.ping }}

### project_card

{% data reusables.webhooks.project_card_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- Las {% data variables.product.prodname_github_app %}s con el permiso `repository_projects` o `organization_projects`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.project_card_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.project_card.created }}

### project_column

{% data reusables.webhooks.project_column_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- Las {% data variables.product.prodname_github_app %}s con el permiso `repository_projects` o `organization_projects`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.project_column_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.project_column.created }}

### project

{% data reusables.webhooks.project_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- Las {% data variables.product.prodname_github_app %}s con el permiso `repository_projects` o `organization_projects`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.project_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.project.created }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### public

{% data reusables.webhooks.public_short_desc %}
#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `metadata`

#### Objeto de carga útil del webhook

| Clave | Type | Descripción |
| ----- | ---- | ----------- |
|       |      |             |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.public }}
{% endif %}
### solicitud_extracción

{% data reusables.webhooks.pull_request_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `pull_requests`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.pull_request_webhook_properties %}
{% data reusables.webhooks.pull_request_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

Las entregas para los eventos `review_requested` y `review_request_removed` tendrán un campo adicional llamado `requested_reviewer`.

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

### revisión_solicitud de extracción

{% data reusables.webhooks.pull_request_review_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `pull_requests`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.pull_request_review_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

### comentarios _revisiones_solicitudes de extracción

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `pull_requests`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

### subir

{% data reusables.webhooks.push_short_desc %}

{% note %}

**Nota:** No recibirás un webhook para este evento cuando cargues más de tres etiquetas al mismo tiempo.

{% endnote %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `contents`

#### Objeto de carga útil del webhook

| Clave                      | Type        | Descripción                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ref`                      | `secuencia` | Toda la [`git ref`](/rest/reference/git#refs) que se cargó. Ejemplo: `refs/heads/main`.                                                                                                                                                                                                                                                                                              |
| `before`                   | `secuencia` | El SHA de la confirmación más reciente en `ref` antes de la carga.                                                                                                                                                                                                                                                                                                                   |
| `after`                    | `secuencia` | El SHA de la confirmación más reciente en `ref` después de la carga.                                                                                                                                                                                                                                                                                                                 |
| `commits`                  | `arreglo`   | Un conjunto de objetos de confirmación que describen las confirmaciones subidas. (El conjunto incluye un máximo de 20 confirmaciones. De ser encesario, puedes utilizar la [API de confirmaciones](/rest/reference/repos#commits) para recuperar confirmaciones adicionales. Este límite se aplica a los eventos cronológicos únicamente y no se aplica a las entregas de webhooks). |
| `commits[][id]`            | `secuencia` | El SHA de la confirmación.                                                                                                                                                                                                                                                                                                                                                           |
| `commits[][timestamp]`     | `secuencia` | La marca de tiempo de tipo ISO 8601 de la confirmación.                                                                                                                                                                                                                                                                                                                              |
| `commits[][message]`       | `secuencia` | El mensaje de la confirmación.                                                                                                                                                                                                                                                                                                                                                       |
| `commits[][author]`        | `objeto`    | El autor de git de la confirmación.                                                                                                                                                                                                                                                                                                                                                  |
| `commits[][author][name]`  | `secuencia` | El nombre del autor de git.                                                                                                                                                                                                                                                                                                                                                          |
| `commits[][author][email]` | `secuencia` | La dirección de correo electrónico del autor de git.                                                                                                                                                                                                                                                                                                                                 |
| `commits[][url]`           | `url`       | URL que apunta al recurso de la API de la confirmación.                                                                                                                                                                                                                                                                                                                              |
| `commits[][distinct]`      | `boolean`   | Si la confirmación es distinta de cualquier otra que se haya subido antes.                                                                                                                                                                                                                                                                                                           |
| `commits[][added]`         | `arreglo`   | Un arreglo de archivos que se agregaron en la confirmación.                                                                                                                                                                                                                                                                                                                          |
| `commits[][modified]`      | `arreglo`   | Un areglo de archivos que modificó la confirmación.                                                                                                                                                                                                                                                                                                                                  |
| `commits[][removed]`       | `arreglo`   | Un arreglo de archivos que se eliminaron en la confirmación.                                                                                                                                                                                                                                                                                                                         |
| `pusher`                   | `objeto`    | El usuario que subió la confirmación.                                                                                                                                                                                                                                                                                                                                                |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.push }}

### lanzamiento

{% data reusables.webhooks.release_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `contents`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.release_webhook_properties %}
{% data reusables.webhooks.release_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.release.published }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### repository_dispatch

Este evento ocurre cuando una {% data variables.product.prodname_github_app %} envía una solicitud de `POST` a la terminal "[Crear un evento de envío de repositorio](/rest/reference/repos#create-a-repository-dispatch-event)".

#### Disponibilidad

- Las {% data variables.product.prodname_github_app %}s deben tener el permiso `contents` para recibir este webhook.

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}
{% endif %}

### repositorio

{% data reusables.webhooks.repository_short_desc %}

#### Disponibilidad

- Los webhooks de repositorio reciben todos los eventos excepto los de `deleted`
- Webhooks de organización
- Las {% data variables.product.prodname_github_app %}s con el permiso `metadata` reciben todos los tipos de evento menos los de `deleted`

#### Objeto de carga útil del webhook

| Clave    | Type        | Descripción                                                                              |
| -------- | ----------- | ---------------------------------------------------------------------------------------- |
| `Acción` | `secuencia` | La acción que se realizó. Esta puede ser una de las siguientes:<ul><li>`created` - Un repositorio se crea.</li><li>Un repositorio se borra.</li><li>`archived` - Un repositorio se archiva.</li><li>`unarchived` - Un repositorio se desarchiva.</li>{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}<li>`anonymous_access_enabled` - Un repositorio se [habilita para el acceso anónimo de Git](/rest/overview/api-previews#anonymous-git-access-to-repositories), `anonymous_access_disabled` - Un repositorio se [inhabilita para el acceso anónimo de Git](/rest/overview/api-previews#anonymous-git-access-to-repositories)</li>{% endif %}<li>`edited` - Se edita la información de un repositorio.</li><li>`renamed` - Un repositorio se renombra.</li><li>`transferred` - Un repositorio se transfiere.</li><li>`publicized` - Un repositorio se hace público.</li><li> `privatized` - Un repositorio se hace privado.</li></ul> |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% if currentVersion == "free-pro-team@latest"%}
### repository_import

{% data reusables.webhooks.repository_import_short_desc %} Para recibir este evento para un repositorio personal, debes crear un repositorio vacío antes de la importación. Este evento puede activarse utilizando ya sea el [Importador de GitHub](/articles/importing-a-repository-with-github-importer/) o la [API de importaciones fuente](/rest/reference/migrations#source-imports).

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

#### Objeto de carga útil del webhook

{% data reusables.webhooks.repository_import_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.repository_import }}

### repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

#### Objeto de carga útil del webhook

{% data reusables.webhooks.repository_vulnerability_alert_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- Las {% data variables.product.prodname_github_app %}s con el permiso de `secret_scanning_alerts:read`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.secret_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | Si la `action` se muestra como `resolved` o como `reopened`, el objeto `sender` será el usuario que activó el evento. El objeto `sender` estará vacío en el resto de las acciones.

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@1.19" %}
### security_advisory

Actividad relacionada con una asesoría de seguridad. Una asesoría de seguridad proporciona información acerca de las vulnerabilidades relacionadas con la seguridad en el software dentro de GitHub. El conjunto de datos de la asesoría de seguridad también impulsa las alertas de seguridad de Github, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)".
{% endif %}

#### Disponibilidad

- {% data variables.product.prodname_github_app %}s with the `security_events` permission

#### Objeto de carga útil del webhook

| Clave               | Type        | Descripción                                                                                                                              |
| ------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `Acción`            | `secuencia` | La acción que se realizó. La acción puede ser una de entre `published`, `updated`, o `performed` en el caso de todos los eventos nuevos. |
| `security_advisory` | `objeto`    | Los detalles de la asesoría de seguridad, incluyendo el resumen, descripción, y severidad.                                               |

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% if currentVersion == "free-pro-team@latest" %}
### sponsorship

{% data reusables.webhooks.sponsorship_short_desc %}

Solo puedes crear un webhook de patrocinio en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Configurar webhooks para eventos en tu cuenta patrocinada](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)".

#### Disponibilidad

- Cuentas patrocinadas

#### Objeto de carga útil del webhook

{% data reusables.webhooks.sponsorship_webhook_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil de un webhook cuando alguien crea un patrocinio

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

#### Ejemplo de carga útil de un webhook cuando alguien degrada un patrocinio

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

### estrella

{% data reusables.webhooks.star_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización

#### Objeto de carga útil del webhook

{% data reusables.webhooks.star_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.star.created }}

### estado

{% data reusables.webhooks.status_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `statuses`

#### Objeto de carga útil del webhook

| Clave         | Type        | Descripción                                                                                                                                                                                              |
| ------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | `número`    | El identificador único del estado.                                                                                                                                                                       |
| `sha`         | `secuencia` | El SHA de la confirmación.                                                                                                                                                                               |
| `state`       | `secuencia` | El estado nuevo. Puede ser `pending`, `success`, `failure`, o `error`.                                                                                                                                   |
| `descripción` | `secuencia` | La descripción opcional legible para las personas que se agrega al estado.                                                                                                                               |
| `url_destino` | `secuencia` | El enlace opcional agregado al estado.                                                                                                                                                                   |
| `branches`    | `arreglo`   | Un conjunto de objetos de la rama que contiene el SHA del estado. Cada rama contiene el SHA proporcionado, pero éste puede ser o no el encabezado de la rama. El conjunto incluye un máximo de 10 ramas. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.status }}

### equipo

{% data reusables.webhooks.team_short_desc %}

#### Disponibilidad

- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `members`

#### Objeto de carga útil del webhook

| Clave                                           | Type        | Descripción                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Acción`                                        | `secuencia` | La acción que se realizó. Puede ser uno de entre `created`, `deleted`, `edited`, `added_to_repository`, o `removed_from_repository`.                                                                                                                                                                     |
| `equipo`                                        | `objeto`    | El equipo mismo.                                                                                                                                                                                                                                                                                         |
| `changes`                                       | `objeto`    | Los cambios al equipo si la acción está como `edited`.                                                                                                                                                                                                                                                   |
| `changes[description][from]`                    | `secuencia` | La versión previa de la descripción si la acción está como `edited`.                                                                                                                                                                                                                                     |
| `changes[name][from]`                           | `secuencia` | La versión previa del nombre si la acción está como `edited`.                                                                                                                                                                                                                                            |
| `changes[privacy][from]`                        | `secuencia` | La versión previa de la privacidad del equipo si ésta se encuentra como `edited`.                                                                                                                                                                                                                        |
| `changes[repository][permissions][from][admin]` | `boolean`   | La versión previa de los permisos de `admin` del miembro del equipo en un repositorio si la acción se encuentra como `edited`.                                                                                                                                                                           |
| `changes[repository][permissions][from][pull]`  | `boolean`   | La versión previa de los permisos de `pull` del miembro del equipo en un repositorio si la acción se encuentra como `edited`.                                                                                                                                                                            |
| `changes[repository][permissions][from][push]`  | `boolean`   | La versión previa de los permisos de `push` del miembro del equipo en un repositorio si la acción se encuentra como `edited`.                                                                                                                                                                            |
| `repositorio`                                   | `objeto`    | El repositorio que se agregó o eliminó del alcance del equipo si la acción se encuentra como `added_to_repository`, `removed_from_repository`, o `edited`. Para las acciones que estén como `edited`, el `repository` también contendrá los nuevos niveles de permiso del equipo para dicho repositorio. |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

### team_add

{% data reusables.webhooks.team_add_short_desc %}

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `members`

#### Objeto de carga útil del webhook

| Clave    | Type     | Descripción                                                                                                                     |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `equipo` | `objeto` | El [equipo](/rest/reference/teams) que se modificó.  **Nota:** Los eventos anteriores podrían no incluir esto en la carga útil. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.team_add }}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### usuario

Cuando se aplica `created` o `deleted` a un usuario.

#### Disponibilidad
- Webhooks de GitHub Enterprise. Para obtener más información, consulta los "[webhooks globales](/rest/reference/enterprise-admin#global-webhooks/)."

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

### observar

{% data reusables.webhooks.watch_short_desc %}

El actor del evento es el [usuario](/rest/reference/users) que marcó el repositorio con una estrella, y el repositorio del evento es el [repositorio](/rest/reference/repos) que se marcó con una estrella.

#### Disponibilidad

- Webhooks de repositorio
- Webhooks de organización
- {% data variables.product.prodname_github_app %}s con el permiso `metadata`

#### Objeto de carga útil del webhook

{% data reusables.webhooks.watch_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### workflow_dispatch

Este evento ocurre cuando alguien activa una ejecución de flujo de trabajo en GitHub o cuando envía una solicitud de tipo `POST` a la terminal [Crear un evento de envío de flujo de trabajo](/rest/reference/actions/#create-a-workflow-dispatch-event)". Para obtener más información, consulta la sección "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

#### Disponibilidad

- Las {% data variables.product.prodname_github_app %}s deben tener el permiso `contents` para recibir este webhook.

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### workflow_run

Cuando una ejecución de flujo de trabajo de {% data variables.product.prodname_actions %} se solicita o se completa. Para obtener más información, consulta la sección "[Eventos que activan los flujos de trabajo](/actions/reference/events-that-trigger-workflows#workflow_run)".

#### Disponibilidad

- En {% data variables.product.prodname_github_app %}s con los permisos de `actions` o de `contents`.

#### Objeto de carga útil del webhook

{% data reusables.webhooks.workflow_run_properties %}
{% data reusables.webhooks.workflow_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}

#### Ejemplo de carga útil del webhook

{{ webhookPayloadsForCurrentVersion.workflow_run }}
{% endif %}
