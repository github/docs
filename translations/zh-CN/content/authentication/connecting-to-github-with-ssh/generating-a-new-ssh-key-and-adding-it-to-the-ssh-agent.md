---
title: 生成新 SSH 密钥并添加到 ssh-agent
intro: 检查现有 SSH 密钥后，您可以生成新 SSH 密钥以用于身份验证，然后将其添加到 ssh-agent。
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 生成新 SSH 密钥
---

## 关于 SSH 密钥密码

{% data reusables.ssh.about-ssh %} 更多信息请参阅“[关于 SSH](/authentication/connecting-to-github-with-ssh/about-ssh)”。

生成 SSH 密钥时，可以添加密码以进一步保护密钥。 无论何时使用密钥，都必须输入密码。 如果您的密钥具有密码，并且您不想在每次使用密钥时都输入密码，则可以将密钥添加到 SSH 代理。 SSH 代理管理您的 SSH 密钥并记住您的密码。

如果您还没有 SSH 密钥，则必须生成新 SSH 密钥用于身份验证。 如果不确定是否已经拥有 SSH 密钥，您可以检查现有密钥。 更多信息请参阅“[检查现有 SSH 密钥](/github/authenticating-to-github/checking-for-existing-ssh-keys)”。

如果要使用硬件安全密钥向 {% data variables.product.product_name %} 验证，则必须为硬件安全密钥生成新的 SSH 密钥。 使用密钥对进行身份验证时，您必须将硬件安全密钥连接到计算机。 更多信息请参阅 [OpenSSH 8.2 发行说明](https://www.openssh.com/txt/release-8.2)。

## 生成新 SSH 密钥

您可以在本地计算机上生成新的 SSH 密钥。 生成密钥后，可以将密钥添加到您在 {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 上的帐户，以便为通过 SSH 的 Git 操作启用身份验证。

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 粘贴下面的文本（替换为您的 {% data variables.product.product_name %} 电子邮件地址）。
   {%- ifversion ghae %}
    <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>" 
   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
   ```
   {% note %}

   **注：**如果您使用的是不支持 Ed25519 算法的旧系统，请使用以下命令：
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>"
   ```

   {% endnote %}
   {%- endif %}

   这将以提供的电子邮件地址为标签创建新 SSH 密钥。
   ```shell
   > Generating public/private <em>algorithm</em> key pair.
   ```
3. 提示您“Enter a file in which to save the key（输入要保存密钥的文件）”时，按 Enter 键。 这将接受默认文件位置。

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_<em>algorithm</em>): <em>[Press enter]</em>
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_<em>algorithm</em>):<em>[Press enter]</em>
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/<em>algorithm</em>): <em>[Press enter]</em>
   ```

   {% endlinux %}

4. 在提示时输入安全密码。 更多信息请参阅“[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)”。
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```

## 将 SSH 密钥添加到 ssh-agent

在向 ssh 代理添加新的 SSH 密钥以管理您的密钥之前，您应该检查现有 SSH 密钥并生成新的 SSH 密钥。 <span class="platform-mac">将 SSH 密钥添加到该代理时，应使用默认的 macOS `ssh-add` 命令，而不是使用通过 [macports](https://www.macports.org/), [homebrew](http://brew.sh/) 或某些其他外部来源安装的应用程序。</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. 如果您使用的是 macOS Sierra 10.12.2 或更高版本，则需要修改 `~/.ssh/config` 文件以自动将密钥加载到 ssh-agent 中并在密钥链中存储密码。

   * 首先，检查您的 `~/.ssh/config` 文件是否在默认位置。

     ```shell
     $ open ~/.ssh/config
     > The file /Users/<em>you</em>/.ssh/config does not exist.
     ```

   * 如果文件不存在，请创建该文件。

     ```shell
     $ touch ~/.ssh/config
     ```

   * 打开您的 `~/.ssh/config` 文件，然后修改文件以包含以下行。 如果您的 SSH 密钥文件与示例代码具有不同的名称或路径，请修改文件名或路径以匹配您当前的设置。

     ```
     Host *
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **注意：**

     - 如果您选择不向密钥添加密码，应该省略 `UseKeychain` 行。

     - 如果您看到 `Bad configuration option: usekeychain` 错误，请在配置的 `Host *` 部分另外添加一行。

       ```
       Host *
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. 将 SSH 私钥添加到 ssh-agent 并将密码存储在密钥链中。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
   ```
   {% note %}

   **注：**`-K` 选项位于 Apple 的 `ssh-add` 标准版本中，当您将 SSH 密钥添加到 ssh-agent 时，它会将密码存储在您的密钥链中。 如果选择不向密钥添加密码，请运行命令，而不使用 `-K` 选项。

   如果您没有安装 Apple 的标准版本，可能会收到错误消息。 有关解决此错误的详细信息，请参阅“[错误：ssh-add：非法选项 -- K](/articles/error-ssh-add-illegal-option-k)”。

   在 MacOS Monterey (12.0) 中， `-K` 和 `-A` 标志已弃用，分别由 `--apple-use-keychain` 和 `--apple-load-keychain` 标志所取代。

   {% endnote %}

4. 将 SSH 密钥添加到 {% data variables.product.product_name %} 上的帐户。 更多信息请参阅“[将新的 SSH 密钥添加到 {% data variables.product.prodname_dotcom %} 帐户](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)”。

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. 确保 ssh-agent 正在运行。 您可以根据“[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)”中的“自动启动 ssh-agent”说明，或者手动启动它：
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. 将 SSH 私钥添加到 ssh-agent。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. 将 SSH 密钥添加到 {% data variables.product.product_name %} 上的帐户。 更多信息请参阅“[将新的 SSH 密钥添加到 {% data variables.product.prodname_dotcom %} 帐户](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)”。

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. 将 SSH 私钥添加到 ssh-agent。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. 将 SSH 密钥添加到 {% data variables.product.product_name %} 上的帐户。 更多信息请参阅“[将新的 SSH 密钥添加到 {% data variables.product.prodname_dotcom %} 帐户](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)”。

{% endlinux %}

## 为硬件安全密钥生成新的 SSH 密钥

如果您使用 macOS 或 Linux， 在生成新的 SSH 密钥之前，您可能需要更新 SSH 客户端或安装新的 SSH 客户端。 更多信息请参阅“[错误：未知密钥类型](/github/authenticating-to-github/error-unknown-key-type)”。

1. 将硬件安全密钥插入计算机。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 粘贴下面的文本，将电子邮件地址替换为您的 {% data variables.product.product_name %} 帐户的电子邮件地址。
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "<em>your_email@example.com</em>"
   ```

   {%- ifversion not ghae %}
   {% note %}

   **注：**如果命令失败，并且您收到错误 `invalid format` 或 `feature not supported`，则表明您可能在使用不支持 Ed25519 算法的硬件安全密钥。 请输入以下命令。
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```

   {% endnote %}
   {%- endif %}
4. 出现提示时，请触摸硬件安全密钥上的按钮。
5. 当提示您“Enter a file in which to save the key（输入要保存密钥的文件）”时，按 Enter 接受默认文件位置。

   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):<em>[Press enter]</em>
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```

   {% endlinux %}

6. 当提示您输入密码时，按 **Enter**。
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```
7. 将 SSH 密钥添加到 {% data variables.product.prodname_dotcom %} 上的帐户。 更多信息请参阅“[将新的 SSH 密钥添加到 {% data variables.product.prodname_dotcom %} 帐户](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)”。
