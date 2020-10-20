---
title: ワークフローをトリガーするイベント
intro: '{% data variables.product.product_name %} で特定のアクティビティが実行された時、スケジュールした時間、または {% data variables.product.product_name %} 外でイベントが発生した時にワークフローを実行できるよう設定できます。'
product: '{% data reusables.gated-features.actions %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### Configuring workflow events

You can configure workflows to run for one or more events using the `on` workflow syntax. 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/articles/workflow-syntax-for-github-actions#on)」を参照してください。

{% data reusables.github-actions.actions-on-examples %}

{% note %}

**ノート:** `GITHUB_TOKEN`を使って新しいワークフローの実行をトリガーすることはできません。 詳しい情報については「[個人アクセストークンを使った新しいワークフローのトリガー](#triggering-new-workflows-using-a-personal-access-token)」を参照してください。

{% endnote %}

ワークフローの実行がトリガーされるには、以下のステップが生じます。

1. An event occurs on your repository, and the resulting event has an associated commit SHA and Git ref.
2. リポジトリ内の関連づけられたコミットSHAもしくはGit refにおける `.github/workflows`ディレクトリ内でワークフローファイルが検索される。 ワークフローファイルは、コミットSHAあるいはGit refを考慮した上で存在していなければなりません。

  たとえば、イベントが特定のリポジトリブランチで発生したなら、ワークフローファイルはそのブランチ上でリポジトリ内に存在しなければなりません。
1. そのコミットSHA及びGit refのワークフローファイルが調べられ、トリガーを起こしたイベントにマッチする`on:`の値を持つワークフローについて新しい実行がトリガーされる。

  ワークフローの実行は、イベントをトリガーしたのと同じコミットSHA及びGit refにあるリポジトリのコード上で実行されます。 ワークフローを実行すると、{% data variables.product.product_name %} はランナー環境において `GITHUB_SHA` (コミット SHA) および `GITHUB_REF` (Git ref) 環境変数を設定します。 詳しい情報については、「[環境変数の利用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)」を参照してください。

### スケジュールしたイベント

`schedule` イベントを使用すると、スケジュールされた時間にワークフローをトリガーできます。

#### `schedule`

| webhook イベントのペイロード | アクティビティタイプ | `GITHUB_SHA`      | `GITHUB_REF`                                                                                                                                                                                                                                                                          |
| ------------------ | ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n/a                | n/a        | デフォルトブランチの直近のコミット | デフォルトブランチ | スケジュールしたワークフローを実行するよう設定したとき。 スケジュールしたワークフローは、[POSIX クーロン構文](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)を使用します。 詳しい情報については、「[イベントでワークフローをトリガーする](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)」を参照してください。 |

{% data reusables.repositories.actions-scheduled-workflow-example %}

クーロン構文では、スペースで分けられた 5 つのフィールドがあり、各フィールドは時間の単位を表わします。

```
┌───────────── 分 (0 - 59)
│ ┌───────────── 時間 (0 - 23)
│ │ ┌───────────── 日 (1 - 31)
│ │ │ ┌───────────── 月 (1 - 12 または JAN-DEC)
│ │ │ │ ┌───────────── 曜日 (0 - 6 または SUN-SAT)
│ │ │ │ │                                   
│ │ │ │ │
│ │ │ │ │
* * * * *
```

5 つのフィールドいずれにおいても、以下の演算子を使用できます:

| 演算子 | 説明         | サンプル                                                            |
| --- | ---------- | --------------------------------------------------------------- |
| *   | 任意の値       | `* * * * *` 毎日、毎分実行します。                                         |
| ,   | 値リストの区切り文字 | `2,10 4,5 * * *` 毎日、午前 4 時および午前 5 時の、2 分および 10 分に実行します。         |
| -   | 値の範囲       | `0 4-6 * * *` 午前 4 時、5 時、および 6 時の、0 分に実行します。                    |
| /   | ステップ値      | `20/15 * * * *` 20 分から 59 分までの間で、15 分おきに実行します (20 分、35 分、50 分)。 |

{% note %}

**注釈:** {% data variables.product.prodname_actions %} は、非標準的構文　(`@yearly`、`@monthly`、`@weekly`、`@daily`、`@hourly`、`@reboot`) をサポートしていません。

{% endnote %}

[crontab guru](https://crontab.guru/) を使うと、クーロン構文の生成および実行時間の確認に役立ちます。 また、クーロン構文の生成を支援するため、[crontab guru のサンプル](https://crontab.guru/examples.html)リストもあります。

### 手動イベント

ワークフローの実行を手動でトリガーできます。 リポジトリ内の特定のワークフローをトリガーするには、`workflow_dispatch` イベントを使用します。 リポジトリで複数のワークフローをトリガーし、カスタムイベントとイベントタイプを作成するには、`repository_dispatch` イベントを使用します。

#### `workflow_dispatch`

| webhook イベントのペイロード                                               | アクティビティタイプ | `GITHUB_SHA`               | `GITHUB_REF`    |
| ---------------------------------------------------------------- | ---------- | -------------------------- | --------------- |
| [workflow_dispatch](/webhooks/event-payloads/#workflow_dispatch) | n/a        | `GITHUB_REF` ブランチ上の直近のコミット | ディスパッチを受信したブランチ |

You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow. ワークフローが実行されると、 `github.event.inputs` コンテキスト内の入力値にアクセスできます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のコンテキストと式構文](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)」を参照してください。

You can manually trigger a workflow run using the {% data variables.product.prodname_dotcom %} API and from {% data variables.product.prodname_dotcom %}. For more information, see "[Manually running a workflow](/actions/managing-workflow-runs/manually-running-a-workflow)."

 {% data variables.product.prodname_dotcom %} でイベントをトリガーすると、{% data variables.product.prodname_dotcom %} で `ref` と `inputs` を直接入力できます。 For more information, see "[Using inputs and outputs with an action](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)."

 REST API を使用してカスタム `workflow_dispatch` webhook イベントをトリガーするには、`POST` リクエストを {% data variables.product.prodname_dotcom %} API エンドポイントに送信し、`ref` および必要な `inputs` を入力する必要があります。 詳細については、「[ワークフローディスパッチイベントの作成](/rest/reference/actions/#create-a-workflow-dispatch-event)」REST API エンドポイントを参照してください。

##### Example workflow configuration

この例では、 `名` 定義し、入力</code> ` <code>github.event.inputs.name` を使用してそれらを出力し、github.event.inputs.home</code> コンテキスト `します。 ` `名が指定されていない場合は、既定値の 「Mona the Octocat」 が表示されます。</p>

<p spaces-before="0">{% raw %}</p>

<pre><code class="yaml">名前: 手動でトリガーされたワークフロー
:
  workflow_dispatch:
    入力:
      の説明:
        
        説明: 必須: true
        デフォルト: 'モナ・ザ・オクトキャット' ホーム
      : 'モナ・ザ・オクトキャット'
        ホーム: '場所'
        必要: 偽

ジョブ:
  say_hello:
    実行: ubuntu最新
    ステップ:
    - 実行 |
        エコー "こんにちは ${{ github.event.inputs.name }}!
        エコー "- ${{ github.event.inputs.home }}で!
`</pre>
{% endraw %}

#### `repository_dispatch`

| webhook イベントのペイロード                                                   | アクティビティタイプ | `GITHUB_SHA`               | `GITHUB_REF`    |
| -------------------------------------------------------------------- | ---------- | -------------------------- | --------------- |
| [repository_dispatch](/webhooks/event-payloads/#repository_dispatch) | n/a        | `GITHUB_REF` ブランチ上の直近のコミット | ディスパッチを受信したブランチ |

{% data reusables.github-actions.branch-requirement %}

{% data variables.product.product_name %} の外部で生じるアクティビティのためにワークフローをトリガーしたい場合、{% data variables.product.prodname_dotcom %} API を使って、[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) と呼ばれる webhook イベントをトリガーできます。 詳細については、「リポジトリディスパッチ イベント</a>を作成

」を参照してください。</p> 

カスタム `repository_dispatch` webhook イベントをトリガーするには、{% data variables.product.product_name %} API エンドポイントに `POST` リクエストを送信して、アクティビティのタイプを説明する `event_type` 名を提供する必要があります。 ワークフローの実行をトリガーするには、`repository_dispatch` イベントを使用するようワークフローを設定する必要もあります。



##### サンプル

デフォルトでは、すべての`event_types`がワークフローの実行をトリガーします。 特定の`event_type`の値が`repository_dispatch` webhookのペイロード内で送信された時にのみワークフローが実行されるように制限できます。 リポジトリのディスパッチイベントを生成する際に、`repository_dispatch`ペイロード内で送信されるイベントの種類を定義します。



```yaml
on:
  repository_dispatch:
    types: [opened, deleted]
```




### webhook イベント

GitHub で webhook イベントが作成された際にワークフローを実行するよう設定できます。 イベントによっては、そのイベントをトリガーするアクティビティタイプが 複数あります。 イベントをトリガーするアクティビティタイプが複数ある場合は、ワークフローの実行をトリガーするアクティビティタイプを指定できます。 詳しい情報については、「[webhook](/webhooks)」を参照してください。 



#### `check_run`

`check_run` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[チェック実行](/v3/checks/runs/)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                                 | アクティビティタイプ                                                                                   | `GITHUB_SHA`      | `GITHUB_REF` |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------- | ------------ |
| [`check_run`](/webhooks/event-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>- `requested_action` | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、チェック実行が `rerequested` または `requested_action` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  check_run:
    types: [rerequested, requested_action]
```




#### `check_suite`

`check_suite` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[チェックスイート](/v3/checks/suites/)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

{% note %}

**ノート:** 再帰的なワークフローを避けるために、このイベントは{% data variables.product.prodname_actions %}によってチェックスイートが生成されている場合にはワークフローをトリガーしません。

{% endnote %}

| webhook イベントのペイロード                                     | アクティビティタイプ                                                                 | `GITHUB_SHA`      | `GITHUB_REF` |
| ------------------------------------------------------ | -------------------------------------------------------------------------- | ----------------- | ------------ |
| [`check_suite`](/webhooks/event-payloads/#check_suite) | - `completed`<br/>- `requested`<br/>- `rerequested`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、チェック実行が `rerequested` または `completed` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  check_suite:
    types: [rerequested, completed]
```




#### `create`

誰かがブランチまたはタグを作成し、それによって `create` イベントがトリガーされるときにワークフローを実行します。 REST API の詳細については、「[リファレンスの作成](/v3/git/refs/#create-a-reference)」を参照してください。

| webhook イベントのペイロード                           | アクティビティタイプ | `GITHUB_SHA`           | `GITHUB_REF`   |
| -------------------------------------------- | ---------- | ---------------------- | -------------- |
| [`create`](/webhooks/event-payloads/#create) | n/a        | 直近でブランチまたはタグが作成されたコミット | 作成されたブランチまたはタグ |


たとえば、`create` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  create
```




#### `delete`

誰かがブランチまたはタグを作成し、それによって `create` イベントがトリガーされるときにワークフローを実行します。 REST API の詳細については、「[リファレンスの削除](/v3/git/refs/#delete-a-reference)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                           | アクティビティタイプ | `GITHUB_SHA`      | `GITHUB_REF` |
| -------------------------------------------- | ---------- | ----------------- | ------------ |
| [`delete`](/webhooks/event-payloads/#delete) | n/a        | デフォルトブランチの直近のコミット | デフォルトブランチ    |


たとえば、`delete` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  delete
```




#### `deployment`

誰かがデプロイメントを作成し、それによって `deploymen` イベントがトリガーされるときにワークフローを実行します。 コミット SHA 付きで作成されたデプロイメントには Git ref がない場合があります。 REST API の詳細については、「[デプロイメント](/rest/reference/repos#deployments)」を参照してください。

| webhook イベントのペイロード                                   | アクティビティタイプ | `GITHUB_SHA` | `GITHUB_REF`                 |
| ---------------------------------------------------- | ---------- | ------------ | ---------------------------- |
| [`deployment`](/webhooks/event-payloads/#deployment) | n/a        | デプロイされるコミット  | デプロイされるブランチまたはタグ (コミットの場合は空) |


たとえば、`deployment` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  deployment
```




#### `deployment_status`

サードパーティプロバイダーがデプロイメントステータスを提供し、それによって `deployment_status` イベントがトリガーされるときにワークフローを実行します。 コミット SHA 付きで作成されたデプロイメントには Git ref がない場合があります。 REST API の詳細については、「[デプロイメントステータスの作成](/rest/reference/repos#create-a-deployment-status)」を参照してください。

| webhook イベントのペイロード                                                 | アクティビティタイプ | `GITHUB_SHA` | `GITHUB_REF`                 |
| ------------------------------------------------------------------ | ---------- | ------------ | ---------------------------- |
| [`deployment_status`](/webhooks/event-payloads/#deployment_status) | n/a        | デプロイされるコミット  | デプロイされるブランチまたはタグ (コミットの場合は空) |


たとえば、`deployment_status` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  deployment_status
```




#### `フォーク`

誰かがリポジトリをフォークし、それによって `deployment_status` イベントがトリガーされるときにワークフローを実行します。 REST API の詳細については、「[フォークの作成](/v3/repos/forks/#create-a-fork)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                       | アクティビティタイプ | `GITHUB_SHA`      | `GITHUB_REF` |
| ---------------------------------------- | ---------- | ----------------- | ------------ |
| [`フォーク`](/webhooks/event-payloads/#fork) | n/a        | デフォルトブランチの直近のコミット | デフォルトブランチ    |


たとえば、`fork` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  fork
```




#### `gollum`

誰かが Wiki ページを作成または更新し、それによって `gollum` イベントがトリガーされるときにワークフローを実行します。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                           | アクティビティタイプ | `GITHUB_SHA`      | `GITHUB_REF` |
| -------------------------------------------- | ---------- | ----------------- | ------------ |
| [`gollum`](/webhooks/event-payloads/#gollum) | n/a        | デフォルトブランチの直近のコミット | デフォルトブランチ    |


たとえば、`gollum` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  gollum
```




#### `issue_comment`

`issue_comment` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[Issue コメント](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                                        | アクティビティタイプ                                                        | `GITHUB_SHA`      | `GITHUB_REF` |
| --------------------------------------------------------- | ----------------------------------------------------------------- | ----------------- | ------------ |
| [`issue_comment`](/rest/reference/activity#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、Issue コメントが `created` または `deleted` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  issue_comment:
    types: [created, deleted]
```




#### `issues`

`Issue` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[Issue](/v3/issues)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                           | アクティビティタイプ                                                                                                                                                                                                                                                                                                                                                             | `GITHUB_SHA`      | `GITHUB_REF` |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------ |
| [`issues`](/webhooks/event-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、Issue が `opened`、`edited`、または `milestoned` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```




#### `ラベル`

`label` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[ラベル](/v3/issues/labels/)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                       | アクティビティタイプ                                                        | `GITHUB_SHA`      | `GITHUB_REF` |
| ---------------------------------------- | ----------------------------------------------------------------- | ----------------- | ------------ |
| [`ラベル`](/webhooks/event-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、ラベルが `created` または `deleted` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  label:
    types: [created, deleted]
```




#### `マイルストーン`

`milestone` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[マイルストーン](/v3/issues/milestones/)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                               | アクティビティタイプ                                                                                                  | `GITHUB_SHA`      | `GITHUB_REF` |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ----------------- | ------------ |
| [`マイルストーン`](/webhooks/event-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえばマイルストーンが`opened`あるいは`deleted`になったときにワークフローを実行できます。



```yaml
on:
  milestone:
    types: [opened, deleted]
```




#### `page_build`

誰かが {% data variables.product.product_name %} ページ対応のブランチを作成し、それによって `page_build` イベントがトリガーされるときにワークフローを実行します。 REST API の詳細については、「[ページ](/rest/reference/repos#pages)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                                   | アクティビティタイプ | `GITHUB_SHA`      | `GITHUB_REF` |
| ---------------------------------------------------- | ---------- | ----------------- | ------------ |
| [`page_build`](/webhooks/event-payloads/#page_build) | n/a        | デフォルトブランチの直近のコミット | n/a          |


たとえば、`page_build` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  page_build
```




#### `project`

`project` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[プロジェクト](/v3/projects/)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                             | アクティビティタイプ                                                                                                                          | `GITHUB_SHA`      | `GITHUB_REF` |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------ |
| [`project`](/webhooks/event-payloads/#project) | - `created`<br/>- `updated`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、プロジェクトが `created` または `deleted` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  project:
    types: [created, deleted]
```




#### `project_card`

`project_card` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[プロジェクトカード](/v3/projects/cards)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                                       | アクティビティタイプ                                                                                                     | `GITHUB_SHA`      | `GITHUB_REF` |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------- | ------------ |
| [`project_card`](/webhooks/event-payloads/#project_card) | - `created`<br/>- `moved`<br/>- `converted` to an issue<br/>- `edited`<br/>- `deleted` | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、プロジェクトカードが `opened` または `deleted` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  project_card:
    types: [opened, deleted]
```




#### `project_column`

`project_column` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[プロジェクト列](/v3/projects/columns)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                                           | アクティビティタイプ                                                                  | `GITHUB_SHA`      | `GITHUB_REF` |
| ------------------------------------------------------------ | --------------------------------------------------------------------------- | ----------------- | ------------ |
| [`project_column`](/webhooks/event-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、プロジェクト列が `created` または `deleted` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  project_column:
    types: [created, deleted]
```




#### `public`

誰かがプライベートリポジトリをパブリックにし、それによって `public` イベントがトリガーされるときにワークフローを実行します。 REST API の詳細については、「[リポジトリの編集](/v3/repos/#edit)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                           | アクティビティタイプ | `GITHUB_SHA`      | `GITHUB_REF` |
| -------------------------------------------- | ---------- | ----------------- | ------------ |
| [`public`](/webhooks/event-payloads/#public) | n/a        | デフォルトブランチの直近のコミット | デフォルトブランチ    |


たとえば、`public` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  public
```




#### `pull_request`

`pull_request` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[プルリクエスト](/v3/pulls)」を参照してください。

{% note %}

**注:** デフォルトでは、ワークフローが実行されるのは`pull_request` のアクティビティタイプが `opened`、`synchronize`、または `reopened` の場合だけです。 他のアクティビティタイプについてもワークフローをトリガーするには、`types` キーワードを使用してください。

{% endnote %}

| webhook イベントのペイロード                                       | アクティビティタイプ                                                                                                                                                                                                                                                                                                                                           | `GITHUB_SHA`                  | `GITHUB_REF`                           |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------- |
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | `GITHUB_REF` ブランチ上の直近のマージコミット | PR マージブランチ `refs/pull/:prNumber/merge` |


デフォルトのアクティビティタイプを拡大または制限するには、`types` キーワードを使用します。 詳しい情報については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/articles/workflow-syntax-for-github-actions#onevent_nametypes)」を参照してください。

たとえば、プルリクエストが `assigned`、`opened`、`synchronize`、または `reopened` だったときにワークフローを実行できます。



```yaml
on:
  pull_request:
    types: [assigned, opened, synchronize, reopened]
```


{% data reusables.developer-site.pull_request_forked_repos_link %}



#### `pull_request_review`

`pull_request_review` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[プルリクエストレビュー](/v3/pulls/reviews)」を参照してください。

| webhook イベントのペイロード                                                     | アクティビティタイプ                                                 | `GITHUB_SHA`                  | `GITHUB_REF`                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------- | -------------------------------------- |
| [`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | `GITHUB_REF` ブランチ上の直近のマージコミット | PR マージブランチ `refs/pull/:prNumber/merge` |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、プルリクエストレビューが `eidted` または `dismissed` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```


{% data reusables.developer-site.pull_request_forked_repos_link %}



#### `pull_request_review_comment`

プルリクエストの統合 diff へのコメントが変更され、それによって `pull_request_review_comment` イベントがトリガーされるときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[レビューコメント](/v3/pulls/comments)」を参照してください。

| webhook イベントのペイロード                                                                     | アクティビティタイプ                                             | `GITHUB_SHA`                  | `GITHUB_REF`                           |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------- | -------------------------------------- |
| [`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted` | `GITHUB_REF` ブランチ上の直近のマージコミット | PR マージブランチ `refs/pull/:prNumber/merge` |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、プルリクエストレビューコメントが `created` または `deleted` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```


{% data reusables.developer-site.pull_request_forked_repos_link %}



#### `pull_request_target`

このイベントは `pull_request` に似ていますが、マージコミットではなく、プルリクエストのベースリポジトリのコンテキストで実行される点で異なります。 つまり、ベースリポジトリのコミットで定義されたワークフローのみが実行されるため、プルリクエストによってトリガーされたワークフローでシークレットをより安全に使用できるようになります。 たとえば、このイベントでは、イベントペイロードの内容に基づいて、プルリクエストにラベルを付けてコメントを付けるワークフローを作成できます。 

| webhook イベントのペイロード                                       | アクティビティタイプ                                                                                                                                                                                                                                                                                                                                           | `GITHUB_SHA`       | `GITHUB_REF` |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------ |
| [`pull_request`](/webhooks/event-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` | PR ベースブランチの直近のコミット | PR ベースブランチ   |


デフォルトでは、ワークフローは、`pull_request_target` のアクティビティタイプが `opened`、`synchronize`、または `reopened` のときにのみ実行されます。 他のアクティビティタイプについてもワークフローをトリガーするには、`types` キーワードを使用してください。 詳しい情報については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/articles/workflow-syntax-for-github-actions#onevent_nametypes)」を参照してください。

たとえば、プルリクエストが `assigned`、`opened`、`synchronize`、または `reopened` だったときにワークフローを実行できます。



```yaml
on: pull_request_target
    types: [assigned, opened, synchronize, reopened]
```




#### `プッシュ`

{% note %}

**ノート：** GitHub Actionsが利用できるwebhookのペイロードには、`commit`オブジェクト中の`added`、`removed`、`modified`属性は含まれません。 完全なcommitオブジェクトは、REST APIを使って取得できます。 詳しい情報については、「[1つのコミットの取得](/v3/repos/commits/#get-a-single-commit)」を参照してください。

{% endnote %}

誰かがリポジトリブランチにプッシュし、それによって `push` イベントがトリガーされるときにワークフローを実行します。

| webhook イベントのペイロード                       | アクティビティタイプ | `GITHUB_SHA`                                  | `GITHUB_REF` |
| ---------------------------------------- | ---------- | --------------------------------------------- | ------------ |
| [`プッシュ`](/webhooks/event-payloads/#push) | n/a        | プッシュされたコミット、ただし (デフォルトブランチの際に) ブランチを削除する場合を除く | 更新された ref    |


たとえば、`push` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  push
```




#### `registry_package`

パッケージが`published`もしくは`updated`されるとワークフローを実行します。 詳しい情報については「[{% data variables.product.prodname_registry %}でのパッケージ管理](/github/managing-packages-with-github-packages)」を参照してください。

| webhook イベントのペイロード                                      | アクティビティタイプ                          | `GITHUB_SHA`    | `GITHUB_REF`          |
| ------------------------------------------------------- | ----------------------------------- | --------------- | --------------------- |
| [`registry_package`](/webhooks/event-payloads/#package) | - `published`<br/>- `updated` | 公開されたパッケージのコミット | 公開されたパッケージのブランチもしくはタグ |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、パッケージが`published`されたときにワークフローを実行できます。



```yaml
on:
  registry_package:
    types: [published]
```




#### `リリース`

{% note %}

**注釈:** `release` イベントは、ドラフトリリースではトリガーされません。

{% endnote %}

`release` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[リリース](/v3/repos/releases/)」を参照してください。

| webhook イベントのペイロード                          | アクティビティタイプ                                                                                                                                                      | `GITHUB_SHA`       | `GITHUB_REF` |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------ |
| [`リリース`](/webhooks/event-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | リリースのタグが付いた直近のコミット | リリースのタグ      |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、リリースが `published` だったときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  release:
    types: [published]
```




#### `ステータス`

Git コミットのステータスが変更された、それによって `status` イベントがトリガーされるときにワークフローを実行します。 REST API の詳細については、「[ステータス](/v3/repos/statuses/)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                          | アクティビティタイプ | `GITHUB_SHA`      | `GITHUB_REF` |
| ------------------------------------------- | ---------- | ----------------- | ------------ |
| [`ステータス`](/webhooks/event-payloads/#status) | n/a        | デフォルトブランチの直近のコミット | n/a          |


たとえば、`status` イベントが発生したときにワークフローを実行する例は、次のとおりです。



```yaml
on:
  status
```




#### `Watch`

`watch` イベントが発生したときにワークフローを実行します。 {% data reusables.developer-site.multiple_activity_types %} REST API の詳細については、「[Star を付ける](/v3/activity/starring/)」を参照してください。

{% data reusables.github-actions.branch-requirement %}

| webhook イベントのペイロード                         | アクティビティタイプ  | `GITHUB_SHA`      | `GITHUB_REF` |
| ------------------------------------------ | ----------- | ----------------- | ------------ |
| [`Watch`](/webhooks/event-payloads/#watch) | - `started` | デフォルトブランチの直近のコミット | デフォルトブランチ    |


{% data reusables.developer-site.limit_workflow_to_activity_types %}

たとえば、誰かがリポジトリに Star を付け、それが Watch イベントをトリガーする `started` アクティブタイプである場合にワークフローを実行する例は、次のとおりです。



```yaml
on:
  watch:
    types: [started]
```




#### `workflow_run`

{% data reusables.webhooks.workflow_run_desc %}

このイベントからブランチをフィルタする必要がある場合は、`branches` または `branches-ignore` を使用できます。

この例では、ワークフローは別の「Run Tests」ワークフローの完了後に実行されるように設定されています。



```yaml
on:
  workflow_run:
    workflows: ["Run Tests"]
    branches: [main]
    types: 
      - completed
      - requested
```




### 個人アクセストークンを使った新しいワークフローのトリガー

{% data reusables.github-actions.actions-do-not-trigger-workflows %} 詳しい情報については「[GITHUB_TOKENでの認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。

ワークフローの実行からワークフローをトリガーしたい場合意は、個人アクセストークンを使ってイベントをトリガーできます。 個人アクセストークンを作成し、それをシークレットとして保存する必要があります。 {% data variables.product.prodname_actions %}の利用コストを最小化するために、再帰的あるいは意図しないワークフローの実行が生じないようにしてください。 詳しい情報については「[暗号化されたシークレットの作成と保存](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)」を参照してください。
