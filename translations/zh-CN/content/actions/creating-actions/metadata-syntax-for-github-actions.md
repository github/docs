---
title: GitHub Actions 的元数据语法
shortTitle: Metadata syntax
intro: 可创建操作来执行存储库中的任务。 操作需要使用 YAML 语法的元数据文件。
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 9bde653dd7f8b4d04831afa38d29db7300255f57
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107411'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.prodname_actions %} 的 YAML 语法

所有操作都需要元数据文件。 元数据文件名必须为 `action.yml` 或 `action.yaml`。 元数据文件中的数据定义操作的输入、输出和运行配置。

操作元数据文件使用 YAML 语法。 如果不熟悉 YAML，可以阅读“[用五分钟的时间来了解 YAML](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)”。

## `name`

（必需）操作的名称。 {% data variables.product.prodname_dotcom %} 在“操作”选项卡中显示 `name`，以帮助直观地识别每个作业中的操作。

## `author`

（可选）操作创建者的姓名。

## `description`

（必需）操作的简短说明。

## `inputs`

（可选）可通过输入参数指定操作预期在运行时使用的数据。 {% data variables.product.prodname_dotcom %} 将输入参数存储为环境变量。 大写的输入 ID 在运行时转换为小写。 建议使用小写输入 ID。

### 示例：指定输入

此示例配置两个输入：numOctocats 和 octocatEyeColor。 numOctocats 输入不是必要的，默认值为 '1'。 octocatEyeColor 输入是必要的，没有默认值。 使用此操作的工作流文件必须使用 `with` 关键字来设置 octocatEyeColor 的输入值。 有关 `with` 语法的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)”。

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

当在工作流文件中指定输入或使用默认输入值时，{% data variables.product.prodname_dotcom %} 将为输入创建一个名为 `INPUT_<VARIABLE_NAME>` 的环境变量。 创建的环境变量将输入名称转换为大写字母并将空格替换为 `_` 字符。

如果操作是使用 [composite](/actions/creating-actions/creating-a-composite-action) 编写的，则不会自动获得 `INPUT_<VARIABLE_NAME>`。 如果不进行转换，您可以手动更改这些输入。

若要访问 Docker 容器操作中的环境变量，必须使用操作元数据文件中的关键字 `args` 传递输入。 有关 Docker 容器操作的操作元数据文件的详细信息，请参阅“[创建 Docker 容器操作](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)”。

例如，如果工作流定义了 `numOctocats` 和 `octocatEyeColor` 输入，则操作代码可以使用 `INPUT_NUMOCTOCATS` 和 `INPUT_OCTOCATEYECOLOR` 环境变量读取输入的值。

### `inputs.<input_id>`

（必需）与输入关联的 `string` 标识符。 `<input_id>` 的值为输入元数据的映射。 `<input_id>` 必须是 `inputs` 对象中的唯一标识符。 `<input_id>` 必须以字母或 `_` 开头，并且只能包含字母数字字符、`-` 或 `_`。

### `inputs.<input_id>.description`

（必需）输入参数的 `string` 说明。

### `inputs.<input_id>.required`

（可选）一个 `boolean`，用于指示操作是否需要输入参数。 如果需要参数，则将其设置为 `true`。

### `inputs.<input_id>.default`

（可选）表示默认值的 `string`。 当工作流程文件中未指定输入参数时使用默认值。

### `inputs.<input_id>.deprecationMessage`

（可选）如果使用了输入参数，则会将此 `string` 记录为警告消息。 您可以使用此警告通知用户输入已被弃用，并提及任何其他替代方式。

## 用于 Docker 容器和 JavaScript 操作的 `outputs`

（可选）可通过输出参数声明操作设置的数据。 稍后在工作流程中运行的操作可以使用以前运行操作中的输出数据集。  例如，如果有操作执行两个输入的相加 (x + y = z)，则该操作可能输出总和 (z)，用作其他操作的输入。

{% data reusables.actions.output-limitations %}

如果不在操作元数据文件中声明输出，您仍然可以设置输出并在工作流程中使用它们。 有关在操作中设置输出的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流命令](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)”。

### 示例：声明 Docker 容器和 JavaScript 操作的输出

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

（必需）与输出关联的 `string` 标识符。 `<output_id>` 的值为输出元数据的映射。 `<output_id>` 必须是 `outputs` 对象中的唯一标识符。 `<output_id>` 必须以字母或 `_` 开头，并且只能包含字母数字字符、`-` 或 `_`。

### `outputs.<output_id>.description`

（必需）输出参数的 `string` 说明。

## 用于组合操作的 `outputs`

（可选）`outputs` 使用与 `outputs.<output_id>` 和 `outputs.<output_id>.description` 相同的参数（请参阅“[用于 Docker 容器和 JavaScript 操作的 `outputs`](#outputs-for-docker-container-and-javascript-actions)”），但也包括 `value` 令牌。

{% data reusables.actions.output-limitations %}

### 示例：声明复合操作的 outputs

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
{%- endif %}{% raw %}
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

（必需）输出参数将映射到的值。 可以将此项设置为 `string` 或带有上下文的表达式。 例如，可以使用 `steps` 上下文将输出的 `value` 设置为步骤的输出值。

有关如何使用上下文语法的详细信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”。

## `runs`

（必需）指定该操作是 JavaScript 操作、组合操作还是 Docker 容器操作，以及操作的执行方式。

## JavaScript 操作的 `runs`

（必需）配置操作代码的路径和用于执行代码的运行时。

### 示例：使用 Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

（必需）用于执行 [`main`](#runsmain) 中指定的代码的运行时。

- 对于 Node.js v12，请使用 `node12`。{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
- 对 Node.js v16.{% endif %}，请使用 `node16`

### `runs.main`

（必需）包含操作代码的文件。 [`using`](#runsusing) 中指定的运行时执行此文件。

### `runs.pre`

（可选）允许在 `main:` 操作开始之前在作业启动时运行脚本。 例如，可以使用 `pre:` 运行先决条件安装脚本。 使用 [`using`](#runsusing) 语法指定的运行时将执行此文件。 `pre:` 操作始终默认运行，但你也可使用 [`runs.pre-if`](#runspre-if) 替代该操作。

在此示例中，`pre:` 操作运行名为 `setup.js` 的脚本：

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

（可选）允许定义 `pre:` 操作执行的条件。 仅当满足 `pre-if` 中的条件时，才会运行 `pre:` 操作。 如果未设置此项，则 `pre-if` 默认为 `always()`。 在 `pre-if` 中，状态检查函数根据作业的状态（而不是操作的状态）进行评估。

请注意，`step` 上下文不可用，因为尚未运行任何步骤。

在此示例中，`cleanup.js` 仅在基于 Linux 的运行器上运行：

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

（可选）允许在 `main:` 操作完成后在作业结束时运行脚本。 例如，可使用 `post:` 终止某些进程或删除不需要的文件。 使用 [`using`](#runsusing) 语法指定的运行时将执行此文件。

在此示例中，`post:` 操作运行名为 `cleanup.js` 的脚本：

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

`post:` 操作始终默认运行，但你也可使用 `post-if` 替代该操作。

### `runs.post-if`

（可选）允许定义 `post:` 操作执行的条件。 仅当满足 `post-if` 中的条件时，才会运行 `post:` 操作。 如果未设置此项，则 `post-if` 默认为 `always()`。 在 `post-if` 中，状态检查函数根据作业的状态（而不是操作的状态）进行评估。

例如，此 `cleanup.js` 将仅在基于 Linux 的运行器上运行：

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## 用于组合操作的 `runs`

（必需）配置组合操作的路径。

### `runs.using`

（必需）必须将此值设置为 `'composite'`。

### `runs.steps`

（必需）计划在此操作中运行的步骤。 这些步骤可以是 `run` 步骤，也可以是 `uses` 步骤。

#### `runs.steps[*].run`

（可选）要运行的命令。 此命令可以是内联命令，也可以是操作存储库中的脚本：

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

也可使用 `$GITHUB_ACTION_PATH`：

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

有关详细信息，请参阅“[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。

#### `runs.steps[*].shell`

（可选）要在其中运行命令的 shell。 可以使用[此处](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell)列出的任何 shell。 如果设置了 `run`，则为必需项。

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

（可选）可以使用 `if` 条件来阻止步骤运行，除非满足条件。 您可以使用任何支持上下文和表达式来创建条件。

{% data reusables.actions.expression-syntax-if %} 有关详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

示例：使用上下文

 此步骤仅在事件类型为 `pull_request` 且事件操作为 `unassigned` 时运行。

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

示例：使用状态检查函数

`my backup step` 仅在组合操作的上一步失败时运行。 有关详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions#status-check-functions)”。

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

（可选）组合步骤的名称。

#### `runs.steps[*].id`

（可选）步骤的唯一标识符。 可以使用 `id` 在上下文中引用该步骤。 有关详细信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”。

#### `runs.steps[*].env`

（可选）仅为该步骤设置环境变量的 `map`。 如果要修改存储在工作流中的环境变量，请在组合步骤中使用 `echo "{name}={value}" >> $GITHUB_ENV`。

#### `runs.steps[*].working-directory`

（可选）指定在其中运行命令的工作目录。

#### `runs.steps[*].uses`

（可选）选择要作为作业中步骤的一部分运行的操作。 操作是一种可重复使用的代码单位。 可以使用在与工作流、公共存储库或[已发布的 Docker 容器映像](https://hub.docker.com/)相同的存储库中定义的操作。

强烈建议指定 Git ref、SHA 或 Docker 标记编号来包含所用操作的版本。 如果不指定版本，在操作所有者发布更新时可能会中断您的工作流程或造成非预期的行为。
- 使用已发行操作版本的 SHA 对于稳定性和安全性是最安全的。
- 使用特定主要操作版本可在保持兼容性的同时接收关键修复和安全补丁。 还可确保您的工作流程继续工作。
- 使用操作的默认分支可能很方便，但如果有人新发布具有突破性更改的主要版本，您的工作流程可能会中断。

某些操作需要必须使用 [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith) 关键字设置的输入。 请查阅操作的自述文件，确定所需的输入。

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

（可选）由操作定义的输入参数的 `map`。 每个输入参数都是一个键/值对。 有关详细信息，请参阅[示例：指定输入](#example-specifying-inputs)。

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat
```

{% ifversion ghes > 3.5 or ghae > 3.5 %}

#### `runs.steps[*].continue-on-error`

可选  步骤失败时，防止操作失败。 设置为 `true` 以在此步骤失败时让操作能够通过。

{% endif %}

## 用于 Docker 容器操作的 `runs`

（必需）配置用于 Docker 容器操作的映像。

### 示例：在仓库中使用 Dockerfile

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### 示例：使用公共 Docker 注册表容器

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

（必需）必须将此值设置为 `'docker'`。

### `runs.pre-entrypoint`

（可选）允许在 `entrypoint` 操作开始之前运行脚本。 例如，可以使用 `pre-entrypoint:` 运行先决条件安装脚本。 {% data variables.product.prodname_actions %} 使用 `docker run` 启动此操作，并在使用相同基础映像的新容器中运行脚本。 这意味着运行时状态与主 `entrypoint` 容器不同，所需的任何状态都必须在工作区、`HOME` 中或作为 `STATE_` 变量可供访问。 `pre-entrypoint:` 操作始终默认运行，但你也可使用 [`runs.pre-if`](#runspre-if) 替代该操作。

使用 [`using`](#runsusing) 语法指定的运行时将执行此文件。

在此示例中，`pre-entrypoint:` 操作运行名为 `setup.sh` 的脚本：

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

（必需）要用作运行操作的容器的 Docker 映像。 该值可以是 Docker 基础映像名称、存储库中的本地 `Dockerfile`，也可以是 Docker Hub 或其他注册表中的公共映像。 若要引用存储库本地的 `Dockerfile`，文件必须命名为 `Dockerfile`，并且必须使用操作元数据文件的相对路径。 `docker` 应用程序将执行此文件。

### `runs.env`

（可选）指定要在容器环境中设置的环境变量的键/值映射。

### `runs.entrypoint`

（可选）如果已指定该项，则替代 `Dockerfile` 中的 Docker `ENTRYPOINT`，否则对其进行设置。 如果 `Dockerfile` 未指定 `ENTRYPOINT` 或要替代 `ENTRYPOINT` 指令，请使用 `entrypoint`。 如果省略 `entrypoint`，将执行在 Docker `ENTRYPOINT` 指令中指定的命令。 Docker `ENTRYPOINT` 指令具有 shell 形式和 exec 形式 。 Docker `ENTRYPOINT` 文档建议使用 `ENTRYPOINT` 指令的 exec 形式。

有关 `entrypoint` 如何执行的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的Dockerfile 支持](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)”。

### `runs.post-entrypoint`

（可选）允许在 `runs.entrypoint` 操作完成后运行清理脚本。 {% data variables.product.prodname_actions %} 使用 `docker run` 启动此操作。 由于 {% data variables.product.prodname_actions %} 使用相同的基础映像在新容器内运行脚本，因此运行时状态与主 `entrypoint` 容器不同。 可以在工作区、`HOME` 或 `STATE_` 变量中访问所需的任何状态。 `post-entrypoint:` 操作始终默认运行，但你也可使用 [`runs.post-if`](#runspost-if) 替代该操作。

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

（可选）用于定义 Docker 容器的输入的字符串数组。 输入可包含硬编码的字符串。 {% data variables.product.prodname_dotcom %} 在容器启动时将 `args` 传递到容器的 `ENTRYPOINT`。

`args` 用于代替 `Dockerfile` 中的 `CMD` 指令。 如果在 `Dockerfile` 中使用 `CMD`，请使用按偏好排序的指南：

{% data reusables.actions.dockerfile-guidelines %}

如果需要将环境变量传递到操作中，请确保操作运行命令 shell 以执行变量替换。 例如，如果 `entrypoint` 属性设置为 `"sh -c"`，则 `args` 将在命令 shell 中运行。 此外，如果 `Dockerfile` 使用 `ENTRYPOINT` 运行相同的命令 (`"sh -c"`)，则 `args` 也将在命令 shell 中执行。

有关将 `CMD` 指令与 {% data variables.product.prodname_actions %} 结合使用的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的 Dockerfile 支持](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)”。

#### 示例：为 Docker 容器定义参数

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

**可选** 可使用颜色和 [Feather](https://feathericons.com/) 图标来创建徽章，以个性化设置和区分操作。 在 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) 中，操作名称旁边会显示徽章。

### 示例：为操作配置品牌宣传

```yaml
branding:
  icon: 'award'
  color: 'green'
```

### `branding.color`

徽章的背景颜色。 可以是以下选项之一：`white`、`yellow`、`blue`、`green`、`orange`、`red`、`purple` 或 `gray-dark`。

### `branding.icon`

要使用的 v4.28.0 [Feather](https://feathericons.com/) 图标的名称。 省略了品牌图标以及以下内容：

<table>
<tr>
<td>咖啡</td>
<td>列</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>六边形</td>
<td>key</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>工具 (tool)</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

以下是当前支持的所有图标的详尽列表：

<!--
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo.
-->

<table>
<tr>
<td>activity</td>
<td>airplay</td>
<td>alert-circle</td>
<td>alert-octagon</td>
</tr>
<tr>
<td>alert-triangle</td>
<td>align-center</td>
<td>align-justify</td>
<td>align-left</td>
</tr>
<tr>
<td>align-right</td>
<td>定位点</td>
<td>aperture</td>
<td>存档</td>
</tr>
<tr>
<td>arrow-down-circle</td>
<td>arrow-down-left</td>
<td>arrow-down-right</td>
<td>arrow-down</td>
</tr>
<tr>
<td>arrow-left-circle</td>
<td>arrow-left</td>
<td>arrow-right-circle</td>
<td>arrow-right</td>
</tr>
<tr>
<td>arrow-up-circle</td>
<td>arrow-up-left</td>
<td>arrow-up-right</td>
<td>向上箭头</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>电池</td>
<td>bell-off</td>
<td>响铃</td>
</tr>
<tr>
<td>蓝牙</td>
<td>粗体</td>
<td>book-open</td>
<td>book</td>
</tr>
<tr>
<td>书签 (bookmark)</td>
<td>box</td>
<td>briefcase</td>
<td>日历</td>
</tr>
<tr>
<td>camera-off</td>
<td>照相机</td>
<td>强制转换</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>选中</td>
<td>chevron-down</td>
<td>chevron-left</td>
</tr>
<tr>
<td>chevron-right</td>
<td>chevron-up</td>
<td>chevrons-down</td>
<td>chevrons-left</td>
</tr>
<tr>
<td>chevrons-right</td>
<td>chevrons-up</td>
<td>circle</td>
<td>剪贴板</td>
</tr>
<tr>
<td>clock</td>
<td>cloud-drizzle</td>
<td>cloud-lightning</td>
<td>cloud-off</td>
</tr>
<tr>
<td>cloud-rain</td>
<td>cloud-snow</td>
<td>cloud</td>
<td>code</td>
</tr>
<tr>
<td>命令</td>
<td>指南针</td>
<td>copy</td>
<td>corner-down-left</td>
</tr>
<tr>
<td>corner-down-right</td>
<td>corner-left-down</td>
<td>corner-left-up</td>
<td>corner-right-down</td>
</tr>
<tr>
<td>corner-right-up</td>
<td>corner-up-left</td>
<td>corner-up-right</td>
<td>cpu</td>
</tr>
<tr>
<td>credit-card</td>
<td>裁剪</td>
<td>crosshair</td>
<td>database</td>
</tr>
<tr>
<td>delete</td>
<td>disc</td>
<td>dollar-sign</td>
<td>download-cloud</td>
</tr>
<tr>
<td>下载</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>编辑</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>fast-forward</td>
<td>feather</td>
<td>file-minus</td>
<td>file-plus</td>
</tr>
<tr>
<td>file-text</td>
<td>file</td>
<td>film</td>
<td>filter</td>
</tr>
<tr>
<td>标志</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>文件夹</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>  git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
<td>hard-drive</td>
</tr>
<tr>
<td>hash</td>
<td>headphones</td>
<td>heart</td>
<td>help-circle</td>
</tr>
<tr>
<td>主页</td>
<td>image</td>
<td>inbox</td>
<td>info</td>
</tr>
<tr>
<td>斜体</td>
<td>图层</td>
<td>布局</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>链接</td>
<td>list</td>
<td>loader</td>
</tr>
<tr>
<td>锁 (lock)</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>“菜单”</td>
<td>message-circle</td>
<td>message-square</td>
<td>mic-off</td>
</tr>
<tr>
<td>mic</td>
<td>minimize-2</td>
<td>最小化</td>
<td>minus-circle</td>
</tr>
<tr>
<td>minus-square</td>
<td>minus</td>
<td>监视</td>
<td>moon</td>
</tr>
<tr>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>移动</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>导航</td>
<td>octagon</td>
<td>包</td>
</tr>
<tr>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
<td>%</td>
</tr>
<tr>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
<td>phone-missed</td>
</tr>
<tr>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
<td>pie-chart</td>
</tr>
<tr>
<td>play-circle</td>
<td>玩游戏</td>
<td>plus-circle</td>
<td>plus-square</td>
</tr>
<tr>
<td>plus</td>
<td>pocket</td>
<td>power</td>
<td>打印机</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>repeat</td>
</tr>
<tr>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>rss</td>
</tr>
<tr>
<td>保存</td>
<td>scissors</td>
<td>search</td>
<td>发送</td>
</tr>
<tr>
<td>server</td>
<td>设置</td>
<td>share-2</td>
<td>共享</td>
</tr>
<tr>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
<td>shopping-cart</td>
</tr>
<tr>
<td>随机选择</td>
<td>边栏</td>
<td>skip-back</td>
<td>skip-forward</td>
</tr>
<tr>
<td>slash</td>
<td>滑块</td>
<td>智能手机</td>
<td>扬声器</td>
</tr>
<tr>
<td>square</td>
<td>星号键</td>
<td>stop-circle</td>
<td>周六</td>
</tr>
<tr>
<td>sunrise</td>
<td>日落</td>
<td>平板电脑</td>
<td>标记</td>
</tr>
<tr>
<td>目标</td>
<td>terminal</td>
<td>thermometer</td>
<td>thumbs-down</td>
</tr>
<tr>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
<td>trash-2</td>
</tr>
<tr>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
<td>三角形</td>
</tr>
<tr>
<td>卡车</td>
<td>电视</td>
<td>类型</td>
<td>雨伞</td>
</tr>
<tr>
<td>下划线</td>
<td>解锁</td>
<td>upload-cloud</td>
<td>upload</td>
</tr>
<tr>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
<td>user-x</td>
</tr>
<tr>
<td>user</td>
<td>users</td>
<td>video-off</td>
<td>视频</td>
</tr>
<tr>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>卷</td>
<td>查看</td>
<td>wifi-off</td>
<td>wifi</td>
</tr>
<tr>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
<td>x</td>
</tr>
<tr>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
<td>zoom-out</td>
</tr>
</table>
