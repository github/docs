---
title: '错误：代理承认没有签署'
intro: '在极少数情况下，在 Linux 上通过 SSH 连接 {% data variables.product.product_name %} 会产生错误“Agent admitted failure to sign using the key”（代理承认没有使用密钥签署）。 请遵循以下步骤解决此问题。'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key/
  - /articles/error-agent-admitted-failure-to-sign
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ssh
---

在 Linux 上尝试将通过 SSH 连接到 {% data variables.product.product_location %} 时，可能在终端上看到以下信息：

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

更多详细信息请参阅<a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>本问题报告</a>。

### 解决方法

通过使用 `ssh-add` 将密钥加载到 SSH 代理，应该能够修复此错误：

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identity added: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

如果密钥没有默认文件名 (`/.ssh/id_rsa`)，必须将该路径传递到 `ssh-add`：

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identity added: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
