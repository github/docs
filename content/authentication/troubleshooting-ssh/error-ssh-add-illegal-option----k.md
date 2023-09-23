---
title: 'Error: ssh-add: illegal option -- K'
intro: 'This error means your version of `ssh-add` does not support macOS keychain integration, which allows you to store your passphrase in the keychain.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssh-add-illegal-option----k
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 'ssh-add: illegal option -- K'
---
The `-K` option is in Apple's standard version of `ssh-add`, which stores the passphrase in your keychain for you when you add an ssh key to the ssh-agent. If you have installed a different version of `ssh-add`, it may lack support for `-K`.

## Solving the issue

To add your SSH private key to the ssh-agent, you can specify the path to the Apple version of `ssh-add`:


```shell
  /usr/bin/ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```
  {% note %}

   **Note:** The `--apple-use-keychain` option stores the passphrase in your keychain for you when you add an SSH key to the ssh-agent. If you chose not to add a passphrase to your key, run the command without the `--apple-use-keychain` option.

   The `--apple-use-keychain` option is in Apple's standard version of `ssh-add`. In MacOS versions prior to Monterey (12.0), the `--apple-use-keychain` and `--apple-load-keychain` flags used the syntax `-K` and `-A`, respectively.

  If you don't have Apple's standard version of `ssh-add` installed, you may receive an error. For more information, see "[Error: ssh-add: illegal option -- K](/articles/error-ssh-add-illegal-option-k)."

  If you continue to be prompted for your passphrase, you may need to add the command to your `~/.zshrc` file (or your `~/.bashrc` file for bash).

   {% endnote %}
   
{% note %}

**Note:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## Further reading

- "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"
- [Linux man page for SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- To view Apple's man page for SSH-ADD, run `man ssh-add` in Terminal
