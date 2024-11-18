---
title: Developing in a codespace
intro: 'You can work in a codespace using your browser, {% data variables.product.prodname_vscode %}, a JetBrains IDE, or in a command shell.'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
  - /codespaces/developing-in-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
---

{% jetbrains_beta %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains_beta %}

## About development with {% data variables.product.prodname_github_codespaces %}

You can develop code in a codespace using your choice of tool:

* A command shell, via an SSH connection initiated using {% data variables.product.prodname_cli %}.
* One of the JetBrains IDEs, via the JetBrains Gateway.
* The {% data variables.product.prodname_vscode %} desktop application.
* A browser-based version of {% data variables.product.prodname_vscode %}.

{% webui %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for the web browser version of {% data variables.product.prodname_vscode %}.

## Working in a codespace in the browser

Using {% data variables.product.prodname_codespaces %} in the browser provides you with a fully featured development experience. You can edit code, debug, use Git commands, and run your application.

![Annotated screenshot of the five main components of the user interface: side bar, activity bar, editor, panels, status bar.](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %}
{% data reusables.codespaces.use-chrome %} For more information, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)."
{% data reusables.codespaces.developing-in-vscode %}
{% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for {% data variables.product.prodname_vscode %}.

## Working in a codespace in {% data variables.product.prodname_vscode_shortname %}

{% data variables.product.prodname_github_codespaces %} provides you with the full development experience of {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Annotated screenshot of the five main components of the user interface: side bar, activity bar, editor, panels, status bar.](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

For more information on using {% data variables.product.prodname_vscode_shortname %}, see the [User Interface guide](https://code.visualstudio.com/docs/getstarted/userinterface) in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

For troubleshooting information, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)."
{% data reusables.codespaces.developing-in-vscode %}
{% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% jetbrains_beta %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for JetBrains IDEs.

## Working in a codespace in a JetBrains IDE

To use {% data variables.product.prodname_github_codespaces %} with a JetBrains IDE you must have already installed JetBrains Gateway. For information about installing JetBrains Gateway, see [the JetBrains website](https://www.jetbrains.com/remote-development/gateway/).

You can work in a codespace using your choice of JetBrains IDE. After creating a codespace, you can use the JetBrains Gateway application to open the codespace in your preferred IDE.

You can edit code, debug, and use Git commands while developing in a codespace with your JetBrains IDE. For more information about the various JetBrains IDEs, see the [JetBrains documentation](https://www.jetbrains.com/help/).

### IntelliJ IDEA user interface

Within the {% data variables.product.prodname_github_codespaces %} documentation we use IntelliJ IDEA as a representative JetBrains IDE. Different JetBrains IDEs may have different layouts.

![Annotated screenshot of the six main components of the user interface for JetBrains IntelliJ IDEA.](/assets/images/help/codespaces/jetbrains-gui-with-callouts.png)

The main components of the user interface are:
1. **Navigation bar** - This displays the path to the currently selected file or directory. Use the buttons to the right of the navigation bar to perform various actions, including building, running, or debugging the project, or running Git commands to commit and push your changes.
1. **Project tool window** - This shows you the structure of your project and allows you to open files in the editor.
1. **{% data variables.product.prodname_github_codespaces %} tool window** - This is displayed by clicking the {% data variables.product.prodname_github_codespaces %} plugin in the bar to the left of the tool window. It displays information about your codespace, including its display name and machine type. The buttons at the top of this tool window allow you to:
   * Refresh the details in the tool window for the active codespace
   * Display the "Your codespaces" web page
   * View the codespace creation logs
1. **Editor** - This is where you edit your files. You can right-click the tab for a file to access options such as moving the tab to a new window.
1. **Terminal** - This is displayed by clicking **Terminal** in the tool window bar at the bottom of the main window (just above the status bar). The integrated terminal allows you to perform command-line tasks without having to switch to a dedicated terminal application.
1. **Status bar** - Hover over the icon at the left of the status bar to see a list of tools. Click the icon to hide or show the tool window bars. The right side of the status bar shows information about the project, including the current Git branch.

For more information about the IntelliJ IDEA user interface, see the [JetBrains documentation for IntelliJ IDEA](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html).

### Customizing the codespaces for a repository

You can customize the codespaces that are created for a repository by creating or updating the dev container configuration for the repository. You can do this from within a codespace. After you change a dev container configuration, you can apply the changes to the current codespace by rebuilding the Docker container for the codespace. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

### Personalizing your codespace

You can use a [dotfiles](https://dotfiles.github.io/tutorials/) repository to personalize aspects of the codespace environment for any codespace that you create. For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#dotfiles)."

### Committing your changes

Once you've made changes to your codespace, either new code or configuration changes, you'll want to commit and push your changes. Pushing changes to a repository ensures that anyone else who creates a codespace from this repository has the same configuration. This also means that any customization you do, to modify the configuration of codespaces created for a repository, will be available to everybody who uses the repository.

For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace#committing-your-changes)."

## Further reading

* "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-in-your-jetbrains-ide)"
* "[AUTOTITLE](/codespaces/reference/using-the-github-codespaces-plugin-for-jetbrains)"
* "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)"

{% endjetbrains_beta %}

{% cli %}

The tabs in this article allow you to switch between information for each of these ways of working. You're currently on the tab for {% data variables.product.prodname_cli %}.

## Working in a codespace in a command shell

{% data reusables.cli.cli-learn-more %}

You can use {% data variables.product.prodname_cli %} to create a new codespace, or start an existing codespace, and then SSH to it. Once connected, you can work on the command line using your preferred command-line tools.

After installing {% data variables.product.prodname_cli %} and authenticating with your {% data variables.product.prodname_dotcom %} account you can use the command `gh codespace [<SUBCOMMAND>...] --help` to browse the help information. Alternatively, you can view the same reference information at [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace).

For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-with-github-cli)."

{% endcli %}
