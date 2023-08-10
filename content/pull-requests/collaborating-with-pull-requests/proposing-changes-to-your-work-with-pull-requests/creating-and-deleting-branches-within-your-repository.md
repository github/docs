---
title: Creating and deleting branches within your repository
intro: 'You can create or delete branches directly on {% data variables.product.product_name %}.'
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

## Creating a branch

You can create a branch in different ways on {% data variables.product.product_name %}.

{% note %}

**Note:** You can only create a branch in a repository to which you have push access.

{% endnote %}

{% ifversion create-branch-from-overview %}

### Creating a branch via the branches overview

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Click **New branch**.

   ![Screenshot of the "Branches" page for a repository. A green button, labeled "New branch", is highlighted with an orange outline.](/assets/images/help/branches/new-branch-button.png)
1. Under "Branch name", type a name for the branch.
1. Under "Branch source", choose a source for your branch.
   - If your repository is a fork, select the repository dropdown menu and click your fork or the upstream repository.
   - Select the branch dropdown menu and click a branch.
1. Click **Create branch**.
{% endif %}

### Creating a branch using the branch dropdown

{% data reusables.repositories.navigate-to-repo %}
{% ifversion code-search-code-view %}
1. Select the {% octicon "git-branch" aria-hidden="true" %} branch dropdown menu, in the file tree view or at the top of the integrated file editor.

   ![Screenshot of the file tree view for a repository. A dropdown menu for branches is outlined in dark orange.](/assets/images/help/branches/file-tree-view-branch-dropdown.png)
{% else %}
1. Select the branch selector dropdown menu.

   ![Screenshot of the repository page. A dropdown menu, labeled with a branch icon and "main", is highlighted with an orange outline.](/assets/images/help/branches/branch-selection-dropdown.png)
{% endif %}
1. Optionally, if you want to create the new branch from a branch other than the default branch of the repository, click another branch, then select the branch dropdown menu again.
1. In the "Find or create a branch..." text field, type a unique name for your new branch, then click **Create branch**.

   ![Screenshot of the branch selector dropdown menu. "Create branch: new-branch" is highlighted with an orange outline.](/assets/images/help/branches/create-branch-text.png)

{% ifversion fpt or ghec or ghes %}

### Creating a branch for an issue

You can create a branch to work on an issue directly from the issue page and get started right away. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)".
{% endif %}

## Deleting a branch

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Note:** If the branch you want to delete is the repository's default branch, you must choose a new default branch before deleting the branch. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)."

{% endnote %}

If the branch you want to delete is associated with an open pull request, you must merge or close the pull request before deleting the branch. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)" or "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Next to the branch that you want to delete, click {% octicon "trash" aria-label="The trash icon" %} .

   ![Screenshot of a branch in the branch list. A trash icon is highlighted with an orange outline.](/assets/images/help/branches/branches-delete.png)
{%- ifversion fpt or ghes or ghae > 3.5 or ghec %}
1. If the branch is associated with at least one open pull request, deleting the branch will close the pull requests. Read the warning, then click **Delete**.
{%- endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %}
For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#working-with-branches)."

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)"
- "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request)"
