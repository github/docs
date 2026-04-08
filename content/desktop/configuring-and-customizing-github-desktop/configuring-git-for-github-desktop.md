---
title: Configuring Git for GitHub Desktop
shortTitle: Configuring Git
intro: 'You can manage Git configuration settings for your local repositories with {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-and-customizing-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
category:
  - Configure and customize GitHub Desktop
---
## About Git configuration for {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} uses your local Git configuration settings and provides the option to configure some of these settings, such as the global author information and the default branch that is used when creating a new repository.

{% data variables.product.prodname_desktop %} allows you to set the name and email address you would like associated with the commits you make in your repositories. If your name and email address have already been set in the global Git configuration for your computer, {% data variables.product.prodname_desktop %} will detect and use those values. {% data variables.product.prodname_desktop %} also allows you to set a different name and email address for an individual repository. This is useful when you need to use a separate work email address for a specific repository.

If the email address that has been set in your Git configuration does not match an email address associated with the {% data variables.product.github %} account you are currently logged in to, {% data variables.product.prodname_desktop %} will show a warning prior to committing.

{% data variables.product.prodname_desktop %} also allows you to change the default branch name that you would like to use when creating new repositories. By default, {% data variables.product.prodname_desktop %} uses `main` as the default branch name in any new repositories you create.

> [!TIP]
> Anyone will be able to see the email address in your Git configuration if you make public commits. For more information, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address).

## Configuring your global author information

Configuring your global author information in {% data variables.product.prodname_desktop %} will update the name and email address in your global Git configuration. This will be the default name and email address for all new local repositories you create in {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.settings-git-pane %}
{% data reusables.desktop.name-field-git-config %}
{% data reusables.desktop.select-email-git-config %}
{% data reusables.desktop.click-save-git-config %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. In the "Options" window, click **Git**.

   ![Screenshot of the "Git" pane in the "Options" window. In the left sidebar, an option labeled "Git" is highlighted in blue.](/assets/images/help/desktop/windows-select-git-pane.png)

{% data reusables.desktop.name-field-git-config %}
{% data reusables.desktop.select-email-git-config %}
{% data reusables.desktop.click-save-git-config %}

{% endwindows %}

## Configuring different author information for an individual repository

You can change the name and email address used to author commits in a specific repository. This local Git configuration will override your global Git configuration settings for this one repository only.

{% mac %}

1. To switch to the repository for which you want to set specific configuration, use the "Current Repository" dropdown menu.

   ![Screenshot of the repository bar in GitHub Desktop. Next to "Current Repository", a dropdown icon is highlighted with an orange outline.](/assets/images/help/desktop/current-repo-dropdown.png)

{% data reusables.desktop.mac-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.select-email-git-config %}
{% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.select-email-git-config %}
{% data reusables.desktop.repository-settings-save %}

{% endwindows %}

## Configuring your default branch for new repositories

You can configure the default branch that will be used when you create a new repository in {% data variables.product.prodname_desktop %}. For more information about the default branch, see [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch).

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.settings-git-pane %}
1. Click the **Default branch** tab.
1. Edit the name of the default branch as needed.
{% data reusables.desktop.click-save-git-config %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. In the "Options" window, click **Git**.

  ![Screenshot of the "Git" pane in the "Options" window. In the left sidebar, an option labeled "Git" is highlighted in blue.](/assets/images/help/desktop/windows-select-git-pane.png)

1. Click the **Default branch** tab.
1. Edit the name of the default branch as needed.
{% data reusables.desktop.click-save-git-config %}

{% endwindows %}

## Configuring your shell environment for Git hooks

{% data variables.product.prodname_desktop %} runs Git hooks in your configured shell environment. This means hooks have access to the same environment variables, shell configuration files (such as `.bash_profile` or `.zshrc`), and tools as when you run Git from the command line. Tools installed via version managers, such as `nvm` or `rbenv`, will also be available to your hooks.

You can configure hook environment settings in the **Hooks** tab of the **Git** settings pane.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.settings-git-pane %}
1. Click the **Hooks** tab.

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. In the "Options" window, click **Git**.

  ![Screenshot of the "Git" pane in the "Options" window. In the left sidebar, an option labeled "Git" is highlighted in blue.](/assets/images/help/desktop/windows-select-git-pane.png)

1. Click the **Hooks** tab.

{% endwindows %}

The following settings are available:

* **Load Git hook environment variables from shell**: When enabled, {% data variables.product.prodname_desktop %} loads environment variables from your shell when executing Git hooks. Enable this if your hooks depend on tools installed via version managers such as `nvm`, `rbenv`, or `asdf`.

{% mac %}

* **Cache Git hook environment variables**: Caches hook environment variables to improve performance. Disable this if your hooks rely on frequently changing environment variables.

{% endmac %}

For more information about Git hooks in {% data variables.product.prodname_desktop %}, see [AUTOTITLE](/desktop/making-changes-in-a-branch/working-with-git-hooks-in-github-desktop).

## Further reading

* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)
* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
* [AUTOTITLE](/get-started/getting-started-with-git)
