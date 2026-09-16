---
title: Managing branches within your repository
intro: Create new branches for development and delete unused branches directly on {% data variables.product.github %}.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
  - /pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /pull-requests/how-tos/create-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Manage branches
category:
  - Create pull requests
contentType: how-tos
---

## Creating a branch

Create a branch for a separate place to work on changes before opening a pull request.

> [!NOTE]
> You can only create a branch in a repository to which you have write access.

### Creating a branch via the branches overview

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Click **New branch**.

   ![Screenshot of the "Branches" page for a repository. A green button, labeled "New branch", is highlighted with an orange outline.](/assets/images/help/branches/new-branch-button.png)
1. Under "Branch name", type a name for the branch.
1. Under "Branch source", choose the repository and branch to base your new branch on.
1. Click **Create branch**.

### Creating a branch using the branch dropdown

{% data reusables.repositories.navigate-to-repo %}
1. Select the {% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} branch dropdown menu, in the file tree view or at the top of the integrated file editor.

   ![Screenshot of the file tree view for a repository. A dropdown menu for branches is outlined in dark orange.](/assets/images/help/branches/file-tree-view-branch-dropdown.png)

1. Optionally, to create the new branch from a branch other than the default branch of the repository, click another branch. Then, select the branch dropdown menu again.
1. In the "Find or create a branch..." text field, type a unique name for your new branch, then click **Create branch**.

   ![Screenshot of the branch selector dropdown menu. "Create branch: new-branch" is highlighted with an orange outline.](/assets/images/help/branches/create-branch-text.png)

### Creating a branch for an issue

You can create a branch to work on an issue directly from the issue page. See [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/creating-a-branch-for-an-issue).

## Deleting a branch

Delete branches that you no longer need, such as branches for merged or closed work.

{% data reusables.pull_requests.automatically-delete-branches %}

> [!NOTE]
> If the branch you want to delete is the repository's default branch, choose a new default branch first. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch).

If the branch is associated with an open pull request, merge or close the pull request before deleting the branch.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Next to the branch that you want to delete, click {% octicon "trash" aria-label="The trash icon" %} .

   ![Screenshot of a branch in the branch list. A trash icon is highlighted with an orange outline.](/assets/images/help/branches/branches-delete.png)
1. If the branch is associated with at least one open pull request, deleting the branch closes the pull requests. Read the warning, then click **Delete**.

{% data reusables.pull_requests.retargeted-on-branch-deletion %}
See [AUTOTITLE](/pull-requests/reference/branches).

## Further reading

* [AUTOTITLE](/pull-requests/reference/branches)
* [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)
* [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request)
