---
title: 配置代码扫描
intro: '您可以配置 {% data variables.product.prodname_dotcom %} 如何扫描项目代码以查找漏洞和错误。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### 关于 {% data variables.product.prodname_code_scanning %} 配置

您可以使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_name %} 中运行 {% data variables.product.prodname_code_scanning %}，或使用 {% data variables.product.prodname_codeql_runner %} 从持续集成 (CI) 系统运行它。 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。 有关 {% data variables.product.prodname_codeql_runner %} 的更多信息，请参阅“[在 CI 系统中运行 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)”。

本文说明在 {% data variables.product.product_name %} 上运行 {% data variables.product.prodname_code_scanning %}。

在为仓库配置 {% data variables.product.prodname_code_scanning %} 之前，必须将 {% data variables.product.prodname_actions %} 工作流程添加到仓库中以设置 {% data variables.product.prodname_code_scanning %}。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)”。

{% data reusables.code-scanning.edit-workflow %}

您可以为 {% data variables.product.prodname_code_scanning %} 编写配置文件。 {% data variables.product.prodname_dotcom_the_website %} 上的 {% data variables.product.prodname_marketplace %} 包含您可以使用的其他 {% data variables.product.prodname_code_scanning %} 工作流程。 此文章中提供的具体示例与 {% data variables.product.prodname_codeql_workflow %} 文件有关。

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} 将工作流程文件保存在仓库的 _.github/workflows_ 目录中。 您可以通过搜索其文件名来查找已添加的工作流程。 例如，默认情况下，{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 的工作流程文件被称为 _codeql-analysis.yml_。

1. 在仓库中，浏览至要编辑的工作流程文件。
1. 要打开工作流程编辑器，在文件视图右上角单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![编辑工作流程文件按钮](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. 编辑文件后，单击 **Start commit（开始提交）**并完成“Commit changes（提交更改）”表单。 您可以选择直接提交到当前分支，或者创建一个新分支并启动拉取请求。 ![将更新提交到 codeql.yml 工作流程](/assets/images/help/repository/code-scanning-workflow-update.png)

有关编辑工作流程文件的更多信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

### 配置频率

您可以按时间表或在仓库中发生特定事件时扫描代码。

每当推送到仓库以及每次创建拉取请求时，时扫描代码可防止开发者在代码中引入新的漏洞和错误。 按时间表扫描可了解 {% data variables.product.company_short %}、安全研究者和社区发现的最新漏洞和错误，即使开发者并未主动维护仓库。

#### 按推送扫描

如果使用默认工作流程，则除了事件触发的扫描之外，{% data variables.product.prodname_code_scanning %} 还会每周扫描一次仓库代码。 要调整此时间表，请编辑工作流程中的 `cron` 值。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#on)”。

#### 扫描拉取请求

默认 {% data variables.product.prodname_codeql_workflow %} 使用 `pull_request` 事件在针对默认分支的拉取请求上触发代码扫描。 如果从私有复刻打开拉取请求，`pull_request` 事件不会触发。

有关 `pull_request` 事件的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)”。

#### 避免对拉取请求进行不必要的扫描

您可能希望避免针对默认分支的特定拉取请求触发代码扫描，而不管更改了哪些文件。 可以通过在 {% data variables.product.prodname_code_scanning %} 工作流程中指定 `on:pull_request:paths-ignore` or `on:pull_request:paths` 来进行配置。 例如，如果拉取请求中唯一的更改是文件扩展名为 `.md` 或 `.txt` 的文件，则您可以使用以下 `paths-ignore` 数组。

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**注：**

* `on:pull_request:paths-witch` 和 `on:pull_request:pull_request:path` 设置条件来确定工作流程中的操作是否会在拉取请求上运行。 它们无法确定在操作_运行_时将分析哪些文件。 当拉取请求包含 `on:pull_request:paths-with` 或 `on:pull_request:path:path` 未匹配的任何文件时，工作流程将运行操作并扫描拉取请求中更改的所有文件，包括 `on:pull_request:paths-ignore` 或 `on:pull_request:paths` 匹配的文件，除非文件被排除在外。 有关如何从分析中排除文件的信息，请参阅“[指定要扫描的目录](#specifying-directories-to-scan)”。
* 对于 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 工作流程文件， 不要对 `on:push` 事件使用 `paths-ignore` 或 `paths` 关键词， 因为这可能导致缺少分析。 为了获得准确的结果，{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 需要能够与上次提交的分析比较新的变化。

{% endnote %}

有关使用 `on:pull_request:paths-ignore` 和 `on:pull_request:paths` 确定工作流程何时对拉取请求运行的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)”。

#### 按时间表扫描

默认 {% data variables.product.prodname_code_scanning %} 工作流程在拉取请求的 `HEAD` 提交时使用 `pull_request` 事件触发代码扫描。 要调整此时间表，请编辑工作流程中的 `cron` 值。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onschedule)”。

{% note %}

**注**：{% data variables.product.prodname_dotcom %} 只运行默认分支上工作流程中的预定作业。 在任何其他分支上的工作流程中更改时间表后，需要将该分支合并到默认分支才能使更改生效。

{% endnote %}

#### 示例

{% data variables.product.prodname_dotcom %} saves workflow files in the `.github/workflows` directory of your repository. You can find the workflow by searching for its file name. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '40 7 * * 2'
```

此工作流程扫描：
* 对默认分支和受保护分支的每次推送
* 对默认分支的每个拉取请求
* 默认分支（每个星期二 7:40 UTC）

### 指定操作系统

如果您的代码需要使用特定的操作系统进行编译，您可以在工作流程中配置它。 编辑 `jobs.analyze.runs-on` 的值以指定运行 {% data variables.product.prodname_code_scanning %} 操作的机器操作系统。 在 `self-hosted` 之后，使用适当的标签作为双元素数组中的第二个元素来指定操作系统。

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_code_scanning_capc %} 支持 macOS、Ubuntu 和 Windows 的最新版本。 因此，此设置的典型值为：`ubuntu-latest`、`windows-latest` 和 `macos-latest`。 更多信息请参阅“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)”和和“[将标签与自托管运行器一起使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)”。

您必须确保 Git 位于自托管运行器上的 PATH 变量中。

### 更改分析的语言

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 会自动检测用受支持的语言编写的代码。

{% data reusables.code-scanning.codeql-languages-bullets %}

默认 {% data variables.product.prodname_codeql_workflow %} 文件包含一个名为 `language` 的构建矩阵，其中列出了仓库中被分析的语言。 将 {% data variables.product.prodname_code_scanning %} 添加到仓库时，{% data variables.product.prodname_codeql %} 会自动填充此矩阵。 使用 `language` 矩阵优化 {% data variables.product.prodname_codeql %} 以并行运行每个分析。 由于并行构建的性能优势，我们建议所有工作流程都采用此配置。 有关构建矩阵的更多信息，请参阅“[管理复杂的工作流程](/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix)”。

{% data reusables.code-scanning.specify-language-to-analyze %}

如果您的工作流程使用 `language` 矩阵，则 {% data variables.product.prodname_codeql %} 会被硬编码为仅分析矩阵中的语言。 如需更改要分析的语言，请编辑矩阵变量的值。 您可以删除某种语言以防止被分析，也可以添加在设置 {% data variables.product.prodname_code_scanning %} 时仓库中不存在的语言。 例如，如果在设置 {% data variables.product.prodname_code_scanning %} 时，仓库最初只包含 JavaScript，但您后来添加了 Python 代码，则需要将 `python` 添加到矩阵中。

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

如果工作流程中不包含名为 `language` 的矩阵，则 {% data variables.product.prodname_codeql %} 将被配置为按顺序运行分析。 如果您未在工作流程中指定语言，则 {% data variables.product.prodname_codeql %} 将自动检测并尝试分析仓库中所有受支持的语言。 如果不愿意使用矩阵选择要分析的语言，您可以使用 `init` 操作下的 `languages` 参数。

```yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```
{% if currentVersion == "free-pro-team@latest" %}
### 分析 Python 依赖项

对于仅使用 Linux 的 GitHub 托管的运行器，{% data variables.product.prodname_codeql_workflow %} 将尝试自动安装 Python 依赖项以提供更多 CodeQL 分析结果。 可通过为“初始化 CodeQL”步骤调用的操作指定 `setup-python-dependencies` 参数来控制此行为。 默认情况下，此参数设置为 `true`：

-  如果仓库包含用 Python 编写的代码，“初始化 CodeQL”步骤将在 GitHub 托管的运行器上安装必要的依赖项。 如果自动安装成功，该操作还会将环境变量 `CODEQL_PYTHON` 设置为包含依赖项的 Python 可执行文件。

- 如果仓库没有任何 Python 依赖项，或者依赖项是以意外方式指定的，您将收到警告，并且该操作会继续执行其余作业。 即使在解释依赖项时出现问题，该操作也可以成功运行，但结果可能不完整。

或者，您也可以在任何操作系统上手动安装 Python 依赖项。 您需要添加 `setup-python-dependencies` 并将其设置为 `false`，以及将 `CODEQL_PYTHON` 设置为包含依赖项的 Python 可执行文件，如此工作流程摘要中所示：

```yaml
jobs:
  CodeQL-Build:

    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      security-events: write
      actions: read{% endif %}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: github/codeql-action/init@v1
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

### 运行额外查询

{% data reusables.code-scanning.run-additional-queries %}

要添加一个或多个查询套件，请在配置文件中添加 `queries` 部分。 如果查询在私有仓库中，请使用 `external-repository-token` 参数来指定可以访问私有仓库的令牌。

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. 提供令牌来访问私有仓库.
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

您也可以在配置文件中指定额外查询套件以运行它们。 查询套件是查询的集合，通常按目的或语言分组。

{% data reusables.code-scanning.codeql-query-suites %}

如果还使用配置文件进行自定义设置，则将使用工作流程中指定的任何额外查询，而不是配置文件中指定的任何查询。 如果您要运行此处指定的额外查询与配置文件中指定的查询的组合，请在工作流程中的 `queries` 值之前加上前缀 `+` 符号。 有关配置文件的示例，请参阅“[配置文件示例](#example-configuration-files)”。

在下面的示例中，`+` 符号可确保结合使用额外查询与所引用配置文件中指定的任何查询。

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

### 使用第三方代码扫描工具

除了在工作流程文件中指定要运行的查询之外，您还可以在单独的配置文件中执行此操作。 您还可以使用配置文件禁用默认查询，并指定分析过程中要扫描的目录。

在工作流程文件中，使用 `init` 操作的 `config-file` 参数指定要使用的配置文件的路径。 此示例加载配置文件 _./.github/codeql/codeql-config.yml_。

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

如果配置文件位于外部私有仓库中，请使用 `init` 操作的 `external-repository-token` 参数来指定可以访问私有仓库的令牌。

{% raw %}
```yaml
uses: github/codeql-action/init@v1
with:
  external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

配置文件中的设置以 YAML 格式编写。

#### 指定额外查询

您可以在 `queries` 数组中指定额外查询。 数组的每个元素都包含一个 `uses` 参数，该参数的值标识单个查询文件、包含查询文件的目录或查询套件定义文件。

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls
```

（可选）您可以给每个数组元素一个名称，如下面的示例配置文件所示。

有关额外查询的更多信息，请参阅上面的“[运行额外查询](#running-additional-queries)”。

#### 禁用默认查询

如果只想运行自定义查询，您可以通过在配置文件中添加 `disable-default-queries: true` 来禁用默认安全查询。

#### 指定要扫描的目录

对于 {% data variables.product.prodname_codeql %} 支持的解释语言（Python 和 JavaScript/TypeScript），您可以通过在配置文件中添加 `paths` 数组将 {% data variables.product.prodname_code_scanning %} 限制到特定目录中的文件。 添加 `paths-ignore` 数组可从分析排除特定目录中的文件。

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**注**：

* 在 {% data variables.product.prodname_code_scanning %} 配置文件上下文中使用的 `paths` 和 `paths-ignore` 关键字，不应与用于工作流程中 `on.<push|pull_request>.paths` 的相同关键字相混淆。 当它们用于修改工作流程中的 `on.<push|pull_request>` 时，它们将决定在有人修改指定目录中的代码时是否运行操作。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)”。
* The filter pattern characters `?`, `+`, `[`, `]`, and `!` are not supported and will be matched literally.
* `**` 字符只能用在行的开头或结尾，或用斜杠包围，并且不能将 `**` 与其他字符混合在一起。 例如，`foo/**`、`**/foo` 和 `foo/**/bar` 都是允许的语法，但 `**foo` 不是。 但是，可以将单星号与其他字符一起使用，如示例中所示。 您需要引用任何包含 `*` 字符的内容。

{% endnote %}

对于编译的语言，如果要将 {% data variables.product.prodname_code_scanning %} 限制到项目中的特定目录，您必须在工作流程中指定适当的构建步骤。 用于在构建过程中排除目录的命令将取决于您的构建系统。 更多信息请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。

在修改特定目录中的代码时，您可以快速分析单个仓库中的小部分。 您需要在构建步骤中排除目录并在工作流程文件中对 [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) 使用 `paths-ignore` 和 `paths` 关键字。

#### 配置文件示例

{% data reusables.code-scanning.example-configuration-files %}

### 为编译语言配置 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} 有关如何为编译语言配置 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 的更多信息，请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages)”。

### 将 {% data variables.product.prodname_code_scanning %} 数据上传到 {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} 可显示通过第三方工具在外部生成的代码分析数据。 通过在工作流程中添加 `upload-sarif` 操作，您可以在 {% data variables.product.prodname_dotcom %} 中显示第三方工具的代码分析。 更多信息请参阅“[将 SARIF 文件上传到 GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)”。
