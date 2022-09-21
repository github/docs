---
title: 创建议题表单时的常见验证错误
intro: 创建、保存或查看问题表单时，可能会看到其中一些常见验证错误。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 54451186fe7fcbc40945dc6a0b2ee2d757924c1b
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '145861067'
---
<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## <a name="required-top-level-key-name-is-missing"></a>缺少必需的顶级键 `name`

模板不包含 `name` 字段，这意味着在向用户提供选项列表时，不清楚要调用问题模板的内容。

### <a name="example"></a>示例

```yaml
description: "Thank you for reporting a bug!"
...
```

可以通过添加 `name` 作为键来修复此错误。

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## <a name="key-must-be-a-string"></a>`key` 必须是字符串

此错误消息表示已提供允许的键，但由于不支持数据类型，无法分析其值。

### <a name="example"></a>示例

下面的 `description` 被分析为布尔值，但它应该是字符串。

```yaml
name: "Bug report"
description: true
...
```

可以通过提供字符串作为值来修复此错误。 可能需要在字符串两侧加双引号才能成功分析。 例如，必须在包含 `'` 的字符串两侧加双引号。

```yaml
name: "Bug report"
description: "true"
...
```

当字段应为字符串时，也不允许使用空字符串或仅包含空格的字符串。

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

可以通过将值更正为非空字符串来修复此错误。 如果字段不是必需的，则应删除键值对。

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## <a name="input-is-not-a-permitted-key"></a>`input` 不是允许的键

模板的顶层提供了意外的键。 有关支持哪些顶级键的详细信息，请参阅“[问题表单的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)”。

### <a name="example"></a>示例

```yaml
name: "Bug report"
hello: world
...
```

可以通过删除意外的键来修复此错误。

```yaml
name: "Bug report"
...
```

## <a name="forbidden-keys"></a>禁止键

YAML 将某些字符串分析为 `Boolean` 值。 为了避免这种情况，我们明确禁止使用以下键：

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

可以通过删除禁止键来修复此错误。

## <a name="body-must-contain-at-least-one-non-markdown-field"></a>正文必须至少包含一个非 markdown 字段

问题表单必须接受用户输入，这意味着它的至少一个字段必须包含用户输入字段。 `markdown` 元素是静态文本，因此 `body` 数组不能只包含 `markdown` 元素。

### <a name="example"></a>示例

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

可以通过添加接受用户输入的非 markdown 元素来修复该错误。

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
- type: textarea
  attributes:
    label: "What's wrong?"
```

## <a name="body-must-have-unique-ids"></a>正文必须具有唯一 ID

如果使用 `id` 属性来区分多个元素，则每个 `id` 属性必须是唯一的。

### <a name="example"></a>示例

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: name
  attributes:
    label: Last name
```

可以通过更改其中一个输入的 `id`，使每个 `input` 字段都具有唯一的 `id` 属性来修复该错误。

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: surname
  attributes:
    label: Last name
```

## <a name="body-must-have-unique-labels"></a>正文必须具有唯一标签

当有多个接受用户输入的 `body` 元素时，每个用户输入字段的 `label` 属性必须是唯一的。

### <a name="example"></a>示例

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Name
```

要修复该错误，可以更改其中一个输入字段的 `label` 属性，确保每个 `label` 都是唯一的。

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Operating System
```

输入字段也可以按其 `id` 属性进行区分。 如果需要重复的 `label` 属性，则可以提供至少一个 `id` 来区分具有相同标签的两个元素。

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: textarea
  id: name_2
  attributes:
    label: Name
```

`id` 属性在问题正文中不可见。 如果要区分生成的问题中的字段，则应使用不同的 `label` 属性。


## <a name="labels-are-too-similar"></a>标签太相似

相似的标签可以处理成相同的引用。 如果没有为 `input` 提供 `id` 属性，则 `label` 属性用于生成对 `input` 字段的引用。 为此，我们将利用 Rails [参数化](https://apidock.com/rails/ActiveSupport/Inflector/parameterize)方法来处理 `label`。 在某些情况下，可以将两个不同标签处理为相同的参数化字符串。

### <a name="example"></a>示例

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: name
  attributes:
    label: Name???????
```

可以通过将至少一个区别性字母数字字符（`-` 或 `_`）添加到冲突标签之一来修复该错误。

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  attributes:
    label: Your name
```

也可以通过为其中一个冲突标签提供唯一的 `id` 来修复该错误。

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: your-name
  attributes:
    label: Name???????
```

## <a name="checkboxes-must-have-unique-labels"></a>复选框必须具有唯一标签

当存在 `checkboxes` 元素时，它的每个嵌套标签在其对等方以及其他输入类型中都必须是唯一的。

### <a name="example"></a>示例

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

可以通过更改其中一个输入的 `label` 属性来修复该错误。

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Your name
```

也可以向任何冲突的顶级元素提供一个 `id`。 嵌套复选框元素不支持 `id` 属性。

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

`id` 属性在问题正文中不可见。 如果要区分生成的问题中的字段，则应使用不同的 `label` 属性。

## <a name="bodyi-required-key-type-is-missing"></a>Body[i]：缺少所需的键类型

每个正文块必须包含键 `type`。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的零索引索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

可以通过添加具有有效输入类型的键 `type` 作为值来修复此错误。 有关可用的 `body` 输入类型及其语法，请参阅“[{% data variables.product.prodname_dotcom %} 表单架构的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)”。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-x-is-not-a-valid-input-type"></a>Body[i]：`x` 不是有效的输入类型

其中一个正文块包含的类型值不是[允许的类型](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)之一。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

可以通过将 `x` 更改为有效类型之一来修复此错误。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-required-attribute-key-value-is-missing"></a>Body[i]：缺少必需的属性键 `value`

尚未提供所需的 `value` 属性之一。 当块没有 `attributes` 键或 `attributes` 键下没有 `value` 键时，会发生此错误。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
```

可以通过在 `body` 的第二个列表元素的 `attributes` 下添加 `value` 作为键来修复此示例中的错误。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
  attributes:
    value: "This is working now!"
```

## <a name="bodyi-label-must-be-a-string"></a>Body[i]：标签必须是字符串

在其 `attributes` 块中，值具有错误的数据类型。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

下面的 `label` 被分析为布尔值，但它应该是字符串。


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

可以通过为 `label` 提供字符串值来修复此错误。 如果要使用可能会分析为布尔值、整数或小数的 `label` 值，则应在该值两侧加引号。 例如，应为 `"true"` 或 `"1.3"`，而不是 `true` 或 `1.3`。

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

当属性应为字符串时，不允许使用空字符串或仅包含空格的字符串。 例如，不允许使用 `""` 或 `"     "`。

如果属性是必需的，该值必须是非空字符串。 如果字段不是必需的，则应删除键值对。

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## <a name="bodyi-id-can-only-contain-numbers-letters---_"></a>Body[i]：`id` 只能包含数字、字母、-、_

`id` 属性只能包含字母数字字符、`-` 和 `_`。 模板可能在 `id` 中包含不允许使用的字符，例如空格。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

可以通过确保从 `id` 值中删除空格和其他不允许的字符来修复该错误。

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## <a name="bodyi-x-is-not-a-permitted-key"></a>Body[i]：`x` 不是允许的键

在与 `type` 和 `attributes` 相同的缩进级别提供了意外的键 `x`。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

可以通过删除额外的键以及仅使用 `type`、`attributes` 和 `id` 来修复此错误。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## <a name="bodyi-label-contains-forbidden-word"></a>Body[i]：`label` 包含禁止词

为了尽量减少在 GitHub 问题中公开发布私人信息和凭据的风险，在输入或 textarea 元素的 `label` 中不允许使用一些攻击者常用的词。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

可以通过从任何 `label` 字段中删除“密码”之类的词汇来修复该错误。

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## <a name="bodyi-x-is-not-a-permitted-attribute"></a>Body[i]：`x` 不是允许的属性

`attributes` 块中提供了无效的键。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

可以通过删除额外的键以及仅使用允许的属性来修复此错误。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## <a name="bodyi-options-must-be-unique"></a>Body[i]：`options` 必须是唯一的

对于复选框和下拉列表输入类型，`options` 数组中定义的选项必须是唯一的。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - ice cream
      - pie
```

可以通过确保 `options` 数组中不存在重复选项来修复此错误。

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## <a name="bodyi-options-must-not-include-the-reserved-word-none"></a>Body[i]：`options` 不得包含保留字 none

“None”是 `options` 集中的保留字，因为它用于在不需要 `dropdown` 时表示不进行选择。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
      - None
  validations:
    required: true
```

可以通过删除“None”选项来修复该错误。 如果希望参与者能够表明他们不喜欢这些类型的馅饼，则还可以删除 `required` 验证。

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

在此示例中，“None”将自动填充为可选选项。

## <a name="bodyi-options-must-not-include-booleans-please-wrap-values-such-as-yes-and-true-in-quotes"></a>Body[i]：`options` 不得包含布尔值。 请将“yes”和“true”等值两侧加引号

有许多英文单词会被 YAML 分析程序处理成布尔值，除非它们两侧加上引号。 对于下拉列表 `options`，所有项必须为字符串而非布尔值。

带有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的主体块的索引。 例如，可以通过 `body[0]` 得知错误是由 `body` 列表中的第一个块引起的。

### <a name="example"></a>示例

```
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - Yes
      - No
      - Maybe
```

可以通过在每个有问题的选项两侧加引号，以防止它们被处理为布尔值来修复错误。

```
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - "Yes"
      - "No"
      - Maybe
```

## <a name="further-reading"></a>延伸阅读

- [YAML](https://yaml.org/)
- [问题表单的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
