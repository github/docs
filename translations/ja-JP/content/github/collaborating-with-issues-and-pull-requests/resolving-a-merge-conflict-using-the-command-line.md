---
title: コマンド ラインを使用してマージ コンフリクトを解決する
intro: コマンド ラインとテキスト エディターを使用することで、マージ コンフリクトを解決できます。
redirect_from:
  - /articles/resolving-a-merge-conflict-from-the-command-line/
  - /articles/resolving-a-merge-conflict-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

マージコンフリクトは、競合している変更がファイルの同じ行に行われるとき、またはある人があるファイルを編集し別の人が同じファイルを削除すると発生します。 詳細は「[マージコンフリクトについて](/articles/about-merge-conflicts/)」を参照してください。

{% tip %}

**ヒント:** {% data variables.product.product_name %} でコンフリクト エディターを使用することで、Pull Request の一部であるブランチの間で競合している行変更のマージ コンフリクトを解消できます。 詳細については、「[GitHub でマージコンフリクトを解決する](/articles/resolving-a-merge-conflict-on-github)」を参照してください。

{% endtip %}

### 競合している行変更のマージ コンフリクト

競合している行変更により発生するマージ コンフリクトを解決するには、新しいコミットにどの変更を組み込むかをいくつかの別のブランチから選択する必要があります。

たとえば、あなたともう一人が両方とも、同じ Git リポジトリの別のブランチにあるファイル _styleguide.md_ で同じ行を編集した場合、これらのブランチをマージしようとするとマージ コンフリクト エラーが発生します。 これらのブランチをマージする前に、新たなコミットでこのマージ コンフリクトを解決する必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. マージ コンフリクトが発生しているローカルの Git リポジトリに移動します。
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. マージ コンフリクトの影響を受けるファイルのリストを生成します。 この例では、ファイル *styleguide.md* にマージコンフリクトが発生しています。
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
4. [Atom](https://atom.io/) などのお気に入りのテキスト エディターを開き、マージ コンフリクトが発生しているファイルに移動します。
5. ファイル内でマージ コンフリクトの始まりを確認するには、ファイル内のコンフリクト マーカー `<<<<<<<` を検索します。 テキストエディタでファイルを開くと、`<<<<<<< HEAD` 行の後に HEAD ブランチまたはベースブランチからの変更が見えます。 次に、`=======` が見えます。これは、自分の変更と他のブランチの変更を区別するもので、その後に `>>>>>>> BRANCH-NAME` が続きます。 この例では、ある人がベースまたは HEAD ブランチで「open an issue」と書き込み、別の人が compare ブランチまたは `branch-a` に「ask your question in IRC」と書き込みました。

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
  質問がある場合は、Issue を開くか、緊急の場合は IRC チャネルにてお問い合わせください。
  ```
7. 変更を追加またはステージングします。
  ```shell
  $ git add .
  ```
8. 変更をコメントを付けてコミットします。
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

これでコマンドラインでブランチをマージできます。 また、{% data variables.product.product_name %} で[変更をリモート リポジトリにプッシュする](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)ことや、Pull Request で[変更をマージする](/articles/merging-a-pull-request/)ことができます。

### 削除したファイルのマージコンフリクト

ある人があるブランチでファイルを削除し、別の人が同じファイルを編集するなどの、ファイルへの変更が競合していることにより発生するマージコンフリクトを解決するには、削除したファイルを削除するか保持するかを新しいコミットで選択する必要があります。

たとえば、あなたが *README.md* などのファイルを編集した場合、別の人が同じ Git リポジトリ内の別のブランチにある同じファイルを削除したならば、これらのブランチをマージしようとした際にマージコンフリクト エラーが発生します。 これらのブランチをマージする前に、新たなコミットでこのマージ コンフリクトを解決する必要があります。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. マージ コンフリクトが発生しているローカルの Git リポジトリに移動します。
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. マージ コンフリクトの影響を受けるファイルのリストを生成します。 この例では、ファイル *README.md* にマージコンフリクトが発生しています。
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
3. [Atom](https://atom.io/) などのお気に入りのテキスト エディターを開き、マージ コンフリクトが発生しているファイルに移動します。
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

これでコマンドラインでブランチをマージできます。 また、{% data variables.product.product_name %} で[変更をリモート リポジトリにプッシュする](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)ことや、Pull Request で[変更をマージする](/articles/merging-a-pull-request/)ことができます。

### 参考リンク

- "[マージコンフリクトについて](/articles/about-merge-conflicts)"
- "[Pull Request をローカルでチェック アウトする](/articles/checking-out-pull-requests-locally/)"
