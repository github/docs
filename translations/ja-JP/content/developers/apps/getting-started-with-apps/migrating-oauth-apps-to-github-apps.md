---
title: OAuth AppからGitHub Appへの移行
intro: '{% data variables.product.prodname_oauth_app %}を{% data variables.product.prodname_github_app %}へ移行することの利点と、{% data variables.product.prodname_marketplace %}にリストされていない{% data variables.product.prodname_oauth_app %}の移行方法について学んでください。 '
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Migrate from OAuth Apps
ms.openlocfilehash: 4fea258cc9677401d8212634fdcc04abf22724c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081033'
---
この記事は、OAuth AppをGitHub Appに移行することを検討している既存のインテグレーターにガイドラインを提供します。

## GitHub Appに切り替える理由

[GitHub App](/apps/) は、GitHub との統合方法として公式に推奨されています。これは、純粋な OAuth ベースの統合と比べて多くの利点があるためです。

- GitHub App でアクセスできる特定の情報をターゲットにする[詳細な権限](/apps/differences-between-apps/#requesting-permission-levels-for-resources)。権限で制限できない OAuth App 以上のセキュリティ ポリシーの下で、より広範囲なユーザーや Organization にアプリケーションを利用してもらうことができる。
- [短時間有効なトークン](/apps/differences-between-apps/#token-based-identification)によって、OAuth トークンよりもセキュアな認証方式を提供できる。 OAuthトークンは、OAuth Appを認可したユーザがトークンを取り消すまで、期限切れにならない。 GitHub Appsは素早く期限切れになるトークンを使用し、侵害されたトークンが利用される時間枠を小さくできる。
- [ビルトインの集中型 Webhook](/apps/differences-between-apps/#webhooks) は、アプリケーションでアクセスできるすべてのリポジトリと Organization に対するイベントを受信する。 逆に、OAuth AppはユーザがアクセスできるそれぞれのリポジトリとOrganizationに対してwebhookを設定する必要がある。
- [ボット アカウント](/apps/differences-between-apps/#machine-vs-bot-accounts)は {% data variables.product.product_name %} のシートを消費せず、最初にアプリケーションをインストールしたユーザーが Organization を離れてもインストールされたままにしておける。
- OAuth のビルトイン サポートは、[ユーザーからサーバーへのエンドポイント](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)を使用して、GitHub App でも利用できる。
- ボット アカウント専用の [API レート制限](/apps/building-github-apps/understanding-rate-limits-for-github-apps/)は、統合に合わせてスケーリングされる。
- リポジトリの所有者は、Organization のリポジトリに [GitHub Apps をインストール](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps)できる。 GitHub Appの設定にOrganizationのリソースをリクエストする権限があれば、Organizaitionのオーナーはそのインストールを承認しなければならない。
- [Octokit ライブラリ](/rest/overview/libraries) や [Probot](https://probot.github.io/) のような他のフレームワークを通じてオープン ソース コミュニティのサポートがある。
- GitHub Appを構築するインテグレーターは、APIへの早期アクセスを採用する機会がある。

## OAuth AppからGitHub Appへの変換

以下のガイドラインは、{% ifversion fpt or ghec %}GitHub Marketplace にリストされている、あるいはされていない{% endif %}登録済みの OAuth App があることを前提としています。 高いレベルでは、以下のステップに従う必要があります。

1. [GitHub App で利用できる API エンドポイントのレビュー](#review-the-available-api-endpoints-for-github-apps)
1. [API レート制限内に留まるための設計](#design-to-stay-within-api-rate-limits)
1. [新しい GitHub アプリの登録](#register-a-new-github-app)
1. [アプリケーションに必要な権限の決定](#determine-the-permissions-your-app-requires)
1. [Webhook のサブスクライブ](#subscribe-to-webhooks)
1. [様々な認証方法の理解](#understand-the-different-methods-of-authentication)
1. [リポジトリに GitHub App をインストールするようにユーザーに指示](#direct-users-to-install-your-github-app-on-repositories)
1. [不必要なリポジトリ フックの削除](#remove-any-unnecessary-repository-hooks)
1. [OAuth App へのアクセスの取り消しをユーザーに促す](#encourage-users-to-revoke-access-to-your-oauth-app)
1. [OAuth App の削除](#delete-the-oauth-app)

### GitHub Appで利用できるAPIエンドポイントのレビュー

[REST API](/rest) エンドポイントと [GraphQL](/graphql) クエリの大部分は、今日 GitHub App から利用できますが、まだいくつかのエンドポイントは有効にする過程にあります。 [利用可能な REST エンドポイント](/rest/overview/endpoints-available-for-github-apps)をレビューして、必要なエンドポイントが GitHub App と互換性があることを確認してください。 GitHub Appで利用できるAPIエンドポイントの中には、ユーザの代わりにアプリケーションが動作できるようにするものがあることに注意してください。 GitHub App がユーザーとして認証されるようにするエンドポイントのリストについては、「[ユーザーからサーバーへのリクエスト](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)」を参照してください。

必要なAPIエンドポイントのリストのレビューは、できるだけ早く行うことをおすすめします。 まだ{% data variables.product.prodname_github_apps %}から利用できないエンドポイントで必要なものがある場合は、サポートにお知らせください。

### APIレート制限内に留まるための設計

GitHub App では[レート制限に対するスライディング ルール](/apps/building-github-apps/understanding-rate-limits-for-github-apps/)を利用します。これは、Organization 中のリポジトリとユーザー数に基づいて増加できます。 GitHub App では [GraphQL API](/graphql) を使用することで、[条件付きリクエスト](/rest/overview/resources-in-the-rest-api#conditional-requests)または統合リクエストを利用することもできます。

### 新しいGitHub Appの登録

GitHub App へ切り替えることを決めたら、[新しい GitHub App を作成](/apps/building-github-apps/)しなければなりません。

### アプリケーションが必要とする権限の決定

GitHub Appを登録する際には、アプリケーションのコードが使用する各エンドポイントが必要とする権限を選択しなければなりません。 GitHub App で利用できる各エンドポイントに必要な権限のリストについては、「[GitHub App の権限](/rest/reference/permissions-required-for-github-apps)」を参照してください。

GitHub App の設定で、アプリケーションがそれぞれの権限の種類について `No Access`、`Read-only`、または`Read & Write` アクセスを必要とするかを指定できます。 詳細な権限を使用することで、アプリケーションは必要なデータのサブセットにターゲットを絞ってアクセスできるようになります。 必要な機能を提供する、可能な限り最小の権限セットを指定することをおすすめします。

### webhookのサブスクライブ

新しいGitHub Appを作成し、その権限を選択したら、サブスクライブさせたいwebhookイベントを選択できます。 Webhook をサブスクライブする方法を学ぶには、「[GitHub App の権限を編集する](/apps/managing-github-apps/editing-a-github-app-s-permissions/)」を参照してください。

### 様々な認証方法の理解

GitHub Appは、短時間で期限切れとなるトークンベースの認証を主に利用し、期限切れにならないOAuthトークンよりも高いセキュリティを提供します。 利用可能な様々な認証方法と、それらをいつ使う必要があるかを理解しておくことが重要です。

* **JSON Web トークン (JWT)** は、[GitHub App として認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)されます。 たとえば、**JWT** で認証を受けてアプリケーションのインストールの詳細をフェッチしたり、**JWT** を **インストール アクセス トークン** と交換したりできます。
* **インストール アクセス トークン** は、[GitHub App の特定のインストールとして認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)されます (これはサーバーからサーバーへのリクエストとも呼ばれます)。 たとえば、**インストール アクセス トークン** で認証を受けて、Issue をオープンしたり、Pull Request にフィードバックを提供したりできます。
* **OAuth アクセス トークン** は、[GitHub App のユーザーとして認証](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)されます (これはユーザーからサーバーへのリクエストとも呼ばれます)。 たとえば、GitHub Appがユーザのアイデンティティを検証したり、ユーザの代わりに振る舞わなければならない場合に、OAuthアクセストークンを使ってユーザとして認証を受けることができます。

最も一般的なシナリオは、**インストール アクセス トークン** を使って特定のインストールとして認証を受けることです。

### リポジトリにGitHub Appをインストールするようにユーザに指示

OAuth AppからGitHub Appへの移行をしたら、GitHub Appがインストールできるようになったことをユーザに知らせなければなりません。 たとえば、アプリケーション中の行動喚起のバナーに、GitHub Appのインストールリンクを含めることができます。 移行を容易にするために、GitHub Appのインストールフローを通じて存在する、ユーザもしくはOrganizationアカウントを特定するクエリパラメータを使い、OAuth Appがアクセスできた任意のリポジトリを事前選択しておけます。 こうすることで、ユーザはすでにアクセスできるリポジトリにGitHub Appを容易にインストールできるようになります。

#### クエリ パラメーター

| 名前 | 説明 |
|------|-------------|
| `suggested_target_id` | **必須**: GitHub App をインストールしようとしているユーザーまたは Organization の ID。 |
| `repository_ids[]` | リポジトリIDの配列。 省略された場合、すべてのリポジトリが選択されます。 事前選択できるリポジトリ数は、最大で100です。 |

#### Example URL (URL の例)
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

`YOUR_APP_NAME` を GitHub App の名前で、`ID_OF_USER_OR_ORG` をターゲット ユーザーまたは Organization の ID で置き換え、最大で 100 個のリポジトリ ID (`REPO_A_ID` と `REPO_B_ID`) を含めなければなりません。 OAuth App でアクセスできるリポジトリのリストを取得するには、[認証されたユーザーのためのリポジトリのリスト](/rest/reference/repos#list-repositories-for-the-authenticated-user)と [Organization のリポジトリのリスト](/rest/reference/repos#list-organization-repositories)のエンドポイントを使用します。

### 不必要なリポジトリフックの削除

GitHub Appがリポジトリにインストールされたら、従来のOAuth Appによって作成された不要なwebhookを削除する必要があります。 どちらのアプリケーションも同じリポジトリにインストールされていると、ユーザにとっては機能が重複するかもしれません。 Webhook を削除するには、`repositories_added` アクションの [`installation_repositories`Webhook](/webhooks/event-payloads/#installation_repositories) を待ち受け、それらのリポジトリ上に OAuth App によって作成された[リポジトリ Webhook を削除](/rest/reference/webhooks#delete-a-repository-webhook)できます。

### OAuth Appへのアクセスの取り消しをユーザに促す

GitHub Appのインストールベースが増大してきたら、ユーザに従来のOAuthインテグレーションへのアクセスを取り消すように促すことを検討してください。 詳細については、「[Authorizing OAuth Apps (OAuth アプリの認可)](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)」を参照してください。

### OAuth Appの削除

OAuth App認証情報の不正利用を避けるには、OAuth Appの削除を検討してください。 このアクションは、OAuth Appの残りの権限もすべて取り消します。 詳細については、「[OAuth App の削除](/developers/apps/managing-oauth-apps/deleting-an-oauth-app)」を参照してください。
