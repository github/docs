---
title: Viewing branches in your repository
intro: 'Branches are central to collaboration on {% data variables.product.product_name %}, and the best way to view them is the branches page.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
  - /github/administering-a-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View branches
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Use the navigation at the top of the page to view specific lists of branches:
    * **Your branches**: In repositories that you have push access to, the **Yours** view shows all branches that you’ve pushed to, excluding the default branch, with the most recent branches first.
    * **Active branches**: The **Active** view shows all branches (excluding the default branch) that anyone has committed to within the last three months, ordered by the branches with the most recent commits first.
    * **Stale branches**: The **Stale** view shows all branches that no one has committed to in the last three months, ordered by the branches with the oldest commits first. Use this list to determine [which branches to delete](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).
    * **All branches**: The **All** view shows the default branch, followed by all other branches ordered by the branches with the most recent commits first.

1. Optionally, use the search field on the top right. It provides a simple, case-insensitive, sub-string search on the branch name. It does not support any additional query syntax.

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)"
* "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request)"
{%- ifversion repository-activity-view %}
* "[AUTOTITLE](/repositories/viewing-activity-and-data-for-your-repository/using-the-activity-view-to-see-changes-to-a-repository)."{% endif %}
