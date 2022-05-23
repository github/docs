---
title: Revisión de dependencias
intro: 'The Dependency review API allows you to understand dependency changes, and the security impact of these changes, before you add them to your environment.'
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

## About the Dependency review API

{% data reusables.dependency-review.dependency-review-api-beta-note %}

La API de revisión de dependencias te permite entender los cambios a las dependencias y el impacto de seguridad de estos antes de que los agregues a tu ambiente. You can view the diff of dependencies between two commits of a repository, including vulnerability data for any version updates with known vulnerabilities. Para obtener más información sobre la revisión de dependencias, consulta la sección "[Acerca de la revisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".
