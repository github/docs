---
title: Automatically merging a pull request
intro: Enable or disable auto-merge for pull requests to streamline your workflow and automatically merge changes once all requirements are met.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
category:
  - Merge and close pull requests
contentType: how-tos
---
## About auto-merge

Auto-merge merges a pull request automatically after all required reviews and status checks pass. Before you use auto-merge, it must be enabled for the repository. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository).

Auto-merge is disabled if someone without write permissions pushes new changes to the head branch or switches the base branch.

## Enabling auto-merge

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

People with write permissions to a repository can enable auto-merge for a pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you want to auto-merge.
1. Optionally, select the {% octicon "triangle-down" aria-label="Select the merge method" %} dropdown menu, then click a merge method. See [AUTOTITLE](/pull-requests/reference/pull-request-merges).

   ![Screenshot of the merge box of a pull request. A dropdown menu, labeled with a downward-facing triangle, is outlined in dark orange.](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)

1. Click **Enable auto-merge**.
   {% ifversion fpt %}
1. If you chose the merge or squash and merge methods, type a commit message and description and choose the email address you want to author the merge commit.

   > [!NOTE]
   > The email dropdown menu is not available if you have email privacy enabled or if you only have one verified and visible email associated with your {% data variables.product.company_short %} account.

   {% endif %}
   {% ifversion ghes or ghec %}
1. If you chose the merge or squash and merge methods, type a commit message and description.
   {% endif %}
1. Click **Confirm auto-merge**.

## Disabling auto-merge

People with write permissions to a repository and pull request authors can disable auto-merge for a pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request for which you want to disable auto-merge.
1. In the merge box, click **Disable auto-merge**.
