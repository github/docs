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
---


SSHエージェントのフォワーディング、OAuthトークンでのHTTPS、デプロイキー、マシンユーザを使ってデプロイメントスクリプトを自動化する際に、サーバー上のSSHキーを管理できます。

## SSHエージェントのフォワーディング

多くの場合、特にプロジェクトの開始時には、SSHエージェントのフォワーディングが最も素早くシンプルに使える方法です。 エージェントのフォワーディングでは、ローカルの開発コンピュータで使うのと同じSSHキーを使います。

#### 長所

* 新しいキーを生成したり追跡したりしなくていい。
* キーの管理は不要。ユーザはローカルと同じ権限をサーバーでも持つ。
* サーバーにキーは保存されないので、サーバーが侵害を受けた場合でも、侵害されたキーを追跡して削除する必要はない。

#### 短所

* ユーザはデプロイするためにSSH**しなければならない**。自動化されたデプロイプロセスは利用できない。
* SSHエージェントのフォワーディングは、Windowsのユーザが実行するのが面倒。

#### セットアップ

1. エージェントのフォワーディングをローカルでオンにしてください。 詳しい情報については[SSHエージェントフォワーディングのガイド][ssh-agent-forwarding]を参照してください。
2. エージェントフォワーディングを使用するように、デプロイスクリプトを設定してください。 For example, on a bash script, enabling agent forwarding would look something like this: `ssh -A serverA 'bash -s' < deploy.sh`

## OAuthトークンを使ったHTTPSでのクローニング

If you don't want to use SSH keys, you can use HTTPS with OAuth tokens.

#### 長所

* サーバーにアクセスできる人なら、リポジトリをデプロイできる。
* ユーザはローカルのSSH設定を変更する必要がない。
* 複数のトークン（ユーザごと）が必要ない。サーバーごとに1つのトークンで十分。
* トークンはいつでも取り消しできるので、本質的には使い捨てのパスワードにすることができる。
{% ifversion ghes %}
* 新しいトークンの作成は、[OAuth API](/rest/reference/oauth-authorizations#create-a-new-authorization)を使って容易にスクリプト化できる。
{% endif %}

#### 短所

* トークンを確実に正しいアクセススコープで設定しなければならない。
* トークンは本質的にはパスワードであり、パスワードと同じように保護しなければならない。

#### セットアップ

See [our guide on creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## デプロイキー

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

#### 長所

* リポジトリとサーバーにアクセスできる人は、誰でもプロジェクトをデプロイできる。
* ユーザはローカルのSSH設定を変更する必要がない。
* デプロイキーはデフォルトではリードオンリーだが、リポジトリに追加する際には書き込みアクセス権を与えることができる。

#### 短所

* デプロイキーは単一のリポジトリに対するアクセスだけを許可できる。 より複雑なプロジェクトは、同じサーバーからプルする多くのリポジトリを持っていることがある。
* デプロイキーは通常パスフレーズで保護されていないので、サーバーが侵害されると簡単にキーにアクセスされることになる。

#### セットアップ

1. [Run the `ssh-keygen` procedure][generating-ssh-keys] on your server, and remember where you save the generated public and private rsa key pair.
2. {% data variables.product.product_name %}の任意のページの右上で、プロフィールの写真をクリックし、続いて**Your profile（あなたのプロフィール）**をクリックしてください。 ![プロフィールへのアクセス](/assets/images/profile-page.png)
3. プロフィールページで**Repositories（リポジトリ）**をクリックし、続いてリポジトリの名前をクリックしてください。 ![リポジトリのリンク](/assets/images/repos.png)
4. リポジトリで**Settings（設定）**をクリックしてください。 ![リポジトリの設定](/assets/images/repo-settings.png)
5. サイドバーで**Deploy Keys（デプロイキー）**をクリックし、続いて**Add deploy key（デプロイキーの追加）**をクリックしてください。 ![デプロイキーのリンクの追加](/assets/images/add-deploy-key.png)
6. タイトルを入力し、公開鍵に貼り付けてください。  ![デプロイキーのページ](/assets/images/deploy-key.png)
7. このキーにリポジトリへの書き込みアクセスを許可したい場合は、**Allow write access（書き込みアクセスの許可）**を選択してください。 書き込みアクセス権を持つデプロイキーを使うと、リポジトリにデプロイメントのプッシュができるようになります。
8. **Add key（キーの追加）**をクリックしてください。

#### 1つのサーバー上で複数のリポジトリを利用する

1つのサーバー上で複数のリポジトリを使うなら、それぞれのリポジトリに対して専用のキーペアを生成しなければなりません。 複数のリポジトリでデプロイキーを再利用することはできません。

サーバーのSSH設定ファイル(通常は`~/.ssh/config`)に、それぞれのリポジトリに対してエイリアスエントリを追加してください。 例:

```bash
Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - リポジトリのエイリアス。
* `Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}` - エイリアスで使用するホスト名を設定する。
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - このエイリアスに秘密鍵を割り当てる。

こうすれば、ホスト名のエイリアスを使ってSSHでリポジトリとやりとりできます。この場合、このエイリアスに割り当てられたユニークなデプロイキーが使われます。 例:

```bash
$ git clone git@{% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

## サーバー間トークン

サーバーがOrganizationをまたいでリポジトリにアクセスする必要がある場合、GitHub Appで必要なアクセスを定義して、そのGitHub Appから_スコープを厳格に設定した_、_サーバー対サーバー_のトークンを生成します。 サーバー対サーバーのトークンは単一または複数のリポジトリをスコープとすることができ、権限を細かく設定できます。 たとえば、リポジトリのコンテンツへの読み取り専用アクセス権を持つトークンを生成できます。

GitHub Appは{% data variables.product.product_name %}でも主役級の存在なので、サーバー間トークンはあらゆるGitHubユーザから分離され、「サービストークン」に相当します。 さらに、サーバー間トークンには独自のレート制限があり、その制限は実行されるOrganizationの規模に応じて拡大されます。 For more information, see [Rate limits for {% data variables.product.prodname_github_apps %}](/developers/apps/rate-limits-for-github-apps).

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
1. Organizationの設定ページからGitHub Appを作成します。 詳しい情報については、「[GitHub Appを作成する](/developers/apps/creating-a-github-app)」を参照してください。
1. GitHub App `id`をメモします。
1. GitHub Appの秘密鍵を生成してダウンロードし、安全な方法で保存します。 詳しい情報については、[秘密鍵を生成する](/developers/apps/authenticating-with-github-apps#generating-a-private-key)を参照してください。
1. 動作させたいリポジトリにGitHubをインストールします。Organizationの全リポジトリにGitHub Appをインストールしても構いません。
1. GitHub AppとOrganizationリポジトリとの接続を表わす`installation_id`を特定します。  GitHub AppとOrganizationの各ペアには、最大1つの`installation_id`があります。 [認証されたアプリケーションのOrganizationインストール情報を取得する](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app)ことで、`installation_id`を識別できます。 このためには、JWTを使用して、GitHub Appとして認証する必要があります。詳細については、「[GitHub Appとして認証する](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app)」を参照してください。
1. 対応するREST APIエンドポイントを使用して、サーバー間トークンを生成します。「[アプリケーションに対するインストールアクセストークンの作成](/rest/reference/apps#create-an-installation-access-token-for-an-app)」を参照してください。 このためには、JWTを使用してGitHub Appとして認証する必要があります。詳しい情報については、「[GitHub App として認証する](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app)」および「[インストールとして認証を行う](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)」を参照してください。
1. このサーバー間トークンを使用して、REST、GraphQL API、またはGitクライアント経由でリポジトリとやり取りします。

## マシンユーザ

サーバーが複数のリポジトリにアクセスする必要がある場合、新しいアカウントを{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}で作成し、自動化専用に使われるSSHキーを添付できます。 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}のこのアカウントは人間によって使用されるものではないため、_マシンユーザ_と呼ばれます。 マシンユーザは、個人リポジトリには[コラボレータ][collaborator]として（読み書きのアクセスを許可）、Organizationのリポジトリには[外部のコラボレータ][outside-collaborator]として（読み書き及び管理アクセスを許可）、あるいは自動化する必要があるリポジトリへのアクセスを持つ[Team][team]に（そのTeamの権限を許可）追加できます。

{% ifversion fpt or ghec %}

{% tip %}

**Tip:** [利用規約][tos]では以下のように述べられています。

> *「ボット」またはその他の自動化された手段で「アカウント」を登録することは許可されていません。*

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

1. サーバー上で[`ssh-keygen`の手順を実行][generating-ssh-keys]し、公開鍵をマシンユーザアカウントに添付してください。
2. マシンユーザアカウントに自動化したいリポジトリへのアクセスを付与してください。 これは、アカウントを[コラボレータ][collaborator]、[外部のコラボレータ][outside-collaborator]として、あるいはOrganization内の[Team][team]に追加することでも行えます。

## 参考リンク
- [通知を設定する](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/github/site-policy/github-terms-of-service/
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team
