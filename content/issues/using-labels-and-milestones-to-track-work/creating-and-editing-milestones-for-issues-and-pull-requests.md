---
title: Creating and editing milestones for issues and pull requests
intro: You can create a milestone to track progress on groups of issues or pull requests in a repository.
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
1. Choose one of these options:
    * To create a new milestone, click **New Milestone**.
    * To edit a milestone, next to the milestone you want to edit, click **Edit**.

       ![Screenshot of the list of milestones. Within the entry for the "beta release" milestone, a link, labeled "Edit," is outlined in dark orange.](/assets/images/help/repository/edit-milestone.png)
1. Type the milestone's title, description, or other changes, and click **Create milestone** or **Save changes**. Milestones will render Markdown syntax. For more information about Markdown syntax, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)."

## Deleting milestones

When you delete milestones, issues and pull requests are not affected.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.milestones %}
1. Next to the milestone you want to delete, click **Delete**.

![Screenshot of the list of milestones for a repository. Within the entry for the "beta release" milestone, a red "Delete" link is outlined in dark orange.](/assets/images/help/repository/delete-milestone.png)
