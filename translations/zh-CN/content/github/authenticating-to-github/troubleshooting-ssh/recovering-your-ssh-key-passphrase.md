---
title: 恢复 SSH 密钥密码
intro: 如果您丢失 SSH 密钥密码，则根据您使用的操作系统，您可能可以恢复它，也可能需要生成新的 SSH 密钥密码。
redirect_from:
  - /articles/how-do-i-recover-my-passphrase/
  - /articles/how-do-i-recover-my-ssh-key-passphrase/
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

{% mac %}

如果您[使用 macOS 密钥链配置 SSH 密码](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain)，则能够恢复它。

1. 在 Finder 中，搜索 **Keychain Access** 应用程序。 ![Spotlight 搜索栏](/assets/images/help/setup/keychain-access.png)
2. 在 Keychain Access 中，搜索 **SSH**。
3. 双击 SSH 密钥的条目以打开一个新对话框。
4. 在左上角选择 **Show password（显示密码）**。 ![Keychain Access 对话框](/assets/images/help/setup/keychain_show_password_dialog.png)
5. 系统将提示您输入管理密码。 在 "Keychain Access" 对话框中输入该密码。
6. 此时将显示您的密码。

{% endmac %}

{% windows %}

如果您丢失 SSH 密钥密码，则无法进行恢复。 您需要[生成全新的 SSH 密钥对](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)或[切换到 HTTPS 克隆](/github/getting-started-with-github/managing-remote-repositories)，以便能够使用 GitHub 密码代替。

{% endwindows %}

{% linux %}

如果您丢失 SSH 密钥密码，则无法进行恢复。 您需要[生成全新的 SSH 密钥对](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)或[切换到 HTTPS 克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)，以便能够使用 GitHub 密码代替。

{% endlinux %}
