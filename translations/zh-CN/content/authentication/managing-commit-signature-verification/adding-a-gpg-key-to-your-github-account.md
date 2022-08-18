---
title: Adding a GPG key to your GitHub account
intro: '要在 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上配置帐户以使用新的（或现有的）GPG 密钥，还需要将密钥添加到帐户。'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
---

## About addition of GPG keys to your account

To sign commits associated with your account on {% data variables.product.product_name %}, you can add a public GPG key to your personal account. Before you add a key, you should check for existing keys. If you don't find any existing keys, you can generate and copy a new key. For more information, see "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)" and "[Generating a new GPG key](/articles/generating-a-new-gpg-key)."

You can add multiple public keys to your account on {% data variables.product.product_name %}. 由任何相应私钥签名的提交将显示为已验证。 如果删除公钥，则由相应私钥签名的任何提交将不再显示为已验证。

{% ifversion upload-expired-or-revoked-gpg-key %}
To verify as many of your commits as possible, you can add expired and revoked keys. If the key meets all other verification requirements, commits that were previously signed by any of the corresponding private keys will show as verified and indicate that their signing key is expired or revoked.

![A verified commit whose key expired](/assets/images/help/settings/gpg-verified-with-expired-key.png)
{% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

When verifying a signature, {% data variables.product.product_name %} extracts the signature and attempts to parse its key ID. The key ID is then matched with keys added to {% data variables.product.product_name %}. Until a matching GPG key is added to {% data variables.product.product_name %}, it cannot verify your signatures.

## 添加 GPG 密钥

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. 单击 **New GPG key（新 GPG 密钥）**。 ![GPG 密钥按钮](/assets/images/help/settings/gpg-add-gpg-key.png)
4. 在 "Key"（密钥）字段中，粘贴在[生成 GPG 密钥](/articles/generating-a-new-gpg-key)时复制的 GPG 密钥。 ![密钥字段](/assets/images/help/settings/gpg-key-paste.png)
5. 单击 **Add GPG key（添加 GPG 密钥）**。 ![添加密钥按钮](/assets/images/help/settings/gpg-add-key.png)
6. 要确认操作，请输入您的 {% data variables.product.product_name %} 密码。

{% ifversion upload-expired-or-revoked-gpg-key %}
{% else %}
## 更新过期的 GPG 密钥

验证签名时，{% data variables.product.product_name %} 会检查密钥是否已撤销或过期。 如果您的签名密钥已撤销或过期，则 {% data variables.product.product_name %} 无法验证您的签名。

If your key is expired, you must [update its expiration](https://www.gnupg.org/gph/en/manual.html#AEN329), export the new key, delete the expired key in your account on {% data variables.product.product_name %}, and add the new key to your account as described above. 只要密钥满足所有其他验证要求，您以前的提交和标记就会显示为已验证。

如果您的密钥已撤销，请使用主密钥或未撤销的其他密钥为提交签名。

如果您的密钥无效且您没有在密钥集中使用其他有效的密钥，而是使用一组新凭据生成新的 GPG 密钥，则使用已撤销或过期的密钥进行的提交将仍显示为未验证。 Also, your new credentials will not be able to re-sign or verify your old commits and tags.
{% endif %}

## 延伸阅读

- "[检查现有 GPG 密钥](/articles/checking-for-existing-gpg-keys)"
- "[生成新 GPG 密钥](/articles/generating-a-new-gpg-key)"
- "[向 Git 告知您的签名密钥](/articles/telling-git-about-your-signing-key)"
- "[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)"
- "[使用 GPG 密钥签名提交和标记](/articles/signing-commits-and-tags-using-gpg)"
- “[关于提交签名验证](/articles/about-commit-signature-verification)”
