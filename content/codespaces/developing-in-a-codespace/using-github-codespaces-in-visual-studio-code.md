---
title: Using GitHub Codespaces in Visual Studio Code
shortTitle: Visual Studio Code
intro: You can develop in your codespace directly in {% data variables.product.prodname_vscode %} by connecting the {% data variables.product.prodname_github_codespaces %} extension with your {% data variables.product.github %} account.
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
  - /codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
category:
  - Write code in a codespace
---

## About {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}

You can use your local install of {% data variables.product.prodname_vscode %} to create, manage, work in, and delete codespaces. {% data reusables.codespaces.using-codespaces-in-vscode %} For more information on setting up {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %}, see [Prerequisites](#prerequisites).

By default, if you create a new codespace on {% data variables.product.github %}, it will open in the browser. If you would prefer to open any new codespaces in {% data variables.product.prodname_vscode_shortname %} automatically, you can set your default editor to be {% data variables.product.prodname_vscode_shortname %}. For more information, see [AUTOTITLE](/codespaces/setting-your-user-preferences/setting-your-default-editor-for-github-codespaces).

If you prefer to work in the browser, but want to continue using your existing {% data variables.product.prodname_vscode_shortname %} extensions, themes, and shortcuts, you can turn on Settings Sync. For more information, see [AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#settings-sync).

## Prerequisites

To develop in a codespace directly in {% data variables.product.prodname_vscode_shortname %}, you must install and sign into the {% data variables.product.prodname_github_codespaces %} extension with your {% data variables.product.github %} credentials. The {% data variables.product.prodname_github_codespaces %} extension requires {% data variables.product.prodname_vscode_shortname %} October 2020 Release 1.51 or later.

Use the {% data variables.product.prodname_vscode_marketplace %} to install the [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) extension. For more information, see [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Select "{% data variables.product.prodname_github_codespaces %}" from the dropdown at the top of the "Remote Explorer" side bar, if it is not already selected.
1. Click **Sign in to {% data variables.product.prodname_dotcom %}**.

   ![Screenshot of the "Remote Explorer" side bar for "{% data variables.product.prodname_github_codespaces %}" with the "Sign in to {% data variables.product.prodname_dotcom %}" button displayed.](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. If you are not currently signed in to {% data variables.product.prodname_dotcom %} you'll be prompted to do so. Go ahead and sign in.
1. When you're prompted to specify what you want to authorize, click the **Authorize** button for "{% data variables.product.prodname_dotcom %}."
1. If the authorization page is displayed, click **Authorize Visual-Studio-Code**.

{% ifversion ghec %}

## Connecting to an enterprise on {% data variables.enterprise.data_residency_site %}

If you access {% data variables.product.github %} through a subdomain of {% data variables.enterprise.data_residency_site %}, you must configure the  `Github-enterprise: Uri` and `Github > Codespaces: Auth Provider` settings in {% data variables.product.prodname_vscode_shortname %} before you can connect to your codespaces.

1. To open your {% data variables.product.prodname_vscode_shortname %} settings, press <kbd>Command</kbd>+<kbd>,</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>,</kbd> (Windows).
1. In the search bar, search for `enterprise`.
1. For the `Github-enterprise: Uri` setting, enter the URL where you access {% data variables.product.github %}. For example: `https://{% data variables.enterprise.data_residency_example_domain %}`.

   Alternatively, you can add the following to your `settings.json` file:

   ```json copy
   "github-enterprise.uri": "https://{% data variables.enterprise.data_residency_domain %}"
   ```

1. In the {% data variables.product.prodname_vscode_shortname %} settings, search for `Codespaces Auth Provider`.
1. For the `Github > Codespaces: Auth Provider` setting, select `github-enterprise` from the dropdown.

   Alternatively, you can add the following to your `settings.json` file:

   ```json copy
   "github.codespaces.authProvider": "github-enterprise"
   ```

1. You will be shown a prompt asking you to sign in. Click **Sign in to {% data variables.product.github %}**, then follow the prompts to authorize your account.

   If you **don't see the prompt**, try restarting {% data variables.product.prodname_vscode_shortname %}.

If you ever need to switch back to an account on {% data variables.product.prodname_dotcom_the_website %}, set the `Github > Codespaces: Auth Provider` setting back to its default value and remove the `Github-enterprise: Uri` setting.

{% endif %}

## Creating a codespace in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Opening a codespace in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Under "{% data variables.product.prodname_github_codespaces %}", hover over the codespace you want to develop in.
1. Click the connection icon (a plug symbol).

   ![Screenshot of the "Remote Explorer" side bar. The connection icon for a codespace (a plug symbol) is highlighted with a dark orange outline.](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Changing the machine type in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} You can change the machine type of your codespace at any time.

> [!NOTE]
> {% data reusables.codespaces.codespaces-machine-type-availability %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## Deleting a codespace in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Switching to {% data variables.product.prodname_vscode_shortname %} Insiders in the web client

If you are using the {% data variables.product.prodname_vscode_shortname %} web client, you can switch to the Insiders version of the application. For more information about this version of {% data variables.product.prodname_vscode_shortname %}, see [Introducing the Insiders Build](https://code.visualstudio.com/blogs/2016/02/01/introducing_insiders_build) in the {% data variables.product.prodname_vscode_shortname %} blog.

After you switch versions in a codespace, the web client will continue to use the Insiders version if you stop and restart the codespace. New codespaces that you create and open in the {% data variables.product.prodname_vscode_shortname %} web client will also use the Insiders version.

1. In bottom left of the browser window that's displaying a codespace, click **{% octicon "gear" aria-label="Manage" %}**.
1. In the menu, select "Switch to Insiders Version."

   ![Screenshot of the {% data variables.product.prodname_vscode_shortname %} web client. A gear icon is highlighted with an orange outline. "Switch to Insiders Version" is shown in the menu.](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

1. Click **Reload**.

To switch back to the Stable version of {% data variables.product.prodname_vscode_shortname %}, repeat the process but choose **Switch to Stable Version**. After you switch back, the codespace will continue to use the Stable version if you stop and restart the codespace. New codespaces that you create and open in the {% data variables.product.prodname_vscode_shortname %} web client will also use the Stable version.

## Using the Insiders desktop application for {% data variables.product.prodname_codespaces %}

To use {% data variables.product.prodname_github_codespaces %} in the Insiders version of the {% data variables.product.prodname_vscode_shortname %} desktop application, start or create your codespaces from within the {% data variables.product.prodname_vscode_shortname %} Insiders application. For more information see [Creating a codespace in {% data variables.product.prodname_vscode_shortname %}](#creating-a-codespace-in-vs-code) and [Opening a codespace in {% data variables.product.prodname_vscode_shortname %}](#opening-a-codespace-in-vs-code) earlier in this article.

## Further reading

* [AUTOTITLE](/codespaces/reference/using-the-vs-code-command-palette-in-codespaces)
* [AUTOTITLE](/codespaces/reference/using-github-copilot-in-github-codespaces)
