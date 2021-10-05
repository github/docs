---
title: ファイルをリポジトリに追加する
intro: 'You can upload and commit an existing file to a repository on {% data variables.product.product_name %} or by using the command line.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Add a file
---

## Adding a file to a repository on {% data variables.product.product_name %}

ブラウザを介してリポジトリに追加できるファイルのサイズは、1 ファイルあたり {% data variables.large_files.max_github_browser_size %}までです。 コマンドラインからは、より大きいサイズのファイルを追加でき、1 ファイルあたり {% data variables.large_files.max_github_size %}までです。 詳しい情報については[コマンドラインを使用してリポジトリにファイルを追加する](#adding-a-file-to-a-repository-using-the-command-line)を参照してください。

{% tip %}

**参考:**
- {% data variables.product.product_name %} には同時に複数のファイルをアップロードできます。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. ファイルリストの上にある [**Add file**] プルダウンを使用して、[**Upload files**] をクリックします。 ![[Add file] ドロップダウンの [Upload files]](/assets/images/help/repository/upload-files-button.png)
3. アップロードするファイルもしくはフォルダーを、ファイルツリー上のリポジトリにドラッグ & ドロップします。 ![ドラッグ＆ドロップエリア](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. **[Commit changes]** をクリックしてください。 ![[Commit changes] ボタン](/assets/images/help/repository/commit-changes-button.png)

## コマンドラインを使用してファイルをリポジトリに追加する

コマンドラインを使って、既存のファイルを {% data variables.product.product_name %}のリポジトリにアップロードできます。

{% tip %}

**ヒント:** [既存のファイルを {% data variables.product.product_name %} Web サイトから追加](/articles/adding-a-file-to-a-repository)することもできます。

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. 自分のコンピュータ上で、{% data variables.product.product_name %}にアップロードしたいファイルを、リポジトリをクローンした際に作成したローカルディレクトリに移動します。
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
{% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # ファイルをローカルリポジトリに追加し、コミットするためにステージします。 {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # 追跡された変更をコミットし、リモートリポジトリへのプッシュに備えます。 {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## 参考リンク

- [コマンドラインを使った既存のプロジェクトの GitHub への追加](/articles/adding-an-existing-project-to-github-using-the-command-line)
