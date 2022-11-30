---
title: コマンドラインを使用してファイルを新しい場所へ移動する
intro: コマンドラインを使用してリポジトリ内でファイルを移動するには、元の場所でファイルを削除してから、新しい場所に追加します。
redirect_from:
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
多くのファイルは {% data variables.product.product_name %} で[直接移動](/articles/moving-a-file-to-a-new-location)できますが、画像など一部のファイルは、コマンドラインで移動する必要があります。

{% data reusables.command_line.manipulating_file_prereqs %}

1. リポジトリをクローンするときにコンピュータのローカルに作成したディレクトリ内で、新しい場所にファイルを移動します。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. `git status` を使用して、ファイルの古い場所と新しい場所をチェックします。
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes not staged for commit:
  > #   (use "git add/rm <file>..." to update what will be committed)
  > #   (use "git checkout -- <file>..." to discard changes in working directory)
  > #
  > #     deleted:    /<em>old-folder</em>/<em>image.png</em>
  > #
  > # Untracked files:
  > #   (use "git add <file>..." to include in what will be committed)
  > #
  > #     /<em>new-folder</em>/<em>image.png</em>
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
{% data reusables.git.stage_for_commit %}これにより古い場所のファイルが削除 (`git rm`) され、新しい場所にファイルが追加 (`git add`) されます。
  ```shell
  $ git add .
  # ファイルをローカルリポジトリに追加し、コミットするためにステージします。
  # {% data reusables.git.unstage-codeblock %}
  ```
5. `git status` を使用して、コミットのステージされた変更を確認します。
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #    renamed:    /old-folder/image.png -> /new-folder/image.png
  # コミットするためにステージされた変更を表示します。
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # 追跡された変更をコミットし、リモートリポジトリへのプッシュに備えます。
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### 参考リンク

- "[コマンドラインを使用してファイルの名前を変更する](/articles/renaming-a-file-using-the-command-line)"
- [コマンドラインを使用してリポジトリにファイルを追加する](/articles/adding-a-file-to-a-repository-using-the-command-line)
