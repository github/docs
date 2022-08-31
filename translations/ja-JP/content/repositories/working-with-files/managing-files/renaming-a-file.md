---
title: ファイルの名前を変更する
intro: 'You can rename any file in your repository directly in {% data variables.product.product_name %} or by using the command line.'
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
---

## Renaming a file on {% data variables.product.product_name %}

Renaming a file also gives you the opportunity to [move the file to a new location](/articles/moving-a-file-to-a-new-location)

{% tip %}

**ヒント**:

- If you try to rename a file in a repository that you don’t have access to, we will fork the project to your personal account and help you send [a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository after you commit your change.
- Web インターフェイスを介して作成されるファイル名では英数字とハイフン (`-`) しか使用できません。 それ以外の文字を使用するには、ファイルをローカルで作成してコミットしてから、リポジトリへプッシュします。
- 一部のファイル (画像など) は、コマンドラインで名前を変更することが要求されます。 詳細は「[コマンドラインを使用してファイルの名前を変更する](/articles/renaming-a-file-using-the-command-line)」を参照してください。

{% endtip %}

1. リポジトリで、名前を変更するファイルを見つけます。
2. ファイルビューの右上の隅で、{% octicon "pencil" aria-label="The edit icon" %} をクリックしてファイルエディタを開きます。 ![ファイル編集アイコン](/assets/images/help/repository/edit-file-icon.png)
3. ファイル名フィールドで、ファイルの名前を新しいファイル名に変更します。 ファイルのコンテンツも同時に更新できます。 ![ファイル名を編集する](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## コマンドラインを使用してファイルの名前を変更する

コマンドラインを使用して、リポジトリにあるファイルの名前を変更することができます。

多くのファイルは[名前を {% data variables.product.product_name %} で直接変更](/articles/renaming-a-file)できますが、画像など一部のファイルは、コマンドラインで名前を変更する必要があります。

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. 古いファイル名と、ファイルに付ける新しい名前を指定して、ファイルの名前を変更します。 これにより、変更がコミット向けにステージングされます。
  ```shell
  $ git mv <em>古いファイル名</em> <em>新しいファイル名</em>
  ```
4. `git status` を使用して、古いファイル名と新しいファイル名をチェックします。
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
  # 追跡された変更をコミットし、リモートリポジトリへのプッシュに備えます。
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

