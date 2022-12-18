---
title: 在 CI 系统中配置 CodeQL CLI
shortTitle: Configure CodeQL CLI
intro: '您可以配置持续集成 系统以运行{% data variables.product.prodname_codeql_cli %}，执行 {% data variables.product.prodname_codeql %} 分析，并将结果上传到 {% data variables.product.product_name %} 以显示为 {% data variables.product.prodname_code_scanning %} 警报。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
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
ms.openlocfilehash: 165aee9852cb6863dceddb41daf6d05176191f7a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182296'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %} {% note %}

注意：本文介绍了在发布 {% data variables.product.product_name %} 时可用的 {% data variables.product.prodname_codeql_cli %} 版本中提供的功能。 如果你的企业使用较新版本的 {% data variables.product.prodname_codeql_cli %}，请改为参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)。

{% endnote %} {% endif %}

## 关于使用 {% data variables.product.prodname_codeql_cli %} 生成代码扫描结果

一旦您在 CI 系统中提供了 {% data variables.product.prodname_codeql_cli %} 服务器， 并确保他们可以通过 {% data variables.product.product_name %} 进行身份验证，便可生成数据。

您使用三个不同的命令生成结果并将它们上传到 {% data variables.product.product_name %}：

<!--Option to analyze multiple languages with one call-->
1. `database create` 以创建 {% data variables.product.prodname_codeql %} 数据库，用于表示存储库中每种支持的编程语言的层次结构。
2. 使用 ` database analyze` 运行查询以分析每个 {% data variables.product.prodname_codeql %} 数据库，并将结果汇总到 SARIF 文件中。
3. `github upload-results` 将得到的 SARIF 文件上传到结果与分支或拉取请求匹配并显示为 {% data variables.product.prodname_code_scanning %} 警报的 {% data variables.product.product_name %}。

可以使用 <nobr>`--help`</nobr> 选项显示任何命令的命令行帮助。

{% data reusables.code-scanning.upload-sarif-ghas %}

## 创建 {% data variables.product.prodname_codeql %} 数据库进行分析

1. 查看要分析的代码：
    - 对于分支，请查看要分析的分支的头。
    - 对于拉取请求，请签出拉取请求的头部提交，或签出 {% data variables.product.prodname_dotcom %} 生成的拉取请求的合并提交。
2. 设置代码库的环境，确保所有依赖项都可用。 有关详细信息，请参阅 {% data variables.product.prodname_codeql_cli %} 的文档中的[为未编译的语言创建数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages)和[为已编译的语言创建数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages)。
3. 查找代码库的生成命令（如果有）。 通常可在 CI 系统的配置文件中找到。
4. 从存储库的签出根目录运行 `codeql database create`，并生成代码库。

  ```shell
  # Single supported language - create one CodeQL database
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  注意：如果使用容器化构建，需要在执行构建任务的容器内运行 {% data variables.product.prodname_codeql_cli %}。

  {% endnote %}

| 选项 | 必选 | 使用情况 |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | 指定要为 {% data variables.product.prodname_codeql %} 数据库创建的目录的名称和位置。 如果尝试覆盖现有目录，则该命令将失败。 如果还指定 `--db-cluster`，则这是父目录，并且会为分析的每种语言创建一个子目录。|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 指定要为其创建数据库的语言的标识符，请指定以下值之一：`{% data reusables.code-scanning.codeql-languages-keywords %}`（使用 `javascript` 分析 TypeScript 代码{% ifversion codeql-kotlin-beta %}并使用 `java` 分析 Kotlin 代码{% endif %}）。 与 <nobr>`--db-cluster`</nobr> 一起使用时，该选项接受逗号分隔的列表，也可以多次指定。
| <nobr>`--command`</nobr> | | 推荐。 用于指定为代码库调用生成过程的生成命令或脚本。 命令从当前文件夹运行，或者从定义的位置 <nobr>`--source-root`</nobr> 运行。 Python 和 JavaScript/TypeScript 分析不需要。 |
| <nobr>`--db-cluster`</nobr> | | 可选。 在多语言代码库中使用，为 <nobr>`--language`</nobr> 指定的每种语言生成一个数据库。
| <nobr>`--no-run-unnecessary-builds`</nobr> | | 推荐。 用于抑制 {% data variables.product.prodname_codeql_cli %} 不需要监视生成的语言的生成命令（例如，Python 和 JavaScript/TypeScript）。
| <nobr>`--source-root`</nobr> | | 可选。 如果在存储库的检出根目录之外运行 CLI，请使用此选项。 默认情况下，`database create` 命令假定当前目录是源文件的根目录，使用此选项可指定其他位置。 |
| <nobr>`--codescanning-config`</nobr> | | 可选（高级）。 如果具有指定如何创建 {% data variables.product.prodname_codeql %} 数据库以及后续步骤中要运行的查询的配置文件，请进行使用。 有关详细信息，请参阅“[使用自定义配置文件](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file)”和“[数据库创建](https://codeql.github.com/docs/codeql-cli/manual/database-create/#cmdoption-codeql-database-create-codescanning-config)”。 |

有关详细信息，请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[创建 {% data variables.product.prodname_codeql %} 数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)。

### 单语言示例

此示例在 `/checkouts/example-repo` 为签出的存储库创建 {% data variables.product.prodname_codeql %} 数据库。 它使用 JavaScript 提取器在存储库中创建 JavaScript 和 TypeScript 代码的分层表示形式。 生成的数据库存储在 `/codeql-dbs/example-repo` 中。

```
$ codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root /checkouts/example-repo

> Initializing database at /codeql-dbs/example-repo.
> Running command [/codeql-home/codeql/javascript/tools/autobuild.cmd]
    in /checkouts/example-repo.
> [build-stdout] Single-threaded extraction.
> [build-stdout] Extracting
...
> Finalizing database at /codeql-dbs/example-repo.
> Successfully created database at /codeql-dbs/example-repo.
```

### 多语言示例

此示例在 `/checkouts/example-repo-multi` 为签出的存储库创建两个 {% data variables.product.prodname_codeql %} 数据库。 它使用：

- `--db-cluster` 用于请求分析多种语言。
- `--language` 用于指定要为其创建数据库的语言。
- `--command` 用于告知工具代码库的生成命令，此处为 `make`。
- `--no-run-unnecessary-builds` 用于告知工具跳过不需要的语言（如 Python）的生成命令。

生成的数据库存储在 `/codeql-dbs/example-repo-multi` 的 `python` 和 `cpp` 子目录中。

```
$ codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language python,cpp \
    --command make --no-run-unnecessary-builds \
    --source-root /checkouts/example-repo-multi
Initializing databases at /codeql-dbs/example-repo-multi.
Running build command: [make]
[build-stdout] Calling python3 /codeql-bundle/codeql/python/tools/get_venv_lib.py
[build-stdout] Calling python3 -S /codeql-bundle/codeql/python/tools/python_tracer.py -v -z all -c /codeql-dbs/example-repo-multi/python/working/trap_cache -p ERROR: 'pip' not installed.
[build-stdout] /usr/local/lib/python3.6/dist-packages -R /checkouts/example-repo-multi
[build-stdout] [INFO] Python version 3.6.9
[build-stdout] [INFO] Python extractor version 5.16
[build-stdout] [INFO] [2] Extracted file /checkouts/example-repo-multi/hello.py in 5ms
[build-stdout] [INFO] Processed 1 modules in 0.15s
[build-stdout] <output from calling 'make' to build the C/C++ code>
Finalizing databases at /codeql-dbs/example-repo-multi.
Successfully created databases at /codeql-dbs/example-repo-multi.
$
```

## 分析 {% data variables.product.prodname_codeql %} 数据库

1. 创建 {% data variables.product.prodname_codeql %} 数据库（见上文）。
2. 对数据库运行 `codeql database analyze`，并指定要使用的{% ifversion codeql-packs %}包和/或{% endif %}查询。
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

注意：如果你针对某个提交分析了一个以上的 {% data variables.product.prodname_codeql %} 数据库，需要为此命令生成的每组结果指定 SARIF 类别。 当您上传结果到 {% data variables.product.product_name %} 时，{% data variables.product.prodname_code_scanning %} 使用此类别来分别存储每种语言的结果。 如果忘记执行此操作，则每次上传都会覆盖之前的结果。

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| 选项 | 必选 | 使用情况 |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | 指定包含要分析的 {% data variables.product.prodname_codeql %} 数据库的目录路径。 |
| `<packs,queries>` | | 指定要运行 {% data variables.product.prodname_codeql %} 包或查询。 要运行用于 {% data variables.product.prodname_code_scanning %} 的标准查询，请省略此参数。 要查看 {% data variables.product.prodname_codeql_cli %} 捆绑包中包含的其他查询套件，请查看 `/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites`。 有关创建你自己的查询套件的信息，请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[创建 CodeQL 查询套件](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)。
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 指定命令生成的结果文件的格式。 要上传到 {% data variables.product.company_short %}，这应该是：{% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}。 有关详细信息，请参阅“[{% data variables.product.prodname_code_scanning %} 的 SARIF 支持](/code-security/secure-coding/sarif-support-for-code-scanning)”。
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 指定保存 SARIF 结果文件的位置。
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | 对于单一数据库分析是可选的。 对于在为存储库中的单个提交分析多个数据库时定义语言是必需的。 为此分析指定要包含在 SARIF 结果文件中的类别。 类别用于区分针对同一工具和提交的多个分析，但在不同的语言或代码的不同部分执行。|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | 可选。 如果想为分析中使用的自定义查询包含任何可用的 Markdown 呈现查询帮助，请使用此选项。 如果相关查询生成警报，则包含在 SARIF 输出中的自定义查询的任何查询帮助都将显示在代码扫描 UI 中。 有关详细信息，请参阅 {% data variables.product.prodname_codeql_cli %} 对应文档中的[使用 {% data variables.product.prodname_codeql_cli %} 分析数据库](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files)。{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | 可选。 如果想在分析中包含 CodeQL 查询包，请使用此选项。 有关详细信息，请参阅“[下载和使用 {% data variables.product.prodname_codeql %} 包](#downloading-and-using-codeql-query-packs)”。
| <nobr>`--download`</nobr> | | 可选。 如果某些 CodeQL 查询包尚未在磁盘上，并且需要在运行查询之前下载，请使用此选项。{% endif %}
| <nobr>`--threads`</nobr> | | 可选。 如果想使用多个线程来运行查询，请使用此选项。 默认值是 `1`。 可以指定更多线程来加快查询执行速度。 要将线程数设置为逻辑处理器数，请指定 `0`。
| <nobr>`--verbose`</nobr> | | 可选。 用于从数据库创建过程中获取有关分析过程和诊断数据的更多详细信息。

有关详细信息，请参阅 {% data variables.product.prodname_codeql_cli %} 的文档中的[使用 {% data variables.product.prodname_codeql_cli %} 分析数据库](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)。

### 基本示例

此示例分析存储在 `/codeql-dbs/example-repo` 的 {% data variables.product.prodname_codeql %} 数据库并将结果保存为 SARIF 文件：`/temp/example-repo-js.sarif`。 它使用 `--sarif-category` 在 SARIF 文件中包含将结果标识为 JavaScript 的额外信息。 当你有多个 {% data variables.product.prodname_codeql %} 数据库来分析存储库中的单个提交时，这一点至关重要。

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/codeql-javascript/AngularJS/DisablingSce.ql.
...
> Shutting down query evaluator.
> Interpreting results.
```

## 上传结果到 {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

在将结果上传到 {% data variables.product.product_name %} 之前，必须确定将 {% data variables.product.prodname_github_app %} 或之前创建的 {% data variables.product.pat_generic %} 传递给 {% data variables.product.prodname_codeql_cli %} 的最佳方式（请参阅[在 CI 系统中安装 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)）。 建议查看 CI 系统有关安全使用机密存储的指南。 {% data variables.product.prodname_codeql_cli %} 支持：

- 使用 `--github-auth-stdin` 选项（建议）通过标准输入将令牌传递给 CLI。
- 将机密保存在环境变量 `GITHUB_TOKEN` 中，并在不包含 `--github-auth-stdin` 选项的情况下运行 CLI。

为 CI 服务器确定最安全可靠的方法后，请在每个 SARIF 结果文件上运行 `codeql github upload-results` 并包含 `--github-auth-stdin`，除非该令牌在环境变量 `GITHUB_TOKEN` 中可用。

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| 选项 | 必选 | 使用情况 |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 指定要将数据上传到的存储库的所有者/名称。 所有者必须是拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的企业内的组织，而必须为存储库启用 {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %}，除非存储库是公共的{% endif %}。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 指定你签出和分析的 `ref` 的名称，以便使结果与正确的代码匹配。 用于分支：`refs/heads/BRANCH-NAME`，用于拉取请求的头提交：`refs/pull/NUMBER/head`，或者用于拉取请求的 {% data variables.product.prodname_dotcom %} 生成的合并提交：`refs/pull/NUMBER/merge`。
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 指定分析的提交的完整 SHA。
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 指定要加载的 SARIF 文件。{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 指定 {% data variables.product.product_name %} 的 URL。{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | 可选。 用于通过标准输入，借助 {% data variables.product.company_short %} 的 REST API，传递为 {% data variables.product.prodname_github_app %} 或进行身份验证而创建的 {% data variables.product.pat_generic %} 的CLI。 如果命令有权访问使用此令牌设置的 `GITHUB_TOKEN` 环境变量，则不需要执行此操作。

有关详细信息，请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的 [github 上传结果](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/)。

### 基本示例

此示例将结果从 SARIF 文件 `temp/example-repo-js.sarif` 上传到存储库 `my-org/example-repo`。 它告诉 {% data variables.product.prodname_code_scanning %} API，结果用于 `main` 分支上的提交 `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718`。

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

除非上传未成功，否则此命令不会输出。 上传完成并开始数据处理时，命令提示返回。 在较小的代码库中，您应该能够在稍后的 {% data variables.product.product_name %} 中探索 {% data variables.product.prodname_code_scanning %} 警告。 可以直接在拉取请求或分支的“安全性”选项卡上看到警报，具体取决于签出的代码。有关详细信息，请参阅“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”和“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

{% ifversion codeql-packs %}
## 下载和使用 {% data variables.product.prodname_codeql %} 查询包

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{% data variables.product.prodname_codeql_cli %} 捆绑包中包括由 {% data variables.product.company_short %} 专家、安全研究人员和社区贡献者维护的查询。 如果要运行其他组织开发的查询，{% data variables.product.prodname_codeql %} 查询包提供了一种高效可靠的下载和运行查询的方法。 有关详细信息，请参阅“[关于使用 CodeQL 进行代码扫描](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)”。

在使用 {% data variables.product.prodname_codeql %} 包分析数据库之前，必须从 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} 下载所需的任何包。 这可以通过使用 `--download` 标志作为 `codeql database analyze` 命令的一部分来完成。 如果包不是公开可用，需要使用 {% data variables.product.prodname_github_app %} 或 {% data variables.product.pat_generic %} 进行身份验证。 有关详细信息和示例，请参阅上面的[将结果上传到 {% data variables.product.product_name %}](#uploading-results-to-github)。

| 选项 | 必选 | 使用情况 |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | 使用逗号分隔列表指定要下载的一个或多个 CodeQL 查询包的作用域和名称。 （可选）包括要下载和解压缩的版本。 默认情况下，将下载此包的最新版本。 （可选）包括要运行的查询、目录或查询套件的路径。 如果未包括路径，则运行此包的默认查询。 |
| <nobr>`--github-auth-stdin`</nobr> | | 可选。 通过标准输入借助 {% data variables.product.company_short %} 的 REST API，将 {% data variables.product.prodname_github_app %} 或为进行身份验证而创建的 {% data variables.product.pat_generic %} 传递给 CLI。 如果命令有权访问使用此令牌设置的 `GITHUB_TOKEN` 环境变量，则不需要执行此操作。

### 基本示例

此示例运行包含 `--download` 选项的 `codeql database analyze` 命令来执行以下操作：

1. 下载最新版本的 `octo-org/security-queries` 包。
2. 下载与版本 1.0.1 兼容的 `octo-org/optional-security-queries` 包版本（在本例中为版本 1.0.2）。 有关 SemVer 兼容性的详细信息，请参阅 [npm 的语义化版本范围文档](https://github.com/npm/node-semver#ranges)。
3. 在 `octo-org/security-queries` 中运行所有默认查询。
4. 在 `octo-org/optional-security-queries` 中仅运行查询 `queries/csrf.ql`

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### 直接下载 {% data variables.product.prodname_codeql %} 包

如果要在不立即运行 {% data variables.product.prodname_codeql %} 包的情况下进行下载，则可以使用 `codeql pack download` 命令。 如果要避免在运行 {% data variables.product.prodname_codeql %} 查询时访问 Internet，此选项非常有用。 运行 {% data variables.product.prodname_codeql %} 分析时，可以采用与上一示例相同的方式指定包、版本和路径：

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```

### 从多 {% data variables.product.company_short %} 容器注册表下载 {% data variables.product.prodname_codeql %} 包

如果 {% data variables.product.prodname_codeql %} 包存在于多个容器注册表上，就必须指示 {% data variables.product.prodname_codeql_cli %} 在何处查找每个包。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors#downloading-codeql-packs-from-github-enterprise-server)”。
{% endif %}

## 用于 {% data variables.product.prodname_codeql %} 分析的示例 CI 配置

这是一系列命令的示例，您可以使用两种支持的语言分析代码库，然后上传结果到 {% data variables.product.product_name %}。

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Upload the SARIF file with the Python results: 'python-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## CI 系统中的 {% data variables.product.prodname_codeql_cli %} 疑难解答

### 查看日志和诊断信息

当您使用 {% data variables.product.prodname_code_scanning %} 查询套件分析 {% data variables.product.prodname_codeql %} 数据库时，除了生成有关警报的详细信息外，CLI 还报告数据库生成步骤和汇总指标的诊断数据。 对于警报很少的存储库，您可能会发现此信息可用于确定代码中是否真的存在很少的问题，或者生成 {% data variables.product.prodname_codeql %} 数据库时是否出错。 要获取 `codeql database analyze` 更详细的输出，请使用 `--verbose` 选项。

有关可用的诊断信息类型的更多信息，请参阅[查看 {% data variables.product.prodname_code_scanning %} 日志](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)。

### {% data variables.product.prodname_code_scanning_capc %} 只显示被分析语言之一的分析结果

默认情况下， {% data variables.product.prodname_code_scanning %} 预计每个仓库需要一个SARIF 结果文件。 因此，当您上传第二个 SARIF 结果文件进行提交时，将被视为原始数据集的替换。

如果您想将多组结果上传到 {% data variables.product.prodname_code_scanning %} API 以在存储库中提交，则必须将每组结果识别为唯一的一组结果。 对于需要创建多个 {% data variables.product.prodname_codeql %} 数据库来分析每个提交的存储库，使用 `--sarif-category` 为每个为该存储库生成的 SARIF 文件指定一个语言或其他独特的类别。

{% ifversion fpt or ghec or ghes > 3.7 or ghae > 3.7 %}
### Python 提取的问题

我们将弃用对 {% data variables.product.prodname_codeql_cli %} 的 Python 2 支持，更具体地说，是对 CodeQL 数据库生成阶段（代码提取）的支持。

如果使用 {% data variables.product.prodname_codeql_cli %} 在用 Python 编写的代码上运行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，请必须确保 CI 系统已安装 Python 3。

{% endif %}

## 延伸阅读

- [创建 CodeQL 数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [使用 CodeQL CLI 分析数据库](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
- [发布及使用 CodeQL 包](https://codeql.github.com/docs/codeql-cli/publishing-and-using-codeql-packs/)
