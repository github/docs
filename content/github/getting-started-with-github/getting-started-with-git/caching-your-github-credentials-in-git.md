---
title: Caching your GitHub credentials in Git
redirect_from:
  - /firewalls-and-proxies/
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
intro: 'If you''re [cloning {% data variables.product.product_name %} repositories using HTTPS](/github/getting-started-with-github/about-remote-repositories), you can use a credential helper to tell Git to remember your credentials.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
If you clone {% data variables.product.product_name %} repositories using SSH, then you authenticate using an SSH key instead of using other credentials. For information about setting up an SSH connection, see "[Generating an SSH Key](/articles/generating-an-ssh-key)."

{% mac %}

{% tip %}

**Tips:**

- You need Git **1.7.10** or newer to use the osxkeychain credential helper.
- If you installed Git using [Homebrew](http://brew.sh/), the `osxkeychain helper` will already be installed.
- If you're running Mac OS X 10.7 and above and you installed Git through Apple's Xcode Command Line Tools, then `osxkeychain helper` is automatically included in your Git installation.

{% endtip %}

Install Git and the `osxkeychain helper` and tell Git to use it.

1. Find out if Git and the `osxkeychain helper` are already installed:
  ```shell
  $ git credential-osxkeychain
  # Test for the cred helper
  > Usage: git credential-osxkeychain &lt;get|store|erase>
  ```
2. If the `osxkeychain helper` isn't installed and you're running OS X version 10.9 or above, your computer will prompt you to download it as a part of the Xcode Command Line Tools:
  ```shell
  $ git credential-osxkeychain
  > xcode-select: note: no developer tools were found at '/Applications/Xcode.app',
  > requesting install. Choose an option in the dialog to download the command line developer tools.
  ```

 Alternatively,  you can install Git and the `osxkeychain helper` by using [Homebrew](http://brew.sh/):
  ```shell
  $ brew install git
  ```

4. Tell Git to use `osxkeychain helper` using the global `credential.helper` config:
  ```shell
  $ git config --global credential.helper osxkeychain
  # Set git to use the osxkeychain credential helper
  ```

The next time you clone an HTTPS URL that requires authentication, Git will prompt you for your username and password. {% data reusables.user_settings.password-authentication-deprecation %}

Once you've authenticated successfully, your credentials are stored in the macOS keychain and will be used every time you clone an HTTPS URL. You won't be required to type your credentials in to Git again unless you change your credentials.

{% endmac %}

{% windows %}

{% tip %}

**Tip:** You need Git **1.7.10** or newer to use the credential helper.

{% endtip %}

You can also install a native Git shell, such as [Git for Windows](https://git-for-windows.github.io/). With Git for Windows, running the following in the command line will store your credentials:

```shell
$ git config --global credential.helper wincred
```

{% endwindows %}

{% linux %}

{% tip %}

**Tip:** You need Git **1.7.10** or newer to use the credential helper.

{% endtip %}

Turn on the credential helper so that Git will save your password in memory for some time. By default, Git will cache your password for 15 minutes.

1. In Terminal, enter the following:
  ```shell
  $ git config --global credential.helper cache
  # Set git to use the credential memory cache
  ```
2. To change the default password cache timeout, enter the following:
  ```shell
  $ git config --global credential.helper 'cache --timeout=3600'
  # Set the cache to timeout after 1 hour (setting is in seconds)
  ```

{% endlinux %}

### Further reading

- "[Updating credentials from the OSX Keychain](/articles/updating-credentials-from-the-osx-keychain/)"
- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)"
