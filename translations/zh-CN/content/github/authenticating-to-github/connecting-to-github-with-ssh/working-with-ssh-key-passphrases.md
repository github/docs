---
title: 使用 SSH 密钥密码
intro: 您可以保护 SSH 密钥并配置身份验证代理，这样您就不必在每次使用 SSH 密钥时重新输入密码。
redirect_from:
  - /ssh-key-passphrases/
  - /working-with-key-passphrases/
  - /articles/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/working-with-ssh-key-passphrases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

使用 SSH 密钥时，如果有人获得您计算机的访问权限，他们也可以使用该密钥访问每个系统。 要添加额外的安全层，可以向 SSH 密钥添加密码。 您可以使用 `ssh-agent` 安全地保存密码，从而不必重新输入。

### 添加或更改密码

通过输入以下命令，您可以更改现有私钥的密码而无需重新生成密钥对：

```shell
$ ssh-keygen -p -f ~/.ssh/id_ed25519
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

如果您的密钥已有密码，系统将提示您输入该密码，然后才能更改为新密码。

{% windows %}

### 在 Git for Windows 上自动启动 `ssh-agent`

您可以在打开 bash 或 Git shell 时自动运行 `ssh-agent`。 复制以下行并将其粘贴到 Git shell 中的 `~/.profile` 或 `~/.bashrc` 文件中：

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

如果您的私钥没有存储在默认位置之一（如 `~/.ssh/id_rsa`），您需要告知 SSH 身份验证代理其所在位置。 要将密钥添加到 ssh-agent，请输入 `ssh-add ~/path/to/my_key`。 更多信息请参阅“[生成新的 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)”

{% tip %}

**提示：**如果想要 `ssh-agent` 在一段时间后忘记您的密钥，可通过运行 `ssh-add -t <seconds>` 进行配置。

{% endtip %}

现在，当您初次运行 Git Bash 时，系统将提示您输入密码：

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/<em>you</em>/.ssh/id_rsa:
> Identity added: /c/Users/<em>you</em>/.ssh/id_rsa (/c/Users/<em>you</em>/.ssh/id_rsa)
> Welcome to Git (version <em>1.6.0.2-preview20080923</em>)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

`ssh-agent` 进程将继续运行，直到您注销、关闭计算机或终止该进程。

{% endwindows %}

{% mac %}

### 在密钥链中保存密码

在 Mac OS X Leopard 上通过 OS X El Capitan，这些默认私钥文件将自动处理：

- *.ssh/id_rsa*
- *.ssh/identity*

初次使用密钥时，系统将提示您输入密码。 如果选择使用密钥链保存密码，则无需再次输入密码。

否则，您可在将密钥添加到 ssh-agent 时在密钥链中存储密码。 更多信息请参阅“[添加 SSH 密钥到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)”。

{% endmac %}

### 延伸阅读

- "[关于 SSH](/articles/about-ssh)"
