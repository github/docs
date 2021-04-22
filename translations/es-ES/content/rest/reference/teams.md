---
title: Equipos
redirect_from:
  - /v3/teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

Esta API solo está disponible para los miembros autenticados de la [organization](/rest/reference/orgs) del equipo. Los tokens de acceso de OAuth requieren el [alcance](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) `read:org`. {% data variables.product.prodname_dotcom %} genera el `slug` del equipo a partir del `name` del mismo.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Debates

La API de debates de equipo te permite obtener, crear, editar y borrar las publicaciones de un debate en la página de un equipo. Puedes utilizar los debates de equipo para sostener conversaciones que no son específicas de un repositorio o proyecto. Cualquier miembro de la [organización](/rest/reference/orgs) del equipo puede crear y leer las publicaciones de debates públicos. Para obtener más detalles, consulta la sección "[Acerca de los debates de equipo](//organizations/collaborating-with-your-team/about-team-discussions/)". Para aprender más sobre cómo comentar en una publicación de debate, consulta la [API de comentarios para debates de equipo](/rest/reference/teams#discussion-comments). Esta API solo está disponible para los miembros autenticados de la organization del equipo.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussions' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comentarios de debate

La API de comentarios para debates de equipo te permite obtener, crear, editar y borrar los comentarios del debate en una publicación de un [debate de equipo](/rest/reference/teams#discussions). Cualquier miembro de la [organización](/rest/reference/orgs) del equipo puede crear y leer los comentarios de un debate público. Para obtener más detalles, consulta la sección "[Acerca de los debates de equipo](/organizations/collaborating-with-your-team/about-team-discussions/)". Esta API solo está disponible para los miembros autenticados de la organization del equipo.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'discussion-comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Miembros

Esta API solo está disponible para los miembros autenticados de la organization del equipo. Los tokens de acceso de OAuth requieren el [alcance](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) `read:org`.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
{% note %}

**Nota:** Cuando configuras la sincornizacion de equipos para un equipo con el proveedor de identidad (IdP) de tu organización, verás un error si intentas utilizar la API para hacer cambios en la membrecía de dicho equipo. Si tienes acceso para administrar las membrecías de usuario en tu IdP, puedes administrar la membrecía del equipo de GitHub a través de tu proveedor de identidad, lo cual agrega y elimina automáticamente a los miembros en una organización. Para obtener más información, consulta la sección "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronizar equipos entre tu proveedor de identidad y GitHub</a>".

{% endnote %}

{% endif %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
## Sincronización de equipos

La API de sincronización de equipos te permite administrar las conexiones entre los equipos de {% data variables.product.product_name %} y los grupos del proveedor de identidad (IdP) externo. Para utilizar esta API, el usuario autenticado debe ser un mantenedor del equipo o un propietario de la organización asociada con éste. El token que utilizas para autenticarte también necesitará autorizarse para su uso con tu proveedor IdP (SSO). Para obtener más información, consulta la sección "<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">Autorizar un token de acceso personal para su uso con una organización que tiene inicio de sesión único de SAML</a>".

Puedes administrar a los miembros del equipo de GitHub a través de tu IdP con la sincronización de equipos. Ésta se debe habilitar para usar la API de Sincronización de Equipos. Para obtener más información, consulta la sección "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronizar equipos entre tu proveedor de identidad y GitHub</a>".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'team-sync' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
