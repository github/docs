---
title: 在 HTTPS 端口使用 SSH
intro: '有时，防火墙会完全拒绝允许 SSH 连接。  如果无法选择使用[具有凭据缓存的 HTTPS 克隆](/github/getting-started-with-github/caching-your-github-credentials-in-git)，可以尝试使用通过 HTTPS 端口建立的 SSH 连接克隆。  大多数防火墙规则应允许此操作，但代理服务器可能会干扰。'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
ms.openlocfilehash: 24a56147129e68c674eaf8dc733a203e2b03348a
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190320'
---
{% tip %}

{% data variables.product.prodname_ghe_server %} 用户：目前不支持经 SSH 通过 HTTPS 端口访问 {% data variables.product.prodname_ghe_server %}。

{% endtip %}

要测试通过 HTTPS 端口的 SSH 是否可行，请运行以下 SSH 命令：

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

注意：端口 443 的主机名为 `ssh.{% data variables.command_line.backticks %}`，而不是 `{% data variables.command_line.backticks %}`。

{% endnote %}

如果这样有效，万事大吉！ 否则，可能需要[遵循我们的故障排除指南](/articles/error-permission-denied-publickey)。

现在，若要克隆存储库，可以运行以下命令：

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## 启用通过 HTTPS 的 SSH 连接

如果你能在端口 443 上通过 SSH 连接到 `git@ssh.{% data variables.command_line.backticks %}`，则可覆盖你的 SSH 设置来强制与 {% data variables.location.product_location %} 的任何连接均通过该服务器和端口运行。

要在 SSH 配置文件中设置此行为，请在 `~/.ssh/config` 编辑该文件，并添加以下部分：

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

你可以通过再次连接到 {% data variables.location.product_location %} 来测试这是否有效：

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## 更新已知主机

在切换到端口 443 后第一次与 GitHub 交互时，你可能会收到一条警告消息，指出在 `known_hosts` 中找不到主机，或者该主机由其他名称找到。

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

假设 SSH 指纹与 GitHub 发布的指纹之一匹配，那么可以针对这个问题安全地回答“是”。 有关指纹列表，请参阅“[Github 的 SSH 密钥指纹](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)”。
