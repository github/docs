---
title: Using the Visual Studio Code Command Palette in GitHub Codespaces
intro: 'You can use the Command Palette feature of {% data variables.product.prodname_vscode %} to access many commands in {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
  - /codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces
---

## About the {% data variables.product.prodname_vscode_command_palette %}

The {% data variables.product.prodname_vscode_command_palette_shortname %} is one of the focal features of {% data variables.product.prodname_vscode %} and is available for you to use in {% data variables.product.prodname_github_codespaces %}. The Command Palette allows you to access many commands for {% data variables.product.prodname_github_codespaces %} and {% data variables.product.prodname_vscode_shortname %}. For more information on using the {% data variables.product.prodname_vscode_command_palette_shortname %}, see "[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Accessing the {% data variables.product.prodname_vscode_command_palette_shortname %}

You can access the {% data variables.product.prodname_vscode_command_palette_shortname %} in a number of ways.

* <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).

  Note that this command is a reserved keyboard shortcut in Firefox.
* <kbd>F1</kbd>
* From the Application Menu, click **View > Command Palette**.

## Commands for {% data variables.product.prodname_codespaces %}

To see all commands related to {% data variables.product.prodname_github_codespaces %}, [access the {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-vs-code-command-palette), then start typing "Codespaces".

![Screenshot of the Command Palette with "codespaces" entered. The dropdown lists all commands that relate to {% data variables.product.prodname_github_codespaces %}.](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspending or stopping a codespace

If you add a new secret or change the machine type, you'll have to stop and restart the codespace for it to apply your changes.

To suspend or stop your codespace's container, [access the {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-vs-code-command-palette), then start typing "stop". Select **Codespaces: Stop Current Codespace**.

![Screenshot of the Command Palette with the search text "stop" and the option "Codespaces: Stop Current Codespace."](/assets/images/help/codespaces/codespaces-stop.png)

### Adding a predefined dev container configuration

To add a predefined dev container configuration, [access the {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-vs-code-command-palette), then start typing "add dev". Click **Codespaces: Add Dev Container Configuration Files**.

![Screenshot of the Command Palette, with "add dev" entered and "Codespaces: Add Dev Container Configuration Files" listed.](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Rebuilding a codespace

If you add a dev container or edit any of the configuration files (`devcontainer.json` and `Dockerfile`), you'll have to rebuild your codespace for it to apply your changes.

To rebuild your container, [access the {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-vs-code-command-palette), then start typing "rebuild". Select **Codespaces: Rebuild Container**.

![Screenshot of the Command Palette with the search text "rebuild" and the option "Codespaces: Rebuild Container."](/assets/images/help/codespaces/codespaces-rebuild.png)

{% data reusables.codespaces.full-rebuild-tip %}

### Codespaces logs

You can use the {% data variables.product.prodname_vscode_command_palette_shortname %} to access the codespace creation logs, or you can use it export all logs.

To retrieve the logs for {% data variables.product.prodname_github_codespaces %}, [access the {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-vs-code-command-palette), then start typing "export". Select **Codespaces: Export Logs** to export all logs related to {% data variables.product.prodname_github_codespaces %} or select **Codespaces: View Creation Logs** to view logs related to the setup.

![Screenshot of the Command Palette with the search text "export" and the option "Codespaces: Export Logs."](/assets/images/help/codespaces/codespaces-logs.png)

## Further reading

* "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-in-visual-studio-code)"
