---
title: リポジトリ内でブランチを作成および削除する
intro: '{% data variables.product.product_name %}上で直接、ブランチの作成や削除ができます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
---

## ブランチの作成
You can create a branch in different ways on {% data variables.product.product_name %}.

{% note %}

**Note:** You can only create a branch in a repository to which you have push access.

{% endnote %}

### Creating a branch via the branches overview
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Click **New branch**. ![Screenshot of branches overview page with new branch button emphasized](/assets/images/help/branches/new-branch-button.png)
2. In the dialog box, enter the branch name and optionally change the branch source.  
   If the repository is a fork, you also have the option to select the upstream repository as the branch source. ![Screenshot of branch creation modal for a fork with branch source emphasized](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. Click **Create branch**. ![Screenshot of branch creation modal with create branch button emphasized](/assets/images/help/branches/branch-creation-popup-button.png)

### Creating a branch using the branch dropdown
{% data reusables.repositories.navigate-to-repo %}
1. Optionally, if you want to create the new branch from a branch other than the default branch of the repository, click {% octicon "git-branch" aria-label="The branch icon" %} **Branches** then choose another branch. ![概要ページのブランチリンク](/assets/images/help/branches/branches-overview-link.png)
1. ブランチセレクタメニューをクリックします。 ![ブランチセレクタメニュー](/assets/images/help/branch/branch-selection-dropdown.png)
1. 新しいブランチに、一意の名前を入力して、[**Create branch**] を選択します。 ![ブランチ作成のテキストボックス](/assets/images/help/branch/branch-creation-text-box.png)
{% ifversion fpt or ghec or ghes > 3.4 %}
### Issueのためのブランチの作成
直接Issueのページから作業のためのブランチを作成し、すぐに作業を開始できます。 For more information, see "[Creating a branch to work on an issue](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)".
{% endif %}
## ブランチの削除

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**注釈:** 削除するブランチがリポジトリのデフォルトブランチである場合は、ブランチを削除する前に新しいデフォルトブランチを選択する必要があります。 詳しい情報については「[デフォルトブランチの変更](/github/administering-a-repository/changing-the-default-branch)」を参照してください。

{% endnote %}

削除するブランチがオープンなプルリクエストに関連付けられている場合は、ブランチを削除する前にプルリクエストをマージまたはクローズする必要があります。 詳しい情報については、「[プルリクエストをマージする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)」または「[プルリクエストをクローズする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. 削除対象のブランチまでスクロールし、{% octicon "trash" aria-label="The trash icon to delete the branch" %}をクリックします。 ![delete the branch](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. If you try to delete a branch that is associated with at least one open pull request, you must confirm that you intend to close the pull request(s).

   ![Confirm deleting a branch](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %}
詳細は「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)」を参照してください。

## 参考リンク

- "[About branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[リポジトリ内のブランチを表示する](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[プルリクエスト中のブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
