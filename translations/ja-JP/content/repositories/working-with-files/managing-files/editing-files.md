---
title: ファイルを編集する
intro: 'ファイルエディタを使用しているすべてのリポジトリについて、{% data variables.product.product_name %} でファイルを直接編集できます。'
redirect_from:
  - /articles/editing-files
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Edit files
ms.openlocfilehash: 515b773aaa9dd2a93d6c0b4b70adb3ef10afe082
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131983'
---
## リポジトリのファイルを編集する

{% tip %}

**ヒント**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**注:** {% data variables.product.product_name %} のファイル エディターでは、[CodeMirror](https://codemirror.net/) が使われます。

{% endnote %}

1. リポジトリ内で、編集するファイルに移動します。
{% data reusables.repositories.edit-file %}
3. **[ファイルの編集]** タブで、ファイルに必要な変更を行います。
![ファイルの新しい内容](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 他のユーザーのリポジトリ内のファイルを編集する

別のユーザーのリポジトリ内のファイルを編集すると、自動的に[リポジトリがフォーク](/articles/fork-a-repo)されて、[pull request が開かれ](/articles/creating-a-pull-request)ます。

1. 他のユーザーのリポジトリで、編集するファイルが含まれるフォルダに移動します。 編集するファイルの名前をクリックします。
2. ファイルの内容の上にある {% octicon "pencil" aria-label="The edit icon" %} をクリックします。 この時点で、リポジトリが自動でフォークされます。
3. ファイルに必要な変更を加えます。
![ファイルの新しい内容](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %} {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
6. **[ファイルの変更の提案]** をクリックします。
![[変更のコミット] ボタン](/assets/images/help/repository/propose_file_change_button.png)
7. プルリクエストのタイトルと説明を入力します。
![pull request の説明ページ](/assets/images/help/pull_requests/pullrequest-description.png)
8. **[pull request の作成]** をクリックします。
![pull request ボタン](/assets/images/help/pull_requests/pullrequest-send.png)
