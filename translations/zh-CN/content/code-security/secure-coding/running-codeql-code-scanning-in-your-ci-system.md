---
title: 在 CI 系统中运行 CodeQL 代码扫描
shortTitle: 在 CI 中运行
intro: '您可以使用 {% data variables.product.prodname_codeql_runner %} 在第三方持续集成系统中执行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

<!--UI-LINK: When GitHub Enterprise Server doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 将 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 与现有的 CI 系统一起使用

如果您使用 {% data variables.product.prodname_actions %} 以外的持续集成或持续交付/部署 (CI/CD) 系统，您可以使用现有系统运行 {% data variables.product.prodname_dotcom %} 的 {% data variables.product.prodname_codeql %}，并将结果上传到 {% data variables.product.prodname_dotcom %}。 为此，请使用 {% data variables.product.prodname_codeql_runner %}。

### 关于 {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.about-code-scanning %} 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)”。

您可以使用 {% data variables.product.prodname_codeql_runner %} 在第三方持续集成 (CI) 系统中处理的代码上运行 {% data variables.product.prodname_code_scanning %}。 您也可以使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_name %} 上运行 {% data variables.product.prodname_code_scanning %}。 相关信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% data variables.product.prodname_codeql_runner %} 是在 {% data variables.product.prodname_dotcom %} 仓库的检出上运行 {% data variables.product.prodname_codeql %} 分析的命令行工具。 您可以将运行器添加到第三方系统，然后调用运行器以分析代码并将结果上传到 {% data variables.product.product_name %}。 这些结果在仓库中显示为 {% data variables.product.prodname_code_scanning %} 警报。

{% note %}

**注意：**
{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_codeql_runner %} 使用 {% data variables.product.prodname_codeql %} CLI 来分析代码，因此具有相同的许可条件。 它可自由用于 {% data variables.product.prodname_dotcom_the_website %} 上维护的公共仓库，并且可用于具有 {% data variables.product.prodname_advanced_security %} 许可证的客户所拥有的私有仓库。 有关信息请参阅“[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 条款和条件](https://securitylab.github.com/tools/codeql/license)”和“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。
{% else %}
* {% data variables.product.prodname_codeql_runner %} 可用于拥有 {% data variables.product.prodname_advanced_security %} 许可证的客户。
{% endif %}
* 请勿将 {% data variables.product.prodname_codeql_runner %} 与 {% data variables.product.prodname_codeql %} CLI 混淆。 {% data variables.product.prodname_codeql %} CLI 是一个交互式命令行接口，允许您创建用于安全研究的 {% data variables.product.prodname_codeql %} 数据库并运行 {% data variables.product.prodname_codeql %} 查询。 更多信息请参阅“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。
{% endnote %}

### 下载 {% data variables.product.prodname_codeql_runner %}

您可以从 https://{% if currentVersion == "enterprise-server@2.22" or currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases 下载 {% data variables.product.prodname_codeql_runner %} 。 在某些操作系统上，您可能需要更改下载文件的权限才能运行它。

在 Linux 上：

```shell
chmod +x codeql-runner-linux
```

在 macOS 中:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

You should call the {% data variables.product.prodname_codeql_runner %} from the checkout location of the repository you want to analyze. The two main commands are:

### 将 {% data variables.product.prodname_codeql_runner %} 添加到 CI 系统

下载 {% data variables.product.prodname_codeql_runner %} 并确认它可执行后，应将运行器提供给您打算用于 {% data variables.product.prodname_code_scanning %} 的每个 CI 服务器。 例如，您可以配置每台服务器从中央内部位置复制运行器。 或者，您也可以使用 REST API 直接从 {% data variables.product.prodname_dotcom %} 获取运行器，例如：

```shell
wget https://{% if currentVersion == "enterprise-server@2.22" or currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

除此之外，每个 CI 服务器还需要：

- {% data variables.product.prodname_github_app %} 或供 {% data variables.product.prodname_codeql_runner %} 使用的个人访问令牌。 您必须使用范围为 `repo` 的访问令牌，或者具有 `security_events` 写入权限以及 `metadata` 和 `contents` 读取权限的 {% data variables.product.prodname_github_app %}。 更多信息请参阅“[构建 {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)”和“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
- 访问与此 {% data variables.product.prodname_codeql_runner %} 发行版相关联的 {% data variables.product.prodname_codeql %} 包。 此包包含 {% data variables.product.prodname_codeql %} 分析所需的查询和库，以及供运行器内部使用的 {% data variables.product.prodname_codeql %} CLI。 更多信息请参阅“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。

提供 {% data variables.product.prodname_codeql %} 包访问权限的选项：

1. 允许 CI 服务器访问 https://{% if currentVersion == "enterprise-server@2.22" or currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action so that the {% data variables.product.prodname_codeql_runner %} 可以自动下载捆绑包。
{% if currentVersion == "enterprise-server@2.22" %}
1. 在 {% data variables.product.product_name %} 上镜像 `github/codeql-action` 仓库。 除非您指定 <nobr>`--codeql-path`</nobr> 标志，否则运行器将在此位置和 {% data variables.product.prodname_dotcom_the_website %}上自动检查包。{% endif %}
1. 手动下载/提取捆绑包，将其与其他中央资源一起存储，并使用 <nobr>`--codeql-path`</nobr> 标记指定捆绑包在调用中的位置，以初始化 {% data variables.product.prodname_codeql_runner %}。

### 调用 {% data variables.product.prodname_codeql_runner %}

您应该从要分析的仓库的检出位置调用 {% data variables.product.prodname_codeql_runner %}。 两个主要命令是：

1. `init` 需要初始化运行器并为需要分析的每种语言创建一个 {% data variables.product.prodname_codeql %} 数据库。 这些数据库由后续命令填充和分析。
1. `analyze` 需要填充 {% data variables.product.prodname_codeql %} 数据库、进行分析并将结果上传到 {% data variables.product.product_name %}。

对于这两个命令，都必须指定 {% data variables.product.product_name %} 的 URL、仓库 *OWNER/NAME*以及 {% data variables.product.prodname_github_apps %} 或用于身份验证的个人访问令牌。 您还需要指定 CodeQL 捆绑包的位置，除非 CI 服务器能够直接从 `github/codeql-action` 仓库下载它。

您可以配置 {% data variables.product.prodname_codeql_runner %} 存储 CodeQL 包的位置以便将来在服务器上进行分析，使用： <nobr>`--tools-dir`</nobr> 标志；并配置在分析过程中存储临时文件的位置，使用： <nobr>`--temp-dir`</nobr>.

要查看运行器的命令行引用，请使用 `-h` 标志。 例如，要列出所有运行的命令：`codeql-runner-OS -h`，或列出所有可用于 `init` 命令运行的标志：`codeql-runner-OS init -h`（其中 `OS` 因使用的可执行文件而异）。 更多信息请参阅“[在 CI 系统中配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system#codeql-runner-command-reference)”。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

#### 基本示例

此示例在 Linux CI 服务器上对托管在 `{% data variables.command_line.git_url_example %}` 上的 `octo-org/example-repo` 仓库运行 {% data variables.product.prodname_codeql %} 分析。 这个过程非常简单，因为仓库只包含可通过 {% data variables.product.prodname_codeql %} 直接分析的语言，而无需构建（例如 Go、JavaScript、Python 和 TypeScript）。

在此示例中，服务器可以直接从 `github/codeql-action` 仓库下载 {% data variables.product.prodname_codeql %} 捆绑包，因此无需使用 `--codeql-path` 标记。

1. 检出要分析的仓库。
1. 移至检出仓库的目录。
1. 初始化 {% data variables.product.prodname_codeql_runner %} 并为检测到的语言创建 {% data variables.product.prodname_codeql %}。

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

#### 编译语言示例

此示例与前面的示例相似，但此例中的仓库含有用 C/C++、C# 或 Java 编写的代码。 要为这些语言创建 {% data variables.product.prodname_codeql %} 数据库，CLI 需要监控构建。 在初始化过程结束时，运行器会报告您需要在构建代码之前设置环境的命令。 您需要在调用正常的 CI 构建进程之前运行此命令，然后运行 `analyze` 命令。

1. 检出要分析的仓库。
1. 移至检出仓库的目录。
1. 初始化 {% data variables.product.prodname_codeql_runner %} 并为检测到的语言创建 {% data variables.product.prodname_codeql %}。

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      ```

1. 获取通过 `init` 操作生成的脚本，以设置监控构建的环境。 请注意以下代码片段中的先导点和空间。

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. 构建代码。 在 macOS 上，您需要使用环境变量 `$CODEQL_RUNNER` 构建命令前缀。 更多信息请参阅“[CI 系统中 CodeQL 代码扫描故障排除](/code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system#no-code-found-during-the-build)”。

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**注：**如果使用容器化构建，您需要在进行构建任务的容器中运行 {% data variables.product.prodname_codeql_runner %}。

{% endnote %}

### 延伸阅读

- "[在 CI 系统中配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system)"
- "[CI 系统中的{% data variables.product.prodname_code_scanning %} 故障排除](/code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system)"
