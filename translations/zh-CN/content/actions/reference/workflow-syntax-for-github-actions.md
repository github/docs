---
title: GitHub Actions 的工作流程语法
shortTitle: 工作流程语法
intro: 工作流程是可配置的自动化过程，由一个或多个作业组成。 您必须创建 YAML 文件来定义工作流程配置。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 关于工作流程的 YAML 语法

工作流程文件使用 YAML 语法，必须有 `.yml` 或 `.yaml` 文件扩展名。 {% data reusables.actions.learn-more-about-yaml %}

必须将工作流程文件存储在仓库的 `.github/workflows` 目录中。

### `name`

工作流程的名称。 {% data variables.product.prodname_dotcom %} 在仓库的操作页面上显示工作流程的名称。 如果省略 `name`，{% data variables.product.prodname_dotcom %} 将其设置为相对于仓库根目录的工作流程文件路径。

### `on`

**必填**。 触发工作流程的 {% data variables.product.prodname_dotcom %} 事件的名称。 您可以提供单一事件 `string`、事件的 `array`、事件 `types` 的 `array` 或事件配置 `map`，以安排工作流程的运行，或将工作流程的执行限于特定文件、标记或分支更改。 有关可用事件的列表，请参阅“[触发工作流程的事件](/articles/events-that-trigger-workflows)”。

{% data reusables.github-actions.actions-on-examples %}

### `on.<event_name>.types`

选择将触发工作流程运行的活动类型。 大多数 GitHub 事件由多种活动触发。  例如，发布资源的事件在发行版 `published`、`unpublished`、`created`、`edited`、`deleted` 或 `prereleased` 时触发。 通过 `types` 关键词可缩小触发工作流程运行的活动类型的范围。 如果只有一种活动类型可触发 web 挂钩事件，就没有必要使用 `types` 关键词。

您可以使用事件 `types` 的数组。 有关每个事件及其活动类型的更多信息，请参阅“[触发工作流程的事件](/articles/events-that-trigger-workflows#webhook-events)”。

```yaml
# Trigger the workflow on pull request activity
on:
  release:
    # Only use the types keyword to narrow down the activity types that will trigger your workflow.
    types: [published, created, edited]
```

### `on.<push|pull_request>.<branches|tags>`

使用 `push` 和 `pull_request` 事件时，您可以将工作流配置为在特定分支或标记上运行。 对于 `pull_request` 事件，只评估基础上的分支和标签。 如果只定义 `tags` 或只定义 `branches`，则影响未定义 Git ref 的事件不会触发工作流程运行。

`branches`、`branches-ignore`、`tags` 和 `tags-ignore` 关键词接受使用 `*` 和 `**` 通配符匹配多个分支或标记名称的 glob 模式。 更多信息请参阅“[过滤器模式备忘清单](#filter-pattern-cheat-sheet)”。

#### 包括分支和标记的示例

在 `branches` 和 `tags` 中定义的模式根据 Git ref 的名称进行评估。 例如，在 `branches` 中定义的模式 `mona/octocat` 将匹配 `refs/heads/mona/octocat` Git ref。 模式 `releases/**` 将匹配 `refs/heads/releases/10` Git ref。

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      # Push events on main branch
      - main
      # Push events to branches matching refs/heads/mona/octocat
      - 'mona/octocat'
      # Push events to branches matching refs/heads/releases/10
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v1             # Push events to v1 tag
      - v1.*           # Push events to v1.0, v1.1, and v1.9 tags
```

#### 忽略分支和标记的示例

只要模式与 `branches-ignore` or `tags-ignore` 模式匹配，工作流就不会运行。 在 `branches-ignore` 和 `tags-ignore` 中定义的模式根据 Git ref 的名称进行评估。 例如，在 `branches` 中定义的模式 `mona/octocat` 将匹配 `refs/heads/mona/octocat` Git ref。 `branches` 中的模式 `releases/**-alpha` 将匹配 `refs/releases/beta/3-alpha` Git ref。

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:
      # Push events to branches matching refs/heads/mona/octocat
      - 'mona/octocat'
      # Push events to branches matching refs/heads/releases/beta/3-alpha
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:
      - v1.*           # Push events to tags v1.0, v1.1, and v1.9
```

#### 排除分支和标记

您可以使用两种类型的过滤器来阻止工作流程在对标记和分支的推送和拉取请求上运行。
- `branches` 或 `branches-ignore` - 您无法对工作流程中的同一事件同时使用 `branches` 和 `branches-ignore` 过滤器。 需要过滤肯定匹配的分支和排除分支时，请使用 `branches` 过滤器。 只需要排除分支名称时，请使用 `branches-ignore` 过滤器。
- `tags` 或 `tags-ignore` - 您无法对工作流程中的同一事件同时使用 `tags` 和 `tags-ignore` 过滤器。 需要过滤肯定匹配的标记和排除标记时，请使用 `tags` 过滤器。 只需要排除标记名称时，请使用 `tags-ignore` 过滤器。

#### 使用肯定和否定模式的示例

您可以使用 `!` 字符排除 `tags` 和 `branches`。 您定义模式事项的顺序。
  - 肯定匹配后的匹配否定模式（前缀为 `!`）将排除 Git 引用。
  - 否定匹配后的匹配肯定模式将再次包含 Git 引用。

以下工作流程将在到 `releases/10` 或 `releases/beta/mona` 的推送上运行，而不会在到 `releases/10-alpha` 或 `releases/beta/3-alpha` 的推送上运行，因为否定模式 `!releases/**-alpha` 后跟肯定模式。

```yaml
on:
  push:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```

### `on.<push|pull_request>.paths`

使用 `push` 和 `pull_request` 事件时，您可以将工作流程配置为在至少一个文件不匹配 `paths-ignore` 或至少一个修改的文件匹配配置的 `paths` 时运行。 路径过滤器不评估是否推送到标签。

`paths-ignore` 和 `paths` 关键词接受使用 `*` 和 `**` 通配符匹配多个路径名称的 glob 模式。 更多信息请参阅“[过滤器模式备忘清单](#filter-pattern-cheat-sheet)”。

#### 忽略路径的示例

当所有路径名称匹配 `paths-ignore` 中的模式时，工作流程不会运行。 {% data variables.product.prodname_dotcom %} 根据路径名称评估 `paths-ignore` 中定义的模式。 具有以下路径过滤器的工作流程仅在 `push` 事件上运行，这些事件包括至少一个位于仓库根目录的 `docs` 目录外的文件。

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### 包括路径的示例

如果至少有一个路径与 `paths` 过滤器中的模式匹配，工作流程将会运行。 要在每次推送 JavaScript 文件时触发构建，您可以使用通配符模式。

```yaml
on:
  push:
    paths:
      - '**.js'
```

#### 排除路径

您可以使用两种类型的过滤器排除路径。 不能对工作流程中的同一事件同时使用这两种过滤器。
- `paths-ignore` - 只需要排除路径名称时，请使用 `paths-ignore` 过滤器。
- `paths` - 需要过滤肯定匹配的路径和排除路径时，请使用 `paths` 过滤器。

#### 使用肯定和否定模式的示例

您可以使用 `!` 字符排除 `paths`。 您定义模式事项的顺序：
  - 肯定匹配后的匹配否定模式（前缀为 `!`）将排除路径。
  - 否定匹配后的匹配肯定模式将再次包含路径。

只要 `push` 事件包括 `sub-project` 目录或其子目录中的文件，此示例就会运行，除非该文件在 `sub-project/docs` 目录中。 例如，更改了 `sub-project/index.js` 或 `sub-project/src/index.js` 的推送将会触发工作流程运行，但只更改 `sub-project/docs/readme.md` 的推送不会触发。

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Git 差异比较

{% note %}

**注：** 如果您推送超过 1,000 项提交， 或者如果 {% data variables.product.prodname_dotcom %} 因超时（差异过大）未生成差异，工作流程将始终运行。

{% endnote %}

过滤器决定是否应通过评估已更改文件，并根据 `paths-ignore` or `paths` 列表运行它们，来运行一个工作流程。 如果没有更改文件，工作流程将不会运行。

{% data variables.product.prodname_dotcom %} 会针对推送使用双点差异，针对拉取请求使用三点差异，生成已更改文件列表：
- **拉取请求：** 三点差异比较主题分支的最近版本与其中使用基本分支最新同步主题分支的提交。
- **推送到现有分支：** 双点差异可以直接相互比较头部和基础 SHA。
- **推送到新分支：**根据已推送最深提交的前身父项的两点差异。

更多信息请参阅“[关于比较拉取请求中的分支](/articles/about-comparing-branches-in-pull-requests)”。

### `on.schedule`

{% data reusables.repositories.actions-scheduled-workflow-example %}

有关计划任务语法的更多信息请参阅“[触发工作流程的事件](/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### `权限`

您可以修改授予 `GITHUB_TOKEN` 的默认权限，根据需要添加或删除访问权限，以便只授予所需的最低访问权限。 更多信息请参阅“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)。

您可以使用 `permissions` 作为顶级密钥，以应用于工作流程中的所有作业，或特定的作业。 当您在特定作业中添加 `permissions` 键时，该作业中的所有操作和运行命令使用 `GITHUB_TOKEN` 获取您指定的访问权限。  更多信息请参阅 [`jobs.<job_id>.permissions`](#jobsjob_idpermissions)。

{% data reusables.github-actions.github-token-available-permissions %}
{% data reusables.github-actions.forked-write-permission %}

#### 示例

此示例显示为将要应用到工作流程中所有作业的 `GITHUB_TOKEN` 设置的权限。 所有权限都被授予读取权限。

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
{% endif %}

### `env`

环境变量的 `map` 可用于工作流程中所有作业的步骤。 您还可以设置仅适用于单个作业的步骤或单个步骤的环境变量。 更多信息请参阅 [`jobs.<job_id>.env`](#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv)。

{% data reusables.repositories.actions-env-var-note %}

#### 示例

```yaml
env:
  SERVER: production
```

### `defaults`

将应用到工作流程中所有作业的默认设置的 `map`。 您也可以设置只可用于作业的默认设置。 更多信息请参阅 [`jobs.<job_id>.defaults`](#jobsjob_iddefaults)。

{% data reusables.github-actions.defaults-override %}

### `defaults.run`

您可以为工作流程中的所有 [`run`](#jobsjob_idstepsrun) 步骤提供默认的 `shell` 和 `working-directory` 选项。 您也可以设置只可用于作业的 `run` 默认设置。 更多信息请参阅 [`jobs.<job_id>.defaults.run`](#jobsjob_iddefaultsrun)。 您不能在此关键词中使用上下文或表达式。

{% data reusables.github-actions.defaults-override %}

#### 示例

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
### `concurrency`

{% data reusables.actions.concurrency-beta %}

Concurrency 确保只有使用相同并发组的单一作业或工作流程才会同时运行。 并发组可以是任何字符串或表达式。 表达式只能使用 `github` 上下文。 有关表达式的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

您也可以在作业级别指定 `concurrency`。 更多信息请参阅 [`jobs.<job_id>.concurrency`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idconcurrency)。

{% data reusables.actions.actions-group-concurrency %}

{% endif %}
### `jobs`

工作流程运行包括一项或多项作业。 作业默认是并行运行。 要按顺序运行作业，您可以使用 `<job_id>needs` 关键词在其他作业上定义依赖项。

每个作业在 `runs-on` 指定的运行器环境中运行。

在工作流程的使用限制之内可运行无限数量的作业。 更多信息请参阅“[使用限制和计费](/actions/reference/usage-limits-billing-and-administration)”（对于 {% data variables.product.prodname_dotcom %} 托管的运行器）和“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”（对于自托管运行器使用限制）。

如果需要查找在工作流程运行中运行的作业的唯一标识符，可以使用 {% data variables.product.prodname_dotcom %} ApI。 更多信息请参阅“[工作流程作业](/rest/reference/actions#workflow-jobs)”。

### `jobs.<job_id>`

每项作业必须关联一个 ID。 键值 `job_id` 是一个字符串，其值是作业配置数据的映像。 必须将 `<job_id>` 替换为 `jobs` 对象唯一的字符串。 `<job_id>` 必须以字母或 `_` 开头，并且只能包含字母数字字符、`-` 或 `_`。

#### 示例

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

### `jobs.<job_id>.name`

作业显示在 {% data variables.product.prodname_dotcom %} 上的名称。

### `jobs.<job_id>.needs`

识别在此作业运行之前必须成功完成的任何作业。 它可以是一个字符串，也可以是字符串数组。 如果某个作业失败，则所有需要它的作业都会被跳过，除非这些作业使用让该作业继续的条件表达式。

#### 要求相关作业成功的示例

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

在此示例中，`job1` 必须在 `job2` 开始之前成功完成，而 `job3` 要等待 `job1` 和 `job2` 完成。

此示例中的作业按顺序运行：

1. `job1`
2. `job2`
3. `job3`

#### 不要求相关作业成功的示例

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: always()
    needs: [job1, job2]
```

在此示例中，`job3` 使用 `always()` 条件表达式，因此它始终在 `job1` 和 `job2` 完成后运行，不管它们是否成功。 更多信息请参阅“[ 上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)”。

### `jobs.<job_id>.runs-on`

**必填**。 要运行作业的机器类型。 机器可以是 {% data variables.product.prodname_dotcom %} 托管的运行器或自托管的运行器。

{% if currentVersion == "github-ae@latest" %}
#### {% data variables.actions.hosted_runner %}

如果使用 {% data variables.actions.hosted_runner %}，每个作业将在 `runs-on` 指定的虚拟环境的新实例中运行。

##### 示例

```yaml
runs-on: [AE-runner-for-CI]
```

更多信息请参阅“[关于 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners)”。

{% else %}
{% data reusables.actions.enterprise-github-hosted-runners %}

#### {% data variables.product.prodname_dotcom %} 托管的运行器

如果使用 {% data variables.product.prodname_dotcom %} 托管的运行器，每个作业将在 `runs-on` 指定的虚拟环境的新实例中运行。

可用的 {% data variables.product.prodname_dotcom %} 托管的运行器类型包括：

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.macos-runner-preview %}

##### 示例

```yaml
runs-on: ubuntu-latest
```

更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)”。
{% endif %}

#### 自托管运行器

{% data reusables.actions.ae-self-hosted-runners-notice %}

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

##### 示例

```yaml
runs-on: [self-hosted, linux]
```

更多信息请参阅“[关于自托管的运行器](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)”和“[在工作流程中使用自托管的运行器](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
### `jobs.<job_id>.permissions`

您可以修改授予 `GITHUB_TOKEN` 的默认权限，根据需要添加或删除访问权限，以便只授予所需的最低访问权限。 更多信息请参阅“[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)。

通过在工作定义中指定权限，您可以根据需要为每个作业的 `GITHUB_TOKEN` 配置一组不同的权限。 或者，您也可以为工作流程中的所有作业指定权限。 有关在工作流程级别定义权限的信息，请参阅 [`permissions`](#permissions)。

{% data reusables.github-actions.github-token-available-permissions %}
{% data reusables.github-actions.forked-write-permission %}

#### 示例

此示例显示为将要应用到作业 `stale` 的 `GITHUB_TOKEN` 设置的权限。 对于 `issues` 和 `pull-requests` 拉取请求，授予写入访问权限。 所有其他范围将没有访问权限。

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: actions/stale@v3
```
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### `jobs.<job_id>.environment`

作业引用的环境。 在将引用环境的作业发送到运行器之前，必须通过所有环境保护规则。 更多信息请参阅“[环境](/actions/reference/environments)”。

您可以将环境仅作为环境 `name`，或作为具有 `name` 和 `url` 的环境变量。 URL 映射到部署 API 中的 `environment_url`。 有关部署 API 的更多信息，请参阅“[部署](/rest/reference/repos#deployments)”。

##### 使用单一环境名称的示例
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

##### 使用环境名称和 URL 的示例

```yaml
environment:
  name: production_environment
  url: https://github.com
```

URL 可以是表达式，并且可以使用除 `secrets` 上下文以外的任何上下文。 有关表达式的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

#### 示例
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_name.outputs.url_output }}
```
{% endraw %}
{% endif %}


{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
### `jobs.<job_id>.concurrency`

{% data reusables.actions.concurrency-beta %}

{% note %}

**注意：** 在作业级别指定并发时，无法保证在 5 分钟内排队的作业或运行的互相顺序。

{% endnote %}

Concurrency 确保只有使用相同并发组的单一作业或工作流程才会同时运行。 并发组可以是任何字符串或表达式。 表达式可以使用除 `secrets` 上下文以外的任何上下文。 有关表达式的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

您也可以在工作流程级别指定 `concurrency`。 更多信息请参阅 [`concurrency`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#concurrency)。

{% data reusables.actions.actions-group-concurrency %}

{% endif %}
### `jobs.<job_id>.outputs`

作业的输出 `map`。 作业输出可用于所有依赖此作业的下游作业。 有关定义作业依赖项的更多信息，请参阅 [`jobs.<job_id>.needs`](#jobsjob_idneeds)。

作业输出是字符串，当每个作业结束时，在运行器上评估包含表达式的作业输出。 包含密码的输出在运行器上编辑，不会发送至 {% data variables.product.prodname_actions %}。

要在依赖的作业中使用作业输出, 您可以使用 `needs` 上下文。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#needs-context)”。

#### 示例

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "::set-output name=test::hello"
      - id: step2
        run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}

### `jobs.<job_id>.env`

环境变量的 `map` 可用于作业中的所有步骤。 您也可以设置整个工作流程或单个步骤的环境变量。 更多信息请参阅 [`env`](#env) 和 [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv)。

{% data reusables.repositories.actions-env-var-note %}

#### 示例

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

### `jobs.<job_id>.defaults`

将应用到作业中所有步骤的默认设置的 `map`。 您也可以设置整个工作流程的默认设置。 更多信息请参阅 [`defaults`](#defaults)。

{% data reusables.github-actions.defaults-override %}

### `jobs.<job_id>.defaults.run`

为作业中的所有 `run` 步骤提供默认的 `shell` 和 `working-directory`。 此部分不允许上下文和表达式。

您可以为作业中的所有 [`run`](#jobsjob_idstepsrun) 步骤提供默认的 `shell` 和 `working-directory` 选项。 您也可以为整个工作流程设置 `run` 的默认设置。 更多信息请参阅 [`jobs.defaults.run`](#defaultsrun)。 您不能在此关键词中使用上下文或表达式。

{% data reusables.github-actions.defaults-override %}

#### 示例

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```

### `jobs.<job_id>.if`

您可以使用 `if` 条件阻止作业在条件得到满足之前运行。 您可以使用任何支持上下文和表达式来创建条件。

{% data reusables.github-actions.expression-syntax-if %} 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

### `jobs.<job_id>.steps`

作业包含一系列任务，称为 `steps`。 步骤可以运行命令、运行设置任务，或者运行您的仓库、公共仓库中的操作或 Docker 注册表中发布的操作。 并非所有步骤都会运行操作，但所有操作都会作为步骤运行。 每个步骤在运行器环境中以其自己的进程运行，且可以访问工作区和文件系统。 因为步骤以自己的进程运行，所以步骤之间不会保留环境变量的更改。 {% data variables.product.prodname_dotcom %} 提供内置的步骤来设置和完成作业。

在工作流程的使用限制之内可运行无限数量的步骤。 更多信息请参阅“[使用限制和计费](/actions/reference/usage-limits-billing-and-administration)”（对于 {% data variables.product.prodname_dotcom %} 托管的运行器）和“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”（对于自托管运行器使用限制）。

#### 示例

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
      - name: Print a greeting
        env:
          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona
          MIDDLE_NAME: The
          LAST_NAME: Octocat
        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

### `jobs.<job_id>.steps[*].id`

步骤的唯一标识符。 您可以使用 `id` 引用上下文中的步骤。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

### `jobs.<job_id>.steps[*].if`

您可以使用 `if` 条件阻止步骤在条件得到满足之前运行。 您可以使用任何支持上下文和表达式来创建条件。

{% data reusables.github-actions.expression-syntax-if %} 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

#### 使用上下文的示例

 此步骤仅在事件类型为 `pull_request` 并且事件操作为 `unassigned` 时运行。

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### 使用状态检查功能的示例

`my backup step` 仅在作业的上一步失败时运行。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)”。

```yaml
steps:
  - name: My first step
    uses: monacorp/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

### `jobs.<job_id>.steps[*].name`

步骤显示在 {% data variables.product.prodname_dotcom %} 上的名称。

### `jobs.<job_id>.steps[*].uses`

选择要作为作业中步骤的一部分运行的操作。 操作是一种可重复使用的代码单位。 您可以使用工作流程所在仓库中、公共仓库中或[发布 Docker 容器映像](https://hub.docker.com/)中定义的操作。

强烈建议指定 Git ref、SHA 或 Docker 标记编号来包含所用操作的版本。 如果不指定版本，在操作所有者发布更新时可能会中断您的工作流程或造成非预期的行为。
- 使用已发行操作版本的 SHA 对于稳定性和安全性是最安全的。
- 使用特定主要操作版本可在保持兼容性的同时接收关键修复和安全补丁。 还可确保您的工作流程继续工作。
- 使用操作的默认分支可能很方便，但如果有人新发布具有突破性更改的主要版本，您的工作流程可能会中断。

有些操作要求必须通过 [`with`](#jobsjob_idstepswith) 关键词设置输入。 请查阅操作的自述文件，确定所需的输入。

操作为 JavaScript 文件或 Docker 容器。 如果您使用的操作是 Docker 容器，则必须在 Linux 环境中运行作业。 更多详情请参阅 [`runs-on`](#jobsjob_idruns-on)。

#### 使用版本化操作的示例

```yaml
steps:    
  # Reference a specific commit
  - uses: actions/setup-node@c46424eee26de4078d34105d3de3cc4992202b1e
  # Reference the major version of a release
  - uses: actions/setup-node@v1
  # Reference a minor version of a release
  - uses: actions/setup-node@v1.2
  # Reference a branch
  - uses: actions/setup-node@main
```

#### 使用公共操作的示例

`{owner}/{repo}@{ref}`

您可以指定公共 {% data variables.product.prodname_dotcom %} 仓库中特定的分支、引用或 SHA。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the default branch of a public repository
        uses: actions/heroku@1.0.0
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

#### 在子目录中使用公共操作的示例

`{owner}/{repo}/{path}@{ref}`

公共 {% data variables.product.prodname_dotcom %} 仓库中特定分支、引用或 SHA 上的子目录。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### 使用工作流程所在仓库中操作的示例

`./path/to/dir`

包含工作流程的仓库中操作的目录路径。 在使用操作之前，必须检出仓库。

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### 使用 Docker 中枢操作的示例

`docker://{image}:{tag}`

[Docker 中枢](https://hub.docker.com/)上发布的 Docker 映像。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% if currentVersion == "free-pro-team@latest" %}
##### 使用 {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} 的示例

`docker://{host}/{image}:{tag}`

{% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} 中的 Docker 映像。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
##### 使用 Docker 公共注册表操作的示例

`docker://{host}/{image}:{tag}`

公共注册表中的 Docker 映像。 此示例在 `gcr.io` 使用 Google Container Registry。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### 在不同于工作流程的私有仓库中使用操作的示例

您的工作流程必须检出私有仓库，并在本地引用操作。 Generate a personal access token and add the token as an encrypted secret. 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”和“[加密密码](/actions/reference/encrypted-secrets)”。

Replace `PERSONAL_ACCESS_TOKEN` in the example with the name of your secret.

{% raw %}
```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```
{% endraw %}

### `jobs.<job_id>.steps[*].run`

使用操作系统 shell 运行命令行程序。 如果不提供 `name`，步骤名称将默认为 `run` 命令中指定的文本。

命令默认使用非登录 shell 运行。 您可以选择不同的 shell，也可以自定义用于运行命令的 shell。 更多信息请参阅“[使用指定 shell](#using-a-specific-shell)”。

每个 `run` 关键词代表运行器环境中一个新的进程和 shell。 当您提供多行命令时，每行都在同一个 shell 中运行。 例如：

* 单行命令：

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* 多行命令：

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

使用 `working-directory` 关键词，您可以指定运行命令的工作目录位置。

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

#### 使用指定 shell

您可以使用 `shell` 关键词覆盖运行器操作系统中默认的 shell 设置。 您可以使用内置的 `shell` 关键词，也可以自定义 shell 选项集。

| 支持的平台         | `shell` 参数   | 描述                                                                                                                                                                                  | 内部运行命令                                          |
| ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 所有            | `bash`       | 非 Windows 平台上回退到 `sh` 的默认 shell。 指定 Windows 上的 bash shell 时，将使用 Git for Windows 随附的 bash shel。                                                                                      | `bash --noprofile --norc -eo pipefail {0}`      |
| 所有            | `pwsh`       | PowerShell Core。 {% data variables.product.prodname_dotcom %} 将扩展名 `.ps1` 附加到您的脚本名称。                                                                                                | `pwsh -command ". '{0}'"`                       |
| 所有            | `python`     | 执行 python 命令。                                                                                                                                                                       | `python {0}`                                    |
| Linux / macOS | `sh`         | 未提供 shell 且 在路径中找不到 `bash` 时的非 Windows 平台的后退行为。                                                                                                                                     | `sh -e {0}`                                     |
| Windows       | `cmd`        | {% data variables.product.prodname_dotcom %} 将扩展名 `.cmd` 附加到您的脚本名称并替换 `{0}`。                                                                                                        | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows       | `pwsh`       | 这是 Windows 上使用的默认 shell。 PowerShell Core。 {% data variables.product.prodname_dotcom %} 将扩展名 `.ps1` 附加到您的脚本名称。 如果自托管的 Windows 运行器没有安装 _PowerShell Core_，则使用 _PowerShell Desktop_ 代替。 | `pwsh -command ". '{0}'"`.                      |
| Windows       | `powershell` | PowerShell 桌面。 {% data variables.product.prodname_dotcom %} 将扩展名 `.ps1` 附加到您的脚本名称。                                                                                                  | `powershell -command ". '{0}'"`.                |

#### 使用 bash 运行脚本的示例

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### 使用 Windows `cmd` 运行脚本的示例

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### 使用 PowerShell Core 运行脚本的示例

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### 示例：使用 PowerShell 桌面运行脚本

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### 运行 python 脚本的示例

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### 自定义 shell

您可以使用 `command […options] {0} [..more_options]` 将 `shell` 值设置为模板字符串。 {% data variables.product.prodname_dotcom %} 将字符串的第一个用空格分隔的词解释为命令，并在 `{0}` 处插入临时脚本的文件名。

例如：

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

此示例中使用的命令 `perl` 必须安装在运行器上。


{% if currentVersion == "github-ae@latest" %}有关如何确定 {% data variables.actions.hosted_runner %} 已安装所需软件的说明，请参阅“[创建自定义映像](/actions/using-github-hosted-runners/creating-custom-images)”。
{% else %}
有关 GitHub 托管运行器中所包含软件的信息，请参阅“[GitHub 托管运行器的规格](/actions/reference/specifications-for-github-hosted-runners#supported-software)”。
{% endif %}

#### 退出代码和错误操作首选项

至于内置的 shell 关键词，我们提供由 {% data variables.product.prodname_dotcom %} 托管运行程序执行的以下默认值。 在运行 shell 脚本时，您应该使用这些指南。

- `bash`/`sh`：
  - 使用 `set -eo pipefail` 的快速失败行为：`bash` 和内置 `shell` 的默认值。 它还是未在非 Windows 平台上提供选项时的默认值。
  - 您可以向 shell 选项提供模板字符串，以退出快速失败并接管全面控制权。 例如 `bash {0}`。
  - sh 类 shell 使用脚本中最后执行的命令的退出代码退出，也是操作的默认行为。 运行程序将根据此退出代码将步骤的状态报告为失败/成功。

- `powershell`/`pwsh`
  - 可能时的快速失败行为。 对于 `pwsh` 和 `powershell` 内置 shell，我们将 `$ErrorActionPreference = 'stop'` 附加到脚本内容。
  - 我们将 `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` 附加到 powershell 脚本，以使操作状态反映脚本的最后一个退出代码。
  - 用户可随时通过不使用内置 shell 并提供类似如下的自定义 shell 选项来退出：`pwsh -File {0}` 或 `powershell -Command "& '{0}'"`，具体取决于需求。

- `cmd`
  - 除了编写脚本来检查每个错误代码并相应地响应之外，似乎没有办法完全选择快速失败行为。 由于我们默认不能实际提供该行为，因此您需要将此行为写入脚本。
  - `cmd.exe` 在退出时带有其执行的最后一个程序的错误等级，并且会将错误代码返回到运行程序。 此行为在内部与上一个 `sh` 和 `pwsh` 默认行为一致，是 `cmd.exe` 的默认值，所以此行为保持不变。

### `jobs.<job_id>.steps[*].with`

输入参数的 `map` 由操作定义。 每个输入参数都是一个键/值对。 输入参数被设置为环境变量。 该变量的前缀为 `INPUT_`，并转换为大写。

#### 示例

定义 `hello_world` 操作所定义的三个输入参数（`first_name`、`middle_name` 和 `last_name`）。 这些输入变量将被 `hello-world` 操作作为 `INPUT_FIRST_NAME`、`INPUT_MIDDLE_NAME` 和 `INPUT_LAST_NAME` 环境变量使用。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat      
```

### `jobs.<job_id>.steps[*].with.args`

`string` 定义 Docker 容器的输入。 {% data variables.product.prodname_dotcom %} 在容器启动时将 `args` 传递到容器的 `ENTRYPOINT`。 此参数不支持 `array of strings`。

#### 示例

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: monacorp/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

`args` 用来代替 `Dockerfile` 中的 `CMD` 指令。 如果在 `Dockerfile` 中使用 `CMD`，请遵循按偏好顺序排序的指导方针：

1. 在操作的自述文件中记录必要的参数，并在 `CMD` 指令的中忽略它们。
1. 使用默认值，允许不指定任何 `args` 即可使用操作。
1. 如果操作显示 `--help` 标记或类似项，请将其用作默认值，以便操作自行记录。

### `jobs.<job_id>.steps[*].with.entrypoint`

覆盖 `Dockerfile` 中的 Docker `ENTRYPOINT`，或在未指定时设置它。 与包含 shell 和 exec 表单的 Docker `ENTRYPOINT` 指令不同，`entrypoint` 关键词只接受定义要运行的可执行文件的单个字符串。

#### 示例

```yaml
steps:
  - name: Run a custom command
    uses: monacorp/action-name@main
    with:
      entrypoint: /a/different/executable
```

`entrypoint` 关键词旨在用于 Docker 容器操作，但您也可以将其用于未定义任何输入的 JavaScript 操作。

### `jobs.<job_id>.steps[*].env`

设置供步骤用于运行器环境的环境变量。 您也可以设置整个工作流程或某个作业的环境变量。 更多信息请参阅 [`env`](#env) 和 [`jobs.<job_id>.env`](#jobsjob_idenv)。

{% data reusables.repositories.actions-env-var-note %}

公共操作可在自述文件中指定预期的环境变量。 如果要在环境变量中设置密码，必须使用 `secrets` 上下文进行设置。 更多信息请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”和“[{% data variables.product.prodname_actions %} 的上下文和表达式](/actions/reference/context-and-expression-syntax-for-github-actions)”。

#### 示例

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

### `jobs.<job_id>.steps[*].continue-on-error`

防止步骤失败时作业也会失败。 设置为 `true` 以允许在此步骤失败时作业能够通过。

### `jobs.<job_id>.steps[*].timeout-minutes`

终止进程之前运行该步骤的最大分钟数。

### `jobs.<job_id>.timeout-minutes`

在 {% data variables.product.prodname_dotcom %} 自动取消运行之前可让作业运行的最大分钟数。 默认值：360

### `jobs.<job_id>.strategy`

策略创建作业的构建矩阵。 您可以定义要在其中运行每项作业的不同变种。

### `jobs.<job_id>.strategy.matrix`

您可以定义不同作业配置的矩阵。 矩阵允许您通过在单个作业定义中执行变量替换来创建多个作业。 例如，可以使用矩阵为多个受支持的编程语言、操作系统或工具版本创建作业。 矩阵重新使用作业的配置，并为您配置的每个矩阵创建作业。

{% data reusables.github-actions.usage-matrix-limits %}

您在 `matrix` 中定义的每个选项都有键和值。 定义的键将成为 `matrix` 上下文中的属性，您可以在工作流程文件的其他区域中引用该属性。 例如，如果定义包含操作系统数组的键 `os`，您可以使用 `matrix.os` 属性作为 `runs-on` 关键字的值，为每个操作系统创建一个作业。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的上下文和表达式语法](/actions/reference/context-and-expression-syntax-for-github-actions)”。

定义 `matrix` 事项的顺序。 定义的第一个选项将是工作流程中运行的第一个作业。

#### 使用 Node.js 多个版本运行的示例

您可以提供配置选项阵列来指定矩阵。 例如，如果运行器支持 Node.js 版本 10、12 和 14，则您可以在 `matrix` 中指定这些版本的阵列。

此示例通过设置三个 Node.js 版本阵列的 `node` 键创建三个作业的矩阵。 为使用矩阵，示例将 `matrix.node` 上下文属性设置为 `setup-node` 操作的输入参数 `node-version`。 因此，将有三个作业运行，每个使用不同的 Node.js 版本。

{% raw %}
```yaml
strategy:
  matrix:
    node: [10, 12, 14]
steps:
  # Configures the node version used on GitHub-hosted runners
  - uses: actions/setup-node@v2
    with:
      # The Node.js version to configure
      node-version: ${{ matrix.node }}
```
{% endraw %}

`setup-node` 操作是在使用 {% data variables.product.prodname_dotcom %} 托管的运行器时建议用于配置 Node.js 版本的方式。 更多信息请参阅 [`setup-node`](https://github.com/actions/setup-node) 操作。

#### 使用多个操作系统的示例

您可以创建矩阵以在多个运行器操作系统上运行工作流程。 您也可以指定多个矩阵配置。 此示例创建包含 6 个作业的矩阵：

- 在 `os` 阵列中指定了 2 个操作系统
- 在 `node` 阵列中指定了 3 个 Node.js 版本

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-18.04, ubuntu-20.04]
    node: [10, 12, 14]
steps:
  - uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% if currentVersion == "github-ae@latest" %}要查找 {% data variables.actions.hosted_runner %} 支持的配置选项，请参阅“[软件规格](/actions/using-github-hosted-runners/about-ae-hosted-runners#software-specifications)”。
{% else %}要查找 {% data variables.product.prodname_dotcom %} 托管的运行器支持的配置选项，请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)”。
{% endif %}

#### 在组合中包含附加值的示例

您可以将额外的配置选项添加到已经存在的构建矩阵作业中。 例如，如果要在作业使用 `windows-latest` 和 `node` 的版本 8 运行时使用 `npm` 的特定版本，您可以使用 `include` 指定该附加选项。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    include:
      # includes a new variable of npm with a value of 6
      # for the matrix leg matching the os and version
      - os: windows-latest
        node: 8
        npm: 6
```
{% endraw %}

#### 包括新组合的示例

您可以使用 `include` 将新作业添加到构建矩阵中。 任何不匹配包含配置都会添加到矩阵中。 例如，如果您想要使用 `node` 版本 14 在多个操作系统上构建，但在 Ubuntu 上需要一个使用节点版本 15 的额外实验性作业，则可使用 `include` 指定该额外作业。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [14]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

#### 从矩阵中排除配置的示例

您可以使用 `exclude` 选项删除构建矩阵中定义的特定配置。 使用 `exclude` 删除由构建矩阵定义的作业。 作业数量是您提供的数组中所包括的操作系统 (`os`) 数量减去所有减项 (`exclude`) 后的叉积。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    exclude:
      # excludes node 8 on macOS
      - os: macos-latest
        node: 8
```
{% endraw %}

{% note %}

**注意：**所有 `include` 组合在 `exclude` 后处理。 这允许您使用 `include` 添加回以前排除的组合。

{% endnote %}

##### 在矩阵中使用环境变量

您可以使用 `include` 键为每个测试组合添加自定义环境变量。 然后，您可以在后面的步骤中引用自定义环境变量。

{% data reusables.github-actions.matrix-variable-example %}

### `jobs.<job_id>.strategy.fail-fast`

设置为 `true` 时，如果任何 `matrix` 作业失败，{% data variables.product.prodname_dotcom %} 将取消所有进行中的作业。 默认值：`true`

### `jobs.<job_id>.strategy.max-parallel`

使用 `matrix` 作业策略时可同时运行的最大作业数。 默认情况下，{% data variables.product.prodname_dotcom %} 将最大化并发运行的作业数量，具体取决于 {% data variables.product.prodname_dotcom %} 托管虚拟机上可用的运行程序。

```yaml
strategy:
  max-parallel: 2
```

### `jobs.<job_id>.continue-on-error`

防止工作流程运行在作业失败时失败。 设置为 `true` 以允许工作流程运行在此作业失败时通过。

#### 防止特定失败的矩阵作业导致工作流程运行失败的示例

您可以允许作业矩阵中的特定任务失败，但工作流程运行不失败。 例如， 只允许 `node` 设置为 `15` 的实验性作业失败，而不允许工作流程运行失败。

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-18.04]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

### `jobs.<job_id>.container`

用于运行作业中尚未指定容器的任何步骤的容器。 如有步骤同时使用脚本和容器操作，则容器操作将运行为同一网络上使用相同卷挂载的同级容器。

若不设置 `container`，所有步骤将直接在 `runs-on` 指定的主机上运行，除非步骤引用已配置为在容器中运行的操作。

#### 示例

```yaml
jobs:
  my_job:
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
```

只指定容器映像时，可以忽略 `image` 关键词。

```yaml
jobs:
  my_job:
    container: node:14.16
```

### `jobs.<job_id>.container.image`

要用作运行操作的容器的 Docker 图像。 值可以是 Docker Hub 映像名称或{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}公共{% endif %}注册表名称。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

### `jobs.<job_id>.container.credentials`

{% data reusables.actions.registry-credentials %}

#### 示例

{% raw %}
```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.ghcr_token }}
```
{% endraw %}
{% endif %}

### `jobs.<job_id>.container.env`

设置容器中环境变量的 `map`。

### `jobs.<job_id>.container.ports`

设置要在容器上显示的端口 `array`。

### `jobs.<job_id>.container.volumes`

设置要使用的容器卷的 `array`。 您可以使用卷分享作业中服务或其他步骤之间的数据。 可以指定命名的 Docker 卷、匿名的 Docker 卷或主机上的绑定挂载。

要指定卷，需指定来源和目标路径：

`<source>:<destinationPath>`.

`<source>` 是主机上的卷名称或绝对路径，`<destinationPath>` 是容器中的绝对路径。

#### 示例

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.container.options`

附加 Docker 容器资源选项。 有关选项列表，请参阅“[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)”。

### `jobs.<job_id>.services`

{% data reusables.github-actions.docker-container-os-support %}

用于为工作流程中的作业托管服务容器。 服务容器可用于创建数据库或缓存服务（如 Redis）。 运行器自动创建 Docker 网络并管理服务容器的生命周期。

如果将作业配置为在容器中运行，或者步骤使用容器操作，则无需映射端口来访问服务或操作。 Docker 会自动在同一个 Docker 用户定义的桥接网络上的容器之间显示所有端口。 您可以直接引用服务容器的主机名。 主机名自动映射到为工作流程中的服务配置的标签名称。

如果配置作业直接在运行器机器上运行，且您的步骤不使用容器操作，则必须将任何必需的 Docker 服务容器端口映射到 Docker 主机（运行器机器）。 您可以使用 localhost 和映射的端口访问服务容器。

有关网络服务容器之间差异的更多信息，请参阅“[关于服务容器](/actions/automating-your-workflow-with-github-actions/about-service-containers)”。

#### 使用 localhost 的示例

此示例创建分别用于 nginx 和 redis 的两项服务。 指定 Docker 主机端口但不指定容器端口时，容器端口将随机分配给空闲端口。 {% data variables.product.prodname_dotcom %} 在 {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} 上下文中设置分配的容器端口。 在此示例中，可以使用 {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} 和 {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} 上下文访问服务容器端口。

```yaml
services:
  nginx:
    image: nginx
    # Map port 8080 on the Docker host to port 80 on the nginx container
    ports:
      - 8080:80
  redis:
    image: redis
    # Map TCP port 6379 on Docker host to a random free port on the Redis container
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

要用作运行操作的服务容器的 Docker 图像。 值可以是 Docker Hub 映像名称或{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}公共{% endif %}注册表名称。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### 示例

{% raw %}
```yaml
services:
  myservice1:
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.ghcr_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}
{% endif %}

### `jobs.<job_id>.services.<service_id>.env`

在服务容器中设置环境变量的 `map`。

### `jobs.<job_id>.services.<service_id>.ports`

设置要在服务容器上显示的端口 `array`。

### `jobs.<job_id>.services.<service_id>.volumes`

设置要使用的服务容器卷的 `array`。 您可以使用卷分享作业中服务或其他步骤之间的数据。 可以指定命名的 Docker 卷、匿名的 Docker 卷或主机上的绑定挂载。

要指定卷，需指定来源和目标路径：

`<source>:<destinationPath>`.

`<source>` 是主机上的卷名称或绝对路径，`<destinationPath>` 是容器中的绝对路径。

#### 示例

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

附加 Docker 容器资源选项。 有关选项列表，请参阅“[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)”。

### 过滤器模式备忘清单

您可以在路径、分支和标记过滤器中使用特殊字符。

- `*`： 匹配零个或多个字符，但不匹配 `/` 字符。 例如，`Octo*` 匹配 `Octocat`。
- `**`： 匹配零个或多个任何字符。
- `?`：匹配零个或一个字符。 例如 `Octoc?t` 匹配 `Octocat`。
- `+`: 匹配一个或多个前置字符。
- `[]` 匹配列在括号中或包含在范围内的一个字符。 范围只能包含 `a-z`、`A-Z` 和 `0-9`。 例如，范围 `[0-9a-z]` 匹配任何数字或小写字母。 例如，`[CB]at` 匹配 `Cat` 或 `Bat`，`[1-2]00` 匹配 `100` 和 `200`。
- `!`：在模式开始时，它将否定以前的正模式。 如果不是第一个字符，它就没有特殊的意义。

字符 `*`、`[` 和 `!` 是 YAML 中的特殊字符。 如果模式以 `*`、`[` 或 `!` 开头，必须用引号括住模式。

```yaml
# Valid
- '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
- **/README.md
```

有关分支、标记和路径过滤语法的更多详细，请参阅 "[`on.<push|pull_request>.<branches|tags>`](#onpushpull_requestbranchestags)" 和 "[`on.<push|pull_request>.paths`](#onpushpull_requestpaths)"。

#### 匹配分支和标记的模式

| 模式                                                     | 描述                                                                   | 示例匹配                                                                                                                  |
| ------------------------------------------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `feature/*`                                            | `*` 通配符匹配任何字符，但不匹配斜杠 (`/`)。                                          | `feature/my-branch`<br/><br/>`feature/your-branch`                                                        |
| `feature/**`                                           | `**` 通配符匹配任何字符，包括分支和标记名称中的斜杠 (`/`)。                                  | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octcat` | 匹配分支或标记名称的确切名称。                                                      | `main`<br/><br/>`releases/mona-the-octocat`                                                               |
| `'*'`                                                  | 匹配所有不包含斜杠 (`/`) 的分支和标记名称。 `*` 字符是 YAML 中的特殊字符。 当模式以 `*` 开头时，您必须使用引号。 | `main`<br/><br/>`releases`                                                                                |
| `'**'`                                                 | 匹配所有分支和标记名称。 这是不使用 `branches` or `tags` 过滤器时的默认行为。                   | `all/the/branches`<br/><br/>`every/tag`                                                                   |
| `'*feature'`                                           | `*` 字符是 YAML 中的特殊字符。 当模式以 `*` 开头时，您必须使用引号。                           | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature`                                   |
| `v2*`                                                  | 匹配以 `v2` 开头的分支和标记名称。                                                 | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9`                                                          |
| `v[12].[0-9]+.[0-9]+`                                  | 将所有语义版本控制分支和标记与主要版本 1 或 2 匹配                                         | `v1.10.1`<br/><br/>`v2.0.0`                                                                               |

#### 匹配文件路径的模式

路径模式必须匹配整个路径，并从仓库根开始。

| 模式                                                                      | 匹配描述                                                                   | 示例匹配                                                                                                                     |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `'*'`                                                                   | `*` 通配符匹配任何字符，但不匹配斜杠 (`/`)。 `*` 字符是 YAML 中的特殊字符。 当模式以 `*` 开头时，您必须使用引号。 | `README.md`<br/><br/>`server.rb`                                                                             |
| `'*.jsx?'`                                                              | `?` 个字符匹配零个或一个前缀字符。                                                    | `page.js`<br/><br/>`page.jsx`                                                                                |
| `'**'`                                                                  | The `**` 通配符匹配任何字符，包括斜杠 (`/`)。 这是不使用 `path` 过滤器时的默认行为。                 | `all/the/files.md`                                                                                                       |
| `'*.js'`                                                                | `*` 通配符匹配任何字符，但不匹配斜杠 (`/`)。 匹配仓库根目录上的所有 `.js` 文件。                      | `app.js`<br/><br/>`index.js`                                                                                 |
| `'**.js'`                                                               | 匹配仓库中的所有 `.js` 文件。                                                     | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js`                                       |
| `docs/*`                                                                | 仓库根目录下 `docs` 根目录中的所有文件。                                               | `docs/README.md`<br/><br/>`docs/file.txt`                                                                    |
| `docs/**`                                                               | 仓库根目录下 `/docs` 目录中的任何文件。                                               | `docs/README.md`<br/><br/>`docs/mona/octocat.txt`                                                            |
| `docs/**/*.md`                                                          | `docs` 目录中任意位置具有 `.md` 后缀的文件。                                          | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`          |
| `'**/docs/**'`                                                          | 仓库中任意位置 `docs` 目录下的任何文件。                                               | `/docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`            |
| `'**/README.md'`                                                        | 仓库中任意位置的 README.md 文件。                                                 | `README.md`<br/><br/>`js/README.md`                                                                          |
| `'**/*src/**'`                                                          | 仓库中任意位置具有 `src` 后缀的文件夹中的任何文件。                                          | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`                                                              |
| `'**/*-post.md'`                                                        | 仓库中任意位置具有后缀 `-post.md` 的文件。                                            | `my-post.md`<br/><br/>`path/their-post.md`                                                                   |
| `'**/migrate-*.sql'`                                                    | 仓库中任意位置具有前缀 `migrate-` 和后缀 `.sql` 的文件。                                 | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql`             |
| `*.md`<br/><br/>`!README.md`                                | 模式前使用感叹号 (`!`) 对其进行否定。 当文件与模式匹配并且也匹配文件后面定义的否定模式时，则不包括该文件。              | `hello.md`<br/><br/>_Does not match_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | 按顺序检查模式。 否定前一个模式的模式将重新包含文件路径。                                          | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`                                            |
