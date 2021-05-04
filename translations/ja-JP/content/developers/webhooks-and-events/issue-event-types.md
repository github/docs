---
title: Issue イベントタイプ
intro: 'Issues イベント API とタイムライン API について、各イベントタイプ、{% data variables.product.prodname_dotcom %} でのトリガーアクション、および各イベントの一意のプロパティについて学びます。'
redirect_from:
  - /v3/issues/issue-event-types
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Events
---


Issue イベントは、Issue およびプルリクエストのアクティビティによってトリガーされ、[Issue イベント API](/rest/reference/issues#events) および[タイムラインイベント API](/rest/reference/issues#timeline) で使用できます。 各イベントタイプでは、イベントが Issue イベントやタイムラインイベント API で使用可能かどうかを指定します。

GitHub の REST API は、すべてのプルリクエストを Issue と見なしますが、すべての Issue がプルリクエストであるとは限りません。 このため、Issue イベントエンドポイントとタイムラインイベントエンドポイントは、レスポンスで Issue とプルリクエストの両方を返す場合があります。 プルリクエストには、`issue` オブジェクト内に `pull_request` プロパティがあります。 プルリクエストは Issue のため、リポジトリ内で Issue とプルリクエストの番号が重複することはありません。 たとえば、リポジトリで最初の Issue を開くと、番号は 1 になります。 次にプルリクエストを開くと、番号は 2 になります。 各イベントタイプでは、イベントがプルリクエスト、Issue、またはその両方で発生するかどうかを指定します。

### Issue イベントオブジェクトの共通プロパティ

タイムラインイベント API でのみ使用可能なイベントを除いて、Issue イベントはすべて同じオブジェクト構造になっています。 一部のイベントには、イベントリソースに関するより多くのコンテキストを提供する追加のプロパティも含まれています。 このオブジェクト形式とは異なるプロパティの詳細については、特定のイベントを参照してください。

{% data reusables.issue-events.issue-event-common-properties %}

### added_to_project

Issue またはプルリクエストがプロジェクトボードに追加された。 {% data reusables.projects.disabled-projects %}

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### アサイン

Issueまたはプルリクエストがユーザに割り当てられた。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.assignee-properties %}

### automatic_base_change_failed

GitHub がプルリクエストのベースブランチを自動的に変更しようとしたが失敗した。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |                |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### automatic_base_change_succeeded

GitHub がプルリクエストのベースブランチを自動的に変更しようとした。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |                |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### base_ref_changed

プルリクエストのベースリファレンスブランチが変更された。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |                |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### closed

Issue またはプルリクエストがクローズされた。 `commit_id` が存在する場合、「closes / fixes」構文を使用して Issue をクローズしたコミットを識別します。 構文に関する詳しい情報については「[プルリクエストを Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)」を参照してください。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### コメント

Issue またはプルリクエストにコメントが追加された。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |                |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.timeline_events_object_properties %}

| 名前                   | 種類        | 説明                                                                      |
| -------------------- | --------- | ----------------------------------------------------------------------- |
| `url`                | `string`  | Issue コメントを取得する REST API URL。                                           |
| `html_url`           | `string`  | Issue コメントの HTML URL。                                                   |
| `issue_url`          | `string`  | Issue の HTML URL。                                                       |
| `id`                 | `integer` | イベントの一意の識別子。                                                            |
| `node_id`            | `string`  | イベントの[グローバルノード ID](/graphql/guides/using-global-node-ids)。              |
| `ユーザ`                | `オブジェクト`  | この Issue についてコメントしたユーザ。                                                 |
| `created_at`         | `string`  | コメントの追加日時を示すタイムスタンプ。                                                    |
| `updated_at`         | `string`  | コメントが更新されていない場合に、コメントの更新または作成日時を示すタイムスタンプ。                              |
| `author_association` | `string`  | Issue のリポジトリでユーザが保持している権限。 たとえば、リポジトリの所有者がコメントを作成した場合、値は「`OWNER`」になります。 |
| `body`               | `string`  | コメント本文テキスト。                                                             |
| `event`              | `string`  | イベントの値は `"commented"` です。                                               |
| `actor`              | `オブジェクト`  | イベントを生成したユーザ。                                                           |

### committed

プルリクエストの `HEAD` ブランチにコミットが追加された。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |                |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.timeline_events_object_properties %}

| 名前         | 種類                 | 説明                                                                                  |
| ---------- | ------------------ | ----------------------------------------------------------------------------------- |
| `sha`      | `string`           | プルリクエスト内のコミットの SHA。                                                                 |
| `node_id`  | `string`           | イベントの[グローバルノード ID](/graphql/guides/using-global-node-ids)。                          |
| `url`      | `string`           | コミットを取得する REST API URL。                                                             |
| `html_url` | `string`           | コミットの HTML URL。                                                                     |
| `作者`       | `オブジェクト`           | コミットの作者。                                                                            |
| `コミッター`    | `オブジェクト`           | 作者に代わってコミットしたユーザ。                                                                   |
| `ツリー`      | `オブジェクト`           | コミットの Git ツリー。                                                                      |
| `message`  | `string`           | コミットメッセージ。                                                                          |
| `親`        | `array of objects` | 親コミットのリスト。                                                                          |
| `検証`       | `オブジェクト`           | コミットの署名の検証結果。 詳しい情報については、「[署名検証オブジェクト](/rest/reference/git#get-a-commit)」を参照してください。 |
| `event`    | `string`           | イベントの値は `"committed"` です。                                                           |

### connected

Issue またはプルリクエストが、別の Issue またはプルリクエストにリンクされた。 詳しい情報については「[プルリクエストを Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)」を参照してください。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### convert_to_draft

プルリクエストがドラフトモードに変換された。

#### 利用の可否

| Issue タイプ                 | Issue イベント API | タイムラインイベント API |
|:------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### converted_note_to_issue

Issue がプロジェクトボードのメモを Issue に変換して作成された。 {% data reusables.projects.disabled-projects %}

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### cross-referenced

Issue またはプルリクエストが、別の Issue またはプルリクエストから参照された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |                |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.timeline_events_object_properties %}

| 名前              | 種類       | 説明                                                                                                                                                                                                    |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actor`         | `オブジェクト` | イベントを生成したユーザ。                                                                                                                                                                                         |
| `created_at`    | `string` | クロスリファレンスの追加日時を示すタイムスタンプ。                                                                                                                                                                             |
| `updated_at`    | `string` | クロスリファレンスが更新されていない場合、クロスリファレンスの更新または作成時期を示すタイムスタンプ。                                                                                                                                                   |
| `資料`            | `オブジェクト` | クロスリファレンスを追加した Issue またはプルリクエスト。                                                                                                                                                                      |
| `source[type]`  | `string` | プルリクエストは Issue タイプのため、この値は常に `"issue"` になります。 タイムラインイベント API では、Issue またはプルリクエストによってトリガーされたクロスリファレンスイベントのみが返されます。 イベントをトリガーした Issue がプルリクエストかどうかを判断するには、`source[issue][pull_request` オブジェクトの有無を確認します。 |
| `source[issue]` | `オブジェクト` | クロスリファレンスを追加した `issue` オブジェクト。                                                                                                                                                                        |
| `event`         | `string` | イベントの値は `"cross-referenced"` です。                                                                                                                                                                      |

### demilestoned

Issue またはプルリクエストがマイルストーンから削除された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | マイルストーンオブジェクト。 `milestone[title]` | `string` | マイルストーンのタイトル。

### deployed

プルリクエストがデプロイされた。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### deployment_environment_changed

プルリクエストのデプロイメント環境が変更された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |                |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### disconnected

Issue またはプルリクエストが、別の Issue またはプルリクエストからリンク解除された。 詳しい情報については「[プルリクエストを Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)」を参照してください。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### head_ref_deleted

プルリクエストの `HEAD` ブランチが削除された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### head_ref_restored

プルリクエストの `HEAD` ブランチが最後の既知のコミットに復元された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### labeled

Issue またはプルリクエストにラベルが追加された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

### locked

Issue またはプルリクエストがロックされた。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.sailor-v-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | Issue またはプルリクエストの会話がロックされた理由（提供されている場合）。

### メンション

`actor` が Issue またはプルリクエストの本文で `@mentioned` された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### marked_as_duplicate

書き込み権限を持つユーザが、Issue を別の Issue の複製としてマークしたか、プルリクエストを別のプルリクエストの複製としてマークした。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### merged

プルリクエストがマージされた。 `commit_id` 属性は、マージされた `HEAD` コミットのSHA1 です。 `commit_repository` は、常にメインリポジトリと同じです。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |                |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### milestoned

Issue またはプルリクエストがマイルストーンに追加された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
`milestone` | `object` | マイルストーンオブジェクト。 `milestone[title]` | `string` | マイルストーンのタイトル。

### moved_columns_in_project

Issue またはプルリクエストがプロジェクトボードの列間で移動された。 {% data reusables.projects.disabled-projects %}

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}
`previous_column_name` | `string` | Issue の移動元の列の名前。

### ピン止め済み

Issue がピン留めされた。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### ready_for_review

ドラフトモードではないプルリクエストが作成された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### referenced

Issue がコミットメッセージから参照された。 `commit_id` 属性は、発生した場所のコミット SHA1 であり、commit_repository は、そのコミットがプッシュされた場所です。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### removed_from_project

Issue またはプルリクエストがプロジェクトボードから削除された。 {% data reusables.projects.disabled-projects %}

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.pre-release-program.starfox-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.project-card-properties %}

### renamed

Issue またはプルリクエストのタイトルが変更された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
`rename` | `object` | 名前の詳細。 `rename[from]` | `string` | 以前の名前。 `rename[to]` | `string` | 新しい名前。

### reopened

Issue またはプルリクエストが再開された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### review_dismissed

プルリクエストのレビューが却下された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-dismissed-properties %}

### review_requested

プルリクエストのレビューがリクエストされた。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

### review_request_removed

プルリクエストのレビューリクエストが削除された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.review-request-properties %}

### reviewed

プルリクエストがレビューされた。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>プルリクエスト</li></ul> |                |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.timeline_events_object_properties %}

| 名前                   | 種類        | 説明                                                                      |
| -------------------- | --------- | ----------------------------------------------------------------------- |
| `id`                 | `integer` | イベントの一意の識別子。                                                            |
| `node_id`            | `string`  | イベントの[グローバルノード ID](/graphql/guides/using-global-node-ids)。              |
| `ユーザ`                | `オブジェクト`  | この Issue についてコメントしたユーザ。                                                 |
| `body`               | `string`  | レビューの概要テキスト。                                                            |
| `commit_id`          | `string`  | レビュー時のプルリクエストの最新コミットの SHA。                                              |
| `submitted_at`       | `string`  | レビューの送信日時を示すタイムスタンプ。                                                    |
| `state`              | `string`  | サブミットされたレビューの状態。 `commented`、`changes_requested`、`approved` のいずれかになります。 |
| `html_url`           | `string`  | レビューの HTML URL。                                                         |
| `pull_request_url`   | `string`  | プルリクエストを取得する REST API URL。                                              |
| `author_association` | `string`  | Issue のリポジトリでユーザが保持している権限。 たとえば、リポジトリの所有者がコメントを作成した場合、値は「`OWNER`」になります。 |
| `_links`             | `オブジェクト`  | `html_url` および `pull_request_url`。                                      |
| `event`              | `string`  | イベントの値は `"reviewed"` です。                                                |

### subscribed

誰かが Issue またはプルリクエストの通知を受信するようにサブスクライブした。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### transferred

Issue が別のリポジトリに転送された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### unassigned

ユーザが Issue から割り当て解除された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.assignee-properties %}

### unlabeled

Issue からラベルが削除された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}
{% data reusables.issue-events.label-properties %}

### unlocked

Issue がロック解除された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.sailor-v-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

{% data reusables.issue-events.issue-event-common-properties %}
`lock_reason` | `string` | Issue またはプルリクエストの会話がロックされた理由（提供されている場合）。

### unmarked_as_duplicate

ユーザが以前に別の Issue の複製としてマークした Issue が重複と見なされなくなった。または、ユーザが以前に別のプルリクエストの複製としてマークしたプルリクエストが重複と見なされなくなった。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### unpinned

Issue がピン留め解除された。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

### サブスクライブ解除

誰かが Issue またはプルリクエストの通知を受信しないようにサブスクライブ解除した。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |                |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

{% if currentVersion == "free-pro-team@latest" %}
### user_blocked

Organization のオーナーがユーザを Organization からブロックした。 これは、[Issue に関するブロックされたユーザのコメントの 1 つを介して](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment)行われました。

#### 利用の可否

| Issue タイプ                  | Issue イベント API | タイムラインイベント API |
|:-------------------------- |:--------------:|:--------------:|
| <ul><li>問題</li><li>プルリクエスト</li></ul> |     **X**      |     **X**      |

#### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
