---
title: About notifications
intro: 'Notifications provide updates about the activities and conversations you''re interested in. You can receive notifications on {% data variables.product.product_name %} or through your email client.'
versions:
  enterprise-server: <2.21
---

### Types of notifications

The notifications you receive will either be *participating* notifications or *watching* notifications. Both types of notifications can be received as web notifications or email notifications. For more information, see:

- "[About web notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- "[About email notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[Choosing the delivery method for your notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)"

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

#### Participating notifications

{% data variables.product.product_name %} sends *participating* notifications when you're directly involved in activities or conversations within a repository or a team you're a member of. You'll receive a notification when:  
  - You, or a team you're a member of, are mentioned. For more information, see "[Basic writing and formatting syntax](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)."
  - The parent team of a child team you're a member of is mentioned. For more information, see "[About teams](/articles/about-teams)."
  - You're assigned to an issue or pull request.
  - A comment is added in a conversation you're subscribed to.
  - A commit is made to a pull request you're subscribed to.
  - You open, comment on, or close an issue or pull request.
  - A review is submitted that approves or requests changes to a pull request you're subscribed to.
  - You, or a team you're a member of, are requested to review a pull request.
  - You, or a team you're a member of, are the designated owner of a file and someone opens a pull request that changes that file. For more information, see "[About code owners](/articles/about-code-owners)."
  - You create or reply to a team discussion.

#### Watching notifications

{% data variables.product.product_name %} sends *watching* notifications for updates in repositories or team discussions that you're watching. {% if currentVersion ver_gt "enterprise-server@2.17" %} {% data reusables.notifications.auto-watch %}For more information, see "[Watching and unwatching repositories](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)."

{% endif %}You'll receive a notification when:
  - An issue is opened.
  - A comment is added to an open issue.
  - A pull request is opened.
  - A comment is added to an open pull request.
  - A comment is added to a commit.
  - A release is published. For more information, see "[About releases](/articles/about-releases)." You can also only watch for releases published in a repository, rather than all updates to a repository. For more information, see "[Watching and unwatching releases for a repository](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)."
  - A review is submitted that approves or requests changes to a pull request.
  - A team discussion post is created or replied to for a team you're watching.
  - A team discussion post for a parent team of or a team you're a member of and watching, is opened, edited, or replied to. For more information, see "[Nested teams](/articles/about-teams/#nested-teams)."

You can also browse activity from people you follow, repositories you watch, and organizations you're a member of on your dashboard. For more information, see "[About your personal dashboard](/articles/about-your-personal-dashboard)."

### Further reading

- "[Listing the repositories you're watching](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- "[Watching and unwatching repositories](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[Watching and unwatching team discussions](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-team-discussions)"
- "[Subscribing to and unsubscribing from notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
