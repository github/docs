---
title: CI 系统中的 CodeQL 代码扫描故障排除
shortTitle: CI 中的故障排除
intro: '如果您在 {% data variables.product.prodname_codeql_runner %} 方面遇到问题，可使用这些提示来排除故障。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - 安全
---

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

### `init` 命令耗时太长

在 {% data variables.product.prodname_codeql_runner %} 可以构建和分析代码之前，它需要访问 {% data variables.product.prodname_codeql %} 包，其中包含 {% data variables.product.prodname_codeql %} CLI 和 {% data variables.product.prodname_codeql %} 库。

首次在计算机上使用 {% data variables.product.prodname_codeql_runner %} 时，`init` 命令会将 {% data variables.product.prodname_codeql %} 包下载到您的计算机上。 此下载可能需要几分钟时间。
{% data variables.product.prodname_codeql %} 包在运行之间缓存，因此如果您在同一台计算机上再次使用 {% data variables.product.prodname_codeql_runner %}，它不会再次下载 {% data variables.product.prodname_codeql %} 包。

为避免这种自动下载，您可以手动将 {% data variables.product.prodname_codeql %} 包下载到您的计算机上，并使用 `init` 命令的 `--codeql-path` 标志指定路径。

### 构建过程中找不到代码

如果用于 {% data variables.product.prodname_codeql_runner %} 的 `analyze` 命令失败并返回错误 `No source code was seen during the build`，这表明 {% data variables.product.prodname_codeql %} 无法监视您的代码。 有几个原因可以解释这种失败。

1. 自动语言检测发现了受支持的语言，但仓库中没有该语言的可分析代码。 一个典型的例子是，我们的语言检测服务发现了一个与特定的编程语言相关的文件，例如 `.h` 或 `.gyp` 文件，但仓库中没有相应的可执行代码。 要解决此问题，您可以使用 `init` 命令的 `--languages` 标志，手动定义要分析的语言。 更多信息请参阅“[在 CI 系统中配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system)”。

1. 您没有使用 `autobuild` 命令分析编译语言，并且在 `init` 步骤后手动运行构建步骤。 要使构建正常工作，您必须设置环境，使 {% data variables.product.prodname_codeql_runner %} 能够监视代码。 `init` 命令生成如何导出所需环境变量的指令， 因此您可以在运行 `init` 命令后复制和运行脚本。
   - 在 macOS 和 Linux 上：
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - 在 Windows 上，使用命令 shell (`cmd`) 或批处理文件 (`.bat`)：
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - 在 Windows 上，使用 PowerShell ：
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   环境变量也存储在文件 `codeql-runner/codeql-env.json` 中。 此文件包含单个 JSON 对象，它将环境变量键映射到值。 如果无法运行由 `init` 命令生成的脚本，您可以改用 JSON 格式的数据。

   {% note %}

   **注：**如果您使用 `init` 命令的 `--temp-dir` 标志来指定临时文件的自定义目录，则 `codeql-env` 文件的路径可能不同。

   {% endnote %}

1. 您没有使用 `autobuild` 命令分析 macOS 上的编译语言，并且在 `init` 步骤后手动运行构建步骤。 如果启用了 SIP（系统完整性保护，OSX 最新版本默认启用），则分析可能会失败。 为解决此问题，将使用 `$CODEQL_RUNNER` 环境变量前缀构建命令。 例如，如果您的构建命令是 `cmd arg1 arg2`，则应运行 `$CODEQL_RUNNER cmd arg1 arg2`。

1. 代码在容器或在单独的计算机上构建。 如果您使用容器化的构建，或者将构建外包给另一台计算机，请确保在容器或您执行构建任务的计算机上运行 {% data variables.product.prodname_codeql_runner %}。 更多信息请参阅“[在容器中运行 CodeQL 代码扫描](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)”。
