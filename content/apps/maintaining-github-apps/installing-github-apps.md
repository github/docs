---
title: Installing GitHub Apps
intro: 'When your app is public, anyone can use {% ifversion fpt or ghec %} the {% data variables.product.prodname_marketplace %} or {% endif %}an installation URL to install the app on their repository. When your app is private, only you can install the app on repositories that you own.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
  - /developers/apps/managing-github-apps/installing-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---
{% note %}

**Note:** Your {% data variables.product.prodname_github_app %} will have access to any repositories the app creates, even if someone only installs your app on selected repositories.

{% endnote %}

## Installing your private GitHub App on your repository

Once you create a private GitHub App, you can install it on one of your org or user repositories. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/making-a-github-app-public-or-private#private-installation-flow)."

1. From the [GitHub Apps settings page](https://github.com/settings/apps), select your app.
1. In the left sidebar, click **Install App**.
1. Click **Install** next to the organization or personal account containing the correct repository.
1. Select **All repositories** or **Only select repositories**.
1. If you chose "Only select repositories," select the **Select repositories** dropdown menu and click the repositories where you want to install the app.
1. Click **Install**. Once installed, you will see configuration options for the app on your selected account. You can make changes here, or repeat the previous steps to install the app on another account.

{% ifversion fpt or ghec %}
## Offering your app in the GitHub Marketplace

You can offer a paid or free version of your app in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace), where people can search for and view details about your app. {% data variables.product.prodname_marketplace %} automatically installs a GitHub App when an order is complete.

See "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace)" to learn more about listing your app on {% data variables.product.prodname_marketplace %}.

To learn more about how users can install your app from {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/using-github-apps)".

{% endif %}

## Allowing people to install your public app on their repository

You can enable others to install your public app by providing the installation URL in places like your app's homepage. You can then point to your app's homepage from the landing page on GitHub.

 If you are migrating from an OAuth App to a GitHub App, you can use query parameters to preselect the repositories and account when installing the GitHub App. See "[AUTOTITLE](/apps/creating-github-apps/guides/migrating-oauth-apps-to-github-apps)" to learn more.

These steps assume you have [built a {% data variables.product.prodname_github_app %}](/apps/creating-github-apps/creating-github-apps):

1. From the [GitHub Apps settings page](https://github.com/settings/apps), select the public app you want to configure for others to install.
2. In the "General" tab, under "Homepage URL," type the URL for your app's homepage and click **Save changes**.
3. GitHub provides a landing page for your app that includes a link to your app's "Homepage URL." To visit the landing page on GitHub, copy the URL from "Public link" and paste it into a browser.
4. Create a homepage for your app that includes the app installation URL: `{% data variables.product.oauth_host_code %}/{% ifversion ghes or ghae %}github-apps{% else %}apps{% endif %}/<app name>/installations/new`.

## Authorizing users during installation

You can simplify the authorization process by completing it during app installation. To do this, select **Request user authorization (OAuth) during installation** when creating or modifying your app in GitHub. See "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)" to learn more.

Once someone has installed your app, you will need to get an access token for the user. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."
## Preserving an application state during installation

You can provide a `state` parameter in an app's installation URL to preserve the state of the application page and return people back to that state after they install, authenticate, or accept updates to your GitHub App. For example, you could use the `state` to correlate an installation to a user or account.

To preserve a state, add it to the installation URL:

`{% data variables.product.oauth_host_code %}/{% ifversion ghes or ghae %}github-apps{% else %}apps{% endif %}/<app name>/installations/new?state=AB12t`
