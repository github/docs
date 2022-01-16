---
title: アプリケーションについて
intro: '{% data variables.product.prodname_dotcom %} API でインテグレーションを構築し、柔軟性を強化してワークフローの摩擦を軽減できます。{% ifversion fpt %}また、[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) で他のユーザとインテグレーションを共有することも可能です。{% endif %}'
redirect_from:
  - /apps/building-integrations/setting-up-a-new-integration/
  - /apps/building-integrations/
  - /apps/getting-started-with-building-apps/
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub Apps
---

{% data variables.product.prodname_dotcom %} のアプリケーションを使用すると、ワークフローを自動化し改善できます。 アプリケーションを構築して、ワークフローを改善できます。{% ifversion fpt %} また、[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) でアプリケーションを共有または販売することも可能です。 {% data variables.product.prodname_marketplace %} にアプリを掲載する方法については、「[GitHub Marketplace を使ってみる](/marketplace/getting-started/)」を参照してください。{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, but GitHub supports both {% data variables.product.prodname_oauth_apps %} and {% data variables.product.prodname_github_apps %}. アプリケーションのタイプ選択に関する情報については、「[GitHub App と OAuth App の違い](/developers/apps/differences-between-github-apps-and-oauth-apps)」を参照してください。

{% data reusables.apps.general-apps-restrictions %}

{% data variables.product.prodname_github_app %} を構築する手順については、「[はじめての {% data variables.product.prodname_github_app %} 構築](/apps/building-your-first-github-app)」を参照してください。

## {% data variables.product.prodname_github_apps %} について

{% data variables.product.prodname_github_apps %} は GitHub の中でも主役級の存在です。 {% data variables.product.prodname_github_app %} は独自で動作し、独自の ID を使用して API 経由で直接アクションを実行します。つまり、ボットやサービスアカウントを別途維持する必要がありません。

{% data variables.product.prodname_github_apps %} は、Organization やユーザアカウントに直接インストールでき、特定のリポジトリへのアクセス権を付与できます。 精細なアクセス権限が付いており、webhook が組み込まれています。 {% data variables.product.prodname_github_app %} をセットアップする際、アクセスさせるリポジトリを選択できます。 たとえば、`octocat` リポジトリ _のみ_ に IssueIssue を書き込む、`MyGitHub` というアプリケーションをセットアップできます。 {% data variables.product.prodname_github_app %} をインストールするには、Organization のオーナーであるか、リポジトリで管理者権限を持っている必要があります。

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} は、どこかにホストする必要があるアプリケーションです。 サーバーとホスティングに関するステップバイステップガイドについては、[はじめての {% data variables.product.prodname_github_app %} 構築](/apps/building-your-first-github-app)」を参照してください。

ワークフローを改善するため、複数のスクリプトまたはアプリケーション全体を含む {% data variables.product.prodname_github_app %} を作成し、それをその他の数多くのツールと接続できます。 たとえば、{% data variables.product.prodname_github_apps %} を GitHub、Slack、その他の社内アプリケーション、電子メールプログラム、その他の API などに接続できます。

{% data variables.product.prodname_github_apps %} を作成する際は、以下に気を付けてください。

{% ifversion fpt %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* {% data variables.product.prodname_github_app %} は、ユーザと独立したアクションを実行する必要があります (アプリケーションが [user-to-server](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) トークンを使用する場合を除きます)。 {% data reusables.apps.expiring_user_authorization_tokens %}

* {% data variables.product.prodname_github_app %} は、必ず特定のリポジトリと統合するようにしてください。
* {% data variables.product.prodname_github_app %} は個人アカウントまたは Organization に接続する必要があります。
* ユーザができる全てのことを {% data variables.product.prodname_github_app %} が知り、行えるとは思わないでください。
* 単に「GitHub でログイン」するサービスが必要な場合は、{% data variables.product.prodname_github_app %} を使用しないでください。 [ユーザ識別フロー](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)でユーザをログインさせ、_かつ_他のことを行う場合は、{% data variables.product.prodname_github_app %} を使用できます。
* GitHub ユーザとして振る舞い、ユーザが実行できることを全て実行したい_だけ_の場合は、{% data variables.product.prodname_github_app %} を構築しないでください。{% ifversion fpt %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

{% data variables.product.prodname_github_apps %} アプリケーションの開発を始めるには、「[{% data variables.product.prodname_github_app %} を作成する](/apps/building-github-apps/creating-a-github-app/)」から取りかかってください。{% ifversion fpt %}構成済みの {% data variables.product.prodname_github_apps %} を作成できる {% data variables.product.prodname_github_app %} マニフェストの使い方については、「[マニフェストから {% data variables.product.prodname_github_apps %} を作成する](/apps/building-github-apps/creating-github-apps-from-a-manifest/)」を参照してください。{% endif %}

## About {% data variables.product.prodname_oauth_apps %}

OAuth2 は、外部アプリケーションがパスワードにアクセスすることなく、ユーザの {% data variables.product.prodname_dotcom %} アカウントの個人情報にアクセスする承認を要求できるようにするプロトコルです。 これは Basic 認証よりも好ましい方法です。なぜなら、トークンは特定の種類のデータに限定でき、ユーザがいつでも取り消すことができるからです。

{% data reusables.apps.deletes_ssh_keys %}

{% data variables.product.prodname_oauth_app %} は、アプリケーションにアクセス権を付与するユーザを認証するため、アイデンティティプロバイダとして {% data variables.product.prodname_dotcom %} を使用します。 つまり、ユーザが {% data variables.product.prodname_oauth_app %} にアクセス権を付与すると、アカウントでアクセスできる _すべての_ リポジトリ、およびサードパーティのアクセスをブロックしていないあらゆる Organization に対してアクセスを許可することになります。

単純なスクリプトで処理できるよりも複雑なプロセスを作成する場合、{% data variables.product.prodname_oauth_app %} を構築するのは良い選択肢です。 Note that {% data variables.product.prodname_oauth_apps %} are applications that need to be hosted somewhere.

Keep these ideas in mind when creating {% data variables.product.prodname_oauth_apps %}:

{% ifversion fpt %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* {% data variables.product.prodname_oauth_app %} は、{% data variables.product.prodname_dotcom %} 全体にわたって、常に認証された {% data variables.product.prodname_dotcom %} ユーザとして振る舞う必要があります (たとえば、ユーザ通知を行う場合など)。
* 認証されたユーザに対して「{% data variables.product.prodname_dotcom %} でログイン」を有効化することにより、{% data variables.product.prodname_oauth_app %} をアイデンティティプロバイダとして使用できます。
* 単一のリポジトリで動作するアプリケーションが必要な場合、{% data variables.product.prodname_oauth_app %} を構築しないでください。 With the `repo` OAuth scope, {% data variables.product.prodname_oauth_apps %} can act on _all_ of the authenticated user's repositories.
* Team や企業を代理するアプリケーションとして {% data variables.product.prodname_oauth_app %} を構築しないでください。 {% data variables.product.prodname_oauth_apps %} authenticate as a single user, so if one person creates an {% data variables.product.prodname_oauth_app %} for a company to use, and then they leave the company, no one else will have access to it.{% ifversion fpt %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

For more on {% data variables.product.prodname_oauth_apps %}, see "[Creating an {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/)" and "[Registering your app](/rest/guides/basics-of-authentication#registering-your-app)."

## 個人アクセストークン

[個人アクセストークン](/articles/creating-a-personal-access-token-for-the-command-line/)は、権限を[スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)で特定できる点において、[OAuth トークン](/apps/building-oauth-apps/authorizing-oauth-apps/)と機能が似ている文字列です。 また、個人アクセストークンはパスワードとも似ています。ただし、個人アクセストークンは複数所有でき、それぞれのアクセス権をいつでも取り消すことができます。

たとえば、個人アクセストークンにリポジトリへの書き込みをできるように設定できます。 そして、リポジトリで[Issue を作成する](/rest/reference/issues#create-an-issue) cURL コマンドを実行するかスクリプトを記述する場合、個人アクセストークンを渡して認証します。 個人アクセストークンを環境変数として保存することで、使用のたびに入力することを避けることができます。

個人アクセストークンを使用する際は、以下に気を付けてください。

* トークンは自分自身のみを表すものとして使用してください。
* 1 回限りの cURL リクエストを実行できます。
* 個人用のスクリプトを実行できます。
* Team や会社全体が使用するスクリプトは設定しないでください。
* Don't set up a shared user account to act as a bot user.{% ifversion fpt or ghes > 3.2 or ghae-issue-4374 %}
* Do set an expiration for your personal access tokens, to help keep your information secure.{% endif %}

## 構築すべきインテグレーションを決定する

インテグレーションの作成に取りかかる前に、{% data variables.product.prodname_dotcom %} API を使用したアクセス、認証、対話に最善の方法を見極める必要があります。 The following image offers some questions to ask yourself when deciding whether to use personal access tokens, {% data variables.product.prodname_github_apps %}, or {% data variables.product.prodname_oauth_apps %} for your integration.

![アプリケーションの質問フローの紹介](/assets/images/intro-to-apps-flow.png)

インテグレーションがどう振る舞うべきか、何にアクセスできるべきかについては、以下の質問を検討してください。

* インテグレーションは自分自身としてのみ振る舞うのか、それともアプリケーションのように振る舞うのか?
* 独自のエンティティとして、自分から独立して動作させるのか?
* 自分がアクセスできるもの全てにアクセスするのか、それともアクセスを制限するのか?
* 単純か、それとも複雑か? たとえば、個人アクセストークンは単純なスクリプトや cURL に適し、{% data variables.product.prodname_oauth_app %} はより複雑なスクリプトを処理できます。

## サポートのリクエスト

{% data reusables.support.help_resources %}
