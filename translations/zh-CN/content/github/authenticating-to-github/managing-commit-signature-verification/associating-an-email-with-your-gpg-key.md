---
title: 将电子邮件与 GPG 密钥关联
intro: 'GPG 密钥必须 {% data variables.product.product_name %} 验证过与提交者身份匹配的电子邮件地址匹配。'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
{% note %}

如果使用的 GPG 密钥匹配提交者身份以及与 {% data variables.product.product_name %} 帐户关联的已验证电子邮件地址，则您可以开始对提交和标记签名。

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
4. 输入 `gpg --edit-key GPG key ID`，替换要使用的 GPG 密钥 ID。 在以下示例中，GPG 密钥 ID 是 `3AA5C34371567BD2`：
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. 输入 `gpg> adduid` 以添加用户 ID 详细信息。
  ```shell
  $ gpg> adduid
  ```
6. 按照提示提供您的真实姓名、电子邮件地址和任何注释。 您可以选择 `N`、`C` 或 `E` 来修改各个条目。 {% data reusables.gpg.private-email %} {% if currentVersion == "free-pro-team@latest" %} 更多信息请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address)”。{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. 输入 `O` 以确认选择。
8. 输入密钥的密码。
9. 输入 `gpg> save` 以保存更改
  ```shell
  $ gpg> save
  ```
10. 输入 `gpg --armor --export GPG key ID`，替换要使用的 GPG 密钥 ID。 在以下示例中，GPG 密钥 ID 是 `3AA5C34371567BD2`：
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Prints the GPG key, in ASCII armor format
  ```
11. [添加 GPG 密钥到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)以上传该 GPG 密钥。

### 延伸阅读

- "[检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)"
- "[生成新 GPG 密钥](/articles/generating-a-new-gpg-key)"
- "[在 GPG 密钥中使用经验证的电子邮件地址](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[添加新 GPG 密钥到 GitHub 帐户](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[对提交签名](/articles/signing-commits)"
- "[对标记签名](/articles/signing-tags)"
