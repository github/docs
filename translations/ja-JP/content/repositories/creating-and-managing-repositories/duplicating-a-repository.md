---
title: リポジトリを複製する
intro: リポジトリのミラーをフォークすることなく維持するには、特別なクローン コマンドを実行して、新しいリポジトリにミラープッシュします。
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 4c893597918cb4837e88d13aa6a51b769ab13dd1
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135487'
---
{% ifversion fpt or ghec %}

{% note %}

**注:** 別のバージョン管理システムでホストされているプロジェクトがある場合、インポートツール {% data variables.product.prodname_dotcom %} を使い、プロジェクトを {% data variables.product.prodname_dotcom %} に自動インポートできます。 詳細については、「[インポートツール {% data variables.product.prodname_dotcom %} について](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)」を参照してください。

{% endnote %}

{% endif %}

元のリポジトリをリポジトリの新しいコピー ("ミラー") にプッシュするには、{% data variables.location.product_location %} で[新しいリポジトリを作成する](/articles/creating-a-new-repository)必要があります。 これらの例では、`exampleuser/new-repository` または `exampleuser/mirrored` はミラーです。

## リポジトリをミラーする

{% data reusables.command_line.open_the_multi_os_terminal %}
2. リポジトリのベアクローンを作成します。
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. 新しいリポジトリをミラープッシュします。
  ```shell
  $ cd OLD-REPOSITORY.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
4. 先ほど作成した一時ローカルリポジトリを削除します。
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## {% data variables.large_files.product_name_long %} オブジェクトを含むリポジトリをミラーする

{% data reusables.command_line.open_the_multi_os_terminal %}
2. リポジトリのベアクローンを作成します。 ユーザ名の例をリポジトリを所有する人や Organization の名前に置き換え、リポジトリ名の例を複製したいリポジトリの名前に置き換えてください。
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/OLD-REPOSITORY.git
  ```
3. クローンしたリポジトリに移動します。
  ```shell
  $ cd OLD-REPOSITORY.git
  ```
4. リポジトリの {% data variables.large_files.product_name_long %} オブジェクトをプルします。
  ```shell
  $ git lfs fetch --all
  ```
5. 新しいリポジトリをミラープッシュします。
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
6. リポジトリの {% data variables.large_files.product_name_long %} オブジェクトをミラーにプッシュします。
  ```shell
  $ git lfs push --all https://github.com/EXAMPLE-USER/NEW-REPOSITORY.git
  ```
7. 先ほど作成した一時ローカルリポジトリを削除します。
  ```shell
  $ cd ..
  $ rm -rf OLD-REPOSITORY.git
  ```

## 別の場所にあるリポジトリをミラーする

元のリポジトリから更新を取得するなど、別の場所にあるリポジトリをミラーする場合は、ミラーをクローンして定期的に変更をプッシュできます。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. リポジトリのミラーしたベアクローンを作成します。
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/REPOSITORY-TO-MIRROR.git
  ```
3. プッシュの場所をミラーに設定します。
  ```shell
  $ cd REPOSITORY-TO-MIRROR
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/EXAMPLE-USER/MIRRORED
  ```
ベアクローンと同様に、ミラーしたクローンにはすべてのリモートブランチとタグが含まれますが、フェッチするたびにすべてのローカルリファレンスが上書きされるため、常に元のリポジトリと同じになります。 プッシュする URL を設定することで、ミラーへのプッシュが簡素化されます。

4. ミラーを更新するには、更新をフェッチしてプッシュします。
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## 参考資料

* 「[GitHub に変更をプッシュする](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)」
* 「[GitLarge File Storage と GitHub Desktop について](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)」
* 「[GitHub Importer について](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)」

{% endif %}
