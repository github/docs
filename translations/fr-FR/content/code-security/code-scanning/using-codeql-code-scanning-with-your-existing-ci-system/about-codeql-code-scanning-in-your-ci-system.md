---
title: À propos de l’analyse du code CodeQL dans votre système d’intégration continue
shortTitle: Code scanning in your CI
intro: 'Vous pouvez analyser votre code avec {% data variables.product.prodname_codeql %} dans un système d’intégration continue tiers et charger les résultats dans {% data variables.location.product_location %}. Les alertes d’{% data variables.product.prodname_code_scanning %} obtenues s’affichent en même temps que toutes les alertes générées dans {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system
ms.openlocfilehash: d650ba0768c9406295626321e908a6e6785a7666
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106404'
---
<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## À propos de l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} dans votre système CI

{% data reusables.code-scanning.about-code-scanning %} Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql) ».

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

{% data reusables.code-scanning.codeql-cli-context-for-third-party-tools %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## À propos de l’{% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

Utilisez l’{% data variables.product.prodname_codeql_cli %} pour analyser :

- Les langages dynamiques, par exemple, JavaScript et Python.
- Langages compilés, par exemple, C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} et Java.
- Les codebases écrits dans un mélange de langages.

Pour plus d’informations, consultez « [Installation de l’{% data variables.product.prodname_codeql_cli %} dans votre système CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system) ».

{% data reusables.code-scanning.licensing-note %}


<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
