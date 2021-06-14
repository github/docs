---
title: Deleting and restoring branches in a pull request
intro: 'If you have write access in a repository, you can delete branches that are associated with closed or merged pull requests. You cannot delete branches that are associated with open pull requests.'
redirect_from:
  - /articles/tidying-up-pull-requests/
  - /articles/restoring-branches-in-a-pull-request/
  - /articles/deleting-unused-branches/
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
## Deleting a branch used for a pull request

You can delete a branch that is associated with a pull request if the pull request has been merged or closed and there are no other open pull requests referencing the branch. For information on closing branches that are not associated with pull requests, see "[Creating and deleting branches within your repository](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. In the list of pull requests, click the pull request that's associated with the branch that you want to delete.
5. Near the bottom of the pull request, click **Delete branch**.
   ![Delete branch button](/assets/images/help/pull_requests/delete_branch_button.png)

   This button isn't displayed if there's currently an open pull request for this branch.

## Restoring a deleted branch

You can restore the head branch of a closed pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
4. In the list of pull requests, click the pull request that's associated with the branch that you want to restore.
5. Near the bottom of the pull request, click **Restore branch**.
   ![Restore deleted branch button](/assets/images/help/branches/branches-restore-deleted.png)

## Further reading

- "[Creating and deleting branches within your repository](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)"
- "[Managing the automatic deletion of branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)"
