---
title: Subscribing to and unsubscribing from notifications
intro: 'You can subscribe to individual conversations in issues, pull requests, and team discussions, even if you''re not watching the repository or a member of the team where the conversation is occurring. If you''re no longer interested in a conversation, you can unsubscribe or customize the types of notifications you receive.'
versions:
  enterprise-server: <2.21
---

### Managing your notification settings for an issue or pull request

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Choose an issue or pull request to subscribe to.
4. In the right sidebar, click **Subscribe** or **Unsubscribe**. ![Conversation Subscribe button](/assets/images/help/notifications/subscribe_button_with_gear.png)
5. To customize your notifications, click {% octicon "gear" aria-label="The gear icon" %}. ![Gear button next to Conversation Subscribe](/assets/images/help/notifications/subscribe_button_with_gear_chosen.png)
6. Select the type of notifications you want to receive for this conversation, then click **Save**. ![Conversation Subscribe options list](/assets/images/help/notifications/subscribe_options.png) You can see a list of all the issues and pull requests you're subscribed to. For more information, see "[Listing the issues and pull requests you're subscribed to](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-issues-and-pull-requests-youre-subscribed-to)."

### Subscribing to team discussions

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. On the team page, find the discussion you want to subscribe to.
6. In the top right corner of the discussion, click {% octicon "unmute" aria-label="The subscribe symbol" %} to subscribe to the discussion. ![Team discussion Subscribe button](/assets/images/help/notifications/team-discussion-subscribe-button.png)

### Unsubscribing from team discussions

{% data reusables.organizations.team-discussions-are-for-orgs %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
5. On the team page, find the discussion you want to unsubscribe from.
6. In the top right corner of the discussion, click {% octicon "mute" aria-label="The unsubscribe symbol" %} to unsubscribe from the discussion. ![Team discussion Subscribe button](/assets/images/help/notifications/team-discussion-unsubscribe-button.png)

### 더 읽을거리

- "[About notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[About conversations on {% data variables.product.product_name %}](/articles/about-conversations-on-github)"
- "[Watching and unwatching repositories](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"

- "[Listing the repositories you're watching](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
