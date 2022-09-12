---
title: Issue フォームの構文
intro: Issue フォームには、さまざまな入力タイプ、検証、デフォルトのアサインされた人、デフォルトのラベルを定義できます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 7e147868ce370b57c6a7437bc81f7b554f50443b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090166'
---
{% data reusables.community.issue-forms-beta %}

## Issue フォームの YAML 構文について

YAML フォーム定義ファイルをリポジトリの `/.github/ISSUE_TEMPLATE` フォルダに追加することで、カスタム Issue フォームを作成できます。 {% data reusables.actions.learn-more-about-yaml %} Issue フォームにさまざまな入力タイプ、検証、デフォルトのアサインされた人、デフォルトのラベルを定義できます。

コントリビューターが Issue フォームに入力すると、それぞれの入力に対する回答が Markdown に変換され、Issue の本文に追加されます。 コントリビューターは、Issue フォームで作成された問題を編集でき、他のユーザは、他の方法で作成された Issue のように Issue を取り扱うことができます。

Issue フォームは、pull request ではサポートされていません。 コラボレーターが使用できるように、リポジトリの pull request テンプレートを作成できます。 詳細については、「[リポジトリ用の pull request テンプレートの作成](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)」」を参照してください。

このサンプル YAML 設定ファイルでは、バグを報告するためにいくつかの入力を使用して Issue フォームを定義します。

{% data reusables.community.issue-forms-sample %}

## 最上位の構文

すべての Issue フォーム構成ファイルは、`name`、`description`、および `body` のキー/値ペアで始まる必要があります。

```YAML{:copy}
name:
description:
body:
```

各 Issue フォームに次の最上位のキーを設定できます。

| Key | 説明 | 必須 | 型 |
| :-- | :-- | :-- | :-- | :-- |
| `name` | Issue フォームテンプレートの名前。 Markdown テンプレートを含む他のすべてのテンプレートと異なる、一意の名前である必要があります。 | 必須 | String |
| `description` | テンプレート選択インターフェイスに表示される、Issue フォーム テンプレートの説明。 | 必須 | String |
| `body` | フォームでの入力の種類の定義。 | 必須 | Array |
| `assignees` | このテンプレートで作成された Issue に自動的に割り当てられるユーザー。 | オプション | 配列またはコンマ区切りの文字列 |
| `labels` | このテンプレートで作成された Issue に自動的に追加されるラベル。 | オプション | 配列またはコンマ区切りの文字列 |
| `title` | Issue 送信フォームに事前に設定されるデフォルトのタイトル。 | オプション | String |

使用可能な `body` の入力の種類とその構文については、「[{% data variables.product.prodname_dotcom %} のフォーム スキーマの構文](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)」を参照してください。

## Markdown Issue テンプレートを YAML Issue フォーム テンプレートに変換する

リポジトリ内では、Markdown と YAML の両方の Issue テンプレートを使用できます。 Markdown Issue テンプレートを YAML Issue フォーム テンプレートに変換する場合は、新しい YAML ファイルを作成して、Issue フォームを定義する必要があります。 既存の Markdown Issue テンプレートを YAML Issue フォーム テンプレートに変換する場合は、手動で行うことができます。 詳細については、「[リポジトリ用に Issue テンプレートを設定する](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)」を参照してください。

YAML Issue フォームに同じファイル名を使用する場合は、新しいファイルをリポジトリにコミットするときに、Markdown Issue テンプレートを削除する必要があります。

Markdown Issue テンプレートと、対応する YAML Issue フォーム テンプレートの例を次に示します。

### Markdown Issue テンプレート

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

### YAML Issue フォーム テンプレート

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

## 参考資料

- [YAML](https://yaml.org/)
- [Issue フォームを作成するときの一般的な検証エラー](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/common-validation-errors-when-creating-issue-forms)
