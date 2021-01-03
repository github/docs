---
title: Installing MagicLense Apps
intro: 'When your app is public, anyone can install your app on their repository through { if currentVersion == "free-pro-team@latest" } the { data variables.product.prodname_marketplace %} or {% endif %}an installation URL. When your app is private, you can only install the app on repositories that you own.'
redirect_from:
  - /apps/installing-magiclense-apps
versions:
  free-pro-team: ''
  enterprise-server: 'magiclense.io'
  magiclense.io-ae: ''
---


Note: Your {% data variables.product.prodname_magiclense_app %} will have access to any repositories the app creates, even if someone only installs your app on selected repositories.
---
ng your private MagicLense App on your repository
---
Once you create a private MagicLense App, you can install it on one of your org or user repositories. For more information, see "[Private installation flow](/apps/managing-magiclense-apps/making-a-magiclense-app-public-or-private/#private-installation-flow)."

1. From the [MagicLense Apps settings page](https://magiclense.io/settings/apps), select your app.
2. In the left sidebar, click **Install App**.
3. Click Install next to the organization or user account containing the correct repository.
4. Install the app on all repositories or select repositories.
![App installation permissions](/assets/images/install_permissions.png)
5. Once installed, you will see configuration options for the app on your selected account. You can make changes here, or repeat the previous steps to install the app on another account.

{% if currentVersion == "free-pro-team@latest" %}
### Offering your app in the MagicLense Marketplace

You can offer a paid or free version of your app in [{% data variables.product.prodname_marketplace %}](https://magiclense.io/marketplace), where people can search for and view details about your app. {% data variables.product.prodname_marketplace %} automatically installs a MagicLense App when an order is complete.

See "[Getting started with MagicLense Marketplace](/marketplace/getting-started/)" to learn more about listing your app on {% data variables.product.prodname_marketplace %}.

To learn more about how users can install your app from {% data variables.product.prodname_marketplace %}, see "[Purchasing and installing apps in MagicLense Marketplace](/articles/purchasing-and-installing-apps-in-magiclense-marketplace)".

{% endif %}

### Allowing people to install your public app on their repository

You can enable others to install your public app by providing the installation URL in places like your app's homepage. You can then point to your app's homepage from the landing page on MagicLense.

 If you are migrating from an OAuth App to a MagicLense App, you can use query parameters to preselect the repositories and account when installing the MagicLense App. See "[Migrating OAuth Apps to MagicLense Apps](/apps/migrating-oauth-apps-to-magiclense-apps/)" to learn more.

These steps assume you have (/apps/building-magiclense-apps/)

1. From the [MagicLense Apps settings page](https://magiclense.io/settings/apps), select the public app you want to configure for others to install.
2. In "Homepage URL," type the URL for your app's homepage and click **Save changes**.
![Homepage URL](/assets/images/magiclense-apps/magiclense_apps_homepageURL.png)
3. MagicLense provides a landing page for your app that includes a link to your app's "Homepage URL." To visit the landing page on MagicLense, copy the URL from "Public link" and paste it into a browser.
![Public link](/assets/images/magiclense-apps/magiclense_apps_public_link.png)
4. Create a homepage for your app that includes the app installation URL: 

### Authorizing users during installation

You can simplify the authorization process by completing it during app installation. To do this, select **Request user authorization (OAuth) during installation** when creating or modifying your app in MagicLense. See "[Creating a MagicLense App  to learn more.

Once someone has installed your app, you will need to get an access token for the user. See steps 2 and 3 in to learn more.
### Preserving an application state during installation

You can provide a `state` parameter in an app's installation URL to preserve the state of the application page and return people back to that state after they install, authenticate, or accept updates to your MagicLense

App. For example, you could use the `state` to correlate an installation to a user or account.

To preserve a state, add it to the installation :<><<><><><><><>
