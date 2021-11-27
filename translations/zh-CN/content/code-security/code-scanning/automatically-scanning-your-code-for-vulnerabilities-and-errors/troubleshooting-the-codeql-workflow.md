---
title: CodeQL 工作流程疑难解答
shortTitle: CodeQL 工作流程疑难解答
intro: '如果您在 {% data variables.product.prodname_code_scanning %} 方面遇到问题，可使用这些提示来解决问题。'
product: '{% data reusables.gated-features.code-scanning %}'
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
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

## 生成详细的调试日志

要生成更详细的日志输出，您可以启用步骤调试日志记录。 更多信息请参阅“[启用调试日志记录](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)”。

## 编译语言的自动构建失败

如果项目中编译语言的代码自动构建失败，请尝试以下疑难解答步骤。

- 从 {% data variables.product.prodname_code_scanning %} 工作流程中删除 `autobuild` 步骤，并添加特定构建步骤。 有关编辑工作流程的信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)”。 有关替换 `autobuild` 步骤的更多信息，请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。

- 如果您的工作流程未明确指定要分析的语言，则 {% data variables.product.prodname_codeql %} 会隐式检测代码库中支持的语言。 在此配置中，对于编译语言 C/C++、C# 和 Java，{% data variables.product.prodname_codeql %} 只分析涵盖最多源文件的语言。 编辑工作流程并添加一个构建矩阵，以指定要分析的语言。 默认的 CodeQL 分析工作流程使用这种矩阵。

  以下工作流程摘录显示了如何在作业策略中使用矩阵来指定语言，然后在“初始化 {% data variables.product.prodname_codeql %}”步骤中引用每种语言：

  ```yaml
  jobs:
    analyze:{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
      permissions:
        security-events: write
        actions: read{% endif %}
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: github/codeql-action/init@v1
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  有关编辑工作流程的更多信息，请参阅“[配置代码扫描](/code-security/secure-coding/configuring-code-scanning)”。

## 构建过程中找不到代码

如果工作流程失败，出现错误 `No source code was seen during the build` 或 `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`，则表明 {% data variables.product.prodname_codeql %} 无法监控您的代码。 有几个原因可以解释这种失败：

1. 自动语言检测发现了受支持的语言，但仓库中没有该语言的可分析代码。 一个典型的例子是，我们的语言检测服务发现了一个与特定的编程语言相关的文件，例如 `.h` 或 `.gyp` 文件，但仓库中没有相应的可执行代码。 要解决此问题，您可以通过更新 `language` 矩阵中的语言列表来手动定义要分析的语言。 例如，以下配置将仅分析 Go 和 JavaScript。

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   更多信息请参阅上面“[编译语言的自动构建失败](#automatic-build-for-a-compiled-language-fails)”中的工作流程摘要。
1. {% data variables.product.prodname_code_scanning %} 工作流程在分析一种已编译的语言（C、C++、C# 或 Java），但代码尚未编译。 默认情况下，{% data variables.product.prodname_codeql %} 分析工作流程包含 `autobuild` 步骤，但是，此步骤是一个尽力而为的过程，可能无法成功构建您的代码，具体取决于您的特定构建环境。 如果您删除了 `autobuild` 步骤但没有手动添加构建步骤，编译也可能会失败。  有关指定构建步骤的更多信息，请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。
1. 工作流程在分析一种编译语言（C、C++、C# 或 Java），但构建的一部分被缓存以提高性能（最有可能发生在 Gradle 或 Bazel 等构建系统中）。 因为 {% data variables.product.prodname_codeql %} 观察编译器的活动以了解仓库中的数据流，因此 {% data variables.product.prodname_codeql %} 需要进行完整的构建才能执行分析。
1. 工作流程在分析编译语言（C、C++、C# 或 Java），但工作流程中的 `init` 与 `analyze` 步骤之间不发生编译。 {% data variables.product.prodname_codeql %} 需要这两个步骤之间发生构建以观察编译器的活动并执行分析。
1. 您的编译代码（使用 C、C ++、C＃ 或 Java）已成功编译，但 {% data variables.product.prodname_codeql %} 无法检测到编译器调用。 最常见的原因是：

   * 在独立于 {% data variables.product.prodname_codeql %} 的容器中运行构建过程。 更多信息请参阅“[在容器中运行 CodeQL 代码扫描](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)”。
   * 使用 GitHub Actions 外部的分布式构建系统，使用守护进程构建。
   * {% data variables.product.prodname_codeql %} 不知道您使用的特定编译器。

  对于 .NET Framework 项目以及使用 `dotnet build` 或 `msbuild`（目标 .NET Core 2）的 C# 项目，在构建代码时，您应该在工作流程的 `run` 步骤中指定 `/p:UseSharedCompilation=false`。 .NET Core 3.0 及更高版本不需要 `UseSharedCompilation` 标志。

  例如，以下 C# 的配置将在第一个构建步骤中传递标志。

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false 
   ```

  如果您在特定编译器或配置方面遇到其他问题，请联系 {% data variables.contact.contact_support %}。

有关指定构建步骤的更多信息，请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。

{% ifversion fpt or ghes > 3.1  or ghae-next or ghec %}
## Lines of code scanned are lower than expected

For compiled languages like C/C++, C#, Go, and Java, {% data variables.product.prodname_codeql %} only scans files that are built during the analysis. Therefore the number of lines of code scanned will be lower than expected if some of the source code isn't compiled correctly. This can happen for several reasons:

1. The {% data variables.product.prodname_codeql %} `autobuild` feature uses heuristics to build the code in a repository. However, sometimes this approach results in an incomplete analysis of a repository. For example, when multiple `build.sh` commands exist in a single repository, the analysis may not be complete since the `autobuild` step will only execute one of the commands, and therefore some source files may not be compiled.
1. Some compilers do not work with {% data variables.product.prodname_codeql %} and can cause issues while analyzing the code. For example, Project Lombok uses non-public compiler APIs to modify compiler behavior. The assumptions used in these compiler modifications are not valid for {% data variables.product.prodname_codeql %}'s Java extractor, so the code cannot be analyzed.

If your {% data variables.product.prodname_codeql %} analysis scans fewer lines of code than expected, there are several approaches you can try to make sure all the necessary source files are compiled.

### Replace the `autobuild` step

Replace the `autobuild` step with the same build commands you would use in production. This makes sure that {% data variables.product.prodname_codeql %} knows exactly how to compile all of the source files you want to scan. 更多信息请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。

### Inspect the copy of the source files in the {% data variables.product.prodname_codeql %} database
You may be able to understand why some source files haven't been analyzed by inspecting the copy of the source code included with the {% data variables.product.prodname_codeql %} database. To obtain the database from your Actions workflow, add an `upload-artifact` action after the analysis step in your code scanning workflow:
```
- uses: actions/upload-artifact@v2
  with:
    name: codeql-database
    path: ../codeql-database
```
This uploads the database as an actions artifact that you can download to your local machine. For more information, see "[Storing workflow artifacts](/actions/guides/storing-workflow-data-as-artifacts)."

The artifact will contain an archived copy of the source files scanned by {% data variables.product.prodname_codeql %} called _src.zip_. If you compare the source code files in the repository and the files in _src.zip_, you can see which types of file are missing. Once you know what types of file are not being analyzed, it is easier to understand how you may need to change the workflow for {% data variables.product.prodname_codeql %} analysis.

## Extraction errors in the database

The {% data variables.product.prodname_codeql %} team constantly works on critical extraction errors to make sure that all source files can be scanned. However, the {% data variables.product.prodname_codeql %} extractors do occasionally generate errors during database creation. {% data variables.product.prodname_codeql %} provides information about extraction errors and warnings generated during database creation in a log file. The extraction diagnostics information gives an indication of overall database health. Most extractor errors do not significantly impact the analysis. A small number of extractor errors is healthy and typically indicates a good state of analysis.

However, if you see extractor errors in the overwhelming majority of files that were compiled during database creation, you should look into the errors in more detail to try to understand why some source files weren't extracted properly.

{% else %}
## 我的仓库中有部分内容未使用 `autobuild` 进行分析

{% data variables.product.prodname_codeql %} `autobuild` 功能使用启发式方法在仓库中构建代码，但有时这种方法会导致对仓库的分析不完整。 例如，当单个仓库中存在多个 `build.sh` 命令时，分析可能不完整，因为 `autobuild` 步骤将只执行其中一个命令。 解决方案是将 `autobuild` 步骤替换为可构建要分析的所有源代码的构建步骤。 更多信息请参阅“[为编译语言配置 {% data variables.product.prodname_codeql %} 工作流程](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)”。
{% endif %}


## 构建耗时过长

如果使用 {% data variables.product.prodname_codeql %} 分析进行的构建花费的时间太长，则可以尝试几种方法来减少构建时间。

### 增加内存或内核

If you use self-hosted runners to run {% data variables.product.prodname_codeql %} analysis, you can increase the memory or the number of cores on those runners.

### 使用矩阵构建来并行化分析

默认 {% data variables.product.prodname_codeql_workflow %} 使用语言的构建矩阵，这会导致每种语言的分析并行运行。 如果在“初始化 CodeQL”步骤中指定了要直接分析的语言，则将依次进行每种语言的分析。 要加快对多种语言的分析，请修改工作流程以使用矩阵。 更多信息请参阅上面“[编译语言的自动构建失败](#automatic-build-for-a-compiled-language-fails)”中的工作流程摘要。

### 减少单个工作流程中要分析的代码量

分析时间通常与要分析的代码量成正比。 您可以通过减少一次分析的代码量来缩短分析时间，例如，排除测试代码，或将分析分解为多个工作流程，这些工作流程一次只分析一部分代码。

对于 Java、C、C++ 和 C# 等编译语言，{% data variables.product.prodname_codeql %} 分析在工作流程运行过程中构建的所有代码。 要限制要分析的代码量，请通过在 `run` 块中指定自己的构建步骤，仅构建您要分析的代码。 您可以通过对 `pull_request` 和 `push` 事件使用 `paths` 或 `paths-ignore` 过滤器来组合指定自己的构建步骤，以确保工作流程仅在特定代码发生更改时运行。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)”。

对于 Go、JavaScript、Python 和 TypeScript 等解释性语言，{% data variables.product.prodname_codeql %} 无需特定构建即可进行分析，您可以指定额外配置选项以限制要分析的代码量。 更多信息请参阅“[指定要扫描的目录](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)”。

如果您按上文所述将分析拆分为多个工作流程，我们仍然建议您至少保留一个按 `schedule` 运行的工作流程分析仓库中的所有代码。 因为 {% data variables.product.prodname_codeql %} 分析组件之间的数据流量，所以某些复杂的安全行为只能在完整的构建中检测到。

### 仅在 `schedule` 事件期间运行

如果分析速度仍然太慢，无法在 `push` 或 `pull_request` 事件期间运行，则您可能需要设置仅在 `schedule` 事件期间运行。 更多信息请参阅“[事件](/actions/learn-github-actions/introduction-to-github-actions#events)”。

{% ifversion fpt or ghec %}
## 分析平台之间的结果差异

如果您分析的是使用 Python 编写的代码，根据您是在 Linux、macOS 还是 Windows 上运行 {% data variables.product.prodname_codeql_workflow %}，可能会看到不同的结果。

在使用 Linux 的 GitHub 托管运行器上，{% data variables.product.prodname_codeql_workflow %} 会尝试安装和分析 Python 依赖项，这可能导致更多结果。 要禁用自动安装，请将 `setup-python-dependencies: false` 添加到工作流程的“初始化 CodeQL”步骤。 有关配置 Python 依赖项分析的更多信息，请参阅“[分析 Python 依赖项](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)”。

{% endif %}

## 错误：“Server error（服务器错误）”

如果 {% data variables.product.prodname_code_scanning %} 的工作流程运行因服务器错误而失败，请尝试再次运行工作流程。 如果问题仍然存在，请联系 {% data variables.contact.contact_support %}。

## 错误：“Out of disk（磁盘空间不足）”或“Out of memory（内存不足）”

On very large projects, {% data variables.product.prodname_codeql %} may run out of disk or memory on the runner.
{% ifversion fpt or ghec %}如果您在托管的 {% data variables.product.prodname_actions %} 运行器上遇到此问题，请联系 {% data variables.contact.contact_support %}，以便我们调查。
{% else %}If you encounter this issue, try increasing the memory on the runner.{% endif %}

{% ifversion fpt or ghec %}
## 使用 {% data variables.product.prodname_dependabot %} 时出现错误：403“集成无法访问资源”

{% data variables.product.prodname_dependabot %} 在触发工作流运行时被视为不信任，工作流程将以只读范围运行。 为分支上传 {% data variables.product.prodname_code_scanning %} 结果通常需要 `security_events: write` 范围。 但是，当 `pull_request` 事件触发操作运行时，{% data variables.product.prodname_code_scanning %} 始终允许上传结果。 因此，对于 {% data variables.product.prodname_dependabot %} 分支，我们建议您使用 `pull_request` 事件，而不是 `push` 事件。

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

### 默认分支的分析仍然失败

如果 {% data variables.product.prodname_codeql_workflow %} 在默认分支上的提交仍然失败，您需要检查：
- {% data variables.product.prodname_dependabot %} 是否撰写了提交
- 包含提交的拉取请求是否已使用 `@dependabot squash and merge` 合并

此类型的合并提交由 {% data variables.product.prodname_dependabot %} 编写，因此在提交上运行的任何工作流程都将具有只读权限。 如果您在仓库上启用了 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_dependabot %} 安全更新或版本更新，我们建议您避免使用 {% data variables.product.prodname_dependabot %} `@dependabot squash and merge` 命令。 相反，您可以为您的仓库启用自动合并。 这意味着，当满足所有必需审查并通过状态检查时，拉取请求将自动合并。 有关启用自动合并的更多信息，请参阅“[自动合并拉取请求](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)”。
{% endif %}

## 警告：“git checkout HEAD^2 is no longer necessary（不再需要 Git 检出头^2）”

如果您使用的是旧 {% data variables.product.prodname_codeql %} 工作流程，您可能会在输出中收到来自“初始化 {% data variables.product.prodname_codeql %}”操作的以下警告：

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

通过从 {% data variables.product.prodname_codeql %} 工作流程中删除以下行来修复此问题。 这些行包含在 {% data variables.product.prodname_codeql %} 工作流程初始版本中 `Analyze` 作业的 `steps` 部分。

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

修订后的工作流程 `steps` 部分将如下所示：

```yaml
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1

      ...
```

有关编辑 {% data variables.product.prodname_codeql %} 工作流程文件的更多信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)”。
