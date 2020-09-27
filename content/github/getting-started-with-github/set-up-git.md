---
title: Set up Git
redirect_from:
  - /git-installation-redirect/
  - /linux-git-installation/
  - /linux-set-up-git/
  - /mac-git-installation/
  - /mac-set-up-git/
  - /set-up-git-redirect/
  - /win-git-installation/
  - /win-set-up-git/
  - /articles/set-up-git
intro: 'At the heart of {{ site.data.variables.product.product_name }} is an open source version control system (VCS) called Git. Git is responsible for everything {{ site.data.variables.product.product_name }}-related that happens locally on your computer.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

To use Git on the command line, you'll need to download, install, and configure Git on your computer. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} You can also install {{ site.data.variables.product.prodname_cli }} to use {{ site.data.variables.product.product_name }} from the command line. For more information on {{ site.data.variables.product.prodname_cli }}, see the [{{ site.data.variables.product.prodname_cli }}](https://cli.github.com/manual/) documentation.{% endif %}

If you want to work with Git locally, but don't want to use the command line, you can instead download and install the [{{ site.data.variables.product.prodname_desktop }}]({{ site.data.variables.product.desktop_link }}) client.  For more information, see "[Installing and configuring {{ site.data.variables.product.prodname_desktop }}](/desktop/installing-and-configuring-github-desktop/)."

If you don't need to work with files locally, {{ site.data.variables.product.product_name }} lets you complete many Git-related actions directly in the browser, including:

- [Creating a repository](/articles/create-a-repo)
- [Forking a repository](/articles/fork-a-repo)
- [Managing files](/articles/managing-files-on-github/)
- [Being social](/articles/be-social)

### Setting up Git

1. [Download and install the latest version of Git](https://git-scm.com/downloads).
2. [Set your username in Git](/articles/setting-your-username-in-git).
3. [Set your commit email address in Git](/articles/setting-your-commit-email-address).

### Next steps: Authenticating with {{ site.data.variables.product.prodname_dotcom }} from Git

When you connect to a {{ site.data.variables.product.product_name }} repository from Git, you'll need to authenticate with {{ site.data.variables.product.product_name }} using either HTTPS or SSH.

#### Connecting over HTTPS (recommended)

If you [clone with HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), you can [cache your {{ site.data.variables.product.prodname_dotcom }} credentials in Git](/github/using-git/caching-your-github-credentials-in-git) using a credential helper.

#### Connecting over SSH

If you [clone with SSH](/articles/which-remote-url-should-i-use#cloning-with-ssh-urls), you must [generate SSH keys](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) on each computer you use to push or pull from {{ site.data.variables.product.product_name }}.

### Celebrate

Congratulations, you now have Git and {{ site.data.variables.product.product_name }} all set up! What do you want to do next?

- **Set up Git**
- "[Create a repository](/articles/create-a-repo)"
- "[Fork a repository](/articles/fork-a-repo)"
- "[Be social](/articles/be-social)"
- {{ site.data.reusables.support.connect-in-the-forum-bootcamp }}
