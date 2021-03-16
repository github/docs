---
title: Renaming a branch
intro: You can change the name of a branch in a repository.
permissions: People with write permissions to a repository can rename a branch in the repository. People with admin permissions can rename the default branch.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

### About renaming branches

You can rename a branch in a repository on {% data variables.product.product_location %}. For more information about branches, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches)."

If you rename a branch, {% data variables.product.prodname_dotcom %} will automatically redirect links on {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location_enterprise %}{% endif %} that contain the old branch name to the equivalent link on the renamed branch. {% data variables.product.prodname_dotcom %} will also update branch protection policies, as well as the base branch for open pull requests and draft releases.

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
```
