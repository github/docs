---
title: どのリモート URL を使うべきですか？
redirect_from:
  - /articles/which-url-should-i-use/
  - /articles/which-remote-url-should-i-use
intro: '{% data variables.product.product_location %} で使用できるリポジトリを複製する方法は複数あります。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

アカウントにサインインしているときにリポジトリを表示すると、プロジェクトを自分のコンピュータに複製するために使用できるURLがリポジトリの詳細の下に表示されます:

リモート URL の設定または変更については、「[リモート URL を変更する](/articles/changing-a-remote-s-url)」を参照してください。

### Cloning with HTTPS URLs

The `https://` clone URLs are available on all repositories, regardless of visibility. `https://` clone URLs work even if you are behind a firewall or proxy.

コマンドラインで、HTTPS URL を使用してリモートリポジトリに `git clone`、`git fetch`、`git pull` または `git push` を行った場合、{% data variables.product.product_name %} のユーザ名とパスワードの入力を求められます。 {% data reusables.user_settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**ヒント**:

- 認証情報ヘルパーを使用すれば、{% data variables.product.prodname_dotcom %} と通信するたびに、{% data variables.product.prodname_dotcom %} の認証情報が Git で記憶されます。 詳細は「[Git に {% data variables.product.prodname_dotcom %} の認証情報をキャッシュする](/github/using-git/caching-your-github-credentials-in-git)」を参照してください。

- コマンドラインで {% data variables.product.product_name %} の認証なしでリポジトリを複製するために、クローンの代わりに、{% data variables.product.prodname_desktop %} を使用することができます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_dotcom %} Desktop にリポジトリをクローンする](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)」を参照してください。

{% endtip %}

 {% if currentVersion == "free-pro-team@latest" %}If you'd rather use SSH but cannot connect over port 22, you might be able to use SSH over the HTTPS port. 詳細は、「[HTTPS ポートを介して SSH を使用する](/github/authenticating-to-github/using-ssh-over-the-https-port)」を参照してください。{% endif %}

### SSH URL を使ってクローンする

SSH URL は、SSH (安全なプロトコル) を介した Git リポジトリへのアクセスを提供します。 これらの URL を使用するには、コンピュータで SSH キーペアを生成し、**公開**鍵を {% data variables.product.product_name %} アカウントに追加する必要があります。 詳しい情報については「[{% data variables.product.prodname_dotcom %} に SSH で接続する](/github/authenticating-to-github/connecting-to-github-with-ssh)」を参照してください。

SSH URL を使用して、`git clone`、`git fetch`、`git pull` または `git push` をリモートリポジトリに実行すると、パスワードの入力を求められ、SSH キーパスフレーズを入力する必要があります。 詳しい情報については[SSH キーのパスフレーズを使う](/github/authenticating-to-github/working-with-ssh-key-passphrases)を参照してください。

{% if currentVersion == "free-pro-team@latest" %}If you are accessing an organization that uses SAML single sign-on (SSO), you must authorize your SSH key to access the organization before you authenticate. 詳しい情報については「[SAMLシングルサインオンでの認証について](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)」および「[SAML シングルサインオンで使うためにSSHキーを認可する](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)」を参照してください。{% endif %}

{% tip %}

**ヒント**: SSH URL は、お使いのコンピュータにリポジトリを作成する際にも、または本番サーバーにコードをデプロイする安全な方法としても使用できます。 デプロイスクリプトで SSH エージェント転送を使用して、サーバー上のキーの管理を回避することもできます。 詳細は「[SSH エージェント転送を使用する](/developers/overview/using-ssh-agent-forwarding)」を参照してください。

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}

### Cloning with {% data variables.product.prodname_cli %}

You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.product_name %} workflows in your terminal. For more information, the [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) documentation.

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### Subversion を使って複製する

[Subversion](https://subversion.apache.org/) クライアントを使用して、{% data variables.product.prodname_dotcom %} のリポジトリにアクセスすることもできます。 Subversion と Git では、提供する機能群に違いがあります。 詳しい情報については、「[Subversion と Git の違い](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)」を参照してください。
You can also access repositories on

{% data variables.product.prodname_dotcom %} from Subversion clients. 詳細は、「[Subversion クライアントのサポート](/github/importing-your-projects-to-github/support-for-subversion-clients)」を参照してください。
{% endif %}

### 参考リンク

- _Pro Git_ ブックのサイトの「[リモートでの作業](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)」
