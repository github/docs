---
title: コマンド ラインを使用してマージ コンフリクトを解決する
intro: コマンド ラインとテキスト エディターを使用することで、マージ コンフリクトを解決できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
ms.openlocfilehash: 1d4ff97c2a93d3e5a7aebaa8752810e284203bc1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883458'
---
マージコンフリクトは、競合している変更がファイルの同じ行に行われるとき、またはある人があるファイルを編集し別の人が同じファイルを削除すると発生します。 詳細については、「[マージコンフリクトについて](/articles/about-merge-conflicts/)」を参照してください。

{% tip %}

**ヒント:** {% data variables.product.product_name %} のコンフリクト エディターを使用することで、pull request の一部であるブランチの間で競合している行変更のマージ競合を解決できます。 詳細については、「[GitHub でのマージ コンフリクトを解決する](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)」を参照してください。

{% endtip %}

## 競合している行変更のマージ コンフリクト

競合している行変更により発生するマージ コンフリクトを解決するには、新しいコミットにどの変更を組み込むかをいくつかの別のブランチから選択する必要があります。

たとえば、自分と別のユーザーの両方が、同じ Git リポジトリの別のブランチにあるファイル _styleguide.md_ で同じ行を編集した場合、これらのブランチをマージしようとするとマージ競合エラーが発生します。 これらのブランチをマージする前に、新たなコミットでこのマージコンフリクトを解決する必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. マージ コンフリクトが発生しているローカルの Git リポジトリに移動します。
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. マージ コンフリクトの影響を受けるファイルのリストを生成します。 この例では、ファイル *styleguide.md* にマージ競合が発生しています。
  ```shell
  $ git status
  > # On branch branch-b
  > # You have unmerged paths.
  > #   (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #   (use "git add <file>..." to mark resolution)
  > #
  > # both modified:      styleguide.md
  > #
  > no changes added to commit (use "git add" and/or "git commit -a")
  ```
4. [Atom](https://atom.io/) などの適切なテキスト エディターを開き、マージ競合が発生しているファイルに移動します。
5. ファイル内でマージ競合の先頭を確認するには、ファイルで競合マーカー `<<<<<<<` を検索します。 テキスト エディターでファイルを開くと、行 `<<<<<<< HEAD` の後に HEAD つまりベース ブランチからの変更があることがわかります。 次に、`=======` があります。これは、自分の変更と他のブランチでの変更を区別するものであり、その後に `>>>>>>> BRANCH-NAME` が続きます。 この例では、あるユーザーがベース (HEAD) ブランチに "open an issue" と書き込み、別のユーザーが比較ブランチ (`branch-a`) に "ask your question in IRC" と書き込みました。

    ```
    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a
    ```
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %}この例では、両方の変更が最終的なマージに取り込まれます。

  ```shell
  If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
  ```
7. 変更を追加またはステージングします。
  ```shell
  $ git add .
  ```
8. 変更をコメントを付けてコミットします。
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

これで、コマンド ラインでブランチをマージできます。または、{% data variables.product.product_name %} で[変更をリモート リポジトリにプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)し、pull request で[変更をマージする](/articles/merging-a-pull-request/)ことができます。

## 削除したファイルのマージコンフリクト

ある人があるブランチでファイルを削除し、別の人が同じファイルを編集するなどの、ファイルへの変更が競合していることにより発生するマージコンフリクトを解決するには、削除したファイルを削除するか保持するかを新しいコミットで選択する必要があります。

たとえば、自分が *README.md* などのファイルを編集し、別のユーザーが同じ Git リポジトリ内の別のブランチにある同じファイルを削除した場合、これらのブランチをマージしようとするとマージ競合エラーが発生します。 これらのブランチをマージする前に、新たなコミットでこのマージコンフリクトを解決する必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. マージ コンフリクトが発生しているローカルの Git リポジトリに移動します。
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. マージ コンフリクトの影響を受けるファイルのリストを生成します。 この例では、ファイル *README.md* にマージ競合が発生しています。
  ```shell
  $ git status
  > # On branch main
  > # Your branch and 'origin/main' have diverged,
  > # and have 1 and 2 different commits each, respectively.
  > #  (use "git pull" to merge the remote branch into yours)
  > # You have unmerged paths.
  > #  (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #  (use "git add/rm <file>..." as appropriate to mark resolution)
  > #
  > #   deleted by us:   README.md
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
3. [Atom](https://atom.io/) などの適切なテキスト エディターを開き、マージ競合が発生しているファイルに移動します。
6. 削除したファイルを保存するかどうかを決めます。 削除したファイルに行った最新の変更をテキスト エディターで確認することをお勧めします。

 削除したファイルをリポジトリに追加して戻すには:
  ```shell
  $ git add README.md
  ```
 このファイルをリポジトリから削除するには:
  ```shell
  $ git rm README.md
  > README.md: needs merge
  > rm 'README.md'
  ```
7. 変更をコメントを付けてコミットします。
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

これで、コマンド ラインでブランチをマージできます。または、{% data variables.product.product_name %} で[変更をリモート リポジトリにプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)し、pull request で[変更をマージする](/articles/merging-a-pull-request/)ことができます。

## 参考資料

- "[マージコンフリクトについて](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)"
- "[プル リクエストをローカルでチェックアウトする](/articles/checking-out-pull-requests-locally/)"
