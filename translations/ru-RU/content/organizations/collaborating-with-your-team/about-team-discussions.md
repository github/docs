---
title: About team discussions
intro: 'Your team can plan together, update one another, or talk about any topic you''d like in discussion posts on your team''s page in an organization.'
redirect_from:
  - /articles/about-team-discussions
  - /github/building-a-strong-community/about-team-discussions
  - /github/setting-up-and-managing-organizations-and-teams/about-team-discussions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

{% data reusables.organizations.team-discussions-purpose %}

Any organization member can post on your team's page or participate in a public discussion. {% data reusables.organizations.team-discussions-permissions %}

![Discussions tab of team page with public and private discussions](/assets/images/help/organizations/team-page-discussions-tab.png)

You can link to any team discussion to reference it elsewhere. You can pin important posts to your team's page for quick reference later. For more information, see "[Pinning a team discussion](/organizations/collaborating-with-your-team/pinning-a-team-discussion)."

![Pinned discussions tab of team page with pinned discussion](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %} Owners can disable team discussions for the entire organization. For more information, see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)."

### Notifications for team discussions

When someone posts or replies to a public discussion on a team's page, members of the team and members of any child teams receive email or web notifications. When someone posts or replies to a private discussion on a team's page, only members of the team receive notifications.

{% tip %}

**Tip:** Depending on your notification settings, you'll receive updates by email, the web notifications page on {% data variables.product.product_name %}, or both. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications)" and "[About web notifications](/github/receiving-notifications-about-activity-on-github/about-web-notifications){% endif %}."

{% endtip %}

By default, if your username is mentioned in a team discussion, you'll receive notifications for the post mentioning your username and any replies to that post. Also, by default, if you reply to a post, you will receive notifications for other replies to the post.

To turn off notifications for team discussions, you can unsubscribe to a specific discussion post or change your notification settings to unwatch or completely ignore a specific team's discussions. You can subscribe to notifications for a specific discussion post even if you're unwatching that team's discussions.

For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Subscribing to and unsubscribing from notifications](/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications){% endif %}" and "[Nested teams](/articles/about-teams/#nested-teams)."

### Дополнительная литература

- "[About conversations on {% data variables.product.prodname_dotcom %}](/articles/about-conversations-on-github)"
- "[About teams](/articles/about-teams)"
- "[Creating a team discussion](/organizations/collaborating-with-your-team/creating-a-team-discussion)"
- "[Editing or deleting a team discussion](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)"
