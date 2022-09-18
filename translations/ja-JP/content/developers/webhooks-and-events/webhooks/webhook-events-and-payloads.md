---
title: Webhook のイベントとペイロード
intro: webhook イベントごとに、イベントの発生日時、ペイロードの例、およびペイロードオブジェクトパラメータに関する説明を確認できます。
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Webhook events & payloads
ms.openlocfilehash: 38dfa09525a7c3cc914bc2cf130126ed9969e190
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147541983'
---
{% data reusables.webhooks.webhooks_intro %}

このページに表示されているイベントをサブスクライブする webhook を作成できます。 各 webhook イベントには、webhook プロパティの説明とペイロードの例が含まれています。 詳細については、「[webhook の作成](/webhooks/creating/)」を参照してください。

## webhook ペイロードオブジェクトの共通プロパティ

各 webhook イベントペイロードには、イベント固有のプロパティも含まれています。 固有のプロパティは、個々のイベントタイプのセクションにあります。

キー | Type | 説明
----|------|-------------
`action` | `string` | ほとんどの webhook ペイロードには、イベントをトリガーした特定のアクティビティを含む `action` プロパティが含まれています。
{% data reusables.webhooks.sender_desc %} このプロパティは、すべての webhook ペイロードに含まれています。
{% data reusables.webhooks.repo_desc %} イベントがリポジトリ内のアクティビティから発生した場合、webhook ペイロードには `repository` プロパティが含まれます。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %}詳細については、「[{% data variables.product.prodname_github_app %} を構築する](/apps/building-github-apps/)」を参照してください。

webhook イベントの一意のプロパティは、[Events API](/rest/reference/activity#events) の使用時に `payload` プロパティに含まれるプロパティと同じです。 例外の 1 つは [`push` イベント](#push)です。 `push` イベントの webhook ペイロードの一意のプロパティと Events API の `payload` プロパティは異なります。 webhook ペイロードには、より詳細な情報が含まれています。

{% tip %}

**注:** ペイロードの上限は 25 MB です。 イベントにより大きなペイロードが生成された場合、webhook は起動しません。 これは、たとえば、多数のブランチまたはタグが一度にプッシュされた場合に、`create` イベントで発生する可能性があります。 確実にデリバリが行われるよう、ペイロードサイズを監視することをお勧めします。

{% endtip %}

### デリバリヘッダ

webhook によって設定されている URL エンドポイントに配信される HTTP POST ペイロードには、いくつかの特別なヘッダが含まれています。

Header | 説明
-------|-------------|
`X-GitHub-Event`| デリバリをトリガーしたイベントの名前。
`X-GitHub-Delivery`| デリバリーを識別する [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier)。{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | HTTP POST ペイロードを送信した {% data variables.product.prodname_ghe_server %} インスタンスのバージョン。
`X-GitHub-Enterprise-Host` | HTTP POST ペイロードを送信した {% data variables.product.prodname_ghe_server %} インスタンスのホスト名。{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| このヘッダーは、webhook が [`secret`](/rest/reference/repos#create-hook-config-params) で構成されている場合に送信されます。 これは要求本文の HMAC 16 進ダイジェストであり、SHA-1 ハッシュ関数と `secret` (HMAC `key` として) を使用して生成されます。{% ifversion fpt or ghes or ghec %}`X-Hub-Signature` は、既存の統合との互換性のために提供されており、代わりにより安全な `X-Hub-Signature-256` を使用することをお勧めします。{% endif %}{% endif %}
`X-Hub-Signature-256`| このヘッダーは、webhook が [`secret`](/rest/reference/repos#create-hook-config-params) で構成されている場合に送信されます。 これは要求本文の HMAC 16 進ダイジェストであり、SHA-256 ハッシュ関数と `secret` (HMAC `key` として) を使用して生成されます。

また、要求の `User-Agent` にはプレフィックス `GitHub-Hookshot/` も含まれます。

### デリバリの例

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
## branch_protection_rule

ブランチ保護ルールに関するアクティビティです。 詳細については、「[ブランチ保護ルールについて](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)」を参照してください。

### 可用性

- リポジトリ webhook
- Organization webhook
- リポジトリ管理に対して `read-only` アクセス権以上を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` |`string` | 実行されるアクション。 `created`、`edited`、または `deleted` を指定できます。
`rule` | `object` | ブランチ保護ルール。 `name`、および名前と一致するブランチに適用されるすべての[ブランチ保護設定](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings)が含まれます。 バイナリ設定はブール値です。 複数レベルの構成は、`off`、`non_admins`、`everyone` のいずれかです。 アクターとビルドのリストは文字列の配列。
`changes` | `object` | アクションが `edited` の場合、ルールの変更。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.branch_protection_rule.edited }} {% endif %}

{% ifversion ghes > 3.3 %}
## cache_sync

Git ref がキャッシュ レプリカに正常に同期されました。 詳細については、「[About repository caching](/admin/enterprise-management/caching-repositories/about-repository-caching)」(リポジトリのキャッシュについて) を参照してください。

### 可用性

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`cache_location` |`string` | 更新されたキャッシュ サーバーの場所。
`ref` | `string` | 更新された ref。
`before` | `string` | 更新される前のキャッシュ レプリカの ref の OID。
`after` | `string` | 更新された後のキャッシュ レプリカの ref の OID。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.cache_sync.synced }} {% endif %}

## check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### 可用性

- リポジトリ webhook は、リポジトリ内のイベントの種類 `created` と `completed` のペイロードのみを受信します。
- Organization webhook は、リポジトリ内のイベントの種類 `created` と `completed` のペイロードのみを受信します。
- `checks:read` 権限を持つ {% data variables.product.prodname_github_apps %} は、アプリがインストールされているリポジトリで発生する `created` イベントと `completed` イベントのペイロードを受信します。 アプリには、イベントの種類 `rerequested` と `requested_action` を受信する `checks:write` 権限が必要です。 イベントの種類 `rerequested` と `requested_action` のペイロードは、要求される {% data variables.product.prodname_github_app %} にのみ送信されます。 `checks:write` を持つ {% data variables.product.prodname_github_apps %} は、この webhook イベントに自動的にサブスクライブされます。

### webhook ペイロードオブジェクト

{% data reusables.webhooks.check_run_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.check_run.created }}

## check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### 可用性

- リポジトリ webhook は、リポジトリ内のイベントの種類 `completed` のペイロードのみを受信します。
- Organization webhook は、リポジトリ内のイベントの種類 `completed` のペイロードのみを受信します。
- `checks:read` 権限を持つ {% data variables.product.prodname_github_apps %} は、アプリがインストールされているリポジトリで発生する `created` イベントと `completed` イベントのペイロードを受信します。 アプリには、イベントの種類 `requested` と `rerequested` を受信する `checks:write` 権限が必要です。 イベントの種類 `requested` と `rerequested` のペイロードは、要求される {% data variables.product.prodname_github_app %} にのみ送信されます。 `checks:write` を持つ {% data variables.product.prodname_github_apps %} は、この webhook イベントに自動的にサブスクライブされます。

### webhook ペイロードオブジェクト

{% data reusables.webhooks.check_suite_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

## code_scanning_alert

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `security_events :read` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.code_scanning_alert_event_properties %}{% data reusables.webhooks.repo_desc %}{% data reusables.webhooks.org_desc %}{% data reusables.webhooks.app_desc %} `sender` | `object` | `action` が `reopened_by_user` または `closed_by_user` の場合、`sender` オブジェクトはイベントをトリガーしたユーザーになります。 `sender` オブジェクトは、他のすべてのアクションに対して {% ifversion fpt or ghec %}`github`{% elsif ghes or ghae %}`github-enterprise`{% else %}空{% endif %} です。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

## commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `contents` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.commit_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}

{% ifversion ghes < 3.4 %}
## content_reference

{% data reusables.webhooks.content_reference_short_desc %}

webhook イベントは、登録したドメインの特異性に基づいてトリガーされます。 たとえば、サブドメイン (`https://subdomain.example.com`) を登録した場合、サブドメインの URL のみによってこのイベントがトリガーされます。 ドメイン (`https://example.com`) を登録した場合、ドメインとすべてのサブドメインの URL によってこのイベントがトリガーされます。 新しいコンテンツ添付ファイルを作成するには、「[コンテンツ添付ファイルの作成](/rest/reference/apps#create-a-content-attachment)」を参照してください。

### 可用性

- `content_references:write` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

{% endif %}
## create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**注:** 一度に 4 つ以上のタグを作成した場合、このイベントの webhook は受信されません。

{% endnote %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `contents` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.create_properties %} {% data reusables.webhooks.pusher_type_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.create }}

## delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**注:** 一度に 4 つ以上のタグを削除した場合、このイベントの webhook は受信されません。

{% endnote %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `contents` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.delete_properties %} {% data reusables.webhooks.pusher_type_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.delete }}

## deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.deploy_key_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

## deployment

{% data reusables.webhooks.deployment_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `deployments` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` |`string` | 実行されるアクション。 `created` の可能性があります。
`deployment` |`object` | [デプロイメント](/rest/reference/deployments#list-deployments)。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deployment }}

## deployment_status

{% data reusables.webhooks.deployment_status_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `deployments` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` |`string` | 実行されるアクション。 `created` の可能性があります。
`deployment_status` |`object` | [デプロイの状態](/rest/reference/deployments#list-deployment-statuses)。
`deployment_status["state"]` |`string` | 新しい状態です。 `pending`、`success`、`failure`、または `error` を指定できます。
`deployment_status["target_url"]` |`string` | ステータスに追加されたオプションのリンク。
`deployment_status["description"]`|`string` | オプションの人間可読の説明がステータスに追加。
`deployment` |`object` | この状態が関連付けられている[デプロイ](/rest/reference/deployments#list-deployments)。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% ifversion fpt or ghec %}
## ディスカッション

{% data reusables.webhooks.discussions-webhooks-beta %}

ディスカッションに関連するアクティビティ。 詳細については、「[ディスカッションでの GraphQL API の利用](/graphql/guides/using-the-graphql-api-for-discussions)」を参照してください。
### 可用性

- リポジトリ webhook
- Organization webhook
- `discussions` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` |`string` | 実行されるアクション。 `created`、`edited`、`deleted`、`pinned`、`unpinned`、`locked`、`unlocked`、`transferred`、`category_changed`、`answered`、`unanswered`、`labeled`、または `unlabeled` を指定できます。
{% data reusables.webhooks.discussion_desc %} {% data reusables.webhooks.repo_desc_graphql %} {% data reusables.webhooks.org_desc_graphql %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.discussion.created }}

## discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

ディスカッションのコメントに関連するアクティビティ。 詳細については、「[ディスカッションでの GraphQL API の利用](/graphql/guides/using-the-graphql-api-for-discussions)」を参照してください。

### 可用性

- リポジトリ webhook
- Organization webhook
- `discussions` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` |`string` | 実行されるアクション。 `created`、`edited`、または `deleted` を指定できます。
`comment` | `object` | [`discussion comment`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment) リソース。
{% data reusables.webhooks.discussion_desc %} {% data reusables.webhooks.repo_desc_graphql %} {% data reusables.webhooks.org_desc_graphql %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }} {% endif %}

{% ifversion ghes or ghae %}

## エンタープライズ

{% data reusables.webhooks.enterprise_short_desc %}

### 可用性

- GitHub Enterprise webhook。 詳細については、「[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` |`string` | 実行されるアクション。 `anonymous_access_enabled` または `anonymous_access_disabled` を指定できます。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

## フォーク

{% data reusables.webhooks.fork_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `contents` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.fork_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.fork }}

## github_app_authorization

{% data variables.product.prodname_github_app %} の承認を取り消すと、このイベントが発生します。 {% data variables.product.prodname_github_app %} は、デフォルトでこの webhook を受信し、このイベントをサブスクライブ解除できません。

{% data reusables.webhooks.authorization_event %}{% data variables.product.prodname_github_app %} 認可を必要とする、ユーザーからサーバーへの要求の詳細については、「[{% data variables.product.prodname_github_apps %} のユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

### 可用性

- {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` |`string` | 実行されるアクション。 `revoked` の可能性があります。
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

## gollum

{% data reusables.webhooks.gollum_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `contents` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.gollum_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.gollum }}

## インストール

{% data reusables.webhooks.installation_short_desc %}

### 可用性

- {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.installation_properties %} {% data reusables.webhooks.app_always_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

## installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

### 可用性

- {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.installation_repositories_properties %} {% data reusables.webhooks.app_always_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

## issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `issues` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

## issues

{% data reusables.webhooks.issues_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `issues` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.issue_webhook_properties %} {% data reusables.webhooks.issue_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Issue 編集時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.issues.edited }}

## label

{% data reusables.webhooks.label_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `metadata` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | [説明]
----|------|-------------
`action`|`string` | 実行されたアクション。 `created`、`edited`、または `deleted` を指定できます。
`label`|`object` | ラベルが追加された。
`changes`|`object`| アクションが `edited` の場合、ラベルの変更。
`changes[name][from]`|`string` | アクションが `edited` の場合、以前のバージョンの名前。
`changes[color][from]`|`string` | アクションが `edited` の場合、以前のバージョンの色。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% ifversion fpt or ghec %}
## marketplace_purchase

GitHub Marketplace の購入に関連するアクティビティ。 {% data reusables.webhooks.action_type_desc %}詳細については、「[GitHub Marketplace](/marketplace/)」を参照してください。

### 可用性

- {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` | `string` | [GitHub Marketplace](https://github.com/marketplace) プランに対して実行されたアクション。 次のいずれかになります。<ul><li>`purchased` - GitHub Marketplace プランを購入しました。 変更はアカウントですぐに有効になります。</li><li>`pending_change` - GitHub Marketplace プランをダウングレードまたはキャンセルしたときに、アカウントで変更が発生することを示す `pending_change` イベントを受信します。 新しいプランまたはキャンセルは、支払いサイクルの終了時に有効になります。  支払いサイクルが終了し、キャンセルまたは新しいプランが有効になると、`cancelled` または `changed` イベント タイプが送信されます。</li><li>`pending_change_cancelled` - 保留中の変更をキャンセルしたユーザー。 保留中の変更には、支払いサイクルの終了時に有効になるプランのキャンセルとダウングレードが含まれます。 </li><li>`changed` - GitHub Marketplace プランをアップグレードまたはダウングレードしたため、変更がアカウントですぐに有効になります。</li><li>`cancelled` - GitHub Marketplace プランをキャンセルし、最後の支払いサイクルが終了しました。 変更はアカウントですぐに有効になります。</li></ul>

このペイロードと各種の `action` のペイロードの詳細については、「[{% data variables.product.prodname_marketplace %} webhook イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)」を参照してください。

### プラン購入時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

## member

{% data reusables.webhooks.member_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `members` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.member_webhook_properties %} {% data reusables.webhooks.member_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.member.added }}

## メンバーシップ

{% data reusables.webhooks.membership_short_desc %}

### 可用性

- Organization webhook
- `members` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.membership_properties %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.membership.removed }}

{% ifversion fpt or ghec %}

## merge_group

{% data reusables.pull_requests.merge-queue-beta %}

マージ キュー内のマージ グループに関連するアクティビティ。 アクティビティのタイプは、ペイロードオブジェクトのactionプロパティで指定されます。


### 可用性

- リポジトリ webhook
- Organization webhook
- `merge_queues` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | [説明]
----|------|-------------
`action`|`string` | 実行されたアクション。 現時点では、`checks_requested` のみが可能です。
`merge_group`|`object` | マージ グループ。
`merge_group[head_sha]`|`string` | マージ グループの SHA。
`merge_group[head_ref]`|`string` | マージ グループの完全な ref。
`merge_group[base_ref]`|`string` | マージ グループがマージされるブランチの完全な ref。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.merge_group.checks_requested }}

{% endif %}

## meta

このイベントが設定されている webhook が削除されました。 このイベントは、イベントがインストールされている特定のフックへの変更のみをリッスンします。 したがって、メタイベントを受信するフックごとに選択する必要があります。

### 可用性

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action` |`string` | 実行されるアクション。 `deleted` の可能性があります。
`hook_id`  |`integer` | 変更された webhook の ID。
`hook` |`object` | 変更された webhook。 これには、webhook のタイプ (リポジトリ、Organization、ビジネス、アプリケーション、または GitHub Marketplace) に基づいて異なるキーが含まれます。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

## milestone

{% data reusables.webhooks.milestone_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.milestone_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.milestone.created }}

## organization

{% data reusables.webhooks.organization_short_desc %}

### 可用性

{% ifversion ghes or ghae %}
- GitHub Enterprise webhook は受信と`created` イベントと `deleted` イベントのみを受信します。 詳細については、「[グローバル webhooks](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。{% endif %}
- Organization の webhook は、`deleted`、`added`、`removed`、`renamed`、および `invited` イベントのみを受信します
- `members` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | [説明]
----|------|-------------
`action` |`string` | 実行されたアクション。 {% ifversion ghes or ghae %}`created`、{% endif %}`deleted`、`renamed`、`member_added`、`member_removed`、`member_invited` のいずれかを指定できます。
`invitation` |`object` | アクションが `member_invited` の場合、ユーザーまたはメールの招待。
`membership`  |`object` | ユーザと Organization 間のメンバーシップ。  アクションが `member_invited` の場合は表示されません。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% ifversion fpt or ghec %}

## org_block

{% data reusables.webhooks.org_block_short_desc %}

### 可用性

- Organization webhook
- `organization_administration` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|------------
`action` | `string` | 実行されるアクション。 `blocked` または `unblocked` を指定できます。
`blocked_user` | `object` | ブロックまたはブロック解除されたユーザに関する情報。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

## パッケージ

{% data variables.product.prodname_registry %} に関連するアクティビティ。 {% data reusables.webhooks.action_type_desc %}{% data variables.product.prodname_registry %} の詳細については、[{% data variables.product.prodname_registry %} を使用したパッケージの管理](/github/managing-packages-with-github-packages)に関するページを参照してください。

### 可用性

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.package_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.package.published }}

## page_build

{% data reusables.webhooks.page_build_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `pages` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|------------
`id` | `integer` | ページビルドの一意の識別子。
`build` | `object` | [List GitHub Pages ビルド](/rest/reference/pages#list-github-pages-builds)自体。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.page_build }}

## ping

{% data reusables.webhooks.ping_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- {% data variables.product.prodname_github_apps %} は、アプリの登録に使用される `app_id` を使用して ping イベントを受信します

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|------------
`zen` | `string` | GitHub zen のランダムな文字列。
`hook_id` | `integer` | ping をトリガーした webhook の ID。
`hook` | `object` | [webhook の構成](/rest/reference/webhooks#get-a-repository-webhook)。
`hook[app_id]` | `integer` | 新しい {% data variables.product.prodname_github_app %} を登録すると、{% data variables.product.product_name %} では登録時に指定した **webhook URL** に ping イベントが送信されます。 イベントには、アプリを[認証](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/)するために必要な `app_id` が含まれています。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.ping }}

## project

{% data reusables.webhooks.project_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `repository_projects` 権限と `organization_projects` 権限を持つ {% data variables.product.prodname_github_apps %}

{% ifversion projects-v2 %} {% note %}

**注**: このイベントは、{% data variables.product.prodname_projects_v1 %} に対してのみ発生します。

{% endnote %} {% endif %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project.created }}

{% ifversion fpt or ghes or ghec %}

## project_card

{% data reusables.webhooks.project_card_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `repository_projects` 権限と `organization_projects` 権限を持つ {% data variables.product.prodname_github_apps %}

{% ifversion projects-v2 %} {% note %}

**注**: このイベントは、{% data variables.product.prodname_projects_v1 %} に対してのみ発生します。

{% endnote %} {% endif %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_card_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project_card.created }}

## project_column

{% data reusables.webhooks.project_column_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `repository_projects` 権限と `organization_projects` 権限を持つ {% data variables.product.prodname_github_apps %}

{% ifversion projects-v2 %} {% note %}

**注**: このイベントは、{% data variables.product.prodname_projects_v1 %} に対してのみ発生します。

{% endnote %} {% endif %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_column_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project_column.created }}

{% ifversion project-beta-webhooks %}

## projects_v2_item

{% note %}

**注:** {% data variables.projects.projects_v2 %} の Webhook イベントは現在ベータ版であり、変更される可能性があります。 {% data variables.projects.projects_v2 %} Webhook に関するフィードバックを {% data variables.product.product_name %} と共有する場合は、[プロジェクト Webhook のフィードバックに関するディスカッション](https://github.com/orgs/community/discussions/17405)を参照してください。

{% endnote %}

{% data variables.projects.project_v2 %} のアイテムに関連するアクティビティ。 {% data reusables.webhooks.action_type_desc %} 詳しくは、「[{% data variables.projects.projects_v2 %} について](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」を参照してください。

### 可用性

- Organization webhook
- `organization_projects` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`action`|`string` | プロジェクト アイテムで実行されたアクション。 `archived`、`converted`、`created`、`edited`、`restored`、`deleted`、`reordered` のいずれかになります。
`projects_v2_item`|`object` | プロジェクト アイテム自体。 プロジェクト アイテムに関する詳しい情報を見つけるために、`node_id` (プロジェクト アイテムのノード ID) と `project_node_id` (プロジェクトのノード ID) を使用して、GraphQL API の情報のクエリを実行できます。 詳しくは、「[API を使ったプロジェクトの管理](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)」をご覧ください。
`changes`|`object` | プロジェクト アイテムへの変更内容。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.projects_v2_item.created }}

{% endif %}

## public

{% data reusables.webhooks.public_short_desc %}
### 可用性

- リポジトリ webhook
- Organization webhook
- `metadata` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.public }} {% endif %}
## pull_request

{% data reusables.webhooks.pull_request_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_webhook_properties %} {% data reusables.webhooks.pull_request_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

`review_requested` イベントと `review_request_removed` イベントのデリバリーには、`requested_reviewer` という追加のフィールドが含まれます。

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

## pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_review_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

## pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

## pull_request_review_thread

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_thread_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.pull_request_review_thread.resolved }}

## push

{% data reusables.webhooks.push_short_desc %}

{% note %}

**注:** 一度に 4 つ以上のタグをプッシュした場合、このイベントの webhook は受信されません。

{% endnote %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `contents` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`ref`|`string` | プッシュされた完全な [`git ref`](/rest/reference/git#refs)。 例: `refs/heads/main` または `refs/tags/v3.14.1`。
`before`|`string` | プッシュ前の `ref` に対する最新のコミットの SHA。
`after`|`string` | プッシュ後の `ref` に対する最新のコミットの SHA。
`created`|`boolean` | このプッシュによって `ref` が作成されたかどうか。
`deleted`|`boolean` | このプッシュによって `ref` が削除されたかどうか。
`forced`|`boolean` | このプッシュが `ref` の強制プッシュであったかどうか。
`head_commit`|`object` | プッシュにおいて `after` がコミット オブジェクトであるかコミット オブジェクトを指す場合、そのコミットの拡張表現。 プッシュにおいて `after` がアノテーションされたタグ オブジェクトを指す場合、そのアノテーションされたタグが指すコミットの拡張表現。
`compare`|`string` | `before` コミットから `after` コミットまでのこの `ref` 更新の変更を示す URL。 既定のブランチに直接基づいて新しく作成された `ref` の場合、これは既定のブランチのヘッドと `after` コミットとの比較です。 それ以外の場合、`after` コミットまでのすべてのコミットが表示されます。
`commits`|`array` | プッシュされたコミットを示すコミットオブジェクトの配列。 (プッシュされたコミットは、`before` コミットと `after` コミットの間の `compare` に含まれるすべてのコミットです。)
`commits[][id]`|`string` | コミットのSHA。
`commits[][timestamp]`|`string` | コミットの ISO 8601 タイムスタンプ。
`commits[][message]`|`string` | コミットメッセージ。
`commits[][author]`|`object` | コミットのGit作者。
`commits[][author][name]`|`string` | Git作者の名前。
`commits[][author][email]`|`string` | Git作者のメールアドレス。
`commits[][url]`|`url` | コミットAPIのリソースを指すURL。
`commits[][distinct]`|`boolean` | このコミットが以前にプッシュされたいずれとも異なっているか。
`commits[][added]`|`array` | コミットに追加されたファイルの配列。 {% data variables.product.product_name %} がこのリストをタイムリーに計算できないような、非常に大きなコミットの場合は、ファイルが追加されていても空になる可能性があります。
`commits[][modified]`|`array` | コミットによって変更されたファイルの配列。 {% data variables.product.product_name %} がこのリストをタイムリーに計算できないような、非常に大きなコミットの場合は、ファイルが変更されていても空になる可能性があります。
`commits[][removed]`|`array` | コミットから削除されたファイルの配列。 {% data variables.product.product_name %} がこのリストをタイムリーに計算できないような、非常に大きなコミットの場合は、ファイルが削除されていても空になる可能性があります。
`pusher` | `object` | コミットをプッシュしたユーザ。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.push }}

## release

{% data reusables.webhooks.release_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `contents` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.release_webhook_properties %} {% data reusables.webhooks.release_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.release.published }}

## repository_dispatch

このイベントは、{% data variables.product.prodname_github_app %} によって "[リポジトリ ディスパッチ イベントの作成](/rest/reference/repos#create-a-repository-dispatch-event)" エンドポイントに `POST` 要求が送信されると発生します。

### 可用性

- {% data variables.product.prodname_github_apps %} には、この webhook を受信するための `contents` 権限が必要です。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}

## repository

{% data reusables.webhooks.repository_short_desc %}

### 可用性

- リポジトリ webhook は、`deleted` を除くすべての種類のイベントを受信します
- Organization webhook
- `metadata` 権限を持つ {% data variables.product.prodname_github_apps %} は、`deleted` を除くすべての種類のイベントを受信します

### webhook ペイロードオブジェクト

キー | Type | [説明]
----|------|-------------
`action` |`string` | 実行されたアクション。 これは、次のうちいずれかにすることができます。<ul><li>`created` - リポジトリが作成されます。</li><li>`deleted` - リポジトリが削除されます。</li><li>`archived` - リポジトリがアーカイブされます。</li><li>`unarchived` - リポジトリがアーカイブ解除されます。</li>{% ifversion ghes or ghae %}<li>`anonymous_access_enabled`- リポジトリが[匿名 Git アクセスに対して有効になります](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)。`anonymous_access_disabled` - リポジトリが[匿名 Git アクセスに対して無効になります](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)。</li>{% endif %}<li>`edited` - リポジトリの情報が編集されます。</li><li>`renamed` - リポジトリの名前が変更されます。</li><li>`transferred` - リポジトリが転送されます。</li><li>`publicized` - リポジトリが公開されます。</li><li> `privatized` - リポジトリが非公開になります。</li></ul>
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% ifversion fpt or ghec %}
## repository_import

{% data reusables.webhooks.repository_import_short_desc %} 個人リポジトリでこのイベントを受信するには、インポートする前に空のリポジトリを作成する必要があります。 このイベントは、[GitHub Importer](/articles/importing-a-repository-with-github-importer/) または[ソース インポート API](/rest/reference/migrations#source-imports) を使用してトリガーできます。

### 可用性

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.repository_import_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_import }}

## repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.repository_vulnerability_alert_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% ifversion ghes or ghec %}

## secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `secret_scanning_alerts:read` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.secret_scanning_alert_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} `sender` | `object` | `action` が `resolved` または `reopened` の場合、`sender` オブジェクトはイベントをトリガーしたユーザーになります。 `sender` オブジェクトは、他のすべてのアクションに対して空です。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }} {% endif %}

{% ifversion ghes > 3.4 or ghec or ghae-issue-6581 %}
## secret_scanning_alert_location

{% data reusables.webhooks.secret_scanning_alert_location_event_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `secret_scanning_alerts:read` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.secret_scanning_alert_location_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert_location.created }} {% endif %}

{% ifversion fpt or ghes or ghec %}
## security_advisory

{% data variables.product.company_short %} でレビューされたセキュリティ アドバイザリに関連するアクティビティ。 {% data variables.product.company_short %} でレビューされたセキュリティ アドバイザリは、{% data variables.product.prodname_dotcom %} 上のソフトウェアのセキュリティ関連の脆弱性に関する情報を提供します。

セキュリティ アドバイザリ データセットは、GitHub {% data variables.product.prodname_dependabot_alerts %}にも利用できます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)」を参照してください。

### 可用性

- `security_events` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | [説明]
----|------|-------------
`action` |`string` | 実行されたアクション。 すべての新しいイベントについて、アクションには `published`、`updated`、`performed`、`withdrawn` のいずれかを指定できます。
`security_advisory` |`object` | 概要、説明、重要度などの、セキュリティアドバイザリの詳細。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% endif %}

{% ifversion ghas-enablement-webhook %}

## security_and_analysis

リポジトリまたは Organization のコード セキュリティと分析機能の有効化または無効化に関連するアクティビティ。

### 可用性

- リポジトリ webhook
- Organization webhook
- リポジトリ管理に対して `read-only` アクセス権以上を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`changes`|`object` | コード セキュリティと分析機能に対して行われた変更。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.security_and_analysis }}

{% endif %}

{% ifversion fpt or ghec %}
## スポンサーシップ

{% data reusables.webhooks.sponsorship_short_desc %}

スポンサーシップ webhook は、{% data variables.product.prodname_dotcom %} でのみ作成できます。 詳細については、「[スポンサード アカウントでイベントに webhook を設定する](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)」を参照してください。

### 可用性

- スポンサー付きアカウント

### webhook ペイロードオブジェクト

{% data reusables.webhooks.sponsorship_webhook_properties %} {% data reusables.webhooks.sponsorship_properties %} {% data reusables.webhooks.sender_desc %}

### スポンサーシップ作成時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

### スポンサーシップのダウングレード時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

## 星

{% data reusables.webhooks.star_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.star_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.star.created }}

## status

{% data reusables.webhooks.status_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `statuses` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`id` | `integer` | ステータスの一意の識別子。
`sha`|`string` | コミット SHA。
`state`|`string` | 新しい状態です。 `pending`、`success`、`failure`、または `error` を指定できます。
`description`|`string` | オプションの人間可読の説明がステータスに追加。
`target_url`|`string` | ステータスに追加されたオプションのリンク。
`branches`|`array` | ステータスの SHA を含むブランチオブジェクトの配列。 各ブランチには特定の SHA が含まれていますが、SHA がブランチの先頭である場合とそうでない場合があります。 配列には最大 10 個のブランチが含まれます。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.status }}

## チーム

{% data reusables.webhooks.team_short_desc %}

### 可用性

- Organization webhook
- `members` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | [説明]
----|------|-------------
`action` |`string` | 実行されたアクション。 `created`、`deleted`、`edited`、`added_to_repository`、`removed_from_repository` のいずれかを指定できます。
`team`  |`object` | Team 自体。
`changes`|`object` | アクションが `edited` の場合、Team の変更。
`changes[description][from]` |`string` | アクションが `edited` の場合、以前のバージョンの説明。
`changes[name][from]` |`string` | アクションが `edited` の場合、以前のバージョンの名前。
`changes[privacy][from]` |`string` | アクションが `edited` の場合、以前のバージョンの Team のプライバシー。
`changes[repository][permissions][from][admin]` | `boolean` | アクションが `edited` であった場合、リポジトリに対する以前のバージョンの Team メンバーの `admin` 権限。
`changes[repository][permissions][from][pull]` | `boolean` | アクションが `edited` であった場合、リポジトリに対する以前のバージョンの Team メンバーの `pull` 権限。
`changes[repository][permissions][from][push]` | `boolean` | アクションが `edited` であった場合、リポジトリに対する以前のバージョンの Team メンバーの `push` 権限。
`repository`|`object` | アクションが `added_to_repository`、`removed_from_repository`、または `edited` であった場合、Team の Purview に追加されたか、または Purview から削除されたリポジトリ。 `edited` アクションの場合、`repository` には、リポジトリに対する Team の新しい権限レベルも含まれています。
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

## team_add

{% data reusables.webhooks.team_add_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- `members` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

キー | Type | 説明
----|------|-------------
`team`|`object` | 変更された [Team](/rest/reference/teams)。  **注:** 古いイベントでは、ペイロードにこのイベントが含まれない可能性があります。
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.team_add }}

{% ifversion ghes or ghae %}

## ユーザー

ユーザーが `created` または `deleted` の場合。

### 可用性
- GitHub Enterprise webhook。 詳細については、「[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

## watch

{% data reusables.webhooks.watch_short_desc %}

イベントのアクターはリポジトリにスターを付けた[ユーザー](/rest/reference/users)で、イベントのリポジトリはスターの付いた[リポジトリ](/rest/reference/repos)です。

### 可用性

- リポジトリ webhook
- Organization webhook
- `metadata` 権限を持つ {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.watch_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% ifversion fpt or ghes or ghec %}
## workflow_dispatch

このイベントは、ユーザーが GitHub でワークフロー実行をトリガーするか、"[ワークフロー ディスパッチ イベントの作成](/rest/reference/actions/#create-a-workflow-dispatch-event)" エンドポイントに `POST` 要求を送信すると発生します。 詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#workflow_dispatch)」を参照してください。

### 可用性

- {% data variables.product.prodname_github_apps %} には、この webhook を受信するための `contents` 権限が必要です。

### webhook ペイロードオブジェクト

| キー | Type | 説明 |
|-----|-----|-----|
| `inputs` | `object` | ワークフローへの入力。 各キーは入力の名前を表し、値はその入力の値を表します。 |
{% data reusables.webhooks.org_desc %} | `ref` | `string` | ワークフローの実行元のブランチ参照。 | {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.sender_desc %} | `workflow` | `string` | ワークフローを含むワークフロー ファイルへの相対パス。 |

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }} {% endif %}

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}

## workflow_job

{% data reusables.webhooks.workflow_job_short_desc %}

### 可用性

- リポジトリ webhook
- Organization webhook
- Enterprise webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.workflow_job_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.workflow_job }}

{% endif %} {% ifversion fpt or ghes or ghec %}
## workflow_run

{% data variables.product.prodname_actions %} ワークフロー実行がリクエスト済または完了したとき。 詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#workflow_run)」を参照してください。

### 可用性

- `actions` 権限と `contents` 権限を持つ {% data variables.product.prodname_github_apps %}。

### webhook ペイロードオブジェクト

{% data reusables.webhooks.workflow_run_properties %} {% data reusables.webhooks.workflow_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.workflow_run }} {% endif %}
