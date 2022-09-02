---
title: GitHub Apps
allowTitleToDifferFromFilename: true
intro: 'La API de {% data variables.product.prodname_github_apps %} te permite recuperar información sobre las {% data variables.product.prodname_github_apps %}.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Acerca de la API de {% data variables.product.prodname_github_apps %}

{% data reusables.apps.general-apps-restrictions %}

Esta página lista las terminales a las que puedes acceder mientras te autenticas como una GitHub App. Consulta la sección "[Autenticarse como una GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" para conocer más.

Cuando estás autenticado como una GitHub App, la API de GitHub Apps te habilita para obtener información de alto nivel sobre una GitHub App así como para obtener información específica sobre las instalaciones de éstas.

Puedes acceder a las terminales de la API de REST mientras estás autenticado como una GitHub App. Estas terminales tienen un texto que dice "Funciona con GitHub Apps". También puedes acceder a estas terminales mientras estás autenticado como un usuario.

Un subconjunto de terminales de la API de REST requiere autenticarse como una instalación de GitHub App. Consulta las [Instalaciones](/rest/reference/apps#installations) para obtener una lista de estas terminales.
