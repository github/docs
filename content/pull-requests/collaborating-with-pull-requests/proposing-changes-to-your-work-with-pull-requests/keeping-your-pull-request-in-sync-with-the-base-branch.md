---
title: Keeping your pull request in sync with the base branch
intro: 'After you open a pull request, you can update the head branch, which contains your changes, with any changes that have been made in the base branch.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Update the head branch
---

## About keeping your pull request in sync

Before merging your pull requests, other changes may get merged into the base branch causing your pull request's head branch to be out of sync. Updating your pull request with the latest changes from the base branch can help catch problems prior to merging.

You can update a pull request's head branch from the command line or the pull request page. The **Update branch** button is displayed when all of these are true:

* There are no merge conflicts between the pull request branch and the base branch.
* The pull request branch is not up to date with the base branch.
* The base branch requires branches to be up to date before merging or the setting to always suggest updating branches is enabled.

For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)" and "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches)."

If there are changes to the base branch that cause merge conflicts in your pull request branch, you will not be able to update the branch until all conflicts are resolved. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)."

From the pull request page you can update your pull request's branch using a traditional merge or by rebasing. A traditional merge results in a merge commit that merges the base branch into the head branch of the pull request. Rebasing applies the changes from _your_ branch onto the latest version of the base branch. The result is a branch with a linear history, since no merge commit is created.

## Updating your pull request branch

{% data reusables.repositories.sidebar-pr %}
1. In the "Pull requests" list, click the pull request you'd like to update.
1. In the merge section near the bottom of the page, you can:
   * Click **Update branch** to perform a traditional merge.

     ![Screenshot of the merge section for a pull request.](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)

   * Click the update branch drop down menu, click **Update with rebase**, and then click **Rebase branch** to update by rebasing on the base branch.

     ![Screenshot of the merge section for a pull request. The dropdown menu is expanded, showing "Update with merge commit" and "Update with rebase" options.](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png)

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
