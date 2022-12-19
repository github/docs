---
title: ファイルを新しい場所に移動する
intro: 'リポジトリ内の任意のファイルは、{% data variables.product.product_name %} で直接、またはコマンド ラインを使って、別のディレクトリに移動することができます。'
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
ms.openlocfilehash: 90e9434401795b6222d6304464c5a7d3839e0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131977'
---
ファイルの場所を変更するだけでなく、同じコミットで[ファイルの内容を更新](/articles/editing-files-in-your-repository)したり、[ファイルの名前を変更](/articles/renaming-a-file)したりすることもできます。

## {% data variables.product.product_name %} 上の新しい場所にファイルを移動する

{% tip %}

**ヒント**:

- アクセス権のないリポジトリのファイルを移動しようとした場合は、プロジェクトがあなたの個人アカウントにフォークされ、変更のコミット後に元のリポジトリに[プルリクエスト](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)を送信できます。
- 画像など、ファイルによってはコマンドラインから移動しなければならない場合があります。 詳細については、「[コマンドラインを使用してファイルを新しい場所へ移動する](/articles/moving-a-file-to-a-new-location-using-the-command-line)」を参照してください。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. リポジトリで、移動するファイルを見つけます。
2. ファイル ビューの右上の隅で、{% octicon "pencil" aria-label="The edit icon" %} をクリックしてファイル エディターを開きます。
![ファイル編集アイコン](/assets/images/help/repository/move-file-edit-file-icon.png)
3. ファイル名のフィールドで、以下のガイドラインに従ってファイルの名前を変更します: ![ファイル名の変更](/assets/images/help/repository/moving_files.gif)
    - ファイルを **サブフォルダーに** 移動するには、目的のフォルダーの名前を入力して、その後に `/` を付加します。 新しいフォルダ名が、ナビゲーション階層リンクで新しいアイテムになります。
    - **ファイルの現在位置より上位** のディレクトリにファイルを移動するには、ファイル名フィールドの先頭にカーソルを置いてから、`../` と入力して 1 つ上のディレクトリ レベルに移動するか、`backspace` キーを押して親フォルダの名前を編集します。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## コマンドラインを使用してファイルを新しい場所へ移動する 

コマンドラインを使用してリポジトリ内でファイルを移動するには、元の場所でファイルを削除してから、新しい場所に追加します。

多くのファイルは [{% data variables.product.product_name %} で直接移動](/articles/moving-a-file-to-a-new-location)できますが、画像など一部のファイルは、コマンドラインで移動する必要があります。

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
{% data reusables.git.stage_for_commit %} これにより古い場所のファイルが削除 (`git rm`) され、新しい場所にファイルが追加 (`git add`) されます。
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit.
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
  # Displays the changes staged for commit
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}
