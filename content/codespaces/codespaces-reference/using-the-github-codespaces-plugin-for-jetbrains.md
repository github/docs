---
title: Using the GitHub Codespaces plugin for JetBrains
shortTitle: Plugin for JetBrains
intro: 'You can use the {% data variables.product.prodname_github_codespaces %} plugin for the JetBrains client application to find out about your codespace or to stop your codespace when you''ve finished working.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
---

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## About the {% data variables.product.prodname_github_codespaces %} plugin

The JetBrains client application is launched when you connect to a codespace from the JetBrains Gateway application. It allows you to use {% data variables.product.prodname_github_codespaces %} with you favorite JetBrains IDE. For more information, see "[Using {% data variables.product.prodname_github_codespaces %} in your JetBrains IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)."

The {% data variables.product.prodname_github_codespaces %} plugin is already installed in the JetBrains client when you connect to a codespace from the JetBrains Gateway. The plugin adds the {% data variables.product.prodname_github_codespaces %} tool window to the user interface.

Click **{% data variables.product.prodname_github_codespaces %}** at the bottom left of the JetBrains client's application window to open the {% data variables.product.prodname_github_codespaces %} tool window.

![Screenshot of the {% data variables.product.prodname_github_codespaces %} tool window](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## Using the {% data variables.product.prodname_github_codespaces %} tool window

The {% data variables.product.prodname_github_codespaces %} tool window shows:
* The repository from which you created this codespace.
* The display name of the codespace.
* The current branch.
* The machine specifications.
* The time for which this codespace can remain idle before it is automatically stopped.
* The age of the codespace.
* The period for which a stopped codespace will be retained before it is automatically deleted.

The icons at the top of the {% data variables.product.prodname_github_codespaces %} tool window provide the following functions.

* **Refresh active codespace**

  ![Screenshot of the refresh button](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh-BAK.png)

  Refresh the details in the {% data variables.product.prodname_github_codespaces %} tool window. For example, if you used {% data variables.product.prodname_cli %} to change the display name, you could click this button to show the new name.

* **Disconnect and stop**

  ![Screenshot of the stop button](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

  Stop the codespace, stop the backend IDE on the remote machine, and close the local JetBrains client.

* **Manage your codespaces from the web**

  ![Screenshot of the list button](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Open your list of codespaces at https://github.com/codespaces.

* **View the codespace creation log**

  ![Screenshot of the log button](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Open the codespace creation log in the editor window. For more information, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs)."

* **Rebuild the dev container**

  ![Screenshot of the rebuild button](/assets/images/help/codespaces/jetbrains-plugin-icon-rebuild.png)

  Rebuild your codespace to apply changes you've made to the dev container configuration. The JetBrains client will close and you must reopen the codespace. For more information, see "[The codespace lifecycle](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace)."

