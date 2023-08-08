---
title: Personalizing GitHub Codespaces for your account
shortTitle: Personalize your codespaces
intro: 'You can personalize {% data variables.product.prodname_github_codespaces %} by using a `dotfiles` repository on {% data variables.product.product_name %} or by using Settings Sync.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
---


## About personalizing {% data variables.product.prodname_codespaces %}

When using any development environment, customizing the settings and tools to your preferences and workflows is an important step. {% data variables.product.prodname_github_codespaces %} allows for two main ways of personalizing your codespaces.

- [Settings Sync](#settings-sync) - You can synchronize your {% data variables.product.prodname_vscode %} settings between the desktop application and the {% data variables.product.prodname_vscode_shortname %} web client.
- [Dotfiles](#dotfiles) – You can use a `dotfiles` repository to specify scripts, shell preferences, and other configurations.

{% data variables.product.prodname_github_codespaces %} personalization applies to any codespace you create.

Project maintainers can also define a default configuration that applies to every codespace for a repository, created by anyone. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

## Settings Sync

Settings Sync allows you to synchronize configurations such as settings, keyboard shortcuts, snippets, extensions, and UI state across machines and instances of {% data variables.product.prodname_vscode_shortname %}. For more information, see [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% data reusables.codespaces.about-settings-sync %}

For example, a common use of Settings Sync would be to sync your settings from your {% data variables.product.prodname_vscode_shortname %} desktop application, which you use for local work, to codespaces you open in the browser. To do this, you would need to do the following things.

- Turn on Settings Sync in the desktop application. For more information, see [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync#_turning-on-settings-sync) in the {% data variables.product.prodname_vscode_shortname %} documentation.
- Enable Settings Sync in your user preferences for {% data variables.product.prodname_github_codespaces %}. For more information, see "[Managing your preferences for Settings Sync](#managing-your-preferences-for-settings-sync)."
- Optionally, if you want to sync settings changes back to your desktop application from a codespace, turn on Settings Sync in the codespace and add the repository from which you created the codespace to your list of trusted repositories. For more information, see "[Turning on Settings Sync in a codespace](#turning-on-settings-sync-in-a-codespace)."

Alternatively, you may want to use the same settings across all codespaces you open in the web client, while leaving your local {% data variables.product.prodname_vscode_shortname %} application unaffected. To do this, you would need to do the following things.

- In a codespace, configure your settings as you want them, then turn on Settings Sync in the codespace to push the settings to the cloud. When you do this, Settings Sync is enabled automatically in your user preferences for {% data variables.product.prodname_github_codespaces %}, so your settings will be pulled into all new codespaces. For more information, see "[Turning on Settings Sync in a codespace](#turning-on-settings-sync-in-a-codespace)."
- In the desktop application, leave Settings Sync turned off, or sync your settings to a different account.

### About Settings Sync in codespaces

Whether Settings Sync is turned on by default in a codespace, and the relationship between your cached settings and the settings in a codespace, depend on several factors. These factors include the editor in which you open the codespace, your user preferences on {% data variables.product.prodname_dotcom %}, and your list of trusted repositories.

For codespaces opened in the {% data variables.product.prodname_vscode_shortname %} desktop application, Settings Sync remains on if you have previously turned on Settings Sync in the application. If Settings Sync is on, your settings are synced both to and from the cloud.

For codespaces opened in the {% data variables.product.prodname_vscode_shortname %} web client, Settings Sync is disabled by default. This means the {% data variables.product.prodname_vscode_shortname %} instance in the codespace uses the default theme and settings.

If you use the web client and want your codespaces to use your cached synced settings, you can enable Settings Sync in your user preferences on {% data variables.product.prodname_dotcom %}. For more information, see "[Managing your preferences for Settings Sync](#managing-your-preferences-for-settings-sync)." Settings Sync is enabled in your user preferences automatically if you open a codespace in the web client and turn on Settings Sync in the codespace.

When Settings Sync is enabled in your user preferences, for codespaces opened in the web client, the behavior of Settings Sync depends on your list of trusted repositories.

- If you create a codespace from a repository you trust, Settings Sync is turned on in the codespace by default, so your settings are synced both to and from the cloud.
- If you create a codespace from a repository you haven't added to your list of trusted repositories, the sync takes place in one direction and at one time only. When you create the codespace, your settings are pulled into the codespace from your cached settings in the cloud, but from then on, Settings Sync is turned off in the codespace. This means updates you make to your settings in the codespace are not pushed back to the cloud, and any updates you make to your cached settings from elsewhere are not reflected in the codespace after you have created it.

  If you turn on Settings Sync in a codespace, you will be prompted to add the repository to your list of trusted repositories. For more information, see "[Turning on Settings Sync in a codespace](#turning-on-settings-sync-in-a-codespace)."

{% data reusables.codespaces.settings-sync-and-gpg %}

For more information on managing your preferences for GPG verification, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)."

### Managing your preferences for Settings Sync

If you enable Settings Sync in your user preferences, codespaces opened in the {% data variables.product.prodname_vscode_shortname %} web client will pull in your cached settings from the cloud, and codespaces created from trusted repositories will sync with your cached settings in both directions.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. To enable or disable Settings Sync, under "Settings Sync," select or deselect **Enable**.
{% data reusables.codespaces.trusted-repos-step %}

Your updates will take effect in new codespaces. However, you can turn on Settings Sync in an existing codespace. For more information, see "[Turning on Settings Sync in a codespace](#turning-on-settings-sync-in-a-codespace)."

### Turning on Settings Sync in a codespace

{% note %}

**Note:** You should only turn on Settings Sync in codespaces created from repositories you trust. For more information, see "[AUTOTITLE](/codespaces/codespaces-reference/security-in-github-codespaces#using-settings-sync)."

{% endnote %}

The following procedure describes how to turn on Settings Sync in a codespace opened in the web client. For information about turning on Settings Sync in the {% data variables.product.prodname_vscode_shortname %} desktop application, see [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync#_turning-on-settings-sync) in the {% data variables.product.prodname_vscode_shortname %} documentation.

1. In {% data variables.product.prodname_vscode_shortname %}, at the bottom of the Activity Bar, select {% octicon "gear" aria-label="Manage" %}, then click **Sign in to Sync Settings**.
1. If the repository from which you created the codespace is not in your list of trusted repositories, a browser window will open asking you to authorize additional permissions for Settings Sync. If you trust the repository, click **Authorize**, then close the browser window. The codespace will reload and display your latest synced settings.

   {% note %}

   **Note:** If you have Settings Sync disabled in your user preferences, and have set your trusted repositories to all repositories, you will see a warning about enabling Settings Sync for all repositories. Review the warning and choose whether to enable Settings Sync for all repositories or revise your list of trusted repositories.

   {% endnote %}

1. To configure which settings you want to sync, open the Command Palette with <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux), then start typing "Settings Sync". Click **Settings Sync: Configure...**.
1. Select the settings you want to sync, then click **OK**.

   ![Screenshot of the "Setting Sync" options. There are seven options, each with a checkbox. The "OK" button is shown top right.](/assets/images/help/codespaces/settings-sync-config-ok.png)

### Turning off Settings Sync in a codespace

{% data reusables.codespaces.disabling-settings-sync %}

## Dotfiles

Dotfiles are files and folders on Unix-like systems starting with `.` that control the configuration of applications and shells on your system. You can store and manage your dotfiles in a repository on {% data variables.product.prodname_dotcom %}. For advice and tutorials about what to include in your dotfiles repository, see [GitHub does dotfiles](https://dotfiles.github.io/).

Your dotfiles repository might include your shell aliases and preferences, any tools you want to install, or any other codespace personalization you want to make.

You can configure {% data variables.product.prodname_github_codespaces %} to use dotfiles from any repository you own by selecting that repository in your [personal {% data variables.product.prodname_github_codespaces %} settings](https://github.com/settings/codespaces).

When you create a new codespace, {% data variables.product.prodname_dotcom %} clones your selected dotfiles repository to the codespace environment, and looks for one of the following files to set up the environment.

- _install.sh_
- _install_
- _bootstrap.sh_
- _bootstrap_
- _script/bootstrap_
- _setup.sh_
- _setup_
- _script/setup_

If none of these files are found, then any files or folders in your selected dotfiles repository starting with `.` are symlinked to the codespace's `~` or `$HOME` directory.

Any changes to your selected dotfiles repository will apply only to each new codespace, and do not affect any existing codespace.

{% note %}

**Note:** Currently, {% data variables.product.prodname_codespaces %} does not support personalizing the User-scoped settings for {% data variables.product.prodname_vscode_shortname %} with your `dotfiles` repository. You can set default Workspace and Remote [Codespaces] settings for a specific project in the project's repository. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)."

{% endnote %}

### Enabling your dotfiles repository for {% data variables.product.prodname_codespaces %}

You can use your selected dotfiles repository to personalize your {% data variables.product.prodname_github_codespaces %} environment. Once you choose your dotfiles repository, you can add your scripts, preferences, and configurations to it. You then need to enable your dotfiles from your personal {% data variables.product.prodname_github_codespaces %} settings page.

{% warning %}

**Warning:** Dotfiles have the ability to run arbitrary scripts, which may contain unexpected or malicious code. Before installing a dotfiles repo, we recommend checking scripts to ensure they don't perform any unexpected actions.

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Dotfiles", select **Automatically install dotfiles** so that {% data variables.product.prodname_github_codespaces %} automatically installs your dotfiles into every new codespace you create.

   ![Screenshot of the "Dotfiles" section of the codespace settings, with the "Automatically install dotfiles" option cleared.](/assets/images/help/codespaces/install-custom-dotfiles.png)

1. Use the dropdown to choose the repository you want to install dotfiles from.

   ![Screenshot of the "Automatically install dotfiles" option selected and "monalisa/dotfiles" selected from a dropdown list of repositories.](/assets/images/help/codespaces/select-dotfiles-repo.png)

You can add further script, preferences, configuration files to your dotfiles repository or edit existing files whenever you want. Changes to settings will only be picked up by new codespaces.

If your codespace fails to pick up configuration settings from dotfiles, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-personalization-for-codespaces#troubleshooting-dotfiles)."

## Other available settings

You can also personalize {% data variables.product.prodname_github_codespaces %} using additional options in [your personal settings](https://github.com/settings/codespaces):

- To enable GPG verification, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)."
- To set your editor, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)."
- To set how long a codespace can remain unused before it is automatically stopped, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."
- To set the period for which your unused codespaces are retained, see "[AUTOTITLE](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)."
- To set your default region, see "[AUTOTITLE](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)."

## Further reading

- "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)"
- "[AUTOTITLE](/codespaces/getting-started/deep-dive#personalizing-your-codespace-with-extensions-or-plugins)"
- "[AUTOTITLE](/codespaces/customizing-your-codespace/changing-the-shell-in-a-codespace)"
