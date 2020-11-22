---
title: 生成新 SSH 密钥并添加到 ssh-agent
intro: '检查现有 SSH 密钥后，您可以生成新 SSH 密钥以用于身份验证，然后将其添加到 ssh-agent。'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

如果您还没有 SSH 密钥，则必须[生成新 SSH 密钥](#generating-a-new-ssh-key)。 如果您不确定是否已有 SSH 密钥，请检查[现有密钥](/articles/checking-for-existing-ssh-keys)。

如果不想在每次使用 SSH 密钥时重新输入密码，您可以[将密钥添加到 SSH 代理](#adding-your-ssh-key-to-the-ssh-agent)，让它管理您的 SSH 密钥并记住您的密码。

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

4. 在提示时输入安全密码。 更多信息请参阅[“使用 SSH 密钥密码”](/articles/working-with-ssh-key-passphrases)。
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### 将 SSH 密钥添加到 ssh-agent

将新 SSH 密钥添加到 ssh-agent 以管理密钥之前，应[检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)并[生成新 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)。 <span class="platform-mac">将 SSH 密钥添加到该代理时，应使用默认的 macOS `ssh-add` 命令，而不是使用通过 [macports](https://www.macports.org/), [homebrew](http://brew.sh/) 或某些其他外部来源安装的应用程序。</span>

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

    * 打开 `~/.ssh/config` 文件，然后修改该文件，如果未使用 `id_ed25519` 键的默认位置和名称，则替换 `~/.ssh/id_ed25519`。

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_ed25519
      ```

3. 将 SSH 私钥添加到 ssh-agent 并将密码存储在密钥链中。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **注：**`-K` 选项位于 Apple 的 `ssh-add` 标准版本中，当您将 ssh 密钥添加到 ssh-agent 时，它会将密码存储在您的密钥链中。

  如果您没有安装 Apple 的标准版本，可能会收到错误消息。 有关解决此错误的详细信息，请参阅“[错误：ssh-add：非法选项 -- K](/articles/error-ssh-add-illegal-option-k)”。

  {% endnote %}

4. [将 SSH 密钥添加到 GitHub 帐户](/articles/adding-a-new-ssh-key-to-your-github-account)。

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. 确保 ssh-agent 正在运行。 您可以根据“[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)”中的“自动启动 ssh-agent”说明，或者手动启动它：
  ```shell
  # 在后台启动 ssh-agent
  $ eval $(ssh-agent -s)
  > Agent pid 59566
  ```

2. 将 SSH 私钥添加到 ssh-agent。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. [将 SSH 密钥添加到 GitHub 帐户](/articles/adding-a-new-ssh-key-to-your-github-account)。

{% endwindows %}

{% linux %}

1. {% data reusables.command_line.start_ssh_agent %}

2. 将 SSH 私钥添加到 ssh-agent。 {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. [将 SSH 密钥添加到 GitHub 帐户](/articles/adding-a-new-ssh-key-to-your-github-account)。

{% endlinux %}

### 延伸阅读

- "[关于 SSH](/articles/about-ssh)"
- "[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
