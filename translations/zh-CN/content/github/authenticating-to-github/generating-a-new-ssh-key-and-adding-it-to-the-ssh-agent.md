---
title: 生成新 SSH 密钥并添加到 ssh-agent
intro: 检查现有 SSH 密钥后，您可以生成新 SSH 密钥以用于身份验证，然后将其添加到 ssh-agent。
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

### About SSH key generation

If you don't already have an SSH key, you must generate a new SSH key to use for authentication. If you're unsure whether you already have an SSH key, you can check for existing keys. For more information, see "[Checking for existing SSH keys](/github/authenticating-to-github/checking-for-existing-ssh-keys)."

{% if currentVersion == "free-pro-team@latest" %}

If you want to use a hardware security key to authenticate to {% data variables.product.product_name %}, you must generate a new SSH key for your hardware security key. You must connect your hardware security key to your computer when you authenticate with the key pair. For more information, see the [OpenSSH 8.2 release notes](https://www.openssh.com/txt/release-8.2).

{% endif %}
If you don't want to reenter your passphrase every time you use your SSH key, you can add your key to the SSH agent, which manages your SSH keys and remembers your passphrase.

### 生成新 SSH 密钥

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 粘贴下面的文本（替换为您的 {% data variables.product.product_name %} 电子邮件地址）。
  ```shell
  $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **注：**如果您使用的是不支持 Ed25519 算法的旧系统，请使用以下命令：
  ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  {% endnote %}
  这将创建以所提供的电子邮件地址为标签的新 SSH 密钥。
  ```shell
  > Generating public/private ed25519 key pair.
  ```
3. 提示您“Enter a file in which to save the key（输入要保存密钥的文件）”时，按 Enter 键。 这将接受默认文件位置。

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_ed25519): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_ed25519):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_ed25519): <em>[Press enter]</em>
  ```

  {% endlinux %}

4. 在提示时输入安全密码。 For more information, see ["Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)."
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### 将 SSH 密钥添加到 ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. <span class="platform-mac">将 SSH 密钥添加到该代理时，应使用默认的 macOS `ssh-add` 命令，而不是使用通过 [macports](https://www.macports.org/), [homebrew](http://brew.sh/) 或某些其他外部来源安装的应用程序。</span>

{% mac %}

1. {% data reusables.command_line.start_ssh_agent %}

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
        IdentityFile ~/.ssh/id_ed25519
      ```

     {% note %}

     **注意：** 如果您选择不向密钥添加密码，应该省略 `UseKeychain` 行。

     {% endnote %}

      {% mac %}
      {% note %}

      **注意：**如果您看到如下错误

      ```
      /Users/USER/.ssh/config: line 16: Bad configuration option: usekeychain
      ```

      向 `Host *` 部分添加一个额外的配置行：

      ```
      Host *
        IgnoreUnknown UseKeychain
      ```

      {% endnote %}
      {% endmac %}

3. 将 SSH 私钥添加到 ssh-agent 并将密码存储在密钥链中。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **注：**`-K` 选项位于 Apple 的 `ssh-add` 标准版本中，当您将 ssh 密钥添加到 ssh-agent 时，它会将密码存储在您的密钥链中。 如果选择不向密钥添加密码，请运行命令，而不使用 `-K` 选项。

  如果您没有安装 Apple 的标准版本，可能会收到错误消息。 有关解决此错误的详细信息，请参阅“[错误：ssh-add：非法选项 -- K](/articles/error-ssh-add-illegal-option-k)”。

  {% endnote %}

4. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. 确保 ssh-agent 正在运行。 您可以根据“[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)”中的“自动启动 ssh-agent”说明，或者手动启动它：
  ```shell
  # start the ssh-agent in the background
  $ eval `ssh-agent -s`
  > Agent pid 59566
  ```

2. 将 SSH 私钥添加到 ssh-agent。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endwindows %}

{% linux %}

1. {% data reusables.command_line.start_ssh_agent %}

  In some Linux environments, you need root access to run the command:

  ```
  $ sudo -s -H
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```

2. 将 SSH 私钥添加到 ssh-agent。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1"  %}
### Generating a new SSH key for a hardware security key

If you are using macOS or Linux, you may need to update your SSH client or install a new SSH client prior to generating a new SSH key. For more information, see "[Error: Unknown key type](/github/authenticating-to-github/error-unknown-key-type)."

1. Insert your hardware security key into your computer.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Paste the text below, substituting in the email address for your account on {% data variables.product.product_name %}.
  ```shell
  $ ssh-keygen -t ed25519-sk -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **Note:** If the command fails and you receive the error `invalid format` or `feature not supported,` you may be using a hardware security key that does not support the Ed25519 algorithm. Enter the following command instead.
  ```shell
   $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
  ```

  {% endnote %}
4. When you are prompted, touch the button on your hardware security key.
5. When you are prompted to "Enter a file in which to save the key," press Enter to accept the default file location.

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_ed25519_sk): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_ed25519_sk):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_ed25519_sk): <em>[Press enter]</em>
  ```

  {% endlinux %}

6. When you are prompted to type a passphrase, press **Enter**.
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```
7. Add the SSH key to your account on {% data variables.product.prodname_dotcom %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endif %}

### 延伸阅读

- "[关于 SSH](/articles/about-ssh)"
- "[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
