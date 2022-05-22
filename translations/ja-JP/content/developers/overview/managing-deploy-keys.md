---
title: デプロイキーの管理
intro: デプロイメントのスクリプトを自動化する際にサーバー上のSSHキーを管理する様々な方法と、どれが最適な方法かを学んでください。
redirect_from:
  - /guides/managing-deploy-keys/
  - /v3/guides/managing-deploy-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


SSHエージェントのフォワーディング、OAuthトークンでのHTTPS、デプロイキー、マシンユーザを使ってデプロイメントスクリプトを自動化する際に、サーバー上のSSHキーを管理できます。

### SSHエージェントのフォワーディング

多くの場合、特にプロジェクトの開始時には、SSHエージェントのフォワーディングが最も素早くシンプルに使える方法です。 エージェントのフォワーディングでは、ローカルの開発コンピュータで使うのと同じSSHキーを使います。

##### 長所

* 新しいキーを生成したり追跡したりしなくていい。
* キーの管理は不要。ユーザはローカルと同じ権限をサーバーでも持つ。
* サーバーにキーは保存されないので、サーバーが侵害を受けた場合でも、侵害されたキーを追跡して削除する必要はない。

##### 短所

* ユーザはデプロイするためにSSH**しなければならない**。自動化されたデプロイプロセスは利用できない。
* SSHエージェントのフォワーディングは、Windowsのユーザが実行するのが面倒。

##### セットアップ

1. エージェントのフォワーディングをローカルでオンにしてください。 詳しい情報については[SSHエージェントフォワーディングのガイド][ssh-agent-forwarding]を参照してください。
2. エージェントフォワーディングを使用するように、デプロイスクリプトを設定してください。 たとえばbashのスクリプトでは、以下のようにしてエージェントのフォワーディングを有効化することになるでしょう。 `ssh -A serverA 'bash -s' < deploy.sh`

### OAuthトークンを使ったHTTPSでのクローニング

SSHキーを使いたくないなら、[OAuthトークンでHTTPS][git-automation]を利用できます。

##### 長所

* サーバーにアクセスできる人なら、リポジトリをデプロイできる。
* ユーザはローカルのSSH設定を変更する必要がない。
* 複数のトークン（ユーザごと）が必要ない。サーバーごとに1つのトークンで十分。
* トークンはいつでも取り消しできるので、本質的には使い捨てのパスワードにすることができる。
{% if enterpriseServerVersions contains currentVersion %}
* 新しいトークンの作成は、[OAuth API](/rest/reference/oauth-authorizations#create-a-new-authorization)を使って容易にスクリプト化できる。
{% endif %}

##### 短所

* トークンを確実に正しいアクセススコープで設定しなければならない。
* トークンは本質的にはパスワードであり、パスワードと同じように保護しなければならない。

##### セットアップ

[トークンでのGit自動化ガイド][git-automation]を参照してください。

### デプロイキー

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

##### 長所

* リポジトリとサーバーにアクセスできる人は、誰でもプロジェクトをデプロイできる。
* ユーザはローカルのSSH設定を変更する必要がない。
* デプロイキーはデフォルトではリードオンリーだが、リポジトリに追加する際には書き込みアクセス権を与えることができる。

##### 短所

* デプロイキーは単一のリポジトリに対するアクセスだけを許可できる。 より複雑なプロジェクトは、同じサーバーからプルする多くのリポジトリを持っていることがある。
* デプロイキーは通常パスフレーズで保護されていないので、サーバーが侵害されると簡単にキーにアクセスされることになる。

##### セットアップ

1. サーバー上で[`ssh-keygen`の手順を実行][generating-ssh-keys]し、生成された公開／秘密RSAキーのペアを保存した場所を覚えておいてください。
2. {% data variables.product.product_name %}の任意のページの右上で、プロフィールの写真をクリックし、続いて**Your profile（あなたのプロフィール）**をクリックしてください。 ![プロフィールへのアクセス](/assets/images/profile-page.png)
3. プロフィールページで**Repositories（リポジトリ）**をクリックし、続いてリポジトリの名前をクリックしてください。 ![リポジトリのリンク](/assets/images/repos.png)
4. リポジトリで**Settings（設定）**をクリックしてください。 ![リポジトリの設定](/assets/images/repo-settings.png)
5. サイドバーで**Deploy Keys（デプロイキー）**をクリックし、続いて**Add deploy key（デプロイキーの追加）**をクリックしてください。 ![デプロイキーのリンクの追加](/assets/images/add-deploy-key.png)
6. タイトルを入力し、公開鍵に貼り付けてください。  ![デプロイキーのページ](/assets/images/deploy-key.png)
7. このキーにリポジトリへの書き込みアクセスを許可したい場合は、**Allow write access（書き込みアクセスの許可）**を選択してください。 書き込みアクセス権を持つデプロイキーを使うと、リポジトリにデプロイメントのプッシュができるようになります。
8. **Add key（キーの追加）**をクリックしてください。

##### 1つのサーバー上で複数のリポジトリを利用する

1つのサーバー上で複数のリポジトリを使うなら、それぞれのリポジトリに対して専用のキーペアを生成しなければなりません。 複数のリポジトリでデプロイキーを再利用することはできません。

サーバーのSSH設定ファイル(通常は`~/.ssh/config`)に、それぞれのリポジトリに対してエイリアスエントリを追加してください。 例:

```bash
Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - リポジトリのエイリアス。
* `Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}` - エイリアスで使うホスト名の設定。
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - このエイリアスに秘密鍵を割り当てる。

こうすれば、ホスト名のエイリアスを使ってSSHでリポジトリとやりとりできます。この場合、このエイリアスに割り当てられたユニークなデプロイキーが使われます。 例:

```bash
$ git clone git@{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

### Server-to-server tokens

If your server needs to access repositories across one or more organizations, you can use a GitHub App to define the access you need, and then generate _tightly-scoped_, _server-to-server_ tokens from that GitHub App. The server-to-server tokens can be scoped to single or multiple repositories, and can have fine-grained permissions. For example, you can generate a token with read-only access to a repository's contents.

Since GitHub Apps are a first class actor on  {% data variables.product.product_name %}, the server-to-server tokens are decoupled from any GitHub user, which makes them comparable to "service tokens". Additionally, server-to-server tokens have dedicated rate limits that scale with the size of the organizations that they act upon. For more information, see [Rate limits for Github Apps](/developers/apps/rate-limits-for-github-apps).

##### 長所

- Tightly-scoped tokens with well-defined permission sets and expiration times (1 hour, or less if revoked manually using the API).
- Dedicated rate limits that grow with your organization.
- Decoupled from GitHub user identities, so they do not consume any licensed seats.
- Never granted a password, so cannot be directly signed in to.

##### 短所

- Additional setup is needed to create the GitHub App.
- Server-to-server tokens expire after 1 hour, and so need to be re-generated, typically on-demand using code.

##### セットアップ

1. Determine if your GitHub App should be public or private. If your GitHub App will only act on repositories within your organization, you likely want it private.
1. Determine the permissions your GitHub App requires, such as read-only access to repository contents.
1. Create your GitHub App via your organization's settings page. For more information, see [Creating a GitHub App](/developers/apps/creating-a-github-app).
1. Note your GitHub App `id`.
1. Generate and download your GitHub App's private key, and store this safely. For more information, see [Generating a private key](/developers/apps/authenticating-with-github-apps#generating-a-private-key).
1. Install your GitHub App on the repositories it needs to act upon, optionally you may install the GitHub App on all repositories in your organization.
1. Identify the `installation_id` that represents the connection between your GitHub App and the organization repositories it can access.  Each GitHub App and organization pair have at most a single `installation_id`. You can identify this `installation_id` via [Get an organization installation for the authenticated app](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app). This requires authenticating as a GitHub App using a JWT, for more information see [Authenticating as a GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app).
1. Generate a server-to-server token using the corresponding REST API endpoint, [Create an installation access token for an app](/rest/reference/apps#create-an-installation-access-token-for-an-app). This requires authenticating as a GitHub App using a JWT, for more information see [Authenticating as a GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app), and [Authenticating as an installation](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation).
1. Use this server-to-server token to interact with your repositories, either via the REST or GraphQL APIs, or via a Git client.

### マシンユーザ

サーバーが複数のリポジトリにアクセスしなければならないのであれば、自動化専用に使われる新しい{% data variables.product.product_name %}アカウントを作成し、SSHキーを添付できます。 この{% data variables.product.product_name %}アカウントは人によって使われることはないので、_マシンユーザ_と呼ばれます。 マシンユーザは、個人リポジトリには[コラボレータ][collaborator]として（読み書きのアクセスを許可）、Organizationのリポジトリには[外部のコラボレータ][outside-collaborator]として（読み書き及び管理アクセスを許可）、あるいは自動化する必要があるリポジトリへのアクセスを持つ[Team][team]に（そのTeamの権限を許可）追加できます。

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tip:** [利用規約][tos]では以下のように述べられています。

> *「ボット」またはその他の自動化された手段で「アカウント」を登録することは許可されていません。*

これは、アカウントの生成を自動化することはできないということです。 しかし、プロジェクトやOrganization内でデプロイスクリプトのような自動化タスクのために1つのマシンユーザを作成したいなら、それはまったく素晴らしいことです。

{% endtip %}

{% endif %}

##### 長所

* リポジトリとサーバーにアクセスできる人は、誰でもプロジェクトをデプロイできる。
* （人間の）ユーザがローカルのSSH設定を変更する必要がない。
* 複数のキーは必要ない。サーバーごとに1つでよい。

##### 短所

* Organizationだけがマシンユーザをリードオンリーのアクセスにできる。 個人リポジトリは、常にコラボレータの読み書きアクセスを許可する。
* マシンユーザのキーは、デプロイキーのように、通常パスフレーズで保護されない。

##### セットアップ

1. サーバー上で[`ssh-keygen`の手順を実行][generating-ssh-keys]し、公開鍵をマシンユーザアカウントに添付してください。
2. マシンユーザアカウントに自動化したいリポジトリへのアクセスを付与してください。 これは、アカウントを[コラボレータ][collaborator]、[外部のコラボレータ][outside-collaborator]として、あるいはOrganization内の[Team][team]に追加することでも行えます。

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /articles/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team
