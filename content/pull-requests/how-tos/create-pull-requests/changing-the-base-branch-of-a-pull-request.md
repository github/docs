---
title: Changing the base branch of a pull request
intro: Modify the base branch of an open pull request to compare changes against a different branch and ensure accurate updates.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Change the base branch
category:
  - Create pull requests
contentType: how-tos
---

> [!WARNING]
> When you change the base branch of your pull request, some commits may be removed from the timeline. Review comments may also become outdated because the line of code that the comment referenced may no longer be part of the changes in the pull request.

{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you want to modify.
1. Next to the pull request title, click **Edit title** {% octicon "pencil" aria-label="Edit title" %}.

1. In the base branch drop-down menu, select the base branch you'd like to [compare changes against](/pull-requests/how-tos/commit-changes/comparing-commits#comparing-branches).

   ![Screenshot of a pull request title. The dropdown to change the base branch is outlined in dark orange.](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)

1. Read the information about changing the base branch and click **Change base**.

> [!TIP]
> When you open a pull request, {% data variables.product.github %} sets the base to the commit that branch references. If the branch is updated in the future, {% data variables.product.github %} does not update the base branch's commit.

## Further reading

* [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/creating-a-pull-request)
* [AUTOTITLE](/pull-requests/reference/pull-requests)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)
