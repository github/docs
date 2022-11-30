---
title: 检查现有 SSH 密钥
intro: 在生成 SSH 密钥之前，您可以检查是否有任何现有的 SSH 密钥。
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
{% data reusables.ssh.dsa-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 输入 `ls -al ~/.ssh` 以查看是否存在现有 SSH 密钥：

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```
3. 检查目录列表以查看是否已经有 SSH 公钥。 默认情况下，公钥的文件名是以下之一：
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*

如果您没有现有的公钥和私钥对，或者不想使用任何可用于连接到 {% data variables.product.product_name %} 的密钥对，则[生成新的 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。

如果您看到列出的现有公钥和私钥对（例如 *id_rsa.pub* 和 *id_rsa*），并且您希望使用它们连接到 {% data variables.product.product_name %}，则可以[将 SSH 密钥添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent)。

{% tip %}

**提示：**如果您收到错误“*~/.ssh* 不存在”，不要担心！ 我们在[生成新的 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)时会创建它。

{% endtip %}
