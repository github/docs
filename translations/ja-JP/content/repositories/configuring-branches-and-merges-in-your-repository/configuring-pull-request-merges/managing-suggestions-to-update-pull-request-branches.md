---
title: Managing suggestions to update pull request branches
intro: You can give users the ability to always update a pull request branch when it is not up to date with the base branch.
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: issue-6069
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
---

## About suggestions to update a pull request branch

If you enable the setting to always suggest updating pull request branches in your repository, people with write permissions will always have the ability, on the pull request page, to update a pull request's head branch when it's not up to date with the base branch. When not enabled, the ability to update is only available when the base branch requires branches to be up to date before merging and the branch is not up to date. For more information, see "[Keeping your pull request in sync with the base branch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)."

## Managing suggestions to update a pull request branch

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Pull Requests", select or unselect **Always suggest updating pull request branches**. ![Checkbox to enable or disable always suggest updating branch](/assets/images/help/repository/always-suggest-updating-branches.png)
