---
title: 缓存依赖项以加快工作流程
shortTitle: 缓存依赖项
intro: 为了使工作流程更快、更高效，可以为依赖项及其他经常重复使用的文件创建和使用缓存。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
---

## 关于缓存工作流程依赖项

工作流程运行通常在不同运行之间重新使用相同的输出或下载的依赖项。 例如，Maven、Gradle、npm 和 Yarn 等软件包和依赖项管理工具都会对下载的依赖项保留本地缓存。

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} 托管的运行器在一个干净的虚拟环境中启动，每次都必须下载依赖项，造成网络利用率提高、运行时间延长和成本增加。 {% endif %}为帮助加快重新创建诸如依赖项的文件，{% data variables.product.prodname_dotcom %} 可以缓存您在工作流程中经常使用的文件。

要缓存作业的依赖项，可以使用 {% data variables.product.prodname_dotcom %} 的 [`cache` 操作](https://github.com/actions/cache)。 该操作将创建并还原由唯一键标识的缓存。 或者，如果要缓存下面列出的包管理器，则使用其各自的 setup-* 操作时需要的配置最少，并且将为您创建和还原依赖项缓存。

<table>
<thead>
  <tr>
    <th>包管理器</th>
    <th>用于缓存的 setup-* 操作</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>npm, yarn, pnpm</td>
    <td><a href="https://github.com/actions/setup-node#caching-global-packages-data">setup-node</a></td>
  </tr>
  <tr>
    <td>pip, pipenv, poetry</td>
    <td><a href="https://github.com/actions/setup-python#caching-packages-dependencies">setup-python</a></td>
  </tr>
  <tr>
    <td>gradle, maven</td>
    <td><a href="https://github.com/actions/setup-java#caching-packages-dependencies">setup-java</a></td>
  </tr>
  <tr>
    <td>ruby gems</td>
    <td><a href="https://github.com/ruby/setup-ruby#caching-bundle-install-automatically">setup-ruby</a></td>
  </tr>
</tbody>
</table>

{% warning %}

**警告**：{% ifversion fpt or ghec %}将缓存与 {% data variables.product.prodname_actions %} 一起使用时，请注意以下事项：

* {% endif %}我们建议您不要在缓存中存储任何敏感信息。 例如，敏感信息可以包括存储在缓存路径的文件中的访问令牌或登录凭据。 此外，命令行接口 (CLI) 程序，例如 `docker login`，可以在配置文件中保存访问凭据。 具有读取访问权限的任何人都可以在仓库上创建拉取请求并访问缓存的内容。 仓库的复刻也可在基本分支上创建拉取请求，并在基本分支上访问缓存。
{%- ifversion fpt or ghec %}
* 使用自托管运行器时，工作流程运行的缓存存储在 {% data variables.product.company_short %} 拥有的云存储上。 客户拥有的存储解决方案仅适用于 {% data variables.product.prodname_ghe_server %}。
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

有关工作流程运行工件的更多信息，请参阅“[使用工件持久化工作流程数据](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

## 访问缓存的限制

工作流程可以访问和还原当前分支、基础分支（包括复刻的仓库的基本分支）或默认分支（通常是 `main`）中创建的缓存 例如，在默认分支上创建的缓存可从任何拉取请求访问。 另外，如果分支 `feature-b` 具有基础分支 `feature-a`，则触发于 `feature-b` 的工作流程可以访问默认分支 (`main`)、`feature-a` 和 `feature-b` 中创建的缓存。

访问限制通过在不同分支之间创建逻辑边界来提供缓存隔离和安全。 例如， 为分支 `feature-a`（具有基础分支 `main`）创建的缓存将无法访问分支 `feature-c`（具有基础分支 `main`）的拉取请求。

仓库中的多个工作流程共享缓存条目。 可以从同一仓库和分支的另一个工作流程访问和恢复为工作流程中的分支创建的缓存。

## 使用 `cache` 操作

[`cache` 操作](https://github.com/actions/cache)将尝试恢复基于您提供的 `key` 的缓存。 当操作找到缓存时，该操作会将缓存的文件还原到您配置的 `path`。

如果没有精确匹配，操作在作业成功完成时将自动创建一个新的缓存。 新缓存将使用您提供的 `key` 并包含 `path` 中指定的文件。

当 `key` 与现有缓存不匹配时，您可以选择性提供要使用的 `restore-keys` 列表。 `restore-keys` 列表很有用，因为 `restore-keys` 可以部分匹配缓存密钥。 有关匹配 `restore-keys` 的更多信息，请参阅“[匹配缓存密钥](#matching-a-cache-key)”。

### `cache` 操作的输入参数

- `key`：**必要** 保存缓存时创建的键，以及用于搜索缓存的键。 它可以是变量、上下文值、静态字符串和函数的任何组合。 密钥最大长度为 512 个字符，密钥长度超过最大长度将导致操作失败。
- `path`：**必要** 运行器上缓存或还原的文件路径。
  - 可以指定单个路径，也可以在单独的行上添加多个路径。 例如：

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - 您可以指定目录或单个文件，并且支持 glob 模式。
  - 可以指定绝对路径或相对于工作区目录的路径。
- `restore-keys`：**可选** 包含备用恢复键的字符串，每个恢复键都放在新行上。 如果 `key` 未发生缓存命中，则按提供的查找和恢复缓存的顺序使用这些恢复密钥。 例如：

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### `cache` 操作的输出参数

- `cache-hit`：表示找到了密钥的精确匹配项的布尔值。

### `cache` 操作使用示例

此示例在 `package-lock.json` 文件中的包更改时，或运行器的操作系统更改时，创建一个新的缓存。 缓存键使用上下文和表达式生成一个键值，其中包括运行器的操作系统和 `package-lock.json` 文件的 SHA-256 哈希。

```yaml{:copy}
name: Caching with npm
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        id: cache-npm
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == false }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

当 `key` 匹配现有缓存时，被称为_缓存命中_，并且操作会将缓存的文件还原到 `path` 目录。

当 `key` 不匹配现有缓存时，则被称为_缓存错过_，在作业成功完成时将自动创建一个新缓存。

发生缓存未命中时，该操作还会在指定的 `restore-keys` 中搜索任何匹配项：

1. 如果您提供 `restore-keys`，`cache` 操作将按顺序搜索与 `restore-keys` 列表匹配的任何缓存。
   - 当精确匹配时，操作会将缓存中的文件恢复至 `path` 目录。
   - 如果没有精确匹配，操作将会搜索恢复键值的部分匹配。 当操作找到部分匹配时，最近的缓存将恢复到 `path` 目录。
1. `cache` 操作完成，作业中的下一个步骤运行。
1. 如果作业成功完成，则操作将自动创建一个包含 `path` 目录内容的新缓存。

有关缓存匹配过程的更详细说明，请参阅“[匹配缓存键](#matching-a-cache-key)”。 创建缓存后，无法更改现有缓存的内容，但可以使用新键创建新缓存。

### 使用上下文创建缓存键

缓存键可以包括 {% data variables.product.prodname_actions %} 支持的任何上下文、函数、文本和运算符。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”和“[表达式](/actions/learn-github-actions/expressions)”。

使用表达式创建 `key` 允许您在依赖项更改时自动创建新缓存。

例如，您可以使用计算 npm `package-lock.json` 文件哈希的表达式创建 `key`。 因此，当组成 `package-lock.json` 文件更改的依赖项时，缓存键会更改，并自动创建新的缓存。

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} 评估表达式 `hash "package-lock.json"` 以派生最终 `key`。

```yaml
npm-d5ea0750
```

### 使用 `cache` 操作的输出

您可以使用 `cache` 操作的输出来根据缓存命中或错过是否发生来执行某些操作。 如果存在缓存未命中（找不到指定 `key` 的缓存的完全匹配项），则 `cache-hit` 输出将设置为 `false`。

在上面的示例工作流程中，有一个步骤列出了发生缓存未命中时 Node 模块的状态：

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit == false }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## 匹配缓存键

`cache` 操作会先在包含工作流程运行的分支中搜索 `key` 和 `restore-key` 的缓存命中。 如果当前分支中没有命中，`cache` 操作将在父分支和上游分支中搜索 `key` 和 `restore-keys`。

`restore-keys` 允许您指定在 `key` 上出现缓存错过时要使用的备用还原密钥列表。 您可以创建从最具体到最不具体的多个恢复键。 `cache` 操作按顺序搜索 `restore-keys`。 当键不直接匹配时，操作将搜索以恢复键为前缀的键。 如果恢复键值有多个部分匹配项，操作将返回最近创建的缓存。

### 使用多个恢复键值的示例

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

运行器将评估表达式，解析为以下 `restore-keys`：

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

恢复键 `npm-feature-` 与任何以字符串 `npm-feature-` 开头的键值匹配。 例如，键值 `npm-feature-fd3052de` 和 `npm-feature-a9b253ff` 都与恢复键值匹配。 将使用创建日期最新的缓存。 此示例中的键值按以下顺序搜索：

1. **`npm-feature-d5ea0750`** 匹配特定的哈希。
1. **`npm-feature-`** 匹配前缀为 `npm-feature-` 的缓存键值。
1. **`npm-`** 匹配前缀为 `npm-` 的任何键值。

#### 搜索优先级示例

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

例如，如果拉取请求包含 `feature` 分支并针对默认分支 (`main`)，操作将按以下顺序搜索 `key` 和 `restore-keys`：

1. `feature` 分支中的键值 `npm-feature-d5ea0750`
1. `feature` 分支中的键值 `npm-feature-`
1. `feature` 分支中的键值 `npm-`
1. `main` 分支中的键值 `npm-feature-d5ea0750`
1. `main` 分支中的键值 `npm-feature-`
1. `main` 分支中的键值 `npm`

## 使用限制和收回政策

{% data variables.product.prodname_dotcom %} 将删除 7 天内未被访问的任何缓存条目。 可以存储的缓存数没有限制，但存储库中所有缓存的总大小限制为{% if actions-cache-policy-apis %} 默认情况下，每个存储库的限制为 10 GB，但此限制可能会有所不同，具体取决于企业所有者或存储库管理员设置的策略。{% else %} 10 GB。{% endif %}

{% data reusables.actions.cache-eviction-process %}

{% if actions-cache-policy-apis %}
有关更改存储库缓存大小限制的策略的信息，请参阅“[在企业中实施 {% data variables.product.prodname_actions %} 策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)”和“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)”。
{% endif %}

{% if actions-cache-management %}

## 管理缓存

您可以使用 {% data variables.product.product_name %} REST API 来管理缓存。 目前，您可以使用 API 来查看缓存使用情况，并期望在未来的更新中提供更多功能。 更多信息请参阅 REST API 文档中的“[操作](/rest/reference/actions#cache)”。

{% endif %}
