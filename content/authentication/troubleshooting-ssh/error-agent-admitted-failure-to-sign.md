---
title: 'Error: Agent admitted failure to sign'
intro: 'In rare circumstances, connecting to {% data variables.product.product_name %} via SSH on Linux produces the error `"Agent admitted failure to sign using the key"`. Follow these steps to resolve the problem.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/troubleshooting-ssh/error-agent-admitted-failure-to-sign
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Agent failure to sign
---
When trying to SSH into {% data variables.location.product_location %} on a Linux computer, you may see the following message in your terminal:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

For more details, see <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>this issue report</a>.

## Resolution

You should be able to fix this error by loading your keys into your SSH agent with `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/YOU/.ssh/id_rsa: [tippy tap]
> Identity added: /home/YOU/.ssh/id_rsa (/home/YOU/.ssh/id_rsa)
```

If your key does not have the default filename (`/.ssh/id_rsa`), you'll have to pass that path to `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/YOU/.ssh/my_other_key: [tappity tap tap]
> Identity added: /home/YOU/.ssh/my_other_key (/home/YOU/.ssh/my_other_key)
```
