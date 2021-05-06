---
title: Viewing your subscriptions
intro: 'To understand where your notifications are coming from and your notifications volume, we recommend reviewing your subscriptions and watched repositories regularly.'
redirect_from:
  - /articles/subscribing-to-conversations/
  - /articles/unsubscribing-from-conversations/
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories/
  - /articles/unwatching-repositories/
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories/
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

You receive notifications for your subscriptions of ongoing activity on {% data variables.product.product_name %}. There are many reasons you can be subscribed to a conversation. For more information, see "[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)."

We recommend auditing and unsubscribing from your subscriptions as a part of a healthy notifications workflow. For more information about your options for unsubscribing, see "[Managing subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

### Diagnosing why you receive too many notifications

When your inbox has too many notifications to manage, consider whether you have oversubscribed or how you can change your notification settings to reduce the subscriptions you have and the types of notifications you're receiving. For example, you may consider disabling the settings to automatically watch all repositories and all team discussions whenever you've joined a team or repository.

![Automatic watching](/assets/images/help/notifications-v2/automatic-watching-example.png)

For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)."

To see an overview of your repository subscriptions, see "[Reviewing repositories that you're watching](#reviewing-repositories-that-youre-watching)." 
{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Tip:** You can select the types of event to be notified of by using the **Custom** option of the **Watch/Unwatch** dropdown list in your [watching page](https://github.com/watching) or on any repository page on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)."

{% endtip %}
{% endif %}

Many people forget about repositories that they've chosen to watch in the past. From the "Watched repositories" page you can quickly unwatch repositories. For more information on ways to unsubscribe, see "[Unwatch recommendations](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)" on {% data variables.product.prodname_blog %} and "[Managing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)." You can also create a triage workflow to help with the notifications you receive. For guidance on triage workflows, see "[Customizing a workflow for triaging your notifications](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)."

### Reviewing all of your subscriptions

{% data reusables.notifications.access_notifications %}
1. In the left sidebar, under the list of repositories that you have notifications from, use the "Manage notifications" drop-down to click **Subscriptions**.
  ![Manage notifications drop down menu options](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Use the filters and sort to narrow the list of subscriptions and begin unsubscribing to conversations you no longer want to receive notifications for.

  ![Subscriptions page](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**Tips:**
- To review subscriptions you may have forgotten about, sort by "least recently subscribed."

- To review a list of repositories that you can still receive notifications for, see the repository list in the "filter by repository" drop-down menu.

{% endtip %}

### Reviewing repositories that you're watching

1. In the left sidebar, under the list of repositories, use the "Manage notifications" drop-down menu and click **Watched repositories**.
  ![Manage notifications drop down menu options](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Evaluate the repositories that you are watching and decide if their updates are still relevant and helpful. When you watch a repository, you will be notified of all conversations for that repository.
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![Watched notifications page](/assets/images/help/notifications-v2/watched-notifications.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
  ![Watched notifications page](/assets/images/help/notifications-v2/watched-notifications-custom.png)
{% endif %}

  {% tip %}

  **Tip:** Instead of watching a repository, consider only receiving notifications {% if currentVersion == "free-pro-team@latest" %}when there are updates to issues, pull requests, releases or discussions (if enabled for the repository), or any combination of these options,{% else %}for releases in a repository,{% endif %} or completely unwatching a repository.
  
  When you unwatch a repository, you can still be notified when you're @mentioned or participating in a thread. When you configure to receive notifications for certain event types, you're only notified when there are updates to these event types in the repository, you're participating in a thread, or you or a team you're on is @mentioned.

  {% endtip %}
