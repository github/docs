---
title: 关于 CI 系统中的 CodeQL 代码扫描
shortTitle: Code scanning in your CI
intro: '可以在第三方持续集成系统中用 {% data variables.product.prodname_codeql %} 分析代码，并将结果上传到 {% data variables.location.product_location %}。 由此产生的 {% data variables.product.prodname_code_scanning %} 警报与 {% data variables.product.product_name %} 内生成的任何警报一起显示。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106403'
---
<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于 CI 系统中的 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %} 有关信息，请参阅“[关于使用 {% data variables.product.prodname_codeql %} 进行 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)”。

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

{% data reusables.code-scanning.codeql-cli-context-for-third-party-tools %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## 关于 {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

使用 {% data variables.product.prodname_codeql_cli %} 分析：

- 动态语言，例如 JavaScript 和 Python。
- 已编译的语言，例如 C/C++、C#、{% ifversion codeql-go-autobuild %} Go、{% endif %} 和 Java。
- 以多种语言编写的代码库。

有关详细信息，请参阅“[在 CI 系统中安装 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”。

{% data reusables.code-scanning.licensing-note %}


<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
