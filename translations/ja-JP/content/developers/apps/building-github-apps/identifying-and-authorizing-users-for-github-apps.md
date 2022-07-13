---
title: GitHub App のユーザの特定と認可
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: ユーザの特定と認可
---

{% data reusables.pre-release-program.expiring-user-access-tokens %}

GitHub App がユーザの代わりに動作すると、ユーザからサーバーに対するリクエストを実行します。 こうしたリクエストは、ユーザのアクセストークンで承認される必要があります。 ユーザからサーバーに対するリクエストには、特定のユーザに対してどのリポジトリを表示するか決定するなど、ユーザに対するデータのリクエストが含まれます。 これらのリクエストには、ビルドの実行など、ユーザがトリガーしたアクションも含まれます。

{% data reusables.apps.expiring_user_authorization_tokens %}

## サイト上のユーザを特定する

ブラウザで動作する標準的なアプリケーションでユーザを認可するには、[Web アプリケーションフロー](#web-application-flow)を利用してください。

CLI ツールや Git 認証情報マネージャーなどの、ブラウザに直接アクセスしないヘッドレスアプリケーションでユーザを認可するには、[デバイスフロー](#device-flow)を利用します。 デバイスフローは、OAuth 2.0 [Device Authorization Grant](https://tools.ietf.org/html/rfc8628) を利用します。

## Web アプリケーションフロー

Web アプリケーションフローを利用して、サイト上のユーザを特定するプロセスは以下の通りです。

1. ユーザはGitHubのアイデンティティをリクエストするためにリダイレクトされます
2. ユーザはGitHubによってサイトにリダイレクトして戻されます
3. GitHub Appはユーザのアクセストークンで API にアクセスします

アプリケーションを作成または変更する際に [**Request user authorization (OAuth) during installation**] を選択した場合、アプリケーションのインストール中にステップ 1 が完了します。 詳しい情報については、「[インストール中のユーザの認可](/apps/installing-github-apps/#authorizing-users-during-installation)」を参照してください。

### 1. ユーザのGitHubアイデンティティのリクエスト
ブラウザで次のURLに移動するようユーザに指示します。

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

GitHub Appが`login`パラメータを指定すると、ユーザに対して利用できる特定のアカウントでサインインしてアプリケーションを認可するよう求めます。

#### パラメータ

| 名前             | 種類       | 説明                                                                                                                                                                                                                                     |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `string` | **必須。**GitHub App のクライアント IDです。 アプリケーションを選択したときに、[GitHub App 設定](https://github.com/settings/apps)に表示されます。 **注釈:** アプリケーション ID とクライアント ID は同一ではなく、お互いを置き換えることはできません。                                                                   |
| `redirect_uri` | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 これは、GitHub App をセットアップする際に{% ifversion fpt or ghes or ghec %}**コールバック URL** として指定された URL の １つ{% else %}[**User authorization callback URL**] フィールドで指定された URL {% endif %}と一致させる必要があり、他の追加パラメータを含めることはできません。 |
| `state`        | `string` | これはフォージェリアタックを防ぐためにランダムな文字列を含める必要があり、あらゆる任意のデータを含めることができます。                                                                                                                                                                            |
| `login`        | `string` | サインインとアプリケーションの認可に使われるアカウントを指示します。                                                                                                                                                                                                     |
| `allow_signup` | `string` | OAuthフローの間に、認証されていないユーザに対して{% data variables.product.prodname_dotcom %}へのサインアップの選択肢が提示されるかどうか。 デフォルトは `true` です。 ポリシーでサインアップが禁止されている場合は`false`を使ってください。                                                                                |

{% note %}

**注釈:** 認可リクエストにスコープを指定する必要はありません。 従来の OAuth とは異なり、認証トークンはGitHub App に紐付けられた権限およびユーザの権限に限定されます。

{% endnote %}

### 2. ユーザはGitHubによってサイトにリダイレクトして戻されます

ユーザがリクエストを受け付けると、GitHub は一時的なコードを `code` パラメータに、そして前のステップで渡された状態を `state` パラメータに入れてリダイレクトさせ、サイトに戻します。 状態が一致しない場合、そのリクエストは第三者が作成したものであり、プロセスを中止する必要があります。

{% note %}

**注釈:** アプリケーションを作成または変更する際に [**Request user authorization (OAuth) during installation**] を選択した場合、GitHub はアクセストークンと交換する必要がある一時的な `code` を返します。 アプリケーションのインストール中に GitHub が OAuth フローを開始した場合、`state` パラメータは返されません。

{% endnote %}

この `code` をアクセストークンと交換します。  トークンの期限設定が有効になっている場合、アクセストークンは 8 時間で期限切れとなり、リフレッシュトークンは 6 か月で期限切れとなります。 トークンを更新するたびに、新しいリフレッシュトークンを取得します。 詳しい情報については、「[ユーザからサーバーに対するアクセストークンをリフレッシュする](/developers/apps/refreshing-user-to-server-access-tokens)」を参照してください。

ユーザトークンの期限設定は、現在のところオプション機能であり、変更される可能性があります。 ユーザからサーバーに対するトークンの期限設定にオプトインするには、「[アプリケーションのオプション機能を有効化する](/developers/apps/activating-optional-features-for-apps)」を参照してください。

アクセストークンを受け取るため、次のエンドポイントをリクエストします。

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### パラメータ

| 名前              | 種類       | 説明                                                                                                                                                                                                                                     |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `string` | **必須。**GitHub App のクライアント ID。                                                                                                                                                                                                          |
| `client_secret` | `string` | **必須。**GitHub App のクライアントシークレット。                                                                                                                                                                                                       |
| `コード`           | `string` | **必須。** ステップ1でレスポンスとして受け取ったコード。                                                                                                                                                                                                        |
| `redirect_uri`  | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 これは、GitHub App をセットアップする際に{% ifversion fpt or ghes or ghec %}**コールバック URL** として指定された URL の １つ{% else %}[**User authorization callback URL**] フィールドで指定された URL {% endif %}と一致させる必要があり、他の追加パラメータを含めることはできません。 |
| `state`         | `string` | ステップ1で提供した推測できないランダムな文字列。                                                                                                                                                                                                              |

#### レスポンス

デフォルトでは、レスポンスは以下の形式になります。 レスポンスパラメータの `expires_in`、`refresh_token`、`refresh_token_expires_in` は、ユーザからサーバに対するアクセストークンの期限設定を有効にしている場合にのみ返されます。

```json
{
  "access_token": "ghu_16C7e42F292c6912E7710c838347Ae178B4a",
  "expires_in": 28800,
  "refresh_token": "ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```

### 3. GitHub Appはユーザのアクセストークンで API にアクセスします

ユーザのアクセストークンを使用すると、GitHub App がユーザの代わりに API にリクエストを発行できます。

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

たとえば、curlでは以下のようにAuthorizationヘッダを設定できます。

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## デバイスフロー

{% note %}

**注釈:** デバイスフローは現在パブリックベータであり、変更されることがあります。

{% endnote %}

デバイスフローを使えば、CLIツールやGit認証情報マネージャーなどのヘッドレスアプリケーションのユーザを認可できます。

{% ifversion device-flow-is-opt-in %}Before you can use the device flow to identify and authorize users, you must first enable it in your app's settings. For more information on enabling device flow, see "[Modifying a GitHub App](/developers/apps/managing-github-apps/modifying-a-github-app)." {% endif %}For more information about authorizing users using the device flow, see "[Authorizing OAuth Apps](/developers/apps/authorizing-oauth-apps#device-flow)."

## ユーザがアクセスできるインストールされたリソースの確認

ユーザの OAuth トークンを取得したら、そのユーザがアクセスできるインストールされたアプリケーションを確認できます。

    Authorization: token OAUTH-TOKEN
    GET /user/installations

また、インストールされたアプリケーションでユーザがアクセスできるリポジトリも確認できます。

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

詳細については、[ユーザアクセストークンがアクセスできるインストールされたアプリケーションの一覧表示](/rest/apps#list-app-installations-accessible-to-the-user-access-token)および[ユーザアクセストークンがアクセスできるリポジトリの一覧表示](/rest/apps#list-repositories-accessible-to-the-user-access-token)でご確認ください。

## GitHub App の認可の取り消し処理

ユーザが GitHub App の認可を取り消した場合、アプリケーションはデフォルトで [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) webhook を受信します。 GitHub App は、このイベントをサブスクライブ解除できません。 {% data reusables.webhooks.authorization_event %}

## ユーザレベルの権限

[ユーザ認可フロー](#identifying-users-on-your-site)の一環として、個々のユーザに付与されたユーザのメールなどのユーザが所有するリソースにアクセスできる、ユーザレベルの権限を GitHub App に付与できます。 User-level permissions differ from [repository and organization-level permissions](/rest/overview/permissions-required-for-github-apps), which are granted at the time of installation on an organization or personal account.

ユーザレベルの権限は、[**Permissions & webhooks**] ページの [**User permissions**] セクションにある GitHub App の設定で選択できます。 権限の選択に関する詳しい情報については、「[GitHub Appの権限の編集](/apps/managing-github-apps/editing-a-github-app-s-permissions/)」を参照してください。

ユーザが自分のアカウントにアプリケーションをインストールする時、インストールプロンプトは、アプリケーションがリクエストするユーザレベルの権限を一覧表示し、アプリケーションがこれらの権限を個々のユーザに求めることができるということを説明します。

ユーザレベルの権限は個々のユーザに付与されるため、ユーザにアップグレードを促すことなく、既存のアプリケーションに権限を追加できます。 ただし、新しい権限を認可し、ユーザからサーバーに対するトークンを取得するため、ユーザ認可フローを通じて既存のユーザを送信する必要があります。

## ユーザからサーバーへのリクエスト

While most of your API インタラクションのほとんどは、サーバーからサーバーへのインストールアクセストークンを用いて行われますが、一部のエンドポイントでは、ユーザアクセストークンを使用し、API 経由でアクションを実行できます。 Your app can make the following requests using [GraphQL](/graphql) or [REST](/rest) endpoints.

### 対応しているエンドポイント

{% ifversion fpt or ghec %}
#### Actions ランナー

* [リポジトリのランナーアプリケーションの一覧表示](/rest/actions#list-runner-applications-for-a-repository)
* [リポジトリのセルフホストランナーの一覧表示](/rest/actions#list-self-hosted-runners-for-a-repository)
* [リポジトリのセルフホストランナーの取得](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [リポジトリからのセルフホストランナーの削除](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [リポジトリに対する登録トークンの作成](/rest/actions#create-a-registration-token-for-a-repository)
* [リポジトリに対する削除トークンの作成](/rest/actions#create-a-remove-token-for-a-repository)
* [Organization のランナーアプリケーションの一覧表示](/rest/actions#list-runner-applications-for-an-organization)
* [Organizationのセルフホストランナーの一覧表示](/rest/actions#list-self-hosted-runners-for-an-organization)
* [Organizationのセルフホストランナーの取得](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [Organizationのセルフホストランナーの削除](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [Organizationの登録トークンの作成](/rest/actions#create-a-registration-token-for-an-organization)
* [Organizationの削除トークンの作成](/rest/actions#create-a-remove-token-for-an-organization)

#### Actionsのシークレット

* [リポジトリ公開鍵の取得](/rest/actions#get-a-repository-public-key)
* [リポジトリのシークレットの一覧表示](/rest/actions#list-repository-secrets)
* [リポジトリのシークレットの取得](/rest/actions#get-a-repository-secret)
* [リポジトリのシークレットの作成もしくは更新](/rest/actions#create-or-update-a-repository-secret)
* [リポジトリシークレットの削除](/rest/actions#delete-a-repository-secret)
* [Organizationの公開鍵の取得](/rest/actions#get-an-organization-public-key)
* [Organizationのシークレットの一覧表示](/rest/actions#list-organization-secrets)
* [Organizationのシークレットの取得](/rest/actions#get-an-organization-secret)
* [Organizationのシークレットの作成もしくは更新](/rest/actions#create-or-update-an-organization-secret)
* [Organizatinoの選択されたリポジトリのシークレットの一覧表示](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [Organizationの選択されたリポジトリのシークレットの設定](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [Organizationの選択されたリポジトリのシークレットの追加](/rest/actions#add-selected-repository-to-an-organization-secret)
* [Organizationの選択されたリポジトリからのシークレットの削除](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [Organizationのシークレットの削除](/rest/actions#delete-an-organization-secret)
{% endif %}

{% ifversion fpt or ghec %}
#### 成果物

* [リポジトリの成果物の一覧表示](/rest/actions#list-artifacts-for-a-repository)
* [ワークフローの実行の成果物の一覧表示](/rest/actions#list-workflow-run-artifacts)
* [成果物の取得](/rest/actions#get-an-artifact)
* [成果物の削除](/rest/actions#delete-an-artifact)
* [成果物のダウンロード](/rest/actions#download-an-artifact)
{% endif %}

#### チェックラン

* [チェックランの作成](/rest/checks#create-a-check-run)
* [チェックランの取得](/rest/checks#get-a-check-run)
* [チェックランの更新](/rest/checks#update-a-check-run)
* [チェックランのアノテーションの一覧表示](/rest/checks#list-check-run-annotations)
* [チェックスイート中のチェックランの一覧表示](/rest/checks#list-check-runs-in-a-check-suite)
* [Git参照のチェックランの一覧表示](/rest/checks#list-check-runs-for-a-git-reference)

#### チェックスイート

* [チェックスイートの作成](/rest/checks#create-a-check-suite)
* [チェックスイートの取得](/rest/checks#get-a-check-suite)
* [チェックスイートのリクエスト](/rest/checks#rerequest-a-check-suite)
* [チェックスイートのリポジトリ環境設定の更新](/rest/checks#update-repository-preferences-for-check-suites)
* [Git参照のチェックスイートの一覧表示](/rest/checks#list-check-suites-for-a-git-reference)

#### 行動規範

* [すべての行動規範の取得](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [行動規範の取得](/rest/codes-of-conduct#get-a-code-of-conduct)

#### デプロイメントステータス

* [デプロイメントステータスの一覧表示](/rest/deployments#list-deployment-statuses)
* [デプロイメントステータスの作成](/rest/deployments#create-a-deployment-status)
* [デプロイメントステータスの取得](/rest/deployments#get-a-deployment-status)

#### デプロイメント

* [デプロイメントの一覧表示](/rest/deployments#list-deployments)
* [デプロイメントの作成](/rest/deployments#create-a-deployment)
* [Get a deployment](/rest/deployments#get-a-deployment)
* [Delete a deployment](/rest/deployments#delete-a-deployment)

#### イベント

* [リポジトリのネットワークのパブリックなイベントの一覧表示](/rest/activity#list-public-events-for-a-network-of-repositories)
* [パブリックなOrganizationのイベントの一覧表示](/rest/activity#list-public-organization-events)

#### フィード

* [フィードの取得](/rest/activity#get-feeds)

#### Git Blob

* [blobの作成](/rest/git#create-a-blob)
* [blobの取得](/rest/git#get-a-blob)

#### Gitのコミット

* [コミットの作成](/rest/git#create-a-commit)
* [コミットの取得](/rest/git#get-a-commit)

#### Git参照

* [Create a reference](/rest/git#create-a-reference)
* [Get a reference](/rest/git#get-a-reference)
* [一致する参照の一覧表示](/rest/git#list-matching-references)
* [参照の更新](/rest/git#update-a-reference)
* [参照の削除](/rest/git#delete-a-reference)

#### Gitタグ

* [タグオブジェクトの作成](/rest/git#create-a-tag-object)
* [タグの取得](/rest/git#get-a-tag)

#### Gitツリー

* [ツリーの作成](/rest/git#create-a-tree)
* [ツリーの取得](/rest/git#get-a-tree)

#### gitignoreテンプレート

* [すべてのgitignoreテンプレートの取得](/rest/gitignore#get-all-gitignore-templates)
* [gitignoreテンプレートの取得](/rest/gitignore#get-a-gitignore-template)

#### インストール

* [ユーザアクセストークンでアクセスできるリポジトリの一覧表示](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### インタラクションの制限

* [Organizationのインタラクション制限の取得](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [Organizationのインタラクション制限の設定](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [Organizationのインタラクション制限の削除](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [リポジトリのインタラクション制限の取得](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [リポジトリのインタラクション制限の設定](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [リポジトリのインタラクション制限の削除](/rest/interactions#remove-interaction-restrictions-for-a-repository)
{% endif %}

#### Issueにアサインされた人

* [Issueへのアサインされる人の追加](/rest/issues#add-assignees-to-an-issue)
* [Issueからアサインされた人を削除](/rest/issues#remove-assignees-from-an-issue)

#### Issueコメント

* [Issueコメントの一覧表示](/rest/issues#list-issue-comments)
* [Issueコメントの作成](/rest/issues#create-an-issue-comment)
* [リポジトリのIssueコメントの一覧表示](/rest/issues#list-issue-comments-for-a-repository)
* [Issueコメントの取得](/rest/issues#get-an-issue-comment)
* [Issueコメントの更新](/rest/issues#update-an-issue-comment)
* [Issueコメントの削除](/rest/issues#delete-an-issue-comment)

#### Issueイベント

* [Issueイベントの一覧表示](/rest/issues#list-issue-events)

#### Issueのタイムライン

* [Issueのタイムラインイベントの一覧表示](/rest/issues#list-timeline-events-for-an-issue)

#### Issue

* [認証されたユーザにアサインされたIssueの一覧表示](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [アサインされた人の一覧表示](/rest/issues#list-assignees)
* [ユーザにアサインできるかを確認](/rest/issues#check-if-a-user-can-be-assigned)
* [リポジトリのIssueの一覧表示](/rest/issues#list-repository-issues)
* [Issueの作成](/rest/issues#create-an-issue)
* [Issueの取得](/rest/issues#get-an-issue)
* [Issueの更新](/rest/issues#update-an-issue)
* [Issueのロック](/rest/issues#lock-an-issue)
* [Issueのロック解除](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### ジョブ

* [ワークフローランのジョブを取得](/rest/actions#get-a-job-for-a-workflow-run)
* [ワークフローランのジョブのログをダウンロード](/rest/actions#download-job-logs-for-a-workflow-run)
* [ワークフローランのジョブを一覧表示](/rest/actions#list-jobs-for-a-workflow-run)
{% endif %}

#### ラベル

* [Issueのラベルを一覧表示](/rest/issues#list-labels-for-an-issue)
* [Issueにラベルを追加](/rest/issues#add-labels-to-an-issue)
* [Issueにラベルを設定](/rest/issues#set-labels-for-an-issue)
* [Issueからすべてのラベルを削除](/rest/issues#remove-all-labels-from-an-issue)
* [Issueからラベルを削除](/rest/issues#remove-a-label-from-an-issue)
* [リポジトリのラベルを一覧表示](/rest/issues#list-labels-for-a-repository)
* [ラベルを作成](/rest/issues#create-a-label)
* [ラベルの取得](/rest/issues#get-a-label)
* [ラベルの更新](/rest/issues#update-a-label)
* [ラベルの削除](/rest/issues#delete-a-label)
* [マイルストーン中のすべてのIssueのラベルを取得](/rest/issues#list-labels-for-issues-in-a-milestone)

#### ライセンス

* [一般的に使用されるすべてのライセンスを取得](/rest/licenses#get-all-commonly-used-licenses)
* [ライセンスを取得](/rest/licenses#get-a-license)

#### Markdown

* [Markdownドキュメントをレンダリング](/rest/markdown#render-a-markdown-document)
* [Markdownドキュメントをrawモードでレンダリング](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### メタ情報

* [メタ情報](/rest/meta#meta)

#### マイルストーン

* [マイルストーンの一覧表示](/rest/issues#list-milestones)
* [マイルストーンの作成](/rest/issues#create-a-milestone)
* [マイルストーンの取得](/rest/issues#get-a-milestone)
* [マイルストーンの更新](/rest/issues#update-a-milestone)
* [マイルストーンの削除](/rest/issues#delete-a-milestone)

#### Organizationのフック

* [Organizationのwebhookの一覧表示](/rest/orgs#webhooks/#list-organization-webhooks)
* [Organizationのwebhookの作成](/rest/orgs#webhooks/#create-an-organization-webhook)
* [Organizationのwebhookの取得](/rest/orgs#webhooks/#get-an-organization-webhook)
* [Organizationのwebhookの更新](/rest/orgs#webhooks/#update-an-organization-webhook)
* [Organizationのwebhookの削除](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [Organizationのwebhookのping](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Organizationの招待

* [保留中のOrganizationの招待の一覧表示](/rest/orgs#list-pending-organization-invitations)
* [Organizationの招待の作成](/rest/orgs#create-an-organization-invitation)
* [Organizationの招待Teamの一覧表示](/rest/orgs#list-organization-invitation-teams)
{% endif %}

#### Organizationのメンバー

* [Organizationのメンバーの一覧表示](/rest/orgs#list-organization-members)
* [ユーザのOrganizationのメンバーシップのチェック](/rest/orgs#check-organization-membership-for-a-user)
* [Organizationのメンバーの削除](/rest/orgs#remove-an-organization-member)
* [ユーザのOrganizationのメンバーシップの取得](/rest/orgs#get-organization-membership-for-a-user)
* [ユーザのOrganizationのメンバーシップの設定](/rest/orgs#set-organization-membership-for-a-user)
* [ユーザのOrganizationのメンバーシップの削除](/rest/orgs#remove-organization-membership-for-a-user)
* [パブリックなOrganizationのメンバーの一覧表示](/rest/orgs#list-public-organization-members)
* [ユーザのパブリックなOrganizationのメンバーシップのチェック](/rest/orgs#check-public-organization-membership-for-a-user)
* [認証されたユーザのパブリックなOrganizationのメンバーシップの設定](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [認証されたユーザのOrganizationのメンバーシップの削除](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Organizationの外部コラボレータ

* [OrganizationのOrganizationの外部コラボレータの一覧表示](/rest/orgs#list-outside-collaborators-for-an-organization)
* [OrganizationのメンバーからOrganizationの外部コラボレータへの変換](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [OrganizationからのOrganizationの外部コラボレータの削除](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Organization pre-receive フック

* [Organizationのためのpre-receiveフックの一覧表示](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Organizationのためのpre-receiveフックの取得](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Organizationのためのpre-receiveフックの強制の更新](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Organizationのためのpre-receiveフックの強制の削除](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

#### OrganizationのTeamのプロジェクト

* [Teamプロジェクトの一覧表示](/rest/teams#list-team-projects)
* [プロジェクトのTeamの権限のチェック](/rest/teams#check-team-permissions-for-a-project)
* [Teamのプロジェクト権限の追加あるいは更新](/rest/teams#add-or-update-team-project-permissions)
* [Teamからのプロジェクトの削除](/rest/teams#remove-a-project-from-a-team)

#### OrganizationのTeamリポジトリ

* [Team リポジトリの一覧表示](/rest/teams#list-team-repositories)
* [リポジトリのTeamの権限のチェック](/rest/teams#check-team-permissions-for-a-repository)
* [Teamリポジトリ権限の追加あるいは更新](/rest/teams#add-or-update-team-repository-permissions)
* [Teamからのリポジトリの削除](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Organization Team Sync

* [List IdP groups for a team](/rest/teams#list-idp-groups-for-a-team)
* [Create or update IdP group connections](/rest/teams#create-or-update-idp-group-connections)
* [OrganizationのIdpグループの一覧表示](/rest/teams#list-idp-groups-for-an-organization)
{% endif %}

#### Organization Team

* [Teamの一覧表示](/rest/teams#list-teams)
* [Teamの作成](/rest/teams#create-a-team)
* [名前でのTeamの取得](/rest/teams#get-a-team-by-name)
* [Teamの更新](/rest/teams#update-a-team)
* [Teamの削除](/rest/teams#delete-a-team)
{% ifversion fpt or ghec %}
* [保留中のTeamの招待の一覧表示](/rest/teams#list-pending-team-invitations)
{% endif %}
* [Teamメンバーの一覧表示](/rest/teams#list-team-members)
* [ユーザのTeamメンバーシップの取得](/rest/teams#get-team-membership-for-a-user)
* [ユーザのTeamメンバーシップの追加あるいは更新](/rest/teams#add-or-update-team-membership-for-a-user)
* [ユーザのTeamメンバーシップの削除](/rest/teams#remove-team-membership-for-a-user)
* [子チームの一覧表示](/rest/teams#list-child-teams)
* [認証されたユーザのTeamの一覧表示](/rest/teams#list-teams-for-the-authenticated-user)

#### Organization

* [Organizationの一覧表示](/rest/orgs#list-organizations)
* [Organizationの取得](/rest/orgs#get-an-organization)
* [Organizationの更新](/rest/orgs#update-an-organization)
* [認証されたユーザのOrganizationメンバーシップの一覧表示](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [認証されたユーザのOrganizationメンバーシップの取得](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [認証されたユーザのOrganizationメンバーシップの更新](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [認証されたユーザのOrganizationの一覧表示](/rest/orgs#list-organizations-for-the-authenticated-user)
* [ユーザのOrganizationの一覧表示](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Organizationのクレデンシャルの認証

* [OrganizationのSAML SSO認証の一覧表示](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [OrganizationのSAML SSO認証の削除](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% ifversion fpt or ghec %}
#### OrganizationのSCIM

* [SCIMでプロビジョニングされたアイデンティティの一覧表示](/rest/scim#list-scim-provisioned-identities)
* [SCIMユーザのプロビジョニングと招待](/rest/scim#provision-and-invite-a-scim-user)
* [ユーザのSCIMプロビジョニング情報の取得](/rest/scim#get-scim-provisioning-information-for-a-user)
* [プロビジョニングされたユーザのSCIM情報の設定](/rest/scim#set-scim-information-for-a-provisioned-user)
* [SCIMユーザの属性の更新](/rest/scim#update-an-attribute-for-a-scim-user)
* [OrganizationからのSCIMユーザの削除](/rest/scim#delete-a-scim-user-from-an-organization)
{% endif %}

{% ifversion fpt or ghec %}
#### ソースのインポート

* [インポートステータスの取得](/rest/migrations#get-an-import-status)
* [インポートの開始](/rest/migrations#start-an-import)
* [インポートの更新](/rest/migrations#update-an-import)
* [インポートのキャンセル](/rest/migrations#cancel-an-import)
* [コミット作者の取得](/rest/migrations#get-commit-authors)
* [コミット作者のマップ](/rest/migrations#map-a-commit-author)
* [大きなファイルの取得](/rest/migrations#get-large-files)
* [Git LFS環境設定の更新](/rest/migrations#update-git-lfs-preference)
{% endif %}

#### プロジェクトのコラボレータ

* [プロジェクトのコラボレータの一覧表示](/rest/projects#list-project-collaborators)
* [プロジェクトのコラボレータの追加](/rest/projects#add-project-collaborator)
* [プロジェクトのコラボレータの削除](/rest/projects#remove-project-collaborator)
* [ユーザのプロジェクト権限の取得](/rest/projects#get-project-permission-for-a-user)

#### プロジェクト

* [Organizationのプロジェクトの一覧表示](/rest/projects#list-organization-projects)
* [Organizationのプロジェクトの作成](/rest/projects#create-an-organization-project)
* [プロジェクトの取得](/rest/projects#get-a-project)
* [プロジェクトの更新](/rest/projects#update-a-project)
* [プロジェクトの削除](/rest/projects#delete-a-project)
* [プロジェクトの列の一覧表示](/rest/projects#list-project-columns)
* [プロジェクトの列の作成](/rest/projects#create-a-project-column)
* [プロジェクトの列の取得](/rest/projects#get-a-project-column)
* [プロジェクトの列の更新](/rest/projects#update-a-project-column)
* [プロジェクトの列の削除](/rest/projects#delete-a-project-column)
* [プロジェクトカードの一覧表示](/rest/projects#list-project-cards)
* [プロジェクトカードの作成](/rest/projects#create-a-project-card)
* [プロジェクトの列の移動](/rest/projects#move-a-project-column)
* [プロジェクトカードの取得](/rest/projects#get-a-project-card)
* [プロジェクトカードの更新](/rest/projects#update-a-project-card)
* [プロジェクトカードの削除](/rest/projects#delete-a-project-card)
* [プロジェクトカードの移動](/rest/projects#move-a-project-card)
* [リポジトリプロジェクトの一覧表示](/rest/projects#list-repository-projects)
* [リポジトリプロジェクトの作成](/rest/projects#create-a-repository-project)

#### Pull Requestのコメント

* [Pull Requestのレビューコメントの一覧表示](/rest/pulls#list-review-comments-on-a-pull-request)
* [Pull Requestのレビューコメントの作成](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [リポジトリのレビューコメントの一覧表示](/rest/pulls#list-review-comments-in-a-repository)
* [Pull Requestのレビューコメントの取得](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [Pull Requestのレビューコメントの更新](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [Pull Requestのレビューコメントの削除](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### Pull Requestのレビューイベント

* [Pull Requestのレビューの却下](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [Pull Requestのレビューのサブミット](/rest/pulls#submit-a-review-for-a-pull-request)

#### Pull Requestのレビューのリクエスト

* [Pull Requestのリクエストされたレビューの一覧表示](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [Pull Requestのレビュー担当者のリクエスト](/rest/pulls#request-reviewers-for-a-pull-request)
* [Pull Requestからリクエストされたレビュー担当者を削除](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Pull Requestのレビュー

* [Pull Requestのレビューの一覧表示](/rest/pulls#list-reviews-for-a-pull-request)
* [Pull Requestのレビューの作成](/rest/pulls#create-a-review-for-a-pull-request)
* [Pull Requestのレビューの取得](/rest/pulls#get-a-review-for-a-pull-request)
* [Pull Requestのレビューの更新](/rest/pulls#update-a-review-for-a-pull-request)
* [Pull Requestレビューのコメントの一覧表示](/rest/pulls#list-comments-for-a-pull-request-review)

#### Pulls

* [Pull Requestの一覧表示](/rest/pulls#list-pull-requests)
* [Pull Requestの作成](/rest/pulls#create-a-pull-request)
* [Pull Requestの取得](/rest/pulls#get-a-pull-request)
* [Pull Requestの更新](/rest/pulls#update-a-pull-request)
* [Pull Requestのコミットの一覧表示](/rest/pulls#list-commits-on-a-pull-request)
* [Pull Requestのファイルの一覧表示](/rest/pulls#list-pull-requests-files)
* [Pull Requestがマージされたかをチェック](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [Pull Requestをマージ（マージボタン）](/rest/pulls#merge-a-pull-request)

#### リアクション

* [Delete a reaction](/rest/reactions)
* [コミットコメントへのリアクションの一覧表示](/rest/reactions#list-reactions-for-a-commit-comment)
* [コミットコメントへのリアクションの作成](/rest/reactions#create-reaction-for-a-commit-comment)
* [Issueへのリアクションの一覧表示](/rest/reactions#list-reactions-for-an-issue)
* [Issueへのリアクションの作成](/rest/reactions#create-reaction-for-an-issue)
* [Issueコメントへのリアクションの一覧表示](/rest/reactions#list-reactions-for-an-issue-comment)
* [Issueコメントへのリアクションの作成](/rest/reactions#create-reaction-for-an-issue-comment)
* [Pull Requestのレビューコメントへのリアクションの一覧表示](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [Pull Requestのレビューコメントへのリアクションの作成](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [Teamディスカッションコメントへのリアクションの一覧表示](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [Teamディスカッションコメントへのリアクションの作成](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [Teamディスカッションへのリアクションの一覧表示](/rest/reactions#list-reactions-for-a-team-discussion)
* [Create reaction for a team discussion](/rest/reactions#create-reaction-for-a-team-discussion)
* [コミットコメントへのリアクションの削除](/rest/reactions#delete-a-commit-comment-reaction)
* [Issueへのリアクションの削除](/rest/reactions#delete-an-issue-reaction)
* [コミットコメントへのリアクションの削除](/rest/reactions#delete-an-issue-comment-reaction)
* [Pull Requestのコメントへのリアクションの削除](/rest/reactions#delete-a-pull-request-comment-reaction)
* [Teamディスカッションへのリアクションの削除](/rest/reactions#delete-team-discussion-reaction)
* [Delete team discussion comment reaction](/rest/reactions#delete-team-discussion-comment-reaction)

#### リポジトリ

* [Organization リポジトリの一覧表示](/rest/repos#list-organization-repositories)
* [認証されたユーザにリポジトリを作成](/rest/repos#create-a-repository-for-the-authenticated-user)
* [リポジトリの取得](/rest/repos#get-a-repository)
* [リポジトリの更新](/rest/repos#update-a-repository)
* [リポジトリの削除](/rest/repos#delete-a-repository)
* [2つのコミットの比較](/rest/commits#compare-two-commits)
* [リポジトリのコントリビューターの一覧表示](/rest/repos#list-repository-contributors)
* [フォークの一覧表示](/rest/repos#list-forks)
* [フォークの作成](/rest/repos#create-a-fork)
* [リポジトリの言語の一覧表示](/rest/repos#list-repository-languages)
* [リポジトリのタグの一覧表示](/rest/repos#list-repository-tags)
* [リポジトリのTeamの一覧表示](/rest/repos#list-repository-teams)
* [リポジトリの移譲](/rest/repos#transfer-a-repository)
* [パブリックリポジトリの一覧表示](/rest/repos#list-public-repositories)
* [認証されたユーザのリポジトリの一覧表示](/rest/repos#list-repositories-for-the-authenticated-user)
* [ユーザのリポジトリの一覧表示](/rest/repos#list-repositories-for-a-user)
* [リポジトリのテンプレートを使ったリポジトリの作成](/rest/repos#create-repository-using-a-repository-template)

#### リポジトリのアクティビティ

* [Starを付けたユーザの一覧表示](/rest/activity#list-stargazers)
* [Watchしているユーザの一覧表示](/rest/activity#list-watchers)
* [ユーザがStarしたリポジトリの一覧表示](/rest/activity#list-repositories-starred-by-a-user)
* [認証されたユーザによってリポジトリがStarされているかをチェック](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [認証されたユーザのためにリポジトリをStar](/rest/activity#star-a-repository-for-the-authenticated-user)
* [認証されたユーザのためにリポジトリをStar解除](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [ユーザが Watch しているリポジトリの一覧表示](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### リポジトリの自動化されたセキュリティ修正

* [自動化されたセキュリティ修正の有効化](/rest/repos#enable-automated-security-fixes)
* [自動化されたセキュリティ修正の無効化](/rest/repos#disable-automated-security-fixes)
{% endif %}

#### リポジトリのブランチ

* [ブランチの一覧表示](/rest/branches#list-branches)
* [ブランチの取得](/rest/branches#get-a-branch)
* [ブランチの保護の取得](/rest/branches#get-branch-protection)
* [ブランチの保護の更新](/rest/branches#update-branch-protection)
* [ブランチの保護の削除](/rest/branches#delete-branch-protection)
* [管理ブランチの保護の取得](/rest/branches#get-admin-branch-protection)
* [管理ブランチの保護の設定](/rest/branches#set-admin-branch-protection)
* [管理ブランチの保護の削除](/rest/branches#delete-admin-branch-protection)
* [Pull Requestのレビュー保護の取得](/rest/branches#get-pull-request-review-protection)
* [Pull Requestのレビュー保護の更新](/rest/branches#update-pull-request-review-protection)
* [Pull Requestのレビュー保護の削除](/rest/branches#delete-pull-request-review-protection)
* [コミット署名の保護の取得](/rest/branches#get-commit-signature-protection)
* [コミット署名の保護の作成](/rest/branches#create-commit-signature-protection)
* [コミット署名の保護の削除](/rest/branches#delete-commit-signature-protection)
* [ステータスチェックの保護の取得](/rest/branches#get-status-checks-protection)
* [ステータスチェックの保護の更新](/rest/branches#update-status-check-protection)
* [ステータスチェックの保護の削除](/rest/branches#remove-status-check-protection)
* [すべてのステータスチェックのコンテキストの取得](/rest/branches#get-all-status-check-contexts)
* [ステータスチェックのコンテキストの追加](/rest/branches#add-status-check-contexts)
* [ステータスチェックのコンテキストの設定](/rest/branches#set-status-check-contexts)
* [ステータスチェックのコンテキストの削除](/rest/branches#remove-status-check-contexts)
* [アクセス制限の取得](/rest/branches#get-access-restrictions)
* [アクセス制限の削除](/rest/branches#delete-access-restrictions)
* [保護されたブランチへのアクセスを持つTeamの一覧表示](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [Teamのアクセス制限の追加](/rest/branches#add-team-access-restrictions)
* [Teamのアクセス制限の設定](/rest/branches#set-team-access-restrictions)
* [Teamのアクセス制限の削除](/rest/branches#remove-team-access-restrictions)
* [保護されたブランチのユーザ制限の一覧表示](/rest/repos#list-users-with-access-to-the-protected-branch)
* [ユーザアクセス制限の追加](/rest/branches#add-user-access-restrictions)
* [ユーザアクセス制限の設定](/rest/branches#set-user-access-restrictions)
* [ユーザアクセス制限の削除](/rest/branches#remove-user-access-restrictions)
* [ブランチのマージ](/rest/branches#merge-a-branch)

#### リポジトリのコラボレータ

* [リポジトリのコラボレータの一覧表示](/rest/collaborators#list-repository-collaborators)
* [ユーザがリポジトリのコラボレータかをチェック](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [リポジトリのコラボレータを追加](/rest/collaborators#add-a-repository-collaborator)
* [リポジトリのコラボレータを削除](/rest/collaborators#remove-a-repository-collaborator)
* [ユーザのリポジトリの権限を取得](/rest/collaborators#get-repository-permissions-for-a-user)

#### リポジトリのコミットコメント

* [リポジトリのコミットコメントの一覧表示](/rest/commits#list-commit-comments-for-a-repository)
* [コミットコメントの取得](/rest/commits#get-a-commit-comment)
* [コミットコメントの更新](/rest/commits#update-a-commit-comment)
* [コミットコメントの削除](/rest/commits#delete-a-commit-comment)
* [コミットコメントの一覧表示](/rest/commits#list-commit-comments)
* [コミットコメントの作成](/rest/commits#create-a-commit-comment)

#### リポジトリのコミット

* [コミットの一覧表示](/rest/commits#list-commits)
* [コミットの取得](/rest/commits#get-a-commit)
* [headコミットのブランチの一覧表示](/rest/commits#list-branches-for-head-commit)
* [コミットの関連づけられたPull Requestの一覧表示](/rest/repos#list-pull-requests-associated-with-commit)

#### リポジトリのコミュニティ

* [リポジトリの行動規範の取得](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository)
{% ifversion fpt or ghec %}
* [コミュニティプロフィールのメトリクスの取得](/rest/metrics#get-community-profile-metrics)
{% endif %}

#### リポジトリのコンテンツ

* [リポジトリのアーカイブのダウンロード](/rest/repos#download-a-repository-archive)
* [リポジトリのコンテンツの取得](/rest/repos#get-repository-content)
* [ファイルコンテンツの作成もしくは更新](/rest/repos#create-or-update-file-contents)
* [ファイルの削除](/rest/repos#delete-a-file)
* [リポジトリのREADMEの取得](/rest/repos#get-a-repository-readme)
* [リポジトリのライセンスの取得](/rest/licenses#get-the-license-for-a-repository)

#### リポジトリのイベントのディスパッチ

* [リポジトリディスパッチイベントの作成](/rest/repos#create-a-repository-dispatch-event)

#### リポジトリのフック

* [リポジトリのwebhookの一覧表示](/rest/webhooks#list-repository-webhooks)
* [リポジトリのwebhookの作成](/rest/webhooks#create-a-repository-webhook)
* [リポジトリのwebhookの取得](/rest/webhooks#get-a-repository-webhook)
* [リポジトリのwebhookの更新](/rest/webhooks#update-a-repository-webhook)
* [リポジトリのwebhookの削除](/rest/webhooks#delete-a-repository-webhook)
* [リポジトリのwebhookのping](/rest/webhooks#ping-a-repository-webhook)
* [プッシュリポジトリのwebhookのテスト](/rest/repos#test-the-push-repository-webhook)

#### リポジトリの招待

* [リポジトリの招待の一覧表示](/rest/collaborators#list-repository-invitations)
* [リポジトリの招待の更新](/rest/collaborators#update-a-repository-invitation)
* [リポジトリの招待の削除](/rest/collaborators#delete-a-repository-invitation)
* [認証を受けたユーザのリポジトリの招待の一覧表示](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [リポジトリの招待の受諾](/rest/collaborators#accept-a-repository-invitation)
* [リポジトリの招待の拒否](/rest/collaborators#decline-a-repository-invitation)

#### リポジトリのキー

* [デプロイキーの一覧表示](/rest/deployments#list-deploy-keys)
* [デプロイキーの作成](/rest/deployments#create-a-deploy-key)
* [デプロイキーの取得](/rest/deployments#get-a-deploy-key)
* [デプロイキーの削除](/rest/deployments#delete-a-deploy-key)

#### リポジトリのPages

* [GitHub Pagesのサイトの取得](/rest/pages#get-a-github-pages-site)
* [GitHub Pagesのサイトの作成](/rest/pages#create-a-github-pages-site)
* [GitHub Pagesのサイトに関する情報の更新](/rest/pages#update-information-about-a-github-pages-site)
* [GitHub Pagesのサイトの削除](/rest/pages#delete-a-github-pages-site)
* [GitHub Pagesのビルドの一覧表示](/rest/pages#list-github-pages-builds)
* [GitHub Pagesのビルドのリクエスト](/rest/pages#request-a-github-pages-build)
* [GitHub Pagesのビルドの取得](/rest/pages#get-github-pages-build)
* [最新のPagesのビルドの取得](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### リポジトリ pre-receive フック

* [リポジトリのpre-receiveフックの一覧表示](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [リポジトリのpre-receiveフックの取得](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [リポジトリのpre-receiveフックの強制の更新](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [リポジトリのpre-receiveフックの強制の削除](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

#### リポジトリのリリース

* [リリースの一覧表示](/rest/repos#list-releases)
* [リリースの作成](/rest/repos#create-a-release)
* [リリースの取得](/rest/repos#get-a-release)
* [リリースの更新](/rest/repos#update-a-release)
* [リリースの削除](/rest/repos#delete-a-release)
* [リリースアセットの一覧表示](/rest/repos#list-release-assets)
* [リリースアセットの取得](/rest/repos#get-a-release-asset)
* [リリースアセットの更新](/rest/repos#update-a-release-asset)
* [リリースアセットの削除](/rest/repos#delete-a-release-asset)
* [最新リリースの取得](/rest/repos#get-the-latest-release)
* [タグ名によるリリースの取得](/rest/repos#get-a-release-by-tag-name)

#### リポジトリ統計

* [週間のコミットアクティビティの取得](/rest/metrics#get-the-weekly-commit-activity)
* [昨年のコミットアクティビティの取得](/rest/metrics#get-the-last-year-of-commit-activity)
* [すべてのコントリビューターのコミットアクティビティの取得](/rest/metrics#get-all-contributor-commit-activity)
* [週間のコミットカウントの取得](/rest/metrics#get-the-weekly-commit-count)
* [各日の毎時のコミットカウントの取得](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### リポジトリ脆弱性アラート

* [脆弱性アラートの有効化](/rest/repos#enable-vulnerability-alerts)
* [脆弱性アラートの無効化](/rest/repos#disable-vulnerability-alerts)
{% endif %}

#### ルート

* [ルートエンドポイント](/rest#root-endpoint)
* [絵文字](/rest/emojis#emojis)
* [認証を受けたユーザのレート制限のステータスの取得](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### 検索

* [コードの検索](/rest/search#search-code)
* [コミットの検索](/rest/search#search-commits)
* [ラベルの検索](/rest/search#search-labels)
* [リポジトリを検索](/rest/search#search-repositories)
* [トピックの検索](/rest/search#search-topics)
* [ユーザの検索](/rest/search#search-users)

#### ステータス

* [特定のリファレンスの結合ステータスの取得](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [リファレンスのコミットステータスの一覧表示](/rest/commits#list-commit-statuses-for-a-reference)
* [コミットステータスの作成](/rest/commits#create-a-commit-status)

#### Teamディスカッション

* [ディスカッションの一覧表示](/rest/teams#list-discussions)
* [ディスカッションの作成](/rest/teams#create-a-discussion)
* [ディスカッションの取得](/rest/teams#get-a-discussion)
* [ディスカッションの更新](/rest/teams#update-a-discussion)
* [ディスカッションの削除](/rest/teams#delete-a-discussion)
* [ディスカッションコメントの一覧表示](/rest/teams#list-discussion-comments)
* [ディスカッションコメントの作成](/rest/teams#create-a-discussion-comment)
* [ディスカッションコメントの取得](/rest/teams#get-a-discussion-comment)
* [ディスカッションコメントの更新](/rest/teams#update-a-discussion-comment)
* [ディスカッションコメントの削除](/rest/teams#delete-a-discussion-comment)

#### Topics

* [すべてのリポジトリTopicsの取得](/rest/repos#get-all-repository-topics)
* [すべてのリポジトリTopicsの置き換え](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### トラフィック

* [リポジトリのクローンの取得](/rest/metrics#get-repository-clones)
* [上位の参照パスの取得](/rest/metrics#get-top-referral-paths)
* [上位の参照ソースの取得](/rest/metrics#get-top-referral-sources)
* [ページビューの取得](/rest/metrics#get-page-views)
{% endif %}

{% ifversion fpt or ghec %}
#### ユーザのブロック

* [認証されたユーザによってブロックされたユーザの一覧表示](/rest/users#list-users-blocked-by-the-authenticated-user)
* [認証されたユーザによってユーザがブロックされているかをチェック](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [Organizationによってブロックされたユーザを一覧表示](/rest/orgs#list-users-blocked-by-an-organization)
* [Organizationによってユーザがブロックされているかをチェック](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [Organizationからユーザをブロック](/rest/orgs#block-a-user-from-an-organization)
* [Oraganizationからのユーザのブロックを解除](/rest/orgs#unblock-a-user-from-an-organization)
* [ユーザをブロック](/rest/users#block-a-user)
* [ゆーざのブロックを解除](/rest/users#unblock-a-user)
{% endif %}

{% ifversion fpt or ghes or ghec %}
#### ユーザのメール

{% ifversion fpt or ghec %}
* [認証されたユーザのプライマリメールの可視性を設定](/rest/users#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [認証されたユーザのメールアドレスの一覧表示](/rest/users#list-email-addresses-for-the-authenticated-user)
* [メールアドレスの追加](/rest/users#add-an-email-address-for-the-authenticated-user)
* [メールアドレスの削除](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [認証されたユーザのパブリックなメールアドレスの一覧表示](/rest/users#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

#### ユーザのフォロワー

* [ユーザのフォロワーの一覧表示](/rest/users#list-followers-of-a-user)
* [ユーザがフォローしている人の一覧表示](/rest/users#list-the-people-a-user-follows)
* [認証されたユーザによって人がフォローされているかのチェック](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [ユーザのフォロー](/rest/users#follow-a-user)
* [ユーザのフォロー解除](/rest/users#unfollow-a-user)
* [ユーザが他のユーザにフォローされているかのチェック](/rest/users#check-if-a-user-follows-another-user)

#### ユーザのGPGキー

* [認証されたユーザのGPGキーの一覧表示](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [認証されたユーザのGPGキーの作成](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [認証されたユーザのGPGキーの取得](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [認証されたユーザのGPGキーの削除](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [ユーザのGPGキーの一覧表示](/rest/users#list-gpg-keys-for-a-user)

#### ユーザの公開鍵

* [認証されたユーザの公開SSHキーの一覧表示](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [認証されたユーザの公開SSHキーの作成](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [認証されたユーザの公開SSHキーの取得](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [認証されたユーザの公開SSHキーの削除](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [ユーザの公開鍵の一覧表示](/rest/users#list-public-keys-for-a-user)

#### ユーザ

* [認証されたユーザの取得](/rest/users#get-the-authenticated-user)
* [ユーザアクセストークンでアクセスできるアプリケーションのインストールの一覧表示](/rest/apps#list-app-installations-accessible-to-the-user-access-token)
{% ifversion fpt or ghec %}
* [認証されたユーザのサブスクリプションのリスト](/rest/apps#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [ユーザの一覧表示](/rest/users#list-users)
* [ユーザの取得](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### ワークフローラン

* [リポジトリのワークフローランの一覧表示](/rest/actions#list-workflow-runs-for-a-repository)
* [ワークフローランの取得](/rest/actions#get-a-workflow-run)
* [ワークフローランのキャンセル](/rest/actions#cancel-a-workflow-run)
* [ワークフローランのログのダウンロード](/rest/actions#download-workflow-run-logs)
* [ワークフローランのログの削除](/rest/actions#delete-workflow-run-logs)
* [ワークフローの再実行](/rest/actions#re-run-a-workflow)
* [ワークフローランの一覧表示](/rest/actions#list-workflow-runs)
* [ワークフローランの利用状況の取得](/rest/actions#get-workflow-run-usage)
{% endif %}

{% ifversion fpt or ghec %}
#### ワークフロー

* [リポジトリワークフローの一覧表示](/rest/actions#list-repository-workflows)
* [ワークフローの取得](/rest/actions#get-a-workflow)
* [ワークフロー利用状況の取得](/rest/actions#get-workflow-usage)
{% endif %}

## 参考リンク

- "[{% data variables.product.prodname_dotcom %} への認証について](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

