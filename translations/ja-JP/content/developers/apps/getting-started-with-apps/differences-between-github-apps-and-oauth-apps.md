---
title: GitHub App と OAuth App の違い
intro: '{% data variables.product.prodname_github_app %} と {% data variables.product.prodname_oauth_app %} の違いについて知っておくと、どちらのアプリケーションを作成するかを決めるために役立ちます。 {% data variables.product.prodname_oauth_app %} は GitHub ユーザとして振る舞う一方、{% data variables.product.prodname_github_app %} は Organization または Organization 内のリポジトリにインストールされた場合、自らのアイデンティティを用います。'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications/
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type/
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
  - OAuth Apps
---
### GitHub App のインストール、OAuth App の承認が可能なユーザ

GitHub App は、個人アカウントおよび自分が所有する Organization にインストールできます。 リポジトリの管理者権限がある場合には、GitHub App を Organization のアカウントにインストールできます。 GitHub App がリポジトリにインストールされていて、Organization の権限を要求している場合、Organization のオーナーはアプリケーションを承認する必要があります。

{% data reusables.apps.app_manager_role %}

それに対し、ユーザは OAuth App を_承認_します。これにより、アプリケーションは認証されたユーザとして振る舞うことができます。 たとえば、認証されたユーザに対するすべての通知を検索する OAuth App を承認できます。 OAuth App の権限はいつでも取り消すことができます。

{% data reusables.apps.deletes_ssh_keys %}

| GitHub Apps                                                                                                                                                                       | OAuth App                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Organization に GitHub App をインストールするには、Organization のオーナーであるか管理者権限を所有している必要があります。 GitHub App がリポジトリにインストールされていて、Organization の権限を要求している場合、Organization のオーナーはアプリケーションを承認する必要があります。 | OAuth App を認証し、リソースへのアクセス権限を与えることができます。                                                                                           |
| GitHub App は個人のリポジトリにインストールできます。                                                                                                                                                  | OAuth App を認証し、リソースへのアクセス権限を与えることができます。                                                                                           |
| GitHub App をアンインストールしてアクセス権限を削除するには、Organization のオーナーであるか、個人リポジトリの所有者であるか、リポジトリの管理者権限を所有している必要があります。                                                                             | OAuth アクセストークンを削除して、アクセス権限を削除することができます。                                                                                           |
| GitHub App のインストールを要求するには、Organization のオーナーであるかリポジトリの管理者権限を所有している必要があります。                                                                                                        | Organization のアプリケーションポリシーが有効である場合、その Organization の任意のメンバーが OAuth App のインストールを要求できます。 Organization のオーナーは、その要求を承認または拒否する必要があります。 |

### GitHub App と OAuth App がアクセスできるリソース

アカウントの所有者は、別のアカウントにアクセス権限を与えることなく {% data variables.product.prodname_github_app %} を使用できます。 たとえば、サードパーティ製のビルドサービスを従業員の Organization にインストールしつつ、そのビルドサービスに個人アカウントにあるリポジトリへのアクセスを許可しないことができます。 GitHub App をセットアップした人が Organization から離れても、その GitHub App はインストールされたままになります。

_承認された_ OAuth App は、 ユーザまたは Organization のオーナーがアクセス可能なすべてのリソースにアクセスできます。

| GitHub Apps                                                                                                                    | OAuth App                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub App をインスールすると、アプリケーションはユーザまたは Organization アカウントの指定したリポジトリにアクセス可能になります。                                                 | OAuth App を承認すると、アプリケーションはユーザがアクセス可能なリソースにアクセスできます。 （例: リポジトリ）                                                                                                                        |
| 管理者がインストールからリポジトリを削除した場合、GitHub App のインストールトークンはリソースにアクセスできなくなります。                                                             | リポジトリへの書き込みアクセスを失ったときなど、ユーザがアクセスを失ったとき、OAuth アクセストークンはリソースにアクセスできなくなります。                                                                                                              |
| インストールアクセストークンは、アプリケーションの作成者が指定したリポジトリの、選択した権限に制限されます。                                                                         | OAuth アクセストークンは、スコープにより制限されます。                                                                                                                                                        |
| GitHub App は、リポジトリの実際のコンテンツにアクセスすることなく、Issue やプルリクエストへの個別のアクセスを要求できます。                                                         | OAuth App は、Issue やプルリクエストなど、リポジトリが所有するリソースにアクセスするには `repo` スコープをリクエストする必要があります。                                                                                                      |
| GitHub App には、Organization のアプリケーションポリシーは適用されません。 GitHub App は、Organization のオーナーが許可したリポジトリにのみアクセスできます。                        | Organization のアプリケーションポリシーが有効である場合、Organization のオーナーのみが OAuth App のインストールを承認できます。 インストールされた OAuth App は、承認を受けた Organization において Organization のオーナーが所有するトークンで表示できるすベてのリソースにアクセスできます。 |
| GitHub App は、インストールが変更または削除されると webhook イベントを受信します。 これにより、アプリケーションの作者は、GitHub App の Organization のリソースに対するアクセス権が変更されたことがわかります。 | OAuth App は、付与したユーザのアクセス権が変更されると、Organization やリポジトリへのアクセス権を失います。 OAuth App は、リソースへのアクセス権を失った際にも通知を行いません。                                                                             |

### トークンベースの識別

{% note %}

**注釈:** GitHub App は、ユーザベーストークンも使用できます。 詳しい情報については「[GitHub App のユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

{% endnote %}

| GitHub Apps                                                                                                                                                                                                                                                                                                                                                                                                                 | OAuth App                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub App は、JSON Web トークンフォーマットのアウトオブバンドで秘密鍵を使用することにより、インストールアクセストークンをリクエストできます。                                                                                                                                                                                                                                                                                                                                           | OAuth App は、Web リクエストを通じてリダイレクトされた後にリクエストトークンをアクセストークンに交換できます。                                                                                                                                                                               |
| インストールトークンは、アプリケーションを GitHub App のボット (@jenkins-bot など) として識別します。                                                                                                                                                                                                                                                                                                                                                           | アクセストークンは、アプリケーションを、アプリケーションにトークンを付与したユーザ (@octocat など) として識別します。                                                                                                                                                                            |
| インストールトークンは、事前に定義された時間 (現在は 1 時間) が経過すると期限切れになります。                                                                                                                                                                                                                                                                                                                                                                          | OAuth トークンは、顧客によって取り消されるまで有効となります。                                                                                                                                                                                                           |
| {% data reusables.apps.api-rate-limits-non-ghec %}{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_ghe_cloud %} では、適用されるレート制限値が高くなります。 詳しい情報については、「[GitHub App のレート制限](/developers/apps/rate-limits-for-github-apps)」を参照してください。{% endif %}                                                                                                                                             | OAuth トークンでは、1 時間あたり 5,000 リクエストのレート制限が適用されます。                                                                                                                                                                                               |
| レート制限の増加は、GitHub App レベル (すべてのインストールに影響) と個々のインストールレベルの両方に適用できます。                                                                                                                                                                                                                                                                                                                                                           | レート制限の増加は、OAuth App ごとに適用されます。 その OAuth App に付与されたすべてのトークンで、制限値が増大します。 |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
| {% data variables.product.prodname_github_app %} は、ユーザの代わりに認証を行うことができ、これをユーザからサーバーに対するリクエストといいます。 このフローは、OAuth App 認可フローと同じです。 ユーザからサーバーに対するトークンは期限切れとなることがあり、リフレッシュトークンで更新できます。 詳しい情報については、「[ユーザからサーバーに対するアクセストークンをリフレッシュする](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)」および「[GitHub Apps のユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。 | {% data variables.product.prodname_oauth_app %} により使用される OAuth フローでは、ユーザの代わりに {% data variables.product.prodname_oauth_app %} を承認します。 これは、{% data variables.product.prodname_github_app %} ユーザからサーバーに対する承認で用いられるフローと同じです。 
{% endif %}

### リソースに対する権限レベルのリクエスト

OAuth App と異なり、GitHub App には必要なアクセス権のみをリクエストできる、ターゲットを絞った権限があります。 たとえば、継続的インテグレーション (CI) GitHub App は、リポジトリコンテンツへの読み取りアクセスと、ステータス API への書き込みアクセスをリクエストできます。 別の GitHub App では、コードへの読み取りおよび書き込みアクセスを持たせずに、Issue、ラベル、マイルストーンを管理させることが可能です。 OAuth App では、権限を細かく設定できません。

| アクセス                             | GitHub App (`read` または `write` 権限)     | OAuth App                                    |
| -------------------------------- | -------------------------------------- | -------------------------------------------- |
| **パブリックリポジトリへのアクセス**             | パブリックリポジトリはインストール中に選択する必要があります。        | `public_repo` スコープ。                          |
| **リポジトリコード/コンテンツへのアクセス**         | リポジトリコンテンツ                             | `repo` スコープ。                                 |
| **Issue、ラベル、マイルストーンへのアクセス**      | 問題                                     | `repo` スコープ。                                 |
| **プルリクエスト、ラベル、マイルストーンへのアクセス**    | プルリクエスト                                | `repo` スコープ。                                 |
| **(CI ビルドの) コミットのステータスへのアクセス**   | コミットのステータス                             | `repo:status` スコープ。                          |
| **デプロイメントおよびデプロイメントステータスへのアクセス** | デプロイメント                                | `repo_deployment` スコープ。                      |
| **webhook 経由によるイベントの受信**         | GitHub App には、デフォルトで webhook が含まれています。 | `write:repo_hook` または `write:org_hook` スコープ。 |

### リポジトリの確認

| GitHub Apps                                                                 | OAuth App                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| GitHub App は、`/installation/repositories` を参照して、インストールでアクセスできるリポジトリを確認できます。 | OAuth App は、ユーザ表示 (`/user/repos`) または Organization 表示 (`/orgs/:org/repos`) を参照して、アクセスできるリポジトリを確認できます。 |
| GitHub App は、リポジトリがインストールから追加または削除されたときに webhook を受信します。                    | OAuth App は、Organization 内で新しいリポジトリが作成されたときに通知用の Organization webhook を作成します。                         |

### webhook

| GitHub Apps                                                                                     | OAuth App                                                                                                                      |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| デフォルトでは、GitHub App には webhook が 1 つあり、その webhook は、アクセス権のあるすべてのリポジトリにおいて、受信するよう設定されたイベントを受信します。 | OAuth App は、イベントを受信する必要がある各リポジトリに対し、リポジトリ webhook を作成するため webhook スコープをリクエストします。                                               |
| GitHub App は、Organization メンバーの権限で、特定の Organization レベルのイベントを受信します。                             | OAuth App は、Organization レベルのイベントを受信する必要がある各 Organization に対し、Organization webhook を作成するため Organization webhook スコープをリクエストします。 |

### Git アクセス

| GitHub Apps                                                                                                                                                                   | OAuth App                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub App は、リポジトリコンテンツの権限を求め、[HTTP ベースのGit](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation) 経由で認証するためインストールトークンを使用します。 | OAuth App は `write:public_key` スコープを要求し、API 経由で[デプロイキーを作成](/rest/reference/repos#create-a-deploy-key)します。 そして、そのキーを使用して Git コマンドを実行できます。 |
| トークンは、HTTP パスワードとして使用されます。                                                                                                                                                    | トークンは、HTTP ユーザ名として使用されます。                                                                                                                |

### マシンアカウントとボットアカウントの比較

マシンユーザアカウントは OAuth ベースのユーザアカウントで、GitHub のユーザシステムを使用して自動化されたシステムを分離します。

ボットアカウントは GitHub App 固有のもので、すべての GitHub App に組み込まれています。

| GitHub Apps                                                                  | OAuth App                                                                |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| GitHub App ボットは {% data variables.product.prodname_enterprise %} シートを消費しません。 | マシンユーザアカウントは {% data variables.product.prodname_enterprise %} シートを消費します。 |
| GitHub App ボットにはパスワードが付与されないため、顧客は GitHub App に直接サインインできません。                 | マシンユーザアカウントには、ユーザ名およびパスワードが付与されます。顧客はそれらを管理および保護します。                     |
