---
title: GitHub Actions 的上下文和表达式语法
shortTitle: 上下文和表达式语法
intro: 您可以访问上下文信息并对工作流程和操作中的表达式求值。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 关于上下文和表达式

您可以使用表达式程序化设置工作流程文件中的变量和访问上下文。 表达式可以是文字值、上下文引用或函数的任意组合。 您可以使用运算符组合文字、上下文引用和函数。

表达式通常在工作流程文件中与条件性 `if` 关键词一起用来确定步骤是否应该运行。 当 `if` 条件为 `true` 时，步骤将会运行。

您需要使用特定语法指示 {% data variables.product.prodname_dotcom %} 对表达式求值，而不是将其视为字符串。

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.github-actions.expression-syntax-if %}有关 `if` 条件的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”。

#### `if` 条件的示例表达式

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### 设置环境变量的示例

{% raw %}
```yaml
env:
  my_env_var: ${{ <expression> }}
```
{% endraw %}

### 上下文

上下文是一种访问工作流程运行、运行器环境、作业及步骤相关信息的方式。 上下文使用表达式语法。

{% raw %}
`${{ <context> }}`
{% endraw %}

| 上下文名称      | 类型   | 描述                                                                                                                                  |
| ---------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `github`   | `对象` | 工作流程运行的相关信息。 更多信息请参阅 [`github` 上下文](#github-context)。                                                                               |
| `env`      | `对象` | 包含工作流程、作业或步骤中设置的环境变量。 更多信息请参阅 [`env` 上下文](#env-context)。                                                                            |
| `作业`       | `对象` | 当前执行的作业相关信息。 更多信息请参阅 [`job` 上下文](#job-context)。                                                                                     |
| `steps`    | `对象` | 此作业中已经运行的步骤的相关信息。 更多信息请参阅 [`steps` 上下文](#steps-context)。                                                                            |
| `runner`   | `对象` | 运行当前作业的运行程序相关信息。 更多信息请参阅 [`runner` 上下文](#runner-context)。                                                                           |
| `secrets`  | `对象` | 启用对密码的访问权限。 有关密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。 |
| `strategy` | `对象` | 用于访问配置的策略参数及当前作业的相关信息。 策略参数包括 `fail-fast`、`job-index`、`job-total` 和 `max-parallel`。                                                 |
| `matrix`   | `对象` | 用于访问为当前作业配置的矩阵参数。 例如，如果使用 `os` 和 `node` 版本配置矩阵构建，`matrix` 上下文对象将包含当前作业的 `os` 和 `node` 版本。                                           |
| `needs`    | `对象` | 允许访问定义为当前作业依赖项的所有作业的输出。 更多信息请参阅 [`needs` 上下文](#needs-context)。                                                                      |

作为表达式的一部分，您可以使用以下两种语法之一访问上下文信息。
- 索引语法：`github['sha']`
- 属性解除参考语法：`github.sha`

要使用属性解除参考语法，属性名称必须：
- 以 `a-Z` 或 `_` 开头。
- 后跟 `a-Z` `0-9` `-` 或 `_`。

#### 确定何时使用上下文

{% data reusables.github-actions.using-context-or-environment-variables %}

#### `github` 上下文

`github` 上下文包含有关工作流程运行以及触发运行的事件相关信息。 您可以读取环境变量中的大多数 `github` 上下文数据。 有关环境变量的更多信息，请参阅“[使用环境变量](/actions/automating-your-workflow-with-github-actions/using-environment-variables)”。

{% data reusables.github-actions.github-context-warning %}

| 属性名称                      | 类型    | 描述                                                                                                                                                                                                                      |
| ------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`                  | `对象`  | 工作流程中任何作业或步骤期间可用的顶层上下文。                                                                                                                                                                                                 |
| `github.action`           | `字符串` | 正在运行的操作的名称。 在当前步骤运行脚本时，{% data variables.product.prodname_dotcom %} 删除特殊字符或使用名称 `run`。  如果在同一作业中多次使用相同的操作，则名称将包括带有序列号的后缀。  例如，运行的第一个脚本名称为 `run1`，则第二个脚本将命名为 `run2`。 同样，`actions/checkout` 第二次调用时将变成 `actionscheckout2`。 |
| `github.action_path`      | `字符串` | 您的操作所在的路径。 您可以使用此路径轻松访问与操作位于同一仓库中的文件。 此属性仅在复合运行步骤操作中才受支持。                                                                                                                                                               |
| `github.actor`            | `字符串` | 发起工作流程运行的用户的登录名。                                                                                                                                                                                                        |
| `github.base_ref`         | `字符串` | 工作流程运行中拉取请求的 `base_ref` 或目标分支。 此属性仅在触发工作流程运行的事件为 `pull_request` 时才可用。                                                                                                                                                   |
| `github.event`            | `对象`  | 完整事件 web 挂钩有效负载。 更多信息请参阅“[触发工作流程的事件](/articles/events-that-trigger-workflows/)”。 您可以使用上下文访问事件的个别属性。                                                                                                                     |
| `github.event_name`       | `字符串` | 触发工作流程运行的事件的名称。                                                                                                                                                                                                         |
| `github.event_path`       | `字符串` | 运行器上完整事件 web 挂钩有效负载的路径。                                                                                                                                                                                                 |
| `github.head_ref`         | `字符串` | 工作流程运行中拉取请求的 `head_ref` 或来源分支。 此属性仅在触发工作流程运行的事件为 `pull_request` 时才可用。                                                                                                                                                   |
| `github.job`              | `字符串` | 当前作业的 [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。                                                                                                                                     |
| `github.ref`              | `字符串` | 触发工作流程的分支或标记参考。 对于分支，使用格式 `refs/heads/<branch_name>`，对于标记是 `refs/tags/<tag_name>`。                                                                                                                          |
| `github.repository`       | `字符串` | 所有者和仓库名称。 例如 `Codertocat/Hello-World`。                                                                                                                                                                                  |
| `github.repository_owner` | `字符串` | 仓库所有者的名称。 例如 `Codertocat`。                                                                                                                                                                                              |
| `github.run_id`           | `字符串` | {% data reusables.github-actions.run_id_description %}
| `github.run_number`       | `字符串` | {% data reusables.github-actions.run_number_description %}
| `github.sha`              | `字符串` | 触发工作流程的提交 SHA。                                                                                                                                                                                                          |
| `github.token`            | `字符串` | 代表仓库上安装的 GitHub 应用程序进行身份验证的令牌。 这在功能上等同于 `GITHUB_TOKEN` 密码。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)”。                                 |
| `github.workflow`         | `字符串` | 工作流程的名称。 如果工作流程文件未指定 `name`，此属性的值将是仓库中工作流程文件的完整路径。                                                                                                                                                                      |
| `github.workspace`        | `字符串` | 使用 [`checkout`](https://github.com/actions/checkout) 操作时步骤的默认工作目录和仓库的默认位置。                                                                                                                                              |

#### `env` 上下文

`env` 上下文包含已在工作流程、作业或步骤中设置的环境变量。 有关在工作流程中设置环境变量的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)”。

`env` 上下文语法允许您在工作流程文件中使用环境变量的值。 您可以在**步骤**的任何键值中使用 `env` 上下文，但 `id` 和 `uses` 键除外。 有关步骤语法的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”。

如果您想要在运行器中使用环境变量的值，请使用运行器操作系统的正常方法来读取环境变量。

| 属性名称                   | 类型    | 描述                                     |
| ---------------------- | ----- | -------------------------------------- |
| `env`                  | `对象`  | 此上下文针对作业中的每个步骤而改变。 您可以从作业中的任何步骤访问此上下文。 |
| `env.<env_name>` | `字符串` | 特定环境变量的值。                              |

#### `job` 上下文

`job` 上下文包含当前正在运行的作业相关信息。

| 属性名称                                      | 类型    | 描述                                                                                                                                                     |
| ----------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `job`                                     | `对象`  | 此上下文针对工作流程运行中的每项作业而改变。 您可以从作业中的任何步骤访问此上下文。                                                                                                             |
| `job.container`                           | `对象`  | 作业的容器相关信息。 有关容器的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)”。   |
| `job.container.id`                        | `字符串` | 容器的 id。                                                                                                                                                |
| `job.container.network`                   | `字符串` | 容器网络的 id。 运行程序创建作业中所有容器使用的网络。                                                                                                                          |
| `job.services`                            | `对象`  | 为作业创建的服务容器。 有关服务容器的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)”。 |
| `job.services.<service id>.id`      | `字符串` | 服务容器的 id。                                                                                                                                              |
| `job.services.<service id>.network` | `字符串` | 服务容器网络的 id。 运行程序创建作业中所有容器使用的网络。                                                                                                                        |
| `job.services.<service id>.ports`   | `对象`  | 服务容器显露的端口。                                                                                                                                             |
| `job.status`                              | `字符串` | 作业的当前状态。 可能的值包括 `success`、`failure` 或 `cancelled`。                                                                                                     |

#### `steps` 上下文

`steps` 上下文包含当前作业中已经运行的步骤相关信息。

| 属性名称                                                | 类型    | 描述                                                                                                                                                                                                                                                                 |
| --------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `steps`                                             | `对象`  | 此上下文针对作业中的每个步骤而改变。 您可以从作业中的任何步骤访问此上下文。                                                                                                                                                                                                                             |
| `steps.<step id>.outputs`                     | `对象`  | 为步骤定义的输出集。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/articles/metadata-syntax-for-github-actions#outputs)”。                                                                                                                                  |
| `steps.<step id>.conclusion`                  | `字符串` | 在 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) 应用之后完成的步骤的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。 当 `continue-on-error` 步骤失败时，`outcome` 为 `failure`，但最终的 `conclusion` 为 `success`。 |
| `steps.<step id>.outcome`                     | `字符串` | 在 [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) 应用之前完成的步骤的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。 当 `continue-on-error` 步骤失败时，`outcome` 为 `failure`，但最终的 `conclusion` 为 `success`。 |
| `steps.<step id>.outputs.<output name>` | `字符串` | 特定输出的值。                                                                                                                                                                                                                                                            |

#### `runner` 上下文

`runner` 上下文包含正在执行当前作业的运行器相关信息。

| 属性名称                | 类型    | 描述                                                                                                                                                                                     |
| ------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.os`         | `字符串` | 执行作业的运行器的操作系统。 可能的值为 `Linux`、`Windows` 或 `macOS`。                                                                                                                                      |
| `runner.temp`       | `字符串` | 运行器临时目录的路径。 此目录保证在每个作业开始时为空，即使在自托管的运行器上也是如此。                                                                                                                                           |
| `runner.tool_cache` | `字符串` | {% if currentversion == "github-ae@latest" %}有关如何确定 {% data variables.actions.hosted_runner %} 已安装所需软件的说明，请参阅“[创建自定义映像](/actions/using-github-hosted-runners/creating-custom-images)”。 |
{% else %}包含 {% data variables.product.prodname_dotcom %} 托管运行器一些预安装工具的目录路径。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管运行器的规范](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”。 {% endif %}

#### `needs` 上下文

`needs` 上下文包含定义为当前作业依赖项的所有作业的输出。 有关定义作业依赖项的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)”。

| 属性名称                                               | 类型    | 描述                                                                |
| -------------------------------------------------- | ----- | ----------------------------------------------------------------- |
| `needs.<job id>`                             | `对象`  | 当前作业依赖的单个作业。                                                      |
| `needs.<job id>.outputs`                     | `对象`  | 当前作业依赖的作业的输出集。                                                    |
| `needs.<job id>.outputs.<output name>` | `字符串` | 当前作业依赖的作业的特定输出值。                                                  |
| `needs.<job id>.result`                      | `字符串` | 当前作业依赖的作业的结果。 可能的值包括 `success`、`failure`、`cancelled` 或 `skipped`。 |

#### 打印上下文信息到日志文件的示例

要检查每个上下文中可访问的信息，您可以使用此工作流程文件示例。

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

### 文字

作为表达式的一部分，您可以使用 `boolean`、`null`、`number` 或 `string` 数据类型。 Boolean 文字不区分大小写，因此可以使用 `true` 或 `True`。

| 数据类型     | 文字值                    |
| -------- | ---------------------- |
| `布尔值`    | `true` 或 `false`       |
| `null`   | `null`                 |
| `number` | JSON 支持的任何数字格式。        |
| `字符串`    | 必须使用单引号。 使用单引号逸出文字单引号。 |

#### 示例

{% raw %}
```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99-e2 }}
  myString: ${{ 'Mona the Octocat' }}
  myEscapedString: ${{ 'It''s open source!' }}
```
{% endraw %}

### 运算符

| 运算符                       | 描述     |
| ------------------------- | ------ |
| `( )`                     | 逻辑分组   |
| `[ ]`                     | 索引     |
| `.`                       | 属性解除参考 |
| `!`                       | 非      |
| `<`                    | 小于     |
| `<=`                   | 小于或等于  |
| `>`                    | 大于     |
| `>=`                   | 大于或等于  |
| `==`                      | 等于     |
| `!=`                      | 不等于    |
| `&&`              | 和      |
| <code>\|\|</code> | 或      |

{% data variables.product.prodname_dotcom %} 进行宽松的等式比较。

* 如果类型不匹配，{% data variables.product.prodname_dotcom %} 强制转换类型为数字。 {% data variables.product.prodname_dotcom %} 使用这些转换将数据类型转换为数字：

  | 类型   | 结果                                                      |
  | ---- | ------------------------------------------------------- |
  | Null | `0`                                                     |
  | 布尔值  | `true` 返回 `1` <br /> `false` 返回 `0`               |
  | 字符串  | 从任何合法 JSON 数字格式剖析，否则为 `NaN`。 <br /> 注：空字符串返回 `0`。 |
  | 数组   | `NaN`                                                   |
  | 对象   | `NaN`                                                   |
* 一个 `NaN` 与另一个 `NaN` 的比较不会产生 `true`。 更多信息请参阅“[NaN Mozilla 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)”。
* {% data variables.product.prodname_dotcom %} 在比较字符串时忽略大小写。
* 对象和数组仅在为同一实例时才视为相等。

### 函数

{% data variables.product.prodname_dotcom %} 提供一组内置的函数，可用于表达式。 有些函数抛出值到字符串以进行比较。 {% data variables.product.prodname_dotcom %} 使用这些转换将数据类型转换为字符串：

| 类型   | 结果                   |
| ---- | -------------------- |
| Null | `''`                 |
| 布尔值  | `'true'` 或 `'false'` |
| 数字   | 十进制格式，对大数字使用指数       |
| 数组   | 数组不转换为字符串            |
| 对象   | 对象不转换为字符串            |

#### contains

`contains( search, item )`

如果 `search` 包含 `item`，则返回 `true`。 如果 `search` 为数组，此函数在 `item` 为数组中的元素时返回 `true`。 如果 `search` 为字符串，此函数在 `item` 为 `search` 的子字符串时返回 `true`。 此函数不区分大小写。 抛出值到字符串。

##### 使用数组的示例

`contains(github.event.issue.labels.*.name, 'bug')`

##### 使用字符串的示例

`contains('Hello world', 'llo')` 返回 `true`

#### startsWith

`startsWith( searchString, searchValue )`

当 `searchString` 以 `searchValue` 开头时返回 `true`。 此函数不区分大小写。 抛出值到字符串。

##### 示例

`startsWith('Hello world', 'He')` 返回 `true`

#### endsWith

`endsWith( searchString, searchValue )`

当 `searchString` 以 `searchValue` 结尾时返回 `true`。 此函数不区分大小写。 抛出值到字符串。

##### 示例

`endsWith('Hello world', 'ld')` 返回 `true`

#### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

将 `string` 中的值替换为变量 `replaceValueN`。 `string` 中的变量使用 `{N}` 语法指定，其中 `N` 为整数。 必须指定至少一个 `replaceValue` 和 `string`。 可以使用变量 (`replaceValueN`) 数没有上限。 使用双小括号逸出大括号。

##### 示例

返回 'Hello Mona the Octocat'

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

##### 逸出括号示例

返回 '{Hello Mona the Octocat!}'

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

#### join

`join( array, optionalSeparator )`

`array` 的值可以是数组或字符串。 `array` 中的所有值强制转换为字符串。 如果您提供 `optionalSeparator`，它将被插入到串联的值之间。 否则使用默认分隔符 `,`。 抛出值到字符串。

##### 示例

`join(github.event.issue.labels.*.name, ', ')` 可能返回 'bug, help wanted'

#### toJSON

`toJSON(value)`

对 `value` 返回适合打印的 JSON 表示形式。 您可以使用此函数调试上下文中提供的信息。

##### 示例

`toJSON(job)` 可能返回 `{ "status": "Success" }`

#### fromJSON

`fromJSON(value)`

返回 `value` 的 JSON 对象或 JSON 数据类型。 您可以使用此函数来提供 JSON 对象作为评估表达式或从字符串转换环境变量。

##### 返回 JSON 对象的示例

此工作流程在一个作业中设置 JSON矩阵，并使用输出和 `fromJSON` 将其传递到下一个作业。

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
    - id: set-matrix
      run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{fromJSON(needs.job1.outputs.matrix)}}
    steps:
    - run: build
```
{% endraw %}

##### 返回 JSON 数据类型的示例

此工作流程使用 `fromJSON` 将环境变量从字符串转换为布尔值或整数。

{% raw %}
```yaml
name: print
on: push
env: 
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
    - continue-on-error: ${{ fromJSON(env.continue) }}
      timeout-minutes: ${{ fromJSON(env.time) }}
      run: echo ...
```
{% endraw %}

#### hashFiles

`hashFiles(path)`

返回匹配 `path` 模式的文件集的单个哈希值。 您可以提供单一 `path` 模式，或以逗号分隔的多个 `path` 模式。 `path` 相对于 `GITHUB_WORKSPACE` 目录，只能包括 `GITHUB_WORKSPACE` 中的文件。 此函数为每个匹配的文件计算单独的 SHA-256 哈希， 然后使用这些哈希来计算文件集的最终 SHA-256 哈希。 有关 SHA-256 的更多信息，请参阅“[SHA-2](https://en.wikipedia.org/wiki/SHA-2)”。

您可以使用模式匹配字符来匹配文件名。 模式匹配在 Windows 上不区分大小写。 有关支持的模式匹配字符的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)”。

##### 单一模式示例

匹配仓库中的任何 `package-lock.json` 文件。

`hashFiles('**/package-lock.json')`

##### 多个模式示例

为仓库中的任何 `package-lock.json` 和 `Gemfile.lock` 文件创建哈希。

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`

### 作业状态检查函数

您可以使用以下状态检查函数作为 `if` 条件中的表达式。 如果 `if` 表达式不含任何状态函数，将自动返回 `success()` 结果。 有关 `if` 条件的更多信息，请参阅“[GitHub 操作的工作流程语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”。

#### success

当前面的步骤没有失败或取消时返回 `true`。

##### 示例

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

#### always

始终返回 `true`，即使已取消也一样。 作业或步骤在重大故障阻止任务运行时不会运行。 例如，如果获取来源失败。

##### 示例

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

#### cancelled

在工作流程取消时返回 `true`。

##### 示例

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

#### failure

在作业的任何之前一步失败时返回 `true`。

##### 示例

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

### 对象过滤器

可以使用 `*` 语法应用过滤条件并从集合中选择匹配的项目。

例如，考虑名为 `fruits` 的对象数组。

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

过滤条件 `fruits.*.name` 返回数组 `[ "apple", "orange", "pear" ]`
