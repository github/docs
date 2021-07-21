---
title: Moderating discussions
intro: 'You can promote healthy collaboration by marking comments as answers, locking or unlocking discussions, converting issues to discussions, and editing or deleting comments, discussions, and categories that don''t align with your community''s code of conduct.'
permissions: People with triage access to a repository can moderate discussions in the repository.
versions:
  fpt: '*'
---

{% data reusables.discussions.beta %}

## About moderating discussions

{% data reusables.discussions.about-discussions %} If you have triage permissions for a repository, you can help moderate a project's discussions by marking comments as answers, locking discussions that are not longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development.

## Marking a comment as an answer

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Locking discussions

It's appropriate to lock a conversation when the entire conversation is not constructive or violates your community's code of conduct or {% data variables.product.prodname_dotcom %}'s [Community Guidelines](/github/site-policy/github-community-guidelines). You can also lock a conversation to prevent comments on a discussion you want to use as an announcement to the community. When you lock a conversation, people with write access to the repository will still be able to comment on the discussion.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
1. In the list of discussions, click the discussion you want to lock.
  ![Lock discussion](/assets/images/help/discussions/unanswered-discussion.png)
1. In the right margin of a discussion, click **Lock conversation**.
1. Read the information about locking conversations and click **Lock conversation on this discussion**.
1. When you're ready to unlock the conversation, click **Unlock conversation**, then click **Unlock conversation on this discussion**.

## Converting an issue to a discussion

When you convert an issue to a discussion, the discussion is automatically created using the content from the issue. People with write access to a repository can bulk convert issues based on labels. For more information, see "[Managing discussions in your repository](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. In the list of issues, click the issue you'd like to convert.
1. In the right margin of an issue, click **Convert to discussion**.
1. Select the **Choose a category** drop-down menu, and click a category for your discussion.
1. Click **I understand, convert this issue to a discussion**.
