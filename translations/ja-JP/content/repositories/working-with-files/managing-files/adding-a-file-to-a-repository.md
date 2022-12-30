---
title: ファイルをリポジトリに追加する
intro: '既存のファイルを、{% data variables.product.product_name %} のリポジトリへ、またはコマンド ラインを使って、アップロードまたはコミットできます。'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-large-files/about-large-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Add a file
ms.openlocfilehash: da76e182a16b1f72b814882b816f487b8290f3be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578909'
---
## {% data variables.product.product_name %} でリポジトリにファイルを追加する

ブラウザを介してリポジトリに追加できるファイルのサイズは、1 ファイルあたり {% data variables.large_files.max_github_browser_size %}までです。 コマンドラインからは、より大きいサイズのファイルを追加でき、1 ファイルあたり {% data variables.large_files.max_github_size %}までです。 詳しくは、「[コマンドラインを使用してリポジトリにファイルを追加する](#adding-a-file-to-a-repository-using-the-command-line)」を参照してください。 {% data variables.large_files.max_github_size %} より大きいファイルを追加するには、{% data variables.large_files.product_name_long %} を使う必要があります。 詳しくは、「[{% data variables.product.product_name %} での大きいファイルについて](/repositories/working-with-files/managing-large-files/about-large-files-on-github)」をご覧ください。

{% tip %}

**ヒント:**
- {% data variables.product.product_name %} には同時に複数のファイルをアップロードできます。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. ファイルの一覧で、 **[ファイルの追加]** ドロップダウンを使用し、 **[ファイルのアップロード]** をクリックします。
  ![[ファイルの追加] ドロップダウンの [ファイルのアップロード]](/assets/images/help/repository/upload-files-button.png)
3. アップロードするファイルもしくはフォルダーを、ファイルツリー上のリポジトリにドラッグ & ドロップします。
![[ドラッグ & ドロップ] 領域](/assets/images/help/repository/upload-files-drag-and-drop.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %}
6. **[Commit changes]** をクリックします。
![[変更のコミットボタン] ボタン](/assets/images/help/repository/commit-changes-button.png)

## コマンドラインを使用してファイルをリポジトリに追加する

コマンドラインを利用し、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} でリポジトリに既存のファイルをアップロードできます。

{% tip %}

**参考:** [{% data variables.product.product_name %} Web サイトからリポジトリに既存のファイルを追加する](/articles/adding-a-file-to-a-repository)こともできます。

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. 自分のコンピュータ上で、{% data variables.product.product_name %}にアップロードしたいファイルを、リポジトリをクローンした際に作成したローカルディレクトリに移動します。
{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %} {% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## 参考資料

- 「[ローカルでホストされているコードを {% data variables.product.product_name %} に追加する](/get-started/importing-your-projects-to-github/importing-source-code-to-github//adding-locally-hosted-code-to-github)」
