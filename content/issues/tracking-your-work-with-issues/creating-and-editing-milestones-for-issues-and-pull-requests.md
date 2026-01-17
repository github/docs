---
title: Creating and editing milestones for issues and pull requests
intro: You can create milestones to track progress across groups of issues or pull requests within a repository.
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/creating-and-editing-milestones-for-issues-and-pull-requests
  - /articles/creating-milestones-for-issues-and-pull-requests
  - /articles/creating-and-editing-milestones-for-issues-and-pull-requests
  - /github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create & edit milestones
type: how_to
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.milestones %}

1. Choose one of the following options:
    * To create a new milestone, click **New milestone**.
    * To edit an existing milestone, next to the milestone you want to modify, click **Edit**.

       ![Screenshot of the list of milestones. Within the entry for the "beta release" milestone, a link labeled "Edit" is outlined in dark orange.](/assets/images/help/repository/edit-milestone.png) <!-- markdownlint-disable-line outdated-release-phase-terminology -->

1. Enter the milestone title, description, or other updates, then click **Create milestone** or **Save changes**. Milestones support Markdown syntax. For more information, see [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

## Deleting milestones

Deleting a milestone does not affect the associated issues or pull requests.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.milestones %}

1. Next to the milestone you want to remove, click **Delete**.

![Screenshot of the list of milestones for a repository. Within the entry for the "beta release" milestone, a red "Delete" link is outlined in orange.](/assets/images/help/repository/delete-milestone.png) <!-- markdownlint-disable-line outdated-release-phase-terminology -->
