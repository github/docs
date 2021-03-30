---
title: 在容器中运行 CodeQL 代码扫描
shortTitle: '容器中的 {% data variables.product.prodname_code_scanning_capc %}'
intro: '通过确保所有进程都在同一容器中运行，您可以在容器中运行 {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - 安全
---

{% data reusables.code-scanning.beta %}

### 关于使用容器化构建的 {% data variables.product.prodname_code_scanning %}

如果为编译语言设置 {% data variables.product.prodname_code_scanning %}，并且在容器化环境中构建代码，则分析可能会失败，并返回错误消息“No source code was seen during the build（在构建过程中没有看到源代码）”。 这表明 {% data variables.product.prodname_codeql %} 在代码编译过程中无法监视代码。

您必须在构建代码的容器中运行 {% data variables.product.prodname_codeql %}。 这适用于您使用 {% data variables.product.prodname_codeql_runner %} 或 {% data variables.product.prodname_actions %}。 如果您使用 {% data variables.product.prodname_codeql_runner %}，请在代码构建容器中运行它。 有关 {% data variables.product.prodname_codeql_runner %} 的更多信息，请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system)”。 如果您使用 {% data variables.product.prodname_actions %}，请配置工作流程以在同一容器中运行所有操作。 更多信息请参阅“[示例工作流程](#example-workflow)”。

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
    runs-on: ubuntu-latest 

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
