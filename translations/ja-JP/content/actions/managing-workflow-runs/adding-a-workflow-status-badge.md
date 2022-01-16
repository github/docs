---
title: ワークフローステータスバッジを追加する
intro: リポジトリにステータスバッジを表示して、ワークフローのステータスを示すことができます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.actions-workflow-status-badge-into %}

ワークフローファイルの名前でワークフローを参照します。

```
https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```
### ワークフローファイル名を使用する

この Markdown の例では、`.github/workflow/main.yml`というファイル パスのワークフローにステータス バッジを追加します 。 リポジトリの `OWNER` は `github` Organization で、`REPOSITORY` 名は `docs` です。

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

### `branch` パラメータを使用する

この Markdown の例では、`feature-1`という名前のブランチにステータス バッジを追加します。

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

### `event` パラメータを使用する

この Markdown の例では、 `pull_request` イベントによってトリガーされたワークフロー実行のステータスを示すバッジを追加します。

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=pull_request)
```
