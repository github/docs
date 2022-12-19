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
intro: '{% data variables.product.prodname_dotcom %} の中心には、Git というオープンソース バージョン コントロール システム (VCS) があります。 Git は、{% data variables.product.prodname_dotcom %} に関連してローカルコンピュータで発生するすべての動作の根本を担っています。'
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
ms.openlocfilehash: d12782f8531ec856cfa25e7d847527a26e84fb2e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643958'
---
## Git の使用

コマンド ラインで Git を使うには、コンピューターに Git をダウンロードし、インストールし、設定する必要があります。 また、{% data variables.product.prodname_cli %} をインストールして、コマンド ラインから {% data variables.product.prodname_dotcom %} を使用することもできます。 詳細については、「[{% data variables.product.prodname_cli %} について](/github-cli/github-cli/about-github-cli)」を参照してください。

ローカルで Git を操作したいもののコマンド ラインを使いたくない場合、代わりに [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) クライアントをダウンロードしてインストールすることができます。  詳細については、「[{% data variables.product.prodname_desktop %} のインストールと構成の方法](/desktop/installing-and-configuring-github-desktop/)」を参照してください。

ローカルでファイルを扱う作業をする必要がない場合、{% data variables.product.product_name %} により、以下を含む、多くの Git 関連のアクションをブラウザーで直接実行できます。

- [リポジトリを作成する](/articles/create-a-repo)
- [リポジトリをフォークする](/articles/fork-a-repo)
- [ファイルを管理する](/repositories/working-with-files/managing-files)
- [交流する](/articles/be-social)

## Git をセットアップする

1. [最新バージョンの Git をダウンロードしてインストールします](https://git-scm.com/downloads)。

   {% note %}
   
   **注**: Chrome OS デバイスを使用している場合は、追加の設定が必要です。
   
   1. Chrome OS デバイスに Google Play ストアから Termux などのターミナル エミュレーターをインストールします。
   1. インストールしたターミナル エミュレーターから Git をインストールします。 たとえば、Termux で入力を求められたら、`apt install git` を入力後、`y` を入力します。 
   
   {% endnote %}

1. [Git でユーザー名を設定します](/github/getting-started-with-github/setting-your-username-in-git)。
1. [Git でコミット メール アドレスを設定します](/articles/setting-your-commit-email-address)。

## Git から {% data variables.product.prodname_dotcom %} で認証する

Git から {% data variables.product.prodname_dotcom %} リポジトリに接続する場合、HTTPS または SSH を使って、{% data variables.product.product_name %} で認証する必要があります。

{% note %}

**注:** HTTP または SSH の場合、{% data variables.product.prodname_cli %} を使用して {% data variables.product.product_name %} に対して認証を行うことができます。 詳細については、「[`gh auth login`](https://cli.github.com/manual/gh_auth_login)」を参照してください。

{% endnote %}

### HTTPS で接続 (推奨)

HTTPS を使用して複製する場合は、資格情報ヘルパーを使用して、Git で {% data variables.product.prodname_dotcom %} の資格情報をキャッシュできます。 詳細については、「[HTTPS URL を使用して複製する](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)」および「[Git に {% data variables.product.prodname_dotcom %} の資格情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git)」を参照してください。

### SSH で接続

SSH を使用して複製する場合は、{% data variables.product.product_name %} からプッシュまたはプルするために使用する各コンピューターで SSH キーを生成する必要があります。 詳細については、「[SSH URL を使用して複製する](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)」および「[新しい SSH キーを生成する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)」を参照してください。

## 次の手順

これで、Git と {% data variables.product.prodname_dotcom %} のセットアップがすべて完了しました。 これで、プロジェクトを配置できるリポジトリを作成できます。 リポジトリにコードを保存すると、コードをバックアップして世界中のユーザーと共有できます。 

* {% data reusables.getting-started.create-a-repository %}

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
