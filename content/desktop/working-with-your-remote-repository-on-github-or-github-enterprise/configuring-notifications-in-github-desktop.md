---
title: Configuring notifications in GitHub Desktop
shortTitle: Configuring notifications
intro: '{% data variables.product.prodname_desktop %} will keep you up-to-date with notifications about events that occur in your pull request branch.'
versions:
  feature: desktop
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop
---
## About notifications in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} will show a system notification for events that occur in the currently selected repository. Notifications will be shown when:

* Pull request checks have failed.
* A pull request review is left with a comment, approval, or requested changes.

Clicking the notification will switch application focus to {% data variables.product.prodname_desktop %} and provide more detailed information.

## Notifications about pull request check failures

When changes are made to a pull request branch, you will receive a system notification if the checks fail.

Clicking the notification will display a dialog with details about the checks. Once you've reviewed why the checks have failed, you can re-run the checks, or quickly switch to the pull request branch to get started on fixing the errors. For more information, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)."

## Notifications for pull request reviews

{% data variables.product.prodname_desktop %} will surface a system notification when a teammate has approved, commented, or requested changes in your pull request. See "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)" for more information on pull request reviews.

Clicking the notification will switch application focus to {% data variables.product.prodname_desktop %} and provide more context for the pull request review comment.

## Enabling notifications

If system notifications are disabled for {% data variables.product.prodname_desktop %} you can follow the steps below to enable them.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. In the "Preferences" window, on the "Notifications" pane, select **Enable notifications**.
1. In the "Enable notifications" description field, click the **Notification Settings** link to open the "Notifications" pane in the macOS "System Settings" window.
1. In the "Application Notifications" list, select **{% data variables.product.prodname_desktop %}**.
1. Click **Allow Notifications**.

For more information about macOS system notifications, see "[Use notifications on your Mac](https://support.apple.com/en-us/HT204079)."

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. In the "Options" windows, on the "Notifications" pane, select **Enable notifications**.
1. In the "Enable notifications" description field, click the **Notification Settings** link to open the "Notifications" pane in the Windows "Settings" window.
1. Under "Notifications", to enable notifications for Windows, click **On**.
1. Under "Notifications from apps and other senders", find "{% data variables.product.prodname_desktop %}" in the application list and click **On**.

For more information about Windows system notifications, see "[Change notification settings in Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)."

{% endwindows %}
