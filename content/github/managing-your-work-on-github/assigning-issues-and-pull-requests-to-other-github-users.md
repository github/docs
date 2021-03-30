---
title: Assigning issues and pull requests to other GitHub users
intro: Assignees clarify who is working on specific issues and pull requests.
redirect_from:
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

Anyone with write permissions to a repository can assign issues and pull requests.

### About issue and pull request assignees

You can assign up to 10 people to each issue or pull request, including yourself, anyone who has commented on the issue or pull request, anyone with write permissions to the repository, and organization members with read permissions to the repository. For more information, see "[Access permissions on {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github)."

### Assigning an individual issue or pull request

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Open the issue or pull request that you want to assign to someone.
4. If no one is assigned to an issue or pull request, click **assign yourself** to assign yourself.
  ![The assign yourself item](/assets/images/help/issues/assign_yourself.png)
5. In the right side menu, click **Assignees**.
   ![The Assignees menu item](/assets/images/help/issues/assignee_menu.png)
6. To assign the issue or pull request to a user, start typing their username, then click their name when it appears. You can select and add up to ten assignees to an issue or pull request.
  ![Issues assignment drop-down](/assets/images/help/issues/issues_assigning_dropdown.png)

### Assigning multiple issues or pull requests

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Select the checkbox next to the items you want to assign to someone.
  ![Issues metadata checkbox](/assets/images/help/issues/issues_assign_checkbox.png)
4. In the upper-right corner, click **Assign**.
5. To assign the items to a user, start typing their username, then click their name when it appears. You can select and add up to ten assignees to an issue or pull request.
  ![Issues assignment drop-down](/assets/images/help/issues/issues_assigning_dropdown.png)

### Further reading

* "[Filtering issues and pull requests by assignees](/articles/filtering-issues-and-pull-requests-by-assignees)"
