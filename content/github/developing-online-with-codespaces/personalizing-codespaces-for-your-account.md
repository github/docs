---
title: Personalizing Codespaces for your account
intro: '{% data variables.product.prodname_codespaces %} uses your `dotfiles` repository on {% data variables.product.product_name %} to personalize every new codespace that you create.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'Anyone can create a `dotfiles` repository to personalize {% data variables.product.prodname_codespaces %} for their user account.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

Dotfiles are files and folders on Unix-like systems starting with `.` that control the configuration of applications and shells on your system. You can store and manage your dotfiles in a repository on {% data variables.product.prodname_dotcom %}. For advice and tutorials about what to include in your `dotfiles` repository, see [GitHub does dotfiles](https://dotfiles.github.io/).

If your user account on {% data variables.product.prodname_dotcom %} owns a public repository named `dotfiles`, {% data variables.product.prodname_dotcom %} automatically uses this repository to personalize your codespace environment. Private `dotfiles` repositories are not currently supported.

Your `dotfiles` repository might include your shell aliases and preferences, any tools you want to install, or any other codespace personalization you want to make.

Codespace personalization using your `dotfiles` repository applies to any codespace you create. Project maintainers can also define a default configuration that applies to every codespace for a repository, created by anyone. {% data reusables.codespaces.codespace-config-order %} For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)." 

When you create a new codespace, {% data variables.product.prodname_dotcom %} clones your `dotfiles` repository to the codespace environment, and looks for one of the following files to set up the environment.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _setup.sh_
* _setup_

If none of these files are found, then any files or folders in `dotfiles` starting with `.` are symlinked to the codespace's `~` or `$HOME` directory.

Any changes to your `dotfiles` repository will apply only to each new codespace, and do not affect any existing codespace.

For more information, see [Personalizing](https://docs.microsoft.com/visualstudio/online/reference/personalizing) in the {% data variables.product.prodname_vscode %} documentation.

{% note %}

**Note:** Currently, {% data variables.product.prodname_codespaces %} does not support personalizing the _User_ settings for the {% data variables.product.prodname_vscode %} editor with your `dotfiles` repository. You can set default _Workspace_ and _Remote [Codespaces]_ settings for a specific project in the project's repository. For more information, see "[Configuring {% data variables.product.prodname_codespaces %} for your project](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)."

{% endnote %}


### Further reading

* "[Creating a new repository](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)"
