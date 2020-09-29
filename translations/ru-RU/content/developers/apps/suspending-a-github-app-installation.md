---
title: Suspending a GitHub App installation
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
versions:
  free-pro-team: '*'
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**Note:** {% data reusables.pre-release-program.suspend-installation-beta %}

{% endnote %}
{% endif %}

### Suspending a GitHub App

To suspend a {% data variables.product.prodname_github_app %}, you must be an account owner or have admin permissions in the repository or organization where the app you want to suspend is installed.

You can also suspend and unsuspend {% data variables.product.prodname_github_app %} installations using the REST API. For more information, see the [GitHub Apps REST API](/v3/apps/).

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Select the {% data variables.product.prodname_github_app %} you want to suspend. ![App selection](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. Next to the suspension settings for the installation, click **Suspend** or **Unsuspend**. ![Suspend a GitHub App](/assets/images/github-apps/suspend-a-github-app.png)
