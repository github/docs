---
title: Git のセットアップ
redirect_from:
  - /git-installation-redirect/
  - /linux-git-installation/
  - /linux-set-up-git/
  - /mac-git-installation/
  - /mac-set-up-git/
  - /set-up-git-redirect/
  - /win-git-installation/
  - /win-set-up-git/
  - /articles/set-up-git
intro: '{% data variables.product.product_name %} の中心には、Git というオープンソースバージョンコントロールシステム (VCS) があります。 Git は、{% data variables.product.product_name %} に関連してローカルコンピュータで発生するすべての動作の根本を担っています。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

### Git を使用する

コマンドラインで Git を使うには、あなたのコンピュータに Git をダウンロードし、インストールし、設定する必要があります。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} コマンドラインから {% data variables.product.prodname_cli %} をインストールして {% data variables.product.product_name %} を使用することもできます。 {% data variables.product.prodname_cli %} の詳細については、[{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) ドキュメントを参照してください。{% endif %}

ローカルで Git を動かしたいけれどもコマンドラインを使いたくない場合、代わりに [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) クライアントをダウンロードしインストールしてください。  詳しい情報については、「[{% data variables.product.prodname_desktop %} のインストールと設定](/desktop/installing-and-configuring-github-desktop/)」を参照してください。

ローカルでファイルを扱う作業をする必要がない場合、{% data variables.product.product_name %} により、以下を含む、多くの Git 関連のアクションをブラウザで直接実行できます:

- [リポジトリを作成する](/articles/create-a-repo)
- [リポジトリをフォークする](/articles/fork-a-repo)
- [ファイルを管理する](/articles/managing-files-on-github/)
- [交流する](/articles/be-social)

### Git をセットアップする

1. [Git の最新バージョンをダウンロードしてインストールする](https://git-scm.com/downloads)。
2. [Git でユーザ名を設定する](/github/getting-started-with-github/setting-your-username-in-git)。
3. [Git のコミットメールアドレスを設定する](/articles/setting-your-commit-email-address)。

### 次のステップ: Git から {% data variables.product.prodname_dotcom %} で認証する

Git から {% data variables.product.product_name %} リポジトリに接続した場合、HTTPS または SSH を使って、{% data variables.product.product_name %} で認証する必要があります。

#### HTTPS で接続 (推奨)

[HTTPS でクローンする](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)場合、認証情報ヘルパーを使用して [Git で {% data variables.product.prodname_dotcom %} の認証情報をキャッシュ](/github/getting-started-with-github/caching-your-github-credentials-in-git)できます。

#### SSH で接続

[SSH でクローンする場合](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)、{% data variables.product.product_name %} からプッシュまたはプルするには、使っているそれぞれのコンピュータに [SSH キー](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)を生成する必要があります。

### おめでとうございます

おめでとうございます。これで、Git と {% data variables.product.product_name %} はすべてセットアップされました。 次に何をしたいですか?

- **Git のセットアップ**
- 「[リポジトリを作成する](/articles/create-a-repo)」
- [リポジトリをフォークする](/articles/fork-a-repo)
- [交流する](/articles/be-social)
- {% data reusables.support.connect-in-the-forum-bootcamp %}
