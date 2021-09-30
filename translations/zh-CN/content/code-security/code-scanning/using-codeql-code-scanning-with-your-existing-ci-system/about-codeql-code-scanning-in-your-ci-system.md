---
title: 关于 CI 系统中的 CodeQL 代码扫描
shortTitle: CI 中的代码扫描
intro: '您可以在第三方持续集成 系统中用 {% data variables.product.prodname_codeql %} 分析您的代码，并将结果上传到 {% data variables.product.product_location %}。 由此产生的 {% data variables.product.prodname_code_scanning %} 警报与 {% data variables.product.product_name %} 内生成的任何警报一起显示。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
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

## 关于 CI 系统中的 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

您可以使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_name %} 内运行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 。 或者，如果您使用第三方持续集成或持续交付/部署 （CI/CD） 系统，您可以在现有系统中运行 {% data variables.product.prodname_codeql %} 分析并将结果上传到 {% data variables.product.product_location %}。

{% ifversion fpt or ghes > 3.1 or ghae-next %}
<!--Content for GitHub.com, GHAE next, and GHES 3.2 and onward. CodeQL CLI is the preferred method, and CodeQL runner is deprecated. -->

将 {% data variables.product.prodname_codeql_cli %} 添加到第三方系统，然后调用工具分析代码并将 SARIF 结果上传到 {% data variables.product.product_name %}。 由此产生的 {% data variables.product.prodname_code_scanning %} 警报与 {% data variables.product.product_name %} 内生成的任何警报一起显示。

{% data reusables.code-scanning.upload-sarif-ghas %}

## 关于 {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.what-is-codeql-cli %}

使用 {% data variables.product.prodname_codeql_cli %} 分析：

- 动态语言，例如 JavaScript 和 Python。
- 编译的语言，例如 C/C++、C# 和 Java。
- 以多种语言编写的代码库。

更多信息请参阅“[在 CI 系统中安装 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”。

{% data reusables.code-scanning.licensing-note %}

{% ifversion ghes = 3.2 %}
<!-- Content for GHES 3.2 only. CodeQL CLI 2.6.2, which introduces full feature parity between CodeQL CLI and CodeQL runner, is officially recommended for GHES 3.3+, so some people may need to use the CodeQL runner -->

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

<!--Content for GHES 3.1 only. Both CodeQL CLI and CodeQL runner are available -->
{% ifversion ghes = 3.1 %}
将 {% data variables.product.prodname_codeql_cli %} 或 {% data variables.product.prodname_codeql_runner %} 添加到第三方系统，然后调用工具分析代码并将 SARIF 结果上传到 {% data variables.product.product_name %}。 由此产生的 {% data variables.product.prodname_code_scanning %} 警报与 {% data variables.product.product_name %} 内生成的任何警报一起显示。

{% data reusables.code-scanning.upload-sarif-ghas %}

## 比较 {% data variables.product.prodname_codeql_cli %}与 {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

{% data variables.product.prodname_codeql_runner %} 是一个命令行工具，它使用 {% data variables.product.prodname_codeql_cli %} 分析代码并将结果上传到 {% data variables.product.product_name %}。 该工具使用操作在 {% data variables.product.product_name %} 内本地模拟分析运行。 运行器能够集成比 CLI 更复杂的构建环境，但这种能力会使设置更加困难和容易发生错误。 调试任何问题也更加困难。 一般情况下，最好直接使用 {% data variables.product.prodname_codeql_cli %}，除非它不支持您的用例。

使用 {% data variables.product.prodname_codeql_cli %} 分析：

- 动态语言，例如 JavaScript 和 Python。
- 具有编译语言的代码库，可以用单个命令或运行单个脚本来构建。

更多信息请参阅“[在 CI 系统中安装 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”。

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

更多信息请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql_runner %}](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)”。

{% endif %}

<!--Content for GHAE and GHES 3.0 only. Only CodeQL runner is available -->
{% ifversion ghes = 3.0 or ghae %}
{% data reusables.code-scanning.upload-sarif-ghas %}

将 {% data variables.product.prodname_codeql_runner %} 添加到第三方系统，然后调用工具分析代码并将 SARIF 结果上传到 {% data variables.product.product_name %}。 由此产生的 {% data variables.product.prodname_code_scanning %} 警报与 {% data variables.product.product_name %} 内生成的任何警报一起显示。

{% data reusables.code-scanning.deprecation-codeql-runner %}

要在 CI 系统中设置代码扫描，请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql_runner %}](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)”。
{% endif %}
