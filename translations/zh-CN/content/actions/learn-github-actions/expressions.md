---
title: 表达式
shortTitle: Expressions
intro: 你可以对工作流和操作中的表达式求值。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 94bd9f7a43d4325e497a776357711adf64c0d7ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614221'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于表达式

您可以使用表达式程序化设置工作流程文件中的环境变量和访问上下文。 表达式可以是文字值、上下文引用或函数的任意组合。 您可以使用运算符组合文字、上下文引用和函数。 有关上下文的详细信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”。

表达式通常与工作流文件中的条件 `if` 关键字一起使用，以确定是否应运行步骤。 如果 `if` 条件为 `true`，该步骤将运行。

您需要使用特定语法指示 {% data variables.product.prodname_dotcom %} 对表达式求值，而不是将其视为字符串。

{% raw %} `${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} 有关 `if` 条件的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”。

{% data reusables.actions.context-injection-warning %}

#### `if` 条件中的示例表达式

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

## 文本

作为表达式的一部分，可使用 `boolean`、`null`、`number` 或 `string` 数据类型。

| 数据类型 | 文本值 |
|-----------|---------------|
| `boolean` | `true` 或 `false` |
| `null`    | `null` |
| `number`  | JSON 支持的任何数字格式。 |
| `string`  | 无需将字符串括在 `{% raw %}${{{% endraw %}` 和 `{% raw %}}}{% endraw %}` 中。 但是，如果这样做，则必须在字符串两边使用单引号 (`'`)。 若要使用文本单引号，请使用额外的单引号 (`''`) 转义文本单引号。 用双引号 (`"`) 括起来会引发错误。 |

#### 示例

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## 运算符

| 运算符    | 说明 |
| ---         | ---         |
| `( )`       | 逻辑分组 |
| `[ ]`       | 索引
| `.`         | 属性取消引用 |
| `!`         | Not |
| `<`         | 小于 |
| `<=`        | 小于或等于 |
| `>`         | 大于 |
| `>=`        | 大于或等于 |
| `==`        | 等于 |
| `!=`        | 不等于 |
| `&&`        | 且 |
|  <code>\|\|</code> | 或 |

{% data variables.product.prodname_dotcom %} 进行宽松的等式比较。

* 如果类型不匹配，{% data variables.product.prodname_dotcom %} 强制转换类型为数字。 {% data variables.product.prodname_dotcom %} 使用这些转换将数据类型转换为数字：

  | 类型    | 结果 |
  | ---     | ---    |
  | Null    | `0` |
  | 布尔 | `true` 返回 `1` <br /> `false` 返回 `0` |
  | String  | 从任何合法的 JSON 数字格式进行分析，否则为 `NaN`。 <br /> 注意：空字符串返回 `0`。 |
  | 数组   | `NaN` |
  | 对象  | `NaN` |
* 一个 `NaN` 与另一个 `NaN` 的比较不会生成 `true`。 有关详细信息，请参阅“[NaN Mozilla 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)”。
* {% data variables.product.prodname_dotcom %} 在比较字符串时忽略大小写。
* 对象和数组仅在为同一实例时才视为相等。

## 函数

{% data variables.product.prodname_dotcom %} 提供一组内置的函数，可用于表达式。 有些函数抛出值到字符串以进行比较。 {% data variables.product.prodname_dotcom %} 使用这些转换将数据类型转换为字符串：

| 类型    | 结果 |
| ---     | ---    |
| Null    | `''` |
| 布尔 | `'true'` 或 `'false'` |
| 数字  | 十进制格式，对大数字使用指数 |
| 数组   | 数组不转换为字符串 |
| 对象  | 对象不转换为字符串 |

### contains

`contains( search, item )`

如果 `search` 包含 `item`，则返回 `true`。 如果 `search` 是一个数组，`item` 是数组中的一个元素，此函数将返回 `true`。 如果 `search` 是一个字符串，`item` 是 `search` 的 substring，此函数将返回 `true`。 此函数不区分大小写。 抛出值到字符串。

#### 使用字符串的示例

`contains('Hello world', 'llo')` 返回 `true`。

#### 使用对象筛选器的示例

如果与事件相关的问题具有标签“bug”，`contains(github.event.issue.labels.*.name, 'bug')` 便会返回 `true`。

有关详细信息，请参阅“[对象筛选器](#object-filters)”。

#### 匹配字符串数组的示例

可以将 `contains()` 与 `fromJson()` 配合使用来检查字符串数组是否包含 `item`，而不是编写 `github.event_name == "push" || github.event_name == "pull_request"`。

例如，如果 `github.event_name` 是“push”或“pull_request”，`contains(fromJson('["push", "pull_request"]'), github.event_name)` 便会返回 `true`。

### startsWith

`startsWith( searchString, searchValue )`

如果 `searchString` 以 `searchValue` 开头，将返回 `true`。 此函数不区分大小写。 抛出值到字符串。

#### 示例

`startsWith('Hello world', 'He')` 返回 `true`。

### endsWith

`endsWith( searchString, searchValue )`

如果 `true` 以 `searchString` 结尾，则返回 `searchValue`。 此函数不区分大小写。 抛出值到字符串。

#### 示例

`endsWith('Hello world', 'ld')` 返回 `true`。

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

将 `string` 中的值替换为变量 `replaceValueN`。 `string` 中的变量是使用 `{N}` 语法指定的，其中 `N` 是一个整数。 必须至少指定一个 `replaceValue` 和 `string`。 可使用的变量 (`replaceValueN`) 的数量没有上限。 使用双小括号逸出大括号。

#### 示例

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

返回“Hello Mona the Octocat”。

#### 逸出括号示例

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

返回“{Hello Mona the Octocat!}”。

### join

`join( array, optionalSeparator )`

`array` 的值可以是数组，也可以是字符串。 `array` 中的所有值都连接成一个字符串。 如果提供 `optionalSeparator`，则它将插入到连接的值之间， 否则使用默认分隔符 `,`。 抛出值到字符串。

#### 示例

`join(github.event.issue.labels.*.name, ', ')` 可能会返回“出现 bug，需要帮助”

### toJSON

`toJSON(value)`

对 `value` 返回适合打印的 JSON 表示形式。 您可以使用此函数调试上下文中提供的信息。

#### 示例

`toJSON(job)` 可能会返回 `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

返回 `value` 的 JSON 对象或 JSON 数据类型。 您可以使用此函数来提供 JSON 对象作为评估表达式或从字符串转换环境变量。

#### 返回 JSON 对象的示例

此工作流在一个作业中设置 JSON 矩阵，并使用输出和 `fromJSON` 将其传递给下一个作业。

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
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### 返回 JSON 数据类型的示例

此工作流使用 `fromJSON` 将环境变量从字符串转换为布尔值或整数。

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

返回与 `path` 模式匹配的文件集的单个哈希。 可以提供用逗号分隔的单个 `path` 模式或多个 `path` 模式。 `path` 与 `GITHUB_WORKSPACE` 目录相关，且仅包含 `GITHUB_WORKSPACE` 内的文件。 此函数为每个匹配的文件计算单独的 SHA-256 哈希， 然后使用这些哈希来计算文件集的最终 SHA-256 哈希。 如果 `path` 模式与任何文件都不匹配，则返回空字符串。 有关 SHA-256 的详细信息，请参阅“[SHA-2](https://en.wikipedia.org/wiki/SHA-2)”。

您可以使用模式匹配字符来匹配文件名。 模式匹配在 Windows 上不区分大小写。 有关受支持的模式匹配字符的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)”。

#### 单一模式示例

匹配存储库中的任何 `package-lock.json` 文件。

`hashFiles('**/package-lock.json')`

#### 多个模式示例

为存储库中的任何 `package-lock.json` 和 `Gemfile.lock` 文件创建哈希。

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## 状态检查函数

可以将以下状态检查函数用作 `if` 条件中的表达式。 除非包含这些函数之一，否则将应用 `success()` 的默认状态检查。 有关 `if` 条件的详细信息，请参阅“[GitHub Actions 的工作流语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”和“[GitHub Composite Actions 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)”。
{% else %}
## 检查函数
可以将以下状态检查函数用作 `if` 条件中的表达式。 除非包含这些函数之一，否则将应用 `success()` 的默认状态检查。 有关 `if` 条件的详细信息，请参阅“[GitHub Actions 的工作流语法](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”。
{% endif %}

### success

如果前面的步骤都没有失败或被取消，则返回 `true`。

#### 示例

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### 通用

导致步骤始终执行，并返回 `true`，即使取消也一样。 作业或步骤在重大故障阻止任务运行时不会运行。 例如，如果获取来源失败。

#### 示例

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### cancelled

如果工作流被取消，则返回 `true`。

#### 示例

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### 失败

如果作业的任何先前步骤失败，将返回 `true`。 如果有一系列依赖项作业，则 `failure()` 在任何上级作业失败时返回 `true`。

#### 示例

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### 有条件的失败

可以包含一个在失败后运行的步骤的额外条件，但仍必须包含 `failure()` 以覆盖自动应用于不包含状态检查函数的 `if` 条件的默认 `success()` 状态检查。

##### 示例

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## 对象过滤器

可使用 `*` 语法来应用筛选器并选择集合中的匹配项。

例如，考虑名为 `fruits` 的对象数组。

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

筛选器 `fruits.*.name` 返回数组 `[ "apple", "orange", "pear" ]`。

还可以对某个对象使用 `*` 语法。 例如，假设有一个名为 `vegetables` 的对象。

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

筛选器 `vegetables.*.ediblePortions` 的计算结果如下：

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

由于对象不保留顺序，因此无法保证输出的顺序。
