---
title: CodeQL 工作流程疑难解答
shortTitle: Troubleshoot CodeQL workflow
intro: '如果您在 {% data variables.product.prodname_code_scanning %} 方面遇到问题，可使用这些提示来解决问题。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
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
  - Actions
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: f4de6a52db9651ed1ad6db49959fffbf696aea9a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444619'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %} {% note %}

注意：本文介绍了此版 {% data variables.product.product_name %} 的初始发行版中包含的 CodeQL 操作版本和相关 CodeQL CLI 捆绑包中可用的功能。 如果企业使用较新版本的 CodeQL 操作，请参阅 [{% data variables.product.prodname_ghe_cloud %} 一文](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow)，了解有关最新功能的信息。 {% ifversion not ghae %}有关使用最新版本的信息，请参阅“[为设备配置代码扫描](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”。{% endif %}

{% endnote %} {% endif %}

## 生成详细的调试日志

要生成更详细的日志输出，您可以启用步骤调试日志记录。 有关详细信息，请参阅“[启用调试日志记录](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)”。

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5601 %}

## 创建 {% data variables.product.prodname_codeql %} 调试工件

可以获取生成工件来帮助你调试 {% data variables.product.prodname_codeql %}。
调试工件作为名为 `debug-artifacts` 的工件上传到工作流运行。 数据包含 {% data variables.product.prodname_codeql %} 日志、 {% data variables.product.prodname_codeql %} 数据库以及工作流程生成的任何 SARIF 文件。 

这些生成工件将帮助你调试 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 的问题。 如果您联系 GitHub 支持人员，他们可能会要求您提供此数据。

{% endif %}

{% ifversion codeql-action-debug-logging %}

### 通过重新运行启用调试日志记录的作业来创建 {% data variables.product.prodname_codeql %} 调试生成工件

可以通过启用调试日志记录和重新运行作业来创建 {% data variables.product.prodname_codeql %} 调试生成工件。 有关重新运行 {% data variables.product.prodname_actions %} 工作流和作业的详细信息，请参阅“[重新运行工作流和作业](/actions/managing-workflow-runs/re-running-workflows-and-jobs)”。 

需要确保选择“启用调试日志记录”。 此选项将为运行启用运行器诊断日志记录和步骤调试日志记录。 然后你便可以下载 `debug-artifacts` 进行进一步调查。 通过重新运行作业创建 {% data variables.product.prodname_codeql %} 调试生成工件时，无需修改工作流文件。


{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5601 %}

### 创建 {% data variables.product.prodname_codeql %} 调试生成工件

可以通过在工作流中使用标志来创建 {% data variables.product.prodname_codeql %} 调试生成工件。 为此，需要修改 {% data variables.product.prodname_codeql_workflow %} 文件的 `init` 步骤并设置 `debug: true`。

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

{% endif %}

## 编译语言的自动构建失败

如果项目中编译语言的代码自动构建失败，请尝试以下疑难解答步骤。

- 从 {% data variables.product.prodname_code_scanning %} 工作流中删除 `autobuild` 步骤，并添加特定构建步骤。 有关编辑工作流的信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)”。 有关替换 `autobuild` 步骤的详细信息，请参阅“[为已编译语言配置 {% data variables.product.prodname_codeql %} 工作流](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。

- 如果您的工作流程未明确指定要分析的语言，则 {% data variables.product.prodname_codeql %} 会隐式检测代码库中支持的语言。 在此配置中，对于编译语言 C/C++、C# 和 Java，{% data variables.product.prodname_codeql %} 只分析涵盖最多源文件的语言。 编辑工作流并添加一个矩阵，以指定要分析的语言。 默认的 CodeQL 分析工作流程使用这种矩阵。

  以下工作流程摘录显示了如何在作业策略中使用矩阵来指定语言，然后在“初始化 {% data variables.product.prodname_codeql %}”步骤中引用每种语言：

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  有关编辑工作流的详细信息，请参阅“[配置代码扫描](/code-security/secure-coding/configuring-code-scanning)”。

## 构建过程中找不到代码

如果工作流失败并出现错误 `No source code was seen during the build` 或 `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`，则表示 {% data variables.product.prodname_codeql %} 无法监视代码。 有几个原因可以解释这种失败：

1. 存储库可能不包含以 {% data variables.product.prodname_codeql %} 支持的语言编写的源代码。 检查受支持的语言列表，如果是这种情况，请删除 {% data variables.product.prodname_codeql %} 工作流。 有关详细信息，请参阅“[关于使用 CodeQL 进行代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)”。

1. 自动语言检测发现了受支持的语言，但仓库中没有该语言的可分析代码。 一个典型的例子是，我们的语言检测服务发现了一个与特定的编程语言相关的文件，例如 `.h` 或 `.gyp` 文件，但存储库中没有相应的可执行代码。 要解决此问题，可通过更新 `language` 矩阵中的语言列表来手动定义要分析的语言。 例如，以下配置将仅分析 Go 和 JavaScript。

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   有关详细信息，请参阅上述“[编译语言的自动生成失败](#automatic-build-for-a-compiled-language-fails)”中的工作流提取。
1. {% data variables.product.prodname_code_scanning %} 工作流程在分析一种已编译的语言（C、C++、C# 或 Java），但代码尚未编译。 默认情况下，{% data variables.product.prodname_codeql %} 分析工作流包含 `autobuild` 步骤，但是，此步骤是一个尽力而为的过程，可能无法成功构建你的代码，具体取决于你的特定构建环境。 如果你删除了 `autobuild` 步骤但没有手动添加构建步骤，编译也可能会失败。  有关指定构建步骤的详细信息，请参阅“[为已编译语言配置 {% data variables.product.prodname_codeql %} 工作流](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。
1. 工作流程在分析一种编译语言（C、C++、C# 或 Java），但构建的一部分被缓存以提高性能（最有可能发生在 Gradle 或 Bazel 等构建系统中）。 因为 {% data variables.product.prodname_codeql %} 观察编译器的活动以了解仓库中的数据流，因此 {% data variables.product.prodname_codeql %} 需要进行完整的构建才能执行分析。 
1. 工作流可分析编译语言（C、C++、C# 或 Java），但工作流程中的 `init` 与 `analyze` 步骤之间不发生编译。 {% data variables.product.prodname_codeql %} 需要这两个步骤之间发生构建以观察编译器的活动并执行分析。 
1. 您的编译代码（使用 C、C ++、C＃ 或 Java）已成功编译，但 {% data variables.product.prodname_codeql %} 无法检测到编译器调用。 最常见原因是：

   * 在独立于 {% data variables.product.prodname_codeql %} 的容器中运行构建过程。 有关详细信息，请参阅[在容器中运行 CodeQL 代码扫描](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)。
   * 使用 GitHub Actions 外部的分布式构建系统，使用守护进程构建。
   * {% data variables.product.prodname_codeql %} 不知道您使用的特定编译器。

  对于 .NET Framework 项目以及使用 `dotnet build` 或 `msbuild` 的 C# 项目，应在构建代码时在工作流的 `run` 步骤中指定 `/p:UseSharedCompilation=false`。
  
  例如，以下 C# 的配置将在第一个构建步骤中传递标志。

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  如果您在特定编译器或配置方面遇到其他问题，请联系 {% data variables.contact.contact_support %}。

有关指定构建步骤的详细信息，请参阅“[为已编译语言配置 {% data variables.product.prodname_codeql %} 工作流](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。 

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}
## 扫描的代码行数低于预期

对于 C/C++、C#、Go 和 Java 等编译语言，{% data variables.product.prodname_codeql %} 仅扫描在分析过程中生成的文件。 因此，如果某些源代码未正确编译，则扫描的代码行数将低于预期。 这可能是多种原因引起的：

1. {% data variables.product.prodname_codeql %} `autobuild` 功能使用启发式方法在存储库中生成代码。 但是，有时这种方法会导致对存储库的分析不完整。 例如，当单个存储库中存在多个 `build.sh` 命令时，分析可能不完整，因为 `autobuild` 步骤将仅执行其中一个命令，因此可能无法编译某些源文件。
1. 某些编译器无法使用 {% data variables.product.prodname_codeql %} ，因此在分析代码时可能会导致问题。 例如，Lombok 项目使用非公共编译器 API 来修改编译器行为。 这些编译器修改中使用的假设不适用于 {% data variables.product.prodname_codeql %} 的 Java 提取器，因此无法分析代码。

如果 {% data variables.product.prodname_codeql %} 分析扫描的代码行数少于预期，则可以尝试使用多种方法来确保编译了所有必需的源文件。

### 替换 `autobuild` 步骤 

将 `autobuild` 步骤替换为将在生产中使用的相同生成命令。 这可以确保 {% data variables.product.prodname_codeql %} 确切地知道如何编译要扫描的所有源文件。
有关详细信息，请参阅“[为已编译语言配置 {% data variables.product.prodname_codeql %} 工作流](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。 

### 检查 {% data variables.product.prodname_codeql %} 数据库中源文件的副本
您可以通过检查 {% data variables.product.prodname_codeql %} 数据库中包含的源代码副本来了解为什么没有分析某些源文件。 要从 Actions 工作流中获取数据库，请修改 {% data variables.product.prodname_codeql %} 工作流文件的 `init` 步骤，并设置 `debug: true`。

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

这会将数据库作为操作构件上传，您可以将其下载到本地计算机。 有关详细信息，请参阅“[存储工作流工件](/actions/guides/storing-workflow-data-as-artifacts)”。

该构件将包含由名为 src.zip 的 {% data variables.product.prodname_codeql %} 扫描的源文件存档副本。 如果比较存储库中的源代码文件和 src.zip 中的文件，则可以看到缺少哪些类型的文件。 一旦您知道了哪些类型的文件没有被分析，就更容易理解了如何更改 {% data variables.product.prodname_codeql %} 分析的工作流程。

## 在生成的代码中找到的警报

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## 数据库中的提取错误

{% data variables.product.prodname_codeql %} 团队不断处理关键的提取错误，以确保可以扫描所有源文件。 但是，{% data variables.product.prodname_codeql %} 提取程序偶尔会在数据库创建过程中生成错误。 {% data variables.product.prodname_codeql %} 提供有关在日志文件中创建数据库期间生成的提取错误和警告的信息。 提取诊断信息指示数据库的整体运行状况。 大多数提取程序错误不会显著影响分析。 少量提取程序错误是正常的，通常表示分析状态良好。

但是，如果在数据库创建期间编译的绝大多数文件中看到提取程序错误，则应更详细地查看这些错误，以尝试了解为什么某些源文件未正确提取。

{% else %}
## 我的存储库中有部分内容未使用 `autobuild` 进行分析

{% data variables.product.prodname_codeql %} `autobuild` 功能使用启发式方法在存储库中构建代码，但有时这种方法会导致对存储库的分析不完整。 例如，当单个存储库中存在多个 `build.sh` 命令时，分析可能不完整，因为 `autobuild` 步骤将只执行其中一个命令。 解决方案是将 `autobuild` 步骤替换为可构建要分析的所有源代码的构建步骤。 有关详细信息，请参阅“[为已编译语言配置 {% data variables.product.prodname_codeql %} 工作流](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。
{% endif %}

## 构建耗时过长

如果使用 {% data variables.product.prodname_codeql %} 分析进行的构建花费的时间太长，则可以尝试几种方法来减少构建时间。 

### 增加内存或内核

如果使用自托管运行器运行 {% data variables.product.prodname_codeql %} 分析，您可以增加这些运行器上的内存或内核数。

### 使用矩阵构建来并行化分析

默认 {% data variables.product.prodname_codeql_workflow %} 使用语言的矩阵，这会导致每种语言的分析并行运行。 如果在“初始化 CodeQL”步骤中指定了要直接分析的语言，则将依次进行每种语言的分析。 要加快对多种语言的分析，请修改工作流程以使用矩阵。 有关详细信息，请参阅上述“[编译语言的自动生成失败](#automatic-build-for-a-compiled-language-fails)”中的工作流提取。

### 减少单个工作流程中要分析的代码量

分析时间通常与所分析的代码量成正比。 您可以通过减少一次分析的代码量来缩短分析时间，例如，排除测试代码，或将分析分解为多个工作流程，这些工作流程一次只分析一部分代码。

{% data reusables.code-scanning.alerts-found-in-generated-code %}

如果你按上文所述将分析拆分为多个工作流，我们仍然建议你至少保留一个按 `schedule` 运行的工作流分析存储库中的所有代码。 因为 {% data variables.product.prodname_codeql %} 分析组件之间的数据流量，所以某些复杂的安全行为只能在完整的构建中检测到。

### 仅在 `schedule` 事件期间运行

如果分析速度太慢，而无法在 `push` 或 `pull_request` 事件期间运行，建议仅在 `schedule` 事件上触发分析。 有关详细信息，请参阅“[事件](/actions/learn-github-actions/introduction-to-github-actions#events)”。

### 检查工作流程运行的查询套件

默认情况下，每种语言都有三个主要查询套件可用。 如果已优化 CodeQL 数据库生成，但过程仍然太长，则可以减少运行的查询数。 默认查询套件将自动运行；它包含最快的安全查询，误报结果率最低。 

除了默认查询之外，您可能还会运行额外的查询或查询套件。 检查工作流是否定义了其他查询套件或要使用 `queries` 元素运行的其他查询。 您可以尝试禁用其他一个或多个查询套件。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)”。

{% ifversion codeql-ml-queries %} {% note %}

**注意：** 如果运行 `security-extended` JavaScript 或 `security-and-quality` 查询套件，则某些查询使用实验技术。 有关详细信息，请参阅“[关于代码扫描警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)”。
{% endnote %} {% endif %}

{% ifversion fpt or ghec %}
## 分析平台之间的结果差异

如果您分析的是使用 Python 编写的代码，根据您是在 Linux、macOS 还是 Windows 上运行 {% data variables.product.prodname_codeql_workflow %}，可能会看到不同的结果。

在使用 Linux 的 GitHub 托管运行器上，{% data variables.product.prodname_codeql_workflow %} 会尝试安装和分析 Python 依赖项，这可能导致更多结果。 若要禁用自动安装，请将 `setup-python-dependencies: false` 添加到工作流的“初始化 CodeQL”步骤。 有关配置 Python 依赖项分析的详细信息，请参阅“[分析 Python 依赖项](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)”。

{% endif %}

## 错误：“服务器错误”

如果 {% data variables.product.prodname_code_scanning %} 的工作流程运行因服务器错误而失败，请尝试再次运行工作流程。 如果问题仍然存在，请联系 {% data variables.contact.contact_support %}。

## 错误：“磁盘不足”或“内存不足”

在非常大的项目中， {% data variables.product.prodname_codeql %} 运行器上的磁盘或内存可能会耗尽。
{% ifversion fpt or ghec %}如果你在托管的 {% data variables.product.prodname_actions %} 运行器上遇到此问题，请联系 {% data variables.contact.contact_support %}，以便我们对问题调查。
{% else %}如果遇到此问题，请尝试增加运行器上的内存。{% endif %}

{% ifversion fpt or ghec %}
## 使用 {% data variables.product.prodname_dependabot %} 时出现错误：403“集成无法访问资源”

{% data variables.product.prodname_dependabot %} 在触发工作流运行时被视为不信任，工作流程将以只读范围运行。 为分支上传 {% data variables.product.prodname_code_scanning %} 结果通常需要 `security_events: write` 范围。 但是，当 `pull_request` 事件触发操作运行时，{% data variables.product.prodname_code_scanning %} 始终允许上传结果。 因此，对于 {% data variables.product.prodname_dependabot %} 分支，建议使用 `pull_request` 事件，而不是 `push` 事件。

一个简单的方法是推送到默认分支和任何其他重要的长期分支，以及在此组分支上打开的拉取请求：
```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```
另一种方法是运行除 {% data variables.product.prodname_dependabot %} 分支以外的所有推送：
```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### 默认分支上的分析仍然失败

如果 {% data variables.product.prodname_codeql_workflow %} 在默认分支上的提交仍然失败，您需要检查：
- {% data variables.product.prodname_dependabot %} 是否撰写了提交
- 包含该提交的请求是否已使用 `@dependabot squash and merge` 进行合并

此类型的合并提交由 {% data variables.product.prodname_dependabot %} 编写，因此在提交上运行的任何工作流程都将具有只读权限。 如果在存储库上启用了 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_dependabot %} 安全更新或版本更新，建议避免使用 {% data variables.product.prodname_dependabot %} `@dependabot squash and merge` 命令。 不过，你可以为存储库启用自动合并。 这意味着，如果满足所有必需的评审并已通过状态检查，将自动合并拉取请求。 有关启用自动合并的详细信息，请参阅“[自动合并拉取请求](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)”。
{% endif %}

## 错误：“不是 .ql 文件、.qls 文件、目录或查询包规范”

如果 CodeQL 在工作流中请求的位置找不到命名查询、查询套件或查询包，则会看到此错误。 此错误有两个常见的原因。

- 工作流中有拼写错误。
- 工作流通过路径引用的资源被重命名、删除或移动到新位置。

验证资源的位置后，可以更新工作流以指定正确的位置。 如果在 Go 分析中运行其他查询，则可能受到源文件重定位的影响。 有关详细信息，请参阅[重定位公告：`github/codeql-go` 移动到 github/codeql-go 存储库中的 `github/codeql`](https://github.com/github/codeql-go/issues/741)。

## 警告：“不再需要 git checkout HEAD^2”

如果您使用的是旧 {% data variables.product.prodname_codeql %} 工作流程，您可能会在输出中收到来自“初始化 {% data variables.product.prodname_codeql %}”操作的以下警告：

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

通过从 {% data variables.product.prodname_codeql %} 工作流程中删除以下行来修复此问题。 这些行包含在 {% data variables.product.prodname_codeql %} 工作流初始版本中 `Analyze` 作业的 `steps` 部分。

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

修改后的工作流的 `steps` 部分将如下所示：

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

有关编辑 {% data variables.product.prodname_codeql %} 工作流文件的详细信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)”。
