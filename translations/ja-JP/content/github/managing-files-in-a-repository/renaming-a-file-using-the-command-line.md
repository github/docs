---
title: コマンドラインを使用してファイルの名前を変更する
intro: コマンドラインを使用して、リポジトリにあるファイルの名前を変更することができます。
redirect_from:
  - /articles/renaming-a-file-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

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

### 参考リンク
- "[コマンドラインを使用してファイルを新しい場所へ移動する](/articles/moving-a-file-to-a-new-location-using-the-command-line)"
- [コマンドラインを使用してリポジトリにファイルを追加する](/articles/adding-a-file-to-a-repository-using-the-command-line)
