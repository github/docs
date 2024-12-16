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
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Install your own app
---

## About installing your own {% data variables.product.prodname_github_app %}

After creating a {% data variables.product.prodname_github_app %}, you can install it based on its visibility.

* **Only on this account:** The {% data variables.product.prodname_github_app %} can only be installed on the organization or user account that created it.{% ifversion ghec %} If you are an {% data variables.product.prodname_emu %}, this option is not available for apps you create.{% ifversion enterprise-apps-public-beta %} This visibility is not available for apps registered by an enterprise.{% endif %}{% endif %}
* **Any account:** You can install this {% data variables.product.prodname_github_app %} on your user account or any organization account where you are an organization owner.{% ifversion enterprise-apps-public-beta %} This visibility is not available for apps registered by an enterprise.
* **Only enterprise organizations:** If the {% data variables.product.prodname_github_app %} is owned by an enterprise, you can only install the app on organizations within the enterprise. Organizations where you are an organization owner will appear in the installation options.{% endif %}{% ifversion ghec %}

If you are an {% data variables.product.prodname_emu %}, you cannot install a {% data variables.product.prodname_github_app %} on your user account.{% endif %}

## Installing your own {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step-personal-orgs %}
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
