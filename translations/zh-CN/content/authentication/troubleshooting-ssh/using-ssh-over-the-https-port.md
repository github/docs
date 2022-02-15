---
title: 在 HTTPS 端口使用 SSH
intro: '有时，防火墙会完全拒绝允许 SSH 连接。  如果无法选择使用[具有凭据缓存的 HTTPS 克隆](/github/getting-started-with-github/caching-your-github-credentials-in-git)，您可以尝试使用通过 HTTPS 端口建立的 SSH 连接克隆。  大多数防火墙规则应允许此操作，但代理服务器可能会干扰。'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 在 HTTPS 端口使用 SSH
---

{% tip %}

**{% data variables.product.prodname_ghe_server %} 用户**：目前不支持经 SSH 通过 HTTPS 端口访问 {% data variables.product.prodname_ghe_server %}。

{% endtip %}

要测试通过 HTTPS 端口的 SSH 是否可行，请运行以下 SSH 命令：

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

如果这样有效，万事大吉！ 如果无效，您可能需要[遵循我们的故障排除指南](/articles/error-permission-denied-publickey)。

## 启用通过 HTTPS 的 SSH 连接

如果您能在端口 443 上通过 SSH 连接到 `git@ssh.{% data variables.command_line.backticks %}`，则可以覆盖您的 SSH 设置以强制与 {% data variables.product.product_location %} 的任何连接均通过该服务器和端口运行。

To set this in your SSH confifguration file, edit the file at `~/.ssh/config`, and add this section:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

您可以通过再次连接到 {% data variables.product.product_location %} 测试此项是否有效：

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```
