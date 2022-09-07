---
title: Miembros del equipo
allowTitleToDifferFromFilename: true
shortTitle: Miembros
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Team members API

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %}
{% note %}

**Nota:** Cuando configuras la sincornizacion de equipos para un equipo con el proveedor de identidad (IdP) de tu organización, verás un error si intentas utilizar la API para hacer cambios en la membrecía de dicho equipo. Si tienes acceso para administrar las membrecías de usuario en tu IdP, puedes administrar la membrecía del equipo de GitHub a través de tu proveedor de identidad, lo cual agrega y elimina automáticamente a los miembros en una organización. Para obtener más información, consulta la sección "[Sincronizar equipos entre tu proveedor de identidad y GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% endnote %}

{% endif %}
