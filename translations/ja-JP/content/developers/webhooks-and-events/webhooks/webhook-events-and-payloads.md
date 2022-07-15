---
title: webhook イベントとペイロード
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
shortTitle: webhookイベントとペイロード
---

{% ifversion fpt or ghec %}

{% endif %}

{% data reusables.webhooks.webhooks_intro %}

このページに表示されているイベントをサブスクライブする webhook を作成できます。 各 webhook イベントには、webhook プロパティの説明とペイロードの例が含まれています。 詳しい情報については「[webhook を作成する](/webhooks/creating/)」を参照してください。

## webhook ペイロードオブジェクトの共通プロパティ

各 webhook イベントペイロードには、イベント固有のプロパティも含まれています。 固有のプロパティは、個々のイベントタイプのセクションにあります。

| キー       | 種類       | 説明                                                                     |
| -------- | -------- | ---------------------------------------------------------------------- |
| `action` | `string` | ほとんどの webhook ペイロードには、イベントをトリガーした特定のアクティビティを含む `action` プロパティが含まれています。 |
{% data reusables.webhooks.sender_desc %} このプロパティは、すべての webhook ペイロードに含まれています。
{% data reusables.webhooks.repo_desc %} イベントがリポジトリ内のアクティビティから発生した場合、webhook ペイロードには `repository` プロパティが含まれます。
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %} 詳しい情報については、「[{% data variables.product.prodname_github_app %} を構築する](/apps/building-github-apps/)」を参照してください。

webhook イベントの一意のプロパティは、[イベント API](/rest/reference/activity#events) を使用するときに `payload` プロパティにあるプロパティと同じです。 例外の 1 つは、[`push` イベント](#push) です。 `push` イベント webhook ペイロードの一意のプロパティとイベント API の`payload` プロパティは異なります。 webhook ペイロードには、より詳細な情報が含まれています。

{% tip %}

**注釈:** ペイロードの上限は 25 MB です。 イベントにより大きなペイロードが生成された場合、webhook は起動しません。 これは、たとえば多数のブランチまたはタグが一度にプッシュされた場合の `create` イベントで発生する可能性があります。 確実にデリバリが行われるよう、ペイロードサイズを監視することをお勧めします。

{% endtip %}

### デリバリヘッダ

webhook によって設定されている URL エンドポイントに配信される HTTP POST ペイロードには、いくつかの特別なヘッダが含まれています。

| ヘッダ                           | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-GitHub-Event`              | デリバリをトリガーしたイベントの名前。                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `X-GitHub-Delivery`           | デリバリを識別するための [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier)。{% ifversion ghes or ghae %}
| `X-GitHub-Enterprise-Version` | HTTP POST ペイロードを送信した {% data variables.product.prodname_ghe_server %} インスタンスのバージョン。                                                                                                                                                                                                                                                                                                                                                                 |
| `X-GitHub-Enterprise-Host`    | HTTP POST ペイロードを送信した {% data variables.product.prodname_ghe_server %} インスタンスのホスト名。{% endif %}{% ifversion not ghae %}
| `X-Hub-Signature`             | このヘッダは、webhook が [`secret`](/rest/reference/repos#create-hook-config-params) で設定されている場合に送信されます。 This is the HMAC hex digest of the request body, and is generated using the SHA-1 hash function and the `secret` as the HMAC `key`.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` is provided for compatibility with existing integrations, and we recommend that you use the more secure `X-Hub-Signature-256` instead.{% endif %}{% endif %}
| `X-Hub-Signature-256`         | このヘッダは、webhook が [`secret`](/rest/reference/repos#create-hook-config-params) で設定されている場合に送信されます。 これはリクエスト本文の HMAC hex digest であり、SHA-256 ハッシュ関数と HMAC `key` としての `secret` を使用して生成されます。                                                                                                                                                                                                                                                                 |

また、リクエストの `User-Agent` には、プレフィックスに `GitHub-Hookshot/` が付けられます。

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

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
## branch_protection_rule

ブランチ保護ルールに関するアクティビティです。 詳しい情報については「[ブランチ保護ルールについて](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)」を参照してください。

### 利用の可否

- リポジトリ webhook
- Organization webhook
- リポジトリ管理者に少なくとも `read-only` アクセス権限がある{% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー        | 種類       | 説明                                                                                                                                                                                                                                                                                  |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`  | `string` | 実行されたアクション。 `created`、`edited`、`deleted` のいずれかを指定可。                                                                                                                                                                                                                                 |
| `rule`    | `オブジェクト` | ブランチ保護ルール。 `name`と、この名前に一致するブランチに適用される全ての[ブランチ保護設定](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings)が含まれる。 バイナリ設定はブール値です。 マルチレベル設定は`off`、`non_admins`、`everyone`のいずれか。 アクターとビルドのリストは文字列の配列。 |
| `changes` | `オブジェクト` | アクションが編集 (`edited`) された場合、ルールが変更される。                                                                                                                                                                                                                                                |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.branch_protection_rule.edited }}
{% endif %}

{% ifversion ghes > 3.3 %}
## cache_sync

A Git ref has been successfully synced to a cache replica. For more information, see "[About repository caching](/admin/enterprise-management/caching-repositories/about-repository-caching)."

### 利用の可否

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

| キー               | 種類       | 説明                                                             |
| ---------------- | -------- | -------------------------------------------------------------- |
| `cache_location` | `string` | The location of the cache server that has been updated.        |
| `ref`            | `string` | The ref that has been updated.                                 |
| `before`         | `string` | The OID of the ref on the cache replica before it was updated. |
| `after`          | `string` | The OID of the ref on the cache replica after the update.      |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.cache_sync.synced }}
{% endif %}

## check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### 利用の可否

- リポジトリ webhook は、リポジトリ内の `created` および `completed` イベントタイプのペイロードのみを受信します
- Organization webhook は、リポジトリで `created` および `completed` イベントタイプのペイロードのみを受信します
- `checks:read` 権限のある {% data variables.product.prodname_github_apps %} は、アプリがインストールされているリポジトリで発生する `created` および `completed` イベントのペイロードを受信します。 `rerequested` および `requested_action` イベントタイプを受信するには、アプリケーションに `checks:write` 権限が必要です。 `rerequested` および `requested_action` イベントタイプのペイロードは、リクエストされている {% data variables.product.prodname_github_app %} にのみ送信されます。 `checks:write` のある {% data variables.product.prodname_github_apps %} は、この webhook イベントに自動的にサブスクライブされます。

### webhook ペイロードオブジェクト

{% data reusables.webhooks.check_run_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.check_run.created }}

## check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### 利用の可否

- リポジトリ webhook は、リポジトリ内の `completed` イベントタイプのペイロードのみを受信します
- Organization webhook は、リポジトリで `completed` イベントタイプのペイロードのみを受信します
- `checks:read` 権限のある {% data variables.product.prodname_github_apps %} は、アプリがインストールされているリポジトリで発生する `created` および `completed` イベントのペイロードを受信します。 `requested` および `rerequested` イベントタイプを受信するには、アプリケーションに `checks:write` 権限が必要です。 `requested` および `rerequested` イベントタイプのペイロードは、リクエストされている {% data variables.product.prodname_github_app %} にのみ送信されます。 `checks:write` のある {% data variables.product.prodname_github_apps %} は、この webhook イベントに自動的にサブスクライブされます。

### webhook ペイロードオブジェクト

{% data reusables.webhooks.check_suite_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

## code_scanning_alert

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `security_events :read` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.code_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | `action` が `reopened_by_user` または `closed_by_user` の場合、`sender` オブジェクトは、イベントをトリガーしたユーザになります。 `sender`オブジェクトは、他の全てのアクションに対して{% ifversion fpt or ghec %}`github`{% elsif ghes or ghae %}`github-enterprise`{% else %}empty{% endif %}です。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

## commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.commit_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}

{% ifversion ghes < 3.4 %}
## content_reference

{% data reusables.webhooks.content_reference_short_desc %}

webhook イベントは、登録したドメインの特異性に基づいてトリガーされます。 たとえば、サブドメイン (`https://subdomain.example.com`) を登録すると、サブドメインの URL のみがこのイベントをトリガーします。 ドメイン (`https://example.com`) を登録すると、ドメインとすべてのサブドメインの URL がこのイベントをトリガーします。 新しいコンテンツ添付ファイルを作成するには、「[コンテンツ添付ファイルの作成](/rest/reference/apps#create-a-content-attachment)」を参照してください。

### 利用の可否

- `content_references:write` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

{% endif %}
## create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**Note:** You will not receive a webhook for this event when you create more than three tags at once.

{% endnote %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.create_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.create }}

## delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**注釈:** 一度に 3 つ以上のタグを削除すると、このイベントの webhook を受信しません。

{% endnote %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.delete_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.delete }}

## deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.deploy_key_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

## deployment

{% data reusables.webhooks.deployment_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `deployments` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー           | 種類       | 説明                                                       |
| ------------ | -------- | -------------------------------------------------------- |
| `action`     | `string` | 実行されたアクション。 `created `になりうる。                             |
| `deployment` | `オブジェクト` | [デプロイメント](/rest/reference/deployments#list-deployments)。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deployment }}

## deployment_status

{% data reusables.webhooks.deployment_status_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `deployments` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー                                 | 種類       | 説明                                                                         |
| ---------------------------------- | -------- | -------------------------------------------------------------------------- |
| `action`                           | `string` | 実行されたアクション。 `created `になりうる。                                               |
| `deployment_status`                | `オブジェクト` | [デプロイメントステータス](/rest/reference/deployments#list-deployment-statuses)。      |
| `deployment_status["state"]`       | `string` | 新しい状態。 `pending`、`success`、`failure`、`error` のいずれかを指定可。                    |
| `deployment_status["target_url"]`  | `string` | ステータスに追加されたオプションのリンク。                                                      |
| `deployment_status["description"]` | `string` | オプションの人間可読の説明がステータスに追加。                                                    |
| `deployment`                       | `オブジェクト` | このステータスが関連付けられている [デプロイメント](/rest/reference/deployments#list-deployments)。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% ifversion fpt or ghec %}
## ディスカッション

{% data reusables.webhooks.discussions-webhooks-beta %}

ディスカッションに関連するアクティビティ。 詳しい情報については、「[ディスカッションでのGraphQL APIの利用](/graphql/guides/using-the-graphql-api-for-discussions)」を参照してください。
### 利用の可否

- リポジトリ webhook
- Organization webhook
- `discussions` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                                                                                                                                                     |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action` | `string` | 実行されたアクション。 Can be `created`, `edited`, `deleted`, `pinned`, `unpinned`, `locked`, `unlocked`, `transferred`, `category_changed`, `answered`, `unanswered`, `labeled`, or `unlabeled`. |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.discussion.created }}

## discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

ディスカッションのコメントに関連するアクティビティ。 詳しい情報については、「[ディスカッションでのGraphQL APIの利用](/graphql/guides/using-the-graphql-api-for-discussions)」を参照してください。

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `discussions` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                                                                     |
| -------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `action` | `string` | 実行されたアクション。 `created`、`edited`、`deleted` のいずれかを指定可。                                                    |
| `コメント`   | `オブジェクト` | [`discussion comment`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment) のリソース。 |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }}
{% endif %}

{% ifversion ghes or ghae %}

## Enterprise

{% data reusables.webhooks.enterprise_short_desc %}

### 利用の可否

- GitHub Enterprise webhook。 詳しい情報については「[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。

### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                                            |
| -------- | -------- | ----------------------------------------------------------------------------- |
| `action` | `string` | 実行されたアクション。 `anonymous_access_enabled`、`anonymous_access_disabled` のいずれかを指定可。 |

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

## フォーク

{% data reusables.webhooks.fork_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.fork_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.fork }}

## github_app_authorization

{% data variables.product.prodname_github_app %} の承認を取り消すと、このイベントが発生します。 {% data variables.product.prodname_github_app %} は、デフォルトでこの webhook を受信し、このイベントをサブスクライブ解除できません。

{% data reusables.webhooks.authorization_event %}{% data variables.product.prodname_github_app %} 認証を必要とするユーザからサーバーへのリクエストの詳細については、「[{% data variables.product.prodname_github_apps %} のユーザーの識別と認証](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

### 利用の可否

- {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                          |
| -------- | -------- | --------------------------- |
| `action` | `string` | 実行されたアクション。 `revoked` を指定可。 |
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

## gollum

{% data reusables.webhooks.gollum_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.gollum_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.gollum }}

## installation

{% data reusables.webhooks.installation_short_desc %}

### 利用の可否

- {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.installation_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

## installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

### 利用の可否

- {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.installation_repositories_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

## issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `issues` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

## issues

{% data reusables.webhooks.issues_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `issues` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.issue_webhook_properties %}
{% data reusables.webhooks.issue_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Issue 編集時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.issues.edited }}

## ラベル

{% data reusables.webhooks.label_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `metadata` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー                     | 種類       | 説明                                                  |
| ---------------------- | -------- | --------------------------------------------------- |
| `action`               | `string` | 実行されたアクション. `created`、`edited`、`deleted` のいずれかを指定可。 |
| `ラベル`                  | `オブジェクト` | ラベルが追加された。                                          |
| `changes`              | `オブジェクト` | アクションが `edited` の場合のラベルへの変更。                        |
| `changes[name][from]`  | `string` | アクションが`edited`だった場合、以前のバージョンの名前。                    |
| `changes[color][from]` | `string` | アクションが `edited` の場合の以前のバージョンの色。                     |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% ifversion fpt or ghec %}
## marketplace_purchase

GitHub Marketplace の購入に関連するアクティビティ。 {% data reusables.webhooks.action_type_desc %} 詳しい情報については、「[GitHub Marketplace](/marketplace/)」を参照してください。

### 利用の可否

- {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                                                                            |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| `action` | `string` | [GitHub Marketplace](https://github.com/marketplace) プランに対して実行されたアクション。 次のいずれかになります。<ul><li>「purchased」- GitHub Marketplace プランを購入しました。 変更はアカウントですぐに有効になります。</li><li>「pending_change」- GitHub Marketplace プランをダウングレードまたはキャンセルしたときに、アカウントで変更が発生することを示す「pending_change」イベントを受け取ります。 新しいプランまたはキャンセルは、支払いサイクルの終了時に有効になります。  「キャンセル」または「変更」イベントタイプは、支払いサイクルが終了し、キャンセルまたは新しいプランが有効になると送信されます。</li><li>「pending_change_cancelled」- 保留中の変更をキャンセルしました。 保留中の変更には、支払いサイクルの終了時に有効になるプランのキャンセルとダウングレードが含まれます。 </li><li>「changed」- GitHub Marketplace プランをアップグレードまたはダウングレードしたため、変更がアカウントですぐに有効になります。</li><li>「cancelled」- GitHub Marketplace プランをキャンセルし、最後の支払いサイクルが終了しました。 変更はアカウントですぐに有効になります。</li></ul> |

このペイロードと各タイプの `action` のペイロードの詳細については、「[{% data variables.product.prodname_marketplace %} webhook イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)」を参照してください。

### プラン購入時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

## メンバー

{% data reusables.webhooks.member_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `members` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.member_webhook_properties %}
{% data reusables.webhooks.member_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.member.added }}

## membership

{% data reusables.webhooks.membership_short_desc %}

### 利用の可否

- Organization webhook
- `members` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.membership_properties %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.membership.removed }}

## メタ情報

このイベントが設定されている webhook が削除されました。 このイベントは、イベントがインストールされている特定のフックへの変更のみをリッスンします。 したがって、メタイベントを受信するフックごとに選択する必要があります。

### 利用の可否

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

| キー        | 種類        | 説明                                                                                                           |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `action`  | `string`  | 実行されたアクション。 `deleted` を指定可。                                                                                  |
| `hook_id` | `integer` | 変更された webhook の ID。                                                                                          |
| `フック`     | `オブジェクト`  | 変更された webhook。 これには、webhook のタイプ (リポジトリ、Organization、ビジネス、アプリケーション、または GitHub Marketplace) に基づいて異なるキーが含まれます。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

## マイルストーン

{% data reusables.webhooks.milestone_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.milestone_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.milestone.created }}

## Organization

{% data reusables.webhooks.organization_short_desc %}

### 利用の可否

{% ifversion ghes or ghae %}
- GitHub Enterprise webhook は、`created` および `deleted` イベントのみを受信します。 詳しい情報については「[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。{% endif %}
- Organization webhook は、`deleted`、`added`、`removed`、`renamed`、`invited` イベントのみを受信します
- `members` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー           | 種類       | 説明                                                                                                                                             |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`     | `string` | 実行されたアクション. {% ifversion ghes or ghae %} `created`、{% endif %} `deleted`、`renamed`、`member_added`、`member_removed`、`member_invited` のいずれかを指定可。 |
| `招待`         | `オブジェクト` | アクションが `member_invited` の場合、ユーザへの招待またはメール。                                                                                                     |
| `membership` | `オブジェクト` | ユーザと Organization 間のメンバーシップ。  アクションが `member_invited` の場合は存在しません。                                                                              |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% ifversion fpt or ghec %}

## org_block

{% data reusables.webhooks.org_block_short_desc %}

### 利用の可否

- Organization webhook
- `organization_administration` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー             | 種類       | 説明                                           |
| -------------- | -------- | -------------------------------------------- |
| `action`       | `string` | 実行されたアクション。 `blocked`、`unblocked` のいずれかを指定可。 |
| `blocked_user` | `オブジェクト` | ブロックまたはブロック解除されたユーザに関する情報。                   |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

## package

{% data variables.product.prodname_registry %} に関連するアクティビティ。 {% data reusables.webhooks.action_type_desc %} {% data variables.product.prodname_registry %} の詳細については、「[{% data variables.product.prodname_registry %} を使用してパッケージを管理する](/github/managing-packages-with-github-packages)」を参照してください。

### 利用の可否

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.package_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.package.published }}

## page_build

{% data reusables.webhooks.page_build_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pages` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー    | 種類        | 説明                                                                         |
| ----- | --------- | -------------------------------------------------------------------------- |
| `id`  | `integer` | ページビルドの一意の識別子。                                                             |
| `ビルド` | `オブジェクト`  | [GitHub Pages ビルドのリスト](/rest/reference/pages#list-github-pages-builds) 自体。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.page_build }}

## ping

{% data reusables.webhooks.ping_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- {% data variables.product.prodname_github_apps %} は、アプリの登録に使用される `app_id` を使用して ping イベントを受信します

### webhook ペイロードオブジェクト

| キー             | 種類        | 説明                                                                                                                                                                                                                                                                                                                 |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `zen`          | `string`  | GitHub zen のランダムな文字列。                                                                                                                                                                                                                                                                                              |
| `hook_id`      | `integer` | ping をトリガーした webhook の ID。                                                                                                                                                                                                                                                                                         |
| `フック`          | `オブジェクト`  | [webhook 設定](/rest/reference/webhooks#get-a-repository-webhook)。                                                                                                                                                                                                                                                   |
| `hook[app_id]` | `integer` | 新しい {% data variables.product.prodname_github_app %} を登録すると、{% data variables.product.product_name %} は登録時に指定した **webhook URL** に ping イベントを送信します。 イベントには、アプリケーションの[認証](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/)に必要な `app_id` が含まれています。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.ping }}

## project

{% data reusables.webhooks.project_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `repository_projects` または `organization_projects` 権限のある {% data variables.product.prodname_github_apps %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event does not occur for Projects (beta).

{% endnote %}
{% endif %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project.created }}

{% ifversion fpt or ghes or ghec %}

## project_card

{% data reusables.webhooks.project_card_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `repository_projects` または `organization_projects` 権限のある {% data variables.product.prodname_github_apps %}

{% ifversion fpt or ghec %}
{% note %}

**Note**: This event does not occur for Projects (beta).

{% endnote %}
{% endif %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_card_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project_card.created }}

## project_column

{% data reusables.webhooks.project_column_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `repository_projects` または `organization_projects` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_column_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project_column.created }}

{% ifversion project-beta-webhooks %}

## projects_v2_item

{% note %}

**Note:** Webhook events for Projects (beta) are currently in beta and subject to change. To share feedback about Projects (beta) webhooks with {% data variables.product.product_name %}, see the [Projects (beta) webhook feedback discussion](https://github.com/github/feedback/discussions/17405).

{% endnote %}

Activity related to items in a Projects (beta) project. {% data reusables.webhooks.action_type_desc %} For more information, see "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)."

### 利用の可否

- Organization webhook
- {% data variables.product.prodname_github_apps %} with the `organization_projects` permission

### webhook ペイロードオブジェクト

| キー                 | 種類       | 説明                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`           | `string` | The action that was performed on the project item. Can be one of `archived`, `converted`, `created`, `edited`, `restored`, `deleted`, or `reordered`.                                                                                                                                                                                                                                 |
| `projects_v2_item` | `オブジェクト` | The project item itself. To find more information about the project item, you can use `node_id` (the node ID of the project item) and `project_node_id` (the node ID of the project) to query information in the GraphQL API. For more information, see "[Using the API to manage projects (beta)](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)." |
| `changes`          | `オブジェクト` | The changes to the project item.                                                                                                                                                                                                                                                                                                                                                      |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.projects_v2_item.created }}

{% endif %}

## public

{% data reusables.webhooks.public_short_desc %}
### 利用の可否

- リポジトリ webhook
- Organization webhook
- `metadata` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー | 種類 | 説明 |
| -- | -- | -- |
|    |    |    |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.public }}
{% endif %}
## pull_request

{% data reusables.webhooks.pull_request_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_webhook_properties %}
{% data reusables.webhooks.pull_request_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

`review_requested` イベントと `review_request_removed` イベントのデリバリには、`requested_reviewer` という追加のフィールドがあります。

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

## pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_review_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

## pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

## pull_request_review_thread

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_thread_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.pull_request_review_thread.resolved }}

## プッシュ

{% data reusables.webhooks.push_short_desc %}

{% note %}

**注釈:** 一度に 3 つ以上のタグをプッシュすると、このイベントの webhook を受信しません。

{% endnote %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー                         | 種類        | 説明                                                                                                                                                    |
| -------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                      | `string`  | プッシュされた完全な[`git ref`](/rest/reference/git#refs)。 例: `refs/heads/main`または`refs/tags/v3.14.1`。                                                          |
| `before`                   | `string`  | プッシュ前の`ref` 上の最新のコミットのSHA。                                                                                                                            |
| `after`                    | `string`  | プッシュ後の`ref`上の最新のコミットのSHA。                                                                                                                             |
| `created`                  | `boolean` | プッシュが`ref`を作成したかどうか。                                                                                                                                  |
| `deleted`                  | `boolean` | プッシュが`ref`を削除したかどうか。                                                                                                                                  |
| `forced`                   | `boolean` | プッシュが `ref`のフォースプッシュであったかどうか。                                                                                                                         |
| `head_commit`              | `オブジェクト`  | `after`がコミットオブジェクトであるか、コミットオブジェクトを指している場合、そのコミットの拡張表現。 `after`がアノテーションされたタグオブジェクトを指すプッシュの場合、そのアノテーションされたタグが指すコミットの拡張表現。                               |
| `compare`                  | `string`  | `before`コミットから`after`コミットまで、この`ref`更新にある変更を示すURL。 デフォルトブランチに直接基づいて新規作成された`ref`の場合、デフォルトブランチのheadと`after`コミットとの比較。 それ以外の場合は、`after`コミットまでのすべてのコミットを示す。 |
| `commits`                  | `array`   | プッシュされたコミットを示すコミットオブジェクトの配列。 (プッシュされたコミットは、`before`コミットと`after`コミットの間で`compare`されたものに含まれる全てのコミット。)                                                    |
| `commits[][id]`            | `string`  | コミットのSHA。                                                                                                                                             |
| `commits[][timestamp]`     | `string`  | コミットの ISO 8601 タイムスタンプ。                                                                                                                               |
| `commits[][message]`       | `string`  | コミットメッセージ。                                                                                                                                            |
| `commits[][author]`        | `オブジェクト`  | コミットのGit作者。                                                                                                                                           |
| `commits[][author][name]`  | `string`  | Git作者の名前。                                                                                                                                             |
| `commits[][author][email]` | `string`  | Git作者のメールアドレス。                                                                                                                                        |
| `commits[][url]`           | `url`     | コミットAPIのリソースを指すURL。                                                                                                                                   |
| `commits[][distinct]`      | `boolean` | このコミットが以前にプッシュされたいずれとも異なっているか。                                                                                                                        |
| `commits[][added]`         | `array`   | コミットに追加されたファイルの配列。                                                                                                                                    |
| `commits[][modified]`      | `array`   | コミットによって変更されたファイルの配列。                                                                                                                                 |
| `commits[][removed]`       | `array`   | コミットから削除されたファイルの配列。                                                                                                                                   |
| `pusher`                   | `オブジェクト`  | コミットをプッシュしたユーザ。                                                                                                                                       |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.push }}

## リリース

{% data reusables.webhooks.release_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.release_webhook_properties %}
{% data reusables.webhooks.release_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.release.published }}

## repository_dispatch

このイベントは、{% data variables.product.prodname_github_app %} が「[リポジトリディスパッチイベントの作成](/rest/reference/repos#create-a-repository-dispatch-event)」エンドポイントに `POST` リクエストを送信したときに発生します。

### 利用の可否

- この webhook を受信するには、{% data variables.product.prodname_github_apps %} に `contents` 権限が必要です。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}

## リポジトリ

{% data reusables.webhooks.repository_short_desc %}

### 利用の可否

- リポジトリ webhook は、`deleted` を除くすべてのイベントタイプを受け取ります
- Organization webhook
- `metadata` 権限のある {% data variables.product.prodname_github_apps %} は、`deleted` を除くすべてのイベントタイプを受信します

### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                   |
| -------- | -------- | ---------------------------------------------------- |
| `action` | `string` | 実行されたアクション. これは次のいずれかになります。<ul><li>「created」- リポジトリが作成されます。</li><li>「deleted」- リポジトリが削除されます。</li><li>「archived」- リポジトリがアーカイブされます。</li><li>「unarchived」- リポジトリがアーカイブ解除されます。</li>{% ifversion ghes or ghae %}<li>`anonymous_access_enabled` - A repository is [enabled for anonymous Git access](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise), `anonymous_access_disabled` - A repository is [disabled for anonymous Git access](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)</li>{% endif %}<li>「edited」- リポジトリの情報が編集されます。</li><li>「renamed」- リポジトリの名前が変更されます。</li><li>「transferred」- リポジトリが転送されます。</li><li>「publicized」- リポジトリが公開されます。</li><li> 「privatized」- リポジトリが非公開になります。</li></ul> |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% ifversion fpt or ghec %}
## repository_import

{% data reusables.webhooks.repository_import_short_desc %} 個人リポジトリでこのイベントを受信するには、インポートする前に空のリポジトリを作成する必要があります。 このイベントは、[GitHub Importer](/articles/importing-a-repository-with-github-importer/) または[Source imports API](/rest/reference/migrations#source-imports) のいずれかを使用してトリガーできます。

### 利用の可否

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.repository_import_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_import }}

## repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.repository_vulnerability_alert_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% ifversion ghes or ghec %}

## secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `secret_scanning_alerts:read` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.secret_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | `action` が `resolved` または `reopened` の場合、`sender` オブジェクトは、イベントをトリガーしたユーザになります。 `sender` オブジェクトは、他のすべてのアクションでは空になっています。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }}
{% endif %}

{% ifversion ghes > 3.4 or ghec or ghae-issue-6581 %}
## secret_scanning_alert_location

{% data reusables.webhooks.secret_scanning_alert_location_event_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `secret_scanning_alerts:read` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.secret_scanning_alert_location_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert_location.created }}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## security_advisory

Activity related to a security advisory that has been reviewed by {% data variables.product.company_short %}. A {% data variables.product.company_short %}-reviewed security advisory provides information about security-related vulnerabilities in software on {% data variables.product.prodname_dotcom %}.

The security advisory dataset also powers the GitHub {% data variables.product.prodname_dependabot_alerts %}. 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)」を参照してください。

### 利用の可否

- `security_events` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー                  | 種類       | 説明                                                                                        |
| ------------------- | -------- | ----------------------------------------------------------------------------------------- |
| `action`            | `string` | 実行されたアクション. アクションは、すべての新しいイベントに対して`published`、`updated`、`performed`、`withdrawn`のいずれかを指定可。 |
| `security_advisory` | `オブジェクト` | 概要、説明、重要度などの、セキュリティアドバイザリの詳細。                                                             |

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% endif %}

{% ifversion ghas-enablement-webhook %}

## security_and_analysis

Activity related to enabling or disabling code security and analysis features for a repository or organization.

### 利用の可否

- リポジトリ webhook
- Organization webhook
- リポジトリ管理者に少なくとも `read-only` アクセス権限がある{% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー        | 種類       | 説明                                                                     |
| --------- | -------- | ---------------------------------------------------------------------- |
| `changes` | `オブジェクト` | The changes that were made to the code security and analysis features. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.security_and_analysis }}

{% endif %}

{% ifversion fpt or ghec %}
## スポンサーシップ

{% data reusables.webhooks.sponsorship_short_desc %}

スポンサーシップ webhook は、{% data variables.product.prodname_dotcom %} でのみ作成できます。 詳しい情報については、「[スポンサー付きアカウントのイベントの webhook を設定する](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)」を参照してください。

### 利用の可否

- スポンサー付きアカウント

### webhook ペイロードオブジェクト

{% data reusables.webhooks.sponsorship_webhook_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% data reusables.webhooks.sender_desc %}

### スポンサーシップ作成時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

### スポンサーシップのダウングレード時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

## Star

{% data reusables.webhooks.star_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.star_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.star.created }}

## ステータス

{% data reusables.webhooks.status_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `statuses` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー           | 種類        | 説明                                                                                                            |
| ------------ | --------- | ------------------------------------------------------------------------------------------------------------- |
| `id`         | `integer` | ステータスの一意の識別子。                                                                                                 |
| `sha`        | `string`  | コミット SHA。                                                                                                     |
| `state`      | `string`  | 新しい状態。 `pending`、`success`、`failure`、`error` のいずれかを指定可。                                                       |
| `説明`         | `string`  | オプションの人間可読の説明がステータスに追加。                                                                                       |
| `target_url` | `string`  | ステータスに追加されたオプションのリンク。                                                                                         |
| `ブランチ`       | `array`   | ステータスの SHA を含むブランチオブジェクトの配列。 各ブランチには特定の SHA が含まれていますが、SHA がブランチの先頭である場合とそうでない場合があります。 配列には最大 10 個のブランチが含まれます。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.status }}

## Team

{% data reusables.webhooks.team_short_desc %}

### 利用の可否

- Organization webhook
- `members` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー                                              | 種類        | 説明                                                                                                                                                                |
| ----------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                        | `string`  | 実行されたアクション. `created`、 `deleted`、`edited`、`added_to_repository`、`removed_from_repository` のいずれかを指定可。                                                              |
| `Team`                                          | `オブジェクト`  | Team 自体。                                                                                                                                                          |
| `changes`                                       | `オブジェクト`  | アクションが `edited` の場合の Team への変更。                                                                                                                                   |
| `changes[description][from]`                    | `string`  | アクションが `edited` の場合、以前のバージョンの説明。                                                                                                                                  |
| `changes[name][from]`                           | `string`  | アクションが`edited`だった場合、以前のバージョンの名前。                                                                                                                                  |
| `changes[privacy][from]`                        | `string`  | アクションが `edited` の場合の以前のバージョンのTeam プライバシー。                                                                                                                         |
| `changes[repository][permissions][from][admin]` | `boolean` | アクションが `edited` の場合の、リポジトリに対する以前のバージョンの Team メンバーの `admin` 権限。                                                                                                    |
| `changes[repository][permissions][from][pull]`  | `boolean` | アクションが `edited` の場合の、リポジトリに対する以前のバージョンの Team メンバーの `pull` 権限。                                                                                                     |
| `changes[repository][permissions][from][push]`  | `boolean` | アクションが `edited` の場合の、リポジトリに対する以前のバージョンの Team メンバーの `push` 権限。                                                                                                     |
| `リポジトリ`                                         | `オブジェクト`  | アクションが `added_to_repository`、`removeed_from_repository`、`edited` の場合の、Team の範囲に追加または削除されたリポジトリ。 `edited` アクションの場合、`repository` には、リポジトリに対する Team の新しい権限レベルも含まれます。 |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

## team_add

{% data reusables.webhooks.team_add_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `members` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

| キー     | 種類       | 説明                                                                          |
| ------ | -------- | --------------------------------------------------------------------------- |
| `Team` | `オブジェクト` | 変更された [Team](/rest/reference/teams)。  **注釈:** 古いイベントではペイロードに含まていれない場合があります。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.team_add }}

{% ifversion ghes or ghae %}

## ユーザ

ユーザが `created` または `deleted` を指定した場合。

### 利用の可否
- GitHub Enterprise webhook。 詳しい情報については「[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

## Watch

{% data reusables.webhooks.watch_short_desc %}

イベントのアクターは、リポジトリに Star を付けた[ユーザ](/rest/reference/users)であり、イベントのリポジトリは、Star を付けた[リポジトリ](/rest/reference/repos)です。

### 利用の可否

- リポジトリ webhook
- Organization webhook
- `metadata` 権限のある {% data variables.product.prodname_github_apps %}

### webhook ペイロードオブジェクト

{% data reusables.webhooks.watch_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% ifversion fpt or ghes or ghec %}
## workflow_dispatch

このイベントは、 ユーザが GitHub でワークフローの実行をトリガーするか、「[ワークフローディスパッチイベントの作成](/rest/reference/actions/#create-a-workflow-dispatch-event)」エンドポイントに `POST` リクエストを送信したときに発生します。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#workflow_dispatch)」を参照してください。

### 利用の可否

- この webhook を受信するには、{% data variables.product.prodname_github_apps %} に `contents` 権限が必要です。

### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                                                                                     |
| -------- | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| `inputs` | `オブジェクト` | Inputs to the workflow. Each key represents the name of the input while it's value represents the value of that input. |
{% data reusables.webhooks.org_desc %}
| `ref` | `string` | The branch ref from which the workflow was run. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}
| `workflow` | `string` | Relative path to the workflow file which contains the workflow. |

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }}
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}

## workflow_job

{% data reusables.webhooks.workflow_job_short_desc %}

### 利用の可否

- リポジトリ webhook
- Organization webhook
- Enterprise webhook

### webhook ペイロードオブジェクト

{% data reusables.webhooks.workflow_job_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.workflow_job }}

{% endif %}
{% ifversion fpt or ghes or ghec %}
## workflow_run

{% data variables.product.prodname_actions %} ワークフロー実行がリクエスト済または完了したとき。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#workflow_run)」を参照してください。

### 利用の可否

- `actions` または `contents` 権限のある {% data variables.product.prodname_github_apps %}。

### webhook ペイロードオブジェクト

{% data reusables.webhooks.workflow_run_properties %}
{% data reusables.webhooks.workflow_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}

### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.workflow_run }}
{% endif %}
