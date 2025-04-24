---
title: Deleting a GitHub App
shortTitle: Delete your app
intro: 'You can delete {% data variables.product.prodname_github_apps %} that you own if you no longer want to use or maintain the app.'
redirect_from:
  - /apps/building-integrations/managing-github-apps/deleting-a-github-app
  - /apps/managing-github-apps/deleting-a-github-app
  - /developers/apps/deleting-a-github-app
  - /developers/apps/managing-github-apps/deleting-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

> [!NOTE]
> If you want to remove a {% data variables.product.prodname_github_app %} that you use but do not own, see [AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#blocking-access) instead.

## About deleting {% data variables.product.prodname_github_apps %}

If you own a {% data variables.product.prodname_github_app %} or are an app manager for a {% data variables.product.prodname_github_app %}, you can delete the {% data variables.product.prodname_github_app %} registration. For more information about {% data variables.product.prodname_github_app %} managers, see [AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers).

When you delete a {% data variables.product.prodname_github_app %} registration, the app will be uninstalled from all accounts that the app is installed on.

{% ifversion ghec or fpt %}

> [!NOTE]
> If your {% data variables.product.prodname_github_app %} is published on {% data variables.product.prodname_marketplace %}, you must remove your app from {% data variables.product.prodname_marketplace %} before you can delete your app. For more information, see [AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace/deleting-your-github-app-listing-from-github-marketplace).

{% endif %}

## Deleting a {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.apps.enterprise-apps-steps %}
1. Select the {% data variables.product.prodname_github_app %} you want to delete.
{% data reusables.user-settings.github_apps_advanced %}
1. Click **Delete {% data variables.product.prodname_github_app %}**.
1. In the confirmation box, type the name of the {% data variables.product.prodname_github_app %} to confirm you want to delete it.
1. Click **I understand the consequences, delete this {% data variables.product.prodname_github_app %}**.

These steps only delete your {% data variables.product.prodname_github_app %} registration, and all of the organization and account installations it may have. They do not delete any code that you wrote for your app. However, any code that relies on your {% data variables.product.prodname_github_app %}'s credentials will no longer function.
