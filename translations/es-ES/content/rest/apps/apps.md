---
title: Aplicaciones
intro: La API de GitHub Apps te permite recuperar la información sobre la instalación así como aquella específica sobre las GitHub Apps.
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.apps.general-apps-restrictions %}

Esta página lista las terminales a las que puedes acceder mientras te autenticas como una GitHub App. Consulta la sección "[Autenticarse como una GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" para conocer más.

Cuando estás autenticado como una GitHub App, la API de GitHub Apps te habilita para obtener información de alto nivel sobre una GitHub App así como para obtener información específica sobre las instalaciones de éstas.

Puedes acceder a las terminales de la API v3 de REST mientras estás autenticado como una GitHub App. Estas terminales tienen una sección de "Notas" que contiene una viñeta que dice "Funciona con las GitHub Apps". También puedes acceder a estas terminales mientras estás autenticado como un usuario.

Un subconjunto de terminales de la API v3 de REST requiere que te autentiques como una instalación de una GitHub App. Consulta las [Instalaciones](/rest/reference/apps#installations) para obtener una lista de estas terminales.
