---
title: ファイル名を変更する
intro: 'リポジトリ内の任意のファイルは、{% data variables.product.product_name %} で直接、またはコマンド ラインを使って名前を変更することができます。'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/renaming-a-file
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/renaming-a-file-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 826c9c45ee8cace0d3e81c78fc010ac4c76f9ab1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131970'
---
## {% data variables.product.product_name %} のファイル名を変更する

ファイル名を変更すると、[ファイルを新しい場所に移動](/articles/moving-a-file-to-a-new-location)することもできます。

{% tip %}

**ヒント**:

- アクセスのないリポジトリにあるファイルの名前を変更しようとした場合は、変更をコミットした後に、プロジェクトが個人アカウントへフォークされ、[pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) を元のリポジトリへ送信できるようになります。
- Web インターフェイスを介して作成されるファイル名では英数字とハイフン (`-`) しか使用できません。 それ以外の文字を使用するには、ファイルをローカルで作成してコミットしてから、リポジトリへプッシュします。
- 一部のファイル (画像など) は、コマンドラインで名前を変更することが要求されます。 詳細については、「[コマンド ラインを使用してファイル名を変更する](/articles/renaming-a-file-using-the-command-line)」を参照してください。

{% endtip %}

1. リポジトリで、名前を変更するファイルを見つけます。
2. ファイル ビューの右上の隅で、{% octicon "pencil" aria-label="The edit icon" %} をクリックしてファイル エディターを開きます。
![ファイル編集アイコン](/assets/images/help/repository/edit-file-icon.png)
3. ファイル名フィールドで、ファイルの名前を新しいファイル名に変更します。 ファイルのコンテンツも同時に更新できます。
![ファイル名の編集](/assets/images/help/repository/changing-file-name.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## コマンドラインを使用してファイルの名前を変更する 

コマンドラインを使用して、リポジトリにあるファイルの名前を変更することができます。

多くのファイルは [{% data variables.product.product_name %} で直接名前を変更](/articles/renaming-a-file)できますが、画像など一部のファイルは、コマンド ラインで名前を変更する必要があります。

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. 古いファイル名と、ファイルに付ける新しい名前を指定して、ファイルの名前を変更します。 これにより、変更がコミット向けにステージングされます。
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. `git status` を使用して、ファイルの古い名前と新しい名前をチェックします。
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: <em>old_filename</em> -> <em>new_filename</em>
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

