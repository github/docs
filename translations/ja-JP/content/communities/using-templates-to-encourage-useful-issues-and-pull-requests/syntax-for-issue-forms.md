---
title: Issue フォームの構文
intro: Issue フォームには、さまざまな入力タイプ、検証、デフォルトのアサインされた人、デフォルトのラベルを定義できます。
product: 'Issue フォームは、{% data variables.product.prodname_dotcom_the_website %} の公開リポジトリのベータで利用できます。'
versions:
  fpt: '*'
topics:
  - Community
---

{% data reusables.community.issue-forms-beta %}

## Issue フォームの YAML 構文について

YAML フォーム定義ファイルをリポジトリの`/.github/ISSUE_TEMPLATE` フォルダに追加することで、カスタム Issue フォームを作成できます。 {% data reusables.actions.learn-more-about-yaml %} Issue フォームにさまざまな入力タイプ、検証、デフォルトのアサインされた人、デフォルトのラベルを定義できます。

コントリビューターが Issue フォームに入力すると、それぞれの入力に対する回答が Markdown に変換され、Issue の本文に追加されます。 コントリビューターは、Issue フォームで作成された問題を編集でき、他のユーザは、他の方法で作成された Issue のように Issue を取り扱うことができます。

Issue forms are not supported for pull requests. You can create pull request templates in your repositories for collaborators to use. 詳細は「[リポジトリのプルリクエストテンプレートを作成する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)」を参照してください。

このサンプル YAML 設定ファイルでは、バグを報告するためにいくつかの入力を使用して Issue フォームを定義します。

{% data reusables.community.issue-forms-sample %}

## 最上位の構文

すべての Issue フォーム設定ファイルは、`name`、`description`、`body` のキー/値ペアで始まる必要があります。

```YAML{:copy}
name:
description:
body:
```

各 Issue フォームに次の最上位のキーを設定できます。

| キー          | 説明                                                                                          | 必須 | 種類                              |
|:----------- |:------------------------------------------------------------------------------------------- |:-- |:------------------------------- |
| `name`      | Issue フォームテンプレートの名前。 Markdown テンプレートを含む他のすべてのテンプレートと異なる、一意の名前である必要があります。                    | 必須 | 文字列型                            |
| `説明`        | A description for the issue form template, which appears in the template chooser interface. | 必須 | 文字列型                            |
| `body`      | Definition of the input types in the form.                                                  | 必須 | 配列                              |
| `assignees` | People who will be automatically assigned to issues created with this template.             | 任意 | Array or comma-delimited string |
| `labels`    | Labels that will automatically be added to issues created with this template.               | 任意 | 文字列型                            |
| `title`     | A default title that will be pre-populated in the issue submission form.                    | 任意 | 文字列型                            |

For the available `body` input types and their syntaxes, see "[Syntax for {% data variables.product.prodname_dotcom %}'s form schema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)."

## Converting a Markdown issue template to a YAML issue form template

You can use both Markdown and YAML issue templates in your repository. If you want to convert a Markdown issue template to a YAML issue form template, you must create a new YAML file to define the issue form. You can manually transpose an existing Markdown issue template to a YAML issue form. 詳しい情報については、「[リポジトリ用に Issue テンプレートを設定する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)」を参照してください。

If you want to use the same file name for your YAML issue form, you must delete the Markdown issue template when you commit the new file to your repository.

An example of a Markdown issue template and a corresponding YAML issue form template are below.

### Markdown issue template

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
Links? リファレンス? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### YAML issue form template

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
      Links? リファレンス? Anything that will give us more context about the issue you are encountering!

      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
```

## 参考リンク

- [YAML](https://yaml.org/)
