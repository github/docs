---
title: 在 CI 系统中运行 CodeQL 运行器
shortTitle: Run CodeQL runner
intro: '可以使用 {% data variables.code-scanning.codeql_runner %} 在第三方持续集成系统中执行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 7e60376ed165a3af2da7f000c37d326cb33ade99
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161092'
---
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% ifversion codeql-runner-supported %}

{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于 {% data variables.code-scanning.codeql_runner %}

{% data variables.code-scanning.codeql_runner %} 是可以用来在第三方持续集成 (CI) 系统中处理的代码上运行 {% data variables.product.prodname_code_scanning %} 的工具。 {% data reusables.code-scanning.about-code-scanning %} 有关信息，请参阅“[关于使用 {% data variables.product.prodname_codeql %} 进行 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)”。

在许多情况下，在 CI 系统中直接使用 {% data variables.product.prodname_codeql_cli %} 设置 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 更简单。 

您也可以使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_name %} 中运行 {% data variables.product.prodname_code_scanning %}。 有关信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% data variables.code-scanning.codeql_runner %} 是在 {% data variables.product.prodname_dotcom %} 存储库的签出上运行 {% data variables.product.prodname_codeql %} 分析的命令行工具。 你可以将运行器添加到第三方系统，然后调用运行器以分析代码并将结果上传到 {% data variables.product.product_name %}。 这些结果在仓库中显示为 {% data variables.product.prodname_code_scanning %} 警报。

{% note %}

注意：{% ifversion fpt or ghec %}
* {% data variables.code-scanning.codeql_runner %} 使用 {% data variables.product.prodname_codeql %} CLI 来分析代码，因此具有相同的许可条件。 它可自由用于 {% data variables.product.prodname_dotcom_the_website %} 上维护的公共仓库，并且可用于具有 {% data variables.product.prodname_advanced_security %} 许可证的客户所拥有的私有仓库。 有关信息，请参阅“[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 条款和条件](https://securitylab.github.com/tools/codeql/license)”以及“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。
{% else %}
* {% data variables.code-scanning.codeql_runner %} 可供拥有 {% data variables.product.prodname_advanced_security %} 许可证的客户使用。
{% endif %} {% ifversion ghae %}
* 请勿将 {% data variables.code-scanning.codeql_runner %} 与 {% data variables.product.prodname_codeql %} CLI 混淆。 {% data variables.product.prodname_codeql %} CLI 是一个命令行接口，允许您创建用于安全研究的 {% data variables.product.prodname_codeql %} 数据库并运行 {% data variables.product.prodname_codeql %} 查询。
有关详细信息，请参阅“[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)”。
{% endif %} {% endnote %}

## 下载 {% data variables.code-scanning.codeql_runner %}

可以从 https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases 下载 {% data variables.code-scanning.codeql_runner %}。 在某些操作系统上，您可能需要更改下载文件的权限才能运行它。

在 Linux 上：

```shell
chmod +x codeql-runner-linux
```

在 macOS 上：

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

在 Windows 中，`codeql-runner-win.exe` 文件通常无需更改权限。

## 将 {% data variables.code-scanning.codeql_runner %} 添加到 CI 系统

下载 {% data variables.code-scanning.codeql_runner %} 并确认它可执行后，应将该运行器提供给打算用于 {% data variables.product.prodname_code_scanning %} 的每个 CI 服务器。 例如，您可以配置每台服务器从中央内部位置复制运行器。 或者，您也可以使用 REST API 直接从 {% data variables.product.prodname_dotcom %} 获取运行器，例如： 

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

除此之外，每个 CI 服务器还需要：

- 供 {% data variables.code-scanning.codeql_runner %} 使用的 {% data variables.product.prodname_github_app %} 或 {% data variables.product.pat_generic %}。 必须使用具有 `repo` 范围的访问令牌，或具有 `security_events` 写入权限和 `metadata` 与 `contents` 读取权限的 {% data variables.product.prodname_github_app %}。 有关信息，请参阅“[生成 {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)”和“[创建 {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)”。
- 访问与此版本的 {% data variables.code-scanning.codeql_runner %} 关联的 {% data variables.product.prodname_codeql %} 捆绑包。 此包包含 {% data variables.product.prodname_codeql %} 分析所需的查询和库，以及供运行器内部使用的 {% data variables.product.prodname_codeql %} CLI。 有关信息，请参阅“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。

提供 {% data variables.product.prodname_codeql %} 包访问权限的选项：

1. 允许 CI 服务器访问 https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action，以便 {% data variables.code-scanning.codeql_runner %} 可以自动下载捆绑包。
1. 手动下载/解压缩捆绑包，将其与其他中心资源一起存储，并使用 <nobr>`--codeql-path`</nobr> 标志在调用中指定捆绑包的位置以初始化 {% data variables.code-scanning.codeql_runner %}。

## 调用 {% data variables.code-scanning.codeql_runner %}

你应该从要分析的存储库的签出位置调用 {% data variables.code-scanning.codeql_runner %}。 两个主要命令是：

1. `init` 需要初始化运行器并为需要分析的每种语言创建一个 {% data variables.product.prodname_codeql %} 数据库。 这些数据库由后续命令填充和分析。
1. `analyze` 需要填充 {% data variables.product.prodname_codeql %} 数据库、分析它们并将结果上传到 {% data variables.product.product_name %}。

对于这两个命令，都必须指定 {% data variables.product.product_name %} 的 URL、存储库 OWNER/NAME 以及 {% data variables.product.prodname_github_apps %} 或用于身份验证的 {% data variables.product.pat_generic %}。 还需要指定 CodeQL 包的位置，除非 CI 服务器有权直接从 `github/codeql-action` 存储库下载它。

可以配置 {% data variables.code-scanning.codeql_runner %} 存储 CodeQL 捆绑包的位置，以便将来使用 <nobr>`--tools-dir`</nobr> 标志在服务器上进行分析，还可配置在使用 <nobr>`--temp-dir`</nobr> 进行分析的过程中储存临时文件的位置。

要查看运行器的命令行引用，请使用 `-h` 标志。 例如，要列出所有命令，请运行：`codeql-runner-OS -h`，或者要列出可用于 `init` 命令的所有标志，请运行：`codeql-runner-OS init -h`（其中 `OS` 因你使用的可执行文件而异）。 有关详细信息，请参阅“[在 CI 系统中配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)”。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### 基本示例

此示例在 Linux CI 服务器上为托管在 `{% data variables.command_line.git_url_example %}` 上的 `octo-org/example-repo` 存储库运行 {% data variables.product.prodname_codeql %} 分析。 这个过程非常简单，因为仓库只包含可通过 {% data variables.product.prodname_codeql %} 直接分析的语言，而无需构建（例如 Go、JavaScript、Python 和 TypeScript）。

在此示例中，服务器有权直接从 `github/codeql-action` 存储库下载 {% data variables.product.prodname_codeql %} 包，因此无需使用 `--codeql-path` 标志。

1. 检出要分析的仓库。
1. 移至检出仓库的目录。
1. 初始化 {% data variables.code-scanning.codeql_runner %} 并为检测到的语言创建 {% data variables.product.prodname_codeql %}。

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### 编译语言示例

此示例与前面的示例相似，但此例中的仓库含有用 C/C++、C# 或 Java 编写的代码。 要为这些语言创建 {% data variables.product.prodname_codeql %} 数据库，CLI 需要监控构建。 在初始化过程结束时，运行器会报告您需要在构建代码之前设置环境的命令。 你需要在调用正常的 CI 构建进程之前运行此命令，然后运行 `analyze` 命令。

1. 检出要分析的仓库。
1. 移至检出仓库的目录。
1. 初始化 {% data variables.code-scanning.codeql_runner %} 并为检测到的语言创建 {% data variables.product.prodname_codeql %}。
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
1. 获取由 `init` 操作生成的脚本以设置环境，从而监视生成。 请注意以下代码片段中的先导点和空间。

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. 构建代码。 在 macOS 上，需要使用环境变量 `$CODEQL_RUNNER` 为构建命令添加前缀。 有关详细信息，请参阅“[对 CI 系统中的 {% data variables.code-scanning.codeql_runner %} 进行故障排除](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build)”。

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

注意：如果使用容器化生成，则需要在执行生成任务的容器中运行 {% data variables.code-scanning.codeql_runner %}。

{% endnote %}

## 延伸阅读

- [在 CI 系统中配置 {% data variables.code-scanning.codeql_runner %}](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)
- [对 CI 系统中的 {% data variables.code-scanning.codeql_runner %} 进行故障排除](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)

{% else %}

## 关于 {% data variables.code-scanning.codeql_runner %}

{% data variables.code-scanning.codeql_runner %} 已被弃用。 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) 版本 2.7.6 具有完整的功能奇偶一致性。

有关迁移到 {% data variables.product.prodname_codeql_cli %} 的信息，请参阅“[从 CodeQL 运行器迁移到 CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)”。

## 延伸阅读

- GitHub 博客中的 [CodeQL 运行器弃用](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)

{% endif %}
