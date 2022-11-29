---
title: 将 SARIF 文件上传到 GitHub
shortTitle: Upload a SARIF file
intro: '{% data reusables.code-scanning.you-can-upload-third-party-analysis %}'
permissions: 'People with write permissions to a repository can upload {% data variables.product.prodname_code_scanning %} data generated outside {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/uploading-a-code-scanning-analysis-to-github
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/uploading-a-sarif-file-to-github
  - /code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Integration
  - Actions
  - Repositories
  - CI
  - SARIF
ms.openlocfilehash: 3def104e487f54e2c48d462d1dcfe8bab63c6fa3
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161157'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于 {% data variables.product.prodname_code_scanning %} 的 SARIF 文件上传

{% data variables.product.prodname_dotcom %} 使用静态分析结果交换格式 (SARIF) 文件中的信息创建 {% data variables.product.prodname_code_scanning %} 警报。 SARIF 文件可通过在用于上传文件的 {% data variables.product.prodname_actions %} 工作流程中运行的 SARIF 兼容分析工具生成。 或者，当文件生成为仓库外部的构件时， 您可以直接将 SARIF 文件推送到仓库，并使用工作流程上传 SARIF 文件。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

您可以使用许多静态分析安全测试工具来生成 SARIF 文件，包括 {% data variables.product.prodname_codeql %}。 结果必须使用 SARIF 版本 2.1.0。 有关详细信息，请参阅“[{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/code-security/secure-coding/sarif-support-for-code-scanning)”。

可以使用 {% data variables.product.prodname_actions %}、{% data variables.product.prodname_code_scanning %} API{% ifversion codeql-runner-supported %} the {% data variables.code-scanning.codeql_runner %},{% endif %} 或 {% data variables.product.prodname_codeql_cli %} 上传结果。 最佳上传方法将取决于您如何生成 SARIF 文件，例如，如果您使用：

- {% data variables.product.prodname_actions %} 来运行 {% data variables.product.prodname_codeql %} 操作，则无需进一步操作。 {% data variables.product.prodname_codeql %} 操作在完成分析后自动上传 SARIF 文件。
- {% data variables.product.prodname_actions %} 运行与 SARIF 兼容的分析工具，您可以更新工作流程以包括上传结果的最后一步（见下文）。
 - {% data variables.product.prodname_codeql_cli %} 在 CI 系统中运行 {% data variables.product.prodname_code_scanning %}，你可以使用 CLI 将结果上传到 {% data variables.product.prodname_dotcom %}（有关详细信息，请参阅“[在 CI 系统中安装 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)”）。{% ifversion codeql-runner-supported %}
- {% data variables.code-scanning.codeql_runner %}，要在 CI 系统中运行 {% data variables.product.prodname_code_scanning %}，默认情况下运行器会在完成后自动将结果上传到 {% data variables.product.prodname_dotcom %}。 如果阻止自动上传，当准备好上传结果时，可以使用 `upload` 命令（有关详细信息，请参阅“[在 CI 系统中运行 {% data variables.code-scanning.codeql_runner %}](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)”）。{% endif %}
- 作为存储库外部工件生成结果的工具，你可以使用 {% data variables.product.prodname_code_scanning %} API 上传文件（有关详细信息，请参阅“[将分析作为 SARIF 数据上传](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)”）。

{% data reusables.code-scanning.not-available %}

## 通过 {% data variables.product.prodname_actions %} 上传 {% data variables.product.prodname_code_scanning %} 分析

要使用 {% data variables.product.prodname_actions %} 将第三方 SARIF 文件上传到存储库，需要工作流程。 有关详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

工作流将需要使用 `upload-sarif` 操作，该操作是 `github/codeql-action` 存储库的一部分。 它包含可用于配置上传的输入参数。 您将使用的主要输入参数是：

- `sarif-file`，用于配置要上传的 SARIF 文件的文件或目录。 目录或文件路径相对于存储库的根目录。
- `category`（可选），用于为 SARIF 文件中的结果分配类别。 这使您能够以多种方式分析同一提交，并使用 {% data variables.product.prodname_dotcom %} 中的 {% data variables.product.prodname_code_scanning %} 视图查看结果。 例如，您可以使用多个工具进行分析，在单存储库中，您可以根据已更改文件的子集分析存储库的不同片段。

有关详细信息，请参阅 [`upload-sarif` 操作](https://github.com/github/codeql-action/tree/{% ifversion actions-node16-action %}v2{% else %}v1{% endif %}/upload-sarif)。

`upload-sarif` 操作可以配置为在 `push` 和 `scheduled` 事件发生时运行。 有关 {% data variables.product.prodname_actions %} 事件的详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows)”。

如果你的 SARIF 文件不包含 `partialFingerprints`，则 `upload-sarif` 操作将为你计算 `partialFingerprints` 字段并尝试防止重复警报。 仅当存储库同时包含 SARIF 文件和静态分析中使用的源代码时，{% data variables.product.prodname_dotcom %} 才能创建 `partialFingerprints`。 有关防止重复警报的详细信息，请参阅“[关于代码扫描的 SARIF 支持](/code-security/secure-coding/sarif-support-for-code-scanning#providing-data-to-track-code-scanning-alerts-across-runs)”。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### 在存储库外部生成的 SARIF 文件的工作流程示例

您可以创建一个新的工作流程，以在将 SARIF 文件提交到仓库后上传它们。 当 SARIF 文件作为存储库外部的工件生成时，这很有用。

只要提交被推送到仓库，此示例工作流程就会运行。 操作使用 `partialFingerprints` 属性来确定是否发生了更改。 除了在推送提交时运行，工作流计划为每周运行一次。 有关详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows)”。

此工作流上传位于存储库根目录中的 `results.sarif` 文件。 有关创建工作流文件的详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

或者，您也可以修改此工作流程以上传 SARIF 文件的目录。 例如，您可以将所有 SARIF 文件放在存储库根目录中名为 `sarif-output` 的目录中，并将操作的输入参数 `sarif_file` 设置为 `sarif-output`。 请注意，如果上传目录，则每个 SARIF 文件都必须包含唯一的 `runAutomationDetails.id` 才能定义结果的类别。 有关详细信息，请参阅“[`runAutomationDetails` 对象](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#runautomationdetails-object)”。

```yaml
name: "Upload SARIF"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Thursday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 4'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      # This step checks out a copy of your repository.
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Upload SARIF file
        uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
          # Optional category for the results
          # Used to differentiate multiple results for one commit
          category: my-analysis-tool
```

### 运行 ESLint 分析工具的示例工作流程

如果在持续集成 (CI) 工作流中生成第三方 SARIF 文件，则可以在运行 CI 测试后将 `upload-sarif` 操作添加为一个步骤。 如果您还没有 CI 工作流程，可以使用 {% data variables.product.prodname_actions %} 模板创建一个。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 快速入门](/actions/quickstart)”。

只要提交被推送到仓库，此示例工作流程就会运行。 操作使用 `partialFingerprints` 属性来确定是否发生了更改。 除了在推送提交时运行，工作流计划为每周运行一次。 有关详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows)”。

工作流程显示了将 ESLint 静态分析工具作为工作流程中一个步骤运行的示例。 `Run ESLint` 步骤运行 ESLint 工具并输出 `results.sarif` 文件。 然后，工作流使用 `upload-sarif` 操作将 `results.sarif` 文件上传到 {% data variables.product.prodname_dotcom %}。 有关创建工作流文件的详细信息，请参阅“[GitHub Actions 简介](/actions/learn-github-actions/introduction-to-github-actions)”。

```yaml
name: "ESLint analysis"

# Run workflow each time code is pushed to your repository and on a schedule.
# The scheduled workflow runs every Wednesday at 15:45 UTC.
on:
  push:
  schedule:
    - cron: '45 15 * * 3'

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      # required for all workflows
      security-events: write
      # only required for workflows in private repositories
      actions: read
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run npm install
        run: npm install
      # Runs the ESlint code analysis
      - name: Run ESLint
        # eslint exits 1 if it finds anything to report
        run: node_modules/.bin/eslint build docs lib script spec-main -f node_modules/@microsoft/eslint-formatter-sarif/sarif.js -o results.sarif || true
      # Uploads results.sarif to GitHub repository using the upload-sarif action
      - uses: {% data reusables.actions.action-codeql-action-upload-sarif %}
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: results.sarif
```

## 延伸阅读

- [{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions)
- [查看工作流历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)
- [关于 CI 系统中的 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)
- [上传分析作为 SARIF 数据](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data)
