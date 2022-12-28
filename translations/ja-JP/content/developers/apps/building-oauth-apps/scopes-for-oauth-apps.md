---
title: OAuth Appのスコープ
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps
  - /apps/building-oauth-apps/scopes-for-oauth-apps
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 8398a7162b3ab77677651d5404c0738c6d0877b1
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164365'
---
OAuth AppをGitHub上でセットアップする際には、要求されたスコープが認可フォーム上でユーザに表示されます。

{% note %}

**注:** GitHub App を構築している場合は、認可要求でスコープを指定する必要はありません。 詳しくは、「[GitHub App のユーザーの特定と認可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」をご覧ください。

{% endnote %}

CLIツールなど、{% data variables.product.prodname_oauth_app %}がブラウザにアクセスできない場合、アプリケーションを認可するユーザのスコープを指定する必要はありません。 詳しくは、「[OAuth App の認可](/developers/apps/authorizing-oauth-apps#device-flow)」をご覧ください。

どのOAuthスコープを所有しているか、そしてAPIアクションが何を受け付けるかを知るには、ヘッダを確認してください。

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes` には、トークンが認可したスコープが一覧表示されます。
* `X-Accepted-OAuth-Scopes` には、アクションがチェックするスコープが一覧表示されます。

## 利用可能なスコープ

名前|説明-----|-----------|{% ifversion not ghae %} **`(no scope)`** |パブリック情報 (ユーザー プロファイル情報、リポジトリ情報、gists を含む) {% endif %}{% ifversion ghes or ghae %} **`site_admin`** への読み取り専用アクセスを許可|サイト管理者に [{% data variables.product.prodname_ghe_server %} 管理 API エンドポイント](/rest/reference/enterprise-admin)へのアクセスを許可します。{% endif %} **`repo`** |public{% ifversion ghec or ghes or ghae %}、internal、{% endif %}、プライベート リポジトリへのフル アクセスを許可します。これには、コードへの読み取りと書き込みのアクセス、コミットの状態、リポジトリへの招待、コラボレーター、デプロイの状態、リポジトリ Webhook が含まれます。 **注**: `repo` スコープでは、リポジトリ関連のリソースに加えて、Organization 所有のリソース (プロジェクト、招待、Team メンバーシップ、Webhook) を管理するためのアクセスも許可されます。 さらに、ユーザー所有のプロジェクトを管理する権限も許可されます。
&emsp;`repo:status`| {% ifversion fpt %}パブリックおよびプライベート {% elsif ghec or ghes %}パブリック、プライベート、内部{% elsif ghae %}プライベートおよび内部{% endif %}リポジトリのコミット ステータスに対する読み取り/書き込みアクセスを許可します。 このスコープは、コードへのアクセスを許可 *せずに*、他のユーザーまたはサービスにプライベート リポジトリコミットステータスへのアクセス権を付与する場合にのみ必要です。
&emsp;`repo_deployment`| {% ifversion not ghae %}パブリック{% else %}内部{% endif %}およびプライベート リポジトリの[デプロイ ステータス](/rest/reference/repos#deployments)に対するアクセスを許可します。 このスコープは、コードへのアクセスを許可 *せずに*、展開状態へのアクセス権を他のユーザーまたはサービスに付与する場合にのみ必要です。{% ifversion not ghae %} &emsp;`public_repo`|パブリック リポジトリへのアクセスを制限します。 これには、コード、コミットステータス、リポジトリプロジェクト、コラボレータ、パブリックリポジトリ及びOrganizationのデプロイメントステータスへの読み書きアクセスが含まれます。 パブリック リポジトリにスターを付けるためにも必要です。{% endif %} &emsp;`repo:invite` | リポジトリにおける共同作業への招待の承諾/拒否権限を付与します。 このスコープは、コードへのアクセスを許可 *せずに*、他のユーザーまたはサービスに招待へのアクセス権を付与する場合にのみ必要です。{% ifversion fpt or ghes or ghec %} &emsp;`security_events` |補助 金： <br/> [{% data variables.product.prodname_code_scanning %} API](/rest/reference/code-scanning) でのセキュリティ イベントに対する読み取りおよび書き込みアクセス{%- ifversion ghec %}<br/> [{% data variables.product.prodname_secret_scanning %} API](/rest/reference/secret-scanning) でのセキュリティ イベントに対する読み取りおよび書き込みアクセス{%- endif %} <br/> このスコープは、コードへのアクセスを許可 *せずに*、他のユーザーまたはサービスにセキュリティ イベントへのアクセス権を付与する場合にのみ必要です。{% endif %} **`admin:repo_hook`** |{% ifversion fpt %}public または private{% elsif ghec or ghes %}public、private、または internal{% elsif ghae %}private または internal{% endif %} リポジトリのリポジトリ フックへの読み取り、書き込み、ping、および削除アクセスを許可します。 `repo` {% ifversion fpt or ghec or ghes %}および `public_repo` スコープは、{% else %}スコープは、{% endif %}リポジトリ フックを含む、リポジトリに対する完全なアクセスを許可します。 アクセスをリポジトリ フックのみに限定するには、`admin:repo_hook` スコープを使用してください。
&emsp;`write:repo_hook` | {% ifversion fpt %}パブリックまたはプライベート {% elsif ghec or ghes %}パブリック、プライベート、または内部{% elsif ghae %}プライベートまたは内部{% endif %}リポジトリのフックに対する読み取り、書き込み、ping アクセスを許可します。
&emsp;`read:repo_hook`| {% ifversion fpt %}パブリックまたはプライベート {% elsif ghec or ghes %}パブリック、プライベート、または内部{% elsif ghae %}プライベートまたは内部{% endif %}リポジトリのフックに対する読み取りおよび ping アクセスを許可します。
**`admin:org`** | Organization とその Team、プロジェクト、メンバーシップを全面的に管理できます。
&emsp;`write:org`| Organization のメンバーシップ、Organization のプロジェクト、Team のメンバーシップに対する読み取りおよび書き込みアクセス。
&emsp;`read:org`| Organization のメンバーシップ、Organization のプロジェクト、Team のメンバーシップに対する読み取り専用アクセス。
**`admin:public_key`** | 公開鍵を全面的に管理できます。
&emsp;`write:public_key`| 公開鍵の作成、一覧表示、詳細の表示ができます。
&emsp;`read:public_key`| 公開鍵の一覧表示と詳細の表示ができます。
**`admin:org_hook`** | Organization フックに対する読み取り、書き込み、ping、削除アクセスを許可します。 **注:** OAuth トークンがこれらのアクションを実行できるのは、OAuth App によって作成された Organization フックに対してのみです。 {% data variables.product.pat_generic_caps %} がこれらのアクションを実行できるのは、ユーザーが作成した組織のフックに対してのみです。
**`gist`** | gist に対する書き込みアクセスを許可します。
**`notifications`** | 以下を許可します: <br/>* ユーザーの通知に対する読み取りアクセス <br/>* スレッドに対する既読としてマーク アクセス <br/>* リポジトリに対するウォッチおよびウォッチ解除アクセス <br/>* スレッドのサブスクリプションに対する読み取り、書き込み、削除アクセス。
**`user`** | プロフィール情報のみに対する読み取り/書き込みアクセスを許可します。  このスコープには `user:email` と `user:follow` が含まれることにご注意ください。
&emsp;`read:user`| ユーザーのプロフィール データに対する読み取りアクセスを許可します。
&emsp;`user:email`| ユーザーのメール アドレスに対する読み取りアクセスを許可します。
&emsp;`user:follow`| 他のユーザーをフォローまたはフォロー解除するためのアクセスを許可します。{% ifversion projects-oauth-scope %} **`project`** | ユーザーおよび Organization の {% data variables.projects.projects_v2 %} への読み取り/書き込みアクセスを許可します。
&emsp;`read:project`| ユーザーおよび Organization の {% data variables.projects.projects_v2 %} への読み取り専用アクセスを許可します。{% endif %} **`delete_repo`** | 管理可能なリポジトリを削除するためのアクセスを許可します。
**`write:discussion`** | Team のディスカッションの読み取りおよび書き込みアクセスを許可します。
&emsp;`read:discussion` | Team のディスカッションの読み取りアクセスを許可します。
**`write:packages`** | {% data variables.product.prodname_registry %} でパッケージをアップロードまたは公開するためのアクセスを許可します。 詳しくは、「[パッケージを公開する](/github/managing-packages-with-github-packages/publishing-a-package)」をご覧ください。
**`read:packages`** | {% data variables.product.prodname_registry %} からパッケージをダウンロードまたはインストールするためのアクセスを許可します。 詳しくは、「[パッケージのインストール](/github/managing-packages-with-github-packages/installing-a-package)」をご覧ください。
**`delete:packages`** | {% data variables.product.prodname_registry %} からパッケージを削除するアクセス権を付与します。 詳しくは、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。
**`admin:gpg_key`** | GPG キーを完全に管理できます。
&emsp;`write:gpg_key`| GPG キーの作成、一覧表示、詳細の表示ができます。
&emsp;`read:gpg_key`| GPG キーの一覧表示と詳細の表示ができます。{% ifversion fpt or ghec %} **`codespace`** | codespace の作成および管理権限を付与します。 codespace は、スコープのセットが異なる可能性がある GITHUB_TOKEN を公開する場合があります。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} のセキュリティ](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)」をご覧ください。{% endif %} **`workflow`** | {% data variables.product.prodname_actions %} のワークフロー ファイルの追加および更新権限を付与します。 同じリポジトリ内の他のブランチに同じファイル（パスと内容が同じ）が存在する場合、ワークフローファイルはこのスコープがなくてもコミットできます。 ワークフロー ファイルは、スコープのセットが異なる可能性がある `GITHUB_TOKEN` を公開する場合があります。 詳しくは、[ワークフローでの認証](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)に関するページを参照してください。{% ifversion not fpt %} **`admin:enterprise`** | エンタープライズ機能の完全な制御権を付与する。 詳しくは、GraphQL API ドキュメントにある「[Enterprise アカウントの管理](/graphql/guides/managing-enterprise-accounts)」を参照してください。<br><br>`manage_runners:enterprise`{% ifversion ghec or ghes > 3.3 %}、`manage_billing:enterprise`、{% endif %}および `read:enterprise` を含めます。 &emsp;`manage_runners:enterprise` | Enterprise 内のセルフホステッド ランナーに対する完全な制御権を付与する。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners)に関する記述をご覧ください。 {% ifversion ghec or ghes > 3.3 %} &emsp;`manage_billing:enterprise` | Enterprise 課金データの読み取りと書き込み。 詳しくは、REST API のドキュメントの「[課金](/rest/billing)」を参照してください。 {% endif %} &emsp;`read:enterprise` | Enterprise プロファイルのすべてのデータを読み取る。 エンタープライズ メンバーまたは組織のプロファイル データは含まれません。{% endif %}{% ifversion read-audit-scope %} **`read:audit_log`** | 監査ログ データを読み取る。{% endif %} {% note %}

**注:** OAuth App は最初のリダイレクトでスコープを要求できます。 複数のスコープを指定するには、スコープを空白で区切ります (`%20` を使用)。

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## リクエストされたスコープと許可されたスコープ

`scope` 属性は、トークンに付随する、ユーザーによって許可されたスコープを一覧表示します。 通常、これらのスコープはリクエストされたものと同じになります。
しかし、ユーザーはスコープを編集して、実質的には元々要求されたアクセスよりも少ないアクセスをアプリケーションに対して許可できます。 また、ユーザーは OAuth フローが完了した後にトークンのスコープを編集することもできます。
この可能性を認識しておき、それに応じたアプリケーションの動作の調整が必要になります。

元々要求されたアクセスよりも少ないアクセスをユーザーが許可した場合のエラー ケースを処理することが重要です。 たとえば、アプリケーションはユーザーに対して、機能の低下や一部のアクションが実行できないことを警告したり、知らせたりすることができます。

また、アプリケーションはいつでもユーザーをもう一度フローに戻して追加の権限を得ようとすることができますが、ユーザーは常に拒否できることを忘れないようにしてください。

変更できるトークンのスコープの扱いに関するヒントが提供されている[認証の基本ガイド](/guides/basics-of-authentication/)をご確認ください。

## 正規化されたスコープ

複数のスコープが要求された場合、トークンは正規化されたスコープのリストとともに保存され、要求された別のスコープに暗黙的に含まれているスコープは破棄されます。 たとえば `user,gist,user:email` を要求すると、トークンには `user` と `gist` スコープのみが含まれます。これは、`user:email` スコープで許可されるアクセスは `user` スコープに含まれているからです。
