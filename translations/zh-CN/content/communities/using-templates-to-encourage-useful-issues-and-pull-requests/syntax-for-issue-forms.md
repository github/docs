---
title: 议题表单的语法
intro: 您可以为您的议题表单定义不同的输入类型、验证、默认受理人和默认标签。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
---

{% data reusables.community.issue-forms-beta %}

## 关于议题表单的 YAML 语法

您可以通过将 YAML 表单定义文件添加到仓库中的 `/.github/ISSUE_TEMPLATE` 文件夹来创建自定义议题表单。 {% data reusables.actions.learn-more-about-yaml %} 您可以为议题表单定义不同的输入类型、验证、默认受理人和默认标签。

当贡献者填写议题表单时，他们对每个输入的响应都会转换为 Markdown 并添加到议题正文中。 贡献者可以编辑使用议题表单创建的议题，其他人可以与议题（如通过其他方法创建的议题）进行交互。

拉取请求不支持议题表单。 您可以在存储库中创建拉取请求模板，供协作者使用。 更多信息请参阅"[为仓库创建拉取请求模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)"。

此示例 YAML 配置文件使用多个输入报告漏洞来定义议题表单。

{% data reusables.community.issue-forms-sample %}

## 顶级语法

所有议题表单配置文件必须以 `name`、`description` 和 `body` 键值对开头。

```YAML{:copy}
name:
description:
body:
```

您可以为每个议题表单设置以下顶级键。

| 键           | 描述                                     | 必选 | 类型          |
|:----------- |:-------------------------------------- |:-- |:----------- |
| `name`      | 议题表单模板的名称。 必须与所有其他模板不同，包括 Markdown 模板。 | 必选 | 字符串         |
| `说明`        | 议题表单模板的描述，出现在模板选择器界面中。                 | 必选 | 字符串         |
| `正文`        | 表单中输入类型的定义。                            | 必选 | 数组          |
| `assignees` | 将自动分配给使用此模板创建的议题的人员。                   | 可选 | 阵列或逗号分界的字符串 |
| `labels`    | 将自动添加到此模板创建的议题的标签。                     | 可选 | 阵列或逗号分界的字符串 |
| `title`     | 在议题提交表单中预填的默认标题。                       | 可选 | 字符串         |

有关可用的 `body` 输入类型及其语法，请参阅“[{% data variables.product.prodname_dotcom %} 表单架构的语法](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)”。

## 将 Markdown 议题模板转换为 YAML 议题表单模板

您可以在仓库中同时使用 Markdown 和 YAML议题模板。 如果您想将 Markdown 议题模板转换为 YAML 议题表模板， 您必须创建一个新的 YAML 文件来定义议题表单。 您可以手动将现有的 Markdown 议题模板转换为 YAML 议题表单。 更多信息请参阅“[为仓库配置议题模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)”。

如果您想要对 YAML 议题表单使用相同的文件名称，则在将新文件提交到仓库时，您必须删除 Markdown 议题模板。

下面是 Markdown 议题模板和相应的 YAML 议题表单模板示例。

### Markdown 议题模板

```markdown{:copy}
---
name: 🐞 Bug
about: File a bug/issue
title: '[BUG] <title>'
labels: Bug, Needs Triage
assignees: ''

---

{% raw %}<{% endraw %}!--
Note: Please search to see if an issue already exists for the bug you encountered.
--{% raw %}>{% endraw %}

### Current Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you're experiencing. --{% raw %}>{% endraw %}

### Expected Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you expected to happen. --{% raw %}>{% endraw %}

### Steps To Reproduce:
{% raw %}<{% endraw %}!--
Example: steps to reproduce the behavior:
1. In this environment...
2. With this config...
3. Run '...'
4. See error...
--{% raw %}>{% endraw %}

### Environment:
{% raw %}<{% endraw %}!--
Example:
- OS: Ubuntu 20.04
- Node: 13.14.0
- npm: 7.6.3
--{% raw %}>{% endraw %}

### Anything else:
{% raw %}<{% endraw %}!--
Links? References? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### YAML 议题表单模板

```yaml{:copy}
name: 🐞 Bug
description: File a bug/issue
title: "[BUG] <title>"
labels: [Bug, Needs Triage]
body:
- type: checkboxes
  attributes:
    label: Is there an existing issue for this?
    description: Please search to see if an issue already exists for the bug you encountered.
    options:
    - label: I have searched the existing issues
      required: true
- type: textarea
  attributes:
    label: Current Behavior
    description: A concise description of what you're experiencing.
  validations:
    required: false
- type: textarea
  attributes:
    label: Expected Behavior
    description: A concise description of what you expected to happen.
  validations:
    required: false
- type: textarea
  attributes:
    label: Steps To Reproduce
    description: Steps to reproduce the behavior.
    placeholder: |
      1. In this environment...
      2. With this config...
      3. Run '...'
      4. See error...
  validations:
    required: false
- type: textarea
  attributes:
    label: Environment
    description: |
      examples:
        - **OS**: Ubuntu 20.04
        - **Node**: 13.14.0
        - **npm**: 7.6.3
    value: |
        - OS:
        - Node:
        - npm:
    render: markdown
  validations:
    required: false
- type: textarea
  attributes:
    label: Anything else?
    description: |
      Links? References? Anything that will give us more context about the issue you are encountering!

      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
```

## 延伸阅读

- [YAML](https://yaml.org/)
- [创建议题表单时的常见验证错误](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/common-validation-errors-when-creating-issue-forms)
