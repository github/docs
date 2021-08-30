---
title: Suspending a GitHub App installation
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
  - /developers/apps/suspending-a-github-app-installation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub Apps
shortTitle: Suspend app installation
---
## Suspending a GitHub App

The integrator who owns and maintains a GitHub app, also called a GitHub App owner, can suspend or unsuspend a GitHub App installation using REST API endpoints with a JWT. For more information, see the [GitHub Apps REST API](/rest/reference/apps).

People who have installed a GitHub App, also called installation owners, can only suspend or unsuspend a GitHub App through their app's installation settings. Installation owners cannot use the API to suspend or unsuspend their app installation.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Select the {% data variables.product.prodname_github_app %} you want to suspend.
![App selection](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. Next to the suspension settings for the installation, click **Suspend** or **Unsuspend**.
![Suspend a GitHub App](/assets/images/github-apps/suspend-a-github-app.png)
