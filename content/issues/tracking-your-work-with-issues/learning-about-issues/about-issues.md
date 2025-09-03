---
title: About issues
intro: 'Learn how you can use {% data variables.product.prodname_github_issues %} to track ideas, feedback, tasks, or bugs.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
  - /issues/tracking-your-work-with-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
---

You can create issues in your repository to plan, discuss, and track work. Issues are quick to create, flexible, and can be used in many ways. Issues can track bug reports, new features and ideas, and anything else you need to write down or discuss with your team, and you can use {% data variables.projects.projects_v2 %} to plan and track the work for your team. {% ifversion sub-issues %}You can also break your work down further by adding sub-issues and easily browse the full hierarchy of work to be done.{% endif %}

Issues can be created in a variety of ways, so you can choose the most convenient method for your workflow. For example, you can create an issue from a repository,{% ifversion sub-issues %} while adding sub-issues,{% endif %} convert a comment in an issue or pull request, create an issue from a specific line of code, or via a URL query. You can also create an issue from your platform of choice: through the web UI, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, GraphQL and REST APIs, or {% data variables.product.prodname_mobile %}. See [AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue).

{% ifversion copilot %}

> [!TIP] You can also use {% data variables.copilot.copilot_chat_short %} to generate ideas, outlines, or drafts for discussions or blog posts, based on your issues. See [AUTOTITLE](/copilot/copilot-chat-cookbook/documenting-code/writing-discussions-or-blog-posts).

{% endif %}

{% ifversion sub-issues %}

## About sub-issues

{% data reusables.issues.about-sub-issues %} See [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues) and [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/browsing-sub-issues).

{% endif %}

## About issue dependencies

You can define blocking relationships between issues using issue dependencies. Issue dependencies let you identify issues that are blocked by, or blocking, other work. See [AUTOTITLE](/free-pro-team@latest/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies).

## Metadata on issues

You can add metadata to your issues, including {% ifversion issue-types %}issue types, {% endif %}labels and milestones to organize your issues.

See {% ifversion issue-types %}[AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/managing-issue-types-in-an-organization), {% endif %}[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels) and [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/about-milestones).

## About integration with {% data variables.product.github %}

Issues integrate with your work all across {% data variables.product.github %}. Mentioning an issue in another issue or pull request will create references between them and using keywords, like `fixes:`, in your pull requests will automatically close the associated issues. See [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue).

## Using {% data variables.projects.projects_v2_caps %} to plan and track your work

{% data variables.projects.projects_v2_caps %} is strongly integrated with issues to plan and track the work for your team. All your issue metadata is available in your projects, allowing you to create views and filters to represent your work. See [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

## Staying up to date

To stay updated on the most recent comments in an issue, you can subscribe to an issue to receive notifications about the latest comments. To quickly find links to recently updated issues you're subscribed to, visit your dashboard. For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications) and [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard).

You can assign yourself and teammates to issues to make it clear who is working on an issue and also make it easier for you to locate your issues. See [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users) and [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/viewing-all-of-your-issues-and-pull-requests).

## Community management

To help contributors open meaningful issues that provide the information that you need, you can use {% ifversion fpt or ghec %}issue forms and {% endif %}issue templates. See [AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests).

{% ifversion fpt or ghec %}To maintain a healthy community, you can report comments that violate {% data variables.product.github %}'s [Community Guidelines](/free-pro-team@latest/site-policy/github-terms/github-community-guidelines). See [AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %}

## Efficient communication

You can @mention collaborators who have access to your repository in an issue to draw their attention to a comment. To link related issues in the same repository, you can type `#` followed by part of the issue title and then clicking the issue that you want to link. To communicate responsibility, you can assign issues. If you find yourself frequently typing the same comment, you can use saved replies.
{% ifversion fpt or ghec %} See [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and [AUTOTITLE](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users).
{% endif %}

## Comparing issues and discussions

Some conversations are more suitable for {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} For guidance on when to use an issue or a discussion, see [AUTOTITLE](/get-started/using-github/communicating-on-github).

When a conversation in an issue is better suited for a discussion, you can convert the issue to a discussion.

## Next steps

Here are some helpful resources for taking your next steps with {% data variables.product.prodname_github_issues %}:

* To learn about getting started using issues, see [AUTOTITLE](/issues/tracking-your-work-with-issues/learning-about-issues/quickstart).
* To learn about the essentials for using GitHub's planning and tracking tools, see [AUTOTITLE](/issues/tracking-your-work-with-issues/learning-about-issues/planning-and-tracking-work-for-your-team-or-project).
* To learn more about how projects can help you with planning and tracking, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/learning-about-projects).
