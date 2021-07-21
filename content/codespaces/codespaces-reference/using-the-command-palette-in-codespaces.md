---
title: Using the Command Palette in Codespaces
intro: 'You can use the Command Palette feature of {% data variables.product.prodname_vscode %} to access many commands in Codespaces.'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: Command Palette
---

{% data reusables.codespaces.release-stage %}

## About the Command Palette

The Command Palette is one of the focal features of {% data variables.product.prodname_vscode %} and is available for you to use in Codespaces. The Command Palette allows you to access many commands for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode %}. For more information on using the Command Palette, see "[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" in the Visual Studio Code documentation.

## Accessing the Command Palette

You can access the Command Palette in a number of ways.

- `Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows).

  Note that this command is a reserved keyboard shortcut in Firefox.
- `F1`
- From the Application Menu, click **View > Command Palette…**.

  ![The application menu](/assets/images/help/codespaces/codespaces-view-menu.png)

## Commands for {% data variables.product.prodname_github_codespaces %}

To see all commands related to {% data variables.product.prodname_github_codespaces %} access the Command Palette, then start typing "Codespaces".

![A list of all commands that relate to Codespaces](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspending or stopping a codespace

If you add a new secret, you'll have to stop and restart the codespace for it to apply your changes. 

To suspend or stop your codespace's container, access the Command Palette, then start typing "stop". Select **Codespaces: Stop Current Codespace**.

![Command to stop a codespace](/assets/images/help/codespaces/codespaces-stop.png)

### Adding a dev container from a template

To add a dev container from a template, access the Command Palette, then start typing "dev container". Select **Codespaces: Add Development Container Configuration Files...**

![Command to add a dev container](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Rebuilding a codespace

If you add a dev container or edit any of the configuration files (`devcontainer.json` and `Dockerfile`), you'll have to rebuild your codespace for it to apply your changes. 

To rebuild your container, access the Command Palette, then start typing "rebuild". Select **Codespaces: Rebuild Container**.

![Command to rebuild a codespace](/assets/images/help/codespaces/codespaces-rebuild.png)

### Codespaces logs

You can use the Command Palette to access the codespace creation logs, or you can use it export all logs. 

To retrieve the logs for Codespaces, access the Command Palette, then start typing "log". Select **Codespaces: Export Logs** to export all logs related to Codespaces or select **Codespaces: View Creation Logs** to view logs related to the setup.

![Command to access logs](/assets/images/help/codespaces/codespaces-logs.png)
