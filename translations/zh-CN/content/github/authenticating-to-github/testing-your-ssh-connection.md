---
title: 测试 SSH 连接
intro: '设置 SSH 密钥并将其添加到您的 {% data variables.product.product_name %} 帐户后，您可以测试连接。'
redirect_from:
  - /articles/testing-your-ssh-connection
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

测试 SSH 连接之前，您应已完成以下各项：
- [检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)
- [生成新 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [新增 SSH 密钥到 GitHub 帐户](/articles/adding-a-new-ssh-key-to-your-github-account)

测试连接时，您将需要使用密码（即您之前创建的 SSH 密钥密码）验证此操作。 有关使用 SSH 密钥密码的更多信息，请参阅“[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)”。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 输入以下内容：
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  您可能会看到类似如下的警告：

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
  > Are you sure you want to continue connecting (yes/no)?
  ```

  或类似如下：

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. 验证您看到的消息中的指纹匹配步骤 2 中的消息之一，然后输入 `yes`：
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  您可能会看到以下错误消息：
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  这是某些 Linux 发行版的已知问题。 更多信息请参阅[“错误：代理承认没有签署”](/articles/error-agent-admitted-failure-to-sign)。

  {% endlinux %}

4. 验证生成的消息包含您的用户名。 如果收到“权限被拒绝”消息，请参阅[“错误：权限被拒绝（公钥）”](/articles/error-permission-denied-publickey)。
