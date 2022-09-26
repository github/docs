---
title: Keeping your pull request in sync with the base branch
intro: 'After you open a pull request, you can update the head branch, which contains your changes, with any changes that have been made in the base branch.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
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
* The base branch requires branches to be up to date before merging{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} or the setting to always suggest updating branches is enabled{% endif %}.

For more information, see "[Require status checks before merging](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}" and "[Managing suggestions to update pull request branches](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}."

If there are changes to the base branch that cause merge conflicts in your pull request branch, you will not be able to update the branch until all conflicts are resolved. For more information, see "[About merge conflicts](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)."

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
From the pull request page you can update your pull request's branch using a traditional merge or by rebasing. A traditional merge results in a merge commit that merges the base branch into the head branch of the pull request. Rebasing applies the changes from _your_ branch onto the latest version of the base branch. The result is a branch with a linear history, since no merge commit is created.
{% else %}
Updating your branch from the pull request page performs a traditional merge. The resulting merge commit merges the base branch into the head branch of the pull request.
{% endif %}

## Updating your pull request branch

{% data reusables.repositories.sidebar-pr %}

1. In the "Pull requests" list, click the pull request you'd like to update.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. In the merge section near the bottom of the page, you can:
   - Click **Update branch** to perform a traditional merge.
   ![Button to update branch](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - Click the update branch drop down menu, click **Update with rebase**, and then click **Rebase branch** to update by rebasing on the base branch.
   ![Drop-down menu showing merge and rebase options](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png)
{% else %}
1. In the merge section near the bottom of the page, click **Update branch** to perform a traditional merge.
  ![Button to update branch](/assets/images/help/pull_requests/pull-request-update-branch.png)
{% endif %}

## Further reading

- "[About pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Changing the stage of a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)"
- "[Committing changes to a pull request branch created from a fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
