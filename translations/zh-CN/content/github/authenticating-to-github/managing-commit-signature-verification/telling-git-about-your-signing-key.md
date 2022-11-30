---
title: 将您的签名密钥告知 Git
intro: 要在本地对提交签名，您需要通知 Git 您想要使用的 GPG 或 X.509 密钥。
redirect_from:
  - /articles/telling-git-about-your-gpg-key/
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
{% mac %}

### 将您的 GPG 密钥告知 Git

如果使用的 GPG 密钥匹配提交者身份以及与 {% data variables.product.product_name %} 帐户关联的已验证电子邮件地址，则您可以开始对提交和标记签名。

{% note %}

如果您没有与提交者身份匹配的 GPG 密钥，则需要将电子邮件与现有密钥关联。 更多信息请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

{% endnote %}

如果您有多个 GPG 密钥，则需要告知 Git 要使用哪一个。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. 如果您使用的不是 GPG 套件， 在 `zsh` shell 中运行以下命令将GPG 密钥添加到您的 `shrc` 文件或 `.zprofile` 文件（如果存在）：
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  或者，如果您使用 `bash` shell，则运行皮命令：
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```

{% data reusables.gpg.x-509-key %}

{% endmac %}

{% windows %}

### 将您的 GPG 密钥告知 Git

如果使用的 GPG 密钥匹配提交者身份以及与 {% data variables.product.product_name %} 帐户关联的已验证电子邮件地址，则您可以开始对提交和标记签名。

{% note %}

如果您没有与提交者身份匹配的 GPG 密钥，则需要将电子邮件与现有密钥关联。 更多信息请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

{% endnote %}

如果您有多个 GPG 密钥，则需要告知 Git 要使用哪一个。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}

{% data reusables.gpg.x-509-key %}

{% endwindows %}

{% linux %}

{% note %}

**注：**Linux 上不支持 X.509 密钥。 您可配置 gpgsm 以提供加密和签名服务，但 {% data variables.product.product_name %} 目前不支持此功能。 更多信息请参阅 GnuPG 文档中的 [gpgsm](https://www.gnupg.org/documentation/manuals/gnupg/Invoking-GPGSM.html) 主题。

{% endnote %}

### 将您的 GPG 密钥告知 Git

如果使用的 GPG 密钥匹配提交者身份以及与 {% data variables.product.product_name %} 帐户关联的已验证电子邮件地址，则您可以开始对提交和标记签名。

{% note %}

如果您没有与提交者身份匹配的 GPG 密钥，则需要将电子邮件与现有密钥关联。 更多信息请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

{% endnote %}

如果您有多个 GPG 密钥，则需要告知 Git 要使用哪一个。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. 要将 GPG 密钥添加到您的 bash 配置文件中，请运行以下命令：
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
  {% note %}

  **注：**如果您没有 `.bash_profile`，此命令会将 GPG 密钥添加到 `.profile`。

  {% endnote %}

{% endlinux %}

### 延伸阅读

- "[检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)"
- "[生成新 GPG 密钥](/articles/generating-a-new-gpg-key)"
- "[在 GPG 密钥中使用经验证的电子邮件地址](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[添加新 GPG 密钥到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)"
- "[对提交签名](/articles/signing-commits)"
- "[对标记签名](/articles/signing-tags)"
