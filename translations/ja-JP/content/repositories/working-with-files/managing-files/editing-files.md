---
title: Editing files
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
---

## リポジトリのファイルを編集する

{% tip %}

**参考**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**参考:** {% data variables.product.product_name %} のファイルエディタでは、[CodeMirror](https://codemirror.net/) が使用されます。

{% endnote %}

1. リポジトリ内で、編集するファイルに移動します。
{% data reusables.repositories.edit-file %}
3. [**Edit file**] タブで、ファイルに必要な変更を加えます。 ![ファイル内の新しいコンテンツ](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## 他のユーザーのリポジトリ内のファイルを編集する

When you edit a file in another user's repository, we'll automatically [fork the repository](/articles/fork-a-repo) and [open a pull request](/articles/creating-a-pull-request) for you.

1. 他のユーザーのリポジトリで、編集するファイルが含まれるフォルダに移動します。 編集するファイルの名前をクリックします。
2. ファイルの中身の上にある {% octicon "pencil" aria-label="The edit icon" %} をクリックします。 この時点で、リポジトリが自動でフォークされます。
3. ファイルに必要な変更を加えます。 ![ファイル内の新しいコンテンツ](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. [**Propose file change**] をクリックします。 ![変更のコミットボタン](/assets/images/help/repository/propose_file_change_button.png)
7. プルリクエストのタイトルと説明を入力します。 ![プルリクエストの説明ページ](/assets/images/help/pull_requests/pullrequest-description.png)
8. **Create pull request**をクリックします。 ![プルリクエストボタン](/assets/images/help/pull_requests/pullrequest-send.png)
