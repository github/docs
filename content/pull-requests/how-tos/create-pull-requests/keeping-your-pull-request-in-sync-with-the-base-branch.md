---
title: Keeping your pull request in sync with the base branch
intro: Update your pull request branch with changes from the base branch to resolve conflicts and ensure compatibility before merging.
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Update the head branch
category:
  - Create pull requests
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch
contentType: how-tos
---

## About keeping your pull request in sync

Before merging, update your pull request branch with changes from the base branch to catch conflicts or test failures early. You can update the branch from the pull request page when there are no merge conflicts and the branch is behind the base branch.

> [!NOTE]
> You may not be able to use the `Update branch` button if the HEAD branch of your pull request is a protected branch. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

If changes to the base branch cause merge conflicts in your pull request branch, resolve the conflicts before updating the branch. See [AUTOTITLE](/pull-requests/reference/merge-conflicts).

From the pull request page, you can update by merging the base branch into your head branch or by rebasing your changes onto the latest base branch. Rebasing creates a linear history without a merge commit. See [AUTOTITLE](/pull-requests/reference/branches#three-dot-and-two-dot-git-diff-comparisons).

## Updating your pull request branch

{% data reusables.repositories.sidebar-pr %}
1. In the "Pull requests" list, click the pull request you want to update.
1. In the merge section near the bottom of the page, choose how to update the branch:
   * Click **Update branch** to perform a traditional merge.

     ![Screenshot of the merge section for a pull request.](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)

   * Click the update branch dropdown menu, click **Update with rebase**, then click **Rebase branch** to update by rebasing on the base branch.

     ![Screenshot of the merge section of a pull request. The dropdown menu is expanded, showing "Update with merge commit" and "Update with rebase" options.](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png)

## Further reading

* [AUTOTITLE](/pull-requests/reference/pull-requests)
* [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/changing-the-stage-of-a-pull-request)
