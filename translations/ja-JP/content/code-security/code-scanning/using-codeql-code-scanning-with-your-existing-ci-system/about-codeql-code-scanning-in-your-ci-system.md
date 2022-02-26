---
title: CIシステムでのCodeQL Code scanningについて
shortTitle: CIでのCode scanning
intro: '{% data variables.product.prodname_codeql %}を使い、サードパーティの継続的インテグレーションシステムでコードを分析し、結果を{% data variables.product.product_location %}にアップロードできます。 結果の{% data variables.product.prodname_code_scanning %}アラートは、{% data variables.product.product_name %}内で生成されたアラートとともに表示されます。'
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
---

<!--UI-LINK: When GitHub Enterprise Server 3.1+ doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## CIシステムでの{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}について

{% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

{% data reusables.code-scanning.codeql-context-for-actions-and-third-party-tools %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

{% data reusables.code-scanning.codeql-cli-context-for-third-party-tools %}

{% data reusables.code-scanning.upload-sarif-ghas %}

## {% data variables.product.prodname_codeql_cli %} について

{% data reusables.code-scanning.what-is-codeql-cli %}

以下の分析には{% data variables.product.prodname_codeql_cli %}を使ってください:

- たとえばJavaScriptやPythonのような動的言語。
- たとえばC/C++、C#、Javaのようなコンパイル言語。
- 複数言語を組み合わせて書かれたコードベース。

詳しい情報については「[CIシステムでの{% data variables.product.prodname_codeql_cli %}のインストール](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」を参照してください。

{% data reusables.code-scanning.licensing-note %}

{% ifversion ghes = 3.2 %}
<!-- Content for GHES 3.2 only. CodeQL CLI 2.6.2, which introduces full feature parity between CodeQL CLI and CodeQL runner, is officially recommended for GHES 3.0+ -->

Since version 2.6.3, the {% data variables.product.prodname_codeql_cli %} has had full feature parity with the {% data variables.product.prodname_codeql_runner %}.

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
{% ifversion ghes < 3.2 %}
{% data variables.product.prodname_codeql_cli %}もしくは{% data variables.product.prodname_codeql_runner %}をサードパーティのシステムに追加して、コードを分析するツールを呼び、SARIFの結果を{% data variables.product.product_name %}にアップロードしてください。 結果の{% data variables.product.prodname_code_scanning %}アラートは、{% data variables.product.product_name %}内で生成されたアラートとともに表示されます。

[{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) version 2.6.3 is available now for {% data variables.product.prodname_ghe_server %} 3.0 and later versions. For more information on migrating to the {% data variables.product.prodname_codeql_cli %}, see "[Migrating from the CodeQL runner to CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)."

{% data reusables.code-scanning.upload-sarif-ghas %}

## {% data variables.product.prodname_codeql_cli %}と{% data variables.product.prodname_codeql_runner %}の比較

{% data reusables.code-scanning.what-is-codeql-cli %}

The {% data variables.product.prodname_codeql_runner %} is a deprecated command-line tool that uses the {% data variables.product.prodname_codeql_cli %} to analyze code and upload the results to {% data variables.product.product_name %}. このツールは、アクションを使って{% data variables.product.product_name %}内でネイティブに実行される分析を模倣します。

{% data variables.product.prodname_codeql_cli %} 2.6.3 is a complete replacement for the runner with full feature parity. Generally, it is better to use the {% data variables.product.prodname_codeql_cli %} directly.

詳しい情報については「[CIシステムでの{% data variables.product.prodname_codeql_cli %}のインストール](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」を参照してください。

{% data reusables.code-scanning.deprecation-codeql-runner %}

For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."

{% endif %}
