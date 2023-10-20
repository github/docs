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
redirect_from:
  - /codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains
---

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## About the {% data variables.product.prodname_github_codespaces %} plugin

The JetBrains client application is launched when you connect to a codespace from the JetBrains Gateway application. It allows you to use {% data variables.product.prodname_github_codespaces %} with your favorite JetBrains IDE. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)."

The {% data variables.product.prodname_github_codespaces %} plugin is already installed in the JetBrains client when you connect to a codespace from the JetBrains Gateway. The plugin adds the {% data variables.product.prodname_github_codespaces %} tool window to the user interface.

Click **{% data variables.product.prodname_github_codespaces %}** at the bottom left of the JetBrains client's application window to open the {% data variables.product.prodname_github_codespaces %} tool window.

![Screenshot of the {% data variables.product.prodname_github_codespaces %} tool window. The "{% data variables.product.prodname_github_codespaces %}" tool window selector is highlighted with an orange outline.](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## Using the {% data variables.product.prodname_github_codespaces %} tool window

The {% data variables.product.prodname_github_codespaces %} tool window shows:
- The repository from which you created this codespace.
- The display name of the codespace.
- The current branch.
- The machine specifications.
- The time for which this codespace can remain idle before it is automatically stopped.
- The age of the codespace.
- The period for which a stopped codespace will be retained before it is automatically deleted.

The icons at the top of the {% data variables.product.prodname_github_codespaces %} tool window provide the following functions.

- **Refresh active codespace**

  ![Screenshot of the {% data variables.product.prodname_github_codespaces %} tool window. A refresh icon, which refreshes the active code space, is highlighted.](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh.png)

  Refresh the details in the {% data variables.product.prodname_github_codespaces %} tool window. For example, if you used {% data variables.product.prodname_cli %} to change the display name, you could click this button to show the new name.

- **Manage your codespaces from the web**

  ![Screenshot of the {% data variables.product.prodname_github_codespaces %} tool window. A world icon, which manages {% data variables.product.prodname_github_codespaces %} from the web, is highlighted.](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Open your list of codespaces at https://github.com/codespaces.

- **View the codespace creation log**

  ![Screenshot of the {% data variables.product.prodname_github_codespaces %} tool window. A document icon, which allows you to view a code space creation log, is highlighted.](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Open the codespace creation log in the editor window. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/github-codespaces-logs)."
