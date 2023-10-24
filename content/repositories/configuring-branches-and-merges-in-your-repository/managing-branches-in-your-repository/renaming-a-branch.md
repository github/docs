---
title: Renaming a branch
intro: You can change the name of a branch in a repository.
permissions: 'People with write permissions to a repository can rename a branch in the repository unless it is the [default branch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch){% ifversion fpt or ghec or ghes %} or a [protected branch](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches){% endif %}. People with admin permissions can rename the default branch{% ifversion fpt or ghec or ghes %} and protected branches{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/renaming-a-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/renaming-a-branch
---
## About renaming branches

You can rename a branch in a repository on {% data variables.location.product_location %}. For more information about branches, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches))."

When you rename a branch on {% data variables.location.product_location %}, any URLs that contain the old branch name are automatically redirected to the equivalent URL for the renamed branch. Branch protection policies are also updated, as well as the base branch for open pull requests (including those for forks) and draft releases. If the renamed branch is the head branch of an open pull request, this pull request is closed.

After the rename is complete, {% data variables.product.prodname_dotcom %} provides instructions on the repository's home page directing contributors to update their local Git environments.

Although file URLs are automatically redirected, raw file URLs are not redirected. Also, {% data variables.product.prodname_dotcom %} does not perform any redirects if users perform a `git pull` for the previous branch name.

{% data variables.product.prodname_actions %} workflows do not follow renames, so if your repository publishes an action, anyone using that action with `@{old-branch-name}` will break. You should consider adding a new branch with the original content plus an additional commit reporting that the branch name is deprecated and suggesting that users migrate to the new branch name.

## Renaming a branch

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Next to the branch you want to rename, click {% octicon "pencil" aria-label="Rename branch" %}.

    ![Screenshot of a branch in the branch list. A pencil icon is highlighted with an orange outline.](/assets/images/help/branches/branch-rename-edit.png)
1. Type a new name for the branch.
1. Review the information about local environments, then click **Rename branch**.

## Updating a local clone after a branch name changes

After you rename a branch in a repository on {% data variables.product.product_name %}, any collaborator with a local clone of the repository will need to update the clone.

From the local clone of the repository on a computer, run the following commands to update the name of the default branch.

```shell
git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME
git fetch origin
git branch -u origin/NEW-BRANCH-NAME NEW-BRANCH-NAME
git remote set-head origin -a
```

Optionally, run the following command to remove tracking references to the old branch name.

```shell
git remote prune origin
```
