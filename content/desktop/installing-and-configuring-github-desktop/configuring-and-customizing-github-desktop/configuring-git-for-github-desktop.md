---
title: Configuring Git for GitHub Desktop
shortTitle: Configuring Git
intro: 'You can configure Git configuration settings in GitHub Desktop for your local repositories.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
---
## About configuring Git

{% data variables.product.prodname_desktop %} allows you to set the name and email address you would like associated with the commits you make in your repositories. If your name and email address have already been set in the global Git configuration, {% data variables.product.prodname_desktop %} will detect and use those values. {% data variables.product.prodname_desktop %} also allows you to set a specific name and email address for individual repositories. This is useful when you need to use a separate work email address for a specific repository.

{% data variables.product.prodname_desktop %} will also show a warning prior to committing if the email address that has been set in your Git configuration does not match an email address associated with the {% data variables.product.product_name %} account you are currently logged in to.

{% data variables.product.prodname_desktop %} also allows you to change the default branch name that you would like to use when creating new repositories. By default, {% data variables.product.prodname_desktop %} uses `main` as the default branch name in any new repositories you create.

{% tip %}

**Tip**: Anyone will be able to see the email address in your Git configuration if you make public commits. For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address/)."

{% endtip %}

## Configuring your commit details

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. In the Preferences window, click **Git**.
  ![The Git Pane in the Preferences menu](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![The name field of the Git configuration](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Select email address in Git configuration field](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Save button in Git configuration field](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. In the Options window, click **Git**.
![The Git Pane in the Options menu](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![The name field of the Git configuration](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.select-email-git-config %}
  ![Select email address in Git configuration field](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Save button in Git configuration field](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Overriding the email address GitHub Desktop uses for a repository

In {% data variables.product.prodname_desktop %} you can change the name and email address used for commits in a specific repository. This local Git configuration will override your global Git configuration settings in this one repository, but will not affect any other repositories.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %}
{% data reusables.desktop.select-git-config %}
{% data reusables.desktop.use-local-git-config %}
{% data reusables.desktop.local-config-name %}
{% data reusables.desktop.local-config-email %}
{% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Configuring your default branch for new repositories

You can configure the default branch that will be used when creating a new repository in {% data variables.product.prodname_desktop %}. The default branch is the base branch for pull requests and code commits. For more information about the default branch, see "[About the default branch](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. In the Preferences window, click **Git**.
  ![The Git Pane in the Preferences menu](/assets/images/help/desktop/mac-select-git-pane.png)
1. Under "Default branch name for new repositories", select the default branch name you would like to use, or select "Other..." to enter a custom name.
  ![Default branch name selection options](/assets/images/help/desktop/mac-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Save button in Git configuration field](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. In the Options window, click **Git**.
  ![The Git Pane in the Options menu](/assets/images/help/desktop/windows-select-git-pane.png)
1. Under "Default branch name for new repositories", select the default branch name you would like to use, or select "Other..." to enter a custom name.
  ![Default branch name selection options](/assets/images/help/desktop/windows-select-default-branch-name.png)
{% data reusables.desktop.click-save-git-config %}
  ![Save button in Git configuration field](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Further reading

- "[Adding an email address to your GitHub account](/articles/adding-an-email-address-to-your-github-account/)"
- "[Setting your commit email address](/articles/setting-your-commit-email-address/)"
- "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches)"
