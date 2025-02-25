---
title: Setting up GitHub Desktop
shortTitle: Setup
intro: 'You can set up {% data variables.product.prodname_desktop %} to suit your needs and contribute to projects.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/setting-up-github-desktop
  - /desktop/installing-and-configuring-github-desktop/setting-up-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/setting-up-github-desktop
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
---
## Part 1: Installing {% data variables.product.prodname_desktop %}

You can install {% data variables.product.prodname_desktop %} on any supported operating system. For more information, see [AUTOTITLE](/desktop/overview/supported-operating-systems-for-github-desktop).

To install {% data variables.product.prodname_desktop %}, navigate to [https://desktop.github.com/](https://desktop.github.com/) and download the appropriate version of {% data variables.product.prodname_desktop %} for your operating system. Follow the prompts to complete the installation. For more information, see [AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop).

## Part 2: Configuring your account

If you have an account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, you can use {% data variables.product.prodname_desktop %} to exchange data between your local and remote repositories.

### Creating an account

If you do not already have an account on {% data variables.product.github %}, create one now.{% ifversion fpt or ghec %} For more information, see [AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github).{% endif %}

{% ifversion ghec %}If you're part of an organization that uses {% data variables.product.prodname_emus %} and you do not have an account, contact your enterprise administrator.{% elsif ghes %}If you're a member of an organization that uses {% data variables.product.prodname_ghe_server %} and you do not have an account, contact your site administrator.{% endif %}

### Authenticating to {% data variables.product.prodname_dotcom %}

To connect to {% data variables.product.prodname_desktop %} with {% data variables.product.prodname_dotcom %}, you'll need to authenticate your account. For more information, see [AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop).

After authenticating your account, you are ready to manage and contribute to projects with {% data variables.product.prodname_desktop %}.

## Part 3: Configuring Git

To start working with {% data variables.product.prodname_desktop %}, you need to configure the name and email associated with your Git commits. See [AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-git-for-github-desktop).

> [!NOTE] If you also want to use Git on the command line, you need to install Git yourself. The latest version of Git is available from https://git-scm.com/downloads.

## Part 4: Customizing {% data variables.product.prodname_desktop %}

You can adjust defaults and settings to tailor {% data variables.product.prodname_desktop %} to your needs.

### Choosing a default text editor

You can open a text editor from {% data variables.product.prodname_desktop %} to manipulate files and repositories. {% data variables.product.prodname_desktop %} supports a variety of text editors and integrated development environments (IDEs) for Windows and macOS. You can choose a default editor in the {% data variables.product.prodname_desktop %} settings. For more information, see [AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/configuring-a-default-editor-in-github-desktop).

### Choosing a theme

{% data variables.product.prodname_desktop %} has multiple themes available to customize the look and feel of the app. You can choose a theme in the {% data variables.product.prodname_desktop %} settings. For more information, see [AUTOTITLE](/desktop/configuring-and-customizing-github-desktop/setting-a-theme-for-github-desktop).
