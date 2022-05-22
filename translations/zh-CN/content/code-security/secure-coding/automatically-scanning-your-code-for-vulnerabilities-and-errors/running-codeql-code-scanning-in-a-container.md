---
title: 在容器中运行 CodeQL 代码扫描
shortTitle: '容器中的 {% data variables.product.prodname_code_scanning_capc %}'
intro: '通过确保所有进程都在同一容器中运行，您可以在容器中运行 {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---
<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

### 关于使用容器化构建的 {% data variables.product.prodname_code_scanning %}

如果为编译语言设置 {% data variables.product.prodname_code_scanning %}，并且在容器化环境中构建代码，则分析可能会失败，并返回错误消息“No source code was seen during the build（在构建过程中没有看到源代码）”。 这表明 {% data variables.product.prodname_codeql %} 在代码编译过程中无法监视代码。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
You must run {% data variables.product.prodname_codeql %} inside the container in which you build your code. This applies whether you are using the {% data variables.product.prodname_codeql_cli %}, the {% data variables.product.prodname_codeql_runner %}, or {% data variables.product.prodname_actions %}. For the {% data variables.product.prodname_codeql_cli %} or the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/running-codeql-cli-in-your-ci-system)" or "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" for more information. 如果您使用 {% data variables.product.prodname_actions %}，请配置工作流程以在同一容器中运行所有操作。 更多信息请参阅“[示例工作流程](#example-workflow)”。
{% else %}
You must run {% data variables.product.prodname_codeql %} inside the container in which you build your code. This applies whether you are using the {% data variables.product.prodname_codeql_runner %} or {% data variables.product.prodname_actions %}. For the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" for more information. 如果您使用 {% data variables.product.prodname_actions %}，请配置工作流程以在同一容器中运行所有操作。 更多信息请参阅“[示例工作流程](#example-workflow)”。
{% endif %}

### 依赖项

如果您使用的容器缺少某些依赖项（例如，Git 必须安装并添加到 PATH 变量），您可能难以运行 {% data variables.product.prodname_code_scanning %}。 如果遇到依赖项问题，请查看通常包含在 {% data variables.product.prodname_dotcom %} 虚拟环境中的软件列表。 有关更多信息，请在以下位置查看特定于版本的 `readme` 文件：

* Linux: https://github.com/actions/virtual-environments/tree/main/images/linux
* macOS: https://github.com/actions/virtual-environments/tree/main/images/macos
* Windows: https://github.com/actions/virtual-environments/tree/main/images/win

### 示例工作流程

此示例工作流程在容器化环境中使用 {% data variables.product.prodname_actions %} 运行 {% data variables.product.prodname_codeql %} 分析。 `container.image` 的值标识要要使用的容器。 在此示例中，映像名称为 `codeql-container`，标记为 `f0f91db`。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)”。

``` yaml
name: "{% data variables.product.prodname_codeql %}"

on: 
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      security-events: write
      actions: read{% endif %}

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: github/codeql-action/analyze@v1
```
