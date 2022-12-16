---
title: CI 시스템에서 CodeQL 코드 검사 정보
shortTitle: Code scanning in your CI
intro: '타사 연속 통합 시스템에서 {% data variables.product.prodname_codeql %}로 코드를 분석하고 결과를 {% data variables.location.product_location %}에 업로드할 수 있습니다. 결과 {% data variables.product.prodname_code_scanning %} 경고는 {% data variables.product.product_name %}에서 생성된 경고와 함께 표시됩니다.'
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
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106407'
---
<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## CI 시스템의 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 정보

{% data reusables.code-scanning.about-code-scanning %} 자세한 내용은 "[{% data variables.product.prodname_codeql %}이 포함된 {% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)"를 참조하세요.

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

{% data reusables.code-scanning.codeql-cli-context-for-third-party-tools %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## {% data variables.product.prodname_codeql_cli %} 정보

{% data reusables.code-scanning.what-is-codeql-cli %}

{% data variables.product.prodname_codeql_cli %}를 사용하여 다음을 분석합니다.

- 동적 언어(예: JavaScript 및 Python).
- 컴파일된 언어(예: C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} 및 Java)
- 여러 언어로 작성된 코드베이스.

자세한 내용은 “[CI 시스템에서 {% data variables.product.prodname_codeql_cli %} 설치](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”를 참조하세요.

{% data reusables.code-scanning.licensing-note %}


<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
