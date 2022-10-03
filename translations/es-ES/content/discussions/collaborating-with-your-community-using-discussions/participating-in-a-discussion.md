---
title: Participating in a discussion
intro: 'You can converse with the community and maintainers in a forum within the repository for a project on {% data variables.product.product_name %}.'
permissions: 'People with read access to a repository can participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can participate in discussions and polls in that organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
shortTitle: Participate in discussion
---


## About participation in a discussion

{% data reusables.discussions.about-discussions %} For more information, see "[About discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."

In addition to starting or viewing discussions and polls, you can:

- Comment in response to the original comment from the author of the discussion
- Create a comment thread by replying to an individual comment that another community member made within the discussion
- React to comments with emoji
- Upvote discussions and top-level comments to give them more visibility

{% ifversion fpt or ghec %}You can block users and report disruptive content to maintain a safe and pleasant environment for yourself on {% data variables.product.product_name %}. For more information, see "[Maintaining your safety on {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)."{% endif %}

## Prerequisites

{% data variables.product.prodname_discussions %} must be enabled for the repository or organization for you to participate in a discussion in the repository or organization. For more information, see "[Enabling or disabling {% data variables.product.prodname_discussions %} for a repository](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)" and "[Enabling or disabling GitHub Discussions for an organization](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)."

## Creating a discussion

{% data reusables.discussions.starting-a-discussion %}

## Creating a poll

{% data reusables.discussions.starting-a-poll %}

## Marking a comment as an answer

Discussion authors and users with the triage role or greater for a repository can mark a comment as the answer to a discussion in the repository.
Similarly, discussion authors and users with the triage role or greater for the source repository for organization discussions can mark a comment as the answer to a discussion in the organization.

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Upvoting a discussion

You can upvote discussions to give more visibility to the topics that matter to you, and sort discussions to see which have been upvoted the most. For more information on sorting discussions, see "[Sorting the list of discussions](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions#sorting-the-list-of-discussions)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
1. In the list of discussions, find the discussion you want to upvote.
1. To the left of the discussion, click the upvote arrow.

   ![Discussion list and upvote button for upvoting discussions](/assets/images/help/discussions/upvote-discussion-button.png)
1. Optionally, click the upvote arrow again to remove your upvote.

## Upvoting a comment

You can upvote top-level comments in discussions, and sort top-level comments to see which comments have been upvoted the most. For more information on sorting comments, see "[Sorting top-level comments in discussions](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions#sorting-top-level-comments-in-discussions)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. In the discussion, find a top-level comment you want to upvote. 
1. Click on the upvote arrow at the bottom left of the comment.

   ![Top-level comment and upvote button for upvoting comments](/assets/images/help/discussions/upvote-comment-button.png)
1. Optionally, click the upvote arrow again to remove your upvote.
