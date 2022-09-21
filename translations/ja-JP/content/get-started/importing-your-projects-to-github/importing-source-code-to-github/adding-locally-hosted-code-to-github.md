---
title: ローカルでホストされているコードを GitHub に追加する
intro: '{% data variables.product.prodname_cli %} または Git Commands を使って、既存のソース コードまたはリポジトリを、コマンド ラインから {% data variables.product.product_name %} に追加する方法を学習します。 次に、コードを共有し、他のユーザーを招待して一緒に作業を行います。'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add locally hosted code
ms.openlocfilehash: 646ea2b0267ffebe546cf014ba7af74ab3c36284
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147855041'
---
## {% data variables.product.product_name %} への既存のソース コードの追加について

既存のソース コードまたはリポジトリがコンピューターまたはプライベート ネットワークにローカルに格納されている場合は、ターミナルにコマンドを入力して {% data variables.product.product_name %} に追加できます。 これを行うには、Git コマンドを直接入力するか、{% data variables.product.prodname_cli %} を使用します。

{% data variables.product.prodname_cli %} は、コンピューターのコマンド ラインから {% data variables.product.prodname_dotcom %} を使用するためのオープン ソース ツールです。 {% data variables.product.prodname_cli %} を使用すると、コマンド ラインを使用して既存のプロジェクトを {% data variables.product.product_name %} に追加するプロセスを簡略化できます。 {% data variables.product.prodname_cli %} の詳細については、「[{% data variables.product.prodname_cli %} について](/github-cli/github-cli/about-github-cli)」を参照してください。

{% tip %}

**ヒント:** ポイントアンドクリック型のユーザー インターフェイスに慣れている方は、プロジェクトを {% data variables.product.prodname_desktop %}で追加してみてください。 詳細については、 *{% data variables.product.prodname_desktop %} ヘルプ* の「[ローカル コンピューターから GitHub Desktop へのリポジトリの追加](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)」を参照してください。

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## {% data variables.product.prodname_cli %} を使用して {% data variables.product.product_name %} にローカル リポジトリを追加する

1. コマンド ラインで、ご自分のプロジェクトのルート ディレクトリに移動します。
1. ローカルディレクトリを Git リポジトリとして初期化します。

    ```shell
    git init -b main
    ```

1. プロジェクト内のすべてのファイルをステージしてコミットする

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. GitHub でプロジェクトのリポジトリを作成するには、`gh repo create` サブコマンドを使用します。 ダイアログが表示されたら、 **[既存のローカル リポジトリを GitHub にプッシュする]** を選択し、リポジトリの目的の名前を入力します。 プロジェクトをユーザー アカウントではなく Organization に属するようにしたい場合は、`organization-name/project-name` で Organization 名とプロジェクト名を指定します。

1. 対話型のプロンプトに従います。 リモートを追加してリポジトリをプッシュするには、リモートを追加し、コミットを現在のブランチにプッシュするように求められたら、[はい] を選択します。

1. または、すべてのプロンプトをスキップするには、`--source` フラグを使用してリポジトリへのパスを指定し、可視性フラグ (`--public`、`--private`、または `--internal`) を渡します。 たとえば、`gh repo create --source=. --public` のようにします。 `--remote` フラグを使ってリモートを指定します。 コミットをプッシュするには、`--push` フラグを渡します。 使用できる引数の詳細については、[GitHub CLI のマニュアル](https://cli.github.com/manual/gh_repo_create)を参照してください。

## Git を使用して {% data variables.product.product_name %} にローカル リポジトリを追加する

{% mac %}

1. {% data variables.product.product_location %} に[新しいリポジトリを作成します](/repositories/creating-and-managing-repositories/creating-a-new-repository)。 エラーを回避するには、*README*、ライセンス、または `gitignore` ファイルを使用して新しいリポジトリを初期化しないでください。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。
    ![[新しいリポジトリの作成] ドロップダウン](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. ワーキングディレクトリをローカルプロジェクトに変更します。
4. `init` コマンドを使用し、ローカル ディレクトリを Git リポジトリとして初期化します。 既定で、最初のブランチは `master` と言います。
   
   Git 2.28.0 以降のバージョンを使用している場合は、`-b` を使用して、既定のブランチ名を設定できます。

   ``` shell
   $ git init -b main
   ```

   Git 2.27.1 以前のバージョンを使用している場合は、`&& git symbolic-ref HEAD refs/heads/main` を使用して、既定のブランチ名を設定できます。

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. ファイルを新しいローカルリポジトリに追加します。 これで、それらのファイルが最初のコミットに備えてステージングされます。
  
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. ローカルリポジトリでステージングしたファイルをコミットします。
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のクイック セットアップ ページにあるリポジトリの上部の {% octicon "clippy" aria-label="The copy to clipboard icon" %} をクリックしてリモート リポジトリ URL をコピーします。
    ![リモートリポジトリの URL フィールドのコピー](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. ターミナルで、ローカル リポジトリがプッシュされる[リモート リポジトリの URL を追加します](/github/getting-started-with-github/managing-remote-repositories)。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. {% data variables.product.product_location %} にローカル リポジトリの[変更をプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)します。
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. {% data variables.product.product_location %} に[新しいリポジトリを作成します](/articles/creating-a-new-repository)。 エラーを回避するには、*README*、ライセンス、または `gitignore` ファイルを使用して新しいリポジトリを初期化しないでください。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。
    ![[新しいリポジトリの作成] ドロップダウン](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. ワーキングディレクトリをローカルプロジェクトに変更します。
4. `init` コマンドを使用し、ローカル ディレクトリを Git リポジトリとして初期化します。 既定で、最初のブランチは `master` と言います。
   
   Git 2.28.0 以降のバージョンを使用している場合は、`-b` を使用して、既定のブランチ名を設定できます。

   ``` shell
   $ git init -b main
   ```

   Git 2.27.1 以前のバージョンを使用している場合は、`&& git symbolic-ref HEAD refs/heads/main` を使用して、既定のブランチ名を設定できます。

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. ファイルを新しいローカルリポジトリに追加します。 これで、それらのファイルが最初のコミットに備えてステージングされます。
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. ローカルリポジトリでステージングしたファイルをコミットします。
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のクイック セットアップ ページにあるリポジトリの上部の {% octicon "clippy" aria-label="The copy to clipboard icon" %} をクリックしてリモート リポジトリ URL をコピーします。
    ![リモートリポジトリの URL フィールドのコピー](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. コマンド プロンプトで、ローカル リポジトリがプッシュされる[リモート リポジトリの URL を追加します](/github/getting-started-with-github/managing-remote-repositories)。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. {% data variables.product.product_location %} にローカル リポジトリの[変更をプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)します。
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. {% data variables.product.product_location %} に[新しいリポジトリを作成します](/articles/creating-a-new-repository)。 エラーを回避するには、*README*、ライセンス、または `gitignore` ファイルを使用して新しいリポジトリを初期化しないでください。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。
    ![[新しいリポジトリの作成] ドロップダウン](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. ワーキングディレクトリをローカルプロジェクトに変更します。
4. `init` コマンドを使用し、ローカル ディレクトリを Git リポジトリとして初期化します。 既定で、最初のブランチは `master` と言います。
   
   Git 2.28.0 以降のバージョンを使用している場合は、`-b` を使用して、既定のブランチ名を設定できます。

   ``` shell
   $ git init -b main
   ```

   Git 2.27.1 以前のバージョンを使用している場合は、`&& git symbolic-ref HEAD refs/heads/main` を使用して、既定のブランチ名を設定できます。

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. ファイルを新しいローカルリポジトリに追加します。 これで、それらのファイルが最初のコミットに備えてステージングされます。
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. ローカルリポジトリでステージングしたファイルをコミットします。
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のクイック セットアップ ページにあるリポジトリの上部の {% octicon "clippy" aria-label="The copy to clipboard icon" %} をクリックしてリモート リポジトリ URL をコピーします。
    ![リモートリポジトリの URL フィールドのコピー](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. ターミナルで、ローカル リポジトリがプッシュされる[リモート リポジトリの URL を追加します](/github/getting-started-with-github/managing-remote-repositories)。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. {% data variables.product.product_location %} にローカル リポジトリの[変更をプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)します。
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## 参考資料

- "[ファイルをリポジトリに追加する](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)"
