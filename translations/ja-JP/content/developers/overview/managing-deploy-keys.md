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
  - api
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
