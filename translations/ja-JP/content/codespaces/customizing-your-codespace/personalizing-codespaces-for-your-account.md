---
title: Personalizing Codespaces for your account
intro: 'You can personalize {% data variables.product.prodname_codespaces %} by using a `dotfiles` repository on {% data variables.product.product_name %} or by using Settings Sync.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Personalize your codespaces
---


## About personalizing {% data variables.product.prodname_codespaces %}

When using any development environment, customizing the settings and tools to your preferences and workflows is an important step. {% data variables.product.prodname_codespaces %} allows for two main ways of personalizing your codespaces.

- [Settings Sync](#settings-sync) - You can use and share {% data variables.product.prodname_vscode %} settings between {% data variables.product.prodname_codespaces %} and other instances of {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – You can use a `dotfiles` repository to specify scripts, shell preferences, and other configurations.

{% data variables.product.prodname_codespaces %} personalization applies to any codespace you create.

Project maintainers can also define a default configuration that applies to every codespace for a repository, created by anyone. For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)."

## Settings Sync

Settings Sync allows you to share configurations such as settings, keyboard shortcuts, snippets, extensions, and UI state across machines and instances of {% data variables.product.prodname_vscode %}.

To enable Settings Sync, in the bottom-left corner of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Turn on Settings Sync…**. In the dialog box, select the settings you'd like to sync.

![Setting Sync option in manage menu](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

For more information, see the [Settings Sync guide](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode %} documentation.

## Dotfiles

Dotfiles are files and folders on Unix-like systems starting with `.` that control the configuration of applications and shells on your system. You can store and manage your dotfiles in a repository on {% data variables.product.prodname_dotcom %}. For advice and tutorials about what to include in your dotfiles repository, see [GitHub does dotfiles](https://dotfiles.github.io/).

Your dotfiles repository might include your shell aliases and preferences, any tools you want to install, or any other codespace personalization you want to make.

You can configure {% data variables.product.prodname_codespaces %} to use dotfiles from any repository you own by selecting that repository in your [personal {% data variables.product.prodname_codespaces %} settings](https://github.com/settings/codespaces).

When you create a new codespace, {% data variables.product.prodname_dotcom %} clones your selected repository to the codespace environment, and looks for one of the following files to set up the environment.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

If none of these files are found, then any files or folders in your selected dotfiles repository starting with `.` are symlinked to the codespace's `~` or `$HOME` directory.

Any changes to your selected dotfiles repository will apply only to each new codespace, and do not affect any existing codespace.

{% note %}

**Note:** Currently, {% data variables.product.prodname_codespaces %} does not support personalizing the _User_ settings for the {% data variables.product.prodname_vscode %} editor with your `dotfiles` repository. You can set default _Workspace_ and _Remote [Codespaces]_ settings for a specific project in the project's repository. For more information, see "[Introduction to dev containers](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)."

{% endnote %}

### Enabling your dotfiles repository for {% data variables.product.prodname_codespaces %}

You can use your selected dotfiles repository to personalize your {% data variables.product.prodname_codespaces %} environment. Once you choose your dotfiles repository, you can add your scripts, preferences, and configurations to it. You then need to enable your dotfiles from your personal {% data variables.product.prodname_codespaces %} settings page.

{% warning %}

**Warning:** Dotfiles have the ability to run arbitrary scripts, which may contain unexpected or malicious code. Before installing a dotfiles repo, we recommend checking scripts to ensure they don't perform any unexpected actions.

{% endwarning %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "Dotfiles", select **Automatically install dotfiles** so that {% data variables.product.prodname_codespaces %} automatically installs your dotfiles into every new codespace you create.
   ![Installing dotfiles](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Choose the repository you want to install dotfiles from.
   ![Selecting a dotfiles repo](/assets/images/help/codespaces/select-dotfiles-repo.png)

You can add further script, preferences, configuration files to your dotfiles repository or edit existing files whenever you want. Changes to settings will only be picked up by new codespaces.

If your codespace fails to pick up configuration settings from dotfiles, see "[Troubleshooting dotfiles for {% data variables.product.prodname_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces)."

## Other available settings

You can also personalize {% data variables.product.prodname_codespaces %} using additional [{% data variables.product.prodname_codespaces %} settings](https://github.com/settings/codespaces):

- To set your default region, see "[Setting your default region for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces)."
- To set your editor, see "[Setting your default editor for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)."
- To add encrypted secrets, see "[Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)."
- To enable GPG verification, see "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)."
- To allow your codespaces to access other repositories, see "[Managing access and security for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)."

## Further reading

* "[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
