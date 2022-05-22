---
title: Installing GitHub Apps
intro: 'When your app is public, anyone can use {% if currentVersion == "free-pro-team@latest" %} the {% data variables.product.prodname_marketplace %} or {% endif %}an installation URL to install the app on their repository. When your app is private, only you can install the app on repositories that you own.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---
{% note %}

**Note:** Your {% data variables.product.prodname_github_app %} will have access to any repositories the app creates, even if someone only installs your app on selected repositories.

{% endnote %}

### Installing your private GitHub App on your repository

Once you create a private GitHub App, you can install it on one of your org or user repositories. For more information, see "[Private installation flow](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)."

1. From the [GitHub Apps settings page](https://github.com/settings/apps), select your app.
2. In the left sidebar, click **Install App**.
3. Click **Install** next to the organization or user account containing the correct repository.
4. Install the app on all repositories or select repositories. ![App installation permissions](/assets/images/install_permissions.png)
5. Once installed, you will see configuration options for the app on your selected account. You can make changes here, or repeat the previous steps to install the app on another account.

{% if currentVersion == "free-pro-team@latest" %}
### Offering your app in the GitHub Marketplace

You can offer a paid or free version of your app in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace), where people can search for and view details about your app. {% data variables.product.prodname_marketplace %} automatically installs a GitHub App when an order is complete.

See "[Getting started with GitHub Marketplace](/marketplace/getting-started/)" to learn more about listing your app on {% data variables.product.prodname_marketplace %}.

To learn more about how users can install your app from {% data variables.product.prodname_marketplace %}, see "[Purchasing and installing apps in GitHub Marketplace](/articles/purchasing-and-installing-apps-in-github-marketplace)".

{% endif %}

### Allowing people to install your public app on their repository

You can enable others to install your public app by providing the installation URL in places like your app's homepage. You can then point to your app's homepage from the landing page on GitHub.

 If you are migrating from an OAuth App to a GitHub App, you can use query parameters to preselect the repositories and account when installing the GitHub App. See "[Migrating OAuth Apps to GitHub Apps](/apps/migrating-oauth-apps-to-github-apps/)" to learn more.

These steps assume you have [built a {% data variables.product.prodname_github_app %}](/apps/building-github-apps/):

1. From the [GitHub Apps settings page](https://github.com/settings/apps), select the public app you want to configure for others to install.
2. In "Homepage URL," type the URL for your app's homepage and click **Save changes**. ![Homepage URL](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHub provides a landing page for your app that includes a link to your app's "Homepage URL." To visit the landing page on GitHub, copy the URL from "Public link" and paste it into a browser. ![Public link](/assets/images/github-apps/github_apps_public_link.png)
4. Create a homepage for your app that includes the app installation URL: `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`.

### Authorizing users during installation

You can simplify the authorization process by completing it during app installation. To do this, select **Request user authorization (OAuth) during installation** when creating or modifying your app in GitHub. See "[Creating a GitHub App](/apps/building-github-apps/creating-a-github-app/)" to learn more.

Once someone has installed your app, you will need to get an access token for the user. See steps 2 and 3 in "[Identifying users on your site](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)" to learn more.
### Preserving an application state during installation

You can provide a `state` parameter in an app's installation URL to preserve the state of the application page and return people back to that state after they install, authenticate, or accept updates to your GitHub App. For example, you could use the `state` to correlate an installation to a user or account.

To preserve a state, add it to the installation URL:

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
