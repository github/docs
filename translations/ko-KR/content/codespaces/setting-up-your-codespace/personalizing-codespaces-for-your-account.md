---
title: Personalizing Codespaces for your account
intro: 'You can personalize {% data variables.product.prodname_codespaces %} by using a `dotfiles` repository on {% data variables.product.product_name %} or by using Settings Sync.'
permissions: 'Anyone can personalize {% data variables.product.prodname_codespaces %} for their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
---

{% data reusables.codespaces.release-stage %}

### About personalizing {% data variables.product.prodname_codespaces %}

When using any development environment, customizing the settings and tools to your preferences and workflows is an important step. {% data variables.product.prodname_codespaces %} allows for two main ways of personalizing your codespaces.

- [Settings Sync](#settings-sync) - You can use and share {% data variables.product.prodname_vscode %} settings between {% data variables.product.prodname_codespaces %} and other instances of {% data variables.product.prodname_vscode %}.
- [Dotfiles](#dotfiles) – You can use a public `dotfiles` repository to specify scripts, shell preferences, and other configurations.

{% data variables.product.prodname_codespaces %} personalization applies to any codespace you create.

Project maintainers can also define a default configuration that applies to every codespace for a repository, created by anyone. For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)."

### Settings Sync

Settings Sync allows you to share configurations such as settings, keyboard shortcuts, snippets, extensions, and UI state across machines and instances of {% data variables.product.prodname_vscode %}.

Settings Sync is on by default. To configure any settings, in the bottom-left corner of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Settings Sync is on**. From the dialog, you can choose to configure, show settings and data, or turn off Settings Sync.

![Setting Sync option in manage menu](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

For more information, see the [Settings Sync guide](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode %} documentation.

### Dotfiles

Dotfiles are files and folders on Unix-like systems starting with `.` that control the configuration of applications and shells on your system. You can store and manage your dotfiles in a repository on {% data variables.product.prodname_dotcom %}. For advice and tutorials about what to include in your `dotfiles` repository, see [GitHub does dotfiles](https://dotfiles.github.io/).

If your user account on {% data variables.product.prodname_dotcom %} owns a public repository named `dotfiles`, {% data variables.product.prodname_dotcom %} automatically uses this repository to personalize your codespace environment. Private `dotfiles` repositories are not currently supported.

Your `dotfiles` repository might include your shell aliases and preferences, any tools you want to install, or any other codespace personalization you want to make.

When you create a new codespace, {% data variables.product.prodname_dotcom %} clones your `dotfiles` repository to the codespace environment, and looks for one of the following files to set up the environment.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _setup.sh_
* _setup_

If none of these files are found, then any files or folders in `dotfiles` starting with `.` are symlinked to the codespace's `~` or `$HOME` directory.

Any changes to your `dotfiles` repository will apply only to each new codespace, and do not affect any existing codespace.

{% note %}

**Note:** Currently, {% data variables.product.prodname_codespaces %} does not support personalizing the _User_ settings for the {% data variables.product.prodname_vscode %} editor with your `dotfiles` repository. You can set default _Workspace_ and _Remote [Codespaces]_ settings for a specific project in the project's repository. For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)."

{% endnote %}

You can also configure settings for your user account to add encrypted secrets, enable GPG verification, and allow your codespaces to access other repositories. For more information, see "[Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)", "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)", and "[Managing access and security for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)."

### 더 읽을거리

* "[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
