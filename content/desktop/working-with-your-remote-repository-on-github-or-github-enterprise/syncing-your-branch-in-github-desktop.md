---
title: Syncing your branch in GitHub Desktop
shortTitle: Syncing your branch
intro: 'As commits are pushed to your project on {% data variables.product.prodname_dotcom %}, you can keep your local copy of the project in sync by pulling from the remote repository.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch-in-github-desktop
  - /desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch
versions:
  feature: desktop
---
## About branch synchronization

You can sync your local branch with the remote repository by pulling any commits that have been added to the branch on {% data variables.product.product_name %} since the last time you synced. If you make commits from another device or if multiple people contribute to a project, you will need to sync your local branch to keep the branch updated.

When you pull to your local branch, you only update your local copy of the repository. To update your branch on {% data variables.product.prodname_dotcom %}, you must push your changes. For more information, see "[AUTOTITLE](/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop)."

To add changes from one branch to another branch, you can merge the branches. To apply changes to your branch from another branch in the same repository, you can merge the other branch into your branch on {% data variables.product.prodname_desktop %}. To request that changes from your branch are merged into another branch, in the same repository or in another repository in the network, you can create a pull request on {% data variables.product.prodname_desktop %}. For more information, see "[Merging another branch into your project branch](#merging-another-branch-into-your-project-branch)" and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

Some workflows require or benefit from rebasing instead of merging. By rebasing you can reorder, edit, or squash commits together. For more information, see "[AUTOTITLE](/get-started/using-git/about-git-rebase)" and "[Rebasing your project branch onto another branch](#rebasing-your-project-branch-onto-another-branch)."

## Pulling to your local branch from the remote

1. In {% data variables.product.prodname_desktop %}, use the {% octicon "git-branch" aria-hidden="true" %} **Current Branch** drop-down, and select the local branch you want to update.
1. To check for commits on the remote branch, click **Fetch origin**

   ![Screenshot of the repository bar. The "Fetch origin" button, displayed with an icon of two arrows forming a circle, is outlined in orange.](/assets/images/help/desktop/fetch-button.png)

1. To pull any commits from the remote branch, click **Pull origin** or **Pull origin with rebase**.

   ![Screenshot of the repository bar. The "Pull origin" button, displayed with an icon of a downward-facing arrow, is outlined in orange.](/assets/images/help/desktop/pull-button.png)

{% data reusables.desktop.resolve-merge-conflicts %}

## Merging another branch into your project branch

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Note:** If there are merge conflicts, {% data variables.product.prodname_desktop %} will warn you above the **Merge BRANCH into BRANCH** button. You will not be able to merge the branches until you have resolved all conflicts.

   {% endnote %}
{% data reusables.desktop.push-origin %}

## Rebasing your project branch onto another branch

1. In the menu bar, select **Branch**, then click **Rebase Current Branch**.

   {% mac %}

   ![Screenshot of the menu bar on a Mac. On the expanded "Branch" dropdown menu, the cursor overs over an option labeled "Rebase Current Branch".](/assets/images/help/desktop/mac-rebase-current-branch.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "Branch" dropdown menu, an option labeled "Rebase Current Branch" is outlined in orange.](/assets/images/help/desktop/windows-rebase-current-branch.png)

   {% endwindows %}

1. Click the branch you want to rebase into the current branch, then click **Rebase**.
1. If you're sure you want to rebase, click **Begin Rebase**.
{% data reusables.desktop.resolve-merge-conflicts %}
1. To push your local changes, click **Force push origin**.

   ![Screenshot of the repository bar. A button, labeled "Force push origin" and displayed with an icon of a double upward arrow, is outlined in orange.](/assets/images/help/desktop/force-push-origin.png)

## Squashing and merging another branch into your project branch

1. In the menu bar, select **Branch**, then click **Squash and Merge into Current Branch**.

   {% mac %}

   ![Screenshot of the menu bar on a Mac. On the expanded "Branch" dropdown menu, the cursor hovers over an option labeled "Squash and Merge into Current Branch".](/assets/images/help/desktop/squash-and-merge-menu.png)

   {% endmac %}

   {% windows %}

   ![Screenshot of the "GitHub Desktop" menu bar on Windows. In the expanded "Branch" dropdown menu, option labeled "Squash and merge into curre..." is outlined in orange.](/assets/images/help/desktop/windows-squash-and-merge-menu.png)

   {% endwindows %}

1. In the "Squash and merge" window, click the branch you want to merge into the current branch, then click **Squash and merge**.

   {% note %}

   **Note:** If there are merge conflicts, {% data variables.product.prodname_desktop %} will warn you above the **Squash and merge** button. You will not be able to squash and merge the branch until you have resolved all conflicts.

   {% endnote %}
{% data reusables.desktop.push-origin %}

## Further Reading

* "[AUTOTITLE](/get-started/learning-about-github/github-glossary#pull)" in the {% data variables.product.prodname_dotcom %} glossary
* "[AUTOTITLE](/get-started/learning-about-github/github-glossary#merge)" in the {% data variables.product.prodname_dotcom %} glossary
* "[AUTOTITLE](/get-started/learning-about-github/github-glossary#rebase)" in the {% data variables.product.prodname_dotcom %} glossary
