---
title: Identifying and authorizing users for GitHub Apps (GitHub アプリのユーザーを特定および認可する)
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
shortTitle: Identify & authorize users
ms.openlocfilehash: 302e7a25931c3af2957dae7a67e0ca080fc5bd50
ms.sourcegitcommit: f54d01e643f994ce48f0774dbc680ad77dd6193f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160581'
---
{% data reusables.pre-release-program.expiring-user-access-tokens %}

GitHub App がユーザの代わりに動作すると、ユーザからサーバーに対するリクエストを実行します。 こうしたリクエストは、ユーザのアクセストークンで承認される必要があります。 ユーザからサーバーに対するリクエストには、特定のユーザに対してどのリポジトリを表示するか決定するなど、ユーザに対するデータのリクエストが含まれます。 これらのリクエストには、ビルドの実行など、ユーザがトリガーしたアクションも含まれます。

{% data reusables.apps.expiring_user_authorization_tokens %}

## サイト上のユーザを特定する

ブラウザーで実行される標準アプリのユーザーを認可するには、[Web アプリケーション フロー](#web-application-flow)を使用します。

CLI ツールや Git 資格情報マネージャーなど、ブラウザーに直接アクセスしないヘッドレス アプリのユーザーを認可するには、[デバイス フロー](#device-flow)を使用します。 デバイス フローでは、OAuth 2.0 [デバイス認可付与](https://tools.ietf.org/html/rfc8628)を使用します。

## Web アプリケーションフロー

Web アプリケーションフローを利用して、サイト上のユーザを特定するプロセスは以下の通りです。

1. ユーザはGitHubのアイデンティティをリクエストするためにリダイレクトされます
2. GitHubによるサイトへのユーザのリダイレクト
3. GitHub Appはユーザのアクセストークンで API にアクセスします

アプリを作成または変更するときに **[インストール時にユーザーの認可 (OAuth) を要求する]** を選択すると、アプリのインストール時に手順 1 が完了します。 詳細については、「[インストール中のユーザーの認可](/apps/installing-github-apps/#authorizing-users-during-installation)」を参照してください。

### 1. ユーザーの GitHub ID を要求する
ブラウザで次のURLに移動するようユーザに指示します。

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

GitHub アプリで `login` パラメーターを指定すると、ユーザーは、使用できるアカウントでサインインしてアプリを認可するように求められます。

#### パラメーター

名前 | 型 | 説明
-----|------|------------
`client_id` | `string` | **必須。** GitHub アプリのクライアント ID。 アプリを選択すると、[GitHub アプリの設定](https://github.com/settings/apps)でこれを確認できます。 **注:** アプリ ID とクライアント ID は異なり、交換はできません。
`redirect_uri` | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 これは、GitHub アプリの設定時に{% ifversion fpt or ghes or ghec %}**コールバック URL** として指定したいずれかの URL{% else %} **[ユーザー認可のコールバック URL]** フィールドに指定した URL{% endif %} と完全に一致する必要があり、追加のパラメーターを含めることはできません。
`state` | `string` | これはフォージェリアタックを防ぐためにランダムな文字列を含める必要があり、あらゆる任意のデータを含めることができます。
`login` | `string` | サインインとアプリケーションの認可に使われるアカウントを指示します。
`allow_signup` | `string` | OAuthフローの間に、認証されていないユーザに対して{% data variables.product.prodname_dotcom %}へのサインアップの選択肢が提示されるかどうか。 既定値は、`true` です。 ポリシーでサインアップが禁止されている場合は、`false` を使用します。

{% note %}

**注:** 認可要求にスコープを指定する必要はありません。 従来の OAuth とは異なり、認証トークンはGitHub App に紐付けられた権限およびユーザの権限に限定されます。

{% endnote %}

### 2. GitHub によってユーザーが元のサイトにリダイレクトされる

ユーザーが要求を受け入れると、GitHub は一時的な `code` を code パラメーターに指定し、前の手順で指定した状態を `state` パラメーターに指定して、元のサイトにリダイレクトします。 状態が一致しない場合、そのリクエストは第三者が作成したものであり、プロセスを中止する必要があります。

{% note %}

**注:** アプリを作成または変更するときに **[インストール時にユーザーの認可 (OAuth) を要求する]** を選択すると、GitHub はアクセス トークンとの交換に必要となる一時的な `code` を返します。 アプリのインストール時に GitHub が OAuth フローを開始した場合、`state` パラメーターは返されません。

{% endnote %}

この `code` をアクセス トークンと交換します。  トークンの期限設定が有効になっている場合、アクセストークンは 8 時間で期限切れとなり、リフレッシュトークンは 6 か月で期限切れとなります。 トークンを更新するたびに、新しいリフレッシュトークンを取得します。 詳細については、「[ユーザーからサーバーへのアクセス トークンの更新](/developers/apps/refreshing-user-to-server-access-tokens)」を参照してください。

ユーザトークンの期限設定は、現在のところオプション機能であり、変更される可能性があります。 ユーザーからサーバーへのトークンの期限設定機能をオプトインするには、「[アプリケーションのオプション機能を有効化する](/developers/apps/activating-optional-features-for-apps)」を参照してください。

アクセストークンを受け取るため、次のエンドポイントをリクエストします。

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### パラメーター

名前 | 型 | 説明
-----|------|------------
`client_id` | `string` | **必須。** GitHub アプリのクライアント ID。
`client_secret` | `string`   | **必須。** GitHub アプリのクライアント シークレット。
`code` | `string`   | **必須。** 手順 1 に対する応答として受け取ったコード。
`redirect_uri` | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 これは、GitHub アプリの設定時に{% ifversion fpt or ghes or ghec %}**コールバック URL** として指定したいずれかの URL{% else %} **[ユーザー認可のコールバック URL]** フィールドに指定した URL{% endif %} と完全に一致する必要があり、追加のパラメーターを含めることはできません。

#### [応答]

デフォルトでは、レスポンスは以下の形式になります。 応答パラメーター `expires_in`、`refresh_token`、`refresh_token_expires_in` は、ユーザーからサーバーへのアクセス トークンの期限設定が有効になっている場合にのみ返されます。

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

### 3. GitHub アプリがユーザーのアクセス トークンで API にアクセスする

ユーザのアクセストークンを使用すると、GitHub App がユーザの代わりに API にリクエストを発行できます。

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

たとえば、curlでは以下のようにAuthorizationヘッダを設定できます。

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## デバイスフロー

{% note %}

**注:** デバイス フローはパブリック ベータ版であり、変更される可能性があります。

{% endnote %}

デバイスフローを使えば、CLIツールやGit認証情報マネージャーなどのヘッドレスアプリケーションのユーザを認可できます。

{% ifversion device-flow-is-opt-in %}デバイス フローを使用してユーザーを特定および認可するには、まずアプリの設定で有効にする必要があります。 デバイス フローを有効にする方法の詳細については、「[GitHub アプリの変更](/developers/apps/managing-github-apps/modifying-a-github-app)」を参照してください。 {% endif %}デバイス フローを使用してユーザーを認可する方法の詳細については、「[OAuth アプリの承認](/developers/apps/authorizing-oauth-apps#device-flow)」を参照してください。

## ユーザがアクセスできるインストールされたリソースの確認

ユーザの OAuth トークンを取得したら、そのユーザがアクセスできるインストールされたアプリケーションを確認できます。

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations

また、インストールされたアプリケーションでユーザがアクセスできるリポジトリも確認できます。

    Authorization: Bearer OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

詳細については、「[ユーザー アクセス トークンでアクセスできるアプリのインストールの一覧表示](/rest/apps#list-app-installations-accessible-to-the-user-access-token)」および「[ユーザー アクセス トークンでアクセスできるリポジトリの一覧表示](/rest/apps#list-repositories-accessible-to-the-user-access-token)」を参照してください。

## GitHub App の認可の取り消し処理

ユーザーが GitHub アプリの認可を取り消すと、アプリは既定で [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) Webhook を受け取ります。 GitHub App は、このイベントをサブスクライブ解除できません。 {% data reusables.webhooks.authorization_event %}

## ユーザレベルの権限

GitHub アプリにユーザー レベルのアクセス許可を追加すると、[ユーザー認可フロー](#identifying-users-on-your-site)の一部として個々のユーザーによって付与されるユーザー リソース (ユーザーのメールなど) にアクセスできます。 ユーザー レベルのアクセス許可は、インストール時に組織または個人アカウントで付与される[リポジトリおよび組織レベルのアクセス許可](/rest/overview/permissions-required-for-github-apps)とは異なります。

ユーザー レベルのアクセス許可は、GitHub アプリの設定にある **[アクセス許可と Webhook]** ページの **[ユーザーのアクセス許可]** セクションから選択できます。 アクセス許可の選択の詳細については、「[GitHub アプリのアクセス許可を編集する](/apps/managing-github-apps/editing-a-github-app-s-permissions/)」を参照してください。

ユーザが自分のアカウントにアプリケーションをインストールする時、インストールプロンプトは、アプリケーションがリクエストするユーザレベルの権限を一覧表示し、アプリケーションがこれらの権限を個々のユーザに求めることができるということを説明します。

ユーザレベルの権限は個々のユーザに付与されるため、ユーザにアップグレードを促すことなく、既存のアプリケーションに権限を追加できます。 ただし、新しい権限を認可し、ユーザからサーバーに対するトークンを取得するため、ユーザ認可フローを通じて既存のユーザを送信する必要があります。

## ユーザからサーバーへのリクエスト

While most of your API インタラクションのほとんどは、サーバーからサーバーへのインストールアクセストークンを用いて行われますが、一部のエンドポイントでは、ユーザアクセストークンを使用し、API 経由でアクションを実行できます。 アプリでは、[GraphQL](/graphql) または [REST](/rest) エンドポイントを使用して以下の要求を行うことができます。

### 対応しているエンドポイント

{% ifversion fpt or ghec %}
#### Actions ランナー

* [リポジトリのランナー アプリケーションの一覧表示](/rest/actions#list-runner-applications-for-a-repository)
* [リポジトリのセルフホステッド ランナーの一覧表示](/rest/actions#list-self-hosted-runners-for-a-repository)
* [リポジトリのセルフホステッド ランナーの取得](/rest/actions#get-a-self-hosted-runner-for-a-repository)
* [リポジトリからのセルフホステッド ランナーの削除](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
* [リポジトリの登録トークンの作成](/rest/actions#create-a-registration-token-for-a-repository)
* [リポジトリの削除トークンの作成](/rest/actions#create-a-remove-token-for-a-repository)
* [組織のランナー アプリケーションの一覧表示](/rest/actions#list-runner-applications-for-an-organization)
* [組織のセルフホステッド ランナーの一覧表示](/rest/actions#list-self-hosted-runners-for-an-organization)
* [組織のセルフホステッド ランナーの取得](/rest/actions#get-a-self-hosted-runner-for-an-organization)
* [組織からのセルフホステッド ランナーの削除](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
* [組織の登録トークンの作成](/rest/actions#create-a-registration-token-for-an-organization)
* [組織の削除トークンの作成](/rest/actions#create-a-remove-token-for-an-organization)

#### Actionsのシークレット

* [リポジトリ公開キーの取得](/rest/actions#get-a-repository-public-key)
* [リポジトリ シークレットの一覧表示](/rest/actions#list-repository-secrets)
* [リポジトリ シークレットの取得](/rest/actions#get-a-repository-secret)
* [リポジトリ シークレットの作成または更新](/rest/actions#create-or-update-a-repository-secret)
* [リポジトリ シークレットの削除](/rest/actions#delete-a-repository-secret)
* [組織の公開キーの取得](/rest/actions#get-an-organization-public-key)
* [組織のシークレットの一覧表示](/rest/actions#list-organization-secrets)
* [組織のシークレットの取得](/rest/actions#get-an-organization-secret)
* [組織のシークレットの作成または更新](/rest/actions#create-or-update-an-organization-secret)
* [組織のシークレットの選択済みリポジトリの一覧表示](/rest/actions#list-selected-repositories-for-an-organization-secret)
* [組織のシークレットの選択済みリポジトリの設定](/rest/actions#set-selected-repositories-for-an-organization-secret)
* [組織のシークレットへの選択済みリポジトリの追加](/rest/actions#add-selected-repository-to-an-organization-secret)
* [組織のシークレットからの選択済みリポジトリの削除](/rest/actions#remove-selected-repository-from-an-organization-secret)
* [組織のシークレットの削除](/rest/actions#delete-an-organization-secret) {% endif %}

{% ifversion fpt or ghec %}
#### Artifacts

* [リポジトリの成果物の一覧表示](/rest/actions#list-artifacts-for-a-repository)
* [ワークフロー実行の成果物の一覧表示](/rest/actions#list-workflow-run-artifacts)
* [成果物の取得](/rest/actions#get-an-artifact)
* [成果物の削除](/rest/actions#delete-an-artifact)
* [成果物のダウンロード](/rest/actions#download-an-artifact) {% endif %}

#### チェックラン

* [チェック実行の作成](/rest/checks#create-a-check-run)
* [チェック実行の取得](/rest/checks#get-a-check-run)
* [チェック実行の更新](/rest/checks#update-a-check-run)
* [チェック実行の注釈の一覧表示](/rest/checks#list-check-run-annotations)
* [チェック スイート内のチェック実行の一覧表示](/rest/checks#list-check-runs-in-a-check-suite)
* [Git 参照のチェック実行の一覧表示](/rest/checks#list-check-runs-for-a-git-reference)

#### チェックスイート

* [チェック スイートの作成](/rest/checks#create-a-check-suite)
* [チェック スイートの取得](/rest/checks#get-a-check-suite)
* [チェック スイートの再要求](/rest/checks#rerequest-a-check-suite)
* [チェック スイートのリポジトリ設定の更新](/rest/checks#update-repository-preferences-for-check-suites)
* [Git 参照のチェック スイートの一覧表示](/rest/checks#list-check-suites-for-a-git-reference)

#### 行動規範

* [すべての行動規範の取得](/rest/codes-of-conduct#get-all-codes-of-conduct)
* [行動規範の取得](/rest/codes-of-conduct#get-a-code-of-conduct)

#### デプロイメントステータス

* [デプロイの状態の一覧表示](/rest/deployments#list-deployment-statuses)
* [デプロイの状態の作成](/rest/deployments#create-a-deployment-status)
* [デプロイの状態の取得](/rest/deployments#get-a-deployment-status)

#### デプロイメント

* [デプロイの一覧表示](/rest/deployments#list-deployments)
* [デプロイの作成](/rest/deployments#create-a-deployment)
* [デプロイの取得](/rest/deployments#get-a-deployment)
* [デプロイの削除](/rest/deployments#delete-a-deployment)

#### イベント

* [リポジトリのネットワークのパブリック イベントの一覧表示](/rest/activity#list-public-events-for-a-network-of-repositories)
* [パブリック組織イベントの一覧表示](/rest/activity#list-public-organization-events)

#### フィード

* [フィードの取得](/rest/activity#get-feeds)

#### Git Blob

* [BLOB を作成する](/rest/git#create-a-blob)
* [BLOB の取得](/rest/git#get-a-blob)

#### Git コミット

* [コミットの作成](/rest/git#create-a-commit)
* [コミットの取得](/rest/git#get-a-commit)

#### Git参照

* [参照の作成](/rest/git#create-a-reference)
* [参照の取得](/rest/git#get-a-reference)
* [一致する参照の一覧表示](/rest/git#list-matching-references)
* [参照の更新](/rest/git#update-a-reference)
* [参照の削除](/rest/git#delete-a-reference)

#### Gitタグ

* [タグ オブジェクトの作成](/rest/git#create-a-tag-object)
* [タグを取得します](/rest/git#get-a-tag)

#### Gitツリー

* [ツリーの作成](/rest/git#create-a-tree)
* [ツリーの取得](/rest/git#get-a-tree)

#### gitignoreテンプレート

* [すべての gitignore テンプレートの取得](/rest/gitignore#get-all-gitignore-templates)
* [gitignore テンプレートの取得](/rest/gitignore#get-a-gitignore-template)

#### インストール

* [ユーザー アクセス トークンでアクセスできるリポジトリの一覧表示](/rest/apps#list-repositories-accessible-to-the-user-access-token)

{% ifversion fpt or ghec %}
#### インタラクションの制限

* [組織の対話制限の取得](/rest/interactions#get-interaction-restrictions-for-an-organization)
* [組織の対話制限の設定](/rest/interactions#set-interaction-restrictions-for-an-organization)
* [組織の対話制限の削除](/rest/interactions#remove-interaction-restrictions-for-an-organization)
* [リポジトリの対話制限の取得](/rest/interactions#get-interaction-restrictions-for-a-repository)
* [リポジトリの対話制限の設定](/rest/interactions#set-interaction-restrictions-for-a-repository)
* [リポジトリの対話制限の削除](/rest/interactions#remove-interaction-restrictions-for-a-repository) {% endif %}

#### Issueにアサインされた人

* [イシューへの担当者の追加](/rest/issues#add-assignees-to-an-issue)
* [イシューからの担当者の削除](/rest/issues#remove-assignees-from-an-issue)

#### Issueコメント

* [イシュー コメントの一覧表示](/rest/issues#list-issue-comments)
* [イシュー コメントの作成](/rest/issues#create-an-issue-comment)
* [リポジトリのイシュー コメントの一覧表示](/rest/issues#list-issue-comments-for-a-repository)
* [イシュー コメントの取得](/rest/issues#get-an-issue-comment)
* [イシュー コメントの更新](/rest/issues#update-an-issue-comment)
* [イシュー コメントの削除](/rest/issues#delete-an-issue-comment)

#### Issueイベント

* [イシュー イベントの一覧表示](/rest/issues#list-issue-events)

#### Issueのタイムライン

* [イシューのタイムライン イベントの一覧表示](/rest/issues#list-timeline-events-for-an-issue)

#### issue

* [認証されたユーザーに割り当てられたイシューの一覧表示](/rest/issues#list-issues-assigned-to-the-authenticated-user)
* [担当者の一覧表示](/rest/issues#list-assignees)
* [ユーザーへの割り当てが可能かどうかの確認](/rest/issues#check-if-a-user-can-be-assigned)
* [リポジトリのイシューの一覧表示](/rest/issues#list-repository-issues)
* [イシューの作成](/rest/issues#create-an-issue)
* [イシューの取得](/rest/issues#get-an-issue)
* [イシューの更新](/rest/issues#update-an-issue)
* [イシューのロック](/rest/issues#lock-an-issue)
* [イシューのロック解除](/rest/issues#unlock-an-issue)

{% ifversion fpt or ghec %}
#### ジョブ

* [ワークフロー実行のジョブの取得](/rest/actions#get-a-job-for-a-workflow-run)
* [ワークフロー実行のジョブ ログのダウンロード](/rest/actions#download-job-logs-for-a-workflow-run)
* [ワークフロー実行のジョブの一覧表示](/rest/actions#list-jobs-for-a-workflow-run) {% endif %}

#### ラベル

* [イシューのラベルの一覧表示](/rest/issues#list-labels-for-an-issue)
* [イシューへのラベルの追加](/rest/issues#add-labels-to-an-issue)
* [イシューのラベルの設定](/rest/issues#set-labels-for-an-issue)
* [イシューからのすべてのラベルの削除](/rest/issues#remove-all-labels-from-an-issue)
* [イシューからのラベルの削除](/rest/issues#remove-a-label-from-an-issue)
* [リポジトリのラベルの一覧表示](/rest/issues#list-labels-for-a-repository)
* [ラベルを作成する](/rest/issues#create-a-label)
* [ラベルの取得](/rest/issues#get-a-label)
* [ラベルの更新](/rest/issues#update-a-label)
* [ラベルを削除する](/rest/issues#delete-a-label)
* [マイルストーンにおけるすべてのイシューのラベルの取得](/rest/issues#list-labels-for-issues-in-a-milestone)

#### ライセンス

* [一般的に使用されるすべてのライセンスの取得](/rest/licenses#get-all-commonly-used-licenses)
* [ライセンスの取得](/rest/licenses#get-a-license)

#### Markdown

* [Markdown ドキュメントのレンダリング](/rest/markdown#render-a-markdown-document)
* [RAW モードでの Markdown ドキュメントのレンダリング](/rest/markdown#render-a-markdown-document-in-raw-mode)

#### Meta

* [メタ](/rest/meta#meta)

#### マイルストーン

* [マイルストーンの一覧表示](/rest/issues#list-milestones)
* [マイルストーンの作成](/rest/issues#create-a-milestone)
* [マイルストーンの取得](/rest/issues#get-a-milestone)
* [マイルストーンの更新](/rest/issues#update-a-milestone)
* [マイルストーンの削除](/rest/issues#delete-a-milestone)

#### Organizationのフック

* [組織の Webhook の一覧表示](/rest/orgs#webhooks/#list-organization-webhooks)
* [組織の Webhook の作成](/rest/orgs#webhooks/#create-an-organization-webhook)
* [組織の Webhook の取得](/rest/orgs#webhooks/#get-an-organization-webhook)
* [組織の Webhook の更新](/rest/orgs#webhooks/#update-an-organization-webhook)
* [組織の Webhook の削除](/rest/orgs#webhooks/#delete-an-organization-webhook)
* [組織の Webhook の ping](/rest/orgs#webhooks/#ping-an-organization-webhook)

{% ifversion fpt or ghec %}
#### Organizationの招待

* [保留中の組織の招待の一覧表示](/rest/orgs#list-pending-organization-invitations)
* [組織の招待の作成](/rest/orgs#create-an-organization-invitation)
* [組織の招待チームの一覧表示](/rest/orgs#list-organization-invitation-teams) {% endif %}

#### Organizationのメンバー

* [組織のメンバーの一覧表示](/rest/orgs#list-organization-members)
* [ユーザーの組織のメンバーシップの確認](/rest/orgs#check-organization-membership-for-a-user)
* [組織のメンバーの削除](/rest/orgs#remove-an-organization-member)
* [ユーザーの組織のメンバーシップの取得](/rest/orgs#get-organization-membership-for-a-user)
* [ユーザーの組織のメンバーシップの設定](/rest/orgs#set-organization-membership-for-a-user)
* [ユーザーの組織のメンバーシップの削除](/rest/orgs#remove-organization-membership-for-a-user)
* [パブリック組織のメンバーの一覧表示](/rest/orgs#list-public-organization-members)
* [ユーザーのパブリック組織のメンバーシップの確認](/rest/orgs#check-public-organization-membership-for-a-user)
* [認証されたユーザーのパブリック組織のメンバーシップの設定](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
* [認証されたユーザーのパブリック組織のメンバーシップの削除](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)

#### Organizationの外部コラボレータ

* [組織の外部コラボレーターの一覧表示](/rest/orgs#list-outside-collaborators-for-an-organization)
* [組織のメンバーから外部コラボレーターへの変換](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
* [組織からの外部コラボレーターの削除](/rest/orgs#remove-outside-collaborator-from-an-organization)

{% ifversion ghes %}
#### Organization pre-receive フック

* [組織の pre-receive フックの一覧表示](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [組織の pre-receive フックの取得](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [組織の pre-receive フックの適用の更新](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [組織の pre-receive フックの適用の削除](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) {% endif %}

#### OrganizationのTeamのプロジェクト

* [チームのプロジェクトの一覧表示](/rest/teams#list-team-projects)
* [プロジェクトのチームのアクセス許可の確認](/rest/teams#check-team-permissions-for-a-project)
* [チームのプロジェクトのアクセス許可の追加または更新](/rest/teams#add-or-update-team-project-permissions)
* [Team からのプロジェクトの削除](/rest/teams#remove-a-project-from-a-team)

#### OrganizationのTeamリポジトリ

* [チーム リポジトリの一覧表示](/rest/teams#list-team-repositories)
* [リポジトリのチームのアクセス許可の確認](/rest/teams#check-team-permissions-for-a-repository)
* [チーム リポジトリのアクセス許可の追加または更新](/rest/teams#add-or-update-team-repository-permissions)
* [チームからのリポジトリの削除](/rest/teams#remove-a-repository-from-a-team)

{% ifversion fpt or ghec %}
#### Organization Team Sync

* [チームの IdP グループの一覧表示](/rest/teams#list-idp-groups-for-a-team)
* [IdP グループの接続の作成または更新](/rest/teams#create-or-update-idp-group-connections)
* [組織の IdP グループの一覧表示](/rest/teams#list-idp-groups-for-an-organization) {% endif %}

#### Organization Team

* [チームの一覧表示](/rest/teams#list-teams)
* [チームを作成する](/rest/teams#create-a-team)
* [名前によるチームの取得](/rest/teams#get-a-team-by-name)
* [チームの更新](/rest/teams#update-a-team)
* [チームの削除](/rest/teams#delete-a-team) {% ifversion fpt or ghec %}
* [保留中のチームの招待の一覧表示](/rest/teams#list-pending-team-invitations) {% endif %}
* [チームのメンバーの一覧表示](/rest/teams#list-team-members)
* [ユーザーのチームのメンバーシップの取得](/rest/teams#get-team-membership-for-a-user)
* [ユーザーのチームのメンバーシップの追加または更新](/rest/teams#add-or-update-team-membership-for-a-user)
* [ユーザーのチームのメンバーシップの削除](/rest/teams#remove-team-membership-for-a-user)
* [子チームの一覧表示](/rest/teams#list-child-teams)
* [認証されたユーザーのチームの一覧表示](/rest/teams#list-teams-for-the-authenticated-user)

#### 組織

* [組織のリストを取得する](/rest/orgs#list-organizations)
* [組織を取得する](/rest/orgs#get-an-organization)
* [組織を更新する](/rest/orgs#update-an-organization)
* [認証されたユーザーの組織のメンバーシップの一覧表示](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
* [認証されたユーザーの組織のメンバーシップの取得](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
* [認証されたユーザーの組織のメンバーシップの更新](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
* [認証されたユーザーの組織の一覧表示](/rest/orgs#list-organizations-for-the-authenticated-user)
* [ユーザーの組織の一覧表示](/rest/orgs#list-organizations-for-a-user)

{% ifversion fpt or ghec %}
#### Organizationのクレデンシャルの認証

* [組織の SAML SSO 認可の一覧表示](/rest/orgs#list-saml-sso-authorizations-for-an-organization)
* [組織の SAML SSO 認可の削除](/rest/orgs#remove-a-saml-sso-authorization-for-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### OrganizationのSCIM

* [SCIM でプロビジョニングされた ID の一覧表示](/rest/scim#list-scim-provisioned-identities)
* [SCIM ユーザーのプロビジョニングと招待](/rest/scim#provision-and-invite-a-scim-user)
* [ユーザーの SCIM プロビジョニング情報の取得](/rest/scim#get-scim-provisioning-information-for-a-user)
* [プロビジョニングされたユーザーの SCIM 情報の設定](/rest/scim#set-scim-information-for-a-provisioned-user)
* [SCIM ユーザーの属性の更新](/rest/scim#update-an-attribute-for-a-scim-user)
* [組織からの SCIM ユーザーの削除](/rest/scim#delete-a-scim-user-from-an-organization) {% endif %}

{% ifversion fpt or ghec %}
#### ソースのインポート

* [インポートの状態の取得](/rest/migrations#get-an-import-status)
* [インポートの開始](/rest/migrations#start-an-import)
* [インポートの更新](/rest/migrations#update-an-import)
* [インポートのキャンセル](/rest/migrations#cancel-an-import)
* [コミット作成者の取得](/rest/migrations#get-commit-authors)
* [コミット作成者のマップ](/rest/migrations#map-a-commit-author)
* [大きなファイルの取得](/rest/migrations#get-large-files)
* [Git LFS 設定の更新](/rest/migrations#update-git-lfs-preference) {% endif %}

#### プロジェクトのコラボレータ

* [プロジェクトのコラボレーターの一覧表示](/rest/projects#list-project-collaborators)
* [プロジェクトのコラボレーターの追加](/rest/projects#add-project-collaborator)
* [プロジェクトのコラボレーターの削除](/rest/projects#remove-project-collaborator)
* [ユーザーのプロジェクトのアクセス許可の取得](/rest/projects#get-project-permission-for-a-user)

#### プロジェクト

* [組織のプロジェクトの一覧表示](/rest/projects#list-organization-projects)
* [組織のプロジェクトの作成](/rest/projects#create-an-organization-project)
* [プロジェクトの取得](/rest/projects#get-a-project)
* [プロジェクトの更新](/rest/projects#update-a-project)
* [プロジェクトを削除する](/rest/projects#delete-a-project)
* [プロジェクトの列の一覧表示](/rest/projects#list-project-columns)
* [プロジェクトの列の作成](/rest/projects#create-a-project-column)
* [プロジェクトの列の取得](/rest/projects#get-a-project-column)
* [プロジェクトの列の更新](/rest/projects#update-a-project-column)
* [プロジェクトの列の削除](/rest/projects#delete-a-project-column)
* [プロジェクト カードの一覧表示](/rest/projects#list-project-cards)
* [プロジェクト カードの作成](/rest/projects#create-a-project-card)
* [プロジェクトの列の移動](/rest/projects#move-a-project-column)
* [プロジェクト カードの取得](/rest/projects#get-a-project-card)
* [プロジェクト カードの更新](/rest/projects#update-a-project-card)
* [プロジェクト カードの削除](/rest/projects#delete-a-project-card)
* [プロジェクト カードの移動](/rest/projects#move-a-project-card)
* [リポジトリ プロジェクトの一覧表示](/rest/projects#list-repository-projects)
* [リポジトリ プロジェクトの作成](/rest/projects#create-a-repository-project)

#### Pull Requestのコメント

* [pull request に関するレビュー コメントの一覧表示](/rest/pulls#list-review-comments-on-a-pull-request)
* [pull request に関するレビュー コメントの作成](/rest/pulls#create-a-review-comment-for-a-pull-request)
* [リポジトリ内のレビュー コメントの一覧表示](/rest/pulls#list-review-comments-in-a-repository)
* [pull request に関するレビュー コメントの取得](/rest/pulls#get-a-review-comment-for-a-pull-request)
* [pull request に関するレビュー コメントの更新](/rest/pulls#update-a-review-comment-for-a-pull-request)
* [pull request に関するレビュー コメントの削除](/rest/pulls#delete-a-review-comment-for-a-pull-request)

#### Pull Requestのレビューイベント

* [pull request のレビューの却下](/rest/pulls#dismiss-a-review-for-a-pull-request)
* [pull request のレビューの送信](/rest/pulls#submit-a-review-for-a-pull-request)

#### Pull Requestのレビューのリクエスト

* [pull request に対して要求されたレビュー担当者の一覧表示](/rest/pulls#list-requested-reviewers-for-a-pull-request)
* [pull request に対するレビュー担当者の要求](/rest/pulls#request-reviewers-for-a-pull-request)
* [要求されたレビュー担当者の pull request からの削除](/rest/pulls#remove-requested-reviewers-from-a-pull-request)

#### Pull Requestのレビュー

* [pull request のレビューの一覧表示](/rest/pulls#list-reviews-for-a-pull-request)
* [pull request のレビューの作成](/rest/pulls#create-a-review-for-a-pull-request)
* [pull request のレビューの取得](/rest/pulls#get-a-review-for-a-pull-request)
* [pull request のレビューの更新](/rest/pulls#update-a-review-for-a-pull-request)
* [pull request のレビューに関するコメントの一覧表示](/rest/pulls#list-comments-for-a-pull-request-review)

#### Pulls

* [pull request の一覧表示](/rest/pulls#list-pull-requests)
* [pull request を作成する](/rest/pulls#create-a-pull-request)
* [pull request の取得](/rest/pulls#get-a-pull-request)
* [pull request の更新](/rest/pulls#update-a-pull-request)
* [pull request のコミットの一覧表示](/rest/pulls#list-commits-on-a-pull-request)
* [pull request のファイルの一覧表示](/rest/pulls#list-pull-requests-files)
* [pull request がマージされたかどうかの確認](/rest/pulls#check-if-a-pull-request-has-been-merged)
* [pull request のマージ (マージ ボタン)](/rest/pulls#merge-a-pull-request)

#### リアクション

* [リアクションの削除](/rest/reactions)
* [コミット コメントのリアクションの一覧表示](/rest/reactions#list-reactions-for-a-commit-comment)
* [コミット コメントのリアクションの作成](/rest/reactions#create-reaction-for-a-commit-comment)
* [イシューのリアクションの一覧表示](/rest/reactions#list-reactions-for-an-issue)
* [イシューのリアクションの作成](/rest/reactions#create-reaction-for-an-issue)
* [イシュー コメントのリアクションの一覧表示](/rest/reactions#list-reactions-for-an-issue-comment)
* [イシュー コメントのリアクションの作成](/rest/reactions#create-reaction-for-an-issue-comment)
* [pull request のレビュー コメントのリアクションの一覧表示](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
* [pull request のレビュー コメントのリアクションの作成](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
* [チーム ディスカッション コメントのリアクションの一覧表示](/rest/reactions#list-reactions-for-a-team-discussion-comment)
* [チーム ディスカッション コメントのリアクションの作成](/rest/reactions#create-reaction-for-a-team-discussion-comment)
* [チーム ディスカッションのリアクションの一覧表示](/rest/reactions#list-reactions-for-a-team-discussion)
* [チーム ディスカッションのリアクションの作成](/rest/reactions#create-reaction-for-a-team-discussion)
* [コミット コメントのリアクションの削除](/rest/reactions#delete-a-commit-comment-reaction)
* [イシューのリアクションの削除](/rest/reactions#delete-an-issue-reaction)
* [コミット コメントへのリアクションの削除](/rest/reactions#delete-an-issue-comment-reaction)
* [pull request コメントのリアクションの削除](/rest/reactions#delete-a-pull-request-comment-reaction)
* [チーム ディスカッションのリアクションの削除](/rest/reactions#delete-team-discussion-reaction)
* [チーム ディスカッション コメントのリアクションの削除](/rest/reactions#delete-team-discussion-comment-reaction)

#### リポジトリ

* [組織リポジトリの一覧表示](/rest/repos#list-organization-repositories)
* [認証されたユーザーのリポジトリの作成](/rest/repos#create-a-repository-for-the-authenticated-user)
* [リポジトリの取得](/rest/repos#get-a-repository)
* [リポジトリの更新](/rest/repos#update-a-repository)
* [リポジトリの削除](/rest/repos#delete-a-repository)
* [2 つのコミットの比較](/rest/commits#compare-two-commits)
* [リポジトリの共同作成者の一覧表示](/rest/repos#list-repository-contributors)
* [フォークの一覧表示](/rest/repos#list-forks)
* [フォークの作成](/rest/repos#create-a-fork)
* [リポジトリの言語の一覧表示](/rest/repos#list-repository-languages)
* [リポジトリのタグの一覧表示](/rest/repos#list-repository-tags)
* [リポジトリのチームの一覧表示](/rest/repos#list-repository-teams)
* [リポジトリの移譲](/rest/repos#transfer-a-repository)
* [パブリック リポジトリの一覧表示](/rest/repos#list-public-repositories)
* [認証されたユーザーのリポジトリの一覧表示](/rest/repos#list-repositories-for-the-authenticated-user)
* [ユーザーのリポジトリの一覧表示](/rest/repos#list-repositories-for-a-user)
* [リポジトリ テンプレートを使用したリポジトリの作成](/rest/repos#create-repository-using-a-repository-template)

#### リポジトリのアクティビティ

* [星を付けたユーザーの一覧表示](/rest/activity#list-stargazers)
* [ウォッチしているユーザーの一覧表示](/rest/activity#list-watchers)
* [ユーザーが星を付けたリポジトリの一覧表示](/rest/activity#list-repositories-starred-by-a-user)
* [認証されたユーザーによってリポジトリに星が付けられたかどうかの確認](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [認証されたユーザーのリポジトリに星を付ける](/rest/activity#star-a-repository-for-the-authenticated-user)
* [認証されたユーザーのリポジトリの星を外す](/rest/activity#unstar-a-repository-for-the-authenticated-user)
* [ユーザーがウォッチしているリポジトリの一覧表示](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion fpt or ghec %}
#### リポジトリの自動化されたセキュリティ修正

* [自動化されたセキュリティ修正の有効化](/rest/repos#enable-automated-security-fixes)
* [自動化されたセキュリティ修正の無効化](/rest/repos#disable-automated-security-fixes) {% endif %}

#### リポジトリのブランチ

* [ブランチの一覧表示](/rest/branches#list-branches)
* [ブランチの取得](/rest/branches#get-a-branch)
* [ブランチの保護の取得](/rest/branches#get-branch-protection)
* [ブランチの保護の更新](/rest/branches#update-branch-protection)
* [ブランチの保護の削除](/rest/branches#delete-branch-protection)
* [管理ブランチの保護の取得](/rest/branches#get-admin-branch-protection)
* [管理ブランチの保護の設定](/rest/branches#set-admin-branch-protection)
* [管理ブランチの保護の削除](/rest/branches#delete-admin-branch-protection)
* [pull request のレビュー保護の取得](/rest/branches#get-pull-request-review-protection)
* [pull request のレビュー保護の更新](/rest/branches#update-pull-request-review-protection)
* [pull request のレビュー保護の削除](/rest/branches#delete-pull-request-review-protection)
* [コミット署名の保護の取得](/rest/branches#get-commit-signature-protection)
* [コミット署名の保護の作成](/rest/branches#create-commit-signature-protection)
* [コミット署名の保護の削除](/rest/branches#delete-commit-signature-protection)
* [状態チェックの保護の取得](/rest/branches#get-status-checks-protection)
* [状態チェックの保護の更新](/rest/branches#update-status-check-protection)
* [状態チェックの保護の削除](/rest/branches#remove-status-check-protection)
* [すべての状態チェックのコンテキストの取得](/rest/branches#get-all-status-check-contexts)
* [状態チェックのコンテキストの追加](/rest/branches#add-status-check-contexts)
* [状態チェックのコンテキストの設定](/rest/branches#set-status-check-contexts)
* [状態チェックのコンテキストの削除](/rest/branches#remove-status-check-contexts)
* [アクセス制限の取得](/rest/branches#get-access-restrictions)
* [アクセス制限の削除](/rest/branches#delete-access-restrictions)
* [保護されたブランチへのアクセス権を持つチームの一覧表示](/rest/repos#list-teams-with-access-to-the-protected-branch)
* [チームのアクセス制限の追加](/rest/branches#add-team-access-restrictions)
* [チームのアクセス制限の設定](/rest/branches#set-team-access-restrictions)
* [チームのアクセス制限の削除](/rest/branches#remove-team-access-restrictions)
* [保護されたブランチのユーザー制限の一覧表示](/rest/repos#list-users-with-access-to-the-protected-branch)
* [ユーザーのアクセス制限の追加](/rest/branches#add-user-access-restrictions)
* [ユーザーのアクセス制限の設定](/rest/branches#set-user-access-restrictions)
* [ユーザーのアクセス制限の削除](/rest/branches#remove-user-access-restrictions)
* [分岐をマージする](/rest/branches#merge-a-branch)

#### リポジトリのコラボレータ

* [リポジトリのコラボレーターの一覧表示](/rest/collaborators#list-repository-collaborators)
* [ユーザーがリポジトリのコラボレーターかどうかの確認](/rest/collaborators#check-if-a-user-is-a-repository-collaborator)
* [リポジトリのコラボレーターの追加](/rest/collaborators#add-a-repository-collaborator)
* [リポジトリのコラボレーターの削除](/rest/collaborators#remove-a-repository-collaborator)
* [ユーザーのリポジトリのアクセス許可の取得](/rest/collaborators#get-repository-permissions-for-a-user)

#### リポジトリのコミットコメント

* [リポジトリのコミット コメントの一覧表示](/rest/commits#list-commit-comments-for-a-repository)
* [コミット コメントの取得](/rest/commits#get-a-commit-comment)
* [コミット コメントの更新](/rest/commits#update-a-commit-comment)
* [コミット コメントの削除](/rest/commits#delete-a-commit-comment)
* [コミット コメントの一覧表示](/rest/commits#list-commit-comments)
* [コミット コメントの作成](/rest/commits#create-a-commit-comment)

#### リポジトリのコミット

* [コミットの一覧を表示する](/rest/commits#list-commits)
* [コミットの取得](/rest/commits#get-a-commit)
* [ヘッド コミットのブランチの一覧表示](/rest/commits#list-branches-for-head-commit)
* [コミットに関連付けられた pull request の一覧表示](/rest/repos#list-pull-requests-associated-with-commit)

#### リポジトリのコミュニティ

* [リポジトリの行動規範の取得](/rest/codes-of-conduct#get-the-code-of-conduct-for-a-repository) {% ifversion fpt or ghec %}
* [コミュニティ プロファイル メトリックの取得](/rest/metrics#get-community-profile-metrics) {% endif %}

#### リポジトリのコンテンツ

* [リポジトリのアーカイブのダウンロード](/rest/repos#download-a-repository-archive)
* [リポジトリのコンテンツの取得](/rest/repos#get-repository-content)
* [ファイル コンテンツの作成または更新](/rest/repos#create-or-update-file-contents)
* [ファイルを削除する](/rest/repos#delete-a-file)
* [リポジトリの README の取得](/rest/repos#get-a-repository-readme)
* [リポジトリのライセンスの取得](/rest/licenses#get-the-license-for-a-repository)

#### リポジトリのイベントのディスパッチ

* [リポジトリのディスパッチ イベントの作成](/rest/repos#create-a-repository-dispatch-event)

#### リポジトリのフック

* [リポジトリの Webhook の一覧表示](/rest/webhooks#list-repository-webhooks)
* [リポジトリの Webhook の作成](/rest/webhooks#create-a-repository-webhook)
* [リポジトリの Webhook の取得](/rest/webhooks#get-a-repository-webhook)
* [リポジトリの Webhook の更新](/rest/webhooks#update-a-repository-webhook)
* [リポジトリの Webhook の削除](/rest/webhooks#delete-a-repository-webhook)
* [リポジトリの Webhook の ping](/rest/webhooks#ping-a-repository-webhook)
* [リポジトリへのプッシュの Webhook のテスト](/rest/repos#test-the-push-repository-webhook)

#### リポジトリの招待

* [リポジトリの招待の一覧表示](/rest/collaborators#list-repository-invitations)
* [リポジトリの招待の更新](/rest/collaborators#update-a-repository-invitation)
* [リポジトリの招待の削除](/rest/collaborators#delete-a-repository-invitation)
* [認証されたユーザーのリポジトリの招待の一覧表示](/rest/collaborators#list-repository-invitations-for-the-authenticated-user)
* [リポジトリの招待の受け入れ](/rest/collaborators#accept-a-repository-invitation)
* [リポジトリの招待の辞退](/rest/collaborators#decline-a-repository-invitation)

#### リポジトリのキー

* [デプロイ キーの一覧表示](/rest/deployments#list-deploy-keys)
* [デプロイ キーの作成](/rest/deployments#create-a-deploy-key)
* [デプロイ キーの取得](/rest/deployments#get-a-deploy-key)
* [デプロイ キーの削除](/rest/deployments#delete-a-deploy-key)

#### リポジトリのPages

* [GitHub Pages サイトの取得](/rest/pages#get-a-github-pages-site)
* [GitHub Pages サイトの作成](/rest/pages#create-a-github-pages-site)
* [GitHub Pages サイトに関する情報の更新](/rest/pages#update-information-about-a-github-pages-site)
* [GitHub Pages サイトの削除](/rest/pages#delete-a-github-pages-site)
* [GitHub Pages のビルドの一覧表示](/rest/pages#list-github-pages-builds)
* [GitHub Pages のビルドの要求](/rest/pages#request-a-github-pages-build)
* [GitHub Pages のビルドの取得](/rest/pages#get-github-pages-build)
* [最新の Pages のビルドの取得](/rest/pages#get-latest-pages-build)

{% ifversion ghes %}
#### リポジトリ pre-receive フック

* [リポジトリの pre-receive フックの一覧表示](/enterprise/user/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [リポジトリの pre-receive フックの取得](/enterprise/user/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [リポジトリの pre-receive フックの適用の更新](/enterprise/user/rest/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [リポジトリの pre-receive フックの適用の削除](/enterprise/user/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) {% endif %}

#### リポジトリのリリース

* [リリースを一覧表示する](/rest/repos#list-releases)
* [リリースを作成する](/rest/repos#create-a-release)
* [リリースの取得](/rest/repos#get-a-release)
* [リリースの更新](/rest/repos#update-a-release)
* [リリースの削除](/rest/repos#delete-a-release)
* [リリース アセットの一覧表示](/rest/repos#list-release-assets)
* [リリース アセットの取得](/rest/repos#get-a-release-asset)
* [リリース アセットの更新](/rest/repos#update-a-release-asset)
* [リリース アセットの削除](/rest/repos#delete-a-release-asset)
* [最新リリースの取得](/rest/repos#get-the-latest-release)
* [タグ名によるリリースの取得](/rest/repos#get-a-release-by-tag-name)

#### リポジトリ統計

* [週間のコミット アクティビティの取得](/rest/metrics#get-the-weekly-commit-activity)
* [昨年のコミット アクティビティの取得](/rest/metrics#get-the-last-year-of-commit-activity)
* [すべてのコントリビューターのコミット アクティビティの取得](/rest/metrics#get-all-contributor-commit-activity)
* [週間のコミット数の取得](/rest/metrics#get-the-weekly-commit-count)
* [毎日の 1 時間ごとのコミット数の取得](/rest/metrics#get-the-hourly-commit-count-for-each-day)

{% ifversion fpt or ghec %}
#### リポジトリ脆弱性アラート

* [脆弱性アラートの有効化](/rest/repos#enable-vulnerability-alerts)
* [脆弱性アラートの無効化](/rest/repos#disable-vulnerability-alerts) {% endif %}

#### Root

* [ルート エンドポイント](/rest#root-endpoint)
* [絵文字](/rest/emojis#emojis)
* [認証されたユーザーのレート制限の状態の取得](/rest/rate-limit#get-rate-limit-status-for-the-authenticated-user)

#### 検索

* [コードの検索](/rest/search#search-code)
* [コミットの検索](/rest/search#search-commits)
* [ラベルの検索](/rest/search#search-labels)
* [リポジトリの検索](/rest/search#search-repositories)
* [トピックの検索](/rest/search#search-topics)
* [ユーザーの検索](/rest/search#search-users)

#### ステータス

* [特定の参照の結合状態の取得](/rest/commits#get-the-combined-status-for-a-specific-reference)
* [参照のコミット状態の一覧表示](/rest/commits#list-commit-statuses-for-a-reference)
* [コミット状態の作成](/rest/commits#create-a-commit-status)

#### Teamディスカッション

* [ディスカッションの一覧表示](/rest/teams#list-discussions)
* [ディスカッションの作成](/rest/teams#create-a-discussion)
* [ディスカッションの取得](/rest/teams#get-a-discussion)
* [ディスカッションの更新](/rest/teams#update-a-discussion)
* [ディスカッションの削除](/rest/teams#delete-a-discussion)
* [ディスカッション コメントの一覧表示](/rest/teams#list-discussion-comments)
* [ディスカッション コメントの作成](/rest/teams#create-a-discussion-comment)
* [ディスカッション コメントの取得](/rest/teams#get-a-discussion-comment)
* [ディスカッション コメントの更新](/rest/teams#update-a-discussion-comment)
* [ディスカッション コメントの削除](/rest/teams#delete-a-discussion-comment)

#### トピック

* [すべてのリポジトリのトピックの取得](/rest/repos#get-all-repository-topics)
* [すべてのリポジトリのトピックの置換](/rest/repos#replace-all-repository-topics)

{% ifversion fpt or ghec %}
#### トラフィック

* [リポジトリのクローンの取得](/rest/metrics#get-repository-clones)
* [上位の参照パスの取得](/rest/metrics#get-top-referral-paths)
* [上位の参照ソースの取得](/rest/metrics#get-top-referral-sources)
* [ページ ビューの取得](/rest/metrics#get-page-views) {% endif %}

{% ifversion fpt or ghec %}
#### ユーザのブロック

* [認証されたユーザーによってブロックされたユーザーの一覧表示](/rest/users#list-users-blocked-by-the-authenticated-user)
* [認証されたユーザーによってユーザーがブロックされているかどうかの確認](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [組織によってブロックされたユーザーの一覧表示](/rest/orgs#list-users-blocked-by-an-organization)
* [組織によってユーザーがブロックされているかどうかの確認](/rest/orgs#check-if-a-user-is-blocked-by-an-organization)
* [組織からのユーザーのブロック](/rest/orgs#block-a-user-from-an-organization)
* [組織からのユーザーのブロック解除](/rest/orgs#unblock-a-user-from-an-organization)
* [ユーザーのブロック](/rest/users#block-a-user)
* [ユーザーのブロック解除](/rest/users#unblock-a-user) {% endif %}

{% ifversion fpt or ghes or ghec %}
#### ユーザーの電子メール

{% ifversion fpt or ghec %}
* [認証されたユーザーのプライマリ メールの可視性の設定](/rest/users#set-primary-email-visibility-for-the-authenticated-user) {% endif %}
* [認証されたユーザーのメール アドレスの一覧表示](/rest/users#list-email-addresses-for-the-authenticated-user)
* [メール アドレスの追加](/rest/users#add-an-email-address-for-the-authenticated-user)
* [メール アドレスの削除](/rest/users#delete-an-email-address-for-the-authenticated-user)
* [認証されたユーザーのパブリック メール アドレスの一覧表示](/rest/users#list-public-email-addresses-for-the-authenticated-user) {% endif %}

#### ユーザのフォロワー

* [ユーザーのフォロワーの一覧表示](/rest/users#list-followers-of-a-user)
* [ユーザーがフォローしている人物の一覧表示](/rest/users#list-the-people-a-user-follows)
* [認証されたユーザーによって特定の人物がフォローされているかどうかの確認](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [ユーザーのフォロー](/rest/users#follow-a-user)
* [ユーザーのフォローの解除](/rest/users#unfollow-a-user)
* [ユーザーが別のユーザーをフォローしているかどうかの確認](/rest/users#check-if-a-user-follows-another-user)

#### ユーザのGPGキー

* [認証されたユーザーの GPG キーの一覧表示](/rest/users#list-gpg-keys-for-the-authenticated-user)
* [認証されたユーザーの GPG キーの作成](/rest/users#create-a-gpg-key-for-the-authenticated-user)
* [認証されたユーザーの GPG キーの取得](/rest/users#get-a-gpg-key-for-the-authenticated-user)
* [認証されたユーザーの GPG キーの削除](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
* [ユーザーの GPG キーの一覧表示](/rest/users#list-gpg-keys-for-a-user)

#### ユーザの公開鍵

* [認証されたユーザーのパブリック SSH キーの一覧表示](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
* [認証されたユーザーのパブリック SSH キーの作成](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
* [認証されたユーザーのパブリック SSH キーの取得](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
* [認証されたユーザーのパブリック SSH キーの削除](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [ユーザーの公開キーの一覧表示](/rest/users#list-public-keys-for-a-user)

#### ユーザー

* [認証されたユーザーの取得](/rest/users#get-the-authenticated-user)
* [ユーザー アクセス トークンでアクセスできるアプリのインストールの一覧表示](/rest/apps#list-app-installations-accessible-to-the-user-access-token) {% ifversion fpt or ghec %}
* [認証されたユーザーのサブスクリプションの一覧表示](/rest/apps#list-subscriptions-for-the-authenticated-user) {% endif %}
* [ユーザーの一覧表示](/rest/users#list-users)
* [ユーザーの取得](/rest/users#get-a-user)

{% ifversion fpt or ghec %}
#### ワークフローラン

* [リポジトリのワークフロー実行の一覧表示](/rest/actions#list-workflow-runs-for-a-repository)
* [ワークフロー実行の取得](/rest/actions#get-a-workflow-run)
* [ワークフロー実行のキャンセル](/rest/actions#cancel-a-workflow-run)
* [ワークフロー実行ログのダウンロード](/rest/actions#download-workflow-run-logs)
* [ワークフロー実行ログの削除](/rest/actions#delete-workflow-run-logs)
* [ワークフローの再実行](/rest/actions#re-run-a-workflow)
* [ワークフロー実行の一覧表示](/rest/actions#list-workflow-runs)
* [ワークフロー実行の使用状況の取得](/rest/actions#get-workflow-run-usage) {% endif %}

{% ifversion fpt or ghec %}
#### Workflows

* [リポジトリ ワークフローの一覧表示](/rest/actions#list-repository-workflows)
* [ワークフローの取得](/rest/actions#get-a-workflow)
* [ワークフローの使用状況の取得](/rest/actions#get-workflow-usage) {% endif %}

## 参考資料

- [{% data variables.product.prodname_dotcom %} の認証について](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)

