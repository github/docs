---
title: 'Error: Unknown key type'
intro: This error means that the SSH key type you used was unrecognized or is unsupported by your SSH client.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
  github-ae: next
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
---

### About the `unknown key type` error

When you generate a new SSH key, you may receive an `unknown key type` error if your SSH client does not support the key type that you specify.{% mac %}To solve this issue on macOS, you can update your SSH client or install a new SSH client.

### 必要な環境

You must have Homebrew installed. For more information, see the [installation guide](https://docs.brew.sh/Installation) in the Homebrew documentation.

### 問題の解決

{% warning %}

**Warning:** If you install OpenSSH, your computer will not be able to retrieve passphrases that are stored in the Apple keychain. You will need to enter your passphrase or interact with your hardware security key every time you authenticate with SSH to {% data variables.product.prodname_dotcom %} or another web service.

If you remove OpenSSH, the passphrases that are stored in your keychain will once again be retrievable. You can remove OpenSSH by entering the command `brew uninstall openssh` in Terminal.

{% endwarning %}

1. ターミナルを開きます。
2. Enter the command `brew install openssh`.
3. Quit and relaunch Terminal.
4. Try the procedure for generating a new SSH key again. 詳しい情報については、「[新しい SSH キーを生成して ssh-agent に追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)」を参照してください。

{% endmac %}{% linux %}To solve this issue on Linux, use the package manager for your Linux distribution to install a new version of OpenSSH, or compile a new version from source. If you install a different version of OpenSSH, the ability of other applications to authenticate via SSH may be affected. For more information, review the documentation for your distribution.{% endlinux %}
