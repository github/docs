---
title: フォークを同期する
intro: リポジトリのフォークを最新に保つために上流リポジトリと同期します。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/syncing-a-fork
  - /articles/syncing-a-fork
  - /github/collaborating-with-issues-and-pull-requests/syncing-a-fork
  - /github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
  - /pull-requests/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
permissions: People with write access for a forked repository can sync the fork to the upstream repository.
ms.openlocfilehash: 85b149e26cb65a428d7e9b66aea99d6b62430ae0
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188329'
---
## Web UI からフォークのブランチを同期する

{% ifversion syncing-fork-web-ui %}
1. {% data variables.product.product_name %} で、アップストリーム リポジトリと同期するフォークされたリポジトリのメイン ページに移動します。
2. **[フォークの同期]** ドロップダウンを選択します。
    ![[フォークの同期] ドロップダウンが強調されている](/assets/images/help/repository/sync-fork-dropdown.png)
3. アップストリーム リポジトリからのコミットの詳細を確認し、 **[ブランチを更新]** をクリックします。
    ![[ブランチを更新] ボタンが強調された [フォークの同期] モーダル](/assets/images/help/repository/update-branch-button.png) {% else %}
1. {% data variables.product.product_name %} で、アップストリーム リポジトリと同期するフォークされたリポジトリのメイン ページに移動します。
2. **[アップストリームのフェッチ]** ドロップダウンを選択します。
    ![[アップストリームのフェッチ] ドロップダウン](/assets/images/help/repository/fetch-upstream-drop-down.png)
3. アップストリーム リポジトリからのコミットの詳細を確認し、 **[フェッチしてマージ]** をクリックします。
    ![[フェッチしてマージ] ボタン](/assets/images/help/repository/fetch-and-merge-button.png){% endif %}

アップストリーム リポジトリからの変更によって競合が発生した場合、{% data variables.product.company_short %} は競合を解決するためのプルリクエストを作成するように求められます。

## {% data variables.product.prodname_cli %} を使ってフォークのブランチを同期する

{% data reusables.cli.about-cli %}{% data variables.product.prodname_cli %} の詳細については、「[{% data variables.product.prodname_cli %} について](/github-cli/github-cli/about-github-cli)」を参照してください。

親からリモート フォークを更新するには、`gh repo sync -b BRANCHNAME` サブコマンドを使って、フォークとブランチの名前を引数として指定します。

```shell
$ gh repo sync owner/cli-fork -b BRANCH_NAME
```

アップストリーム リポジトリからの変更によって競合が発生した場合、{% data variables.product.prodname_cli %} では同期できません。宛先ブランチを上書きするように `-force` フラグを設定できます。

## コマンド ラインからフォークのブランチを同期する

フォークをアップストリーム リポジトリと同期する前に、Git でアップストリーム リポジトリを指すリモートを構成する必要があります。 詳しくは、「[フォーク用のリモート リポジトリの構成](/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork)」をご覧ください。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. ワーキングディレクトリをローカルプロジェクトに変更します。
3. 上流リポジトリから、ブランチと各ブランチのコミットをフェッチします。 `BRANCHNAME` へのコミットは、ローカル ブランチ `upstream/BRANCHNAME` に格納されます。

  ```shell
  $ git fetch upstream
  > remote: Counting objects: 75, done.
  > remote: Compressing objects: 100% (53/53), done.
  > remote: Total 62 (delta 27), reused 44 (delta 9)
  > Unpacking objects: 100% (62/62), done.
  > From https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY
  >  * [new branch]      main     -> upstream/main
  ```

4. フォークのローカルのデフォルト ブランチを確認します。この場合は `main` を使用します。

  ```shell
  $ git checkout main
  > Switched to branch 'main'
  ```

5. 上流のデフォルト ブランチ (この場合は `upstream/main`) からの変更をローカルのデフォルト ブランチにマージします。 これにより、ローカルの変更を失うことなく、フォークのデフォルトブランチが上流リポジトリと同期されます。

  ```shell
  $ git merge upstream/main
  > Updating a422352..5fdff0f
  > Fast-forward
  >  README                    |    9 -------
  >  README.md                 |    7 ++++++
  >  2 files changed, 7 insertions(+), 9 deletions(-)
  >  delete mode 100644 README
  >  create mode 100644 README.md
  ```
  
  ローカル ブランチに一意のコミットがなかった場合、Git は早送りを実行します。 詳細については、Git ドキュメントの「[基本的な分岐とマージ](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)」をご覧ください。
  ```shell
  $ git merge upstream/main
  > Updating 34e91da..16c56ad
  > Fast-forward
  >  README.md                 |    5 +++--
  >  1 file changed, 3 insertions(+), 2 deletions(-)
  ``` 
  ローカル ブランチに一意のコミットがある場合は、競合の解決が必要になる場合があります。 詳細については、「[マージ コンフリクトに対処する](/github/collaborating-with-pull-requests/addressing-merge-conflicts)」を参照してください。

{% tip %}

**ヒント**: フォークの同期では、リポジトリのローカル コピーだけが更新されます。 {% data variables.location.product_location %} のフォークを更新するには、[変更をプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)する必要があります。

{% endtip %}
