---
title: コミットについて
intro: 意味のある変更の小グループをコミットとして保存できます。
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## コミットについて

{% data reusables.commits.about-commits %}

共同作業しているコミットに共作者を追加できます。 詳しい情報については、「[複数の作者を持つコミットを作成する](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)」を参照してください。

{% ifversion fpt or ghec %}
Organization に代わってコミットを作成することもできます。 詳しい情報については、「[Organization の代理でコミットを作成する](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)」を参照してください。{% endif %}

リベースを使用すると、一連のコミットを変更したり、タイムラインでのコミットの順序を変更したりできます。 詳しい情報については、「[Git リベースについて](/github/getting-started-with-github/about-git-rebase)」を参照してください。

## About commit branches and tag labels

You can see which branch a commit is on by looking at the labels beneath the commit on the commit page.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. コミットメッセージリンクをクリックしてコミットに移動します。 ![Screenshot of commit with commit message link emphasized](/assets/images/help/commits/commit-message-link.png)
2. To see what branch the commit is on, check the label below the commit message. ![Screenshot of commit with commit branch indicator emphasized](/assets/images/help/commits/commit-branch-indicator.png)

If your commit is not on the default branch (`main`), the label will show the branches which contain the commit. If the commit is part of an unmerged pull request, you can click the link to go to the pull request.

コミットがデフォルトブランチにある場合は、そのコミットを含むタグがすべて表示され、ブランチのリストにはデフォルトブランチのみが表示されます。 For more information on tags, see "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation.

![Screenshot of commit with commit tag emphasized](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## Using the file tree

You can use the file tree to navigate between files in a commit.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. コミットメッセージリンクをクリックしてコミットに移動します。 ![Screenshot of commit with commit message link emphasized](/assets/images/help/commits/commit-message-link.png)
1. Click on a file in the file tree to view the corresponding file diff. If the file tree is hidden, click {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} to display the file tree.

  {% note %}

  **Note**: The file tree will not display if your screen width is too narrow or if the commit only includes one file.

  {% endnote %}

  ![Screenshot of filter changed files search box and file tree emphasized](/assets/images/help/repository/file-tree.png)
1. To filter by file path, enter part or all of the file path in the **Filter changed files** search box.

{% endif %}

## 参考リンク
- 「[{% data variables.product.prodname_desktop %} でプロジェクトの変更をコミットしてレビューする](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)」
