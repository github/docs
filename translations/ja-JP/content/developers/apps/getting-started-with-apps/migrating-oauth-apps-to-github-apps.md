---
title: OAuth AppからGitHub Appへの移行
intro: '{% data variables.product.prodname_oauth_app %}を{% data variables.product.prodname_github_app %}へ移行することの利点と、{% data variables.product.prodname_marketplace %}にリストされていない{% data variables.product.prodname_oauth_app %}の移行方法について学んでください。'
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

この記事は、OAuth AppをGitHub Appに移行することを検討している既存のインテグレーターにガイドラインを提供します。

### GitHub Appに切り替える理由

[GitHub App](/apps/)は、GitHubとの統合のための公式に推奨されている方法です。これは、純粋なOAuthベースのインテグレーションと比べて多くの利点を提供するためです。

- GitHub Appがアクセスできる特定の情報をターゲットにする[詳細な権限](/apps/differences-between-apps/#requesting-permission-levels-for-resources)。権限で制限できないOAuth App以上のセキュリティポリシーの下で、より広範囲なユーザやOrganizationにアプリケーションを利用してもらうことができる。
- [短時間有効なトークン](/apps/differences-between-apps/#token-based-identification)によって、OAuthトークンよりもセキュアな認証方式を提供できる。 OAuthトークンは、OAuth Appを認可したユーザがトークンを取り消すまで、期限切れにならない。 GitHub Appsは素早く期限切れになるトークンを使用し、侵害されたトークンが利用される時間枠を小さくできる。
- [ビルトインの集中型webhook](/apps/differences-between-apps/#webhooks)は、アプリケーションがアクセスできるすべてのリポジトリとOrganizationに対するイベントを受信する。 逆に、OAuth AppはユーザがアクセスできるそれぞれのリポジトリとOrganizationに対してwebhookを設定する必要がある。
- [ボットアカウント](/apps/differences-between-apps/#machine-vs-bot-accounts)は{% data variables.product.product_name %}のシートを消費せず、最初にアプリケーションをインストールしたユーザがOrganizationを離れてもインストールされたままにしておける。
- OAuthのビルトインサポートは、[ユーザからサーバーへのエンドポイント](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)を使って、GitHub Appでも利用できる。
- ボットアカウント専用の[APIレート制限](/apps/building-github-apps/understanding-rate-limits-for-github-apps/)は、インテグレーションとともにスケールする。
- リポジトリの所有者は、Organizationのリポジトリに[GitHub Appをインストール](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps)できる。 GitHub Appの設定にOrganizationのリソースをリクエストする権限があれば、Organizaitionのオーナーはそのインストールを承認しなければならない。
- [ Octokitライブラリ](/rest/overview/libraries)や、[Robot](https://probot.github.io/)のような他のフレームワークを通じてオープンソースコミュニティのサポートがある。
- GitHub Appを構築するインテグレーターは、APIへの早期アクセスを採用する機会がある。

### OAuth AppからGitHub Appへの変換

以下のガイドラインは、{% if currentVersion == "free-pro-team@latest" %}GitHub Marketplaceにリストされている、あるいはされていない{% endif %}登録済みのOAuth Appがあることを前提としています。 高いレベルでは、以下のステップに従う必要があります。

1. [GitHub Appで利用できるAPIエンドポイントのレビュー](#review-the-available-api-endpoints-for-github-apps)
1. [APIレート制限内に留まるための設計](#design-to-stay-within-api-rate-limits)
1. [新しいGitHub Appの登録](#register-a-new-github-app)
1. [アプリケーションが必要とする権限の決定](#determine-the-permissions-your-app-requires)
1. [webhookのサブスクライブ](#subscribe-to-webhooks)
1. [様々な認証方法の理解](#understand-the-different-methods-of-authentication)
1. [リポジトリにGitHub Appをインストールするようにユーザに指示](#direct-users-to-install-your-github-app-on-repositories)
1. [不必要なリポジトリフックの削除](#remove-any-unnecessary-repository-hooks)
1. [OAuth Appへのアクセスの取り消しをユーザに促す](#encourage-users-to-revoke-access-to-your-oauth-app)

#### GitHub Appで利用できるAPIエンドポイントのレビュー

[REST API](/rest)エンドポイントと[GraphQL](/graphql)クエリの大部分は、今日GitHub Appから利用できますが、まだいくつかのエンドポイントは有効にする過程にあります。 [利用可能なRESTエンドポイント](/rest/overview/endpoints-available-for-github-apps)をレビューして、必要なエンドポイントがGitHub Appと互換性があることを確認してください。 GitHub Appで利用できるAPIエンドポイントの中には、ユーザの代わりにアプリケーションが動作できるようにするものがあることに注意してください。 GitHub Appがユーザとして認証されるようにするエンドポイントのリストについては、「[ユーザからサーバーへのリクエスト](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)」を参照してください。

必要なAPIエンドポイントのリストのレビューは、できるだけ早く行うことをおすすめします。 まだ{% data variables.product.prodname_github_app %}から利用できないエンドポイントで必要なものがある場合は、サポートにお知らせください。

#### APIレート制限内に留まるための設計

GitHub Appは[レート制限に対するスライディングルール](/apps/building-github-apps/understanding-rate-limits-for-github-apps/)を利用します。これは、Organization中のリポジトリ及びユーザ数に基づいて増加できます。 また、GitHub Appは[GraphQL V4](/graphql)を利用することで、[条件リクエスト](/rest#conditional-requests)あるいは統合リクエストを利用することもできます。

#### 新しいGitHub Appの登録

GitHub Appへ切り替えすることを決めたら、[新しいGitHub Appを作成](/apps/building-github-apps/)しなければなりません。

#### アプリケーションが必要とする権限の決定

GitHub Appを登録する際には、アプリケーションのコードが使用する各エンドポイントが必要とする権限を選択しなければなりません。 GitHub Appで利用できる各エンドポイントが必要とする権限のリストについては「[GitHub Appの権限](/rest/reference/permissions-required-for-github-apps)」を参照してください。

GitHub Appの設定で、アプリケーションがそれぞれの権限の種類について`No Access`、`Read-only`、`Read & Write`アクセスを必要とするかを指定できます。 詳細な権限を使用することで、アプリケーションは必要なデータのサブセットにターゲットを絞ってアクセスできるようになります。 必要な機能を提供する、可能な限り最小の権限セットを指定することをおすすめします。

#### webhookのサブスクライブ

新しいGitHub Appを作成し、その権限を選択したら、サブスクライブさせたいwebhookイベントを選択できます。 webhookをサブスクライブする方法を学ぶには、「[GitHub Appの権限を編集する](/apps/managing-github-apps/editing-a-github-app-s-permissions/)」を参照してください。

#### 様々な認証方法の理解

GitHub Appは、短時間で期限切れとなるトークンベースの認証を主に利用し、期限切れにならないOAuthトークンよりも高いセキュリティを提供します。 利用可能な様々な認証方法と、それらをいつ使う必要があるかを理解しておくことが重要です。

* **JSON Web Token (JWT)**は[GitHub Appとして認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)されます。 たとえば、**JWT**で認証を受けてアプリケーションのインストールの詳細をフェッチしたり、**JWT**を**インストールアクセストークン**と交換したりできます。
* **インストールアクセストークン**は、[GitHub Appの特待のインストールとして認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)されます（これはサーバーからサーバーへのリクエストとも呼ばれます）。 たとえば、**インストールアクセストークン**で認証を受けて、Issueをオープンしたり、Pull Requestにフィードバックを提供したりできます。
* **OAuthアクセストークン** は[GitHub Appのユーザとして認証](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)を受けることができます（ユーザからサーバーへのリクエストとも呼ばれます）。 たとえば、GitHub Appがユーザのアイデンティティを検証したり、ユーザの代わりに振る舞わなければならない場合に、OAuthアクセストークンを使ってユーザとして認証を受けることができます。

最も一般的なシナリオは、**インストールアクセストークン**を使って特定のインストールとして認証を受けることです。

#### リポジトリにGitHub Appをインストールするようにユーザに指示

OAuth AppからGitHub Appへの移行をしたら、GitHub Appがインストールできるようになったことをユーザに知らせなければなりません。 たとえば、アプリケーション中の行動喚起のバナーに、GitHub Appのインストールリンクを含めることができます。 移行を容易にするために、GitHub Appのインストールフローを通じて存在する、ユーザもしくはOrganizationアカウントを特定するクエリパラメータを使い、OAuth Appがアクセスできた任意のリポジトリを事前選択しておけます。 こうすることで、ユーザはすでにアクセスできるリポジトリにGitHub Appを容易にインストールできるようになります。

##### クエリパラメータ

| 名前                    | 説明                                                             |
| --------------------- | -------------------------------------------------------------- |
| `suggested_target_id` | **必須**: GitHub AppをインストールしようとしているユーザもしくはOrganizationのID。       |
| `repository_ids[]`    | リポジトリIDの配列。 省略された場合、すべてのリポジトリが選択されます。 事前選択できるリポジトリ数は、最大で100です。 |

##### URLの例
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

`YOUR_APP_NAME`をGitHub Appの名前で、`ID_OF_USER_OR_ORG`をターゲットユーザもしくはOrganizationのIDで置き換え、最大で100個のリポジトリID（`REPO_A_ID`及び`REPO_B_ID`）を含めなければなりません。 OAuth Appがアクセスできるリポジトリのリストを取得するには、[認証されたユーザのためのリポジトリのリスト](/rest/reference/repos#list-repositories-for-the-authenticated-user)及び[Organizationのリポジトリのリスト](/rest/reference/repos#list-organization-repositories)エンドポイントを使ってください。

#### 不必要なリポジトリフックの削除

GitHub Appがリポジトリにインストールされたら、従来のOAuth Appによって作成された不要なwebhookを削除する必要があります。 どちらのアプリケーションも同じリポジトリにインストールされていると、ユーザにとっては機能が重複するかもしれません。 webhookを削除するには、`repositories_added`アクションの[`installation_repositories` webhook](/webhooks/event-payloads/#installation_repositories)を待ち受け、それらのリポジトリ上にOAuth Appによって作成された[リポジトリwebhookを削除](/rest/reference/repos#delete-a-repository-webhook)できます。

#### OAuth Appへのアクセスの取り消しをユーザに促す

GitHub Appのインストールベースが増大してきたら、ユーザに従来のOAuthインテグレーションへの[アクセスを取り消す](/articles/authorizing-oauth-apps/)ように促すことを検討してください。
