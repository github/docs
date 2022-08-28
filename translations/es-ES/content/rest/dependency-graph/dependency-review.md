---
title: Revisión de dependencias
intro: La API de revisión de dependencias te permite entender los cambios a las dependencias y el impacto de seguridad de dichos cambios antes de que los agregues a tu ambiente.
versions:
  fpt: '*'
  ghes: '>=3.6'
  ghec: '*'
  ghae: issue-6396
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## Acerca de la API de revisión de dependencias

{% data reusables.dependency-review.dependency-review-api-beta-note %}

La API de revisión de dependencias te permite entender los cambios a las dependencias y el impacto de seguridad de estos antes de que los agregues a tu ambiente. Puedes ver el diff de las dependencias entre dos confirmaciones de un repositorio, incluyendo los datos de vulnerabilidades para cualquier actualización de versión con las vulnerabilidades conocidas. Para obtener más información sobre la revisión de dependencias, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".
