---
title: Informationen zur CodeQL-Codeüberprüfung in deinem CI-System
shortTitle: Code scanning in your CI
intro: 'Du kannst deinen Code mit {% data variables.product.prodname_codeql %} im Continuous-Integration-System eines Drittanbieters analysieren und die Ergebnisse auf {% data variables.location.product_location %} hochladen. Die sich daraus ergebenden {% data variables.product.prodname_code_scanning %}-Warnungen werden zusammen mit allen Warnungen angezeigt, die innerhalb von {% data variables.product.product_name %} generiert wurden.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106405'
---
<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Informationen zu {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} auf dem CI-System

{% data reusables.code-scanning.about-code-scanning %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %} mit {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql).

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

{% data reusables.code-scanning.codeql-cli-context-for-third-party-tools %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## Informationen zur {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

Verwende die {% data variables.product.prodname_codeql_cli %}, um Folgendes zu analysieren:

- Dynamische Sprachen, z. B. JavaScript und Python.
- Kompilierte Sprachen wie C/C++, C#{% ifversion codeql-go-autobuild %}, Go{% endif %} und Java.
- Codebases, die in einer Mischung aus Sprachen geschrieben wurden.

Weitere Informationen findest du unter [Installieren der {% data variables.product.prodname_codeql_cli %} auf deinem CI-System](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system).

{% data reusables.code-scanning.licensing-note %}


<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
