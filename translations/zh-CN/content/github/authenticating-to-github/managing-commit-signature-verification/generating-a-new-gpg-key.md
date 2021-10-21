---
title: 生成新 GPG 密钥
intro: 如果没有现有的 GPG 密钥，您可以生成新的 GPG 密钥以用于签名提交和标记。
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

### 生成 GPG 密钥

{% note %}

**注：**在生成新 GPG 密钥之前，请确保已验证您的电子邮件地址。 如果尚未验证电子邮件地址，您将无法使用 GPG 对提交和标记签名。{% if currentVersion == "free-pro-team@latest" %} 更多信息请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”。{% endif %}

{% endnote %}

1. 下载并安装适用于您的操作系统的 [GPG 命令行工具](https://www.gnupg.org/download/)。 一般来说，我们建议安装适用于您的操作系统的最新版本。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 生成 GPG 密钥对。 由于 GPG 有多个版本，因此您可能需要查询相关的[_手册页_](https://en.wikipedia.org/wiki/Man_page)以找到适当的密钥生成命令。 密钥必须使用 RSA。
    - 如果您使用的是 2.1.17 或更高版本，请粘贴以下文本以生成 GPG 密钥对。
      ```shell
      $ gpg --full-generate-key
      ```
    - 如果使用的不是 2.1.17 或更高版本，则 `gpg --full-generate-key` 命令无效。 请粘贴以下文本并跳到第 6 步。
      ```shell
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. 在提示时，指定要生成的密钥类型，或按 `Enter` 键接受默认的 `RSA and RSA`。
5. 输入所需的密钥长度。 密钥必须至少是 `4096` 位。
6. 输入密钥的有效时长。 按 `Enter` 键将指定默认选择，表示该密钥不会过期。
7. 验证您的选择是否正确。
8. 输入您的用户 ID 信息。

  {% note %}

  **注：**要求您输入电子邮件地址时，请确保输入您 GitHub 帐户的经验证电子邮件地址。 {% data reusables.gpg.private-email %} {% if currentVersion == "free-pro-team@latest" %}  更多信息请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”和“[设置提交电子邮件地址](/articles/setting-your-commit-email-address)”。{% endif %}

  {% endnote %}

9. 输入安全密码。
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
10. 粘贴下面的文本（替换为您要使用的 GPG 密钥 ID）。 在此例中，GPG 密钥 ID 是 `3AA5C34371567BD2`：
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Prints the GPG key ID, in ASCII armor format
  ```
11. 复制 GPG 密钥，从 `-----BEGIN PGP PUBLIC KEY BLOCK-----` 开始，到 `-----END PGP PUBLIC KEY BLOCK-----` 结束。
12. [将 GPG 密钥添加到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)。

### 延伸阅读

* "[检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)"
* "[添加新 GPG 密钥到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[向 Git 告知您的签名密钥](/articles/telling-git-about-your-signing-key)"
* "[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)"
* "[对提交签名](/articles/signing-commits)"
* "[对标记签名](/articles/signing-tags)"
