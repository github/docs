---
title: 错误：文件编号错误
intro: 此错误通常表示您无法连接到服务器。 这通常由防火墙和代理服务器造成。
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
运行远程 Git 命令或 SSH 时，您的连接可能会超时：

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

### 解决问题

#### 使用 HTTPS

通常，最简单的解决方案是完全避免使用 SSH。 大多数防火墙和代理都允许无问题的 HTTPS 流量。 要利用此解决方案，请更改正在使用的[远程 URL](/github/getting-started-with-github/about-remote-repositories)：

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>reponame</em>.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

#### 从不同的网络测试

如果您将计算机连接至五防火墙的其他网络，可尝试测试到 {% data variables.product.product_name %} 的 SSH 连接。 如果一切正常，请与网络管理员联系，获取有关更改防火墙设置的帮助，以使到 {% data variables.product.product_name %} 的 SSH 连接成功。

{% if currentVersion == "free-pro-team@latest" %}

#### 在 HTTPS 端口使用 SSH

如果使用 HTTPS 不是一个选项，并且防火墙管理员拒绝允许 SSH 连接，则可以尝试使用 [HTTPS 端口上的 SSH](/articles/using-ssh-over-the-https-port) 来代替。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### 延伸阅读

- "[连接问题故障排除](/articles/troubleshooting-connectivity-problems)"

{% endif %}
