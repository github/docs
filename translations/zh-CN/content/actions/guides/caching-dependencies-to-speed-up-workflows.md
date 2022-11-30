---
title: 缓存依赖项以加快工作流程
shortTitle: 缓存依赖项
intro: 为了使工作流程更快、更高效，可以为依赖项及其他经常重复使用的文件创建和使用缓存。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.ae-beta %}

### 关于缓存工作流程依赖项

工作流程运行通常在不同运行之间重新使用相同的输出或下载的依赖项。 例如，Maven、Gradle、npm 和 Yarn 等软件包和依赖项管理工具都会对下载的依赖项保留本地缓存。

{% data variables.product.prodname_dotcom %} 托管的运行器在一个干净的虚拟环境中启动，每次都必须下载依赖项，造成网络利用率提高、运行时间延长和成本增加。 为帮助加快重新创建这些文件，{% data variables.product.prodname_dotcom %} 可以缓存您在工作流程中经常使用的依赖项。

要缓存作业的依赖项，您需要使用 {% data variables.product.prodname_dotcom %} 的 `cache` 操作。 该操作检索由唯一键标识的缓存。 更多信息请参阅 [`actions/cache`](https://github.com/actions/cache)。 如果您缓存 Ruby Gems，则考虑使用 Ruby 维护的操作，可在启动时缓存捆绑安装。 更多信息请参阅 [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically)。

{% warning %}

**警告**：建议不要在公共仓库缓存中存储任何敏感信息。 例如，敏感信息可以包括存储在缓存路径的文件中的访问令牌或登录凭据。 此外，命令行接口 (CLI) 程序，例如 `docker login`，可以在配置文件中保存访问凭据。 具有读取访问权限的任何人都可以在仓库上创建拉取请求并访问缓存的内容。 仓库的复刻也可在基本分支上创建拉取请求，并在基本分支上访问缓存。

{% endwarning %}

### 比较构件和依赖项缓存

构件与缓存类似，因为它们能够在 {% data variables.product.prodname_dotcom %} 上存储文件，但每项功能都提供不同的用例，不能互换使用。

- 如果要在作业或工作流程运行之间重复使用不经常更改的文件，请使用缓存。
- 如果要保存作业生成的文件，以便在工作流程结束后查看，则使用构件。 更多信息请参阅“[使用构件持久化工作流程](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

### 访问缓存的限制

使用 `cache` 操作的 `v2`，可以访问具有 `GITHUB_REF` 的任何事件所触发的工作流程中的缓存。 如果使用 `cache` 操作的 `v1`，您只能访问由 `push` 和 `pull_request` 事件触发的工作流程中的缓存，`pull_request` `closed` 事件除外。 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。

工作流程可以访问和还原当前分支、基础分支（包括复刻的仓库的基本分支）或默认分支（通常是 `main`）中创建的缓存 例如，在默认分支上创建的缓存可从任何拉取请求访问。 另外，如果分支 `feature-b` 具有基础分支 `feature-a`，则触发于 `feature-b` 的工作流程可以访问默认分支 (`main`)、`feature-a` 和 `feature-b` 中创建的缓存。

访问限制通过在不同工作流程和分支之间创建逻辑边界来提供缓存隔离和安全。 例如， 为分支 `feature-a`（具有基础分支 `main`）创建的缓存将无法访问分支 `feature-b`（具有基础分支 `main`）的拉取请求。

### 使用 `cache` 操作

`cache` 操作将尝试恢复基于您提供的 `key` 的缓存。 当操作找到缓存时，该操作会将缓存的文件还原到您配置的 `path`。

如果没有精确匹配，操作在作业成功完成时将创建一个新的缓存条目。 新缓存将使用您提供的 `key` 并包含 `path` 目录中的文件。

当 `key` 与现有缓存不匹配时，您可以选择性提供要使用的 `restore-keys` 列表。 `restore-keys` 列表很有用，因为 `restore-keys` 可以部分匹配缓存密钥。 有关匹配 `restore-keys` 的更多信息，请参阅“[匹配缓存密钥](#matching-a-cache-key)”。

更多信息请参阅 [`actions/cache`](https://github.com/actions/cache)。

#### `cache` 操作的输入参数

- `key`：**必要** 保存缓存时创建的键，以及用于搜索缓存的键。 可以是变量、上下文值、静态字符串和函数的任何组合。 密钥最大长度为 512 个字符，密钥长度超过最大长度将导致操作失败。
- `path`：**必要** 运行器上缓存或还原的文件路径。 路径可以是绝对路径或相对于工作目录的路径。
  - 路径可以是目录或单个文件，并且支持 glob 模式。
  - With `v2` of the `cache` action, you can specify a single path, or you can add multiple paths on separate lines. 例如：
    ```
    - name: Cache Gradle packages
      uses: actions/cache@v2
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - 对于 `cache` 操作的 `v1`，仅支持单个路径，它必须是一个目录。 您不能缓存单个文件。
- `restore-keys`：**可选** `key` 没有发生缓存命中时用于查找缓存的其他密钥顺序列表。

#### `cache` 操作的输出参数

- `cache-hit`：表示找到了密钥的精确匹配项的布尔值。

#### `cache` 操作使用示例

此示例在 `package-lock.json` 文件中的包更改时，或运行器的操作系统更改时，创建一个新的缓存。 缓存键使用上下文和表达式生成一个键值，其中包括运行器的操作系统和 `package-lock.json` 文件的 SHA-256 哈希。

{% raw %}
```yaml{:copy}
name: Caching with npm

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```
{% endraw %}

当 `key` 匹配现有缓存时，被称为缓存命中，并且操作会将缓存的文件还原到 `path` 目录。

当 `key` 不匹配现有缓存时，则被称为缓存错过，在作业成功完成时将创建一个新缓存。 发生缓存错过时，操作将搜索称为 `restore-keys` 的替代键值。

1. 如果您提供 `restore-keys`，`cache` 操作将按顺序搜索与 `restore-keys` 列表匹配的任何缓存。
   - 当精确匹配时，操作会将缓存中的文件恢复至 `path` 目录。
   - 如果没有精确匹配，操作将会搜索恢复键值的部分匹配。 当操作找到部分匹配时，最近的缓存将恢复到 `path` 目录。
1. `cache` 操作完成，作业中的下一个工作流程步骤运行。
1. 如果作业成功完成，则操作将创建一个包含 `path` 目录内容的新缓存。

要在多个目录中缓存文件，您需要一个对每个目录使用 [`cache`](https://github.com/actions/cache) 操作的步骤。 创建缓存后，无法更改现有缓存的内容，但可以使用新键创建新缓存。

#### 使用上下文创建缓存键

缓存键可以包括 {% data variables.product.prodname_actions %} 支持的任何上下文、函数、文本和运算符。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

使用表达式创建 `key` 允许您在依赖项更改时自动创建新缓存。 例如，您可以使用计算 npm `package-lock.json` 文件哈希的表达式创建 `key`。

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %} 评估表达式 `hash "package-lock.json"` 以派生最终 `key`。

```yaml
npm-d5ea0750
```

### 匹配缓存键

`cache` 操作会先在包含工作流程运行的分支中搜索 `key` 和 `restore-key` 的缓存命中。 如果当前分支中没有命中，`cache` 操作将在父分支和上游分支中搜索 `key` 和 `restore-keys`。

您可以提供一个出现 `key` 缓存错过时使用的恢复键列表。 您可以创建从最具体到最不具体的多个恢复键。 `cache` 操作按顺序搜索 `restore-keys`。 当键不直接匹配时，操作将搜索以恢复键为前缀的键。 如果恢复键值有多个部分匹配项，操作将返回最近创建的缓存。

#### 使用多个恢复键值的示例

{% raw %}
```yaml
restore-keys: |
  npm-foobar-${{ hashFiles('package-lock.json') }}
  npm-foobar-
  npm-
```
{% endraw %}

运行器将评估表达式，解析为以下 `restore-keys`：

{% raw %}
```yaml
restore-keys: |
  npm-foobar-d5ea0750
  npm-foobar-
  npm-
```
{% endraw %}

恢复键值 `npm-foobar-` 与任何以字符串 `npm-foobar-` 开头的键值匹配。 例如，键值 `npm-foobar-fd3052de` 和 `npm-foobar-a9b253ff` 都与恢复键值匹配。 将使用创建日期最新的缓存。 此示例中的键值按以下顺序搜索：

1. **`npm-foobar-d5ea0750`** 匹配特定的哈希。
1. **`npm-foobar-`** 匹配前缀为 `npm-foobar-` 的缓存键值。
1. **`npm-`** 匹配前缀为 `npm-` 的任何键值。

##### 搜索优先级示例

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

例如，如果拉取请求包含 `feature` 分支（当前范围）并针对默认分支 (`main`)，操作将按以下顺序搜索 `key` 和 `restore-keys`：

1. `feature` 分支范围中的键值 `npm-feature-d5ea0750`
1. `feature` 分支范围中的键值 `npm-feature-`
2. `feature` 分支范围中的键值 `npm-`
1. `main` 分支范围中的键值 `npm-feature-d5ea0750`
3. `main` 分支范围中的键值 `npm-feature-`
4. `main` 分支范围中的键值 `npm`

### 使用限制和收回政策

{% data variables.product.prodname_dotcom %} 将删除 7 天内未被访问的任何缓存条目。 可以存储的缓存数没有限制，但存储库中所有缓存的总大小限制为 5 GB。 如果超过此限制，{% data variables.product.prodname_dotcom %} 将保存缓存，但会开始收回缓存，直到总大小小于 5 GB。
