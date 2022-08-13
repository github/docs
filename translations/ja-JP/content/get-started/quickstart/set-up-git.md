---
title: Git のセットアップ
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: '{% data variables.product.prodname_dotcom %} の中心には、Git というオープンソースバージョンコントロールシステム (VCS) があります。 Git は、{% data variables.product.prodname_dotcom %} に関連してローカルコンピュータで発生するすべての動作の根本を担っています。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Git を使用する

To use Git on the command line, you will need to download, install, and configure Git on your computer. You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.prodname_dotcom %} from the command line. 詳しい情報については、「[{% data variables.product.prodname_cli %} について](/github-cli/github-cli/about-github-cli)」を参照してください。

If you want to work with Git locally, but do not want to use the command line, you can instead download and install the [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) client.  詳しい情報については、「[{% data variables.product.prodname_desktop %} のインストールと設定](/desktop/installing-and-configuring-github-desktop/)」を参照してください。

If you do not need to work with files locally, {% data variables.product.product_name %} lets you complete many Git-related actions directly in the browser, including:

- [リポジトリを作成する](/articles/create-a-repo)
- [リポジトリをフォークする](/articles/fork-a-repo)
- [ファイルを管理する](/repositories/working-with-files/managing-files)
- [交流する](/articles/be-social)

## Git をセットアップする

1. [Git の最新バージョンをダウンロードしてインストールする](https://git-scm.com/downloads)。

{% note %}

**Note**: If you are using a Chrome OS device, additional set up is required:

2. Install a terminal emulator such as Termux from the Google Play Store on your Chrome OS device.
3. From the terminal emulator that you installed, install Git. For example, in Termux, enter `apt install git` and then type `y` when prompted.

{% endnote %}

2. [Git でユーザ名を設定する](/github/getting-started-with-github/setting-your-username-in-git)。
3. [Git のコミットメールアドレスを設定する](/articles/setting-your-commit-email-address)。

## Authenticating with {% data variables.product.prodname_dotcom %} from Git

When you connect to a {% data variables.product.prodname_dotcom %} repository from Git, you will need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH.

{% note %}

**Note:** You can authenticate to {% data variables.product.product_name %} using {% data variables.product.prodname_cli %}, for either HTTP or SSH. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### HTTPS で接続 (推奨)

If you clone with HTTPS, you can cache your {% data variables.product.prodname_dotcom %} credentials in Git using a credential helper. For more information, see "[Cloning with HTTPS urls](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" and "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)."

### SSH で接続

If you clone with SSH, you must generate SSH keys on each computer you use to push or pull from {% data variables.product.product_name %}. For more information, see "[Cloning with SSH urls](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" and "[Generating a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

## 次のステップ

You now have Git and {% data variables.product.prodname_dotcom %} all set up. You may now choose to create a repository where you can put your projects. Saving your code in a repository allows you to back up your code and share it around the world.

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
