---
title: Sincronización de equipos
intro: 'The Team synchronization API allows you to manage connections between {% data variables.product.product_name %} teams and external identity provider (IdP) groups.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Team synchronization API

Para utilizar esta API, el usuario autenticado debe ser un mantenedor del equipo o un propietario de la organización asociada con éste. El token que utilizas para autenticarte también necesitará autorizarse para su uso con tu proveedor IdP (SSO). Para obtener más información, consulta la sección "[Autorizar un token de acceso personal para su uso con una organización que tiene inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

Puedes administrar a los miembros del equipo de GitHub a través de tu IdP con la sincronización de equipos. Ésta se debe habilitar para usar la API de Sincronización de Equipos. Para obtener más información, consulta la sección "[Sincronizar equipos entre tu proveedor de identidad y GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% note %}

**Nota:** La API de sincronización de equipos no puede utilizarse con {% data variables.product.prodname_emus %}. Para aprender más sobre cómo administrar una {% data variables.product.prodname_emu_org %}, consulta la sección "[API de grupos externos](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}
