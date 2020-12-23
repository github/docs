---
title: 检查现有 GPG 密钥
intro: '在生成 GPG 密钥之前，您可以检查是否有任何现有的 GPG 密钥。'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**注：**GPG 并未默认安装在 OS X 或 Windows 上。 要安装 GPG 命令行工具，请参阅 [GnuPG 的下载页面](https://www.gnupg.org/download/)。

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
3. 检查命令输出以查看是否有 GPG 密钥对。
    * 如果没有 GPG 密钥对，或者您不想使用任何可用于签名提交和标记的密钥对，则[生成新的 GPG 密钥](/articles/generating-a-new-gpg-key)。
    * 如果存在现有的 GPG 密钥对并且您要将其用于签名提交和标记，则[将 GPG 密钥添加到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)。

### 延伸阅读

* "[生成新 GPG 密钥](/articles/generating-a-new-gpg-key)"
* "[添加新 GPG 密钥到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[向 Git 告知您的签名密钥](/articles/telling-git-about-your-signing-key)"
* "[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)"
* "[对提交签名](/articles/signing-commits)"
* "[对标记签名](/articles/signing-tags)"
