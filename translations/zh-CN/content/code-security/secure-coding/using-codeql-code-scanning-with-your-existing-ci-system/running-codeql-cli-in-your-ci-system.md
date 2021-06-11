---
title: 在 CI 系统中运行 CodeQL CLI
shortTitle: 运行 CodeQL CLI
intro: '您可以使用 {% data variables.product.prodname_codeql_cli %} 在第三方持续集成系统中执行 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: next
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
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 关于 {% data variables.product.prodname_codeql_cli %}

您可以使用 {% data variables.product.prodname_codeql_cli %} 在第三方持续集成 (CI) 系统中处理的代码上运行 {% data variables.product.prodname_code_scanning %}。 {% data reusables.code-scanning.about-code-scanning %} 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)”。

{% data reusables.code-scanning.what-is-codeql-cli %}

您也可以在 CI 系统中使用 {% data variables.product.prodname_codeql_runner %}，或者使用 {% data variables.product.prodname_actions %} 在 {% data variables.product.product_name %} 中运行 {% data variables.product.prodname_code_scanning %}。 有关 CI 系统选项的概述，请参阅“[关于 CI 系统中的 CodeQL {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)”。 有关使用操作进行 {% data variables.product.prodname_code_scanning %} 的信息，请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% note %}

**注：**{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.prodname_codeql_cli %} 可免费用于 {% data variables.product.prodname_dotcom_the_website %} 上维护的公共仓库，也可用于具有 {% data variables.product.prodname_advanced_security %} 许可证的客户所拥有的私有仓库。 有关信息请参阅“[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 条款和条件](https://securitylab.github.com/tools/codeql/license)”和“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。
{%- else %}{% data variables.product.prodname_codeql_cli %} 可用于拥有 {% data variables.product.prodname_advanced_security %} 许可证的客户。
{% endif %}
{% endnote %}

### 下载 {% data variables.product.prodname_codeql_cli %}

您应该从 https://github.com/github/codeql-action/releases 下载 {% data variables.product.prodname_codeql %} 包。 包中包含：

- {% data variables.product.prodname_codeql_cli %} 产品
- 来自 https://github.com/github/codeql 的查询和库的兼容版本
- 包中包含的所有查询的预编译版本

您应该始终使用 {% data variables.product.prodname_codeql %} 包，因为这样可以确保兼容性，并且比单独下载 {% data variables.product.prodname_codeql_cli %} 和检出 {% data variables.product.prodname_codeql %} 查询提供更好的性能。 如果您只在一个特定平台上运行 CLI，请下载相应的 `codeql-bundle-PLATFORM.tar.gz` 文件。 或者，您可以下载 `codeql-bundle.tar.gz`，其中包含所有支持平台的 CLI 。

### 在 CI 系统中设置 {% data variables.product.prodname_codeql_cli %}

您需要将 {% data variables.product.prodname_codeql_cli %} 包的全部内容提供给要运行 CodeQL {% data variables.product.prodname_code_scanning %} 分析的每个 CI 服务器。 例如，您可以配置每台服务器从中央内部位置复制包并提取它。 或者，您可以使用 REST API 直接从 {% data variables.product.prodname_dotcom %} 获取包，以确保您从查询的最新改进中受益。 {% data variables.product.prodname_codeql_cli %} 的更新每 2-3 周发布一次。 例如：

```shell
$ wget https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ../codeql-bundle-linux64.tar.gz
```

提取 {% data variables.product.prodname_codeql_cli %} 包后，您可以在服务器上运行 `codeql` 可执行文件：

- 通过执行 `/extraction-root/codeql/codeql`，其中 `<extraction-root>` 是您提取 {% data variables.product.prodname_codeql_cli %} 包的文件夹。
- 通过将 `/extraction-root/codeql` 添加到 `PATH`，以便您可以像 `codeql` 一样运行可执行文件。

### 测试 {% data variables.product.prodname_codeql_cli %} 设置

提取 {% data variables.product.prodname_codeql_cli %} 包后，您可以运行以下命令来验证是否正确设置了 CLI 以创建和分析数据库。

- `codeql resolve languages` if `/extraction-root/codeql` is on the `PATH`.
- `/extraction-root/codeql/codeql resolve languages` otherwise.

**成功输出示例：**
```
cpp (/extraction-root/codeql/cpp)
csharp (/extraction-root/codeql/csharp)
csv (/extraction-root/codeql/csv)
go (/extraction-root/codeql/go)
html (/extraction-root/codeql/html)
java (/extraction-root/codeql/java)
javascript (/extraction-root/codeql/javascript)
properties (/extraction-root/codeql/properties)
python (/extraction-root/codeql/python)
xml (/extraction-root/codeql/xml)
```

如果 {% data variables.product.prodname_codeql_cli %} 无法口解析预期的语言， 检查您是否下载了 {% data variables.product.prodname_codeql %} 包，而不是 {% data variables.product.prodname_codeql_cli %} 的独立副本。

### 使用 {% data variables.product.product_name %} 生成用于身份验证的令牌

每个 CI 服务器都需要 {% data variables.product.prodname_github_app %} 或用于 {% data variables.product.prodname_codeql_cli %} 的个人访问令牌，才能将结果上传到 {% data variables.product.product_name %}。 您必须使用具有 `>security_events` 写入权限的访问令牌或 {% data variables.product.prodname_github_app %}。 如果CI 服务器已使用具有此作用域的令牌从 {% data variables.product.product_name %} 检出仓库， 您可以允许 {% data variables.product.prodname_codeql_cli %} 使用相同的令牌。 否则，您应该创建具有 `security_events` 写入权限的新令牌，然后将其添加到 CI 系统的密钥存储区。 更多信息请参阅“[构建 {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)”和“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

### 使用 {% data variables.product.prodname_codeql_cli %} 生成数据并将其上传到 {% data variables.product.product_name %}

您可以通过三个步骤调用 {% data variables.product.prodname_codeql_cli %} 来分析代码库：

1. 使用 `codeql database create`：创建 {% data variables.product.prodname_codeql %} 数据库以表示仓库中的一种编程语言
2. 使用 `codeql database analyze`：运行查询以分析 {% data variables.product.prodname_codeql %} 数据库并将结果汇总到 SARIF 文件中
3. 使用 `codeql github upload-results`：将 SARIF 文件上传到 {% data variables.product.product_name %}，其中结果与分支或拉取请求匹配，并显示为 {% data variables.product.prodname_code_scanning %} 警报

每个命令都有几个强制性选项，其他选项可用于修改命令的行为。 您可以显示任何命令的命令行帮助：使用 <nobr>`--help`</nobr> 选项.

{% data reusables.code-scanning.upload-sarif-ghas %}

#### 创建 {% data variables.product.prodname_codeql %} 数据库进行分析

1. 检出要分析的代码：
    - 对于分支，请检出要分析的分支的头部。
    - 对于拉取请求，请检出拉取请求的头部提交，或检出 {% data variables.product.product_name %} 生成的拉取请求的合并提交。
2. 设置代码库的环境，确保任何依赖项都可用。 更多信息请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[为非编译语言创建数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages)和[为编译语言创建数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages)。
3. 从仓库的检出根目录运行 `codeql database create`。
  ```shell
  codeql database create &lt;database&gt; --language=&lt;language-identifier&gt;
  ```
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
      指定要为 {% data variables.product.prodname_codeql %} 数据库创建的目录的名称和位置。 如果您试图覆盖现有目录，命令将失败。
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
      <nobr>`--source-root`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. 适用于在仓库的检出根目录之外运行 CLI 的情况。 默认情况下，<code>database create</code> 命令假设当前目录为源文件的根目录，使用此选项可指定不同的位置。
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr>`--command`</nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      用于编译语言的可选项。 适用于要覆盖 CLI 的自动构建系统检测和编译的情况。 指定调用编译器的构建命令或脚本。 命令从当前文件夹或指定的位置运行 <nobr>`--source-root`</nobr>. 不要将此选项用于 Python 和 JavaScript/TypeScript 分析。
    </td>
  </tr>
</table>

更多信息请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[创建 {% data variables.product.prodname_codeql %} 数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)。

##### 基本示例

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

有关更多信息和示例，请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[创建 {% data variables.product.prodname_codeql %} 数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases)。

#### 分析 {% data variables.product.prodname_codeql %} 数据库

1. 创建 {% data variables.product.prodname_codeql %} 数据库（见上文）。
2. 对数据库运行 `codeql database analyze` 并指定要使用的查询。
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  &lt;queries&gt; 
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
      <code>&lt;queries&gt;</code>
    </td>
    
    <td align="center">
      {% octicon "check-circle-fill" aria-label="Required" %}
    </td>
    
    <td>
      指定要运行的查询。 要运行用于 {% data variables.product.prodname_code_scanning %} 的标准查询，请使用: <code>&lt;language&gt;-code-scanning.qls</code>，其中 <code>&lt;language&gt;</code> 是数据库语言的短代码。 要查看 {% data variables.product.prodname_codeql_cli %} 捆绑包中包含的其他查询套件，请查看 <code>/extraction-root/codeql/qlpacks/codeql-&lt;language&gt;/codeql-suites</code>。 有关创建您自己的查询套件的信息，请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的<a href="https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/">创建 CodeQL 查询套件</a>。
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
      指定命令生成的结果文件的格式。 要上传到 {% data variables.product.company_short %}，这应该是：{% if currentVersion == "free-pro-team@latest" %}<code>sarif-latest</code>{% else %}<code>sarifv2.1.0</code>{% endif %}。 更多信息请参阅“<a href="/code-security/secure-coding/sarif-support-for-code-scanning">{% data variables.product.prodname_code_scanning %} 的 SARIF 支持</a>”。
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
      指定保存 SARIF 结果文件的位置。{% if currentVersion == "free-pro-team@latest" %}
    </td>
  </tr>
  
  <tr>
    <td>
      <nobr><code>--sarif-category</code><nobr>
    </td>
    
    <td align="center">
    </td>
    
    <td>
      可选. 指定要在用于此分析的 SARIF 结果文件中包含的类别。 类别可用于区分同一工具和提交的多次分析，但是在不同语言或代码的不同部分进行。 这个值将会出现在 SARIF v1 的 <code>&lt;run&gt;.automationId</code> 属性、SARIF v2 的 <code>&lt;run&gt;.automationLogicalId</code> 属性和 SARIF v2.1.0 的 <code>&lt;run&gt;.automationDetails.id</code> 属性中。 |{% endif %}
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
</table>

更多信息请参阅 {% data variables.product.prodname_codeql_cli %} 文档中的[使用 {% data variables.product.prodname_codeql_cli %} 分析数据库](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)。

##### 基本示例

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --format={% if currentVersion == "free-pro-team@latest" %}sarif-latest{% else %}sarifv2.1.0{% endif %} \
    --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/
    codeql-javascript/AngularJS/DisablingSce.ql.
... 
> Shutting down query evaluator.
> Interpreting results.
```

#### 上传结果到 {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

在将结果上传到 {% data variables.product.product_name %} 之前，您必须确定将之前创建的 {% data variables.product.prodname_github_app %} 或个人访问令牌传递给 {% data variables.product.prodname_codeql_cli %} 的最佳方式（请参阅 [生成向 {% data variables.product.product_name %}](#generating-a-token-for-authentication-with-github) 验证的令牌）。 我们建议您查看 CI 系统关于安全使用密钥存储库的指南。 {% data variables.product.prodname_codeql_cli %} 支持：

- 使用 `--github-auth-stdin` 选项通过标准输入传递令牌到 CLI（推荐）。
- 在环境变量 `GITHUB_TOKEN` 中保存密钥并运行不包含 `--github-auth-stdin` 选项的 CLI。

当您决定为您的 CI 服务器提供最安全、最可靠的方法时，请在 SARIF 结果文件上运行 `codeql github upload-results`，并包括 `- github-auth-stdin`，除非令牌在环境变量 `GITHUB_TOKEN` 中可用。

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
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
      指定要上传数据到其中的仓库的 <em x-id="3">OWNER/NAME</em>。 所有者必须是拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的企业内的组织，而 {% data variables.product.prodname_GH_advanced_security %} 必须为仓库启用{% if currentVersion == "free-pro-team@latest" %}， 除非仓库是公共的{% endif %}。 更多信息请参阅“<a href="/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository">管理仓库的安全和分析设置</a>”。
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
      指定您检出并分析的 <code>ref</code>，以便结果可以匹配正确的代码。 对于分支，使用 <code>refs/heads/BRANCH-NAME</code>；对于拉取请求的头部提交，使用 <code>refs/pulls/NUMBER/head</code>；或者对于拉取请求的 {% data variables.product.product_name %} 生成的合并提交，使用 <code>refs/pulls/NUMBER/merge</code>。
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
      指定要加载的 SARIF 文件。{% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
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

##### 基本示例

```
$ echo $UPLOAD_TOKEN | codeql  github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% if currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

除非上传未成功，否则此命令不会输出。 上传完成并开始数据处理时，命令提示返回。 在较小的代码库中，您应该能够在稍后的 {% data variables.product.product_name %} 中探索 {% data variables.product.prodname_code_scanning %} 警告。 警报直接显示在拉取请求或分支的 **Security（安全性）**选项卡上，具体取决于检出的代码。 更多信息请参阅“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”和“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

### 延伸阅读

- [创建 CodeQL 数据库](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [使用 CodeQL CL 分析数据库](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
