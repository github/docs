---
title: デフォルトブランチを設定する
intro: 'If you have more than one branch in your repository, you can choose another branch to be the default branch.'
redirect_from:
  - /articles/setting-the-default-branch
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### About the default branch

{% data reusables.branches.new-repo-default-branch %} {% data reusables.branches.default-branch-automatically-base-branch %} If you have more than one branch in your repository, anyone with admin rights over a repository can select one of these existing branches as the default branch on the repository.

### デフォルトブランチを設定する

{% note %}

**Note:** To set the default branch you must have more than one branch in your repository.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
4. In the default branch drop-down, choose the new default branch. ![デフォルトブランチ ドロップダウン セレクター](/assets/images/help/repository/repository-options-defaultbranch.png)
5. [**Update**] をクリックします。

{% data variables.product.product_location %} 上にすでにあるブランチに限って、切り替えできます。 UI で新しいブランチを作成するには、「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

You can also set the default branch name for any newly created repositories owned by your user account, organization, or enterprise account. For more information, see "[Managing the default branch for your repositories](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)", "[Managing the default branch name for repositories in your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization), or "[Enforcing a policy on the default branch name](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)."

{% endif %}

{% warning %}

**Warning**: Setting a different default branch affects your `trunk` branch contents on the [Git-Subversion bridge](https://github.com/blog/1178-collaborating-on-github-with-subversion) and the `HEAD` you'd see when you `git ls-remote` this [repository's upstream URL](https://git-scm.com/docs/git-ls-remote.html).

{% endwarning %}
