---
title: GitHub アプリと OAuth アプリとの微妙な違い
intro: '{% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} の違いについて知っておくと、どちらのアプリケーションを作成するかを決めるために役立ちます。 {% data variables.product.prodname_oauth_app %} は GitHub ユーザとして振る舞う一方、{% data variables.product.prodname_github_app %} は Organization または Organization 内のリポジトリにインストールされた場合、自らのアイデンティティを用います。'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - OAuth Apps
shortTitle: GitHub Apps & OAuth Apps
ms.openlocfilehash: d70304b71de11a4a24f2acc6c2545e78cbd19b0c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008711'
---
## GitHub App のインストール、OAuth App の承認が可能なユーザ

GitHub App は、個人アカウントおよび自分が所有する Organization にインストールできます。 リポジトリの管理者権限がある場合には、GitHub App を Organization のアカウントにインストールできます。 GitHub App がリポジトリにインストールされていて、Organization の権限を要求している場合、Organization のオーナーはアプリケーションを承認する必要があります。

{% data reusables.apps.app_manager_role %}

一方、ユーザーが OAuth アプリを 認可 すると、認証されたユーザーとして動作する機能がアプリに提供されます。 たとえば、認証されたユーザに対するすべての通知を検索する OAuth App を承認できます。 OAuth App の権限はいつでも取り消すことができます。

{% ifversion limit-app-access-requests %} {% data reusables.organizations.restricted-app-access-requests %}{% endif %}

{% data reusables.apps.deletes_ssh_keys %}

| GitHub アプリ | OAuth アプリの比較 |
| ----- | ------ |
| Organization に GitHub App をインストールするには、Organization のオーナーであるか管理者権限を所有している必要があります。 GitHub App がリポジトリにインストールされていて、Organization の権限を要求している場合、Organization のオーナーはアプリケーションを承認する必要があります。 | OAuth App を認証し、リソースへのアクセス権限を与えることができます。 |
| GitHub App は個人のリポジトリにインストールできます。 | OAuth App を認証し、リソースへのアクセス権限を与えることができます。|
| GitHub App をアンインストールしてアクセス権限を削除するには、Organization のオーナーであるか、個人リポジトリの所有者であるか、リポジトリの管理者権限を所有している必要があります。 | OAuth アクセストークンを削除して、アクセス権限を削除することができます。 |
| GitHub App のインストールを要求するには、Organization のオーナーであるかリポジトリの管理者権限を所有している必要があります。 | Organization のアプリケーションポリシーが有効である場合、その Organization の任意のメンバーが OAuth App のインストールを要求できます。 Organization のオーナーは、その要求を承認または拒否する必要があります。 |

## GitHub App と OAuth App がアクセスできるリソース

アカウントの所有者は、別のアカウントにアクセス権限を与えることなく {% data variables.product.prodname_github_app %} を使用できます。 たとえば、サードパーティ製のビルドサービスを従業員の Organization にインストールしつつ、そのビルドサービスに個人アカウントにあるリポジトリへのアクセスを許可しないことができます。 GitHub App をセットアップした人が Organization から離れても、その GitHub App はインストールされたままになります。

_認可された_ OAuth アプリは、ユーザーまたは組織の所有者がアクセス可能なすべてのリソースにアクセスできます。

| GitHub アプリ | OAuth アプリの比較 |
| ----- | ------ |
| GitHub アプリをインスールすると、アプリはユーザーまたは組織アカウントの選択されたリポジトリにアクセスできるようになります。 | OAuth アプリを認可すると、アプリはユーザーがアクセスできるリソースにアクセスできるようになります。 たとえば、リポジトリにアクセスできます。 |
| 管理者がインストールからリポジトリを削除した場合、GitHub App のインストールトークンはリソースにアクセスできなくなります。 | リポジトリへの書き込みアクセスを失ったときなど、ユーザがアクセスを失ったとき、OAuth アクセストークンはリソースにアクセスできなくなります。 |
| インストール アクセス トークンは、アプリケーションの作成者が選択したアクセス許可を所有する、指定されたリポジトリに制限されます。 | OAuth アクセス トークンは、スコープで制限されます。 |
| GitHub App は、リポジトリの実際のコンテンツにアクセスすることなく、Issue やプルリクエストへの個別のアクセスを要求できます。 | OAuth アプリでイシュー、pull request、リポジトリが所有するリソースにアクセスするには、`repo` スコープを要求する必要があります。 |
| GitHub アプリは組織のアプリケーション ポリシーの対象ではありません。 GitHub アプリは組織の所有者が許可したリポジトリにのみアクセスできます。 | 組織のアプリケーション ポリシーがアクティブな場合、組織の所有者のみが OAuth アプリのインストールを認可できます。 OAuth アプリがインストールされている場合、アプリは承認された組織内で組織の所有者が所持しているトークンで表示できるすべてのものにアクセスできます。 |
| GitHub App は、インストールが変更または削除されると webhook イベントを受信します。 これにより、アプリケーションの作者は、GitHub App の Organization のリソースに対するアクセス権が変更されたことがわかります。 | OAuth App は、付与したユーザのアクセス権が変更されると、Organization やリポジトリへのアクセス権を失います。 OAuth App は、リソースへのアクセス権を失った際にも通知を行いません。 |

## トークンベースの識別

{% note %}

**注:** GitHub アプリでは、ユーザー ベースのトークンを使用することもできます。 詳細については、「[GitHub アプリのユーザーの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

{% endnote %}

| GitHub アプリ | OAuth アプリの比較 |
| ----- | ----------- |
| GitHub App は、JSON Web トークンフォーマットのアウトオブバンドで秘密鍵を使用することにより、インストールアクセストークンをリクエストできます。 | OAuth App は、Web リクエストを通じてリダイレクトされた後にリクエストトークンをアクセストークンに交換できます。 |
| インストール トークンは、アプリを GitHub アプリのボット (@jenkins-bot など) として識別します。 | アクセス トークンは、アプリをそのアプリにトークンを付与したユーザー (@octocat など) として識別します。 |
| インストールトークンは、事前に定義された時間 (現在は 1 時間) が経過すると期限切れになります。 | OAuth トークンは、顧客によって取り消されるまで有効となります。 |
| 組織またはリポジトリにインストールされた {% data variables.product.prodname_github_apps %}は、サーバー間要求のレート制限の対象となります。 詳細については、「[{% data variables.product.prodname_github_apps %}のレート制限](/developers/apps/building-github-apps/rate-limits-for-github-apps)」を参照してください。 | OAuth トークンでは、ユーザーのレート制限として、1 時間あたり {% ifversion fpt or ghec or ghes %}5,000{% elsif ghae %}15,000{% endif %} 個の要求が使用されます。 |
| レート制限の増加は、GitHub アプリ レベル (すべてのインストールに影響) と個々のインストール レベルの両方で許可できます。 | レート制限の増加は、OAuth アプリごとに許可されます。 その OAuth アプリに許可されたトークンはすべて、制限が増加します。 |
| {% data variables.product.prodname_github_apps %}では、ユーザーの代わりに認証を行うことができます。これは、ユーザーからサーバーへの要求と呼ばれます。 認可するフローは OAuth アプリの認可フローと同じです。 ユーザーからサーバーへのトークンは期限切れになることがあり、更新トークンで更新できます。 詳細については、「[ユーザーからサーバーへのアクセス トークンの更新](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)」および「[GitHub アプリのユーザーの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。 | {% data variables.product.prodname_oauth_apps %} により使用される OAuth フローでは、ユーザの代わりに {% data variables.product.prodname_oauth_app %} を承認します。 これは、{% data variables.product.prodname_github_app %} ユーザからサーバーに対する承認で用いられるフローと同じです。 |

## リソースに対する権限レベルのリクエスト

OAuth App と異なり、GitHub App には必要なアクセス権のみをリクエストできる、ターゲットを絞った権限があります。 たとえば、継続的インテグレーション (CI) GitHub App は、リポジトリコンテンツへの読み取りアクセスと、ステータス API への書き込みアクセスをリクエストできます。 別の GitHub App では、コードへの読み取りおよび書き込みアクセスを持たせずに、Issue、ラベル、マイルストーンを管理させることが可能です。 OAuth アプリでは、詳細なアクセス許可は使用できません。

| Access | GitHub アプリ (`read` または `write` アクセス許可) | OAuth アプリの比較 |
| ------ | ----- | ----------- |
| **パブリック リポジトリへのアクセス** | パブリックリポジトリはインストール中に選択する必要があります。 | `public_repo` スコープ。 |
| **リポジトリ コード/コンテンツへのアクセス** | リポジトリコンテンツ | `repo` スコープ。 |
| **イシュー、ラベル、マイルストーンへのアクセス** | 発行 | `repo` スコープ。 |
| **pull request、ラベル、マイルストーンへのアクセス** | Pull Request | `repo` スコープ。 |
| **(CI ビルドの) コミットの状態へのアクセス** | コミットのステータス | `repo:status` スコープ。 |
| **デプロイおよびデプロイの状態へのアクセス** | デプロイメント | `repo_deployment` スコープ。 |
| **Webhook 経由によるイベントの受信** | GitHub App には、デフォルトで webhook が含まれています。 | `write:repo_hook` または `write:org_hook` スコープ。 |

## リポジトリの確認

| GitHub アプリ | OAuth アプリの比較 |
| ----- | ----------- |
| GitHub アプリでは `/installation/repositories` を参照して、インストール時にアクセスできるリポジトリを確認できます。 | OAuth アプリでは、アクセス可能なリポジトリの `/user/repos` (ユーザー ビューの場合) または`/orgs/:org/repos` (組織ビューの場合) を参照できます。 |
| GitHub App は、リポジトリがインストールから追加または削除されたときに webhook を受信します。 | OAuth App は、Organization 内で新しいリポジトリが作成されたときに通知用の Organization webhook を作成します。 |

## Webhooks

| GitHub アプリ | OAuth アプリの比較 |
| ----- | ----------- |
| デフォルトでは、GitHub App には webhook が 1 つあり、その webhook は、アクセス権のあるすべてのリポジトリにおいて、受信するよう設定されたイベントを受信します。 | OAuth App は、イベントを受信する必要がある各リポジトリに対し、リポジトリ webhook を作成するため webhook スコープをリクエストします。 |
| GitHub App は、Organization メンバーの権限で、特定の Organization レベルのイベントを受信します。 | OAuth App は、Organization レベルのイベントを受信する必要がある各 Organization に対し、Organization webhook を作成するため Organization webhook スコープをリクエストします。 |
| Webhook は、GitHub アプリがアンインストールされると自動的に無効になります。 | OAuth アプリのアクセス トークンが削除される場合、Webhook は自動的に無効にならず、それらを自動的にクリーンアップする方法はありません。 手動で行うようにユーザーに依頼する必要があります。|

## Git アクセス

| GitHub アプリ | OAuth アプリの比較 |
| ----- | ----------- |
| GitHub アプリはリポジトリの内容へのアクセス許可を要求し、インストール トークンを使用して、[HTTP ベースの Git](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation) 経由で認証を行います。 | OAuth アプリは `write:public_key` スコープを要求し、API 経由で[デプロイ キー](/rest/reference/deployments#create-a-deploy-key)を作成します。 その後、そのキーを使用して Git コマンドを実行できます。 |
| トークンは、HTTP パスワードとして使用されます。 | トークンは、HTTP ユーザ名として使用されます。 |

## マシンアカウントとボットアカウントの比較

マシン ユーザー アカウントは、GitHub のユーザー システムを使用して自動システムを分離する OAuth ベースの個人用アカウントです。

ボットアカウントは GitHub App 固有のもので、すべての GitHub App に組み込まれています。

| GitHub アプリ | OAuth アプリの比較 |
| ----- | ----------- |
| GitHub App ボットは {% data variables.product.prodname_enterprise %} シートを消費しません。 | マシンユーザアカウントは {% data variables.product.prodname_enterprise %} シートを消費します。 |
| GitHub App ボットにはパスワードが付与されないため、顧客は GitHub App に直接サインインできません。 | マシンユーザアカウントには、ユーザ名およびパスワードが付与されます。顧客はそれらを管理および保護します。 |
