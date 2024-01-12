---
title: About email notifications for pushes to your repository
intro: You can choose to automatically send email notifications to a specific email address when anyone pushes to the repository.
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository
  - /articles/receiving-email-notifications-for-pushes-to-a-repository
  - /articles/about-email-notifications-for-pushes-to-your-repository
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
---
{% data reusables.notifications.outbound_email_tip %}

Each email notification for a push to a repository lists the new commits and links to a diff containing just those commits. In the email notification you'll see:

- The name of the repository where the commit was made
- The branch a commit was made in
- The SHA1 of the commit, including a link to the diff in {% data variables.product.product_name %}
- The author of the commit
- The date when the commit was made
- The files that were changed as part of the commit
- The commit message

You can filter email notifications you receive for pushes to a repository. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#filtering-email-notifications)."

## Enabling email notifications for pushes to your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.sidebar-notifications %}
1. In the "Address" field, type up to two email addresses, separated by whitespace, where you'd like notifications to be sent. If you'd like to send emails to more than two accounts, set one of the email addresses to a group email address.
1. If you operate your own server, you can verify the integrity of emails via the "Approved header." The "Approved header" is a token or secret that you type in this field, and that is sent with the email. If the `Approved` header of an email matches the token, you can trust that the email is from {% data variables.product.product_name %}.
1. Click **Setup notifications**.

## Further reading

- "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)"
