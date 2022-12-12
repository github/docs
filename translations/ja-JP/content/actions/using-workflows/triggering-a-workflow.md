---
title: ワークフローのトリガー
shortTitle: Trigger a workflow
intro: '{% data variables.product.prodname_actions %} ワークフローを自動的にトリガーする方法'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cd91670d3d06d4d8f954afa114f6c4f189825d86
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191904'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## ワークフロー トリガーについて

{% data reusables.actions.about-triggers %}

ワークフロー トリガーは、`on` キーを使って定義されます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#on)に関するページを参照してください。

ワークフローの実行がトリガーされるには、以下のステップが生じます。

1. リポジトリでイベントが発生します。 イベントには、コミット SHA と Git ref が関連付けられています。
1. {% data variables.product.product_name %} により、リポジトリ内の `.github/workflows` ディレクトリで、イベントに関連付けらたコミット SHA または Git ref に存在するワークフロー ファイルが検索されます。
1. トリガーするイベントと一致する `on:` 値を持つすべてのワークフローに対して、ワークフロー実行がトリガーされます。 一部のイベントでは、実行のために、リポジトリの既定のブランチにワークフロー ファイルが存在している必要もあります。

  各ワークフロー実行では、そのイベントに関連付けられたコミット SHA または Git ref に存在するワークフローのバージョンが使用されます。 ワークフローが実行されると、{% data variables.product.product_name %} によってランナー環境の `GITHUB_SHA` (コミット SHA) と `GITHUB_REF` (Git ref) の環境変数が設定されます。 詳細については、[環境変数の使用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)に関する記事を参照してください。

### ワークフローからワークフローをトリガーする

{% data reusables.actions.actions-do-not-trigger-workflows %} 詳細については、[GITHUB_TOKEN を使用した認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)に関する記事を参照してください。

ワークフロー実行内からワークフローをトリガーする必要がある場合は、`GITHUB_TOKEN` の代わりに {% data variables.product.pat_generic %} を使用して、トークンを必要とするイベントをトリガーできます。 {% data variables.product.pat_generic %} を作成し、シークレットとして格納する必要があります。 {% data variables.product.prodname_actions %}の利用コストを最小化するために、再帰的あるいは意図しないワークフローの実行が生じないようにしてください。 {% data variables.product.pat_generic %}の作成について詳しくは、「[{% data variables.product.pat_generic %}の作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)」をご覧ください。 {% data variables.product.pat_generic %} をシークレットとして格納する方法について詳しくは、[暗号化されたシークレットの作成と格納](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)に関する記事を参照してください。

たとえば、次のワークフローでは、(`MY_TOKEN` というシークレットとして格納された) {% data variables.product.pat_generic %} を使い、{% data variables.product.prodname_cli %} を介してイシューにラベルを追加します。 ラベルの追加時に実行されるすべてのワークフローは、このステップが実行されると実行されます。

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

逆に、次のワークフローでは、イシューにラベルを追加するために `GITHUB_TOKEN` が使用されます。 ラベルの追加時に実行されるワークフローはトリガーされません。

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## イベントを使ってワークフローをトリガーする

`on` キーを使って、ワークフローをトリガーするイベントを指定します。 使用できるイベントについて詳しくは、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows)」を参照してください。

### 単一のイベントを使用する

{% data reusables.actions.on-single-example %}

### 複数のイベントを使用する

{% data reusables.actions.on-multiple-example %}

### アクティビティの種類とフィルターを複数のイベントと共に使用する

アクティビティの種類とフィルターを使って、ワークフローを実行するタイミングをさらに細かく制御できます。 詳細については、「[イベント アクティビティの種類を使用する](#using-event-activity-types)」と「[フィルターを使用する](#using-filters)」を参照してください。 {% data reusables.actions.actions-multiple-types %}

## イベント アクティビティの種類を使用する

{% data reusables.actions.actions-activity-types %}

## フィルターを使用する

{% data reusables.actions.actions-filters %}

### フィルターを使用して pull request イベントに対して特定のブランチをターゲットにする

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### フィルターを使用してプッシュ イベントに対して特定のブランチまたはタグをターゲットにする

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### フィルターを使用して pull request またはプッシュ イベントに対して特定のパスをターゲットにする

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### フィルターを使用してワークフロー実行イベントに対して特定のブランチをターゲットにする

{% data reusables.actions.workflows.section-specifying-branches %}

## 手動でトリガーされるワークフローの入力を定義する

{% data reusables.actions.workflow-dispatch-inputs %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## 再利用可能なワークフローの入力、出力、シークレットを定義する

{% data reusables.actions.reusable-workflows-enterprise-beta %}

再利用可能なワークフローが呼び出し元のワークフローから受け取る入力とシークレットを定義できます。 また、再利用可能なワークフローが呼び出し元のワークフローで使用できるようにする出力を指定することもできます。 詳細については、「[ワークフローの再利用](/actions/using-workflows/reusing-workflows)」を参照してください。

{% endif %}

## イベント情報を使用する

ワークフロー実行をトリガーしたイベントに関する情報は、`github.event` コンテキストで使用できます。 `github.event` コンテキストのプロパティは、ワークフローをトリガーしたイベントの種類によって異なります。 たとえば、イシューがラベル付けされたときにトリガーされるワークフローでは、そのイシューとラベルに関する情報が含まれます。

### イベントのすべてのプロパティを表示する

一般的なプロパティとペイロードの例については、webhook イベントのドキュメントを参照してください。 詳細については、「[webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)」を参照してください。

また、`github.event` コンテキスト全体を出力して、ワークフローをトリガーしたイベントで使用できるプロパティを確認することもできます。

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### イベント プロパティへのアクセスと使用

ワークフローで `github.event` コンテキストを使用できます。 たとえば、次のワークフローは、`package*.json`、`.github/CODEOWNERS`、または `.github/workflows/**` を変更する pull request が開かれると実行されます。 pull request の作成者 (`github.event.pull_request.user.login`) が `octobot` でも `dependabot[bot]` でもない場合、ワークフローでは {% data variables.product.prodname_cli %} を使用して pull request へのラベル付けとコメントを行います (`github.event.pull_request.number`)。

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

コンテキストの詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。 イベント ペイロードについて詳しくは、「[webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)」を参照してください。

## ワークフローの実行方法をさらに細かく制御する

イベント、イベント アクティビティの種類、またはイベント フィルターによる制御よりもさらに細かい制御が必要な場合は、条件と環境を使って、ワークフロー内の個々のジョブまたはステップを実行するかどうかを制御できます。

### 条件の使用

条件を使って、ワークフロー内のジョブまたはステップを実行するかどうかをさらに細かく制御できます。

#### イベント ペイロードの値を使用する例

たとえば、イシューに特定のラベルが追加されたときにワークフローを実行したい場合は、`issues labeled` イベント アクティビティの種類に対してトリガーし、条件を使ってワークフローをトリガーしたラベルをチェックすることができます。 次のワークフローは、ワークフローのリポジトリ内のイシューに任意のラベルが追加されたときに実行されますが、`run_if_label_matches` ジョブが実行されるのはラベルの名前が `bug` である場合のみです。

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

#### イベントの種類を使用する例

たとえば、ワークフローをトリガーしたイベントに応じて異なるジョブまたはステップを実行したい場合は、条件を使って、イベント コンテキストに特定のイベントの種類が存在するかどうかをチェックできます。 次のワークフローは、イシューまたは pull request がクローズされるたびに実行されます。 イシューがクローズされたためにワークフローが実行された場合、`github.event` コンテキストには `issue` の値が含まれますが、`pull_request` の値は含まれません。 したがって、`if_issue` ステップは実行されますが、`if_pr` ステップは実行されません。 逆に、pull request がクローズされたためにワークフローが実行された場合、`if_pr` ステップは実行されますが、`if_issue` ステップは実行されません。

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

イベント コンテキストで使用できる情報について詳しくは、「[イベント情報を使用する](#using-event-information)」を参照してください。 条件を使用する方法について詳しくは、「[式](/actions/learn-github-actions/expressions)」を参照してください。

### 環境を使用してワークフロー ジョブを手動でトリガーする

ワークフロー内の特定のジョブを手動でトリガーしたい場合は、特定のチームまたはユーザーからの承認を必要とする環境を使用できます。 まず、必要なレビュー担当者を使用して環境を構成します。 詳細については、「[デプロイに環境を使用する](/actions/deployment/targeting-different-environments/using-environments-for-deployment)」を参照してください。 次に、`environment:` キーを使って、ワークフロー内のジョブで環境名を参照します。 環境を参照するジョブは、少なくとも 1 人のレビュー担当者がそのジョブを承認するまで実行されません。

たとえば、次のワークフローは、main へのプッシュが発生するたびに実行されます。 `build` ジョブは常に実行されます。 `publish` ジョブは、`build` ジョブが正常に完了し (`needs: [build]` による)、`production` という環境のすべてのルール (必要なレビュー担当者を含む) に合格した (`environment: production` による) ときに初めて実行されます。

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}

## 使用できるイベント

使用可能なイベントの完全な一覧については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows)」を参照してください。
