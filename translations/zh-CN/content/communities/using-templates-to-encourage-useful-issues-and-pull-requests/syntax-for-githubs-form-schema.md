---
title: GitHub 表单架构的语法
intro: '您可以使用 {% data variables.product.company_short %} 的表单架构来配置支持的功能。'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
---

{% note %}

**注意：**{% data variables.product.company_short %} 的表单架构目前处于测试阶段，可能会更改。

{% endnote %}

## 关于 {% data variables.product.company_short %} 的表单架构

您可以使用 {% data variables.product.company_short %} 的表单架构来配置支持的功能。 更多信息请参阅“[为仓库配置议题模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)”。

表单是请求用户输入的一组元素。 您可以通过创建 YAML 表单定义（这是一个表单元素阵列）来配置表单。 每个表单元素是一组确定元素类型、元素属性以及要应用于元素的约束的键值对。 对于某些键，值是另一组键值对。

例如，以下表单定义包括四种表单元素：用于提供用户操作系统的文本区域、用于选择用户运行的软件版本的下拉菜单、用于确认行为准则的复选框以及感谢用户完成表单的 Markdown。

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## 键

对于每个表单元素，您可以设置以下键。

| 键      | 描述                                                                                                                  | 必选 | 类型  | 默认值                                             | 有效值                                             |
| ------ | ------------------------------------------------------------------------------------------------------------------- | -- | --- | ----------------------------------------------- | ----------------------------------------------- |
| `type` | 您想要定义的元素类型。                                                                                                         | 必选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul>                       |
| `id`   | 元素的标识符，`类型`设置为 `Markdown` 时除外。 {% data reusables.form-schema.id-must-be-unique %} 如果提供， `id` 是 URL 查询参数预填中字段的标准标识符。 | 可选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `属性`   | 定义元素属性的一组键值对。                                                                                                       | 必选 | 哈希  | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `验证`   | 设置元素约束的一组键值对。                                                                                                       | 可选 | 哈希  | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

您可以从以下类型的表单元素中选择。 每个类型都有唯一的属性和验证。

| 类型                          | 描述                                      |
| --------------------------- | --------------------------------------- |
| [`markdown`](#markdown)     | Markdown 文本显示在表单中，为用户提供额外的上下文，但**不提交**。 |
| [`textarea`](#textarea)     | 多行文本字段。                                 |
| [`input`](#input)           | 单行文本字段。                                 |
| [`下拉`](#dropdown)           | 下拉菜单。                                   |
| [`checkboxes`](#checkboxes) | 一组复选框。                                  |

### `markdown`

您可以使用 `markdown` 元素在表单中显示 Markdown，为用户提供额外的上下文，但不提交。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| 键       | 描述                     | 必选 | 类型  | 默认值                                             | 有效值                                             |
| ------- | ---------------------- | -- | --- | ----------------------------------------------- | ----------------------------------------------- |
| `value` | 渲染的文本。 支持 Markdown 格式。 | 必选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

{% tip %}

**提示**：YAML 处理将哈希符号视为评论。 要插入 Markdown 标题，请用引号括住文本。

对于多行文本，您可以使用竖线运算符。

{% endtip %}

#### 示例

```YAML{:copy}
body:
- type: markdown
  value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

您可以使用 `textarea` 元素添加多行文本字段到表单。 贡献者也可以在 `textarea` 字段中附加文件。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| 键             | 描述                                                       | 必选 | 类型  | 默认值                                             | 有效值                                                                                                                                                  |
| ------------- | -------------------------------------------------------- | -- | --- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `标签`          | 预期用户输入的简短描述，也以表单形式显示。                                    | 必选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `说明`          | 提供上下文或指导的文本区域的描述，以表单形式显示。                                | 可选 | 字符串 | 空字符串                                            | {% octicon "dash" aria-label="The dash icon" %}
| `placeholder` | 半透明的占位符，在文本区域空白时呈现。                                      | 可选 | 字符串 | 空字符串                                            | {% octicon "dash" aria-label="The dash icon" %}
| `value`       | 在文本区域中预填充的文本。                                            | 可选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `render`      | 如果提供了值，提交的文本将格式化为代码块。 提供此键时，文本区域将不会扩展到文件附件或 Markdown 编辑。 | 可选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | {% data variables.product.prodname_dotcom %} 已知的语言。 更多信息请参阅 [语言 YAML 文件](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)。 |

#### 验证

{% data reusables.form-schema.validations-intro %}

| 键 | 描述 | 必选 | 类型 | 默认值 | 有效值 |
| - | -- | -- | -- | --- | --- |
|   |    |    |    |     |     |
{% data reusables.form-schema.required-key %}

#### 示例

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

您可以使用 `input` 元素添加单行文本字段到表单。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| 键             | 描述                      | 必选 | 类型  | 默认值                                             | 有效值                                             |
| ------------- | ----------------------- | -- | --- | ----------------------------------------------- | ----------------------------------------------- |
| `标签`          | 预期用户输入的简短描述，也以表单形式显示。   | 必选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `说明`          | 提供上下文或指导的字段的描述，以表单形式显示。 | 可选 | 字符串 | 空字符串                                            | {% octicon "dash" aria-label="The dash icon" %}
| `placeholder` | 半透明的占位符，在字段空白时呈现。       | 可选 | 字符串 | 空字符串                                            | {% octicon "dash" aria-label="The dash icon" %}
| `value`       | 字段中预填的文本。               | 可选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

#### 验证

{% data reusables.form-schema.validations-intro %}

| 键 | 描述 | 必选 | 类型 | 默认值 | 有效值 |
| - | -- | -- | -- | --- | --- |
|   |    |    |    |     |     |
{% data reusables.form-schema.required-key %}

#### 示例

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the user account page (1-2 times a week)"
  validations:
    required: true
```

### `下拉`

您可以使用 `dropdown` 元素在表单中添加下拉菜单。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| 键          | 描述                            | 必选 | 类型    | 默认值                                             | 有效值                                             |
| ---------- | ----------------------------- | -- | ----- | ----------------------------------------------- | ----------------------------------------------- |
| `label`    | 预期用户输入的简短描述，以表单形式显示。          | 必选 | 字符串   | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `说明`       | 提供上下文或指导的下拉列表的描述，以表单形式显示。     | 可选 | 字符串   | 空字符串                                            | {% octicon "dash" aria-label="The dash icon" %}
| `multiple` | 确定用户是否可以选择多个选项。               | 可选 | 布尔值   | false                                           | {% octicon "dash" aria-label="The dash icon" %}
| `options`  | 用户可以选择的选项阵列。 不能为空，所有选择必须是不同的。 | 必选 | 字符串阵列 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

#### 验证

{% data reusables.form-schema.validations-intro %}

| 键 | 描述 | 必选 | 类型 | 默认值 | 有效值 |
| - | -- | -- | -- | --- | --- |
|   |    |    |    |     |     |
{% data reusables.form-schema.required-key %}

#### 示例

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

您可以使用 `checkboxes` 元素添加一组复选框到表单。

#### 属性

{% data reusables.form-schema.attributes-intro %}

| 键         | 描述                               | 必选 | 类型  | 默认值                                             | 有效值                                             |
| --------- | -------------------------------- | -- | --- | ----------------------------------------------- | ----------------------------------------------- |
| `标签`      | 预期用户输入的简短描述，以表单形式显示。             | 必选 | 字符串 | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}
| `说明`      | 复选框集的描述，以表单形式显示。 支持 Markdown 格式。 | 可选 | 字符串 | 空字符串                                            | {% octicon "dash" aria-label="The dash icon" %}
| `options` | 用户可以选择的复选框阵列。 有关语法，请参阅下文。        | 必选 | 数组  | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %}

{% data reusables.form-schema.options-syntax %}
{% data reusables.form-schema.required-key %}

#### 示例

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## 延伸阅读

- [YAML](https://yaml.org)
