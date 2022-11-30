---
title: Moderating discussions
intro: 'You can promote healthy collaboration by marking comments as answers, locking or unlocking discussions, converting issues to discussions, and editing or deleting comments, discussions, and categories that don''t align with your{% ifversion fpt or ghec %} community''s code of conduct{% elsif ghes > 3.5 %} organization''s contribution guidelines{% endif %}.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
---


## About moderating discussions

{% data reusables.discussions.about-discussions %} If you have triage permissions for a repository, you can help moderate that repository's discussions by marking comments as answers, locking discussions that are no longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. Similarly, if you have triage permission for the source repository for organization discussions, you can moderate discussions for that organization.

## Marking a comment as an answer

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Locking discussions

It's appropriate to lock a conversation when the entire conversation is not constructive or violates your community's code of conduct or {% data variables.product.prodname_dotcom %}'s [Community Guidelines](/free-pro-team@latest/github/site-policy/github-community-guidelines). You can also lock a conversation to prevent comments on a discussion you want to use as an announcement to the community. When you lock a conversation, people with write access to the repository, or source repository for organization discussions, will still be able to comment on the discussion.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. In the list of discussions, click the discussion you want to lock.
  ![Lock discussion](/assets/images/help/discussions/unanswered-discussion.png)
1. In the right margin of a discussion, click **Lock conversation**.
1. Read the information about locking conversations and click **Lock conversation on this discussion**.
1. When you're ready to unlock the conversation, click **Unlock conversation**, then click **Unlock conversation on this discussion**.

## Converting an issue to a discussion

When you convert an issue to a discussion, the discussion is automatically created using the content from the issue. People with write access to a repository, or source repository for organization discussions, can bulk convert issues based on labels. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.repositories.sidebar-issues %}
1. In the list of issues, click the issue you'd like to convert.
1. In the right margin of an issue, click **Convert to discussion**.
1. Select the **Choose a category** drop-down menu, and click a category for your discussion.
1. Click **I understand, convert this issue to a discussion**.

{% ifversion discussions-hide-comments-on-block %}
## Blocking a user from your organization

Organization owners and moderators can block a user from the organization if their comments don't align with the community's code of conduct. When you block a user, they will no longer be able to comment on discussions. You can also hide all of the comments a user has made in the organization. For more information, see "[Blocking a user from your organization](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)."

{% data reusables.organizations.blocking-a-user %} 
{% endif %}
