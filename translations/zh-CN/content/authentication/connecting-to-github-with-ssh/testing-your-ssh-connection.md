---
title: 测试 SSH 连接
intro: '设置 SSH 密钥并将其添加到您在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上的帐户后，您可以测试连接。'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
ms.openlocfilehash: 7724c5939b319748f270db2f190a6df825b0bb4f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146338971'
---
测试 SSH 连接之前，您应已完成以下各项：
- [检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)
- [生成新 SSH 密钥](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [为 GitHub 帐户添加新的 SSH 密钥](/articles/adding-a-new-ssh-key-to-your-github-account)

测试连接时，您将需要使用密码（即您之前创建的 SSH 密钥密码）验证此操作。 有关使用 SSH 密钥密码的详细信息，请参阅“[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)”。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 输入以下内容：
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  您可能会看到类似如下的警告：

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. 验证所看到消息中的指纹是否与 {% ifversion fpt or ghec %}[{% data variables.product.prodname_dotcom %} 的公钥指纹](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %}企业的公钥指纹{% endif %}匹配。 如果是，则键入 `yes`：
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  你可能会看到此错误消息：
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  这是某些 Linux 发行版的已知问题。 有关详细信息，请参阅“[错误：代理承认没有签名](/articles/error-agent-admitted-failure-to-sign)”。

  {% endlinux %}

   {% note %}

   注意：远程命令应退出，并显示代码 1。

   {% endnote %}

4. 验证生成的消息包含您的用户名。 如果收到“权限被拒绝”消息，请参阅“[错误：权限被拒绝（公钥）](/articles/error-permission-denied-publickey)”。
