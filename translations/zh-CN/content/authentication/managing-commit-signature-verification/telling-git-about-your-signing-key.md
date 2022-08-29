---
title: 将您的签名密钥告知 Git
intro: 'To sign commits locally, you need to inform Git that there''s a GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or X.509 key you''d like to use.'
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
shortTitle: 将您的签名密钥告诉 Git
---

{% mac %}

## 将您的 GPG 密钥告知 Git

如果您使用与您的提交者身份以及 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上帐户关联的已验证电子邮件地址相匹配的 GPG 密钥，则可以开始对提交和标签进行签名。

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
1. （可选）若要在需要时提示您输入 PIN 或密码，请安装 `pinentry-mac`。 例如，使用 [Homebrew](https://brew.sh/)：
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## 将您的 GPG 密钥告知 Git

如果您使用与您的提交者身份以及 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上帐户关联的已验证电子邮件地址相匹配的 GPG 密钥，则可以开始对提交和标签进行签名。

{% note %}

如果您没有与提交者身份匹配的 GPG 密钥，则需要将电子邮件与现有密钥关联。 更多信息请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

{% endnote %}

如果您有多个 GPG 密钥，则需要告知 Git 要使用哪一个。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}

{% endwindows %}

{% linux %}

## 将您的 GPG 密钥告知 Git

如果您使用与您的提交者身份以及 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上帐户关联的已验证电子邮件地址相匹配的 GPG 密钥，则可以开始对提交和标签进行签名。

{% note %}

如果您没有与提交者身份匹配的 GPG 密钥，则需要将电子邮件与现有密钥关联。 更多信息请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

{% endnote %}

如果您有多个 GPG 密钥，则需要告知 Git 要使用哪一个。

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. 要将 GPG 密钥添加到您的 `.bashrc` 配置文件中，请运行以下命令：
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %}
{% ifversion ssh-commit-verification %}

## Telling Git about your SSH key

You can use an existing SSH key to sign commits and tags, or generate a new one specifically for signing. 更多信息请参阅“[生成新的 SSH 密钥并添加到 ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.configure-ssh-signing %}
{% data reusables.gpg.copy-ssh-public-key %}
{% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## 延伸阅读

- "[Adding a new SSH key to your GitHub account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."
- "[对提交签名](/articles/signing-commits)"
- "[对标记签名](/articles/signing-tags)"
