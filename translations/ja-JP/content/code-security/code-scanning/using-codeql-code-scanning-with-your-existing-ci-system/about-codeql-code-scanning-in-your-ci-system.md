---
title: CIシステムでのCodeQL Code scanningについて
shortTitle: Code scanning in your CI
intro: 'サード パーティの継続的インテグレーション システムで {% data variables.product.prodname_codeql %} を使ってコードを分析し、結果を {% data variables.location.product_location %} にアップロードできます。 結果の{% data variables.product.prodname_code_scanning %}アラートは、{% data variables.product.product_name %}内で生成されたアラートとともに表示されます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106406'
---
<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## CIシステムでの{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}について

{% data reusables.code-scanning.about-code-scanning %} 詳細については、「[{% data variables.product.prodname_codeql %} による{% data variables.product.prodname_code_scanning %}について](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)」を参照してください。

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

{% data reusables.code-scanning.codeql-cli-context-for-third-party-tools %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## {% data variables.product.prodname_codeql_cli %} について

{% data reusables.code-scanning.what-is-codeql-cli %}

以下の分析には{% data variables.product.prodname_codeql_cli %}を使ってください:

- たとえばJavaScriptやPythonのような動的言語。
- コンパイル済みの言語 (C/C++、C#、{% ifversion codeql-go-autobuild %} Go、{% endif %}Java など)。
- 複数言語を組み合わせて書かれたコードベース。

詳細については、「[CI システムでの {% data variables.product.prodname_codeql_cli %} のインストール](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」を参照してください。

{% data reusables.code-scanning.licensing-note %}


<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
