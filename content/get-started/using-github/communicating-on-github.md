---
title: Communicating on GitHub
intro: 'You can discuss specific projects and changes, as well as broader ideas or team goals, using different types of discussions on {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/quickstart-for-communicating-on-github
  - /articles/about-discussions-in-issues-and-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
  - /github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github
  - /github/getting-started-with-github/quickstart/communicating-on-github
  - /get-started/quickstart/communicating-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
---
## Introduction

{% data variables.product.product_name %} provides built-in collaborative communication tools allowing you to interact closely with your community. This quickstart guide will show you how to pick the right tool for your needs.

{% ifversion discussions %}
  {% ifversion team-discussions %}
  You can create and participate in issues, pull requests, {% data variables.product.prodname_discussions %}, and team discussions, depending on the type of conversation you'd like to have.
  {% else %}
  You can create and participate in issues, pull requests, and {% data variables.product.prodname_discussions %}, depending on the type of conversation you'd like to have.
  {% endif %}
{% else %}
You can create and participate in issues, pull requests and team discussions, depending on the type of conversation you'd like to have.
{% endif %}

### {% data variables.product.prodname_github_issues %}

* Are useful for discussing specific details of a project such as bug reports, planned improvements and feedback
* Are specific to a repository, and usually have a clear owner
* Are often referred to as {% data variables.product.prodname_dotcom %}'s bug-tracking system

### Pull requests

* Allow you to propose specific changes
* Allow you to comment directly on proposed changes suggested by others
* Are specific to a repository

{% ifversion fpt or ghec %}

### {% data variables.product.prodname_discussions %}

* Are like a forum, and are best used for open-form ideas and discussions where collaboration is important
* May span many repositories
* Provide a collaborative experience outside the codebase, allowing the brainstorming of ideas, and the creation of a community knowledge base
* Often don’t have a clear owner
* Often do not result in an actionable task
{% endif %}

{% ifversion team-discussions %}

### Team discussions

* can be started on your team's page for conversations that span across projects and don't belong in a specific issue or pull request. Instead of opening an issue in a repository to discuss an idea, you can include the entire team by having a conversation in a team discussion.
* allow you to hold discussions with your team about planning, analysis, design, user research and general project decision making in one place.{% ifversion ghes %}
* provide a collaborative experience outside the codebase, allowing the brainstorming of ideas.
* often don’t have a clear owner.
* often do not result in an actionable task.{% endif %}
{% endif %}

## Which discussion tool should I use?

### Scenarios for issues

* I want to keep track of tasks, enhancements and bugs.
* I want to file a bug report.
* I want to share feedback about a specific feature.
* I want to ask a question about files in the repository.

#### Issue example

This example illustrates how a {% data variables.product.prodname_dotcom %} user created an issue in our documentation open source repository to make us aware of a bug, and discuss a fix.

![Screenshot of an issue, with the title "Blue link text in notices is unreadable due to blue background."](/assets/images/help/issues/issue-example.png)

* A user noticed that the blue color of the banner at the top of the page in the Chinese version of the {% data variables.product.prodname_dotcom %} Docs makes the text in the banner unreadable.
* The user created an issue in the repository, stating the problem and suggesting a fix (which is, use a different background color for the banner).
* A discussion ensues, and eventually, a consensus will be reached about the fix to apply.
* A contributor can then create a pull request with the fix.

### Scenarios for pull requests

* I want to fix a typo in a repository.
* I want to make changes to a repository.
* I want to make changes to fix an issue.
* I want to comment on changes suggested by others.

#### Pull request example

This example illustrates how a {% data variables.product.prodname_dotcom %} user created a pull request in our documentation open source repository to fix a typo.

In the **Conversation** tab of the pull request, the author explains why they created the pull request.

![Screenshot of the "Conversation" tab of a pull request.](/assets/images/help/pull_requests/pr-conversation-example.png)

The **Files changed** tab of the pull request shows the implemented fix.

![Screenshot of the "Files changed" tab of a pull request.](/assets/images/help/pull_requests/pr-files-changed-example.png)

* This contributor notices a typo in the repository.
* The user creates a pull request with the fix.
* A repository maintainer reviews the pull request, comments on it, and merges it.

{% ifversion discussions %}

### Scenarios for {% data variables.product.prodname_discussions %}

* I have a question that's not necessarily related to specific files in the repository.
* I want to share news with my collaborators, or my team.
* I want to start or participate in an open-ended conversation.
* I want to make an announcement to my community.

#### {% data variables.product.prodname_discussions %} example

This example shows the {% data variables.product.prodname_discussions %} welcome post for the {% data variables.product.prodname_dotcom %} Docs open source repository, and illustrates how the team wants to collaborate with their community.

![Screenshot of an example of a discussion, with the title "Welcome to GitHub Docs Discussions."](/assets/images/help/discussions/github-discussions-example.png)

This community maintainer started a discussion to welcome the community, and to ask members to introduce themselves. This post fosters an inviting atmosphere for visitors and contributors. The post also clarifies that the team's happy to help with contributions to the repository.

{% endif %}
{% ifversion team-discussions %}

### Scenarios for team discussions

* I have a question that's not necessarily related to specific files in the repository.
* I want to share news with my collaborators, or my team.
* I want to start or participate in an open-ended conversation.
* I want to make an announcement to my team.

#### Team discussion example

This example shows a team post for the `octo-team` team.

![Example of team discussion.](/assets/images/help/projects/team-discussions-example.png)

The `octocat` team member posted a team discussion, informing the team of various things:
* A team member called Mona started remote game events.
* There is a blog post describing how the teams use {% data variables.product.prodname_actions %} to produce their docs.
* Material about the April All Hands is now available for all team members to view.
{% endif %}

## Next steps

These examples showed you how to decide which is the best tool for your conversations on {% data variables.product.product_name %}. But this is only the beginning; there is so much more you can do to tailor these tools to your needs.

For issues, for example, you can tag issues with labels for quicker searching and create issue templates to help contributors open meaningful issues. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues#working-with-issues)" and "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)."

For pull requests, you can create draft pull requests if your proposed changes are still a work in progress. Draft pull requests cannot be merged until they're marked as ready for review. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)."

{% ifversion discussions %}
For {% data variables.product.prodname_discussions %}, you can{% ifversion fpt or ghec %} set up a code of conduct and{% endif %} pin discussions that contain important information for your community. For more information, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."
{% endif %}

{% ifversion team-discussions %}For team discussions, you can edit or delete discussions on a team's page, and you can configure notifications for team discussions. For more information, see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)."{% endif %}

To learn some advanced formatting features that will help you communicate, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)."
