---
title: Creating and deleting branches within your repository
intro: 'You can create or delete branches directly on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-branches-in-a-pull-request/
  - /articles/creating-and-deleting-branches-within-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Creating a branch

{% data reusables.repositories.navigate-to-repo %}

1. Optionally, if you want to create your new branch from a branch other than the default branch for the repository, click {% octicon "git-branch" aria-label="The branch icon" %} **<em>NUMBER</em> branches** then choose another branch:
    ![Branches link on overview page](/assets/images/help/branches/branches-link.png)
1. Click the branch selector menu.
    ![branch selector menu](/assets/images/help/branch/branch-selection-dropdown.png)
1. Type a unique name for your new branch, then select **Create branch**.
    ![branch creation text box](/assets/images/help/branch/branch-creation-text-box.png)

### Deleting a branch

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Note:** If the branch you want to delete is the repository's default branch, you must choose a new default branch before deleting the branch. For more information, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

{% endnote %}

If the branch you want to delete is associated with an open pull request, you must merge or close the pull request before deleting the branch. For more information, see "[Merging a pull request](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)" or "[Closing a pull request](/github/collaborating-with-issues-and-pull-requests/closing-a-pull-request)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Scroll to the branch that you want to delete, then click {% octicon "trash" aria-label="The trash icon to delete the branch" %}.
    ![delete the branch](/assets/images/help/branches/branches-delete.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
{% endif %}
For more information, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)."

### Further reading

- "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches)"
- "[Viewing branches in your repository](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[Deleting and restoring branches in a pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
