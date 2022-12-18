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
shortTitle: Configure code scanning
ms.openlocfilehash: cad147292c113d749004f2fe303b27a4dada1456
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182312'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% ifversion ghes or ghae %} {% note %}

注意：本文介绍了此版 {% data variables.product.product_name %} 的初始发行版中包含的 CodeQL 操作版本和相关 CodeQL CLI 捆绑包中可用的功能。 如果企业使用较新版本的 CodeQL 操作，请参阅 [{% data variables.product.prodname_ghe_cloud %} 一文](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)，了解有关最新功能的信息。 {% ifversion not ghae %}有关使用最新版本的信息，请参阅“[为设备配置代码扫描](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”。{% endif %}

{% endnote %} {% endif %}

## 关于 {% data variables.product.prodname_code_scanning %} 配置

您可以使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_name %} 中运行 {% data variables.product.prodname_code_scanning %}，或从持续集成 (CI) 系统运行它。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”或“[关于 CI 系统中的 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)”。

本文说明使用操作在 {% data variables.product.product_name %} 上运行 {% data variables.product.prodname_code_scanning %}。

在为仓库配置 {% data variables.product.prodname_code_scanning %} 之前，必须将 {% data variables.product.prodname_actions %} 工作流程添加到仓库中以设置 {% data variables.product.prodname_code_scanning %}。 有关详细信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} 分析只是您可以在 {% data variables.product.prodname_dotcom %} 中执行的一种 {% data variables.product.prodname_code_scanning %}。 {% data variables.product.prodname_marketplace %}{% ifversion ghes %} 在 {% data variables.product.prodname_dotcom_the_website %} 上，{% endif %}包含您可以使用的其他 {% data variables.product.prodname_code_scanning %} 工作流程。 {% ifversion fpt or ghec %}可以在“开始使用 {% data variables.product.prodname_code_scanning %}”页面上找到这些选项，可以从“{% octicon "shield" aria-label="The shield symbol" %} 安全性”选项卡访问该页面。{% endif %}本文中提供的特定示例与 {% data variables.code-scanning.codeql_workflow %} 文件相关。

## 编辑 {% data variables.product.prodname_code_scanning %} 工作流

{% data variables.product.prodname_dotcom %} 将工作流文件保存在存储库的 .github/workflows 目录中。 可搜索文件名来查找已添加的工作流。 例如，默认情况下，{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 的工作流文件称为 codeql-analysis.yml。

1. 在仓库中，浏览至要编辑的工作流程文件。
1. 要打开工作流编辑器，在文件视图右上角单击 {% octicon "pencil" aria-label="The edit icon" %}。
![编辑工作流文件按钮](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. 编辑完文件后，请单击“开始提交”，并完成“提交更改”窗体。 可以选择直接提交到当前分支，也可以创建一个新分支，并发起拉取请求。
![将更新提交到 codeql.yml 工作流程](/assets/images/help/repository/code-scanning-workflow-update.png)

有关编辑工作流文件的详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

## 配置频率

可以将 {% data variables.code-scanning.codeql_workflow %} 配置为按计划或在存储库中发生特定事件时扫描代码。

每当推送到仓库以及每次创建拉取请求时，时扫描代码可防止开发者在代码中引入新的漏洞和错误。 按时间表扫描可了解 {% data variables.product.company_short %}、安全研究者和社区发现的最新漏洞和错误，即使开发者并未主动维护仓库。

### 按推送扫描

默认情况下，{% data variables.code-scanning.codeql_workflow %} 使用 `on.push` 事件在每次推送到存储库的默认分支和任何受保护分支时触发代码扫描。 要使 {% data variables.product.prodname_code_scanning %} 指定分支上触发，工作流程必须存在于该分支中。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#on)”。

如果在推送时扫描，结果会显示在存储库的“安全性”选项卡中。 有关详细信息，请参阅“[管理存储库的代码扫描警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

此外，当 `on:push` 扫描返回可映射到打开的拉取请求的结果时，这些警报将自动出现在拉取请求中，与其他拉取请求警报位于同一位置。 警报是通过比较对分支头的现有分析与对目标分支的分析来确定的。 有关 {% data variables.product.prodname_code_scanning %} 的详细信息，请参阅“[会审拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”。

### 扫描拉取请求

默认 {% data variables.code-scanning.codeql_workflow %} 使用 `pull_request` 事件在发生针对默认分支的拉取请求时触发代码扫描。 {% ifversion ghes %}如果从专用分支打开拉取请求，则不会触发 `pull_request` 事件。{% else %}如果拉取请求来自专用分支，则仅当你在存储库设置中选择了“从分支拉取请求运行工作流”选项时，才会触发 `pull_request` 事件。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)”。{% endif %}

有关 `pull_request` 事件的详细信息，请参阅“[触发工作流的事件](/actions/learn-github-actions/events-that-trigger-workflows#pull_request)”。

如果扫描拉取请求，结果将在拉取请求检查中显示为警报。 有关详细信息，请参阅[在拉取请求中对代码扫描警报进行会审](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)。

使用 `pull_request` 触发器（配置为扫描拉取请求的合并提交，而不是头提交）与每次推送时扫描分支头相比，可产生更高效且准确的结果。 但是，如果使用的 CI/CD 系统无法配置为发生拉取请求时触发，你仍然可以使用 `on:push` 触发器和 {% data variables.product.prodname_code_scanning %} 会将结果映射到在分支上打开的拉取请求，并将警报作为注释添加到拉取请求。 有关详细信息，请参阅“[推送时扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)”。

### 定义导致拉取请求检查失败的严重性

默认情况下，只有严重性级别为 `Error` 或安全严重级别为 `Critical` 或 `High` 的警报会导致拉取请求检查失败，而对于较低严重性的警报，检查仍会成功。 可以在存储库设置中更改将导致拉取请求检查失败的警报严重性和安全严重性级别。 有关严重性级别的详细信息，请参阅“[关于代码扫描警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. 在“Code scanning（代码扫描）”下的“Check Failure（检查失败）”右边，使用下拉菜单选择您想要导致拉请求检查失败的严重程度。
![检查失败设置](/assets/images/help/repository/code-scanning-check-failure-setting.png)

### 避免对拉取请求进行不必要的扫描

你可能希望避免触发针对默认分支的特定拉取请求的代码扫描，而不考虑哪些文件已更改。 可以通过在 {% data variables.product.prodname_code_scanning %} 数据流中指定 `on:pull_request:paths-ignore` 或 `on:pull_request:paths` 来进行配置。 例如，如果拉取请求中仅更改了文件扩展名为 `.md` 或 `.txt` 的文件，你可以使用以下 `paths-ignore` 数组。

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

**说明**

* `on:pull_request:paths-ignore` 和 `on:pull_request:paths` 可设置用于决定工作流中的操作是否将在发生拉取请求时运行的条件。 它们不会决定操作运行时将分析哪些文件。 当拉取请求包含任何未被 `on:pull_request:paths-ignore` 或 `on:pull_request:paths` 匹配的文件时，工作流会运行操作并扫描拉动请求中更改的所有文件，包括那些被 `on:pull_request:paths-ignore` 或 `on:pull_request:paths` 匹配的文件，除非这些文件已被排除。 有关如何从分析中排除文件的信息，请参阅“[指定要扫描的目录](#specifying-directories-to-scan)”。
* 对于 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 工作流文件，请勿对 `paths-ignore` 事件使用 `paths` 或 `on:push` 关键字，因为这可能会导致缺少分析。 为了获得准确的结果，{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 需要能够与上次提交的分析比较新的变化。

{% endnote %}

有关使用 `on:pull_request:paths-ignore` 和 `on:pull_request:paths` 确定工作流何时为拉取请求运行的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”。

### 按时间表扫描

如果使用默认 {% data variables.code-scanning.codeql_workflow %}，则除了由事件触发的扫描之外，工作流还将每周扫描一次存储库中的代码。 若要调整此计划，请在工作流中编辑 `cron` 值。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#onschedule)”。

{% note %}

注意：{% data variables.product.prodname_dotcom %} 只运行默认分支上的工作流中的预定作业。 在任何其他分支上的工作流程中更改时间表后，需要将该分支合并到默认分支才能使更改生效。

{% endnote %}

### 示例

以下示例显示了特定存储库的 {% data variables.code-scanning.codeql_workflow %}，该存储库具有一个名为 `main` 的默认分支和一个名为 `protected` 的受保护分支。

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

此工作流扫描：
* 对默认分支和受保护分支的每次推送
* 对默认分支的每个拉取请求
* 默认分支（每周一 14:20 UTC）

## 指定操作系统

如果代码需要特定的操作系统来编译，则可以在 {% data variables.code-scanning.codeql_workflow %} 中配置操作系统。 编辑 `jobs.analyze.runs-on` 的值，指定运行 {% data variables.product.prodname_code_scanning %} 操作的计算机操作系统。 {% ifversion ghes %}通过在 `self-hosted` 之后使用适当的标签作为二元素数组中的第二个元素来指定操作系统。{% else %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

如果选择使用自托管的运行程序进行代码扫描，可以在 `self-hosted` 之后使用适当的标签作为二元素数组中的第二个元素来指定操作系统。{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 支持最新版本的 Ubuntu、Windows 和 macOS。 因此，此设置的典型值为：`ubuntu-latest`、`windows-latest` 和 `macos-latest`。 有关详细信息，请参阅“[为作业选择运行器](/actions/using-jobs/choosing-the-runner-for-a-job)”和“[将标签用于自托管运行器](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)”。

{% ifversion ghes %}必须确保 Git 位于自托管运行器上的 PATH 变量中。{% else %}如果你使用自托管运行器，则必须确保 Git 在 PATH 变量中。{% endif %} 有关详细信息，请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

有关在自托管计算机上运行 {% data variables.product.prodname_codeql %} 分析{% ifversion not ghes %} 的建议规范（RAM、CPU 核心和磁盘）{% endif %}，请参阅“[用于运行 {% data variables.product.prodname_codeql %} 的建议硬件资源](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)”。

## 指定 {% data variables.product.prodname_codeql %} 数据库的位置

通常，无需担心 {% data variables.code-scanning.codeql_workflow %} 将 {% data variables.product.prodname_codeql %} 数据库放置的位置，因为后面的步骤会自动查找前面步骤创建的数据库。 但是，如果你正在编写一个自定义工作流步骤，要求 {% data variables.product.prodname_codeql %} 数据库位于特定的磁盘位置，例如将数据库作为工作流工件上传，则可以使用 `init` 下的 `db-location` 参数指定该位置。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.workspace }}/codeql_dbs'{% endraw %}
```

{% data variables.code-scanning.codeql_workflow %} 期望 `db-location` 中提供的路径是可写的，或者不存在，或者是一个空目录。 当在运行自托管运行器或使用 Docker 容器的作业中使用此参数时， 用户有责任确保所选目录在运行之间被清空， 或数据库一旦不再需要即予移除。 {% ifversion fpt or ghec or ghes %}对于运行在 {% data variables.product.prodname_dotcom %} 托管的运行器中的任务，这是不必要的，因为每次运行时都会获得一个新的实例和一个清洁的文件系统。 有关详细信息，请参阅“[有关 {% data variables.product.prodname_dotcom %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)”。{% endif %}

如果不使用此参数，{% data variables.code-scanning.codeql_workflow %} 将在自己选择的临时位置创建数据库。

## 更改分析的语言

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 会自动检测用受支持的语言编写的代码。

{% data reusables.code-scanning.codeql-languages-bullets %}

默认 {% data variables.code-scanning.codeql_workflow %} 文件包含一个名为 `language` 的矩阵，其中列出了存储库中要分析的语言。 将 {% data variables.product.prodname_code_scanning %} 添加到仓库时，{% data variables.product.prodname_codeql %} 会自动填充此矩阵。 使用 `language` 矩阵优化 {% data variables.product.prodname_codeql %} 以并行运行每个分析。 由于并行生成的性能优势，建议所有工作流都采用此配置。 有关矩阵的详细信息，请参阅“[为作业使用矩阵](/actions/using-jobs/using-a-matrix-for-your-jobs)”。

{% data reusables.code-scanning.specify-language-to-analyze %}

如果工作流使用 `language` 矩阵，则 {% data variables.product.prodname_codeql %} 会被硬编码为仅分析矩阵中的语言。 若要更改要分析的语言，请编辑 matrix 变量的值。 您可以删除某种语言以防止被分析，也可以添加在设置 {% data variables.product.prodname_code_scanning %} 时仓库中不存在的语言。 例如，如果在设置 {% data variables.product.prodname_code_scanning %} 时存储库最初只包含 JavaScript，而后来添加了 Python 代码，则需要向矩阵中添加 `python`。

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

如果工作流程中不包含名为 `language` 的矩阵，则 {% data variables.product.prodname_codeql %} 将被配置为按顺序运行分析。 如果您未在工作流程中指定语言，则 {% data variables.product.prodname_codeql %} 将自动检测并尝试分析仓库中所有受支持的语言。 如果要选择要分析的语言，而不使用矩阵，则可以在 `init` 操作下使用 `languages` 参数。

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt or ghec %}
## 分析 Python 依赖项

对于仅使用 Linux 的 GitHub 托管的运行器，{% data variables.code-scanning.codeql_workflow %} 将尝试自动安装 Python 依赖项，以便为 CodeQL 分析提供更多结果。 可以通过为“初始化 CodeQL”步骤调用的操作指定 `setup-python-dependencies` 参数来控制此行为。 默认情况下，此参数设置为 `true`：

-  如果仓库包含用 Python 编写的代码，“初始化 CodeQL”步骤将在 GitHub 托管的运行器上安装必要的依赖项。 如果自动安装成功，该操作还会将环境变量 `CODEQL_PYTHON` 设置为包含依赖项的 Python 可执行文件。

- 如果仓库没有任何 Python 依赖项，或者依赖项是以意外方式指定的，您将收到警告，并且该操作会继续执行其余作业。 即使在解释依赖项时出现问题，该操作也可以成功运行，但结果可能不完整。

或者，您也可以在任何操作系统上手动安装 Python 依赖项。 需要添加 `setup-python-dependencies` 并将其设置为 `false`，并将 `CODEQL_PYTHON` 设置为包含依赖项的 Python 可执行文件，如以下工作流提取所示：

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
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
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

## 配置分析类别

使用 `category` 区分针对同一工具和提交的多个分析，但在不同的语言或代码的不同部分执行。 您在工作流程中指定的类别将包含在 SARIF 结果文件中。

如果您使用单一仓库，并且对单一仓库的不同部分有多个对应的 SARIF 文件，此参数是特别有用。

``` yaml
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

如果未在工作流中指定 `category` 参数，则 {% data variables.product.product_name %} 将基于触发操作、操作名称和任何矩阵变量的工作流文件的名称生成类别名称。 例如：
- `.github/workflows/codeql-analysis.yml` 工作流和 `analyze` 操作将生成类别 `.github/workflows/codeql.yml:analyze`。
- `.github/workflows/codeql-analysis.yml` 工作流、`analyze` 操作和 `{language: javascript, os: linux}` 矩阵变量将生成类别 `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`。

`category` 值将显示为 `<run>.automationDetails.id` SARIF v2.1.0 中的属性。 有关详细信息，请参阅“[{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)”。

指定的类别不会覆盖 SARIF 文件中 `runAutomationDetails` 对象的详细信息（如果已包含）。

## 运行额外查询

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}
### 使用 {% data variables.product.prodname_codeql %} 查询包

{% data reusables.code-scanning.beta-codeql-packs-cli %}

要添加一个或多个 {% data variables.product.prodname_codeql %} 查询包 (beta)，请在工作流的 `uses: {% data reusables.actions.action-codeql-action-init %}` 部分中添加一个 `with: packs:` 条目。 在 `packs` 中，可以指定要使用的一个或多个包，还可以指定要下载的版本。 在未指定版本的情况下，将下载最新版本。 如果要使用不可公开使用的包，则需要将 `GITHUB_TOKEN` 环境变量设置为有权访问包的机密。 有关详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow)”和“[加密机密](/actions/reference/encrypted-secrets)”。

{% note %}

注意：对于为多种语言生成 {% data variables.product.prodname_codeql %} 数据库的工作流，必须改为在配置文件中指定 {% data variables.product.prodname_codeql %} 查询包。 有关详细信息，请参阅下面的“[指定 {% data variables.product.prodname_codeql %} 查询包](#specifying-codeql-query-packs)”。

{% endnote %}

在下面的示例中，`scope` 是发布包的组织或个人帐户。 工作流运行时，将从 {% data variables.product.product_name %} 下载四个 {% data variables.product.prodname_codeql %} 查询包，并运行每个包的默认查询或查询套件：
- 下载最新版本的 `pack1` 并运行所有默认查询。
- 下载版本 1.2.3 的 `pack2` 并运行所有默认查询。
- 下载与版本 3.2.1 兼容的最新版本 `pack3`，并运行所有查询。
- 下载 4.5.6 版本的 `pack4`，并且仅运行在 `path/to/queries` 中找到的查询。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

### 从 {% data variables.product.prodname_ghe_server %} 下载 {% data variables.product.prodname_codeql %} 包

如果工作流使用在 {% data variables.product.prodname_ghe_server %} 安装上发布的包，则需要告知工作流在何处查找这些包。 为此，可以使用 {% data reusables.actions.action-codeql-action-init %} 操作的 `registries` 输入。 此输入接受 `url`、`packages` 和 `token` 属性的列表，如下所示。

```
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

注册表列表中的包模式按顺序进行检查，因此通常应将最具体的包模式放在最前面。 `token` 的值必须是通过 `read:packages` 权限从中下载的 GitHub 实例生成的 {% data variables.product.pat_v1 %}。

注意 `registries` 属性名称之后的 `|`。 这一点很重要，因为 {% data variables.product.prodname_actions %} 输入只能接受字符串。 使用 `|` 将后续文本转换为字符串，稍后由 {% data reusables.actions.action-codeql-action-init %} 操作分析。

### 在 QL 包中使用查询
{% endif %} 若要添加一个或多个查询，请在工作流的 `uses: {% data reusables.actions.action-codeql-action-init %}` 部分中添加一个 `with: queries:` 条目。 如果查询在专用存储库中，请使用 `external-repository-token` 参数来指定具有签出专用存储库访问权限的令牌。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

还可以在 `queries` 的值中指定查询套件。 查询套件是查询的集合，通常按用途或语言进行分组。

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}
### 使用自定义配置文件
{% endif %}

如果还将配置文件用于自定义设置，则将使用工作流中指定的任何其他{% ifversion codeql-packs %}包或{% endif %}查询，而不是配置文件中指定的查询。 如果要运行其他{% ifversion codeql-packs %}包或{% endif %}查询的组合，请在工作流中的 {% ifversion codeql-packs %}`packs` 或 {% endif %}`queries` 值前附加 `+` 符号。 有关详细信息，请参阅[使用自定义配置文件](#using-a-custom-configuration-file)。

在下面的示例中，`+` 符号确保指定的附加{% ifversion codeql-packs %}包和{% endif %}查询与引用的配置文件中指定的任何包和查询一起使用。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```

## 使用自定义配置文件

自定义配置文件是指定要运行的其他{% ifversion codeql-packs %}包和{% endif %}查询的替代方法。 还可以使用该文件禁用默认查询{% ifversion code-scanning-exclude-queries-from-analysis %}、排除或包含特定查询{% endif %}以及指定要在分析期间扫描的目录。

在工作流文件中，使用 `init` 操作的 `config-file` 参数指定要使用的配置文件的路径。 此示例加载配置文件 ./.github/codeql/codeql-config.yml。

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

如果配置文件位于外部专用存储库中，请使用 `init` 操作的 `external-repository-token` 参数指定有权访问专用存储库的令牌。

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

配置文件中的设置以 YAML 格式编写。

{% ifversion codeql-packs %}
### 指定 {% data variables.product.prodname_codeql %} 查询包

{% data reusables.code-scanning.beta-codeql-packs-cli %}

在数组中指定 {% data variables.product.prodname_codeql %} 查询包。 请注意，格式与工作流文件使用的格式不同。

{% raw %}
``` yaml
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```
{% endraw %}

指定查询包的完整格式为 `scope/name[@version][:path]`。 `version` 和 `path` 都是可选的。 `version` 是 semver 版本范围。 如果缺少该版本，则使用最新版本。 有关 semver 范围的详细信息，请参阅 [npm 上的 semver 文档](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges)。

如果您的工作流程生成多个 {% data variables.product.prodname_codeql %} 数据库，则可以使用包的嵌套映射指定要在自定义配置文件中运行的任何 {% data variables.product.prodname_codeql %} 查询包。

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %} {% endif %}

### 指定额外查询

在 `queries` 数组中指定其他查询。 数组的每个元素都包含一个 `uses` 参数，其值标识单个查询文件、包含查询文件的目录或查询套件定义文件。

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

（可选）您可以给每个数组元素一个名称，如下面的示例配置文件所示。 有关其他查询的详细信息，请参阅上面的“[运行其他查询](#running-additional-queries)”。

### 禁用默认查询

如果只想运行自定义查询，可以使用 `disable-default-queries: true` 禁用默认安全查询。

{% ifversion code-scanning-exclude-queries-from-analysis %}
### 从分析中排除特定查询

可以向自定义配置文件添加 `exclude` 和 `include` 筛选器，以指定要在分析中排除或包含的查询。

这在要排除诸如以下内容时非常有用：
- 来自默认套件的特定查询（`security`、`security-extended` 和`security-and-quality`）。
- 对其结果不感兴趣的特定查询。
- 生成警告和建议的所有查询。

可以使用 `exclude` 筛选器（类似于以下配置文件中的筛选器）来排除要从默认分析中移除的查询。 在以下配置文件示例中，`js/redundant-assignment` 和 `js/useless-assignment-to-local` 查询都从分析中排除。

```yaml
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```
若要查找查询的 ID，可以在“安全性”选项卡中的警报列表中单击警报。这会打开警报详细信息页。 `Rule ID` 字段包含查询 ID。有关警报详细信息页的详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %} 警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)”。

{% tip %}

**提示：**
- 筛选器的顺序非常重要。 在有关查询和查询包的指令之后出现的第一个筛选器指令确定在默认情况下是包含还是排除查询。
- 后续指令按顺序执行，在文件后面出现的指令优先于前面的指令。

{% endtip %}

可以在“[示例配置文件](#example-configuration-files)”部分中找到说明这些筛选器的使用的另一个示例。

有关在自定义配置文件中使用 `exclude` 和 `include` 筛选器的详细信息，请参阅“[创建 {% data variables.product.prodname_codeql %} 查询套件](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/#filtering-the-queries-in-a-query-suite)”。 有关可以筛选的查询元数据的信息，请参阅“[CodeQL 查询的元数据](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)”。

{% endif %}

### 指定要扫描的目录

对于 {% data variables.product.prodname_codeql %} 支持的解释语言（Python{% ifversion fpt or ghes > 3.3 or ghae > 3.3 %}、Ruby{% endif %} 和 JavaScript/TypeScript），你可以通过在配置文件中添加 `paths` 数组将 {% data variables.product.prodname_code_scanning %} 限制为特定目录中的文件。 你可以通过添加 `paths-ignore` 数组从分析中排除特定目录中的文件。

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**注意**：

* 在 {% data variables.product.prodname_code_scanning %} 配置文件的上下文中使用的 `paths` 和 `paths-ignore` 关键字在工作流中用于 `on.<push|pull_request>.paths` 时不应与相同的关键字混淆。 当它们用于修改工作流中的 `on.<push|pull_request>` 时，它们确定当有人修改指定目录中的代码时是否会运行这些操作。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”。
* 筛选模式字符 `?`、`+`、`[`、`]` 和 `!` 不受支持，将按字面意思进行匹配。
* `**` 字符只能位于行首或行尾，或被斜线包围，并且不能混用 `**` 和其他字符。 例如，`foo/**`、`**/foo` 和 `foo/**/bar` 都是允许的语法，但 `**foo` 不是。 但是，可以将单星与其他字符一起使用，如示例中所示。 需要引用包含 `*` 字符的任何内容。

{% endnote %}

对于编译的语言，如果要将 {% data variables.product.prodname_code_scanning %} 限制到项目中的特定目录，您必须在工作流程中指定适当的构建步骤。 需要用于从构建中排除目录的命令取决于你的构建系统。 有关详细信息，请参阅“[为已编译语言配置 {% data variables.product.prodname_codeql %} 工作流](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。

修改特定目录中的代码时，可以快速分析单存储库的一小部分。 需要在构建步骤中排除目录，并在工作流中为 [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) 使用 `paths-ignore` 和 `paths` 关键字。

### 示例配置文件

{% data reusables.code-scanning.example-configuration-files %}

## 为编译语言配置 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} 要详细了解如何为编译语言配置 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，请参阅“[编译语言配置 {% data variables.product.prodname_codeql %} 工作流](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)”。

## 将 {% data variables.product.prodname_code_scanning %} 数据上传到 {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} 可显示通过第三方工具在外部生成的代码分析数据。 可以使用 `upload-sarif` 操作上传代码分析数据。 有关详细信息，请参阅“[将 SARIF 文件上传到 GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github)”。
