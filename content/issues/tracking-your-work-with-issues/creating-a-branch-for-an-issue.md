---
title: Creating a branch to work on an issue
intro: You can create a branch to work on an issue directly from the issue page and get started right away.
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: issue-6234
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
Branches connected to an issue are shown under the "Development" section in the sidebar of an issue. When you create a pull request for one of these branches, it is automatically linked to the issue. The connection with that branch is removed and only the pull request is shown in the "Development" section. For more information, see "[Linking a pull request to an issue](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)."

## Creating a branch for an issue

Anyone with write permission to a repository can create a branch for an issue. You can link multiple branches for an issue.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. In the list of issues, click the issue that you would like to create a branch for.
4. In the right sidebar under "Development", click **Create a branch**. If the issue already has a linked branch or pull request, click {% octicon "gear" aria-label="The Gear icon" %} and at the bottom of the drop-down menu click **Create a branch**.
   ![Screenshot showing Create a branch option highlighted in sidebar](/assets/images/help/issues/create-a-branch.png)
5. By default, the new branch is created in the current repository from the default branch. Edit the branch name and details as required in the "Create a branch for this issue" dialog.
   ![Screenshot showing Create a branch dialog options](/assets/images/help/issues/create-a-branch-options.png)
6. Choose whether to work on the branch locally or to open it in GitHub Desktop.
7. When you are ready to create the branch, click **Create branch**.
