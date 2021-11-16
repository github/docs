---
title: 在 CI 系统中配置 CodeQL CLI
shortTitle: 配置 CodeQL CLI
intro: '您可以配置持续集成 系统以运行{% data variables.product.prodname_codeql_cli %}，执行 {% data variables.product.prodname_codeql %} 分析，并将结果上传到 {% data variables.product.product_name %} 以显示为 {% data variables.product.prodname_code_scanning %} 警报。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: next
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
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## 关于使用 {% data variables.product.prodname_codeql_cli %} 生成代码扫描结果

一旦您在 CI 系统中提供了 {% data variables.product.prodname_codeql_cli %} 服务器， 并确保他们可以通过 {% data variables.product.product_name %} 进行身份验证，便可生成数据。

您使用三个不同的命令生成结果并将它们上传到 {% data variables.product.product_name %}：

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
<!--Option to analyze multiple languages with one call-->
1. `database create` 以创建 {% data variables.product.prodname_codeql %} 数据库，以代表仓库中每种支持的编程语言的层次结构。
2. `database analyze` 以运行查询，以分析每个 {% data variables.product.prodname_codeql %} 数据库，并在 SARIF 文件中概括结果。
3. `github upload-results` 将结果的 SARIF 文件上传到结果匹配分支或拉请求的 {% data variables.product.product_name %}，并显示为 {% data variables.product.prodname_code_scanning %} 警报。
{% else %}
<!--Only one language can be analyzed-->
1. `database create` 以创建 {% data variables.product.prodname_codeql %} 数据库，以代表仓库中支持的编程语言的层次结构。
2. `database analyze` 以运行查询，以分析 {% data variables.product.prodname_codeql %} 数据库，并在 SARIF 文件中概括结果。
3. `github upload-results` 将结果的 SARIF 文件上传到结果匹配分支或拉请求的 {% data variables.product.product_name %}，并显示为 {% data variables.product.prodname_code_scanning %} 警报。
{% endif %}

您可以显示任何命令的命令行帮助：使用 <nobr>`--help`</nobr> 选项.

{% data reusables.code-scanning.upload-sarif-ghas %}

## 创建 {% data variables.product.prodname_codeql %} 数据库进行分析

1. 检出要分析的代码：
    - 对于分支，请检出要分析的分支的头部。
    - 对于拉取请求，请检出拉取请求的头部提交，或检出 {% data variables.product.prodname_dotcom %} 生成的拉取请求的合并提交。
2. 设置代码库的环境，确保任何依赖项都可用。 更多信息请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[为非编译语言创建数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages)和[为编译语言创建数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages)。
3. 查找代码库的生成命令（如果有）。 这通常在 CI 系统的配置文件中可用。
4. 从仓库的检出根目录运行 `codeql database create` 并构建代码库。
  {% ifversion fpt or ghes > 3.1 or ghae or ghec %}
  ```shell
  # Single supported language - create one CodeQL databsae
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt; 

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt; 
  ```
  {% else %}
    ```shell
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;
  ```
  {% endif %}
  {% note %}

  **注：**如果使用容器化构建，您需要在进行构建任务的容器内运行 {% data variables.product.prodname_codeql_cli %}。

  {% endnote %}

<table spaces-before="0">
  <tr>
    <th>
      选项
    </th>
    
    <th align="center">
      必选
    </th>
    
    <th>
      用法
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;database&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定要为 {% data variables.product.prodname_codeql %} 数据库创建的目录的名称和位置。 如果您试图覆盖现有目录，命令将失败。 如果您也指定 <code>--db-cluster</code>, 这是上级目录，并为分析的每种语言创建一个子目录。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--language`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定用于创建数据库的语言标识符：<code>{% data reusables.code-scanning.codeql-languages-keywords %}</code> (使用 <code>javascript</code> 分析TypeScript 代码)。
    </td>
  </tr>
  
  <tr>
    <td>
      {% ifversion fpt or ghes > 3.1 or ghae or ghec %}当使用 <nobr>`--db-cluster`</nobr>时，该选项接受逗号分隔的列表，或者可以指定多次。{% endif %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--command`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      推荐。 用于指定调用代码库生成过程的生成命令或脚本。 命令从当前文件夹或指定的位置运行 <nobr>`--source-root`</nobr>. 不需要用于 Python 和 JavaScript/TypeScript 分析。
    </td>
  </tr>
  
  <tr>
    <td>
      {% ifversion fpt or ghes > 3.1 or ghae or ghec %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--db-cluster`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. 在多语言代码库中为指定的每种语言生成一个数据库 <nobr>`--language`</nobr>.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--no-run-unnecessary-builds`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      推荐。 用于抑制 {% data variables.product.prodname_codeql_cli %} 不需要监视生成的语言的生成命令（例如，Python 和 JavaScript/TypeScript）。
    </td>
  </tr>
  
  <tr>
    <td>
      {% endif %}
    </td>
    
    <td align="center">
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--source-root`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. 适用于在仓库的检出根目录之外运行 CLI 的情况。 默认情况下，<code>database create</code> 命令假设当前目录为源文件的根目录，使用此选项可指定不同的位置。
    </td>
  </tr>
</table>

更多信息请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[创建 {% data variables.product.prodname_codeql %} 数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)。

### {% ifversion fpt or ghes > 3.1 or ghae or ghec %}单一语言示例{% else %}基本示例{% endif %}

此示例在 `/checkouts/example-repo` 为检出的仓库创建 {% data variables.product.prodname_codeql %} 数据库。 它使用 JavaScript 提取器在仓库中创建 JavaScript 和 TypeScript 代码的分层表示。 生成的数据库存储在 `/codeql-dbs/example-repo` 中。

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

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
### 多语言示例

此示例在 `/checkouts/example-repo` 为检出的仓库创建两个 {% data variables.product.prodname_codeql %} 数据库。 它使用：

- `--db-cluster` 以请求分析多种语言。
- `--langue` 以指定为哪种语言创建数据库。
- `--command` 以向工具告知代码库的构建命令，这里是 `make`。
- `--no-run-unnecessary-build` 以向工具告知对不需要的语言跳过构建命令（如 Python）。

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
美元
```
{% endif %}

## 分析 {% data variables.product.prodname_codeql %} 数据库

1. Create a {% data variables.product.prodname_codeql %} database (see above).{% if codeql-packs %}
2. Optional, run `codeql pack download` to download any {% data variables.product.prodname_codeql %} packs (beta) that you want to run during analysis. For more information, see "[Downloading and using {% data variables.product.prodname_codeql %} query packs](#downloading-and-using-codeql-query-packs)" below.
    ```shell
    codeql pack download &lt;packs&gt; 
    ```
    {% endif %}
3. Run `codeql database analyze` on the database and specify which {% if codeql-packs %}packs and/or {% endif %}queries to use.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% if codeql-packs %}&lt;packs,queries&gt;{% else %} &lt;queries&gt;{% endif %} 
  ```

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
{% note %}

**注意：** 如果您分析了一个以上的 {% data variables.product.prodname_codeql %} 数据库的单项提交，您必须为此命令生成的每组结果指定 SARIF 类别。 当您上传结果到 {% data variables.product.product_name %} 时，{% data variables.product.prodname_code_scanning %} 使用此类别来分别存储每种语言的结果。 如果你忘记了这样做，每次上传都会覆盖以前的结果。

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% if codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

{% endif %}
<table spaces-before="0">
  <tr>
    <th>
      选项
    </th>
    
    <th align="center">
      必选
    </th>
    
    <th>
      用法
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;database&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定包含要分析的 {% data variables.product.prodname_codeql %} 数据库的目录路径。
    </td>
  </tr>
  
  <tr>
    <td>
      <code>&lt;packs,queries&gt;</code>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      Specify {% data variables.product.prodname_codeql %} packs or queries to run. To run the standard queries used for {% data variables.product.prodname_code_scanning %}, omit this parameter. 要查看 {% data variables.product.prodname_codeql_cli %} 捆绑包中包含的其他查询套件，请查看 <code>/&lt;extraction-root&gt;/codeql/qlpacks/codeql-&lt;language&gt;/codeql-suites</code>。 有关创建您自己的查询套件的信息，请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的<a href="https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/">创建 CodeQL 查询套件</a>。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--format`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定命令生成的结果文件的格式。 要上传到 {% data variables.product.company_short %}，这应该是：{% ifversion fpt or ghae or ghec %}<code>sarif-latest</code>{% else %}<code>sarifv2.1.0</code>{% endif %}。 更多信息请参阅“<a href="/code-security/secure-coding/sarif-support-for-code-scanning">{% data variables.product.prodname_code_scanning %} 的 SARIF 支持</a>”。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--output`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定保存 SARIF 结果文件的位置。{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr><code>--sarif-category</code><nobr>
    </td>
    
    <td align="center">
      {% octicon "question" aria-label="Required with multiple results sets" %}
    </td>
    
    <td>
      可选用于单个数据库分析。 当您分析多个数据库在仓库中的单个提交时，需要定义语言。 指定要在用于此分析的 SARIF 结果文件中包含的类别。 A category is used to distinguish multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.|{% endif %}{% if codeql-packs %}
    </td>
  </tr>
  
  <tr>
    <td>
      <code>&lt;packs&gt;</code>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. Use if you have downloaded CodeQL query packs and want to run the default queries or query suites specified in the packs. For more information, see "<a href="#downloading-and-using-codeql-query-packs">Downloading and using {% data variables.product.prodname_codeql %} packs</a>."{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--threads`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. 如果您想使用多个线程来运行查询，请使用。 默认值为 <code>1</code> 。 您可以指定更多的线程来加速查询执行。 要将线程数设置为逻辑处理器的数量，指定 <code>0</code>。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--verbose`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. 用于从数据库创建过程获取有关分析过程的更详细的信息{% ifversion fpt or ghes > 3.1 or ghae or ghec %} 和诊断数据{% endif %}。
    </td>
  </tr>
</table>

更多信息请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[使用 {% data variables.product.prodname_codeql_cli %} 分析数据库](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)。

### 基本示例

此示例分析存储在 `/codeql-dbs/example-repo` 的 {% data variables.product.prodname_codeql %} 数据库并将结果保存为 SARIF 文件： `/temple/example-repo-js.sarif`。 {% ifversion fpt or ghes > 3.1 or ghae or ghec %}它使用 `--sarif-category` 在 SARIF 文件中包括额外的信息，以将结果标识为 JavaScript。 当您有多个 {% data variables.product.prodname_codeql %} 数据库来分析仓库中的单个提交时，这一点至关重要。{% endif %}

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls {% ifversion fpt or ghes > 3.1 or ghae or ghec %}--sarif-category=javascript{% endif %}
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/
    codeql-javascript/AngularJS/DisablingSce.ql.
... 
> Shutting down query evaluator.
> Interpreting results.
```

## 上传结果到 {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

在将结果上传到 {% data variables.product.product_name %} 之前，您必须确定将之前创建的 {% data variables.product.prodname_github_app %} 或个人访问令牌传递给 {% data variables.product.prodname_codeql_cli %} 的最佳方式（请参阅[在 CI 系统中安装 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)）。 我们建议您查看 CI 系统关于安全使用密钥存储库的指南。 {% data variables.product.prodname_codeql_cli %} 支持：

- 使用 `--github-auth-stdin` 选项通过标准输入传递令牌到 CLI（推荐）。
- 在环境变量 `GITHUB_TOKEN` 中保存密钥并运行不包含 `--github-auth-stdin` 选项的 CLI。

当您决定为您的 CI 服务器提供最安全、最可靠的方法时，请在 SARIF 结果文件上运行 `codeql github upload-results`，并包括 `- github-auth-stdin`，除非令牌在环境变量 `GITHUB_TOKEN` 中可用。

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes > 3.0 or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

<table spaces-before="0">
  <tr>
    <th>
      选项
    </th>
    
    <th align="center">
      必选
    </th>
    
    <th>
      用法
    </th>
  </tr>
  
  <tr>
    <td>
      <nobr>`--repository`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定要上传数据到其中的仓库的 <em x-id="3">OWNER/NAME</em>。 所有者必须是拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的企业内的组织，而 {% data variables.product.prodname_GH_advanced_security %} 必须为仓库启用{% ifversion fpt or ghec %}， 除非仓库是公共的{% endif %}。 更多信息请参阅“<a href="/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository">管理仓库的安全和分析设置</a>”。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--ref` 指定拉取请求</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定您检出并分析的 <code>ref</code>，以便结果可以匹配正确的代码。 对于分支，使用 <code>refs/heads/BRANCH-NAME</code>；对于拉取请求的头部提交，使用 <code>refs/pulls/NUMBER/head</code>；或者对于拉取请求的 {% data variables.product.prodname_dotcom %} 生成的合并提交，使用 <code>refs/pulls/NUMBER/merge</code>。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--commit`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定所分析的提交的完整 SHA。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--sarif`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定要加载的 SARIF 文件。{% ifversion ghes > 3.0 or ghae %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-url`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定 {% data variables.product.product_name %} 的 URL。{% endif %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. 用于通过标准输入传递为向 {% data variables.product.company_short %} 的 REST API 验证而创建的 CLI 或 {% data variables.product.prodname_github_app %} 个人访问令牌。 如果命令可以使用此令牌设置的 <code>GITHUB_TOKEN</code> 环境变量，这是不必要的。
    </td>
  </tr>
</table>

更多信息请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的 [github upload-results](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/)。

### 基本示例

此示例将结果从 SARIF 文件 `temp/example-repo-js.sarif` 上传到仓库 `my-org/example-repo`。 它告诉 {% data variables.product.prodname_code_scanning %} API，结果用于 `main` 分支上的提交 `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718`。

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes > 3.0 or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

除非上传未成功，否则此命令不会输出。 上传完成并开始数据处理时，命令提示返回。 在较小的代码库中，您应该能够在稍后的 {% data variables.product.product_name %} 中探索 {% data variables.product.prodname_code_scanning %} 警告。 您可以直接在拉取请求或分支的 **Security（安全性）**选项卡中查看警报，具体取决于检出的代码。 更多信息请参阅“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”和“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

{% if codeql-packs %}
## Downloading and using {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-cli %}

The {% data variables.product.prodname_codeql_cli %} bundle includes queries that are maintained by {% data variables.product.company_short %} experts, security researchers, and community contributors. If you want to run queries developed by other organizations, {% data variables.product.prodname_codeql %} query packs provide an efficient and reliable way to download and run queries. For more information, see "[About code scanning with CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

Before you can use a {% data variables.product.prodname_codeql %} pack to analyze a database, you must download any packages you require from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} by running `codeql pack download` and specifying the packages you want to download. If a package is not publicly available, you will need to use a {% data variables.product.prodname_github_app %} or personal access token to authenticate. For more information and an example, see "[Uploading results to {% data variables.product.product_name %}](#uploading-results-to-github)" above.

```shell
codeql pack download &lt;scope/name@version&gt;,... 
```

<table spaces-before="0">
  <tr>
    <th>
      选项
    </th>
    
    <th align="center">
      必选
    </th>
    
    <th>
      用法
    </th>
  </tr>
  
  <tr>
    <td>
      <nobr>`<scope>`</nobr>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      Specify the scope and name of one or more CodeQL query packs to download using a comma-separated list. Optionally, include the version to download and unzip. By default the latest version of this pack is downloaded.
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--github-auth-stdin`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. Pass the {% data variables.product.prodname_github_app %} or personal access token created for authentication with {% data variables.product.company_short %}'s REST API to the CLI via standard input. 如果命令可以使用此令牌设置的 <code>GITHUB_TOKEN</code> 环境变量，这是不必要的。
    </td>
  </tr>
</table>

### 基本示例

This example runs two commands to download the latest version of the `octo-org/security-queries` pack and then analyze the database `/codeql-dbs/example-repo`.

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download octo-org/security-queries

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0

$ codeql database analyze /codeql-dbs/example-repo  octo-org/security-queries \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/1] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> [1/1 eval 394ms] Evaluation done; writing results to docto-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}

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

当您使用 {% data variables.product.prodname_code_scanning %} 查询套件分析 {% data variables.product.prodname_codeql %} 数据库时，除了生成有关警报的详细信息外，CLI 还报告数据库生成步骤和汇总指标的诊断数据。 对于警报很少的存储库，您可能会发现此信息可用于确定代码中是否真的存在很少的问题，或者生成 {% data variables.product.prodname_codeql %} 数据库时是否出错。 有关 `codeql database analyze` 的更详细输出，请使用 `--verbose` 选项。

有关可用的诊断信息类型的更多信息，请参阅“[查看 {% data variables.product.prodname_code_scanning %} 日志](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information)”。

### {% data variables.product.prodname_code_scanning_capc %} 只显示被分析语言之一的分析结果

默认情况下， {% data variables.product.prodname_code_scanning %} 预计每个仓库需要一个SARIF 结果文件。 因此，当您上传第二个 SARIF 结果文件进行提交时，将被视为原始数据集的替换。

如果您想将多组结果上传到 {% data variables.product.prodname_code_scanning %} API 以在存储库中提交，则必须将每组结果识别为唯一的一组结果。 对于您创建多个 {% data variables.product.prodname_codeql %} 数据库以分析每个提交的仓库， 使用 `--sarif-categories` 为每个你生成的 SARIF 文件指定一个语言或其他独特的类别。

### 如果您的 CI 系统无法触发 {% data variables.product.prodname_codeql_cli %}，则提供替代方案

{% ifversion fpt or ghes > 3.2 or ghae-next or ghec %}

If your CI system cannot trigger the {% data variables.product.prodname_codeql_cli %} autobuild and you cannot specify a command line for the build, you can use indirect build tracing to create {% data variables.product.prodname_codeql %} databases for compiled languages. For more information, see [Using indirect build tracing](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#using-indirect-build-tracing) in the documentation for the {% data variables.product.prodname_codeql_cli %}.

{% endif %}

{% ifversion ghes < 3.3 %}

{% data reusables.code-scanning.use-codeql-runner-not-cli %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

{% endif %}

{% endif %}

## 延伸阅读

- [创建 CodeQL 数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [使用 CodeQL CLI 分析数据库](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
