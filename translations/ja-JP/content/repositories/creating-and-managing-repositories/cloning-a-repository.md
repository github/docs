---
title: リポジトリをクローンする
intro: '{% data variables.product.product_location %} にリポジトリを作成した場合、それはリモートリポジトリとなります。 リポジトリのクローンを作成して、コンピューター上にローカルコピーを作成し、これらの 2 つの場所の間で同期することができます。'
redirect_from:
  - /articles/cloning-a-repository
  - /articles/cloning-a-repository-from-github
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository
  - /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: fbe00d1568a2f746362d434e769aef2f3466bcf1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132348'
---
## リポジトリのクローンについて

{% data variables.product.product_location %} からローカルコンピューターにリポジトリのクローンを作成して、マージの競合の修正、ファイルの追加または削除、より大きなコミットのプッシュを簡単に行うことができます。 リポジトリのクローンを作成する場合は、リポジトリを {% data variables.product.product_location %} からローカルマシンにコピーします。

リポジトリをクローンすると、その時点で {% data variables.product.product_location %} にあるすべてのリポジトリデータの完全なコピーがプルダウンされます。これには、プロジェクトのすべてのファイルとフォルダのすべてのバージョンも含まれます。 変更を {% data variables.product.product_location %} のリモートリポジトリにプッシュするか、他のユーザの変更を {% data variables.product.product_location %} からプルすることができます。 詳細については、「[Git の使用](/github/getting-started-with-github/using-git)」を参照してください。

既存のリポジトリのクローンを作成することも、他のユーザの既存のリポジトリのクローンを作成してプロジェクトに貢献することもできます。

## リポジトリをクローンする

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

ローカルでリポジトリをクローンするには、`repo clone` サブコマンドを使用します。 `repository` パラメーターをリポジトリ名で置き換えます。 たとえば、「`octo-org/octo-repo`」、「`monalisa/octo-repo`」、「`octo-repo`」のように指定します。 `OWNER/REPO` リポジトリ引数の `OWNER/` 部分を省略した場合、既定で認証ユーザーの名前になります。

```shell
gh repo clone <em>repository</em>
```

GitHub URL を使用してリポジトリをクローンすることもできます。

```shell
gh repo clone <em>https://github.com/cli/cli</em>
```

{% endcli %}

{% desktop %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
4. {% data variables.product.prodname_desktop %} のプロンプトに従い、クローンを完了させてください。

詳細については、「[{% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_desktop %} にリポジトリをクローンする](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)」を参照してください。

{% enddesktop %}

## 空のリポジトリをクローンする

空のリポジトリにはファイルが含まれていません。 リポジトリを作成するときに README でリポジトリを初期化しない場合に多くあります。

{% data reusables.repositories.navigate-to-repo %}
2. HTTPS でコマンドラインを使用してリポジトリをクローンするには、[Quick setup]\(クイック セットアップ\) で {% octicon "clippy" aria-label="The clipboard icon" %} をクリックします。 組織の SSH 認証局から発行された証明書を含む SSH キーを使用してリポジトリをクローンするには、 **[SSH]** 、{% octicon "clippy" aria-label="The clipboard icon" %} の順にクリックします。
   ![[Empty repository clone URL]\(URL で空のリポジトリをクローン\) ボタン](/assets/images/help/repository/empty-https-url-clone-button.png)

   または、リポジトリをデスクトップにクローンするには、{% octicon "desktop-download" aria-label="The desktop download button" %} **[Set up in Desktop]\(デスクトップでセットアップ\)** をクリックし、プロンプトに従ってクローンを完了します。
   ![[Empty repository clone desktop]\(デスクトップで空のリポジトリをクローン\) ボタン](/assets/images/help/repository/empty-desktop-clone-button.png)

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %} {% data reusables.command_line.git-clone-url %} {% data reusables.command_line.local-clone-created %}

## クローンエラーのトラブルシューティング

リポジトリのクローンを作成するときに、エラーが発生する可能性があります。

リポジトリをクローンできない場合は、以下を確認してください。

- HTTPS を使用して接続できる。 詳細については、「[HTTPS クローニング エラー](/github/creating-cloning-and-archiving-repositories/https-cloning-errors)」を参照してください。
- クローンするリポジトリへのアクセス権を持っている。 詳細については、「[エラー: リポジトリが見つかりません](/github/creating-cloning-and-archiving-repositories/error-repository-not-found)」を参照してください。
- クローンするデフォルトブランチが存在する。 詳細については、「[エラー: リモート HEAD が存在しない ref を参照するため、チェックアウトできません](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors#error-remote-head-refers-to-nonexistent-ref-unable-to-checkout)」を参照してください。

{% ifversion fpt or ghec %}

## 参考資料

- 「[接続問題のトラブルシューティング](/articles/troubleshooting-connectivity-problems)」 {% endif %}
