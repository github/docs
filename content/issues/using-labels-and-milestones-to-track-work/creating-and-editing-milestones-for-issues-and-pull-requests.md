---
title: Creating and editing milestones for issues and pull requests
intro: You can create a milestone to track progress on groups of issues or pull requests in a repository.
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/creating-and-editing-milestones-for-issues-and-pull-requests
  - /articles/creating-milestones-for-issues-and-pull-requests/
  - /articles/creating-and-editing-milestones-for-issues-and-pull-requests
  - /github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Create & edit milestones
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.milestones %}
4. Choose one of these options:
    - To create a new milestone, click **New Milestone**.
  ![New milestone button](/assets/images/help/repository/new-milestone.png)
    - To edit a milestone, next to the milestone you want to edit, click **Edit**.
  ![Edit milestone option](/assets/images/help/repository/edit-milestone.png)
5. Type the milestone's title, description, or other changes, and click **Create milestone** or **Save changes**. Milestones will render Markdown syntax. For more information about Markdown syntax, see "[Basic writing and formatting syntax](/github/writing-on-github/basic-writing-and-formatting-syntax)."

## Deleting milestones

When you delete milestones, issues and pull requests are not affected.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.milestones %}
4. Next to the milestone you want to delete, click **Delete**.
![Delete milestone option](/assets/images/help/repository/delete-milestone.png)

## Further reading

- "[About milestones](/articles/about-milestones)"
- "[Associating milestones with issues and pull requests](/articles/associating-milestones-with-issues-and-pull-requests)"
- "[Viewing your milestone's progress](/articles/viewing-your-milestone-s-progress)"
- "[Filtering issues and pull requests by milestone](/articles/filtering-issues-and-pull-requests-by-milestone)"
