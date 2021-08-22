---
title: Caching your GitHub credentials in Git
redirect_from:
  - /firewalls-and-proxies/
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'If you''re [cloning {% data variables.product.product_name %} repositories using HTTPS](/github/getting-started-with-github/about-remote-repositories), we recommend you use Git Credential Manager Core (GCM Core) to remember your credentials.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Caching credentials
---

{% tip %}

**Tip:** If you clone {% data variables.product.product_name %} repositories using SSH, then you  can authenticate using an SSH key instead of using other credentials. For information about setting up an SSH connection, see "[Generating an SSH Key](/articles/generating-an-ssh-key)."

{% endtip %}

[Git Credential Manager Core](https://github.com/microsoft/Git-Credential-Manager-Core) (GCM Core) is our recommended way to store your credentials securely and connect to GitHub over HTTPS. With GCM Core, you don't have to manually [create and store a PAT](/github/authenticating-to-github/creating-a-personal-access-token), as GCM Core manages authentication on your behalf, including 2FA (two-factor authentication).

{% mac %}

1. Install Git using [Homebrew](https://brew.sh/):
  ```shell
  $ brew install git
  ```

2. Install GCM Core using Homebrew:
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  For MacOS, you don't need to run `git config` because GCM Core automatically configures Git for you.

{% data reusables.gcm-core.next-time-you-clone %}

Once you've authenticated successfully, your credentials are stored in the macOS keychain and will be used every time you clone an HTTPS URL. Git will not require you to type your credentials in the command line again unless you change your credentials.

{% endmac %}

{% windows %}

1. Install Git for Windows, which includes GCM Core. For more information, see "[Git for Windows releases](https://github.com/git-for-windows/git/releases/latest)" from its [releases page](https://github.com/git-for-windows/git/releases/latest).

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

For Linux, install Git and GCM Core, then configure Git to use GCM Core.

1. Install Git from your distro's packaging system. Instructions will vary depending on the flavor of Linux you run.

2. Install GCM Core. See the [instructions in the GCM Core repo](https://github.com/microsoft/Git-Credential-Manager-Core#linux-install-instructions), as they'll vary depending on the flavor of Linux you run.

3. Configure Git to use GCM Core. There are several backing stores that you may choose from, so see the GCM Core docs to complete your setup. For more information, see "[GCM Core Linux](https://aka.ms/gcmcore-linuxcredstores)."

{% data reusables.gcm-core.next-time-you-clone %}

Once you've authenticated successfully, your credentials are stored on your system and will be used every time you clone an HTTPS URL. Git will not require you to type your credentials in the command line again unless you change your credentials.

For more options for storing your credentials on Linux, see [Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) in Pro Git.

{% endlinux %}

<br>

For more information or to report issues with GCM Core, see the official GCM Core docs at "[Git Credential Manager Core](https://github.com/microsoft/Git-Credential-Manager-Core)."
