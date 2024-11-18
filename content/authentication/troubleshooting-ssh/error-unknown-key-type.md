---
title: 'Error: Unknown key type'
intro: 'This error means that the SSH key type you used was unrecognized or is unsupported by your SSH client. '
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
---
## About the `unknown key type` error

When you generate a new SSH key, you may receive an `unknown key type` error if your SSH client does not support the key type that you specify.{% mac %}To solve this issue on macOS, you can update your SSH client or install a new SSH client.

## Prerequisites

You must have Homebrew installed. For more information, see the [installation guide](https://docs.brew.sh/Installation) in the Homebrew documentation.

## Solving the issue

{% warning %}

**Warning:** If you install OpenSSH, your computer will not be able to retrieve passphrases that are stored in the Apple keychain. You will need to enter your passphrase or interact with your hardware security key every time you authenticate with SSH to {% data variables.product.prodname_dotcom %} or another web service.

If you remove OpenSSH, the passphrases that are stored in your keychain will once again be retrievable. You can remove OpenSSH by entering the command `brew uninstall openssh` in Terminal.

{% endwarning %}

1. Open Terminal.
1. Enter the command `brew install openssh`.
1. Quit and relaunch Terminal.
1. Try the procedure for generating a new SSH key again. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)."

{% endmac %}{% linux %}To solve this issue on Linux, use the package manager for your Linux distribution to install a new version of OpenSSH, or compile a new version from source. If you install a different version of OpenSSH, the ability of other applications to authenticate via SSH may be affected. For more information, review the documentation for your distribution.{% endlinux %}
