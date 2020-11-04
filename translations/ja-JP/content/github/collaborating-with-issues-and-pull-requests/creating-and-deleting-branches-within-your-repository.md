---
title: リポジトリ内でブランチを作成および削除する
intro: '{% data variables.product.product_name %}上で直接、ブランチの作成や削除ができます。'
redirect_from:
  - /articles/deleting-branches-in-a-pull-request/
  - /articles/creating-and-deleting-branches-within-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### ブランチの作成

{% data reusables.repositories.navigate-to-repo %}

1. 必要に応じて、リポジトリのデフォルトブランチ以外のブランチから新しいブランチを作成する場合は、[{% octicon "git-branch" aria-label="The branch icon" %} **<em>NUMBER</em> branches**] をクリックし、別のブランチを選択します。 ![概要ページのブランチリンク](/assets/images/help/branches/branches-link.png)
1. ブランチセレクタメニューをクリックします。 ![ブランチセレクタメニュー](/assets/images/help/branch/branch-selection-dropdown.png)
1. 新しいブランチに、一意の名前を入力して、[**Create branch**] を選択します。 ![ブランチ作成のテキストボックス](/assets/images/help/branch/branch-creation-text-box.png)

### ブランチの削除

{% data reusables.pull_requests.automatically-delete-branches %}

If the branch you want to delete is the repository's default branch, you must choose a new default branch before deleting the branch. For more information, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

If the branch you want to delete is associated with an open pull request, you must merge or close the pull request before deleting the branch. For more information, see "[Merging a pull request](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)" or "[Closing a pull request](/github/collaborating-with-issues-and-pull-requests/closing-a-pull-request)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. 削除するブランチまでスクロールし、{% octicon "trashcan" aria-label="The trashcan icon to delete the branch" %} をクリックします。 ![ブランチを削除する](/assets/images/help/branches/branches-delete.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
{% endif %}
詳細は「[ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)」を参照してください。

### 参考リンク

- [ブランチについて](/github/collaborating-with-issues-and-pull-requests/about-branches)
- "[リポジトリ内のブランチを表示する](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[プルリクエスト中のブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
