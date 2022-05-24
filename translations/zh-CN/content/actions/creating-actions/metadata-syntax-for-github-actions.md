---
title: GitHub Actions 的元数据语法
shortTitle: 元数据语法
intro: 您可以创建操作来执行仓库中的任务。 操作需要使用 YAML 语法的元数据文件。
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.prodname_actions %} 的 YAML 语法

所有操作都需要元数据文件。 元数据文件名必须是 `action.yml` 或 `action.yaml`。 元数据文件中的数据定义操作的输入、输出和运行配置。

操作元数据文件使用 YAML 语法。 如果您是 YAML 的新用户，请参阅“[五分钟了解 YAML](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)”。

## `name`

**必要** 操作的名称。 {% data variables.product.prodname_dotcom %} 在 **Actions（操作）**选项卡中显示 `name`，帮助从视觉上识别每项作业中的操作。

## `作者`

**可选** 操作的作者姓名。

## `说明`

**必要** 操作的简短描述。

## `inputs`

**可选** 输入参数用于指定操作在运行时预期使用的数据。 {% data variables.product.prodname_dotcom %} 将输入参数存储为环境变量。 大写的输入 ID 在运行时转换为小写。 建议使用小写输入 ID。

### 示例：指定输入

此示例配置两个输入：numOctocats 和 octocatEyeColor。 numOctocats 输入不是必要的，默认值为 '1'。 octocatEyeColor 输入是必要的，没有默认值。 使用此操作的工作流程文件必须使用 `with` 关键词来设置 octocatEyeColor 的输入值。 有关 `with` 语法的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)”。

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

在指定工作流程文件中输入或者使用默认输入值时，{% data variables.product.prodname_dotcom %} 将为名称为 `INPUT_<VARIABLE_NAME>` 的输入创建环境变量。 创建的环境变量将输入名称转换为大写，并将空格替换为 `_` 字符。

如果该操作是使用 [复合](/actions/creating-actions/creating-a-composite-action)编写的，则它不会自动获得 `INPUT_<VARIABLE_NAME>`。 如果不进行转换，您可以手动更改这些输入。

要访问 Docker 容器操作中的环境变量，您必须使用操作元数据文件中的关键字 `args` 传递输入。 有关 Docker 容器操作的操作元数据文件的更多信息，请参阅“[创建 Docker 容器操作](/articles/creating-a-docker-container-action#creating-an-action-metadata-file)”。

例如，如果工作流程定义了 `numOctocats` 和 `octocatEyeColor` 输入，操作代码可使用 `INPUT_NUMOCTOCATS` 和 `INPUT_OCTOCATEYECOLOR` 环境变量读取输入的值。

### `inputs.<input_id>`

**必要** 要与输入关联的 `string` 识别符。 `<input_id>` 的值是输入元数据的映射。 `<input_id>` 必须是 `inputs` 对象中的唯一识别符。 `<input_id>` 必须以字母或 `_` 开头，并且只能包含字母数字、`-` 或 `_`。

### `inputs.<input_id>.description`

**必要** 输入参数的 `string` 描述。

### `inputs.<input_id>.required`

**必要** 表示操作是否需要输入参数的 `boolean`。 当参数为必要时设置为 `true`。

### `inputs.<input_id>.default`

**可选** 表示默认值的 `string`。 当工作流程文件中未指定输入参数时使用默认值。

### `inputs.<input_id>.deprecationMessage`

**可选** 如果使用输入参数，此 `string` 将记录为警告消息。 您可以使用此警告通知用户输入已被弃用，并提及任何其他替代方式。

## 用于 Docker 容器和 JavaScript 操作的 `outputs`

**可选** 输出参数允许您声明操作所设置的数据。 稍后在工作流程中运行的操作可以使用以前运行操作中的输出数据集。  例如，如果有操作执行两个输入的相加 (x + y = z)，则该操作可能输出总和 (z)，用作其他操作的输入。

{% data reusables.actions.output-limitations %}

如果不在操作元数据文件中声明输出，您仍然可以设置输出并在工作流程中使用它们。 有关在操作中设置输出的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程命令](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)”。

### 示例：声明 Docker 容器和 JavaScript 操作的输出

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**必要** 要与输出关联的 `string` 识别符。 `<output_id>` 的值是输出元数据的映射。 `<output_id>` 必须是 `outputs` 对象中的唯一识别符。 `<output_id>` 必须以字母或 `_` 开头，并且只能包含字母数字、`-` 或 `_`。

### `outputs.<output_id>.description`

**必要** 输出参数的 `string` 描述。

## 用于复合操作的 `outputs`

**Optional** `outputs` use the same parameters as `outputs.<output_id>` and `outputs.<output_id>.description` (see "[`outputs` for Docker container and JavaScript actions](#outputs-for-docker-container-and-javascript-actions)"), but also includes the `value` token.

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
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**必要** 输出参数将会映射到的值。 您可以使用上下文将此设置为 `string` 或表达式。 例如，您可以使用 `steps` 上下文将输出的 `value` 设置为步骤的输出值。

有关如何使用上下文语法的更多信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”。

## `runs`

**必要** 指定这是 JavaScript 操作、复合操作还是 Docker 容器操作以及操作的执行方式。

## 用于 JavaScript 操作的 `runs`

**必要** 配置操作代码的路径和用于执行代码的运行时。

### 示例：使用 Node.js {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**必要** 用于执行 [`main`](#runsmain) 中指定的代码的支行时。

- 将 `node12` 用于 Node.js v12。{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
- 将 `node16` 用于 Node.js v16。{% endif %}

### `runs.main`

**必要** 包含操作代码的文件。 [`using`](#runsusing) 中指定的运行时执行此文件。

### `runs.pre`

**可选** 允许您在 `main:` 操作开始之前，在作业开始时运行脚本。 例如，您可以使用 `pre:` 运行基本要求设置脚本。 使用 [`using`](#runsusing) 语法指定的运行时将执行此文件。 `pre:` 操作始终默认运行，但您可以使用 [`runs.pre-if`](#runspre-if) 覆盖该设置。

在此示例中，`pre:` 操作运行名为 `setup.js` 的脚本：

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**可选** 允许您定义 `pre:` 操作执行的条件。 `pre:` 操作仅在满足 `pre-if` 中的条件后运行。 如果未设置，则 `pre-if` 默认使用 `always()`。 在 `pre-if` 中，状态检查函数根据作业的状态而不是操作自己的状态进行评估。

请注意，`step` 上下文不可用，因为尚未运行任何步骤。

在此示例中，`cleanup.js` 仅在基于 Linux 的运行器上运行：

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**可选** 允许您在 `main:` 操作完成后，在作业结束时运行脚本。 例如，您可以使用 `post:` 终止某些进程或删除不需要的文件。 使用 [`using`](#runsusing) 语法指定的运行时将执行此文件。

在此示例中，`post:` 操作会运行名为 `cleanup.js` 的脚本：

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

`post:` 操作始终默认运行，但您可以使用 `post-if` 覆盖该设置。

### `runs.post-if`

**可选** 允许您定义 `post:` 操作执行的条件。 `post:` 操作仅在满足 `post-if` 中的条件后运行。 如果未设置，则 `post-if` 默认使用 `always()`。 在 `post-if` 中，状态检查函数根据作业的状态而不是操作自己的状态进行评估。

例如，此 `cleanup.js` 仅在基于 Linux 的运行器上运行：

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## 用于复合操作的 `runs`

**必要** 配置组合操作的路径。

### `runs.using`

**必要** 必须将此值设置为 `'composite'`。

### `runs.steps`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**必要** 您计划在此操作中的步骤。 这些步骤可以是 `run` 步骤或 `uses` 步骤。
{% else %}
**必要** 您计划在此操作中的步骤。
{% endif %}

#### `runs.steps[*].run`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**可选** 您想要运行的命令。 这可以是内联的，也可以是操作仓库中的脚本：
{% else %}
**必要** 您想要运行的命令。 这可以是内联的，也可以是操作仓库中的脚本：
{% endif %}

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

或者，您也可以使用 `$GITHUB_ACTION_PATH`：

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

更多信息请参阅“[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)”。

#### `runs.steps[*].shell`

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
**可选** 您想要在其中运行命令的 shell。 您可以使用[这里](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell)列出的任何 shell。 如果设置了 `run`，则必填。
{% else %}
**必要** 您想要在其中运行命令的 shell。 您可以使用[这里](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell)列出的任何 shell。 如果设置了 `run`，则必填。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
#### `runs.steps[*].if`

**可选** 您可以使用 `if` 条件使步骤仅在满足条件时才运行。 您可以使用任何支持上下文和表达式来创建条件。

{% data reusables.actions.expression-syntax-if %} 更多信息请参阅“[表达式](/actions/learn-github-actions/expressions)”。

**示例：使用上下文**

 此步骤仅在事件类型为 `pull_request` 并且事件操作为 `unassigned` 时运行。

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**示例：使用状态检查功能**

`my backup step` 仅在组合操作的上一步失败时运行。 更多信息请参阅“[表达式](/actions/learn-github-actions/expressions#status-check-functions)”。

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

**可选** 复合步骤的名称。

#### `runs.steps[*].id`

**可选** 步骤的唯一标识符。 您可以使用 `id` 引用上下文中的步骤。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”。

#### `runs.steps[*].env`

**可选** 设置环境变量的 `map` 仅用于该步骤。 如果要修改存储在工作流程中的环境变量，请在组合运行步骤中使用 `echo "{name}={value}" >> $GITHUB_ENV`。

#### `runs.steps[*].working-directory`

**可选**  指定命令在其中运行的工作目录。

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
#### `runs.steps[*].uses`

**可选**  选择作为作业步骤一部分运行的操作。 操作是一种可重复使用的代码单位。 您可以使用工作流程所在仓库中、公共仓库中或[发布 Docker 容器映像](https://hub.docker.com/)中定义的操作。

强烈建议指定 Git ref、SHA 或 Docker 标记编号来包含所用操作的版本。 如果不指定版本，在操作所有者发布更新时可能会中断您的工作流程或造成非预期的行为。
- 使用已发行操作版本的 SHA 对于稳定性和安全性是最安全的。
- 使用特定主要操作版本可在保持兼容性的同时接收关键修复和安全补丁。 还可确保您的工作流程继续工作。
- 使用操作的默认分支可能很方便，但如果有人新发布具有突破性更改的主要版本，您的工作流程可能会中断。

有些操作要求必须通过 [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith) 关键词设置输入。 请查阅操作的自述文件，确定所需的输入。

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

**可选** 输入参数的 `map` 由操作定义。 每个输入参数都是一个键/值对。  输入参数被设置为环境变量。 该变量的前缀为 INPUT_，并转换为大写。

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
{% endif %}

## 用于 Docker 容器操作的 `runs`

**必要** 配置用于 Docker 容器操作的图像。

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

**必要** 必须将此值设置为 `'docker'`。

### `runs.pre-entrypoint`

**可选** 允许您在 `entrypoint` 操作开始之前运行脚本。 例如，您可以使用 `pre-entrypoint:` 运行基本要求设置脚本。 {% data variables.product.prodname_actions %} 使用 `docker run` 启动此操作，并在使用同一基本映像的新容器中运行脚本。 这意味着运行时状态与主 `entrypoint` 容器不同，并且必须在任一工作空间中访问所需的任何状态，`HOME` 或作为 `STATE_` 变量。 `pre-entrypoint:` 操作始终默认运行，但您可以使用 [`runs.pre-if`](#runspre-if) 覆盖该设置。

使用 [`using`](#runsusing) 语法指定的运行时将执行此文件。

在此示例中，`pre-entrypoint:` 操作会运行名为 `setup.sh` 的脚本：

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

**必要** 要用作容器来运行操作的 Docker 映像。 值可以是 Docker 基本映像名称、仓库中的本地 `Dockerfile`、Docker Hub 中的公共映像或另一个注册表。 要引用仓库本地的 `Dockerfile`，文件必须命名为 `Dockerfile`，并且您必须使用操作元数据文件的相对路径。 `Docker` 应用程序将执行此文件。

### `runs.env`

**可选** 指定要在容器环境中设置的环境变量的键/值映射。

### `runs.entrypoint`

**可选** 覆盖 `Dockerfile` 中的 Docker `ENTRYPOINT`，或在未指定时设置它。 当 `Dockerfile` 未指定 `ENTRYPOINT` 或者您想要覆盖 `ENTRYPOINT` 指令时使用 `entrypoint`。 如果您省略 `entrypoint`，您在 Docker `ENTRYPOINT` 指令中指定的命令将执行。 Docker `ENTRYPOINT` 指令有 _shell_ 形式和 _exec_ 形式。 Docker `ENTRYPOINT` 文档建议使用 _exec_ 形式的 `ENTRYPOINT` 指令。

有关 `entrypoint` 如何执行的更多信息，请参阅“[Dockerfile 对 {% data variables.product.prodname_actions %} 的支持](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)”。

### `post-entrypoint`

**可选** 允许您在 `runs.entrypoint` 操作完成后运行清理脚本。 {% data variables.product.prodname_actions %} 使用 `docker run` 来启动此操作。 因为  {% data variables.product.prodname_actions %} 使用同一基本映像在新容器内运行脚本，所以运行时状态与主 `entrypoint` 容器不同。 您可以在任一工作空间中访问所需的任何状态，`HOME` 或作为 `STATE_` 变量。 `post-entrypoint:` 操作始终默认运行，但您可以使用 [`runs.post-if`](#runspost-if) 覆盖该设置。

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

**可选** 定义 Docker 容器输入的字符串数组。 输入可包含硬编码的字符串。 {% data variables.product.prodname_dotcom %} 在容器启动时将 `args` 传递到容器的 `ENTRYPOINT`。

`args` 用来代替 `Dockerfile` 中的 `CMD` 指令。 如果在 `Dockerfile` 中使用 `CMD`，请遵循按偏好顺序排序的指导方针：

{% data reusables.actions.dockerfile-guidelines %}

如果需要将环境变量传递到操作中，请确保操作运行命令 shell 以执行变量替换。 例如，如果 `entrypoint` 属性设置为 `"sh -c"`，`args` 将在命令 shell 中运行。 或者，如果 `Dockerfile` 使用 `ENTRYPOINT` 运行同一命令 (`"sh -c"`)，`args` 将在命令 shell 中执行。

有关将 `CMD` 指令与 {% data variables.product.prodname_actions %} 一起使用的更多信息，请参阅“[Dockerfile 对 {% data variables.product.prodname_actions %} 的支持](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)”。

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

您可以使用颜色和 [Feather](https://feathericons.com/) 图标创建徽章，以个性化和识别操作。 徽章显示在 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) 中的操作名称旁边。

### 示例：为操作配置品牌宣传

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

### `branding.color`

徽章的背景颜色。 可以是以下之一：`white`、`yellow`、`blue`、`green`、`orange`、`red`、`purple` 或 `gray-dark`。

### `branding.icon`

要使用的 v4.28.0 [Feather](https://feathericons.com/) 图标的名称。 省略了品牌图标以及以下内容：

<table>
<tr>
<td>coffee</td>
<td>列</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>hexagon</td>
<td>键</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>工具</td>
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
<td>活动</td>
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
<td>anchor</td>
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
<td>arrow-up</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>battery</td>
<td>bell-off</td>
<td>bell</td>
</tr>
<tr>
<td>bluetooth</td>
<td>bold</td>
<td>book-open</td>
<td>book</td>
</tr>
<tr>
<td>bookmark</td>
<td>box</td>
<td>briefcase</td>
<td>calendar</td>
</tr>
<tr>
<td>camera-off</td>
<td>camera</td>
<td>cast</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>check</td>
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
<td>clipboard</td>
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
<td>代码</td>
</tr>
<tr>
<td>命令</td>
<td>compass</td>
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
<td>crop</td>
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
<td>download</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>edit</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>facebook</td>
<td>快进</td>
<td>feather</td>
<td>file-minus</td>
</tr>
<tr>
<td>file-plus</td>
<td>file-text</td>
<td>文件</td>
<td>film</td>
</tr>
<tr>
<td>filter</td>
<td>flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
</tr>
<tr>
<td>folder</td>
<td>gift</td>
<td>git-branch</td>
<td>git-commit</td>
</tr>
<tr>
<td>git-merge</td>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
</tr>
<tr>
<td>hard-drive</td>
<td>哈希</td>
<td>headphones</td>
<td>heart</td>
</tr>
<tr>
<td>help-circle</td>
<td>home</td>
<td>image</td>
<td>inbox</td>
</tr>
<tr>
<td>info</td>
<td>italic</td>
<td>layers</td>
<td>layout</td>
</tr>
<tr>
<td>life-buoy</td>
<td>link-2</td>
<td>link</td>
<td>list</td>
</tr>
<tr>
<td>loader</td>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
</tr>
<tr>
<td>mail</td>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
</tr>
<tr>
<td>maximize</td>
<td>menu</td>
<td>message-circle</td>
<td>message-square</td>
</tr>
<tr>
<td>mic-off</td>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
</tr>
<tr>
<td>minus-circle</td>
<td>minus-square</td>
<td>minus</td>
<td>monitor</td>
</tr>
<tr>
<td>moon</td>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>move</td>
</tr>
<tr>
<td>music</td>
<td>navigation-2</td>
<td>navigation</td>
<td>octagon</td>
</tr>
<tr>
<td>package</td>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
</tr>
<tr>
<td>percent</td>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
</tr>
<tr>
<td>phone-missed</td>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
</tr>
<tr>
<td>pie-chart</td>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
</tr>
<tr>
<td>plus-square</td>
<td>plus</td>
<td>pocket</td>
<td>power</td>
</tr>
<tr>
<td>printer</td>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
</tr>
<tr>
<td>repeat</td>
<td>倒回</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
</tr>
<tr>
<td>rss</td>
<td>save</td>
<td>scissors</td>
<td>search</td>
</tr>
<tr>
<td>send</td>
<td>server</td>
<td>settings</td>
<td>share-2</td>
</tr>
<tr>
<td>share</td>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
</tr>
<tr>
<td>shopping-cart</td>
<td>shuffle</td>
<td>边栏</td>
<td>skip-back</td>
</tr>
<tr>
<td>skip-forward</td>
<td>slash</td>
<td>sliders</td>
<td>smartphone</td>
</tr>
<tr>
<td>speaker</td>
<td>square</td>
<td>星标</td>
<td>stop-circle</td>
</tr>
<tr>
<td>sun</td>
<td>sunrise</td>
<td>sunset</td>
<td>tablet</td>
</tr>
<tr>
<td>标记</td>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
</tr>
<tr>
<td>thumbs-down</td>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
</tr>
<tr>
<td>trash-2</td>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
</tr>
<tr>
<td>triangle</td>
<td>truck</td>
<td>tv</td>
<td>type</td>
</tr>
<tr>
<td>umbrella</td>
<td>underline</td>
<td>unlock</td>
<td>upload-cloud</td>
</tr>
<tr>
<td>上传</td>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
</tr>
<tr>
<td>user-x</td>
<td>用户</td>
<td>用户</td>
<td>video-off</td>
</tr>
<tr>
<td>video</td>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
</tr>
<tr>
<td>volume-x</td>
<td>volume</td>
<td>查看</td>
<td>wifi-off</td>
</tr>
<tr>
<td>wifi</td>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
</tr>
<tr>
<td>x</td>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
</tr>
<tr>
<td>zoom-out</td>
<td></td>
<td></td>
<td></td>
</table>
