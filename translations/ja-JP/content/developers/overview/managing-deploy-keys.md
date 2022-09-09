---
title: デプロイキーの管理
intro: デプロイメントのスクリプトを自動化する際にサーバー上のSSHキーを管理する様々な方法と、どれが最適な方法かを学んでください。
redirect_from:
  - /guides/managing-deploy-keys
  - /v3/guides/managing-deploy-keys
  - /deploy-keys
  - /articles/managing-deploy-keys
  - /multiple-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 425535eb582c84801d79f00df751bb48d4a5b05e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058469'
---
SSHエージェントのフォワーディング、OAuthトークンでのHTTPS、デプロイキー、マシンユーザを使ってデプロイメントスクリプトを自動化する際に、サーバー上のSSHキーを管理できます。

## SSHエージェントのフォワーディング

多くの場合、特にプロジェクトの開始時には、SSHエージェントのフォワーディングが最も素早くシンプルに使える方法です。 エージェントのフォワーディングでは、ローカルの開発コンピュータで使うのと同じSSHキーを使います。

#### 長所

* 新しいキーを生成したり追跡したりしなくていい。
* キーの管理は不要。ユーザはローカルと同じ権限をサーバーでも持つ。
* サーバーにキーは保存されないので、サーバーが侵害を受けた場合でも、侵害されたキーを追跡して削除する必要はない。

#### 短所

* ユーザーは、デプロイに SSH 接続する **必要があります**。自動デプロイ プロセスは使用できません。
* SSHエージェントのフォワーディングは、Windowsのユーザが実行するのが面倒。

#### セットアップ

1. エージェントのフォワーディングをローカルでオンにしてください。 詳細については、[SSH エージェントの転送に関するガイド][ssh-agent-forwarding]を参照してください。
2. エージェントフォワーディングを使用するように、デプロイスクリプトを設定してください。 たとえば、bash スクリプトでは、エージェントの転送を有効にすると、次のようになります: `ssh -A serverA 'bash -s' < deploy.sh`

## OAuthトークンを使ったHTTPSでのクローニング

SSH キーを使用しない場合は、OAuth トークンで HTTPS を使用できます。

#### 長所

* サーバーにアクセスできる人なら、リポジトリをデプロイできる。
* ユーザはローカルのSSH設定を変更する必要がない。
* 複数のトークン（ユーザごと）が必要ない。サーバーごとに1つのトークンで十分。
* トークンはいつでも取り消しできるので、本質的には使い捨てのパスワードにすることができる。
{% ifversion ghes %}
* 新しいトークンの生成は、[OAuth API](/rest/reference/oauth-authorizations#create-a-new-authorization) を使用して簡単にスクリプト化できます。
{% endif %}

#### 短所

* トークンを確実に正しいアクセススコープで設定しなければならない。
* トークンは本質的にはパスワードであり、パスワードと同じように保護しなければならない。

#### セットアップ

[個人用アクセス トークンの作成に関するガイド](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)を参照してください。

## デプロイ キー

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

#### 長所

* リポジトリとサーバーにアクセスできる人は、誰でもプロジェクトをデプロイできる。
* ユーザはローカルのSSH設定を変更する必要がない。
* デプロイ キーは既定では読み取り専用ですが、リポジトリに追加するときに書き込みアクセス権を付与することができます。

#### 短所

* デプロイキーは単一のリポジトリに対するアクセスだけを許可できる。 より複雑なプロジェクトは、同じサーバーからプルする多くのリポジトリを持っていることがある。
* デプロイキーは通常パスフレーズで保護されていないので、サーバーが侵害されると簡単にキーにアクセスされることになる。

#### セットアップ

1. サーバーで [`ssh-keygen` 手順を実行][generating-ssh-keys]し、生成された公開キーと秘密 RSA キーのペアを保存する場所を覚えておいてください。
2. 任意の {% data variables.product.product_name %} ページ上の右上隅にある自分のプロフィール写真をクリックしてから、 **[自分のプロフィール]** をクリックします。 ![プロフィールへのアクセス](/assets/images/profile-page.png)
3. プロフィール ページで、 **[リポジトリ]** をクリックし、リポジトリの名前をクリックします。 ![リポジトリのリンク](/assets/images/repos.png)
4. リポジトリから、 **[設定]** をクリックします。 ![リポジトリ設定](/assets/images/repo-settings.png)
5. サイドバーで、 **[キーのデプロイ]** 、 **[デプロイ キーの追加]** の順にクリックします。 ![デプロイ キーの追加リンク](/assets/images/add-deploy-key.png)
6. タイトルを入力し、公開鍵に貼り付けてください。  ![デプロイキーのページ](/assets/images/deploy-key.png)
7. このキーにリポジトリへの書き込みアクセス権を付与する場合は、 **[書き込みアクセスを許可する]** を選択します。 書き込みアクセス権を持つデプロイキーを使うと、リポジトリにデプロイメントのプッシュができるようになります。
8. **[キーの追加]** をクリックします。

#### 1つのサーバー上で複数のリポジトリを利用する

1つのサーバー上で複数のリポジトリを使うなら、それぞれのリポジトリに対して専用のキーペアを生成しなければなりません。 複数のリポジトリでデプロイキーを再利用することはできません。

サーバーの SSH 構成ファイル (通常 `~/.ssh/config`) に、各リポジトリのエイリアス エントリを追加します。 次に例を示します。

```bash
Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - リポジトリのエイリアス。
* `Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}` - エイリアスで使用するホスト名を構成します。
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - 秘密キーをエイリアスに割り当てます。

こうすれば、ホスト名のエイリアスを使ってSSHでリポジトリとやりとりできます。この場合、このエイリアスに割り当てられたユニークなデプロイキーが使われます。 次に例を示します。

```bash
$ git clone git@{% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

## サーバー間トークン

サーバーが 1 つ以上の組織にわたるリポジトリにアクセスする必要がある場合、GitHub アプリを使用して必要なアクセスを定義し、その GitHub アプリから _スコープを厳格に設定した_、_サーバー間_ のトークンを生成します。 サーバー対サーバーのトークンは単一または複数のリポジトリをスコープとすることができ、権限を細かく設定できます。 たとえば、リポジトリのコンテンツへの読み取り専用アクセス権を持つトークンを生成できます。

GitHub Appは{% data variables.product.product_name %}でも主役級の存在なので、サーバー間トークンはあらゆるGitHubユーザから分離され、「サービストークン」に相当します。 さらに、サーバー間トークンには独自のレート制限があり、その制限は実行されるOrganizationの規模に応じて拡大されます。 詳細については、「[{% data variables.product.prodname_github_apps %} のレート制限](/developers/apps/rate-limits-for-github-apps)」を参照してください。

#### 長所

- 権限設定と有効期限 (1時間、またはAPIで手動で取り消された場合にはそれ以下) が明確に定義された、スコープが厳格なトークン。
- Organizationの規模に従って拡大する、独自のレート制限。
- GitHubユーザIDと分離されているため、ライセンスのシート数を消費しない。
- パスワードが付与されないので、直接サインインされない。

#### 短所

- GitHub Appを作成するには追加設定が必要。
- サーバー間トークンは1時間後に期限切れとなるので、再生成する必要がある (通常はコードを使用して、オンデマンドで行なう)。

#### セットアップ

1. GitHub Appをパブリックにするかプライベートにするか決定します。 GitHub AppがOrganization内のリポジトリのみで動作する場合は、プライベートに設定した方がいいでしょう。
1. リポジトリのコンテンツへの読み取り専用アクセスなど、GitHub Appが必要とする権限を決定します。
1. Organizationの設定ページからGitHub Appを作成します。 詳細については、「[GitHub アプリの作成](/developers/apps/creating-a-github-app)」を参照してください。
1. GitHub アプリ `id` をメモします。
1. GitHub Appの秘密鍵を生成してダウンロードし、安全な方法で保存します。 詳細については、「[秘密キーを生成する](/developers/apps/authenticating-with-github-apps#generating-a-private-key)」を参照してください。
1. 動作させたいリポジトリにGitHubをインストールします。Organizationの全リポジトリにGitHub Appをインストールしても構いません。
1. GitHub アプリと、それがアクセスできる組織リポジトリの間の接続を表す `installation_id` を特定します。  各 GitHub アプリと組織のペアには、最大で 1 つの `installation_id` があります。 「[認証されたアプリの組織のインストールを取得する](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app)」を使用してこの `installation_id` を識別できます。 これには、JWT を使用した GitHub アプリとしての認証が必要です。詳細については、「[GitHub アプリとしての認証](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app)」を参照してください。
1. 「[アプリのインストール アクセス トークンを作成する](/rest/reference/apps#create-an-installation-access-token-for-an-app)」を使用して、対応する REST API エンドポイントを使用してサーバー間トークンを生成します。 これには、JWT を使用した GitHub アプリとしての認証が必要です。詳細については、「[GitHub アプリとしての認証](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app)」と「[インストールとしての認証](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)」を参照してください。
1. このサーバー間トークンを使用して、REST、GraphQL API、またはGitクライアント経由でリポジトリとやり取りします。

## マシンユーザ

サーバーが複数のリポジトリにアクセスする必要がある場合、新しいアカウントを{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}で作成し、自動化専用に使われるSSHキーを添付できます。 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}のこのアカウントは人間によって使用されるものではないため、_マシン ユーザー_ と呼ばれます。 マシン ユーザーを個人リポジトリの [コラボレーター][collaborator] (読み取りと書き込みアクセス権の付与)、組織リポジトリの [外部コラボレーター][outside-collaborator] (読み取り、書き込み、または管理者アクセス権の付与)、または自動化する必要があるリポジトリへのアクセス権を持つ [チーム][team] (チームのアクセス許可の付与) として追加できます。

{% ifversion fpt or ghec %}

{% tip %}

**ヒント:** [サービス使用条件][tos]の状態:

> *"ボット" またはその他の自動化された手段で "アカウント" を登録することは許可されていません。*

これは、アカウントの生成を自動化することはできないということです。 しかし、プロジェクトやOrganization内でデプロイスクリプトのような自動化タスクのために1つのマシンユーザを作成したいなら、それはまったく素晴らしいことです。

{% endtip %}

{% endif %}

#### 長所

* リポジトリとサーバーにアクセスできる人は、誰でもプロジェクトをデプロイできる。
* （人間の）ユーザがローカルのSSH設定を変更する必要がない。
* 複数のキーは必要ない。サーバーごとに1つでよい。

#### 短所

* Organizationだけがマシンユーザをリードオンリーのアクセスにできる。 個人リポジトリは、常にコラボレータの読み書きアクセスを許可する。
* マシンユーザのキーは、デプロイキーのように、通常パスフレーズで保護されない。

#### セットアップ

1. サーバーで [`ssh-keygen` 手順を実行][generating-ssh-keys]し、公開キーをマシン ユーザー アカウントにアタッチします。
2. マシンユーザアカウントに自動化したいリポジトリへのアクセスを付与してください。 これを行うには、アカウントを [コラボレーター][collaborator] として、[外部コラボレーター][outside-collaborator] として、または組織内の [チーム][team] に追加します。

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/github/site-policy/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team

## 参考資料
- [通知の構成](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
