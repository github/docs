---
title: OAuth Appのスコープ
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/
  - /apps/building-oauth-apps/scopes-for-oauth-apps/
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---
OAuth AppをGitHub上でセットアップする際には、要求されたスコープが認可フォーム上でユーザに表示されます。

{% note %}

**ノート:** GitHub Appを構築しているなら、認可リクエストでスコープを提供する必要はありません。 このことに関する詳細については「[GitHub Appのユーザの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください、

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_oauth_app %}が
CLIツールなどであり、ブラウザにアクセスできないなら、アプリケーションの認可のためにユーザに対してスコープを指定する必要はありません。 詳しい情報については「[OAuth Appの認可](/developers/apps/authorizing-oauth-apps#device-flow)」を参照してください。
{% endif %}

どのOAuthスコープを所有しているか、そしてAPIアクションが何を受け付けるかを知るには、ヘッダを確認してください。

```shell
$ curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes`はトークンが認可したスコープをリストします。
* `X-Accepted-OAuth-Scopes`は、アクションがチェックするスコープをリストします。

### 利用できるスコープ

| 名前                       | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion != "github-ae@latest" %}
| **`(スコープなし)`**           | Grants read-only access to public information (including user profile info, repository info, and gists){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| **`site_admin`**         | サイト管理者に[{% data variables.product.prodname_ghe_server %}の管理APIエンドポイント](/rest/reference/enterprise-admin)へのアクセスを許可します。{% endif %}
| **`repo`**               | Grants full access to repositories, including private repositories. That includes read/write access to code, commit statuses, repository and organization projects, invitations, collaborators, adding team memberships, deployment statuses, and repository webhooks for repositories and organizations. また、ユーザプロジェクトを管理する機能も許可します。                                                                                                                                                                      |
| &emsp;`repo:status`      | Grants read/write access to {% if currentVersion != "github-ae@latest" %}public{% else %}internal{% endif %} and private repository commit statuses. このスコープが必要になるのは、コードへのアクセスを許可*することなく*他のユーザあるいはサービスにプライベートリポジトリのコミットステータスへのアクセスを許可したい場合のみです。                                                                                                                                                                                                                                                            |
| &emsp;`repo_deployment`  | Grants access to [deployment statuses](/rest/reference/repos#deployments) for {% if currentVersion != "github-ae@latest" %}public{% else %}internal{% endif %} and private repositories. This scope is only necessary to grant other users or services access to deployment statuses, *without* granting access to the code.{% if currentVersion != "github-ae@latest" %}
| &emsp;`public_repo`      | アクセスをパブリックリポジトリのみに制限します。 これには、コード、コミットステータス、リポジトリプロジェクト、コラボレータ、パブリックリポジトリ及びOrganizationのデプロイメントステータスへの読み書きアクセスが含まれます。 Also required for starring public repositories.{% endif %}
| &emsp;`repo:invite`      | リポジトリでのコラボレーションへの招待の承認／拒否を許可します。 このスコープが必要になるのは、コードへのアクセスを許可*することなく*招待へのアクセスをユーザあるいはサービスに許可する場合のみです。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| &emsp;`security_events`  | 以下のアクセスを許可します。<br/>[{% data variables.product.prodname_code_scanning %} API](/rest/reference/code-scanning)中のセキュリティイベントへの読み取りおよび書き込みアクセス<br/> [{% data variables.product.prodname_secret_scanning %} API](/rest/reference/secret-scanning)中のセキュリティイベントへの読み取りおよび書き込みアクセス<br/> このスコープが必要になるのは、コードへのアクセスを許可*することなく*他のユーザまたはサービスにセキュリティイベントへのアクセスを許可したい場合のみです。{% endif %}{% if currentVersion ver_gt "enterprise-server@2.21" and currentVersion ver_lt "enterprise-server@3.1" %}
| &emsp;`security_events`  | [{% data variables.product.prodname_code_scanning %} API](/rest/reference/code-scanning)中のセキュリティイベントへの読み書きアクセスを許可します。 このスコープが必要になるのは、コードへのアクセスを許可*することなく*他のユーザまたはサービスにセキュリティイベントへのアクセスを許可したい場合のみです。{% endif %}
| **`admin:repo_hook`**    | Grants read, write, ping, and delete access to repository hooks in {% if currentVersion != "github-ae@latest" %}public{% else %}internal{% endif %} and private repositories. The `repo` {% if currentVersion != "github-ae@latest" %}and `public_repo` scopes grant{% else %}scope grants{% endif %} full access to repositories, including repository hooks. アクセスをリポジトリフックのみに限定するには、`admin:repo_hook`スコープを使ってください。                                                                                      |
| &emsp;`write:repo_hook`  | Grants read, write, and ping access to hooks in {% if currentVersion != "github-ae@latest" %}public{% else %}internal{% endif %} or private repositories.                                                                                                                                                                                                                                                                                                                                                 |
| &emsp;`read:repo_hook`   | Grants read and ping access to hooks in {% if currentVersion != "github-ae@latest" %}public{% else %}internal{% endif %} or private repositories.                                                                                                                                                                                                                                                                                                                                                         |
| **`admin:org`**          | OrganizationとそのTeam、プロジェクト、メンバーシップを完全に管理できます。                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| &emsp;`write:org`        | Organizationのメンバーシップ、Organizationのプロジェクト、Teamのメンバーシップへの読み書きアクセス。                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| &emsp;`read:org`         | Organizationのメンバーシップ、Organizationのプロジェクト、Teamのメンバーシップへの読み取りのみのアクセス。                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **`admin:public_key`**   | 公開鍵を完全に管理できます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| &emsp;`write:public_key` | 公開鍵の作成、リスト、詳細の表示。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| &emsp;`read:public_key`  | 公開鍵のリストと詳細の表示。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **`admin:org_hook`**     | Organizationフックへの読み書き、ping、削除アクセスを許可します。 **ノート:** OAuthトークンがこれらのアクションを行えるのは、OAuth Appが作成したOrganizationフックに対してのみです。 個人アクセストークンがこれらのアクションを行えるのは、ユーザが作成したOrganizationフックに対してのみです。                                                                                                                                                                                                                                                                                                                            |
| **`gist`**               | Gistへの書き込みアクセスを許可します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **`notifications`**      | 許可するアクセス: <br/>* ユーザの通知に対する読み取りアクセス<br/>* スレッドへの既読アクセス<br/>* リポジトリへのWatch及びWatch解除のアクセス<br/>* スレッドのサブスクリプションに対する読み書き及び削除アクセス。                                                                                                                                                                                                                                                                                                                                                     |
| **`ユーザ`**                | プロフィール情報にのみ読み書きアクセスを許可します。  このスコープには`user:email`と`user:follow`が含まれることに注意してください。                                                                                                                                                                                                                                                                                                                                                                                                                           |
| &emsp;`read:user`        | ユーザのプロフィールデータへの読み取りアクセスを許可します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| &emsp;`user:email`       | ユーザのメールアドレスへの読み取りアクセスを許可します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| &emsp;`user:follow`      | 他のユーザのフォローあるいはフォロー解除のアクセスを許可します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **`delete_repo`**        | 管理可能なリポジトリの削除アクセスを許可します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **`write:discussion`**   | Teamのディスカッションの読み書きアクセスを許可します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| &emsp;`read:discussion`  | Allows read access for team discussions.{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}
| **`write:packages`**     | {% data variables.product.prodname_registry %}でのパッケージのアップロードあるいは公開のアクセスを許可します。 詳しい情報については「[パッケージの公開](/github/managing-packages-with-github-packages/publishing-a-package)」を参照してください。                                                                                                                                                                                                                                                                                                                      |
| **`read:packages`**      | {% data variables.product.prodname_registry %}からのパッケージのダウンロードあるいはインストールのアクセスを許可します。 詳しい情報については「[パッケージのインストール](/github/managing-packages-with-github-packages/installing-a-package)」を参照してください。                                                                                                                                                                                                                                                                                                             |
| **`delete:packages`**    | {% data variables.product.prodname_registry %}からのパッケージの削除アクセスを許可します。 For more information, see "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}."{% endif %}
| **`admin:gpg_key`**      | GPGキーを完全に管理できます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| &emsp;`write:gpg_key`    | GPGキーの作成、リスト、詳細の表示ができます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| &emsp;`read:gpg_key`     | GPGキーのリストと詳細の表示ができます。{% if currentVersion == "free-pro-team@latest" %}
| **`ワークフロー`**             | {% data variables.product.prodname_actions %}のワークフローファイルの追加と更新機能を許可します。 同じリポジトリ内の他のブランチに同じファイル（パスと内容が同じ）が存在する場合、ワークフローファイルはこのスコープがなくてもコミットできます。 ワークフローファイルは異なるスコープのセットを持ちうる`GITHUB_TOKEN`を公開できます。詳細については https://docs.github.com/en/free-pro-team@latest/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token を参照してください。{% endif %}

{% note %}

**ノート:**OAuth Appは最初のリダイレクトでスコープをリクエストできます。 You can specify multiple scopes by separating them with a space using `%20`:

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

### リクエストされたスコープと許可されたスコープ

`scope`属性は、トークンに添付された、ユーザが許可したスコープをリストします。 通常、これらのスコープはリクエストされたものと同じになります。 しかし、ユーザはスコープを編集でき、実質的にアプリケーションに対して元々リクエストされたよりも少ないアクセスだけを許可できます。 また、ユーザはOAuthフローが完了した後にトークンのスコープを編集することもできます。 この可能性を認識しておき、対応してアプリケーションの動作を調整しなければなりません。

元々リクエストされたよりも少ないアクセスをユーザが許可した場合のエラーケースを処理することは重要です。 たとえば、アプリケーションはユーザに対し、機能が低下したり、行えないアクションがでてくることを警告したり、知らせたりすることができます。

また、アプリケーションはいつでもユーザをフローに戻して追加の権限を得ようとすることができますが、ユーザは常に拒否できることを忘れないようにしてください。

変更できるトークンのスコープの扱いに関するヒントが提供亜sレテイル、[認証の基礎ガイド](/guides/basics-of-authentication/)を参照してください。

### 正規化されたスコープ

複数のスコープがリクエストされた場合、トークンは正規化されたスコープのリストとともに保存され、リクエストされた他のスコープに暗黙のうちに含まれているスコープは破棄されます。 たとえば`user,gist,user:email`をリクエストすると、トークンには`user`と`gist`スコープだけが含まれます。これは、`user:email`スコープで許可されるアクセスは`user`スコープに含まれているためです。
