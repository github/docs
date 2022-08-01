---
title: Configuring notifications in GitHub Desktop
shortTitle: Configurar notificaciones
intro: '{% data variables.product.prodname_desktop %} will keep you up-to-date with notifications about events that occur in your pull request branch.'
versions:
  fpt: '*'
---

## About notifications in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} will show a system notification for events that occur in the currently selected repository. Notifications will be shown when:

- Pull request checks have failed.
- A pull request review is left with a comment, approval, or requested changes.

Clicking the notification will switch application focus to {% data variables.product.prodname_desktop %} and provide more detailed information.

## Notifications about pull request check failures

When changes are made to a pull request branch, you will receive a notification if the checks fail.

![pull request checks failed notification](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

Clicking the notification will display a dialog with details about the checks. Once you've reviewed why the checks have failed, you can re-run the checks, or quickly switch to the pull request branch to get started on fixing the errors. Para obtener más información, consulta la sección "[Ver y volver a ejecutar las verificaciones en GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)".

![checks failed dialog](/assets/images/help/desktop/checks-failed-dialog.png)
## Notifications for pull request reviews

{% data variables.product.prodname_desktop %} will surface a system notification when a teammate has approved, commented, or requested changes in your pull request. See "[About pull request reviews](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)" for more information on pull request reviews.

![Pull request review notification](/assets/images/help/desktop/pull-request-review-notification.png)

Clicking the notification will switch application focus to {% data variables.product.prodname_desktop %} and provide more context for the pull request review comment.

![pull request review dialog](/assets/images/help/desktop/pull-request-review-dialog.png)
## Enabling notifications

If system notifications are disabled for {% data variables.product.prodname_desktop %} you can follow the steps below to enable them.

{% mac %}

1. Click the **Apple** menu, then select **System Preferences**.
2. Select **Notifications & Focus**.
3. Select **{% data variables.product.prodname_desktop %}** from the list of applications.
4. Click **Allow Notifications**.

![macOS Notifications & Focus](/assets/images/help/desktop/mac-enable-notifications.png)

For more information about macOS system notifications, see "[Use notifications on your Mac](https://support.apple.com/en-us/HT204079)."

{% endmac %}

{% windows %}

1. Open the **Start** menu, then select **Settings**.
2. Select **System**, then click **Notifications**.
3. Find **{% data variables.product.prodname_desktop %}** in the application list and click **On**.

![Enable Windows Notifications](/assets/images/help/desktop/windows-enable-notifications.png)

For more information about Windows system notifications, see "[Change notification settings in Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)."

{% endwindows %}
