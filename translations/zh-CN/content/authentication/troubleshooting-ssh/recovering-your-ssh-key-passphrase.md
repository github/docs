---
title: 恢复 SSH 密钥密码
intro: 如果您丢失 SSH 密钥密码，则根据您使用的操作系统，您可能可以恢复它，也可能需要生成新的 SSH 密钥密码。
redirect_from:
  - /articles/how-do-i-recover-my-passphrase
  - /articles/how-do-i-recover-my-ssh-key-passphrase
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/troubleshooting-ssh/recovering-your-ssh-key-passphrase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Recover SSH key passphrase
ms.openlocfilehash: 28d768e81f3076898c23b2b1668314ae5573ec5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084559'
---
{% mac %}

如果[使用 macOS 密钥链配置 SSH 密码](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain)，则能够恢复它。

1. 在 Finder 中，搜索 Keychain Access 应用。
   ![Spotlight 搜索栏](/assets/images/help/setup/keychain-access.png)
2. 在 Keychain Access 中，搜索 SSH。
3. 双击 SSH 密钥的条目以打开一个新对话框。
4. 在左下角选择“显示密码”。
   ![“Keychain Access”对话框](/assets/images/help/setup/keychain_show_password_dialog.png)
5. 系统将提示您输入管理密码。 在 "Keychain Access" 对话框中输入该密码。
6. 此时将显示您的密码。

{% endmac %}

{% windows %}

如果您丢失 SSH 密钥密码，则无法进行恢复。 需要[生成全新的 SSH 密钥对](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)或[切换到 HTTPS 克隆](/github/getting-started-with-github/managing-remote-repositories)，以便能够改用 GitHub 密码。

{% endwindows %}

{% linux %}

如果您丢失 SSH 密钥密码，则无法进行恢复。 需要[生成全新的 SSH 密钥对](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)或[切换到 HTTPS 克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)，以便能够改用 GitHub 密码。

{% endlinux %}
