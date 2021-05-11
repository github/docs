---
title: 将 SARIF 文件上传到 GitHub
shortTitle: 上传 SARIF 文件
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 关于 {% data variables.product.prodname_code_scanning %} 的 SARIF 文件上传

{% data variables.product.prodname_dotcom %} 使用静态分析结果交换格式 (SARIF) 文件中的信息创建 {% data variables.product.prodname_code_scanning %} 警报。 SARIF 文件可通过在用于上传文件的 {% data variables.product.prodname_actions %} 工作流程中运行的 SARIF 兼容分析工具生成。 或者，当文件生成为仓库外部的构件时， 您可以直接将 SARIF 文件推送到仓库，并使用工作流程上传 SARIF 文件。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)”。

您可以使用许多静态分析安全测试工具来生成 SARIF 文件，包括 {% data variables.product.prodname_codeql %}。 结果必须使用 SARIF 版本 2.1.0。 更多信息请参阅“[{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)”。

您可以使用 {% data variables.product.prodname_actions %}{% if currentVersion == "enterprise-server@2.22" %} （如果您的组织正在参与测试计划，则可以使用）{% endif %}、{% data variables.product.prodname_code_scanning %} API 或 {% data variables.product.prodname_codeql_runner %} 上传结果。 最佳上传方法将取决于您如何生成 SARIF 文件，例如，如果您使用：

- {% data variables.product.prodname_actions %} 来运行 {% data variables.product.prodname_codeql %} 操作，则无需进一步操作。 {% data variables.product.prodname_codeql %} 操作在完成分析后自动上传 SARIF 文件。
- "[管理工作流程运行](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)"
- {% data variables.product.prodname_dotcom %} 将在仓库中显示来自上传的 SARIF 文件的 {% data variables.product.prodname_code_scanning %} 警报。 如果您阻止自动上传，在准备上传结果时可以使用 `upload` 命令（更多信息请参阅“[在 CI 系统中运行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)”）。
- 作为仓库外部构件生成结果的工具，您可以使用 {% data variables.product.prodname_code_scanning %} API 上传文件（更多信息请参阅“[将分析作为 SARIF 数据上传](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)”）。

{% data reusables.code-scanning.not-available %}

### 通过 {% data variables.product.prodname_actions %} 上传 {% data variables.product.prodname_code_scanning %} 分析

要将第三方 SARIF 文件上传到 {% data variables.product.prodname_dotcom %}，需要 {% data variables.product.prodname_actions %} 工作流程。 更多信息请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”和“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

您的工作流需要使用 `upload-sarif` 操作，该操作包含可用于配置上传的输入参数。 它包含可用于配置上传的输入参数。 您将要使用的主要输入参数是 `sarif-file`，它会配置要上传的文件或 SARIF 文件的目录。 目录或文件路径相对于仓库的根目录。 更多信息请参阅 [`upload-sarif` 操作](https://github.com/github/codeql-action/tree/HEAD/upload-sarif)。

`upload-sarif` 操作可配置为在 `push` and `scheduled` 事件发生时运行。 有关 {% data variables.product.prodname_actions %} 事件的更多信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。

如果您的 SARIF 文件不含 `partialFingerprints`，则 `upload-sarif` 操作将为您计算 `partialFingerprints` 字段，并尝试防止重复警报。 {% data variables.product.prodname_dotcom %} 仅当仓库同时包含 SARIF 文件和静态分析中使用的源代码时才能创建 `partialFingerprints`。 有关防止重复警报的更多信息，请参阅“[{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning#preventing-duplicate-alerts-using-fingerprints)”。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

#### 在存储库外部生成的 SARIF 文件的工作流程示例

您可以创建一个新的工作流程，以在将 SARIF 文件提交到仓库后上传它们。 这在 SARIF 文件生成为仓库外部的构件时很有用。

只要提交被推送到仓库，此示例工作流程就会运行。 该操作使用 `partialFingerprints` 属性来确定是否发生了更改。 除了推送提交时运行之外，工作流程还预定每周运行一次。 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。

此工作流上传位于仓库根目录中的 `results.sarif` 文件。 有关创建工作流程文件的更多信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

或者，您也可以修改此工作流程以上传 SARIF 文件的目录。 例如，您可以将所有 SARIF 文件放在仓库根目录中的 `sarif-output` 目录中，并将操作的输入参数 `sarif_file` 设置为 `sarif-output`。

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Friday at 15:45 UTC.
on:
  push:
  schedule:
  - cron: '45 15 * * 5'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    # This step checks out a copy of your repository.
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Upload SARIF file
      uses: github/codeql-action/upload-sarif@v1
      with:
        # Path to SARIF file relative to the root of the repository
        sarif_file: results.sarif
```

#### 运行 ESLint 分析工具的示例工作流程

如果将第三方 SARIF 文件生成为持续集成 (CI) 工作流程的一部分，您可以将 `upload-sarif` 操作添加为运行 CI 测试后的一个步骤。 如果您还没有 CI 工作流程，可以使用 {% data variables.product.prodname_actions %} 模板创建一个。 更多信息请参阅“[{% data variables.product.prodname_actions %} 快速入门](/actions/quickstart)”。

只要提交被推送到仓库，此示例工作流程就会运行。 该操作使用 `partialFingerprints` 属性来确定是否发生了更改。 除了推送提交时运行之外，工作流程还预定每周运行一次。 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。

工作流程显示了将 ESLint 静态分析工具作为工作流程中一个步骤运行的示例。 `Run ESLint` 步骤运行 ESLint 工具，输出 `results.sarif` 文件。 然后，工作流程使用 `upload-sarif` 操作将 `results.sarif` 文件上传到 {% data variables.product.prodname_dotcom %}。 有关创建工作流程文件的更多信息，请参阅“[GitHub Actions 简介](/actions/learn-github-actions/introduction-to-github-actions)”。

```yml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Monday at 15:45 UTC.
on:
  push:
  schedule:
  - cron: '45 15 * * 1'

jobs:
  build:
    steps:
    - uses: actions/checkout@v2
    - name: Run npm install
      run: npm install
    # Runs the ESlint code analysis
    - name: Run ESLint
      # eslint exits 1 if it finds anything to report
      run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
    # Uploads results.sarif to GitHub repository using the upload-sarif action
    - uses: github/codeql-action/upload-sarif@v1
      with:
        # Path to SARIF file relative to the root of the repository
        sarif_file: results.sarif
```

### 延伸阅读

- "[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions)"
- "[查看工作流程历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)"
- "[在 CI 系统中运行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)"
- “[将分析作为 SARIF 数据上传](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)”
