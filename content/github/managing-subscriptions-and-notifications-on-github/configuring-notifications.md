---
title: Configuring notifications
intro: 'Choose the type of activity on {% data variables.product.product_name %} that you want to receive notifications for and how you want these updates delivered.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails/
  - /articles/configuring-notification-emails/
  - /articles/about-notification-emails/
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods/
  - /articles/managing-notification-delivery-methods/
  - /articles/managing-notification-emails-for-organizations/
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive/
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### Notification delivery options

You have three basic options for notification delivery:
  - the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}
  - the notifications inbox on {% data variables.product.prodname_mobile %}, which syncs with the inbox on {% data variables.product.product_name %}{% endif %}
  - an email client that uses a verified email address, which can also sync with the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} For more information, see "[Choosing your notification settings](#choosing-your-notification-settings)."
{% endif %}

{% data reusables.notifications-v2.tip-for-syncing-email-and-your-inbox-on-github %}

#### Benefits of the notifications inbox

The notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %} includes triaging options designed specifically for your {% data variables.product.product_name %} notifications flow, including options to:
  - Triage multiple notifications at once.
  - Mark completed notifications as **Done** and remove them from your inbox. To view all of your notifications marked as **Done**, use the `is:done` query.
  - Save a notification to review later. Saved notifications are flagged in your inbox and kept indefinitely. To view all of your saved notifications, use the `is:saved` query.
  - Unsubscribe and remove a notification from your inbox.
  - Preview the issue, pull request, or team discussion where the notification originates on {% data variables.product.product_name %} from within the notifications inbox.
  - See one of the latest reasons you're receiving a notification from your inbox with a `reasons` label.
  - Create custom filters to focus on different notifications when you want.
  - Group notifications in your inbox by repository or date to get a quick overview with less context switching

{% if currentVersion == "free-pro-team@latest" %}
In addition, the notifications inbox on {% data variables.product.prodname_mobile %} allows you to triage notifications in dark mode and receive push notifications for direct mentions. For more information, see "[Enabling push notifications with GitHub for mobile](#enabling-push-notifications-with-github-for-mobile)" or "[GitHub for mobile](/github/getting-started-with-github/github-for-mobile)."
{% endif %}

#### Benefits of using an email client for notifications

One benefit of using an email client is that all of your notifications can be kept indefinitely depending on your email client's storage capacity. Your inbox notifications are only kept for 5 months unless you've marked them as **Saved**. **Saved** notifications are kept indefinitely. For more information about your inbox's retention policy, see "[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)."

Sending notifications to your email client also allows you to customize your inbox according to your email client's settings, which can include custom or color-coded labels.

Email notifications also allow flexibility with the types of notifications you receive and allow you to choose different email addresses for updates. For example, you can send certain notifications for a repository to a  verified personal email address. For more information, about your email customization options, see "[Customizing your email notifications](#customizing-your-email-notifications)."

### About participating and watching notifications

When you watch a repository, you're subscribing to updates for activity in that repository. Similarly, when you watch a specific team's discussions, you're subscribing to all conversation updates on that team's page. To see repositories that you're watching, see [https://github.com/watching](https://github.com/watching). For more information, see "[Managing subscriptions and notifications on GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."

Anytime you comment in a conversation or when someone @mentions your username, you are _participating_ in a conversation. By default, you are automatically subscribed to a conversation when you participate in it. You can unsubscribe from a conversation you've participated in manually by clicking **Unsubscribe** on the issue or pull request or through the **Unsubscribe** option in the notifications inbox.

For conversations you're watching or participating in, you can choose whether you want to receive notifications by email or through the notifications inbox on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} and {% data variables.product.prodname_mobile %}{% endif %}.

![Participating and watching notifications options](/assets/images/help/notifications-v2/participating-and-watching-options.png)

For example:
  - If you don't want notifications to be sent to your email, unselect **email** for participating and watching notifications.
  - If you want to receive notifications by email when you've participated in a conversation, then you can select **email** under "Participating".

If you do not enable watching or participating notifications for web{% if currentVersion == "free-pro-team@latest" %} and mobile{% endif %}, then your notifications inbox will not have any updates.

### Customizing your email notifications

After enabling email notifications, {% data variables.product.product_name %} will send notifications to you as multipart emails that contain both HTML and plain text copies of the content. Email notification content includes any Markdown, @mentions, emojis, hash-links, and more, that appear in the original content on {% data variables.product.product_name %}. If you only want to see the text in the email, you can configure your email client to display the plain text copy only.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% if currentVersion == "free-pro-team@latest" %}

If you're using Gmail, you can click a button beside the notification email to visit the original issue or pull request that generated the notification.

![Buttons in Gmail](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Choose a default email address where you want to send updates for conversations you're participating in or watching. You can also specify which activity on {% data variables.product.product_name %} you want to receive updates for using your default email address. For example, choose whether you want updates to your default email from:
  - Comments on issues and pull requests.
  - Pull request reviews.
  - Pull request pushes.
  - Your own updates, such as when you open, comment on, or close an issue or pull request.

Depending on the organization that owns the repository, you can also send notifications to different email addresses for specific repositories. For example, you can send notifications for a specific public repository to a verified personal email address. Your organization may require the email address to be verified for a specific domain. For more information, see “[Choosing where your organization’s email notifications are sent](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)."

{% data reusables.notifications-v2.email-notification-caveats %}

### Filtering email notifications

Each email notification that {% data variables.product.product_name %} sends contains header information. The header information in every email is consistent, so you can use it in your email client to filter or forward all {% data variables.product.product_name %} notifications, or certain types of {% data variables.product.product_name %} notifications.

If you believe you're receiving notifications that don't belong to you, examine the `X-GitHub-Recipient` and `X-GitHub-Recipient-Address` headers. These headers show who the intended recipient is. Depending on your email setup, you may receive notifications intended for another user.

Email notifications from {% data variables.product.product_name %} contain the following header information:

| Header | Information |
| --- | --- |
| `From` address | This address will always be {% if currentVersion == "free-pro-team@latest" %}'`notifications@github.com`'{% else %}'the no-reply email address configured by your site administrator'{% endif %}. |
| `To` field | This field connects directly to the thread. If you reply to the email, you'll add a new comment to the conversation. |
| `Cc` address | {% data variables.product.product_name %} will `Cc` you if you're subscribed to a conversation. The second `Cc` email address matches the notification reason. The suffix for these notification reasons is {% data variables.notifications.cc_address %}. The possible notification reasons are: <ul><li>`assign`: You were assigned to an issue or pull request.</li><li>`author`: You created an issue or pull request.</li><li>`comment`: You commented on an issue or pull request.</li><li>`manual`: There was an update to an issue or pull request you manually subscribed to.</li><li>`mention`: You were mentioned on an issue or pull request.</li><li>`push`: Someone committed to a pull request you're subscribed to.</li><li>`review_requested`: You or a team you're a member of was requested to review a pull request.</li><li>`security_alert`: {% data variables.product.prodname_dotcom %} detected a vulnerability in a repository you receive alerts for.</li><li>`state_change`: An issue or pull request you're subscribed to was either closed or opened.</li><li>`subscribed`: There was an update in a repository you're watching.</li><li>`team_mention`: A team you belong to was mentioned on an issue or pull request.</li><li>`your_activity`: You opened, commented on, or closed an issue or pull request.</li></ul> |
| `mailing list` field | This field identifies the name of the repository and its owner. The format of this address is always `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}
| `X-GitHub-Severity` field | {% data reusables.repositories.security-alerts-x-github-severity %} The possible severity levels are:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." |{% endif %}

### Choosing your notification settings

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. On the notifications settings page, choose how you receive notifications when:
    - There are updates in repositories or team discussions you're watching or in a conversation you're participating in. For more information, see "[About participating and watching notifications](#about-participating-and-watching-notifications)."
    - You gain access to a new repository or you've joined a new team. For more information, see "[Automatic watching](#automatic-watching)."{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
    - There are new {% data variables.product.prodname_dependabot_alerts %} in your repository. For more information, see "[{% data variables.product.prodname_dependabot_alerts %} notification options](#github-dependabot-alerts-notification-options)." {% endif %}{% if currentVersion == "enterprise-server@2.21" %}
    - There are new security alerts in your repository. For more information, see "[Security alert notification options](#security-alert-notification-options)." {% endif %} {% if currentVersion == "free-pro-team@latest" %}
    - There are workflow runs updates on repositories set up with {% data variables.product.prodname_actions %}. For more information, see "[{% data variables.product.prodname_actions %} notification options](#github-actions-notification-options)."{% endif %}

### Automatic watching

By default, anytime you gain access to a new repository, you will automatically begin watching that repository. Anytime you join a new team, you will automatically be subscribed to updates and receive notifications when that team is @mentioned. If you don't want to automatically be subscribed, you can unselect the automatic watching options.

  ![Automatic watching options](/assets/images/help/notifications-v2/automatic-watching-options.png)

If "Automatically watch repositories" is disabled, then you will not automatically watch your own repositories. You must navigate to your repository page and choose the watch option.

### Choosing where your organization’s email notifications are sent

If you belong to an organization, you can choose the email account you want notifications for organization activity sent to. For example, if you belong to an organization for work, you may want your notifications sent to your work email address, rather than your personal address.	

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. Under "Default notification email", select the email address you'd like notifications sent to.	
![Default notification email address drop-down](/assets/images/help/notifications/notifications_primary_email_for_orgs.png)	
4. Click **Save**.	

#### Customizing email routes per organization	

If you are a member of more than one organization, you can configure each one to send notifications to any of{% if currentVersion == "free-pro-team@latest" %} your verified email addresses{% else %} the email addressed you've added to your {% data variables.product.product_name %} account{% endif %}. {% if currentVersion == "free-pro-team@latest" %} For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."{% endif %} 

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. Under "Custom routing," find your organization's name in the list.	
![List of organizations and email addresses](/assets/images/help/notifications/notifications_org_emails.png)	
4. Click **Edit** next to the email address you want to change.	
![Editing an organization's email addresses](/assets/images/help/notifications/notifications_edit_org_emails.png)	
5. Select one of your verified email addresses, then click **Save**.	
![Switching your per-org email address](/assets/images/help/notifications/notifications_switching_org_email.gif)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot_alerts %} notification options 
{% else %}
### Security alert notification options 
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}Choose how you want to receive {% data variables.product.prodname_dependabot_alerts %} for repositories that you are watching. You can receive {% data variables.product.prodname_dependabot_alerts %} in your inbox, as a banner on {% data variables.product.product_name %}, on the command line, through email, or some combination of these options.

If you want to receive {% data variables.product.prodname_dependabot_alerts %} by email, choose whether you want a weekly email summary of vulnerabilities for up 10 repositories or a new email each time a vulnerability is detected. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}Choose how you want to receive security alerts for repositories that you are watching. You can receive security alerts in your inbox, as a banner on {% data variables.product.product_name %}, on the command line, through email, or some combination of these options.

If you want to receive security alerts by email, choose whether you want a weekly email summary of vulnerabilities for up 10 repositories or a new email each time a vulnerability is detected. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
  ![{% data variables.product.prodname_dependabot_short %} alerts options](/assets/images/help/notifications-v2/dependabot-alerts-options.png)
{% else %}
  ![Security alerts options](/assets/images/help/notifications-v2/security-alerts-options.png)
{% endif %}

{% note %}

**Note:** You can filter your {% data variables.product.company_short %} inbox notifications by {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %} security{% endif %} alerts. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-queries-for-custom-filters)."

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### {% data variables.product.prodname_actions %} notification options

Choose how you want to receive workflow run updates for repositories that you are watching that are set up with {% data variables.product.prodname_actions %}. You can also choose to only receive notifications for failed workflow runs.

  ![Notification options for {% data variables.product.prodname_actions %}](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Enabling push notifications with {% data variables.product.prodname_mobile %}

When you install {% data variables.product.prodname_mobile %}, you will automatically be opted into web notifications. You can then enable push notifications for direct mentions within the app.

You can only receive notifications for pushes to repositories on {% data variables.product.prodname_mobile %} at this time.

#### Enabling push notifications with {% data variables.product.prodname_ios %}

1. Above "Home", tap your profile photo.
2. To view your settings, tap {% octicon "gear" aria-label="The Gear icon" %}.
  ![Settings icon for GitHub for iOS](/assets/images/help/mobile/ios-settings-icon.png)
3. To update your notification settings, tap **Push notifications**.
4. To turn on push notifications for direct mentions, use the **Direct Mentions** toggle.

#### Enabling push notifications with {% data variables.product.prodname_android %}

1. Above "Home", tap your profile photo.
2. To view your settings, tap {% octicon "gear" aria-label="The Gear icon" %}.
  ![Settings icon for GitHub for Android](/assets/images/help/mobile/android-settings-icon.png)
3. To turn on push notifications for direct mentions, use the **Direct mentions** toggle.
{% endif %}
