---
title: About team discussions
intro: 'Your team can plan together, update one another, or talk about any topic you''d like in discussion posts on your team''s page in an organization.'
redirect_from:
  - /articles/about-team-discussions
  - /github/building-a-strong-community/about-team-discussions
  - /github/setting-up-and-managing-organizations-and-teams/about-team-discussions
versions:
  feature: team-discussions
topics:
  - Community
---
{% ifversion team-discussions-migration %}
{% data reusables.organizations.team-discussions-migration %}
{% endif %}

{% data reusables.organizations.team-discussions-purpose %}

Any organization member can post on your team's page or participate in a public discussion. {% data reusables.organizations.team-discussions-permissions %}

You can link to any team discussion to reference it elsewhere. You can pin important posts to your team's page for quick reference later. For more information, see "[AUTOTITLE](/organizations/collaborating-with-your-team/pinning-a-team-discussion)."

{% data reusables.organizations.team-discussions-default %} Owners can disable team discussions for the entire organization. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)."

## Notifications for team discussions

When someone posts or replies to a public discussion on a team's page, members of the team and members of any child teams receive email or web notifications. When someone posts or replies to a private discussion on a team's page, only members of the team receive notifications.

{% tip %}

**Tip:** Depending on your notification settings, you'll receive updates by email, the web notifications page on {% data variables.product.product_name %}, or both. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)."

{% endtip %}

By default, if your username is mentioned in a team discussion, you'll receive notifications for the post mentioning your username and any replies to that post. Also, by default, if you reply to a post, you will receive notifications for other replies to the post.

To turn off notifications for team discussions, you can unsubscribe to a specific discussion post or change your notification settings to unwatch or completely ignore a specific team's discussions. You can subscribe to notifications for a specific discussion post even if you're unwatching that team's discussions.

For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)" and "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams#nested-teams)."

{% ifversion fpt or ghec %}

## Organization discussions

You can also use organization discussions to facilitate conversations across your organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)."

{% endif %}

## Further reading

- "[AUTOTITLE](/get-started/quickstart/communicating-on-github)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)"
- "[AUTOTITLE](/organizations/collaborating-with-your-team/creating-a-team-discussion)"
- "[AUTOTITLE](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)"
