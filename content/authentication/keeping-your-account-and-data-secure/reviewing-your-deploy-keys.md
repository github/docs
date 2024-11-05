---
title: Reviewing your deploy keys
intro: You should review deploy keys to ensure that there aren't any unauthorized (or possibly compromised) keys. You can also approve existing deploy keys that are valid.
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
---
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Security" section of the sidebar, click **{% octicon "key" aria-hidden="true" %} Deploy keys**.
1. On the "Deploy keys" page, take note of the deploy keys associated with your account. For those that you don't recognize, or that are out of date, click **Delete**. If there are valid deploy keys you'd like to keep, click **Approve**.

For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/managing-deploy-keys)."

## Further reading

* [Configuring notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
