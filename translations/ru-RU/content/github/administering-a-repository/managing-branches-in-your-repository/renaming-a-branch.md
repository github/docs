---
title: Renaming a branch
intro: You can change the name of a branch in a repository.
permissions: People with write permissions to a repository can rename a branch in the repository. People with admin permissions can rename the default branch.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/renaming-a-branch
---

### About renaming branches

You can rename a branch in a repository on {% data variables.product.product_location %}. For more information about branches, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches)."

When you rename a branch on {% data variables.product.product_location %}, any URLs that contain the old branch name are automatically redirected to the equivalent URL for the renamed branch. Branch protection policies are also updated, as well as the base branch for open pull requests (including those for forks) and draft releases. After the rename is complete, {% data variables.product.prodname_dotcom %} provides instructions on the repository's home page directing contributors to update their local Git environments.

Although file URLs are automatically redirected, raw file URLs are not redirected. Also, {% data variables.product.prodname_dotcom %} does not perform any redirects if users perform a `git pull` for the previous branch name.

{% data variables.product.prodname_actions %} workflows do not follow renames, so if your repository publishes an action, anyone using that action with `@{old-branch-name}` will break. You should consider adding a new branch with the original content plus an additional commit reporting that the branch name is deprecated and suggesting that users migrate to the new branch name.

### Renaming a branch

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. In the list of branches, to the right of the branch you want to rename, click {% octicon "pencil" aria-label="The edit icon" %}. ![Pencil icon to the right of branch you want to rename](/assets/images/help/branch/branch-rename-edit.png)
1. Type a new name for the branch. ![Text field for typing new branch name](/assets/images/help/branch/branch-rename-type.png)
1. Review the information about local environments, then click **Rename branch**. ![Local environment information and "Rename branch" button](/assets/images/help/branch/branch-rename-rename.png)

### Updating a local clone after a branch name changes

After you rename a branch in a repository on {% data variables.product.product_name %}, any collaborator with a local clone of the repository will need to update the clone.

From the local clone of the repository on a computer, run the following commands to update the name of the default branch.

```shell
$ git branch -m <em>OLD-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git fetch origin
$ git branch -u origin/<em>NEW-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git remote set-head origin -a
```

Optionally, run the following command to remove tracking references to the old branch name.
```
$ git remote prune origin
```
