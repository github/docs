---
title: 将您的签名密钥告知 Git
intro: '要在本地对提交进行签名，需要向 Git 通知你要使用的 GPG{% ifversion ssh-commit-verification %}、SSH{% endif %} 或 X.509 密钥。'
redirect_from:
  - /articles/telling-git-about-your-gpg-key
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
ms.openlocfilehash: d70911bdf3ff5de93537f7c9acb1374a4f2c90e3
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179947'
---
{% mac %}

## 将您的 GPG 密钥告知 Git

如果您使用与您的提交者身份以及 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上帐户关联的已验证电子邮件地址相匹配的 GPG 密钥，则可以开始对提交和标签进行签名。

{% note %}

如果您没有与提交者身份匹配的 GPG 密钥，则需要将电子邮件与现有密钥关联。 有关详细信息，请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

{% endnote %}

如果您有多个 GPG 密钥，则需要告知 Git 要使用哪一个。

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. 如果没有使用 GPG 套件，请在 `zsh` shell 中运行以下命令，将 GPG 密钥添加到 `.zshrc` 文件（如果存在）或 `.zprofile` 文件：
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  或者，如果使用 `bash` shell，请运行以下命令：
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. （可选）若要在需要时提示你输入 PIN 或密码，请安装 `pinentry-mac`。 例如，使用 [Homebrew](https://brew.sh/)：
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## 将您的 GPG 密钥告知 Git

如果您使用与您的提交者身份以及 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上帐户关联的已验证电子邮件地址相匹配的 GPG 密钥，则可以开始对提交和标签进行签名。

{% note %}

如果您没有与提交者身份匹配的 GPG 密钥，则需要将电子邮件与现有密钥关联。 有关详细信息，请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

{% endnote %}

如果您有多个 GPG 密钥，则需要告知 Git 要使用哪一个。

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## 将您的 GPG 密钥告知 Git

如果您使用与您的提交者身份以及 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} 上帐户关联的已验证电子邮件地址相匹配的 GPG 密钥，则可以开始对提交和标签进行签名。

{% note %}

如果您没有与提交者身份匹配的 GPG 密钥，则需要将电子邮件与现有密钥关联。 有关详细信息，请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

{% endnote %}

如果您有多个 GPG 密钥，则需要告知 Git 要使用哪一个。

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. 若要将 GPG 密钥添加到 `.bashrc` 启动文件，请运行以下命令：
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %} {% ifversion ssh-commit-verification %}

## 将 SSH 密钥告知 Git

可以使用现有 SSH 密钥对提交和标记进行签名，或生成专用于签名的新密钥。 有关详细信息，请参阅“[生成新的 SSH 密钥并将其添加到 ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-ssh-signing %} {% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## 延伸阅读

- “[为 GitHub 帐户添加新的 SSH 密钥](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)”。
- [对提交签名](/articles/signing-commits)
- [对标记签名](/articles/signing-tags)
