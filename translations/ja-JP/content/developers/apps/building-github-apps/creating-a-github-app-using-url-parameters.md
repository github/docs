---
title: URL パラメータを使用して GitHub App を作成する
intro: 'URL の[クエリ パラメーター](https://en.wikipedia.org/wiki/Query_string)を使って新しい {% data variables.product.prodname_github_app %} の設定を事前に選ぶと、新しい {% data variables.product.prodname_github_app %} の構成を簡単に設定できます。'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation query parameters
ms.openlocfilehash: 94622bfc2de9ba991758a6d1e465d8eb3d770a5f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064028'
---
## {% data variables.product.prodname_github_app %} URL パラメータについて

個人または Organization アカウントで、{% data variables.product.prodname_github_app %} の構成を事前設定する以下の URL をクエリパラメータに追加できます。

* **個人アカウント:** `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **Organization アカウント:** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

アプリケーションを作成するユーザは、アプリケーションをサブミットする前に {% data variables.product.prodname_github_app %} 登録ページから事前設定する値を編集できます。 URL クエリ文字列に `name` などの必須の値が含まれていない場合は、アプリの作成者が、アプリを送信する前に値を入力する必要があります。

webhook を保護するためにシークレットが必要なアプリケーションの場合、シークレットの値はクエリパラメータではなく、アプリケーションを作成する人がフォームに設定する必要があります。 詳細については、「[webhook のセキュリティ保護](/developers/webhooks-and-events/webhooks/securing-your-webhooks)」をご覧ください。

次の URL では、事前構成された説明とコールバック URL を使って、`octocat-github-app` という新しいパブリック アプリが作成されます。 また、この URL では、`checks` に対して読み取りと書き込みのアクセス許可が選ばれ、`check_run` と `check_suite` の Webhook イベントにサブスクライブされ、インストール時にユーザーの認可 (OAuth) を要求するオプションが選ばれます。

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

使用可能なクエリパラメータ、権限、およびイベントの完全なリストを、以下のセクションに記載します。

## {% data variables.product.prodname_github_app %} configuration parameters

 名前 | 型 | 説明
-----|------|-------------
`name` | `string` | {% data variables.product.prodname_github_app %} の名前。 アプリケーションには簡潔で明快な名前を付けましょう。 アプリケーションの名前は、既存の GitHub ユーザと同じ名前にできません。ただし、その名前があなた自身のユーザ名や Organization 名である場合は例外です。 インテグレーションが動作すると、ユーザインターフェース上にアプリケーション名のスラッグが表示されます。
`description` | `string` | {% data variables.product.prodname_github_app %} の説明。
`url` | `string` | {% data variables.product.prodname_github_app %} のホームページの完全な URL。
`callback_urls` | `array of strings` | インストールの承認後にリダイレクトする完全な URL。 最大 10 個のコールバック URL を指定できます。 この URL は、アプリケーションがユーザからサーバへのリクエストを識別して承認する必要がある場合に使用されます。 たとえば、`callback_urls[]=https://example.com&callback_urls[]=https://example-2.com` のようにします。
`request_oauth_on_install` | `boolean` | アプリが OAuth フローを使ってユーザーを認可する場合、このオプションを `true` に設定して、ユーザーがインストール時にアプリを認可して、ステップを省略できるようにすることができます。 このオプションを選んだ場合、`setup_url` は利用できなくなり、ユーザーはアプリのインストール後に設定された `callback_url` にリダイレクトされます。
`setup_url` | `string` | {% data variables.product.prodname_github_app %} アプリケーションをインストール後に追加セットアップが必要な場合に、リダイレクトする完全な URL。
`setup_on_update` | `boolean` | `true` に設定すると、たとえばリポジトリが追加や削除された後など、ユーザーはインストールが更新されたときのセットアップ URL にリダイレクトします。
`public` | `boolean` | {% data variables.product.prodname_github_app %} を公開する場合は `true` に設定し、アプリの所有者のみがアクセスできるようにするには `false` に設定します。
`webhook_active` | `boolean` | Webhook を無効にするには、`false` に設定します。 Webhook は既定で有効になっています。
`webhook_url` | `string` | webhook イベントペイロードを送信する完全な URL。
{% ifversion ghae %}`webhook_secret` | `string` | webhook を保護するためのシークレットを指定できます。 詳しくは、「[Webhook のセキュリティ保護](/webhooks/securing/)」をご覧ください。
{% endif %}`events` | `array of strings` | Webhook イベント。 一部の Webhook イベントでは、新しい {% data variables.product.prodname_github_app %} を登録するときにイベントを選ぶ前に、リソースに対する `read` または `write` アクセス許可が必要です。 利用可能なイベントと、それに必要なアクセス許可については、「[{% data variables.product.prodname_github_app %} webhook イベント](#github-app-webhook-events)」セクションをご覧ください。 クエリ文字列では、複数のイベントを選択できます。 たとえば、`events[]=public&events[]=label` です。{% ifversion ghes < 3.4 %}
`domain` | `string` | コンテンツ参照の URL。{% endif %}
`single_file_name` | `string` | これは、アプリケーションが任意のリポジトリの単一のファイルにアクセスできるようにするための、スコープの狭い権限です。 `single_file` アクセス許可を `read` または `write` に設定すると、このフィールドは {% data variables.product.prodname_github_app %} が管理する単一のファイルへのパスを指定します。 {% ifversion fpt or ghes or ghec %}複数のファイルを管理する必要がある場合は、下の `single_file_paths` をご覧ください。 {% endif %}{% ifversion fpt or ghes or ghec %}
`single_file_paths` | `array of strings` | アプリケーションが、リポジトリ内の指定した最大 10 ファイルにアクセスできるようにします。 `single_file` アクセス許可を `read` または `write` に設定すると、この配列は {% data variables.product.prodname_github_app %} が管理する最大 10 個のファイルへのパスを格納できます。 これらのファイルには、それぞれ別のアクセス許可があたえられるでのではなく、すべてに `single_file` で設定されている同じアクセス許可が与えられます。 2 つ以上のファイルが構成されていると、API は `multiple_single_files=true` を返し、それ以外の場合は `multiple_single_files=false` を返します。{% endif %}

## {% data variables.product.prodname_github_app %} の権限

以下の表にある権限名をクエリパラメータ名として、権限タイプをクエリの値として使用することで、クエリ文字列で権限を設定できます。 たとえば、`contents` のユーザー インターフェイスで `Read & write` アクセス許可を選ぶには、クエリ文字列に `&contents=write` を含めます。 `blocking` のユーザー インターフェイスで `Read-only` アクセス許可を選ぶには、クエリ文字列に `&blocking=read` を含めます。 `checks` のユーザー インターフェイスで `no-access` を選ぶには、クエリ文字列に `checks` アクセス許可を含めないようにします。

権限 | 説明
---------- | -----------
[`administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-administration) | Organization およびリポジトリ管理のためのさまざまなエンドポイントにアクセス権を付与します。 `none`、`read`、`write` のいずれかにすることができます。{% ifversion fpt or ghec %}
[`blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-blocking) | [Blocking Users API](/rest/reference/users#blocking) へのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% endif %}
[`checks`](/rest/reference/permissions-required-for-github-apps/#permission-on-checks) | [Checks API](/rest/reference/checks) へのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% ifversion ghes < 3.4 %}
`content_references` | "[コンテンツ添付の作成](/rest/reference/apps#create-a-content-attachment)" エンドポイントへのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% endif %}
[`contents`](/rest/reference/permissions-required-for-github-apps/#permission-on-contents) |  さまざまなエンドポイントにアクセス権を付与し、リポジトリのコンテンツを変更できるようにします。 `none`、`read`、または `write` のいずれかにすることができます。
[`deployments`](/rest/reference/permissions-required-for-github-apps/#permission-on-deployments) | [Deployments API](/rest/reference/repos#deployments) へのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% ifversion fpt or ghes or ghec %}
[`emails`](/rest/reference/permissions-required-for-github-apps/#permission-on-emails) | [Emails API](/rest/reference/users#emails) へのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% endif %}
[`followers`](/rest/reference/permissions-required-for-github-apps/#permission-on-followers) | [Followers API](/rest/reference/users#followers) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
[`gpg_keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-gpg-keys) | [GPG Keys API](/rest/reference/users#gpg-keys) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
[`issues`](/rest/reference/permissions-required-for-github-apps/#permission-on-issues) | [IssuesKeys API](/rest/reference/issues) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
[`keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-keys) | [Public Keys API](/rest/reference/users#keys) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
[`members`](/rest/reference/permissions-required-for-github-apps/#permission-on-members) |  Organization のメンバーへのアクセス権を付与します。 `none`、`read`、`write` のいずれかにすることができます。{% ifversion fpt or ghec %}
[`metadata`](/rest/reference/permissions-required-for-github-apps/#metadata-permissions) | 機密データを漏洩しない、読み取り専用のエンドポイントへのアクセス権を付与します。 `read` または `none` を指定できます。 {% data variables.product.prodname_github_app %} に何らかのアクセス許可を設定した場合の既定値は `read` になり、アクセス許可を指定しなかった場合の既定値は `none` になります。
[`organization_administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-administration) | "[Organization の更新](/rest/reference/orgs#update-an-organization)" エンドポイントと [Organization Interaction Restrictions API](/rest/reference/interactions#set-interaction-restrictions-for-an-organization) へのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% endif %}
[`organization_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-hooks) | [Organization Webhooks API](/rest/reference/orgs#webhooks/) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
`organization_plan` | "[Organization の取得](/rest/reference/orgs#get-an-organization)" エンドポイントを使って Organization の計画に関する情報を取得するためのアクセスを許可します。 `none` または `read` のいずれかにすることができます。
[`organization_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) |  [Projects API](/rest/reference/projects) へのアクセスを許可します。 `none`、`read`、`write`、`admin` のいずれかにすることができます。{% ifversion fpt or ghec %}
[`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) | [Blocking Organization Users API](/rest/reference/orgs#blocking) へのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% endif %}
[`pages`](/rest/reference/permissions-required-for-github-apps/#permission-on-pages) | [Pages API](/rest/reference/repos#pages) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
`plan` | "[ユーザーの取得](/rest/reference/users#get-a-user)" エンドポイントを使ってユーザーの GitHub プランに関する情報を取得するためのアクセスを許可します。 `none` または `read` のいずれかにすることができます。
[`pull_requests`](/rest/reference/permissions-required-for-github-apps/#permission-on-pull-requests) | さまざまなプルリクエストエンドポイントへのアクセス権を付与します。 `none`、`read`、または `write` のいずれかにすることができます。
[`repository_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-hooks) | [Repository Webhooks API](/rest/reference/repos#hooks) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
[`repository_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-projects) |  [Projects API](/rest/reference/projects) へのアクセスを許可します。 `none`、`read`、`write`、`admin` のいずれかにすることができます。{% ifversion ghes or ghec %}
[`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps/#permission-on-secret-scanning-alerts) |  [Secret scanning API](/rest/reference/secret-scanning) へのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% endif %}{% ifversion fpt or ghes or ghec %}
[`security_events`](/rest/reference/permissions-required-for-github-apps/#permission-on-security-events) |  [Code scanning API](/rest/reference/code-scanning/) へのアクセスを許可します。 `none`、`read`、`write` のいずれかにすることができます。{% endif %}
[`single_file`](/rest/reference/permissions-required-for-github-apps/#permission-on-single-file) | [Contents API](/rest/reference/repos#contents) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
[`starring`](/rest/reference/permissions-required-for-github-apps/#permission-on-starring) | [Starring API](/rest/reference/activity#starring) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
[`statuses`](/rest/reference/permissions-required-for-github-apps/#permission-on-statuses) | [Statuses API](/rest/reference/commits#commit-statuses) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
[`team_discussions`](/rest/reference/permissions-required-for-github-apps/#permission-on-team-discussions) | [Team Discussions API](/rest/reference/teams#discussions) と [Team Discussion Comments API](/rest/reference/teams#discussion-comments) へのアクセスを許可します。 `none`、`read`、または `write` のいずれかにすることができます。
`vulnerability_alerts`| リポジトリ内の {% data variables.product.prodname_dependabot_alerts %} を受信するアクセス権を付与します。 詳しくは、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)」をご覧ください。 `none` または `read` のいずれかにすることができます。
`watching` | リストへのアクセス権を付与し、ユーザがサブスクライブするリポジトリの変更を許可します。 `none`、`read`、または `write` のいずれかにすることができます。

## {% data variables.product.prodname_github_app %} webhook イベント

Webhook イベント名 | 必要な権限 | 説明
------------------ | ------------------- | -----------
[`check_run`](/webhooks/event-payloads/#check_run) |`checks` | {% data reusables.webhooks.check_run_short_desc %}
[`check_suite`](/webhooks/event-payloads/#check_suite) |`checks` | {% data reusables.webhooks.check_suite_short_desc %}
[`commit_comment`](/webhooks/event-payloads/#commit_comment) | `contents` | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
[`content_reference`](/webhooks/event-payloads/#content_reference) |`content_references` | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
[`create`](/webhooks/event-payloads/#create) | `contents` | {% data reusables.webhooks.create_short_desc %}
[`delete`](/webhooks/event-payloads/#delete) | `contents` | {% data reusables.webhooks.delete_short_desc %}
[`deployment`](/webhooks/event-payloads/#deployment) | `deployments` | {% data reusables.webhooks.deployment_short_desc %}
[`deployment_status`](/webhooks/event-payloads/#deployment_status) | `deployments` | {% data reusables.webhooks.deployment_status_short_desc %}
[`fork`](/webhooks/event-payloads/#fork) | `contents` | {% data reusables.webhooks.fork_short_desc %}
[`gollum`](/webhooks/event-payloads/#gollum) | `contents` | {% data reusables.webhooks.gollum_short_desc %}
[`issues`](/webhooks/event-payloads/#issues) | `issues` | {% data reusables.webhooks.issues_short_desc %}
[`issue_comment`](/webhooks/event-payloads/#issue_comment) | `issues` | {% data reusables.webhooks.issue_comment_short_desc %}
[`label`](/webhooks/event-payloads/#label) | `metadata` | {% data reusables.webhooks.label_short_desc %}
[`member`](/webhooks/event-payloads/#member) | `members` | {% data reusables.webhooks.member_short_desc %}
[`membership`](/webhooks/event-payloads/#membership) | `members` | {% data reusables.webhooks.membership_short_desc %}
[`milestone`](/webhooks/event-payloads/#milestone) | `pull_request` | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
[`org_block`](/webhooks/event-payloads/#org_block) | `organization_administration` | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
[`organization`](/webhooks/event-payloads/#organization) | `members` | {% data reusables.webhooks.organization_short_desc %}
[`page_build`](/webhooks/event-payloads/#page_build) | `pages` | {% data reusables.webhooks.page_build_short_desc %}
[`project`](/webhooks/event-payloads/#project) | `repository_projects` または `organization_projects` | {% data reusables.webhooks.project_short_desc %}
[`project_card`](/webhooks/event-payloads/#project_card) | `repository_projects` または `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
[`project_column`](/webhooks/event-payloads/#project_column) | `repository_projects` または `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
[`public`](/webhooks/event-payloads/#public) | `metadata` | {% data reusables.webhooks.public_short_desc %}
[`pull_request`](/webhooks/event-payloads/#pull_request) | `pull_requests` | {% data reusables.webhooks.pull_request_short_desc %}
[`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | `pull_request` | {% data reusables.webhooks.pull_request_review_short_desc %}
[`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request` | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
[`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread) | `pull_request` | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
[`push`](/webhooks/event-payloads/#push) | `contents` | {% data reusables.webhooks.push_short_desc %}
[`release`](/webhooks/event-payloads/#release) | `contents` | {% data reusables.webhooks.release_short_desc %}
[`repository`](/webhooks/event-payloads/#repository) |`metadata` | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) | `contents` | GitHub Action を使用するインテグレーターがカスタムイベントをトリガーできるようにします。{% endif %}
[`status`](/webhooks/event-payloads/#status) | `statuses` | {% data reusables.webhooks.status_short_desc %}
[`team`](/webhooks/event-payloads/#team) | `members` | {% data reusables.webhooks.team_short_desc %}
[`team_add`](/webhooks/event-payloads/#team_add) | `members` | {% data reusables.webhooks.team_add_short_desc %}
[`watch`](/webhooks/event-payloads/#watch) | `metadata` | {% data reusables.webhooks.watch_short_desc %}
