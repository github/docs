---
title: Creating a branch to work on an issue
intro: You can create a branch to work on an issue directly from the issue page and get started right away.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Create branch for issue
---

{% note %}

**Note:** The ability to create a branch for an issue is currently in public beta and subject to change.

{% endnote %}

## About branches connected to an issue

Branches connected to an issue are shown under the "Development" section in the sidebar of an issue. When you create a pull request for one of these branches, it is automatically linked to the issue. The connection with that branch is removed and only the pull request is shown in the "Development" section. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)."

## Creating a branch for an issue

Anyone with write permission to a repository can create a branch for an issue. You can link multiple branches for an issue.

By default, the new branch is created in the current repository, and from the default branch.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. In the list of issues, click the issue that you would like to create a branch for.
1. In the right sidebar under "Development", click **Create a branch**. If the issue already has a linked branch or pull request, select {% octicon "gear" aria-label="Development" %} and click **Create a branch**.

   ![Screenshot of the issue sidebar. In the "Development" section, a link, labeled "Create a branch", is outlined in dark orange.](/assets/images/help/issues/create-a-branch.png)
1. Optionally, in the "Branch name" field, type a branch name.
1. Optionally, select the **Repository destination** dropdown menu, then choose a repository.
1. Under "What's next", select whether you want to work on the branch locally or to open the branch in {% data variables.product.prodname_desktop %}.
1. Click **Create branch**.
