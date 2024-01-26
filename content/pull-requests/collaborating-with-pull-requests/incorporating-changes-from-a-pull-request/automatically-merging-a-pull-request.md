---
title: Automatically merging a pull request
intro: You can increase development velocity by enabling auto-merge for a pull request so that the pull request will merge automatically when all merge requirements are met.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
---
## About auto-merge

If you enable auto-merge for a pull request, the pull request will merge automatically when all required reviews are met and all required status checks have passed. Auto-merge prevents you from waiting around for requirements to be met, so you can move on to other tasks.

Before you can use auto-merge with a pull request, auto-merge must be enabled for the repository. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository)."

After you enable auto-merge for a pull request, if someone who does not have write permissions to the repository pushes new changes to the head branch or switches the base branch of the pull request, auto-merge will be disabled. For example, if a maintainer enables auto-merge for a pull request from a fork, auto-merge will be disabled after a contributor pushes new changes to the pull request.

You can provide feedback about auto-merge through a [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/categories/pull-requests).

## Enabling auto-merge

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

People with write permissions to a repository can enable auto-merge for a pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you'd like to auto-merge.
1. Optionally, to choose a merge method, select the {% octicon "triangle-down" aria-label="Select the merge method" %} dropdown menu, then click a merge method. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

   ![Screenshot of the merge box of a pull request. A dropdown menu, labeled with a downward-facing triangle, is outlined in dark orange.](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)

1. Click **Enable auto-merge**.
   {% ifversion fpt %}
1. If you chose the merge or squash and merge methods, type a commit message and description and choose the email address you want to author the merge commit.

   {% note %}

   **Note:** The email dropdown menu is not available if you have email privacy enabled or if you only have one verified and visible email associated with your {% data variables.product.company_short %} account.

   {% endnote %}
  {% endif %}
  {% ifversion ghes or ghec %}
1. If you chose the merge or squash and merge methods, type a commit message and description.
   {% endif %}
1. Click **Confirm auto-merge**.

## Disabling auto-merge

People with write permissions to a repository and pull request authors can disable auto-merge for a pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. In the "Pull Requests" list, click the pull request you'd like to disable auto-merge for.
1. In the merge box, click **Disable auto-merge**.
