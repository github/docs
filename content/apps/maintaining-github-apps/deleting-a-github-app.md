---
title: Deleting a GitHub App
intro: 'You can delete {% data variables.product.prodname_github_app %}s that you own if you no longer want to use or maintain the app.'
redirect_from:
  - /apps/building-integrations/managing-github-apps/deleting-a-github-app
  - /apps/managing-github-apps/deleting-a-github-app
  - /developers/apps/deleting-a-github-app
  - /developers/apps/managing-github-apps/deleting-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About deleting {% data variables.product.prodname_github_app %}s

If you own a {% data variables.product.prodname_github_app %} or are an app manager for a {% data variables.product.prodname_github_app %}, you can delete the {% data variables.product.prodname_github_app %}. For more information about {% data variables.product.prodname_github_app %} managers, see "[AUTOTITLE](/apps/maintaining-github-apps/about-github-app-managers)."

When you delete a {% data variables.product.prodname_github_app %}, the app will be uninstalled from all accounts that the app is installed on.

{% note %}

**Note**: If your {% data variables.product.prodname_github_app %} is published on {% data variables.product.prodname_marketplace %}, you must contact {% data variables.product.company_short %} Support and ask them to remove your app from {% data variables.product.prodname_marketplace %} before you can delete your app.

{% endnote %}

## Deleting a {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Select the GitHub App you want to delete.
{% data reusables.user-settings.github_apps_advanced %}
6. Click **Delete GitHub App**.
7. In the confirmation box, type the name of the GitHub App to confirm you want to delete it.
8. Click **I understand the consequences, delete this GitHub App**.
