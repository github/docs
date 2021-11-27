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

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
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
<!-- Content for GHES 3.2 only. CodeQL CLI 2.6.2, which introduces full feature parity between CodeQL CLI and CodeQL runner, is officially recommended for GHES 3.3+, so some people may need to use the CodeQL runner -->

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
{% ifversion ghes = 3.1 %}
{% data variables.product.prodname_codeql_cli %}もしくは{% data variables.product.prodname_codeql_runner %}をサードパーティのシステムに追加して、コードを分析するツールを呼び、SARIFの結果を{% data variables.product.product_name %}にアップロードしてください。 結果の{% data variables.product.prodname_code_scanning %}アラートは、{% data variables.product.product_name %}内で生成されたアラートとともに表示されます。

{% data reusables.code-scanning.upload-sarif-ghas %}

## {% data variables.product.prodname_codeql_cli %}と{% data variables.product.prodname_codeql_runner %}の比較

{% data reusables.code-scanning.what-is-codeql-cli %}

{% data variables.product.prodname_codeql_runner %}は、{% data variables.product.prodname_codeql_cli %}を使ってコードを分析し、結果を{% data variables.product.product_name %}にアップロードするコマンドラインツールです。 このツールは、アクションを使って{% data variables.product.product_name %}内でネイティブに実行される分析を模倣します。 このランナーは、CLIよりももっと複雑なビルド環境に統合できますが、そのために難しくなっており、セットアップでエラーが起こりやすくなっています。 また、問題をデバッグするのもさらに難しくなっています。 概して、あなたのユースケースがサポートされていないのでないかぎり、{% data variables.product.prodname_codeql_cli %}を直接使う方がいいでしょう。

以下の分析には{% data variables.product.prodname_codeql_cli %}を使ってください:

- たとえばJavaScriptやPythonのような動的言語。
- 単一のコマンドで、あるいは単一のスクリプトを実行することでビルドできるコンパイル言語でのコードベース。

詳しい情報については「[CIシステムでの{% data variables.product.prodname_codeql_cli %}のインストール](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」を参照してください。

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

詳しい情報については、「[{% data variables.product.prodname_codeql_runner %} を CI システムで実行する](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)」を参照してください。

{% endif %}

<!--Content for GHES 3.0 only. Only CodeQL runner is available -->
{% ifversion ghes = 3.0 %}
{% data reusables.code-scanning.upload-sarif-ghas %}

{% data variables.product.prodname_codeql_runner %}をサードパーティのシステムに追加して、コードを分析するツールを呼び、SARIFの結果を{% data variables.product.product_name %}にアップロードしてください。 結果の{% data variables.product.prodname_code_scanning %}アラートは、{% data variables.product.product_name %}内で生成されたアラートとともに表示されます。

{% data reusables.code-scanning.deprecation-codeql-runner %}

CIシステムでCode scanningをセットアップするには、「[CIシステムでの{% data variables.product.prodname_codeql_runner %}の実行](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)」を参照してください。
{% endif %}
