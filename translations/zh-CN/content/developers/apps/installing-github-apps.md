---
title: 安装 GitHub 应用程序
intro: '当您的应用程序为公共时，任何人都可以通过 {% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_marketplace %} 或{% endif %}安装 URL 将您的应用程序安装在他们的仓库中。 当您的应用程序为私有时，您只能将该应用程序安装在您自己的仓库中。'
redirect_from:
  - /apps/installing-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**注：**您的 {% data variables.product.prodname_github_app %} 将有权访问应用程序创建的任何仓库，即使用户只在选定的仓库中安装您的应用程序。

{% endnote %}

### 在您的仓库中安装您的私有 GitHub 应用程序

创建私有 GitHub 应用程序后，您可以将其安装在您的某个组织或用户仓库中。 更多信息请参阅“[私有安装流程](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)”。

1. 从 [GitHub 应用程序设置页面](https://github.com/settings/apps)，选择您的应用程序。
2. 在左边栏中，单击 **Install App（安装应用程序）**。
3. 单击包含适当仓库的组织或用户帐户旁边的 **Install（安装）**。
4. 将应用程序安装在所有仓库或所选仓库中。 ![App installation permissions](/assets/images/install_permissions.png)
5. 安装后，您将在所选帐户上看到应用程序的配置选项。 您可以在这里进行更改，或重复前面的步骤将应用程序安装到其他帐户上。

{% if currentVersion == "free-pro-team@latest" %}
### 在 GitHub Marketplace 中提供您的应用程序

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
