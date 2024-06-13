---
title: Set up Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
  - /get-started/quickstart/set-up-git
intro: 'At the heart of {% data variables.product.prodname_dotcom %} is an open-source version control system (VCS) called Git. Git is responsible for everything {% data variables.product.prodname_dotcom %}-related that happens locally on your computer.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---
## Using Git

To use Git on the command line, you will need to download, install, and configure Git on your computer. You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.prodname_dotcom %} from the command line. For more information, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)."

If you want to work with Git locally, but do not want to use the command line, you can download and install the [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) client.  For more information, see "[AUTOTITLE](/desktop/overview/about-github-desktop)."

If you do not need to work with files locally, {% data variables.product.product_name %} lets you complete many Git-related actions directly in the browser, including:

* [AUTOTITLE](/repositories/creating-and-managing-repositories/quickstart-for-repositories)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
* [Managing files](/repositories/working-with-files/managing-files)

## Setting up Git

1. [Download and install the latest version of Git](https://git-scm.com/downloads).

   {% note %}

   **Note**: Most Chrome OS devices from 2020 onwards now have a built-in Linux environment, which includes Git. To enable it, go to the Launcher, search for Linux, and click **Turn on**.

   If you are using an older Chrome OS device, another method is required:

   1. Install a terminal emulator such as Termux from the Google Play Store on your Chrome OS device.
   1. From the terminal emulator that you installed, install Git. For example, in Termux, enter `apt install git` and then type `y` when prompted.

   {% endnote %}

1. [Set your username in Git](/get-started/getting-started-with-git/setting-your-username-in-git).
1. [Set your commit email address in Git](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address).

## Authenticating with {% data variables.product.prodname_dotcom %} from Git

When you connect to a {% data variables.product.prodname_dotcom %} repository from Git, you will need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH.

{% note %}

**Note:** You can authenticate to {% data variables.product.product_name %} using {% data variables.product.prodname_cli %}, for either HTTP or SSH. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Connecting over HTTPS (recommended)

If you clone with HTTPS, you can cache your {% data variables.product.prodname_dotcom %} credentials in Git using a credential helper. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)" and "[AUTOTITLE](/get-started/getting-started-with-git/caching-your-github-credentials-in-git)."

### Connecting over SSH

If you clone with SSH, you must generate SSH keys on each computer you use to push or pull from {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/about-remote-repositories#cloning-with-ssh-urls)" and "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

## Next steps

You now have Git and {% data variables.product.prodname_dotcom %} all set up. You may now choose to create a repository where you can put your projects. Saving your code in a repository allows you to back up your code and share it around the world.

* {% data reusables.getting-started.create-a-repository %}

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
