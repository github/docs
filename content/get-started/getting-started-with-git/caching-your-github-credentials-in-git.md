---
title: Caching your GitHub credentials in Git
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'If you''re [cloning {% data variables.product.product_name %} repositories using HTTPS](/github/getting-started-with-github/about-remote-repositories), we recommend you use {% data variables.product.prodname_cli %} or a Git credential helper to authenticate and to remember your credentials.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Caching credentials
---

{% tip %}

**Tip:** If you clone {% data variables.product.product_name %} repositories using SSH, then you  can authenticate using an SSH key instead of using other credentials. For information about setting up an SSH connection, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh)."

{% endtip %}

## {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} works cooperatively with Git on your command line. It helps you log in to {% data variables.product.product_name %}, and automatically stores your Git credentials for you. Choose `HTTPS` as your preferred protocol for Git operations and answer "yes" to the prompt asking if you would like to authenticate to Git with your {% data variables.product.product_name %} credentials.

1. [Install](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} on macOS, Windows, or Linux.
1. In the command line, enter `gh auth login`, then follow the prompts.
   * When prompted for your preferred protocol for Git operations, select `HTTPS`.
   * When asked if you would like to authenticate to Git with your {% data variables.product.product_name %} credentials, enter `Y`.

For more information about authenticating with {% data variables.product.prodname_cli %}, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Git Credential Manager

[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager) (GCM) extends your Git installation. On Git's behalf, it helps you log in to {% data variables.product.product_name %}, including 2FA (two-factor authentication), and stores your credentials securely. Or, if you have manually [created and stored a {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), GCM can store that token securely, and provided it to {% data variables.product.product_name %} automatically when needed. In Git terms, GCM is an [OAuth credential helper](https://git-scm.com/docs/gitcredentials).

{% mac %}

1. Install Git using [Homebrew](https://brew.sh/):

   ```shell
   brew install git
   ```

1. Install GCM using Homebrew:

   ```shell
   brew install --cask git-credential-manager
   ```

  For macOS, you don't need to run `git config` because GCM automatically configures Git for you.

{% data reusables.gcm-core.next-time-you-clone %}

Once you've authenticated successfully, your credentials are stored in the macOS keychain and will be used every time you clone an HTTPS URL. Git will not require you to type your credentials in the command line again unless you change your credentials.

{% endmac %}

{% windows %}

1. Install Git for Windows, which includes GCM. For more information, see "[Git for Windows releases](https://github.com/git-for-windows/git/releases/latest)" from its [releases page](https://github.com/git-for-windows/git/releases/latest).

We recommend always installing the latest version. At a minimum, install version 2.29 or higher, which is the first version offering OAuth support for GitHub.

{% data reusables.gcm-core.next-time-you-clone %}

Once you've authenticated successfully, your credentials are stored in the Windows credential manager and will be used every time you clone an HTTPS URL. Git will not require you to type your credentials in the command line again unless you change your credentials.

<br>

{% warning %}

**Warning:** Older versions of Git for Windows came with Git Credential Manager for Windows. This older product is no longer supported and cannot connect to GitHub via OAuth. We recommend you upgrade to [the latest version of Git for Windows](https://github.com/git-for-windows/git/releases/latest).

{% endwarning %}

{% warning %}

**Warning:** If you cached incorrect or outdated credentials in Credential Manager for Windows, Git will fail to access {% data variables.product.product_name %}. To reset your cached credentials so that Git prompts you to enter your credentials, access the Credential Manager in the Windows Control Panel under User Accounts > Credential Manager. Look for the {% data variables.product.product_name %} entry and delete it.

{% endwarning %}

{% endwindows %}

{% linux %}

For Linux, install Git and GCM, then configure Git to use GCM.

1. Install Git from your distro's packaging system. Instructions will vary depending on the flavor of Linux you run.

1. Install GCM. See the [instructions in the GCM repo](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/install.md), as they'll vary depending on the flavor of Linux you run.

1. Configure Git to use GCM. There are several backing stores that you may choose from, so see the GCM docs to complete your setup. For more information, see "[GCM Linux](https://aka.ms/gcmcore-linuxcredstores)."

{% data reusables.gcm-core.next-time-you-clone %}

Once you've authenticated successfully, your credentials are stored on your system and will be used every time you clone an HTTPS URL. Git will not require you to type your credentials in the command line again unless you change your credentials.

For more options for storing your credentials on Linux, see [Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) in Pro Git.

{% endlinux %}

<br>

For more information or to report issues with GCM, see the official GCM docs at "[Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager)."

## Other Git credential helpers

There are [many Git credential helpers](https://git-scm.com/doc/credential-helpers). Those which can authenticate via OAuth might well serve to authenticate to Git with your {% data variables.product.product_name %} credentials. Note that a Git installation can work with multiple credential helpers — it tries each in turn, until one gets it access. Thus you can perhaps add a credential helper for {% data variables.product.product_name %} to your existing helpers. Follow the instructions for the helper, and the [Git credentials documentation](https://git-scm.com/docs/gitcredentials), to configure the helper.

OAuth credential helpers will get you immediate access to your own repos. If you work with repos controlled by an organization, or with your forks and clones of those repos, then two extra steps are necessary.

1. You must request that organization's approval for OAuth access by your helper. See "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps)".
2. The organization must approve access. See "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization)".

Access is pre-authorized for {% data variables.product.prodname_cli %} and Git Credential Manager. If you use those tools, you do not need to request approval.

{% tip %}

**Tip:** If you use a Git command which requires access to an organization's repo (e.g. `git fetch`), and your helper seems to authenticate correctly, but the command fails with an error, then check that you have received the organization's approval for OAuth access by that app. The error may say something like:

```text
remote: Repository not found.
fatal: repository 'https://github.com/User/repo.git/' not found
```

{% endtip %}
