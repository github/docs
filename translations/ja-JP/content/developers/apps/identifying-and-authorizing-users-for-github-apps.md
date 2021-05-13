---
title: GitHub App のユーザの特定と認可
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization/
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps/
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---


{% data reusables.pre-release-program.expiring-user-access-tokens %}

GitHub App がユーザの代わりに動作すると、ユーザからサーバーに対するリクエストを実行します。 こうしたリクエストは、ユーザのアクセストークンで承認される必要があります。 ユーザからサーバーに対するリクエストには、特定のユーザに対してどのリポジトリを表示するか決定するなど、ユーザに対するデータのリクエストが含まれます。 これらのリクエストには、ビルドの実行など、ユーザがトリガーしたアクションも含まれます。

{% data reusables.apps.expiring_user_authorization_tokens %}

### サイト上のユーザを特定する

ブラウザで動作する標準的なアプリケーションでユーザを認可するには、[Web アプリケーションフロー](#web-application-flow)を利用してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
CLI ツールや Git 認証情報マネージャーなどの、ブラウザに直接アクセスしないヘッドレスアプリケーションでユーザを認可するには、[デバイスフロー](#device-flow)を利用します。 デバイスフローは、OAuth 2.0 [Device Authorization Grant](https://tools.ietf.org/html/rfc8628) を利用します。
{% endif %}

### Web アプリケーションフロー

Web アプリケーションフローを利用して、サイト上のユーザを特定するプロセスは以下の通りです。

1. ユーザはGitHubのアイデンティティをリクエストするためにリダイレクトされます
2. ユーザはGitHubによってサイトにリダイレクトして戻されます
3. GitHub Appはユーザのアクセストークンで API にアクセスします

アプリケーションを作成または変更する際に [**Request user authorization (OAuth) during installation**] を選択した場合、アプリケーションのインストール中にステップ 1 が完了します。 詳しい情報については、「[インストール中のユーザの認可](/apps/installing-github-apps/#authorizing-users-during-installation)」を参照してください。

#### 1. ユーザのGitHubアイデンティティのリクエスト

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

GitHub Appが`login`パラメータを指定すると、ユーザに対して利用できる特定のアカウントでサインインしてアプリケーションを認可するよう求めます。

##### パラメータ

| 名前             | 種類       | 説明                                                                                                                                                                                                                                                                                                    |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `string` | **必須。**GitHub App のクライアント IDです。 アプリケーションを選択したときに、[GitHub App 設定](https://github.com/settings/apps)に表示されます。                                                                                                                                                                                            |
| `redirect_uri` | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 これは、GitHub App をセットアップする際に{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}**コールバック URL** として指定された URL の １つ{% else %}[**User authorization callback URL**] フィールドで指定された URL {% endif %}と一致させる必要があり、他の追加パラメータを含めることはできません。 |
| `state`        | `string` | これはフォージェリアタックを防ぐためにランダムな文字列を含める必要があり、あらゆる任意のデータを含めることができます。                                                                                                                                                                                                                                           |
| `login`        | `string` | サインインとアプリケーションの認可に使われるアカウントを指示します。                                                                                                                                                                                                                                                                    |
| `allow_signup` | `string` | Whether or not unauthenticated users will be offered an option to sign up for {% data variables.product.prodname_dotcom %} during the OAuth flow. デフォルトは `true` です。 ポリシーでサインアップが禁止されている場合は`false`を使ってください。                                                                                            |

{% note %}

**注釈:** 認可リクエストにスコープを指定する必要はありません。 従来の OAuth とは異なり、認証トークンはGitHub App に紐付けられた権限およびユーザの権限に限定されます。

{% endnote %}

#### 2. ユーザはGitHubによってサイトにリダイレクトして戻されます

ユーザがリクエストを受け付けると、GitHub は一時的なコードを `code` パラメータに、そして前のステップで渡された状態を `state` パラメータに入れてリダイレクトさせ、サイトに戻します。 状態が一致しない場合、そのリクエストは第三者が作成したものであり、プロセスを中止する必要があります。

{% note %}

**注釈:** アプリケーションを作成または変更する際に [**Request user authorization (OAuth) during installation**] を選択した場合、GitHub はアクセストークンと交換する必要がある一時的な `code` を返します。 アプリケーションのインストール中に GitHub が OAuth フローを開始した場合、`state` パラメータは返されません。

{% endnote %}

この `code` をアクセストークンと交換します。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}トークンの期限設定が有効になっている場合、アクセストークンは 8 時間で期限切れとなり、リフレッシュトークンは 6 か月で期限切れとなります。 トークンを更新するたびに、新しいリフレッシュトークンを取得します。 詳しい情報については、「[ユーザからサーバーに対するアクセストークンをリフレッシュする](/developers/apps/refreshing-user-to-server-access-tokens)」を参照してください。

ユーザトークンの期限設定は、現在のところオプション機能であり、変更される可能性があります。 ユーザからサーバーに対するトークンの期限設定にオプトインするには、「[アプリケーションのオプション機能を有効化する](/developers/apps/activating-optional-features-for-apps)」を参照してください。{% endif %}

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### パラメータ

| 名前              | 種類       | 説明                                                                                                                                                                                                                                                                                                    |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `string` | **必須。**GitHub App のクライアント ID。                                                                                                                                                                                                                                                                         |
| `client_secret` | `string` | **必須。**GitHub App のクライアントシークレット。                                                                                                                                                                                                                                                                      |
| `コード`           | `string` | **必須。** ステップ1でレスポンスとして受け取ったコード。                                                                                                                                                                                                                                                                       |
| `redirect_uri`  | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 これは、GitHub App をセットアップする際に{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}**コールバック URL** として指定された URL の １つ{% else %}[**User authorization callback URL**] フィールドで指定された URL {% endif %}と一致させる必要があり、他の追加パラメータを含めることはできません。 |
| `state`         | `string` | ステップ1で提供した推測できないランダムな文字列。                                                                                                                                                                                                                                                                             |

##### レスポンス

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}

デフォルトでは、レスポンスは以下の形式になります。 レスポンスパラメータの `expires_in`、`refresh_token`、`refresh_token_expires_in` は、ユーザからサーバに対するアクセストークンの期限設定を有効にしている場合にのみ返されます。

```json
{
  "access_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghu_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}",
  "expires_in": 28800,
  "refresh_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498{% else %}r1.c1b4a2e77838347a7e420ce178f2e7c6912e1692{% endif %}",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```
{% else %}

デフォルトでは、レスポンスは以下の形式になります。

    access_token={% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghu_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}&token_type=bearer

{% endif %}

#### 3. GitHub Appはユーザのアクセストークンで API にアクセスします

ユーザのアクセストークンを使用すると、GitHub App がユーザの代わりに API にリクエストを発行できます。

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

たとえば、curlでは以下のようにAuthorizationヘッダを設定できます。

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### デバイスフロー

{% if currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**注釈:** デバイスフローは現在パブリックベータであり、変更されることがあります。

{% endnote %}
{% endif %}

デバイスフローを使えば、CLIツールやGit認証情報マネージャーなどのヘッドレスアプリケーションのユーザを認可できます。

デバイスフローを使ったユーザの認可については、「[OAuth App の認可](/developers/apps/authorizing-oauth-apps#device-flow)」を参照してください。

{% endif %}

### ユーザがアクセスできるインストールされたリソースの確認

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

ユーザの OAuth トークンを取得したら、そのユーザがアクセスできるインストールされたアプリケーションを確認できます。

    Authorization: token OAUTH-TOKEN
    GET /user/installations

また、インストールされたアプリケーションでユーザがアクセスできるリポジトリも確認できます。

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

詳細については、[ユーザアクセストークンがアクセスできるインストールされたアプリケーションの一覧表示](/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token)および[ユーザアクセストークンがアクセスできるリポジトリの一覧表示](/rest/reference/apps#list-repositories-accessible-to-the-user-access-token)でご確認ください。

### GitHub App の認可の取り消し処理

ユーザが GitHub App の認可を取り消した場合、アプリケーションはデフォルトで [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) webhook を受信します。 GitHub App は、このイベントをサブスクライブ解除できません。 {% data reusables.webhooks.authorization_event %}

### ユーザレベルの権限

[ユーザ認可フロー](#identifying-users-on-your-site)の一環として、個々のユーザに付与されたユーザのメールなどのユーザが所有するリソースにアクセスできる、ユーザレベルの権限を GitHub App に付与できます。 ユーザレベルの権限は、Organization またはユーザアカウントにインストールされる際に付与される、[リポジトリおよび Organization レベルの権限](/rest/reference/permissions-required-for-github-apps)とは異なります。

ユーザレベルの権限は、[**Permissions & webhooks**] ページの [**User permissions**] セクションにある GitHub App の設定で選択できます。 権限の選択に関する詳しい情報については、「[GitHub Appの権限の編集](/apps/managing-github-apps/editing-a-github-app-s-permissions/)」を参照してください。

ユーザが自分のアカウントにアプリケーションをインストールする時、インストールプロンプトは、アプリケーションがリクエストするユーザレベルの権限を一覧表示し、アプリケーションがこれらの権限を個々のユーザに求めることができるということを説明します。

ユーザレベルの権限は個々のユーザに付与されるため、ユーザにアップグレードを促すことなく、既存のアプリケーションに権限を追加できます。 ただし、新しい権限を認可し、ユーザからサーバーに対するトークンを取得するため、ユーザ認可フローを通じて既存のユーザを送信する必要があります。

### ユーザからサーバーへのリクエスト

While most of your API インタラクションのほとんどは、サーバーからサーバーへのインストールアクセストークンを用いて行われますが、一部のエンドポイントでは、ユーザアクセストークンを使用し、API 経由でアクションを実行できます。 [GraphQL v4](/graphql) または [REST v3](/rest) エンドポイントを使用して、アプリケーションは次のリクエストを行うことができます。

#### 対応しているエンドポイント

{% if currentVersion == "free-pro-team@latest" %}
##### Actions ランナー

* [リポジトリのランナーアプリケーションの一覧表示](/rest/reference/actions#list-runner-applications-for-a-repository)
* [リポジトリのセルフホストランナーの一覧表示](/rest/reference/actions#list-self-hosted-runners-for-a-repository)
* [リポジトリのセルフホストランナーの取得](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository)
* [リポジトリからのセルフホストランナーの削除](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository)
* [リポジトリに対する登録トークンの作成](/rest/reference/actions#create-a-registration-token-for-a-repository)
* [リポジトリに対する削除トークンの作成](/rest/reference/actions#create-a-remove-token-for-a-repository)
* [Organization のランナーアプリケーションの一覧表示](/rest/reference/actions#list-runner-applications-for-an-organization)
* [Organizationのセルフホストランナーの一覧表示](/rest/reference/actions#list-self-hosted-runners-for-an-organization)
* [Organizationのセルフホストランナーの取得](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization)
* [Organizationのセルフホストランナーの削除](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization)
* [Organizationの登録トークンの作成](/rest/reference/actions#create-a-registration-token-for-an-organization)
* [Organizationの削除トークンの作成](/rest/reference/actions#create-a-remove-token-for-an-organization)

##### Actionsのシークレット

* [リポジトリ公開鍵の取得](/rest/reference/actions#get-a-repository-public-key)
* [リポジトリのシークレットの一覧表示](/rest/reference/actions#list-repository-secrets)
* [リポジトリのシークレットの取得](/rest/reference/actions#get-a-repository-secret)
* [リポジトリのシークレットの作成もしくは更新](/rest/reference/actions#create-or-update-a-repository-secret)
* [リポジトリシークレットの削除](/rest/reference/actions#delete-a-repository-secret)
* [Organizationの公開鍵の取得](/rest/reference/actions#get-an-organization-public-key)
* [Organizationのシークレットの一覧表示](/rest/reference/actions#list-organization-secrets)
* [Organizationのシークレットの取得](/rest/reference/actions#get-an-organization-secret)
* [Organizationのシークレットの作成もしくは更新](/rest/reference/actions#create-or-update-an-organization-secret)
* [Organizatinoの選択されたリポジトリのシークレットの一覧表示](/rest/reference/actions#list-selected-repositories-for-an-organization-secret)
* [Organizationの選択されたリポジトリのシークレットの設定](/rest/reference/actions#set-selected-repositories-for-an-organization-secret)
* [Organizationの選択されたリポジトリのシークレットの追加](/rest/reference/actions#add-selected-repository-to-an-organization-secret)
* [Organizationの選択されたリポジトリからのシークレットの削除](/rest/reference/actions#remove-selected-repository-from-an-organization-secret)
* [Organizationのシークレットの削除](/rest/reference/actions#delete-an-organization-secret)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### 成果物

* [リポジトリの成果物の一覧表示](/rest/reference/actions#list-artifacts-for-a-repository)
* [ワークフローの実行の成果物の一覧表示](/rest/reference/actions#list-workflow-run-artifacts)
* [成果物の取得](/rest/reference/actions#get-an-artifact)
* [成果物の削除](/rest/reference/actions#delete-an-artifact)
* [成果物のダウンロード](/rest/reference/actions#download-an-artifact)
{% endif %}

##### チェックラン

* [チェックランの作成](/rest/reference/checks#create-a-check-run)
* [チェックランの取得](/rest/reference/checks#get-a-check-run)
* [チェックランの更新](/rest/reference/checks#update-a-check-run)
* [チェックランのアノテーションの一覧表示](/rest/reference/checks#list-check-run-annotations)
* [チェックスイート中のチェックランの一覧表示](/rest/reference/checks#list-check-runs-in-a-check-suite)
* [Git参照のチェックランの一覧表示](/rest/reference/checks#list-check-runs-for-a-git-reference)

##### チェックスイート

* [チェックスイートの作成](/rest/reference/checks#create-a-check-suite)
* [チェックスイートの取得](/rest/reference/checks#get-a-check-suite)
* [チェックスイートのリクエスト](/rest/reference/checks#rerequest-a-check-suite)
* [チェックスイートのリポジトリ環境設定の更新](/rest/reference/checks#update-repository-preferences-for-check-suites)
* [Git参照のチェックスイートの一覧表示](/rest/reference/checks#list-check-suites-for-a-git-reference)

##### 行動規範

* [すべての行動規範の取得](/rest/reference/codes-of-conduct#get-all-codes-of-conduct)
* [行動規範の取得](/rest/reference/codes-of-conduct#get-a-code-of-conduct)

##### デプロイメントステータス

* [デプロイメントステータスの一覧表示](/rest/reference/repos#list-deployment-statuses)
* [デプロイメントステータスの作成](/rest/reference/repos#create-a-deployment-status)
* [デプロイメントステータスの取得](/rest/reference/repos#get-a-deployment-status)

##### デプロイメント

* [デプロイメントの一覧表示](/rest/reference/repos#list-deployments)
* [デプロイメントの作成](/rest/reference/repos#create-a-deployment)
* [デプロイメントの取得](/rest/reference/repos#get-a-deployment){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [デプロイメントの削除](/rest/reference/repos#delete-a-deployment){% endif %}

##### イベント

* [リポジトリのネットワークのパブリックなイベントの一覧表示](/rest/reference/activity#list-public-events-for-a-network-of-repositories)
* [パブリックなOrganizationのイベントの一覧表示](/rest/reference/activity#list-public-organization-events)

##### フィード

* [フィードの取得](/rest/reference/activity#get-feeds)

##### Git Blob

* [blobの作成](/rest/reference/git#create-a-blob)
* [blobの取得](/rest/reference/git#get-a-blob)

##### Gitのコミット

* [コミットの作成](/rest/reference/git#create-a-commit)
* [コミットの取得](/rest/reference/git#get-a-commit)

##### Git参照

* [参照の作成](/rest/reference/git#create-a-reference)*[参照の取得](/rest/reference/git#get-a-reference)
* [一致する参照の一覧表示](/rest/reference/git#list-matching-references)
* [参照の更新](/rest/reference/git#update-a-reference)
* [参照の削除](/rest/reference/git#delete-a-reference)

##### Gitタグ

* [タグオブジェクトの作成](/rest/reference/git#create-a-tag-object)
* [タグの取得](/rest/reference/git#get-a-tag)

##### Gitツリー

* [ツリーの作成](/rest/reference/git#create-a-tree)
* [ツリーの取得](/rest/reference/git#get-a-tree)

##### gitignoreテンプレート

* [すべてのgitignoreテンプレートの取得](/rest/reference/gitignore#get-all-gitignore-templates)
* [gitignoreテンプレートの取得](/rest/reference/gitignore#get-a-gitignore-template)

##### インストール

* [ユーザアクセストークンでアクセスできるリポジトリの一覧表示](/rest/reference/apps#list-repositories-accessible-to-the-user-access-token)

{% if currentVersion == "free-pro-team@latest" %}
##### インタラクションの制限

* [Organizationのインタラクション制限の取得](/rest/reference/interactions#get-interaction-restrictions-for-an-organization)
* [Organizationのインタラクション制限の設定](/rest/reference/interactions#set-interaction-restrictions-for-an-organization)
* [Organizationのインタラクション制限の削除](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization)
* [リポジトリのインタラクション制限の取得](/rest/reference/interactions#get-interaction-restrictions-for-a-repository)
* [リポジトリのインタラクション制限の設定](/rest/reference/interactions#set-interaction-restrictions-for-a-repository)
* [リポジトリのインタラクション制限の削除](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository)
{% endif %}

##### Issueにアサインされた人

* [Issueへのアサインされる人の追加](/rest/reference/issues#add-assignees-to-an-issue)
* [Issueからアサインされた人を削除](/rest/reference/issues#remove-assignees-from-an-issue)

##### Issueコメント

* [Issueコメントの一覧表示](/rest/reference/issues#list-issue-comments)
* [Issueコメントの作成](/rest/reference/issues#create-an-issue-comment)
* [リポジトリのIssueコメントの一覧表示](/rest/reference/issues#list-issue-comments-for-a-repository)
* [Issueコメントの取得](/rest/reference/issues#get-an-issue-comment)
* [Issueコメントの更新](/rest/reference/issues#update-an-issue-comment)
* [Issueコメントの削除](/rest/reference/issues#delete-an-issue-comment)

##### Issueイベント

* [Issueイベントの一覧表示](/rest/reference/issues#list-issue-events)

##### Issueのタイムライン

* [Issueのタイムラインイベントの一覧表示](/rest/reference/issues#list-timeline-events-for-an-issue)

##### Issue

* [認証されたユーザにアサインされたIssueの一覧表示](/rest/reference/issues#list-issues-assigned-to-the-authenticated-user)
* [アサインされた人の一覧表示](/rest/reference/issues#list-assignees)
* [ユーザにアサインできるかを確認](/rest/reference/issues#check-if-a-user-can-be-assigned)
* [リポジトリのIssueの一覧表示](/rest/reference/issues#list-repository-issues)
* [Issueの作成](/rest/reference/issues#create-an-issue)
* [Issueの取得](/rest/reference/issues#get-an-issue)
* [Issueの更新](/rest/reference/issues#update-an-issue)
* [Issueのロック](/rest/reference/issues#lock-an-issue)
* [Issueのロック解除](/rest/reference/issues#unlock-an-issue)

{% if currentVersion == "free-pro-team@latest" %}
##### ジョブ

* [ワークフローランのジョブを取得](/rest/reference/actions#get-a-job-for-a-workflow-run)
* [ワークフローランのジョブのログをダウンロード](/rest/reference/actions#download-job-logs-for-a-workflow-run)
* [ワークフローランのジョブを一覧表示](/rest/reference/actions#list-jobs-for-a-workflow-run)
{% endif %}

##### ラベル

* [Issueのラベルを一覧表示](/rest/reference/issues#list-labels-for-an-issue)
* [Issueにラベルを追加](/rest/reference/issues#add-labels-to-an-issue)
* [Issueにラベルを設定](/rest/reference/issues#set-labels-for-an-issue)
* [Issueからすべてのラベルを削除](/rest/reference/issues#remove-all-labels-from-an-issue)
* [Issueからラベルを削除](/rest/reference/issues#remove-a-label-from-an-issue)
* [リポジトリのラベルを一覧表示](/rest/reference/issues#list-labels-for-a-repository)
* [ラベルを作成](/rest/reference/issues#create-a-label)
* [ラベルの取得](/rest/reference/issues#get-a-label)
* [ラベルの更新](/rest/reference/issues#update-a-label)
* [ラベルの削除](/rest/reference/issues#delete-a-label)
* [マイルストーン中のすべてのIssueのラベルを取得](/rest/reference/issues#list-labels-for-issues-in-a-milestone)

##### ライセンス

* [一般的に使用されるすべてのライセンスを取得](/rest/reference/licenses#get-all-commonly-used-licenses)
* [ライセンスを取得](/rest/reference/licenses#get-a-license)

##### Markdown

* [Markdownドキュメントをレンダリング](/rest/reference/markdown#render-a-markdown-document)
* [Markdownドキュメントをrawモードでレンダリング](/rest/reference/markdown#render-a-markdown-document-in-raw-mode)

##### メタ情報

* [メタ情報](/rest/reference/meta#meta)

##### マイルストーン

* [マイルストーンの一覧表示](/rest/reference/issues#list-milestones)
* [マイルストーンの作成](/rest/reference/issues#create-a-milestone)
* [マイルストーンの取得](/rest/reference/issues#create-a-milestone)
* [マイルストーンの更新](/rest/reference/issues#update-a-milestone)
* [マイルストーンの削除](/rest/reference/issues#delete-a-milestone)

##### Organizationのフック

* [Organizationのwebhookの一覧表示](/rest/reference/orgs#webhooks/#list-organization-webhooks)
* [Organizationのwebhookの作成](/rest/reference/orgs#webhooks/#create-an-organization-webhook)
* [Organizationのwebhookの取得](/rest/reference/orgs#webhooks/#get-an-organization-webhook)
* [Organizationのwebhookの更新](/rest/reference/orgs#webhooks/#update-an-organization-webhook)
* [Organizationのwebhookの削除](/rest/reference/orgs#webhooks/#delete-an-organization-webhook)
* [Organizationのwebhookのping](/rest/reference/orgs#webhooks/#ping-an-organization-webhook)

{% if currentVersion == "free-pro-team@latest" %}
##### Organizationの招待

* [保留中のOrganizationの招待の一覧表示](/rest/reference/orgs#list-pending-organization-invitations)
* [Organizationの招待の作成](/rest/reference/orgs#create-an-organization-invitation)
* [Organizationの招待Teamの一覧表示](/rest/reference/orgs#list-organization-invitation-teams)
{% endif %}

##### Organizationのメンバー

* [Organizationのメンバーの一覧表示](/rest/reference/orgs#list-organization-members)
* [ユーザのOrganizationのメンバーシップのチェック](/rest/reference/orgs#check-organization-membership-for-a-user)
* [Organizationのメンバーの削除](/rest/reference/orgs#remove-an-organization-member)
* [ユーザのOrganizationのメンバーシップの取得](/rest/reference/orgs#get-organization-membership-for-a-user)
* [ユーザのOrganizationのメンバーシップの設定](/rest/reference/orgs#set-organization-membership-for-a-user)
* [ユーザのOrganizationのメンバーシップの削除](/rest/reference/orgs#remove-organization-membership-for-a-user)
* [パブリックなOrganizationのメンバーの一覧表示](/rest/reference/orgs#list-public-organization-members)
* [ユーザのパブリックなOrganizationのメンバーシップのチェック](/rest/reference/orgs#check-public-organization-membership-for-a-user)
* [認証されたユーザのパブリックなOrganizationのメンバーシップの設定](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user)
* [認証されたユーザのOrganizationのメンバーシップの削除](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user)

##### Organizationの外部コラボレータ

* [OrganizationのOrganizationの外部コラボレータの一覧表示](/rest/reference/orgs#list-outside-collaborators-for-an-organization)
* [OrganizationのメンバーからOrganizationの外部コラボレータへの変換](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator)
* [OrganizationからのOrganizationの外部コラボレータの削除](/rest/reference/orgs#remove-outside-collaborator-from-an-organization)

{% if enterpriseServerVersions contains currentVersion %}
##### Organization pre-receive フック

* [Organizationのためのpre-receiveフックの一覧表示](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Organizationのためのpre-receiveフックの取得](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Organizationのためのpre-receiveフックの強制の更新](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Organizationのためのpre-receiveフックの強制の削除](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### OrganizationのTeamのプロジェクト

* [Teamプロジェクトの一覧表示](/rest/reference/teams#list-team-projects)
* [プロジェクトのTeamの権限のチェック](/rest/reference/teams#check-team-permissions-for-a-project)
* [Teamのプロジェクト権限の追加あるいは更新](/rest/reference/teams#add-or-update-team-project-permissions)
* [Teamからのプロジェクトの削除](/rest/reference/teams#remove-a-project-from-a-team)
{% endif %}

##### OrganizationのTeamリポジトリ

* [Team リポジトリの一覧表示](/rest/reference/teams#list-team-repositories)
* [リポジトリのTeamの権限のチェック](/rest/reference/teams#check-team-permissions-for-a-repository)
* [Teamリポジトリ権限の追加あるいは更新](/rest/reference/teams#add-or-update-team-repository-permissions)
* [Teamからのリポジトリの削除](/rest/reference/teams#remove-a-repository-from-a-team)

{% if currentVersion == "free-pro-team@latest" %}
##### Organization Team Sync

* [Teamのidpグループの一覧表示](/rest/reference/teams#list-idp-groups-for-a-team)
* [idpグループの接続の作成あるいは更新](/rest/reference/teams#create-or-update-idp-group-connections)
* [OrganizationのIdpグループの一覧表示](/rest/reference/teams#list-idp-groups-for-an-organization)
{% endif %}

##### Organization Team

* [Teamの一覧表示](/rest/reference/teams#list-teams)
* [Teamの作成](/rest/reference/teams#create-a-team)
* [名前でのTeamの取得](/rest/reference/teams#get-a-team-by-name)
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
* [Teamの取得](/rest/reference/teams#get-a-team)
{% endif %}
* [Teamの更新](/rest/reference/teams#update-a-team)
* [Teamの削除](/rest/reference/teams#delete-a-team)
{% if currentVersion == "free-pro-team@latest" %}
* [保留中のTeamの招待の一覧表示](/rest/reference/teams#list-pending-team-invitations)
{% endif %}
* [Teamメンバーの一覧表示](/rest/reference/teams#list-team-members)
* [ユーザのTeamメンバーシップの取得](/rest/reference/teams#get-team-membership-for-a-user)
* [ユーザのTeamメンバーシップの追加あるいは更新](/rest/reference/teams#add-or-update-team-membership-for-a-user)
* [ユーザのTeamメンバーシップの削除](/rest/reference/teams#remove-team-membership-for-a-user)
* [子チームの一覧表示](/rest/reference/teams#list-child-teams)
* [認証されたユーザのTeamの一覧表示](/rest/reference/teams#list-teams-for-the-authenticated-user)

##### Organization

* [Organizationの一覧表示](/rest/reference/orgs#list-organizations)
* [Organizationの取得](/rest/reference/orgs#get-an-organization)
* [Organizationの更新](/rest/reference/orgs#update-an-organization)
* [認証されたユーザのOrganizationメンバーシップの一覧表示](/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user)
* [認証されたユーザのOrganizationメンバーシップの取得](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user)
* [認証されたユーザのOrganizationメンバーシップの更新](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user)
* [認証されたユーザのOrganizationの一覧表示](/rest/reference/orgs#list-organizations-for-the-authenticated-user)
* [ユーザのOrganizationの一覧表示](/rest/reference/orgs#list-organizations-for-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Organizationのクレデンシャルの認証

* [OrganizationのSAML SSO認証の一覧表示](/rest/reference/orgs#list-saml-sso-authorizations-for-an-organization)
* [OrganizationのSAML SSO認証の削除](/rest/reference/orgs#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### OrganizationのSCIM

* [SCIMでプロビジョニングされたアイデンティティの一覧表示](/rest/reference/scim#list-scim-provisioned-identities)
* [SCIMユーザのプロビジョニングと招待](/rest/reference/scim#provision-and-invite-a-scim-user)
* [ユーザのSCIMプロビジョニング情報の取得](/rest/reference/scim#get-scim-provisioning-information-for-a-user)
* [プロビジョニングされたユーザのSCIM情報の設定](/rest/reference/scim#set-scim-information-for-a-provisioned-user)
* [SCIMユーザの属性の更新](/rest/reference/scim#update-an-attribute-for-a-scim-user)
* [OrganizationからのSCIMユーザの削除](/rest/reference/scim#delete-a-scim-user-from-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### ソースのインポート

* [インポートステータスの取得](/rest/reference/migrations#get-an-import-status)
* [インポートの開始](/rest/reference/migrations#start-an-import)
* [インポートの更新](/rest/reference/migrations#update-an-import)
* [インポートのキャンセル](/rest/reference/migrations#cancel-an-import)
* [コミット作者の取得](/rest/reference/migrations#get-commit-authors)
* [コミット作者のマップ](/rest/reference/migrations#map-a-commit-author)
* [大きなファイルの取得](/rest/reference/migrations#get-large-files)
* [Git LFS環境設定の更新](/rest/reference/migrations#update-git-lfs-preference)
{% endif %}

##### プロジェクトのコラボレータ

* [プロジェクトのコラボレータの一覧表示](/rest/reference/projects#list-project-collaborators)
* [プロジェクトのコラボレータの追加](/rest/reference/projects#add-project-collaborator)
* [プロジェクトのコラボレータの削除](/rest/reference/projects#remove-project-collaborator)
* [ユーザのプロジェクト権限の取得](/rest/reference/projects#get-project-permission-for-a-user)

##### プロジェクト

* [Organizationのプロジェクトの一覧表示](/rest/reference/projects#list-organization-projects)
* [Organizationのプロジェクトの作成](/rest/reference/projects#create-an-organization-project)
* [プロジェクトの取得](/rest/reference/projects#get-a-project)
* [プロジェクトの更新](/rest/reference/projects#update-a-project)
* [プロジェクトの削除](/rest/reference/projects#delete-a-project)
* [プロジェクトの列の一覧表示](/rest/reference/projects#list-project-columns)
* [プロジェクトの列の作成](/rest/reference/projects#create-a-project-column)
* [プロジェクトの列の取得](/rest/reference/projects#get-a-project-column)
* [プロジェクトの列の更新](/rest/reference/projects#update-a-project-column)
* [プロジェクトの列の削除](/rest/reference/projects#delete-a-project-column)
* [プロジェクトカードの一覧表示](/rest/reference/projects#list-project-cards)
* [プロジェクトカードの作成](/rest/reference/projects#create-a-project-card)
* [プロジェクトの列の移動](/rest/reference/projects#move-a-project-column)
* [プロジェクトカードの取得](/rest/reference/projects#get-a-project-card)
* [プロジェクトカードの更新](/rest/reference/projects#update-a-project-card)
* [プロジェクトカードの削除](/rest/reference/projects#delete-a-project-card)
* [プロジェクトカードの移動](/rest/reference/projects#move-a-project-card)
* [リポジトリプロジェクトの一覧表示](/rest/reference/projects#list-repository-projects)
* [リポジトリプロジェクトの作成](/rest/reference/projects#create-a-repository-project)

##### Pull Requestのコメント

* [Pull Requestのレビューコメントの一覧表示](/rest/reference/pulls#list-review-comments-on-a-pull-request)
* [Pull Requestのレビューコメントの作成](/rest/reference/pulls#create-a-review-comment-for-a-pull-request)
* [リポジトリのレビューコメントの一覧表示](/rest/reference/pulls#list-review-comments-in-a-repository)
* [Pull Requestのレビューコメントの取得](/rest/reference/pulls#get-a-review-comment-for-a-pull-request)
* [Pull Requestのレビューコメントの更新](/rest/reference/pulls#update-a-review-comment-for-a-pull-request)
* [Pull Requestのレビューコメントの削除](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request)

##### Pull Requestのレビューイベント

* [Pull Requestのレビューの却下](/rest/reference/pulls#dismiss-a-review-for-a-pull-request)
* [Pull Requestのレビューのサブミット](/rest/reference/pulls#submit-a-review-for-a-pull-request)

##### Pull Requestのレビューのリクエスト

* [Pull Requestのリクエストされたレビューの一覧表示](/rest/reference/pulls#list-requested-reviewers-for-a-pull-request)
* [Pull Requestのレビュー担当者のリクエスト](/rest/reference/pulls#request-reviewers-for-a-pull-request)
* [Pull Requestからリクエストされたレビュー担当者を削除](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request)

##### Pull Requestのレビュー

* [Pull Requestのレビューの一覧表示](/rest/reference/pulls#list-reviews-for-a-pull-request)
* [Pull Requestのレビューの作成](/rest/reference/pulls#create-a-review-for-a-pull-request)
* [Pull Requestのレビューの取得](/rest/reference/pulls#get-a-review-for-a-pull-request)
* [Pull Requestのレビューの更新](/rest/reference/pulls#update-a-review-for-a-pull-request)
* [Pull Requestレビューのコメントの一覧表示](/rest/reference/pulls#list-comments-for-a-pull-request-review)

##### Pull Request

* [Pull Requestの一覧表示](/rest/reference/pulls#list-pull-requests)
* [Pull Requestの作成](/rest/reference/pulls#create-a-pull-request)
* [Pull Requestの取得](/rest/reference/pulls#get-a-pull-request)
* [Pull Requestの更新](/rest/reference/pulls#update-a-pull-request)
* [Pull Requestのコミットの一覧表示](/rest/reference/pulls#list-commits-on-a-pull-request)
* [Pull Requestのファイルの一覧表示](/rest/reference/pulls#list-pull-requests-files)
* [Pull Requestがマージされたかをチェック](/rest/reference/pulls#check-if-a-pull-request-has-been-merged)
* [Pull Requestをマージ（マージボタン）](/rest/reference/pulls#merge-a-pull-request)

##### リアクション

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}* [Delete a reaction](/rest/reference/reactions#delete-a-reaction-legacy){% else %}* [リアクションの削除](/rest/reference/reactions#delete-a-reaction){% endif %}
* [コミットコメントへのリアクションの一覧表示](/rest/reference/reactions#list-reactions-for-a-commit-comment)
* [コミットコメントへのリアクションの作成](/rest/reference/reactions#create-reaction-for-a-commit-comment)
* [Issueへのリアクションの一覧表示](/rest/reference/reactions#list-reactions-for-an-issue)
* [Issueへのリアクションの作成](/rest/reference/reactions#create-reaction-for-an-issue)
* [Issueコメントへのリアクションの一覧表示](/rest/reference/reactions#list-reactions-for-an-issue-comment)
* [Issueコメントへのリアクションの作成](/rest/reference/reactions#create-reaction-for-an-issue-comment)
* [Pull Requestのレビューコメントへのリアクションの一覧表示](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment)
* [Pull Requestのレビューコメントへのリアクションの作成](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment)
* [Teamディスカッションコメントへのリアクションの一覧表示](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment)
* [Teamディスカッションコメントへのリアクションの作成](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)
* [Teamディスカッションへのリアクションの一覧表示](/rest/reference/reactions#list-reactions-for-a-team-discussion)
* [Teamディスカッションへのリアクションの作成](/rest/reference/reactions#create-reaction-for-a-team-discussion){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [コミットコメントへのリアクションの削除](/rest/reference/reactions#delete-a-commit-comment-reaction)
* [Issueへのリアクションの削除](/rest/reference/reactions#delete-an-issue-reaction)
* [コミットコメントへのリアクションの削除](/rest/reference/reactions#delete-an-issue-comment-reaction)
* [Pull Requestのコメントへのリアクションの削除](/rest/reference/reactions#delete-a-pull-request-comment-reaction)
* [Teamディスカッションへのリアクションの削除](/rest/reference/reactions#delete-team-discussion-reaction)
* [Team ディスカッションのコメントへのリアクションの削除](/rest/reference/reactions#delete-team-discussion-comment-reaction){% endif %}

##### リポジトリ

* [Organization リポジトリの一覧表示](/rest/reference/repos#list-organization-repositories)
* [認証されたユーザにリポジトリを作成](/rest/reference/repos#create-a-repository-for-the-authenticated-user)
* [リポジトリの取得](/rest/reference/repos#get-a-repository)
* [リポジトリの更新](/rest/reference/repos#update-a-repository)
* [リポジトリの削除](/rest/reference/repos#delete-a-repository)
* [2つのコミットの比較](/rest/reference/repos#compare-two-commits)
* [リポジトリのコントリビューターの一覧表示](/rest/reference/repos#list-repository-contributors)
* [フォークの一覧表示](/rest/reference/repos#list-forks)
* [フォークの作成](/rest/reference/repos#create-a-fork)
* [リポジトリの言語の一覧表示](/rest/reference/repos#list-repository-languages)
* [リポジトリのタグの一覧表示](/rest/reference/repos#list-repository-tags)
* [リポジトリのTeamの一覧表示](/rest/reference/repos#list-repository-teams)
* [リポジトリの移譲](/rest/reference/repos#transfer-a-repository)
* [パブリックリポジトリの一覧表示](/rest/reference/repos#list-public-repositories)
* [認証されたユーザのリポジトリの一覧表示](/rest/reference/repos#list-repositories-for-the-authenticated-user)
* [ユーザのリポジトリの一覧表示](/rest/reference/repos#list-repositories-for-a-user)
* [リポジトリのテンプレートを使ったリポジトリの作成](/rest/reference/repos#create-repository-using-a-repository-template)

##### リポジトリのアクティビティ

* [Starを付けたユーザの一覧表示](/rest/reference/activity#list-stargazers)
* [Watchしているユーザの一覧表示](/rest/reference/activity#list-watchers)
* [ユーザがStarしたリポジトリの一覧表示](/rest/reference/activity#list-repositories-starred-by-a-user)
* [認証されたユーザによってリポジトリがStarされているかをチェック](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [認証されたユーザのためにリポジトリをStar](/rest/reference/activity#star-a-repository-for-the-authenticated-user)
* [認証されたユーザのためにリポジトリをStar解除](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user)
* [ユーザが Watch しているリポジトリの一覧表示](/rest/reference/activity#list-repositories-watched-by-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### リポジトリの自動化されたセキュリティ修正

* [自動化されたセキュリティ修正の有効化](/rest/reference/repos#enable-automated-security-fixes)
* [自動化されたセキュリティ修正の無効化](/rest/reference/repos#disable-automated-security-fixes)
{% endif %}

##### リポジトリのブランチ

* [ブランチの一覧表示](/rest/reference/repos#list-branches)
* [ブランチの取得](/rest/reference/repos#get-a-branch)
* [ブランチの保護の取得](/rest/reference/repos#get-branch-protection)
* [ブランチの保護の更新](/rest/reference/repos#update-branch-protection)
* [ブランチの保護の削除](/rest/reference/repos#delete-branch-protection)
* [管理ブランチの保護の取得](/rest/reference/repos#get-admin-branch-protection)
* [管理ブランチの保護の設定](/rest/reference/repos#set-admin-branch-protection)
* [管理ブランチの保護の削除](/rest/reference/repos#delete-admin-branch-protection)
* [Pull Requestのレビュー保護の取得](/rest/reference/repos#get-pull-request-review-protection)
* [Pull Requestのレビュー保護の更新](/rest/reference/repos#update-pull-request-review-protection)
* [Pull Requestのレビュー保護の削除](/rest/reference/repos#delete-pull-request-review-protection)
* [コミット署名の保護の取得](/rest/reference/repos#get-commit-signature-protection)
* [コミット署名の保護の作成](/rest/reference/repos#create-commit-signature-protection)
* [コミット署名の保護の削除](/rest/reference/repos#delete-commit-signature-protection)
* [ステータスチェックの保護の取得](/rest/reference/repos#get-status-checks-protection)
* [ステータスチェックの保護の更新](/rest/reference/repos#update-status-check-protection)
* [ステータスチェックの保護の削除](/rest/reference/repos#remove-status-check-protection)
* [すべてのステータスチェックのコンテキストの取得](/rest/reference/repos#get-all-status-check-contexts)
* [ステータスチェックのコンテキストの追加](/rest/reference/repos#add-status-check-contexts)
* [ステータスチェックのコンテキストの設定](/rest/reference/repos#set-status-check-contexts)
* [ステータスチェックのコンテキストの削除](/rest/reference/repos#remove-status-check-contexts)
* [アクセス制限の取得](/rest/reference/repos#get-access-restrictions)
* [アクセス制限の削除](/rest/reference/repos#delete-access-restrictions)
* [保護されたブランチへのアクセスを持つTeamの一覧表示](/rest/reference/repos#list-teams-with-access-to-the-protected-branch)
* [Teamのアクセス制限の追加](/rest/reference/repos#add-team-access-restrictions)
* [Teamのアクセス制限の設定](/rest/reference/repos#set-team-access-restrictions)
* [Teamのアクセス制限の削除](/rest/reference/repos#remove-team-access-restrictions)
* [保護されたブランチのユーザ制限の一覧表示](/rest/reference/repos#list-users-with-access-to-the-protected-branch)
* [ユーザアクセス制限の追加](/rest/reference/repos#add-user-access-restrictions)
* [ユーザアクセス制限の設定](/rest/reference/repos#set-user-access-restrictions)
* [ユーザアクセス制限の削除](/rest/reference/repos#remove-user-access-restrictions)
* [ブランチのマージ](/rest/reference/repos#merge-a-branch)

##### リポジトリのコラボレータ

* [リポジトリのコラボレータの一覧表示](/rest/reference/repos#list-repository-collaborators)
* [ユーザがリポジトリのコラボレータかをチェック](/rest/reference/repos#check-if-a-user-is-a-repository-collaborator)
* [リポジトリのコラボレータを追加](/rest/reference/repos#add-a-repository-collaborator)
* [リポジトリのコラボレータを削除](/rest/reference/repos#remove-a-repository-collaborator)
* [ユーザのリポジトリの権限を取得](/rest/reference/repos#get-repository-permissions-for-a-user)

##### リポジトリのコミットコメント

* [リポジトリのコミットコメントの一覧表示](/rest/reference/repos#list-commit-comments-for-a-repository)
* [コミットコメントの取得](/rest/reference/repos#get-a-commit-comment)
* [コミットコメントの更新](/rest/reference/repos#update-a-commit-comment)
* [コミットコメントの削除](/rest/reference/repos#delete-a-commit-comment)
* [コミットコメントの一覧表示](/rest/reference/repos#list-commit-comments)
* [コミットコメントの作成](/rest/reference/repos#create-a-commit-comment)

##### リポジトリのコミット

* [コミットの一覧表示](/rest/reference/repos#list-commits)
* [コミットの取得](/rest/reference/repos#get-a-commit)
* [headコミットのブランチの一覧表示](/rest/reference/repos#list-branches-for-head-commit)
* [コミットの関連づけられたPull Requestの一覧表示](/rest/reference/repos#list-pull-requests-associated-with-commit)

##### リポジトリのコミュニティ

* [リポジトリの行動規範の取得](/rest/reference/codes-of-conduct#get-the-code-of-conduct-for-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
* [コミュニティプロフィールのメトリクスの取得](/rest/reference/repos#get-community-profile-metrics)
{% endif %}

##### リポジトリのコンテンツ

* [リポジトリのアーカイブのダウンロード](/rest/reference/repos#download-a-repository-archive)
* [リポジトリのコンテンツの取得](/rest/reference/repos#get-repository-content)
* [ファイルコンテンツの作成もしくは更新](/rest/reference/repos#create-or-update-file-contents)
* [ファイルの削除](/rest/reference/repos#delete-a-file)
* [リポジトリのREADMEの取得](/rest/reference/repos#get-a-repository-readme)
* [リポジトリのライセンスの取得](/rest/reference/licenses#get-the-license-for-a-repository)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### リポジトリのイベントのディスパッチ

* [リポジトリディスパッチイベントの作成](/rest/reference/repos#create-a-repository-dispatch-event)
{% endif %}

##### リポジトリのフック

* [リポジトリのwebhookの一覧表示](/rest/reference/repos#list-repository-webhooks)
* [リポジトリのwebhookの作成](/rest/reference/repos#create-a-repository-webhook)
* [リポジトリのwebhookの取得](/rest/reference/repos#get-a-repository-webhook)
* [リポジトリのwebhookの更新](/rest/reference/repos#update-a-repository-webhook)
* [リポジトリのwebhookの削除](/rest/reference/repos#delete-a-repository-webhook)
* [リポジトリのwebhookのping](/rest/reference/repos#ping-a-repository-webhook)
* [プッシュリポジトリのwebhookのテスト](/rest/reference/repos#test-the-push-repository-webhook)

##### リポジトリの招待

* [リポジトリの招待の一覧表示](/rest/reference/repos#list-repository-invitations)
* [リポジトリの招待の更新](/rest/reference/repos#update-a-repository-invitation)
* [リポジトリの招待の削除](/rest/reference/repos#delete-a-repository-invitation)
* [認証を受けたユーザのリポジトリの招待の一覧表示](/rest/reference/repos#list-repository-invitations-for-the-authenticated-user)
* [リポジトリの招待の受諾](/rest/reference/repos#accept-a-repository-invitation)
* [リポジトリの招待の拒否](/rest/reference/repos#decline-a-repository-invitation)

##### リポジトリのキー

* [デプロイキーの一覧表示](/rest/reference/repos#list-deploy-keys)
* [デプロイキーの作成](/rest/reference/repos#create-a-deploy-key)
* [デプロイキーの取得](/rest/reference/repos#get-a-deploy-key)
* [デプロイキーの削除](/rest/reference/repos#delete-a-deploy-key)

##### リポジトリのPages

* [GitHub Pagesのサイトの取得](/rest/reference/repos#get-a-github-pages-site)
* [GitHub Pagesのサイトの作成](/rest/reference/repos#create-a-github-pages-site)
* [GitHub Pagesのサイトに関する情報の更新](/rest/reference/repos#update-information-about-a-github-pages-site)
* [GitHub Pagesのサイトの削除](/rest/reference/repos#delete-a-github-pages-site)
* [GitHub Pagesのビルドの一覧表示](/rest/reference/repos#list-github-pages-builds)
* [GitHub Pagesのビルドのリクエスト](/rest/reference/repos#request-a-github-pages-build)
* [GitHub Pagesのビルドの取得](/rest/reference/repos#get-github-pages-build)
* [最新のPagesのビルドの取得](/rest/reference/repos#get-latest-pages-build)

{% if enterpriseServerVersions contains currentVersion %}
##### リポジトリ pre-receive フック

* [リポジトリのpre-receiveフックの一覧表示](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [リポジトリのpre-receiveフックの取得](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [リポジトリのpre-receiveフックの強制の更新](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [リポジトリのpre-receiveフックの強制の削除](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

##### リポジトリのリリース

* [リリースの一覧表示](/rest/reference/repos/#list-releases)
* [リリースの作成](/rest/reference/repos/#create-a-release)
* [リリースの取得](/rest/reference/repos/#get-a-release)
* [リリースの更新](/rest/reference/repos/#update-a-release)
* [リリースの削除](/rest/reference/repos/#delete-a-release)
* [リリースアセットの一覧表示](/rest/reference/repos/#list-release-assets)
* [リリースアセットの取得](/rest/reference/repos/#get-a-release-asset)
* [リリースアセットの更新](/rest/reference/repos/#update-a-release-asset)
* [リリースアセットの削除](/rest/reference/repos/#delete-a-release-asset)
* [最新リリースの取得](/rest/reference/repos/#get-the-latest-release)
* [タグ名によるリリースの取得](/rest/reference/repos/#get-a-release-by-tag-name)

##### リポジトリ統計

* [週間のコミットアクティビティの取得](/rest/reference/repos#get-the-weekly-commit-activity)
* [昨年のコミットアクティビティの取得](/rest/reference/repos#get-the-last-year-of-commit-activity)
* [すべてのコントリビューターのコミットアクティビティの取得](/rest/reference/repos#get-all-contributor-commit-activity)
* [週間のコミットカウントの取得](/rest/reference/repos#get-the-weekly-commit-count)
* [各日の毎時のコミットカウントの取得](/rest/reference/repos#get-the-hourly-commit-count-for-each-day)

{% if currentVersion == "free-pro-team@latest" %}
##### リポジトリ脆弱性アラート

* [脆弱性アラートの有効化](/rest/reference/repos#enable-vulnerability-alerts)
* [脆弱性アラートの無効化](/rest/reference/repos#disable-vulnerability-alerts)
{% endif %}

##### ルート

* [ルートエンドポイント](/rest#root-endpoint)
* [絵文字](/rest/reference/emojis#emojis)
* [認証を受けたユーザのレート制限のステータスの取得](/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user)

##### 検索

* [コードの検索](/rest/reference/search#search-code)
* [コミットの検索](/rest/reference/search#search-commits)
* [ラベルの検索](/rest/reference/search#search-labels)
* [リポジトリを検索](/rest/reference/search#search-repositories)
* [トピックの検索](/rest/reference/search#search-topics)
* [ユーザの検索](/rest/reference/search#search-users)

##### ステータス

* [特定のリファレンスの結合ステータスの取得](/rest/reference/repos#get-the-combined-status-for-a-specific-reference)
* [リファレンスのコミットステータスの一覧表示](/rest/reference/repos#list-commit-statuses-for-a-reference)
* [コミットステータスの作成](/rest/reference/repos#create-a-commit-status)

##### Teamディスカッション

* [ディスカッションの一覧表示](/rest/reference/teams#list-discussions)
* [ディスカッションの作成](/rest/reference/teams#create-a-discussion)
* [ディスカッションの取得](/rest/reference/teams#get-a-discussion)
* [ディスカッションの更新](/rest/reference/teams#update-a-discussion)
* [ディスカッションの削除](/rest/reference/teams#delete-a-discussion)
* [ディスカッションコメントの一覧表示](/rest/reference/teams#list-discussion-comments)
* [ディスカッションコメントの作成](/rest/reference/teams#create-a-discussion-comment)
* [ディスカッションコメントの取得](/rest/reference/teams#get-a-discussion-comment)
* [ディスカッションコメントの更新](/rest/reference/teams#update-a-discussion-comment)
* [ディスカッションコメントの削除](/rest/reference/teams#delete-a-discussion-comment)

##### Topics

* [すべてのリポジトリTopicsの取得](/rest/reference/repos#get-all-repository-topics)
* [すべてのリポジトリTopicsの置き換え](/rest/reference/repos#replace-all-repository-topics)

{% if currentVersion == "free-pro-team@latest" %}
##### トラフィック

* [リポジトリのクローンの取得](/rest/reference/repos#get-repository-clones)
* [上位の参照パスの取得](/rest/reference/repos#get-top-referral-paths)
* [上位の参照ソースの取得](/rest/reference/repos#get-top-referral-sources)
* [ページビューの取得](/rest/reference/repos#get-page-views)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### ユーザのブロック

* [認証されたユーザによってブロックされたユーザの一覧表示](/rest/reference/users#list-users-blocked-by-the-authenticated-user)
* [認証されたユーザによってユーザがブロックされているかをチェック](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Organizationによってブロックされたユーザを一覧表示](/rest/reference/orgs#list-users-blocked-by-an-organization)
* [Organizationによってユーザがブロックされているかをチェック](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Organizationからユーザをブロック](/rest/reference/orgs#block-a-user-from-an-organization)
* [Oraganizationからのユーザのブロックを解除](/rest/reference/orgs#unblock-a-user-from-an-organization)
* [ユーザをブロック](/rest/reference/users#block-a-user)
* [ゆーざのブロックを解除](/rest/reference/users#unblock-a-user)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
##### ユーザのメール

{% if currentVersion == "free-pro-team@latest" %}
* [認証されたユーザのプライマリメールの可視性を設定](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [認証されたユーザのメールアドレスの一覧表示](/rest/reference/users#list-email-addresses-for-the-authenticated-user)
* [メールアドレスの追加](/rest/reference/users#list-email-addresses-for-the-authenticated-user)
* [メールアドレスの削除](/rest/reference/users#delete-an-email-address-for-the-authenticated-user)
* [認証されたユーザのパブリックなメールアドレスの一覧表示](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

##### ユーザのフォロワー

* [ユーザのフォロワーの一覧表示](/rest/reference/users#list-followers-of-a-user)
* [ユーザがフォローしている人の一覧表示](/rest/reference/users#list-the-people-a-user-follows)
* [認証されたユーザによって人がフォローされているかのチェック](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [ユーザのフォロー](/rest/reference/users#follow-a-user)
* [ユーザのフォロー解除](/rest/reference/users#unfollow-a-user)
* [ユーザが他のユーザにフォローされているかのチェック](/rest/reference/users#check-if-a-user-follows-another-user)

##### ユーザのGPGキー

* [認証されたユーザのGPGキーの一覧表示](/rest/reference/users#list-gpg-keys-for-the-authenticated-user)
* [認証されたユーザのGPGキーの作成](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user)
* [認証されたユーザのGPGキーの取得](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user)
* [認証されたユーザのGPGキーの削除](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user)
* [ユーザのGPGキーの一覧表示](/rest/reference/users#list-gpg-keys-for-a-user)

##### ユーザの公開鍵

* [認証されたユーザの公開SSHキーの一覧表示](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user)
* [認証されたユーザの公開SSHキーの作成](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user)
* [認証されたユーザの公開SSHキーの取得](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user)
* [認証されたユーザの公開SSHキーの削除](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [ユーザの公開鍵の一覧表示](/rest/reference/users#list-public-keys-for-a-user)

##### ユーザ

* [認証されたユーザの取得](/rest/reference/users#get-the-authenticated-user)
* [ユーザアクセストークンでアクセスできるアプリケーションのインストールの一覧表示](/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token)
{% if currentVersion == "free-pro-team@latest" %}
* [認証されたユーザのサブスクリプションのリスト](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [ユーザの一覧表示](/rest/reference/users#list-users)
* [ユーザの取得](/rest/reference/users#get-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### ワークフローラン

* [リポジトリのワークフローランの一覧表示](/rest/reference/actions#list-workflow-runs-for-a-repository)
* [ワークフローランの取得](/rest/reference/actions#get-a-workflow-run)
* [ワークフローランのキャンセル](/rest/reference/actions#cancel-a-workflow-run)
* [ワークフローランのログのダウンロード](/rest/reference/actions#download-workflow-run-logs)
* [ワークフローランのログの削除](/rest/reference/actions#delete-workflow-run-logs)
* [ワークフローの再実行](/rest/reference/actions#re-run-a-workflow)
* [ワークフローランの一覧表示](/rest/reference/actions#list-workflow-runs)
* [ワークフローランの利用状況の取得](/rest/reference/actions#get-workflow-run-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### ワークフロー

* [リポジトリワークフローの一覧表示](/rest/reference/actions#list-repository-workflows)
* [ワークフローの取得](/rest/reference/actions#get-a-workflow)
* [ワークフロー利用状況の取得](/rest/reference/actions#get-workflow-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}

### 参考リンク

- "[{% data variables.product.prodname_dotcom %} への認証について](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

{% endif %}
