---
title: Issue イベントタイプ
intro: 'Issues イベント API とタイムライン API について、各イベントタイプ、{% data variables.product.prodname_dotcom %} でのトリガーアクション、および各イベントの一意のプロパティについて学びます。'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 2459e4fbdcd4e857c603b7aa7354d4f2d5d6a062
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878376'
---
Issue イベントは、Issue と pull request のアクティビティによってトリガーされ、[Issue Events API](/rest/reference/issues#events) と [Timeline Events API](/rest/reference/issues#timeline) で使用できます。 各イベントタイプでは、イベントが Issue イベントやタイムラインイベント API で使用可能かどうかを指定します。

GitHub の REST API は、すべてのプルリクエストを Issue と見なしますが、すべての Issue がプルリクエストであるとは限りません。 このため、Issue イベントエンドポイントとタイムラインイベントエンドポイントは、レスポンスで Issue とプルリクエストの両方を返す場合があります。 pull request の `issue` オブジェクトには `pull_request` プロパティがあります。 プルリクエストは Issue のため、リポジトリ内で Issue とプルリクエストの番号が重複することはありません。 たとえば、リポジトリで最初の Issue を開くと、番号は 1 になります。 次にプルリクエストを開くと、番号は 2 になります。 各イベントタイプでは、イベントがプルリクエスト、Issue、またはその両方で発生するかどうかを指定します。

## Issue イベントオブジェクトの共通プロパティ

タイムラインイベント API でのみ使用可能なイベントを除いて、Issue イベントはすべて同じオブジェクト構造になっています。 一部のイベントには、イベントリソースに関するより多くのコンテキストを提供する追加のプロパティも含まれています。 このオブジェクト形式とは異なるプロパティの詳細については、特定のイベントを参照してください。

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

Issue またはプルリクエストがプロジェクトボードに追加された。 {% data reusables.projects.disabled-projects %}

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## 割り当て済み

Issueまたはプルリクエストがユーザに割り当てられた。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X**  |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## automatic_base_change_failed

GitHub がプルリクエストのベースブランチを自動的に変更しようとしたが失敗した。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** |  |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

GitHub がプルリクエストのベースブランチを自動的に変更しようとした。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## base_ref_changed

プルリクエストのベースリファレンスブランチが変更された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## closed

Issue またはプルリクエストがクローズされた。 `commit_id` が存在する場合は、"closes / fixes" 構文を使用して Issue を閉じたコミットを示します。 構文の詳細については、「[pull request を Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)」を参照してください。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## コメント済み

Issue またはプルリクエストにコメントが追加された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> |  | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.timeline_events_object_properties %}

名前 | 型 | 説明
-----|------|--------------
`url` | `string` | Issue コメントを取得する REST API URL。
`html_url` | `string` | Issue コメントの HTML URL。
`issue_url` | `string` | Issue の HTML URL。
`id` | `integer` | イベントの一意識別子。
`node_id` | `string` | イベントの[グローバル ノード ID](/graphql/guides/using-global-node-ids)。
`user` | `object` | この Issue についてコメントしたユーザ。
`created_at` | `string` | コメントの追加日時を示すタイムスタンプ。
`updated_at` | `string` | コメントが更新されていない場合に、コメントの更新または作成日時を示すタイムスタンプ。
`author_association` | `string` | Issue のリポジトリでユーザが保持している権限。 たとえば、リポジトリの所有者がコメントを作成した場合は、値は `"OWNER"` です。
`body` | `string` | コメント本文テキスト。
`event` | `string` | イベントの値は `"commented"` です。
`actor` | `object` | イベントを生成したユーザ。

## コミット (committed)

コミットが pull request の `HEAD` ブランチに追加されました。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> |  | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.timeline_events_object_properties %}

名前 | 型 | 説明
-----|------|--------------
`sha` | `string` | プルリクエスト内のコミットの SHA。
`node_id` | `string` | イベントの[グローバル ノード ID](/graphql/guides/using-global-node-ids)。
`url` | `string` | コミットを取得する REST API URL。
`html_url` | `string` | コミットの HTML URL。
`author` | `object` | コミットの作者。
`committer` | `object` | 作者に代わってコミットしたユーザ。
`tree` | `object` | コミットの Git ツリー。
`message` | `string` | コミットメッセージ。
`parents` | `array of objects` | 親コミットのリスト。
`verification` | `object` | コミットの署名の検証結果。 詳細については、「[署名検証オブジェクト](/rest/reference/git#get-a-commit)」を参照してください。
`event` | `string` | イベントの値は `"committed"` です。

## connected

Issue またはプルリクエストが、別の Issue またはプルリクエストにリンクされた。 詳細については、「[pull request を Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)」を参照してください。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

プルリクエストがドラフトモードに変換された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

Issue がプロジェクトボードのメモを Issue に変換して作成された。 {% data reusables.projects.disabled-projects %}

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## cross-referenced

Issue またはプルリクエストが、別の Issue またはプルリクエストから参照された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> |  | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.timeline_events_object_properties %}

名前 | 型 | 説明
-----|------|--------------
`actor` | `object` | イベントを生成したユーザ。
`created_at` | `string` | クロスリファレンスの追加日時を示すタイムスタンプ。
`updated_at` | `string` | クロスリファレンスが更新されていない場合、クロスリファレンスの更新または作成時期を示すタイムスタンプ。
`source` | `object` | クロスリファレンスを追加した Issue またはプルリクエスト。
`source[type]` | `string` | pull request は Issue 型であるため、この値は常に `"issue"` になります。 タイムラインイベント API では、Issue またはプルリクエストによってトリガーされたクロスリファレンスイベントのみが返されます。 イベントをトリガーした Issue が pull request であるかどうかを判断するには、`source[issue][pull_request]` オブジェクトが存在するかどうかをチェックします。
`source[issue]` | `object` | クロスリファレンスを追加した `issue` オブジェクト。
`event` | `string` | イベントの値は `"cross-referenced"` です。

## demilestoned

Issue またはプルリクエストがマイルストーンから削除された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | マイルストーン オブジェクト。
`milestone[title]` | `string` | マイルストーンのタイトル。

## deployed

プルリクエストがデプロイされた。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

プルリクエストのデプロイメント環境が変更された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** |  |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## 切断

Issue またはプルリクエストが、別の Issue またはプルリクエストからリンク解除された。 詳細については、「[pull request を Issue にリンクする](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)」を参照してください。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

pull request の `HEAD` ブランチが削除されました。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

pull request の `HEAD` ブランチが、最後の既知のコミットに復元されました。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

## head_ref_force_pushed

pull request の HEAD ブランチが強制的にプッシュされました。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## ラベル付け済み

Issue またはプルリクエストにラベルが追加された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## locked

Issue またはプルリクエストがロックされた。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | Issue または pull request の会話がロックされた理由 (指定されている場合)。

## mentioned

`actor` は Issue または pull request 本文内の `@mentioned` でした。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

書き込み権限を持つユーザが、Issue を別の Issue の複製としてマークしたか、プルリクエストを別のプルリクエストの複製としてマークした。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## マージされた

プルリクエストがマージされた。 `commit_id` 属性は、マージされた `HEAD` コミットの SHA1 です。 `commit_repository` は、常にメイン リポジトリと同じです。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## milestoned

Issue またはプルリクエストがマイルストーンに追加された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | マイルストーン オブジェクト。
`milestone[title]` | `string` | マイルストーンのタイトル。

## moved_columns_in_project

Issue またはプルリクエストがプロジェクトボードの列間で移動された。 {% data reusables.projects.disabled-projects %}

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %} `previous_column_name` | `string` | Issue の移動元の列の名前。

## pinned

Issue がピン留めされた。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

ドラフト pull request はレビューの準備完了とマークされました。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## referenced

Issue がコミットメッセージから参照された。 `commit_id` 属性はそれが発生した場所のコミット SHA1 であり、commit_repository はそのコミットがプッシュされた場所です。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

Issue またはプルリクエストがプロジェクトボードから削除された。 {% data reusables.projects.disabled-projects %}

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## renamed

Issue またはプルリクエストのタイトルが変更された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} `rename` | `object` | 名前の詳細。
`rename[from]` | `string` | 以前の名前。
`rename[to]` | `string` | 新しい名前。

## reopened

Issue またはプルリクエストが再開された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

プルリクエストのレビューが却下された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-dismissed-properties %}

## review_requested

プルリクエストのレビューがリクエストされた。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## review_request_removed

プルリクエストのレビューリクエストが削除された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## reviewed

プルリクエストがレビューされた。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>Pull Request</li></ul> |  | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.timeline_events_object_properties %}

名前 | 型 | 説明
-----|------|--------------
`id` | `integer` | イベントの一意識別子。
`node_id` | `string` | イベントの[グローバル ノード ID](/graphql/guides/using-global-node-ids)。
`user` | `object` | この Issue についてコメントしたユーザ。
`body` | `string` | レビューの概要テキスト。
`commit_id` | `string` | レビュー時のプルリクエストの最新コミットの SHA。
`submitted_at` | `string` | レビューの送信日時を示すタイムスタンプ。
`state` | `string` | サブミットされたレビューの状態。 `commented`、`changes_requested`、または `approved` のいずれかにすることができます。
`html_url` | `string` | レビューの HTML URL。
`pull_request_url` | `string` | プルリクエストを取得する REST API URL。
`author_association` | `string` | Issue のリポジトリでユーザが保持している権限。 たとえば、リポジトリの所有者がコメントを作成した場合は、値は `"OWNER"` です。
`_links` | `object` | `html_url` と `pull_request_url`。
`event` | `string` | イベントの値は `"reviewed"` です。

## subscribed

誰かが Issue またはプルリクエストの通知を受信するようにサブスクライブした。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## transferred

Issue が別のリポジトリに転送された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## 未割り当て

ユーザが Issue から割り当て解除された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## unlabeled

Issue からラベルが削除された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## unlocked

Issue がロック解除された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | Issue または pull request の会話がロックされた理由 (指定されている場合)。

## unmarked_as_duplicate

ユーザが以前に別の Issue の複製としてマークした Issue が重複と見なされなくなった。または、ユーザが以前に別のプルリクエストの複製としてマークしたプルリクエストが重複と見なされなくなった。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## unpinned

Issue がピン留め解除された。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

## unsubscribed

誰かが Issue またはプルリクエストの通知を受信しないようにサブスクライブ解除した。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> |  | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}
## user_blocked

Organization のオーナーがユーザを Organization からブロックした。 これは、[Issue でブロックされたユーザーのコメントの 1 つを通じて](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment)行われました。

### 可用性

|問題の種類 | Issue イベント API | タイムラインイベント API|
|:----------|:----------------:|:-----------------:|
| <ul><li>発行</li><li>Pull Request</li></ul> | **X** | **X** |

### イベントオブジェクトのプロパティ

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
