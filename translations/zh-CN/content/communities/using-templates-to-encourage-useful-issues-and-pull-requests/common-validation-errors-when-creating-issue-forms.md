---
title: 创建议题表单时的常见验证错误
intro: 在创建、保存或查看议题表单时，您可能会看到一些常见的验证错误。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
---

<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## 缺少所需的顶级密钥 `name`

该模板不包含 `name` 字段，这意味着在为用户提供选项列表时，不清楚如何称呼您的议题模板。

### 示例

```yaml
description: "Thank you for reporting a bug!"
...
```

可以通过添加 `name` 作为键来修复该错误。

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## `key` 必须是字符串

此错误消息表示已提供允许的键，但由于不支持该数据类型，因此无法分析其值。

### 示例

下面的 `description` 被解析为布尔值，但它应该是一个字符串。

```yaml
name: "Bug report"
description: true
...
```

可以通过提供字符串作为值来修复该错误。 字符串可能需要用双引号括起来才能成功解析。 例如，包含 `'` 的字符串必须用双引号括起来。

```yaml
name: "Bug report"
description: "true"
...
```

当字段需要字符串时，也不允许使用空字符串或仅由空格组成的字符串。

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

可以通过将值更正为非空字符串来修复该错误。 如果该字段不是必需的，则应删除键值对。

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## `input` 不是允许的键

在模板的顶层提供了非预期的键。 有关支持哪些顶级键的详细信息，请参阅“[议题表单的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax)”。

### 示例

```yaml
name: "Bug report"
hello: world
...
```

可以通过删除非预期的键来修复该错误。

```yaml
name: "Bug report"
...
```

## 禁止的键

YAML 将某些字符串解析为 `Boolean` 值。 为避免这种情况，我们明确禁止使用以下键：

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

可以通过删除禁止的键来修复该错误。

## 正文必须包含至少一个非 Markdown 字段

议题表单必须接受用户输入，这意味着其至少一个字段必须包含用户输入字段。 `markdown` 是静态文本，因此 `body` 数组不能只包含 `markdown` 元素。

### 示例

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

可以通过添加接受用户输入的非 Markdown 元素来修复该错误。

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

## 正文必须具有唯一的 Id

如果使用 `id` 属性来区分多个元素，则每个 `id` 属性都必须是唯一的。

### 示例

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

可以通过更改其中一个输入的 `id` 来修复此错误，以便每个 `input` 字段都具有唯一的 `id` 属性。

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

## 正文必须具有唯一的标签

当有多个接受用户输入的 `body` 元素时，每个用户输入字段的 `label` 属性必须是唯一的。

### 示例

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

可以通过更改其中一个输入字段的 `label` 属性来修复此错误，以确保每个 `label` 都是唯一的。

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

输入字段还可以通过其 `id` 属性进行区分。 如果需要重复的 `label` 属性，则可以提供至少一个 `id` 以区分具有相同标签的两个元素。

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

`id` 属性在问题正文中不可见。 如果要区分所产生的问题中的字段，则应使用不同的 `label` 属性。


## 标签太相似

相似的标签可能被处理成相同的引用。 如果未为 `input` 提供 `id` 属性，则使用 `label` 属性生成对 `input` 字段的引用。 为此，我们利用 Rails [参数化](https://apidock.com/rails/ActiveSupport/Inflector/parameterize)方法来处理 `label`。 在某些情况下，可以将两个不同的标签处理为同一个参数化字符串。

### 示例

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

可以通过向其中一个冲突标签添加至少一个可区分的字母数字字符 `-` 或 `_` 来修复此错误。

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

还可以通过为其中一个冲突的标签提供唯一的 `id` 来修复该错误。

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

## 复选框必须具有唯一的标签

当 `checkboxes` 元素存在时，其每个嵌套标签在其对等体以及其他输入类型中必须是唯一的。

### 示例

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

或者，您可以为任何冲突的顶级元素提供 `id` 。 嵌套复选框元素不支持 `id` 属性。

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

`id` 属性在问题正文中不可见。 如果要区分所产生的问题中的字段，则应使用不同的 `label` 属性。

## Body[i]：缺少必需的键类型

每个正文块必须包含键 `type`。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的零索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
```

可以通过添加键 `type` ，并使用有效的输入类型作为值来修复该错误。 有关可用的 `body` 输入类型及其语法，请参阅“[{% data variables.product.prodname_dotcom %} 表单架构的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)”。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
```

## Body[i]: `x` 不是有效的输入类型

其中一个正文块包含的类型值不是[允许的类型](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys)之一。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
```

可以通过将 `x` 更改为有效类型之一来修复该错误。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
```

## Body[i]：缺少必需的属性键 `value`

尚未提供必需的 `value` 属性之一。 当块没有 `attributes` 键或者在 `attributes` 键下没有 `value` 键时，就会发生此错误。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
- type: markdown
```

此示例中的错误可以通过在 `body` 的第二个列表元素中 `attributes` 下添加 `value` 作为键来修复。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
    preview_only: false
- type: markdown
  attributes:
    value: "This is working now!"
```

## Body[i]：标签必须是字符串

在其 `attributes` 块中，值具有错误的数据类型。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

下面的 `label` 被解析为布尔值，但它应该是一个字符串。


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

可以通过为 `label` 提供字符串值来修复错误。 如果要使用可解析为布尔值、整数或十进制的 `label` 值，则应将该值括在引号中。 例如 `"true"` 或 `"1.3"`，而不是 `true` 或 `1.3`。

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

当属性需要字符串时，不允许使用空字符串或仅由空格组成的字符串。 例如，不允许 `""` 或 `"     "`。

如果该属性是必需的，则该值必须是非空字符串。 如果该字段不是必需的，则应删除键值对。

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## Body[i]：`id` 只能包含数字、字母、-、_

`id` 属性只能包含字母数字字符、`-` 和 `_`。 您的模板可能在 `id` 中包含不允许的字符，如空格。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

通过确保从 `id` 值中删除空格和其他不允许的字符，可以修复错误。

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## Body[i]：`x` 不是允许使用的密钥

非预期的键 `x` 以与 `type` 及 `attributes` 相同的缩进水平提供。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

可以通过删除额外的键并仅使用 `type`、`attributes` 和 `id` 来修复该错误。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i]：`label` 包含禁止的字词

为了最大限度地降低在 GitHub Issues 中公开发布私人信息和凭据的风险，不允许在输入或文本区域元素的 `label` 中使用攻击者常用的某些字词。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

可以通过从任何 `label` 字段中删除 "password" 等词来修复该错误。

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## Body[i]：`x` 不是允许使用的属性

在 `attributes` 块中提供了无效的键。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

可以通过删除额外的键并仅使用允许的属性来修复该错误。

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## Body[i]：`options` 必须是唯一的

对于复选框和下拉列表输入类型，在 `options` 数组中定义的选项必须是唯一的。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

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

通过确保 `options` 数组中不存在重复选项，可以修复此错误。

```
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## Body[i]：`options` 选项不得包含保留字词 none

"None" 是 `options` 集中保留的字词，因为它用于在不需要 `dropdown` 时指示非选择。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

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

可以通过删除 "None" 作为选项来修复该错误。 如果您希望贡献者能够表明他们不喜欢这些类型的馅饼，可以另外删除`必要的`验证。

```
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

在此示例中，"None" 将自动填充为可选选项。

## Body[i]：`options` 选项不得包含布尔值。 请用引号括住 "yes" 和 "true" 等值

有许多英语单词若不用引号括住，会被 YAML 解析器处理为布尔值。 对于 `options`下拉列表，所有项都必须是字符串而不是布尔值。

具有 `body` 的错误将以 `body[i]` 为前缀，其中 `i` 表示包含错误的正文块的索引。 例如，`body[0]` 告诉我们，错误是由 `body` 列表中的第一个块引起的。

### 示例

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

可以通过将每个有问题的选项括在引号中来修复该错误，以防止它们被处理为布尔值。

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

## 延伸阅读

- [YAML](https://yaml.org/)
- [议题表单的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
