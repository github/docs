---
title: Choosing the delivery method for your notifications
intro: 'You can receive your notifications on {% data variables.product.product_location %} or have them delivered through your email client.'
versions:
  enterprise-server: <2.21
---

For personal accounts, notification emails are automatically sent to your default notification email.

{% data reusables.notifications.outbound_email_tip %}

### Choosing the delivery method for notifications about repository activity

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. Configure how you would like to receive notifications you either participate in or watch by selecting the checkboxes:
    - Selecting **Email** sends an email to your default notification email.
    - Selecting **Web** allows you to access the notifications on {% data variables.product.product_location %}. ![Configuring notification settings](/assets/images/help/settings/ent-notifications-settings.png)
4. If you selected **Email** for conversations you're either participating in or watching, choose which updates you receive by selecting the checkboxes in the "Notification email" section:
    - Select **Comments on Issues and Pull Requests** to receive an email when someone makes a comment in an issue or in the "Conversation" tab of a pull request.
    - Select **Pull request reviews** to receive an email when someone makes a review comment in the "Files changed" tab of a pull request.
    - Select **Pull request pushes** to receive an email when someone adds commits to a pull request that you're subscribed to.
    - Select **Include your own updates** to receive an email when you open, comment on, or close an issue or pull request. ![Configuring email notification options](/assets/images/help/settings/email_notification_settings.png)

### Choosing the delivery method for security alerts for vulnerable dependencies

{% data reusables.repositories.security-alert-delivery-options %}

{% data reusables.repositories.enable-security-alerts %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
3. Under "Security alerts", configure how you would like to receive notifications when {% data variables.product.product_name %} detects a vulnerable dependency in your repository: ![Options to configure notifications for security alerts](/assets/images/help/settings/vulnerability-alerts-options.png)
    - Selecting **UI alerts** displays a banner in the {% data variables.product.product_name %} interface.
    - Selecting **Command Line** displays warnings as a callback when you push to a repository with vulnerabilities.
    - Selecting **Web** allows you to access the notifications on {% data variables.product.product_location %}.
    - Selecting **Email each time a vulnerability is found** sends an email to your default notification email.
    - Selecting **Email a digest summary of vulnerabilities** sends a digest email with a summary of up to 10 repositories' security alerts. Use the drop-down menu to choose to receive digest emails daily or weekly.

### 더 읽을거리

- "[About notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[About email notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[About web notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- "[Watching and unwatching repositories](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[Managing email preferences](/articles/managing-email-preferences)"
