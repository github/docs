---
title: 'Error: ssh-add: illegal option -- K'
intro: 'This error means your version of `ssh-add` does not support macOS keychain integration, which allows you to store your passphrase in the keychain.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

The `-K` option is in Apple's standard version of `ssh-add`, which stores the passphrase in your keychain for you when you add an ssh key to the ssh-agent. If you have installed a different version of `ssh-add`, it may lack support for `-K`.

### Solving the issue

To add your SSH private key to the ssh-agent, you can specify the path to the Apple version of `ssh-add`:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_rsa
```

{% note %}

**Note:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

### Further reading

- "[Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"
- [Linux man page for SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- To view Apple's man page for SSH-ADD, run `man ssh-add` in Terminal
