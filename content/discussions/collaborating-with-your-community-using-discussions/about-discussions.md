---
title: About discussions
intro: 'Use discussions to ask and answer questions, share information, make announcements, and conduct or participate in a conversation about a project on {% data variables.product.product_name %}.'
versions:
  feature: discussions
---


## About {% data variables.product.prodname_discussions %}

With {% data variables.product.prodname_discussions %}, the community for your project can create and participate in conversations within the project's repository or organization. Discussions empower a project's maintainers, contributors, and visitors to gather and accomplish the following goals in a central location, without third-party tools.

- Share announcements and information, gather feedback, plan, and make decisions
- Ask questions, discuss and answer the questions, and mark the discussions as answered
- Create polls to gauge community opinion
- Foster an inviting atmosphere for visitors and contributors to discuss goals, development, administration, and workflows

![Discussions tab for a repository](/assets/images/help/discussions/hero.png)

You might use repository discussions to discuss topics that are specific to the repository. If your project spans multiple repositories, you might use organization discussions to discuss topics that aren't specific to a single repository in your organization.

You don't need to close a discussion like you close an issue or a pull request.

If a repository administrator or project maintainer enables {% data variables.product.prodname_discussions %} for a repository, anyone who has access to the repository can create and participate in discussions for the repository. If an organization owner enables {% data variables.product.prodname_discussions %} for an organization, anyone who can view the source repository can create an organization discussion.

Repository administrators and project maintainers can manage discussions and discussion categories in a repository, and pin discussions to increase the visibility of the discussion. Moderators and collaborators can mark comments as answers, lock discussions, and convert issues to discussions. Similarly, for organization discussions, the role of a user in the source repository determines how a user can interact with organization discussions. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."

For more information about management of discussions, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

## About polls

You can create polls in the polls category to gauge interest in new ideas and project direction. Anyone with read access to your repository can create polls, vote in polls, and view their results.{% ifversion fpt or ghec %} Signed out users can view the results of polls in public repositories.{% endif %}

Polls require a question and at least two options. You can add a maximum of eight options and the options can contain a maximum of 128 characters. 

Voters cannot change their vote. Editing a poll will reset any votes that have already been cast.

For more information on creating polls, see "[Creating a poll](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll)."

## About discussion organization

You can organize discussions with categories and labels.

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

For discussions with a question/answer format, an individual comment within the discussion can be marked as the discussion's answer. {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

For more information, see "[Managing categories for discussions](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

{% data reusables.discussions.you-can-label-discussions %}

## Best practices for {% data variables.product.prodname_discussions %}

As a community member or maintainer, start a discussion to ask a question or discuss information that affects the community. For more information, see "[Collaborating with maintainers using discussions](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions)."

Participate in a discussion to ask and answer questions, provide feedback, and engage with the project's community. For more information, see "[Participating in a discussion](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)."

You can spotlight discussions that contain important, useful, or exemplary conversations among members in the community. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)."

{% data reusables.discussions.you-can-convert-an-issue %} For more information, see "[Moderating discussions](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)."

## Sharing feedback

You can share your feedback about {% data variables.product.prodname_discussions %} with {% data variables.product.company_short %}. To join the conversation, see [{% data variables.product.prodname_github_community %} discussions](https://github.com/orgs/community/discussions/categories/discussions).

## Further reading

- "[About writing and formatting on {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)"
- "[Searching discussions](/search-github/searching-on-github/searching-discussions)"
- "[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications)"
- "[Moderating comments and conversations](/communities/moderating-comments-and-conversations)"{% ifversion fpt or ghec %}
- "[Maintaining your safety on {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"{% endif %}
