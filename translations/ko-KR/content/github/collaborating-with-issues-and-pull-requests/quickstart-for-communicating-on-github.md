---
title: Quickstart for communicating on GitHub
intro: 'You can discuss specific projects and changes, as well as broader ideas or team goals, using different types of discussions on {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/about-discussions-in-issues-and-pull-requests/
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
---

### Introduction

{% data variables.product.product_name %} provides built-in collaborative communication tools allowing you to interact closely with your community. This quickstart guide will show you how to pick the right tool for your needs.

{% if currentVersion == "free-pro-team@latest" %}
You can create and participate in issues, pull requests, {% data variables.product.prodname_discussions %}, and team discussions, depending on the type of conversation you'd like to have.
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
You can create and participate in issues, pull requests and team discussions, depending on the type of conversation you'd like to have.
{% endif %}

#### 문제
- are useful for discussing specific details of a project such as bug reports, planned improvements and feedback.
- are specific to a repository, and usually have a clear owner.
- are often referred to as {% data variables.product.prodname_dotcom %}'s bug-tracking system.

#### Pull requests
- allow you to propose specific changes.
- allow you comment directly on proposed changes suggested by others.
- are specific to a repository.

{% if currentVersion == "free-pro-team@latest" %}
#### {% data variables.product.prodname_discussions %}
-  are like a forum, and are best used for open-form ideas and discussions where collaboration is important.
-  may span many repositories.
-  provide a collaborative experience outside the codebase, allowing the brainstorming of ideas, and the creation of a community knowledge base.
-  often don’t have a clear owner.
-  often do not result in an actionable task.
{% endif %}

#### Team discussions
- can be started on your team's page for conversations that span across projects and don't belong in a specific issue or pull request. Instead of opening an issue in a repository to discuss an idea, you can include the entire team by having a conversation in a team discussion.
- allow you to hold discussions with your team about planning, analysis, design, user research and general project decision making in one place.{% if currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- provide a collaborative experience outside the codebase, allowing the brainstorming of ideas.
- often don’t have a clear owner.
- often do not result in an actionable task.{% endif %}

### Which discussion tool should I use?

#### Scenarios for issues

- I want to keep track of tasks, enhancements and bugs.
- I want to file a bug report.
- I want to share feedback about a specific feature.
- I want to ask a question about files in the repository.

##### Issue example

This example illustrates how a {% data variables.product.prodname_dotcom %} user created an issue in our documentation open source repository to make us aware of a bug, and discuss a fix.

![Example of issue](/assets/images/help/issues/issue-example.png)

- A user noticed that the blue color of the banner at the top of the page in the Chinese version of the {% data variables.product.prodname_dotcom %} Docs makes the text in the banner unreadable.
- The user created an issue in the repository, stating the problem and suggesting a fix (which is, use a different background color for the banner).
- A discussion ensues, and eventually, a consensus will be reached about the fix to apply.
- A contributor can then create a pull request with the fix.

#### Scenarios for pull requests

- I want to fix a typo in a repository.
- I want to make changes to a repository.
- I want to make changes to fix an issue.
- I want to comment on changes suggested by others.

##### Pull request example

This example illustrates how a {% data variables.product.prodname_dotcom %} user created a pull request in our documentation open source repository to fix a typo.

In the **Conversation** tab of the pull request, the author explain why they created the pull request. ![Example of pull request - Conversation tab](/assets/images/help/pull_requests/pr-conversation-example.png)

The **Files changed** tab of the pull request shows the implemented fix. ![Example of pull request - Files changed tab](/assets/images/help/pull_requests/pr-files-changed-example.png)

- This contributor notices a typo in the repository.
- The user creates a pull request with the fix.
- A repository maintainer reviews the pull request, comments on it, and merges it.

{% if currentVersion == "free-pro-team@latest" %}
#### Scenarios for {% data variables.product.prodname_discussions %}

- I have a question that's not necessarily related to specific files in the repository.
- I want to share news with my collaborators, or my team.
- I want to start or participate in an open-ended conversation.
- I want to make an announcement to my community.

##### {% data variables.product.prodname_discussions %} example

This example shows the {% data variables.product.prodname_discussions %} welcome post for the {% data variables.product.prodname_dotcom %} Docs open source repository, and illustrates how the team wants to collaborate with their community.

![Example of {% data variables.product.prodname_discussions %}](/assets/images/help/discussions/github-discussions-example.png)

This community maintainer started a discussion to welcome the community, and to ask members to introduce themselves. This post fosters an inviting atmosphere for visitors and contributors. The post also clarifies that the team's happy to help with contributions to the repository.

{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
#### Scenarios for team discussions

- I have a question that's not necessarily related to specific files in the repository.
- I want to share news with my collaborators, or my team.
- I want to start or participate in an open-ended conversation.
- I want to make an announcement to my team.

{% if currentVersion == "free-pro-team@latest" %}
As you can see, team discussions are very similar to {% data variables.product.prodname_discussions %}. For {% data variables.product.prodname_dotcom_the_website %}, we recommend using {% data variables.product.prodname_discussions %} as the starting point for conversations. You can use {% data variables.product.prodname_discussions %} to collaborate with any community on {% data variables.product.prodname_dotcom %}. If you are part of an organization, and would like to initiate conversations within your organization or team within that organization, you should use team discussions.
{% endif %}

##### Team discussion example

This example shows a team post for the `octo-team` team.

![Example of team discussion](/assets/images/help/projects/team-discussions-example.png)

The `octocat` team member posted a team discussion, informing the team of various things:
- A team member called Mona started remote game events.
- There is a blog post describing how the teams uses {% data variables.product.prodname_actions %} to produce their docs.
- Material about the April All Hands is now available for all team members to view.

{% endif %}

### 다음 단계

These examples showed you how to decide which is the best tool for your conversations on {% data variables.product.product_name %}. But this is only the beginning; there is so much more you can do to tailor these tools to your needs.

For issues, for example, you can tag issues with labels for quicker searching and create issue templates to help contributors open meaningful issues. For more information, see "[About issues](/github/managing-your-work-on-github/about-issues#working-with-issues)" and "[About issue and pull request templates](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."

For pull requests, you can create draft pull requests if your proposed changes are still a work in progress. Draft pull requests cannot be merged until they're marked as ready for review. For more information, see "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)."

{% if currentVersion == "free-pro-team@latest" %}
For {% data variables.product.prodname_discussions %}, you can set up a code of conduct and pin discussions that contain important information for your community. For more information, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."
{% endif %}

For team discussions, you can edit or delete discussions on a team's page, and you can configure notifications for team discussions. For more information, see "[About team discussions](/organizations/collaborating-with-your-team/about-team-discussions)."
