---
title: Expressions
shortTitle: Expressions
intro: 您可以评估工作流程和操作中的表达式。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于表达式

您可以使用表达式程序化设置工作流程文件中的环境变量和访问上下文。 表达式可以是文字值、上下文引用或函数的任意组合。 您可以使用运算符组合文字、上下文引用和函数。 有关上下文的更多信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”。

表达式通常在工作流程文件中与条件性 `if` 关键词一起用来确定步骤是否应该运行。 当 `if` 条件为 `true` 时，步骤将会运行。

您需要使用特定语法指示 {% data variables.product.prodname_dotcom %} 对表达式求值，而不是将其视为字符串。

{% raw %}
`${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %}有关 `if` 条件的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”。

{% data reusables.actions.context-injection-warning %}

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
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## 文字

作为表达式的一部分，您可以使用 `boolean`、`null`、`number` 或 `string` 数据类型。

| 数据类型     | 文字值                                                                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `布尔值`    | `true` 或 `false`                                                                                                                                           |
| `null`   | `null`                                                                                                                                                     |
| `number` | JSON 支持的任何数字格式。                                                                                                                                            |
| `字符串`    | 您不需要将字符串括在 `{% raw %}${{{% endraw %}` 和 `{% raw %}}}{% endraw %}` 中。 但是，如果这样做，则必须在字符串两边使用单引号 (`'`)。 要使用文字单引号，请使用额外的单引号转义文字单引号 (`''`)。 用双引号 (`"`) 括起来会引发错误。 |

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
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## 运算符

| 运算符                       | 描述     |
| ------------------------- | ------ |
| `( )`                     | 逻辑分组   |
| `[ ]`                     | 索引     |
| `.`                       | 属性取消引用 |
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

## 函数

{% data variables.product.prodname_dotcom %} 提供一组内置的函数，可用于表达式。 有些函数抛出值到字符串以进行比较。 {% data variables.product.prodname_dotcom %} 使用这些转换将数据类型转换为字符串：

| 类型   | 结果                   |
| ---- | -------------------- |
| Null | `''`                 |
| 布尔值  | `'true'` 或 `'false'` |
| 数字   | 十进制格式，对大数字使用指数       |
| 数组   | 数组不转换为字符串            |
| 对象   | 对象不转换为字符串            |

### contains

`contains( search, item )`

如果 `search` 包含 `item`，则返回 `true`。 如果 `search` 为数组，此函数在 `item` 为数组中的元素时返回 `true`。 如果 `search` 为字符串，此函数在 `item` 为 `search` 的子字符串时返回 `true`。 此函数不区分大小写。 抛出值到字符串。

#### 使用数组的示例

`contains(github.event.issue.labels.*.name, 'bug')` 返回与事件相关的议题是否带有标签 "bug"。

#### 使用字符串的示例

`contains('Hello world', 'llo')` 返回 `true`.

### startsWith

`startsWith( searchString, searchValue )`

当 `searchString` 以 `searchValue` 开头时返回 `true`。 此函数不区分大小写。 抛出值到字符串。

#### 示例

`startsWith('Hello world', 'He')` 返回 `true`.

### endsWith

`endsWith( searchString, searchValue )`

当 `searchString` 以 `searchValue` 结尾时返回 `true`。 此函数不区分大小写。 抛出值到字符串。

#### 示例

`endsWith('Hello world', 'ld')` 返回 `true`.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

将 `string` 中的值替换为变量 `replaceValueN`。 `string` 中的变量使用 `{N}` 语法指定，其中 `N` 为整数。 必须指定至少一个 `replaceValue` 和 `string`。 可以使用变量 (`replaceValueN`) 数没有上限。 使用双小括号逸出大括号。

#### 示例

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

返回 'Hello Mona the Octocat'.

#### 逸出括号示例

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

返回 '{Hello Mona the Octocat!}'.

### join

`join( array, optionalSeparator )`

`array` 的值可以是数组或字符串。 `array` 中的所有值强制转换为字符串。 如果您提供 `optionalSeparator`，它将被插入到串联的值之间。 否则使用默认分隔符 `,`。 抛出值到字符串。

#### 示例

`join(github.event.issue.labels.*.name, ', ')` 可能返回 'bug, help wanted'

### toJSON

`toJSON(value)`

对 `value` 返回适合打印的 JSON 表示形式。 您可以使用此函数调试上下文中提供的信息。

#### 示例

`toJSON(job)` 可能返回 `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

返回 `value` 的 JSON 对象或 JSON 数据类型。 您可以使用此函数来提供 JSON 对象作为评估表达式或从字符串转换环境变量。

#### 返回 JSON 对象的示例

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

#### 返回 JSON 数据类型的示例

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

### hashFiles

`hashFiles(path)`

返回匹配 `path` 模式的文件集的单个哈希值。 您可以提供单一 `path` 模式，或以逗号分隔的多个 `path` 模式。 `path` 相对于 `GITHUB_WORKSPACE` 目录，只能包括 `GITHUB_WORKSPACE` 中的文件。 此函数为每个匹配的文件计算单独的 SHA-256 哈希， 然后使用这些哈希来计算文件集的最终 SHA-256 哈希。 如果 `path` 模式与任何文件都不匹配，则返回空字符串。 有关 SHA-256 的更多信息，请参阅“[SHA-2](https://en.wikipedia.org/wiki/SHA-2)”。

您可以使用模式匹配字符来匹配文件名。 模式匹配在 Windows 上不区分大小写。 有关支持的模式匹配字符的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)”。

#### 单一模式示例

匹配仓库中的任何 `package-lock.json` 文件。

`hashFiles('**/package-lock.json')`

#### 多个模式示例

为仓库中的任何 `package-lock.json` 和 `Gemfile.lock` 文件创建哈希。

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## 状态检查函数

您可以使用以下状态检查函数作为 `if` 条件中的表达式。 除非您包含其中一个函数，否则 `success()` 的默认状态检查将会应用。 有关 `if` 条件的更多信息，请参阅“[GitHub 操作的工作流程语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”和“[GitHub 复合操作的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)”。
{% else %}
## 检查函数
您可以使用以下状态检查函数作为 `if` 条件中的表达式。 除非您包含其中一个函数，否则 `success()` 的默认状态检查将会应用。 有关 `if` 条件的更多信息，请参阅“[GitHub 操作的工作流程语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”。
{% endif %}

### success

当前面的步骤没有失败或取消时返回 `true`。

#### 示例

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### always

导致该步骤总是执行，并返回 `true`，即使取消也一样。 作业或步骤在重大故障阻止任务运行时不会运行。 例如，如果获取来源失败。

#### 示例

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

在工作流程取消时返回 `true`。

#### 示例

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### failure

在作业的任何之前一步失败时返回 `true`。 如果您有相依作业链，`failure()` 在任何上层节点作业失败时返回 `true`。

#### 示例

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
### 显式评估状态

您可以直接评估执行步骤的作业或复合操作的状态，而不是使用上述方法之一：

#### 工作流程步骤示例

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ job.status == 'failure' }}{% endraw %}
```

这与在作业步骤中使用 `if: failure()` 相同。

#### 复合操作步骤的示例

```yaml
steps:
  ...
  - name: The composite action has failed
    if: {% raw %}${{ github.action_status == 'failure' }}{% endraw %}
```

这与在复合操作步骤中使用 `if: failure()` 相同。
{% endif %}

## 对象过滤器

可以使用 `*` 语法应用过滤条件并从集合中选择匹配的项目。

例如，考虑名为 `fruits` 的对象数组。

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

过滤条件 `fruits.*.name` 返回数组 `[ "apple", "orange", "pear" ]`.

您也可以在对象上使用 `*` 语法。 例如，假设您有一个名为 `vegetables` 的对象。

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

筛选器 `vegetables.*.ediblePortions` 可求值为：

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

由于对象不保持顺序，因此无法保证输出的顺序。
