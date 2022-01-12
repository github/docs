---
title: ワークフローステータスバッジを追加する
intro: リポジトリにステータスバッジを表示して、ワークフローのステータスを示すことができます。
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add a status badge
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}

ワークフローファイルの名前でワークフローを参照します。

```markdown
![example workflow]({% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg)
```
## ワークフローファイル名を使用する

この Markdown の例では、`.github/workflow/main.yml`というファイル パスのワークフローにステータス バッジを追加します 。 リポジトリの `OWNER` は `github` Organization で、`REPOSITORY` 名は `docs` です。

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## `branch` パラメータを使用する

この Markdown の例では、`feature-1`という名前のブランチにステータス バッジを追加します。

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## `event` パラメータを使用する

This Markdown example adds a badge that displays the status of workflow runs triggered by the `push` event, which will show the status of the build for the current state of that branch.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
