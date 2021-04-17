---
title: Linking a repository to a project board
intro: You can link a repository to your organization's or user account's project board.
redirect_from:
  - /articles/linking-a-repository-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---


Anyone with write permissions to a project board can link repositories owned by that organization or user account to the project board. For more information, see "[Project board permissions for an organization](/articles/project-board-permissions-for-an-organization/)" or "[Permission levels for user-owned project boards](/articles/permission-levels-for-user-owned-project-boards/)."

{% data reusables.project-management.link-repos-to-project-board %} You can add issues and pull requests from any unlinked repositories by typing the issue or pull request URL in a card. For more information, see "[Adding issues and pull requests to a project board](/articles/adding-issues-and-pull-requests-to-a-project-board)."

1. Navigate to the project board where you want to link a repository.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. In the left sidebar, click **Linked repositories**. ![Linked repositories menu option in left sidebar](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Click **Link a repository**. ![Link a repository button on Linked repositories tab](/assets/images/help/projects/link-repository-button.png)
6. Search for the repository you'd like to link. ![Search field on Link a repository window](/assets/images/help/projects/search-to-link-repository.png)
7. Click **Link**. To unlink, click **Unlink**. ![Link button](/assets/images/help/projects/link-button.png)

{% note %}

**Note:** In order to link a repository to your organization or user owned project board the repository needs to have issues enabled. That is, the repository has an "Issues" tab (in forked repositories issues are disabled by default).  For information on how to enable or disable issues for a repository, see "[Disabling issues for a repository](/github/managing-your-work-on-github/disabling-issues)."

{% endnote %}

### Дополнительная литература

- "[About projects boards](/articles/about-project-boards)"
