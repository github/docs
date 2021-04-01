---
title: Locking conversations
intro: 'Repository owners and collaborators, and people with write access to a repository, can lock conversations on issues, pull requests, and commits permanently or temporarily to defuse a heated interaction.'
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - сообщество
---

It's appropriate to lock a conversation when the entire conversation is not constructive or violates your community's code of conduct{% if currentVersion == "free-pro-team@latest" %} or GitHub's [Community Guidelines](/articles/github-community-guidelines){% endif %}. When you lock a conversation, you can also specify a reason, which is publicly visible.

Locking a conversation creates a timeline event that is visible to anyone with read access to the repository. However, the username of the person who locked the conversation is only visible to people with write access to the repository. For anyone without write access, the timeline event is anonymized.

![Anonymized timeline event for a locked conversation](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

While a conversation is locked, only [people with write access](/articles/repository-permission-levels-for-an-organization/) and [repository owners and collaborators](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-user-account) can add, hide, and delete comments.

To search for locked conversations in a repository that is not archived, you can use the search qualifiers `is:locked` and `archived:false`. Conversations are automatically locked in archived repositories. For more information, see "[Searching issues and pull requests](/articles/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)."

1. Optionally, write a comment explaining why you're locking the conversation.
2. In the right margin of the issue or pull request, or above the comment box on the commit page, click **Lock conversation**. ![Lock conversation link](/assets/images/help/repository/lock-conversation.png)
3. Optionally, choose a reason for locking the conversation. ![Reason for locking a conversation menu](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. Read the information about locking conversations and click **Lock conversation on this issue**, **Lock conversation on this pull request**, or **Lock conversation on this commit**. ![Confirm lock with a reason dialog box](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. When you're ready to unlock the conversation, click **Unlock conversation**. ![Unlock conversation link](/assets/images/help/repository/unlock-conversation.png)

### Дополнительная литература

- "[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)"
- "[Using templates to encourage useful issues and pull requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)"
- "[Managing disruptive comments](/communities/moderating-comments-and-conversations/managing-disruptive-comments)"{% if currentVersion == "free-pro-team@latest" %}
- "[Maintaining your safety on {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"
- "[Reporting abuse or spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)"
{% endif %}
