---
title: 错误：权限被拒绝（公钥）
intro: “权限被拒绝”错误表示服务器拒绝了您的连接。 可能有多个原因，最常见的如下所述。
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-denied-publickey
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied (publickey)
---

## `sudo` 命令或提升权限应该与 Git 一起使用吗？

您不应将 `sudo` 命令或提升的权限（如管理员权限）与 Git 一起使用。 如果有*很好的原因*必须使用 `sudo`，请确保对每个命令使用它（可能使用 `su` 获取 shell 作为该点的根更好）。 如果[生成 SSH 密钥](/articles/generating-an-ssh-key)而不使用 `sudo`，则尝试使用 `sudo git push` 而不使用生成的相同密钥。

## 检查是否连接到正确的服务器

我们知道，键入 Url 很麻烦。 请注意您键入的内容；您无法连接到 "githib.com" 或 "guthub.com"。 有某些情况下，公司网络可能导致解析 DNS 记录有问题。

为确保连接到正确的域，可以输入以下命令：

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} port 22.
```

应连接端口 22{% ifversion fpt or ghec %}，除非覆盖设置以使用[通过 HTTPS 的 SSH](/articles/using-ssh-over-the-https-port){% endif %}。

## 始终使用 "git" 用户

所有连接（包括远程 URL 的连接）必须以 "git" 用户进行。 如果尝试以 {% data variables.product.product_name %} 用户名连接，将会失败：

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
如果连接失败且您通过 {% data variables.product.product_name %} 用户名使用远程 URL，可以[更改远程 URL 以使用 "git" 用户](/github/getting-started-with-github/managing-remote-repositories)。

应键入以下命令来验证连接：

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

## 确保您有使用的密钥

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 确认您的私钥已生成并加载到 SSH。
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. 确认您的私钥已生成并加载到 SSH。
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 确认您的私钥已生成并加载到 SSH。
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```


{% endlinux %}

`ssh-add` 命令*应*印出一个长的数字和字母字符串。 如果未印出任何内容，则需要[生成新 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)并将其与 {% data variables.product.product_name %} 关联。

{% tip %}

**提示**：在大多数系统中，默认私钥（`~/.ssh/id_rsa` 和 `~/.ssh/identity`）会自动添加到 SSH 身份验证代理中。 应无需运行 `ssh-add path/to/key`，除非在生成密钥时覆盖文件名。

{% endtip %}

### 获取更多详细信息

也可尝试连接 `git@{% data variables.command_line.backticks %}` 来检查使用的密钥：

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_rsa
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

在该示例中，我们没有任何密钥供 SSH 使用。 "identity file" 行末的 "-1" 表示 SSH 找不到可使用的文件。 后面的 "Trying private key" 行也表示未找到文件。 如果文件存在，这些行将分别是 "1" 和 "Offering public key"：

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/<em>you</em>/.ssh/id_rsa
```

## 确认公钥已附加到您的帐户

必须向 {% data variables.product.product_name %} 提供公钥才可建立安全连接。

{% mac %}

1. 打开终端。
2. 在后台启动 SSH 代理程序。
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. 找到并记录公钥指纹。
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
6. 比较 SSH 公钥列表与 `ssh-add` 命令的输出。 ![{% data variables.product.product_name %} 中的 SSH 密钥列表](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. 打开命令行。
2. 在后台启动 SSH 代理程序。
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. 找到并记录公钥指纹。
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
6. 比较 SSH 公钥列表与 `ssh-add` 命令的输出。 ![{% data variables.product.product_name %} 中的 SSH 密钥列表](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. 打开终端。
2. 在后台启动 SSH 代理程序。
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. 找到并记录公钥指纹。 如果使用的是 OpenSSH 6.7 或更早版本：
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  如果使用的是 OpenSSH 6.8 或更新版本：
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
6. 比较 SSH 公钥列表与 `ssh-add` 命令的输出。 ![{% data variables.product.product_name %} 中的 SSH 密钥列表](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

如果在 {% data variables.product.product_name %} 中未看到公钥，则需要[添加 SSH 密钥到 {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account) 并将其与您的计算机关联。

{% warning %}

**警告**：如果在 {% data variables.product.product_name %} 上看到您不熟悉的 SSH 密钥，请立即删除并联系 {% data variables.contact.contact_support %} 寻求进一步的帮助。 无法识别的公钥可能表示安全问题。 更多信息请参阅“[审查 SSH 密钥](/articles/reviewing-your-ssh-keys)”。

{% endwarning %}
