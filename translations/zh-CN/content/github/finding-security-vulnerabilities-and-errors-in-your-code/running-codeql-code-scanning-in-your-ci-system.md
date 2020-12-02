---
title: Running CodeQL code scanning in your CI system
shortTitle: 在 CI 中运行
intro: 'You can use the {% data variables.product.prodname_codeql_runner %} to perform {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in a third-party continuous integration system.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

<!--UI-LINK: When GitHub Enterprise Server doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Using {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} with your existing CI system

If you use a continuous integration or continuous delivery/deployment (CI/CD) system other than {% data variables.product.prodname_actions %}, you can use your existing system to run {% data variables.product.prodname_dotcom %}'s {% data variables.product.prodname_codeql %} analysis and upload the results to {% data variables.product.prodname_dotcom %}. To do this, use the {% data variables.product.prodname_codeql_runner %}.

### 关于 {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.about-code-scanning %} 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)”。

您可以使用 {% data variables.product.prodname_codeql_runner %} 在第三方持续集成 (CI) 系统中处理的代码上运行 {% data variables.product.prodname_code_scanning %}。 您也可以使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_location %} 上运行 {% data variables.product.prodname_code_scanning %}。 更多信息请参阅“[为仓库启用 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)”。

{% data variables.product.prodname_codeql_runner %} 是在 {% data variables.product.prodname_dotcom %} 仓库的检出上运行 {% data variables.product.prodname_codeql %} 分析的命令行工具。 您可以将运行器添加到第三方系统，然后调用运行器以分析代码并将结果上传到 {% data variables.product.product_location %}。 这些结果在仓库中显示为 {% data variables.product.prodname_code_scanning %} 警报。

{% data reusables.code-scanning.codeql-runner-license %}

### 下载 {% data variables.product.prodname_codeql_runner %}

您可以从 https://github.com/github/codeql-action/releases 下载 {% data variables.product.prodname_codeql_runner %}。 在某些操作系统上，您可能需要更改下载文件的权限才能运行它。

在 Linux 上：

```shell
chmod +x codeql-runner-linux
```

在 MacOS 上：

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

You should call the {% data variables.product.prodname_codeql_runner %} from the checkout location of the repository you want to analyze. The two main commands are:

### 将 {% data variables.product.prodname_codeql_runner %} 添加到 CI 系统

下载 {% data variables.product.prodname_codeql_runner %} 并确认它可执行后，应将运行器提供给您打算用于 {% data variables.product.prodname_code_scanning %} 的每个 CI 服务器。 It is important to notice that each CI server that you intend to use for {% data variables.product.prodname_code_scanning %} needs to have the {% data variables.product.prodname_codeql_runner %}. You might configure each server to copy the runner from a central, internal location, or you could use the REST API to get the runner direct from GitHub, for example:

```shell
$ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so the build can be traced, for example by running "
      . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
```

除此之外，每个 CI 服务器还需要：

- {% data variables.product.prodname_github_apps %} 或供 {% data variables.product.prodname_codeql_runner %} 使用的个人访问令牌。 对于私有仓库，令牌必须具有 `repo` 作用域。 对于公共仓库，令牌只需要 `public_repo` 和 `repo:security_events` 作用域。 更多信息请参阅“[构建 {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)”和“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
- 访问与此 {% data variables.product.prodname_codeql_runner %} 发行版相关联的 {% data variables.product.prodname_codeql %} 包。 此包包含 {% data variables.product.prodname_codeql %} 分析所需的 {% data variables.product.prodname_codeql %} CLI、查询和库。 更多信息请参阅“[{% data variables.product.prodname_codeql %} CLI](https://help.semmle.com/codeql/codeql-cli.html)”。

提供 {% data variables.product.prodname_codeql %} 包访问权限的选项：

1. 允许 CI 服务器访问 {% data variables.product.prodname_dotcom_the_website %}，以便 {% data variables.product.prodname_codeql_runner %} 可以自动下载包。
1. Manually download/extract the bundle, store it with other central resources, and use the `--codeql-path` flag to specify the location of the bundle in calls to initialize the
{% data variables.product.prodname_codeql_runner %}.
{% if enterpriseServerVersions contains currentVersion %}
1. 您可以在 {% data variables.product.product_location %} 上镜像 `github/codeql-action` 仓库。 除非您指定 <nobr>`--codeql-path`</nobr> 标志，否则运行器将在此位置和 {% data variables.product.prodname_dotcom_the_website %}上自动检查包。{% endif %}

### 调用 {% data variables.product.prodname_codeql_runner %}

您应该从要分析的仓库的检出位置调用 {% data variables.product.prodname_codeql_runner %}。 两个主要命令是：

1. `init` 需要初始化运行器并为需要分析的每种语言创建一个 {% data variables.product.prodname_codeql %} 数据库。 这些数据库由后续命令填充和分析。
1. `analyze` 需要填充 {% data variables.product.prodname_codeql %} 数据库、进行分析并将结果上传到 {% data variables.product.product_location %}。

对于这两个命令，都必须指定 {% data variables.product.product_location %} 的 URL、仓库*所有者/名称*以及 GitHub 应用程序或用于身份验证的个人访问令牌。 您还需要指定 CodeQL 包的位置，除非 CI 服务器有权直接从 {% data variables.product.prodname_dotcom_the_website %} 上{% if enterpriseServerVersions contains currentVersion %}或在 {% data variables.product.product_location %} 上镜像{% endif %}的 `github/codeql-action` 仓库下载它。

您可以配置 {% data variables.product.prodname_codeql_runner %} 存储 CodeQL 包的位置以便将来在服务器上进行分析，使用： <nobr>`--tools-dir`</nobr> 标志；并配置在分析过程中存储临时文件的位置，使用： <nobr>`--temp-dir`</nobr>.

要查看运行器的命令行引用，请使用 `-h` 标志。 例如，要列出所有运行的命令：`codeql-runner-OS -h`，或列出所有可用于 `init` 命令运行的标志：`codeql-runner-OS init -h`（其中 `OS` 因使用的可执行文件而异）。 For more information, see "[Configuring {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system#codeql-runner-command-reference)."

#### 基本示例

此示例在 Linux CI 服务器上对托管在 `{% data variables.command_line.git_url_example %}` 上的 `octo-org/example-repo` 仓库运行 {% data variables.product.prodname_codeql %} 分析。 这个过程非常简单，因为仓库只包含可通过 {% data variables.product.prodname_codeql %} 直接分析的语言，而无需构建（例如 Go、JavaScript、Python 和 TypeScript）。

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

1. 填充 {% data variables.product.prodname_codeql_runner %} 数据库、进行分析并将结果上传到 {% data variables.product.product_name %}。

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/main
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

服务器有权直接从 {% data variables.product.prodname_dotcom_the_website %} 上{% if enterpriseServerVersions contains currentVersion %}或在 {% data variables.product.product_location %} 上镜像{% endif %}的 `github/codeql-action` 仓库下载 {% data variables.product.prodname_codeql %} 包，因此无需使用 `--codeql-path` 标志。 分析完成后， {% data variables.product.prodname_codeql_runner %} 会将结果上传到 {% data variables.product.prodname_code_scanning %} 视图。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)”。

#### 编译语言示例

此示例与前面的示例相似，但此例中的仓库含有用 C/C++、C# 或 Java 编写的代码。 To create a {% data variables.product.prodname_codeql %} database for these languages, the CLI needs to monitor the build. 在初始化过程结束时，运行器会报告您需要在构建代码之前设置环境的命令。 您需要在调用正常的 CI 构建进程之前运行此命令，然后运行 `analyze` 命令。

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
      Please export these variables to future processes so the build can be traced, for example by running "
      . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      ```

1. Run the script generated by the `init` action to set up the environment to monitor the build.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. 构建代码。
1. 填充 {% data variables.product.prodname_codeql %} 数据库、进行分析并将结果上传到 GitHub。

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
        --commit ae7b655ef30b50fb726ae7b3daa79571a39d194d --ref refs/heads/main
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo-2/code-scanning/sarifs - 202 in 573ms
    > Successfully uploaded results
    ```

{% note %}

**注：**如果使用容器化构建，您需要在进行构建任务的容器中运行 {% data variables.product.prodname_codeql_runner %}。

{% endnote %}

### 延伸阅读

- "[在 CI 系统中配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system)"
- "[CI 系统中的{% data variables.product.prodname_code_scanning %} 故障排除](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system)"
