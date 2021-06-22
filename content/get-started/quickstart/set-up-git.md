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
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'At the heart of {% data variables.product.product_name %} is an open source version control system (VCS) called Git. Git is responsible for everything {% data variables.product.product_name %}-related that happens locally on your computer.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---
## Using Git

To use Git on the command line, you'll need to download, install, and configure Git on your computer. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.product_name %} from the command line. For more information on {% data variables.product.prodname_cli %}, see the [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/) documentation.{% endif %}

If you want to work with Git locally, but don't want to use the command line, you can instead download and install the [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) client.  For more information, see "[Installing and configuring {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)."

If you don't need to work with files locally, {% data variables.product.product_name %} lets you complete many Git-related actions directly in the browser, including:

- [Creating a repository](/articles/create-a-repo)
- [Forking a repository](/articles/fork-a-repo)
- [Managing files](/articles/managing-files-on-github/)
- [Being social](/articles/be-social)

## Setting up Git

1. [Download and install the latest version of Git](https://git-scm.com/downloads).
2. [Set your username in Git](/github/getting-started-with-github/setting-your-username-in-git).
3. [Set your commit email address in Git](/articles/setting-your-commit-email-address).

## Next steps: Authenticating with {% data variables.product.prodname_dotcom %} from Git

When you connect to a {% data variables.product.product_name %} repository from Git, you'll need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH.

### Connecting over HTTPS (recommended)

If you [clone with HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), you can [cache your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git) using a credential helper.

### Connecting over SSH

If you [clone with SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls), you must [generate SSH keys](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) on each computer you use to push or pull from {% data variables.product.product_name %}.

## Celebrate

Congratulations, you now have Git and {% data variables.product.product_name %} all set up! You may now choose to create a repository where you can put your projects. This is a great way to back up your code and makes it easy to share the code around the world. For more information see "[Create a repository](/articles/create-a-repo)".

You can create a copy of a repository by forking it and propose the changes that you want to see without affecting the upstream repository. For more information see "[Fork a repository](/articles/fork-a-repo)."

Each repository in {% data variables.product.product_name %} is owned by a person or an organization. You can interact with the people, repositories, and organizations by connecting and following them on {% data variables.product.product_name %}. For more information see "[Be social](/articles/be-social)."

{% data reusables.support.connect-in-the-forum-bootcamp %}
