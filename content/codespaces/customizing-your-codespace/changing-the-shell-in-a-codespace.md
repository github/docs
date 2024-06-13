---
title: Changing the shell in a codespace
shortTitle: Change your shell
intro: You can change your shell in a codespace to keep the setup you're used to.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
---

When you're working in a codespace, you can open a new terminal window with a shell of your choice, change your default shell for new terminal windows, or install a new shell. You can also use dotfiles to configure your shell.

Codespaces that use the default dev container image come with the `bash`, `zsh`, and `fish` shells installed. If you open a new codespace in the {% data variables.product.prodname_vscode_shortname %} web client, or connect to a codespace over SSH, the terminal opens with a `bash` session running by default. In the {% data variables.product.prodname_vscode_shortname %} desktop application, the default shell depends on your local settings and operating system. For more information, see [Terminal Profiles](https://code.visualstudio.com/docs/terminal/profiles) in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Changing from the default shell in {% data variables.product.prodname_vscode_shortname %}

If you don't want to use the default shell, you can open a new terminal session with a different shell.

1. If you cannot see the integrated terminal in {% data variables.product.prodname_vscode_shortname %}, press <kbd>Ctrl</kbd>+<kbd>`</kbd>.
1. To the right of the {% octicon "plus" aria-label="plus" %} icon for opening a new terminal window, select the dropdown icon.

   ![Screenshot of the integrated terminal in {% data variables.product.prodname_vscode_shortname %}. Next to the plus icon, a downward-facing arrow is outlined in orange.](/assets/images/help/codespaces/new-shell-session.png)

1. In the dropdown menu, click the name of the shell you want to use.

## Installing a new shell

If you want to use a shell that isn't already installed in the base image or dev container configuration for a codespace, you can install a new shell.

If you're using the default dev container image, look for installation instructions for Ubuntu Linux. If you just want to use a different shell for one session, you can use the command line to install the shell in the codespace you're working in. However, you may lose programs you have installed if you rebuild the container in the codespace. For more information, see "[AUTOTITLE](/codespaces/getting-started/deep-dive#about-the-directory-structure-of-a-codespace)."

A more robust option for installing new shells is to include the installation commands either in a dotfiles repository, or as a lifecycle command such as `postCreateCommand` in a `devcontainer.json` file. You should use a dotfiles repository to install a shell you want to use in all your own codespaces, and a `devcontainer.json` file for a shell that contributors to a specific repository should have installed. For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#dotfiles)" and "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

### Adding a {% data variables.product.prodname_vscode_shortname %} terminal profile for a new shell

{% data variables.product.prodname_vscode_shortname %} automatically detects most standard shells and adds them as a terminal profile, so you can easily open new terminal windows using the shell you have installed.

If the shell you install isn't detected automatically, you can add a new terminal profile to your user settings. This setting is dependent on your operating system, so you should use `linux` for the {% data variables.product.prodname_vscode_shortname %} web client and your local operating system for the desktop application.

{% data reusables.codespaces.access-user-settings %}
1. In the `settings.json` file, inside the JSON object, add a new property like the following. Replace `OPERATING-SYSTEM` with the relevant operating system (such as `linux`, `windows`, or `osx`) and `SHELL` with the shell you have installed.

   ```json copy
   "terminal.integrated.profiles.OPERATING-SYSTEM": {
     "SHELL": {
       "path": "SHELL"
     }
   }
    ```

    For example:

    ```json
   "terminal.integrated.profiles.linux": {
     "csh": {
       "path": "csh"
     }
   }
    ```

1. Save the file.

{% data reusables.codespaces.settings-sync-link %}

## Setting the default shell in {% data variables.product.prodname_vscode_shortname %}

You can set a default terminal profile to choose the default shell used for all new terminal windows you open in {% data variables.product.prodname_vscode_shortname %}. The default terminal profile is dependent on your operating system, so you can set a default profile for Linux, if you're using the {% data variables.product.prodname_vscode_shortname %} web client, or for your local operating system, if you're using the desktop application.

{% note %}

**Note:** Regardless of your default profile, codespaces opened in the web client always open with a `bash` session running initially.

{% endnote %}

{% data reusables.codespaces.access-user-settings %}
1. Inside the JSON object, to set the default shell for the relevant operating system, add lines or edit existing lines like the following.

   ```json
   "terminal.integrated.defaultProfile.OPERATING-SYSTEM": "SHELL"
   ```

   For example:

   ```json copy
   {
      "terminal.integrated.defaultProfile.osx": "zsh",
      "terminal.integrated.defaultProfile.linux": "bash",
      "terminal.integrated.defaultProfile.windows": "PowerShell"
   }
   ```

1. Save the `settings.json` file.

{% data reusables.codespaces.settings-sync-link %}

## Setting the default shell over SSH

When you connect to a codespace from the command line over SSH, you connect to a `bash` session in the codespace by default.

If you have enabled a dotfiles repository for {% data variables.product.prodname_github_codespaces %}, you can change the default shell you connect to by adding a command to an installation script such as `install.sh` in your dotfiles. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-with-github-cli#ssh-into-a-codespace)" and "[AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#dotfiles)." For example, the following command changes the default shell to `zsh`.

```shell copy
sudo chsh "$(id -un)" --shell "/usr/bin/zsh"
```

If you want to use a default shell that isn't installed in your codespace by default, or ensure you have the latest version of the shell, you can install the shell first.

```shell copy
sudo apt-get update -y
sudo apt-get install -y csh
sudo chsh "$(id -un)" --shell "/usr/bin/csh"
```

{% note %}

**Note**: If you create a new codespace (for example by using `gh codespace create`), you must wait sufficient time to ensure the script has finished running before you connect to the codespace over SSH. If the script hasn't finished running, you will connect to a default `bash` session.

{% endnote %}

When you have connected to the codespace, for most shells, you can use the command `readlink /proc/$$/exe` to check the correct shell is running.

## Configuring your shell

With most shells, you have the option of using a configuration file, such as `.bashrc`, to configure the shell with your preferred settings. These settings can include things like aliases and environment variables.

By default, codespaces contain predefined configuration for the shells that come preinstalled. For example, the home directory in a codespace contains `.bashrc` and `.zshrc` files. You can change the contents of these files then use a command like `source ~/.bashrc` to update your shell configuration. However, you will lose any changes to these files if you rebuild the container in a codespace. For more information, see "[AUTOTITLE](/codespaces/getting-started/deep-dive#about-the-directory-structure-of-a-codespace)."

Generally, you should use a dotfiles repository to configure shells with your preferred settings. The setup in your dotfiles applies to all codespaces you create, and persists over rebuilds of the container. For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#dotfiles)."

### Troubleshooting the `fish` shell

The `fish` shell includes a web-based configuration interface. You can use the `fish_config` command to start a local web server and launch this interface, then do things like change the terminal prompt or view your environment variables.

You can use the web-based interface for `fish` in a codespace. However,
the color settings in {% data variables.product.prodname_vscode_shortname %}'s integrated terminal depend on your chosen {% data variables.product.prodname_vscode_shortname %} theme, and you cannot override these settings by setting a new theme in the `fish_config` interface.

When `fish` starts the local server, the default link that {% data variables.product.prodname_github_codespaces %} provides to the forwarded port does not work. For example, if you click **Open in Browser** on the popup message, you will be taken to an error page.

To access the web-based interface for `fish_config`:

1. In a terminal running a `fish` session, enter `fish_config`.
1. In the terminal output, use <kbd>Command</kbd>+click or <kbd>Ctrl</kbd>+click to open the link to the `web_config` HTML file.

   ```shell
   $ fish_config
   Web config started at file:///tmp/web_config60rc9tr3.html
   Hit ENTER to stop.
   ```

1. In the `web_config` file, use <kbd>Command</kbd>+click or <kbd>Ctrl</kbd>+click to open the link to the forwarded port.

   ```html
   <body>
     <p><a href="http://localhost:8000/1b9411c2469e392b96df5e5b28da485b/">Start the Fish Web config</a></p>
   </body>
   ```

## Further reading

* "[AUTOTITLE](/codespaces/setting-your-user-preferences)"
* "[AUTOTITLE](/codespaces/managing-your-codespaces)"
