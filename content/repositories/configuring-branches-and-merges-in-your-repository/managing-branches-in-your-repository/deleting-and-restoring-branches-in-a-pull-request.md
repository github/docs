---
title: Deleting and restoring branches in a pull request
intro: 'If you have write access in a repository, you can delete branches that are associated with closed or merged pull requests. You cannot delete branches that are associated with open pull requests.'
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
---
## Deleting a branch used for a pull request

You can delete a branch that is associated with a pull request if the pull request has been merged or closed and there are no other open pull requests referencing the branch. For information on closing branches that are not associated with pull requests, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
1. In the list of pull requests, click the pull request that's associated with the branch that you want to delete.
1. Near the bottom of the pull request, click **Delete branch**.

   This button isn't displayed if there's currently an open pull request for this branch.

## Restoring a deleted branch

You can restore the head branch of a closed pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.list-closed-pull-requests %}
1. In the list of pull requests, click the pull request that's associated with the branch that you want to restore.
1. Near the bottom of the pull request, click **Restore branch**.

## Further reading

- "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)"
- "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches)"
