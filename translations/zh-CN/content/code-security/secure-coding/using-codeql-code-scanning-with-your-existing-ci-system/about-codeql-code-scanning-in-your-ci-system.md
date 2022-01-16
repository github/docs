---
title: 关于 CI 系统中的 CodeQL 代码扫描
shortTitle: CI 中的代码扫描
intro: '您可以在第三方持续集成 系统中用 {% data variables.product.prodname_codeql %} 分析您的代码，并将结果上传到 {% data variables.product.product_location %}。 由此产生的 {% data variables.product.prodname_code_scanning %} 警报与 {% data variables.product.product_name %} 内生成的任何警报一起显示。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
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
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 关于 CI 系统中的 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %} 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)”。

您可以使用操作在 {% data variables.product.product_name %} 内运行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 。 或者，如果您使用第三方持续集成或持续交付/部署 （CI/CD） 系统，您可以在现有系统中运行 {% data variables.product.prodname_codeql %} 分析并将结果上传到 {% data variables.product.product_location %}。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
将 {% data variables.product.prodname_codeql_cli %} 或 {% data variables.product.prodname_codeql_runner %} 添加到第三方系统，然后调用工具分析代码并将 SARIF 结果上传到 {% data variables.product.product_name %}。 由此产生的 {% data variables.product.prodname_code_scanning %} 警报与 {% data variables.product.product_name %} 内生成的任何警报一起显示。

{% data reusables.code-scanning.upload-sarif-ghas %}

### 比较 {% data variables.product.prodname_codeql_cli %}与 {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.what-is-codeql-cli %}

{% data variables.product.prodname_codeql_runner %} 是一个命令行工具，它使用 {% data variables.product.prodname_codeql_cli %} 分析代码并将结果上传到 {% data variables.product.product_name %}。 该工具使用操作在 {% data variables.product.product_name %} 内本地模拟分析运行。 运行器能够集成比 CLI 更复杂的构建环境，但这种能力会使设置更加困难和容易发生错误。 调试任何问题也更加困难。 一般情况下，最好直接使用 {% data variables.product.prodname_codeql_cli %}，除非它不支持您的用例。

使用 {% data variables.product.prodname_codeql_cli %} 分析：

- 动态语言，例如 JavaScript 和 Python。
- 具有编译语言的代码库，可以用单个命令或运行单个脚本来构建。

更多信息请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/running-codeql-cli-in-your-ci-system)”。

{% if currentVersion == "free-pro-team@latest" %}
如果需要设置 CI 系统以协调编译器调用以及运行 {% data variables.product.prodname_codeql %} 分析，您必须使用 {% data variables.product.prodname_codeql_runner %}。
{% else %}
如果您需要执行以下操作，则需要使用 {% data variables.product.prodname_codeql_runner %}：
- 设置 CI 系统以协调编译器调用以及运行 {% data variables.product.prodname_codeql %} 分析
- 分析仓库中的多种语言。
{% endif %}

{% data reusables.code-scanning.beta-codeql-runner %}

更多信息请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql_runner %}](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)”。

{% else %}

{% data reusables.code-scanning.upload-sarif-ghas %}

将 {% data variables.product.prodname_codeql_runner %} 添加到第三方系统，然后调用工具分析代码并将 SARIF 结果上传到 {% data variables.product.product_name %}。 由此产生的 {% data variables.product.prodname_code_scanning %} 警报与 {% data variables.product.product_name %} 内生成的任何警报一起显示。

{% data reusables.code-scanning.beta-codeql-runner %}

要在 CI 系统中设置代码扫描，请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql_runner %}](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)”。
{% endif %}
