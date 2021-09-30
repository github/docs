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
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: '{% data variables.product.product_name %} の中心には、Git というオープンソースバージョンコントロールシステム (VCS) があります。 Git は、{% data variables.product.product_name %} に関連してローカルコンピュータで発生するすべての動作の根本を担っています。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Git を使用する

コマンドラインで Git を使うには、あなたのコンピュータに Git をダウンロードし、インストールし、設定する必要があります。 You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.product_name %} from the command line. 詳しい情報については、「[{% data variables.product.prodname_cli %} について](/github-cli/github-cli/about-github-cli)」を参照してください。

ローカルで Git を動かしたいけれどもコマンドラインを使いたくない場合、代わりに [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) クライアントをダウンロードしインストールしてください。  詳しい情報については、「[{% data variables.product.prodname_desktop %} のインストールと設定](/desktop/installing-and-configuring-github-desktop/)」を参照してください。

ローカルでファイルを扱う作業をする必要がない場合、{% data variables.product.product_name %} により、以下を含む、多くの Git 関連のアクションをブラウザで直接実行できます:

- [リポジトリを作成する](/articles/create-a-repo)
- [リポジトリをフォークする](/articles/fork-a-repo)
- [ファイルを管理する](/repositories/working-with-files/managing-files)
- [交流する](/articles/be-social)

## Git をセットアップする

1. [Git の最新バージョンをダウンロードしてインストールする](https://git-scm.com/downloads)。
2. [Git でユーザ名を設定する](/github/getting-started-with-github/setting-your-username-in-git)。
3. [Git のコミットメールアドレスを設定する](/articles/setting-your-commit-email-address)。

## 次のステップ: Git から {% data variables.product.prodname_dotcom %} で認証する

Git から {% data variables.product.product_name %} リポジトリに接続した場合、HTTPS または SSH を使って、{% data variables.product.product_name %} で認証する必要があります。

{% note %}

**Note:** You can authenticate to {% data variables.product.product_name %} using {% data variables.product.prodname_cli %}, for either HTTP or SSH. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### HTTPS で接続 (推奨)

[HTTPS でクローンする](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)場合、認証情報ヘルパーを使用して [Git で {% data variables.product.prodname_dotcom %} の認証情報をキャッシュ](/github/getting-started-with-github/caching-your-github-credentials-in-git)できます。

### SSH で接続

[SSH でクローンする場合](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)、{% data variables.product.product_name %} からプッシュまたはプルするには、使っているそれぞれのコンピュータに [SSH キー](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)を生成する必要があります。

## おめでとうございます

おめでとうございます。これで、Git と {% data variables.product.product_name %} はすべてセットアップされました。 You may now choose to create a repository where you can put your projects. This is a great way to back up your code and makes it easy to share the code around the world. For more information see "[Create a repository](/articles/create-a-repo)".

You can create a copy of a repository by forking it and propose the changes that you want to see without affecting the upstream repository. For more information see "[Fork a repository](/articles/fork-a-repo)."

Each repository in {% data variables.product.product_name %} is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on {% data variables.product.product_name %}. For more information see "[Be social](/articles/be-social)."

{% data reusables.support.connect-in-the-forum-bootcamp %}
