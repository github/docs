---
title: リモートリポジトリについて
redirect_from:
  - /articles/working-when-github-goes-down/
  - /articles/sharing-repositories-without-github/
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use/
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
intro: 'GitHub''s collaborative approach to development depends on publishing commits from your local repository to {% data variables.product.product_name %} for other people to view, fetch, and update.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### リモートリポジトリについて

リモート URL は、「コードがここに保存されています」ということを表現する Git のしゃれた方法です。 That URL could be your repository on GitHub, or another user's fork, or even on a completely different server.

プッシュできるのは、2 種類の URL アドレスに対してのみです。

* `https://{% data variables.command_line.backticks %}/user/repo.git` のような HTTPS URL
* `git@{% data variables.command_line.backticks %}:user/repo.git` のような SSH URL

Git はリモート URL に名前を関連付けます。デフォルトのリモートは通常 `origin` と呼ばれます。

### Creating remote repositories

`git remote add` コマンドを使用してリモート URL に名前を関連付けることができます。 たとえば、コマンドラインに以下のように入力できます:

```shell
git remote add origin <em> &lt;REMOTE_URL> </em>
```

これで `origin` という名前が `REMOTE_URL` に関連付けられます。

`git remote set-url` を使えば、[リモートの URL を変更](/github/getting-started-with-github/managing-remote-repositories)できます。

### Choosing a URL for your remote repository

{% data variables.product.product_location %} で使用できるリポジトリを複製する方法は複数あります。

アカウントにサインインしているときにリポジトリを表示すると、プロジェクトを自分のコンピュータに複製するために使用できるURLがリポジトリの詳細の下に表示されます.

For information on setting or changing your remote URL, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

### HTTPS URL を使ってクローンを作成する

`https://` は、可視性に関係なく、すべてのリポジトリで使用できます。 `https://` のクローン URL は、ファイアウォールまたはプロキシの内側にいる場合でも機能します。

コマンドラインで、HTTPS URL を使用してリモートリポジトリに `git clone`、`git fetch`、`git pull` または `git push` を行った場合、{% data variables.product.product_name %} のユーザ名とパスワードの入力を求められます。 {% data reusables.user_settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**ヒント**:
- 認証情報ヘルパーを使用すれば、{% data variables.product.prodname_dotcom %} と通信するたびに、{% data variables.product.prodname_dotcom %} の認証情報が Git で記憶されます。 詳細は「[Git に {% data variables.product.prodname_dotcom %} の認証情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git)」を参照してください。
- コマンドラインで {% data variables.product.product_name %} の認証なしでリポジトリを複製するために、クローンの代わりに、{% data variables.product.prodname_desktop %} を使用することができます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_dotcom %} Desktop にリポジトリをクローンする](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)」を参照してください。

{% endtip %}

 {% if currentVersion == "free-pro-team@latest" %}SSH を使用したくてもポート 22 で接続できない場合は、HTTPS ポートを介する SSH を使用できる場合があります。 詳細は、「[HTTPS ポートを介して SSH を使用する](/github/authenticating-to-github/using-ssh-over-the-https-port)」を参照してください。{% endif %}

### SSH URL を使ってクローンする

SSH URL は、SSH (安全なプロトコル) を介した Git リポジトリへのアクセスを提供します。 これらの URL を使用するには、コンピュータで SSH キーペアを生成し、**公開**鍵を {% data variables.product.product_name %} アカウントに追加する必要があります。 詳しい情報については「[{% data variables.product.prodname_dotcom %} に SSH で接続する](/github/authenticating-to-github/connecting-to-github-with-ssh)」を参照してください。

SSH URL を使用して、`git clone`、`git fetch`、`git pull` または `git push` をリモートリポジトリに実行すると、パスワードの入力を求められ、SSH キーパスフレーズを入力する必要があります。 詳しい情報については[SSH キーのパスフレーズを使う](/github/authenticating-to-github/working-with-ssh-key-passphrases)を参照してください。

{% if currentVersion == "free-pro-team@latest" %}SAML シングルサインオン (SSO) を使用している Organization にアクセスしている場合は、認証を受ける前に Organization にアクセスする SSH キーを認可する必要があります。 詳しい情報については「[SAMLシングルサインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」および「[SAML シングルサインオンで使うためにSSHキーを認可する](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

{% tip %}

**ヒント**: SSH URL は、お使いのコンピュータにリポジトリを作成する際にも、または本番サーバーにコードをデプロイする安全な方法としても使用できます。 デプロイスクリプトで SSH エージェント転送を使用して、サーバー上のキーの管理を回避することもできます。 詳細は「[SSH エージェント転送を使用する](/developers/overview/using-ssh-agent-forwarding)」を参照してください。

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}

### {% data variables.product.prodname_cli %} を使ってクローンを作成する

{% data variables.product.prodname_cli %} をインストールして、ターミナルで {% data variables.product.product_name %} ワークフローを使用することもできます。 詳しい情報については、[{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) のドキュメントを参照してください。

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### Subversion を使って複製する

[Subversion](https://subversion.apache.org/) クライアントを使用して、{% data variables.product.prodname_dotcom %} のリポジトリにアクセスすることもできます。 Subversion と Git では、提供する機能群に違いがあります。 詳しい情報については、「[Subversion と Git の違い](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)」を参照してください。

Subversion クライアントから {% data variables.product.prodname_dotcom %} のリポジトリにアクセスすることもできます。 詳細は、「[Subversion クライアントのサポート](/github/importing-your-projects-to-github/support-for-subversion-clients)」を参照してください。
{% endif %}
