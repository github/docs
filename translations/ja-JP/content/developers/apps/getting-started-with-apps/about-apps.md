---
title: アプリケーションについて
intro: '{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API でインテグレーションを構築し、柔軟性を強化して自分のワークフローの摩擦を軽減できます。{% ifversion fpt or ghec %}また、[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) で他のユーザーとインテグレーションを共有することも可能です。{% endif %}'
redirect_from:
  - /apps/building-integrationssetting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: a66af14f6047b2aff435ac4ac8dc83d7a1181e92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107358'
---
{% data variables.product.prodname_dotcom %} のアプリケーションを使用すると、ワークフローを自動化し改善できます。 アプリをビルドしてワークフローを改善できます。{% ifversion fpt or ghec %} また、[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) でアプリを共有または販売することもできます。 {% data variables.product.prodname_marketplace %} にアプリを掲載する方法については、[GitHub Marketplace の概要](/marketplace/getting-started/)を参照してください。{% endif %}

{% data reusables.marketplace.github_apps_preferred %}。ただし、GitHub は {% data variables.product.prodname_oauth_apps %} と {% data variables.product.prodname_github_apps %} の両方をサポートしています。 アプリの種類の選択については、「[GitHub App と OAuth App の違い](/developers/apps/differences-between-github-apps-and-oauth-apps)」を参照してください。

{% data reusables.apps.general-apps-restrictions %}

{% data variables.product.prodname_github_app %} をビルドする手順については、「[最初の {% data variables.product.prodname_github_app %} のビルド](/apps/building-your-first-github-app)」を参照してください。

## {% data variables.product.prodname_github_apps %} について

{% data variables.product.prodname_github_apps %} は GitHub の中でも主役級の存在です。 {% data variables.product.prodname_github_app %} は独自で動作し、独自の ID を使用して API 経由で直接アクションを実行します。つまり、ボットやサービスアカウントを別途維持する必要がありません。

{% data variables.product.prodname_github_apps %} は、Organization や個人アカウントに直接インストールでき、特定のリポジトリへのアクセス権を付与できます。 精細なアクセス権限が付いており、webhook が組み込まれています。 {% data variables.product.prodname_github_app %} をセットアップする際、アクセスさせるリポジトリを選択できます。 たとえば、リポジトリに問題を書き込み、リポジトリ`MyGitHub`のみに`octocat`_書_ き込むアプリを`octocat`設定できます。 {% data variables.product.prodname_github_app %} をインストールするには、Organization のオーナーであるか、リポジトリで管理者権限を持っている必要があります。

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} は、どこかにホストする必要があるアプリケーションです。 サーバーとホスティングに関する詳しい手順については、「[最初の {% data variables.product.prodname_github_app %} のビルド](/apps/building-your-first-github-app)」をご覧ください。

ワークフローを改善するため、複数のスクリプトまたはアプリケーション全体を含む {% data variables.product.prodname_github_app %} を作成し、それをその他の数多くのツールと接続できます。 たとえば、{% data variables.product.prodname_github_apps %} を GitHub、Slack、その他の社内アプリケーション、電子メールプログラム、その他の API などに接続できます。

{% data variables.product.prodname_github_apps %} を作成する際は、以下に気を付けてください。

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* {% data variables.product.prodname_github_app %} は、(アプリが[ユーザーからサーバーへの](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests)トークンを使用している場合を除き) ユーザーに依存しないアクションを実行する必要があります。 {% data reusables.apps.expiring_user_authorization_tokens %}

* {% data variables.product.prodname_github_app %} は、必ず特定のリポジトリと統合するようにしてください。
* {% data variables.product.prodname_github_app %} は個人アカウントまたは Organization に接続する必要があります。
* ユーザができる全てのことを {% data variables.product.prodname_github_app %} が知り、行えるとは思わないでください。
* 単に「GitHub でログイン」するサービスが必要な場合は、{% data variables.product.prodname_github_app %} を使用しないでください。 ただし、{% data variables.product.prodname_github_app %} では [、ユーザー識別フロー](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) を使用してユーザーをログイン _させ、_ 他の操作を実行できます。
* GitHub ユーザーとして動作し、ユーザーが実行できることをすべて実行したい _だけ_ の場合は、{% data variables.product.prodname_github_app %} をビルドしないでください。{% ifversion fpt or ghec %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

{% data variables.product.prodname_github_apps %} アプリケーションの開発を始めるには、「[{% data variables.product.prodname_github_app %} の作成](/apps/building-github-apps/creating-a-github-app/)」から取りかかってください。{% ifversion fpt or ghec %}構成済みの {% data variables.product.prodname_github_apps %} を作成できる {% data variables.product.prodname_github_app %} マニフェストの使い方については、「[マニフェストからの {% data variables.product.prodname_github_apps %} の作成](/apps/building-github-apps/creating-github-apps-from-a-manifest/)」を参照してください。{% endif %}

## {% data variables.product.prodname_oauth_apps %} について

OAuth2 は、外部アプリケーションがパスワードにアクセスすることなく、ユーザの {% data variables.product.prodname_dotcom %} アカウントの個人情報にアクセスする承認を要求できるようにするプロトコルです。 これは Basic 認証よりも好ましい方法です。なぜなら、トークンは特定の種類のデータに限定でき、ユーザがいつでも取り消すことができるからです。

{% data reusables.apps.deletes_ssh_keys %}

{% data variables.product.prodname_oauth_app %} は、アプリケーションにアクセス権を付与するユーザを認証するため、アイデンティティプロバイダとして {% data variables.product.prodname_dotcom %} を使用します。 つまり、ユーザーが {% data variables.product.prodname_oauth_app %} アクセスを許可すると、ユーザーは自分のアカウントでアクセスできる _すべての_ リポジトリにアクセス許可を付与します。また、サードパーティのアクセスをブロックしていない組織にもアクセス許可を付与します。

単純なスクリプトで処理できるよりも複雑なプロセスを作成する場合、{% data variables.product.prodname_oauth_app %} を構築するのは良い選択肢です。 {% data variables.product.prodname_oauth_apps %} は、どこかにホストする必要があるアプリケーションであることに注意してください。

{% data variables.product.prodname_oauth_apps %} を作成する際は、以下に気を付けてください。

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* {% data variables.product.prodname_oauth_app %} は、{% data variables.product.prodname_dotcom %} 全体にわたって、常に認証された {% data variables.product.prodname_dotcom %} ユーザとして振る舞う必要があります (たとえば、ユーザ通知を行う場合など)。
* 認証されたユーザに対して「{% data variables.product.prodname_dotcom %} でログイン」を有効化することにより、{% data variables.product.prodname_oauth_app %} をアイデンティティプロバイダとして使用できます。
* 単一のリポジトリで動作するアプリケーションが必要な場合、{% data variables.product.prodname_oauth_app %} を構築しないでください。 OAuth スコープを `repo` 使用すると、{% data variables.product.prodname_oauth_apps %} は、認証 _されたすべての_ ユーザーのリポジトリで動作できます。
* Team や企業を代理するアプリケーションとして {% data variables.product.prodname_oauth_app %} を構築しないでください。 {% data variables.product.prodname_oauth_apps %} は単一のユーザとして認証を行うので、ある人が {% data variables.product.prodname_oauth_app %} を会社が使用するものとして作成し、その人が会社を辞めた場合は、他の人がアクセスできなくなります。{% ifversion fpt or ghec %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

{% data variables.product.prodname_oauth_apps %} について詳しくは、「[{% data variables.product.prodname_oauth_app %} の作成](/apps/building-oauth-apps/creating-an-oauth-app/)」および「[アプリの登録](/rest/guides/basics-of-authentication#registering-your-app)」をご覧ください。

## {% data variables.product.pat_generic_caps %}

[{% data variables.product.pat_generic %}](/articles/creating-a-personal-access-token-for-the-command-line/)は、[スコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)を使用してそのアクセス許可を指定できる点で [OAuth トークン](/apps/building-oauth-apps/authorizing-oauth-apps/)と同様に機能する文字の文字列です。 また、{% data variables.product.pat_generic %}はパスワードとも似ています。ただし、個人アクセストークンは複数所有でき、それぞれのアクセス権をいつでも取り消すことができます。

たとえば、{% data variables.product.pat_generic %}にリポジトリへの書き込みをできるように設定できます。 そして、リポジトリで [issue を作成する](/rest/reference/issues#create-an-issue) cURL コマンドを実行するかスクリプトを記述する場合、{% data variables.product.pat_generic %}を渡して認証します。 {% data variables.product.pat_generic %}を環境変数として保存することで、使用のたびに入力することを避けることができます。

{% data variables.product.pat_generic %}を使用する場合は、次の点に注意してください。

* トークンは自分自身のみを表すものとして使用してください。
* 1 回限りの cURL リクエストを実行できます。
* 個人用のスクリプトを実行できます。
* Team や会社全体が使用するスクリプトは設定しないでください。
* ボット ユーザーとして動作する共有ユーザー アカウントは設定しないでください。
* トークンに必要な最小限の特権を付与します。
* 情報をセキュリティで保護するために、{% data variables.product.pat_generic %}の有効期限を設定します。

## 構築すべきインテグレーションを決定する

インテグレーションの作成に取りかかる前に、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API を使用したアクセス、認証、対話に最善の方法を見極める必要があります。 統合で{% data variables.product.pat_generic %}、{% data variables.product.prodname_github_apps %}、{% data variables.product.prodname_oauth_apps %} のどれを使用するかを決める際の考慮事項を以下の画像に示しています。

![アプリケーションの質問フローの紹介](/assets/images/intro-to-apps-flow.png)

インテグレーションがどう振る舞うべきか、何にアクセスできるべきかについては、以下の質問を検討してください。

* インテグレーションは自分自身としてのみ振る舞うのか、それともアプリケーションのように振る舞うのか?
* 独自のエンティティとして、自分から独立して動作させるのか?
* 自分がアクセスできるもの全てにアクセスするのか、それともアクセスを制限するのか?
* 単純か、それとも複雑か? たとえば、{% data variables.product.pat_generic %}は単純なスクリプトや cURL に適し、{% data variables.product.prodname_oauth_app %} はより複雑なスクリプトを処理できます。

## サポートのリクエスト

{% data reusables.support.help_resources %}
