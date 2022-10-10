---
title: Using GitHub Codespaces in Visual Studio Code
intro: 'You can develop in your codespace directly in {% data variables.product.prodname_vscode %} by connecting the {% data variables.product.prodname_github_codespaces %} extension with your account on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Visual Studio Code
---

 
## About {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}

You can use your local install of {% data variables.product.prodname_vscode %} to create, manage, work in, and delete codespaces. {% data reusables.codespaces.using-codespaces-in-vscode %} For more information on setting up {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %}, see "[Prerequisites](#prerequisites)."

By default, if you create a new codespace on {% data variables.product.prodname_dotcom_the_website %}, it will open in the browser. If you would prefer to open any new codespaces in {% data variables.product.prodname_vscode_shortname %} automatically, you can set your default editor to be {% data variables.product.prodname_vscode_shortname %}. For more information, see "[Setting your default editor for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)."

If you prefer to work in the browser, but want to continue using your existing {% data variables.product.prodname_vscode_shortname %} extensions, themes, and shortcuts, you can turn on Settings Sync. For more information, see "[Personalizing {% data variables.product.prodname_github_codespaces %} for your account](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)."

## Prerequisites

To develop in a codespace directly in {% data variables.product.prodname_vscode_shortname %}, you must install and sign into the {% data variables.product.prodname_github_codespaces %} extension with your {% data variables.product.product_name %} credentials. The {% data variables.product.prodname_github_codespaces %} extension requires {% data variables.product.prodname_vscode_shortname %} October 2020 Release 1.51 or later.

Use the {% data variables.product.prodname_vscode_marketplace %} to install the [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) extension. For more information, see [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) in the {% data variables.product.prodname_vscode_shortname %} documentation.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Click **Sign in to view {% data variables.product.prodname_dotcom %}...**.

   ![Signing in to view {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. To authorize {% data variables.product.prodname_vscode_shortname %} to access your account on {% data variables.product.product_name %}, click **Allow**.
3. Sign in to {% data variables.product.product_name %} to approve the extension.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Use the "REMOTE EXPLORER" drop-down, then click **{% data variables.product.prodname_github_codespaces %}**.

   ![The {% data variables.product.prodname_github_codespaces %} header](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Click **Sign in to view {% data variables.product.prodname_codespaces %}...**.

   ![Signing in to view {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. To authorize {% data variables.product.prodname_vscode_shortname %} to access your account on {% data variables.product.product_name %}, click **Allow**.
1. Sign in to {% data variables.product.product_name %} to approve the extension.

{% endwindows %}

## Creating a codespace in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Opening a codespace in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Under "Codespaces", click the codespace you want to develop in.
1. Click the Connect to Codespace icon.

   ![The Connect to Codespace icon in {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Changing the machine type in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} You can change the machine type of your codespace at any time.

{% note %}

**Note**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## Deleting a codespace in {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Switching to the Insiders build of {% data variables.product.prodname_vscode_shortname %}

You can use the [Insiders Build of {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) within {% data variables.product.prodname_github_codespaces %}.

1. In bottom left of your {% data variables.product.prodname_github_codespaces %} window, select **{% octicon "gear" aria-label="The settings icon" %} Settings**.
2. From the list, select "Switch to Insiders Version".

   ![Clicking on "Insiders Build" in {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Once selected, {% data variables.product.prodname_github_codespaces %} will continue to open in Insiders Version.
