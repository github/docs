---
title: ワークフローをトリガーするイベント
intro: '{% data variables.product.product_name %} で特定のアクティビティが実行された時、スケジュールした時間、または {% data variables.product.product_name %} 外でイベントが発生した時にワークフローを実行できるよう設定できます。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/reference/events-that-trigger-workflows
  - /actions/learn-github-actions/events-that-trigger-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Events that trigger workflows
ms.openlocfilehash: 74fe579db353607b449106b41e9787cf055fd643
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147645666'
---
## ワークフローをトリガーするイベントについて

ワークフロー トリガーは、ワークフローの実行を引き起こすイベントです。 ワークフロー トリガーの使い方の詳細については、「[ワークフローのトリガー](/actions/using-workflows/triggering-a-workflow)」を参照してください。

## 使用できるイベント

イベントによっては、複数のアクティビティの種類があります。 このようなイベントでは、ワークフローの実行をトリガーするアクティビティの種類を指定できます。 アクティビティの種類それぞれの意味の詳細については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhook-events-and-payloads)」を参照してください。 すべての Webhook イベントでワークフローがトリガーされるわけではないことに注意してください。

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

ワークフロー リポジトリ内のブランチ保護ルールが変更されたときにワークフローを実行します。 ブランチ保護ルールの詳細については、「[保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)」を参照してください。 ブランチ保護ルール API については、GraphQL API ドキュメントの「[BranchProtectionRule](/graphql/reference/objects#branchprotectionrule)」または REST API ドキュメントの「[ブランチ](/rest/reference/branches)」を参照してください。

たとえば、ブランチ保護ルールが `created` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

チェック実行に関連するアクティビティが発生したときにワークフローを実行します。 チェックの実行は、個別のテストであり、チェックスイートの一機能です。 詳細については、「[Checks API を使ってみる](/rest/guides/getting-started-with-the-checks-api)」を参照してください。 チェック実行 API については、GraphQL API ドキュメントの「[CheckRun](/graphql/reference/objects#checkrun)」または REST API ドキュメントの「[チェック](/rest/reference/checks#runs)」を参照してください。

たとえば、チェック実行が `rerequested` または `completed` だったときにワークフローを実行できます。

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)」を参照してください。 アクティビティの種類 `started` のみがサポートされていますが、このアクティビティの種類を指定すると、今後さらにアクティビティの種類が追加された場合に、ワークフローを特定のもののままにできます。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注:** 再帰的なワークフローを避けるために、{% data variables.product.prodname_actions %} によってチェック スイートが作成された場合にはこのイベントによってワークフローはトリガーされません。

{% endnote %}

チェック スイートのアクティビティが発生したときにワークフローを実行します。 チェック スイートは、特定のコミットに対して作成されたチェック実行のコレクションです。 チェック スイートでは、スイート内のチェック実行の状態と結果をまとめます。 詳細については、「[Checks API を使ってみる](/rest/guides/getting-started-with-the-checks-api)」を参照してください。 チェック スイート API の詳細については、GraphQL API ドキュメントの「[CheckSuite](/graphql/reference/objects#checksuite)」または REST API ドキュメントの「[チェック](/rest/reference/checks#suites)」を参照してください。

たとえば、チェック スイートが `completed` だったときにワークフローを実行できます。

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | 該当なし | 直近でブランチまたはタグが作成されたコミット | 作成されたブランチまたはタグ |

{% note %}

**注**: 一度に 3 つを超えるタグを作成した場合、イベントは作成されません。

{% endnote %}

誰かがワークフローのリポジトリに Git 参照 (Git ブランチまたはタグ) を作成したときにワークフローを実行します。 Git 参照を作成する API については、GraphQL API ドキュメントの「[createRef](/graphql/reference/mutations#createref)」または REST API ドキュメントの「[参照の作成](/rest/reference/git#create-a-reference)」を参照してください。

たとえば、`create` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  create
```

### `delete`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | 該当なし | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% data reusables.actions.branch-requirement %}

{% note %}

**注**: 一度に 3 つを超えるタグを削除した場合、イベントは作成されません。

{% endnote %}

誰かがワークフローのリポジトリで Git 参照 (Git ブランチまたはタグ) を削除したときにワークフローを実行します。 Git 参照を削除する API については、GraphQL API ドキュメントの「[deleteRef](/graphql/reference/mutations#deleteref)」または REST API ドキュメントの「[参照の削除](/rest/reference/git#delete-a-reference)」を参照してください。

たとえば、`delete` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  delete
```

### `deployment`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | 該当なし | デプロイされるコミット | デプロイするブランチまたはタグ (コミット SHA 付きで作成された場合は空)|

誰かがワークフローのリポジトリにデプロイを作成したときにワークフローを実行します。 コミット SHA 付きで作成されたデプロイには Git 参照がないことがあります。デプロイを作成する API については、GraphQL API ドキュメントの「[createDeployment](/graphql/reference/mutations#createdeployment)」または REST API ドキュメントの「[デプロイ](/rest/reference/repos#deployments)」を参照してください。

たとえば、`deployment` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  deployment
```

### `deployment_status`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | 該当なし | デプロイされるコミット | デプロイされるブランチまたはタグ (コミットの場合は空)|

{% note %}

**注:** デプロイの状態が `inactive` に設定されている場合、ワークフローの実行はトリガーされません。

{% endnote %}

サード パーティによってデプロイの状態が提供されたときにワークフローを実行します。 コミット SHA 付きで作成されたデプロイには Git 参照がないことがあります。デプロイの状態を作成する API については、GraphQL API ドキュメントの「[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)」または REST API ドキュメントの[デプロイの状態の作成](/rest/reference/deployments#create-a-deployment-status)に関する記事を参照してください。

たとえば、`deployment_status` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  deployment_status
```

{% ifversion discussions %}
### `discussion`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

ワークフローのリポジトリ内のディスカッションが作成または変更されたときにワークフローを実行します。 ディスカッションのコメントに関連するアクティビティには、[`discussion_comment`](#discussion_comment) イベントを使います。 ディスカッションの詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。 GraphQL API については、「[ディスカッション](/graphql/reference/objects#discussion)」を参照してください。

たとえば、ディスカッションが `created`、`edited`、または `answered` だったときにワークフローを実行できます。

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

ワークフローのリポジトリ内のディスカッションのコメントが作成または変更されたときにワークフローを実行します。 ディスカッションのコメントではなくディスカッションに関連するアクティビティには、[`discussion`](#discussion) イベントを使います。 ディスカッションの詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。 GraphQL API については、「[ディスカッション](/graphql/reference/objects#discussion)」を参照してください。

たとえば、ディスカッション コメントが `created` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `fork`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | 該当なし | デフォルトブランチの直近のコミット |  デフォルトブランチ |

{% data reusables.actions.branch-requirement %}

誰かがリポジトリをフォークしたときにワークフローを実行します。 REST API については、「[フォークの作成](/rest/reference/repos#create-a-fork)」を参照してください。

たとえば、`fork` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  fork
```

### `gollum`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | 該当なし | デフォルトブランチの直近のコミット |  デフォルトブランチ |

{% data reusables.actions.branch-requirement %}

誰かが Wiki ページを作成または更新したときにワークフローを実行します。 詳細については、[wiki について](/communities/documenting-your-project-with-wikis/about-wikis)に関する記事を参照してください。

たとえば、`gollum` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  gollum
```

### `issue_comment`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

issue または pull request のコメントが作成、編集、または削除されたときにワークフローを実行します。 issue コメント API については、GraphQL API ドキュメントの「[IssueComment](/graphql/reference/objects#issuecomment)」または REST API ドキュメントの [issue コメント](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)に関するページを参照してください。

たとえば、issue または pull request のコメントが `created` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### issue のみまたは pull request のみの `issue_comment`

`issue_comment` イベントは、issue と pull request の両方に関するコメントで発生します。 条件で `github.event.issue.pull_request` プロパティを使うと、トリガーするオブジェクトが issue か pull request かによって異なるアクションを実行できます。

たとえば、このワークフローでは、`issue_comment` イベントが pull request から発生した場合にのみ `pr_commented` ジョブを実行します。 `issue_comment` イベントが issue から発生した場合にのみ `issue_commented` ジョブが実行されます。

```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: {% raw %}${{ github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on PR $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: {% raw %}${{ !github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on issue $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
```

### `issues`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

ワークフローのリポジトリ内の issue が作成または変更されたときにワークフローを実行します。 issue のコメントに関連するアクティビティには、[`issue_comment`](#issue_comment) イベントを使います。 issue の詳細については、「[Issue について](/issues/tracking-your-work-with-issues/about-issues)」を参照してください。 issue API については、GraphQL API ドキュメントの「[Issue](/graphql/reference/objects#issue)」または REST API ドキュメントの「[Issue](/rest/reference/issues)」を参照してください。

たとえば、issue が `opened`、`edited`、または `milestoned` だったときにワークフローを実行できます。

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `label`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

ワークフローのリポジトリ内のラベルが作成または変更されたときにワークフローを実行します。 ラベルの詳細については、「[ラベルを管理する](/issues/using-labels-and-milestones-to-track-work/managing-labels)」を参照してください。 ラベル API については、GraphQL API ドキュメントの「[Label](/graphql/reference/objects#label)」または REST API ドキュメントの「[ラベル](/rest/reference/issues#labels)」を参照してください。

issue、pull request、またはディスカッションに対してラベルが追加または削除されたときにワークフローを実行する場合は、代わりに [`issues`](#issues)、[`pull_request`](#pull_request)、[`pull_request_target`](#pull_request_target)、または [`discussion`](#discussion) イベントにはアクティビティの種類 `labeled` または `unlabeled` を使います。

たとえば、ラベルが `created` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  label:
    types: [created, deleted]
```

{% ifversion fpt or ghec  %}

### `merge_group`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`merge_group`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#merge_group) | `checks_requested` | マージ グループの SHA | マージ グループの ref |

{% data reusables.pull_requests.merge-queue-beta %}

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} アクティビティの種類 `checks_requested` のみがサポートされていますが、このアクティビティの種類を指定すると、今後さらにアクティビティの種類が追加された場合に、ワークフローを特定のもののままにできます。 それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

マージ キューに pull request が追加されたときにワークフローを実行し、マージ グループにその pull request を追加します。 詳細については、「[pull request とマージ キューのマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)」を参照してください。

たとえば、`checks_requested` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  merge_group:
    types: [checks_requested]

```

{% endif %}
### `milestone`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

ワークフローのリポジトリ内のマイルストーンが作成または変更されたときにワークフローを実行します。 マイルストーンの詳細については、「[マイルストーンについて](/issues/using-labels-and-milestones-to-track-work/about-milestones)」を参照してください。 マイルストーン API については、GraphQL API ドキュメントの「[Milestone](/graphql/reference/objects#milestone)」または REST API ドキュメントの「[マイルストーン](/rest/reference/issues#milestones)」を参照してください。

マイルストーンに対して issue が追加または削除されたときにワークフローを実行する場合は、代わりに [`issues`](#issues) イベントにはアクティビティの種類 `milestoned` または `demilestoned` を使います。

たとえば、マイルストーンが `opened` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | 該当なし | デフォルトブランチの直近のコミット | 該当なし |

{% data reusables.actions.branch-requirement %}

リポジトリに対して {% data variables.product.prodname_pages %} が有効になっている場合、{% data variables.product.prodname_pages %} の公開元であるブランチに誰かがプッシュしたときにワークフローを実行します。 {% data variables.product.prodname_pages %} の公開元の詳細については、「[GitHub Pages サイトの公開元を設定する](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)」を参照してください。 REST API については、[ページ](/rest/reference/repos#pages)に関するページを参照してください。

たとえば、`page_build` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  page_build
```

### `project`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} アクティビティの種類 `edited` は、プロジェクト ボードの列またはカードではなくプロジェクト ボードが編集されたときに参照されます。 それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注**: このイベントは、組織所有またはユーザー所有のプロジェクトや、別のリポジトリで所有するプロジェクトではなく、ワークフローのリポジトリで所有するプロジェクトに対してのみ発生します。

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**注**: このイベントは、{% data variables.product.prodname_projects_v1 %} に対してのみ発生します。

{% endnote %} {% endif %}

プロジェクト ボードが作成または変更されたときにワークフローを実行します。 プロジェクト ボードのカードまたは列に関連するアクティビティには、代わりに [`project_card`](#project_card) または [`project_column`](#project_column) イベントを使います。 プロジェクト ボードの詳細については、「[プロジェクト ボードについて](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)」を参照してください。 プロジェクト ボード API については、GraphQL API ドキュメントの「[Project](/graphql/reference/objects#project)」または REST API ドキュメントの「[プロジェクト](/rest/reference/projects)」を参照してください。

たとえば、プロジェクトが `created` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>問題に - `converted`<br/>- `edited`<br/>- `deleted` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注**: このイベントは、組織所有またはユーザー所有のプロジェクトや、別のリポジトリで所有するプロジェクトではなく、ワークフローのリポジトリで所有するプロジェクトに対してのみ発生します。

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**注**: このイベントは、{% data variables.product.prodname_projects_v1 %} に対してのみ発生します。

{% endnote %} {% endif %}

プロジェクト ボード上のカードが作成または変更されたときにワークフローを実行します。 プロジェクト ボードまたはプロジェクト ボードの列に関連するアクティビティには、代わりに [`project`](#project) または [`project_column`](#project_column) イベントを使います。 プロジェクト ボードの詳細については、「[プロジェクト ボードについて](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)」を参照してください。 プロジェクト カード API については、GraphQL API ドキュメントの「[ProjectCard](/graphql/reference/objects#projectcard)」または REST API ドキュメントの[プロジェクト カード](/rest/reference/projects#cards)に関するページを参照してください。

たとえば、プロジェクト カードが `created` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注**: このイベントは、組織所有またはユーザー所有のプロジェクトや、別のリポジトリで所有するプロジェクトではなく、ワークフローのリポジトリで所有するプロジェクトに対してのみ発生します。

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**注**: このイベントは、{% data variables.product.prodname_projects_v1 %} に対してのみ発生します。

{% endnote %} {% endif %}

プロジェクト ボード上の列が作成または変更されたときにワークフローを実行します。 プロジェクト ボードまたはプロジェクト ボードのカードに関連するアクティビティには、代わりに [`project`](#project) または [`project_card`](#project_card) イベントを使います。 プロジェクト ボードの詳細については、「[プロジェクト ボードについて](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)」を参照してください。 プロジェクト列 API については、GraphQL API ドキュメントの「[ProjectColumn](/graphql/reference/objects#projectcolumn)」または REST API ドキュメントの[プロジェクト列](/rest/reference/projects#columns)に関するページを参照してください。

たとえば、プロジェクト列が `created` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | 該当なし | デフォルトブランチの直近のコミット |  デフォルトブランチ |

{% data reusables.actions.branch-requirement %}

ワークフローのリポジトリがプライベートからパブリックに変更されたときにワークフローを実行します。 REST API については、「[リポジトリの編集](/rest/reference/repos#edit)」を参照してください。

たとえば、`public` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  public
```

### `pull_request`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | `GITHUB_REF` ブランチでの最後のマージ コミット | PR マージ ブランチ `refs/pull/:prNumber/merge` |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)」を参照してください。 既定では、ワークフローは、`pull_request` イベントのアクティビティの種類が `opened`、`synchronize`、または `reopened` の場合にのみ実行されます。 さまざまなアクティビティの種類でワークフローをトリガーするには、`types` キーワードを使います。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#onevent_nametypes)に関するページを参照してください。

{% endnote %}

{% note %}

**注:** pull request にマージの競合がある場合、`pull_request` アクティビティではワークフローは実行されません。 マージの競合を最初に解決する必要があります。

逆に、`pull_request_target` イベントを含むワークフローは、pull request にマージの競合がある場合でも実行されます。 `pull_request_target` トリガーを使う前に、セキュリティ リスクに注意する必要があります。 詳細については、「[`pull_request_target`](#pull_request_target)」を参照してください。

{% endnote %}

ワークフローのリポジトリ内の pull request のアクティビティが発生したときにワークフローを実行します。 たとえば、アクティビティの種類が指定されていない場合、pull request を開いたり、再度開いたりしたとき、または pull request の head ブランチが更新されたときにワークフローが実行されます。 pull request レビュー、pull request レビュー コメント、または pull request コメントに関連するアクティビティには、代わりに [`pull_request_review`](#pull_request_review)、[`pull_request_review_comment`](#pull_request_review_comment)、または [`issue_comment`](#issue_comment) イベントを使います。 pull request API については、GraphQL API ドキュメントの「[PullRequest](/graphql/reference/objects#pullrequest)」または REST API ドキュメントの [Pull request](/rest/reference/pulls) に関するトピックを参照してください。

このイベントの `GITHUB_SHA` が pull request マージ ブランチの最後のマージ コミットであることに注意してください。 pull request の head ブランチへの最後のコミットのコミット ID を取得する場合は、代わりに `github.event.pull_request.head.sha` を使います。

たとえば、pull request を開いたり再度開いたりしたときにワークフローを実行できます。

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

イベント コンテキストを使って、ワークフロー内のジョブを実行するタイミングをさらに制御できます。 たとえば、このワークフローは pull request でレビューが要求されたときに実行されますが、`specific_review_requested` ジョブは `octo-team` によるレビューの要求時にのみ実行されます。

```yaml
on:
  pull_request:
    types: [review_requested]
jobs:
  specific_review_requested:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.requested_team.name == 'octo-team'}}{% endraw %}
    steps:
      - run: echo 'A review from octo-team was requested'
```

#### pull request の head またはベース ブランチに基づいてワークフローを実行する

`branches` または `branches-ignore` フィルターを使って、特定のブランチを対象とする pull request でのみ実行するようにワークフローを構成できます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)」を参照してください。

たとえば、このワークフローは、名前が `releases/` で始まるブランチを対象とする pull request を誰かが開いたときに実行されます。

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**注:** {% data reusables.actions.branch-paths-filter %} たとえば、次のワークフローは、JavaScript (`.js`) ファイルへの変更を含む pull request が、名前が `releases/` で始まるブランチで開かれた場合にのみ実行されます。

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

(pull request のベース ブランチ名ではなく) pull request の head ブランチ名に基づいてジョブを実行するには、条件で `github.head_ref` コンテキストを使います。 たとえば、このワークフローは pull request が開かれるたびに実行されますが、pull request の head が `releases/` で始まる名前のブランチである場合にのみ `run_if` ジョブが実行されます。

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### pull request で変更されたファイルに基づいてワークフローを実行する

また、pull request によって特定のファイルが変更されたときに実行するようにワークフローを構成することもできます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)」を参照してください。

たとえば、このワークフローは、pull request に JavaScript ファイル (`.js`) への変更が含まれているときに実行されます。

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**注:** {% data reusables.actions.branch-paths-filter %} たとえば、次のワークフローは、JavaScript (`.js`) ファイルへの変更を含む pull request が、名前が `releases/` で始まるブランチで開かれた場合にのみ実行されます。

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### pull request がマージされたときにワークフローを実行する

pull request がマージされると、pull request は自動的に閉じられます。 pull request のマージ時にワークフローを実行するには、イベントの `merged` 値を検査する条件とともにイベントの種類 `pull_request``closed` を使います。 たとえば、次のワークフローは、pull request が閉じるたびに実行されます。 `if_merged` ジョブは、pull request もマージされた場合にのみ実行されます。

```yaml
on:
  pull_request:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_comment` (`issue_comment` を使用)

(pull request の差分ではなく) pull request のコメントが作成、編集、または削除されたときにワークフローを実行するには、[`issue_comment`](#issue_comment) イベントを使います。 pull request レビューまたは pull request レビュー コメントに関連するアクティビティには、[`pull_request_review`](#pull_request_review) または [`pull_request_review_comment`](#pull_request_review_comment) イベントを使います。

### `pull_request_review`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | `GITHUB_REF` ブランチでの最後のマージ コミット | PR マージ ブランチ `refs/pull/:prNumber/merge` |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

pull request レビューが送信、編集、または無視されたときにワークフローを実行します。 pull request レビューは、本文コメントと状態に加えて、pull request レビュー コメントのグループです。 pull request レビュー コメントまたは pull request コメントに関連するアクティビティには、代わりに [`pull_request_review_comment`](#pull_request_review_comment) または [`issue_comment`](#issue_comment) イベントを使います。 pull request レビュー API については、GraphQL API ドキュメントの「[PullRequestReview](/graphql/reference/objects#pullrequest)」または REST API ドキュメントの「[Pull request のレビュー](/rest/reference/pulls#reviews)」を参照してください。

たとえば、pull request レビューが `edited` または `dismissed` だったときにワークフローを実行できます。

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### pull request が承認されたときにワークフローを実行する

pull request が承認されたときにワークフローを実行するには、種類 `submitted` の `pull_request_review` イベントを使ってワークフローをトリガーし、`github.event.review.state` プロパティを使ってレビューの状態を確認します。 たとえば、このワークフローは pull request レビューが送信されるたびに実行されますが、`approved` ジョブは、送信されたレビューが承認レビューである場合にのみ実行されます。

```yaml
on:
  pull_request_review:
    types: [submitted]

jobs:
  approved:
    if: github.event.review.state == 'approved'
    runs-on: ubuntu-latest
    steps:
      - run: echo "This PR was approved"
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_review_comment`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| `GITHUB_REF` ブランチでの最後のマージ コミット | PR マージ ブランチ `refs/pull/:prNumber/merge` |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

pull request レビュー コメントが変更されたときにワークフローを実行します。 pull request レビュー コメントは、pull request の差分に関するコメントです。 pull request レビューまたは pull request コメントに関連するアクティビティには、代わりに [`pull_request_review`](#pull_request_review) または [`issue_comment`](#issue_comment) イベントを使います。 pull request レビュー コメント API については、GraphQL API ドキュメントの「[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)」または REST API ドキュメントの[レビュー コメント](/rest/reference/pulls#comments)に関するトピックを参照してください。

たとえば、pull request レビュー コメントが `created` または `deleted` だったときにワークフローを実行できます。

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | PR ベースブランチの直近のコミット | PR ベースブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)」を参照してください。 既定では、ワークフローは、`pull_request_target` イベントのアクティビティの種類が `opened`、`synchronize`、または `reopened` の場合にのみ実行されます。 さまざまなアクティビティの種類でワークフローをトリガーするには、`types` キーワードを使います。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#onevent_nametypes)に関するページを参照してください。

{% endnote %}

ワークフローのリポジトリ内の pull request のアクティビティが発生したときにワークフローを実行します。 たとえば、アクティビティの種類が指定されていない場合、pull request を開いたり、再度開いたりしたとき、または pull request の head ブランチが更新されたときにワークフローが実行されます。

このイベントは、`pull_request` イベントのようにマージ コミットのコンテキストではなく、pull request のベースのコンテキストで実行されます。 これで、リポジトリを変更したり、ワークフローで使うシークレットを盗んだりする可能性がある、pull request の head から安全ではないコードが実行されるのが避けられます。 このイベントを使うと、ワークフローでは、pull request に対するラベルやコメントなどの作業をフォークから行うことができます。 pull request からコードをビルドまたは実行する必要がある場合は、このイベントを使わないでください。

リポジトリのセキュリティを維持するため、特定のパターン (SHA に似ているものなど) と一致する名前を持つブランチからは、`pull_request_target` イベントでワークフローがトリガーされない場合があります。

{% warning %}

**警告:** `pull_request_target` イベントによってトリガーされるワークフローでは、`permissions` キーが指定され、ワークフローがフォークからトリガーされてもシークレットにアクセスできる場合を除き、読み取り/書き込みリポジトリのアクセス許可が `GITHUB_TOKEN` に付与されます。 ワークフローはPull Requestのベースのコンテキストで実行されますが、このイベントでPull Requestから信頼できないコードをチェックアウトしたり、ビルドしたり、実行したりしないようにしなければなりません。 さらに、キャッシュではベース ブランチと同じスコープを共有します。 キャッシュ ポイズニングを防ぐために、キャッシュの内容が変更された可能性がある場合は、キャッシュを保存しないでください。 詳細については、GitHub Security Lab の Web サイトの [GitHub Actions およびワークフローのセキュリティ保護の維持: pwn 要求の阻止](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)に関するページを参照してください。

{% endwarning %}

たとえば、pull request が `assigned`、`opened`、`synchronize`、または `reopened` だったときにワークフローを実行できます。

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### pull request の head またはベース ブランチに基づいてワークフローを実行する

`branches` または `branches-ignore` フィルターを使って、特定のブランチを対象とする pull request でのみ実行するようにワークフローを構成できます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)」を参照してください。

たとえば、このワークフローは、名前が `releases/` で始まるブランチを対象とする pull request を誰かが開いたときに実行されます。

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**注:** {% data reusables.actions.branch-paths-filter %} たとえば、次のワークフローは、JavaScript (`.js`) ファイルへの変更を含む pull request が、名前が `releases/` で始まるブランチで開かれた場合にのみ実行されます。

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

(pull request のベース ブランチ名ではなく) pull request の head ブランチ名に基づいてジョブを実行するには、条件で `github.head_ref` コンテキストを使います。 たとえば、このワークフローは pull request が開かれるたびに実行されますが、pull request の head が `releases/` で始まる名前のブランチである場合にのみ `run_if` ジョブが実行されます。

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### pull request で変更されたファイルに基づいてワークフローを実行する

`paths` または `paths-ignore` フィルターを使って、pull request によって特定のファイルが変更されたときに実行するようにワークフローを構成することもできます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)」を参照してください。

たとえば、このワークフローは、pull request に JavaScript ファイル (`.js`) への変更が含まれているときに実行されます。

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**注:** {% data reusables.actions.branch-paths-filter %} たとえば、次のワークフローは、JavaScript (`.js`) ファイルへの変更を含む pull request が、名前が `releases/` で始まるブランチで開かれた場合にのみ実行されます。

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### pull request がマージされたときにワークフローを実行する

pull request がマージされると、pull request は自動的に閉じられます。 pull request のマージ時にワークフローを実行するには、イベントの `merged` 値を検査する条件とともにイベントの種類 `pull_request_target``closed` を使います。 たとえば、次のワークフローは、pull request が閉じるたびに実行されます。 `if_merged` ジョブは、pull request もマージされた場合にのみ実行されます。

```yaml
on:
  pull_request_target:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

### `push`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | 該当なし | ブランチを削除すると、ワークフロー実行の SHA (およびその関連する参照) がリポジトリの既定のブランチに戻ります。 | 更新された ref |

{% note %}

**注:** GitHub Actions で使用できる Webhook ペイロードには、`commit` オブジェクトの `added`、`removed`、`modified` の各属性は含まれません。 完全な commit オブジェクトは、API を使って取得できます。 詳細については、GraphQL API ドキュメントの「[Commit](/graphql/reference/objects#commit)」または REST API ドキュメントの[コミットの取得](/rest/reference/commits#get-a-commit)に関するトピックを参照してください。

{% endnote %}

{% note %}

**注**: 一度に 3 つを超えるタグをプッシュした場合、イベントは作成されません。

{% endnote %}

コミットまたはタグをプッシュするときにワークフローを実行します。

たとえば、`push` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  push
```

{% note %}

**注**: `push` Webhook イベントによってワークフローの実行がトリガーされると、Actions UI の [プッシュ元] フィールドには、作成者またはコミッターではなく、プッシャーのアカウントが表示されます。 一方、デプロイ キーによる SSH 認証を使って変更がリポジトリにプッシュされた場合は、[プッシュ元] フィールドは、デプロイ キーがリポジトリに追加されたときにそれを確認したリポジトリ管理者になります。

{% endnote %}

#### 特定のブランチへのプッシュが発生した場合にのみワークフローを実行する

`branches` または `branches-ignore` フィルターを使って、特定のブランチがプッシュされたときにのみ実行するようにワークフローを構成できます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)」を参照してください。

たとえば、このワークフローは、`main` か、`releases/` で始まるブランチに誰かがプッシュしたときに実行されます。

```yaml
on:
  push:
    branches:
      - 'main'
      - 'releases/**'
```

{% note %}

**注:** {% data reusables.actions.branch-paths-filter %} たとえば、次のワークフローは、JavaScript (`.js`) ファイルへの変更を含むプッシュが、名前が `releases/` で始まるブランチに対して行われた場合にのみ実行されます。

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### 特定のタグのプッシュが発生した場合にのみワークフローを実行する

`tags` または `tags-ignore` フィルターを使って、特定のタグがプッシュされたときにのみ実行するようにワークフローを構成できます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)」を参照してください。

たとえば、このワークフローは、`v1.` で始まるタグを誰かがプッシュしたときに実行されます。

```yaml
on:
  push:
    tags:
      - v1.**
```

#### プッシュが特定のファイルに影響を与える場合にのみワークフローを実行する

`paths` または `paths-ignore` フィルターを使って、特定のファイルへのプッシュが発生したときに実行するようにワークフローを構成することができます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)」を参照してください。

たとえば、このワークフローは、誰かが JavaScript ファイル (`.js`) に変更をプッシュしたときに実行されます。

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**注:** {% data reusables.actions.branch-paths-filter %} たとえば、次のワークフローは、JavaScript (`.js`) ファイルへの変更を含むプッシュが、名前が `releases/` で始まるブランチに対して行われた場合にのみ実行されます。

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

### `registry_package`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | 公開されたパッケージのコミット | 公開されたパッケージのブランチもしくはタグ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data variables.product.prodname_registry %} に関連するアクティビティがリポジトリで発生したときにワークフローを実行します。 詳細については、「[{% data variables.product.prodname_registry %} のドキュメント](/packages)」を参照してください。

たとえば、新しいパッケージのバージョンが `published` になったらワークフローを実行できます。

```yaml
on:
  registry_package:
    types: [published]
```

### `release`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | リリースのタグが付いた直近のコミット | リリース `refs/tags/<tag_name>` のタグ参照 |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**注:** ワークフローは、ドラフト リリースのアクティビティの種類 `created`、`edited`、または `deleted` ではトリガーされません。 {% data variables.product.product_name %} ブラウザー UI を使ってリリースを作成すると、リリースがドラフトとして自動的に保存される場合があります。

{% endnote %}

{% note %}

**注:** `prereleased` 型は、ドラフト リリースから公開されたプレリリースではトリガーされませんが、`published` 型はトリガーされます。 *安定した* プレリリースの発行時にワークフローを実行する場合は、次の`published`代わりにサブスクライブ`released`します`prereleased`。

{% endnote %}

リポジトリのリリース アクティビティが発生したときにワークフローを実行します。 リリース API については、GraphQL API ドキュメントの「[Release](/graphql/reference/objects#release)」または REST API ドキュメントの「[リリース](/rest/reference/releases)」を参照してください。

たとえば、リリースが `published` だったときにワークフローを実行できます。

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | Custom | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% data reusables.actions.branch-requirement %}

{% data variables.product.product_name %} の外部で生じるアクティビティのためにワークフローをトリガーしたい場合、{% data variables.product.product_name %} API を使って、[`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) と呼ばれる Webhook イベントをトリガーできます。 詳細については、「[リポジトリ ディスパッチ イベントの作成](/rest/reference/repos#create-a-repository-dispatch-event)」を参照してください。

`repository_dispatch` イベントを作成する要求を行う場合は、アクティビティの種類を説明する `event_type` を指定する必要があります。 既定では、`repository_dispatch` のすべてのアクティビティの種類によってワークフローの実行がトリガーされます。 `types` キーワードを使うと、`repository_dispatch` Webhook ペイロードで特定の `event_type` 値が送信されたときに実行されるワークフローを制限できます。

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**注:** `event_type` の値は 100 文字に制限されています。

{% endnote %}

`client_payload` パラメーターを使って送信するすべてのデータは、ワークフローの `github.event` コンテキストで使用できます。 たとえば、リポジトリ ディスパッチ イベントを作成するときにこの要求本文を送信する場合は、次のようになります。

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

その後、次のようにワークフロー内のペイロードにアクセスできます。

```yaml
on:
  repository_dispatch:
    types: [test_result]

jobs:
  run_if_failure:
    if: {% raw %}${{ !github.event.client_payload.passed }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - env:
          MESSAGE: {% raw %}${{ github.event.client_payload.message }}{% endraw %}
        run: echo $MESSAGE
```

### `schedule`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| 該当なし | 該当なし | デフォルトブランチの直近のコミット | デフォルトブランチ | スケジュールしたワークフローを実行するよう設定した時。 スケジュールされたワークフローでは、[POSIX cron 構文](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)が使用されます。 詳細については、「[イベントを含むワークフローのトリガー](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)」を参照してください。 |

{% data reusables.actions.schedule-delay %}

`schedule` イベントを使うと、スケジュールした時刻にワークフローをトリガーできます。

{% data reusables.repositories.actions-scheduled-workflow-example %}

クーロン構文では、スペースで分けられた 5 つのフィールドがあり、各フィールドは時間の単位を表わします。

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

5 つのフィールドいずれにおいても、以下の演算子を使用できます:

| 演算子 | 説明 | 例 |
| -------- | ----------- | ------- |
| * | 任意の値 | `15 * * * *` では、毎日、毎時、15 分ごとに実行します。 |
| , | 値リストの区切り文字 | `2,10 4,5 * * *` では、毎日、午前 4 時および 5 時の、2 分および 10 分に実行します。 |
| - | 値の範囲 | `30 4-6 * * *` では、午前 4 時、5 時、6 時の、30 分に実行します。 |
| / | ステップ値 | `20/15 * * * *` では、20 分から 59 分までの間で、15 分おきに実行します (20 分、35 分、50 分)。 |

{% note %}

**注:** {% data variables.product.prodname_actions %} では、標準以外の構文 `@yearly`、`@monthly`、`@weekly`、`@daily`、`@hourly`、`@reboot` はサポートされません。

{% endnote %}

[crontab guru](https://crontab.guru/) を使うと、cron 構文の生成および実行時間の確認に役立ちます。 作業の開始に役立つ [crontab guru のサンプル](https://crontab.guru/examples.html)一覧もあります。

ワークフロー内のクーロン構文を最後に修正したユーザには、スケジュールされたワークフローの通知が送られます。 詳細については、「[ワークフロー実行の通知](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)」を参照してください。

### `status`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | 該当なし | デフォルトブランチの直近のコミット | 該当なし |

{% data reusables.actions.branch-requirement %}

Git コミットの状態が変更されたときにワークフローを実行します。 たとえば、コミットは `error`、`failure`、`pending`、または `success` としてマークできます。 状態の変更に関する詳細を指定する場合は、[`check_run`](#check_run) イベントを使用できます。 コミット状態 API については、GraphQL API ドキュメントの「[Status](/graphql/reference/objects#statue)」または REST API ドキュメントの[状態](/rest/reference/commits#commit-statuses)に関するトピックを参照してください。

たとえば、`status` イベントが発生したときにワークフローを実行できます。

```yaml
on:
  status
```

新しいコミット状態に基づいてワークフローでジョブを実行する場合は、`github.event.state` コンテキストを使用できます。 たとえば、次のワークフローはコミット状態が変更されたときにトリガーされますが、`if_error_or_failure` ジョブは新しいコミット状態が `error` または `failure` の場合にのみ実行されます。

```yaml
on:
  status
jobs:
  if_error_or_failure:
    runs-on: ubuntu-latest
    if: >-
      github.event.state == 'error' ||
      github.event.state == 'failure'
    steps:
      - env:
          DESCRIPTION: {% raw %}${{ github.event.description }}{% endraw %}
        run: |
          echo The status is error or failed: $DESCRIPTION
```

### `watch`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} アクティビティの種類 `started` のみがサポートされていますが、このアクティビティの種類を指定すると、今後さらにアクティビティの種類が追加された場合に、ワークフローを特定のもののままにできます。 それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

ワークフローのリポジトリが Star 付きになったときにワークフローを実行します。 pull request API については、GraphQL API ドキュメントの「[addStar](/graphql/reference/mutations#addstar)」または REST API ドキュメントの [Star 付け](/rest/reference/activity#starring)に関するトピックを参照してください。

たとえば、誰かがリポジトリに star を付けたときにワークフローを実行できます。これは、Watch イベントのアクティビティの種類 `started` です。

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

### `workflow_call`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| 呼び出し元ワークフローと同じ | 該当なし | 呼び出し元ワークフローと同じ | 呼び出し元ワークフローと同じ |

`workflow_call` は、別のワークフローからワークフローを呼び出すことができることを示すために使用されます。 `workflow_call` イベントを使ってワークフローがトリガーされると、呼び出し対象のワークフロー内のイベント ペイロードは、呼び出し元ワークフローからの同じイベント ペイロードになります。 詳細については、「[ワークフローの再利用](/actions/learn-github-actions/reusing-workflows)」を参照してください。

次の例では、別のワークフローから呼び出された場合にのみワークフローを実行します。

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | 該当なし | `GITHUB_REF` ブランチでの最後のコミット | ディスパッチを受信したブランチ |

ワークフローを手動でトリガーするには、`workflow_dispatch` イベントを使います。 {% data variables.product.product_name %} API、{% data variables.product.prodname_cli %}、または {% data variables.product.product_name %} ブラウザー インターフェイスを使って、ワークフロー実行を手動でトリガーできます。 詳細については、「[ワークフローの手動実行](/actions/managing-workflow-runs/manually-running-a-workflow)」を参照してください。

```yaml
on: workflow_dispatch
```

#### 入力の提供

カスタム定義の入力プロパティ、デフォルトの入力値、イベントに必要な入力をワークフローで直接設定できます。 イベントをトリガーするときは、`ref` と任意の `inputs` を指定できます。 ワークフローが実行されたら、{% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %} コンテキストで入力値にアクセスできます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %} この例では、`logLevel`、`tags`、`environment` という入力を定義します。 これらの入力の値は、ワークフローに実行時に渡します。 その後、このワークフローで、{% ifversion actions-unified-inputs %}`inputs.logLevel`、`inputs.tags`、`inputs.environment`{% else %}`github.event.inputs.logLevel`、`github.event.inputs.tags`、`github.event.inputs.environment`{% endif %} コンテキスト プロパティを使って、値をログに出力します。

```yaml
on:
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning'
        type: choice
        options:
        - info
        - warning
        - debug
      tags:
        description: 'Test scenario tags'
        required: false
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true

jobs:
  log-the-inputs:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Log level: $LEVEL"
          echo "Tags: $TAGS"
          echo "Environment: $ENVIRONMENT"
        env:
          LEVEL: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.logLevel }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.logLevel }}{% endraw %}{% endif %}
          TAGS: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.tags }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.tags }}{% endraw %}{% endif %}
          ENVIRONMENT: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.environment }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.environment }}{% endraw %}{% endif %}
```

ブラウザーからこのワークフローを実行する場合は、ワークフローを実行する前に、必要な入力の値を手動で入力する必要があります。

![ワークフローの入力](/assets/images/help/images/workflow-dispatch-inputs.png)

スクリプトからワークフローを実行するとき、または {% data variables.product.prodname_cli %} を使って、入力を渡すこともできます。 次に例を示します。

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

詳細については、「[ワークフローの手動実行](/actions/managing-workflow-runs/manually-running-a-workflow)」の {% data variables.product.prodname_cli %} の情報を参照してください。

{% else %}この例では、`name` と `home` の入力を定義し、{% ifversion actions-unified-inputs %}`inputs.name` と `inputs.home`{% else %}`github.event.inputs.name` と `github.event.inputs.home`{% endif %} のコンテキストを使ってそれらを出力します。 `home` が指定されていない場合、既定値の 'The Octoverse' が出力されます。

```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo Hello $NAME!
          echo -in $HOME
        env:
          NAME: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.name }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.name }}{% endraw %}{% endif %}
          HOME: {% ifversion actions-unified-inputs %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% endif %}
```
{% endif %}

### `workflow_run`

| webhook イベントのペイロード | アクティビティの種類 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested` | デフォルトブランチの直近のコミット | デフォルトブランチ |

{% note %}

**注**: {% data reusables.developer-site.multiple_activity_types %} ワークフローの再実行時にアクティビティの種類 `requested` は発生しません。 それぞれのアクティビティの種類については、「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)」を参照してください。 {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**注:** 3 つを超えるレベルのワークフローを連結するために、`workflow_run` を使うことはできません。 たとえば、最初のワークフロー `A` の実行後に (`B` から `F` という) 5 つのワークフローをトリガーして順番に実行しようとした場合 (つまり、`A` → `B` → `C` → `D` → `E` → `F`)、ワークフロー `E` と`F` は実行されません。

{% endnote %}

このイベントは、ワークフローの実行が要求されたか完了したときに発生します。 これで、別のワークフローの実行または完了に基づいてワークフローを実行できます。 `workflow_run` イベントによって開始されたワークフローでは、前のワークフローではできなかった場合でも、シークレットや書き込みトークンにアクセスできます。 これは、以前のワークフローが意図的に権限を与えられていない場合に役立ちますが、権限を与えられたアクションは後のワークフローで行わなければなりません。

この例では、ワークフローは個別の「Run Tests」ワークフローの完了後に実行されるように設定されています。

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

`workflow_run` イベントに複数の `workflows` を指定した場合、実行する必要があるワークフローは 1 つだけです。 たとえば、次のトリガーを持つワークフローは、"ステージング" ワークフローまたは "ラボ" ワークフローが完了するたびに実行されます。

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### 別のワークフローの結果に基づいてワークフローを実行する

ワークフロー実行は、前のワークフローの結果に関係なくトリガーされます。 トリガーするワークフローの結果に基づいてジョブまたはステップを実行する場合は、`github.event.workflow_run.conclusion` プロパティで条件を使用できます。 たとえば、このワークフローは、"Build" という名前のワークフローが完了するたびに実行されますが、`on-success` ジョブは、"Build" ワークフローが成功した場合にのみ実行され、`on-failure` ジョブは "Build" ワークフローが失敗した場合にのみ実行されます。

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow passed'
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow failed'
```

#### ブランチに基づいて実行するワークフローを制限する

`branches` または `branches-ignore` フィルターを使って、ワークフローをトリガーするために、トリガーするワークフローで実行する必要があるブランチを指定できます。 詳細については、「[GitHub Actions のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)」を参照してください。 たとえば、次のトリガーを持つワークフローは、名前が `canary` のブランチで `Build` という名前のワークフローが実行される場合にのみ実行されます。

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### トリガーするワークフローからデータを使う

ワークフローをトリガーしたワークフローに対応する [ `workflow_run`イベント ペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)にアクセスできます。 たとえば、トリガーするワークフローによって成果物が生成される場合、`workflow_run` イベントでトリガーされたワークフローからこれらの成果物にアクセスできます。

次のワークフローでは、データを成果物としてアップロードします。 (この簡略化された例では、データは pull request 番号です)。

```yaml
name: Upload data

on:
  pull_request:

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:
      - name: Save PR number
        env:
          PR_NUMBER: {% raw %}${{ github.event.number }}{% endraw %}
        run: |
          mkdir -p ./pr
          echo $PR_NUMBER > ./pr/pr_number
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: pr_number
          path: pr/
```

上記のワークフローの実行が完了すると、次のワークフローの実行がトリガーされます。 次のワークフローでは、`github.event.workflow_run` コンテキストと {% data variables.product.product_name %} REST API を使って、上記のワークフローによってアップロードされた成果物をダウンロードします。また、ダウンロードした成果物を解凍し、番号が成果物としてアップロードされた pull request についてコメントします。

```yaml
name: Use the data

on:
  workflow_run:
    workflows: [Upload data]
    types:
      - completed

jobs:
  download:
    runs-on: ubuntu-latest
    steps:
      - name: 'Download artifact'
        uses: {% data reusables.actions.action-github-script %}
        with:
          script: |
            let allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
               owner: context.repo.owner,
               repo: context.repo.repo,
               run_id: context.payload.workflow_run.id,
            });
            let matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
              return artifact.name == "pr_number"
            })[0];
            let download = await github.rest.actions.downloadArtifact({
               owner: context.repo.owner,
               repo: context.repo.repo,
               artifact_id: matchArtifact.id,
               archive_format: 'zip',
            });
            let fs = require('fs');
            fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/pr_number.zip`, Buffer.from(download.data));

      - name: 'Unzip artifact'
        run: unzip pr_number.zip

      - name: 'Comment on PR'
        uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            let fs = require('fs');
            let issue_number = Number(fs.readFileSync('./pr_number'));
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issue_number,
              body: 'Thank you for the PR!'
            });
```
