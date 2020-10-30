---
title: 配置代码扫描
intro: '您可以配置 {% data variables.product.prodname_dotcom %} 如何扫描项目代码以查找漏洞和错误。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: '拥有仓库写入权限的人可配置仓库的 {% data variables.product.prodname_code_scanning %}。'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}


### 关于 {% data variables.product.prodname_code_scanning %} 配置

You can run {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_location %}, using {% data variables.product.prodname_actions %}, or from your continuous integration (CI) system, using the {% data variables.product.prodname_codeql_runner %}. 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。 For more information about the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)."

以下查询套件内置于 {% data variables.product.prodname_code_scanning %}，可用于您的配置文件。

在为仓库配置 {% data variables.product.prodname_code_scanning %} 之前，必须将 {% data variables.product.prodname_actions %} 工作流程添加到仓库中以启用 {% data variables.product.prodname_code_scanning %}。 默认 {% data variables.product.prodname_code_scanning %} 工作流程使用 `on.push` 事件触发代码扫描 - 每次推送到任何包含工作流程文件的分支时触发。

{% data reusables.code-scanning.edit-workflow %}

您可以为 {% data variables.product.prodname_code_scanning %} 编写配置文件。 {% data variables.product.prodname_marketplace %}{% if currentVersion ver_gt "enterprise-server@2.21" %} on  {% data variables.product.prodname_dotcom_the_website %}{% endif %} contains other {% data variables.product.prodname_code_scanning %} workflows you can use. {% if currentVersion == "free-pro-team@latest" %}You can find a selection of these on the "Get started with {% data variables.product.prodname_code_scanning %}" page, which you can access from the **{% octicon "shield" aria-label="The shield symbol" %} Security** tab.{% endif %} The specific examples given in this article relate to the {% data variables.product.prodname_codeql_workflow %} file.

### Editing a code scanning workflow

{% data variables.product.prodname_dotcom %} saves workflow files in the _.github/workflows_ directory of your repository. You can find a workflow you have enabled by searching for its file name. For example, by default, the workflow file for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} is called _codeql-analysis.yml_.

1. 在仓库中，浏览至要编辑的工作流程文件。
1. 要打开工作流程编辑器，在文件视图右上角单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![编辑工作流程文件按钮](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. After you have edited the file, click **Start commit** and complete the "Commit changes" form. You can choose to commit directly to the current branch, or create a new branch and start a pull request. ![Commit update to codeql.yml workflow](/assets/images/help/repository/code-scanning-workflow-update.png)

有关编辑工作流程文件的更多信息，请参阅“[配置工作流程](/actions/configuring-and-managing-workflows/configuring-a-workflow)”。

### 配置频率

您可以按时间表或在仓库中发生特定事件时扫描代码。

每当推送到仓库以及每次创建拉取请求时，时扫描代码可防止开发者在代码中引入新的漏洞和错误。 按时间表扫描可了解 {% data variables.product.company_short %}、安全研究者和社区发现的最新漏洞和错误，即使开发者并未主动维护仓库。

#### 按推送扫描

如果使用默认工作流程，则除了事件触发的扫描之外，{% data variables.product.prodname_code_scanning %} 还会每周扫描一次仓库代码。 要调整此时间表，请编辑工作流程中的 `cron` 值。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#on)”。

#### 扫描拉取请求

**注**：在 {% data variables.product.prodname_code_scanning %} 配置文件上下文中使用的 `paths` 和 `paths-ignore` 关键字，不应与用于 `on.<push|pull_request>.paths` 的相同关键字相混淆。 当它们用于修改工作流程文件中的 `on.<push|pull_request>` 时，它们将决定在有人修改指定目录中的代码时是否运行操作。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)”。

有关 `pull_request` 事件的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)”。

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
  pull_request:
  schedule:
    - cron: '0 15 * * 0'
```

This workflow scans:
* Every push to the default branch and the protected branch
* Every pull request to the default branch
* The default branch at 3 P.M. every Sunday

### 指定操作系统

如果您的代码需要使用特定的操作系统进行编译，您可以在工作流程中配置它。 编辑 `jobs.<job_id>.runs-on` 的值以指定运行 {% data variables.product.prodname_code_scanning %} 操作的机器操作系统。 {% if currentVersion ver_gt "enterprise-server@2.21" %}You specify the operating system by using an appropriate label as the second element in a two-element array, after `self-hosted`.

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```
{% endif %}

{% data variables.product.prodname_code_scanning_capc %} 支持 macOS、Ubuntu 和 Windows 的最新版本。 Typical values for this setting are therefore: `ubuntu-latest`, `windows-latest`, and `macos-latest`. For more information, see {% if currentVersion ver_gt "enterprise-server@2.21" %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#self-hosted-runners)" and "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners){% else %}"[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on){% endif %}."

### 覆盖自动语言检测

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring {% data variables.product.prodname_code_scanning %} for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages)."

{% data reusables.code-scanning.supported-languages %}

{% data reusables.code-scanning.specify-language-to-analyze %}

要覆盖自动语言检测，请将 `with:languages:` 添加到工作流程中的 `init` 操作。 受支持语言的关键字是 `cpp`、`csharp`、`go`、`java`、`javascript` 和 `python`。

例如，以下配置可将 {% data variables.product.prodname_code_scanning %} 限制到 C/C++、C# 和 Python。

``` yaml
- uses: github/codeql-action/init@v1
  with:
    languages: cpp, csharp, python
```

### 运行额外查询

{% data reusables.code-scanning.run-additional-queries %}

要添加一个或多个查询套件，请在配置文件中添加 `queries` 部分。

``` yaml
- uses: github/codeql-action/init@v1
  with:
    - queries: COMMA-SEPARATED LIST OF PATHS
```

您也可以在配置文件中指定额外查询套件以运行它们。 查询套件是查询的集合，通常按目的或语言分组。

{% data reusables.code-scanning.codeql-query-suites %}

If you are also using a configuration file for custom settings, any additional queries specified in your workflow are used instead of any specified in the configuration file. If you want to run the combined set of additional queries specified here and in the configuration file, prefix the value of `queries` in the workflow with the `+` symbol. 有关配置文件的示例，请参阅“[配置文件示例](#example-configuration-files)”。

In the following example, the `+` symbol ensures that the specified additional queries are used together with any queries specified in the referenced configuration file.

``` yaml
queries:
  - name: DESCRIPTION OF YOUR CHOICE
    uses: PATH
```

### 使用第三方代码扫描工具

As an alternative to specifying which queries to run in the workflow file, you can do this in a separate configuration file. You can also use a configuration file to disable the default queries and to specify which directories to scan during analysis.

In the workflow file, use the `config-file` parameter of the `init` action to specify the path to the configuration file you want to use. 此示例加载配置文件 _./.github/codeql/codeql-config.yml_。

``` yaml
- uses: github/codeql-action/init@v1
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

The configuration file can be located within the local repository, or in a public, remote repository. For remote repositories, you can use the _owner/repository/file.yml@branch_ syntax. The settings in the file are written in YAML format.

#### Specifying additional queries

You specify additional queries in a `queries` array. Each element of the array contains a `uses` parameter with a value that identifies a single query file, a directory containing query files, or a query suite definition file.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls
```

Optionally, you can give each array element a name, as shown in the example configuration files below.

For more information about additional queries, see "[Running additional queries](#running-additional-queries)" above.

#### 禁用默认查询

如果只想运行自定义查询，您可以通过在配置文件中添加 `disable-default-queries: true` 来禁用默认安全查询。

#### 指定要扫描的目录

For the interpreted languages that {% data variables.product.prodname_codeql %} supports (Python and JavaScript/TypeScript), you can restrict {% data variables.product.prodname_code_scanning %} to files in specific directories by adding a `paths` array to the configuration file. You can exclude the files in specific directories from scans by adding a `paths-ignore` array.

``` yaml
paths: 
  - src 
paths-ignore: 
  - node_modules
  - '**/*.test.js'
```

{% note %}

**注**：

* The `paths` and `paths-ignore` keywords, used in the context of the {% data variables.product.prodname_code_scanning %} configuration file, should not be confused with the same keywords when used for `on.<push|pull_request>.paths` in a workflow. When they are used to modify `on.<push|pull_request>` in a workflow, they determine whether the actions will be run when someone modifies code in the specified directories. 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)”。
* `**` characters can only be at the start or end of a line, or surrounded by slashes, and you can't mix `**` and other characters. For example, `foo/**`, `**/foo`, and `foo/**/bar` are all allowed syntax, but `**foo` isn't. However you can use single stars along with other characters, as shown in the example. You'll need to quote anything that contains a `*` character.

{% endnote %}

对于 C/C++、C# 和 Java，如果要将 {% data variables.product.prodname_code_scanning %} 限制到项目中的特定目录，您必须在工作流程中指定适当的构建步骤。 用于在构建过程中排除目录的命令将取决于您的构建系统。 For more information, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

在修改特定目录中的代码时，您可以快速分析单个仓库中的小部分。 您需要在构建步骤中排除目录并在工作流程文件中对 [`on.<push|pull_request>`](https://help.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths) 使用 `paths-ignore` 和 `paths` 关键字。

#### 配置文件示例

{% data reusables.code-scanning.example-configuration-files %}

### Configuring {% data variables.product.prodname_code_scanning %} for compiled languages

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For more information about how to configure {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for compiled languages, see "[Configuring the {% data variables.product.prodname_codeql %} action for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages)."

### 访问私有仓库

如果 {% data variables.product.prodname_code_scanning %} 的工作流程访问 {% data variables.product.prodname_dotcom %} 上的私有仓库，您需要将 Git 配置为使用个人访问令牌进行身份验证。 在执行任何 {% data variables.product.prodname_codeql %} 操作之前，请使用工作流程中的 `jobs.<job_id>.steps.env` 定义运行环境中的密码。 更多信息请参阅“[创建用于命令行的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)”和“[创建和存储加密密码](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)”。

例如，以下 Git 配置将 {% data variables.product.prodname_dotcom_the_website %} 上 `github/foo`、`github/bar` 和 `github/baz` 仓库的完整 URL替换为包含您存储在 `ACCESS_TOKEN` 环境变量中的个人访问令牌的 URL。

{% raw %}
```yaml
steps:
- name: Configure access to private repository on GitHub.com
  env:
    TOKEN: ${{ secrets.ACCESS_TOKEN }}
  run: |
    git config --global url."https://${TOKEN}@github.com/github/foo".insteadOf "https://github.com/github/foo"
    git config --global url."https://${TOKEN}@github.com/github/bar".insteadOf "https://github.com/github/bar"
    git config --global url."https://${TOKEN}@github.com/github/baz".insteadOf "https://github.com/github/baz"
```
{% endraw %}

### Uploading {% data variables.product.prodname_code_scanning %} data to {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} can display code analysis data generated externally by a third-party tool. 通过在工作流程中添加 `upload-sarif` 操作，您可以在 {% data variables.product.prodname_dotcom %} 中显示第三方工具的代码分析。 更多信息请参阅“[将 SARIF 文件上传到 GitHub](/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github)”。
