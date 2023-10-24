---
title: Assigning issues and pull requests to other GitHub users
intro: Assignees clarify who is working on specific issues and pull requests.
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Assign issues & PRs
---

## About issue and pull request assignees

You can assign multiple people to each issue or pull request, including yourself, anyone who has commented on the issue or pull request, anyone with write permissions to the repository, and organization members with read permissions to the repository. For more information, see "[AUTOTITLE](/get-started/learning-about-github/access-permissions-on-github)."

Issues and pull requests in public repositories, and in private repositories for a paid account, can have up to 10 people assigned. Private repositories on the free plan are limited to one person per issue or pull request.

## Assigning an individual issue or pull request

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. Open the issue or pull request that you want to assign to someone.
1. In the right side menu, click **Assignees**.

   ![Screenshot of the right sidebar of an issue. A header, labeled "Assignees", is outlined in dark orange.](/assets/images/help/issues/assignee-menu.png)
1. To assign the issue or pull request to a user, start typing their username, then click their name when it appears. You can select and add up to ten assignees to an issue or pull request.

## Assigning multiple issues or pull requests

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. Select the items you want to assign to someone.

   ![Screenshot of the first two items in a list of issues. To the left of each issue, a checkbox is checked and outlined in dark orange.](/assets/images/help/issues/issues-assign-checkbox.png)
1. In the upper-right corner, click **Assign**.
1. To assign the items to a user, start typing their username, then click their name when it appears. You can select and add up to ten assignees to an issue or pull request.

## Further reading

- "[AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
