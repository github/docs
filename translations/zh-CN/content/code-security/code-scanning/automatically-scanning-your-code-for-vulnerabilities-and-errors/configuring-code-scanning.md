---
title: 配置代码扫描
intro: '您可以配置 {% data variables.product.prodname_dotcom %} 如何扫描项目代码以查找漏洞和错误。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: 配置代码扫描
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## 关于 {% data variables.product.prodname_code_scanning %} 配置

您可以使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_name %} 中运行 {% data variables.product.prodname_code_scanning %}，或从持续集成 (CI) 系统运行它。 更多信息请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”或
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
“[关于 CI 系统中的 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)”。
{%- else %}
"[在 CI 系统中运行 {% data variables.product.prodname_codeql_runner %}](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)."
{% endif %}

本文说明使用操作在 {% data variables.product.product_name %} 上运行 {% data variables.product.prodname_code_scanning %}。

在为仓库配置 {% data variables.product.prodname_code_scanning %} 之前，必须将 {% data variables.product.prodname_actions %} 工作流程添加到仓库中以设置 {% data variables.product.prodname_code_scanning %}。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% data reusables.code-scanning.edit-workflow %}

您可以为 {% data variables.product.prodname_code_scanning %} 编写配置文件。 {% data variables.product.prodname_marketplace %}{% ifversion ghes %} 在 {% data variables.product.prodname_dotcom_the_website %} 上，{% endif %}包含您可以使用的其他 {% data variables.product.prodname_code_scanning %} 工作流程。 {% ifversion fpt or ghec %}您可以在“{% data variables.product.prodname_code_scanning %} 使用入门”页找到这些选项，该页面可从 **{% octicon "shield" aria-label="The shield symbol" %} Security（安全）**选项卡访问。{% endif %}本文给出的具体示例与 {% data variables.product.prodname_codeql_workflow %} 文件相关。

## Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} 将工作流程文件保存在仓库的 _.github/workflows_ 目录中。 您可以通过搜索其文件名来查找已添加的工作流程。 例如，默认情况下，{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 的工作流程文件被称为 _codeql-analysis.yml_。

1. 在仓库中，浏览至要编辑的工作流程文件。
1. 要打开工作流程编辑器，在文件视图右上角单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![编辑工作流程文件按钮](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. 编辑文件后，单击 **Start commit（开始提交）**并完成“Commit changes（提交更改）”表单。 您可以选择直接提交到当前分支，或者创建一个新分支并启动拉取请求。 ![将更新提交到 codeql.yml 工作流程](/assets/images/help/repository/code-scanning-workflow-update.png)

有关编辑工作流程文件的更多信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

## 配置频率

您可以按时间表或在仓库中发生特定事件时扫描代码。

每当推送到仓库以及每次创建拉取请求时，时扫描代码可防止开发者在代码中引入新的漏洞和错误。 按时间表扫描可了解 {% data variables.product.company_short %}、安全研究者和社区发现的最新漏洞和错误，即使开发者并未主动维护仓库。

### 按推送扫描

如果使用默认工作流程，则除了事件触发的扫描之外，{% data variables.product.prodname_code_scanning %} 还会每周扫描一次仓库代码。 要调整此时间表，请编辑工作流程中的 `cron` 值。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#on)”。

如果您在推送时扫描，则结果将出现在仓库的 **Security（安全性）**选项卡中。 更多信息请参阅“[管理仓库的代码扫描警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

{% ifversion fpt or ghes > 3.2 or ghae-issue-5093 or ghec %}
Additionally, when an `on:push` scan returns results that can be mapped to an open pull request, these alerts will automatically appear on the pull request in the same places as other pull request alerts. The alerts are identified by comparing the existing analysis of the head of the branch to the analysis for the target branch. For more information on {% data variables.product.prodname_code_scanning %} alerts in pull requests, see "[Triaging {% data variables.product.prodname_code_scanning %} alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
{% endif %}

### 扫描拉取请求

默认 {% data variables.product.prodname_codeql_workflow %} 使用 `pull_request` 事件在针对默认分支的拉取请求上触发代码扫描。 {% ifversion ghes %}如果从私有复刻打开拉取请求，`pull_request` 事件不会触发。{% else %}如果拉取请求来自私有复刻，`pull_request` 事件仅在仓库设置中选择了“Run workflows from fork pull requests（从复刻拉取请求运行工作流程）”选项时触发。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)”。{% endif %}

有关 `pull_request` 事件的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)”。

如果您扫描拉取请求，则结果在拉取请求检查中显示为警报。 更多信息请参阅“[对拉取请求中的代码扫描警报分类](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”。

{% ifversion fpt or ghes > 3.2 or ghae-issue-5093 or ghec %}
 Using the `pull_request` trigger, configured to scan the pull request's merge commit rather than the head commit, will produce more efficient and accurate results than scanning the head of the branch on each push. However, if you use a CI/CD system that cannot be configured to trigger on pull requests, you can still use the `on:push` trigger and {% data variables.product.prodname_code_scanning %} will map the results to open pull requests on the branch and add the alerts as annotations on the pull request. For more information, see "[Scanning on push](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)."
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
### Defining the severities causing pull request check failure

By default, only alerts with the severity level of `Error`{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 or ghec %} or security severity level of `Critical` or `High`{% endif %} will cause a pull request check failure, and a check will still succeed with alerts of lower severities. You can change the levels of alert severities{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 or ghec %} and of security severities{% endif %} that will cause a pull request check failure in your repository settings. For more information about severity levels, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#about-alerts-details)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. Under "Code scanning", to the right of "Check Failure", use the drop-down menu to select the level of severity you would like to cause a pull request check failure.
{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 or ghec %}
![检查失败设置](/assets/images/help/repository/code-scanning-check-failure-setting.png)
{% else %}
![检查失败设置](/assets/images/help/repository/code-scanning-check-failure-setting-ghae.png)
{% endif %}
{% endif %}

### 避免对拉取请求进行不必要的扫描

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

### 按时间表扫描

默认 {% data variables.product.prodname_code_scanning %} 工作流程在拉取请求的 `HEAD` 提交时使用 `pull_request` 事件触发代码扫描。 要调整此时间表，请编辑工作流程中的 `cron` 值。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onschedule)”。

{% note %}

**注**：{% data variables.product.prodname_dotcom %} 只运行默认分支上工作流程中的预定作业。 在任何其他分支上的工作流程中更改时间表后，需要将该分支合并到默认分支才能使更改生效。

{% endnote %}

### 示例

{% data variables.product.prodname_dotcom %} saves workflow files in the `.github/workflows` directory of your repository. You can find the workflow by searching for its file name. For example, the default workflow file for CodeQL code scanning is called `codeql-analysis.yml`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

此工作流程扫描：
* 对默认分支和受保护分支的每次推送
* 对默认分支的每个拉取请求
* 默认分支（每个星期一 14:20 UTC）

## 指定操作系统

如果您的代码需要使用特定的操作系统进行编译，您可以在工作流程中配置它。 编辑 `jobs.analyze.runs-on` 的值以指定运行 {% data variables.product.prodname_code_scanning %} 操作的机器操作系统。 {% ifversion ghes %}在 `self-hosted` 之后，使用适当的标签作为双元素数组中的第二个元素来指定操作系统。{% else %}

如果选择使用自托管的运行器进行代码扫描，可以在 `self-hosted` 之后，使用适当的标签作为双元素数组中的第二个元素来指定操作系统。{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% ifversion fpt or ghec %}更多信息请参阅“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。{% endif %}

{% data variables.product.prodname_code_scanning_capc %} 支持 macOS、Ubuntu 和 Windows 的最新版本。 因此，此设置的典型值为：`ubuntu-latest`、`windows-latest` 和 `macos-latest`。 更多信息请参阅{% ifversion ghes %}“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)”和“[将标签与自托管运行器一起使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}”[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}“。

{% ifversion ghes %}您必须确保 Git 位于自托管运行器的 PATH 变量中。{% else %}如果您使用自托管运行器，必须确保 Git 在 PATH 变量中。{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
## 指定 {% data variables.product.prodname_codeql %} 数据库的位置

一般来说，您不必担心 {% data variables.product.prodname_codeql_workflow %} 放置 {% data variables.product.prodname_codeql %} 数据库的位置，因为以后的步骤会自动找到以前步骤创建的数据库。 但是，如果您正在编写一个自定义工作流步骤，要求 {% data variables.product.prodname_codeql %} 数据库位于特定的磁盘位置，例如将数据库作为工作流程工件上传，则可以使用 `init` 下的 `db-location` 参数指定该位置。

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    db-location: '${{ github.workspace }}/codeql_dbs'
```
{% endraw %}

{% data variables.product.prodname_codeql_workflow %} 将期望在 `db-location` 中提供的路径是可写的，或者不存在，或者是一个空目录。 当在运行自托管运行器或使用 Docker 容器的作业中使用此参数时， 用户有责任确保所选目录在运行之间被清空， 或数据库一旦不再需要即予移除。 对于运行在 {% data variables.product.prodname_dotcom %} 托管的运行器中的任务，这是不必要的，因为每次运行时都会获得一个新的实例和一个清洁的文件系统。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)”。

如果不使用此参数，{% data variables.product.prodname_codeql_workflow %} 将在自己选择的临时位置创建数据库。
{% endif %}

## 更改分析的语言

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
{% ifversion fpt or ghec %}
## 分析 Python 依赖项

对于仅使用 Linux 的 GitHub 托管的运行器，{% data variables.product.prodname_codeql_workflow %} 将尝试自动安装 Python 依赖项以提供更多 CodeQL 分析结果。 可通过为“初始化 CodeQL”步骤调用的操作指定 `setup-python-dependencies` 参数来控制此行为。 默认情况下，此参数设置为 `true`：

-  如果仓库包含用 Python 编写的代码，“初始化 CodeQL”步骤将在 GitHub 托管的运行器上安装必要的依赖项。 如果自动安装成功，该操作还会将环境变量 `CODEQL_PYTHON` 设置为包含依赖项的 Python 可执行文件。

- 如果仓库没有任何 Python 依赖项，或者依赖项是以意外方式指定的，您将收到警告，并且该操作会继续执行其余作业。 即使在解释依赖项时出现问题，该操作也可以成功运行，但结果可能不完整。

或者，您也可以在任何操作系统上手动安装 Python 依赖项。 您需要添加 `setup-python-dependencies` 并将其设置为 `false`，以及将 `CODEQL_PYTHON` 设置为包含依赖项的 Python 可执行文件，如此工作流程摘要中所示：

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
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

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
## 配置分析类别

使用`类别`来区分同一工具和提交的多次分析，但是在不同语言或代码的不同部分进行。 您在工作流程中指定的类别将包含在 SARIF 结果文件中。

如果您使用单一仓库，并且对单一仓库的不同部分有多个对应的 SARIF 文件，此参数是特别有用。

{% raw %}
``` yaml
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow, 
        # GitHub will generate a default category name for you
        category: "my_category"
```
{% endraw %}

如果您没有在工作流程中指定 `category` 参数，则 {% data variables.product.product_name %} 将根据触发操作的工作流程文件的名称、操作名称和任何矩阵变量为您生成类别名称。 例如：
- `.github/workflows/codeql-analysis.yml` 工作流程和 `analyze` 操作将产生类别 `.github/workflows/codeql.yml:analyze`。
- `.github/workflows/codeql-analysis.yml` 工作流程、`analyze` 操作和 `{language: javascript, os: linux}` 矩阵变量将产生类别 `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`。

`category` 值在 SARIF v2.1.0 中将显示为 `<run>.automationDetails.id` 属性。 更多信息请参阅“[{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)”。

如有包括，您指定的类别将不会覆盖 SARIF 文件中 `runAutomationDetail` 对象的详细信息。

{% endif %}

## 运行额外查询

{% data reusables.code-scanning.run-additional-queries %}

{% if codeql-packs %}
### Using {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-cli %}

To add one or more {% data variables.product.prodname_codeql %} query packs (beta), add a `with: packs:` entry within the `uses: github/codeql-action/init@v1` section of the workflow. Within `packs` you specify one or more packages to use and, optionally, which version to download. Where you don't specify a version, the latest version is downloaded. If you want to use packages that are not publicly available, you need to set the `GITHUB_TOKEN` environment variable to a secret that has access to the packages. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."

{% note %}

**Note:** For workflows that generate {% data variables.product.prodname_codeql %} databases for multiple languages, you must instead specify the {% data variables.product.prodname_codeql %} query packs in a configuration file. For more information, see "[Specifying {% data variables.product.prodname_codeql %} query packs](#specifying-codeql-query-packs)" below.

{% endnote %}

In the example below, `scope` is the organization or personal account that published the package. When the workflow runs, the three {% data variables.product.prodname_codeql %} query packs are downloaded from {% data variables.product.product_name %} and the default queries or query suite for each pack run. The latest version of `pack1` is downloaded as no version is specified. Version 1.2.3 of `pack2` is downloaded, as well as the latest version of `pack3` that is compatible with version 1.2.3.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~1.2.3
```
{% endraw %}

### Using queries in QL packs
{% endif %}
要添加一个或多个查询套件，请在配置文件中添加 `queries` 部分。 If the queries are in a private repository, use the `external-repository-token` parameter to specify a token that has access to checkout the private repository.

{% raw %}
``` yaml
- uses: github/codeql-action/init@v1
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

您也可以在配置文件中指定额外查询套件以运行它们。 查询套件是查询的集合，通常按目的或语言分组。

{% data reusables.code-scanning.codeql-query-suites %}

{% if codeql-packs %}
### Working with custom configuration files
{% endif %}

If you also use a configuration file for custom settings, any additional {% if codeql-packs %}packs or {% endif %}queries specified in your workflow are used instead of those specified in the configuration file. If you want to run the combined set of additional {% if codeql-packs %}packs or {% endif %}queries, prefix the value of {% if codeql-packs %}`packs` or {% endif %}`queries` in the workflow with the `+` symbol. 有关配置文件的示例，请参阅“[配置文件示例](#example-configuration-files)”。

In the following example, the `+` symbol ensures that the specified additional {% if codeql-packs %}packs and {% endif %}queries are used together with any specified in the referenced configuration file.

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- if codeql-packs %}
    packs: +scope/pack1,scope/pack2@v1.2.3
    {% endif %}
```

## 使用第三方代码扫描工具

A custom configuration file is an alternative way to specify additional {% if codeql-packs %}packs and {% endif %}queries to run. You can also use the file to disable the default queries and to specify which directories to scan during analysis.

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
- uses: github/codeql-action/init@v1
  with:
    external-repository-token: ${{ secrets.ACCESS_TOKEN }}
```
{% endraw %}

配置文件中的设置以 YAML 格式编写。

{% if codeql-packs %}
### Specifying {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-cli %}

You specify {% data variables.product.prodname_codeql %} query packs in an array. Note that the format is different from the format used by the workflow file.

{% raw %}
``` yaml
packs: 
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1 
  # Use version 1.23 of 'pack2' 
  - scope/pack2@v1.2.3
  # Use the latest version of 'pack3' compatible with 1.23
  - scope/pack3@~1.2.3
```
{% endraw %}

If you have a workflow that generates more than one {% data variables.product.prodname_codeql %} database, you can specify any {% data variables.product.prodname_codeql %} query packs to run in a custom configuration file using a nested map of packs.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %}
{% endif %}

### 指定额外查询

您可以在 `queries` 数组中指定额外查询。 数组的每个元素都包含一个 `uses` 参数，该参数的值标识单个查询文件、包含查询文件的目录或查询套件定义文件。

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

（可选）您可以给每个数组元素一个名称，如下面的示例配置文件所示。 有关额外查询的更多信息，请参阅上面的“[运行额外查询](#running-additional-queries)”。

### 禁用默认查询

如果只想运行自定义查询，您可以通过在配置文件中添加 `disable-default-queries: true` 来禁用默认安全查询。

### 指定要扫描的目录

For the interpreted languages that {% data variables.product.prodname_codeql %} supports (Python{% ifversion fpt or ghes > 3.3 or ghae-issue-5017 %}, Ruby{% endif %} and JavaScript/TypeScript), you can restrict {% data variables.product.prodname_code_scanning %} to files in specific directories by adding a `paths` array to the configuration file. 添加 `paths-ignore` 数组可从分析排除特定目录中的文件。

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
* 不支持过滤模式字符 `?`、`+`、`[`、`]` 和 `!`，将逐字匹配。
* `**` 字符只能用在行的开头或结尾，或用斜杠包围，并且不能将 `**` 与其他字符混合在一起。 例如，`foo/**`、`**/foo` 和 `foo/**/bar` 都是允许的语法，但 `**foo` 不是。 但是，可以将单星号与其他字符一起使用，如示例中所示。 您需要引用任何包含 `*` 字符的内容。

{% endnote %}

对于编译的语言，如果要将 {% data variables.product.prodname_code_scanning %} 限制到项目中的特定目录，您必须在工作流程中指定适当的构建步骤。 用于在构建过程中排除目录的命令将取决于您的构建系统。 更多信息请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。

在修改特定目录中的代码时，您可以快速分析单个仓库中的小部分。 您需要在构建步骤中排除目录并在工作流程文件中对 [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) 使用 `paths-ignore` 和 `paths` 关键字。

### 配置文件示例

{% data reusables.code-scanning.example-configuration-files %}

## 为编译语言配置 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} 有关如何为编译语言配置 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 的更多信息，请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)”。

## 将 {% data variables.product.prodname_code_scanning %} 数据上传到 {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} 可显示通过第三方工具在外部生成的代码分析数据。 通过在工作流程中添加 `upload-sarif` 操作，您可以在 {% data variables.product.prodname_dotcom %} 中显示第三方工具的代码分析。 更多信息请参阅“[将 SARIF 文件上传到 GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)”。
