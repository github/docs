---
title: Viewing branches in your repository
intro: 'Branches are central to collaboration on {% data variables.product.product_name %}, and the best way to view them is the branches page.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: View branches
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
3. Use the navigation at the top of the page to view specific lists of branches:
    - **Your branches**: In repositories that you have push access to, the **Yours** view shows all branches that you’ve pushed to, with the most recent branches first.
    - **Active branches**: The **Active** view shows all branches that anyone has committed to within the last three months, ordered by the branches with the most recent commits first.
    - **Stale branches**: The **Stale** view shows all branches that no one has committed to in the last three months, ordered by the branches with the oldest commits first. Use this list to determine [which branches to delete](/articles/creating-and-deleting-branches-within-your-repository).
    - **All branches**: The **All** view shows the default branch, followed by all other branches ordered by the branches with the most recent commits first.

4. Optionally, use the search field on the top right. It provides a simple, case-insensitive, sub-string search on the branch name. It does not support any additional query syntax.

![The branches page for the Atom repository](/assets/images/help/branches/branches-overview-atom.png)

## Further reading

- "[Creating and deleting branches within your repository](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Deleting unused branches](/articles/deleting-unused-branches)"
