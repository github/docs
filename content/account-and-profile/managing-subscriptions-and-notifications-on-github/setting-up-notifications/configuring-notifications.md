---
title: Configuring notifications
intro: 'Choose the type of activity on {% data variables.product.prodname_dotcom %} that you want to receive notifications for and how you want these updates delivered.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails
  - /articles/configuring-notification-emails
  - /articles/about-notification-emails
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods
  - /articles/managing-notification-delivery-methods
  - /articles/managing-notification-emails-for-organizations
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Notifications
---

## Notification delivery options

You can receive notifications for activity on {% data variables.product.prodname_dotcom %} in the following locations.

- The notifications inbox in the {% data variables.product.prodname_dotcom %} web interface
- The notifications inbox on {% data variables.product.prodname_mobile %}, which syncs with the inbox in the web interface
- An email client that uses a verified email address, which can also sync with the notifications inbox in the web interface and {% data variables.product.prodname_mobile %}

{% data reusables.notifications-v2.notifications-inbox-required-setting %} For more information, see "[Choosing your notification settings](#choosing-your-notification-settings)."

{% data reusables.notifications.shared_state %}

### Benefits of the notifications inbox

The notifications inbox includes triaging options designed specifically for your {% data variables.product.prodname_dotcom %} notifications flow, including options to:
- Triage multiple notifications at once.
- Mark completed notifications as **Done** and remove them from your inbox. To view all of your notifications marked as **Done**, use the `is:done` query.
- Save a notification to review later. Saved notifications are flagged in your inbox and kept indefinitely. To view all of your saved notifications, use the `is:saved` query.
- Unsubscribe and remove a notification from your inbox.
- Preview the issue{% ifversion team-discussions %}, pull request, or team discussion{% else %} or pull request{% endif %} where the notification originates on {% data variables.product.prodname_dotcom %} from within the notifications inbox.
- See one of the latest reasons you're receiving a notification from your inbox with a `reasons` label.
- Create custom filters to focus on different notifications when you want.
- Group notifications in your inbox by repository or date to get a quick overview with less context switching

In addition, you can receive and triage notifications on your mobile device with {% data variables.product.prodname_mobile %}. For more information, see "[Managing your notification settings with GitHub Mobile](#managing-your-notification-settings-with-github-mobile)" or "[AUTOTITLE](/get-started/using-github/github-mobile)."

### Benefits of using an email client for notifications

One benefit of using an email client is that all of your notifications can be kept indefinitely depending on your email client's storage capacity. Your inbox notifications are only kept for 5 months on {% data variables.product.prodname_dotcom %} unless you've marked them as **Saved**. **Saved** notifications are kept indefinitely. For more information about your inbox's retention policy, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications#notification-retention-policy)."

Sending notifications to your email client also allows you to customize your inbox according to your email client's settings, which can include custom or color-coded labels.

Email notifications also allow flexibility with the types of notifications you receive and allow you to choose different email addresses for updates. For example, you can send certain notifications for a repository to a  verified personal email address. For more information, about your email customization options, see "[Customizing your email notifications](#customizing-your-email-notifications)."

## About participating and watching notifications

When you watch a repository, you're subscribing to updates for activity in that repository. {% ifversion team-discussions %}Similarly, when you watch a specific team's discussions, you're subscribing to all conversation updates on that team's page. For more information, see "[AUTOTITLE](/organizations/collaborating-with-your-team/about-team-discussions)."{% endif %}

To see repositories that you're watching, go to your [watching page](https://github.com/watching). For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."

You can configure notifications for a repository on the repository page, or on your watching page.

### About custom notifications

You can customize notifications for a repository. For example, you can choose to only be notified when updates to one or more types of events ({% data reusables.notifications-v2.custom-notification-types %}) happen within a repository, or ignore all notifications for a repository. For more information, see "[Configuring your watch settings for an individual repository](#configuring-your-watch-settings-for-an-individual-repository)" below.

### Participating in conversations

Anytime you comment in a conversation or when someone @mentions your username, you are participating in a conversation. By default, you are automatically subscribed to a conversation when you participate in it. You can unsubscribe from a conversation you've participated in manually by clicking **Unsubscribe** on the issue or pull request or through the **Unsubscribe** option in the notifications inbox.

{% ifversion update-notification-settings-22 %}For conversations you're watching or participating in, you can choose whether you want to receive notifications on {% data variables.product.company_short %} or by email in your notification settings. For more information, see "[Choosing your notification settings](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings)."

{% else %}

For conversations you're watching or participating in, you can choose whether you want to receive notifications by email or through the notifications inbox. For more information, see "[Choosing your notification settings](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings)."

![Screenshot of the "Notification settings" page. The "Participating" and "Watching" settings are shown, each with two checkbox options, titled "Email" and "Web and Mobile".](/assets/images/help/notifications-v2/participating-and-watching-options.png){% endif %}

For example, on your "Notification settings" page:
- If you don't want notifications to be sent to your email, deselect **email** for participating and watching notifications.
- If you want to receive notifications by email when you've participated in a conversation, then select **email** under "Participating".

{% ifversion update-notification-settings-22 %}If you do not enable "Notify me: On GitHub" for watching or participating notifications, then your notifications inbox will not have any updates.

{% else %}

If you do not enable watching or participating notifications for web{% ifversion ghes %} and mobile{% endif %}, then your notifications inbox will not have any updates.{% endif %}

## Customizing your email notifications

After enabling email notifications, {% data variables.product.prodname_dotcom %} will send notifications to you as multipart emails that contain both HTML and plain text copies of the content. Email notification content includes any Markdown, @mentions, emojis, hash-links, and more, that appear in the original content on {% data variables.product.prodname_dotcom %}. If you only want to see the text in the email, you can configure your email client to display the plain text copy only.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

If you're using Gmail, you can click a button beside the notification email to visit the original issue or pull request that generated the notification.

{% endif %}

Choose a default email address where you want to send updates for conversations you're participating in or watching. You can also specify which activity on {% data variables.product.prodname_dotcom %} you want to receive updates for using your default email address. For example, choose whether you want updates to your default email from:
- Comments on issues and pull requests.
- Pull request reviews.
- Pull request pushes.
- Your own updates, such as when you open, comment on, or close an issue or pull request.

Depending on the organization that owns the repository, you can also send notifications to different email addresses. Your organization may require the email address to be verified for a specific domain. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)."

You can also send notifications for a specific repository to an email address. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository)."

{% data reusables.notifications-v2.email-notification-caveats %}

## Filtering email notifications

Each email notification that {% data variables.product.prodname_dotcom %} sends contains header information. The header information in every email is consistent, so you can use it in your email client to filter or forward all {% data variables.product.prodname_dotcom %} notifications, or certain types of {% data variables.product.prodname_dotcom %} notifications.

If you believe you're receiving notifications that don't belong to you, examine the `X-GitHub-Recipient` and `X-GitHub-Recipient-Address` headers. These headers show who the intended recipient is. Depending on your email setup, you may receive notifications intended for another user.

Email notifications from {% data variables.product.prodname_dotcom %} contain header information.

| Header | Information |
| --- | --- |
| `From` address | This address will always be {% ifversion fpt or ghec %}'`notifications@github.com`'{% else %}'the no-reply email address configured by your site administrator'{% endif %}. |
| `To` field | This field connects directly to the thread. If you reply to the email, you'll add a new comment to the conversation. |
| `Cc` address | {% data variables.product.product_name %} will `Cc` you if you're subscribed to a conversation. The second `Cc` email address matches the notification reason. The suffix for these notification reasons is {% ifversion fpt or ghec %}`@noreply.github.com`{% else %}based on the no-reply email address configured by your site administrator{% endif %}. The possible notification reasons are: <ul><li>`assign`: You were assigned to an issue or pull request.</li><li>`author`: You created an issue or pull request.</li><li>`ci_activity`: A {% data variables.product.prodname_actions %} workflow run that you triggered was completed.</li><li>`comment`: You commented on an issue or pull request.</li><li>`manual`: There was an update to an issue or pull request you manually subscribed to.</li><li>`mention`: You were mentioned on an issue or pull request.</li><li>`push`: Someone committed to a pull request you're subscribed to.</li><li>`review_requested`: You or a team you're a member of was requested to review a pull request.</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} detected a vulnerability in a repository you receive alerts for.</li><li>`state_change`: An issue or pull request you're subscribed to was either closed or opened.</li><li>`subscribed`: There was an update in a repository you're watching.</li><li>`team_mention`: A team you belong to was mentioned on an issue or pull request.</li><li>`your_activity`: You opened, commented on, or closed an issue or pull request.</li></ul> |
| `List-Id` field | This field identifies the name of the repository and its owner. The format of this address is always `OWNER/REPOSITORY <REPOSITORY.OWNER>`, e.g. `List-Id: grain-lang/grain <grain.grain-lang.{% data variables.product.product_url %}>`. |
| `X-GitHub-Severity` field | {% data reusables.repositories.security-alerts-x-github-severity %} The possible severity levels are:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)." |

## Choosing your notification settings

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
1. On the notifications settings page, choose how you receive notifications when:
    - There are updates in repositories {% ifversion team-discussions %}or team discussions{% endif %} you're watching or in a conversation you're participating in. For more information, see "[About participating and watching notifications](#about-participating-and-watching-notifications)."
    - You gain access to a new repository or you've joined a new team. For more information, see "[Automatic watching](#automatic-watching)."
    - There are new {% data variables.product.prodname_dependabot_alerts %} in your repository. For more information, see "[{% data variables.product.prodname_dependabot_alerts %} notification options](#dependabot-alerts-notification-options)."  {% ifversion fpt or ghec %}
    - There are workflow runs updates on repositories set up with {% data variables.product.prodname_actions %}. For more information, see "[{% data variables.product.prodname_actions %} notification options](#github-actions-notification-options)."{% endif %}
    - There are new deploy keys added to repositories that belong to organizations that you're an owner of. For more information, see "[Organization alerts notification options](#organization-alerts-notification-options)."

## Automatic watching

By default, anytime you gain access to a new repository, you will automatically begin watching that repository. Anytime you join a new team, you will automatically be subscribed to updates and receive notifications when that team is @mentioned. If you don't want to automatically be subscribed, you can unselect the automatic watching options in your notification settings.

{% ifversion update-notification-settings-22 %}
![Screenshot of the toggles for "Automatically watch repositories" and "Automatically watch teams".](/assets/images/help/notifications-v2/automatically-watch-repos-and-teams.png)
{% else %}
![Screenshot of "Automatic watching" options for teams and repositories.](/assets/images/help/notifications-v2/automatic-watching-options.png){% endif %}

If "Automatically watch repositories" is disabled, then you will not automatically watch your own repositories. You must navigate to your repository page and choose the watch option.

For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings)."

## Configuring your watch settings for an individual repository

You can choose whether to watch or unwatch an individual repository. You can also choose to only be notified of certain event types such as {% data reusables.notifications-v2.custom-notification-types %} (if enabled for the repository) , or completely ignore an individual repository.

{% data reusables.repositories.navigate-to-repo %}
1. In the upper-right corner, select the "Watch" drop-down menu, then click a watch option.

   If you want to further customize notifications, click **Custom**, then select specific events that you want to be notified of, such as Issues or Pull Requests, in addition to participating and @mentions.

   For example, if you select "Issues", you will be notified about, and subscribed to, updates on every issue (including those that existed prior to you selecting this option) in the repository. If you're @mentioned in a pull request in this repository, you'll receive notifications for that too, and you'll be subscribed to updates on that specific pull request, in addition to being notified about issues.

## Choosing where your organization’s email notifications are sent

If you belong to an organization, you can choose the email account you want notifications for organization activity sent to. For example, if you belong to an organization for work, you may want your notifications sent to your work email address, rather than your personal address.

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
1. Under "Default notifications email", select the email address you'd like notifications sent to.
{% ifversion ghes %}
1. Click **Save**.{% endif %}

### Customizing email routes per organization

If you are a member of more than one organization, you can configure each one to send notifications to any of{% ifversion fpt or ghec %} your verified email addresses{% else %} the email addresses for your account{% endif %}. {% ifversion fpt or ghec %} For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)."{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
{% ifversion update-notification-settings-22 %}
1. Under "Default notifications email", click **Custom routing**.

   ![Screenshot of the "Default notifications email" section. A button, titled "Custom routing", is highlighted with an orange outline.](/assets/images/help/notifications/custom-router-emphasized.png)

1. Click **Add new route**.

1. Select the **Pick organization** dropdown, then click the organization you want to customize.
1. Select one of your verified email addresses, then click **Save**.

   ![Screenshot of the "Custom Routing" page. A dropdown menu, showing a user's available email addresses, is highlighted with an orange outline.](/assets/images/help/notifications/select-email-address-custom-routing-and-save.png)
{% else %}
1. Under "Custom routing," find your organization's name in the list.

1. Click **Edit** next to the email address you want to change.

1. Select one of your verified email addresses, then click **Save**.

{% endif %}

## {% data variables.product.prodname_dependabot_alerts %} notification options

The notification options for your user account are available at [https://github.com/settings/notifications](https://github.com/settings/notifications). You can configure notification settings for each repository, in the repository watch settings.

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}

For more information about the notification delivery methods available to you, and advice on optimizing your notifications for {% data variables.product.prodname_dependabot_alerts %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

## {% data variables.product.prodname_secret_scanning_caps %} notification options

{% data reusables.secret-scanning.secret-scanning-configure-notifications %}

For more information on how to configure notifications for {% data variables.secret-scanning.alerts %}, see "[Configuring notifications for secret scanning alerts](/code-security/secret-scanning/managing-alerts-from-secret-scanning#configuring-notifications-for-secret-scanning-alerts)."

{% ifversion update-notification-settings-22 or ghes %}

## {% data variables.product.prodname_actions %} notification options

For repositories that are set up with {% data variables.product.prodname_actions %} and that you are watching, you can choose how you want to receive workflow run updates.

{% ifversion update-notification-settings-22 %}
1. On the "Notification settings" page, under "System", then under "Actions", select the **Don't notify** dropdown menu.

   ![Screenshot of the "System" section of the notification settings. Under "Actions," a dropdown menu, titled "Don't notify", is highlighted with an orange outline.](/assets/images/help/notifications/github-actions-customize-notifications.png)
1. To opt into web notifications, from the dropdown menu, select "On {% data variables.product.prodname_dotcom %}".

   To opt into email notifications, from the dropdown menu, select "Email".
1. Optionally, to only receive notifications for failed workflow runs, from the dropdown menu, select "Only notify for failed workflows", then click **Save**.{% endif %}

{% ifversion ghes %}
On the "Notification settings" page, select "Email" or "Web" notifications. Optionally, to only receive notifications for failed workflow runs, select "Send notifications for failed workflows only".

![Screenshot of the "Actions" section on the "Notification settings" page. Three checkboxes, titled "Email", "Web", and "Send notifications for failed workflows only", are shown.](/assets/images/help/notifications-v2/github-actions-notification-options.png){% endif %}

{% endif %}

## Organization alerts notification options

If you're an organization owner, you'll receive email notifications by default when organization members add new deploy keys to repositories within the organization. You can unsubscribe from these notifications. On the notification settings page, under "Organization alerts", deselect **Email**.

## Managing your notification settings with {% data variables.product.prodname_mobile %}

When you install {% data variables.product.prodname_mobile %}, you will automatically be opted into web notifications. Within the app, you can enable push notifications for the following events.
- Direct mentions
- Assignments to issues or pull requests
- Requests to review a pull request
- Requests to approve a deployment

You can also schedule when {% data variables.product.prodname_mobile %} will send push notifications to your mobile device.

{% data reusables.mobile.push-notifications-on-ghes %}

### Managing your notification settings with {% data variables.product.prodname_ios %}

1. In the bottom menu, tap **Profile**.
1. To view your settings, tap {% octicon "gear" aria-label="The Gear icon" %}.
1. To update your notification settings, tap **Notifications** and then use the toggles to enable or disable your preferred types of push notifications.
1. Optionally, to schedule when {% data variables.product.prodname_mobile %} will send push notifications to your mobile device, tap **Working Hours**, use the **Custom working hours** toggle, and then choose when you would like to receive push notifications.

### Managing your notification settings with {% data variables.product.prodname_android %}

1. In the bottom menu, tap **Profile**.
1. To view your settings, tap {% octicon "gear" aria-label="The Gear icon" %}.
1. To update your notification settings, tap **Configure Notifications** and then use the toggles to enable or disable your preferred types of push notifications.
1. Optionally, to schedule when {% data variables.product.prodname_mobile %} will send push notifications to your mobile device, tap **Working Hours**, use the **Custom working hours** toggle, and then choose when you would like to receive push notifications.

## Configuring your watch settings for an individual repository with {% data variables.product.prodname_mobile %}

You can choose whether to watch or unwatch an individual repository. You can also choose to only be notified of {% ifversion fpt or ghec %}certain event types such as issues, pull requests, discussions (if enabled for the repository) and {% endif %}new releases, or completely ignore an individual repository.

1. On {% data variables.product.prodname_mobile %}, navigate to the main page of the repository.
1. Tap **Watch**.
1. To choose what activities you receive notifications for, tap your preferred watch settings. For example, choose to only be notified when you are participating or @mentioned, or use the "Custom" option to select specific events that you want to be notified of.
