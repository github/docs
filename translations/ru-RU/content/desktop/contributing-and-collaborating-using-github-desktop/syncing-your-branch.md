---
title: Syncing your branch
intro: 'As commits are pushed to your project on {% data variables.product.prodname_dotcom %}, you can keep your local copy of the project in sync by pulling from the remote repository.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
versions:
  free-pro-team: '*'
---

### About branch synchronization

You can sync your local branch with the remote repository by pulling any commits that have been added to the branch on {% data variables.product.product_name %} since the last time you synced. If you make commits from another device or if multiple people contribute to a project, you will need to sync your local branch to keep the branch updated.

When you pull to your local branch, you only update your local copy of the repository. To update your branch on {% data variables.product.prodname_dotcom %}, you must push your changes. For more information, see "[Pushing changes to {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github)."

To add changes from one branch to another branch, you can merge the branches. To apply changes to your branch from another branch in the same repository, you can merge the other branch into your branch on {% data variables.product.prodname_desktop %}. To request that changes from your branch are merged into another branch, in the same repository or in another repository in the network, you can create a pull request on {% data variables.product.prodname_desktop %}. For more information, see "[Merging another branch into your project branch](#merging-another-branch-into-your-project-branch)" and "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)."

Some workflows require or benefit from rebasing instead of merging. By rebasing you can reorder, edit, or squash commits together. For more information, see "[About Git rebase](/articles/about-git-rebase)" and "[Rebasing your project branch onto another branch](#rebasing-your-project-branch-onto-another-branch)."

### Pulling to your local branch from the remote

1. In {% data variables.product.prodname_desktop %}, use the {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** drop-down, and select the local branch you want to update.
2.  To check for commits on the remote branch, click **Fetch origin** ![The Fetch origin button](/assets/images/help/desktop/fetch-button.png)
3. To pull any commits from the remote branch, click **Pull origin** or **Pull origin with rebase**. ![The Pull origin button](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### Merging another branch into your project branch

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Note:** If there are merge conflicts, {% data variables.product.prodname_desktop %} will warn you above the **Merge <em>BRANCH</em> into <em>BRANCH</em>** button. You will not be able to merge the branches until you have resolved all conflicts.

   {% endnote %}

   ![The Merge button](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### Rebasing your project branch onto another branch

{% mac %}

1. In the menu bar, use the **Branch** drop-down and click **Rebase Current Branch**. ![Rebase Current Branch in branch dropdown](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. Click the branch you want to rebase into the current branch, then click **Start rebase**. ![Start rebase button](/assets/images/help/desktop/start-rebase-button.png)
3. If you're sure you want to rebase, click **Begin rebase**. ![Begin rebase button](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. To push your local changes, click **Force push origin**. ![Force push origin](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Use the **Branch** drop-down and click **Rebase Current Branch**. ![Rebase Current Branch in branch dropdown](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. Click the branch you want to rebase into the current branch, then click **Start rebase**. ![Start rebase button](/assets/images/help/desktop/start-rebase-button.png)
3. If you're sure you want to rebase, click **Begin rebase**. ![Begin rebase button](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. To push up your local changes, click **Force push origin**. ![Force push origin](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

### Дальнейшее изучение
- "[Pull](/github/getting-started-with-github/github-glossary#pull)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Merge](/github/getting-started-with-github/github-glossary#merge)" in the {% data variables.product.prodname_dotcom %} glossary
- "[Rebase](/github/getting-started-with-github/github-glossary#rebase)" in the {% data variables.product.prodname_dotcom %} glossary
