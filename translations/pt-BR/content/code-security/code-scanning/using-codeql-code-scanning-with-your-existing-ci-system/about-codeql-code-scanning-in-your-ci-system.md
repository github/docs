---
title: Sobre a varredura de código de CodeQL no seu sistema de CI
shortTitle: Code scanning in your CI
intro: 'Você pode analisar o código com {% data variables.product.prodname_codeql %} em um sistema de integração contínua de terceiros e carregar os resultados em {% data variables.location.product_location %}. Os alertas de {% data variables.product.prodname_code_scanning %} resultantes são exibidos junto com todos os alertas gerados dentro de {% data variables.product.product_name %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106402'
---
<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema de CI

{% data reusables.code-scanning.about-code-scanning %} Para obter informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %} com o {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)".

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

{% data reusables.code-scanning.codeql-cli-context-for-third-party-tools %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## Sobre a {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

Use {% data variables.product.prodname_codeql_cli %} para analisar:

- Linguagens dinâmicas, por exemplo, JavaScript e Python.
- Linguagens compiladas, por exemplo, C/C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} e Java.
- Bases de código em uma mistura de linguagens.

Para obter mais informações, confira "[Como instalar a {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

{% data reusables.code-scanning.licensing-note %}


<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
