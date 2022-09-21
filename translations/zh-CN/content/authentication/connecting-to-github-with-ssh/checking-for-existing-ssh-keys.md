---
title: 检查现有 SSH 密钥
intro: 在生成 SSH 密钥之前，您可以检查是否有任何现有的 SSH 密钥。
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
ms.openlocfilehash: 4487e44b1cbba7038364e92f3194d5c3c06c505b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409105'
---
## 关于 SSH 密钥

可以使用 SSH 在 {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 上的存储库中执行 Git 操作。 有关详细信息，请参阅“[关于 SSH](/authentication/connecting-to-github-with-ssh/about-ssh)”。

如果有现有的 SSH 密钥，则可以使用该密钥通过 SSH 对 Git 操作进行身份验证。

## 检查现有 SSH 密钥

在生成新的 SSH 密钥之前，应该检查本地计算机是否存在现有密钥。

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 输入 `ls -al ~/.ssh` 以查看是否存在现有的 SSH 密钥。

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. 检查目录列表以查看是否已经有 SSH 公钥。 默认情况下，{% ifversion ghae %}{% data variables.product.product_name %} 的一个支持的公钥的文件名是 id_rsa.pub。{% else %}{% data variables.product.product_name %} 的一个支持的公钥的文件名是以下之一。
    - id_rsa.pub
    - id_ecdsa.pub
    - id_ed25519.pub{% endif %}

  {% tip %}

  提示：如果收到错误，指示 ~/.ssh 不存在，则表明默认位置中没有现有的 SSH 密钥对。 您可以在下一步中创建新的 SSH 密钥对。

  {% endtip %}

4. 生成新的 SSH 密钥或上传现有密钥。
    - 如果您没有受支持的公钥和私钥对，或者不希望使用任何可用的密钥对，请生成新的 SSH 密钥。
    - 如果你看到列出了要用于连接到 {% data variables.product.product_name %} 的现有公钥和私钥对（例如，id_rsa.pub 和 id_rsa），则可以将密钥添加到 ssh-代理 。

      有关生成新的 SSH 密钥或向 ssh-代理添加现有密钥的详细信息，请参阅“[生成新的 SSH 密钥并将其添加到 ssh-代理](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。”
