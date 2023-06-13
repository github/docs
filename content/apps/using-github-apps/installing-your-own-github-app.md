---
title: Installing your own GitHub App
intro: 'You can install a {% data variables.product.prodname_github_app %} that you created on the personal or organization account that owns the app. If your app is public, the {% data variables.product.prodname_github_app %} can also be installed on other accounts.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
  - /developers/apps/managing-github-apps/installing-github-apps
  - /apps/maintaining-github-apps/installing-github-apps
  - /apps/maintaining-github-apps/installing-your-own-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Install your own app
---

## About installing your own {% data variables.product.prodname_github_app %}

Once you create a {% data variables.product.prodname_github_app %}, you can install it. If your {% data variables.product.prodname_github_app %} is owned by a personal account{% ifversion ghec%} and you are not an {% data variables.product.prodname_emu %}{% endif %}, you can install it on your account. If your {% data variables.product.prodname_github_app %} is owned by an organization and you are an organization owner, you can install it on the organization.

{% ifversion fpt or ghec %}
If your {% data variables.product.prodname_github_app %} is public{% ifversion ghec%} and you are not an {% data variables.product.prodname_emu %}{% endif %}, you can also share your {% data variables.product.prodname_github_app %} with other users or organizations. {% ifversion ghec%}If you are an {% data variables.product.prodname_emu %}, then you can only share your app with other organizations within your enterprise.{% endif %}For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/sharing-your-github-app)."
{% else %}
If your {% data variables.product.prodname_github_app %} is public, you can also share your {% data variables.product.prodname_github_app %} with other users or organizations within your enterprise. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/sharing-your-github-app)."
{% endif %}

## Installing your own {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Next to the {% data variables.product.prodname_github_app %} that you want to install, click **Edit**.
1. Click **Install App**.
1. Click **Install** next to the location where you want to install the {% data variables.product.prodname_github_app %}.
1. If the app requires repository permissions, select **All repositories** or **Only select repositories**. The app will always have at least read-only access to all public repositories on {% data variables.product.company_short %}.

   If the app does not require repository permissions, these options will be omitted.
1. If you selected **Only select repositories** in the previous step, under the **Select repositories** dropdown, select the repositories that you want the app to access.

   If the app creates any repositories, the app will automatically be granted access to those repositories as well.
1. Click **Install**.
