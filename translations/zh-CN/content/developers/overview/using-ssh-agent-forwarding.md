---
title: 使用 SSH 代理转发
intro: 为简化向服务器的部署，您可以设置 SSH 代理转发以安全地使用本地 SSH 密钥。
redirect_from:
  - /guides/using-ssh-agent-forwarding
  - /v3/guides/using-ssh-agent-forwarding
  - /articles/using-ssh-agent-forwarding
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: SSH 代理转发
---



SSH 代理转发可用于简化向服务器的部署。  它允许您使用本地 SSH 密钥，而不是将密钥（不带密码！）放在服务器上。

如果已设置 SSH 密钥 来与 {% data variables.product.product_name %} 交互，您可能已经熟悉了 `ssh-agent`。 这是一个在后台运行的程序，它将密钥加载到内存中，因此您不需要每次使用密钥时都输入密码。 最妙的是，您可以选择让服务器访问您的本地 `ssh-agent`，就像它们已经在服务器上运行一样。 这有点像要求朋友输入他们的密码，以便您可以使用他们的计算机。

有关 SSH 代理转发的更详细说明，请参阅 [Steve Friedl 的技术提示指南][tech-tips]。

## 设置 SSH 代理转发

确保您自己的 SSH 密钥已设置并正常运行。 如果您还没有 SSH 密钥，请使用[我们的 SSH 密钥生成指南][generating-keys]。

您可以在终端输入 `ssh -T git@{% ifversion ghes or ghae %}主机名{% else %}github.com{% endif %}` 来测试您的本地密钥是否有效：

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide
> shell access.
```

开局不错。 让我们设置 SSH 以允许代理转发到您的服务器。

1. 使用您喜欢的文本编辑器打开位于 `~/.ssh/config` 的文件。 如果此文件不存在，您可以通过在终端输入 `touch ~/.ssh/config` 来创建它。

2. 在文件中输入以下文本，将 `example.com` 替换为服务器的域名或 IP：
   
        Host example.com
          ForwardAgent yes

{% warning %}

**警告：**您可能想使用 `Host *` 这样的通配符将此设置应用于所有 SSH 连接。 但这并不是一个好主意，因为您将与 SSH 到的*每台*服务器共享您的本地 SSH 密钥。 它们无法直接访问密钥，但是在建立连接后，它们可以*像您一样*使用这些密钥。 **您应该只添加您信任的服务器以及打算用于代理转发的服务器。**

{% endwarning %}

## 测试 SSH 代理转发

要测试代理转发是否对您的服务器有效，您可以 SSH 到服务器，然后再次运行 `ssh -T git@{% ifversion ghes or ghae %}主机名{% else %}github.com{% endif %}`。  如果一切正常，您将收到与本地使用相同的提示。

如果不确定是否在使用本地密钥，您还可以检查服务器上的 `SSH_AUTH_SOCK` 变量：

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

如果未设置变量，则表示代理转发不起作用：

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> <em>[No output]</em>
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

## SSH 代理转发疑难解答

以下是排查 SSH 代理转发时需要注意的一些事项。

### 您必须使用 SSH URL 检出代码

SSH 转发仅适用于 SSH URL，而不是 HTTP(s) URL。 检查服务器上的 `.git/config` 文件，并确保 URL 是 SSH 样式的 URL，如下所示：

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### 您的 SSH 密钥必须在本地有效

在通过代理转发使密钥起作用之前，它们必须首先在本地有效。 [我们的 SSH 密钥生成指南][generating-keys]可帮助您在本地设置 SSH 密钥。

### 您的系统必须允许 SSH 代理转发

有时，系统配置不允许 SSH 代理转发。 您可以通过在终端中输入以下命令来检查是否正在使用系统配置文件：

```shell
$ ssh -v <em>example.com</em>
# Connect to example.com with verbose debug output
> OpenSSH_8.1p1, LibreSSL 2.7.3</span>
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

在上面的示例中，先加载 `~/.ssh/config` 文件，然后读取 `/etc/ssh_config` 文件。  通过运行以下命令，我们可以检查该文件以查看它是否覆盖了我们的选项：

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

在此示例中，我们的 `/etc/ssh_config` 文件特别表示 `ForwardAgent no`，这是一种阻止代理转发的方式。 从文件中删除此行应该会使代理转发再次起作用。

### 您的服务器必须允许入站连接上的 SSH 代理转发

代理转发也可能在您的服务器上被阻止。 您可以通过 SSH 到服务器并运行 `sshd_config` 来检查是否允许代理转发。 此命令的输出应指示 `AllowAgentForwarding` 已设置。

### 您的本地 `ssh-agent` 必须正在运行

在大多数计算机上，操作系统会自动为您启动 `ssh-agent`。  但是在 Windows 上，您需要手动执行此操作。 我们提供了[在每次打开 Git Bash 时如何启动 `ssh-agent` 的指南][autolaunch-ssh-agent]。

要验证 `ssh-agent` 是否正在您的计算机上运行，请在终端中键入以下命令：

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### 您的密钥必须可用于 `ssh-agent`

您可以通过运行以下命令来检查您的密钥是否对 `ssh-agent` 可见：

```shell
ssh-add -L
```

如果命令说没有身份可用，则需要添加密钥：

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

在 MacOS 上，一旦在重新引导过程中重新启动 `ssh-agent`，它将“忘记”该密钥。 但是，您可以使用此命令将 SSH 密钥导入密钥链：

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
