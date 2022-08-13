---
title: ファイルを新しい場所に移動する
intro: 'You can move a file to a different directory on {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/moving-a-file-to-a-new-location-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Move a file
---

ファイルの場所を変えるだけでなく、同じコミットで[ファイルの内容を更新](/articles/editing-files-in-your-repository)したり、
ファイルの名前を変更したりすることもできます。</p> 



## Moving a file to a new location on {% data variables.product.product_name %}

{% tip %}

**ヒント**:

- If you try to move a file in a repository that you don’t have access to, we'll fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
- 画像など、ファイルによってはコマンドラインから移動しなければならない場合があります。 詳細は「[コマンドラインを使用してファイルを新しい場所へ移動する](/articles/moving-a-file-to-a-new-location-using-the-command-line)」を参照してください。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. リポジトリで、移動するファイルを見つけます。
2. ファイルビューの右上の隅で、{% octicon "pencil" aria-label="The edit icon" %} をクリックしてファイルエディタを開きます。 ![ファイル編集アイコン](/assets/images/help/repository/move-file-edit-file-icon.png)

3. ファイル名のフィールドで、以下のガイドラインに従ってファイルの名前を変更します。 ![ファイル名を編集する](/assets/images/help/repository/moving_files.gif)

    - ファイルを**サブフォルダに**移動するには、移動先のフォルダの名前を入力して、最後に `/` を入力します。 新しいフォルダ名が、ナビゲーション階層リンクで新しいアイテムになります。
    - **ファイルの現在位置より上位**のディレクトリにファイルを移動するには、ファイル名フィールドの先頭にカーソルを置いてから、`../` と入力して 1 階層完全に上に移動するか、親フォルダの名前を編集する場合は `Backspace` キーを押します。 
      
      {% data reusables.files.write_commit_message %}
      
      
      
      {% data reusables.files.choose_commit_branch %}
      
      
      
      {% data reusables.files.propose_file_change %}



## コマンドラインを使用してファイルを新しい場所へ移動する

コマンドラインを使用してリポジトリ内でファイルを移動するには、元の場所でファイルを削除してから、新しい場所に追加します。

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
