---
title: About issues
intro: 'Use {% data variables.product.prodname_github_issues %} to track ideas, feedback, tasks, or bugs for work on {% data variables.product.company_short %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
---
## About issues

{% data variables.product.prodname_github_issues %} are items you can create in a repository to plan, discuss and track work.

Issues are simple to create and flexible to suit a variety of scenarios. You can use issues to track work, give or receive feedback, collaborate on ideas or tasks, and efficiently communicate with others.

### Integrated with {% data variables.product.company_short %}

Issues let you track your work on {% data variables.product.company_short %}. When you mention an issue in another issue or pull request, the issue's timeline reflects the cross-reference so that you can keep track of related work. To indicate that work is in progress, you can link an issue to a pull request. When the pull request merges, the linked issue automatically closes.

For more information on keywords, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)."

### Quickly create issues

Issues can be created in a variety of ways, so you can choose the most convenient method for your workflow. For example, you can create an issue from a repository,{% ifversion fpt or ghec %} an item in a task list,{% endif %} a note in a project, a comment in an issue or pull request, a specific line of code, or a URL query. You can also create an issue from your platform of choice: through the web UI, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, GraphQL and REST APIs, or {% data variables.product.prodname_mobile %}. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."

### Track work

You can organize and prioritize issues with projects. {% ifversion fpt or ghec %}To track issues as part of a larger issue, you can use task lists.{% endif %} To categorize related issues, you can use labels and milestones.

For more information about projects, see {% ifversion projects-v2 %}"[AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)." {% else %}"[AUTOTITLE](/issues/organizing-your-work-with-project-boards)."{% endif %} {% ifversion fpt or ghec %}For more information about task lists, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)." {% endif %}For more information about labels and milestones, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work)."

### Stay up to date

To stay updated on the most recent comments in an issue, you can subscribe to an issue to receive notifications about the latest comments. To quickly find links to recently updated issues you're subscribed to, visit your dashboard. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)" and "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard)."

### Community management

To help contributors open meaningful issues that provide the information that you need, you can use {% ifversion fpt or ghec %}issue forms and {% endif %}issue templates. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."

{% ifversion fpt or ghec %}To maintain a healthy community, you can report comments that violate {% data variables.product.prodname_dotcom %}'s [Community Guidelines](/free-pro-team@latest/site-policy/github-terms/github-community-guidelines). For more information, see "[AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)."{% endif %}

### Efficient communication

You can @mention collaborators who have access to your repository in an issue to draw their attention to a comment. To link related issues in the same repository, you can type `#` followed by part of the issue title and then clicking the issue that you want to link. To communicate responsibility, you can assign issues. If you find yourself frequently typing the same comment, you can use saved replies.
{% ifversion fpt or ghec %} For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)" and "[AUTOTITLE](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)."
{% endif %}
{% ifversion discussions %}

### Comparing issues and discussions

Some conversations are more suitable for {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} For guidance on when to use an issue or a discussion, see "[AUTOTITLE](/get-started/using-github/communicating-on-github)."

{% ifversion converting-issues-to-discussions %}When a conversation in an issue is better suited for a discussion, you can convert the issue to a discussion.{% endif %}
{% endif %}
